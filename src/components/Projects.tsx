import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Cpu, Cloud, Shield, Database } from 'lucide-react';

const projects = [
  {
    title: 'AI Assistant Integration',
    description: 'Developed a sophisticated AI system utilizing GPT-4o, Mistral 7x8B, and LLaMA 200B models with batching and caching on AWS EC2.',
    icon: <Cpu className="w-10 h-10 text-[var(--primary)]" />,
    tags: ['Python', 'AWS', 'GPT-4o', 'Mistral', 'LLaMA'],
  },
  {
    title: 'Cloud Infrastructure Automation',
    description: 'Created a comprehensive cloud infrastructure using Terraform with auto-scaling capabilities and robust security features on AWS.',
    icon: <Cloud className="w-10 h-10 text-[var(--primary)]" />,
    tags: ['AWS', 'Terraform', 'Lambda', 'CloudFront', 'S3'],
  },
  {
    title: 'Cybersecurity Analysis Platform',
    description: 'Built a platform for analyzing malware behaviors, threat actor tactics, and generating comprehensive security reports.',
    icon: <Shield className="w-10 h-10 text-[var(--primary)]" />,
    tags: ['Python', 'React', 'WannaCry', 'Malware Analysis', 'Threat Intelligence'],
  },
  {
    title: 'Data Processing Pipeline',
    description: 'Developed a high-performance data processing system that handles large-scale JSON datasets (2-3 GB) for AI model optimization.',
    icon: <Database className="w-10 h-10 text-[var(--primary)]" />,
    tags: ['Python', 'MongoDB', 'Redis', 'AWS', 'Data Engineering'],
  },
];

const Projects: React.FC = () => {
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="projects" className="py-20 px-4 bg-black/30 relative">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center section-title inline-block w-full text-[var(--primary)]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>
        
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-[var(--primary)]/30 hover:border-[var(--primary)]/60 transition-all duration-300"
              whileHover={{ 
                y: -5, 
                boxShadow: "0 10px 25px -5px rgba(0, 255, 140, 0.15)",
                borderColor: "rgba(0, 255, 140, 0.6)" 
              }}
            >
              <div className="flex items-start mb-4">
                <div className="mr-4">
                  {project.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-[var(--text-secondary)] mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="px-2 py-1 bg-[var(--primary)]/10 text-[var(--primary)] text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <button className="flex items-center text-xs text-white/70 hover:text-[var(--primary)] transition-colors">
                      <ExternalLink size={14} className="mr-1" /> Live Demo
                    </button>
                    <button className="flex items-center text-xs text-white/70 hover:text-[var(--primary)] transition-colors">
                      <Github size={14} className="mr-1" /> Source Code
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <button className="px-6 py-3 bg-[var(--primary)]/10 text-[var(--primary)] rounded-md border border-[var(--primary)]/30 hover:bg-[var(--primary)]/20 transition-colors duration-300 font-mono">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;