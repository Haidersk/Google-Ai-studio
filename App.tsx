import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import GithubRepos from './components/GithubRepos';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Search from './components/Search';
import { SECTIONS } from './constants';
import DemoModal from './components/DemoModal';
import { useTheme } from './hooks/useTheme';

const App: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [theme, toggleTheme] = useTheme();

  const handleEditClick = () => {
    setIsDemoModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-slate-900 text-gray-800 dark:text-gray-200">
      <Header 
        onSearchClick={() => setIsSearchOpen(true)}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="bg-white dark:bg-gray-800/50 dark:backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-transparent dark:border-gray-700/50">
            <Hero onEditClick={handleEditClick} />
            <About id={SECTIONS.about} />
            <Skills id={SECTIONS.skills} />
            <Projects id={SECTIONS.projects} />
            <GithubRepos id={SECTIONS.github} />
            <Contact id={SECTIONS.contact} />
        </div>
      </main>
      <Footer />
      <Search isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        message="This feature is for demonstration purposes only. In a real application, this would open a form to edit profile details."
      />
    </div>
  );
};

export default App;