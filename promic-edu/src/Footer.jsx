import React from 'react';
import { FaWhatsapp, FaYoutube, FaTelegram } from 'react-icons/fa';
import promicLogo from './resources/promic-education-2.png';

const Footer = () => {
  return (
    // Removed animate-fade-in-up class to keep the code focused on responsiveness
    <footer className="bg-orange-500 text-white p-6 mt-12">
      <div className="container mx-auto">
        
        {/* Main Content Grid: Stacks on mobile, 3 columns on medium screens and up */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8">
          
          {/* Section 1: Logo and Social Media (Center on mobile, Left-align on desktop) */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img src={promicLogo} alt="Promic Education Logo" className="w-32 h-auto mb-4" />
            <div className="flex space-x-4">
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 text-3xl transition-colors duration-300">
                <FaWhatsapp />
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 text-3xl transition-colors duration-300">
                <FaYoutube />
              </a>
              <a href="https://t.me/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 text-3xl transition-colors duration-300">
                <FaTelegram />
              </a>
            </div>
          </div>

          {/* Section 2: Quick Links (Center on mobile, Left-align on desktop) */}
          <div className="mt-6 md:mt-0 text-center md:text-left"> 
            <h3 className="font-bold text-lg mb-4 uppercase tracking-wide">Quick Links</h3>
            {/* The list items need to be aligned center on mobile */}
            <ul className="space-y-2 flex flex-col items-center md:items-start">
              <li>
                <a 
                  href="/" 
                  className="inline-block px-2 py-1 rounded-md hover:bg-white hover:text-orange-500 transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="/courses" 
                  className="inline-block px-2 py-1 rounded-md hover:bg-white hover:text-orange-500 transition-colors duration-300"
                >
                  Courses
                </a>
              </li>
              <li>
                <a 
                  href="/vip-signals" 
                  className="inline-block px-2 py-1 rounded-md hover:bg-white hover:text-orange-500 transition-colors duration-300"
                >
                  VIP Signals
                </a>
              </li>
              <li>
                <a 
                  href="/contact" 
                  className="inline-block px-2 py-1 rounded-md hover:bg-white hover:text-orange-500 transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Section 3: Join Us Section (Center on mobile, Left-align on desktop) */}
          <div className="mt-6 md:mt-0 text-center md:text-left"> 
            <h3 className="font-bold text-lg mb-4 uppercase tracking-wide">Join Us</h3>
            <p className="text-base">To make your crypto trading journey successful.</p>
          </div>
        </div>

        {/* Horizontal Rule */}
        <hr className="border-t-2 border-white opacity-20 my-8" />

        {/* Copyright and Developed By (Flex/Order for better stacking on mobile) */}
        <div className="text-center text-sm flex flex-col md:flex-row md:justify-between md:items-center">
          {/* I've changed the order to display "Developed By" above copyright on mobile 
             and restored them to their original positions on desktop. */}
          <p className="order-2 md:order-1 mt-4 md:mt-0">&copy; 2025 Promic Education. All rights reserved.</p>
          <p className="order-1 md:order-2 mb-2 md:mb-0">Developed by <span className="font-semibold">Byte Orbit</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;