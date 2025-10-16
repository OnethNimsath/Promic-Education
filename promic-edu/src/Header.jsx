import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for internal routing
import telegramIcon from './resources/telegram.png';
import youtubeIcon from './resources/youtube.jpg';
import promicLogo from './resources/promic-education.jpg';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <header className={`
      fixed top-0 w-full z-50 transition-all duration-300
      ${scrolled ? 'bg-blue-950 shadow-lg' : 'bg-orange-500'}
    `}>
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo link changed to use Link for home route */}
        <Link to="/">
          <img src={promicLogo} alt="Promic Education Logo" className="h-10" />
        </Link>
        <nav>
          <ul className="flex items-center space-x-4 text-lg">
            <li>
              {/* Home link updated to use Link */}
              <Link 
                to="/" 
                className={`
                  block py-2 px-4 rounded transition-all duration-300 
                  hover:bg-white hover:text-orange-600
                  ${scrolled ? 'text-white' : 'text-white'}
                `}
              >
                Home
              </Link>
            </li>
            <li>
              {/* Courses link updated to use Link pointing to /courses */}
              <Link 
                to="/courses" 
                className={`
                  block py-2 px-4 rounded transition-all duration-300 
                  hover:bg-white hover:text-orange-600
                  ${scrolled ? 'text-white' : 'text-white'}
                `}
              >
                Courses
              </Link>
            </li>
            <li>
              {/* VIP Signals link UPDATED to point to /vip-signals */}
              <Link 
                to="/vip-signals" 
                className={`
                  block py-2 px-4 rounded transition-all duration-300 
                  hover:bg-white hover:text-orange-600
                  ${scrolled ? 'text-white' : 'text-white'}
                `}
              >
                VIP Signals
              </Link>
            </li>
            <li>
              {/* Contact link updated to use Link pointing to /contact route */}
              <Link 
                to="/contact" 
                className={`
                  block py-2 px-4 rounded transition-all duration-300 
                  hover:bg-white hover:text-orange-600
                  ${scrolled ? 'text-white' : 'text-white'}
                `}
              >
                Contact
              </Link>
            </li>
            {/* Buttons (kept as regular <a> tags for external links) */}
            <li>
              <a 
                href="https://www.youtube.com/@PromicEducation" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-colors duration-300 flex items-center justify-center 
                  ${scrolled ? 'bg-red-600 hover:bg-red-700' : 'bg-gray-800/80 hover:bg-red-600'}`}
              >
                <img src={youtubeIcon} alt="YouTube" className="w-5 h-5" />
              </a>
            </li>
            <li>
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
      </div>
    </header>
  );
};

export default Header;