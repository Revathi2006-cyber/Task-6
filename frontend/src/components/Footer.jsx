import React from 'react';
import { Github, Mail, Phone } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800 py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left: Copyright */}
          <div className="text-gray-400 text-sm">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </div>

          {/* Center: Social Links */}
          <div className="flex items-center gap-6">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href={`tel:${personalInfo.phone}`}
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Phone"
            >
              <Phone size={20} />
            </a>
          </div>

          {/* Right: Tagline */}
          <div className="text-gray-400 text-sm">
            Built with <span className="text-cyan-400">React</span> & <span className="text-blue-400">FastAPI</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;