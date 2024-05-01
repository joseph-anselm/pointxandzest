// import React from 'react';

// const SubHeader = ({ title, backgroundImage }) => {
//   return (
//     <div>
//       {/* Header */}
//       <div
//         className="h-[400px] max-h-[400px] bg-cover bg-center relative"
//         style={{ backgroundImage: `url('${backgroundImage}')` }}
//       >
//         {/* Image Overlay */}
//         <div className="absolute inset-0 bg-black opacity-60"></div>

//         {/* Title */}
//         <div className="absolute inset-0 flex items-center justify-center">
//           <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase z-10 text-center">
//             {title}
//           </h1>
//         </div>
//       </div>

//       {/* Rest of the page content */}
//       {/* Add your content here */}
//     </div>
//   );
// };

// export default SubHeader;

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
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-center z-10 text-4xl md:text-5xl lg:text-6xl text-[#37B6FF] font-extrabold capitalized">
            {title.slice(0, 1)}
            <span className="text-[#0071BC]">{title.slice(1, 2)}</span>
            <span className="text-white">{title.slice(2)}</span>
          </h1>
          <div className="mt-4 h-1 w-28 bg-[#37B6FF]"></div>
        </div>
      </div>

      {/* Rest of the page content */}
      {/* Add your content here */}
    </div>
  );
};

export default SubHeader;


