import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail, Instagram,Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 py-12 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
              Magpie Web
            </h3>
            <p className="text-gray-400">
              Transforming businesses through innovative AI solutions and cutting-edge technology.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-purple-400 transition-colors">Services</a></li>
              <li><a href="#expertise" className="text-gray-400 hover:text-purple-400 transition-colors">Expertise</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors">Contact</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">AI Solutions</li>
              <li className="text-gray-400">Cloud Services</li>
              <li className="text-gray-400">Custom Development</li>
              <li className="text-gray-400">IT Consulting</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-white font-semibold mb-4">Connect With Us</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Mail className="w-6 h-6 text-gray-400" />
                <a href="mailto:info@magpieweb.com" className="text-gray-400 hover:text-purple-400 transition-colors">
                  info@magpieweb.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Instagram className="w-6 h-6 text-gray-400" />
                <a href="https://www.instagram.com/magpie.web?igsh=eWVwaHJ0NXZyYjVn" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Instagram
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Linkedin className="w-6 h-6 text-gray-400" />
                <a href="https://www.linkedin.com/company/magpie-web" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                  LinkedIn
                </a>
              </div>
              <div className="flex items-center space-x-2">
    <Phone className="w-6 h-6 text-gray-400" />
    <a href="tel:+917306963417" className="text-gray-400 hover:text-purple-400 transition-colors">
      +91 73069 63417
    </a>
  </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-gray-800 pt-8 mt-8 text-center"
        >
          <p className="text-gray-400">
            © {currentYear} Magpie Web. All rights reserved.
          </p>
        </motion.div>

        {/* Futuristic Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;