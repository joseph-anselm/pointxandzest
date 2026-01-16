
"use client";
import React from 'react';
import { Target, Compass, Sparkles, CheckCircle2 } from 'lucide-react';

const VisionMission = () => {
  return (
    <section className="relative py-6 lg:py-32 bg-slate-50/50 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[#37B6FF]/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 -z-0"></div>

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-[#37B6FF] text-[10px] font-bold tracking-[0.3em] uppercase mb-4 shadow-sm">
            <Sparkles className="w-3 h-3" />
            Our Purpose
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-900 tracking-tight">
            Vision <span className="text-slate-400 font-light">&</span> Mission
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Vision Card */}
          <div className="group relative flex flex-col bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#37B6FF]/10 hover:-translate-y-1">
            <div className="h-72 relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop" 
                alt="Vision" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-8">
                <div className="w-14 h-14 rounded-2xl bg-[#37B6FF] flex items-center justify-center text-white shadow-lg shadow-[#37B6FF]/30">
                  <Compass className="w-7 h-7" />
                </div>
              </div>
            </div>
            
            <div className="p-10 pt-4 flex-grow">
              <h3 className="text-3xl font-display font-bold text-slate-900 mb-6 group-hover:text-[#37B6FF] transition-colors">Our Vision</h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                To be the leading IT company that drives innovation and growth through exceptional online experiences, strategic IT advisory, and strong online brand building.
              </p>
              <ul className="space-y-4">
                {['Innovation Driven', 'Global Excellence', 'Strategic Leadership'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-500 uppercase tracking-widest">
                    <CheckCircle2 className="w-4 h-4 text-[#37B6FF]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mission Card */}
          <div className="group relative flex flex-col bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#37B6FF]/10 hover:-translate-y-1">
            <div className="h-72 relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop" 
                alt="Mission" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-8">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center text-white shadow-lg shadow-slate-900/30">
                  <Target className="w-7 h-7" />
                </div>
              </div>
            </div>
            
            <div className="p-10 pt-4 flex-grow">
              <h3 className="text-3xl font-display font-bold text-slate-900 mb-6 group-hover:text-[#37B6FF] transition-colors">Our Mission</h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                To provide top-notch IT services, including research and innovation, managed services, web design and development, and SEO solutions to help businesses thrive in the digital world.
              </p>
              <ul className="space-y-4">
                {['Client Centricity', 'Digital Transformation', 'Technical Integrity'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-500 uppercase tracking-widest">
                    <CheckCircle2 className="w-4 h-4 text-slate-900" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Impact Stat */}
        <div className="mt-20 flex flex-wrap justify-center gap-12 lg:gap-24 grayscale opacity-60">
           <div className="text-center">
             <div className="text-3xl font-display font-bold text-slate-900">10+</div>
             <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mt-1">Years Experience</div>
           </div>
           <div className="text-center">
             <div className="text-3xl font-display font-bold text-slate-900">200+</div>
             <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mt-1">Success Stories</div>
           </div>
           <div className="text-center">
             <div className="text-3xl font-display font-bold text-slate-900">100%</div>
             <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mt-1">Client Satisfaction</div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
