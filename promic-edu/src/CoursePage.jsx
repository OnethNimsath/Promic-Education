import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Contact from './Contact';
import { CheckCircleIcon } from '@heroicons/react/24/outline'; // Importing an icon for list items
import whatsappIcon from './resources/whatsapp.jpg'; // Import the new WhatsApp image icon
import courseVideo from './resources/course-video-2.mp4'; // Import the new video file
import youtubeIcon from './resources/youtube.jpg'; // Import the YouTube image icon

const CoursePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set isLoaded to true shortly after component mounts to trigger animations
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100); 
    return () => clearTimeout(timer);
  }, []);

  const visibleClass = isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8';

  const youtubeVideos = [
    { 
      id: '1QEjOeWVB-w',
      type: 'live',
      title: 'Crypto Live Session - Market Analysis & Q&A',
      url: 'https://www.youtube.com/live/1QEjOeWVB-w?si=0CJgqorL8DYLEzt6'
    },
    { 
      id: 'd3YpdiUaizw',
      type: 'shorts',
      title: 'Quick Swing Trade Setup (Shorts)',
      url: 'https://youtube.com/shorts/d3YpdiUaizw?si=hocBVEN0mgEOrIM3'
    },
    { 
      id: 'pWUe03g699Y',
      type: 'shorts',
      title: 'Beginner Trading Tip (Shorts)',
      url: 'https://youtube.com/shorts/pWUe03g699Y?si=rJhurATnpY-232jK'
    },
    { 
      id: 'dbH4aHNEFiI',
      type: 'video',
      title: 'Understanding the Market Structure',
      url: 'https://youtu.be/dbH4aHNEFiI?si=Hd0DEYd0i22nqZYT'
    },
  ];

  const tiktokVideos = [
    { 
      id: 'ZSUHqeBDe',
      title: 'Top Crypto Trading Tip for Beginners',
      url: 'https://vt.tiktok.com/ZSUHqeBDe/'
    },
    { 
      id: 'ZSUHVTCkg',
      title: 'Daily Market Update (Short)',
      url: 'https://vt.tiktok.com/ZSUHVTCkg/'
    },
    { 
      id: 'ZSUHVKrKc',
      title: 'Why Risk Management Matters',
      url: 'https://vt.tiktok.com/ZSUHVKrKc/'
    },
    { 
      id: 'ZSUHVKqGm',
      title: 'Scalping Strategy Explained',
      url: 'https://vt.tiktok.com/ZSUHVKqGm/'
    },
  ];

  const recommendedPackages = [
    { name: "Course + VIP 2 Month (Group Online)", price: "Rs 30,000" },
    { name: "Course + VIP 6 Month (Group Online)", price: "Rs 40,000", discount: "Discount 5,000/=" },
    { name: "Course + VIP Lifetime (Group Online)", price: "Rs 50,000", discount: "Discount 7,200/=" },
  ];
  
  // WhatsApp Configuration
  const WHATSAPP_NUMBER = "94774892554"; // Sri Lankan format (077 489 2554) without +, 0, or spaces
  
  const generateWhatsappLink = (packageName) => {
    const encodedMessage = encodeURIComponent(packageName);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=I%20am%20interested%20in%20the%20${encodedMessage}%20package.`;
  };

  // Base styling for buttons
  const buttonClass = "bg-orange-600 text-white font-semibold py-3 px-6 rounded-full text-sm transition duration-300 transform hover:scale-105 hover:bg-white hover:text-orange-600 hover:border-2 hover:border-orange-600 mt-4 w-full text-center";
  const packageButtonClass = "bg-green-600 text-white font-semibold py-1 px-4 rounded-full text-sm transition duration-300 hover:scale-105 hover:bg-white hover:text-green-600 hover:border-2 hover:border-green-600 w-full sm:w-auto text-center";
  
  // Updated YouTube Channel Link
  const youtubeChannelLink = "https://www.youtube.com/@promiceducation5316";
  const tiktokChannelLink = "https://www.tiktok.com/@yourtiktokchannel"; // Placeholder TikTok channel link
  
  // Function to generate the YouTube thumbnail URL
  const getThumbnailUrl = (videoId) => {
    // Standard HQ thumbnail path for YouTube videos
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  };


  return (
    <div className="flex flex-col min-h-screen w-screen overflow-x-hidden bg-white">
      <Header />
      
      <main className="container mx-auto p-8 flex-grow">
        
        {/* Course Page Hero Section with Video Background - ANIMATED (Delay 50ms) */}
        <section className={`relative text-center py-16 md:py-24 overflow-hidden rounded-xl shadow-lg transition-all duration-1000 ${visibleClass} delay-[50ms]`}>
          
          {/* Video Background */}
          <div className="absolute inset-0 z-0">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover opacity-30"
            >
              <source src={courseVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Content with Z-index to layer it over the video */}
          <div className="relative z-10 text-gray-900 bg-white/70 p-8 rounded-xl backdrop-blur-sm mx-auto max-w-4xl transition duration-1000">
            <p className="text-gray-600 mb-2 font-medium">Our Comprehensive Program</p>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              BEGINNER TO ADVANCED TRADING COURSE
            </h1>
            <p className="text-lg text-gray-800 max-w-3xl mx-auto">
              Our flagship course is designed to take you from a complete beginner to a confident trader.
              Master the fundamentals of cryptocurrency trading, advanced strategies, and real-time market analysis.
            </p>
          </div>
        </section>
        
        {/* NEW: YouTube Video List Section - ANIMATED (Delay 150ms) */}
        <section className={`my-16 md:my-24 text-center transition-all duration-1000 ${visibleClass} delay-150`}>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Free Educational Content (YouTube)</h2>
            <p className="text-gray-600 mb-8">Watch our latest videos and analysis sessions for free!</p>

            {/* Video Carousel Wrapper - Fixed centering issue using grid layout on md screens and above */}
            <div className="flex justify-center w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 pb-4 max-w-6xl">
                {youtubeVideos.map((video) => (
                  <a 
                    key={video.id}
                    href={video.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-shrink-0 w-full p-3 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-[1.02]"
                  >
                    <div className="relative w-full h-36 bg-gray-300 rounded-lg overflow-hidden mb-3">
                      {/* Updated to use the actual YouTube thumbnail URL */}
                      <img 
                        src={getThumbnailUrl(video.id)} 
                        alt={`Thumbnail for ${video.title}`} 
                        className="w-full h-full object-cover"
                        // Fallback in case thumbnail fails to load
                        onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/256x144/1a1a1a/ffffff?text=Video+${video.type.toUpperCase()}` }}
                      />
                      <div className="absolute top-1 right-1 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded">
                          {video.type === 'live' ? 'LIVE' : (video.type === 'shorts' ? 'SHORT' : 'VIDEO')}
                      </div>
                    </div>
                    <p className="text-sm font-semibold text-gray-800 truncate">{video.title}</p>
                  </a>
                ))}
              </div>
            </div>

            {/* YouTube Channel Button */}
            <a
              href={youtubeChannelLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 mx-auto inline-flex items-center justify-center 
                         bg-red-600 text-white font-semibold py-3 px-8 rounded-full text-lg 
                         transition duration-300 transform hover:scale-105 
                         hover:bg-white hover:text-red-600 hover:border-2 hover:border-red-600"
            >
              <img src={youtubeIcon} alt="YouTube Icon" className="h-6 w-6 mr-2" />
              Visit Our YouTube Channel
            </a>
        </section>
        
        {/* NEW: TikTok Video List Section - ANIMATED (Delay 200ms) */}
        <section className={`my-16 md:my-24 text-center transition-all duration-1000 ${visibleClass} delay-200`}>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Free Educational Content (TikTok)</h2>
            <p className="text-gray-600 mb-8">Follow us on TikTok for short, high-impact trading tips!</p>

            {/* Video Grid (4 columns) */}
            <div className="flex justify-center w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 pb-4 max-w-6xl">
                {tiktokVideos.map((video) => (
                  <a 
                    key={video.id}
                    href={video.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-shrink-0 w-full p-3 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-[1.02]"
                  >
                    <div className="relative w-full h-36 bg-black rounded-lg overflow-hidden mb-3">
                      {/* Using Placeholder as reliable TikTok thumbnail extraction requires complex logic */}
                      <img 
                        src={`https://placehold.co/256x144/000000/ffffff?text=TikTok+Video`} 
                        alt={`Thumbnail for ${video.title}`} 
                        className="w-full h-full object-cover opacity-0" // Set opacity to 0 on image to hide placeholder text
                        // Fallback in case thumbnail fails to load
                        onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/256x144/000000/ffffff?text=TikTok+Video` }}
                      />
                      {/* Placeholder Text overlaid on the div with solid background */}
                      <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold">
                        TikTok Video
                      </div>
                      <div className="absolute top-1 right-1 bg-black text-white text-xs font-bold px-2 py-0.5 rounded">
                          TIKTOK
                      </div>
                    </div>
                    <p className="text-sm font-semibold text-gray-800 truncate">{video.title}</p>
                  </a>
                ))}
              </div>
            </div>

            {/* TikTok Channel Button */}
            <a
              href={tiktokChannelLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 mx-auto inline-flex items-center justify-center 
                         bg-black text-white font-semibold py-3 px-8 rounded-full text-lg 
                         transition duration-300 transform hover:scale-105 hover:bg-gray-800"
            >
              {/* Simple TikTok icon placeholder */}
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M16 0H8C3.58 0 0 3.58 0 8v8c0 4.42 3.58 8 8 8h8c4.42 0 8-3.58 8-8V8c0-4.42-3.58-8-8-8zm4.5 9.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5v-2c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v2zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm-3.5-6.5c0-.28.22-.5.5-.5h6c.28 0 .5.22.5.5v3c0 .28-.22.5-.5.5h-6c-.28 0-.5-.22-.5-.5v-3z"/></svg>
              Visit Our TikTok Channel
            </a>
        </section>


        {/* Course Details Section - ANIMATED (Delay 300ms) */}
        <section className={`my-16 md:my-24 bg-gray-100 p-8 rounded-2xl shadow-xl max-w-4xl mx-auto transition-all duration-1000 ${visibleClass} delay-[300ms]`}>
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Course Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <div className="transition duration-700">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">What You Will Learn</h3>
              <ul className="text-gray-600 space-y-2 list-disc list-inside">
                <li>Master the basics of trading, SMC (Smart Money Concepts), and ICT (Inner Circle Trader) principles.</li>
                <li>Build a strong trading foundation and develop a personal trading plan.</li>
                <li>Hands-on experience with live trading sessions.</li>
                <li>Learn technical analysis and market psychology.</li>
              </ul>
            </div>
            
            <div className="transition duration-700">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Course Structure & Schedule</h3>
              <ul className="text-gray-600 space-y-2 list-disc list-inside">
                <li>Total Duration: 14 days</li>
                <li>1st Stage: 7 days - Foundational concepts and basic strategies.</li>
                <li>2nd Stage: 6 days - Advanced concepts and strategy implementation.</li>
                <li>Live Trading: Lifetime access to our live trading program.</li>
                <li>Class Timing: Classes start from 9:10 PM via Zoom.</li>
              </ul>
            </div>

            {/* Base Pricing Section */}
            <div className="md:col-span-2 transition duration-700">
              <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Pricing & Packages</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Group Online Class */}
                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
                  <div>
                    <p className="text-lg font-semibold text-gray-800 mb-2">Group Online Class (Course Only)</p>
                    <p className="text-orange-600 text-3xl font-bold">Rs. 20,000/=</p>
                    <p className="text-gray-500 mt-2">Perfect for learning with a community. (VIP Signals not included)</p>
                  </div>
                  <a href={generateWhatsappLink("Group Online Class (Course Only)")} target="_blank" rel="noopener noreferrer" className={buttonClass}>Enroll Now</a>
                </div>
                {/* Individual Online Class */}
                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
                  <div>
                    <p className="text-lg font-semibold text-gray-800 mb-2">Individual Online Class (Course Only)</p>
                    <p className="text-orange-600 text-3xl font-bold">Rs. 40,000/=</p>
                    <p className="text-gray-500 mt-2">Personalized guidance and one-on-one support. (VIP Signals not included)</p>
                  </div>
                  <a href={generateWhatsappLink("Individual Online Class (Course Only)")} target="_blank" rel="noopener noreferrer" className={buttonClass}>Enroll Now</a>
                </div>
              </div>
            </div>
            
            {/* NEW Recommended Packages Section */}
            <div className="md:col-span-2 mt-8 transition duration-700">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">RECOMMENDED PACKAGES</h3>
              <div className="space-y-4">
                {recommendedPackages.map((pkg, index) => (
                  <div key={index} className="flex items-start p-4 bg-orange-50 rounded-lg shadow-sm flex-col sm:flex-row sm:items-center sm:space-x-4">
                    <CheckCircleIcon className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5 mr-3" />
                    <div className="flex justify-between w-full flex-col sm:flex-row sm:items-center">
                        <span className="font-semibold text-gray-800">{pkg.name}</span>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 mt-2 sm:mt-0">
                            <div className="flex items-center space-x-4">
                                {pkg.discount && <span className="text-sm font-medium text-red-500">{pkg.discount}</span>}
                                <span className="text-lg font-bold text-orange-600">{pkg.price}</span>
                            </div>
                            <a 
                                href={generateWhatsappLink(pkg.name)} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className={packageButtonClass}
                            >
                                Enroll Now
                            </a>
                        </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* WhatsApp Group Section - ANIMATED (Delay 400ms) */}
        <section className={`text-center my-16 md:my-24 p-6 bg-green-50 rounded-xl shadow-lg max-w-xl mx-auto transition-all duration-1000 ${visibleClass} delay-400`}>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Join Our Public Community!</h2>
            <p className="text-lg text-gray-700 mb-6">
                Connect with other students, ask questions, and get free insights into the market.
            </p>
            <a
                href="https://chat.whatsapp.com/FEvDV7Zw5GLDCrVEADFRiX"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 hover:bg-white hover:text-green-600 hover:border-2 hover:border-green-600 inline-flex items-center justify-center"
            >
                <img src={whatsappIcon} alt="WhatsApp Icon" className="h-6 w-6 mr-2" />
                Join WhatsApp Group
            </a>
        </section>


        {/* Call to Action Section - ANIMATED (Delay 550ms) */}
        <section className={`text-center my-16 md:my-24 transition-all duration-1000 ${visibleClass} delay-[550ms]`}>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Ready to Start Your Journey?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Join our course and become a profitable trader.
          </p>
          <a
            href={generateWhatsappLink("main course/enrollment")} // Specific message for general CTA
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-600 text-white font-semibold py-4 px-12 rounded-full text-lg transition duration-300 transform hover:scale-105 hover:bg-white hover:text-orange-600 hover:border-2 hover:border-orange-600"
          >
            Enroll Now
          </a>
        </section>

      </main>

      <Contact />
      <Footer />
    </div>
  );
};

export default CoursePage;