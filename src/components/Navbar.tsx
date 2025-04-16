import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate: {
    about: () => void;
    services: () => void;
    expertise: () => void;
    contact: () => void;
  };
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuVariants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  // Animation path variants for the flowing lines
  const magpiePathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 2, ease: "easeInOut" },
        opacity: { duration: 0.5 },
      },
    },
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md py-2' : 'bg-transparent py-3'
      }`} // Reduced padding (py-2 and py-3)
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2"> {/* Reduced spacing */}
            {/* Logo Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500"
            >
              Magpie Web
            </motion.div>

            {/* Flowing, Interconnected Lines Animation */}
            <motion.svg
              className="w-16 h-16 text-purple-400 -ml-4" // Increased size to w-24 h-24 and added -ml-4 for closer positioning
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

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {[
              { text: 'About', onClick: onNavigate.about },
              { text: 'Services', onClick: onNavigate.services },
              { text: 'Expertise', onClick: onNavigate.expertise },
              { text: 'Contact', onClick: onNavigate.contact },
            ].map((item, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                onClick={item.onClick}
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                {item.text}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial="closed"
          animate={isMobileMenuOpen ? "open" : "closed"}
          variants={menuVariants}
          className="md:hidden overflow-hidden"
        >
          <div className="flex flex-col space-y-4 pt-4">
            {[
              { text: 'About', onClick: () => { onNavigate.about(); setIsMobileMenuOpen(false); } },
              { text: 'Services', onClick: () => { onNavigate.services(); setIsMobileMenuOpen(false); } },
              { text: 'Expertise', onClick: () => { onNavigate.expertise(); setIsMobileMenuOpen(false); } },
              { text: 'Contact', onClick: () => { onNavigate.contact(); setIsMobileMenuOpen(false); } },
            ].map((item, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={item.onClick}
                className="text-gray-300 hover:text-white transition-colors duration-300 text-left py-2"
              >
                {item.text}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;