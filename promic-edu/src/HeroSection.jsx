// src/HeroSection.jsx
import React from 'react';
import tradingVideo from './resources/trading-video.mp4'; 

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={tradingVideo}
      ></video>

      {/* Video Overlay with Gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-blue-950/80 to-blue-900/60"></div>
      
      {/* Centered Content with a higher z-index to be on top of the video and overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-20 px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-wide mb-4">
          Promic Education
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-light mb-8 max-w-2xl">
          The best institute for your trading journey
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-center">
          {/* Our Services Button - New Orange & White Theme */}
          <a href="#services" className="
            bg-orange-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 hover:bg-orange-700
          ">
            OUR SERVICES
          </a>

          {/* Contact Us Button - New Orange & White Theme */}
          <a href="#contact" className="
            bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 hover:bg-white hover:text-orange-600
          ">
            CONTACT US
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;