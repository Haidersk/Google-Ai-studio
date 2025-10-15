import React, { useState, useEffect, useRef } from 'react';
import { CERTIFICATIONS } from '../constants';
import type { Certification } from '../types';

interface CertificationsProps {
  id: string;
}

const SectionTitle: React.FC<{ children: React.ReactNode; isVisible: boolean }> = ({ children, isVisible }) => (
  <h2 className={`text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12 scroll-fade-up ${isVisible ? 'is-visible' : ''}`}>
    {children}
  </h2>
);

const CertificationCard: React.FC<{ cert: Certification; index: number; isVisible: boolean }> = ({ cert, index, isVisible }) => (
    <a 
      href={cert.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`bg-white dark:bg-gray-800 p-6 rounded-lg flex items-center space-x-6 border border-gray-200 dark:border-gray-700 hover:bg-purple-50 dark:hover:bg-gray-700/50 hover:border-purple-200 dark:hover:border-purple-500 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 scroll-fade-up ${isVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
        <div className="w-20 h-20 bg-gray-100 dark:bg-gray-700 flex items-center justify-center rounded-md text-purple-600 dark:text-purple-400 font-bold text-center text-sm p-1 flex-shrink-0">
          {cert.issuer.split(' ').map(word => word[0]).join('')}
        </div>
        <div>
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">{cert.name}</h3>
            <p className="text-gray-600 dark:text-gray-300">{cert.issuer}</p>
        </div>
    </a>
);

const Certifications: React.FC<CertificationsProps> = ({ id }) => {
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
    <section ref={sectionRef} id={id} className="py-16 lg:py-24 px-6 md:px-12">
      <SectionTitle isVisible={isVisible}>Certifications</SectionTitle>
      <div className="max-w-4xl mx-auto grid md:grid-cols-1 gap-8">
        {CERTIFICATIONS.map((cert, index) => (
          <CertificationCard key={cert.name} cert={cert} index={index} isVisible={isVisible} />
        ))}
      </div>
    </section>
  );
};

export default Certifications;