
import React, { useState, useEffect, useRef } from 'react';
import { PROJECTS } from '../constants';
import type { Project } from '../types';
import { GitHubIcon, ImageIcon } from './icons';
import { useImageParallax } from '../hooks/useImageParallax';

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
    const [diagramError, setDiagramError] = React.useState(false);
    const projectAnchorId = project.title.toLowerCase().replace(/\s+/g, '-');
    const { ref: parallaxContainerRef, style: parallaxStyle } = useImageParallax();

    const handleImageError = () => {
        setImageError(true);
    };

    const handleDiagramError = () => {
        setDiagramError(true);
    };

    return (
        <div 
            id={projectAnchorId} 
            className={`bg-white dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg hover:shadow-purple-500/10 dark:hover:shadow-purple-500/10 transition-shadow duration-300 flex flex-col scroll-mt-24 scroll-fade-up ${isVisible ? 'is-visible' : ''}`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <div ref={parallaxContainerRef} className="w-full h-48 project-image-container group">
              {imageError ? (
                  <div 
                    className="w-full h-full bg-gray-100 dark:bg-gray-700 flex flex-col items-center justify-center text-gray-500 dark:text-gray-400" 
                    role="img" 
                    aria-label={`Placeholder for ${project.title} project image`}
                  >
                      <ImageIcon className="w-12 h-12 mb-2" />
                      <span>Image not available</span>
                  </div>
              ) : (
                  <>
                    <img 
                        src={project.imageUrl} 
                        alt={project.title} 
                        className="w-full h-full object-cover"
                        style={parallaxStyle}
                        onError={handleImageError} 
                    />
                    <div className="card__grid-effect opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {Array.from({ length: 100 }).map((_, i) => (
                        <div key={i} className="card__grid-effect-tile" />
                      ))}
                    </div>
                  </>
              )}
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map(tech => (
                        <span key={tech} className="bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300 text-xs font-semibold px-2.5 py-1 rounded-full">{tech}</span>
                    ))}
                </div>

                {project.architectureDiagramUrl && (
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                        <h4 className="text-md font-semibold text-gray-800 dark:text-gray-200 mb-3">Architecture Diagram</h4>
                        {diagramError ? (
                             <div 
                                className="w-full h-40 bg-gray-100 dark:bg-gray-700 flex flex-col items-center justify-center text-gray-500 dark:text-gray-400 rounded-md" 
                                role="img" 
                                aria-label={`Placeholder for ${project.title} architecture diagram`}
                                >
                                <ImageIcon className="w-10 h-10 mb-2" />
                                <span>Diagram not available</span>
                            </div>
                        ) : (
                            <a href={project.architectureDiagramUrl} target="_blank" rel="noopener noreferrer">
                                <img 
                                    src={project.architectureDiagramUrl}
                                    alt={`Architecture diagram for ${project.title}`}
                                    className="w-full h-auto object-cover rounded-md border border-gray-200 dark:border-gray-600 hover:opacity-90 transition-opacity"
                                    onError={handleDiagramError}
                                />
                            </a>
                        )}
                    </div>
                )}
                
                <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                        <GitHubIcon className="w-6 h-6 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_4px_rgba(168,85,247,0.7)] dark:group-hover:drop-shadow-[0_0_4px_rgba(192,132,252,0.7)]" />
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PROJECTS.map((project, index) => (
                    <ProjectCard key={project.title} project={project} index={index} isVisible={isVisible} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
