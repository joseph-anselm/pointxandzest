// "use client"

// import React, { useState } from 'react';

// const Service = ({ service }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
//       {/* Icon Section */}
//       <div className="md:w-1/6 flex items-center justify-center bg-blue-100 text-blue-500 text-4xl">
//         {service.icon}
//       </div>
//       {/* Service Info Section */}
//       <div className="md:w-5/6 p-6">
//         <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
//         <p className="text-gray-600 mb-4">{service.shortDescription}</p>
//         {/* Collapsible Tab */}
//         <div className="border-t border-gray-200 mt-4 pt-4">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="text-blue-500 font-semibold focus:outline-none"
//           >
//             {isOpen ? "Hide Details" : "Show Details"}
//           </button>
//           {isOpen && (
//             <div className="mt-4">
//               <p className="text-gray-600">{service.description}</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// const Services = () => {
//   const services = [
//     {
//       id: 1,
//       icon: "🔬",
//       title: "Research and Innovation",
//       shortDescription: "Driving Innovation Through Research: PointX and Zest's Expertise.",
//       description: "Stay ahead of the curve with PointX and Zest's Research and Innovation services. Our team of experts is dedicated to driving innovation through thorough research and analysis. From identifying emerging trends to developing cutting-edge solutions, we leverage the latest technologies and methodologies to ensure that your business remains at the forefront of innovation.",
//       url: "#"
//     },
//     {
//       id: 2,
//       icon: "🛠️",
//       title: "IT Managed Services",
//       shortDescription: "Efficient IT Management Solutions: PointX and Zest's Managed Services.",
//       description: "Streamline your IT operations with PointX and Zest's comprehensive Managed Services. Our efficient IT management solutions cover a wide range of services, including network monitoring, software maintenance, cybersecurity, and more. With our proactive approach, we ensure the reliability, security, and performance of your IT infrastructure, allowing you to focus on your core business objectives.",
//       url: "#"
//     },
//     {
//       id: 3,
//       icon: "💻",
//       title: "Web Design and Development",
//       shortDescription: "Crafting Exceptional Online Experiences: PointX and Zest's Web Solutions",
//       description: "Transform your online presence with PointX and Zest's Web Design and Development services. Our team of skilled designers and developers creates exceptional online experiences tailored to your unique needs and objectives. From responsive websites to interactive web applications, we combine creativity and technical expertise to deliver engaging solutions that captivate your audience and drive results.",
//       url: "#"
//     },
//     {
//       id: 4,
//       icon: "👨‍💻",
//       title: "IT Consultancy",
//       shortDescription: "Strategic IT Advisory: PointX and Zest's Consultancy Services",
//       description: "Gain strategic insights and guidance with PointX and Zest's IT Consultancy services. Our experienced consultants provide personalized advisory services to help you navigate the complexities of the IT landscape. Whether you need assistance with technology planning, project management, or digital transformation, we offer practical solutions and actionable recommendations to support your business goals.",
//       url: "#"
//     },
//     {
//       id: 5,
//       icon: "📈",
//       title: "Online Brand Optimization",
//       shortDescription: "Building Strong Online Brands: PointX and Zest's Brand Consultancy.",
//       description: "Build a strong online brand and drive growth with PointX and Zest's Brand Consultancy services. Our team of branding experts offers comprehensive solutions to enhance your brand's visibility, credibility, and reputation in the digital space. From brand strategy and identity design to content creation and reputation management, we help you establish a compelling brand presence that resonates with your target audience.",
//       url: "#"
//     },
//     {
//       id: 6,
//       icon: "📈",
//       title: "SEO and Business Digitization",
//       shortDescription: "Boosting Visibility, Driving Growth: PointX and Zest's SEO Solutions.",
//       description: "Boost your online visibility and accelerate business growth with PointX and Zest's SEO Solutions. Our search engine optimization (SEO) services are designed to optimize your website's performance in search engine results, driving organic traffic and increasing conversions. From keyword research and on-page optimization to content marketing and link building, we employ proven strategies to help you achieve sustainable results and stay ahead of the competition.",
//       url: "#"
//     }
//   ];

//   return (
//     <div className="container mx-auto max-w-7xl px-4 py-16">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {services.map((service) => (
//           <Service key={service.id} service={service} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Services;


"use client";
import React, { useState } from 'react';
import { 
  Dna, 
  Cpu, 
  Terminal, 
  Briefcase, 
  Layers, 
  TrendingUp, 
  ChevronRight, 
  Plus,
  ArrowRight,
  Workflow
} from 'lucide-react';

const ServiceModule = ({ service, isOpen, onToggle }) => {
  return (
    <div 
      className={`group relative bg-white border rounded-[2rem] transition-all duration-500 overflow-hidden ${
        isOpen ? 'border-[#37B6FF] ring-4 ring-[#37B6FF]/5 shadow-2xl shadow-slate-200' : 'border-slate-100 hover:border-[#37B6FF]/30 hover:shadow-xl hover:shadow-slate-100'
      }`}
    >
      <div className="flex flex-col lg:flex-row min-h-[220px]">
        {/* Icon & ID Hub */}
        <div className={`lg:w-1/4 p-8 flex flex-col items-center justify-center transition-colors duration-500 ${
          isOpen ? 'bg-[#37B6FF] text-white' : 'bg-slate-50 text-slate-400 group-hover:bg-slate-100 group-hover:text-[#37B6FF]'
        }`}>
          <div className="relative mb-4">
             <div className={`p-4 rounded-2xl transition-transform duration-500 ${isOpen ? 'bg-white/20' : 'bg-white shadow-sm'}`}>
                {service.icon}
             </div>
             <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-green-500 border-2 border-white animate-pulse"></div>
          </div>
          <span className={`text-[10px] font-bold font-mono uppercase tracking-[0.2em] mt-2 ${isOpen ? 'text-white/80' : 'text-slate-300'}`}>
            {service.code}
          </span>
        </div>

        {/* Info Area */}
        <div className="lg:w-3/4 p-8 lg:p-10 flex flex-col justify-center">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-2xl font-display font-bold text-slate-900 group-hover:text-[#37B6FF] transition-colors">
              {service.title}
            </h3>
            <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-[9px] font-bold text-slate-400 uppercase tracking-widest">
              Available
            </span>
          </div>
          
          <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-xl">
            {service.shortDescription}
          </p>

          <div className="flex items-center gap-6">
            <button 
              onClick={onToggle}
              className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#37B6FF] hover:text-slate-950 transition-colors"
            >
              {isOpen ? 'Collapse Protocol' : 'Technical Breakdown'}
              <ChevronRight className={`w-3.5 h-3.5 transition-transform duration-500 ${isOpen ? 'rotate-90' : ''}`} />
            </button>
            <div className="h-px flex-1 bg-slate-50"></div>
          </div>

          {/* Collapsible Content */}
          <div className={`overflow-hidden transition-all duration-700 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 mt-8' : 'max-h-0 opacity-0'}`}>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="flex items-center gap-2 text-[10px] font-bold text-[#37B6FF] uppercase tracking-widest mb-3">
                <Workflow className="w-3 h-3" />
                Strategic Outcome
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-[#37B6FF] text-white rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-slate-900 transition-all flex items-center gap-2 group/btn">
                  Consultation
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
                <button className="px-6 py-3 bg-white border border-slate-200 text-slate-600 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-slate-50 transition-all">
                  Download Scope
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesSectionB = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const services = [
    {
      id: 1,
      code: "PZ-MOD-01",
      icon: <Dna className="w-6 h-6" />,
      title: "Research and Innovation",
      shortDescription: "Driving market intelligence through multi-disciplinary technological research.",
      description: "Stay ahead of the curve with PointX and Zest's Research and Innovation services. Our team of experts is dedicated to driving innovation through thorough research and analysis. From identifying emerging trends to developing cutting-edge solutions, we leverage the latest technologies to ensure your business remains at the forefront of innovation.",
    },
    {
      id: 2,
      code: "PZ-MOD-02",
      icon: <Cpu className="w-6 h-6" />,
      title: "IT Managed Services",
      shortDescription: "End-to-end technical oversight ensuring infrastructure reliability and scale.",
      description: "Streamline your IT operations with PointX and Zest's comprehensive Managed Services. Our efficient IT management solutions cover a wide range of services, including network monitoring, software maintenance, and cybersecurity. With our proactive approach, we ensure the reliability and performance of your IT infrastructure.",
    },
    {
      id: 3,
      code: "PZ-MOD-03",
      icon: <Terminal className="w-6 h-6" />,
      title: "Web Design and Engineering",
      shortDescription: "Architecting elite digital experiences for high-growth global platforms.",
      description: "Transform your online presence with PointX and Zest's Web Design and Development services. Our team creates exceptional online experiences tailored to your unique needs. From responsive websites to interactive web applications, we combine creativity and technical expertise to deliver engaging solutions.",
    },
    {
      id: 4,
      code: "PZ-MOD-04",
      icon: <Briefcase className="w-6 h-6" />,
      title: "Executive IT Consultancy",
      shortDescription: "Strategic technical advisory for navigating complex enterprise landscapes.",
      description: "Gain strategic insights and guidance with PointX and Zest's IT Consultancy services. Our experienced consultants provide personalized advisory services to help you navigate the complexities of the IT landscape, assisting with technology planning and digital transformation roadmaps.",
    },
    {
      id: 5,
      code: "PZ-MOD-05",
      icon: <Layers className="w-6 h-6" />,
      title: "Online Brand Optimization",
      shortDescription: "Deploying brand identity frameworks that command digital authority.",
      description: "Build a strong online brand and drive growth with PointX and Zest's Brand Consultancy services. Our team of branding experts offers comprehensive solutions to enhance your brand's visibility and reputation. From strategy to reputation management, we help establish a compelling brand presence.",
    },
    {
      id: 6,
      code: "PZ-MOD-06",
      icon: <TrendingUp className="w-6 h-6" />,
      title: "SEO and Digitization",
      shortDescription: "Scaling search visibility through algorithmic precision and data audits.",
      description: "Boost your online visibility and accelerate business growth with PointX and Zest's SEO Solutions. Our services are designed to optimize your performance in search engine results, driving organic traffic and increasing conversions through keyword research and link building.",
    }
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-slate-50/30 overflow-hidden">
      {/* Background Polish */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#37B6FF]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-slate-100 text-[#37B6FF] text-[10px] font-bold uppercase tracking-[0.3em] mb-6 shadow-sm">
              <Plus className="w-3 h-3" />
              Service Modules
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-900 tracking-tight leading-[1.1]">
              Engineered for <br />
              <span className="text-[#37B6FF]">Absolute Performance.</span>
            </h2>
          </div>
          <div className="md:text-right">
             <p className="text-slate-400 text-sm font-medium uppercase tracking-[0.2em] mb-2">Systems Status</p>
             <div className="flex items-center justify-start md:justify-end gap-3 text-slate-900 font-bold">
               <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
               Operational & Ready
             </div>
          </div>
        </div>

        <div className="space-y-6">
          {services.map((service, index) => (
            <ServiceModule 
              key={service.id} 
              service={service} 
              isOpen={activeIndex === index}
              onToggle={() => setActiveIndex(activeIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSectionB;
