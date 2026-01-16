// import React from 'react';

// const ResearchProcess = () => {
//   const steps = [
//     {
//       icon: '📝',
//       title: 'Plan',
//       description: 'Develop a detailed research plan.',
//     },
//     {
//       icon: '⚙️',
//       title: 'Execute',
//       description: 'Execute the research plan effectively.',
//     },
//     {
//       icon: '📊',
//       title: 'Analyze',
//       description: 'Analyze the collected data thoroughly.',
//     },
//     {
//       icon: '📑',
//       title: 'Report',
//       description: 'Create a comprehensive research report.',
//     },
//   ];

//   return (
//     <div className="container mx-auto max-w-7xl px-4 py-16">
//       <h2 className="text-3xl font-bold text-center mb-8"><span className='text-[#37B6FF]'>Research </span> Delivery Flow</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//         {steps.map((step, index) => (
//           <div key={index} className="bg-gray-200 rounded-lg p-4 text-center">
//             <div className="text-4xl mb-2">{step.icon}</div>
//             <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
//             <p className="text-gray-600">{step.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ResearchProcess;



"use client";
import React from 'react';
import { 
  Clipboard, 
  Activity, 
  BarChart3, 
  FileCheck,
  ArrowRight,
  Fingerprint
} from 'lucide-react';

const ResearchProcess = () => {
  const steps = [
    {
      id: 'RES-01',
      icon: <Clipboard className="w-6 h-6" />,
      title: 'Discovery & Strategy',
      description: 'Defining core objectives and architecting a multi-layered research roadmap.',
    },
    {
      id: 'RES-02',
      icon: <Activity className="w-6 h-6" />,
      title: 'Data Harvesting',
      description: 'Precision execution of the research plan using empirical gathering techniques.',
    },
    {
      id: 'RES-03',
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Intelligence Synthesis',
      description: 'Rigorous analysis and pattern recognition using advanced data modeling.',
    },
    {
      id: 'RES-04',
      icon: <FileCheck className="w-6 h-6" />,
      title: 'Strategic Reporting',
      description: 'Comprehensive delivery of actionable insights and deployment roadmaps.',
    },
  ];

  return (
    <section className="relative py-24 bg-slate-50/50 overflow-hidden border-y border-slate-100">
      {/* Background Polish */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      <div className="absolute inset-0 opacity-[0.01] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#37B6FF 2px, transparent 2px)', backgroundSize: '40px 40px' }}></div>

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-slate-100 text-[#37B6FF] text-[10px] font-bold uppercase tracking-[0.3em] mb-6 shadow-sm">
            <Fingerprint className="w-3.5 h-3.5" />
            Empirical Methodology
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 tracking-tight">
            Research <span className="text-[#37B6FF]">Lifecycle</span>
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto text-sm">
            Our systematic approach ensures that every project is grounded in data-driven certainty and strategic foresight.
          </p>
        </div>

        <div className="relative">
          {/* Decorative Path Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200/50 -translate-y-1/2 -z-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="group relative">
                <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-[#37B6FF]/5 hover:-translate-y-2 flex flex-col items-center text-center h-full">
                  
                  {/* Step ID Badge */}
                  <span className="text-[9px] font-mono font-bold text-slate-300 uppercase tracking-widest mb-6">
                    {step.id}
                  </span>

                  {/* Icon Hub */}
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 text-slate-400 flex items-center justify-center group-hover:bg-[#37B6FF] group-hover:text-white group-hover:rotate-[10deg] transition-all duration-500 mb-8 shadow-inner">
                    {step.icon}
                  </div>

                  <h3 className="text-xl font-display font-bold text-slate-900 mb-4 group-hover:text-[#37B6FF] transition-colors">
                    {step.title}
                  </h3>
                  
                  <p className="text-slate-500 text-sm leading-relaxed mb-8">
                    {step.description}
                  </p>

                  {/* Terminal Point */}
                  <div className="mt-auto pt-6 w-full border-t border-slate-50 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-[#37B6FF] group-hover:scale-150 transition-all duration-500"></div>
                  </div>
                </div>

                {/* Arrow Connector (Desktop Only) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white border border-slate-100 items-center justify-center text-slate-200 group-hover:text-[#37B6FF] group-hover:border-[#37B6FF]/30 transition-all shadow-sm">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Methodology Footer */}
        <div className="mt-20 flex justify-center">
          <div className="flex items-center gap-4 px-6 py-3 rounded-full bg-slate-900 text-white shadow-xl shadow-slate-900/10">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-6 h-6 rounded-full border border-slate-800 bg-slate-700 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="analyst" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest">
              Standardized Research Protocols Active
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchProcess;
