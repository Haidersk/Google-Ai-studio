import React, { useState, useEffect, useRef } from 'react';
import { PERSONAL_INFO } from '../constants';
import { FileTextIcon } from './icons/FileTextIcon';

interface ContactProps {
  id: string;
}

const SectionTitle: React.FC<{ children: React.ReactNode; isVisible: boolean }> = ({ children, isVisible }) => (
  <h2 className={`text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12 scroll-fade-up ${isVisible ? 'is-visible' : ''}`}>
    {children}
  </h2>
);

const Contact: React.FC<ContactProps> = ({ id }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id={id} className="py-16 lg:py-24 px-6 md:px-12 text-center bg-gray-50 dark:bg-gray-900/70">
      <SectionTitle isVisible={isVisible}>Get In Touch</SectionTitle>
      <p className={`max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300 mb-8 scroll-fade-up ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '100ms' }}>
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious team. Feel free to reach out!
      </p>
      <div className={`flex flex-col sm:flex-row justify-center items-center gap-6 scroll-fade-up ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '200ms' }}>
        <a
          href={`mailto:${PERSONAL_INFO.email}`}
          className="text-2xl font-semibold text-purple-600 dark:text-purple-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors duration-300"
        >
          {PERSONAL_INFO.email}
        </a>
        <a
          href={PERSONAL_INFO.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          <FileTextIcon className="w-5 h-5" />
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Contact;