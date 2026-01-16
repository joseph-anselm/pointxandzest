// import React from 'react';

// const SubHeader = ({ title, backgroundImage }) => {
//   return (
//     <div>
//       {/* Header */}
//       <div
//         className="h-[400px] max-h-[400px] bg-cover bg-center relative"
//         style={{ backgroundImage: `url('${backgroundImage}')` }}
//       >
//         {/* Image Overlay */}
//         <div className="absolute inset-0 bg-black opacity-60"></div>

//         {/* Title */}
//         <div className="absolute inset-0 flex items-center justify-center">
//           <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase z-10 text-center">
//             {title}
//           </h1>
//         </div>
//       </div>

//       {/* Rest of the page content */}
//       {/* Add your content here */}
//     </div>
//   );
// };

// export default SubHeader;

// import React from 'react';

// const SubHeader = ({ title, backgroundImage }) => {
//   return (
//     <div>
//       {/* Header */}
//       <div
//         className="h-[400px] max-h-[400px] bg-cover bg-center relative"
//         style={{ backgroundImage: `url('${backgroundImage}')` }}
//       >
//         {/* Image Overlay */}
//         <div className="absolute inset-0 bg-black opacity-60"></div>

//         {/* Title */}
//         <div className="absolute inset-0 flex flex-col items-center justify-center">
//           <h1 className="text-center z-10 text-4xl md:text-5xl lg:text-6xl text-[#37B6FF] font-extrabold capitalized">
//             {title.slice(0, 1)}
//             <span className="text-[#0071BC]">{title.slice(1, 2)}</span>
//             <span className="text-white">{title.slice(2)}</span>
//           </h1>
//           <div className="mt-4 h-1 w-28 bg-[#37B6FF]"></div>
//         </div>
//       </div>

    
//     </div>
//   );
// };

// export default SubHeader;





"use client";
import React from 'react';
import { ChevronRight, Home, Layout } from 'lucide-react';

const SubHeader = ({ title, subtitle = "PointX & Zest Excellence", backgroundImage }) => {
  return (
    <div className="relative h-[45vh] min-h-[400px] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with subtle zoom animation */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage || "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop"}
          alt={title}
          className="h-full w-full object-cover scale-105 animate-sub-header-zoom"
        />
        {/* Multi-layered sophisticated overlay */}
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 via-transparent to-slate-900/40"></div>
      </div>

      {/* Decorative Grid Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>

      {/* Content Container */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* Breadcrumbs - Frosted Glass Effect */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8 animate-fade-in-down">
            <a href="/" className="text-white/60 hover:text-white transition-colors flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest">
              <Home className="w-3 h-3" />
              Home
            </a>
            <ChevronRight className="w-3 h-3 text-white/30" />
            <span className="text-[#37B6FF] text-[10px] font-bold uppercase tracking-widest">
              {title}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white tracking-tighter mb-4 animate-slide-up">
            <span className="text-[#37B6FF] drop-shadow-[0_0_20px_rgba(55,182,255,0.4)]">
              {title.split(' ')[0]}
            </span>
            <span className="ml-4">{title.split(' ').slice(1).join(' ')}</span>
          </h1>

          {/* Dynamic Underline */}
          <div className="relative h-1 w-24 bg-white/20 rounded-full overflow-hidden animate-slide-up animation-delay-300">
            <div className="absolute inset-0 bg-[#37B6FF] animate-progress-glow"></div>
          </div>

          {/* Subtitle / Description */}
          <p className="mt-8 text-slate-300 text-sm md:text-base font-medium max-w-xl leading-relaxed animate-slide-up animation-delay-500">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Floating Corner Badges */}
      <div className="absolute bottom-10 right-10 hidden lg:block opacity-20">
         <div className="flex items-center gap-4 text-white">
            <div className="text-right">
               <p className="text-[10px] font-bold uppercase tracking-[0.2em]">PointX & Zest</p>
               <p className="text-[8px] font-medium opacity-60">Professional Research Body</p>
            </div>
            <div className="w-px h-8 bg-white/40"></div>
            <Layout className="w-6 h-6" />
         </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes sub-header-zoom {
          from { transform: scale(1.05); }
          to { transform: scale(1.15); }
        }
        @keyframes progress-glow {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-sub-header-zoom { animation: sub-header-zoom 20s ease-out forwards; }
        .animate-progress-glow { animation: progress-glow 2s ease-in-out infinite; }
        .animate-slide-up { 
          animation: slide-up 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; 
          opacity: 0;
          transform: translateY(20px);
        }
        .animate-fade-in-down { 
          animation: fade-in-down 0.8s ease-out forwards; 
          opacity: 0;
          transform: translateY(-20px);
        }
        .animation-delay-300 { animation-delay: 300ms; }
        .animation-delay-500 { animation-delay: 500ms; }
        
        @keyframes slide-up {
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-down {
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </div>
  );
};

export default SubHeader;
