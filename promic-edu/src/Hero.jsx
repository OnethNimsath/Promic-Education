// src/Hero.jsx
import React from 'react';
import tradingVideo from './resources/trading-video.mp4'; 

const Hero = () => {
  return (
    <section className="relative w-full h-screen">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={tradingVideo}
      ></video>

      {/* Video Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-blue-950/80 to-blue-900/60"></div>
      
      {/* Hero Content (This is the part that was previously in HomePage.jsx) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-20 px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-wide mb-4">
          eBirth Business Academy
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-light mb-8 max-w-2xl">
          Where Dreams Take Flight and Entrepreneurs Are Born
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <a href="#services" className="
            relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium 
            text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 
            group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800
          ">
            <span className="
              relative px-5 py-2.5 transition-all ease-in duration-75 
              bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0
            ">
              OUR SERVICES
            </span>
          </a>

          <a href="#contact" className="
            relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium 
            text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 
            group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800
          ">
            <span className="
              relative px-5 py-2.5 transition-all ease-in duration-75 
              bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0
            ">
              CONTACT US
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;