import React from 'react';
import { ClockIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';

const Contact = () => {
  return (
    // Added responsive padding (px-4 for small screens)
    <section id="contact" className="bg-gray-100 py-16 px-4 sm:px-8">
      <div className="container mx-auto">
        
        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center"> 
          {/* Our Hours Card */}
          <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
            <ClockIcon className="h-12 w-12 sm:h-16 sm:w-16 text-gray-800 mb-4" />
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800">OUR HOURS</h3>
            <p className="text-gray-700 text-sm sm:text-base">24 Hours Service</p>
            <p className="text-gray-700 text-sm sm:text-base">Monday – Sunday</p>
          </div>

          {/* Location Card */}
          <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
            <MapPinIcon className="h-12 w-12 sm:h-16 sm:w-16 text-gray-800 mb-4" />
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800">LOCATION</h3>
            <p className="text-gray-700 text-sm sm:text-base">No 111, Kapuela Road, Ambalangoda</p>
          </div>

          {/* Contact Us Card */}
          <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
            <PhoneIcon className="h-12 w-12 sm:h-16 sm:w-16 text-gray-800 mb-4" />
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800">CONTACT US</h3>
            {/* Added anchor tags for direct calling and emailing on mobile */}
            <a href="tel:0774892554" className="text-gray-700 text-sm sm:text-base hover:text-orange-500 transition-colors">
              077 489 2554
            </a>
            <a href="mailto:malinduhashintha5@gmail.com" className="text-gray-700 text-sm sm:text-base hover:text-orange-500 transition-colors">
              malinduhashintha5@gmail.com
            </a>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="mt-12 md:mt-16 flex justify-center">
          {/* Map container uses w-full to fill parent, max-w-4xl to prevent being too wide on huge screens */}
          <div className="w-full max-w-4xl h-80 rounded-lg overflow-hidden shadow-lg">
            <iframe
              // IMPORTANT: Ensure the map source is valid when deploying, but the `width="100%"` ensures responsiveness.
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15854.724773489833!2d80.053805!3d6.230756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae1829e1f574519%3A0xc66c1e544d673199!2sAmbalangoda%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map for Kapuela Road, Ambalangoda"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;