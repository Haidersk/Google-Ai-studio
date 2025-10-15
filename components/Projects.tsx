import React, { useState, useEffect, useRef } from 'react';
import { PROJECTS } from '../constants';
import type { Project } from '../types';
import { GitHubIcon, ImageIcon } from './icons';

interface ProjectsProps {
  id: string;
}

const SectionTitle: React.FC<{ children: React.ReactNode; isVisible: boolean }> = ({ children, isVisible }) => (
  <h2 className={`text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12 scroll-fade-up ${isVisible ? 'is-visible' : ''}`}>
    {children}
  </h2>
);

const ProjectCard: React.FC<{ project: Project; index: number; isVisible: boolean }> = ({ project, index, isVisible }) => {
    const [imageError, setImageError] = React.useState(false);
    const projectAnchorId = project.title.toLowerCase().replace(/\s+/g, '-');

    const handleImageError = () => {
        setImageError(true);
    };

    return (
        <div 
            id={projectAnchorId} 
            className={`bg-white dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg hover:shadow-purple-500/10 dark:hover:shadow-purple-500/10 transition-shadow duration-300 flex flex-col scroll-mt-24 scroll-fade-up ${isVisible ? 'is-visible' : ''}`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            {imageError ? (
                <div 
                  className="w-full h-56 bg-gray-100 dark:bg-gray-700 flex flex-col items-center justify-center text-gray-500 dark:text-gray-400" 
                  role="img" 
                  aria-label={`Placeholder for ${project.title} project image`}
                >
                    <ImageIcon className="w-12 h-12 mb-2" />
                    <span>Image not available</span>
                </div>
            ) : (
                <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-56 object-cover"
                    onError={handleImageError} 
                />
            )}
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map(tech => (
                        <span key={tech} className="bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300 text-xs font-semibold px-2.5 py-1 rounded-full">{tech}</span>
                    ))}
                </div>
                <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                        <GitHubIcon className="w-6 h-6" />
                        View Code
                    </a>
                    {project.liveDemoLink && (
                        <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 hover:text-purple-500 dark:hover:text-purple-300 font-semibold">
                            Live Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

const Projects: React.FC<ProjectsProps> = ({ id }) => {
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
            <SectionTitle isVisible={isVisible}>My Projects</SectionTitle>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                {PROJECTS.map((project, index) => (
                    <ProjectCard key={project.title} project={project} index={index} isVisible={isVisible} />
                ))}
            </div>
        </section>
    );
};

export default Projects;