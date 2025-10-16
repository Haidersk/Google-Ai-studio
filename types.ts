import React from 'react';

export interface NavLink {
  name: string;
  href: string;
}

export interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubLink: string;
  liveDemoLink?: string;
  imageUrl: string;
  architectureDiagramUrl?: string;
}

export interface GithubRepo {
  id: number;
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  url: string;
}

// FIX: Add missing Certification interface to fix import error in components/Certifications.tsx.
export interface Certification {
  name: string;
  issuer: string;
  link: string;
}

// FIX: Add missing BlogPost interface to fix import error in components/Blog.tsx.
export interface BlogPost {
  title: string;
  summary: string;
  date: string;
  link: string;
  publication: string;
}
