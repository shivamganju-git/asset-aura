import React, { useState, useEffect, useRef } from 'react';
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
  BriefcaseBusiness,
  Target,
  Leaf
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const AssetAuraLogo = ({ className = "" }) => (
  <div className={`flex items-center gap-3 sm:gap-4 ${className}`}>
    {/* Left Icon Image */}
    <img src="/asset9.jpeg" alt="Asset Aura Icon" className="h-14 sm:h-16 w-auto object-contain mix-blend-multiply shrink-0" />

    {/* Vertical divider */}
    <div className="w-[1.5px] h-12 sm:h-14 bg-slate-300 rounded-full shrink-0"></div>

    {/* Text */}
    <div className="flex flex-col items-center justify-center gap-[2px]">
      <div className="flex items-baseline gap-1.5 leading-none">
        <span className="text-[22px] sm:text-[28px] font-black tracking-normal bg-clip-text text-transparent bg-gradient-to-r from-[#1e3b12] via-[#447833] to-[#1e3b12]" style={{ fontFamily: 'Arial, sans-serif' }}>ASSET</span>
        <span className="text-[22px] sm:text-[28px] font-black tracking-normal bg-clip-text text-transparent bg-gradient-to-r from-[#a37910] via-[#d4af37] to-[#a37910]" style={{ fontFamily: 'Arial, sans-serif' }}>AURA</span>
      </div>

      <div className="flex items-center gap-1.5 w-full mt-0.5">
        <div className="h-[1.5px] bg-[#447833] flex-1"></div>
        <span className="text-[8px] sm:text-[10px] font-bold tracking-[0.18em] text-[#447833] leading-none whitespace-nowrap" style={{ fontFamily: 'Arial, sans-serif' }}>
          INVESTMENT SERVICES
        </span>
        <div className="h-[1.5px] bg-[#447833] flex-1"></div>
      </div>

      <div className="flex items-center gap-1.5 w-full">
        <div className="h-[1px] bg-[#d4af37] flex-1 opacity-60"></div>
        <span className="text-[5.5px] sm:text-[7px] font-bold tracking-[0.15em] text-[#666666] leading-none whitespace-nowrap uppercase" style={{ fontFamily: 'Arial, sans-serif' }}>
          Aura that creates appreciating assets
        </span>
        <div className="h-[1px] bg-[#d4af37] flex-1 opacity-60"></div>
      </div>

      <div className="flex items-center gap-1 sm:gap-2 text-[5px] sm:text-[6.5px] font-bold text-[#447833] whitespace-nowrap uppercase tracking-widest justify-between w-full mt-0.5">
        <span className="flex items-center gap-0.5"><Target className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#447833]" /> PLAN SMART</span>
        <span className="text-[#447833]/40">|</span>
        <span className="flex items-center gap-0.5"><BarChart3 className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#447833]" /> INVEST WISE</span>
        <span className="text-[#447833]/40">|</span>
        <span className="flex items-center gap-0.5"><Leaf className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#447833]" /> GROW TOGETHER</span>
      </div>
    </div>
  </div>
);

const HighlightText = ({ text }) => {
  if (!text) return null;
  const parts = text.split(/(Angel One platform|Angel One)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part === 'Angel One platform' || part === 'Angel One') {
          return <span key={i} className="font-bold text-gold">{part}</span>;
        }
        return part;
      })}
    </>
  );
};

// --- CONSTANTS & DATA ---

const FAQ_DATA = [
  {
    question: "1. What is Asset Aura's relationship with Angel One?",
    answer: "Asset Aura is an Authorized Person/Sub-Broker of Angel One. We assist clients with Demat and Trading Account opening, onboarding, customer support, and access to financial products and services available through the Angel One platform.",
    category: "Regulatory"
  },
  {
    question: "2. How do I open a Demat & Trading Account?",
    answer: "Opening an account is simple. Register online, complete your digital KYC by submitting the required documents, and your account will be activated after successful verification. Our team will assist you throughout the process.",
    category: "Onboarding"
  },
  {
    question: "3. Which financial products can I access through the Angel One platform?",
    answer: "Through the Angel One platform, you can access: Equity Trading, Mutual Funds, SIPs, ETFs, IPOs, Bonds, F&O (Futures & Options), Insurance Products, and Portfolio Management Services (where applicable). Availability may vary depending on eligibility and regulatory requirements.",
    category: "Trading"
  },
  {
    question: "4. Does Asset Aura provide investment advice?",
    answer: "Asset Aura facilitates access to financial products and services available through the Angel One platform. We also provide investor education and platform support. Investment decisions remain entirely with the client.",
    category: "Advisory"
  },
  {
    question: "5. Is my money safe?",
    answer: "Yes. Your investments remain in your own Demat and Trading Account. Asset Aura never collects your trading funds directly, and you should never share your OTPs, passwords, or login credentials with anyone.",
    category: "Regulatory"
  },
  {
    question: "6. Can I invest online from anywhere in India?",
    answer: "Yes. You can open your Demat and Trading Account online and access the Angel One platform from anywhere in India. Our team also provides virtual onboarding and customer support.",
    category: "Onboarding"
  },
  {
    question: "7. Does Asset Aura provide support after my account is opened?",
    answer: "Yes. We continue to assist clients with account-related queries, platform navigation, onboarding support, and understanding the investment products available through the Angel One platform.",
    category: "Advisory"
  },
  {
    question: "8. Does Asset Aura charge separately for opening a Demat Account?",
    answer: "Our team will inform you about any applicable account opening charges or promotional offers offered through the Angel One platform, if applicable.",
    category: "Onboarding"
  },
  {
    question: "1. Why is financial education important before investing?",
    answer: "Financial education helps you understand investment products, market risks, and long-term wealth creation so you can make informed financial decisions with confidence.",
    category: "Education"
  },
  {
    question: "2. Do I need prior stock market knowledge?",
    answer: "No. Our educational resources are designed for beginners as well as experienced investors who want to improve their understanding of financial markets.",
    category: "Education"
  },
  {
    question: "3. What topics are covered?",
    answer: "Our educational content includes: Stock Market Basics, Equity Investing, Mutual Funds, SIPs, ETFs, IPOs, Futures & Options (Basics), Risk Management, Portfolio Diversification, and Financial Planning Concepts.",
    category: "Education"
  },
  {
    question: "4. Is the education free?",
    answer: "Yes. We provide educational resources, articles, webinars, and investor awareness content to help individuals better understand financial markets.",
    category: "Education"
  },
  {
    question: "5. Does educational content include investment recommendations?",
    answer: "No. Our educational content is intended solely to improve financial awareness and market understanding. It should not be considered personalized investment advice or a recommendation to buy or sell any security.",
    category: "Education"
  },
  {
    question: "6. Can beginners start learning?",
    answer: "Absolutely. Our learning resources begin with basic concepts and gradually cover more advanced topics, making them suitable for investors at all experience levels.",
    category: "Education"
  },
  {
    question: "7. How can I start investing after learning?",
    answer: "Once you're comfortable with the basics, you can open a Demat and Trading Account through the Angel One platform with assistance from Asset Aura and begin your investment journey.",
    category: "Education"
  },
  {
    question: "8. What investment products can I learn about?",
    answer: "You can learn about: Equities, Mutual Funds, SIPs, ETFs, IPOs, Bonds, Fixed Income Products, Derivatives (Basics), Insurance, and Portfolio Diversification.",
    category: "Education"
  },
  {
    question: "9. Will I learn how to use the Angel One platform?",
    answer: "Yes. We provide guidance on account onboarding and explain the key features of the Angel One platform, including market watchlists, order placement, portfolio tracking, and investment tools.",
    category: "Education"
  },
  {
    question: "10. How do I continue my learning journey?",
    answer: "Continue learning through our educational articles, webinars, investor awareness sessions, and platform resources while gaining practical experience with the Angel One platform.",
    category: "Education"
  }
];

const TESTIMONIALS_DATA = [
  {
    name: "Rahul Sharma",
    role: "Mohali",
    location: "Demat Account Opening",
    quote: "The account opening process was smooth and completely digital. The Asset Aura team guided me through every step, from KYC to activating my Angel One account. Their support made getting started easy.",
    stats: "Demat User",
    badge: "Account Setup",
    avatarGrad: "from-amber-400 to-amber-600"
  },
  {
    name: "Neha Verma",
    role: "Chandigarh",
    location: "Mutual Fund Investor",
    quote: "I wanted to start investing in mutual funds but wasn't sure where to begin. Asset Aura explained how the Angel One platform works and helped me complete the onboarding process quickly.",
    stats: "MF Investor",
    badge: "Wealth Creation",
    avatarGrad: "from-gold-dark to-gold"
  },
  {
    name: "Amanpreet Singh",
    role: "Panchkula",
    location: "Equity Investor",
    quote: "Excellent customer support throughout the onboarding process. The team helped me understand the platform features, and I was able to start investing without any hassle.",
    stats: "Active Trader",
    badge: "Platform Support",
    avatarGrad: "from-slate-300 to-slate-500"
  },
  {
    name: "Karan Mehta",
    role: "Punjab",
    location: "Trading Account Holder",
    quote: "The online account opening was quick, secure, and paperless. I appreciate the guidance provided by Asset Aura in getting started with the Angel One platform.",
    stats: "Trader",
    badge: "Digital Onboarding",
    avatarGrad: "from-emerald-400 to-emerald-600"
  }
];

const BLOGS_DATA = [
  {
    "id": 7,
    "title": "Beginner Investing: Start Your Investment Journey with Confidence",
    "excerpt": "Investing is an important step towards building long-term wealth and achieving your financial goals.",
    "date": "July 16, 2026",
    "category": "Education",
    "readTime": "5 min read",
    "imageUrl": "/Beginner Investing.png",
    "content": "<p>Beginner Investing: Start Your Investment Journey with Confidence</p>\n<h3 style='font-weight: 800; font-size: 1.5rem; color: #fff;'>Beginner Investing</h3>\n<p>Investing is an important step towards building long-term wealth and achieving your financial goals. Whether you're a student, salaried professional, or first-time investor, understanding the basics can help you make informed financial decisions.</p>\n<p>Asset Aura, an Authorized Person (AP) of Angel One Limited, assists you with Demat & Trading Account opening, digital onboarding, and platform support, giving you access to a wide range of investment products through the Angel One platform.</p>\n<h3><strong>What You Can Explore</strong></h3>\n<ul>\n<li><strong>Equity Investments</strong> \u2013 Invest in companies listed on NSE & BSE.</li>\n<li><strong>Mutual Funds & SIPs</strong> \u2013 Build wealth through professionally managed funds.</li>\n<li><strong>ETFs & IPOs</strong> \u2013 Diversify your portfolio with modern investment opportunities.</li>\n<li><strong>Bonds & Fixed Income</strong> \u2013 Explore investment options for portfolio stability.</li>\n</ul>\n<h3><strong>Why Start Investing Early?</strong></h3>\n<ul>\n<li>Build long-term wealth</li>\n<li>Stay ahead of inflation</li>\n<li>Achieve financial goals</li>\n<li>Benefit from disciplined investing</li>\n<li>Grow your investments over time</li>\n</ul>\n<h3><strong>How to Get Started</strong></h3>\n<ul>\n<li>Open a Demat & Trading Account.</li>\n<li>Complete your digital KYC.</li>\n<li>Learn about different investment products.</li>\n<li>Start investing according to your financial goals and risk tolerance.</li>\n</ul>\n<h3><strong>Why Choose Asset Aura?</strong></h3>\n<ul>\n<li><strong>Authorized</strong> Person of Angel One Limited</li>\n<li>Quick & Paperless Account Opening</li>\n<li>Dedicated Platform Support</li>\n<li>Investor Education & Financial Awareness</li>\n<li>Secure Access to the Angel One Platform</li>\n</ul>\n<h3 style='font-weight: 800; font-size: 1.5rem; color: #fff;'>Start Your Investment Journey Today</h3>\n<p>Open your Demat & Trading Account with Asset Aura and access a comprehensive range of investment opportunities through the trusted Angel One platform.</p>\n<p style='font-style: italic; color: #cbd5e1;'><strong>Disclaimer:</strong> Asset Aura is an Authorized Person (AP) of Angel One Limited. We facilitate account opening, onboarding, and access to financial products through the Angel One platform. This content is for educational purposes only and does not constitute investment advice. Investments are subject to market risks. Please read all related documents carefully before investing.</p>"
  },
  {
    "id": 8,
    "title": "Top 5 Reasons Health Insurance Gets Rejected",
    "excerpt": "Understanding why claims get flagged is the absolute best way to make sure your financial safety net actually catches you when you fall.",
    "date": "July 16, 2026",
    "category": "Insurance",
    "readTime": "7 min read",
    "imageUrl": "/claim.png",
    "content": "<h3><strong>The Heartbreak of a Denied Claim: Top 5 Reasons Health Insurance Gets Rejected (and How to Shield Yourself)</strong></h3>\n<p>There is nothing quite like the stomach-drop moment of opening an email from your health insurance provider, expecting a reimbursement confirmation, and seeing the word REJECTED in bold text.</p>\n<p>You paid your premiums on time, you went to the hospital, you got treated- so what gives?</p>\n<p>In reality, a massive chunk of health insurance claim denials don't happen because the insurer is trying to cheat you. They happen because of preventable technicalities, hidden clauses, or honest mistakes made during application or discharge.</p>\n<p>Understanding why claims get flagged is the absolute best way to make sure your financial safety net actually catches you when you fall. Let's break down the top five culprits behind claim rejections and exactly how to beat them.</p>\n<h3><strong>1. Non-Disclosure of Pre-Existing Conditions (PED)</strong></h3>\n<p>This is the reigning heavyweight champion of claim rejections, accounting for a staggering percentage of denied payouts.</p>\n<p>When you buy a policy, insurers ask about your medical history. If you omit a diagnosis\u2014like high blood pressure, asthma, diabetes, or a minor surgery from three years ago\u2014you risk a total claim rejection later. When you file a claim, insurers scrutinize your hospital records. If a doctor notes that your condition is linked to a long-term issue you never declared, the insurer has full legal grounds to deny the claim and even cancel your policy for fraud.</p>\n<p>How to avoid it: Be brutally honest during the application stage. It is always better to pay a slightly higher premium due to a declared condition than to pay a lower premium for a policy that gives you zero coverage when it matters.</p>\n<h3><strong>2. Walking Right Into a \"Waiting Period\"</strong></h3>\n<p>Many policyholders are shocked to learn that just because a policy is active doesn't mean everything is covered instantly. Standard health insurance policies feature layered waiting periods:</p>\n<p><strong>Initial Waiting Period:</strong> Usually the first 30 days of a new policy (except for accidental hospitalizations).</p>\n<p><strong>Specific Illness Waiting Period:</strong> A 1-to-2-year wait for slow-growing, predictable conditions like cataracts, hernias, kidney stones, or joint replacements.</p>\n<p><strong>PED Waiting Period:</strong> A 2-to-4-year wait before any pre-existing conditions are covered.  Filing a claim for these conditions before the clock runs out results in an automatic rejection.</p>\n<p>How to avoid it: Read your policy wordings to know exactly what the timelines are. If you have a known issue like a hernia, check your specific waiting period matrix before scheduling a non-emergency procedure.</p>\n<h3><strong>3. The Paperwork Trap (Missing or Incomplete Docs)</strong></h3>\n<p>If you opt for a reimbursement claim instead of a cashless settlement, you become the administrative bridge between the hospital and the insurer.</p>\n<p>Missing a single original pharmacy receipt, submitting an illegible handwritten doctor's note, or failing to provide diagnostic test reports (like an X-ray film or blood report) to back up your diagnosis will cause the insurer to pull the plug on your claim.</p>\n<p>How to avoid it: Treat documentation like a high-stakes audit.</p>\n<p><strong>Collect the Discharge Summary</strong></p>\n<ul>\n<li>At the billing desk.</li>\n<li>Ensure the doctor explicitly lists the diagnosis, treatment given, and the exact times of admission and discharge.</li>\n</ul>\n<p><strong>Gather itemized original bills</strong></p>\n<ul>\n<li>No summaries.</li>\n<li>Ask for detailed, itemized receipts for every capsule, syringe, and room charge. Insurers reject vague \"package deals\" or missing receipts.</li>\n</ul>\n<p><strong>Cross-verify names and codes</strong></p>\n<ul>\n<li>Double check details.</li>\n<li>Ensure your name matches your insurance card exactly. Check that the hospital entered the correct treatment codes to avoid diagnostic mismatches.</li>\n</ul>\n<h3><strong>4. Missing the Strict \"Intimation\" Window</strong></h3>\n<p>Did you know you can't just file your paperwork whenever you feel like it? Insurers enforce strict deadlines.</p>\n<p><strong>Cashless Claims:</strong> The insurer usually requires notification at least 48 to 72 hours before a planned surgery, or within 24 hours of an emergency admission.</p>\n<p><strong>Reimbursement Claims:</strong> You generally have a strict 7-to-30-day window post-discharge to submit all physical documents.</p>\n<p>If you blow past these deadlines without a rock-solid, legally documented excuse, your claim will face procedural rejection.</p>\n<p>How to avoid it: The moment a doctor mentions hospitalization, call your insurer's toll-free number or drop an email to officially \"intimate\" the claim. Take down the claim reference number immediately.</p>\n<h3><strong>5. Overlooking Policy Exclusions and Room Rent Caps</strong></h3>\n<p>Every insurance policy has a \"no-go zone\" called permanent exclusions. Standard policies routinely exclude cosmetic procedures, fertility treatments, or admissions purely for diagnostic testing or observation (where no active treatment is given).</p>\n<p>Furthermore, many people face partial rejections because of room rent sub-limits. If your policy caps your room rent at 1% of your sum insured (e.g., \u20b95,000 a day on a \u20b95 Lakh policy), but you check into a luxury suite costing \u20b910,000 a day, the insurer won't just reject the extra room cost\u2014they will proportionately slash your coverage for everything linked to that stay, including doctor visits and surgery costs.</p>\n<p>How to avoid it: Check the \"Exclusions\" section of your policy during your 15-day free-look period. Before checking into a hospital, ask the administrative desk for a room that aligns exactly with your policy\u2019s daily cap.</p>\n<h3><strong>The Golden Rule</strong></h3>\n<p>Insurance is a contract based on absolute good faith. Being fully transparent at the start and meticulously organized at the finish line is your absolute best defense against a denied claim.</p>"
  },
  {
    "id": 9,
    "title": "Why Skipping Health Insurance at 25 is a Risky Gamble",
    "excerpt": "Health insurance isn't a medical product; it's a financial one. Let's break down exactly why skipping it right now is the most expensive gamble.",
    "date": "July 16, 2026",
    "category": "Insurance",
    "readTime": "6 min read",
    "imageUrl": "/health.png",
    "content": "<p>You\u2019re 25. You crush your workouts, your diet is reasonably clean, and the only \"doctor\" you\u2019ve seen in the last three years is the one who cleared you for a driver's license renewal. You feel invincible, and honestly, you have every right to feel that way. Your body is operating at its peak. So, when a personal finance checklist tells you to go shell out hard-earned money on a health insurance premium, it\u2019s completely natural to think: \u201cWhy? Isn\u2019t that just burning money for something I\u2019m not even using?\u201d It feels like buying an extended warranty for a smartphone you plan to upgrade in six months. But here is the perspective shift that almost everyone misses in their mid-20s: Health insurance isn't a medical product; it\u2019s a financial one.</p>\n<p>Let's break down exactly why skipping it right now is actually the most expensive gamble you can make.</p>\n<h3><strong>1. The \"Invincibility\" Myth Meets Reality</strong></h3>\n<p>You might have zero chronic conditions, but healthy habits don't make you immune to life. The unexpected stuff: Acute appendicitis, food poisoning that puts you on an IV, or a sudden bout of dengue don't care about your gym routine.</p>\n<p>The accidental stuff: A slick road, an erratic driver, or a bad fall while playing weekend sports can land you in a private hospital instantly.</p>\n<p>A standard 3-day hospital stay for something as ordinary as a severe infection or a minor fracture can easily rack up a massive bill. If you don't have insurance, that money comes straight out of your hard-earned savings, completely derailing your short-term financial goals.</p>\n<h3><strong>2. You\u2019ll Never Be This \"Cheap\" Again</strong></h3>\n<p>Insurance companies calculate your premium based on risk. At 25, you represent almost zero risk to them, which means they will offer you the lowest premiums you will see in your entire adult life.</p>\n<ul>\n<li><strong>Buying at 25</strong>  -->  Lowest Premium Possible (Locked-in Advantage)</li>\n<li><strong>Buying at 35</strong>  -->  ~40% Higher Premium + Potential Lifestyle Diseases</li>\n<li><strong>Buying at 45</strong>  -->  ~100%+ Higher Premium + Strict Medical Screenings</li>\n</ul>\n<p>By lock-in, it means you can secure a high sum insured (like \u20b910 Lakhs or more) for a tiny annual premium. If you wait until your 30s or 40s, not only do the prices skyrocket, but the likelihood of having a mild lifestyle condition (like high blood pressure or early signs of diabetes) rises. Once you have those, insurers will either hike your premiums even further or exclude coverage for those conditions entirely.</p>\n<h3><strong>3. The \"Waiting Period\" Strategy</strong></h3>\n<p>Every health insurance policy comes with a catch called a waiting period. For certain slow-growing ailments or pre-existing conditions, you cannot file a claim for the first 2 to 4 years of the policy.</p>\n<p>The Pro Move: Buy insurance when you don't need it. By doing this, you run down those mandatory waiting periods while you are perfectly healthy. By the time you actually do need to use the policy years down the line, every single benefit is fully active and unlocked.</p>\n<h3><strong>4. Free Upgrades: The No-Claim Bonus (NCB)</strong></h3>\n<p>Because you're healthy, you likely won't claim insurance for the first few years. Insurers reward this through a No-Claim Bonus. For every year you don't make a claim, they automatically increase your coverage amount (often by 10% to 50%) without raising your premium.</p>\n<p>By the time you reach your 30s, a policy you bought with a \u20b95 Lakh cover could have grown into a \u20b910 Lakh cover entirely for free.</p>\n<h3><strong>5. The Corporate Cover Fallacy</strong></h3>\n<p>\u201cBut my company gives me free health insurance!\u201d</p>\n<p>This is the most common reason 25-year-olds skip individual policies. Relying only on employer-provided insurance is a major financial risk because:</p>\n<ul>\n<li><strong>It vanishes when you leave:</strong> The moment you switch jobs, get laid off, or take a break to pursue higher studies or start a business, you are left completely uninsured.</li>\n<li><strong>Sub-limits:</strong> Corporate policies often come with heavy restrictions, like capping room rents or specific disease payouts, forcing you to pay the difference out of pocket.</li>\n</ul>\n<h3><strong>The Verdict</strong></h3>\n<p>Think of buying health insurance at 25 as buying a protective shield for your bank account. It ensures that no matter what curveball life throws at you, your savings, your investments, and your financial independence remain completely untouched. It\u2019s cheap, it builds a massive bonus over time, and it gives you total peace of mind to take risks in your career and life. Don't wait for a medical wake-up call to figure this out.</p>"
  },
  {
    "id": 10,
    "title": "Nominee vs. Legal Heir: Don't Let Your Family Fight Over Claims",
    "excerpt": "If your nominations and estate planning are not aligned, you might unintentionally be setting your family up for a prolonged legal battle.",
    "date": "July 16, 2026",
    "category": "Wealth Management",
    "readTime": "8 min read",
    "imageUrl": "/nominee.png",
    "content": "<p>Nominee vs. Legal Heir: Don't Let Your Family Fight Over Claims</p>\n<p>Imagine this scenario: A family is grieving the sudden loss of a patriarch. Once the initial shock settles, they begin the process of wrapping up his financial affairs. The daughter knows she was officially named as the nominee on her father's bank accounts and stock portfolio. Relief washes over her\u2014until her brother and mother step in with a lawyer, claiming that the money legally belongs to all three of them equally.</p>\n<p>A dramatic family feud ensues, all because of a massive financial misconception.</p>\n<p>Most people fill out the \"Nominee\" section on bank forms, mutual funds, or insurance applications believing they have successfully secured that asset for that specific person. In reality, under Indian law, a nominee is rarely the ultimate owner of your wealth.</p>\n<p>If your nominations and estate planning are not aligned, you might unintentionally be setting your family up for a prolonged legal battle. Let\u2019s break down the critical difference between a Nominee and a Legal Heir so you can protect your loved ones.</p>\n<h3><strong>The Core Difference: Custodian vs. Owner</strong></h3>\n<p>The simplest way to understand the two roles is by looking at their legal definitions:</p>\n<p><strong>The Nominee (The Custodian):</strong> A nominee is merely a trustee or a convenient point of contact chosen by you to receive the assets from a financial institution upon your death. The bank or insurance company\u2019s job ends once they hand the money over to the nominee. However, the nominee cannot just keep or spend the money as they please\u2014they are legally obligated to hold it in trust until it can be distributed to the rightful owners.</p>\n<p><strong>The Legal Heir (The True Owner):</strong> A legal heir is the individual legally entitled to inherit and own your assets. This is determined either by a valid Will you leave behind, or by the personal succession laws governing your religion (e.g., the Hindu Succession Act or the Indian Succession Act) if you die without a Will.</p>\n<p><strong>The Golden Rule:</strong> The nominee receives the money from the financial institution, but the legal heir ultimately owns the money. If the nominee and the legal heir are different people, the nominee must legally hand over the asset to the legal heir.</p>\n<h3><strong>How it Works Across Different Financial Assets?</strong></h3>\n<p>The law treats various asset classes differently, which can add to the confusion. Landmark Supreme Court rulings have firmly established that succession law overrides nomination rules for almost all assets. Here is how it breaks down across your portfolio:</p>\n<p><strong>Bank Accounts & Fixed Deposits:</strong> The nominee can withdraw the funds easily to clear the account, but they act strictly as a temporary custodian. The ultimate ownership rests entirely with the Legal Heirs.</p>\n<ul>\n<li><strong>Mutual Funds & Shares (Demat):</strong> The nominee receives the units or shares transferred into their name from the fund house or depository. However, the Supreme Court has reaffirmed that a Demat nominee is just a trustee, and the final legal right belongs to the Legal Heirs.</li>\n</ul>\n<p><strong>Life Insurance:</strong> The nominee receives the entire claim payout directly from the insurer. However, if you name an immediate family member (spouse, children, or parents), they become Beneficial Nominees and legally own the money. If you name a friend or distant relative, they act only as trustees for the Legal Heirs.</p>\n<p><strong>EPF & PPF:</strong> The nominee receives the accumulated retirement corpus. Employees' Provident Fund rules strictly mandate nominating a family member, and the nominee generally holds strong statutory rights over the fund compared to other assets.</p>\n<p><strong>Real Estate (Property):</strong> There is no formal nomination system for physical real estate. Property passes solely through a Will or personal succession laws to the Legal Heirs.</p>\n<h3><strong>How to Prevent Family Conflicts: A Step-by-Step Guide</strong></h3>\n<p>Mismatches between who is named in the bank records and who is named in a Will are the single most common cause of painful, multi-year court cases within families. Here is how you can completely eliminate the risk of an estate dispute:</p>\n<h3><strong>1. Harmonize Your Nominations and Your Will</strong></h3>\n<p>The ultimate \"pro move\" in estate planning is alignment. If you want your spouse to inherit your mutual funds, ensure that they are both the Nominee in the mutual fund folio and the Beneficiary named in your Will. When both match, there is absolutely zero ground for a legal dispute.</p>\n<h3><strong>2. Write a Valid Will</strong></h3>\n<p>Do not rely solely on nominations to distribute your wealth. A Will is a supreme legal document that explicitly states your wishes and overrides general personal succession laws. Even a simple, typed Will signed by two independent witnesses can save your family from a mountain of legal paperwork.</p>\n<h3><strong>3. Review Details After Major Life Events</strong></h3>\n<p>Many people fill out a nomination form when they start their first job at age 22, naming a parent or sibling. Fast-forward fifteen years: they are married with children, but the old nomination remains unchanged. Make it a habit to audit and update your nominations across all bank accounts, insurance policies, and Demat accounts after major milestones like marriage, the birth of a child, or the passing of a family member.</p>\n<h3><strong>4. Talk Openly with Your Family</strong></h3>\n<p>Transparency is the enemy of conflict. Sit down with your primary family members and clearly explain where your assets are, who you have nominated, and how you intend for your estate to be divided.</p>\n<h3><strong>The Takeaway</strong></h3>\n<p>Nominations are designed to make life easy for financial institutions and give your family immediate financial relief without waiting months for court succession certificates. But to guarantee that the money stays with the people you love, you must back up those nominations with a solid Will. Take an hour this week to check your financial dashboards\u2014your family's future peace of mind depends on it.</p>"
  }
];

const OFFERINGS_DATA = {
  product: {
    column1: [
      { name: "Equity", key: "equity" },
      { name: "Alternative Investment Fund (AIF)", key: "aif" },
      { name: "Mutual Funds", key: "mutual_funds" },
      { name: "Investment Basket", key: "investment_basket" },
      { name: "NRI Investing", key: "nri" },
      { name: "Fixed Income (Bonds & FDs)", key: "fixed_income" }
    ],
    column2: [
      { name: "Derivatives", key: "derivatives" },
      { name: "IPOs", key: "ipos" },
      { name: "Portfolio Management Services (PMS)", key: "pms" },
      { name: "Margin Trading Facility (MTF)", key: "mtf" },
      { name: "Commodity", key: "commodity" },
      { name: "Insurance", key: "insurance" }
    ]
  },
  plan: {
    column1: [
      { name: "Wealth Builder Journey", key: "wealth_plan" },
      { name: "Retirement Planning", key: "retirement_plan" },
      { name: "Tax Saving Investments", key: "tax_plan" },
      { name: "Children's Future Planning", key: "education_plan" }
    ],
    column2: [
      { name: "Portfolio Solutions", key: "portfolio_solutions" },
      { name: "HNI Investment Solutions", key: "hni_wealth" },
      { name: "Corporate Investment Solutions", key: "corporate_treasury" },
      { name: "Alternative Investment Opportunities", key: "alternative_opportunities" }
    ]
  }
};

const PRODUCT_DETAILS = {
  equity: {
    name: "Equity",
    title: "Equity Trading Through the Angel One Platform",
    sub: "Invest in India's Leading Companies with Confidence",
    whyTitle: "Why Invest in Equities?",
    whyDesc: "Access equity markets through the Angel One platform with support from Asset Aura. We assist you with Demat & Trading Account opening, digital onboarding, and platform guidance, helping you invest in companies listed on the NSE and BSE.",
    points: [
      "Invest in NSE & BSE listed companies",
      "Long-term wealth creation opportunities",
      "Real-time trading platform",
      "Advanced charts & market tools",
      "Secure Demat & Trading Account"
    ],
    ctaText: "Open Demat Account"
  },
  aif: {
    name: "Alternative Investment Fund (AIF)",
    title: "Alternative Investment Funds Through the Angel One Platform",
    sub: "Explore Alternative Investment Opportunities",
    whyTitle: "Key Benefits",
    whyDesc: "Eligible investors can access Alternative Investment Funds (AIFs) through the Angel One platform. These professionally managed funds provide exposure to alternative asset classes beyond traditional investments.",
    points: [
      "Diversified investment opportunities",
      "Professionally managed funds",
      "Long-term wealth creation",
      "Access for eligible investors"
    ],
    ctaText: "Learn More"
  },
  mutual_funds: {
    name: "Mutual Funds",
    title: "Mutual Funds Through the Angel One Platform",
    sub: "Invest for Every Financial Goal",
    whyTitle: "Benefits",
    whyDesc: "Access thousands of mutual fund schemes through the Angel One platform. Choose from Equity, Debt, Hybrid, Index, and Thematic Funds while investing through SIP or Lump Sum.",
    points: [
      "SIP & Lump Sum Investments",
      "Goal-based investing",
      "Professional fund management",
      "Easy online investing"
    ],
    ctaText: "Start SIP"
  },
  investment_basket: {
    name: "Investment Baskets",
    title: "Curated Investment Baskets",
    sub: "Diversify with Ready-Made Portfolios",
    whyTitle: "Benefits",
    whyDesc: "Investment Baskets available through the Angel One platform help investors diversify by investing in carefully selected groups of stocks based on themes and sectors.",
    points: [
      "One-click investing",
      "Diversified portfolio",
      "Theme-based strategies",
      "Easy portfolio management"
    ],
    ctaText: "Explore Baskets"
  },
  nri: {
    name: "NRI Investing",
    title: "NRI Investment Services",
    sub: "Invest in India from Anywhere",
    whyTitle: "Available Products",
    whyDesc: "Asset Aura assists eligible NRIs with account opening and access to investment opportunities through the Angel One platform, subject to applicable regulations.",
    points: [
      "Equity",
      "Mutual Funds",
      "IPOs",
      "Fixed Income"
    ],
    ctaText: "Open NRI Account"
  },
  fixed_income: {
    name: "Fixed Income (Bonds & FDs)",
    title: "Bonds & Fixed Income Investments",
    sub: "Stable Investment Solutions",
    whyTitle: "Benefits",
    whyDesc: "Access Fixed Income investment products including Bonds and Fixed Deposits available through the Angel One platform.",
    points: [
      "Stable returns",
      "Capital preservation",
      "Portfolio diversification",
      "Regular income opportunities"
    ],
    ctaText: "Explore Fixed Income"
  },
  derivatives: {
    name: "Derivatives",
    title: "Futures & Options Trading",
    sub: "Advanced Trading Through the Angel One Platform",
    whyTitle: "Platform Features",
    whyDesc: "Trade Futures & Options using Angel One's advanced trading technology with fast execution and real-time market insights.",
    points: [
      "Live market data",
      "Advanced charting",
      "Fast order execution",
      "Risk management tools"
    ],
    ctaText: "Start Trading"
  },
  ipos: {
    name: "IPOs",
    title: "Apply for IPOs Online",
    sub: "Invest in New Opportunities",
    whyTitle: "Benefits",
    whyDesc: "Apply for IPOs digitally through the Angel One platform using a quick and secure online application process.",
    points: [
      "Online IPO applications",
      "UPI payments",
      "Real-time application tracking",
      "Paperless process"
    ],
    ctaText: "Apply for IPO"
  },
  pms: {
    name: "Portfolio Management Services (PMS)",
    title: "Portfolio Management Services",
    sub: "Access PMS Through the Angel One Platform",
    whyTitle: "Benefits",
    whyDesc: "Eligible investors can access Portfolio Management Services offered through the Angel One platform. These services are managed by SEBI-registered Portfolio Managers based on individual investment objectives and risk profiles.",
    points: [
      "Professional portfolio management",
      "Customized investment approach",
      "Transparent reporting",
      "Long-term wealth management"
    ],
    ctaText: "Know More"
  },
  mtf: {
    name: "Margin Trading Facility (MTF)",
    title: "Margin Trading Facility",
    sub: "Increase Your Buying Power",
    whyTitle: "Benefits",
    whyDesc: "The Margin Trading Facility available through the Angel One platform enables eligible investors to buy securities by paying only a portion of the total value, subject to applicable regulations.",
    points: [
      "Higher purchasing power",
      "Flexible funding",
      "Transparent charges",
      "Easy online monitoring"
    ],
    ctaText: "Explore MTF"
  },
  commodity: {
    name: "Commodity",
    title: "Commodity Trading",
    sub: "Trade Commodities Through the Angel One Platform",
    whyTitle: "Benefits",
    whyDesc: "Access commodity markets including precious metals, energy, and agricultural commodities using Angel One's secure trading platform.",
    points: [
      "Live commodity prices",
      "Advanced trading tools",
      "Fast execution",
      "Secure trading platform"
    ],
    ctaText: "Start Commodity Trading"
  },
  insurance: {
    name: "Insurance",
    title: "Insurance Solutions",
    sub: "Protect What Matters Most",
    whyTitle: "Available Products",
    whyDesc: "Access Life and Health Insurance products through the Angel One platform. Our team helps you understand policy features and complete the onboarding process.",
    points: [
      "Life Insurance",
      "Health Insurance",
      "Term Plans",
      "Family Protection Plans"
    ],
    ctaText: "Explore Insurance"
  },
  wealth_plan: {
    name: "Wealth Builder Journey",
    title: "Build Long-Term Wealth Through the Angel One Platform",
    sub: "Create a Strong Financial Future",
    whyTitle: "Suitable For",
    whyDesc: "Whether you're beginning your investment journey or looking to grow your portfolio, Asset Aura helps you access investment opportunities through the Angel One platform. Build wealth over time with equities, mutual funds, ETFs, SIPs, and other investment products that align with your long-term financial goals.",
    points: [
      "Young Professionals",
      "Salaried Individuals",
      "Business Owners",
      "First-Time Investors"
    ],
    ctaText: "Start Your Wealth Journey"
  },
  retirement_plan: {
    name: "Retirement Planning",
    title: "Plan Today for a Secure Tomorrow",
    sub: "Invest for Your Retirement Goals",
    whyTitle: "Investment Options",
    whyDesc: "A well-planned retirement strategy helps create financial independence. Through the Angel One platform, you can access investment products designed for long-term wealth accumulation and retirement planning.",
    points: [
      "Mutual Funds",
      "SIPs",
      "Bonds",
      "Fixed Income",
      "Equity Investments"
    ],
    ctaText: "Plan Your Retirement"
  },
  tax_plan: {
    name: "Tax Saving Investments",
    title: "Save Tax While Building Wealth",
    sub: "Explore Tax-Efficient Investment Options",
    whyTitle: "Investment Options",
    whyDesc: "Asset Aura helps clients access eligible tax-saving investment products available through the Angel One platform. Understand available options and invest according to applicable tax laws.",
    points: [
      "ELSS Mutual Funds",
      "Tax-efficient investments",
      "SIP Investments"
    ],
    ctaText: "Explore Tax Saving Investments"
  },
  education_plan: {
    name: "Children's Future Planning",
    title: "Invest for Your Child's Dreams",
    sub: "Build a Financial Foundation",
    whyTitle: "Suitable Goals",
    whyDesc: "Plan today for your child's education and future aspirations by investing through the Angel One platform.",
    points: [
      "Higher Education",
      "Overseas Studies",
      "Marriage Planning",
      "Long-term Savings"
    ],
    ctaText: "Start Future Planning"
  },
  portfolio_solutions: {
    name: "Portfolio Solutions",
    title: "Access Portfolio Solutions Through the Angel One Platform",
    sub: "Diversified Investment Opportunities",
    whyTitle: "Benefits",
    whyDesc: "Eligible investors can access professionally managed portfolio solutions available through the Angel One platform, subject to applicable eligibility criteria.",
    points: [
      "Diversification",
      "Professional management",
      "Transparent reporting",
      "Long-term investing"
    ],
    ctaText: "Learn More"
  },
  hni_wealth: {
    name: "HNI Investment Solutions",
    title: "Investment Solutions for High Net Worth Individuals",
    sub: "Premium Investment Opportunities",
    whyTitle: "Available Products",
    whyDesc: "Explore investment products and wealth solutions available for High Net Worth Individuals through the Angel One platform.",
    points: [
      "Equity Investments",
      "PMS (where applicable)",
      "AIF (where applicable)",
      "Bonds",
      "Alternative Investments"
    ],
    ctaText: "Connect With Us"
  },
  corporate_treasury: {
    name: "Corporate Investment Solutions",
    title: "Investment Solutions for Businesses",
    sub: "Manage Corporate Investments Efficiently",
    whyTitle: "Available Services",
    whyDesc: "Asset Aura assists eligible corporate clients in accessing investment products and treasury solutions available through the Angel One platform.",
    points: [
      "Corporate Demat Account",
      "Treasury Investments",
      "Bonds",
      "Mutual Funds",
      "Equity Investments"
    ],
    ctaText: "Contact Our Team"
  },
  alternative_opportunities: {
    name: "Alternative Investment Opportunities",
    title: "Explore Alternative Investments",
    sub: "Diversify Beyond Traditional Investments",
    whyTitle: "Investment Opportunities",
    whyDesc: "Eligible investors can access Alternative Investment opportunities available through the Angel One platform, subject to regulatory guidelines and eligibility requirements.",
    points: [
      "Alternative Investment Funds (AIFs)",
      "Structured Investment Products",
      "Premium Investment Solutions"
    ],
    ctaText: "Explore Opportunities"
  },
  default: {
    name: "Financial Services",
    title: "Premium Investing Solutions",
    sub: "Whatever your investing style, we have a solution for you!",
    whyTitle: "Why Invest with Asset Aura?",
    whyDesc: "Elite portfolio management and direct market access backed by SEBI-registered professionals.",
    points: [
      "Complete transparency and security with funds in your demat account",
      "Data-backed research reports and market-beating strategies",
      "Integrated tools for tracking returns, risk, and goals"
    ],
    ctaText: "Start Investing"
  }
};

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
            <div className="mt-6">
              <div className="text-center space-y-2 mb-8">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-[9px] font-bold uppercase tracking-wider mb-2">
                  <Award className="w-3 h-3 text-gold" /> Angel One Ltd. is a SEBI-registered Stock Broker
                </div>
                <h2 className="text-3xl font-display font-bold text-slate-100">Book Free <span className="gold-gradient-text">Consultation</span></h2>
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
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-slate-950/60 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all text-xs"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300">Service of Interest</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
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
                      onChange={(e) => setFormData({ ...formData, slot: e.target.value })}
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
                  className="btn-gold w-full py-3.5 text-sm mt-2 flex items-center justify-center gap-2 group text-slate-50 font-bold"
                >
                  {isSubmitting ? (
                    <span className="w-4 h-4 border-2 border-slate-50 border-t-transparent rounded-full animate-spin" />
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
            <div className="mb-6 mt-8">
              <div className="flex justify-between text-[10px] text-slate-500 uppercase font-semibold mb-2">
                <span>Step {step} of 3</span>
                <span>{step === 1 ? 'Personal Info' : step === 2 ? 'Regulatory KYC' : 'E-Sign & Launch'}</span>
              </div>
              <div className="w-full h-1 bg-slate-950 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-gold-dark via-gold to-gold-light transition-all duration-300"
                  style={{ width: `${(step / 3) * 100}%` }}
                />
              </div>
            </div>
          )}

          {step === 1 && (
            <div>
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white text-slate-950 text-[10px] font-extrabold mb-2 uppercase tracking-wide shadow-md">
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
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-950/60 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all text-xs"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-gold w-full py-3 mt-4 text-xs font-bold text-slate-50 flex items-center justify-center gap-1.5"
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
                    onChange={(e) => setFormData({ ...formData, pan: e.target.value.toUpperCase() })}
                    className="w-full bg-slate-950/60 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all text-xs uppercase"
                  />
                </div>

                <div className="glass-card bg-slate-950/60 p-4 rounded-xl border-white/5 space-y-3">
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={formData.kycCheck}
                      onChange={(e) => setFormData({ ...formData, kycCheck: e.target.checked })}
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
                    className="btn-gold flex-1 py-3 text-xs font-bold text-slate-50 flex items-center justify-center gap-1"
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
                    className="btn-gold flex-1 py-3 text-xs font-bold text-slate-50 flex items-center justify-center gap-1.5"
                  >
                    {isSubmitting ? (
                      <span className="w-4 h-4 border-2 border-slate-50 border-t-transparent rounded-full animate-spin" />
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
                  <span>Support Line: <span className="text-white font-semibold">sardararshpreetsingh@gmail.com</span></span>
                </div>
              </div>

              <button onClick={onClose} className="btn-gold w-full py-3 text-xs font-bold shadow-lg shadow-gold/15">
                Go to Angel One Web Portal
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

const PartnerProgramModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
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
            <div className="mt-2 text-center">
              <h2 className="text-3xl font-display font-bold text-slate-100 mb-4">Grow Your Business with <br /><span className="gold-gradient-text">Asset Aura</span></h2>
              <p className="text-slate-300 text-sm mb-8 leading-relaxed">
                Join our Partner Program and unlock opportunities to earn by referring clients for Demat accounts, investment products, and financial services. Benefit from dedicated support, digital tools, and a trusted financial ecosystem.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300">Full Name</label>
                    <input type="text" required placeholder="e.g. John Doe" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full bg-slate-950/60 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all text-xs" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300">Phone Number</label>
                    <input type="tel" required pattern="[0-9]{10}" placeholder="e.g. 9988988208" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full bg-slate-950/60 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all text-xs" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">Email Address</label>
                  <input type="email" required placeholder="e.g. partner@example.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full bg-slate-950/60 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all text-xs" />
                </div>
                <button type="submit" disabled={isSubmitting} className="w-full bg-gold hover:bg-gold-dark text-slate-50 py-3.5 mt-2 rounded-xl font-bold uppercase tracking-wider text-xs shadow-lg shadow-gold/20 flex items-center justify-center gap-2">
                  {isSubmitting ? 'Submitting...' : 'Become a Partner'}
                </button>
              </form>
            </div>
          ) : (
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white">Application Received!</h3>
              <p className="text-slate-300 text-sm max-w-sm mx-auto leading-relaxed">
                Thank you for your interest in the Asset Aura Partner Program, <span className="text-white font-bold">{formData.name}</span>. Our team will contact you shortly.
              </p>
              <button onClick={onClose} className="border border-slate-700 text-slate-200 hover:text-white hover:bg-slate-800 w-full py-3 mt-4 text-xs font-bold rounded-xl transition-all">Close</button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

const ProductDetailView = ({ offeringKey, setIsDematModalOpen, setIsModalOpen, setPrefilledPhone }) => {
  const product = PRODUCT_DETAILS[offeringKey] || PRODUCT_DETAILS.default;
  const [phone, setPhone] = useState('');

  const [heroImageIdx, setHeroImageIdx] = useState(0);
  const heroImages = [
    '/3.jpeg',
    '/5.jpeg',
    '/6.jpeg'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroImageIdx((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phone.length === 10 && /^\d+$/.test(phone)) {
      setPrefilledPhone(phone);
      setIsDematModalOpen(true);
    } else {
      alert("Please enter a valid 10-digit mobile number.");
    }
  };

  return (
    <div className="relative pt-24 pb-16 px-6 md:px-12 bg-slate-950 text-slate-200 z-10">
      <div className="max-w-7xl mx-auto">


        {/* Hero Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-6">
          {/* Left: Content */}
          <div className="lg:col-span-7 text-left space-y-6">
            <div className="space-y-6 mb-8 relative">
              <div className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b from-gold via-gold/50 to-transparent rounded-r-full hidden md:block"></div>

              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                <Star className="w-3.5 h-3.5" /> {product.name}
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-display font-black leading-tight tracking-tight">
                {product.title.split(' ').map((word, i) => (
                  i < 2 ? <span key={i} className="gold-gradient-text">{word} </span> : <span key={i} className="text-white font-black">{word} </span>
                ))}
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
                {product.sub}
              </p>
            </div>

            {/* Mobile form card */}
            <div className="bg-slate-900 border border-slate-800/80 p-5 rounded-xl shadow-xs max-w-md">
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="space-y-0.5">
                  <label className="text-xs font-bold text-slate-200 flex items-center gap-1">
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
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    className="flex-1 bg-slate-950 border border-slate-700 rounded-lg px-4 py-2 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all text-xs"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-gold hover:bg-gold-dark text-slate-50 rounded-lg text-xs font-bold uppercase tracking-wider shadow-sm transition-all"
                  >
                    {product.ctaText || "Start Investing"}
                  </button>
                </div>
              </form>
            </div>

            {product.hasKnowMore && (
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-3 bg-gold hover:bg-gold-dark text-slate-50 text-xs font-bold uppercase tracking-wider rounded-md"
              >
                Know More
              </button>
            )}

            {/* Stats */}
            {product.stats && product.stats.length > 0 && (
              <div className="grid grid-cols-3 gap-4 border-t border-slate-800 pt-8 mt-8">
                {product.stats.map((stat, i) => (
                  <div key={i} className="text-left border-r border-slate-800 last:border-none pr-4">
                    <div className="text-lg sm:text-xl md:text-2xl font-display font-black text-gold leading-none">{stat.value}</div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1.5 leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Value propositions */}
            <div className="border-t border-slate-800 pt-8 space-y-4">
              <h2 className="text-lg font-display font-bold text-slate-200">
                {product.whyTitle}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {product.whyDesc}
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                {product.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-gold font-extrabold text-base leading-none">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Graphic and QR Code */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0 flex justify-center items-center">
            <div className="relative mx-auto max-w-md lg:max-w-none flex flex-col items-center sm:flex-row lg:flex-col xl:flex-row gap-6 justify-center w-full">
              {/* Hero Image Slider */}
              <div className="relative overflow-hidden shadow-2xl shadow-slate-950/80 rounded-2xl w-full max-w-[450px] sm:max-w-[550px] md:max-w-[650px] lg:max-w-[750px] xl:max-w-[850px] shrink-0 aspect-[4/5] sm:aspect-[4/3] bg-slate-900 border border-slate-800">
                <AnimatePresence>
                  <motion.img
                    key={heroImageIdx}
                    src={heroImages[heroImageIdx]}
                    alt="Asset Aura Features"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* Common Section: Why Asset Aura? */}
        <div className="border-t border-slate-800/80 pt-16 mt-8">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-100">Why Choose Asset Aura?</h2>
              <p className="text-sm md:text-base text-slate-400 leading-relaxed">
                As an Authorized Person/Sub-Broker of Angel One, Asset Aura provides seamless access to investment products available through the Angel One platform. Our team assists with account opening, digital onboarding, platform navigation, and customer support, helping you invest with confidence.
              </p>
            </div>
            <div className="space-y-5 bg-slate-900/50 p-6 md:p-8 rounded-2xl border border-slate-800">
              <ul className="grid grid-cols-1 gap-4 text-sm font-medium text-slate-300">
                <li className="flex items-start gap-2.5"><Check className="w-4 h-4 text-gold shrink-0 mt-0.5" /> <span>Authorized Person/Sub-Broker of Angel One</span></li>
                <li className="flex items-start gap-2.5"><Check className="w-4 h-4 text-gold shrink-0 mt-0.5" /> <span>Quick Digital Demat & Trading Account Opening</span></li>
                <li className="flex items-start gap-2.5"><Check className="w-4 h-4 text-gold shrink-0 mt-0.5" /> <span>Secure Angel One Platform Access</span></li>
                <li className="flex items-start gap-2.5"><Check className="w-4 h-4 text-gold shrink-0 mt-0.5" /> <span>Dedicated Onboarding Assistance</span></li>
                <li className="flex items-start gap-2.5"><Check className="w-4 h-4 text-gold shrink-0 mt-0.5" /> <span>Investor Education & Platform Guidance</span></li>
                <li className="flex items-start gap-2.5"><Check className="w-4 h-4 text-gold shrink-0 mt-0.5" /> <span>Trusted Customer Support</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Common CTA */}
        <div className="mt-16 bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-gold-dark via-gold to-gold-light" />
          <h2 className="text-2xl md:text-4xl font-display font-bold text-white">Start Your Investment Journey Today</h2>
          <p className="text-sm md:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Open your Demat & Trading Account through the Angel One platform with assistance from Asset Aura and explore investment opportunities designed to support your financial goals.
          </p>
          <button
            onClick={() => setIsDematModalOpen(true)}
            className="inline-flex items-center justify-center px-8 py-4 bg-gold hover:bg-gold-dark text-slate-950 rounded-full font-bold text-sm shadow-lg shadow-gold/20 transition-all hover:scale-105 active:scale-95 gap-2 mt-4"
          >
            Open Demat Account
          </button>
        </div>
      </div>
    </div>
  );
};

const FAQItem = ({ faq, index, isInitiallyOpen }) => {
  const [isOpen, setIsOpen] = useState(isInitiallyOpen);

  useEffect(() => {
    setIsOpen(isInitiallyOpen);
  }, [isInitiallyOpen]);

  // Strip hardcoded number like "1. ", "10. " from the beginning
  const cleanQuestion = faq.question.replace(/^\d+\.\s*/, '');
  const displayQuestion = index !== undefined ? `${index + 1}. ${cleanQuestion}` : cleanQuestion;

  return (
    <div className="border-b border-white/5 last:border-none pb-2 last:pb-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-3 text-left hover:text-gold transition-colors group"
      >
        <span className="text-xs md:text-sm font-bold text-slate-200 group-hover:text-white transition-colors">{displayQuestion}</span>
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
};

const BlogDetail = ({ blog, onBack }) => {
  return (
    <div className="pt-24 min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-slate-400 hover:text-gold transition-colors mb-8 text-sm font-semibold"
        >
          <ChevronLeft className="w-4 h-4" /> Back to Blogs
        </button>

        <div className="space-y-6">
          <h1 className="text-3xl md:text-5xl font-display font-bold leading-tight">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-400">
            <span className="px-3 py-1 bg-gold/10 border border-gold/20 text-gold rounded-full uppercase tracking-wider">
              {blog.category}
            </span>
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {blog.date}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {blog.readTime}</span>
          </div>

          <div className="w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden mt-8 mb-12">
            <img
              src={blog.imageUrl}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="blog-content-html prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:text-gold prose-a:text-gold">
            {blog.content ? (
              <div dangerouslySetInnerHTML={{ __html: blog.content }} />
            ) : (
              <p className="text-slate-300 leading-relaxed mb-6">{blog.excerpt}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};


const BlogsPage = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  if (selectedBlog) {
    return <BlogDetail blog={selectedBlog} onBack={() => setSelectedBlog(null)} />;
  }

  return (
    <div className="pt-24 min-h-screen">
      <div className="text-center space-y-4 pt-12 pb-8 px-6">
        <h1 className="text-4xl md:text-6xl font-display font-black text-white">Market <span className="gold-gradient-text">Insights</span></h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Stay updated with the latest trends, strategies, and financial knowledge to make informed investment decisions.
        </p>
      </div>

      <section className="py-12 px-6 bg-slate-950/40 relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOGS_DATA.map((blog) => (
            <div key={blog.id} onClick={() => setSelectedBlog(blog)} className="glass-card glass-card-hover border-white/10 bg-slate-900/40 rounded-3xl overflow-hidden flex flex-col group cursor-pointer">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10" />
                <img
                  src={blog.imageUrl}
                  alt={blog.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 bg-slate-950/80 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold text-gold uppercase tracking-wider">
                    {blog.category}
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow space-y-4">
                <div className="flex items-center justify-between text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                  <span>{blog.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {blog.readTime}</span>
                </div>
                <h3 className="text-xl font-display font-bold text-white group-hover:text-gold transition-colors leading-tight">
                  {blog.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed flex-grow">
                  {blog.excerpt}
                </p>
                <div className="pt-4 border-t border-white/5">
                  <button className="text-xs font-bold text-gold hover:text-gold-light uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const FAQPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFAQCategory, setActiveFAQCategory] = useState("All");

  const faqCategories = ["All", "Regulatory", "Advisory", "Trading", "Onboarding", "Education"];

  const filteredFAQs = FAQ_DATA.filter(faq => {
    const matchesCategory = activeFAQCategory === "All" || faq.category === activeFAQCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 min-h-screen pb-16">
      <section id="faqs" className="py-24 px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-wider">
              FREQUENTLY ASKED QUESTIONS
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              Everything You Need to Know <br className="hidden md:block" />
              <span className="gold-gradient-text text-2xl md:text-4xl mt-2 block">About the Angel One Platform</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
              Find answers to common questions about Demat & Trading Account opening, the Angel One platform, investment products, onboarding, account support, and investor education.
            </p>
          </div>

          <div className="space-y-4 mb-8 text-left">
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

            <div className="flex flex-wrap gap-1.5 justify-center pt-2">
              {faqCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFAQCategory(cat)}
                  className={cn(
                    "px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider border transition-all duration-300",
                    activeFAQCategory === cat
                      ? "bg-gold text-slate-50 border-gold shadow-lg shadow-gold/15"
                      : "bg-slate-900/40 border-white/5 text-slate-400 hover:text-white"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="glass-card border-white/10 bg-slate-900/60 p-6 shadow-xl space-y-2 text-left">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq, index) => (
                <FAQItem
                  key={index}
                  index={index}
                  faq={faq}
                  isInitiallyOpen={index === 0 && !searchQuery}
                />
              ))
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
    </div>
  );
};

const ContactUsPage = ({ setIsModalOpen }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 1500);
  };

  return (
    <div className="pt-24 min-h-screen">
      <section id="contact-us" className="py-24 px-6 relative z-10 max-w-7xl mx-auto border-t border-white/5">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 text-left space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-wider">
                Get in Touch
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-black text-white">
                Contact <span className="gold-gradient-text">Our Team</span>
              </h2>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                Have questions or want to schedule an appointment? Reach out to us using the contact details below or send us a message directly.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "Phone",
                  desc: "9988988208",
                  sub: "Call for support or bookings",
                  icon: Phone,
                  href: "tel:9988988208"
                },
                {
                  title: "Email",
                  desc: "sardararshpreetsingh@gmail.com",
                  sub: "For general inquiries",
                  icon: Mail,
                  href: "mailto:sardararshpreetsingh@gmail.com"
                },
                {
                  title: "Address",
                  desc: "Asset Aura, D-254, 5th Floor, GR Square Building, Sector 75, Mohali, Punjab",
                  sub: "Headquarters",
                  icon: MapPin,
                  href: "https://maps.google.com/?q=Asset+Aura+Mohali"
                }
              ].map((item, idx) => {
                const ItemIcon = item.icon;
                return (
                  <a key={idx} href={item.href} target={item.title === 'Address' ? "_blank" : undefined} rel="noreferrer" className="flex gap-4 items-start group cursor-pointer block">
                    <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors">
                      <ItemIcon className="text-gold w-5 h-5 group-hover:text-slate-950 transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-xs text-slate-500 font-bold uppercase tracking-widest">{item.title}</h4>
                      <div className="text-sm font-bold text-white mt-0.5 group-hover:text-gold transition-colors">{item.desc}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5 font-medium">{item.sub}</div>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="pt-4 border-t border-white/5">
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn-gold py-3 px-6 text-xs md:text-sm font-bold text-slate-50 w-full sm:w-auto"
              >
                Schedule Office Visit
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="glass-card border-white/10 bg-slate-900/60 p-6 md:p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-dark via-gold to-gold-light" />

              {status === 'success' ? (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center border border-emerald-500/30">
                    <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white">Message Sent!</h3>
                  <p className="text-slate-400 text-sm max-w-sm">
                    Thank you for reaching out. A member of our team will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 px-6 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs font-bold text-white transition-all uppercase tracking-wider"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">Send us a Message</h3>
                    <p className="text-slate-400 text-xs md:text-sm">
                      Fill out the form below and we'll get back to you as soon as possible.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-300">Your Name</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Arshpreet Singh"
                          className="w-full bg-slate-950/60 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all text-xs"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-300">Email Address</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. example@email.com"
                          className="w-full bg-slate-950/60 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all text-xs"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 9988988208"
                        className="w-full bg-slate-950/60 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all text-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Message</label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="How can we help you?"
                        className="w-full bg-slate-950/60 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all text-xs resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="btn-gold w-full py-3.5 text-sm mt-4 flex items-center justify-center gap-2 group text-slate-50 font-bold"
                    >
                      {status === 'submitting' ? (
                        <span className="w-4 h-4 border-2 border-slate-50 border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          Send Message <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const AboutUsPage = () => {
  return (
    <div className="pt-24 min-h-screen">
      <div className="text-center space-y-4 pt-12 pb-8 px-6">
        <h1 className="text-4xl md:text-6xl font-display font-black text-white">About <span className="gold-gradient-text">Asset Aura</span></h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Your Trusted Partner in Wealth Creation, providing seamless access to the Angel One platform.
        </p>
      </div>
      <section className="py-12 px-6 bg-slate-950/40 relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center space-y-16">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/25 text-gold text-xs font-bold uppercase tracking-wider">
              WHY CHOOSE US
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
              Invest with Confidence <br className="hidden md:block" />
              <span className="gold-gradient-text text-2xl md:text-4xl mt-2 block">Through the Angel One Platform</span>
            </h2>
            <p className="text-slate-400 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
              <HighlightText text="As an Authorized Person/Sub-Broker of Angel One, Asset Aura provides seamless access to the Angel One platform with dedicated account opening assistance, platform support, investor education, and access to a wide range of financial products—all within a secure and regulated ecosystem." />
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pt-4">
            {[
              {
                title: "Secure & Trusted Platform",
                desc: "Trade and invest through the Angel One platform, one of India's leading SEBI-registered stockbroking platforms. Your investments remain in your own Demat and trading account.",
                icon: ShieldCheck,
                color: "text-emerald-400"
              },
              {
                title: "Authorized Partner",
                desc: "Asset Aura is an Authorized Person/Sub-Broker of Angel One, helping clients with account opening, onboarding, platform access, and customer support throughout their investment journey.",
                icon: Award,
                color: "text-gold"
              },
              {
                title: "Investor Education",
                desc: "We help you understand the Angel One platform, stocks, mutual funds, SIPs, ETFs, IPOs, and other financial products so you can make informed investment decisions with confidence.",
                icon: BookOpen,
                color: "text-gold"
              },
              {
                title: "Dedicated Customer Support",
                desc: "Receive assistance with Demat account opening, KYC, platform navigation, account-related queries, and access to the financial products available through the Angel One platform.",
                icon: Users,
                color: "text-slate-300"
              }
            ].map((item, idx) => {
              const WhyIcon = item.icon;
              return (
                <div key={idx} className="glass-card glass-card-hover p-6 flex flex-col items-start text-left space-y-4 border-white/5 bg-slate-900/20">
                  <div className={cn("w-12 h-12 rounded-2xl bg-slate-950 border border-white/5 flex items-center justify-center", item.color)}>
                    <WhyIcon className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white"><HighlightText text={item.title} /></h3>
                    <p className="text-slate-400 text-xs md:text-sm leading-relaxed"><HighlightText text={item.desc} /></p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-10 border-t border-white/5 space-y-6">
            <h4 className="text-xs uppercase font-extrabold tracking-widest text-slate-500">PLATFORM BENEFITS</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Trusted Angel One Platform", desc: "Access equities, derivatives, mutual funds, ETFs, IPOs, bonds, and more through a secure and reliable trading platform." },
                { title: "Easy Digital Account Opening", desc: "Fast online Demat & Trading Account opening with a simple and paperless KYC process." },
                { title: "Advanced Trading Technology", desc: "Experience fast order execution, live market data, powerful charting tools, and mobile & web trading." },
                { title: "Dedicated Support", desc: "Our team assists you with onboarding, platform usage, and account-related support whenever you need it." }
              ].map((p, i) => (
                <div key={i} className="flex items-start gap-2 text-left">
                  <Check className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-white block mb-0.5"><HighlightText text={p.title} /></span>
                    <span className="text-[10px] text-slate-500 font-semibold leading-relaxed block"><HighlightText text={p.desc} /></span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// --- MAIN PORTAL ---

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDematModalOpen, setIsDematModalOpen] = useState(false);
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const [activeOffering, setActiveOffering] = useState(null);
  const [isOfferingsOpen, setIsOfferingsOpen] = useState(false);
  const [offeringsTab, setOfferingsTab] = useState('product');

  const offeringsRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (offeringsRef.current && !offeringsRef.current.contains(event.target)) {
        setIsOfferingsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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

  // Testimonials Carousel state
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  // Hero Image Slider state
  const [heroImageIdx, setHeroImageIdx] = useState(0);
  const heroImages = [
    '/3.jpeg',
    '/5.jpeg',
    '/6.jpeg'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroImageIdx((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

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

  const nextTestimonial = () => {
    setTestimonialIdx((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const prevTestimonial = () => {
    setTestimonialIdx((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  return (
    <div className="min-h-screen bg-background text-slate-200 relative font-sans">
      {/* Background glowing gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-15%] w-[60%] h-[60%] bg-gold/5 rounded-full blur-[130px] opacity-40 animate-pulse-glow" />
        <div className="absolute top-[40%] right-[-10%] w-[50%] h-[50%] bg-gold/3 rounded-full blur-[130px] opacity-30" />
        <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[60%] bg-gold/3 rounded-full blur-[130px] opacity-30" />
      </div>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <DematAccountModal isOpen={isDematModalOpen} onClose={() => { setIsDematModalOpen(false); setPrefilledPhone(''); }} prefilledPhone={prefilledPhone} />
      <PartnerProgramModal isOpen={isPartnerModalOpen} onClose={() => setIsPartnerModalOpen(false)} />

      {/* Redesigned Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-700/70 transition-all duration-300 px-4 md:px-6 xl:px-12 py-3.5 flex items-center justify-between gap-4 shadow-sm">
        {/* Left: Brand Logo */}
        <div className="flex-1 flex items-center justify-start">
          <a href="#" onClick={(e) => { e.preventDefault(); setActiveOffering(null); setIsOfferingsOpen(false); setCurrentPage('home'); window.scrollTo(0, 0); }} className="flex items-center select-none shrink-0 group">
            <div className="origin-left">
              <AssetAuraLogo />
            </div>
          </a>
        </div>

        {/* Center: Navigation Links */}
        <nav className="max-lg:hidden flex items-center justify-center gap-4 xl:gap-10 relative">
          <button onClick={() => { setActiveOffering(null); setIsOfferingsOpen(false); setCurrentPage('home'); window.scrollTo(0, 0); }} className={cn("hover:text-gold transition-colors text-xs font-bold uppercase tracking-wider flex items-center gap-1 shrink-0", currentPage === 'home' && !activeOffering ? "text-gold" : "text-slate-200")}>
            Home
          </button>
          <button onClick={() => { setActiveOffering(null); setIsOfferingsOpen(false); setCurrentPage('about'); window.scrollTo(0, 0); }} className={cn("hover:text-gold transition-colors text-xs font-bold uppercase tracking-wider flex items-center gap-1 shrink-0", currentPage === 'about' && !activeOffering ? "text-gold" : "text-slate-200")}>
            About Us
          </button>
          <button onClick={() => { setActiveOffering(null); setIsOfferingsOpen(false); setCurrentPage('blogs'); window.scrollTo(0, 0); }} className={cn("hover:text-gold transition-colors text-xs font-bold uppercase tracking-wider flex items-center gap-1 shrink-0", currentPage === 'blogs' && !activeOffering ? "text-gold" : "text-slate-200")}>
            Blogs
          </button>
          <button onClick={() => { setActiveOffering(null); setIsOfferingsOpen(false); setCurrentPage('faq'); window.scrollTo(0, 0); }} className={cn("hover:text-gold transition-colors text-xs font-bold uppercase tracking-wider flex items-center gap-1 shrink-0", currentPage === 'faq' && !activeOffering ? "text-gold" : "text-slate-200")}>
            FAQ
          </button>
          <button onClick={() => { setActiveOffering(null); setIsOfferingsOpen(false); setCurrentPage('contact'); window.scrollTo(0, 0); }} className={cn("hover:text-gold transition-colors text-xs font-bold uppercase tracking-wider flex items-center gap-1 shrink-0", currentPage === 'contact' && !activeOffering ? "text-gold" : "text-slate-200")}>
            Contact Us
          </button>

          {/* Services Menu Link */}
          <div className="relative" ref={offeringsRef}>
            <button
              onClick={() => setIsOfferingsOpen(!isOfferingsOpen)}
              className={cn(
                "hover:text-gold transition-colors text-xs font-bold uppercase tracking-wider flex items-center gap-1 shrink-0 py-2",
                (isOfferingsOpen || activeOffering) ? "text-gold" : "text-slate-200"
              )}
            >
              Services <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-300", isOfferingsOpen && "rotate-180")} />
            </button>

            {/* Offerings Mega Dropdown Panel */}
            {isOfferingsOpen && (
              <>
                <div className="fixed inset-0 z-40 bg-slate-900/5 backdrop-blur-[2px]" onClick={() => setIsOfferingsOpen(false)} />
                <div className="absolute left-0 top-[100%] mt-2 w-[550px] bg-slate-950 border border-slate-700 rounded-xl shadow-2xl z-50 p-6 text-left mega-menu-enter">
                  {/* Mega dropdown tabs */}
                  <div className="flex gap-2 border-b border-slate-100 pb-3 mb-4">
                    {[
                      { id: 'product', label: 'Product' },
                      { id: 'plan', label: 'Plan' }
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setOfferingsTab(tab.id)}
                        className={cn(
                          "px-4 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-wider transition-all",
                          offeringsTab === tab.id
                            ? "bg-gold text-slate-50 shadow-sm"
                            : "bg-slate-900 hover:bg-slate-800 text-slate-200"
                        )}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  {/* Mega dropdown columns */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      {OFFERINGS_DATA[offeringsTab].column1.map((item) => (
                        <button
                          key={item.key}
                          onClick={() => {
                            setActiveOffering(item.key);
                            setIsOfferingsOpen(false);
                            window.scrollTo(0, 0);
                          }}
                          className="w-full text-left text-xs font-semibold text-slate-200 hover:text-gold transition-colors py-0.5 block"
                        >
                          {item.name}
                        </button>
                      ))}
                    </div>
                    <div className="space-y-2">
                      {OFFERINGS_DATA[offeringsTab].column2.map((item) => (
                        <button
                          key={item.key}
                          onClick={() => {
                            setActiveOffering(item.key);
                            setIsOfferingsOpen(false);
                            window.scrollTo(0, 0);
                          }}
                          className="w-full text-left text-xs font-semibold text-slate-200 hover:text-gold transition-colors py-0.5 block"
                        >
                          {item.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </nav>

        {/* Right: Actions */}
        <div className="flex-1 flex items-center justify-end gap-1.5">
          {/* Search */}
          <button className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold hover:bg-gold hover:text-slate-50 transition-all shrink-0">
            <Search className="w-4 h-4" />
          </button>

          {/* Open Demat A/C */}
          <button
            onClick={() => setIsDematModalOpen(true)}
            className="max-sm:hidden inline-block px-4 py-2 bg-gold hover:bg-gold-dark text-slate-50 rounded-md text-[10px] font-bold uppercase tracking-wider shadow-sm transition-all shrink-0 whitespace-nowrap"
          >
            Open Demat A/C
          </button>

          {/* Open MF A/C */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="max-sm:hidden inline-block px-4 py-2 bg-slate-950 border border-slate-700 hover:border-slate-650 text-slate-200 rounded-md text-[10px] font-bold uppercase tracking-wider shadow-sm transition-all shrink-0 whitespace-nowrap"
          >
            Open MF A/C
          </button>

          {/* Partner Program Button */}
          <button
            onClick={() => setIsPartnerModalOpen(true)}
            className="max-sm:hidden inline-block px-4 py-2 bg-slate-950 border border-slate-700 hover:border-slate-650 text-slate-200 rounded-md text-[10px] font-bold uppercase tracking-wider shadow-sm transition-all shrink-0 whitespace-nowrap"
          >
            Partner Program
          </button>
        </div>
      </header>

      {activeOffering ? (
        <ProductDetailView
          offeringKey={activeOffering}
          setIsDematModalOpen={setIsDematModalOpen}
          setIsModalOpen={setIsModalOpen}
          setPrefilledPhone={setPrefilledPhone}
        />
      ) : currentPage === 'about' ? (
        <AboutUsPage />
      ) : currentPage === 'blogs' ? (
        <BlogsPage />
      ) : currentPage === 'faq' ? (
        <FAQPage />
      ) : currentPage === 'contact' ? (
        <ContactUsPage setIsModalOpen={setIsModalOpen} />
      ) : (
        <>
          {/* --- HERO SECTION --- */}
          <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-6 overflow-hidden border-b border-slate-700/50">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">

              {/* Left Column: Heading and info */}
              <div className="lg:col-span-7 text-left space-y-4 md:space-y-5">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950 border border-gold/30 text-gold-dark text-[10px] sm:text-xs font-bold tracking-wide shadow-lg"
                >
                  <Award className="w-3.5 h-3.5 text-gold-dark shrink-0 animate-pulse" />
                  <span className="font-extrabold text-gold-dark">Angel One Ltd. is a SEBI-registered Stock Broker</span>
                </motion.div>

                {/* Anand Rathi styled Heading */}
                <div className="space-y-2 md:space-y-3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gold mb-2"
                  >
                    INVESTMENT OPPORTUNITY
                  </motion.div>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black leading-[1.1] tracking-tight text-white"
                  >
                    Asset Aura <br />
                    <span className="gold-gradient-text">Empower Your Finances</span>
                  </motion.h1>
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                    className="text-base sm:text-lg md:text-xl font-sans font-light leading-normal text-slate-300 mt-2"
                  >
                    Your Trusted Partner in Wealth Creation
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-xl mt-3"
                  >
                    Asset Aura, a trusted Sub Broker of Angel One, is committed to helping individuals achieve their financial goals through smart investing and expert market guidance. Whether you're a beginner or an experienced investor, we provide the right tools, research, and support to help you make informed financial decisions.
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
                        className="btn-gold py-2.5 px-5 text-xs font-bold text-slate-50 rounded-xl flex items-center justify-center gap-1.5 shrink-0 shadow-lg shadow-gold/15"
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
                        Authorized Person

                      </div>
                      <div className="text-[8px] font-bold text-slate-500 uppercase tracking-widest"> Angel One</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="pl-3 border-l-2 border-gold/45">
                      <div className="text-xs sm:text-sm md:text-base font-display font-extrabold text-white">
                        Platform Support

                      </div>
                      <div className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">  Account Opening & Onboarding</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="pl-3 border-l-2 border-gold/45">
                      <div className="text-xs sm:text-sm md:text-base font-display font-extrabold text-white">
                        Mohali Office

                      </div>
                      <div className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">Client Assistance Centre</div>
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
                  {/* Hero Image Slider */}
                  <div className="relative overflow-hidden shadow-2xl shadow-slate-950/80 rounded-2xl w-full max-w-[450px] sm:max-w-[550px] md:max-w-[650px] lg:max-w-[750px] xl:max-w-[850px] shrink-0 aspect-[4/5] sm:aspect-[4/3]">
                    <AnimatePresence>
                      <motion.img
                        key={heroImageIdx}
                        src={heroImages[heroImageIdx]}
                        alt="Asset Aura Hero"
                        initial={{ opacity: 0, y: -80 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 80 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                      />
                    </AnimatePresence>
                  </div>



                </motion.div>
              </div>
            </div>
          </section>

          {/* --- SERVICES / OFFERINGS SECTION --- */}
          <section id="offerings" className="py-24 px-6 relative z-10 max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-wider">
                Angel One Platform Services
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold">
                Comprehensive <span className="gold-gradient-text">Financial Services</span>
              </h2>
              <h3 className="text-xl md:text-2xl text-white font-medium">Through the Angel One Platform</h3>
              <p className="text-slate-400 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
                As an Authorized Person/Sub-Broker of Angel One, Asset Aura provides access to a wide range of financial products and investment solutions through the Angel One platform. We assist clients with Demat account opening, account onboarding, platform support, and seamless access to investment opportunities. Our experienced team helps you understand the platform's features and available financial products, enabling you to invest with confidence while ensuring compliance with applicable regulatory guidelines.
              </p>
            </div>

            {/* Offerings Grid Content */}
            <div className="mt-12 grid md:grid-cols-2 gap-6 lg:gap-8">
              {/* Card 1: PMS */}
              <div
                onClick={() => { setActiveOffering('pms'); window.scrollTo(0, 0); }}
                className="glass-card glass-card-hover p-6 md:p-8 flex flex-col justify-between space-y-6 text-left border-white/5 bg-slate-900/30 cursor-pointer group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <Briefcase className="text-gold w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-gold transition-colors">Portfolio Management Services (PMS)</h3>
                    <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                      Access professionally managed Portfolio Management Services (PMS) through the Angel One platform. These portfolios are managed by SEBI-registered Portfolio Managers and are customized according to your financial goals and risk profile. Your investments remain in your own Demat and bank accounts, and all services are delivered in accordance with applicable SEBI regulations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2: Mutual Funds */}
              <div
                onClick={() => { setActiveOffering('mutual_funds'); window.scrollTo(0, 0); }}
                className="glass-card glass-card-hover p-6 md:p-8 flex flex-col justify-between space-y-6 text-left border-white/5 bg-slate-900/30 cursor-pointer group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <Activity className="text-gold w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-gold transition-colors">Mutual Funds, SIPs, SWPs & STPs</h3>
                    <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                      Invest in a comprehensive range of Mutual Funds, SIPs, SWPs, and STPs through the Angel One platform. We help you understand various fund categories—including Equity, Debt, Hybrid, Index, and Thematic Funds—and assist you in selecting investment options that align with your financial objectives. Mutual Fund investments are subject to market risks. Please read all scheme-related documents carefully before investing.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3: Stocks */}
              <div
                onClick={() => { setActiveOffering('equity'); window.scrollTo(0, 0); }}
                className="glass-card glass-card-hover p-6 md:p-8 flex flex-col justify-between space-y-6 text-left border-white/5 bg-slate-900/30 cursor-pointer group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <LineChart className="text-gold w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-gold transition-colors">Stocks & Equity Markets</h3>
                    <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                      Trade and invest in equities through the Angel One platform, with access to the NSE and BSE. We assist you with Demat account opening, onboarding, and platform guidance, while Angel One provides the trading infrastructure, research tools, and order execution. Investments in the stock market are subject to market risks.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 4: Insurance */}
              <div
                onClick={() => { setActiveOffering('insurance'); window.scrollTo(0, 0); }}
                className="glass-card glass-card-hover p-6 md:p-8 flex flex-col justify-between space-y-6 text-left border-white/5 bg-slate-900/30 cursor-pointer group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <ShieldCheck className="text-gold w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-gold transition-colors">Insurance Solutions</h3>
                    <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                      Access a range of Life and Health Insurance products through the Angel One platform. We help you understand policy features, benefits, coverage, and documentation, enabling you to make informed insurance decisions as part of your overall financial planning. Insurance products are regulated by IRDAI and are subject to the terms and conditions of the respective insurers.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-12 p-6 rounded-2xl bg-slate-900/50 border border-white/5 text-left space-y-2">
              <h4 className="text-white font-bold text-sm">Disclaimer</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Asset Aura is an Authorized Person/Sub-Broker of Angel One. We facilitate access to financial products and services through the Angel One platform. Trading, investment, mutual fund, PMS, and insurance products are offered by their respective regulated entities. All investments are subject to market risks and applicable regulatory guidelines. Please read all relevant documents carefully before investing.
              </p>
            </div>
          </section>

          {/* --- WHY ASSET AURA SECTION --- */}
          <section id="why-us" className="py-24 px-6 bg-slate-950/40 border-y border-white/5 relative z-10">
            <div className="max-w-7xl mx-auto text-center space-y-16">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/25 text-gold text-xs font-bold uppercase tracking-wider">
                  WHY CHOOSE US
                </div>
                <h2 className="text-3xl md:text-5xl font-display font-bold">
                  Invest with Confidence <br className="hidden md:block" />
                  <span className="gold-gradient-text text-2xl md:text-4xl mt-2 block">Through the Angel One Platform</span>
                </h2>
                <p className="text-slate-400 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
                  <HighlightText text="As an Authorized Person/Sub-Broker of Angel One, Asset Aura provides seamless access to the Angel One platform with dedicated account opening assistance, platform support, investor education, and access to a wide range of financial products—all within a secure and regulated ecosystem." />
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pt-4">
                {[
                  {
                    title: "Secure & Trusted Platform",
                    desc: "Trade and invest through the Angel One platform, one of India's leading SEBI-registered stockbroking platforms. Your investments remain in your own Demat and trading account.",
                    icon: ShieldCheck,
                    color: "text-emerald-400"
                  },
                  {
                    title: "Authorized Partner",
                    desc: "Asset Aura is an Authorized Person/Sub-Broker of Angel One, helping clients with account opening, onboarding, platform access, and customer support throughout their investment journey.",
                    icon: Award,
                    color: "text-gold"
                  },
                  {
                    title: "Investor Education",
                    desc: "We help you understand the Angel One platform, stocks, mutual funds, SIPs, ETFs, IPOs, and other financial products so you can make informed investment decisions with confidence.",
                    icon: BookOpen,
                    color: "text-gold"
                  },
                  {
                    title: "Dedicated Customer Support",
                    desc: "Receive assistance with Demat account opening, KYC, platform navigation, account-related queries, and access to the financial products available through the Angel One platform.",
                    icon: Users,
                    color: "text-slate-300"
                  }
                ].map((item, idx) => {
                  const WhyIcon = item.icon;
                  return (
                    <div key={idx} className="glass-card glass-card-hover p-6 flex flex-col items-start text-left space-y-4 border-white/5 bg-slate-900/20">
                      <div className={cn("w-12 h-12 rounded-2xl bg-slate-950 border border-white/5 flex items-center justify-center", item.color)}>
                        <WhyIcon className="w-6 h-6" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-bold text-white"><HighlightText text={item.title} /></h3>
                        <p className="text-slate-400 text-xs md:text-sm leading-relaxed"><HighlightText text={item.desc} /></p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Platform Benefits */}
              <div className="pt-10 border-t border-white/5 space-y-6">
                <h4 className="text-xs uppercase font-extrabold tracking-widest text-slate-500">PLATFORM BENEFITS</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    { title: "Trusted Angel One Platform", desc: "Access equities, derivatives, mutual funds, ETFs, IPOs, bonds, and more through a secure and reliable trading platform." },
                    { title: "Easy Digital Account Opening", desc: "Fast online Demat & Trading Account opening with a simple and paperless KYC process." },
                    { title: "Advanced Trading Technology", desc: "Experience fast order execution, live market data, powerful charting tools, and mobile & web trading." },
                    { title: "Dedicated Support", desc: "Our team assists you with onboarding, platform usage, and account-related support whenever you need it." }
                  ].map((p, i) => (
                    <div key={i} className="flex items-start gap-2 text-left">
                      <Check className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                      <div>
                        <span className="text-xs font-bold text-white block mb-0.5"><HighlightText text={p.title} /></span>
                        <span className="text-[10px] text-slate-500 font-semibold leading-relaxed block"><HighlightText text={p.desc} /></span>
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-wider">
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
                      calcType === 'sip' ? "bg-gold text-slate-50 font-black shadow" : "text-slate-400 hover:text-white"
                    )}
                  >
                    <Calculator className="w-3.5 h-3.5" /> SIP Calculator
                  </button>
                  <button
                    onClick={() => setCalcType('pms')}
                    className={cn(
                      "px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5",
                      calcType === 'pms' ? "bg-gold text-slate-50 font-black shadow" : "text-slate-400 hover:text-white"
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
                          <span className="text-gold font-bold text-sm">{sipRate}%</span>
                        </div>
                        <input
                          type="range"
                          min="5"
                          max="30"
                          step="0.5"
                          value={sipRate}
                          onChange={(e) => setSipRate(parseFloat(e.target.value))}
                          className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-gold border border-white/5"
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
                          <span className="text-gold font-bold text-sm">{sipYears} Years</span>
                        </div>
                        <input
                          type="range"
                          min="1"
                          max="40"
                          value={sipYears}
                          onChange={(e) => setSipYears(parseInt(e.target.value))}
                          className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-gold border border-white/5"
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
                          <span className="text-gold font-bold text-sm">{pmsRate}%</span>
                        </div>
                        <input
                          type="range"
                          min="5"
                          max="30"
                          step="0.5"
                          value={pmsRate}
                          onChange={(e) => setPmsRate(parseFloat(e.target.value))}
                          className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-gold border border-white/5"
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
                          <span className="text-gold font-bold text-sm">{pmsYears} Years</span>
                        </div>
                        <input
                          type="range"
                          min="1"
                          max="30"
                          value={pmsYears}
                          onChange={(e) => setPmsYears(parseInt(e.target.value))}
                          className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-gold border border-white/5"
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
              <div className="lg:col-span-5 glass-card border-white/10 bg-gradient-to-b from-slate-900/30 via-slate-950/40 to-slate-950/80 p-6 md:p-8 flex flex-col justify-between text-center relative overflow-hidden shadow-xl">
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
                    className="btn-gold w-full py-4 text-xs font-black text-slate-50 uppercase tracking-wider flex items-center justify-center gap-1 shadow-lg shadow-gold/10 hover:shadow-gold/20"
                  >
                    Inquire Investment Plan <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* --- THE PROCESS SECTION --- */}
          <section id="methodology" className="py-24 px-6 relative z-10">
            <div className="max-w-7xl mx-auto text-center space-y-16">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-wider">
                  THE PROCESS
                </div>
                <h2 className="text-3xl md:text-5xl font-display font-bold">
                  How We Assist You <br className="hidden md:block" />
                  <span className="gold-gradient-text text-2xl md:text-4xl mt-2 block">Through the Angel One Platform</span>
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                  Getting started with Asset Aura is simple and seamless. As an Authorized Person/Sub-Broker of Angel One, we guide you through every step of the account opening process and help you access financial products and services available on the Angel One platform.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    step: "01",
                    title: "Schedule a Consultation",
                    desc: "Contact us to book an appointment at our Mohali office or connect with us virtually. Our team will understand your requirements and explain the account opening process and the services available through the Angel One platform."
                  },
                  {
                    step: "02",
                    title: "Complete Your Onboarding",
                    desc: "We assist you with Demat and Trading Account opening, KYC verification, documentation, and platform activation, ensuring a smooth and hassle-free onboarding experience."
                  },
                  {
                    step: "03",
                    title: "Access the Angel One Platform",
                    desc: "Once your account is activated, you can access the Angel One platform to invest and trade across Equities, Mutual Funds, SIPs, ETFs, IPOs, Derivatives, PMS (where applicable), and other financial products offered through the platform."
                  },
                  {
                    step: "04",
                    title: "Ongoing Support",
                    desc: "Our relationship doesn't end after account activation. We continue to assist you with platform navigation, account-related support, and help you understand the available investment products so you can use the platform confidently."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="glass-card border-white/5 bg-slate-900/30 p-6 md:p-8 flex flex-col justify-between space-y-6 relative hover:border-white/10 hover:bg-slate-900/50 transition-all">
                    <div className="space-y-4 text-left">
                      <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold font-bold text-sm shrink-0">
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
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/25 text-gold text-xs font-bold uppercase tracking-wider">
                  FINANCIAL EDUCATION
                </div>
                <h2 className="text-3xl md:text-5xl font-display font-black leading-tight text-white">
                  Learn, Understand &<br />
                  <span className="gold-gradient-text">Invest with Confidence</span>
                </h2>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                  At Asset Aura, we believe informed investors make better financial decisions. As an Authorized Person/Sub-Broker of Angel One, we provide educational support to help clients understand financial markets and the investment products available through the Angel One platform. Our objective is to improve financial awareness—not to provide guaranteed returns or personalized investment advice.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="btn-gold py-3 px-6 text-xs font-bold shadow-lg shadow-gold/15"
                  >
                    Inquire Education Schedule
                  </button>
                </div>
              </div>

              <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
                {[
                  {
                    title: "Market Fundamentals",
                    desc: "Learn the basics of the Indian stock market, stock exchanges, market participants, and the factors that influence market movements."
                  },
                  {
                    title: "Trading Platform Guidance",
                    desc: "Understand how to use the Angel One platform, including account management, watchlists, order placement, portfolio tracking, market research tools, and other platform features."
                  },
                  {
                    title: "Mutual Funds, SIPs, SWPs & STPs",
                    desc: "Learn how Mutual Funds, SIPs, SWPs, and STPs work, their benefits, associated risks, and how they can support long-term financial planning."
                  },
                  {
                    title: "Stocks & Equity Markets",
                    desc: "Understand equity investing, company fundamentals, market risks, and the trading process through the Angel One platform."
                  },
                  {
                    title: "Insurance & Financial Awareness",
                    desc: "Gain knowledge about Life and Health Insurance products available through the Angel One platform, including their features, benefits, and the importance of financial protection as part of overall financial planning."
                  }
                ].map((point, index) => (
                  <div key={index} className="glass-card border-white/5 bg-slate-900/20 p-6 text-left space-y-3">
                    <div className="w-8 h-8 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center text-gold font-bold text-xs shrink-0">
                      {index + 1}
                    </div>
                    <h4 className="text-sm font-bold text-white">{point.title}</h4>
                    <p className="text-slate-400 text-[11px] leading-relaxed">{point.desc}</p>
                  </div>
                ))}
              </div>

            </div>
          </section>

          {/* --- DEMAT ONBOARDING SECTION --- */}
          <section id="demat-onboarding" className="py-24 px-6 bg-slate-950/40 border-y border-white/5 relative z-10">
            <div className="max-w-7xl mx-auto">

              <div className="text-center mb-16 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-wider">
                  SECTION 1 – ONBOARDING ROADMAP
                </div>
                <h2 className="text-3xl md:text-5xl font-display font-bold">
                  OPEN YOUR ACCOUNT <br className="hidden md:block" />
                  <span className="gold-gradient-text text-2xl md:text-3xl mt-2 block">Start Investing Through the Angel One Platform</span>
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                  Open your Demat and Trading Account through the trusted Angel One platform with assistance from Asset Aura. Our team helps you complete the onboarding process quickly and securely.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
                {[
                  {
                    step: "01",
                    title: "Register Online",
                    desc: "Submit your basic details to begin your Demat and Trading Account opening through the Angel One platform.",
                    perk: "Simple Online Registration"
                  },
                  {
                    step: "02",
                    title: "Complete KYC",
                    desc: "Upload your PAN, Aadhaar, and other required documents to complete the digital KYC process as per regulatory requirements.",
                    perk: "Paperless Verification"
                  },
                  {
                    step: "03",
                    title: "Account Verification",
                    desc: "Your details are verified and your Demat and Trading Account is activated through the Angel One platform.",
                    perk: "Secure & SEBI-Compliant Process"
                  },
                  {
                    step: "04",
                    title: "Start Investing",
                    desc: "Access equities, mutual funds, ETFs, IPOs, derivatives, and other financial products available through the Angel One platform.",
                    perk: "Platform Ready"
                  }
                ].map((item, idx) => (
                  <div key={idx} className="glass-card border-white/5 bg-slate-900/30 p-6 flex flex-col justify-between space-y-6 hover:border-white/10 hover:bg-slate-900/50 transition-all">
                    <div className="space-y-3">
                      <span className="text-[10px] text-gold uppercase tracking-widest font-extrabold">Step {item.step}</span>
                      <h3 className="text-base font-bold text-white">{item.title}</h3>
                      <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                    <div className="pt-3 border-t border-white/5 flex items-center gap-1.5 text-[10px] text-slate-500 font-semibold uppercase">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{item.perk}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <button
                  onClick={() => setIsDematModalOpen(true)}
                  className="px-8 py-3.5 bg-gold hover:bg-gold-dark text-slate-50 rounded-full font-bold text-xs shadow-lg shadow-gold/15 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center mx-auto gap-2"
                >
                  Open Your Angel One Demat Account <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </section>

          {/* --- TESTIMONIALS SLIDER SECTION --- */}
          <section className="py-24 px-6 relative z-10">
            <div className="max-w-5xl mx-auto">

              <div className="text-center mb-16 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/25 text-gold text-xs font-bold uppercase tracking-wider">
                  SECTION 2 – WHY CLIENTS CHOOSE US
                </div>
                <h2 className="text-3xl md:text-5xl font-display font-bold">
                  CLIENT EXPERIENCES <br className="hidden md:block" />
                  <span className="gold-gradient-text text-2xl md:text-4xl mt-2 block">Why Investors Choose Asset Aura</span>
                </h2>
                <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
                  Asset Aura helps clients access the Angel One platform with a smooth onboarding experience, dedicated support, and investor education designed to simplify investing.
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
                          {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-3.5 h-3.5 fill-gold text-gold" />)}
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
                        <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/10 border border-white/20 text-white text-[9px] font-bold uppercase tracking-wide">
                          <Check className="w-2.5 h-2.5 text-emerald-400 shrink-0" /> {TESTIMONIALS_DATA[testimonialIdx].badge}
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

              <div className="mt-12 p-6 rounded-2xl bg-slate-900/50 border border-white/5 text-center space-y-3">
                <div className="text-gold font-bold text-sm tracking-wider uppercase">Trusted Support • Secure Onboarding • Angel One Platform Access</div>
                <p className="text-slate-400 text-xs leading-relaxed max-w-3xl mx-auto">
                  Asset Aura is an Authorized Person/Sub-Broker of Angel One, helping clients open Demat and Trading Accounts and access financial products available through the Angel One platform.
                </p>
              </div>

            </div>
          </section>
        </>
      )}

      {/* --- FOOTER --- */}
      <footer className="pt-20 pb-10 px-6 border-t border-white/5 bg-slate-950/80 relative z-10 text-left">
        <div className="max-w-7xl mx-auto space-y-12">

          <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">

            {/* Column 1: Info */}
            <div className="lg:col-span-5 space-y-4">
              <div className="origin-left mb-6">
                <AssetAuraLogo className="scale-110 sm:scale-125 origin-left" />
              </div>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm mt-4">
                <strong className="text-slate-400">About Asset Aura</strong><br />
                Asset Aura is an Authorized Person/Sub-Broker of Angel One, providing seamless access to the Angel One platform. We assist clients with Demat & Trading Account opening, onboarding, platform support, and access to a wide range of financial products, including Equities, Mutual Funds, ETFs, IPOs, Derivatives, Insurance, and other investment solutions available through the Angel One platform.
              </p>
              <div className="flex gap-2">
                {[
                  { Icon: Facebook, link: "https://www.facebook.com/share/1DTQufEsoD/?mibextid=wwXIfr" },
                  { Icon: Linkedin, link: "https://www.linkedin.com/in/asset-aura-84267b411/?trk=public-profile-join-page" },
                  { Icon: Instagram, link: "https://www.instagram.com/assetaura_?igsh=MTZkc2ZhMGhzbnNzag%3D%3D&utm_source=qr" }
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
            <div className="lg:col-span-2 space-y-4 relative z-20">
              <h4 className="text-[10px] uppercase font-extrabold tracking-widest text-slate-400">Offerings</h4>
              <ul className="space-y-2.5 text-xs text-slate-500 font-semibold">
                <li><button onClick={() => { setActiveOffering('equity'); setCurrentPage('home'); window.scrollTo(0, 0); }} className="hover:text-gold transition-colors text-left cursor-pointer w-full">Equity Trading</button></li>
                <li><button onClick={() => { setActiveOffering('mutual_funds'); setCurrentPage('home'); window.scrollTo(0, 0); }} className="hover:text-gold transition-colors text-left cursor-pointer w-full">Mutual Funds</button></li>
                <li><button onClick={() => { setActiveOffering('ipos'); setCurrentPage('home'); window.scrollTo(0, 0); }} className="hover:text-gold transition-colors text-left cursor-pointer w-full">ETFs & IPOs</button></li>
                <li><button onClick={() => { setActiveOffering('derivatives'); setCurrentPage('home'); window.scrollTo(0, 0); }} className="hover:text-gold transition-colors text-left cursor-pointer w-full">Futures & Options</button></li>
                <li><button onClick={() => { setActiveOffering('insurance'); setCurrentPage('home'); window.scrollTo(0, 0); }} className="hover:text-gold transition-colors text-left cursor-pointer w-full">Insurance Solutions</button></li>
                <li><button onClick={() => { setActiveOffering('fixed_income'); setCurrentPage('home'); window.scrollTo(0, 0); }} className="hover:text-gold transition-colors text-left cursor-pointer w-full">Bonds & Fixed Income</button></li>
                <li><button onClick={() => { setActiveOffering(null); setCurrentPage('home'); setTimeout(() => document.getElementById('demat-onboarding')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="hover:text-gold transition-colors text-left cursor-pointer w-full">Demat & Trading Account</button></li>
                <li><button onClick={() => { setActiveOffering(null); setCurrentPage('home'); setTimeout(() => document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="hover:text-gold transition-colors text-left cursor-pointer w-full">Investor Education</button></li>
              </ul>
            </div>

            {/* Column 3: Legal */}
            <div className="lg:col-span-2 space-y-4 relative z-20">
              <h4 className="text-[10px] uppercase font-extrabold tracking-widest text-slate-400">Company</h4>
              <ul className="space-y-2.5 text-xs text-slate-500 font-semibold">
                <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('about'); window.scrollTo(0, 0); }} className="hover:text-gold transition-colors">About Asset Aura</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); setTimeout(() => document.getElementById('why-us')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="hover:text-gold transition-colors">Why Choose Asset Aura</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); setTimeout(() => document.getElementById('methodology')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="hover:text-gold transition-colors">How It Works</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); setTimeout(() => document.getElementById('demat-onboarding')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="hover:text-gold transition-colors">Angel One Platform</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('faq'); window.scrollTo(0, 0); }} className="hover:text-gold transition-colors">FAQs</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('contact'); window.scrollTo(0, 0); }} className="hover:text-gold transition-colors">Contact Us</a></li>
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div className="lg:col-span-3 space-y-4 relative z-20">
              <h4 className="text-[10px] uppercase font-extrabold tracking-widest text-slate-400">Contact</h4>
              <ul className="space-y-2 text-xs text-slate-500 font-semibold">
                <li className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-gold shrink-0" />
                  <a href="mailto:sardararshpreetsingh@gmail.com" className="text-slate-400 hover:text-gold transition-colors">sardararshpreetsingh@gmail.com</a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-gold shrink-0" />
                  <a href="tel:+919988988208" className="text-slate-400 hover:text-gold transition-colors">+91 99889 88208</a>
                </li>
                <li className="flex items-start gap-2">
                  <Globe className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                  <span className="text-slate-400 leading-normal">
                    Asset Aura, 5th Floor, GR Square Building, Sector 75,<br />
                    Mohali, Punjab, India
                  </span>
                </li>
              </ul>
            </div>

          </div>

          {/* Detailed compliance regulatory disclosures */}
          <div className="pt-8 border-t border-white/5 space-y-4 text-[10px] text-slate-600 leading-relaxed">
            <p>
              <strong className="text-slate-400">Common Disclaimer:</strong><br />
              Investments in securities market are subject to market risk, read all the related documents carefully before investing. We collect, retain, and use your contact information for legitimate business purposes only, to contact you and to provide you information & latest updates regarding our products & services. We do not sell or rent your contact information to third parties. Please note that by submitting the above-mentioned details, you are authorizing us to Call/SMS you even though you may be registered under DND. We shall Call/SMS you for a period of 12 months. Brokerage will not exceed the SEBI prescribed limit.
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
