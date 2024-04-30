import React from 'react';

const SectionA = () => {
  const items = [
    {
      "icon": "🔬",
      "title": "Research and Innovation",
      "description": "Driving Innovation Through Research: PointX and Zest&apos;s Expertise.",
      "url": "#"
    },
    {
      "icon": "🛠️",
      "title": "IT Managed Services",
      "description": "Efficient IT Management Solutions: PointX and Zest&apos;s Managed Services.",
      "url": "#"
    },
    {
      "icon": "💻",
      "title": "Web Design and Development",
      "description": "Crafting Exceptional Online Experiences: PointX and Zest's Web Solutions",
      "url": "#"
    },
    {
      "icon": "👨‍💻",
      "title": "IT Consultancy",
      "description": "Strategic IT Advisory: PointX and Zest's Consultancy Services",
      "url": "#"
    },
    {
      "icon": "📈",
      "title": "Online Brand Consultancy and Optimization",
      "description": "Building Strong Online Brands: PointX and Zest's Brand Consultancy.",
      "url": "#"
    },
    {
      "icon": "🔍",
      "title": "SEO and Business Digitization",
      "description": "Boosting Visibility, Driving Growth: PointX and Zest's SEO Solutions.",
      "url": "#"
    }
  ];

  return (
    <div className="container mx-auto max-w-7xl  px-4 py-16">
      <div className='m-8'>
        <h2 className='my-4 text-center text-gray-700 text-xl'>Take Look</h2>
        <h1 className='my-4 text-center text-black text-4xl'>What we Provide</h1>
        <p className='text-center text-gray-700 m-3'>PointX and Zest offers an array of topnotch and cutting edge IT services in Nigeria</p>

      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6">
          
            <div className="text-3xl font-bold text-blue-500">{item.icon}</div>
            <h2 className="text-xl font-semibold mt-4 mb-2">{item.title}</h2>
            <p className="text-gray-600">{item.description}</p>
            <a href={item.url} className="block mt-4 text-blue-500 hover:underline">
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionA;