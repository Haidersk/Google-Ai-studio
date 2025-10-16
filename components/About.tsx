import React, { useState, useEffect, useRef } from 'react';
import { PERSONAL_INFO } from '../constants';

interface AboutProps {
  id: string;
}

const SectionTitle: React.FC<{ children: React.ReactNode; isVisible: boolean }> = ({ children, isVisible }) => (
  <h2 className={`text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12 scroll-fade-up ${isVisible ? 'is-visible' : ''}`}>
    {children}
  </h2>
);

const About: React.FC<AboutProps> = ({ id }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
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
    <section ref={sectionRef} id={id} className="px-6 md:px-12 py-16 lg:py-24">
      <SectionTitle isVisible={isVisible}>About Me</SectionTitle>
      <div className="max-w-3xl mx-auto">
        <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300">
          <p className={`scroll-fade-up ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '300ms' }}>
            Hello! I'm Haider, a passionate DevOps Engineer with a knack for automating processes and building robust, scalable infrastructure. My journey in tech began with a curiosity for how complex systems work, which led me to the world of cloud computing and automation.
          </p>
          <p className={`scroll-fade-up ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '450ms' }}>
            I specialize in building CI/CD pipelines, managing containerized applications with Kubernetes, and provisioning infrastructure as code using tools like Terraform. I thrive on bridging the gap between development and operations to accelerate software delivery and improve reliability.
          </p>
          <p className={`font-semibold text-purple-600 dark:text-purple-400 border-l-4 border-purple-500 dark:border-purple-400 pl-4 scroll-fade-up ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '600ms' }}>
            My philosophy is simple: "Automate everything." I believe in leveraging the power of code to create self-healing, efficient, and secure systems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;