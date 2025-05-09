import React from 'react';
import { Github, Linkedin, Mail, Shield } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 px-4 border-t border-[var(--primary)]/20 bg-black/50">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Shield className="h-8 w-8 mr-2 text-[var(--primary)]" />
            <span className="text-xl font-bold font-mono">Denis<span className="text-[var(--primary)]">V.</span></span>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-black/50 flex items-center justify-center border border-white/10 hover:border-[var(--primary)]/50 transition-colors">
                <Github className="w-5 h-5 text-white hover:text-[var(--primary)] transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-black/50 flex items-center justify-center border border-white/10 hover:border-[var(--primary)]/50 transition-colors">
                <Linkedin className="w-5 h-5 text-white hover:text-[var(--primary)] transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-black/50 flex items-center justify-center border border-white/10 hover:border-[var(--primary)]/50 transition-colors">
                <Mail className="w-5 h-5 text-white hover:text-[var(--primary)] transition-colors" />
              </a>
            </div>
            
            <div className="text-center md:text-right text-[var(--text-secondary)] text-sm">
              <p>Phone: 0744525116</p>
              <p>Email: alphaxjourney@gmail.com</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[var(--text-secondary)] text-sm mb-4 md:mb-0">
            &copy; {currentYear} Denis V. All rights reserved.
          </p>
          
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--text-secondary)]">
            <a href="#" className="hover:text-[var(--primary)] transition-colors">About</a>
            <a href="#" className="hover:text-[var(--primary)] transition-colors">Skills</a>
            <a href="#" className="hover:text-[var(--primary)] transition-colors">Experience</a>
            <a href="#" className="hover:text-[var(--primary)] transition-colors">Projects</a>
            <a href="#" className="hover:text-[var(--primary)] transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;