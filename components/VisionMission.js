import React from 'react';
import Image from 'next/image';

const VisionMission = () => {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-16">
      <h2 className="text-4xl font-bold mb-8 text-center">Our Vision and Mission</h2>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 px-4">
          <div className="bg-gray-100 p-8 rounded-lg h-full flex flex-col">
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="mb-4">
              To be the leading IT company that drives innovation and growth through
              exceptional online experiences, strategic IT advisory, and strong online
              brand building.
            </p>
            <div className="flex-shrink-0">
              <Image
                src="/img/pointx-img1.jpg"
                alt="Vision Image"
                width={500}
                height={300}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-4">
          <div className="bg-gray-100 p-8 rounded-lg h-full flex flex-col">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="mb-4">
              To provide top-notch IT services, including research and innovation,
              managed services, web design and development, IT consultancy, online
              brand consultancy and optimization, and SEO solutions, to help businesses
              thrive in the digital world.
            </p>
            <div className="flex-shrink-0">
              <Image
                src="/img/pointx-img2.jpg"
                alt="Mission Image"
                width={500}
                height={300}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;