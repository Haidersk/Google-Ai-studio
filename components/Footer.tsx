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
            className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
            aria-label="GitHub"
          >
            <GitHubIcon className="w-7 h-7" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="w-7 h-7" />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;