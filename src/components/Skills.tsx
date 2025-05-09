import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Skill {
  name: string;
  level: number;
}

const Skills: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cloudSkills: Skill[] = [
    { name: 'AWS (Lambda, S3, API Gateway, EC2)', level: 90 },
    { name: 'Kubernetes', level: 85 },
    { name: 'Terraform (IaC)', level: 80 },
    { name: 'Red Hat/CentOS', level: 85 },
    { name: 'Cloudflare CDN', level: 75 },
  ];

  const securitySkills: Skill[] = [
    { name: 'Malware Analysis', level: 80 },
    { name: 'Threat Intelligence', level: 85 },
    { name: 'XSS/CSRF Vulnerabilities', level: 75 },
    { name: 'SCADA Security', level: 70 },
    { name: 'Network Security', level: 85 },
  ];

  const devSkills: Skill[] = [
    { name: 'JavaScript/TypeScript', level: 85 },
    { name: 'React/Next.js', level: 80 },
    { name: 'Python', level: 90 },
    { name: 'MongoDB/Redis/DynamoDB', level: 85 },
    { name: 'CI/CD (GitHub Actions)', level: 80 },
  ];

  const aiSkills: Skill[] = [
    { name: 'GPT Integration (API)', level: 90 },
    { name: 'Mistral Fine-tuning', level: 85 },
    { name: 'LLaMA Implementation', level: 80 },
    { name: 'Data Processing', level: 95 },
    { name: 'Model Optimization', level: 85 },
  ];

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const renderSkills = (skills: Skill[]) => {
    return skills.map((skill, index) => (
      <motion.div
        key={index}
        variants={skillVariants}
        className="mb-4"
      >
        <div className="flex justify-between mb-1">
          <span className="text-sm font-mono">{skill.name}</span>
          <span className="text-xs text-[var(--primary)]">{skill.level}%</span>
        </div>
        <div className="skill-bar">
          <motion.div
            className="skill-progress"
            initial={{ width: 0 }}
            animate={{ width: `${skill.level}%` }}
            transition={{ duration: 1, delay: 0.2 * index }}
          ></motion.div>
        </div>
      </motion.div>
    ));
  };

  return (
    <section id="skills" className="py-20 px-4 bg-black/30 relative">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold mb-12 section-title inline-block text-center w-full text-[var(--primary)]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Technical Skills
        </motion.h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          <motion.div variants={skillVariants} className="bg-black/20 backdrop-blur-sm border border-[var(--primary)]/20 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-[var(--primary)]/30">Cloud & Infrastructure</h3>
            {renderSkills(cloudSkills)}
          </motion.div>

          <motion.div variants={skillVariants} className="bg-black/20 backdrop-blur-sm border border-[var(--primary)]/20 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-[var(--primary)]/30">Cybersecurity</h3>
            {renderSkills(securitySkills)}
          </motion.div>

          <motion.div variants={skillVariants} className="bg-black/20 backdrop-blur-sm border border-[var(--primary)]/20 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-[var(--primary)]/30">Full-Stack Development</h3>
            {renderSkills(devSkills)}
          </motion.div>

          <motion.div variants={skillVariants} className="bg-black/20 backdrop-blur-sm border border-[var(--primary)]/20 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-[var(--primary)]/30">AI & Optimization</h3>
            {renderSkills(aiSkills)}
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-16 bg-[var(--primary)]/5 border border-[var(--primary)]/20 p-6 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-xl font-bold mb-4">Certifications & Education</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-black/30 rounded-md">
              <div className="font-bold">ECDL Expert</div>
              <div className="text-sm text-gray-400">Advanced Microsoft Office Suite</div>
            </div>
            <div className="p-4 bg-black/30 rounded-md">
              <div className="font-bold">AWS Certification</div>
              <div className="text-sm text-gray-400">In Progress</div>
            </div>
            <div className="p-4 bg-black/30 rounded-md">
              <div className="font-bold">Planned: RHCSA, CKA</div>
              <div className="text-sm text-gray-400">AWS Security - Specialty</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;