import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lightbulb, Users, Globe, Brain, Database, Lock, Cloud, Search, Code, LineChart, MessageSquare, Package, Rocket, Heart, Star, ArrowRight, Sparkles, TrendingUp, Zap, ExternalLink, MessageCircle, Vote, Leaf, Phone } from 'lucide-react';
import Navbar from './components/Navbar';
import Section from './components/Section';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import SEO from './components/SEO';
import FAQ from './components/FAQ';
import Background3D from './components/Background3D';
import { initializeAnalytics } from './utils/analytics';
// import { injectStructuredData } from './utils/seo';
// import { measureWebVitals, preloadCriticalResources } from './utils/performance';

function App() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const communityRef = useRef<HTMLDivElement>(null);
  const expertiseRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Magpie SVG path animation variants
  const magpiePathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 2, ease: "easeInOut" },
        opacity: { duration: 0.5 }
      }
    }
  };

  // Initialize analytics and basic performance monitoring
  useEffect(() => {
    // Initialize Google Analytics
    initializeAnalytics();
    
    // Basic error tracking
    window.addEventListener('error', (event) => {
      console.error('Global error:', event.error);
    });

    // Basic performance tracking
    if ('performance' in window) {
      window.addEventListener('load', () => {
        const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        console.log('Page Load Time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
      });
    }
  }, []);

  return (
    <div className="bg-black text-white min-h-screen relative overflow-x-hidden">
      <SEO />
      
      {/* Premium 3D Background */}
      <Background3D />
      
      <Navbar
        onNavigate={{
          about: () => scrollToSection(aboutRef),
          products: () => scrollToSection(productsRef),
          services: () => scrollToSection(servicesRef),
          community: () => scrollToSection(communityRef),
          contact: () => scrollToSection(contactRef),
        }}
      />

      {/* Hero Section */}
      <Section className="pt-[80px] md:pt-0 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20" />
          {/* Animated background elements */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
          />
          
          {/* Grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto relative"
          >
            {/* Decorative Magpie SVG
            <motion.svg
              className="absolute -top-20 right-0 w-32 h-32 md:w-48 md:h-48 text-purple-400 opacity-50"
              viewBox="0 0 100 100"
              initial="hidden"
              animate="visible"
            >
              <motion.path
                d="M20,50 Q35,20 50,50 T80,50"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                variants={magpiePathVariants}
              />
              <motion.path
                d="M30,40 Q45,60 60,40"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                variants={magpiePathVariants}
              />
            </motion.svg> */}

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-block mb-4"
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
                <span className="text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">Community-Driven Product Studio</span>
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
              className="text-4xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-500 text-center md:text-left relative leading-tight"
            >
              Building SaaS Products & Custom Solutions That Businesses Love
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl mb-8 text-gray-300 text-center md:text-left font-medium leading-relaxed"
            >
              <span className="text-purple-400 font-semibold">Born in Kerala, built for the world.</span> We create ready-to-use SaaS products through community collaboration — AND provide custom development services when you need something unique. <span className="text-blue-400 font-semibold">Two powerful ways to grow your business.</span>
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4 text-center md:text-left justify-center md:justify-start">
              <motion.button
                onClick={() => scrollToSection(productsRef)}
                className="group px-8 py-4 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-blue-600 rounded-full text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-300 relative overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <span className="relative z-10 flex items-center gap-2 justify-center">
                  <Package className="w-5 h-5" />
                  Explore Our Products
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>
              
              <motion.button
                onClick={() => scrollToSection(contactRef)}
                className="group px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-purple-400/50 rounded-full text-white font-semibold hover:bg-white/20 hover:border-purple-400 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                <span className="flex items-center gap-2 justify-center">
                  <Rocket className="w-5 h-5" />
                  Custom Solutions
                </span>
              </motion.button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-16">
              {[
                { icon: Shield, text: 'Enterprise Security' },
                { icon: Lightbulb, text: 'Focused Innovation' },
                { icon: Users, text: 'Expert Team' },
                { icon: Globe, text: 'Global Reach' },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * (index + 1) }}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(31, 41, 55, 0.7)" }}
                  className="text-center p-4 bg-gray-900/50 backdrop-blur-sm rounded-xl hover:bg-gray-800/50 transition-all duration-300 relative group"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <feature.icon className="w-8 md:w-12 h-8 md:h-12 mx-auto mb-4 text-purple-400" />
                  <p className="text-sm md:text-base text-gray-300">{feature.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Our Products Section - NEW */}
      <Section ref={productsRef} className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10 sm:mb-12 md:mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full backdrop-blur-sm mb-4 sm:mb-6"
            >
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
              <span className="text-xs sm:text-sm font-semibold text-purple-300">Our SaaS Products</span>
            </motion.div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-500 px-2">
              Ready-to-Use Solutions
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
              Built with our community, powered by AI. These products solve real problems for businesses worldwide.
            </p>
          </motion.div>

          {/* Premium Vertical Product Showcases */}
          <div className="space-y-16 sm:space-y-20 md:space-y-32 max-w-7xl mx-auto">
            
            {/* ═══════════════════════════════════════════════════════════════
                PRODUCT 1: GROWNLEAF - Coming Soon
            ═══════════════════════════════════════════════════════════════ */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              {/* Floating Background Elements */}
              <div className="absolute -top-10 sm:-top-20 -left-10 sm:-left-20 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
              <div className="absolute -bottom-10 sm:-bottom-20 -right-10 sm:-right-20 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-lime-500/10 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '1s' }} />
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-20 items-center">
                {/* Left: 3D Product Visual */}
                <motion.div
                  initial={{ opacity: 0, x: -100, rotateY: -15 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  transition={{ duration: 1, type: "spring", bounce: 0.3 }}
                  className="relative perspective-1000"
                >
                  <div 
                    className="group relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-1 transform-gpu transition-all duration-700 hover:scale-[1.02]"
                    style={{ transformStyle: 'preserve-3d' }}
                    onMouseEnter={() => setHoveredProduct(0)}
                    onMouseLeave={() => setHoveredProduct(null)}
                  >
                    {/* Animated Border Gradient */}
                    <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-emerald-500 via-lime-400 to-emerald-600 opacity-60 blur-sm group-hover:opacity-100 group-hover:blur-md transition-all duration-500 animate-pulse" />
                    
                    {/* Card Content */}
                    <div className="relative bg-gradient-to-br from-gray-900 via-gray-800/95 to-black rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 backdrop-blur-xl border border-emerald-500/20 overflow-hidden">
                      {/* Coming Soon Badge */}
                      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 bg-gradient-to-r from-emerald-500/20 to-lime-500/20 border border-emerald-400/50 rounded-full backdrop-blur-sm">
                        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest text-emerald-300 flex items-center gap-1.5 sm:gap-2">
                          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-400 rounded-full animate-ping" />
                          Coming Soon
                        </span>
                      </div>
                      
                      {/* Logo & Branding */}
                      <div className="mb-5 sm:mb-6 md:mb-8">
                        <motion.div 
                          className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-4 sm:mb-5 md:mb-6"
                          animate={{ rotateY: hoveredProduct === 0 ? 360 : 0 }}
                          transition={{ duration: 1.2, type: "spring" }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-lime-400 to-emerald-600 rounded-xl sm:rounded-2xl shadow-2xl shadow-emerald-500/40" />
                          <div className="absolute inset-[2px] sm:inset-[3px] bg-gradient-to-br from-gray-900 to-black rounded-lg sm:rounded-xl flex items-center justify-center">
                            <Leaf className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-emerald-400 drop-shadow-lg" />
                          </div>
                        </motion.div>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-1 sm:mb-2 tracking-tight">
                          Grownleaf
                        </h3>
                        <p className="text-sm sm:text-base md:text-lg text-emerald-300 font-medium">CRM Built for Local Business</p>
                      </div>
                      
                      {/* Decorative Grid */}
                      <div className="absolute inset-0 opacity-5 pointer-events-none">
                        <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(rgba(52,211,153,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(52,211,153,0.3) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                      </div>
                      
                      {/* Stats Grid */}
                      <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 mt-5 sm:mt-6 md:mt-8">
                        {[
                          { label: 'Local Focus', value: '100%', icon: '🏪' },
                          { label: 'Setup Time', value: '5min', icon: '⚡' },
                          { label: 'Pricing', value: 'Free Tier', icon: '💚' },
                        ].map((stat, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + idx * 0.1 }}
                            className="text-center p-2 sm:p-3 md:p-4 bg-emerald-500/5 rounded-lg sm:rounded-xl border border-emerald-500/10"
                          >
                            <span className="text-lg sm:text-xl md:text-2xl mb-0.5 sm:mb-1 block">{stat.icon}</span>
                            <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white block">{stat.value}</span>
                            <span className="text-[9px] sm:text-[10px] md:text-xs text-gray-400 uppercase tracking-wide">{stat.label}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Right: Product Details */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="space-y-5 sm:space-y-6 md:space-y-8"
                >
                  <div>
                    <motion.p 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed mb-3 sm:mb-4 md:mb-6"
                    >
                      Stop losing customers to scattered notes and forgotten follow-ups. 
                      <span className="text-emerald-400 font-semibold"> Grownleaf brings all your customer touchpoints into one calm, powerful workspace.</span>
                    </motion.p>
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                      Perfect for salons, repair shops, local stores, freelancers, and service businesses who want to grow without the complexity of enterprise CRMs.
                    </p>
                  </div>
                  
                  {/* Feature List with Icons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                    {[
                      { icon: MessageCircle, title: 'WhatsApp Integration', desc: 'Log chats automatically' },
                      { icon: Phone, title: 'Call Tracking', desc: 'Never miss a follow-up' },
                      { icon: TrendingUp, title: 'Revenue Pipeline', desc: 'Track walk-ins to repeat buyers' },
                      { icon: Zap, title: 'Smart Reminders', desc: 'AI-powered follow-up timing' },
                      { icon: Users, title: 'Customer Profiles', desc: 'Full history at a glance' },
                      { icon: Star, title: 'Loyalty Tracking', desc: 'Reward your best customers' },
                    ].map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * idx }}
                        className="flex items-start gap-2.5 sm:gap-3 md:gap-4 p-2.5 sm:p-3 md:p-4 rounded-lg sm:rounded-xl bg-white/[0.02] border border-emerald-500/10 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all duration-300 group"
                      >
                        <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-md sm:rounded-lg bg-gradient-to-br from-emerald-500/20 to-lime-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <feature.icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-emerald-400" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white text-xs sm:text-sm">{feature.title}</h4>
                          <p className="text-[10px] sm:text-xs text-gray-500">{feature.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* CTA */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-col sm:flex-row items-center sm:items-start gap-2.5 sm:gap-3 md:gap-4 pt-2 sm:pt-3 md:pt-4"
                  >
                    <motion.button
                      className="w-full sm:w-auto px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-emerald-600 to-lime-600 rounded-xl sm:rounded-2xl text-white font-bold text-sm sm:text-base md:text-lg shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-2 sm:gap-3 group"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>Join Waitlist</span>
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                    <motion.button
                      className="w-full sm:w-auto px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-white/5 border border-emerald-500/30 rounded-xl sm:rounded-2xl text-emerald-300 font-semibold text-sm sm:text-base hover:bg-emerald-500/10 transition-all text-center"
                      whileHover={{ scale: 1.02 }}
                    >
                      Learn More
                    </motion.button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* ═══════════════════════════════════════════════════════════════
                PRODUCT 2: IN2KART
            ═══════════════════════════════════════════════════════════════ */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              {/* Floating Background Elements */}
              <div className="absolute -top-10 sm:-top-20 -right-10 sm:-right-20 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
              <div className="absolute -bottom-10 sm:-bottom-20 -left-10 sm:-left-20 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '1.5s' }} />
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-20 items-center">
                {/* Left: Product Details (Reversed Order) */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="space-y-5 sm:space-y-6 md:space-y-8 order-2 lg:order-1"
                >
                  <div>
                    <motion.p 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed mb-3 sm:mb-4 md:mb-6"
                    >
                      Turn WhatsApp into your complete storefront. 
                      <span className="text-purple-400 font-semibold"> Accept orders, manage inventory, and delight customers—all through the app they already use daily.</span>
                    </motion.p>
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                      Built for restaurants, grocery stores, bakeries, pharmacies, and any business that wants to sell where their customers are—without building an app.
                    </p>
                  </div>
                  
                  {/* Feature List with Icons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                    {[
                      { icon: Brain, title: 'AI Shopping Assistant', desc: 'Conversational ordering' },
                      { icon: Globe, title: 'Branded WebApp', desc: 'Your store, your brand' },
                      { icon: Package, title: 'Order Management', desc: 'Real-time tracking' },
                      { icon: LineChart, title: 'Sales Analytics', desc: 'Know what sells' },
                      { icon: Rocket, title: 'Multi-Outlet', desc: 'Scale across locations' },
                      { icon: Shield, title: 'Secure Payments', desc: 'Multiple payment options' },
                    ].map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * idx }}
                        className="flex items-start gap-2.5 sm:gap-3 md:gap-4 p-2.5 sm:p-3 md:p-4 rounded-lg sm:rounded-xl bg-white/[0.02] border border-purple-500/10 hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-300 group"
                      >
                        <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-md sm:rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <feature.icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-purple-400" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white text-xs sm:text-sm">{feature.title}</h4>
                          <p className="text-[10px] sm:text-xs text-gray-500">{feature.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* CTA */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-col sm:flex-row items-center sm:items-start gap-2.5 sm:gap-3 md:gap-4 pt-2 sm:pt-3 md:pt-4"
                  >
                    <motion.a
                      href="https://www.in2kart.shop/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl sm:rounded-2xl text-white font-bold text-sm sm:text-base md:text-lg shadow-xl shadow-purple-500/20 flex items-center justify-center gap-2 sm:gap-3 group"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>Visit in2Kart</span>
                      <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </motion.a>
                    <motion.a
                      href="https://www.in2kart.shop/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-white/5 border border-purple-500/30 rounded-xl sm:rounded-2xl text-purple-300 font-semibold text-sm sm:text-base hover:bg-purple-500/10 transition-all text-center"
                      whileHover={{ scale: 1.02 }}
                    >
                      See Demo
                    </motion.a>
                  </motion.div>
                </motion.div>
                
                {/* Right: 3D Product Visual */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="relative perspective-1000 order-1 lg:order-2"
                >
                  <div 
                    className="group relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl sm:rounded-3xl p-1 transform-gpu transition-all duration-700 hover:scale-[1.02]"
                    style={{ transformStyle: 'preserve-3d' }}
                    onMouseEnter={() => setHoveredProduct(1)}
                    onMouseLeave={() => setHoveredProduct(null)}
                  >
                    {/* Animated Border Gradient */}
                    <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-purple-500 via-fuchsia-500 to-blue-500 opacity-60 blur-sm group-hover:opacity-100 group-hover:blur-md transition-all duration-500 animate-pulse" />
                    
                    {/* Card Content */}
                    <div className="relative bg-gradient-to-br from-gray-900 via-gray-800/95 to-black rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 backdrop-blur-xl border border-purple-500/20 overflow-hidden">
                      {/* Live Badge */}
                      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/50 rounded-full backdrop-blur-sm">
                        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest text-green-300 flex items-center gap-1.5 sm:gap-2">
                          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse" />
                          Live
                        </span>
                      </div>
                      
                      {/* Logo & Branding */}
                      <div className="mb-5 sm:mb-6 md:mb-8">
                        <motion.div 
                          className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-4 sm:mb-5 md:mb-6 rounded-xl sm:rounded-2xl overflow-hidden bg-gray-900 border border-purple-300/40"
                          animate={{ rotateY: hoveredProduct === 1 ? 360 : 0 }}
                          transition={{ duration: 1.2, type: "spring" }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/10" />
                          <img
                            src="/images/in2kartlogo.png"
                            alt="in2Kart logo"
                            className="relative w-full h-full object-contain p-1.5 sm:p-2 drop-shadow-lg"
                          />
                        </motion.div>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-1 sm:mb-2 tracking-tight">
                          in2Kart
                        </h3>
                        <p className="text-sm sm:text-base md:text-lg text-purple-300 font-medium">WhatsApp Commerce Platform</p>
                      </div>
                      
                      {/* Decorative Grid */}
                      <div className="absolute inset-0 opacity-5 pointer-events-none">
                        <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(rgba(168,85,247,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.3) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                      </div>
                      
                      {/* Stats Grid */}
                      <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 mt-5 sm:mt-6 md:mt-8">
                        {[
                          { label: 'API Response', value: '<200ms', icon: '⚡' },
                          { label: 'Uptime', value: '99.9%', icon: '✅' },
                          { label: 'Daily Messages', value: '5K+', icon: '💬' },
                        ].map((stat, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + idx * 0.1 }}
                            className="text-center p-2 sm:p-3 md:p-4 bg-purple-500/5 rounded-lg sm:rounded-xl border border-purple-500/10"
                          >
                            <span className="text-lg sm:text-xl md:text-2xl mb-0.5 sm:mb-1 block">{stat.icon}</span>
                            <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white block">{stat.value}</span>
                            <span className="text-[9px] sm:text-[10px] md:text-xs text-gray-400 uppercase tracking-wide">{stat.label}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* ═══════════════════════════════════════════════════════════════
                PRODUCT 3: HIREPLZ
            ═══════════════════════════════════════════════════════════════ */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              {/* Floating Background Elements */}
              <div className="absolute -top-10 sm:-top-20 -left-10 sm:-left-20 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
              <div className="absolute -bottom-10 sm:-bottom-20 -right-10 sm:-right-20 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '2s' }} />
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-20 items-center">
                {/* Left: 3D Product Visual */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="relative perspective-1000"
                >
                  <div 
                    className="group relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl sm:rounded-3xl p-1 transform-gpu transition-all duration-700 hover:scale-[1.02]"
                    style={{ transformStyle: 'preserve-3d' }}
                    onMouseEnter={() => setHoveredProduct(2)}
                    onMouseLeave={() => setHoveredProduct(null)}
                  >
                    {/* Animated Border Gradient */}
                    <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 opacity-60 blur-sm group-hover:opacity-100 group-hover:blur-md transition-all duration-500 animate-pulse" />
                    
                    {/* Card Content */}
                    <div className="relative bg-gradient-to-br from-gray-900 via-gray-800/95 to-black rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 backdrop-blur-xl border border-blue-500/20 overflow-hidden">
                      {/* Live Badge */}
                      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/50 rounded-full backdrop-blur-sm">
                        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest text-green-300 flex items-center gap-1.5 sm:gap-2">
                          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse" />
                          Live
                        </span>
                      </div>
                      
                      {/* Logo & Branding */}
                      <div className="mb-5 sm:mb-6 md:mb-8">
                        <motion.div 
                          className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-4 sm:mb-5 md:mb-6 rounded-xl sm:rounded-2xl overflow-hidden bg-gray-900 border border-blue-300/40"
                          animate={{ rotateY: hoveredProduct === 2 ? 360 : 0 }}
                          transition={{ duration: 1.2, type: "spring" }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/10" />
                          <img
                            src="/images/hireplzlogo.png"
                            alt="HirePlz logo"
                            className="relative w-full h-full object-contain p-1.5 sm:p-2 drop-shadow-lg"
                          />
                        </motion.div>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-1 sm:mb-2 tracking-tight">
                          HirePlz
                        </h3>
                        <p className="text-sm sm:text-base md:text-lg text-blue-300 font-medium">Bulk Personalized Job Outreach</p>
                      </div>
                      
                      {/* Decorative Grid */}
                      <div className="absolute inset-0 opacity-5 pointer-events-none">
                        <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                      </div>
                      
                      {/* Stats Grid */}
                      <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 mt-5 sm:mt-6 md:mt-8">
                        {[
                          { label: 'Emails Sent', value: '10K+', icon: '✉️' },
                          { label: 'Time Saved', value: '90%', icon: '⏱️' },
                          { label: 'Users', value: '500+', icon: '🚀' },
                        ].map((stat, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + idx * 0.1 }}
                            className="text-center p-2 sm:p-3 md:p-4 bg-blue-500/5 rounded-lg sm:rounded-xl border border-blue-500/10"
                          >
                            <span className="text-lg sm:text-xl md:text-2xl mb-0.5 sm:mb-1 block">{stat.icon}</span>
                            <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white block">{stat.value}</span>
                            <span className="text-[9px] sm:text-[10px] md:text-xs text-gray-400 uppercase tracking-wide">{stat.label}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Right: Product Details */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="space-y-5 sm:space-y-6 md:space-y-8"
                >
                  <div>
                    <motion.p 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed mb-3 sm:mb-4 md:mb-6"
                    >
                      Skip the grind. Land the role.
                      <span className="text-blue-400 font-semibold"> Upload your CSV of roles & contacts, auto-personalize each email with smart placeholders, attach your resume, and ship applications in minutes—not days.</span>
                    </motion.p>
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                      Because manually sending 200 tailored applications drains time & energy. HirePlz turns your spreadsheet of roles, recruiters & companies into respectful, paced outreach with authentic merge fields.
                    </p>
                  </div>
                  
                  {/* Feature List with Icons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                    {[
                      { icon: Shield, title: 'Secure Gmail OAuth', desc: 'No passwords stored ever' },
                      { icon: Database, title: 'CSV Import', desc: 'Use any column as placeholder' },
                      { icon: Zap, title: 'Paced Delivery', desc: 'Smooth sending with live progress' },
                      { icon: Code, title: 'Smart Placeholders', desc: 'role_title, recruiter_name & more' },
                      { icon: Package, title: 'Resume Attachment', desc: 'Attach once, send everywhere' },
                      { icon: Rocket, title: 'Bulk Outreach', desc: 'Send hundreds in minutes' },
                    ].map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * idx }}
                        className="flex items-start gap-2.5 sm:gap-3 md:gap-4 p-2.5 sm:p-3 md:p-4 rounded-lg sm:rounded-xl bg-white/[0.02] border border-blue-500/10 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-300 group"
                      >
                        <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-md sm:rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <feature.icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-blue-400" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white text-xs sm:text-sm">{feature.title}</h4>
                          <p className="text-[10px] sm:text-xs text-gray-500">{feature.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* CTA */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-col sm:flex-row items-center sm:items-start gap-2.5 sm:gap-3 md:gap-4 pt-2 sm:pt-3 md:pt-4"
                  >
                    <motion.a
                      href="http://hireplz.live/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl sm:rounded-2xl text-white font-bold text-sm sm:text-base md:text-lg shadow-xl shadow-blue-500/20 flex items-center justify-center gap-2 sm:gap-3 group"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>Start Free</span>
                      <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </motion.a>
                    <motion.a
                      href="http://hireplz.live/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-white/5 border border-blue-500/30 rounded-xl sm:rounded-2xl text-blue-300 font-semibold text-sm sm:text-base hover:bg-blue-500/10 transition-all text-center"
                      whileHover={{ scale: 1.02 }}
                    >
                      How It Works
                    </motion.a>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center mt-10 sm:mt-12 md:mt-16"
          >
            <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base md:text-lg px-4">
              <Heart className="inline w-4 h-4 sm:w-5 sm:h-5 text-red-400 mr-1.5 sm:mr-2" />
              Built by Magpie Web • Powered by Community
            </p>
            <motion.button
              onClick={() => scrollToSection(communityRef)}
              className="px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 bg-white/10 backdrop-blur-sm border border-purple-400/50 rounded-full text-purple-300 font-semibold text-sm sm:text-base hover:bg-white/20 hover:border-purple-400 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Our Community
            </motion.button>
          </motion.div>
        </div>
      </Section>

      {/* About Section - Premium Corporate Design */}
      <Section ref={aboutRef} className="py-16 sm:py-20 md:py-28 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-blue-600/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 h-64 sm:h-80 bg-fuchsia-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-500">
              About Us
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
              A product studio born from passion, powered by innovation, and driven by community.
            </p>
          </motion.div>

          {/* Hero Story Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mb-12 sm:mb-16 md:mb-20"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-fuchsia-500/20 to-blue-500/20 rounded-2xl sm:rounded-3xl blur-xl" />
            <div className="relative bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-xl border border-purple-500/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 overflow-hidden">
              {/* Decorative Grid */}
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(rgba(168,85,247,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.3) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
              </div>
              
              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Left: Story */}
                <div>
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6"
                  >
                    <span className="text-purple-400">Big Dreams.</span> <span className="text-blue-400">Bright Ideas.</span>
                    <br />
                    <span className="text-gray-300">Local Roots. Global Reach.</span>
                  </motion.h3>
                  
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6"
                  >
                    Magpie Web was sparked in a vibrant hometown where ambition meets creativity. What began in a small room with a big dream — <span className="text-purple-400 font-semibold">helping local businesses shine online</span> — has now grown into a trusted digital partner for clients across the world.
                  </motion.p>
                  
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6"
                  >
                    We blend <span className="text-purple-400 font-semibold">human creativity</span> with <span className="text-blue-400 font-semibold">cutting-edge AI innovations</span> — delivering real results without the heavy price tag.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed"
                  >
                    We've earned the trust of both domestic brands and international names by staying true to what matters most: <span className="text-purple-400 font-semibold">honest work, powerful design,</span> and <span className="text-blue-400 font-semibold">solutions that just make sense.</span>
                  </motion.p>
                </div>
                
                {/* Right: Stats */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6"
                >
                  {[
                    { value: '2024', label: 'Established', icon: Rocket, color: 'purple' },
                    { value: '10+', label: 'Experts', icon: Users, color: 'blue' },
                    { value: 'Global', label: 'Reach', icon: Globe, color: 'fuchsia' },
                    { value: '100%', label: 'Consistent Growth', icon: TrendingUp, color: 'green' },
                  ].map((stat, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + idx * 0.1, type: "spring" }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="relative p-4 sm:p-5 md:p-6 bg-gradient-to-br from-gray-800/50 to-transparent rounded-xl sm:rounded-2xl border border-gray-700/50 hover:border-purple-500/40 transition-all duration-300 group"
                    >
                      <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 mb-2 sm:mb-3 group-hover:scale-110 transition-transform" />
                      <p className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-0.5 sm:mb-1">{stat.value}</p>
                      <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">{stat.label}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Bottom Quote */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mt-8 pt-8 border-t border-gray-700/50 text-center"
              >
                <p className="text-base sm:text-lg md:text-xl text-gray-300 italic">
                  "We believe <span className="text-purple-400 font-semibold">great ideas can come from anywhere</span> — and with the right support, they can go <span className="text-blue-400 font-semibold">everywhere.</span>"
                </p>
                <p className="text-sm sm:text-base text-gray-400 mt-2">Let's build something meaningful, something lasting — <span className="text-purple-400 font-semibold">together.</span></p>
              </motion.div>
            </div>
          </motion.div>

          {/* Mission & Vision Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-fuchsia-500 opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-all duration-500" />
              <div className="relative h-full bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 group-hover:border-purple-500/50 rounded-2xl p-5 sm:p-6 md:p-8 transition-all duration-500">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-500 to-fuchsia-500 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg"
                >
                  <Rocket className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </motion.div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-purple-300 transition-colors">
                  Our Mission
                </h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  To help businesses — big or small — grow smarter through meaningful digital solutions. By blending creativity with AI, we aim to make technology <span className="text-purple-400 font-semibold">simple, affordable, and impactful</span> for every brand that dares to dream big.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-all duration-500" />
              <div className="relative h-full bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 group-hover:border-blue-500/50 rounded-2xl p-5 sm:p-6 md:p-8 transition-all duration-500">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg"
                >
                  <Star className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </motion.div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-blue-300 transition-colors">
                  Our Vision
                </h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  To become the go-to digital partner for brands that dream big — turning everyday ideas into extraordinary success stories. From local markets to global platforms, we're here to make your business <span className="text-blue-400 font-semibold">shine everywhere it matters.</span>
                </p>
              </div>
            </motion.div>
          </div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 sm:mb-16 md:mb-20"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-white mb-6 sm:mb-8 md:mb-10">
              Our <span className="text-purple-400">Core</span> <span className="text-blue-400">Values</span>
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {[
                { icon: Lightbulb, title: 'Creativity with Purpose', desc: 'Every design, strategy, and solution is built to solve real problems and spark growth.', color: 'yellow' },
                { icon: Shield, title: 'Trust in Every Step', desc: 'We value honest relationships, clear communication, and long-term partnerships.', color: 'green' },
                { icon: Brain, title: 'Smart Innovation', desc: 'We use AI and technology to simplify your path to success — not complicate it.', color: 'purple' },
                { icon: Globe, title: 'Growth Without Borders', desc: 'We believe great ideas deserve great reach — no matter your size or starting point.', color: 'blue' },
              ].map((value, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-4 sm:p-5 md:p-6 bg-white/[0.03] border border-gray-700/50 hover:border-purple-500/30 rounded-xl sm:rounded-2xl transition-all duration-300 group text-center"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-purple-500/20 rounded-xl mx-auto mb-3 sm:mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <value.icon className="w-6 h-6 sm:w-7 sm:h-7 text-purple-400" />
                  </div>
                  <h4 className="font-bold text-white text-sm sm:text-base mb-1 sm:mb-2">{value.title}</h4>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* What Sets Us Apart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 sm:mb-16 md:mb-20"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-white mb-6 sm:mb-8 md:mb-10">
              What <span className="text-purple-400">Sets Us</span> <span className="text-blue-400">Apart</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
              {[
                { icon: Code, title: 'Solutions That Fit You', desc: "We don't believe in one-size-fits-all. Everything we build is tailored to your goals, your audience, and your budget." },
                { icon: MessageSquare, title: 'Always Within Reach', desc: 'We work closely with our clients, offering real-time support and simple communication — no technical jargon, just real help.' },
                { icon: LineChart, title: 'Results That Matter', desc: 'From your first website to full-scale digital growth, we focus on results you can see — better reach, better engagement, better business.' },
                { icon: Heart, title: 'Simple Language. Big Impact.', desc: 'We speak your language — literally and digitally. No complex tech talk, just clear solutions that work.' },
                { icon: Sparkles, title: 'AI That Works For You', desc: 'We use the power of AI to automate, enhance, and optimize your digital presence — saving time and cutting costs.' },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  whileHover={{ scale: 1.03 }}
                  className={`flex items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-gradient-to-br from-gray-800/30 to-transparent border border-gray-700/50 hover:border-purple-500/30 rounded-xl sm:rounded-2xl transition-all duration-300 group ${idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm sm:text-base mb-0.5 sm:mb-1">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-block relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur-lg opacity-40" />
              <div className="relative bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-xl border border-purple-500/30 rounded-2xl px-6 sm:px-8 md:px-12 py-6 sm:py-8 md:py-10">
                <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4 sm:mb-6">
                  Ready to build something <span className="text-purple-400 font-bold">meaningful</span> together?
                </p>
                <motion.button
                  onClick={() => scrollToSection(contactRef)}
                  className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-bold text-sm sm:text-base shadow-xl shadow-purple-500/30 hover:shadow-purple-500/50 transition-all"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Let's Talk
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
     
      
      {/* Community Section - NEW */}
      <Section ref={communityRef} className="py-24 bg-gradient-to-b from-black via-purple-900/10 to-black relative overflow-hidden">
        {/* Animated particles effect */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full backdrop-blur-sm mb-6"
            >
              <Users className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-semibold text-purple-300">Community-Driven Innovation</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-500">
              Build The Future With Us
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Your voice matters. Join our community to shape product features, vote on new ideas, and be part of something bigger.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {[
              {
                icon: Vote,
                title: 'Vote on Features',
                description: 'Help us prioritize what to build next. Your vote shapes our roadmap.',
                color: 'purple'
              },
              {
                icon: Lightbulb,
                title: 'Suggest Ideas',
                description: 'Got a brilliant idea? Share it with the community and watch it come to life.',
                color: 'blue'
              },
              {
                icon: Star,
                title: 'Early Access',
                description: 'Be the first to try new features and products before anyone else.',
                color: 'fuchsia'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: 0.1 * idx, duration: 0.8, type: "spring", bounce: 0.4 }}
                whileHover={{ scale: 1.08, y: -10, rotateX: 5, rotateY: 5 }}
                className="group card-3d relative overflow-hidden rounded-2xl"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br from-${item.color}-500/30 to-transparent rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-700 opacity-50 group-hover:opacity-100 pointer-events-none z-0`}></div>
                
                <div className="relative z-10 bg-gray-800/60 backdrop-blur-xl border border-gray-700/50 group-hover:border-${item.color}-500/70 rounded-2xl p-8 transition-all duration-500 shadow-2xl group-hover:shadow-${item.color}-500/50">
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 rounded-2xl flex items-center justify-center mb-6 shadow-2xl shadow-${item.color}-500/50 group-hover:shadow-${item.color}-500/80 transition-all duration-500`}
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-${item.color}-300 transition-colors">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Community Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
            className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 backdrop-blur-2xl border-2 border-purple-500/30 rounded-3xl p-8 md:p-12 shadow-2xl shadow-purple-500/20 card-3d"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { label: 'Community Members', value: '100+', icon: Users },
                { label: 'Active Contributors', value: '50+', icon: Star },
                { label: 'Features Voted', value: '150+', icon: TrendingUp },
                { label: 'Ideas Submitted', value: '80+', icon: Lightbulb }
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
                  whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ delay: 0.1 * idx, duration: 0.6, type: 'spring', bounce: 0.5 }}
                  whileHover={{ scale: 1.15, y: -5 }}
                  className="relative group"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <stat.icon className="w-10 h-10 mx-auto mb-3 text-purple-400 group-hover:text-purple-300 transition-colors drop-shadow-lg" />
                  </motion.div>
                  <motion.div 
                    className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-400 mb-2"
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    style={{
                      backgroundSize: '200% 200%',
                    }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-gray-300 text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Join CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <motion.button
              onClick={() => scrollToSection(contactRef)}
              className="group relative px-12 py-5 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-blue-600 rounded-full text-white text-lg font-bold overflow-hidden"
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-fuchsia-600"
                initial={{ x: '100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10 flex items-center gap-2">
                Join the Community
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </span>
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                style={{
                  boxShadow: '0 0 40px rgba(168, 85, 247, 0.6), 0 0 80px rgba(59, 130, 246, 0.4)'
                }}
                transition={{ duration: 0.4 }}
              />
            </motion.button>
          </motion.div>
        </div>
      </Section>
      {/* Services Section */}
      <Section ref={servicesRef} className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full backdrop-blur-sm mb-6"
            >
              <Rocket className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-semibold text-purple-300">Custom Development Services</span>
            </motion.div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
              Need Something Unique? We Build That Too
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Beyond our SaaS products, we offer full-service custom development informed by real product experience.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: Brain,
                title: 'AI-Powered Solutions',
                items: ['Smart Websites', 'Content Generation', 'AI-driven Design'],
              },
              {
                icon: Code,
                title: 'Software Development',
                items: ['Custom Development', 'AI Integration', 'Cloud Solutions'],
              },
              {
                icon: Search,
                title: 'SEO Optimization',
                items: ['Keyword Analysis', 'Content Strategy', 'Performance Tracking'],
              },
              {
                icon: Cloud,
                title: 'Cloud Solutions',
                items: ['Migration Services', 'Cloud Security', 'Performance Optimization'],
              },
              {
                icon: Lock,
                title: 'IT Infrastructure',
                items: ['Cloud Setup', 'Security Implementation', '24/7 Monitoring'],
              },
              {
                icon: MessageSquare,
                title: 'IT Consulting',
                items: ['Strategy Planning', 'Technology Assessment', 'Implementation Support'],
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="p-6 bg-gray-900 rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
              >
                <service.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-white">{service.title}</h3>
                <ul className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-400 flex items-center">
                      <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Expertise Section */}
      <Section ref={expertiseRef} className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            Our Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: Brain, text: 'AI & Machine Learning' },
              { icon: Database, text: 'Big Data Analytics' },
              { icon: Lock, text: 'Cybersecurity' },
              { icon: Code, text: 'Custom Development' },
              { icon: Cloud, text: 'Cloud Solutions' },
              { icon: LineChart, text: 'Business Intelligence' },
            ].map((expertise, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="p-6 bg-black rounded-xl text-center backdrop-blur-lg relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <expertise.icon className="w-12 md:w-16 h-12 md:h-16 mx-auto mb-4 text-purple-400" />
                <p className="text-lg md:text-xl font-semibold text-white relative z-10">{expertise.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section ref={contactRef} className="py-20 bg-black" data-section="contact">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            Schedule a Consultation
          </h2>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <FAQ />

      <Footer />
    </div>
  );
}

export default App;