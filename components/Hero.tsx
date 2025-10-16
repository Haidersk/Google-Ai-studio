
import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../constants';
import { GitHubIcon } from './icons/GitHubIcon';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { EditIcon } from './icons/EditIcon';

interface HeroProps {
  onEditClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onEditClick }) => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-white dark:from-slate-800/50 dark:via-purple-950/30 dark:to-gray-800/50 animate-gradient-shift"
        style={{
          backgroundSize: '200% 200%',
          transform: `translateY(${offsetY * 0.4}px)`,
        }}
        aria-hidden="true"
      />
      <div className="relative px-6 md:px-12 py-20 md:py-28">
        <div className="flex flex-col items-center text-center">
          <div className="space-y-6 animate-fadeInUp max-w-3xl">
            <p className="text-xl font-medium text-purple-600 dark:text-purple-400">Hello, I'm</p>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {PERSONAL_INFO.tagline}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a
                  href="#contact"
                  className="bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:opacity-90 transition-opacity w-full sm:w-auto text-center"
                >
                  Say Hello!
                </a>
                <button
                  onClick={onEditClick}
                  className="group inline-flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors w-full sm:w-auto"
                >
                  <EditIcon className="w-5 h-5 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_4px_rgba(168,85,247,0.7)] dark:group-hover:drop-shadow-[0_0_4px_rgba(192,132,252,0.7)]" />
                  Edit Profile
                </button>
              </div>
              <div className="flex items-center space-x-5">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-transform duration-300 hover:scale-110"
                  aria-label="GitHub Profile"
                >
                  <GitHubIcon className="w-6 h-6 transition-all duration-300 group-hover:drop-shadow-[0_0_4px_rgba(168,85,247,0.7)] dark:group-hover:drop-shadow-[0_0_4px_rgba(192,132,252,0.7)]" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-transform duration-300 hover:scale-110"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedInIcon className="w-6 h-6 transition-all duration-300 group-hover:drop-shadow-[0_0_4px_rgba(168,85,247,0.7)] dark:group-hover:drop-shadow-[0_0_4px_rgba(192,132,252,0.7)]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
