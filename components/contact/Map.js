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
              src="https://www.google.com/maps/embed?pb=!4v1714593988914!6m8!1m7!1s1szEz1i6tFCoT2xVCH967w!2m2!1d6.814313542174748!2d3.922524206533829!3f30.78794933417469!4f21.062339830610938!5f0.7820865974627469"
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
