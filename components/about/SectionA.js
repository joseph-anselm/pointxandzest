// import React from 'react';
// import Image from 'next/image';

// const SectionA = () => {
//   return (
//     <div className="container mx-auto max-w-7xl px-4 py-16">
//       <div className="flex flex-wrap -mx-4">
//         <div className="w-full md:w-1/2 px-4">
//           <div className="bg-white rounded-lg shadow-md relative">
//             <Image
//               src="/img/pointx-about1.jpg"
//               alt="About Us"
//               width={600}
//               height={500}
//               className="rounded-tr-xl rounded-bl-xl border-4 object-cover"
//             />
//             <div className="absolute top-0 right-0 -mt-4 mr-4 bg-blue-500 text-white py-1 px-2 rounded-full">
//               <span className="text-xl font-bold">IT Firm</span>
//             </div>
//           </div>
//         </div>
//         <div className="w-full md:w-1/2 px-4">
//           <div className="bg-white p-8 rounded-lg shadow-md h-full flex flex-col justify-between">
//             <div>
//               <h3 className="text-2xl font-bold mb-4">About PointX and Zest</h3>
//               <p className="mb-8">
//                 PointX and Zest is a leading IT firm in Nigeria that provides top-notch IT services, including research and innovation, managed services, web design and development, IT consultancy, online brand consultancy and optimization, and SEO solutions. We are committed to delivering exceptional value to our customers and driving innovation and growth through exceptional online experiences, strategic IT advisory, and strong online brand building.
//               </p>
//               <p className="mb-6">
//                 Our team of experienced and skilled professionals is dedicated to providing the best IT solutions to help businesses thrive in the digital world. We believe in the power of collaboration and teamwork to achieve our goals and conduct ourselves with the highest level of integrity and honesty.
//               </p>
//               <p className="mb-8">
//                 At PointX and Zest, we are committed to delivering exceptional value to our customers and driving innovation and growth through exceptional online experiences, strategic IT advisory, and strong online brand building.
//               </p>
//             </div>
//             <div className="flex items-center justify-center">
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//                 <div className="flex flex-col items-center">
//                   <span className="emoji" role="img" aria-label="Innovation" style={{ fontSize: '3rem' }}>🔬</span>
//                   <h1 className="text-lg font-bold text-center">Innovation</h1>
//                 </div>
//                 <div className="flex flex-col items-center">
//                   <span className="emoji" role="img" aria-label="Integrity" style={{ fontSize: '3rem' }}>💼</span>
//                   <h1 className="text-lg font-bold text-center">Integrity</h1>
//                 </div>
//                 <div className="flex flex-col items-center">
//                   <span className="emoji" role="img" aria-label="Collaboration" style={{ fontSize: '3rem' }}>🤝</span>
//                   <h1 className="text-lg font-bold text-center">Collaboration</h1>
//                 </div>
//                 <div className="flex flex-col items-center">
//                   <span className="emoji" role="img" aria-label="Customer Focus" style={{ fontSize: '3rem' }}>🎯</span>
//                   <h1 className="text-lg font-bold text-center">Customer Focus</h1>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SectionA;


import React from 'react';
import Image from 'next/image';

const SectionA = () => {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-16">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 px-4">
          <div className="bg-white rounded-tl-3xl rounded-br-3xl shadow-md relative overflow-hidden">
            <Image
              src="/img/pointx-about1.jpg"
              alt="About Us"
              layout="responsive"
              width={600}
              height={500}
              className="object-cover"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 px-4">
          <div className="bg-white p-8 rounded-lg shadow-md h-full flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4">About PointX and Zest</h3>
              <p className="mb-8">
                PointX and Zest is a leading IT firm in Nigeria that provides top-notch IT services, including research and innovation, managed services, web design and development, IT consultancy, online brand consultancy and optimization, and SEO solutions. We are committed to delivering exceptional value to our customers and driving innovation and growth through exceptional online experiences, strategic IT advisory, and strong online brand building.
              </p>
              <p className="mb-6">
                Our team of experienced and skilled professionals is dedicated to providing the best IT solutions to help businesses thrive in the digital world. We believe in the power of collaboration and teamwork to achieve our goals and conduct ourselves with the highest level of integrity and honesty.
              </p>
              <p className="mb-8">
                At PointX and Zest, we are committed to delivering exceptional value to our customers and driving innovation and growth through exceptional online experiences, strategic IT advisory, and strong online brand building.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="flex flex-col items-center">
                  <span className="emoji" role="img" aria-label="Innovation" style={{ fontSize: '3rem' }}>🔬</span>
                  <h1 className="text-lg font-bold text-center">Innovation</h1>
                </div>
                <div className="flex flex-col items-center">
                  <span className="emoji" role="img" aria-label="Integrity" style={{ fontSize: '3rem' }}>💼</span>
                  <h1 className="text-lg font-bold text-center">Integrity</h1>
                </div>
                <div className="flex flex-col items-center">
                  <span className="emoji" role="img" aria-label="Collaboration" style={{ fontSize: '3rem' }}>🤝</span>
                  <h1 className="text-lg font-bold text-center">Collaboration</h1>
                </div>
                <div className="flex flex-col items-center">
                  <span className="emoji" role="img" aria-label="Customer Focus" style={{ fontSize: '3rem' }}>🎯</span>
                  <h1 className="text-lg font-bold text-center">Customer Focus</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionA;
