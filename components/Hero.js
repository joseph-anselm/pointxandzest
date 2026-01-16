// import React from 'react';
// import { ArrowRight, Play, Code, Cpu, Globe } from 'lucide-react';

// const Hero = () => {
//   return (
//     <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
//       {/* Abstract Background Shapes */}
//       <div className="absolute top-20 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[120px] animate-blob"></div>
//       <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
      
//       {/* Grid Pattern */}
//       <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      
//       <div className="container mx-auto px-4 relative z-10">
//         <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
//           {/* Text Content */}
//           <div className="flex-1 text-center lg:text-left">
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-8 animate-fade-in-up">
//               <span className="flex h-2 w-2 relative">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
//                 <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
//               </span>
//               <span className="text-xs font-semibold tracking-wide uppercase text-accent">Next-Gen Tech Studio</span>
//             </div>

//             <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-tight text-slate-900 dark:text-white">
//               <span className="block reveal active delay-100">Innovate.</span>
//               <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent reveal active delay-200 text-glow">
//                 Transform.
//               </span>
//               <span className="block reveal active delay-300">Scale.</span>
//             </h1>

//             <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed reveal active delay-400">
//               We engineer digital experiences that redefine industries. From AI-driven insights to seamless cloud architecture, we build the core of your future business.
//             </p>

//             <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start reveal active delay-500">
//               <a
//                 href="#contact"
//                 className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-dark font-bold text-lg hover:bg-slate-800 dark:hover:bg-slate-200 transition-all transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center gap-2 group"
//               >
//                 Start Project
//                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//               </a>
//               <button className="w-full sm:w-auto px-8 py-4 rounded-full glass text-slate-900 dark:text-white font-semibold text-lg hover:bg-slate-100 dark:hover:bg-white/10 transition-all flex items-center justify-center gap-2 group border border-slate-200 dark:border-white/10">
//                 <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
//                   <Play className="w-4 h-4 text-primary fill-current ml-0.5" />
//                 </div>
//                 View Showreel
//               </button>
//             </div>
//           </div>

//           {/* Graphic Element */}
//           <div className="flex-1 w-full max-w-lg lg:max-w-none relative perspective-1000">
//              <div className="relative w-full aspect-square animate-float">
//                 {/* Central Card */}
//                 <div className="absolute inset-10 bg-white dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900 rounded-3xl border border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden z-20 transform rotate-[-6deg] hover:rotate-0 transition-all duration-500">
//                   <div className="absolute inset-0 bg-grid-slate-900/[0.05] dark:bg-grid-white/[0.05]"></div>
//                   <div className="p-8">
//                     <div className="flex items-center gap-4 mb-8">
//                       <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
//                         <Code className="w-6 h-6" />
//                       </div>
//                       <div className="h-2 w-20 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
//                     </div>
//                     <div className="space-y-4">
//                       <div className="h-2 w-3/4 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
//                       <div className="h-2 w-1/2 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
//                       <div className="h-32 w-full bg-slate-100 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-white/5 mt-8 relative overflow-hidden">
//                         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 dark:via-white/5 to-transparent animate-shimmer"></div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Floating Elements */}
//                 <div className="absolute top-0 right-0 p-4 glass rounded-2xl z-30 animate-pulse-glow shadow-lg">
//                   <Cpu className="w-8 h-8 text-accent" />
//                 </div>
//                 <div className="absolute bottom-20 -left-10 p-5 glass rounded-2xl z-30 animate-float shadow-lg" style={{ animationDelay: '1s' }}>
//                   <Globe className="w-8 h-8 text-secondary" />
//                 </div>

//                 {/* Background Decoration */}
//                 <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full opacity-20 blur-3xl -z-10"></div>
//              </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;



import React, { useState, useEffect, useCallback } from 'react';

const slides = [
  {
    id: 1,
    headlinePart1: "Research",
    headlinePart2: "Leaders",
    subtext: "Leading the way in research consultancy.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 2,
    headlinePart1: "Data",
    headlinePart2: "Intelligence",
    subtext: "Empowering decisions with precision analytics.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 3,
    headlinePart1: "Strategic",
    headlinePart2: "Impact",
    subtext: "Navigating complex markets with global expert guidance.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2000&auto=format&fit=crop"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsTransitioning(false);
      }, 500);
    }
  }, [isTransitioning]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const goToSlide = (index) => {
    if (index !== currentSlide && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setIsTransitioning(false);
      }, 500);
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Slides Layer */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src={slide.image} 
            alt={`Slide ${slide.id}`} 
            className={`w-full h-full object-cover scale-105 ${index === currentSlide ? 'animate-slow-zoom' : ''}`}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90"></div>
        </div>
      ))}

      {/* Content Container */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className={`transition-all duration-700 transform ${isTransitioning ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}`}>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6 text-white leading-none">
            <span className="text-sky-400">{slides[currentSlide].headlinePart1}</span> <span className="text-white">{slides[currentSlide].headlinePart2}</span>
          </h1>

          <p className="text-lg md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto font-medium tracking-wide">
            {slides[currentSlide].subtext}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <button className="w-full sm:w-auto px-10 py-4 rounded-md bg-sky-400 text-white font-bold text-base hover:bg-sky-500 transition-all shadow-xl shadow-sky-500/20 active:scale-95">
              Get a Quote
            </button>
            <button className="w-full sm:w-auto px-10 py-4 rounded-md border-2 border-white text-white font-bold text-base hover:bg-white hover:text-black transition-all active:scale-95">
              Service Overview
            </button>
          </div>
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`group relative h-4 transition-all duration-300 ease-out ${
              index === currentSlide ? 'w-12' : 'w-4'
            }`}
          >
            <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.6)]' : 'bg-white/30 hover:bg-white/50'
            }`} />
          </button>
        ))}
      </div>

      {/* Side Visual Indicator */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-8 z-20">
        <div className="w-12 h-12 rounded-full bg-black/40 border border-white/10 flex items-center justify-center cursor-pointer hover:bg-sky-400/20 transition-all group">
          <div className="flex flex-col gap-1.5 items-end">
            <div className="w-6 h-0.5 bg-white rounded-full group-hover:bg-sky-400 transition-colors"></div>
            <div className="w-4 h-0.5 bg-white rounded-full group-hover:bg-sky-400 transition-colors"></div>
            <div className="w-5 h-0.5 bg-white rounded-full group-hover:bg-sky-400 transition-colors"></div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slow-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.15); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s ease-in-out infinite alternate;
        }
      `}} />
    </section>
  );
};

export default Hero;
