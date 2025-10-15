// src/HomePage.jsx
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Contact from './Contact'; 
import HeroSection from './HeroSection';
import { useInView } from 'react-intersection-observer';

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

  const vipDetails = [
    '95%- 99% ACCURACY',
    'SCALPING/SWING/DAY SIGNALS',
    '24/7 CUSTOMER SUPPORT',
    'PERSONAL GUIDENCE',
    'SPOT/FUTURES SIGNALS',
    'SPOT/FUTUERS TRADING PLAN',
    'LIVE TRADING',
  ];

  const telegramLink = 'https://t.me/yourtelegramchannel'; // Replace with your actual Telegram link

  return (
    <div className="flex flex-col min-h-screen w-screen overflow-x-hidden bg-white">
      <Header />
      <HeroSection />

      <main className="container mx-auto p-8 flex-grow">
        
        {/* Our Courses & Services Section */}
        <section 
          ref={coursesRef}
          id="courses" 
          className={`my-16 md:my-24 text-center transition-all duration-1000 ease-out 
            ${coursesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <p className="text-gray-500 mb-2">Our Courses & Services</p>
          <h2 className="text-4xl font-bold text-gray-800 mb-12">BEGIN YOUR TRADING JOURNEY</h2>
          
          <div className="flex flex-col md:flex-row justify-center items-stretch space-y-8 md:space-y-0 md:space-x-8">
            {/* Beginner to Advanced Trading Course Card */}
            <div className="bg-gray-100 p-8 rounded-2xl shadow-xl max-w-lg w-full transition duration-300 transform hover:scale-105 flex flex-col">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Beginner to Advanced Trading Course</h3>
              <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                This course will help you to **master the basics of trading, SMC (Smart Money Concepts), and some concepts of ICT (Inner Circle Trader).** It's designed for new and intermediate traders to build a strong foundation.
              </p>
              <a href="#" className="bg-orange-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 hover:bg-orange-700 mt-auto">
                More Details
              </a>
            </div>

            {/* Premium VIP Signals Card with Toggleable Content */}
            <div className="bg-gray-100 p-8 rounded-2xl shadow-xl max-w-lg w-full transition duration-300 transform hover:scale-105 flex flex-col">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">VIP Premium</h3>

              {showVipDetails ? (
                // Detailed list when showVipDetails is true
                <>
                  <button 
                    onClick={() => setShowVipDetails(false)} 
                    className="flex items-center text-gray-600 font-bold mb-4 transition duration-200 hover:text-orange-600 focus:outline-none focus:ring-0 focus:shadow-none"
                  >
                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                    </svg>
                    Go Back
                  </button>
                  <div className="text-gray-600 space-y-2 text-left mb-6 flex-grow overflow-y-auto custom-scrollbar">
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
                    href={telegramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-orange-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 hover:bg-orange-700 mt-auto"
                  >
                    Join Now
                  </a>
                </>
              ) : (
                // Initial content when showVipDetails is false
                <>
                  <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                    This package will provide with **95-99% accurate signals** through the Telegram channel. Get high-probability trading setups and stay ahead of the market with our expert analysis.
                  </p>
                  <button
                    onClick={() => setShowVipDetails(true)}
                    className="bg-orange-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 hover:bg-orange-700 mt-auto"
                  >
                    More Details
                  </button>
                </>
              )}
            </div>
          </div>
        </section>

        {/* Statistics Section (Original) */}
        <section 
          ref={statsRef}
          id="statistics" 
          className={`my-16 md:my-24 text-center transition-all duration-1000 ease-out 
            ${statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg transition duration-300 transform hover:-translate-y-2 hover:shadow-xl">
              <h3 className="text-4xl font-bold text-orange-600">20+</h3>
              <p className="text-gray-600 mt-2">YOUTUBE LIVE SESSIONS</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transition duration-300 transform hover:-translate-y-2 hover:shadow-xl">
              <h3 className="text-4xl font-bold text-orange-600">1,000+</h3>
              <p className="text-gray-600 mt-2">COURSE STUDENTS</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transition duration-300 transform hover:-translate-y-2 hover:shadow-xl">
              <h3 className="text-4xl font-bold text-orange-600">100+</h3>
              <p className="text-gray-600 mt-2">PAID VIP SIGNAL MEMBERS</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transition duration-300 transform hover:-translate-y-2 hover:shadow-xl">
              <h3 className="text-4xl font-bold text-orange-600">200+</h3>
              <p className="text-gray-600 mt-2">SMC COURSES COMPLETED</p>
            </div>
          </div>
        </section>

        {/* Testimonials Section (Original) */}
        <section 
          ref={testimonialsRef}
          id="testimonials" 
          className={`my-16 md:my-24 text-center transition-all duration-1000 ease-out
            ${testimonialsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <p className="text-gray-500 mb-2">Student's reviews</p>
          <h2 className="text-4xl font-bold text-gray-800">WHAT STUDENTS SAY</h2>
          <div className="flex justify-center my-4">
          </div>
          <p className="text-lg text-gray-700 mb-8">
            <br />
            Based on 100 reviews
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl shadow-lg border-t-4 border-orange-500 transition-transform duration-300 transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-orange-300 mr-4"></div>
                <div>
                  <h4 className="font-bold text-gray-800">Rasindu</h4>
                  <p className="text-sm text-gray-500">2025-10-01</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Great institute to learn and improve. Best signal service"
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl shadow-lg border-t-4 border-orange-500 transition-transform duration-300 transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-orange-300 mr-4"></div>
                <div>
                  <h4 className="font-bold text-gray-800">Yoshitha</h4>
                  <p className="text-sm text-gray-500">2025-09-23</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Highly recommended trading academy."
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl shadow-lg border-t-4 border-orange-500 transition-transform duration-300 transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-orange-300 mr-4"></div>
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