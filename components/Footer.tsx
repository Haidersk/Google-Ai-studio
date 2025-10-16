
import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { GitHubIcon } from './icons/GitHubIcon';
import { LinkedInIcon } from './icons/LinkedInIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-slate-900 py-8">
      <div className="container mx-auto px-6 md:px-12 text-center text-gray-500 dark:text-gray-400">
        <div className="flex justify-center items-center space-x-6 mb-4">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 hover:scale-110"
            aria-label="GitHub"
          >
            <GitHubIcon className="w-6 h-6 transition-all duration-300 group-hover:drop-shadow-[0_0_4px_rgba(168,85,247,0.7)] dark:group-hover:drop-shadow-[0_0_4px_rgba(192,132,252,0.7)]" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="w-6 h-6 transition-all duration-300 group-hover:drop-shadow-[0_0_4px_rgba(168,85,247,0.7)] dark:group-hover:drop-shadow-[0_0_4px_rgba(192,132,252,0.7)]" />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
