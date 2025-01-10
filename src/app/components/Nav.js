"use client";
import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light'); // Default theme is light
  const [language, setLanguage] = useState('en'); // Default language is English

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', theme === 'light');
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    // Implement the actual language switch logic here if necessary
  };

  return (
    <nav className={`bg-white bg-opacity-10 text-white shadow-md w-[80%] rounded-full m-auto mt-20 ${theme === 'dark' ? 'dark' : ''}`}>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-white h-[30px] w-[30px]">
              <img src='/logo.png' alt='logo' className='max-h-full max-w-full rounded-full' />
            </a>
          </div>

          {/* Navbar links for larger screens */}
          <div className="hidden sm:flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white">Home</a>
            <a href="#" className="text-gray-300 hover:text-white">About</a>
            <a href="#" className="text-gray-300 hover:text-white">Services</a>
            <a href="#" className="text-gray-300 hover:text-white">Contact</a>
          </div>

          {/* Right section: Language Selector and Theme Toggle */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <select 
              value={language} 
              onChange={handleLanguageChange} 
              className="bg-transparent text-white border border-gray-300 p-2 rounded"
            >
              <option value="en">EN</option>
              <option value="es">AM</option>
              <option value="fr">OR</option>
              {/* Add more languages as needed */}
            </select>

            {/* Theme Toggle Button (Sun/Moon) */}
            <button 
              onClick={toggleTheme} 
              className="text-gray-300 hover:text-white"
            >
              {theme === 'light' ? (
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42M12 6a6 6 0 1 1 0 12 6 6 0 0 1 0-12z"></path>
                </svg>
              ) : (
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path d="M12 3v3M12 18v3M3 12h3M18 12h3M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42M12 6a6 6 0 1 1 0 12 6 6 0 0 1 0-12z"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-gray-800 text-white px-2 pt-2 pb-3 space-y-1">
          <a href="#" className="block text-gray-300 hover:text-white">Home</a>
          <a href="#" className="block text-gray-300 hover:text-white">About</a>
          <a href="#" className="block text-gray-300 hover:text-white">Services</a>
          <a href="#" className="block text-gray-300 hover:text-white">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
