import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Contact from './Contact'; 
import HeroSection from './HeroSection';
import { useInView } from 'react-intersection-observer';
import './CardFlip.css';

const HomePage = () => {
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: testimonialsRef, inView: testimonialsInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: coursesRef, inView: coursesInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [showVipDetails, setShowVipDetails] = useState(false);
  const [showCourseDetails, setShowCourseDetails] = useState(false);

  const vipDetails = [
    '80-90% ACCURATE SIGNALS',
    'SCALPING/SWING/DAY TRADE SIGNALS',
    '24/7 CUSTOMER SUPPORT',
    'PERSONAL GUIDANCE',
    'SPOT SIGNALS',
    'SPOT & FUTURE TRADING PLAN',
    'LIVE TRADING',
  ];

  const courseDetails = {
    duration: '14 days total',
    stages: [
      '1st Stage - 7 days',
      '2nd Stage - 6 days'
    ],
    includes: [
      'Live Trading Lifetime',
      'Classes via Zoom'
    ],
    timing: 'Classes start from 9:10 PM'
  };


  return (
    // Ensured w-screen and overflow-x-hidden are on the outermost div
    <div className="flex flex-col min-h-screen w-screen overflow-x-hidden bg-white"> 
      <Header />
      <HeroSection />

      {/* Added responsive padding for small screens (p-4) to main container */}
      <main className="container mx-auto p-4 sm:p-8 flex-grow"> 
        
        {/* Our Courses & Services Section */}
        <section 
          ref={coursesRef}
          id="courses" 
          className={`my-16 md:my-24 text-center transition-all duration-1000 ease-out 
            ${coursesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <p className="text-gray-500 mb-2">Our Courses & Services</p>
          {/* Adjusted text size for smaller screens for better fit */}
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12">ELEVATE YOUR TRADING JOURNEY</h2> 
          
          {/* Main Change: Ensure cards stack on mobile (flex-col) and revert to row (md:flex-row) */}
          <div className="flex flex-col md:flex-row justify-center items-stretch space-y-8 md:space-y-0 md:space-x-8"> 
            
            {/* Beginner to Advanced Trading Course Card - With 3D Flip */}
            {/* max-w-lg and w-full ensures it scales nicely on mobile */}
            <div 
              className="flip-card max-w-lg w-full"
              style={{ minHeight: '500px' }}
            >
              <div className={`flip-card-inner ${showCourseDetails ? 'flipped' : ''}`}>
                
                {/* Front of the card */}
                <div className="flip-card-front bg-gray-100 p-6 sm:p-8 rounded-2xl shadow-xl transition duration-300 transform hover:scale-105 flex flex-col">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Beginner to Advanced Trading Course</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed flex-grow text-sm sm:text-base">
                    This course will help you to master the basics of trading, SMC (Smart Money Concepts), and some concepts of ICT (Inner Circle Trader). It's designed for new and intermediate traders to build a strong foundation.
                  </p>
                  <p className="text-gray-600 mb-2 leading-relaxed flex-grow text-sm sm:text-base">
                    The course fee for a group online class - **Rs. 20,000/=**
                  </p>
                  <p className="text-gray-600 mb-4 leading-relaxed flex-grow text-sm sm:text-base">
                    The course fee for an individual online class - **Rs. 40,000/=**
                  </p>
                  <p className="text-red-600 mb-4 leading-relaxed flex-grow text-sm sm:text-base font-semibold">
                    VIP SIGNALS ARE NOT INCLUDED FOR THE COURSE FEE
                  </p>
                  <p className="text-gray-600 mb-4 leading-relaxed flex-grow text-sm sm:text-base">
                    For more course packages, navigate to **'Courses' page**
                  </p>
                  <button
                    onClick={() => setShowCourseDetails(true)}
                    className="bg-orange-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105
                             hover:bg-white hover:text-orange-600 hover:border-2 hover:border-orange-600 mt-auto text-sm sm:text-base"
                  >
                    More Details
                  </button>
                </div>

                {/* Back of the card */}
                <div className="flip-card-back bg-gray-100 p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col">
                  <button 
                    onClick={() => setShowCourseDetails(false)} 
                    className="flex items-center text-gray-600 font-bold mb-4 transition duration-200 hover:text-orange-600 focus:outline-none focus:ring-0 focus:shadow-none self-start text-sm sm:text-base"
                  >
                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                    </svg>
                    Go Back
                  </button>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Course Details</h3>
                  <div className="text-gray-600 text-left space-y-4 mb-4 flex-grow text-sm sm:text-base">
                    <p className="font-semibold">Duration: <span className="font-normal">{courseDetails.duration}</span></p>
                    <div>
                      <p className="font-semibold">Stages:</p>
                      <ul className="list-disc list-inside ml-4">
                        {courseDetails.stages.map((stage, index) => (
                          <li key={index}>{stage}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold">Included:</p>
                      <ul className="list-disc list-inside ml-4">
                        {courseDetails.includes.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <p className="font-semibold">Schedule: <span className="font-normal">{courseDetails.timing} via Zoom</span></p>
                  </div>
                  <a
                    href="#"
                    className="bg-orange-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105
                             hover:bg-white hover:text-orange-600 hover:border-2 hover:border-orange-600 mt-auto text-sm sm:text-base"
                  >
                    Enroll Now
                  </a>
                </div>
              </div>
            </div>

            {/* Premium VIP Signals Card - Now with 3D Flip */}
            <div 
              className="flip-card max-w-lg w-full"
              style={{ minHeight: '500px' }}
            >
              <div className={`flip-card-inner ${showVipDetails ? 'flipped' : ''}`}>
                
                {/* Front of the VIP card */}
                <div className="flip-card-front bg-gray-100 p-6 sm:p-8 rounded-2xl shadow-xl transition duration-300 transform hover:scale-105 flex flex-col">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">VIP Premium</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed flex-grow text-sm sm:text-base">
                    This package will provide with 80-90% accurate signals through the Telegram channel. Get high-probability trading setups and stay ahead of the market with our expert analysis.
                  </p>
                  <p className="text-gray-600 mb-2 leading-relaxed flex-grow text-sm sm:text-base">
                    VIP Signals for 6 months - **80$**
                  </p>
                  <p className="text-gray-600 mb-2 leading-relaxed flex-grow text-sm sm:text-base">
                    VIP Signals for 12 months - **100$** including free SMC course
                  </p>
                  <p className="text-gray-600 mb-4 leading-relaxed flex-grow text-sm sm:text-base">
                    VIP Signals for lifetime - **120$** including free SMC course + live trading program
                  </p>
                  <button
                    onClick={() => setShowVipDetails(true)}
                    className="bg-orange-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105
                             hover:bg-white hover:text-orange-600 hover:border hover:border-orange-600 mt-auto text-sm sm:text-base"
                  >
                    More Details
                  </button>
                </div>

                {/* Back of the VIP card */}
                <div className="flip-card-back bg-gray-100 p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col">
                  <button 
                    onClick={() => setShowVipDetails(false)} 
                    className="flex items-center text-gray-600 font-bold mb-4 transition duration-200 hover:text-orange-600 focus:outline-none focus:ring-0 focus:shadow-none self-start text-sm sm:text-base"
                  >
                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                    </svg>
                    Go Back
                  </button>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">VIP Details</h3>
                  <div className="text-gray-600 space-y-2 text-left mb-6 flex-grow text-sm sm:text-base">
                    <ul className="space-y-2">
                      {vipDetails.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-4 h-4 mt-1 mr-2 text-orange-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href="https://t.me/PROMIC_BROW"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-orange-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105
                             hover:bg-white hover:text-orange-600 hover:border-2 hover:border-orange-600 mt-auto text-sm sm:text-base"
                  >
                    Join Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section (Responsive) */}
        <section 
          ref={statsRef}
          id="statistics" 
          className={`my-16 md:my-24 text-center transition-all duration-1000 ease-out 
            ${statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {/* Main Change: Use grid-cols-2 for mobile, and grid-cols-4 for desktop */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8"> 
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg transition duration-300 transform hover:-translate-y-2 hover:shadow-xl">
              {/* Reduced font size for mobile statistics */}
              <h3 className="text-3xl sm:text-4xl font-bold text-orange-600">20+</h3> 
              <p className="text-gray-600 mt-2 text-xs sm:text-base">YOUTUBE LIVE SESSIONS</p>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg transition duration-300 transform hover:-translate-y-2 hover:shadow-xl">
              <h3 className="text-3xl sm:text-4xl font-bold text-orange-600">1,000+</h3>
              <p className="text-gray-600 mt-2 text-xs sm:text-base">COURSE STUDENTS</p>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg transition duration-300 transform hover:-translate-y-2 hover:shadow-xl">
              <h3 className="text-3xl sm:text-4xl font-bold text-orange-600">148</h3>
              <p className="text-gray-600 mt-2 text-xs sm:text-base">PAID VIP SIGNAL MEMBERS</p>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg transition duration-300 transform hover:-translate-y-2 hover:shadow-xl">
              <h3 className="text-3xl sm:text-4xl font-bold text-orange-600">200+</h3>
              <p className="text-gray-600 mt-2 text-xs sm:text-base">SMC COURSES COMPLETED</p>
            </div>
          </div>
        </section>

        {/* Testimonials Section (Responsive) */}
        <section 
          ref={testimonialsRef}
          id="testimonials" 
          className={`my-16 md:my-24 text-center transition-all duration-1000 ease-out
            ${testimonialsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <p className="text-gray-500 mb-2">Student's reviews</p>
          {/* Adjusted text size for smaller screens */}
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">WHAT STUDENTS SAY</h2> 
          <div className="flex justify-center my-4">
          </div>
          <p className="text-base sm:text-lg text-gray-700 mb-8">
            <br />
            Based on 100 reviews
          </p>
          
          {/* Main Change: Use grid-cols-1 for mobile, and grid-cols-3 for desktop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> 
            {/* Testimonial Card 1 */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-lg border-t-4 border-orange-500 transition-transform duration-300 transform hover:scale-105 text-left">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-orange-300 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-800">Rasindu</h4>
                  <p className="text-sm text-gray-500">2025-10-01</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Great institute to learn and improve. Best signal service"
              </p>
            </div>
            
            {/* Testimonial Card 2 */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-lg border-t-4 border-orange-500 transition-transform duration-300 transform hover:scale-105 text-left">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-orange-300 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-800">Yoshitha</h4>
                  <p className="text-sm text-gray-500">2025-09-23</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Highly recommended trading academy."
              </p>
            </div>
            
            {/* Testimonial Card 3 */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-lg border-t-4 border-orange-500 transition-transform duration-300 transform hover:scale-105 text-left">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-orange-300 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-800">Dhanushka</h4>
                  <p className="text-sm text-gray-500">2025-08-20</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Best place to start the trading journey."
              </p>
            </div>
          </div>
        </section>
      </main>

      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;