import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Contact from './Contact';
import { CheckCircleIcon } from '@heroicons/react/24/outline'; // Importing an icon for list items
import whatsappIcon from './resources/whatsapp.jpg'; // Import the new WhatsApp image icon
import courseVideo from './resources/course-video-2.mp4'; // Import the new video file

const CoursePage = () => {

  const recommendedPackages = [
    { name: "Course + VIP 2 Month (Group Online)", price: "Rs 30,000" },
    { name: "Course + VIP 6 Month (Group Online)", price: "Rs 40,000", discount: "Discount 5,000/=" },
    { name: "Course + VIP Lifetime (Group Online)", price: "Rs 50,000", discount: "Discount 7,200/=" },
  ];
  
  // Base styling for all new buttons, updated with the consistent hover effect
  const buttonClass = "bg-orange-600 text-white font-semibold py-3 px-6 rounded-full text-sm transition duration-300 transform hover:scale-105 hover:bg-white hover:text-orange-600 hover:border-2 hover:border-orange-600 mt-4 w-full text-center";

  // Base styling for the smaller package buttons
  const packageButtonClass = "bg-green-600 text-white font-semibold py-1 px-4 rounded-full text-sm transition duration-300 hover:bg-white hover:text-green-600 hover:border-2 hover:border-green-600 w-full sm:w-auto text-center";

  // WhatsApp Group Link
  const whatsappLink = "https://chat.whatsapp.com/FEvDV7Zw5GLDCrVEADFRiX";

  return (
    <div className="flex flex-col min-h-screen w-screen overflow-x-hidden bg-white">
      <Header />
      
      <main className="container mx-auto p-8 flex-grow">
        
        {/* Course Page Hero Section with Video Background */}
        <section className="relative text-center py-16 md:py-24 overflow-hidden rounded-xl shadow-lg">
          
          {/* Video Background */}
          <div className="absolute inset-0 z-0">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover opacity-30" // Reduced opacity for readability
            >
              <source src={courseVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Content with Z-index to layer it over the video */}
          <div className="relative z-10 text-gray-900 bg-white/70 p-8 rounded-xl backdrop-blur-sm mx-auto max-w-4xl">
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

        {/* Course Details Section */}
        <section className="my-16 md:my-24 bg-gray-100 p-8 rounded-2xl shadow-xl max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Course Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">What You Will Learn</h3>
              <ul className="text-gray-600 space-y-2 list-disc list-inside">
                <li>Master the basics of trading, SMC (Smart Money Concepts), and ICT (Inner Circle Trader) principles.</li>
                <li>Build a strong trading foundation and develop a personal trading plan.</li>
                <li>Hands-on experience with live trading sessions.</li>
                <li>Learn technical analysis and market psychology.</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Course Structure & Schedule</h3>
              <ul className="text-gray-600 space-y-2 list-disc list-inside">
                <li>Total Duration: **14 days**</li>
                <li>1st Stage: **7 days** - Foundational concepts and basic strategies.</li>
                <li>2nd Stage: **6 days** - Advanced concepts and strategy implementation.</li>
                <li>Live Trading: **Lifetime** access to our live trading program.</li>
                <li>Class Timing: Classes start from **9:10 PM via Zoom**.</li>
              </ul>
            </div>

            {/* Base Pricing Section */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Pricing & Packages</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
                  <div>
                    <p className="text-lg font-semibold text-gray-800 mb-2">Group Online Class (Course Only)</p>
                    <p className="text-orange-600 text-3xl font-bold">Rs. 20,000/=</p>
                    <p className="text-gray-500 mt-2">Perfect for learning with a community. (VIP Signals not included)</p>
                  </div>
                  {/* Uses the updated buttonClass */}
                  <a href="#" className={buttonClass}>Enroll Now</a>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
                  <div>
                    <p className="text-lg font-semibold text-gray-800 mb-2">Individual Online Class (Course Only)</p>
                    <p className="text-orange-600 text-3xl font-bold">Rs. 40,000/=</p>
                    <p className="text-gray-500 mt-2">Personalized guidance and one-on-one support. (VIP Signals not included)</p>
                  </div>
                  {/* Uses the updated buttonClass */}
                  <a href="#" className={buttonClass}>Enroll Now</a>
                </div>
              </div>
            </div>
            
            {/* NEW Recommended Packages Section */}
            <div className="md:col-span-2 mt-8">
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
                            {/* Uses the packageButtonClass, updated with consistent hover styling */}
                            <a href="#" className={packageButtonClass}>
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

        {/* WhatsApp Group Section */}
        <section className="text-center my-16 md:my-24 p-6 bg-green-50 rounded-xl shadow-lg max-w-xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Join Our Public Community!</h2>
            <p className="text-lg text-gray-700 mb-6">
                Connect with other students, ask questions, and get free insights into the market.
            </p>
            <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 hover:bg-green-700 inline-flex items-center justify-center"
            >
                <img src={whatsappIcon} alt="WhatsApp Icon" className="h-6 w-6 mr-2" />
                Join WhatsApp Group
            </a>
        </section>


        {/* Call to Action Section */}
        <section className="text-center my-16 md:my-24">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Ready to Start Your Journey?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Join our course and become a profitable trader.
          </p>
          <a
            href="#" // Add your enrollment link here
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
