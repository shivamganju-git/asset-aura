import { createPool } from '@vercel/postgres';

const pool = createPool({
  connectionString: process.env.DATABASE_URL || process.env.POSTGRES_URL,
});

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';

// Verify admin authorization for privileged endpoints (GET, DELETE)
function isAuthorized(req) {
  const authHeader = req.headers['authorization'] || '';
  if (authHeader.startsWith('Bearer ')) {
    return authHeader.slice(7).trim() === ADMIN_PASSWORD;
  }
  if (req.headers['x-admin-key'] === ADMIN_PASSWORD) {
    return true;
  }
  const queryAuth = req.query?.auth;
  if (queryAuth === ADMIN_PASSWORD) {
    return true;
  }
  const bodyAuth = req.body?.auth;
  if (bodyAuth === ADMIN_PASSWORD) {
    return true;
  }
  return false;
}

// In-memory rate limiting map per client IP (resets across cold starts)
const ipSubmissions = new Map();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip) {
  if (!ip || ip === 'unknown') return false;
  const now = Date.now();
  const history = (ipSubmissions.get(ip) || []).filter(t => now - t < RATE_LIMIT_WINDOW_MS);
  if (history.length >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }
  history.push(now);
  ipSubmissions.set(ip, history);
  return false;
}

// Spam & Bot detection engine
function evaluateSpam({ name, phone, email, hp_val, type }) {
  // 1. Honeypot trap: if hidden field is filled, it's 100% a bot
  if (hp_val && typeof hp_val === 'string' && hp_val.trim().length > 0) {
    return { isSpam: true, shadowban: true, reason: 'honeypot_triggered' };
  }

  // 2. Type whitelist validation
  const allowedTypes = ['consultation', 'demat', 'partner', 'contact'];
  if (!type || typeof type !== 'string' || !allowedTypes.includes(type.trim().toLowerCase())) {
    return { isSpam: true, shadowban: true, reason: 'invalid_type' };
  }

  // 3. Indian Phone number check:
  // Must normalize to 10 digits starting with 6, 7, 8, or 9
  const cleanDigits = (phone || '').toString().replace(/\D/g, '');
  let normalizedPhone = cleanDigits;
  if (cleanDigits.length === 12 && cleanDigits.startsWith('91')) {
    normalizedPhone = cleanDigits.slice(2);
  } else if (cleanDigits.length === 11 && cleanDigits.startsWith('0')) {
    normalizedPhone = cleanDigits.slice(1);
  }

  if (!/^[6-9]\d{9}$/.test(normalizedPhone)) {
    // If it's a random 10-digit number like US area code (334, 717, 725, 593), shadowban
    const isForeignOrBot = cleanDigits.length === 10 && !/^[6-9]/.test(cleanDigits);
    return {
      isSpam: true,
      shadowban: isForeignOrBot,
      reason: 'invalid_phone_format',
      errorMessage: 'Please enter a valid 10-digit mobile number starting with 6, 7, 8, or 9.'
    };
  }

  // 4. Name sanity check
  if (!name || typeof name !== 'string') {
    return { isSpam: true, shadowban: false, reason: 'missing_name', errorMessage: 'Please enter your name.' };
  }

  const trimmedName = name.trim();
  if (trimmedName.length < 2 || trimmedName.length > 70) {
    return { isSpam: true, shadowban: false, reason: 'name_length', errorMessage: 'Please enter a valid full name.' };
  }

  // Detect links / HTML injection in name
  if (/https?:\/\/|<|>|www\./i.test(trimmedName)) {
    return { isSpam: true, shadowban: true, reason: 'link_in_name' };
  }

  // Bot entropy check: random alternating casing inside words (e.g. cuPnRcxBFtBAjfLe)
  const words = trimmedName.split(/\s+/);
  for (const word of words) {
    if (word.length >= 7) {
      let mixedTransitions = 0;
      for (let i = 0; i < word.length - 1; i++) {
        const isLower = word[i] >= 'a' && word[i] <= 'z';
        const isUpper = word[i + 1] >= 'A' && word[i + 1] <= 'Z';
        if (isLower && isUpper) mixedTransitions++;
      }
      if (mixedTransitions >= 2) {
        return { isSpam: true, shadowban: true, reason: 'gibberish_name_casing' };
      }
    }
  }

  // 5. Email check (if provided)
  let cleanEmail = null;
  if (email && typeof email === 'string' && email.trim().length > 0) {
    const trimmedEmail = email.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      return { isSpam: true, shadowban: false, reason: 'invalid_email', errorMessage: 'Please enter a valid email address.' };
    }

    // Dot-abuse check (e.g. a.x.i.c.iru.w.u.g.o.8.4@gmail.com)
    const [userPart] = trimmedEmail.split('@');
    const dotMatches = userPart.match(/\./g);
    if (dotMatches && dotMatches.length > 3) {
      return { isSpam: true, shadowban: true, reason: 'dot_abuse_email' };
    }
    cleanEmail = trimmedEmail;
  }

  return {
    isSpam: false,
    cleanName: trimmedName,
    cleanPhone: normalizedPhone,
    cleanEmail,
    cleanType: type.trim().toLowerCase()
  };
}

export default async function handler(req, res) {
  // CORS configuration
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization, x-admin-key'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Table setup
  try {
    await pool.sql`
      CREATE TABLE IF NOT EXISTS leads (
        id SERIAL PRIMARY KEY,
        type VARCHAR(255) NOT NULL,
        name VARCHAR(255) NOT NULL,
        phone VARCHAR(255) NOT NULL,
        email VARCHAR(255),
        extra_data JSONB,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;
  } catch (error) {
    console.error("Error creating table:", error);
  }

  // POST: Create / Submit Lead
  if (req.method === 'POST') {
    const clientIp = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.socket?.remoteAddress || 'unknown';

    // Rate Limiting
    if (isRateLimited(clientIp)) {
      return res.status(429).json({ error: 'Too many requests. Please wait a few minutes before trying again.' });
    }

    const { type, name, phone, email, extraData, hp_val } = req.body || {};

    const evaluation = evaluateSpam({ name, phone, email, hp_val, type });

    if (evaluation.isSpam) {
      // If shadowbanned: return success so bots don't adapt, but DO NOT save to database
      if (evaluation.shadowban) {
        console.warn(`[SPAM SHADOWBANNED] IP: ${clientIp}, reason: ${evaluation.reason}, name: ${name}`);
        return res.status(200).json({ 
          id: 99999, 
          message: 'Lead captured successfully' 
        });
      }

      // Normal user validation error
      return res.status(400).json({ error: evaluation.errorMessage || 'Invalid submission data' });
    }

    try {
      const extraDataJson = extraData ? JSON.stringify(extraData) : null;

      const result = await pool.sql`
        INSERT INTO leads (type, name, phone, email, extra_data)
        VALUES (${evaluation.cleanType}, ${evaluation.cleanName}, ${evaluation.cleanPhone}, ${evaluation.cleanEmail}, ${extraDataJson})
        RETURNING id;
      `;

      return res.status(201).json({
        id: result.rows[0].id,
        message: 'Lead captured successfully'
      });
    } catch (error) {
      console.error('Error saving lead:', error);
      return res.status(500).json({ error: 'Internal server error', details: error.message });
    }
  }

  // GET: Fetch Leads (PROTECTED)
  if (req.method === 'GET') {
    if (!isAuthorized(req)) {
      return res.status(401).json({ error: 'Unauthorized: Admin access required' });
    }

    try {
      const { rows } = await pool.sql`SELECT * FROM leads ORDER BY updated_at DESC`;

      const parsedLeads = rows.map(lead => ({
        id: lead.id,
        type: lead.type,
        name: lead.name,
        phone: lead.phone,
        email: lead.email,
        extraData: lead.extra_data,
        createdAt: lead.updated_at
      }));

      return res.status(200).json(parsedLeads);
    } catch (error) {
      console.error('Error fetching leads:', error);
      return res.status(500).json({ error: 'Internal server error', details: error.message });
    }
  }

  // DELETE: Delete single lead or purge spam leads (PROTECTED)
  if (req.method === 'DELETE') {
    if (!isAuthorized(req)) {
      return res.status(401).json({ error: 'Unauthorized: Admin access required' });
    }

    const body = req.body || {};
    const query = req.query || {};
    const action = body.action || query.action;
    const id = body.id || query.id;

    try {
      if (action === 'purge_spam') {
        // Delete all leads that have UNKNOWN type, non-standard types, or invalid phone numbers
        const result = await pool.sql`
          DELETE FROM leads 
          WHERE 
            type ILIKE '%unknown%' 
            OR type NOT IN ('consultation', 'demat', 'partner', 'contact')
            OR phone !~ '^[6-9][0-9]{9}$'
            OR email ILIKE '%.%.%.%@%'
        `;
        return res.status(200).json({ 
          message: 'Spam leads purged successfully', 
          deletedCount: result.rowCount 
        });
      }

      if (!id) {
        return res.status(400).json({ error: 'Lead ID is required for deletion' });
      }

      const parsedId = parseInt(id, 10);
      if (isNaN(parsedId)) {
        return res.status(400).json({ error: 'Invalid lead ID' });
      }

      const result = await pool.sql`
        DELETE FROM leads WHERE id = ${parsedId}
      `;
      return res.status(200).json({ 
        message: 'Lead deleted successfully',
        deletedCount: result.rowCount 
      });
    } catch (error) {
      console.error('Error deleting lead:', error);
      return res.status(500).json({ error: 'Internal server error', details: error.message });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
