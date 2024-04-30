import React from 'react';
import BannerImage from '../public/img/Banner-pointx1.jpg';

const CTA = () => {
  return (
    <div
      className="bg-cover bg-center h-96 relative z-10"
      style={{ backgroundImage: `url(${BannerImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="text-center text-white py-16 relative z-10 m-6">
        <h6 className="text-2xl max-sm:text-left md:text-center mb-6">Get started with us!</h6>
        <h1 className="text-4xl max-sm:text-left md:text-5xl font-bold mb-12 text-[#37B6FF]">Excellence<span className='text-white'> @ </span>PointX and Zest</h1>
        <button className="bg-[#37B6FF] text-white py-2 px-6 rounded-full text-xl font-bold hover:bg-blue-700 transition duration-200">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default CTA;