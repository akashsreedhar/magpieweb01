import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Lightbulb, Users, Globe, Brain, Database, Lock, Cloud, Search, Code, LineChart, MessageSquare } from 'lucide-react';
import Navbar from './components/Navbar';
import Section from './components/Section';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

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
            {/* Decorative Magpie SVG */}
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
            </motion.svg>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 text-center md:text-left relative"
            >
              Transform Your Business with AI-Powered Solutions
              <motion.span
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
              />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl mb-8 text-gray-300 text-center md:text-left"
            >
              Harness the power of artificial intelligence to drive innovation, efficiency, and growth in your business.
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
      <Section ref={aboutRef} className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            About Magpie
          </h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <p className="text-lg mb-6 text-gray-300">
                Founded with a vision to revolutionize digital solutions, Magpie Web combines artificial intelligence with human expertise to deliver exceptional results.
              </p>
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {[
                  { label: 'Established', value: '2024' },
                  { label: 'Team', value: '10+ Experts' },
                  { label: 'Reach', value: 'Global' },
                  { label: 'Growth', value: 'Consistent' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                  >
                    <p className="text-sm text-gray-400">{stat.label}</p>
                    <p className="text-xl font-semibold text-purple-400">{stat.value}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-purple-400">Our Mission</h3>
              <p className="mb-6 text-gray-300">
                To empower businesses with cutting-edge AI solutions that drive growth and innovation.
              </p>
              <h3 className="text-2xl font-semibold mb-4 text-purple-400">Our Vision</h3>
              <p className="mb-6 text-gray-300">
                To be the global leader in AI-powered digital transformation solutions.
              </p>
              <h3 className="text-2xl font-semibold mb-4 text-purple-400">Core Values</h3>
              <p className="text-gray-300">Innovation, Integrity, and Excellence.</p>
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