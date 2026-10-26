import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Loader2, 
  ShieldAlert, 
  ShieldCheck, 
  Trash2, 
  LogOut, 
  RefreshCw, 
  AlertTriangle, 
  Download, 
  CheckCircle2, 
  Phone, 
  Mail, 
  Calendar 
} from 'lucide-react';

const AdminPanel = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);
  const [error, setError] = useState('');
  const [toastMessage, setToastMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [deleteConfirmId, setDeleteConfirmId] = useState(null);

  // Auto-login from sessionStorage
  useEffect(() => {
    const savedToken = sessionStorage.getItem('aa_admin_token');
    if (savedToken) {
      setToken(savedToken);
      setIsAuthenticated(true);
      fetchLeads(savedToken);
    }
  }, []);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 4000);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/leads', {
        headers: {
          'Authorization': `Bearer ${password.trim()}`
        }
      });

      if (response.status === 401) {
        setError('Incorrect admin password. Access denied.');
        setLoading(false);
        return;
      }

      if (!response.ok) {
        throw new Error('Server error while authenticating');
      }

      const data = await response.json();
      sessionStorage.setItem('aa_admin_token', password.trim());
      setToken(password.trim());
      setIsAuthenticated(true);
      setLeads(data);
      showToast('Successfully authenticated');
    } catch (err) {
      console.error(err);
      setError('Connection failed. Please check server.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('aa_admin_token');
    setToken('');
    setPassword('');
    setIsAuthenticated(false);
    setLeads([]);
  };

  const fetchLeads = async (authToken = token) => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('/api/leads', {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });

      if (response.status === 401) {
        handleLogout();
        setError('Session expired. Please log in again.');
        return;
      }

      if (!response.ok) throw new Error('Failed to fetch leads');
      const data = await response.json();
      setLeads(data);
    } catch (err) {
      console.error(err);
      setError('Failed to load leads from the server');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteLead = async (id) => {
    setActionLoading(true);
    try {
      const response = await fetch('/api/leads', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ id })
      });

      if (!response.ok) {
        throw new Error('Failed to delete lead');
      }

      setLeads(prev => prev.filter(l => l.id !== id));
      setDeleteConfirmId(null);
      showToast('Lead deleted successfully');
    } catch (err) {
      console.error(err);
      alert('Error deleting lead. Please try again.');
    } finally {
      setActionLoading(false);
    }
  };

  const handlePurgeSpam = async () => {
    if (!window.confirm('Are you sure you want to delete all detected bot spam submissions? This cannot be undone.')) {
      return;
    }

    setActionLoading(true);
    try {
      const response = await fetch('/api/leads', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ action: 'purge_spam' })
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Failed to purge spam');

      await fetchLeads();
      showToast(`Purged ${data.deletedCount || 'all'} bot spam entries!`);
    } catch (err) {
      console.error(err);
      alert('Error purging spam: ' + err.message);
    } finally {
      setActionLoading(false);
    }
  };

  const handleExportCSV = () => {
    if (leads.length === 0) return;
    const headers = ['ID', 'Date', 'Type', 'Name', 'Phone', 'Email', 'Extra Details'];
    const rows = leads.map(l => [
      l.id,
      new Date(l.createdAt).toLocaleString(),
      l.type || 'UNKNOWN',
      `"${(l.name || '').replace(/"/g, '""')}"`,
      `"${l.phone || ''}"`,
      `"${l.email || ''}"`,
      `"${l.extraData ? JSON.stringify(l.extraData).replace(/"/g, '""') : ''}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `assetaura_leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Helper to detect spam patterns in existing leads
  const isSpamLead = (lead) => {
    const type = (lead.type || '').toLowerCase();
    if (!type || type === 'unknown' || !['consultation', 'demat', 'partner', 'contact'].includes(type)) {
      return true;
    }
    const cleanPhone = (lead.phone || '').replace(/\D/g, '');
    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      return true;
    }
    if (lead.email) {
      const [userPart] = lead.email.split('@');
      if (userPart && (userPart.match(/\./g) || []).length > 3) {
        return true;
      }
    }
    return false;
  };

  const spamLeadsCount = leads.filter(isSpamLead).length;

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-900 p-8 rounded-2xl border border-white/10 shadow-2xl max-w-md w-full text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600" />
          <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mx-auto mb-6 text-amber-400">
            <ShieldAlert className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Admin Portal</h2>
          <p className="text-slate-400 text-sm mb-8">Secure access required to view and manage customer leads.</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="text-left">
              <label className="text-xs font-semibold text-slate-300 block mb-1.5">Admin Password</label>
              <input
                type="password"
                placeholder="••••••••"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-400 transition-colors tracking-widest text-center"
              />
            </div>
            {error && (
              <p className="text-rose-400 text-xs bg-rose-500/10 border border-rose-500/20 rounded-lg p-2.5">
                {error}
              </p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3 rounded-xl transition-all shadow-lg shadow-amber-500/10 flex items-center justify-center gap-2"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <ShieldCheck className="w-4 h-4" />}
              {loading ? 'Authenticating...' : 'Sign In to Dashboard'}
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  const filteredLeads = leads.filter(lead => {
    // Type filter
    if (selectedFilter === 'spam' && !isSpamLead(lead)) return false;
    if (selectedFilter !== 'all' && selectedFilter !== 'spam') {
      if ((lead.type || '').toLowerCase() !== selectedFilter) return false;
    }

    // Search filter
    const searchLower = searchTerm.toLowerCase();
    const nameMatch = lead.name ? lead.name.toLowerCase().includes(searchLower) : false;
    const phoneMatch = lead.phone ? lead.phone.includes(searchTerm) : false;
    const emailMatch = lead.email ? lead.email.toLowerCase().includes(searchLower) : false;
    const typeMatch = lead.type ? lead.type.toLowerCase().includes(searchLower) : false;
    return nameMatch || phoneMatch || emailMatch || typeMatch;
  });

  return (
    <div className="min-h-screen bg-slate-950 p-4 md:p-8 text-slate-200">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Top Navbar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-slate-900/60 p-6 rounded-2xl border border-white/10 backdrop-blur-md">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white tracking-tight">Lead Management Portal</h1>
                <p className="text-xs text-slate-400 mt-0.5">
                  Live database of client inquiries & demat requests
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 self-stretch md:self-auto flex-wrap">
            <button
              onClick={() => fetchLeads()}
              disabled={loading}
              className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-xl border border-white/5 transition-all flex items-center gap-1.5"
              title="Refresh leads"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin text-amber-400' : ''}`} />
              Refresh
            </button>

            <button
              onClick={handleExportCSV}
              disabled={leads.length === 0}
              className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-xl border border-white/5 transition-all flex items-center gap-1.5"
              title="Download CSV"
            >
              <Download className="w-3.5 h-3.5" />
              Export CSV
            </button>

            <button
              onClick={handleLogout}
              className="px-3.5 py-2 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 text-xs font-semibold rounded-xl border border-rose-500/20 transition-all flex items-center gap-1.5"
              title="Sign Out"
            >
              <LogOut className="w-3.5 h-3.5" />
              Sign Out
            </button>
          </div>
        </div>

        {/* Toast alert */}
        <AnimatePresence>
          {toastMessage && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-4 py-3 rounded-xl text-xs font-semibold flex items-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              {toastMessage}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Spam detected banner with Purge button */}
        {spamLeadsCount > 0 && (
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-4 md:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-amber-300">
                  {spamLeadsCount} Automated Bot Spam Submissions Detected
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  These were generated by automated web scrapers with gibberish names or non-Indian phone numbers.
                </p>
              </div>
            </div>
            <button
              onClick={handlePurgeSpam}
              disabled={actionLoading}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-2 transition-all shrink-0 shadow-lg shadow-amber-500/20"
            >
              {actionLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
              Purge All Bot Spam ({spamLeadsCount})
            </button>
          </div>
        )}

        {/* Filters and Search Bar */}
        <div className="flex flex-col lg:flex-row justify-between items-stretch lg:items-center gap-4">
          <div className="flex items-center gap-2 flex-wrap">
            {[
              { id: 'all', label: 'All Leads', count: leads.length },
              { id: 'demat', label: 'Demat', count: leads.filter(l => (l.type || '').toLowerCase() === 'demat').length },
              { id: 'consultation', label: 'Consultation', count: leads.filter(l => (l.type || '').toLowerCase() === 'consultation').length },
              { id: 'partner', label: 'Partner', count: leads.filter(l => (l.type || '').toLowerCase() === 'partner').length },
              { id: 'spam', label: 'Suspected Spam', count: spamLeadsCount, isAlert: spamLeadsCount > 0 }
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setSelectedFilter(f.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 border ${
                  selectedFilter === f.id
                    ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md shadow-amber-500/10'
                    : 'bg-slate-900/80 hover:bg-slate-850 text-slate-400 border-white/5'
                }`}
              >
                <span>{f.label}</span>
                <span className={`px-1.5 py-0.5 rounded-md text-[10px] font-bold ${
                  selectedFilter === f.id
                    ? 'bg-slate-950/20 text-slate-950'
                    : f.isAlert
                    ? 'bg-amber-500/20 text-amber-400'
                    : 'bg-slate-800 text-slate-400'
                }`}>
                  {f.count}
                </span>
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search by name, phone, email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-900 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
            />
          </div>
        </div>

        {/* Table Data */}
        {loading ? (
          <div className="flex flex-col justify-center items-center h-64 bg-slate-900/40 rounded-2xl border border-white/5">
            <Loader2 className="w-10 h-10 text-amber-400 animate-spin mb-3" />
            <p className="text-xs text-slate-400">Loading leads from database...</p>
          </div>
        ) : (
          <div className="bg-slate-900 rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-slate-300">
                <thead className="bg-slate-950 text-slate-400 border-b border-white/5 text-[11px] uppercase tracking-wider">
                  <tr>
                    <th className="px-6 py-4 font-bold">Date & Time</th>
                    <th className="px-6 py-4 font-bold">Type</th>
                    <th className="px-6 py-4 font-bold">Client Name</th>
                    <th className="px-6 py-4 font-bold">Contact Details</th>
                    <th className="px-6 py-4 font-bold">Extra Details</th>
                    <th className="px-6 py-4 font-bold text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-xs">
                  {filteredLeads.length === 0 ? (
                    <tr>
                      <td colSpan="6" className="px-6 py-16 text-center text-slate-500">
                        <div className="max-w-xs mx-auto space-y-2">
                          <p className="font-semibold text-slate-400">No leads found</p>
                          <p className="text-[11px]">
                            {searchTerm ? 'No results matched your search term.' : 'There are currently no leads in this category.'}
                          </p>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    filteredLeads.map((lead) => {
                      const isSpam = isSpamLead(lead);
                      const isConfirming = deleteConfirmId === lead.id;

                      return (
                        <tr 
                          key={lead.id} 
                          className={`transition-colors hover:bg-white/[0.02] ${
                            isSpam ? 'bg-amber-500/[0.03]' : ''
                          }`}
                        >
                          {/* Date */}
                          <td className="px-6 py-4 whitespace-nowrap text-slate-400">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                              <span>{new Date(lead.createdAt).toLocaleDateString()}</span>
                              <span className="text-[10px] text-slate-600">
                                {new Date(lead.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                              </span>
                            </div>
                          </td>

                          {/* Type */}
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold border ${
                              lead.type === 'demat' 
                                ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' 
                                : lead.type === 'consultation' 
                                ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' 
                                : lead.type === 'partner'
                                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                                : 'bg-rose-500/10 text-rose-400 border-rose-500/20'
                            }`}>
                              {(lead.type || 'UNKNOWN').toUpperCase()}
                              {isSpam && ' (SPAM)'}
                            </span>
                          </td>

                          {/* Name */}
                          <td className="px-6 py-4 whitespace-nowrap font-semibold text-white">
                            {lead.name}
                          </td>

                          {/* Contact Info */}
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="space-y-0.5">
                              <a 
                                href={`tel:${lead.phone}`} 
                                className="flex items-center gap-1.5 text-slate-200 hover:text-amber-400 transition-colors font-medium"
                              >
                                <Phone className="w-3 h-3 text-slate-500" />
                                {lead.phone}
                              </a>
                              {lead.email && (
                                <a 
                                  href={`mailto:${lead.email}`} 
                                  className="flex items-center gap-1.5 text-slate-400 hover:text-amber-400 text-[11px] transition-colors"
                                >
                                  <Mail className="w-3 h-3 text-slate-600" />
                                  {lead.email}
                                </a>
                              )}
                            </div>
                          </td>

                          {/* Extra Details */}
                          <td className="px-6 py-4 text-slate-400 max-w-xs">
                            {lead.extraData && Object.keys(lead.extraData).length > 0 ? (
                              <div className="space-y-1">
                                {Object.entries(lead.extraData).map(([key, value]) => (
                                  <div key={key} className="text-[11px]">
                                    <span className="text-slate-500 capitalize">{key}:</span>{' '}
                                    <span className="text-slate-300 font-medium">{String(value)}</span>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <span className="text-slate-600 italic text-[11px]">—</span>
                            )}
                          </td>

                          {/* Action */}
                          <td className="px-6 py-4 whitespace-nowrap text-right">
                            {isConfirming ? (
                              <div className="flex items-center justify-end gap-1.5">
                                <button
                                  onClick={() => handleDeleteLead(lead.id)}
                                  disabled={actionLoading}
                                  className="px-2.5 py-1 bg-rose-600 hover:bg-rose-500 text-white rounded-lg text-[10px] font-bold transition-all"
                                >
                                  Confirm
                                </button>
                                <button
                                  onClick={() => setDeleteConfirmId(null)}
                                  className="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-[10px] transition-all"
                                >
                                  Cancel
                                </button>
                              </div>
                            ) : (
                              <button
                                onClick={() => setDeleteConfirmId(lead.id)}
                                className="p-2 text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 rounded-lg transition-all"
                                title="Delete Lead"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            )}
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
