import React from 'react';
import Image from 'next/image';
import BannerImage from '../public/img/Banner-pointx6.jpg';

const CTA = () => {
  return (
    <div className="relative h-96">
      <Image
        src={BannerImage}
        alt="Banner Image"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        quality={100}
      />
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10">
        <h6 className="text-2xl max-sm:text-left mb-6">Get started with us!</h6>
        <h1 className="text-4xl max-sm:text-left md:text-5xl font-bold mb-12 text-[#37B6FF]">Excellence<span className='text-white'> @ </span>PointX and Zest</h1>
        <button className="bg-[#37B6FF] text-white py-2 px-6 rounded-full text-xl font-bold hover:bg-blue-700 transition duration-200">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default CTA;
