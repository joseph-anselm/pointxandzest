import React from 'react';

const SubHeader = ({ title, backgroundImage }) => {
  return (
    <div>
      {/* Header */}
      <div
        className="h-[400px] max-h-[400px] bg-cover bg-center relative"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        {/* Image Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Title */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase z-10 text-center">
            {title}
          </h1>
        </div>
      </div>

      {/* Rest of the page content */}
      {/* Add your content here */}
    </div>
  );
};

export default SubHeader;
