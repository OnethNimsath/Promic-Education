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
            <p className="text-gray-700">No 111, Kapuela Road, Ambalangoda</p>
          </div>

          {/* Contact Us Card */}
          <div className="flex flex-col items-center">
            <PhoneIcon className="h-16 w-16 text-gray-800 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-gray-800">CONTACT US</h3>
            <p className="text-gray-700">077 489 2554</p>
            <p className="text-gray-700">malinduhashintha5@gmail.com</p>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="mt-16 flex justify-center">
          <div className="w-full max-w-2xl h-80 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d31729.007598186938!2d80.03570855808601!3d6.247128997153457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1skitulampitiya%20road%2C%20Ambalangoda!5e0!3m2!1sen!2slk!4v1760586220484!5m2!1sen!2slk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map for Kitulampitiya Road, Ambalangoda"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;