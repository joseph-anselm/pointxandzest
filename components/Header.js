"use client"
import React, { useEffect } from 'react';
import SwiperCore from 'swiper/core';
import { Navigation, Pagination, Autoplay, EffectFlip } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { EffectFade, Flip } from 'swiper/modules';
import 'swiper/css/effect-fade';

SwiperCore.use([Autoplay, Navigation, Pagination]);

const Header = () => {
  const slidesData = [
    {
      title: 'IT Excellence',
      subtitle: 'Driving excellence in IT through research.',
      imgSrc: '/img/Banner-pointx5.jpg',
    },
    {
      title: 'Research Leaders',
      subtitle: 'Leading the way in research consultancy.',
      imgSrc: '/img/Banner-pointx2.jpg',
    },
    {
      title: 'Innovate with PointX and Zest',
      subtitle: 'PointX: Innovating through research-driven IT solutions.',
      imgSrc: '/img/Banner-pointx3.jpg',
    },
    {
      title: 'Your Digital Partner',
      subtitle: 'Partner with PointX for IT transformation.',
      imgSrc: '/img/Banner-pointx4.jpg',
    },
    // Add more slides as needed
  ];

  useEffect(() => {
    // Any initialization logic if needed
  }, []); 

  return (
    <Swiper
      slidesPerView={1}
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{ delay: 5000, disableOnInteraction: false, reverseDirection: false, stopOnLastSlide: false, waitForTransition: true }}
      className="relative h-screen"
      initialSlide={0}
      speed={2000}
      modules={[EffectFlip]} 
      effect="flip"
    >
      {slidesData.map((slide, index) => {
        // Splitting the title into words
        const words = slide.title.split(' ');

        // Wrapping the first word in a span with green color
        const titleWithGreenText = (
          <>
            <span className="text-[#37B6FF]">{words[0]} </span>
            {words.slice(1).join(' ')}
          </>
        );

        return (
          <SwiperSlide
            key={index}
            style={{
              backgroundImage: `url("${slide.imgSrc}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-[1px 1px 1px to-black]">{titleWithGreenText}</h1>
                <p className="text-lg mb-6">{slide.subtitle}</p>
                <div className="flex justify-center space-x-4">
                  <button className="bg-[#37B6FF] text-white px-4 py-2 rounded">
                    <a href="/services">Get a Quote</a>
                  </button>
                  <button className="bg-white text-[#37B6FF] px-4 py-2 rounded">
                    <a href="/services">Service Overview</a>
                  </button>

                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Header;
