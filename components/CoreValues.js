

// import React from 'react';

// const CoreValues = () => {
//   return (
//     <div className="container mx-auto max-w-7xl px-4 py-16">
//       <h2 className="text-4xl font-[500] mb-8 text-center">Core<span className='text-[#37B6FF]'> Values</span></h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
//         <div className="bg-[#0071BC] p-8 rounded-bl-[2em] rounded-tr-[2em] text-white text-center shadow-lg">
//           <h3 className="text-xl font-bold mb-4">Innovation</h3>
//           <p>
//             We embrace innovation and strive to find creative solutions to challenges.
//           </p>
//         </div>
//         <div className="bg-[#0071BC] p-8 rounded-bl-[2em] rounded-tr-[2em] text-white text-center shadow-lg">
//           <h3 className="text-xl font-bold mb-4">Excellence</h3>
//           <p>
//             We pursue excellence in everything we do, delivering high-quality results.
//           </p>
//         </div>
//         <div className="bg-[#0071BC] p-8 rounded-bl-[2em] rounded-tr-[2em] text-white text-center shadow-lg">
//           <h3 className="text-xl font-bold mb-4">Integrity</h3>
//           <p>
//             We operate with integrity, honesty, and transparency in all our interactions.
//           </p>
//         </div>
//         <div className="bg-[#0071BC] p-8 rounded-bl-[2em] rounded-tr-[2em] text-white text-center shadow-lg">
//           <h3 className="text-xl font-bold mb-4">Customer Focus</h3>
//           <p>
//             We prioritize the needs and satisfaction of our customers above all else.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CoreValues;



"use client";
import React from 'react';
import { Lightbulb, Award, ShieldCheck, Users2, Zap } from 'lucide-react';

const CoreValues = () => {
  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "We embrace innovation and strive to find creative solutions to the most complex industry challenges.",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "We pursue excellence in everything we do, delivering high-quality results that exceed expectations.",
      color: "bg-amber-50 text-amber-600"
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Integrity",
      description: "We operate with integrity, honesty, and transparency in all our global interactions and partnerships.",
      color: "bg-emerald-50 text-emerald-600"
    },
    {
      icon: <Users2 className="w-8 h-8" />,
      title: "Customer Focus",
      description: "We prioritize the needs and long-term satisfaction of our customers above all else.",
      color: "bg-[#37B6FF]/10 text-[#37B6FF]"
    }
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Subtle Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#37B6FF 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-500 text-[10px] font-bold tracking-[0.3em] uppercase mb-4 shadow-sm">
            <Zap className="w-3 h-3 text-[#37B6FF]" />
            Foundation of PZ
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-900 tracking-tight">
            Our Core <span className="text-[#37B6FF]">Values</span>
          </h2>
          <p className="mt-6 text-slate-500 max-w-2xl mx-auto text-lg">
            The principles that guide our research, our engineering, and our commitment to client success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((val, index) => (
            <div 
              key={index} 
              className="group relative p-10 rounded-[2.5rem] bg-white border border-slate-100 transition-all duration-500 hover:-translate-y-3 shadow-sm hover:shadow-2xl hover:shadow-[#37B6FF]/10"
            >
              {/* Decorative accent bar */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#37B6FF] rounded-b-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

              {/* Icon Container */}
              <div className={`w-20 h-20 rounded-3xl ${val.color} flex items-center justify-center mb-8 transition-transform duration-500 group-hover:rotate-[10deg] shadow-sm`}>
                {val.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-4 group-hover:text-[#37B6FF] transition-colors">
                {val.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed text-base">
                {val.description}
              </p>

              {/* Card Footer Detail */}
              <div className="mt-8 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="h-px w-8 bg-[#37B6FF]"></div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#37B6FF]">Standard of Care</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Badge */}
        <div className="mt-20 flex justify-center">
          <div className="px-8 py-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm">
                   <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="team" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="text-sm">
              <span className="font-bold text-slate-900">Driven by passion.</span>
              <span className="text-slate-500 ml-1">Delivered by experts.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
