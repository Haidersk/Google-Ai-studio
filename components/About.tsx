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
      <div className="grid md:grid-cols-5 gap-10 items-center">
        <div className={`md:col-span-2 scroll-fade-up ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '100ms' }}>
          <div className="relative w-full max-w-xs mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg transform -rotate-6"></div>
            <img
              src={PERSONAL_INFO.profileImageUrl}
              alt="Haider Shaikh"
              className="relative rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
        <div className={`md:col-span-3 space-y-6 text-lg text-gray-600 dark:text-gray-300 scroll-fade-up ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '200ms' }}>
          <p>
            Hello! I'm Haider, a passionate DevOps Engineer with a knack for automating processes and building robust, scalable infrastructure. My journey in tech began with a curiosity for how complex systems work, which led me to the world of cloud computing and automation.
          </p>
          <p>
            I specialize in building CI/CD pipelines, managing containerized applications with Kubernetes, and provisioning infrastructure as code using tools like Terraform. I thrive on bridging the gap between development and operations to accelerate software delivery and improve reliability.
          </p>
          <p className="font-semibold text-purple-600 dark:text-purple-400 border-l-4 border-purple-500 dark:border-purple-400 pl-4">
            My philosophy is simple: "Automate everything." I believe in leveraging the power of code to create self-healing, efficient, and secure systems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;