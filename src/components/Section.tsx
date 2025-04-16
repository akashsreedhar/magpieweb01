import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';

interface SectionProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
}

const Section = forwardRef<HTMLDivElement, SectionProps>(({ children, className, ...props }, ref) => {
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  );
});

Section.displayName = 'Section';

export default Section;