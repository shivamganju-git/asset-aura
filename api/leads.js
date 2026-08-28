import { createPool } from '@vercel/postgres';

const pool = createPool({
  connectionString: process.env.DATABASE_URL || process.env.POSTGRES_URL,
});

export default async function handler(req, res) {
  // Add CORS headers for local development testing (Vercel handles this in prod usually)
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Create table if it doesn't exist (Runs once)
  try {
    await pool.sql`
      CREATE TABLE IF NOT EXISTS leads (
        id SERIAL PRIMARY KEY,
        type VARCHAR(255) NOT NULL,
        name VARCHAR(255) NOT NULL,
        phone VARCHAR(255) NOT NULL UNIQUE,
        email VARCHAR(255),
        extra_data JSONB,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;
  } catch (error) {
    console.error("Error creating table:", error);
    // Continue execution, table might already exist
  }

  if (req.method === 'POST') {
    const { type, name, phone, email, extraData } = req.body;
    
    if (!type || !name || !phone) {
      return res.status(400).json({ error: 'Type, name, and phone are required' });
    }

    try {
      // "Create or Update" logic based on phone number (as phone is usually the primary contact identifier here)
      // We use PostgreSQL UPSERT (INSERT ... ON CONFLICT)
      
      const extraDataJson = extraData ? JSON.stringify(extraData) : null;
      
      const result = await pool.sql`
        INSERT INTO leads (type, name, phone, email, extra_data)
        VALUES (${type}, ${name}, ${phone}, ${email || null}, ${extraDataJson})
        ON CONFLICT (phone) DO UPDATE 
        SET 
          type = EXCLUDED.type,
          name = EXCLUDED.name,
          email = EXCLUDED.email,
          extra_data = EXCLUDED.extra_data,
          updated_at = CURRENT_TIMESTAMP
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

  if (req.method === 'GET') {
    try {
      const { rows } = await pool.sql`SELECT * FROM leads ORDER BY updated_at DESC`;
      
      // Parse extraData back to JSON object for the frontend
      const parsedLeads = rows.map(lead => ({
        id: lead.id,
        type: lead.type,
        name: lead.name,
        phone: lead.phone,
        email: lead.email,
        extraData: lead.extra_data,
        createdAt: lead.updated_at // Use updated_at for sorting/display
      }));
      
      return res.status(200).json(parsedLeads);
    } catch (error) {
      console.error('Error fetching leads:', error);
      return res.status(500).json({ error: 'Internal server error', details: error.message });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
