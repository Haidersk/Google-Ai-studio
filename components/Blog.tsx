import React, { useState, useEffect, useRef } from 'react';
import { BLOG_POSTS } from '../constants';
import type { BlogPost } from '../types';

interface BlogProps {
  id: string;
}

const SectionTitle: React.FC<{ children: React.ReactNode; isVisible: boolean }> = ({ children, isVisible }) => (
  <h2 className={`text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12 scroll-fade-up ${isVisible ? 'is-visible' : ''}`}>
    {children}
  </h2>
);

const BlogPostCard: React.FC<{ post: BlogPost; index: number; isVisible: boolean }> = ({ post, index, isVisible }) => (
  <a
    href={post.link}
    target="_blank"
    rel="noopener noreferrer"
    className={`block p-6 bg-white dark:bg-gray-800 rounded-lg group border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:border-gray-300 dark:hover:border-gray-600 transition-colors duration-300 scroll-fade-up ${isVisible ? 'is-visible' : ''}`}
    style={{ transitionDelay: `${index * 100}ms` }}
  >
    <div className="flex justify-between items-baseline mb-2">
      <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">{post.title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">{post.date}</p>
    </div>
    <p className="text-gray-600 dark:text-gray-300 mb-4">{post.summary}</p>
    <div className="text-purple-600 dark:text-purple-400 font-medium group-hover:underline">Read More on {post.publication} &rarr;</div>
  </a>
);

const Blog: React.FC<BlogProps> = ({ id }) => {
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
      <SectionTitle isVisible={isVisible}>Blog & Case Studies</SectionTitle>
      <div className="max-w-4xl mx-auto space-y-8">
        {BLOG_POSTS.map((post, index) => (
          <BlogPostCard key={post.title} post={post} index={index} isVisible={isVisible} />
        ))}
      </div>
    </section>
  );
};

export default Blog;