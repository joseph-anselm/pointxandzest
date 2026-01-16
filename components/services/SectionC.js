// import React from 'react';

// const ServiceSteps = () => {
//   const steps = [
//     {
//       icon: '📝',
//       title: 'Plan',
//       description: 'Strategize and outline the project requirements.',
//     },
//     {
//       icon: '🛠️',
//       title: 'Develop',
//       description: 'Build and code the solution according to specifications.',
//     },
//     {
//       icon: '✔️',
//       title: 'Test',
//       description: 'Thoroughly test and debug the developed solution.',
//     },
//     {
//       icon: '🚀',
//       title: 'Deploy',
//       description: 'Release and launch the solution to production environment.',
//     },
//   ];

//   return (
//     <div className="container mx-auto max-w-7xl px-4 py-16">
//       <h2 className="text-3xl font-bold text-center mb-8"><span className='text-[#37B6FF]'>Service</span> Delivery Flow</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
//         {steps.map((step, index) => (
//           <div key={index} className="bg-gray-200 rounded-lg p-4 text-center">
//             <span className="text-4xl">{step.icon}</span>
//             <h3 className="text-xl font-semibold mt-4 mb-2">{step.title}</h3>
//             <p className="text-gray-700">{step.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ServiceSteps;




"use client";
import React from 'react';
import { ClipboardList, Cpu, ShieldCheck, Rocket, ChevronRight } from 'lucide-react';

const ServiceSteps = () => {
  const steps = [
    {
      icon: <ClipboardList className="w-6 h-6" />,
      title: 'Architect',
      description: 'Precise requirement mapping and strategic project outlining.',
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: 'Engineer',
      description: 'High-performance development aligned with global standards.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: 'Validate',
      description: 'Rigorous optimization, debugging, and integrity testing.',
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Deploy',
      description: 'Seamless production launch and ecosystem integration.',
    },
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 tracking-tight">
            Delivery <span className="text-[#37B6FF]">Pipeline</span>
          </h2>
          <div className="w-12 h-1 bg-slate-100 mx-auto mt-4 rounded-full overflow-hidden">
            <div className="w-1/2 h-full bg-[#37B6FF] animate-slide"></div>
          </div>
        </div>

        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-slate-100 -z-10"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="group relative text-center">
                {/* Icon Hub */}
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-white border border-slate-100 text-slate-400 group-hover:text-[#37B6FF] group-hover:border-[#37B6FF]/30 group-hover:shadow-xl group-hover:shadow-[#37B6FF]/5 transition-all duration-500 mb-8 relative z-10">
                  {step.icon}
                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-slate-50 border border-slate-100 text-[10px] font-bold text-slate-400 flex items-center justify-center group-hover:bg-[#37B6FF] group-hover:text-white group-hover:border-transparent transition-colors">
                    0{index + 1}
                  </div>
                </div>

                <h3 className="text-lg font-display font-bold text-slate-900 mb-3 group-hover:text-[#37B6FF] transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-[200px] mx-auto">
                  {step.description}
                </p>

                {/* Desktop Arrow Indicator */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-12 -right-4 items-center justify-center text-slate-100 group-hover:text-[#37B6FF]/20 transition-colors">
                    <ChevronRight className="w-8 h-8" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        .animate-slide {
          animation: slide 3s infinite linear;
        }
      `}} />
    </section>
  );
};

export default ServiceSteps;
