"use client"

import React from 'react';

const ContactUsButton = () => {
  const handleContactUs = () => {
    window.location.href = 'mailto:info@pointxandzest.com';
  };

  return (
    <button
      onClick={handleContactUs}
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      Contact Us
    </button>
  );
};

const MaintenancePage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <img
        src="/img/logo-pointx.png" // Replace with the path to your logo
        alt="Logo"
        className="h-24 md:h-32 lg:h-40 mb-8"
      />
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 text-center">Website Under Maintenance</h1>
      <p className="text-lg md:text-xl text-gray-600 text-center mb-8">
        We apologize for the inconvenience. Our website is currently undergoing maintenance.
        <br /> Please check back later.
      </p>
      <ContactUsButton />
    </div>
  );
};

export default MaintenancePage;

