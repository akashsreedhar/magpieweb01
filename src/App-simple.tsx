import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lightbulb, Users, Globe, Brain, Database, Lock, Cloud, Search, Code, LineChart, MessageSquare } from 'lucide-react';
import Navbar from './components/Navbar';
import Section from './components/Section';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import SEO from './components/SEO';

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
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto relative"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 text-center md:text-left relative"
            >
              Boost Your Business with Affordable AI-Powered Solutions
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

      {/* Contact Section */}
      <Section ref={contactRef} className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            Schedule a Consultation
          </h2>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}

export default App;
