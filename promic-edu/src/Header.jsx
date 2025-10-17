import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import telegramIcon from './resources/telegram.png';
import youtubeIcon from './resources/youtube.jpg';
import promicLogo from './resources/promic-education.jpg';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  // NEW: State to manage the mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Function to close the menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`
      fixed top-0 w-full z-50 transition-all duration-300
      ${scrolled ? 'bg-blue-950 shadow-lg' : 'bg-orange-500'}
    `}>
      <div className="container mx-auto flex justify-between items-center p-4">
        
        {/* Logo */}
        <Link to="/" onClick={closeMenu}>
          <img 
            src={promicLogo} 
            alt="Promic Education Logo" 
            className="h-10 transition-all duration-300" 
          />
        </Link>
        
        {/* NEW: Hamburger Button (Visible on Small Screens) */}
        <button 
          className="md:hidden text-white focus:outline-none p-2"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation"
        >
          {/* Hamburger Icon SVG or equivalent (3 bars / X icon) */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              // X icon when menu is open
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              // Hamburger icon when menu is closed
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Navigation Menu (Hidden on Mobile by default, controlled by state) */}
        <nav 
          id="mobile-menu"
          className={`
            absolute md:relative top-full left-0 w-full md:w-auto 
            md:block transition-all duration-300 ease-in-out overflow-hidden
            ${scrolled ? 'bg-blue-900 md:bg-transparent' : 'bg-orange-600 md:bg-transparent'}
            ${isMenuOpen ? 'max-h-screen border-t border-gray-700 md:border-t-0' : 'max-h-0 md:max-h-full'}
            
            md:flex md:items-center 
          `}
        >
          <ul className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4 text-lg p-4 md:p-0">
            {/* Nav Links */}
            {[
              { to: "/", label: "Home" },
              { to: "/courses", label: "Courses" },
              { to: "/vip-signals", label: "VIP Signals" },
              { to: "/contact", label: "Contact" },
            ].map((item) => (
              <li key={item.to}>
                <Link 
                  to={item.to} 
                  onClick={closeMenu} // Closes the menu on link click
                  className={`
                    block py-3 px-4 rounded transition-all duration-300 text-center
                    hover:bg-white hover:text-orange-600
                    ${scrolled ? 'text-white' : 'text-white'}
                  `}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            
            {/* Social Media Links (They will stack nicely on mobile too) */}
            <li className="flex justify-center md:hidden pt-4 pb-2 space-x-4">
              <a 
                href="https://www.youtube.com/@PromicEducation" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-colors duration-300 flex items-center justify-center 
                  ${scrolled ? 'bg-red-600 hover:bg-red-700' : 'bg-gray-800/80 hover:bg-red-600'}`}
              >
                <img src={youtubeIcon} alt="YouTube" className="w-5 h-5" />
              </a>
              <a 
                href="https://t.me/yourtelegramchannel" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-colors duration-300 flex items-center justify-center 
                  ${scrolled ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-800/80 hover:bg-blue-600'}`}
              >
                <img src={telegramIcon} alt="Telegram" className="w-5 h-5" />
              </a>
            </li>
          </ul>
        </nav>

        {/* Social Media Icons (Desktop only - visible only if space allows or you prefer them outside the menu) */}
        <div className="hidden md:flex items-center space-x-2 ml-4">
            <a 
                href="https://www.youtube.com/@PromicEducation" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-colors duration-300 flex items-center justify-center 
                    ${scrolled ? 'bg-red-600 hover:bg-red-700' : 'bg-gray-800/80 hover:bg-red-600'}`}
            >
                <img src={youtubeIcon} alt="YouTube" className="w-5 h-5" />
            </a>
            <a 
                href="https://t.me/yourtelegramchannel" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-colors duration-300 flex items-center justify-center 
                    ${scrolled ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-800/80 hover:bg-blue-600'}`}
            >
                <img src={telegramIcon} alt="Telegram" className="w-5 h-5" />
            </a>
        </div>
      </div>
    </header>
  );
};

export default Header;