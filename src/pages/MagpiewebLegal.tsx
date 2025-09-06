/*
 * Magpieweb Legal Page (Premium Enhanced Version)
 * Stand‑alone route: /legal/magpieweb-privacy-terms  (Secret link only – keep out of main nav)
 * Dependencies: react-markdown remark-gfm framer-motion lucide-react
 * Key Features:
 *  - Consistent anchor IDs + smooth scroll offset for sticky header
 *  - Reading progress bar (manual for wider browser support)
 *  - Scroll spy via IntersectionObserver
 *  - Searchable / keyboard‑navigable Table of Contents
 *  - Focus / reading mode
 *  - Copy page URL & copy section links (hover chain icon)
 *  - Keyboard shortcuts: s (search), f (focus), [ / ] (prev / next heading)
 *  - Print friendly & a11y (skip link, reduced motion respect)
 */

import React, { useEffect, useState, useMemo, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { motion } from 'framer-motion';
import { ChevronUp, Copy, Printer, Menu, X, Check, Sparkles, Search, Maximize2, Minimize2, Link as LinkIcon } from 'lucide-react';

// ---------- Utilities ----------
const createId = (text: string): string => text
  .toLowerCase()
  .replace(/\*\*/g, '')
  .replace(/📜\s*/, '')
  .replace(/[`~!@#$%^&*()+=|{}\[\]\\:'"<>?,./]/g, '')
  .trim()
  .replace(/\s+/g, '-');

// Decorative floating orbs (delay stagger via custom)
const ORB_VARIANTS = {
  float: (d: number) => ({
    y: [0, -18, 0],
    rotate: [0, 6, -4, 0],
    transition: { duration: 10, delay: d, repeat: Infinity, ease: 'easeInOut' }
  })
};

// ---------- Markdown Content ----------
const MARKDOWN_CONTENT = `---

# 📜 Privacy Policy – Magpieweb

**Last Updated: September 06, 2025**

### **1. Introduction**

Magpieweb ("Company", "we", "our", "us") operates a hyperlocal delivery platform through our **Telegram Bot** and **Web Application** (together, the "Service"). We also provide digital solutions, including website development and smart digital growth tools ([www.magpieweb.com](https://www.magpieweb.com)).

We are committed to safeguarding the privacy of our users ("you", "your", "customer") and ensuring your personal information is protected. This Privacy Policy explains how we collect, use, share, and safeguard your data.

By using our Service, you consent to the practices described in this Privacy Policy.

---

### **2. Information We Collect**

We may collect and process the following categories of information:

1. **Personal Identification Data**

   * Full name
   * Phone number
   * Email address
   * Delivery address

2. **Order & Transaction Data**

   * Items you order
   * Order history and frequency
   * Billing and payment information (UPI ID, card details – processed securely via third-party payment gateways)
   * GST invoice details (if applicable)

3. **Technical Data**

   * Device type, operating system, browser type
   * IP address and location (approximate, for service availability)
   * Unique identifiers such as cookies, session tokens, and Telegram ID

4. **Communication Data**

   * Chat interactions with our bot
   * Customer support emails/messages
   * Feedback, complaints, or reviews

5. **Marketing & Preference Data**

   * Opt-ins for offers, promotions, or newsletters
   * Preferences saved for faster re-ordering

---

### **3. How We Use Your Information**

We process your data for the following purposes:

* To process and deliver your orders efficiently.
* To provide GST-compliant invoices and maintain tax records.
* To communicate with you about orders, support, and promotional offers.
* To improve our Service, enhance user experience, and troubleshoot errors.
* To prevent fraud, unauthorized use, or suspicious activities.
* To comply with legal and regulatory obligations under Indian law.

---

### **4. Legal Basis for Processing**

We process your data under the following grounds:

* **Consent:** When you voluntarily provide your information.
* **Contractual necessity:** To fulfill and deliver your order.
* **Legal obligations:** To comply with taxation, billing, and dispute resolution.
* **Legitimate interests:** For service improvements, marketing, and fraud prevention.

---

### **5. Data Sharing & Disclosure**

Your information may be shared with:

* **Partner Shops:** To prepare and pack your orders.
* **Delivery Partners:** To deliver items to your specified address.
* **Payment Gateways:** For processing secure payments.
* **Government/Legal Authorities:** When required for compliance with applicable laws.

We **do not sell or trade** your data to third parties for profit.

---

### **6. Data Retention**

* We retain personal data only as long as required to provide services, comply with legal obligations, or resolve disputes.
* Order and billing data may be kept for up to **7 years** to comply with taxation and audit requirements.
* Upon request, we will delete or anonymize your personal data (unless legally required to retain it).

---

### **7. Your Rights**

You have the right to:

* Access a copy of your personal data.
* Correct inaccurate or incomplete information.
* Request deletion of your data (subject to retention laws).
* Opt out of marketing communications.
* File a complaint with relevant Indian data protection authorities if you believe your rights are violated.

---

### **8. Security Measures**

We take reasonable and industry-standard steps to protect your data, including:

* Encryption (HTTPS/TLS) for data in transit.
* Secure payment processing via trusted gateways.
* Restricted internal access to personal information.
* Regular security reviews and vulnerability checks.

---

### **9. Cookies & Tracking**

Our webapp may use cookies and tracking tools for:

* Storing user preferences (such as saved addresses).
* Analytics and service improvement.
* Session authentication and fraud prevention.

You may disable cookies in your browser, but some features may stop working correctly.

---

### **10. Children's Privacy**

Our Service is **not directed at children under the age of 13**. We do not knowingly collect personal information from users below this age. If we learn we have collected such data, we will delete it immediately.

---

### **11. International Data Transfers**

If your data is processed outside India (e.g., cloud hosting or analytics providers), we ensure that appropriate safeguards are applied to protect your privacy.

---

### **12. Changes to Privacy Policy**

We may update this Privacy Policy at any time. The "Last Updated" date will always reflect the latest version. Significant changes will be communicated through our Service.

---

### **13. Contact Information**

For privacy concerns or general queries:

**Magpieweb**

**Email:** [info@magpieweb.com](mailto:info@magpieweb.com)  
**Website:** [www.magpieweb.com](https://www.magpieweb.com)  
**Phone:** +91 73069 63417
---

# 📜 Terms & Conditions – Magpieweb

**Last Updated: September 06, 2025**

### **1. Introduction**

These Terms & Conditions ("Terms") govern your access to and use of Magpieweb's hyperlocal delivery platform (Telegram bot and webapp) and other services provided under the Magpieweb brand. By using our Service, you agree to be bound by these Terms.

---

### **2. Eligibility**

* The Service is intended for individuals aged **13 years and above**.
* If you are under 18, you may only use the Service under the supervision of a parent or guardian.
* By using the Service, you confirm that you are legally competent to enter into binding contracts under Indian law.

---

### **3. Services Provided**

* Our platform connects customers with **local supermarkets and shops** for ordering products online.
* Orders are fulfilled by Partner Shops and delivered by Delivery Partners.
* Magpieweb acts as a **facilitator**, not the seller of goods. Product quality and compliance remain the responsibility of the Partner Shop.

---

### **4. User Responsibilities**

You agree to:

* Provide accurate and complete information while using the Service.
* Keep your account information updated.
* Not misuse or attempt to disrupt the Service.
* Use the Service only for lawful purposes.

---

### **5. Ordering & Payment**

* Orders placed through the Service must be accurate and complete.
* Payments may be made via **UPI, debit/credit cards, wallets, or Cash on Delivery** (if supported).
* All prices are inclusive of applicable taxes unless stated otherwise.
* GST invoices will be provided for eligible transactions.

---

### **6. Delivery Policy**

* Delivery timeframes are estimates only and may vary due to traffic, weather, or unforeseen delays.
* Orders are delivered to the address provided during checkout.
* Delivery fees, if applicable, will be displayed before confirming the order.

---

### **7. Cancellations & Refunds**

* Orders may be canceled before they are accepted by the Partner Shop.
* Once an order is prepared or dispatched, cancellation may not be possible.
* Refunds for canceled or disputed orders will be processed within **7–10 working days**.
* Refund method: credited back to your original payment method or wallet balance.

---

### **8. Returns & Replacement**

* Returns are subject to the policies of Partner Shops.
* Perishable items (like fruits, vegetables, dairy, meat) may not be eligible for return.
* Damaged or missing items must be reported within **24 hours** of delivery with proof (photo/message).

---

### **9. Limitation of Liability**

* Magpieweb is a **platform provider** and is not responsible for product quality, pricing errors, or shop compliance.
* We are not liable for indirect, incidental, or consequential damages.
* Our liability in any case will be limited to the value of the order placed through our platform.

---

### **10. Promotions & Offers**

* Magpieweb may run discounts, cashback, or promotional offers.
* Offers may be withdrawn or modified at our discretion without notice.
* Users engaging in fraudulent use of offers may have accounts suspended.

---

### **11. Intellectual Property**

* All trademarks, logos, software, and content associated with Magpieweb remain our exclusive property.
* Users may not reproduce, distribute, or exploit our intellectual property without written consent.

---

### **12. Termination**

We reserve the right to suspend or terminate your account if:

* You violate these Terms.
* Fraudulent, abusive, or illegal activity is detected.
* Required by law or regulatory order.

---

### **13. Governing Law**

These Terms shall be governed by and interpreted under the laws of **India**. Any disputes shall be subject to the exclusive jurisdiction of the **courts in Kerala, India**.

---

### **14. Amendments**

We may modify these Terms at any time. Continued use of the Service after updates implies acceptance of the revised Terms.

---

### **15. Contact Us**

For questions, complaints, or support:

**Magpieweb**

**Email:** [info@magpieweb.com](mailto:info@magpieweb.com)  
**Website:** [www.magpieweb.com](https://www.magpieweb.com)  
**Phone:** +91 73069 63417
---`;

interface TOCItem { id: string; title: string; level: number; }

export default function MagpiewebLegal() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [showTOC, setShowTOC] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [copiedHeading, setCopiedHeading] = useState<string | null>(null);
  const [tocQuery, setTocQuery] = useState('');
  const [focusMode, setFocusMode] = useState(false);
  const progressRef = useRef<HTMLDivElement | null>(null);

  // Build TOC once
  const tocItems = useMemo<TOCItem[]>(() => {
    const items: TOCItem[] = [];
    const lines = MARKDOWN_CONTENT.split('\n');
    
    lines.forEach((line, index) => {
      const m = line.match(/^(#{1,3})\s+(.+)$/);
      if (!m) return;
      
      const level = m[1].length;
      const raw = m[2].replace(/\*\*/g, '');
      const title = raw.replace(/📜\s*/, '');
      const id = createId(raw);
      
      // Ensure unique IDs by adding index if duplicate
      const existingItem = items.find(item => item.id === id);
      const finalId = existingItem ? `${id}-${index}` : id;
      
      items.push({ level, title, id: finalId });
    });
    
    return items;
  }, []);

  const filteredTOC = useMemo(() => tocItems.filter(i => i.title.toLowerCase().includes(tocQuery.toLowerCase())), [tocItems, tocQuery]);

  // Copy a heading deep link
  const copyHeadingLink = async (id: string) => {
    try {
      await navigator.clipboard.writeText(`${window.location.origin}${window.location.pathname}#${id}`);
      setCopiedHeading(id);
      setTimeout(() => setCopiedHeading(null), 1500);
    } catch {/* ignore */}
  };

  // Heading factory to satisfy react-markdown types
  const makeHeading = (level: 1|2|3) => (props: React.HTMLAttributes<HTMLHeadingElement>) => {
    const children = props.children as React.ReactNode;
    // Recursively extract plain text from nested markdown elements (e.g. <strong>, <em>)
    const extractText = (node: React.ReactNode): string => {
      if (typeof node === 'string' || typeof node === 'number') return String(node);
      if (Array.isArray(node)) return node.map(extractText).join(' ');
      if (React.isValidElement(node)) return extractText(node.props.children);
      return '';
    };
    const text = extractText(children);
    const baseId = createId(text);
    
    // Find the corresponding TOC item to get the actual unique ID
    const tocItem = tocItems.find(item => item.title === text.replace(/📜\s*/, ''));
    const id = tocItem ? tocItem.id : baseId;
    
    const Tag = (`h${level}`) as keyof JSX.IntrinsicElements;
    const styleMap: Record<number, string> = {
      1: 'text-3xl sm:text-4xl font-bold mb-8 text-gray-900 border-b-2 border-purple-200 pb-4 leading-tight',
      2: 'text-xl sm:text-2xl font-semibold mt-12 mb-6 text-gray-800 leading-snug',
      3: 'text-lg sm:text-xl font-semibold mt-8 mb-4 text-gray-800 leading-snug'
    };
    return (
      <Tag id={id} className={`${styleMap[level]} scroll-mt-28 group relative`}>
        <span>{children}</span>
        <button
          type="button"
          aria-label="Copy section link"
          onClick={() => copyHeadingLink(id)}
          className="align-middle ml-2 opacity-0 group-hover:opacity-100 transition text-purple-400 hover:text-purple-600"
        >
          <LinkIcon className="w-4 h-4" />
        </button>
      </Tag>
    );
  };
  const H1 = makeHeading(1);
  const H2 = makeHeading(2);
  const H3 = makeHeading(3);

  // Progress bar + back to top
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const pct = max > 0 ? (y / max) * 100 : 0;
      if (progressRef.current) progressRef.current.style.setProperty('--progress', `${pct}`);
      setShowBackToTop(y > 600);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // IntersectionObserver for active section
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(e => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible[0]) setActiveSection(visible[0].target.id);
    }, { rootMargin: '-40% 0px -55% 0px', threshold: [0, 0.25, 0.5] });
    tocItems.forEach(i => { const el = document.getElementById(i.id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, [tocItems]);

  // Keyboard shortcuts
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 's' && !e.metaKey && !e.ctrlKey) { e.preventDefault(); document.getElementById('toc-search')?.focus(); }
      else if (e.key === 'f' && !e.metaKey && !e.ctrlKey) { e.preventDefault(); setFocusMode(f => !f); }
      else if (e.key === '[') { const idx = tocItems.findIndex(i => i.id === activeSection); if (idx > 0) scrollToSection(tocItems[idx - 1].id); }
      else if (e.key === ']') { const idx = tocItems.findIndex(i => i.id === activeSection); if (idx !== -1 && idx < tocItems.length - 1) scrollToSection(tocItems[idx + 1].id); }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [activeSection, tocItems]);

  // Set document title and meta tags
  useEffect(() => {
    const originalTitle = document.title;
    document.title = 'Magpieweb — Privacy Policy & Terms';
    
    // Add noindex meta tag
    const metaTag = document.createElement('meta');
    metaTag.name = 'robots';
    metaTag.content = 'noindex,nofollow';
    document.head.appendChild(metaTag);
    
    return () => {
      document.title = originalTitle;
      document.head.removeChild(metaTag);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 110;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
    setShowTOC(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const copyCurrentUrl = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy URL:', err);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const indentStyle = (level: number) => ({ paddingLeft: `${(level - 1) * 0.85}rem` });

  // Lock body scroll when mobile TOC open
  useEffect(() => {
    if (showTOC && window.innerWidth < 1024) {
      const original = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = original; };
    }
  }, [showTOC]);

  return (
    <div className={`min-h-screen relative bg-gradient-to-b from-purple-50 via-white to-gray-50 ${focusMode ? 'overflow-hidden' : ''}`}>
      {/* Reading progress bar */}
      <div ref={progressRef} className="fixed top-0 left-0 w-full h-1 z-50 bg-gradient-to-r from-purple-300 via-fuchsia-300 to-blue-300/40">
        <div className="h-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-blue-500 transition-[width] duration-100" style={{ width: 'var(--progress,0%)' }} />
      </div>
      {/* Decorative orbs */}
      <motion.div className="pointer-events-none absolute -top-40 -left-32 w-96 h-96 rounded-full bg-purple-300/25 blur-3xl" variants={ORB_VARIANTS} animate="float" custom={0} />
      <motion.div className="pointer-events-none absolute top-1/3 -right-32 w-[28rem] h-[28rem] rounded-full bg-blue-300/25 blur-3xl" variants={ORB_VARIANTS} animate="float" custom={2} />
      <motion.div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] rounded-full bg-gradient-to-tr from-purple-200 via-white to-blue-200 blur-2xl opacity-70" variants={ORB_VARIANTS} animate="float" custom={4} />
      {/* Skip to content link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-purple-600 text-white px-4 py-2 rounded z-50"
      >
        Skip to main content
      </a>

      {/* Sticky Header */}
      <header className="sticky top-0 bg-white/80 backdrop-blur-xl border-b border-purple-100 z-40 shadow-sm supports-[backdrop-filter]:bg-white/65">
        {/* EXACT LOGO SNIPPET - DO NOT MODIFY */}
        <div className="w-full px-3 sm:px-4 lg:px-6">
          <div className="flex items-center justify-between py-2 sm:py-0">
            <div className="flex items-center space-x-1 sm:space-x-2"> {/* Reduced spacing */}
              {/* Logo Text */}
              <div className="text-lg sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 select-none">Magpie Web</div>
              <svg className="w-12 h-12 sm:w-16 sm:h-16 text-purple-400 -ml-2 sm:-ml-4" viewBox="0 0 100 100" aria-hidden="true">
                <path d="M20,50 Q35,20 50,50 T80,50" stroke="currentColor" strokeWidth="2" fill="none">
                  <animate attributeName="stroke-dasharray" values="0,200;200,0;0,200" dur="6s" repeatCount="indefinite" />
                </path>
                <path d="M30,40 Q45,60 60,40" stroke="currentColor" strokeWidth="2" fill="none">
                  <animate attributeName="stroke-dasharray" values="0,140;140,0;0,140" dur="5s" repeatCount="indefinite" />
                </path>
              </svg>
            </div>
          </div>
        </div>
        
        <div className="border-t border-purple-100 py-2 sm:py-3">
          <div className="w-full px-3 sm:px-4 lg:px-6 flex items-center justify-between">
            <div className="text-xs sm:text-sm text-purple-600 font-medium">
            </div>
            
            {/* Action Buttons */}
            <div className="flex items-center gap-1.5 sm:gap-3">
              <button
                onClick={() => setFocusMode(f => !f)}
                className="hidden md:inline-flex items-center gap-2 px-2 py-1 sm:px-3 sm:py-1.5 text-xs sm:text-sm bg-white border border-purple-200 hover:border-purple-400 text-purple-700 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
                aria-label="Toggle focus mode"
              >
                {focusMode ? <Minimize2 className="w-3 h-3 sm:w-4 sm:h-4" /> : <Maximize2 className="w-3 h-3 sm:w-4 sm:h-4" />}
                <span className="hidden sm:inline">{focusMode ? 'Exit Focus' : 'Focus Mode'}</span>
              </button>
              <button
                onClick={copyCurrentUrl}
                className="flex items-center gap-1 sm:gap-2 px-2 py-1 sm:px-3 sm:py-1.5 text-xs sm:text-sm bg-purple-100 hover:bg-purple-200 text-purple-700 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
                aria-label="Copy current page URL"
              >
                {copySuccess ? <Check className="w-3 h-3 sm:w-4 sm:h-4" /> : <Copy className="w-3 h-3 sm:w-4 sm:h-4" />}
                <span className="hidden sm:inline">{copySuccess ? 'Copied!' : 'Copy Link'}</span>
              </button>
              
              <button
                onClick={handlePrint}
                className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500"
                aria-label="Print this page"
              >
                <Printer className="w-4 h-4" />
                Print
              </button>
            </div>
          </div>
        </div>
  </header>

      <div className="w-full px-3 sm:px-4 lg:px-6 py-4 sm:py-8 overflow-x-hidden">
        <div className="w-full max-w-none mx-auto overflow-x-hidden">
          <div className="xl:flex xl:gap-8 w-full">
          {/* Desktop TOC Sidebar */}
          <aside className={`hidden xl:block w-80 flex-shrink-0 transition ${focusMode ? 'opacity-0 pointer-events-none select-none' : 'opacity-100'}`}>
            <div className="sticky top-32">
              <div className="relative bg-white/70 backdrop-blur rounded-2xl shadow-md border border-purple-100 p-4 sm:p-6 overflow-hidden max-h-[70vh] flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none" />
                <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4 flex items-center gap-2" aria-label="Table of Contents"><Sparkles className="w-4 h-4 text-purple-500" /><span>Table of Contents</span></h2>
                <div className="mb-3 relative">
                  <Search className="w-4 h-4 text-purple-400 absolute left-3 top-2.5" />
                  <input
                    id="toc-search"
                    placeholder="Search sections (s)"
                    value={tocQuery}
                    onChange={e => setTocQuery(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white/60"
                  />
                </div>
                <nav aria-label="Table of contents" className="relative flex-1 overflow-auto pr-1">
                  <ul className="space-y-1 text-sm relative">
                    {filteredTOC.map(item => {
                      const isActive = item.id === activeSection;
                      return (
                        <li key={item.id} style={indentStyle(item.level)}>
                          <button
                            onClick={() => scrollToSection(item.id)}
                            className={`relative w-full text-left px-2 py-1.5 rounded-md transition group focus:outline-none ${isActive ? 'bg-purple-600 text-white shadow-sm' : 'text-gray-600 hover:bg-purple-50 hover:text-purple-700'}`}
                          >
                            <span className="truncate pr-3 inline-block align-middle">{item.title}</span>
                            {isActive && <span className="absolute inset-y-0 left-0 w-1 rounded-r bg-gradient-to-b from-purple-300 to-blue-300" />}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
                {filteredTOC.length === 0 && (
                  <p className="text-xs text-gray-500 mt-4">No matches.</p>
                )}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main id="main-content" className={`w-full xl:flex-1 transition-all ${focusMode ? 'xl:mx-auto xl:max-w-4xl' : ''}`}>
            {/* Mobile TOC */}
            {/* Mobile TOC Bottom Sheet */}
            <div aria-hidden={!showTOC} className={`xl:hidden fixed inset-0 z-40 transition-colors ${showTOC ? 'bg-black/40 backdrop-blur-[2px]' : 'pointer-events-none bg-transparent'}`} onClick={() => setShowTOC(false)} />
            <div className={`xl:hidden fixed inset-x-0 bottom-0 z-50 max-h-[80vh] flex flex-col rounded-t-3xl border-t border-purple-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85 shadow-xl transition-transform duration-300 ${showTOC ? 'translate-y-0' : 'translate-y-full'}`} aria-label="Mobile table of contents" role="dialog" aria-modal="true">
              <div className="flex items-center justify-between px-4 sm:px-5 pt-3 sm:pt-4 pb-2 sm:pb-3 border-b border-purple-100">
                <div className="flex items-center gap-2 w-full">
                  <span className="inline-block w-8 sm:w-10 h-1 sm:h-1.5 rounded-full bg-purple-300 mx-auto absolute left-1/2 -translate-x-1/2 top-1.5 sm:top-2" />
                  <h2 className="text-sm sm:text-base font-semibold text-gray-800" id="mobile-toc-title">Sections</h2>
                </div>
                <button aria-label="Close sections" onClick={() => setShowTOC(false)} className="p-1.5 sm:p-2 rounded-md text-gray-500 hover:text-gray-800 hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-400">
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
              <div className="px-4 sm:px-5 pt-2 sm:pt-3 pb-3 sm:pb-4 border-b border-purple-100">
                <div className="relative">
                  <Search className="w-4 h-4 text-purple-400 absolute left-3 top-2.5" />
                  <input
                    id="toc-search-mobile"
                    placeholder="Search (s)"
                    value={tocQuery}
                    onChange={e => setTocQuery(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white/70"
                  />
                </div>
              </div>
              <nav aria-labelledby="mobile-toc-title" className="overflow-y-auto px-3 sm:px-4 pb-6 flex-1">
                <ul className="space-y-0.5 sm:space-y-1 text-sm">
                  {filteredTOC.map(item => {
                    const isActive = item.id === activeSection;
                    return (
                      <li key={item.id} style={indentStyle(item.level)}>
                        <button
                          onClick={() => scrollToSection(item.id)}
                          className={`w-full text-left rounded-lg px-3 py-2.5 sm:py-2 mb-0.5 transition active:scale-[0.985] focus:outline-none focus:ring-2 focus:ring-purple-400 ${isActive ? 'bg-purple-600 text-white shadow-sm' : 'text-gray-700 hover:bg-purple-50 hover:text-purple-700'}`}
                        >
                          {item.title}
                        </button>
                      </li>
                    );
                  })}
                  {filteredTOC.length === 0 && (
                    <li className="text-xs text-gray-500 px-3 py-4">No matches.</li>
                  )}
                </ul>
              </nav>
            </div>
            {/* Floating mobile button */}
            <button
              type="button"
              onClick={() => setShowTOC(true)}
              className="xl:hidden fixed bottom-16 sm:bottom-20 right-3 sm:right-4 z-40 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-lg px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-medium flex items-center gap-1.5 sm:gap-2 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              aria-label="Open sections list"
            >
              <Menu className="w-4 h-4" /> <span className="hidden xs:inline">Sections</span>
            </button>

            {/* Content */}
            <article className="relative bg-white/80 backdrop-blur rounded-xl sm:rounded-2xl shadow-lg border border-purple-100 p-4 sm:p-6 lg:p-8 print:shadow-none print:border-none overflow-hidden">
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-40 mix-blend-overlay" style={{ backgroundImage: 'radial-gradient(circle at 25% 20%, rgba(168,85,247,0.08), transparent 60%), radial-gradient(circle at 80% 50%, rgba(59,130,246,0.08), transparent 55%)' }} />
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: H1,
                  h2: H2,
                  h3: H3,
                  p: ({ children, ...props }) => {
                    // Check if this paragraph contains contact information
                    const isContactInfo = React.Children.toArray(children).some(child => {
                      if (typeof child === 'string') {
                        return child.includes('Email:') || child.includes('Website:') || child.includes('Phone:') || child.includes('Magpieweb');
                      }
                      if (React.isValidElement(child) && child.props.children) {
                        const text = child.props.children.toString();
                        return text.includes('info@magpieweb.com') || text.includes('www.magpieweb.com') || text.includes('+91 73069 63417') || text.includes('Email:') || text.includes('Website:') || text.includes('Phone:');
                      }
                      return false;
                    });

                    return (
                      <p className={`mb-3 sm:mb-4 text-gray-700 leading-relaxed print:leading-normal ${
                        isContactInfo 
                          ? 'text-sm sm:text-sm lg:text-sm' 
                          : 'text-sm sm:text-[15px] lg:text-base'
                      }`} {...props}>{children}</p>
                    );
                  },
                  ul: ({ children, ...props }) => (
                    <ul className="mb-4 sm:mb-6 pl-4 sm:pl-5 lg:pl-6 space-y-1.5 sm:space-y-2 list-disc" {...props}>{children}</ul>
                  ),
                  li: ({ children, ...props }) => (
                    <li className="text-gray-700 leading-relaxed text-sm sm:text-[15px] lg:text-base" {...props}>{children}</li>
                  ),
                  strong: ({ children, ...props }) => {
                    // Check if this strong element is part of contact information
                    const isContactInfo = children && (
                      children.toString().includes('Email:') || 
                      children.toString().includes('Magpieweb') ||
                      children.toString().includes('Website:') ||
                      children.toString().includes('Phone:')
                    );

                    return (
                      <strong className={`font-semibold text-gray-900 ${
                        isContactInfo ? 'text-sm sm:text-sm lg:text-sm' : ''
                      }`} {...props}>{children}</strong>
                    );
                  },
                  a: ({ children, href, ...props }) => {
                    // Check if this link is part of contact information
                    const isContactInfo = href && (
                      href.includes('info@magpieweb.com') || 
                      href.includes('www.magpieweb.com') || 
                      href.includes('+91')
                    );

                    return (
                      <a
                        href={href}
                        className={`text-purple-600 hover:text-purple-800 underline transition-colors break-words ${
                          isContactInfo ? 'text-sm sm:text-sm lg:text-sm' : ''
                        }`}
                        target="_blank"
                        rel="noopener noreferrer"
                        {...props}
                      >
                        {children}
                      </a>
                    );
                  },
                  hr: ({ ...props }) => (
                    <hr className="my-6 sm:my-8 border-gray-200 print:my-4" {...props} />
                  ),
                }}
              >
                {MARKDOWN_CONTENT}
              </ReactMarkdown>
              {/* Focus mode overlay hint */}
              {focusMode && (<div className="absolute top-2 right-3 text-[9px] sm:text-[10px] uppercase tracking-wide text-purple-500">Focus Mode</div>)}
            </article>
          </main>
          </div>
        </div>
      </div>

      {/* Back to Top Button - Mobile optimized */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="lg:hidden fixed bottom-4 right-4 bg-gray-600 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 print:hidden active:scale-95"
          style={{ 
            WebkitTapHighlightColor: 'transparent',
            touchAction: 'manipulation'
          }}
          aria-label="Back to top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}

      {/* Copy Success Toast - Mobile optimized */}
      {copySuccess && (
        <div className="fixed top-16 sm:top-20 right-4 sm:right-6 bg-green-500 text-white px-3 sm:px-4 py-2 rounded-lg shadow-lg z-50 animate-fade-in text-sm">
          <div className="flex items-center gap-2"><Check className="w-4 h-4" /> URL copied!</div>
        </div>
      )}

      {/* Copied heading toast */}
      {copiedHeading && (
        <div className="fixed top-32 right-6 bg-purple-600 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-fade-in">Section link copied!</div>
      )}

      <style>{`
        @media print { @page { margin:1in; } .container { max-width:none!important;} aside { display:none!important;} }
        .animate-fade-in { animation: fadeIn .25s ease, fadeOut .35s ease 1.35s forwards; }
        @keyframes fadeIn { from { opacity:0; transform:translateY(-6px);} to { opacity:1; transform:translateY(0);} }
        @keyframes fadeOut { to { opacity:0; transform:translateY(-4px);} }
        
        /* Critical mobile responsiveness fixes */
        * {
          box-sizing: border-box;
        }
        
        /* Force full width on mobile devices and prevent horizontal overflow */
        @media (max-width: 1279px) {
          html, body { 
            overflow-x: hidden; 
            width: 100%;
            max-width: 100%;
            margin: 0;
            padding: 0;
          }
          #root { 
            width: 100vw; 
            max-width: 100vw; 
            overflow-x: hidden;
          }
          * { 
            box-sizing: border-box; 
          }
          /* Prevent any element from causing horizontal scroll */
          .container, .w-full, .max-w-full {
            max-width: 100% !important;
            overflow-x: hidden;
          }
          /* Ensure main content uses full width on mobile */
          main {
            width: 100% !important;
            max-width: 100% !important;
          }
          /* Fix any potential layout issues */
          .xl\\:flex {
            display: block !important;
          }
          .xl\\:gap-8 {
            gap: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}