import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  ShieldCheck, 
  Zap, 
  BarChart3, 
  Rocket, 
  Award, 
  ChevronDown, 
  CheckCircle2, 
  ArrowRight, 
  Star, 
  Plus, 
  Minus,
  Mail,
  Phone,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Globe,
  Briefcase,
  Search,
  Calculator,
  Check,
  ChevronLeft,
  ChevronRight,
  TrendingDown,
  X,
  BookOpen,
  ShieldAlert,
  DollarSign,
  LineChart,
  Activity,
  FileText,
  HelpCircle,
  Calendar,
  Layers,
  MapPin,
  Clock,
  BriefcaseBusiness
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// --- CONSTANTS & DATA ---

const FAQ_DATA = [
  {
    question: "Is Asset Aura SEBI Registered?",
    answer: "Yes, Asset Aura's Research Analyst registration with SEBI ensures that all equity advisory, stock research, and portfolio recommendations strictly adhere to regulatory standards, disclosure policies, and ethical guidelines. We deliver professional, data-backed research, not unverified tips.",
    category: "Regulatory"
  },
  {
    question: "What is PMS and how does it work?",
    answer: "Portfolio Management Services (PMS) is a professional financial service where certified portfolio managers manage your equity investments tailored to your risk profile. With Asset Aura, we advise on strategies where your money remains in your own account at all times, ensuring complete security and control.",
    category: "Advisory"
  },
  {
    question: "What is the relationship between Asset Aura and Angel One?",
    answer: "Asset Aura operates as an Authorised Person associated with Angel One Limited (a premier, technology-driven stock broker in India). This association allows us to provide our clients with access to Angel One's robust trading platforms, super-fast terminals, advanced charting tools, and low-cost Demat account structures.",
    category: "Trading"
  },
  {
    question: "How do I start investing or trading?",
    answer: "Getting started is simple. You can open a free Demat and Trading account powered by Angel One through our 4-step digital onboarding process. Alternatively, you can book a consultation with our Mohali-based advisor to get a personalized investment strategy.",
    category: "Onboarding"
  },
  {
    question: "Does Asset Aura request direct cash transfers or passwords?",
    answer: "Absolutely not. Asset Aura maintains complete transparency. We never request cash transfers, client passwords, or OTPs. All investment capitals remain in your personal demat and trading accounts, controlled solely by you.",
    category: "Regulatory"
  },
  {
    question: "Are there training programs for stock market beginners?",
    answer: "Yes! Under our 'Learn Stock Market' initiative, we host structured online and offline education programs covering Market Fundamentals, Technical Analysis, Mutual Fund Literacy, and Risk Management. Sessions are designed for investors and traders of all experience levels.",
    category: "Education"
  }
];

const TESTIMONIALS_DATA = [
  {
    name: "Gurpreet Singh",
    role: "Business Owner",
    location: "Chandigarh",
    quote: "Asset Aura's PMS advisory has been a game-changer for my capital. The advisory team created a custom strategy that respects my risk appetite while delivering market-beating returns. Highly professional and compliant.",
    stats: "PMS Client",
    badge: "Wealth Management",
    avatarGrad: "from-amber-400 to-amber-600"
  },
  {
    name: "Meenakshi Sharma",
    role: "Salaried Professional",
    location: "Mohali",
    quote: "I opened my Demat account through Asset Aura's Angel One link. The onboarding was fast, and the daily Research Analyst reports give me data-backed buy and sell calls that helped me trade with confidence.",
    stats: "Active Trader",
    badge: "Research Advisory",
    avatarGrad: "from-blue-400 to-indigo-600"
  },
  {
    name: "Amit Patel",
    role: "Retail Investor",
    location: "Panchkula",
    quote: "I enrolled in their stock market course to understand Technical Analysis. The mentor explained chart patterns and indicators in simple terms. I can now evaluate stocks and make my own trading decisions.",
    stats: "Education Student",
    badge: "Financial Literacy",
    avatarGrad: "from-purple-400 to-pink-600"
  }
];

// --- MODALS ---

const ConsultationModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', city: '', service: 'Portfolio Management (PMS)', slot: 'Virtual Meeting' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      console.log('Consultation Booked:', formData);
    }, 1200);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-slate-950/85 backdrop-blur-md"
          onClick={onClose}
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          className="relative w-full max-w-xl glass-card border-white/10 bg-slate-900/95 shadow-2xl p-6 md:p-8 overflow-hidden z-10"
        >
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors bg-white/5 p-2 rounded-full border border-white/5 hover:border-white/20"
          >
            <X className="w-4 h-4" />
          </button>

          {!isSuccess ? (
            <div>
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 border border-gold/30 text-gold text-xs font-bold mb-3 uppercase tracking-wider">
                  <Award className="w-3 h-3 text-gold" /> SEBI Registered Advisory
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white">Book Free <span className="gold-gradient-text">Consultation</span></h3>
                <p className="text-slate-400 text-xs mt-1">Get customized investment strategies from SEBI-registered professionals.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300">Full Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Arshpreet Singh"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-slate-950/60 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all text-xs"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300">Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      pattern="[0-9]{10}"
                      placeholder="e.g. 9988988208"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-slate-950/60 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all text-xs"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300">Email Address</label>
                    <input 
                      type="email" 
                      required
                      placeholder="e.g. client@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-slate-950/60 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all text-xs"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300">City / Region</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Mohali"
                      value={formData.city}
                      onChange={(e) => setFormData({...formData, city: e.target.value})}
                      className="w-full bg-slate-950/60 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all text-xs"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300">Service of Interest</label>
                    <select 
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-gold/50 transition-all text-xs"
                    >
                      <option value="Portfolio Management (PMS)">Portfolio Management (PMS)</option>
                      <option value="Research Advisory (Buy & Sell)">Research Advisory (Buy & Sell)</option>
                      <option value="Mutual Fund Advisory">Mutual Fund Advisory</option>
                      <option value="Learn Stock Market Courses">Learn Stock Market Courses</option>
                      <option value="Angel One Demat & Trading Account">Angel One Demat & Trading Account</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300">Meeting Format</label>
                    <select 
                      value={formData.slot}
                      onChange={(e) => setFormData({...formData, slot: e.target.value})}
                      className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-gold/50 transition-all text-xs"
                    >
                      <option value="Virtual Meeting">Virtual / Phone Meeting</option>
                      <option value="In-person Office Visit (Mohali)">In-Person Office Visit (Mohali)</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-start gap-2 text-[10px] text-slate-500 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>By submitting, you consent to receive direct contact from our certified financial advisory team. We respect your privacy and never share your data.</span>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn-gold w-full py-3.5 text-sm mt-2 flex items-center justify-center gap-2 group text-slate-950 font-bold"
                >
                  {isSubmitting ? (
                    <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      Schedule My Session <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>

              <div className="pt-4 mt-4 border-t border-white/5 text-center">
                <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-2">Or connect via direct call</p>
                <a href="tel:+919988988208" className="inline-flex items-center justify-center gap-2 hover:text-gold transition-colors py-1.5 px-3 bg-white/5 rounded-lg border border-white/5 text-xs text-slate-300">
                  <Phone className="w-3.5 h-3.5 text-gold" /> +91 99889 88208
                </a>
              </div>
            </div>
          ) : (
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-6"
            >
              <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/25 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-2">Consultation Requested!</h3>
              <p className="text-slate-300 text-xs max-w-sm mx-auto mb-6 leading-relaxed">
                Thank you <span className="text-white font-bold">{formData.name}</span>. Our representative will contact you within <span className="text-gold font-bold">24 business hours</span> to confirm your scheduling token.
              </p>
              
              <div className="glass-card bg-white/5 max-w-sm mx-auto p-4 rounded-xl text-left space-y-2 mb-6 border-white/5 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                  <span>Assigned: <span className="text-white">{formData.service}</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                  <span>Format: <span className="text-white">{formData.slot}</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                  <span>Status: <span className="text-emerald-400 font-bold">Priority Onboarding Queued</span></span>
                </div>
              </div>

              <button onClick={onClose} className="btn-secondary py-2.5 px-6 text-xs max-w-xs mx-auto">
                Close Window
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

const DematAccountModal = ({ isOpen, onClose, prefilledPhone = '' }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', phone: prefilledPhone, email: '', pan: '', kycCheck: false });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setFormData({ name: '', phone: prefilledPhone, email: '', pan: '', kycCheck: false });
    }
  }, [isOpen, prefilledPhone]);

  if (!isOpen) return null;

  const handleNextStep = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setStep(4);
      }, 1500);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-slate-950/85 backdrop-blur-md"
          onClick={onClose}
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          className="relative w-full max-w-md glass-card border-white/10 bg-slate-900/95 shadow-2xl p-6 overflow-hidden z-10"
        >
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors bg-white/5 p-2 rounded-full border border-white/5 hover:border-white/20"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Progress bar */}
          {step < 4 && (
            <div className="mb-6">
              <div className="flex justify-between text-[10px] text-slate-500 uppercase font-semibold mb-2">
                <span>Step {step} of 3</span>
                <span>{step === 1 ? 'Personal Info' : step === 2 ? 'Regulatory KYC' : 'E-Sign & Launch'}</span>
              </div>
              <div className="w-full h-1 bg-slate-950 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
                  style={{ width: `${(step / 3) * 100}%` }}
                />
              </div>
            </div>
          )}

          {step === 1 && (
            <div>
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-[10px] font-bold mb-2 uppercase tracking-wide">
                  Powered by Angel One
                </div>
                <h3 className="text-xl font-display font-bold text-white">Open Free Demat Account</h3>
                <p className="text-slate-400 text-xs mt-1">Start your wealth creation journey in less than 5 minutes.</p>
              </div>

              <form onSubmit={handleNextStep} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">Your Full Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. Arshpreet Singh"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-slate-950/60 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all text-xs"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">Mobile Number (Linked with Aadhaar)</label>
                  <input 
                    type="tel" 
                    required
                    pattern="[0-9]{10}"
                    placeholder="e.g. 9988988208"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-slate-950/60 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all text-xs"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">Email Address</label>
                  <input 
                    type="email" 
                    required
                    placeholder="e.g. name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-slate-950/60 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all text-xs"
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn-gold w-full py-3 mt-4 text-xs font-bold text-slate-950 flex items-center justify-center gap-1.5"
                >
                  Continue to KYC <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          )}

          {step === 2 && (
            <div>
              <div className="text-center mb-6">
                <h3 className="text-xl font-display font-bold text-white">KYC Verification</h3>
                <p className="text-slate-400 text-xs mt-1">SEBI mandated identification check for stock trading platforms.</p>
              </div>

              <form onSubmit={handleNextStep} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">PAN Card Number</label>
                  <input 
                    type="text" 
                    required
                    pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
                    placeholder="e.g. ABCDE1234F"
                    value={formData.pan}
                    onChange={(e) => setFormData({...formData, pan: e.target.value.toUpperCase()})}
                    className="w-full bg-slate-950/60 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all text-xs uppercase"
                  />
                </div>

                <div className="glass-card bg-slate-950/60 p-4 rounded-xl border-white/5 space-y-3">
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input 
                      type="checkbox"
                      required
                      checked={formData.kycCheck}
                      onChange={(e) => setFormData({...formData, kycCheck: e.target.checked})}
                      className="mt-0.5 rounded border-white/10 bg-slate-950 focus:ring-0 text-gold"
                    />
                    <span className="text-[11px] text-slate-400 leading-normal">
                      I authorize Asset Aura and its associated partner Angel One to pull my KYC details from official SEBI records via KRA databases.
                    </span>
                  </label>
                </div>

                <div className="flex gap-3 mt-4">
                  <button 
                    type="button" 
                    onClick={() => setStep(1)}
                    className="btn-secondary flex-1 py-3 text-xs"
                  >
                    Back
                  </button>
                  <button 
                    type="submit" 
                    className="btn-gold flex-1 py-3 text-xs font-bold text-slate-950 flex items-center justify-center gap-1"
                  >
                    Verify KYC <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          )}

          {step === 3 && (
            <div>
              <div className="text-center mb-6">
                <h3 className="text-xl font-display font-bold text-white">e-Sign Onboarding</h3>
                <p className="text-slate-400 text-xs mt-1">Finalize registration with secure digital signature verification.</p>
              </div>

              <form onSubmit={handleNextStep} className="space-y-4">
                <div className="bg-slate-950/80 p-5 rounded-2xl border border-white/5 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto">
                    <ShieldCheck className="w-6 h-6 text-gold" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">Secure Digilocker Integration</h4>
                    <p className="text-[10px] text-slate-500 leading-relaxed">
                      Your document portal will open in a secure pop-up. Simply verify using Aadhaar OTP to e-Sign your Demat contract.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 mt-4">
                  <button 
                    type="button" 
                    onClick={() => setStep(2)}
                    className="btn-secondary flex-1 py-3 text-xs"
                  >
                    Back
                  </button>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn-gold flex-1 py-3 text-xs font-bold text-slate-950 flex items-center justify-center gap-1.5"
                  >
                    {isSubmitting ? (
                      <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        e-Sign Now <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}

          {step === 4 && (
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-6 space-y-4"
            >
              <div className="w-16 h-16 bg-gold/10 border border-gold/25 rounded-full flex items-center justify-center mx-auto">
                <Rocket className="w-8 h-8 text-gold animate-bounce" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-display font-bold text-white">Demat Account Activated!</h3>
                <p className="text-slate-300 text-xs max-w-sm mx-auto leading-relaxed">
                  Congratulations <span className="text-white font-bold">{formData.name}</span>. Your Angel One Demat credentials and trading keys are being sent to <span className="text-gold font-bold">{formData.email}</span>.
                </p>
              </div>

              <div className="glass-card bg-white/5 max-w-sm mx-auto p-4 rounded-xl text-left space-y-2 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Demat Account Code: <span className="text-white font-mono">AO-{Math.floor(100000 + Math.random() * 900000)}</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Associated Partner: <span className="text-white font-semibold">Asset Aura</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Support Line: <span className="text-white font-semibold">Support@assetaura.in</span></span>
                </div>
              </div>

              <button onClick={onClose} className="btn-primary w-full py-3 text-xs font-bold text-white shadow-lg shadow-blue-500/20">
                Go to Angel One Web Portal
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

// --- MAIN PORTAL ---

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDematModalOpen, setIsDematModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const [heroPhone, setHeroPhone] = useState('');
  const [prefilledPhone, setPrefilledPhone] = useState('');
  
  const handleHeroSubmit = (e) => {
    e.preventDefault();
    if (heroPhone.length === 10 && /^\d+$/.test(heroPhone)) {
      setPrefilledPhone(heroPhone);
      setIsDematModalOpen(true);
    } else {
      alert("Please enter a valid 10-digit mobile number.");
    }
  };
  
  // Interactive Services Tab State
  const [activeTab, setActiveTab] = useState('advisory');

  // Interactive Wealth Calculator State
  const [calcType, setCalcType] = useState('sip');
  
  // SIP states
  const [sipMonthly, setSipMonthly] = useState(5000);
  const [sipRate, setSipRate] = useState(12);
  const [sipYears, setSipYears] = useState(10);

  // PMS states
  const [pmsLumpSum, setPmsLumpSum] = useState(500000);
  const [pmsRate, setPmsRate] = useState(15);
  const [pmsYears, setPmsYears] = useState(5);

  // FAQ states
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFAQCategory, setActiveFAQCategory] = useState("All");

  // Testimonials Carousel state
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  // Handle header background transition on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculator computations
  
  // 1. SIP Formulas
  const P_sip = sipMonthly;
  const i_sip = (sipRate / 100) / 12;
  const n_sip = sipYears * 12;
  const sipFutureValue = P_sip * ((Math.pow(1 + i_sip, n_sip) - 1) / i_sip) * (1 + i_sip);
  const sipTotalInvested = P_sip * n_sip;
  const sipEstReturns = sipFutureValue - sipTotalInvested;

  // 2. PMS / Lump Sum Formulas
  const P_pms = pmsLumpSum;
  const r_pms = pmsRate / 100;
  const t_pms = pmsYears;
  const pmsFutureValue = P_pms * Math.pow(1 + r_pms, t_pms);
  const pmsTotalInvested = P_pms;
  const pmsEstReturns = pmsFutureValue - pmsTotalInvested;

  // Formatting utility
  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-IN', { 
      style: 'currency', 
      currency: 'INR', 
      maximumFractionDigits: 0 
    }).format(val);
  };

  // FAQ Category lists
  const faqCategories = ["All", "Regulatory", "Advisory", "Trading", "Onboarding", "Education"];
  
  // Filtering FAQs
  const filteredFAQs = FAQ_DATA.filter(faq => {
    const matchesCategory = activeFAQCategory === "All" || faq.category === activeFAQCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const nextTestimonial = () => {
    setTestimonialIdx((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const prevTestimonial = () => {
    setTestimonialIdx((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  return (
    <div className="min-h-screen bg-background text-slate-200 subtle-grid relative font-sans">
      {/* Background glowing gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-15%] w-[60%] h-[60%] bg-blue-600/10 rounded-full blur-[130px] opacity-70 animate-pulse-glow" />
        <div className="absolute top-[40%] right-[-10%] w-[50%] h-[50%] bg-purple-600/5 rounded-full blur-[130px] opacity-60" />
        <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[60%] bg-gold/5 rounded-full blur-[130px] opacity-50" />
      </div>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <DematAccountModal isOpen={isDematModalOpen} onClose={() => { setIsDematModalOpen(false); setPrefilledPhone(''); }} prefilledPhone={prefilledPhone} />

      {/* Floating Navbar */}
      <header className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6",
        isScrolled ? "py-3 md:py-4" : "py-5 md:py-6"
      )}>
        <div className={cn(
          "max-w-7xl mx-auto flex items-center justify-between transition-all duration-300 px-6 rounded-full border shadow-2xl backdrop-blur-md",
          isScrolled 
            ? "bg-slate-950/90 border-white/10 py-2.5 shadow-slate-950/80 shadow-2xl" 
            : "bg-slate-950/45 border-white/5 py-3"
        )}>
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:scale-105 transition-all">
              <TrendingUp className="text-white w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-display font-black bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400 group-hover:opacity-90 transition-opacity">
                Asset Aura
              </span>
              <span className="text-[8px] text-slate-500 uppercase tracking-widest font-bold font-sans">Empower Your Finances</span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {[
              { label: 'Services', target: '#offerings' },
              { label: 'Why Us', target: '#why-us' },
              { label: 'Calculators', target: '#calculator' },
              { label: 'Process', target: '#process' },
              { label: 'Academy', target: '#education' },
              { label: 'Contact', target: '#about-us' }
            ].map((item) => (
              <a 
                key={item.label} 
                href={item.target}
                className="text-slate-400 hover:text-white transition-colors text-[10px] xl:text-xs font-semibold uppercase tracking-wider relative group"
              >
                {item.label}
                <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            {/* Search Icon Button */}
            <button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:border-gold/30 hover:bg-gold/10 hover:text-gold text-slate-400 hover:text-white transition-all shrink-0">
              <Search className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setIsDematModalOpen(true)} 
              className="hidden sm:inline-block px-4 py-2 border border-white/10 hover:border-gold/30 hover:bg-gold/10 hover:text-gold text-white rounded-full text-xs font-semibold transition-all"
            >
              Open Demat
            </button>
            <button 
              onClick={() => setIsModalOpen(true)} 
              className="btn-gold py-2 px-5 md:py-2.5 md:px-6 text-xs font-bold shadow-lg shadow-gold/10 hover:shadow-gold/25"
            >
              Book Consultation
            </button>
            {/* Login Dropdown */}
            <div className="relative group">
              <button className="px-4 py-2 border border-white/10 hover:border-gold/30 hover:bg-gold/10 hover:text-gold text-white rounded-full text-xs font-semibold transition-all flex items-center gap-1 shrink-0">
                LOGIN <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-gold" />
              </button>
              {/* Dropdown menu */}
              <div className="absolute right-0 mt-2 w-48 bg-slate-950/95 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 p-2 text-left">
                <a href="#login-client" className="block px-4 py-2.5 text-[10px] font-bold text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-all uppercase tracking-wider">
                  Client Portal
                </a>
                <a href="#login-partner" className="block px-4 py-2.5 text-[10px] font-bold text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-all uppercase tracking-wider">
                  Growth Partner
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
          
          {/* Left Column: Heading and info */}
          <div className="lg:col-span-7 text-left space-y-4 md:space-y-5">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex flex-wrap items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-[10px] sm:text-xs font-semibold tracking-wide"
            >
              <Award className="w-3.5 h-3.5 text-gold shrink-0 animate-pulse" />
              <span>SEBI-Registered Research Analyst & Angel One Authorised Partner</span>
            </motion.div>

            {/* Anand Rathi styled Heading */}
            <div className="space-y-2 md:space-y-3">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black leading-[1.1] tracking-tight text-white"
              >
                Empowering Investors. Enabling Opportunities.<br />
                <span className="gold-gradient-text">Building Wealth.</span>
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="text-base sm:text-lg md:text-xl font-sans font-light leading-normal text-slate-300"
              >
                Whatever your investing style, we have a solution for you!
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-xl"
              >
                Professional portfolio management, expert stock market guidance, and personalized investment strategies — all backed by SEBI-registered expertise and technology powered by Angel One.
              </motion.p>
            </div>

            {/* Mobile number intake card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="glass-card border-white/10 bg-slate-900/60 p-4 md:p-5 shadow-2xl max-w-md text-left space-y-3 rounded-2xl"
            >
              <form onSubmit={handleHeroSubmit} className="space-y-2.5">
                <div className="space-y-0.5">
                  <label className="text-xs font-semibold text-slate-300 flex items-center gap-1">
                    Enter Your Mobile <span className="text-red-500 font-bold">*</span>
                  </label>
                  <p className="text-[10px] text-slate-500">Fields marked with * are required</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input 
                    type="tel" 
                    required
                    pattern="[0-9]{10}"
                    placeholder="Enter your mobile"
                    value={heroPhone}
                    onChange={(e) => setHeroPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    className="flex-1 bg-slate-950/80 border border-white/15 rounded-xl px-4 py-2.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all text-xs"
                  />
                  <button 
                    type="submit" 
                    className="btn-gold py-2.5 px-5 text-xs font-bold text-slate-950 rounded-xl flex items-center justify-center gap-1.5 shrink-0 shadow-lg shadow-gold/15"
                  >
                    Start Investing <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            </motion.div>

            {/* Quick alert badge */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.28 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] sm:text-xs"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0 animate-none" />
              <span>We never ask for your OTPs, passwords, or direct cash transfers. Your capital remains safe in your account.</span>
            </motion.div>

            {/* Quick trust metrics structured with vertical dividers */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="pt-4 border-t border-white/5 flex flex-wrap items-center gap-x-6 gap-y-3"
            >
              <div className="flex items-center">
                <div className="pl-3 border-l-2 border-gold/45">
                  <div className="text-xs sm:text-sm md:text-base font-display font-extrabold text-white">
                    SEBI Registered RA
                  </div>
                  <div className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">Investment Advisory</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="pl-3 border-l-2 border-blue-500/40">
                  <div className="text-xs sm:text-sm md:text-base font-display font-extrabold text-white">
                    Angel One AP
                  </div>
                  <div className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">Brokerage Partner</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="pl-3 border-l-2 border-purple-500/40">
                  <div className="text-xs sm:text-sm md:text-base font-display font-extrabold text-white">
                    Mohali Office
                  </div>
                  <div className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">Core Operations</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Handshake Partners & Glowing QR Code */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative mx-auto max-w-md lg:max-w-none flex flex-col items-center sm:flex-row lg:flex-col xl:flex-row gap-6 justify-center"
            >
              <div className="absolute inset-[-10%] bg-blue-500/10 rounded-full blur-[100px] -z-10 animate-pulse-glow" />

              {/* Shaking Hands Image */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-slate-950/80 bg-slate-950/40 p-2 backdrop-blur-xl max-w-[340px] shrink-0">
                <img 
                  src="/handshake_partners.png" 
                  alt="Asset Aura Shaking Hands Partnership" 
                  className="w-full h-auto rounded-2xl opacity-90 border border-white/5"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Elegant Glowing QR Code mockup */}
              <div className="glass-card border-white/10 bg-slate-950/80 p-5 shadow-2xl rounded-3xl flex flex-col items-center justify-center text-center gap-3 shrink-0 max-w-[170px] border-t-gold/30">
                <div className="w-24 h-24 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center p-2.5 relative group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-gold/10 to-blue-500/10 opacity-50" />
                  <svg className="w-full h-full text-gold-light" viewBox="0 0 100 100" fill="currentColor">
                    {/* Outer frames */}
                    <path d="M0,0 h30 v8 h-22 v22 h-8 z" />
                    <path d="M70,0 h30 v30 h-8 v-22 h-22 z" />
                    <path d="M0,70 h8 v22 h22 v8 h-30 z" />
                    <path d="M70,92 v8 h30 v-30 h-8 v22 z" />
                    {/* Corner squares */}
                    <rect x="12" y="12" width="22" height="22" />
                    <rect x="16" y="16" width="14" height="14" fill="#020617" />
                    <rect x="20" y="20" width="6" height="6" />

                    <rect x="66" y="12" width="22" height="22" />
                    <rect x="70" y="16" width="14" height="14" fill="#020617" />
                    <rect x="74" y="24" width="6" height="6" />

                    <rect x="12" y="66" width="22" height="22" />
                    <rect x="16" y="70" width="14" height="14" fill="#020617" />
                    <rect x="20" y="74" width="6" height="6" />

                    {/* Random bits */}
                    <rect x="42" y="16" width="6" height="6" />
                    <rect x="52" y="24" width="6" height="6" />
                    <rect x="42" y="32" width="6" height="6" />
                    <rect x="32" y="44" width="6" height="6" />
                    <rect x="48" y="44" width="6" height="6" />
                    <rect x="58" y="44" width="6" height="6" />
                    <rect x="44" y="56" width="6" height="6" />
                    <rect x="54" y="56" width="6" height="6" />
                    <rect x="42" y="68" width="6" height="6" />
                    <rect x="52" y="68" width="6" height="6" />
                    <rect x="42" y="78" width="6" height="6" />
                    <rect x="52" y="78" width="6" height="6" />
                    
                    <rect x="68" y="44" width="6" height="6" />
                    <rect x="78" y="44" width="6" height="6" />
                    <rect x="68" y="54" width="6" height="6" />
                    <rect x="78" y="54" width="6" height="6" />
                    <rect x="68" y="68" width="6" height="6" />
                    <rect x="78" y="68" width="6" height="6" />
                    <rect x="68" y="78" width="6" height="6" />
                    <rect x="78" y="78" width="6" height="6" />
                  </svg>
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] font-bold text-white uppercase tracking-wider">Fast Access</div>
                  <div className="text-[8px] text-slate-500 font-semibold leading-normal">Scan to Open Demat Account</div>
                </div>
              </div>

              {/* Floating Cards (positioned next to the handshake box) */}
              <div className="absolute top-1/2 left-0 -translate-x-12 -translate-y-1/2 hidden xl:flex flex-col gap-4 z-20">
                <motion.div 
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="glass-card border-white/10 bg-slate-950/90 p-3 shadow-2xl max-w-[150px] text-left border-l-gold/45 border-l-2"
                >
                  <div className="flex items-center gap-2">
                    <Award className="text-gold w-4 h-4 shrink-0" />
                    <div>
                      <div className="text-[9px] font-bold text-white uppercase">SEBI Reg.</div>
                      <div className="text-[8px] text-slate-500">Certified Research</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ x: [0, -4, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="glass-card border-white/10 bg-slate-950/90 p-3 shadow-2xl max-w-[150px] text-left border-l-blue-500/40 border-l-2"
                >
                  <div className="flex items-center gap-2">
                    <Zap className="text-blue-400 w-4 h-4 shrink-0" />
                    <div>
                      <div className="text-[9px] font-bold text-white uppercase">Angel One</div>
                      <div className="text-[8px] text-slate-500">Broker Partner</div>
                    </div>
                  </div>
                </motion.div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SERVICES / OFFERINGS SECTION --- */}
      <section id="offerings" className="py-24 px-6 relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-bold uppercase tracking-wider">
            Our Offerings
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            Comprehensive <span className="gold-gradient-text">Financial Solutions</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Whether you seek regulatory-compliant advisory services or top-tier trading platforms, Asset Aura provides a customized path tailored to your financial goals.
          </p>

          {/* Interactive Offerings Toggle */}
          <div className="flex justify-center pt-6">
            <div className="bg-slate-950 border border-white/5 rounded-full p-1.5 flex gap-2 shadow-inner">
              <button
                onClick={() => setActiveTab('advisory')}
                className={cn(
                  "px-5 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-300 flex items-center gap-2",
                  activeTab === 'advisory' 
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg" 
                    : "text-slate-400 hover:text-white"
                )}
              >
                <Award className="w-3.5 h-3.5" /> Investment Advisory & PMS
              </button>
              <button
                onClick={() => setActiveTab('trading')}
                className={cn(
                  "px-5 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-300 flex items-center gap-2",
                  activeTab === 'trading' 
                    ? "bg-gradient-to-r from-gold-dark to-gold text-slate-950 shadow-lg font-bold" 
                    : "text-slate-400 hover:text-white"
                )}
              >
                <Layers className="w-3.5 h-3.5" /> Trading & Platform (Angel One)
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Offerings Grid Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'advisory' ? (
            <motion.div 
              key="advisory-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 gap-6 lg:gap-8"
            >
              {/* Card 1: PMS */}
              <div className="glass-card glass-card-hover p-6 md:p-8 flex flex-col justify-between space-y-6 text-left border-white/5 bg-slate-900/30">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    <Briefcase className="text-blue-400 w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest font-extrabold">Asset Advisory</span>
                    <h3 className="text-xl md:text-2xl font-bold text-white">Portfolio Management Services (PMS)</h3>
                    <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                      Professionally managed investment portfolios tailored to your risk profile and financial goals. Services are delivered by certified Portfolio Managers and SEBI-registered professionals.
                    </p>
                  </div>
                </div>
                <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
                  <div className="text-[11px] text-slate-400">
                    <span className="text-white font-bold">&bull;</span> Your money stays in your account at all times.
                  </div>
                  <button onClick={() => setIsModalOpen(true)} className="inline-flex items-center gap-1 text-gold text-xs font-bold hover:underline">
                    Inquire PMS <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Card 2: Stock Market Analysis */}
              <div className="glass-card glass-card-hover p-6 md:p-8 flex flex-col justify-between space-y-6 text-left border-white/5 bg-slate-900/30">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                    <LineChart className="text-indigo-400 w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest font-extrabold">Research Analyst</span>
                    <h3 className="text-xl md:text-2xl font-bold text-white">Stock Market Analysis (Buy & Sell)</h3>
                    <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                      Access rigorous buy-and-sell research from a SEBI-registered Research Analyst. We provide data-driven insights that help you enter and exit positions with confidence, regardless of market conditions.
                    </p>
                  </div>
                </div>
                <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
                  <div className="text-[11px] text-slate-400">
                    <span className="text-white font-bold">&bull;</span> Structured, regulatory-bound research recommendations.
                  </div>
                  <button onClick={() => setIsModalOpen(true)} className="inline-flex items-center gap-1 text-gold text-xs font-bold hover:underline">
                    Access Research <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Card 3: Mutual Fund Advisory */}
              <div className="glass-card glass-card-hover p-6 md:p-8 flex flex-col justify-between space-y-6 text-left border-white/5 bg-slate-900/30">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                    <Activity className="text-purple-400 w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest font-extrabold">Wealth Preservation</span>
                    <h3 className="text-xl md:text-2xl font-bold text-white">Mutual Fund Advisory</h3>
                    <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                      Receive clear, unbiased guidance on mutual funds aligned with your long-term wealth objectives. Our advisors help you identify opportunities, reduce unnecessary costs, and maintain a disciplined compounding approach.
                    </p>
                  </div>
                </div>
                <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
                  <div className="text-[11px] text-slate-400">
                    <span className="text-white font-bold">&bull;</span> Free initial advisory sessions available.
                  </div>
                  <button onClick={() => setIsModalOpen(true)} className="inline-flex items-center gap-1 text-gold text-xs font-bold hover:underline">
                    Get Advisory <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Card 4: Learn Stock Market */}
              <div className="glass-card glass-card-hover p-6 md:p-8 flex flex-col justify-between space-y-6 text-left border-white/5 bg-slate-900/30">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center">
                    <BookOpen className="text-pink-400 w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest font-extrabold">Education Academy</span>
                    <h3 className="text-xl md:text-2xl font-bold text-white">Learn Stock Market</h3>
                    <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                      Build your financial literacy through structured online and offline learning programmes. From market fundamentals to advanced chart analysis techniques, we help you make informed decisions independently.
                    </p>
                  </div>
                </div>
                <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
                  <div className="text-[11px] text-slate-400">
                    <span className="text-white font-bold">&bull;</span> Practical sessions hosted at our Mohali office or online.
                  </div>
                  <a href="#education" className="inline-flex items-center gap-1 text-gold text-xs font-bold hover:underline">
                    View Course Modules <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="trading-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {[
                {
                  title: "Equity Investment",
                  desc: "Participate in India's commercial growth journey. Build long-term wealth, earn dividends, and diversify your stock portfolio.",
                  perks: ["Direct ownership of listed companies", "Convenient digital management"],
                  icon: TrendingUp
                },
                {
                  title: "Futures & Options (F&O)",
                  desc: "Explore advanced derivatives trading. Deploy strategic trading solutions, hedge portfolio risks, and participate in active markets.",
                  perks: ["Powerful charting and analytics", "Leveraged position trading"],
                  icon: Activity
                },
                {
                  title: "Commodity Trading",
                  desc: "Diversify into physical asset classes: Gold, Silver, Crude Oil, Natural Gas, and agricultural derivatives.",
                  perks: ["Inflation protection assets", "Global market price exposure"],
                  icon: Layers
                },
                {
                  title: "Currency Trading",
                  desc: "Access global foreign exchange networks. Trade currency pairings with lightning-fast execution and real-time feed metrics.",
                  perks: ["Highly liquid currency markets", "Minimal margins required"],
                  icon: Globe
                },
                {
                  title: "Mutual Funds & SIPs",
                  desc: "Invest in professionally managed mutual fund baskets. Set automated monthly Systematic Investment Plans (SIP) to compound wealth.",
                  perks: ["Goal-oriented custom SIPs", "Equity, debt & hybrid categories"],
                  icon: DollarSign
                },
                {
                  title: "IPOs & Fixed Income",
                  desc: "Apply to high-momentum Initial Public Offerings (IPOs) or invest in corporate bonds and Government Securities for stable returns.",
                  perks: ["Pre-vetted premium IPO reviews", "Relatively low-risk stable assets"],
                  icon: FileText
                },
                {
                  title: "Insurance Solutions",
                  desc: "Protect what matters most. Choose from top-rated Life, Health, Motor, Term, and Travel insurance solutions.",
                  perks: ["Custom risk coverage policies", "Hassle-free digital claims process"],
                  icon: ShieldCheck
                }
              ].map((item, idx) => {
                const ItemIcon = item.icon;
                return (
                  <div key={idx} className="glass-card glass-card-hover p-6 flex flex-col justify-between text-left space-y-4 border-white/5 bg-slate-900/30">
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center">
                        <ItemIcon className="text-gold w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-white">{item.title}</h3>
                      <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                    <div className="pt-3 border-t border-white/5 space-y-1.5 text-[10px] text-slate-500 font-medium">
                      {item.perks.map((p, pIdx) => (
                        <div key={pIdx} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>{p}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}

              {/* Callout box to open account */}
              <div className="glass-card border-gold/30 bg-gold/5 p-6 flex flex-col justify-between text-left space-y-4 rounded-3xl">
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-gold/15 border border-gold/45 flex items-center justify-center">
                    <Rocket className="text-gold w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Powered by Angel One</h3>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    Access all these trading products under one unified ecosystem. Open your free Demat and Trading account online in minutes.
                  </p>
                </div>
                <button 
                  onClick={() => setIsDematModalOpen(true)}
                  className="btn-gold w-full py-2.5 text-xs font-bold text-slate-950 flex items-center justify-center gap-1"
                >
                  Create Account Now <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* --- WHY ASSET AURA SECTION --- */}
      <section id="why-us" className="py-24 px-6 bg-slate-950/40 border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto text-center space-y-16">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/25 text-gold text-xs font-bold uppercase tracking-wider">
              Why Choose Us
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              Investing with Confidence <span className="gold-gradient-text">Starts with Trust</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              In a financial market full of unverified advice and informal groups, Asset Aura stands apart through strict compliance, complete capital security, and transparent advisory execution.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Safe & Secure",
                desc: "We never request direct cash, passwords, or OTPs. All investment funds and assets remain entirely under your personal control within your Demat registry.",
                icon: ShieldCheck,
                color: "text-emerald-400"
              },
              {
                title: "SEBI Registered",
                desc: "Every stock advisory, PMS strategy, and research model recommendation is backed by a registered Research Analyst license and bound by ethical SEBI regulations.",
                icon: Award,
                color: "text-blue-400"
              },
              {
                title: "Expert Guidance",
                desc: "Access rigorous financial data analysis and certified advisors. Our guidelines rely on facts, technical charts, and corporate performance — not market gossip.",
                icon: TrendingUp,
                color: "text-purple-400"
              },
              {
                title: "Personalised Strategy",
                desc: "Receive customized wealth plans tailored explicitly to your current monthly income, overall risk tolerance, and long-term retirement or savings aspirations.",
                icon: Users,
                color: "text-pink-400"
              }
            ].map((item, idx) => {
              const WhyIcon = item.icon;
              return (
                <div key={idx} className="glass-card glass-card-hover p-6 flex flex-col items-start text-left space-y-4 border-white/5 bg-slate-900/20">
                  <div className={cn("w-12 h-12 rounded-2xl bg-slate-950 border border-white/5 flex items-center justify-center", item.color)}>
                    <WhyIcon className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    <p className="text-slate-400 text-xs md:text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Angel One Pillars */}
          <div className="pt-10 border-t border-white/5 space-y-6">
            <h4 className="text-xs uppercase font-extrabold tracking-widest text-slate-500">Technology Partnership Perks</h4>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
              {[
                { title: "Advanced Technology", desc: "Super-fast Angel One trading terminals & APIs" },
                { title: "Dedicated Support", desc: "1-on-1 RM assistance for demat executions" },
                { title: "Unified Platform", desc: "Access Equities, F&O, Mutual Funds, IPOs under one roof" }
              ].map((p, i) => (
                <div key={i} className="flex items-start gap-2 text-left max-w-xs">
                  <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-white">{p.title}</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- INTERACTIVE WEALTH CALCULATOR --- */}
      <section id="calculator" className="py-24 px-6 relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-bold uppercase tracking-wider">
            Wealth Projection
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            Interactive <span className="gold-gradient-text">Compounding Calculator</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            See the mathematical power of systematic investing and professional portfolio advisory compounding over time.
          </p>

          <div className="flex justify-center pt-6">
            <div className="bg-slate-950 border border-white/5 rounded-full p-1 flex shadow-inner">
              <button
                onClick={() => setCalcType('sip')}
                className={cn(
                  "px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5",
                  calcType === 'sip' ? "bg-blue-600 text-white shadow" : "text-slate-400 hover:text-white"
                )}
              >
                <Calculator className="w-3.5 h-3.5" /> SIP Calculator
              </button>
              <button
                onClick={() => setCalcType('pms')}
                className={cn(
                  "px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5",
                  calcType === 'pms' ? "bg-gold text-slate-950 font-black shadow" : "text-slate-400 hover:text-white"
                )}
              >
                <BriefcaseBusiness className="w-3.5 h-3.5" /> PMS Lump Sum Projector
              </button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls Panel */}
          <div className="lg:col-span-7 glass-card p-6 md:p-8 flex flex-col justify-between space-y-8 border-white/10 bg-slate-900/60 shadow-xl text-left">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Calculator className="w-5 h-5 text-gold" />
                <span>{calcType === 'sip' ? 'Systematic Investment Plan (SIP) Parameters' : 'PMS Lump Sum Growth Projections'}</span>
              </h3>
              <p className="text-slate-400 text-xs mt-1">
                Drag the sliders below to estimate the potential growth of your financial portfolio.
              </p>
            </div>

            <div className="space-y-6">
              {calcType === 'sip' ? (
                <>
                  {/* SIP Amount */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-semibold text-slate-300">
                      <span>Monthly SIP Amount:</span>
                      <span className="text-gold font-bold text-sm">{formatCurrency(sipMonthly)}</span>
                    </div>
                    <input 
                      type="range" 
                      min="500" 
                      max="100000" 
                      step="500"
                      value={sipMonthly} 
                      onChange={(e) => setSipMonthly(parseInt(e.target.value))}
                      className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-gold border border-white/5" 
                    />
                    <div className="flex justify-between text-[9px] text-slate-500 font-bold uppercase">
                      <span>₹500</span>
                      <span>₹10,000</span>
                      <span>₹50,000</span>
                      <span>₹1,00,000</span>
                    </div>
                  </div>

                  {/* SIP Rate */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-semibold text-slate-300">
                      <span>Expected Annual Return (p.a.):</span>
                      <span className="text-blue-400 font-bold text-sm">{sipRate}%</span>
                    </div>
                    <input 
                      type="range" 
                      min="5" 
                      max="30" 
                      step="0.5"
                      value={sipRate} 
                      onChange={(e) => setSipRate(parseFloat(e.target.value))}
                      className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-blue-500 border border-white/5" 
                    />
                    <div className="flex justify-between text-[9px] text-slate-500 font-bold uppercase">
                      <span>5%</span>
                      <span>12% (Equity Avg)</span>
                      <span>20% (High Growth)</span>
                      <span>30%</span>
                    </div>
                  </div>

                  {/* SIP Years */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-semibold text-slate-300">
                      <span>Duration / Time Period:</span>
                      <span className="text-purple-400 font-bold text-sm">{sipYears} Years</span>
                    </div>
                    <input 
                      type="range" 
                      min="1" 
                      max="40" 
                      value={sipYears} 
                      onChange={(e) => setSipYears(parseInt(e.target.value))}
                      className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-purple-500 border border-white/5" 
                    />
                    <div className="flex justify-between text-[9px] text-slate-500 font-bold uppercase">
                      <span>1 Year</span>
                      <span>10 Years</span>
                      <span>25 Years</span>
                      <span>40 Years</span>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* PMS Lump Sum Amount */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-semibold text-slate-300">
                      <span>Lump Sum PMS Investment:</span>
                      <span className="text-gold font-bold text-sm">{formatCurrency(pmsLumpSum)}</span>
                    </div>
                    <input 
                      type="range" 
                      min="50000" 
                      max="5000000" 
                      step="50000"
                      value={pmsLumpSum} 
                      onChange={(e) => setPmsLumpSum(parseInt(e.target.value))}
                      className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-gold border border-white/5" 
                    />
                    <div className="flex justify-between text-[9px] text-slate-500 font-bold uppercase">
                      <span>₹50,000</span>
                      <span>₹5,00,000</span>
                      <span>₹25,00,000</span>
                      <span>₹50,00,000</span>
                    </div>
                  </div>

                  {/* PMS Rate */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-semibold text-slate-300">
                      <span>Expected Advisory Growth Rate (p.a.):</span>
                      <span className="text-blue-400 font-bold text-sm">{pmsRate}%</span>
                    </div>
                    <input 
                      type="range" 
                      min="5" 
                      max="30" 
                      step="0.5"
                      value={pmsRate} 
                      onChange={(e) => setPmsRate(parseFloat(e.target.value))}
                      className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-blue-500 border border-white/5" 
                    />
                    <div className="flex justify-between text-[9px] text-slate-500 font-bold uppercase">
                      <span>5%</span>
                      <span>15% (PMS Target)</span>
                      <span>22% (Active Advisor)</span>
                      <span>30%</span>
                    </div>
                  </div>

                  {/* PMS Years */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-semibold text-slate-300">
                      <span>Advisory Horizon:</span>
                      <span className="text-purple-400 font-bold text-sm">{pmsYears} Years</span>
                    </div>
                    <input 
                      type="range" 
                      min="1" 
                      max="30" 
                      value={pmsYears} 
                      onChange={(e) => setPmsYears(parseInt(e.target.value))}
                      className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-purple-500 border border-white/5" 
                    />
                    <div className="flex justify-between text-[9px] text-slate-500 font-bold uppercase">
                      <span>1 Year</span>
                      <span>5 Years</span>
                      <span>15 Years</span>
                      <span>30 Years</span>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="pt-4 border-t border-white/5 text-[10px] text-slate-500">
              Disclaimer: Projections are computed based on compound interest equations. Actual returns are subject to market volatility and performance ratios. Past record is not guaranteed of future outcomes.
            </div>
          </div>

          {/* Results Display Panel */}
          <div className="lg:col-span-5 glass-card border-white/10 bg-gradient-to-b from-blue-950/30 via-slate-950/40 to-slate-950/80 p-6 md:p-8 flex flex-col justify-between text-center relative overflow-hidden shadow-xl">
            <div className="absolute top-4 right-4 bg-slate-950 border border-white/5 rounded-full px-3 py-1 text-[9px] font-bold text-slate-500 uppercase tracking-widest">
              Compound Projection
            </div>

            <div className="space-y-6 pt-6 text-left">
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Total Principal Invested</span>
                <div className="text-xl font-bold text-white">
                  {calcType === 'sip' ? formatCurrency(sipTotalInvested) : formatCurrency(pmsTotalInvested)}
                </div>
              </div>

              <div className="space-y-1 py-4 border-y border-white/5">
                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Estimated Returns Share</span>
                <div className="text-xl font-bold text-emerald-400">
                  + {calcType === 'sip' ? formatCurrency(sipEstReturns) : formatCurrency(pmsEstReturns)}
                </div>
              </div>

              <div className="space-y-1 bg-slate-950/60 p-4 rounded-2xl border border-white/5">
                <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Future Portfolio Value</span>
                <div className="text-3xl font-display font-black text-gold mt-1">
                  {calcType === 'sip' ? formatCurrency(sipFutureValue) : formatCurrency(pmsFutureValue)}
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="btn-gold w-full py-4 text-xs font-black text-slate-950 uppercase tracking-wider flex items-center justify-center gap-1 shadow-lg shadow-gold/10 hover:shadow-gold/20"
              >
                Inquire Investment Plan <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- THE PROCESS SECTION --- */}
      <section id="process" className="py-24 px-6 bg-slate-950/40 border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-bold uppercase tracking-wider">
              Methodology
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              How We <span className="gold-gradient-text">Work with You</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Getting started with Asset Aura is straightforward. Here is what to expect when you reach out to our advisory office.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {[
              {
                step: "01",
                title: "Book a Consultation",
                desc: "Contact us to schedule a dedicated appointment at our Mohali office or virtually. Please book in advance — walk-ins are not accepted, ensuring every client receives complete, undivided attention."
              },
              {
                step: "02",
                title: "Understand Your Goals",
                desc: "During your first session, our advisor will discuss your financial situation, existing investments, risk appetite, and long-term objectives in a confidential and structured manner."
              },
              {
                step: "03",
                title: "Receive a Personalised Plan",
                desc: "We prepare a clear investment strategy based on your profile — whether portfolio management, mutual fund selection, stock research, or a combination of all three."
              },
              {
                step: "04",
                title: "Ongoing Support & Review",
                desc: "We maintain regular communication, review your portfolio performance, and adjust strategies proactively to keep you on track toward your financial goals."
              }
            ].map((item, idx) => (
              <div key={idx} className="glass-card border-white/5 bg-slate-900/30 p-6 md:p-8 flex flex-col justify-between space-y-6 relative hover:border-white/10 hover:bg-slate-900/50 transition-all">
                <div className="space-y-4 text-left">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold font-bold text-sm">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINANCIAL EDUCATION SECTION --- */}
      <section id="education" className="py-24 px-6 relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/25 text-pink-400 text-xs font-bold uppercase tracking-wider">
              Financial Literacy
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-black leading-tight text-white">
              Learn the Market,<br />
              <span className="gold-gradient-text">Own Your Decisions</span>
            </h2>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
              We believe an informed investor is an empowered investor. Our structured educational programmes cover every aspect of the Indian stock market — from the basics to advanced trading and analysis.
            </p>
            <div className="pt-2">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="btn-primary py-3 px-6 text-xs font-bold shadow-lg shadow-blue-500/10"
              >
                Inquire Education Schedule
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Market Fundamentals",
                desc: "Understand how Indian stock exchanges work, what drives market movements, and how to read financial news with confidence."
              },
              {
                title: "Technical Analysis",
                desc: "Learn how to analyse charts, identify trends, and apply technical indicators to make better entry and exit decisions in equities."
              },
              {
                title: "Mutual Fund Literacy",
                desc: "Gain clarity on fund categories, expense ratios, NAV, SIPs, and how to evaluate a mutual fund's historical performance effectively."
              },
              {
                title: "Risk Management",
                desc: "Discover strategies to protect your capital, diversify intelligently, and avoid the common pitfalls that derail retail investors."
              }
            ].map((point, index) => (
              <div key={index} className="glass-card border-white/5 bg-slate-900/20 p-6 text-left space-y-3">
                <div className="w-8 h-8 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 font-bold text-xs">
                  {index + 1}
                </div>
                <h4 className="text-sm font-bold text-white">{point.title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{point.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- DEMAT ONBOARDING SECTION --- */}
      <section id="demat-onboarding" className="py-24 px-6 bg-slate-950/40 border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-bold uppercase tracking-wider">
              Onboarding Roadmap
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              4 Steps to <span className="gold-gradient-text">Begin Investing</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Open your demat and trading account digitally. Backed by Angel One infrastructure, we verify and launch your portal in minutes.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {[
              {
                step: "01",
                title: "Online Registration",
                desc: "Provide your basic contact information and create your personal investor credentials in our secure database.",
                perk: "Takes under 2 minutes"
              },
              {
                step: "02",
                title: "Upload KYC Documents",
                desc: "Submit your mandated identification papers (PAN and Aadhaar validation) for SEBI exchange registry verification.",
                perk: "Fully digital integration"
              },
              {
                step: "03",
                title: "Complete Verification",
                desc: "Complete the secure face match check or input Digilocker authentication to confirm compliant account clearance.",
                perk: "Compliant and automated"
              },
              {
                step: "04",
                title: "Begin Investment Journey",
                desc: "Receive your credentials, set up trading terminals, and start compounding capital under our advisory wing.",
                perk: "Access stocks, SIPs, mutual funds"
              }
            ].map((item, idx) => (
              <div key={idx} className="glass-card border-white/5 bg-slate-900/30 p-6 flex flex-col justify-between space-y-6 hover:border-white/10 hover:bg-slate-900/50 transition-all">
                <div className="space-y-3">
                  <span className="text-[10px] text-gold uppercase tracking-widest font-extrabold">Step {item.step}</span>
                  <h3 className="text-base font-bold text-white">{item.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
                <div className="pt-3 border-t border-white/5 flex items-center gap-1.5 text-[10px] text-slate-500 font-semibold uppercase">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{item.perk}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button 
              onClick={() => setIsDematModalOpen(true)}
              className="btn-gold py-3.5 px-8 text-xs font-bold text-slate-950 shadow-lg shadow-gold/15"
            >
              Open Free Demat Account Online
            </button>
          </div>

        </div>
      </section>

      {/* --- TESTIMONIALS SLIDER SECTION --- */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/25 text-gold text-xs font-bold uppercase tracking-wider">
              Client Feedback
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              Trusted by <span className="gold-gradient-text">Successful Investors</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
              Read how our Research Analyst advisory, PMS structures, and educational courses help clients build sustainable wealth.
            </p>
          </div>

          {/* Testimonial Box */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonialIdx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="glass-card border-white/10 bg-slate-900/60 p-8 md:p-12 shadow-2xl relative overflow-hidden text-left"
              >
                <div className="absolute right-8 top-4 text-white/[0.02] text-[180px] font-serif select-none pointer-events-none font-bold">
                  “
                </div>

                <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
                  <div className="space-y-6 max-w-2xl">
                    <div className="flex items-center gap-1 text-gold">
                      {[1,2,3,4,5].map(s => <Star key={s} className="w-3.5 h-3.5 fill-gold text-gold" />)}
                    </div>
                    
                    <p className="text-slate-200 text-sm md:text-base italic font-medium leading-relaxed">
                      "{TESTIMONIALS_DATA[testimonialIdx].quote}"
                    </p>

                    <div className="flex items-center gap-4">
                      <div className={cn(
                        "w-10 h-10 rounded-full bg-gradient-to-tr flex items-center justify-center font-display font-black text-white shadow-md shrink-0 text-xs",
                        TESTIMONIALS_DATA[testimonialIdx].avatarGrad
                      )}>
                        {TESTIMONIALS_DATA[testimonialIdx].name.charAt(0)}
                      </div>

                      <div className="space-y-0.5">
                        <h4 className="font-bold text-white text-sm">{TESTIMONIALS_DATA[testimonialIdx].name}</h4>
                        <p className="text-slate-500 text-[10px] font-semibold">{TESTIMONIALS_DATA[testimonialIdx].role} &bull; {TESTIMONIALS_DATA[testimonialIdx].location}</p>
                      </div>
                    </div>
                  </div>

                  {/* Payout highlight card */}
                  <div className="w-full md:w-auto shrink-0 bg-slate-950/60 p-4 rounded-xl border border-white/5 text-center md:text-left space-y-1 max-w-[200px] mx-auto md:mx-0">
                    <span className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">Client Profile</span>
                    <div className="text-lg font-display font-black text-gold-light">{TESTIMONIALS_DATA[testimonialIdx].stats}</div>
                    <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[9px] font-bold uppercase tracking-wide">
                      <Check className="w-2.5 h-2.5 text-emerald-400" /> {TESTIMONIALS_DATA[testimonialIdx].badge}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slide Arrows */}
            <div className="flex justify-center md:justify-end gap-3 mt-6">
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full border border-white/10 hover:border-white/20 bg-slate-900/60 flex items-center justify-center text-slate-400 hover:text-white transition-all active:scale-95 animate-none"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full border border-white/10 hover:border-white/20 bg-slate-900/60 flex items-center justify-center text-slate-400 hover:text-white transition-all active:scale-95 animate-none"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* --- FAQ SECTION WITH DYNAMIC FILTERING & SEARCH --- */}
      <section id="faqs" className="py-24 px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-bold uppercase tracking-wider">
              Answers Hub
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              Frequently <span className="gold-gradient-text">Asked Questions</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
              Explore critical details about SEBI Advisory registrations, PMS capital management, and Angel One integration.
            </p>
          </div>

          {/* FAQ Controls Container */}
          <div className="space-y-4 mb-8 text-left">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-4 top-3 w-4 h-4 text-slate-500" />
              <input 
                type="text"
                placeholder="Search questions or keywords (e.g. SEBI, Demat, PMS)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-900/60 border border-white/10 rounded-2xl pl-11 pr-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all text-xs"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-3 text-[10px] text-slate-500 hover:text-slate-300 underline font-semibold"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Pill Tabs */}
            <div className="flex flex-wrap gap-1.5 justify-center pt-2">
              {faqCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFAQCategory(cat)}
                  className={cn(
                    "px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider border transition-all duration-300",
                    activeFAQCategory === cat 
                      ? "bg-gold text-slate-950 border-gold shadow-lg shadow-gold/15" 
                      : "bg-slate-900/40 border-white/5 text-slate-400 hover:text-white"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Accordion FAQ List */}
          <div className="glass-card border-white/10 bg-slate-900/60 p-6 shadow-xl space-y-2 text-left">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq, index) => {
                const [isOpen, setIsOpen] = useState(index === 0 && !searchQuery);
                return (
                  <div key={index} className="border-b border-white/5 last:border-none pb-2 last:pb-0">
                    <button 
                      onClick={() => setIsOpen(!isOpen)}
                      className="w-full flex items-center justify-between py-3 text-left hover:text-gold transition-colors group"
                    >
                      <span className="text-xs md:text-sm font-bold text-slate-200 group-hover:text-white transition-colors">{faq.question}</span>
                      <div className="w-6 h-6 bg-white/5 border border-white/5 rounded-full flex items-center justify-center shrink-0 ml-4 group-hover:border-white/20 transition-all">
                        {isOpen ? <Minus className="text-gold w-3.5 h-3.5" /> : <Plus className="text-gold w-3.5 h-3.5" />}
                      </div>
                    </button>
                    
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="pb-3 pt-0.5 text-slate-400 text-xs leading-relaxed max-w-2xl">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })
            ) : (
              <div className="text-center py-8 text-slate-500 space-y-2">
                <HelpCircle className="w-8 h-8 mx-auto text-slate-600" />
                <p className="text-xs font-semibold">No questions found matching your search.</p>
                <button 
                  onClick={() => { setSearchQuery(""); setActiveFAQCategory("All"); }}
                  className="text-xs text-gold underline font-bold"
                >
                  Reset filters
                </button>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* --- EMBEDDED CTA SECTION --- */}
      <section className="py-24 px-6 relative z-10 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-[3rem] bg-gradient-to-br from-blue-950/40 via-slate-950/40 to-purple-950/40 border border-blue-500/20 p-8 md:p-16 text-center relative overflow-hidden shadow-2xl shadow-slate-950"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <div className="absolute top-[-40%] left-[-20%] w-[60%] h-[120%] bg-blue-500/10 blur-[120px]" />
            <div className="absolute bottom-[-40%] right-[-20%] w-[60%] h-[120%] bg-purple-500/10 blur-[120px]" />
          </div>

          <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/15 border border-gold/30 text-gold text-xs font-bold uppercase tracking-wider">
              Schedule Your Free Consultation Slot
            </div>

            <h2 className="text-3xl md:text-5xl font-display font-black leading-tight text-white">
              Start Compounding <br />
              <span className="gold-gradient-text">Your Wealth Today</span>
            </h2>
            
            <p className="text-slate-400 text-xs md:text-sm max-w-md mx-auto leading-relaxed">
              Connect with SEBI-registered portfolio advisory expertise and open trading terminals to control your assets.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto pt-2">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="btn-gold py-3 px-6 text-xs font-bold text-slate-950 shadow-lg shadow-gold/10 hover:shadow-gold/20 flex-1"
              >
                Book Consultation Now
              </button>
              <button 
                onClick={() => setIsDematModalOpen(true)}
                className="btn-secondary py-3 px-6 text-xs font-bold flex-1 border-white/10 text-white"
              >
                Open Free Demat Account
              </button>
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[10px] text-slate-500 uppercase tracking-widest font-semibold">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 animate-none" /> SEBI RA Compliant</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 animate-none" /> Angel One Platforms</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 animate-none" /> Zero Advisory Fees initially</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- CONTACT & GET IN TOUCH SECTION --- */}
      <section id="about-us" className="py-24 px-6 relative z-10 max-w-7xl mx-auto border-t border-white/5">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Detail blocks */}
          <div className="lg:col-span-5 text-left space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-bold uppercase tracking-wider">
                Get In Touch
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-black text-white">
                Visit Us in <span className="gold-gradient-text">Mohali Office</span>
              </h2>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                All meetings are scheduled strictly by appointment. Contact us to reserve your consultation slot and our executive will confirm your details within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "Phone Channels",
                  desc: "+91 99889 88208",
                  sub: "Call or WhatsApp for slot details",
                  icon: Phone
                },
                {
                  title: "Email Support",
                  desc: "Support@assetaura.in",
                  sub: "For business queries & onboarding packets",
                  icon: Mail
                },
                {
                  title: "Registered Address",
                  desc: "Rich Robust, D-254, 5th Floor, GR Square Building, Sector 75, Mohali, Punjab",
                  sub: "SEBI Registered Advisory Center",
                  icon: MapPin
                },
                {
                  title: "Working Hours",
                  desc: "Monday – Friday (09:00 AM – 06:00 PM)",
                  sub: "Appointments booked in advance",
                  icon: Clock
                }
              ].map((item, idx) => {
                const ItemIcon = item.icon;
                return (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                      <ItemIcon className="text-gold w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs text-slate-500 font-bold uppercase tracking-widest">{item.title}</h4>
                      <div className="text-sm font-bold text-white mt-0.5">{item.desc}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5 font-medium">{item.sub}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Embedded Interactive Map/Card and Office description */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="glass-card border-white/10 bg-slate-900/60 p-6 md:p-8 shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-white">About Asset Aura</h3>
              <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                Asset Aura is among the few SEBI-registered investment advisory firms operating in the Mohali-Chandigarh region. Whether you are a salaried professional looking to start your wealth creation journey, a business owner seeking structured portfolio management, or a retiree planning capital preservation — we have a service model designed for your stage of life.
              </p>
              <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                Our Research Analyst registration with SEBI means every recommendation we make is bound by regulatory standards, disclosure requirements, and ethical guidelines. You are not receiving informal tips or unverified market gossip — you are receiving structured, accountable financial research.
              </p>
              <p className="text-slate-400 text-xs leading-relaxed">
                We serve clients across Mohali, Chandigarh, Panchkula, and the broader Punjab-Haryana region, with virtual consultations available for clients outside our immediate area.
              </p>

              <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-bold">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Verified Location & Regulatory Center</span>
                </div>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="btn-gold py-2.5 px-5 text-xs font-bold text-slate-950"
                >
                  Schedule Office Visit
                </button>
              </div>
            </div>

            {/* Quick alert badge */}
            <div className="glass-card bg-slate-950/60 p-4 border-white/5 text-xs text-slate-500 leading-normal flex gap-2">
              <ShieldAlert className="w-5 h-5 text-amber-500 shrink-0 mt-0.5 animate-none" />
              <span>
                Note: Walk-ins are not accepted. To maintain privacy and provide undivided attention during wealth consultations, kindly confirm your slot booking online.
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="pt-20 pb-10 px-6 border-t border-white/5 bg-slate-950/80 relative z-10 text-left">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
            
            {/* Column 1: Info */}
            <div className="lg:col-span-5 space-y-4">
              <a href="#" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <TrendingUp className="text-white w-4 h-4" />
                </div>
                <span className="text-lg font-display font-extrabold text-white">Asset Aura</span>
              </a>
              <p className="text-slate-500 text-xs leading-relaxed max-w-sm">
                Providing SEBI-registered Research Analyst investment advisory and Portfolio Management Services (PMS), alongside trading platforms and Demat solutions as an Authorised Person associated with Angel One.
              </p>
              <div className="flex gap-2">
                {[
                  { Icon: Twitter, link: "#" },
                  { Icon: Linkedin, link: "#" },
                  { Icon: Instagram, link: "#" },
                  { Icon: Facebook, link: "#" }
                ].map((item, i) => (
                  <a 
                    key={i} 
                    href={item.link} 
                    className="w-8 h-8 rounded-full bg-white/5 border border-white/5 flex items-center justify-center hover:bg-gold/15 hover:border-gold/30 hover:text-gold transition-all text-slate-400"
                  >
                    <item.Icon className="w-3.5 h-3.5 animate-none" />
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Links */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-[10px] uppercase font-extrabold tracking-widest text-slate-400">Offerings</h4>
              <ul className="space-y-2.5 text-xs text-slate-500 font-semibold">
                <li><a href="#offerings" className="hover:text-gold transition-colors">Portfolio Management (PMS)</a></li>
                <li><a href="#offerings" className="hover:text-gold transition-colors">Research Analyst Advisory</a></li>
                <li><a href="#offerings" className="hover:text-gold transition-colors">Mutual Fund Advisory</a></li>
                <li><a href="#demat-onboarding" className="hover:text-gold transition-colors">Angel One Demat Accounts</a></li>
                <li><a href="#education" className="hover:text-gold transition-colors">Stock Market Courses</a></li>
              </ul>
            </div>

            {/* Column 3: Legal */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-[10px] uppercase font-extrabold tracking-widest text-slate-400">Company</h4>
              <ul className="space-y-2.5 text-xs text-slate-500 font-semibold">
                <li><a href="#why-us" className="hover:text-gold transition-colors">Why Asset Aura</a></li>
                <li><a href="#process" className="hover:text-gold transition-colors">How We Work</a></li>
                <li><a href="#calculator" className="hover:text-gold transition-colors">Compounding Tool</a></li>
                <li><a href="#faqs" className="hover:text-gold transition-colors">Answers Hub</a></li>
                <li><a href="#about-us" className="hover:text-gold transition-colors">Registered Office</a></li>
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-[10px] uppercase font-extrabold tracking-widest text-slate-400">Contact</h4>
              <ul className="space-y-2 text-xs text-slate-500 font-semibold">
                <li className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-gold shrink-0" />
                  <a href="mailto:Support@assetaura.in" className="text-slate-400 hover:text-gold transition-colors">Support@assetaura.in</a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-gold shrink-0" />
                  <a href="tel:+919988988208" className="text-slate-400 hover:text-gold transition-colors">+91 99889 88208</a>
                </li>
                <li className="flex items-start gap-2">
                  <Globe className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                  <span className="text-slate-400 leading-normal">
                    GR Square Building, Sector 75,<br />
                    Mohali, Punjab, India
                  </span>
                </li>
              </ul>
            </div>

          </div>

          {/* Detailed compliance regulatory disclosures */}
          <div className="pt-8 border-t border-white/5 space-y-4 text-[10px] text-slate-600 leading-relaxed">
            <p>
              <strong className="text-slate-400">REGULATORY DISCLAIMER:</strong> Investments in securities markets are subject to market risks. Please read all related scheme and offer documents carefully before investing. Registration granted by SEBI, membership of stock exchanges, and certification from NISM do not guarantee the performance of intermediaries or assure returns to investors. Asset Aura does not guarantee returns or capital safety. Advisory recommendations are subject to fluctuations in capital markets.
            </p>
            <p>
              AssetAura acts as an Authorised Person associated with Angel One Limited (SEBI Registration Nos. Stock Broker: INZ000161534, Depository Participant: IN-DP-384-2018). Registered office of Angel One: G-1, Ground Floor, Akruti Trade Centre, Road No. 7, MIDC, Andheri (East), Mumbai - 400093. For client complaints, write directly to support@assetaura.in.
            </p>
            <p>
              The information provided on this website is intended solely for educational and informational purposes and should not be construed as legal advice, solicitation, or recommendation to buy or sell securities. Past performance is not indicative of future results.
            </p>
          </div>

          <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-slate-700">
            <p>&copy; {new Date().getFullYear()} Asset Aura Financial Services. All rights reserved.</p>
            <div className="flex gap-4 font-bold uppercase tracking-wider">
              <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-slate-800" /> SEBI COMPLIANT</span>
              <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-slate-800" /> ANGEL ONE PARTNER</span>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}
