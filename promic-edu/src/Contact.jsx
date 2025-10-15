// src/Contact.jsx
import React from 'react';
import { ClockIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-100 py-16 px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {/* Our Hours Card */}
          <div className="flex flex-col items-center">
            <ClockIcon className="h-16 w-16 text-gray-800 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-gray-800">OUR HOURS</h3>
            <p className="text-gray-700">24 Hours Service</p>
            <p className="text-gray-700">Monday – Sunday</p>
          </div>

          {/* Location Card */}
          <div className="flex flex-col items-center">
            <MapPinIcon className="h-16 w-16 text-gray-800 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-gray-800">LOCATION</h3>
            <p className="text-gray-700">No 34/5, Galle Road, Ambalangoda, Sri Lanka</p>
          </div>

          {/* Contact Us Card */}
          <div className="flex flex-col items-center">
            <PhoneIcon className="h-16 w-16 text-gray-800 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-gray-800">CONTACT US</h3>
            <p className="text-gray-700">077 489 2554</p>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Map for Nugegoda */}
          <div className="w-full h-80 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.357778945695!2d79.88248747514806!3d6.848809493144141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25a242c13d969%3A0xc6e4b4a1b0b5f1e1!2sWijerama%20Junction%2C%20Nugegoda!5e0!3m2!1sen!2slk!4v1684347717616!5m2!1sen!2slk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Nugegoda Branch Map"
            ></iframe>
          </div>

          {/* Map for Kegalle */}
          <div className="w-full h-80 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.034781442006!2d80.3475267751503!3d7.06208659292817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae30e2f89f33b11%3A0x6b44a478b8a5d3f1!2sKegalle%20Town!5e0!3m2!1sen!2slk!4v1684347806542!5m2!1sen!2slk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kegalle Branch Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;