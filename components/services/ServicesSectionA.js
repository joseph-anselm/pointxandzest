// "use client"

// // import React, { useState } from 'react';

// // const SectionA = () => {
// //   const services = [
// //     {
// //       id: 1,
// //       title: "Service 1",
// //       shortDescription: "Short description for Service 1",
// //       description: "Full description for Service 1. This can be a longer text explaining the service in detail.",
// //       image: "/img/service1.jpg"
// //     },
// //     {
// //       id: 2,
// //       title: "Service 2",
// //       shortDescription: "Short description for Service 2",
// //       description: "Full description for Service 2. This can be a longer text explaining the service in detail.",
// //       image: "/img/service2.jpg"
// //     },
// //     // Add more service items
// //   ];

// //   const [activeIndex, setActiveIndex] = useState(null);

// //   const toggleTab = (index) => {
// //     setActiveIndex(activeIndex === index ? null : index);
// //   };

// //   return (
// //     <div className="container mx-auto max-w-7xl px-4 py-16">
// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// //         {services.map((service, index) => (
// //           <div key={service.id} className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
// //             {/* Image Section */}
// //             <div className="md:w-1/2">
// //               <img src={service.image} alt={service.title} className="w-full h-auto object-cover" />
// //             </div>
// //             {/* Service Info Section */}
// //             <div className="md:w-1/2 p-6">
// //               <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
// //               <p className="text-gray-600 mb-4">{service.shortDescription}</p>
// //               {/* Collapsible Tab */}
// //               <div className="border-t border-gray-200 mt-4 pt-4">
// //                 <button
// //                   onClick={() => toggleTab(index)}
// //                   className="text-blue-500 font-semibold focus:outline-none"
// //                 >
// //                   {activeIndex === index ? "Hide Details" : "Show Details"}
// //                 </button>
// //                 {activeIndex === index && (
// //                   <div className="mt-4">
// //                     <p className="text-gray-600">{service.description}</p>
// //                   </div>
// //                 )}
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default SectionA;

// import React, { useState } from 'react';

// const SectionA = () => {
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
//         id: 6,
//         icon: "🔍",
//         title: "SEO and Business Digitization",
//         shortDescription: "Boosting Visibility, Driving Growth: PointX and Zest's SEO Solutions.",
//         description: "Boost your online visibility and accelerate business growth with PointX and Zest's SEO Solutions. Our search engine optimization (SEO) services are designed to optimize your website's performance in search engine results, driving organic traffic and increasing conversions. From keyword research and on-page optimization to content marketing and link building, we employ proven strategies to help you achieve sustainable results and stay ahead of the competition.",
//         url: "#"
//       }
//   ];

//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleTab = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <div className="container mx-auto max-w-7xl px-4 py-16">
//          <div className="header mb-8 text-center">
//             <h1 className="text-3xl font-bold mb-4">Our <span className='text-[#37B6FF]'> Services </span></h1>
//              <p className="text-gray-600">Explore our range of services designed to help your business thrive.</p>
//         </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {services.map((service, index) => (
//           <div key={service.id} className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
//             {/* Icon Section */}
//             <div className="md:w-1/6 flex items-center justify-center bg-blue-100 text-blue-500 text-4xl">
//               {service.icon}
//             </div>
//             {/* Service Info Section */}
//             <div className="md:w-5/6 p-6">
//               <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
//               <p className="text-gray-600 mb-4">{service.shortDescription}</p>
//               {/* Collapsible Tab */}
//               <div className="border-t border-gray-200 mt-4 pt-4">
//                 <button
//                   onClick={() => toggleTab(index)}
//                   className="text-blue-500 font-semibold focus:outline-none"
//                 >
//                   {activeIndex === index ? "Hide Details" : "Show Details"}
//                 </button>
//                 {activeIndex === index && (
//                   <div className="mt-4">
//                     <p className="text-gray-600">{service.description}</p>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SectionA;



"use client";
import React, { useState } from 'react';
import { 
  Microscope, 
  CloudCog, 
  Code2, 
  ShieldCheck, 
  BarChart3, 
  Search, 
  ChevronDown, 
  ArrowRight,
  Plus
} from 'lucide-react';

const ServicesSectionA = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const services = [
    {
      id: "PZ-01",
      icon: <Microscope className="w-6 h-6" />,
      title: "Research and Innovation",
      shortDescription: "Driving market-leading innovation through rigorous architectural research.",
      description: "Stay ahead of the curve with our specialized R&D. From identifying emerging tech trends to developing bespoke methodologies, we leverage advanced data modeling to ensure your business remains a first-mover in your industry.",
    },
    {
      id: "PZ-02",
      icon: <CloudCog className="w-6 h-6" />,
      title: "IT Managed Services",
      shortDescription: "End-to-end infrastructure management with a focus on uptime and security.",
      description: "Our proactive managed solutions cover 24/7 network monitoring, software lifecycle maintenance, and robust cybersecurity protocols. We handle the complexity of your tech stack so you can focus on core growth.",
    },
    {
      id: "PZ-03",
      icon: <Code2 className="w-6 h-6" />,
      title: "Web Design & Engineering",
      shortDescription: "Crafting high-performance digital experiences and interactive web applications.",
      description: "We combine aesthetic precision with technical excellence. Our developers build responsive, SEO-ready, and ultra-fast web platforms that engage users and convert visitors into loyal customers.",
    },
    {
      id: "PZ-04",
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Strategic IT Consultancy",
      shortDescription: "High-level advisory for digital transformation and technology planning.",
      description: "Gain clarity in a complex landscape. Our consultants provide personalized roadmaps for digital transformation, vendor management, and IT budget optimization, ensuring your tech investments deliver measurable ROI.",
    },
    {
      id: "PZ-05",
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Online Brand Optimization",
      shortDescription: "Enhancing brand credibility and digital presence across global markets.",
      description: "Build a brand that resonates. We offer a holistic approach to digital identity, combining strategy, content curation, and reputation management to build a commanding presence in your vertical.",
    },
    {
      id: "PZ-06",
      icon: <Search className="w-6 h-6" />,
      title: "SEO & Business Digitization",
      shortDescription: "Scaling visibility through data-driven search engine optimization.",
      description: "Accelerate your reach with our performance SEO solutions. We utilize deep keyword intelligence, on-page optimization, and technical SEO audits to drive sustainable organic growth and authority.",
    }
  ];

  return (
    <section id="services" className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-slate-50 rounded-full blur-[120px] -mr-48 -mt-48 opacity-50"></div>
      
      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 text-[#37B6FF] text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
            <Plus className="w-3 h-3" />
            Our Capabilities
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-900 tracking-tight mb-6">
            Precision <span className="text-[#37B6FF]">Solutions</span> for the <br /> Modern Enterprise.
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed max-w-2xl">
            We provide a comprehensive suite of IT services designed to transform operational challenges into competitive advantages.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const isOpen = activeIndex === index;
            return (
              <div 
                key={service.id} 
                className={`group relative flex flex-col bg-white border rounded-[2rem] transition-all duration-500 hover:shadow-2xl hover:shadow-[#37B6FF]/10 ${
                  isOpen ? 'border-[#37B6FF] ring-4 ring-[#37B6FF]/5' : 'border-slate-100'
                }`}
              >
                <div className="p-8 lg:p-10 flex flex-col h-full">
                  {/* Card Header */}
                  <div className="flex justify-between items-start mb-8">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                      isOpen ? 'bg-[#37B6FF] text-white shadow-lg shadow-[#37B6FF]/20' : 'bg-slate-50 text-slate-400 group-hover:bg-[#37B6FF]/10 group-hover:text-[#37B6FF]'
                    }`}>
                      {service.icon}
                    </div>
                    <span className="text-[10px] font-bold font-mono text-slate-300 uppercase tracking-widest">{service.id}</span>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-slate-900 mb-4 group-hover:text-[#37B6FF] transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  {/* Expandable Section */}
                  <div className="mt-auto">
                    <button 
                      onClick={() => setActiveIndex(isOpen ? null : index)}
                      className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#37B6FF] hover:text-slate-900 transition-colors focus:outline-none"
                    >
                      {isOpen ? 'Close Technical Details' : 'View Full Scope'}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[300px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                      <div className="pt-6 border-t border-slate-50">
                        <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">
                          "{service.description}"
                        </p>
                        <button className="flex items-center gap-2 py-3 px-6 bg-slate-50 hover:bg-[#37B6FF] hover:text-white rounded-xl text-[10px] font-bold uppercase tracking-[0.2em] transition-all group/btn">
                          Request Briefing
                          <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Subtle hover pattern */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity pointer-events-none rounded-[2rem]" style={{ backgroundImage: 'radial-gradient(#37B6FF 2px, transparent 2px)', backgroundSize: '24px 24px' }}></div>
              </div>
            );
          })}
        </div>

        {/* Global CTA Link */}
        <div className="mt-20 flex flex-col md:flex-row items-center justify-between p-8 md:p-12 rounded-[2.5rem] bg-slate-900 overflow-hidden relative group">
           <div className="absolute inset-0 bg-gradient-to-r from-[#37B6FF]/10 to-transparent"></div>
           <div className="relative z-10 mb-8 md:mb-0 text-center md:text-left">
             <h4 className="text-white text-2xl font-display font-bold mb-2">Need a custom technical roadmap?</h4>
             <p className="text-slate-400 text-sm">Schedule a session with our principal research consultants today.</p>
           </div>
           <button className="relative z-10 px-10 py-5 bg-[#37B6FF] text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all shadow-xl shadow-[#37B6FF]/20 active:scale-95">
             Book Consultation
           </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSectionA;
