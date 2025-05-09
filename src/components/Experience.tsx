import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="experience" className="py-20 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center section-title inline-block w-full text-[var(--primary)]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Professional Experience
        </motion.h2>
        
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--primary)]/80 via-[var(--secondary)]/80 to-[var(--primary)]/80 hidden md:block"></div>
          
          {/* Experience 1 */}
          <motion.div 
            variants={itemVariants}
            className="mb-16 relative flex flex-col md:flex-row"
          >
            <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0">
              <div className="hidden md:block absolute right-0 top-0 w-12 h-12 rounded-full bg-black border-2 border-[var(--primary)] transform translate-x-1/2 border-glow flex items-center justify-center">
                <span className="text-[var(--primary)] text-lg font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-1">Cloud & DevOps Engineer</h3>
              <p className="text-[var(--primary)] mb-2">Independent Work | 2023 - Present</p>
              <div className="terminal-container text-left md:text-right">
                <div className="terminal-header">
                  <div className="terminal-button terminal-close"></div>
                  <div className="terminal-button terminal-minimize"></div>
                  <div className="terminal-button terminal-maximize"></div>
                  <div className="terminal-title">experience.json</div>
                </div>
                <div className="terminal-content text-xs md:text-sm">
                  <p>$ cat accomplishments.txt</p>
                  <p>- Cloud infrastructure with AWS</p>
                  <p>- Kubernetes, Red Hat, CentOS</p>
                  <p>- CI/CD with GitHub Actions</p>
                  <p>- Terraform IaC implementation</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <div className="md:hidden w-12 h-12 rounded-full bg-black border-2 border-[var(--primary)] flex items-center justify-center mb-4 border-glow">
                <span className="text-[var(--primary)] text-lg font-bold">1</span>
              </div>
              <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-2 pl-4">
                <li>Independently developed and managed cloud infrastructure using AWS (Lambda, S3, EC2, CloudFront), Kubernetes, and Red Hat/CentOS, optimizing CI/CD pipelines with GitHub Actions and Terraform.</li>
                <li>Created large-scale JSON datasets (2-3 GB) with Python for AI optimization, tuning Mistral (7x8B, 22B-small) and integrating GPT-4o and LLaMA 200B for multi-language chatbots.</li>
                <li>Implemented a system flow using GPT-4o API for contextual prompts, Mistral for initial responses, GPT-4o for verification, and LLaMA for 24-language translation, with batching/caching on AWS EC2.</li>
              </ul>
            </div>
          </motion.div>
          
          {/* Experience 2 */}
          <motion.div 
            variants={itemVariants}
            className="relative flex flex-col md:flex-row"
          >
            <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0 order-1 md:order-1">
              <div className="hidden md:block absolute right-0 top-0 w-12 h-12 rounded-full bg-black border-2 border-[var(--secondary)] transform translate-x-1/2 border-glow-blue flex items-center justify-center">
                <span className="text-[var(--secondary)] text-lg font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-1">Junior IT Engineer</h3>
              <p className="text-[var(--secondary)] mb-2">Magna | September 2022 - April 2023</p>
              <div className="terminal-container text-left md:text-right">
                <div className="terminal-header">
                  <div className="terminal-button terminal-close"></div>
                  <div className="terminal-button terminal-minimize"></div>
                  <div className="terminal-button terminal-maximize"></div>
                  <div className="terminal-title">role.json</div>
                </div>
                <div className="terminal-content text-xs md:text-sm">
                  <p>$ cat responsibilities.txt</p>
                  <p>- Database management</p>
                  <p>- Advanced VBA applications</p>
                  <p>- Automated reporting</p>
                  <p>- Complex Excel formulas</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12 order-2 md:order-2">
              <div className="md:hidden w-12 h-12 rounded-full bg-black border-2 border-[var(--secondary)] flex items-center justify-center mb-4 border-glow-blue">
                <span className="text-[var(--secondary)] text-lg font-bold">2</span>
              </div>
              <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-2 pl-4">
                <li>Focused on working with databases and developing advanced VBA applications for data management.</li>
                <li>Created automated reporting programs from Excel files, managing complex sheets with up to 64 formulas per cell—a challenging experience that honed my Excel expertise.</li>
                <li>Found the internship to be a disappointing experience overall, lacking the technical depth and opportunities I sought.</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="mt-20 bg-black/30 p-8 rounded-lg border border-[var(--primary)]/30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-xl font-bold mb-4">Cyber Security Research</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold mb-2 text-[var(--primary)]">Malware Analysis</h4>
              <p className="text-[var(--text-secondary)] mb-4">
                Conducted in-depth research on various malware, including WannaCry ransomware, VHD ransomware, and APT41's UNAPIMON tools.
              </p>
              
              <h4 className="text-lg font-semibold mb-2 text-[var(--primary)]">Threat Actor Strategies</h4>
              <p className="text-[var(--text-secondary)]">
                Studied tactics employed by APT41, Lazarus Group's MATA framework, and various cybercriminal organizations.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-2 text-[var(--primary)]">Vulnerability Research</h4>
              <p className="text-[var(--text-secondary)] mb-4">
                Researched XSS vulnerabilities in PHP applications, SMBv1 exploits via EternalBlue, and SCADA vulnerabilities in industrial systems.
              </p>
              
              <h4 className="text-lg font-semibold mb-2 text-[var(--primary)]">Incident Analysis</h4>
              <p className="text-[var(--text-secondary)]">
                Hypothesized about potential causes for major security incidents, including analyzing the Spain 2025 blackout as a possible 0-day hardware exploit.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;