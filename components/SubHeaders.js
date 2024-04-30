import React from 'react';

const SubHeaders = () => {
  return (
    <header className="bg-blue-500 py-12">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-white">
          <h1 className="text-4xl font-bold mb-2">About Us</h1>
          <p className="text-lg">Learn more about our company</p>
        </div>
        <nav className="mt-4" aria-label="Breadcrumb">
          <ol className="flex text-white">
            <li>
              <a href="#" className="hover:underline">Home</a>
              <span className="mx-2">/</span>
            </li>
            <li>About Us</li>
          </ol>
        </nav>
      </div>
    </header>
  );
};

export default SubHeaders;
