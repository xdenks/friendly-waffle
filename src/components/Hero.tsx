import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDown } from 'lucide-react'; // Removed Shield import

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center px-4">
      <div className="hexagon-grid"></div>
      
      <motion.div 
        className="text-center z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Removed the Shield div */}
        
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-3 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Denis <span className="text-[var(--primary)]">V.</span>
        </motion.h1>
        
        <motion.div
          className="text-xl md:text-2xl text-[var(--text-secondary)] mb-8 h-12 font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <TypeAnimation
            sequence={[
              'Cloud Engineer',
              2000,
              'DevOps Engineer',
              2000,
              'Security Engineer',
              2000,
              'Full-Stack Developer',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-[var(--primary)]"
          />
        </motion.div>
        
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <span className="px-4 py-2 bg-black/30 border border-[var(--primary)]/30 rounded-md text-sm">AWS</span>
          <span className="px-4 py-2 bg-black/30 border border-[var(--primary)]/30 rounded-md text-sm">Kubernetes</span>
          <span className="px-4 py-2 bg-black/30 border border-[var(--primary)]/30 rounded-md text-sm">Red Hat</span>
          <span className="px-4 py-2 bg-black/30 border border-[var(--primary)]/30 rounded-md text-sm">Cybersecurity</span>
          <span className="px-4 py-2 bg-black/30 border border-[var(--primary)]/30 rounded-md text-sm">DevOps</span>
        </motion.div>
        
        <motion.button
          className="flex items-center justify-center mx-auto text-[var(--primary)] border border-[var(--primary)] rounded-full w-10 h-10 mt-8 animate-bounce"
          onClick={scrollToAbout}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          whileHover={{ scale: 1.1 }}
        >
          <ArrowDown size={20} />
        </motion.button>
      </motion.div>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-[var(--text-secondary)] opacity-50">
        <div className="terminal-prompt font-mono">
          Move your cursor to interact with the background
        </div>
      </div>
    </section>
  );
};

export default Hero;