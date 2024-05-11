import React from 'react';

const MapSection = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Map Section */}
        <div className="w-full">
          {/* Embed Google Map */}
          <div className="relative h-0 overflow-hidden" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.633438042814!2d3.9199992753533883!3d6.8143616197142345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103968b4197384eb%3A0xbb42e45b1eb48420!2s65%20Olisa%20St%2C%20Ijebu%20Ode%20120101%2C%20Ogun%20State!5e0!3m2!1sen!2sng!4v1715391747116!5m2!1sen!2sng"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapSection;
