// import React from 'react';
// import Image from 'next/image';

// const VisionMission = () => {
//   return (
//     <div className="container mx-auto max-w-7xl px-4 py-16">
//       <h2 className="text-4xl font-bold mb-8 text-center">Our Vision and Mission</h2>
//       <div className="flex flex-wrap -mx-4">
//         <div className="w-full md:w-1/2 px-4">
//           <div className="bg-gray-100 p-8 rounded-lg h-full flex flex-col">
//             <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
//             <p className="mb-4">
//               To be the leading IT company that drives innovation and growth through
//               exceptional online experiences, strategic IT advisory, and strong online
//               brand building.
//             </p>
//             <div className="flex-shrink-0">
//               <Image
//                 src="/img/pointx-img1.jpg"
//                 alt="Vision Image"
//                 width={500}
//                 height={300}
//                 className="rounded-lg object-cover"
//               />
//             </div>
//           </div>
//         </div>
//         <div className="w-full md:w-1/2 px-4">
//           <div className="bg-gray-100 p-8 rounded-lg h-full flex flex-col">
//             <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
//             <p className="mb-4">
//               To provide top-notch IT services, including research and innovation,
//               managed services, web design and development, IT consultancy, online
//               brand consultancy and optimization, and SEO solutions, to help businesses
//               thrive in the digital world.
//             </p>
//             <div className="flex-shrink-0">
//               <Image
//                 src="/img/pointx-img2.jpg"
//                 alt="Mission Image"
//                 width={500}
//                 height={300}
//                 className="rounded-lg object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VisionMission;

// import React from 'react';
// import Image from 'next/image';

// const VisionMission = () => {
//   return (
//     <div className="container mx-auto max-w-7xl px-4 py-16">
//       <h2 className="text-4xl font-bold mb-8 text-center">Vision and Mission</h2>
//       <div className="flex flex-wrap -mx-4">
//         <div className="w-full md:w-1/2 px-4 flex flex-col bg-gray-100 p-8 rounded-lg">
//           <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
//           <p className="mb-4">
//             To be the leading IT company that drives innovation and growth through
//             exceptional online experiences, strategic IT advisory, and strong online
//             brand building.
//           </p>
//           <div className="flex justify-left">
//             <Image
//               src="/img/pointx-img1.jpg"
//               alt="Vision Image"
//               width={500}
//               height={300}
//               className="rounded-lg object-cover"
//             />
//           </div>
//         </div>
//         <div className="w-full md:w-1/2 px-4 flex flex-col bg-gray-100 p-8 rounded-lg">
//           <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
//           <p className="mb-4">
//             To provide top-notch IT services, including research and innovation,
//             managed services, web design and development, IT consultancy, online
//             brand consultancy and optimization, and SEO solutions, to help businesses
//             thrive in the digital world.
//           </p>
//           <div className="flex justify-left">
//             <Image
//               src="/img/pointx-img2.jpg"
//               alt="Mission Image"
//               width={500}
//               height={300}
//               className="rounded-lg object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VisionMission;



import React from 'react';
import Image from 'next/image';

const VisionMission = () => {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-16">
      <h2 className="text-4xl font-[500] mb-8 text-center">
        <span className="text-[#37B6FF]">Vision</span> and <span className="text-[#37B6FF]">Mission</span>
      </h2>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 px-4 mb-8">
          <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md flex flex-col h-full">
            <div className="flex justify-center">
              <Image
                src="/img/pointx-img2.jpg"
                alt="Vision Image"
                layout="responsive"
                width={500}
                height={300}
                className="object-cover rounded-t-lg"
              />
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="mb-4 flex-grow">
                To be the leading IT company that drives innovation and growth through
                exceptional online experiences, strategic IT advisory, and strong online
                brand building.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-4 mb-8">
          <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md flex flex-col h-full">
            <div className="flex justify-center">
              <Image
                src="/img/pointx-img1.jpg"
                alt="Mission Image"
                layout="responsive"
                width={500}
                height={300}
                className="object-cover rounded-t-lg"
              />
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="mb-4 flex-grow">
                To provide top-notch IT services, including research and innovation,
                managed services, web design and development, IT consultancy, online
                brand consultancy and optimization, and SEO solutions, to help businesses
                thrive in the digital world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;

