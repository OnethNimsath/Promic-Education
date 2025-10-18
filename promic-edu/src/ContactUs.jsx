import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Contact from './Contact'; // Reusing your existing Contact component
import contactusVideo from './resources/contactus-video.mp4'; // Import the new video file
// SEO NOTE: react-helmet-async dependency removed for stable deployment.

const ContactUs = () => {
  const WHATSAPP_NUMBER = "94774892554"; // Formatted for international WhatsApp link

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSent, setIsSent] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false); // State for page load animation

  useEffect(() => {
    // Set isLoaded to true shortly after component mounts to trigger animations
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100); 
    return () => clearTimeout(timer);
  }, []);

  // Class to control load-in animation (slide-up and fade-in)
  const visibleClass = isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8';

  // Simple state update function for form inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Constructs WhatsApp message and redirects user
  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Construct the message body
    const messageBody = 
      `Inquiry from Contact Form:\n` +
      `\nName: ${formData.name}` +
      `\nEmail: ${formData.email}` +
      `\nSubject: ${formData.subject}` +
      `\n\nMessage: ${formData.message}`;
    
    // 2. Encode the message and construct the WhatsApp link
    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(messageBody)}`;

    // 3. Open the WhatsApp link in a new tab
    window.open(whatsappLink, '_blank');

    // 4. Optionally show a success message and reset the form (front-end confirmation)
    setIsSent(true);
    setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setIsSent(false);
    }, 5000);
  };

  // Consolidated class definition for form inputs
  const inputClasses = "w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 transition duration-200 shadow-sm text-sm sm:text-base";

  return (
    <div className="flex flex-col min-h-screen w-screen overflow-x-hidden bg-white">
      
      <Header />
      
      {/* Reduced main padding on mobile screens */}
      <main className="container mx-auto p-4 sm:p-8 flex-grow mt-20"> 
        
        {/* Contact Hero Section with Video Background - ANIMATED (Delay 50ms) */}
        <section className={`relative text-center py-12 sm:py-16 md:py-24 bg-orange-50 rounded-xl shadow-md mb-12 sm:mb-16 overflow-hidden transition-all duration-1000 ${visibleClass} delay-[50ms]`}>
          
          {/* Video Background */}
          <div className="absolute inset-0 z-0">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover opacity-50"
            >
              <source src={contactusVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Content with Z-index and overlay for readability */}
          <div className="relative z-10 p-4 bg-black/30 text-white/90 rounded-xl">
            {/* Adjusted heading size for mobile */}
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
              Get In Touch
            </h1>
            {/* Adjusted text size for mobile */}
            <p className="text-base sm:text-lg max-w-3xl mx-auto">
              Have questions about our courses, VIP signals, or anything else? Send us a message and we'll get back to you immediately.
            </p>
          </div>
        </section>

        {/* Contact Form (SECTION 1: FULL WIDTH FORM) - ANIMATED (Delay 200ms) */}
        <section className={`max-w-4xl mx-auto transition-all duration-1000 ${visibleClass} delay-[200ms] mb-12`}>
          
          {/* Contact Form */}
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-2xl transition duration-1000 transform hover:shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">Send Us a Message</h2>
            
            {isSent && (
                <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-4 text-center font-semibold text-sm sm:text-base">
                    Note: Your message is being sent via WhatsApp. Please check the new tab that has opened.
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 max-w-lg mx-auto">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                />
              </div>
              
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                />
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows="4" // Slightly reduced rows for mobile compactness
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="w-full bg-orange-600 text-white font-semibold py-3 rounded-full text-base sm:text-lg 
                           transition duration-300 transform hover:scale-[1.01] hover:bg-white hover:text-orange-600 hover:border-2 hover:border-orange-600"
              >
                Send Message
              </button>
            </form>
          </div>
        {/* END Contact Form */}
        </section>

        {/* Contact Details (SECTION 2: FULL WIDTH CONTACT DETAILS AND MAP) - ANIMATED (Delay 300ms) */}
        <section className={`transition-all duration-1000 ${visibleClass} delay-[300ms]`}>
            {/* The Contact component contains both the 3 boxes and the map, now taking full horizontal space */}
            <Contact />
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default ContactUs;