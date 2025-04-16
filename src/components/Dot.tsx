import React from 'react';
import { motion } from 'framer-motion';

const Dot: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <motion.div
      className={`absolute w-3 h-3 bg-purple-400 rounded-full ${className}`}
      animate={{
        scale: [1, 1.5, 1],
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

export default Dot;