import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lightbulb, Users, Globe, Brain, Database, Lock, Cloud, Search, Code, LineChart, MessageSquare } from 'lucide-react';
import Navbar from './components/Navbar';
import Section from './components/Section';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import SEO from './components/SEO';
import FAQ from './components/FAQ';
import { initializeAnalytics } from './utils/analytics';
// import { injectStructuredData } from './utils/seo';
// import { measureWebVitals, preloadCriticalResources } from './utils/performance';

function App() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const expertiseRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

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
    <div className="bg-black text-white min-h-screen">
      <SEO />
      <Navbar
        onNavigate={{
          about: () => scrollToSection(aboutRef),
          services: () => scrollToSection(servicesRef),
          expertise: () => scrollToSection(expertiseRef),
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

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 text-center md:text-left relative"
            >
              Boost Your Business with Affordable AI-Powered Solutions
              {/* <motion.span
                className="absolute -left-4 -top-4 w-2 h-2 bg-purple-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              /> */}
            </motion.h1>

            <motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.4 }}
  className="text-lg md:text-xl mb-8 text-gray-300 text-center md:text-left font-medium"
>
  <span className="text-purple-400 font-semibold">Born in Kerala, built for the world</span> — Magpie Web crafts stunning websites and smart digital solutions that help your business grow fast, stand out online, and reach more people — 
  <br/><span className="text-blue-400 font-semibold"> All without breaking the bank.</span>
</motion.p>

            <div className="text-center md:text-left">
              <motion.button
                onClick={() => scrollToSection(contactRef)}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Schedule a Consultation</span>
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
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

      {/* About Section */}
      <Section ref={aboutRef} className="py-16 bg-gradient-to-b from-gray-900 to-black">
  <div className="container mx-auto sm:px-4 md:px-6">
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
      About Magpie
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left Column */}
      <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 p-6 md:p-8 rounded-xl shadow-xl flex flex-col justify-between">
        <div>
          <p className="text-base md:text-lg leading-relaxed text-gray-300 text-justify">
            <span className="text-purple-400 font-semibold">Big Dreams. Bright Ideas. Local Roots. Global Reach.</span>
            <br /><br />
            Magpie Web was sparked in a vibrant hometown where ambition meets creativity. What began in a small room with a big dream — <span className="text-blue-400 font-semibold">helping local businesses shine online</span> — has now grown into a trusted digital partner for clients across the world.
            <br /><br />
            With every website we craft and every solution we build, we blend <span className="text-purple-400 font-semibold">human creativity</span> with the <span className="text-blue-400 font-semibold">latest AI innovations</span> — delivering real results without the heavy price tag.
            <br /><br />
            We’ve earned the trust of both domestic brands and international names by staying true to what matters most: <span className="text-purple-400 font-semibold">honest work, powerful design,</span> and <span className="text-blue-400 font-semibold">solutions that just make sense.</span>
            <br /><br />
            <span className="text-purple-400 font-semibold">We believe great ideas can come from anywhere</span> — and with the right support, they can go everywhere.
            <br /><br />
            Let’s build something meaningful, something lasting — <span className="text-blue-400 font-semibold">together.</span>
          </p>
          <div className="grid grid-cols-2 gap-4 mt-6">
            {[
              { label: 'Established', value: '2024' },
              { label: 'Team', value: '10+ Experts' },
              { label: 'Reach', value: 'Global' },
              { label: 'Growth', value: 'Consistent' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300"
              >
                <p className="text-sm text-gray-400">{stat.label}</p>
                <p className="text-lg md:text-xl font-semibold text-purple-400">{stat.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Flowing, Interconnected Lines Animation */}
        <motion.svg
          className="w-full h-64 mt-8 text-purple-400 mx-auto"
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
        </motion.svg>
      </div>

      {/* Right Column */}
      <div className="space-y-6">
        <div className="bg-gray-800 p-4 md:p-6 rounded-xl shadow-lg hover:shadow-purple-500/20 transition-shadow duration-300">
          <h3 className="text-xl md:text-2xl font-semibold mb-4 text-purple-400">Our Mission</h3>
          <p className="text-sm md:text-base text-gray-300">
            "To help businesses — big or small — grow smarter through meaningful digital solutions. By blending creativity with AI, we aim to make technology simple, affordable, and impactful for every brand that dares to dream big."
          </p>
        </div>
        <div className="bg-gray-800 p-4 md:p-6 rounded-xl shadow-lg hover:shadow-purple-500/20 transition-shadow duration-300">
          <h3 className="text-xl md:text-2xl font-semibold mb-4 text-purple-400">Our Vision</h3>
          <p className="text-sm md:text-base text-gray-300">
            "To become the go-to digital partner for brands that dream big — turning everyday ideas into extraordinary success stories. From local markets to global platforms, we’re here to make your business shine everywhere it matters."
          </p>
        </div>
        <div className="bg-gray-800 p-4 md:p-6 rounded-xl shadow-lg hover:shadow-purple-500/20 transition-shadow duration-300">
          <h3 className="text-xl md:text-2xl font-semibold mb-4 text-purple-400">Core Values</h3>
          <ul className="space-y-2 text-sm md:text-base text-gray-300 list-disc list-inside">
            <li>
              <span className="text-blue-400 font-semibold">Creativity with Purpose</span> – Every design, strategy, and solution is built to solve real problems and spark growth.
            </li>
            <li>
              <span className="text-blue-400 font-semibold">Trust in Every Step</span> – We value honest relationships, clear communication, and long-term partnerships.
            </li>
            <li>
              <span className="text-blue-400 font-semibold">Smart Innovation</span> – We use AI and technology to simplify your path to success — not complicate it.
            </li>
            <li>
              <span className="text-blue-400 font-semibold">Growth Without Borders</span> – We believe great ideas deserve great reach — no matter your size or starting point.
            </li>
          </ul>
        </div>
        <div className="bg-gray-800 p-4 md:p-6 rounded-xl shadow-lg hover:shadow-purple-500/20 transition-shadow duration-300">
          <h3 className="text-xl md:text-2xl font-semibold mb-4 text-purple-400">What Sets Us Apart</h3>
          <ul className="space-y-2 text-sm md:text-base text-gray-300 list-disc list-inside">
            <li>
              <span className="text-blue-400 font-semibold">Solutions That Fit You</span> – We don’t believe in one-size-fits-all. Everything we build is tailored to your goals, your audience, and your budget.
            </li>
            <li>
              <span className="text-blue-400 font-semibold">Always Within Reach</span> – We work closely with our clients, offering real-time support and simple communication — no technical jargon, just real help when you need it.
            </li>
            <li>
              <span className="text-blue-400 font-semibold">Results That Matter</span> – From your first website to full-scale digital growth, we focus on results you can see — better reach, better engagement, better business.
            </li>
            <li>
              <span className="text-blue-400 font-semibold">Simple Language. Big Impact.</span> – We speak your language — literally and digitally. No complex tech talk, just clear solutions that work.
            </li>
            <li>
              <span className="text-blue-400 font-semibold">AI That Works For You</span> – We use the power of AI to automate, enhance, and optimize your digital presence — saving time and cutting costs.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</Section>
     

      {/* Services Section */}
      <Section ref={servicesRef} className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            Our Services
          </h2>
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