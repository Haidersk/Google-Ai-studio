
import React from 'react';
import { MOCK_GITHUB_REPOS } from '../constants';
import type { GithubRepo } from '../types';
import { StarIcon, ForkIcon } from './icons';

interface GithubReposProps {
  id: string;
}

const LANGUAGE_COLORS: { [key: string]: string } = {
  Python: 'bg-blue-500',
  YAML: 'bg-yellow-500',
  HCL: 'bg-purple-500',
  JavaScript: 'bg-yellow-400',
  TypeScript: 'bg-blue-400',
  Go: 'bg-cyan-400',
  Shell: 'bg-green-500',
  Default: 'bg-gray-500',
};

const SectionTitle: React.FC<{ children: React.ReactNode; isVisible: boolean }> = ({ children, isVisible }) => (
  <h2 className={`text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12 scroll-fade-up ${isVisible ? 'is-visible' : ''}`}>
    {children}
  </h2>
);

const RepoCard: React.FC<{ repo: GithubRepo; index: number; isVisible: boolean }> = ({ repo, index, isVisible }) => {
  const langColor = LANGUAGE_COLORS[repo.language] || LANGUAGE_COLORS.Default;

  return (
    <a
      href={repo.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`block p-6 bg-white dark:bg-gray-800 rounded-lg group border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-500 transition-all duration-300 shadow-sm hover:shadow-lg transform hover:-translate-y-1 scroll-fade-up ${isVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex flex-col h-full">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 mb-2">{repo.name}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{repo.description}</p>
        <div className="mt-auto flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-6">
          <div className="flex items-center">
            <span className={`w-3 h-3 rounded-full mr-2 ${langColor}`}></span>
            <span>{repo.language}</span>
          </div>
          <div className="flex items-center">
            <StarIcon className="w-4 h-4 mr-1" />
            <span>{repo.stars}</span>
          </div>
          <div className="flex items-center">
            <ForkIcon className="w-4 h-4 mr-1" />
            <span>{repo.forks}</span>
          </div>
        </div>
      </div>
    </a>
  );
};


const GithubRepos: React.FC<GithubReposProps> = ({ id }) => {
  const sectionRef = React.useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);
  const [repos, setRepos] = React.useState<GithubRepo[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // In a real application, you would fetch this data from the GitHub API.
    // For this demo, we'll simulate an API call with a short delay.
    const timer = setTimeout(() => {
      setRepos(MOCK_GITHUB_REPOS);
      setLoading(false);
    }, 500); // Simulate network delay

    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
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
    <section ref={sectionRef} id={id} className="py-16 lg:py-24 px-6 md:px-12 bg-gray-50 dark:bg-gray-900/70">
      <SectionTitle isVisible={isVisible}>Featured Repositories</SectionTitle>
      {loading ? (
        <p className="text-center text-gray-500 dark:text-gray-400">Loading repositories...</p>
      ) : (
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {repos.map((repo, index) => (
            <RepoCard key={repo.id} repo={repo} index={index} isVisible={isVisible} />
          ))}
        </div>
      )}
    </section>
  );
};

export default GithubRepos;
