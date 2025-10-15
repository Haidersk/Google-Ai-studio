import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { GitHubIcon } from './icons/GitHubIcon';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { EditIcon } from './icons/EditIcon';

interface HeroProps {
  onEditClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onEditClick }) => {
  return (
    <section id="home" className="px-6 md:px-12 py-20 md:py-28">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fadeInUp text-center md:text-left">
          <p className="text-xl font-medium text-purple-600 dark:text-purple-400">Hello, I'm</p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            {PERSONAL_INFO.name}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg mx-auto md:mx-0">
            {PERSONAL_INFO.tagline}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6 pt-4">
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
               <a
                href="#contact"
                className="bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:opacity-90 transition-opacity w-full sm:w-auto text-center"
              >
                Say Hello!
              </a>
              <button
                onClick={onEditClick}
                className="inline-flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors w-full sm:w-auto"
              >
                <EditIcon className="w-5 h-5" />
                Edit Profile
              </button>
            </div>
            <div className="flex items-center space-x-5">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-transform duration-300 hover:scale-110"
                aria-label="GitHub Profile"
              >
                <GitHubIcon className="w-7 h-7" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-transform duration-300 hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <LinkedInIcon className="w-7 h-7" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center animate-fadeInUp" style={{ animationDelay: '200ms' }}>
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-2xl opacity-50 dark:opacity-40"></div>
            <img
              src={PERSONAL_INFO.profileImageUrl}
              alt={PERSONAL_INFO.name}
              className="relative rounded-full w-full h-full object-cover border-4 border-white dark:border-gray-700 shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;