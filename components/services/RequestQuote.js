import React from 'react';

const RequestQuote = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Request a Quote</h2>
            <p className="text-gray-700 text-lg mb-6">Get in touch with us for a customized solution tailored to your business needs.</p>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-blue-500" />
              <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-blue-500" />
              <textarea placeholder="Your Message" rows="4" className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-blue-500"></textarea>
              <button type="submit" className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300">Submit</button>
            </form>
          </div>
          <div className="flex justify-center">
            <img src="/img/pointx-img2.jpg" alt="Request a Quote" className="w-auto h-auto " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestQuote;
