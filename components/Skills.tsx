import React, { useState, useEffect, useRef } from 'react';
import { SKILL_CATEGORIES } from '../constants';
import type { SkillCategory, Skill } from '../types';

interface SkillsProps {
  id: string;
}

const SectionTitle: React.FC<{ children: React.ReactNode; isVisible: boolean }> = ({ children, isVisible }) => (
  <h2 className={`text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16 scroll-fade-up ${isVisible ? 'is-visible' : ''}`}>
    {children}
  </h2>
);

const SkillCard: React.FC<{ skill: Skill; index: number; isVisible: boolean }> = ({ skill, index, isVisible }) => (
  <div 
    className={`flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md dark:hover:shadow-purple-500/10 hover:border-purple-200 dark:hover:border-purple-400 transition-all duration-300 transform hover:-translate-y-1 scroll-fade-up ${isVisible ? 'is-visible' : ''}`}
    style={{ transitionDelay: `${index * 50}ms` }}
  >
    <skill.icon className="w-12 h-12 mb-3 text-purple-600 dark:text-purple-400" />
    <span className="font-medium text-gray-700 dark:text-gray-200 text-center">{skill.name}</span>
  </div>
);

const Skills: React.FC<SkillsProps> = ({ id }) => {
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
      { threshold: 0.05 }
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
    <section ref={sectionRef} id={id} className="py-16 lg:py-24 px-6 md:px-12 bg-gray-50 dark:bg-gray-900/70">
      <SectionTitle isVisible={isVisible}>Skills & Tools</SectionTitle>
      <div className="space-y-12">
        {SKILL_CATEGORIES.map((category: SkillCategory) => (
          <div key={category.title} className={`scroll-fade-up ${isVisible ? 'is-visible' : ''}`}>
            <h3 className="text-2xl font-semibold text-center text-purple-600 dark:text-purple-400 mb-8">{category.title}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
              {category.skills.map((skill: Skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} isVisible={isVisible} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;