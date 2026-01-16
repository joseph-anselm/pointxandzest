// import React from 'react';

// const SectionA = () => {
//   const items = [
//     {
//       "icon": "🔬",
//       "title": "Research and Innovation",
//       "description": "Driving Innovation Through Research: PointX and Zest's Expertise.",
//       "url": "/services"
//     },
//     {
//       "icon": "🛠️",
//       "title": "IT Managed Services",
//       "description": "Efficient IT Management Solutions: PointX and Zest's Managed Services.",
//       "url": "/services"
//     },
//     {
//       "icon": "💻",
//       "title": "Web Design and Development",
//       "description": "Crafting Exceptional Online Experiences: PointX and Zest's Web Solutions",
//       "url": "/services"
//     },
//     {
//       "icon": "👨‍💻",
//       "title": "IT Consultancy",
//       "description": "Strategic IT Advisory: PointX and Zest's Consultancy Services",
//       "url": "/services"
//     },
//     {
//       "icon": "📈",
//       "title": "Online Brand Consultancy and Optimization",
//       "description": "Building Strong Online Brands: PointX and Zest's Brand Consultancy.",
//       "url": "/services"
//     },
//     {
//       "icon": "🔍",
//       "title": "SEO and Business Digitization",
//       "description": "Boosting Visibility, Driving Growth: PointX and Zest's SEO Solutions.",
//       "url": "/services"
//     }
//   ];

//   return (
//     <div className="container mx-auto max-w-7xl  px-4 py-16 bg-white">
//       <div className='m-8'>
//         <h2 className='my-4 text-center text-gray-500 text-xl'>Take A Look</h2>
//         <h1 className='my-4 text-center text-black text-4xl'>What we Provide</h1>
//         <p className='text-center text-gray-500 m-3'>PointX and Zest offers an array of topnotch and cutting edge IT services in Nigeria</p>

//       </div>
      
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//         {items.map((item, index) => (
//           <div key={index} className="bg-white rounded-lg shadow-lg p-6">
          
//             <div className="text-3xl font-bold text-blue-500">{item.icon}</div>
//             <h2 className="text-xl font-semibold mt-4 mb-2">{item.title}</h2>
//             <p className="text-gray-600">{item.description}</p>
//             <a href={item.url} className="block mt-4 text-blue-500 hover:underline">
//               Read more
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SectionA;


"use client";
import React from 'react';
import { 
  FlaskConical, 
  Settings, 
  Code2, 
  Briefcase, 
  BarChart3, 
  Search, 
  ArrowRight 
} from 'lucide-react';

const SectionA = () => {
  const items = [
    {
      icon: <FlaskConical className="w-6 h-6" />,
      title: "Research and Innovation",
      description: "Driving Innovation Through Research: PointX and Zest's Expertise in technological advancement.",
      url: "/services"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "IT Managed Services",
      description: "Efficient IT Management Solutions: Enterprise-grade managed services for seamless operations.",
      url: "/services"
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Web Design and Development",
      description: "Crafting Exceptional Online Experiences: Bespoke web solutions that convert and perform.",
      url: "/services"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "IT Consultancy",
      description: "Strategic IT Advisory: Navigating the complex landscape of modern digital infrastructure.",
      url: "/services"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Brand Consultancy",
      description: "Building Strong Online Brands: Comprehensive optimization and growth strategies for identity.",
      url: "/services"
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "SEO and Digitization",
      description: "Boosting Visibility, Driving Growth: Scaling businesses through organic search dominance.",
      url: "/services"
    }
  ];

  return (
    <section className="relative py-10 bg-white overflow-hidden">
      {/* Background Ornaments - subtle for light theme */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#37B6FF]/5 rounded-full blur-[100px] -z-0"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[100px] -z-0"></div>
      
      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        {/* Header Content */}
        <div className="text-center mb-24 space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#37B6FF]/10 text-[#37B6FF] text-[10px] font-bold tracking-[0.3em] uppercase mb-4">
            Our Expertise
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-900 tracking-tight">
            What we <span className="text-[#37B6FF]">Provide</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-500 text-lg leading-relaxed">
            PointX and Zest offers an array of top-notch and cutting-edge IT services engineered for the Nigerian and global market.
          </p>
        </div>
        
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="group relative p-10 rounded-3xl bg-white border border-slate-100 transition-all duration-500 hover:border-[#37B6FF]/30 hover:-translate-y-2 shadow-sm hover:shadow-xl hover:shadow-[#37B6FF]/5"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-900 mb-8 group-hover:scale-110 group-hover:bg-[#37B6FF] group-hover:text-white transition-all duration-500 shadow-sm">
                {item.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-4 group-hover:text-[#37B6FF] transition-colors">
                {item.title}
              </h3>
              
              <p className="text-slate-600 text-base leading-relaxed mb-10 min-h-[70px]">
                {item.description}
              </p>
              
              {/* Footer Link */}
              <div className="flex items-center justify-between border-t border-slate-50 pt-6">
                <a 
                  href={item.url} 
                  className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#37B6FF] group-hover:gap-4 transition-all"
                >
                  Explore Details
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Element */}
        <div className="mt-24 p-12 rounded-[40px] bg-slate-900 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl shadow-slate-900/20">
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-display font-bold text-white mb-3">Ready to transform your business?</h4>
            <p className="text-slate-400 text-lg">Consult with our research experts today for tailored IT solutions.</p>
          </div>
          <button className="px-10 py-5 rounded-full bg-[#37B6FF] text-white font-bold text-lg hover:scale-105 hover:bg-white hover:text-slate-900 transition-all shadow-xl shadow-[#37B6FF]/20 whitespace-nowrap">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default SectionA;
