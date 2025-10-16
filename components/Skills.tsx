
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

const SkillCard: React.FC<{ skill: Skill; delay: number; isVisible: boolean }> = ({ skill, delay, isVisible }) => (
  <div 
    className={`group flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md dark:hover:shadow-purple-500/10 hover:border-purple-200 dark:hover:border-purple-400 transition-all duration-300 transform hover:-translate-y-1 scroll-fade-up ${isVisible ? 'is-visible' : ''}`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    <skill.icon className="w-8 h-8 mb-3 text-purple-600 dark:text-purple-400 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_5px_rgba(168,85,247,0.7)] dark:group-hover:drop-shadow-[0_0_5px_rgba(192,132,252,0.7)]" />
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
        {SKILL_CATEGORIES.map((category: SkillCategory, categoryIndex) => {
          const categoryBaseDelay = categoryIndex * 200;
          return (
            <div key={category.title}>
              <h3 
                className={`text-2xl font-semibold text-center text-purple-600 dark:text-purple-400 mb-8 scroll-fade-up ${isVisible ? 'is-visible' : ''}`}
                style={{ transitionDelay: `${categoryBaseDelay}ms` }}
              >
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
                {category.skills.map((skill: Skill, skillIndex) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    isVisible={isVisible}
                    delay={categoryBaseDelay + (skillIndex + 1) * 75}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
