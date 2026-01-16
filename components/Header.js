// "use client"
// import React, { useEffect } from 'react';
// import SwiperCore from 'swiper/core';
// import { Navigation, Pagination, Autoplay, EffectFlip } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { EffectFade, Flip } from 'swiper/modules';
// import 'swiper/css/effect-fade';

// SwiperCore.use([Autoplay, Navigation, Pagination]);

// const Header = () => {
//   const slidesData = [
//     {
//       title: 'IT Excellence',
//       subtitle: 'Driving excellence in IT through research.',
//       imgSrc: '/img/Banner-pointx5.jpg',
//     },
//     {
//       title: 'Research Leaders',
//       subtitle: 'Leading the way in research consultancy.',
//       imgSrc: '/img/Banner-pointx2.jpg',
//     },
//     {
//       title: 'Innovate with PointX and Zest',
//       subtitle: 'PointX: Innovating through research-driven IT solutions.',
//       imgSrc: '/img/Banner-pointx3.jpg',
//     },
//     {
//       title: 'Your Digital Partner',
//       subtitle: 'Partner with PointX for IT transformation.',
//       imgSrc: '/img/Banner-pointx4.jpg',
//     },
//     // Add more slides as needed
//   ];

//   useEffect(() => {
//     // Any initialization logic if needed
//   }, []); 

//   return (
//     <Swiper
//       slidesPerView={1}
//       pagination={{ clickable: true }}
//       loop={true}
//       autoplay={{ delay: 5000, disableOnInteraction: false, reverseDirection: false, stopOnLastSlide: false, waitForTransition: true }}
//       className="relative h-screen"
//       initialSlide={0}
//       speed={2000}
//       modules={[EffectFlip]} 
//       effect="flip"
//     >
//       {slidesData.map((slide, index) => {
//         // Splitting the title into words
//         const words = slide.title.split(' ');

//         // Wrapping the first word in a span with green color
//         const titleWithGreenText = (
//           <>
//             <span className="text-[#37B6FF]">{words[0]} </span>
//             {words.slice(1).join(' ')}
//           </>
//         );

//         return (
//           <SwiperSlide
//             key={index}
//             style={{
//               backgroundImage: `url("${slide.imgSrc}")`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//             }}
//           >
//             <div className="absolute inset-0 bg-black opacity-40"></div>
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="text-center text-white px-4">
//                 <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-[1px 1px 1px to-black]">{titleWithGreenText}</h1>
//                 <p className="text-lg mb-6">{slide.subtitle}</p>
//                 <div className="flex justify-center space-x-4">
//                   <button className="bg-[#37B6FF] text-white px-4 py-2 rounded">
//                     <a href="/services">Get a Quote</a>
//                   </button>
//                   <button className="bg-white text-[#37B6FF] px-4 py-2 rounded">
//                     <a href="/services">Service Overview</a>
//                   </button>

//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         );
//       })}
//     </Swiper>
//   );
// };

// export default Header;



"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Header = () => {
  const slidesData = [
    {
      title: 'IT Excellence',
      subtitle: 'Driving excellence in IT through research.',
      imgSrc: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop',
    },
    {
      title: 'Research Leaders',
      subtitle: 'Leading the way in research consultancy.',
      imgSrc: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop',
    },
    {
      title: 'Innovate with PointX and Zest',
      subtitle: 'PointX: Innovating through research-driven IT solutions.',
      imgSrc: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2000&auto=format&fit=crop',
    },
    {
      title: 'Your Digital Partner',
      subtitle: 'Partner with PointX for IT transformation.',
      imgSrc: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2000&auto=format&fit=crop',
    },
  ];

  return (
    <div className="relative h-screen w-full bg-black overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        slidesPerView={1}
        loop={true}
        speed={1500}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} custom-bullet"></span>`;
          },
        }}
        className="h-full w-full"
      >
        {slidesData.map((slide, index) => {
          const words = slide.title.split(' ');
          const titleContent = (
            <>
              <span className="text-[#37B6FF] drop-shadow-[0_0_15px_rgba(55,182,255,0.4)]">
                {words[0]}{' '}
              </span>
              <span className="text-white">{words.slice(1).join(' ')}</span>
            </>
          );

          return (
            <SwiperSlide key={index} className="relative overflow-hidden group">
              {/* Background with Zoom Animation */}
              <div className="absolute inset-0 z-0">
                <img
                  src={slide.imgSrc}
                  alt={slide.title}
                  className="h-full w-full object-cover transition-transform duration-[8000ms] ease-out scale-100 group-[.swiper-slide-active]:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30"></div>
              </div>

              {/* Text Content */}
              <div className="absolute inset-0 z-10 flex items-center">
                <div className="container mx-auto px-6 md:px-12">
                  <div className="max-w-4xl text-left">
                    <div className="overflow-hidden mb-4">
                      <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#37B6FF]/10 border border-[#37B6FF]/20 backdrop-blur-md animate-fade-in-down">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#37B6FF] opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#37B6FF]"></span>
                        </span>
                        <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-[#37B6FF]">
                          Consultancy Excellence
                        </span>
                      </div>
                    </div>

                    <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold mb-8 leading-[0.9] tracking-tighter opacity-0 translate-y-12 animate-slide-up animation-delay-300">
                      {titleContent}
                    </h1>

                    <p className="text-lg md:text-2xl text-slate-300/90 mb-12 max-w-2xl leading-relaxed opacity-0 translate-y-8 animate-slide-up animation-delay-500">
                      {slide.subtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-6 opacity-0 translate-y-4 animate-slide-up animation-delay-700">
                      <button className="w-full sm:w-auto px-10 py-5 rounded-lg bg-[#37B6FF] text-white font-bold text-lg hover:bg-[#2b91cc] transition-all transform hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(55,182,255,0.5)] active:scale-95 group">
                        <span className="flex items-center justify-center gap-2">
                          Get a Quote
                          <svg
                            className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </span>
                      </button>
                      <button className="w-full sm:w-auto px-10 py-5 rounded-lg border-2 border-white/20 text-white font-bold text-lg hover:bg-white hover:text-black hover:border-white transition-all transform hover:-translate-y-1 active:scale-95 backdrop-blur-sm">
                        Service Overview
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Decorative elements */}
      <div className="absolute left-6 bottom-1/2 -translate-y-1/2 z-20 hidden xl:flex flex-col gap-12 text-white/20 text-[10px] font-bold tracking-[0.4em] uppercase [writing-mode:vertical-lr] rotate-180">
        <span>Strategic Analysis</span>
        <div className="h-20 w-px bg-white/10 mx-auto"></div>
        <span>Data Intelligence</span>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slide-up {
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up { animation: slide-up 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
        .animate-fade-in-down { animation: fade-in-down 0.8s ease-out forwards; }
        .animation-delay-300 { animation-delay: 300ms; }
        .animation-delay-500 { animation-delay: 500ms; }
        .animation-delay-700 { animation-delay: 700ms; }
        
        /* Swiper Pagination Styling */
        .swiper-pagination-bullets {
          bottom: 40px !important;
          display: flex;
          justify-content: center;
          gap: 12px;
        }
        .custom-bullet {
          width: 32px !important;
          height: 3px !important;
          border-radius: 4px !important;
          background: rgba(255, 255, 255, 0.2) !important;
          opacity: 1 !important;
          transition: all 0.4s ease !important;
          cursor: pointer;
        }
        .custom-bullet.swiper-pagination-bullet-active {
          background: #37B6FF !important;
          width: 64px !important;
          box-shadow: 0 0 15px rgba(55, 182, 255, 0.6);
        }
        
        /* Slide background animation */
        .swiper-slide-active img {
          transform: scale(1.15) !important;
          transition: transform 12s linear !important;
        }
      `}} />
    </div>
  );
};

export default Header;
