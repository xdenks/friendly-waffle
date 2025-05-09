import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Cloud, Shield, Database, Server } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-6 section-title inline-block text-[var(--primary)]">About Me</h2>
            <div className="prose prose-invert mb-6">
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                Dynamic and self-driven Cloud, DevOps, and Security Engineer with deep expertise in AWS, Kubernetes, 
                Red Hat, CentOS, and virtualization.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                Skilled in solo development of end-to-end AI systems using GPT via API, Mistral, GPT-4o, and 
                LLaMA 200B, optimized with batching and caching on AWS EC2.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Well-documented in malware analysis, threat actor tactics, and cybersecurity threats, 
                including XSS exploits, WannaCry/EternalBlue, and SCADA vulnerabilities.
              </p>
            </div>
            
            <div className="flex gap-4 mt-6">
              <motion.button 
                className="px-6 py-3 bg-[var(--primary)]/10 text-[var(--primary)] rounded-md border border-[var(--primary)]/30 hover:bg-[var(--primary)]/20 transition-colors duration-300 flex items-center font-mono"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Download CV</span>
              </motion.button>
              <motion.button 
                className="px-6 py-3 bg-transparent text-white rounded-md border border-white/30 hover:bg-white/5 transition-colors duration-300 flex items-center font-mono"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Contact Me</span>
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
            <div className="terminal-container">
              <div className="terminal-header">
                <div className="terminal-button terminal-close"></div>
                <div className="terminal-button terminal-minimize"></div>
                <div className="terminal-button terminal-maximize"></div>
                <div className="terminal-title">cloud-expertise.sh</div>
              </div>
              <div className="terminal-content">
                <p className="terminal-prompt">AWS Lambda, EC2, S3</p>
                <p className="terminal-prompt">Kubernetes Orchestration</p>
                <p className="terminal-prompt">Terraform Infrastructure</p>
                <p className="terminal-prompt">CI/CD Pipeline Automation</p>
                <p className="terminal-prompt">MongoDB, Redis, DynamoDB</p>
                <p className="terminal-prompt">_<span className="blink">|</span></p>
              </div>
            </div>
            
            <div className="terminal-container">
              <div className="terminal-header">
                <div className="terminal-button terminal-close"></div>
                <div className="terminal-button terminal-minimize"></div>
                <div className="terminal-button terminal-maximize"></div>
                <div className="terminal-title">security-tools.sh</div>
              </div>
              <div className="terminal-content">
                <p className="terminal-prompt">Malware Analysis</p>
                <p className="terminal-prompt">Threat Intelligence</p>
                <p className="terminal-prompt">XSS Vulnerability Research</p>
                <p className="terminal-prompt">EternalBlue Studies</p>
                <p className="terminal-prompt">SCADA Security</p>
                <p className="terminal-prompt">_<span className="blink">|</span></p>
              </div>
            </div>
            
            <div className="terminal-container">
              <div className="terminal-header">
                <div className="terminal-button terminal-close"></div>
                <div className="terminal-button terminal-minimize"></div>
                <div className="terminal-button terminal-maximize"></div>
                <div className="terminal-title">dev-stack.sh</div>
              </div>
              <div className="terminal-content">
                <p className="terminal-prompt">Next.js, React, TypeScript</p>
                <p className="terminal-prompt">TailwindCSS, Python</p>
                <p className="terminal-prompt">JWT Authentication</p>
                <p className="terminal-prompt">Load Testing (K6/JMeter)</p>
                <p className="terminal-prompt">_<span className="blink">|</span></p>
              </div>
            </div>
            
            <div className="terminal-container">
              <div className="terminal-header">
                <div className="terminal-button terminal-close"></div>
                <div className="terminal-button terminal-minimize"></div>
                <div className="terminal-button terminal-maximize"></div>
                <div className="terminal-title">ai-optimization.sh</div>
              </div>
              <div className="terminal-content">
                <p className="terminal-prompt">GPT-4o Integration</p>
                <p className="terminal-prompt">Mistral 7x8B Fine-tuning</p>
                <p className="terminal-prompt">LLaMA 200B Translation</p>
                <p className="terminal-prompt">Batching/Caching</p>
                <p className="terminal-prompt">AWS EC2 Optimization</p>
                <p className="terminal-prompt">_<span className="blink">|</span></p>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <motion.div 
            variants={itemVariants}
            className="bg-black/20 backdrop-blur-sm border border-[var(--primary)]/20 p-6 rounded-lg"
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 255, 140, 0.1)" }}
          >
            <Cloud className="w-10 h-10 text-[var(--primary)] mb-4" />
            <h3 className="text-xl font-bold mb-2">Cloud Infrastructure</h3>
            <p className="text-[var(--text-secondary)] text-sm">Designing and implementing robust cloud solutions using AWS, with expertise in serverless architectures.</p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="bg-black/20 backdrop-blur-sm border border-[var(--primary)]/20 p-6 rounded-lg"
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 255, 140, 0.1)" }}
          >
            <Shield className="w-10 h-10 text-[var(--primary)] mb-4" />
            <h3 className="text-xl font-bold mb-2">Cybersecurity</h3>
            <p className="text-[var(--text-secondary)] text-sm">Comprehensive knowledge of threat actors, malware analysis, and implementing robust security measures.</p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="bg-black/20 backdrop-blur-sm border border-[var(--primary)]/20 p-6 rounded-lg"
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 255, 140, 0.1)" }}
          >
            <Database className="w-10 h-10 text-[var(--primary)] mb-4" />
            <h3 className="text-xl font-bold mb-2">Data Engineering</h3>
            <p className="text-[var(--text-secondary)] text-sm">Creating large-scale datasets and optimizing AI models for intelligent, unique responses.</p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="bg-black/20 backdrop-blur-sm border border-[var(--primary)]/20 p-6 rounded-lg"
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 255, 140, 0.1)" }}
          >
            <Server className="w-10 h-10 text-[var(--primary)] mb-4" />
            <h3 className="text-xl font-bold mb-2">DevOps</h3>
            <p className="text-[var(--text-secondary)] text-sm">Streamlining development with CI/CD pipelines, Kubernetes orchestration, and infrastructure automation.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;