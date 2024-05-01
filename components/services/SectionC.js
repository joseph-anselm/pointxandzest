import React from 'react';

const ServiceSteps = () => {
  const steps = [
    {
      icon: '📝',
      title: 'Plan',
      description: 'Strategize and outline the project requirements.',
    },
    {
      icon: '🛠️',
      title: 'Develop',
      description: 'Build and code the solution according to specifications.',
    },
    {
      icon: '✔️',
      title: 'Test',
      description: 'Thoroughly test and debug the developed solution.',
    },
    {
      icon: '🚀',
      title: 'Deploy',
      description: 'Release and launch the solution to production environment.',
    },
  ];

  return (
    <div className="container mx-auto max-w-7xl px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-8"><span className='text-[#37B6FF]'>Service</span> Delivery Flow</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {steps.map((step, index) => (
          <div key={index} className="bg-gray-200 rounded-lg p-4 text-center">
            <span className="text-4xl">{step.icon}</span>
            <h3 className="text-xl font-semibold mt-4 mb-2">{step.title}</h3>
            <p className="text-gray-700">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSteps;

