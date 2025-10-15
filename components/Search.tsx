import React, { useState, useEffect, useRef } from 'react';
import { PROJECTS, BLOG_POSTS, SKILL_CATEGORIES } from '../constants';
import type { Project, BlogPost, Skill } from '../types';
import { SearchIcon } from './icons/SearchIcon';
import { useDebounce } from '../hooks/useDebounce';

interface SearchResults {
  projects: Project[];
  blogs: BlogPost[];
  skills: Skill[];
}

interface SearchProps {
  isOpen: boolean;
  onClose: () => void;
}

const DEBOUNCE_DELAY = 300; // milliseconds

const Search: React.FC<SearchProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, DEBOUNCE_DELAY);
  const [results, setResults] = useState<SearchResults>({ projects: [], blogs: [], skills: [] });
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setSearchTerm('');
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (debouncedSearchTerm.trim().length < 2) {
      setResults({ projects: [], blogs: [], skills: [] });
      return;
    }

    const lowerCaseSearchTerm = debouncedSearchTerm.toLowerCase();

    const filteredProjects = PROJECTS.filter(project =>
      project.title.toLowerCase().includes(lowerCaseSearchTerm) ||
      project.description.toLowerCase().includes(lowerCaseSearchTerm) ||
      project.techStack.some(tech => tech.toLowerCase().includes(lowerCaseSearchTerm))
    );

    const filteredBlogs = BLOG_POSTS.filter(post =>
      post.title.toLowerCase().includes(lowerCaseSearchTerm) ||
      post.summary.toLowerCase().includes(lowerCaseSearchTerm)
    );
      
    const allSkills = SKILL_CATEGORIES.flatMap(category => category.skills);
    const filteredSkills = allSkills.filter(skill =>
      skill.name.toLowerCase().includes(lowerCaseSearchTerm)
    );

    setResults({
      projects: filteredProjects,
      blogs: filteredBlogs,
      skills: filteredSkills,
    });
  }, [debouncedSearchTerm]);

  if (!isOpen) {
    return null;
  }

  const totalResults = results.projects.length + results.blogs.length + results.skills.length;

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex justify-center items-start pt-20 animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative bg-white dark:bg-gray-800 w-full max-w-2xl rounded-lg shadow-2xl mx-4 animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative border-b border-gray-200 dark:border-gray-700">
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search projects, blogs, or skills..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-transparent text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 py-4 pl-12 pr-4 focus:outline-none"
          />
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-4">
          {debouncedSearchTerm.trim().length >= 2 ? (
            totalResults > 0 ? (
              <ul className="space-y-4">
                {results.projects.length > 0 && (
                  <li>
                    <h3 className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 mb-2 px-2">Projects</h3>
                    <ul>
                      {results.projects.map(project => (
                        <li key={project.title}>
                          <a href={`#${project.title.toLowerCase().replace(/\s+/g, '-')}`} onClick={onClose} className="block p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
                            <p className="font-semibold text-purple-600 dark:text-purple-400">{project.title}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-1">{project.description}</p>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                )}
                {results.blogs.length > 0 && (
                  <li>
                    <h3 className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 mb-2 px-2">Blog Posts</h3>
                    <ul>
                      {results.blogs.map(post => (
                        <li key={post.title}>
                          <a href="#blog" onClick={onClose} className="block p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
                            <p className="font-semibold text-purple-600 dark:text-purple-400">{post.title}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-1">{post.summary}</p>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                )}
                {results.skills.length > 0 && (
                  <li>
                    <h3 className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 mb-2 px-2">Skills</h3>
                    <div className="flex flex-wrap gap-2 p-2">
                      {results.skills.map(skill => (
                         <a key={skill.name} href="#skills" onClick={onClose} className="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 text-sm font-medium px-3 py-1 rounded-full hover:bg-purple-600 hover:text-white dark:hover:bg-purple-500 transition-colors">
                           {skill.name}
                         </a>
                      ))}
                    </div>
                  </li>
                )}
              </ul>
            ) : (
              <p className="text-center text-gray-500 dark:text-gray-400 py-8">No results found for "{debouncedSearchTerm}"</p>
            )
          ) : (
            <p className="text-center text-gray-400 dark:text-gray-500 py-8">Start typing to search the portfolio.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;