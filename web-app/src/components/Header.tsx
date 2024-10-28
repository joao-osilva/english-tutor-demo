import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center"
          >
            <img 
              src="/logo.svg" 
              alt="Ask Maya Logo" 
              className="h-8 w-auto"
            />
            <span className="ml-2 text-xl font-semibold text-gray-900">Ask Maya</span>
          </motion.div>
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden p-2 rounded-md text-gray-600 hover:text-apple-blue focus:outline-none"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          <nav className="hidden sm:block">
            <ul className="flex space-x-6">
              <li>
                <a 
                  href="#home" 
                  onClick={scrollToSection('home')}
                  className="text-gray-600 hover:text-apple-blue transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#features" 
                  onClick={scrollToSection('features')}
                  className="text-gray-600 hover:text-apple-blue transition-colors"
                >
                  Features
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="sm:hidden mt-4"
          >
            <ul className="flex flex-col space-y-4">
              <li>
                <a 
                  href="#home" 
                  onClick={scrollToSection('home')}
                  className="block text-gray-600 hover:text-apple-blue transition-colors py-2"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#features" 
                  onClick={scrollToSection('features')}
                  className="block text-gray-600 hover:text-apple-blue transition-colors py-2"
                >
                  Features
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </div>
    </header>
  );
};

export default Header;