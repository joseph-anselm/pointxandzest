import React from 'react';

const ResearchProcess = () => {
  const steps = [
    {
      icon: '📝',
      title: 'Plan',
      description: 'Develop a detailed research plan.',
    },
    {
      icon: '⚙️',
      title: 'Execute',
      description: 'Execute the research plan effectively.',
    },
    {
      icon: '📊',
      title: 'Analyze',
      description: 'Analyze the collected data thoroughly.',
    },
    {
      icon: '📑',
      title: 'Report',
      description: 'Create a comprehensive research report.',
    },
  ];

  return (
    <div className="container mx-auto max-w-7xl px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-8"><span className='text-[#37B6FF]'>Research </span> Delivery Flow</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {steps.map((step, index) => (
          <div key={index} className="bg-gray-200 rounded-lg p-4 text-center">
            <div className="text-4xl mb-2">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearchProcess;
