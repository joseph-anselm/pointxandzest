"use client"

import { useState } from 'react';

const Subscribe = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="lg:text-center">
          <p className="text-base leading-6 text-[#37B6FF] font-semibold tracking-wide uppercase">
            Sign up for our newsletter
          </p>
          <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Stay up to date with tech news!
          </h2>
          <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
            Subscribe to our newsletter and get the latest tech news delivered straight to your inbox.
          </p>
        </div>
        <form className="mt-12 sm:flex sm:justify-center lg:justify-start" onSubmit={handleSubmit}>
          <div className="min-w-0 flex-1">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              type="email"
              autoComplete="email"
              required
              className="block w-full appearance-none bg-white border border-[#37B6FF] rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-green-700 transition duration-150 ease-in-out sm:text-sm"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-3">
            <button
              type="submit"
              className="block w-full appearance-none text-white bg-[#37B6FF] border border-transparent rounded-md py-3 px-4 leading-tight hover:bg-[#0071BC] focus:outline-none focus:bg-[#0071BC] transition duration-150 ease-in-out sm:text-sm sm:w-auto"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;