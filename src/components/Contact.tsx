import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formStatus, setFormStatus] = useState<null | 'success' | 'error'>(null);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would normally connect to a backend service
    // For demo purposes, we'll simulate a successful submission
    setFormStatus('success');
    setTimeout(() => setFormStatus(null), 3000);
    setName('');
    setEmail('');
    setMessage('');
  };

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
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center section-title inline-block w-full text-[var(--primary)]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>
        
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center mr-4 border border-[var(--primary)]/30">
                  <Phone className="w-5 h-5 text-[var(--primary)]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-1">Phone</h4>
                  <p className="text-[var(--text-secondary)]">0744525116</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center mr-4 border border-[var(--primary)]/30">
                  <Mail className="w-5 h-5 text-[var(--primary)]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-1">Email</h4>
                  <p className="text-[var(--text-secondary)]">alphaxjourney@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center mr-4 border border-[var(--primary)]/30">
                  <Linkedin className="w-5 h-5 text-[var(--primary)]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-1">LinkedIn</h4>
                  <p className="text-[var(--text-secondary)]">linkedin.com/in/xdenks/</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center mr-4 border border-[var(--primary)]/30">
                  <MapPin className="w-5 h-5 text-[var(--primary)]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-1">Location</h4>
                  <p className="text-[var(--text-secondary)]">Craiova, Romania</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="text-xl font-bold mb-4">Let's Connect</h3>
              <p className="text-[var(--text-secondary)] mb-4">
                If you're looking for a dedicated professional who is passionate about cloud infrastructure, 
                cybersecurity, and cutting-edge technology, I'd love to hear from you.
              </p>
              <p className="text-[var(--text-secondary)]">
                I'm currently available for freelance work and open to new opportunities.
              </p>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="bg-black/20 backdrop-blur-sm border border-[var(--primary)]/20 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 bg-black/50 border border-[var(--primary)]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50 text-white"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 bg-black/50 border border-[var(--primary)]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50 text-white"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="w-full px-4 py-2 bg-black/50 border border-[var(--primary)]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50 text-white resize-none"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-3 bg-[var(--primary)] text-black font-bold rounded-md hover:bg-[var(--primary)]/90 transition-colors duration-300"
              >
                Send Message
              </button>
              
              {formStatus === 'success' && (
                <div className="mt-4 p-3 bg-green-500/20 border border-green-500/30 rounded-md text-green-400 text-sm">
                  Your message has been sent successfully!
                </div>
              )}
              
              {formStatus === 'error' && (
                <div className="mt-4 p-3 bg-red-500/20 border border-red-500/30 rounded-md text-red-400 text-sm">
                  There was an error sending your message. Please try again.
                </div>
              )}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;