import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Contact from './Contact';
import { CheckCircleIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import vipsignalsVideo from './resources/vipsignals-video.mp4'; // NEW: Import video file
import { Helmet } from 'react-helmet-async'; // NEW: Import Helmet

const VipSignalsPage = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Set isLoaded to true shortly after component mounts to trigger animations
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 100); 
        return () => clearTimeout(timer);
    }, []);

    const visibleClass = isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8';

    const features = [
        "80%- 90% ACCURACY",
        "SCALPING/SWING/DAY SIGNALS",
        "24/7 CUSTOMER SUPPORT",
        "PERSONAL GUIDENCE",
        "SPOT/FUTURES SIGNALS",
        "SPOT/FUTURES TRADING PLAN",
        "LIVE TRADING",
    ];

    // UPDATED Pricing Structure
    const packagePricing = [
        { 
            name: "6 Month Signal Access", 
            price: "$80", 
            description: "Dedicated signals channel access for half a year.",
            bonuses: []
        },
        { 
            name: "1 Year Signal Access", 
            price: "$100", 
            description: "Full year access plus the essential SMC Course.",
            bonuses: ["FREE SMC Course"]
        },
        { 
            name: "Lifetime VIP Access", 
            price: "$120", 
            description: "One-time payment, lifetime signals, and complete trading program access.",
            bonuses: ["FREE SMC Course", "FREE Live Trading"]
        }
    ];

    const telegramLink = 'https://t.me/PROMIC_BROW'; // Direct Telegram link

    // Shared Button Class for consistency
    const joinButtonClass = "w-full bg-orange-600 text-white font-semibold py-3 rounded-full text-lg transition duration-300 transform hover:scale-[1.01] hover:bg-white hover:text-orange-600 hover:border-2 hover:border-orange-600 mt-auto inline-flex items-center justify-center";


    return (
        <div className="flex flex-col min-h-screen w-screen overflow-x-hidden bg-white">
          
          {/* ---------------------------------------------------- */}
          {/* NEW: Helmet component for SEO metadata for the VIP Signals page */}
          {/* ---------------------------------------------------- */}
          <Helmet>
            <title>VIP Signals Premium | 80-90% Accurate Crypto Trading Signals</title>
            <meta name="description" content="Join Promic Education's VIP Signals for 80-90% accurate crypto signals, including scalping, swing, and day trade setups, 24/7 support, and free bonus courses." />
            <link rel="canonical" href="https://yourdomain.com/vip-signals" />
            
            {/* Open Graph (OG) Tags for Social Media Sharing */}
            <meta property="og:title" content="Promic VIP Signals - Crypto Trading" />
            <meta property="og:description" content="Join Promic Education's VIP Signals for 80-90% accurate crypto signals, including scalping, swing, and day trade setups, 24/7 support, and free bonus courses." />
            <meta property="og:type" content="product" />
            <meta property="og:url" content="https://yourdomain.com/vip-signals" />
            {/* Replace with a high-quality preview image specific to the signals service */}
            <meta property="og:image" content="https://yourdomain.com/images/vip-signals-preview.jpg" /> 
            <meta property="og:site_name" content="Promic Education" />
            <meta property="twitter:card" content="summary_large_image" />
          </Helmet>
          
            <Header />
            
            {/* Reduced main padding on mobile screens */}
            <main className="container mx-auto p-4 sm:p-8 flex-grow mt-20"> 
                
                {/* Hero Section: VIP PREMIUM Banner with Video Background - ANIMATED (Delay 50ms) */}
                <section className={`relative text-center py-12 sm:py-16 md:py-24 bg-blue-900 rounded-xl shadow-2xl text-white overflow-hidden transition-all duration-1000 ${visibleClass} delay-[50ms] mb-16`}>
                    
                    {/* Video Background */}
                    <div className="absolute inset-0 z-0">
                        <video 
                            autoPlay 
                            loop 
                            muted 
                            playsInline 
                            className="w-full h-full object-cover opacity-30" // Lower opacity for better text readability
                        >
                            <source src={vipsignalsVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    {/* Content Layer */}
                    <div className="relative z-10 p-4 bg-black/40 inline-block rounded-xl"> 
                        {/* Adjusted heading size for mobile */}
                        <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 border-b-4 border-orange-500 inline-block px-4 pb-2">
                            VIP PREMIUM
                        </h1>
                        {/* Adjusted text size for mobile */}
                        <p className="text-base sm:text-xl mt-4 font-light max-w-3xl mx-auto">
                            Elevate your trading with our expert-verified signals and dedicated support.
                        </p>
                    </div>
                </section>

                {/* Features and Bonuses Section - ANIMATED (Delay 150ms) */}
                {/* Main Change: Uses grid-cols-1 on mobile, lg:grid-cols-3 on desktop */}
                <section className={`my-16 md:my-24 grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 max-w-6xl mx-auto transition-all duration-1000 ${visibleClass} delay-150`}>
                    
                    {/* Core Features List */}
                    <div className="lg:col-span-2 p-6 bg-gray-100 rounded-xl shadow-lg">
                        {/* Adjusted heading size for mobile */}
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">What You Get: Core Features</h2>
                        <ul className="space-y-4">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-center text-base sm:text-lg text-gray-700">
                                    <CheckCircleIcon className="h-6 w-6 text-orange-600 mr-3 flex-shrink-0" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    {/* Bonus & Free Offers Summary */}
                    <div className="p-6 bg-blue-100 rounded-xl shadow-lg flex flex-col justify-center text-center">
                        {/* Adjusted heading size for mobile */}
                        <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-6">INCLUDED BONUSES</h2>
                        
                        {/* SMC Course Section */}
                        <div className="mb-6 border-b border-blue-300 pb-4">
                            <p className="text-lg sm:text-xl font-bold text-red-600">LIVE SMC COURSE</p>
                            {/* Adjusted text size for mobile */}
                            <p className="text-4xl sm:text-5xl font-extrabold text-red-600 mt-1">FREE</p>
                            <p className="text-xs sm:text-sm text-blue-800 mt-2">(Included with 1 Year & Lifetime Packages)</p>
                        </div>

                        {/* Live Trading Section */}
                        <div>
                            <p className="text-lg sm:text-xl font-bold text-red-600">LIVE TRADING</p>
                            {/* Adjusted text size for mobile */}
                            <p className="text-4xl sm:text-5xl font-extrabold text-red-600 mt-1">FREE</p>
                            <p className="text-xs sm:text-sm text-blue-800 mt-2">(Included with Lifetime Package)</p>
                        </div>
                    </div>
                </section>

                {/* Pricing Table Section - ANIMATED (Delay 250ms) */}
                <section className={`my-16 md:my-24 max-w-6xl mx-auto transition-all duration-1000 ${visibleClass} delay-250`}>
                    {/* Adjusted heading size for mobile */}
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-10">Choose Your Signal Package</h2>
                    
                    {/* Main Change: Uses grid-cols-1 on mobile, md:grid-cols-3 on desktop */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {packagePricing.map((pkg, index) => (
                            <div key={index} className="bg-white p-6 sm:p-8 rounded-xl shadow-xl border-t-4 border-orange-600 flex flex-col items-center text-center transition-all duration-300 transform hover:scale-[1.03] hover:shadow-2xl">
                                {/* Adjusted text size for mobile */}
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
                                {/* Adjusted text size for mobile */}
                                <p className="text-4xl sm:text-5xl font-extrabold text-orange-600 mb-2">{pkg.price}</p>
                                <p className="text-sm sm:text-base text-gray-600 mb-6 flex-grow">{pkg.description}</p>
                                
                                {/* Package Bonuses */}
                                {pkg.bonuses.length > 0 && (
                                    <div className="mt-2 mb-6 text-left w-full">
                                        <p className="text-sm font-semibold text-green-700 mb-2">Bonuses Included:</p>
                                        <ul className="space-y-1 text-sm">
                                            {pkg.bonuses.map((bonus, i) => (
                                                <li key={i} className="flex items-center text-gray-600">
                                                    <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                                    {bonus}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                
                                <a
                                    href={telegramLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={joinButtonClass}
                                >
                                    Join Via Telegram <ArrowRightIcon className="w-5 h-5 ml-2" />
                                </a>
                            </div>
                        ))}
                    </div>
                </section>
                
            </main>

            <Contact />
            <Footer />
        </div>
    );
};

export default VipSignalsPage;