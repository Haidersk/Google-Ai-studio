
import React, { useState, useEffect, useRef } from 'react';
import { NAV_LINKS, PERSONAL_INFO } from '../constants';
import type { NavLink } from '../types';
import { SearchIcon } from './icons/SearchIcon';

interface HeaderProps {
  onSearchClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSearchClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    handleScroll(); // Set initial state
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerHeight = headerRef.current ? headerRef.current.offsetHeight : 72; // fallback height
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
    
    setIsMenuOpen(false);
  };

  const NavLinks: React.FC<{ links: NavLink[]; className?: string }> = ({ links, className }) => (
    <ul className={className}>
      {links.map((link) => (
        <li key={link.name}>
          <a
            href={link.href}
            onClick={(e) => handleNavLinkClick(e, link.href)}
            className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors duration-300 py-2 block"
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-md' 
          : 'bg-white dark:bg-gray-800'
      }`}
    >
      <nav className="container mx-auto px-6 md:px-12 py-4">
        <div className="flex justify-between items-center">
          <a href="#home" onClick={(e) => handleNavLinkClick(e, '#home')} className="flex items-center gap-3 group">
            <span className="bg-purple-600 text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-base transition-all duration-300 group-hover:bg-pink-500 group-hover:scale-110">H</span>
            <span className="text-xl font-bold text-gray-800 dark:text-white tracking-wide group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Haider</span>
          </a>
          <div className="hidden md:flex items-center space-x-6">
            <NavLinks links={NAV_LINKS} className="flex items-center space-x-6" />
            <button
              onClick={onSearchClick}
              className="text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
              aria-label="Open search"
            >
              <SearchIcon className="w-5 h-5" />
            </button>
             <a
                href="#contact"
                onClick={(e) => handleNavLinkClick(e, '#contact')}
                className="bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium py-2 px-5 rounded-lg shadow hover:opacity-90 transition-opacity"
            >
                Contact
            </a>
          </div>
          <div className="md:hidden flex items-center gap-4">
             <button
                onClick={onSearchClick}
                className="text-gray-600 dark:text-gray-300 focus:outline-none"
                aria-label="Open search"
            >
                <SearchIcon className="w-6 h-6" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 dark:text-gray-300 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg">
            <NavLinks links={NAV_LINKS} className="flex flex-col space-y-2" />
             <a
                href="#contact"
                onClick={(e) => handleNavLinkClick(e, '#contact')}
                className="w-full mt-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium py-2 px-5 rounded-lg shadow hover:opacity-90 transition-opacity block text-center"
            >
                Contact
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;