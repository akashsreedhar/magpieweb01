import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Background3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const particles: HTMLDivElement[] = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.setProperty('--float-x', `${(Math.random() - 0.5) * 400}px`);
      particle.style.setProperty('--float-y', `${-Math.random() * 600 - 200}px`);
      particle.style.setProperty('--float-z', `${(Math.random() - 0.5) * 200}px`);
      particle.style.animationDelay = `${Math.random() * 15}s`;
      particle.style.animationDuration = `${Math.random() * 10 + 15}s`;
      
      containerRef.current.appendChild(particle);
      particles.push(particle);
    }

    return () => {
      particles.forEach(p => p.remove());
    };
  }, []);

  return (
    <>
      {/* Animated 3D Gradient Background */}
      <div className="fixed inset-0 -z-10 animated-bg-3d" />
      
      {/* Floating 3D Particles */}
      <div ref={containerRef} className="fixed inset-0 -z-10 particle-container" />
      
      {/* Dynamic Mesh Gradient Orbs */}
      <motion.div
        className="fixed top-0 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ transform: 'translate3d(0, 0, 0)' }}
      />
      
      <motion.div
        className="fixed bottom-0 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ transform: 'translate3d(0, 0, 0)' }}
      />
      
      <motion.div
        className="fixed top-1/2 left-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{ transform: 'translate3d(-50%, -50%, 0)' }}
      />
    </>
  );
};

export default Background3D;