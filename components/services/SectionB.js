"use client"

import React, { useState } from 'react';

const Service = ({ service }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Icon Section */}
      <div className="md:w-1/6 flex items-center justify-center bg-blue-100 text-blue-500 text-4xl">
        {service.icon}
      </div>
      {/* Service Info Section */}
      <div className="md:w-5/6 p-6">
        <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
        <p className="text-gray-600 mb-4">{service.shortDescription}</p>
        {/* Collapsible Tab */}
        <div className="border-t border-gray-200 mt-4 pt-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-blue-500 font-semibold focus:outline-none"
          >
            {isOpen ? "Hide Details" : "Show Details"}
          </button>
          {isOpen && (
            <div className="mt-4">
              <p className="text-gray-600">{service.description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      id: 1,
      icon: "🔬",
      title: "Research and Innovation",
      shortDescription: "Driving Innovation Through Research: PointX and Zest's Expertise.",
      description: "Stay ahead of the curve with PointX and Zest's Research and Innovation services. Our team of experts is dedicated to driving innovation through thorough research and analysis. From identifying emerging trends to developing cutting-edge solutions, we leverage the latest technologies and methodologies to ensure that your business remains at the forefront of innovation.",
      url: "#"
    },
    {
      id: 2,
      icon: "🛠️",
      title: "IT Managed Services",
      shortDescription: "Efficient IT Management Solutions: PointX and Zest's Managed Services.",
      description: "Streamline your IT operations with PointX and Zest's comprehensive Managed Services. Our efficient IT management solutions cover a wide range of services, including network monitoring, software maintenance, cybersecurity, and more. With our proactive approach, we ensure the reliability, security, and performance of your IT infrastructure, allowing you to focus on your core business objectives.",
      url: "#"
    },
    {
      id: 3,
      icon: "💻",
      title: "Web Design and Development",
      shortDescription: "Crafting Exceptional Online Experiences: PointX and Zest's Web Solutions",
      description: "Transform your online presence with PointX and Zest's Web Design and Development services. Our team of skilled designers and developers creates exceptional online experiences tailored to your unique needs and objectives. From responsive websites to interactive web applications, we combine creativity and technical expertise to deliver engaging solutions that captivate your audience and drive results.",
      url: "#"
    },
    {
      id: 4,
      icon: "👨‍💻",
      title: "IT Consultancy",
      shortDescription: "Strategic IT Advisory: PointX and Zest's Consultancy Services",
      description: "Gain strategic insights and guidance with PointX and Zest's IT Consultancy services. Our experienced consultants provide personalized advisory services to help you navigate the complexities of the IT landscape. Whether you need assistance with technology planning, project management, or digital transformation, we offer practical solutions and actionable recommendations to support your business goals.",
      url: "#"
    },
    {
      id: 5,
      icon: "📈",
      title: "Online Brand Optimization",
      shortDescription: "Building Strong Online Brands: PointX and Zest's Brand Consultancy.",
      description: "Build a strong online brand and drive growth with PointX and Zest's Brand Consultancy services. Our team of branding experts offers comprehensive solutions to enhance your brand's visibility, credibility, and reputation in the digital space. From brand strategy and identity design to content creation and reputation management, we help you establish a compelling brand presence that resonates with your target audience.",
      url: "#"
    },
    {
      id: 6,
      icon: "📈",
      title: "SEO and Business Digitization",
      shortDescription: "Boosting Visibility, Driving Growth: PointX and Zest's SEO Solutions.",
      description: "Boost your online visibility and accelerate business growth with PointX and Zest's SEO Solutions. Our search engine optimization (SEO) services are designed to optimize your website's performance in search engine results, driving organic traffic and increasing conversions. From keyword research and on-page optimization to content marketing and link building, we employ proven strategies to help you achieve sustainable results and stay ahead of the competition.",
      url: "#"
    }
  ];

  return (
    <div className="container mx-auto max-w-7xl px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;