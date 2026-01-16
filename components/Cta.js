// import React from 'react';
// import Image from 'next/image';
// import BannerImage from '../public/img/Banner-pointx6.jpg';

// const CTA = () => {
//   return (
//     <div className="relative h-96">
//       <Image
//         src={BannerImage}
//         alt="Banner Image"
//         layout="fill"
//         objectFit="cover"
//         objectPosition="center"
//         quality={100}
//       />
//       <div className="absolute inset-0 bg-black opacity-70"></div>
//       <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10">
//         <h6 className="text-2xl max-sm:text-left mb-6">Get started with us!</h6>
//         <h1 className="text-4xl max-sm:text-left md:text-5xl font-bold mb-12 text-[#37B6FF]">Excellence<span className='text-white'> @ </span>PointX and Zest</h1>
//         <button className="bg-[#37B6FF] text-white py-2 px-6 rounded-full text-xl font-bold hover:bg-blue-700 transition duration-200">
//           Get Started
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CTA;



"use client";
import React from 'react';
import { ArrowRight, Sparkles, Zap, Rocket } from 'lucide-react';

const CTA = () => {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background with tech image and sophisticated overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2000&auto=format&fit=crop"
          alt="Tech background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#37B6FF]/20 via-transparent to-slate-950"></div>
      </div>

      {/* Abstract Geometric Decorations */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      
      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <div className="relative group p-8 md:p-14 rounded-[2.5rem] overflow-hidden">
          {/* Glass Card Background */}
          <div className="absolute inset-0 bg-white/[0.03] border border-white/10 backdrop-blur-xl rounded-[2.5rem] -z-10 group-hover:bg-white/[0.05] transition-colors duration-700"></div>
          
          <div className="flex flex-col items-center text-center">
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#37B6FF]/10 border border-[#37B6FF]/20 mb-6 animate-bounce-slow">
              <Sparkles className="w-3.5 h-3.5 text-[#37B6FF]" />
              <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-[#37B6FF]">Build the Future</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tighter mb-6 leading-[1.1]">
              Excellence <span className="text-[#37B6FF]">@</span> <span className="relative inline-block ml-2">
                PointX & Zest
                <svg className="absolute -bottom-1 left-0 w-full h-1.5 text-[#37B6FF]/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
              </span>
            </h2>

            {/* Subtext */}
            <p className="text-slate-400 text-base md:text-lg max-w-2xl mb-8 leading-relaxed">
              Unlock your business potential with research-driven IT solutions. We are ready to deploy your next digital ecosystem.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button className="group relative px-8 py-3.5 rounded-xl bg-[#37B6FF] text-white font-bold text-sm hover:bg-white hover:text-slate-950 transition-all duration-500 shadow-[0_15px_30px_rgba(55,182,255,0.2)] flex items-center gap-2">
                <Rocket className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="px-8 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-sm hover:bg-white/10 transition-all backdrop-blur-md flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#37B6FF]" />
                Capabilities
              </button>
            </div>

            {/* Trust Markers - Reduced margin */}
            <div className="mt-10 pt-6 border-t border-white/5 w-full flex flex-wrap justify-center gap-6 md:gap-12 opacity-30">
               <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-slate-400">
                  <div className="w-1 h-1 rounded-full bg-[#37B6FF]"></div>
                  Cloud Ready
               </div>
               <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-slate-400">
                  <div className="w-1 h-1 rounded-full bg-[#37B6FF]"></div>
                  Secure Arch
               </div>
               <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-slate-400">
                  <div className="w-1 h-1 rounded-full bg-[#37B6FF]"></div>
                  AI Core
               </div>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}} />
    </section>
  );
};

export default CTA;
