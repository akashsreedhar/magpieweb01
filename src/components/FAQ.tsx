import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First FAQ open by default

  const faqs = [
    {
      question: "What makes Magpie Web different from other web development companies?",
      answer: "We combine human creativity with AI technology to deliver affordable, high-quality solutions. Born in Kerala with global reach, we focus on real results without the heavy price tag. Our unique approach blends local expertise with international standards, ensuring every project receives personalized attention while leveraging cutting-edge technology."
    },
    {
      question: "Do you work with international clients?",
      answer: "Yes! While we're based in Kerala, India, we serve clients globally across different time zones. We provide clear communication in English and have successfully delivered projects for clients in the US, Europe, Australia, and the Middle East. Our team is experienced in working with diverse cultures and business requirements."
    },
    {
      question: "What AI technologies do you use?",
      answer: "We leverage cutting-edge AI for content generation, design optimization, automated testing, and performance enhancement. Our toolkit includes GPT-based content creation, AI-powered design suggestions, automated code optimization, and intelligent user experience analysis to deliver smarter solutions faster."
    },
    {
      question: "How long does it take to build a website?",
      answer: "Project timelines vary based on complexity, but most standard websites are completed within 1-2 weeks, while complex applications may take 2-3 weeks. We provide clear timelines during our consultation phase and keep you updated throughout the development process with regular progress reports."
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer: "Absolutely! We offer comprehensive support packages including regular maintenance, security updates, performance optimization, content updates, and technical support. Our support plans are flexible and can be customized based on your specific needs and budget requirements."
    },
    {
      question: "What's included in your SEO services?",
      answer: "Our comprehensive SEO services include in-depth keyword research, on-page optimization, technical SEO audits, content strategy development, performance tracking with detailed analytics, local SEO optimization, and ongoing optimization based on search engine algorithm updates."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Generate FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  React.useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(faqSchema);
    script.id = 'faq-schema';
    document.head.appendChild(script);

    return () => {
      // Safely remove the script element
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [faqSchema]);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Get answers to the most common questions about our services, process, and expertise. 
            Can't find what you're looking for? Feel free to reach out to us directly.
          </motion.p>
        </div>
        
        {/* FAQ Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-black/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-purple-500/10 transition-all duration-300 hover:border-purple-500/30 h-full">
                  {/* Question Header */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left flex items-start justify-between gap-4 group-hover:text-purple-400 transition-colors duration-300"
                  >
                    <h3 className="text-lg md:text-xl font-semibold text-white leading-tight flex-1">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center group-hover:bg-purple-500/30 transition-all duration-300">
                        {openIndex === index ? (
                          <Minus className="w-4 h-4 text-purple-400" />
                        ) : (
                          <Plus className="w-4 h-4 text-purple-400" />
                        )}
                      </div>
                    </div>
                  </button>
                  
                  {/* Answer Content */}
                  <motion.div
                    initial={false}
                    animate={{ 
                      height: openIndex === index ? "auto" : 0,
                      opacity: openIndex === index ? 1 : 0 
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 md:pt-6">
                      <div className="w-full h-px bg-gradient-to-r from-purple-500/30 to-blue-500/30 mb-4"></div>
                      <p className="text-gray-300 leading-relaxed text-justify text-base md:text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 md:mt-16"
        >
          <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-2xl p-6 md:p-8 border border-purple-500/20">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
              Still have questions?
            </h3>
            <p className="text-gray-300 mb-6 text-base md:text-lg">
              We're here to help! Get in touch with our team for personalized answers.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 text-sm md:text-base"
              onClick={() => {
                const contactSection = document.querySelector('[data-section="contact"]');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Contact Our Team
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
