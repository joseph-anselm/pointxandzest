"use client"
// import { useState, useEffect } from 'react';
// import { Disclosure } from '@headlessui/react';
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

// const navigation = [
//   { name: 'Home', href: '/', current: true },
//   { name: 'About', href: '/about', current: false },
//   { name: 'Services', href: '/Who-we-are', current: false },
//   { name: 'Contact', href: '/contact-us', current: false },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ');
// }

// export default function Navbar() {
//   const [scrolling, setScrolling] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       const isScrolling = scrollTop > 50;
//       setScrolling(isScrolling);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <>
//     <div className={`fixed top-0 left-0 right-0 z-50 ${scrolling ? 'bg-white shadow-md' : 'bg-transparent'}`}>
//       <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Left section with phone numbers and emails */}
//           {/* <div className="flex items-center space-x-4">
//             <span className="hidden sm:block">Phone: 123-456-7890</span>
//             <span className="hidden sm:block">Email: info@example.com</span>
//           </div> */}
//           {/* Right section with social media icons */}
//           <div className="flex items-center space-x-4">
//             {/* Add your social media icons here */}
//             <a href="#" className="text-gray-400 hover:text-green-500">
//               {/* Example social media icon */}
//               <svg
//                 className="h-6 w-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M9 21V12l5-5m6 0a9 9 0 11-18 0 9 9 0 0118 0z"
//                 ></path>
//               </svg>
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//     <Disclosure as="nav" className={`fixed top-16 left-0 right-0 z-50 ${scrolling ? 'bg-white shadow-md' : 'bg-transparent'}`}>
//       {({ open }) => (
//         <>
//           <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
//             <div className="flex items-center justify-between h-16">
//               <div className="flex-shrink-0">
//                 <img
//                   className="h-16 w-auto"
//                   src="/img/logo-pointx.png"
//                   alt="PointX and Zest Verified Resources"
//                 />
//               </div>
//               <div className="hidden sm:flex items-center space-x-4">
//                 {navigation.map((item) => (
//                   <a
//                     key={item.name}
//                     href={item.href}
//                     className={classNames(
//                       'font-semibold',
//                       scrolling ? 'text-[#061956] hover:text-[#37B6FF]' : 'text-white hover:text-[#061956]',
//                       'px-3 py-2 rounded-md text-sm'
//                     )}
//                     aria-current={item.current ? 'page' : undefined}
//                   >
//                     {item.name}
//                   </a>
//                 ))}
//               </div>
//               <div className="flex items-center space-x-4">
//                 <button
//                   type="button"
//                   className={`hidden sm:block px-4 py-2 rounded-md ${
//                     scrolling ? 'bg-[#37B6FF] text-white' : 'bg-[#38B6FF] text-white'
//                   } hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800`}
//                 >
//                   Let&apos;s Talk
//                 </button>
//                 <div className="sm:hidden">
//                   <Disclosure.Button className="text-gray-400 hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//                     {open ? (
//                       <XMarkIcon className="h-6 w-6" aria-hidden="true" />
//                     ) : (
//                       <Bars3Icon className="h-6 w-6" aria-hidden="true" />
//                     )}
//                   </Disclosure.Button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <Disclosure.Panel className="sm:hidden">
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               {navigation.map((item) => (
//                 <a
//                   key={item.name}
//                   href={item.href}
//                   className={classNames(
//                     'font-semibold',
//                     scrolling ? 'text-[#061956] hover:text-[#37B6FF]' : 'text-white hover:text-[#37B6FF]',
//                     'block px-3 py-2 rounded-md text-base'
//                   )}
//                   aria-current={item.current ? 'page' : undefined}
//                 >
//                   {item.name}
//                 </a>
//               ))}
//               <button
//                 type="button"
//                 className={`block w-full text-left px-4 py-2 rounded-md ${
//                   scrolling ? 'bg-[#37B6FF] text-white' : 'bg-[#0071BC] text-white'
//                 } hover:bg-[#37B6FF] focus:outline-none focus:ring-2 focus:ring-white`}
//               >
//                 Let&apos;s Talk
//               </button>
//             </div>
//           </Disclosure.Panel>
//         </>
//       )}
//     </Disclosure>
//     </>
//   );
// }


// import { useState, useEffect } from 'react';
// import { Disclosure } from '@headlessui/react';
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

// const navigation = [
//   { name: 'Home', href: '/', current: true },
//   { name: 'About', href: '/about', current: false },
//   { name: 'Services', href: '/services', current: false },
//   { name: 'Contact', href: '/contact', current: false },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ');
// }

// export default function Navbar() {
//   const [scrolling, setScrolling] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       const isScrolling = scrollTop > 50;
//       setScrolling(isScrolling);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <Disclosure as="nav" className={`fixed top-0 left-0 right-0 z-50 ${scrolling ? 'bg-white shadow-md' : 'bg-transparent'}`}>
//       {({ open }) => (
//         <>
//           <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
//             <div className="flex items-center justify-between h-16">
//               <div className="flex-shrink-0">
//                 <img
//                   className="h-16 w-auto"
//                   src="/img/logo-pointx.png"
//                   alt="PointX and Zest Verified Resources"
//                 />
//               </div>
//               <div className="hidden sm:flex items-center space-x-4">
//                 {navigation.map((item) => (
//                   <a
//                     key={item.name}
//                     href={item.href}
//                     className={classNames(
//                       'font-semibold',
//                       scrolling ? 'text-[#061956] hover:text-[#37B6FF]' : 'text-white hover:text-[#061956]',
//                       'px-3 py-2 rounded-md text-sm'
//                     )}
//                     aria-current={item.current ? 'page' : undefined}
//                   >
//                     {item.name}
//                   </a>
//                 ))}
//               </div>
//               <div className="flex items-center space-x-4">
//                 <button
//                   type="button"
//                   className={`hidden sm:block px-4 py-2 rounded-md ${
//                     scrolling ? 'bg-[#37B6FF] text-white' : 'bg-[#38B6FF] text-white'
//                   } hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800`}
//                 >
//                   Let&apos;s Talk
//                 </button>
//                 <div className="sm:hidden">
//                   <Disclosure.Button className="text-gray-400 hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//                     {open ? (
//                       <XMarkIcon className="h-6 w-6" aria-hidden="true" />
//                     ) : (
//                       <Bars3Icon className="h-6 w-6" aria-hidden="true" />
//                     )}
//                   </Disclosure.Button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <Disclosure.Panel className="sm:hidden">
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               {navigation.map((item) => (
//                 <a
//                   key={item.name}
//                   href={item.href}
//                   className={classNames(
//                     'font-semibold',
//                     scrolling ? 'text-[#061956] hover:text-[#37B6FF]' : 'text-white hover:text-[#37B6FF]',
//                     'block px-3 py-2 rounded-md text-base'
//                   )}
//                   aria-current={item.current ? 'page' : undefined}
//                 >
//                   {item.name}
//                 </a>
//               ))}
//               <button
//                 type="button"
//                 className={`block w-full text-left px-4 py-2 rounded-md ${
//                   scrolling ? 'bg-[#37B6FF] text-white' : 'bg-[#0071BC] text-white'
//                 } hover:bg-[#37B6FF] focus:outline-none focus:ring-2 focus:ring-white`}
//               >
//                 Let&apos;s Talk
//               </button>
//             </div>
//           </Disclosure.Panel>
//         </>
//       )}
//     </Disclosure>
//   );
// }


import { useState, useEffect } from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'About', href: '/about', current: false },
  { name: 'Services', href: '/services', current: false },
  { name: 'Portfolio', href: '/portfolio', current: false },
  { name: 'Contact', href: '/contact', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const isScrolling = scrollTop > 50;
      setScrolling(isScrolling);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Disclosure as="nav" className={`fixed top-0 left-0 right-0 z-50 ${scrolling ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex-shrink-0">
                <img
                  className="h-16 w-auto"
                  src="/img/logo-pointx.png"
                  alt="PointX and Zest Verified Resources"
                />
              </div>
              <div className="hidden sm:flex items-center space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      'font-semibold',
                      scrolling ? 'text-[#061956] hover:text-[#37B6FF] hover:underline hover:text-shadow-white' : 'text-white hover:text-[#061956] hover:underline hover:text-shadow-white',
                      'px-3 py-2 rounded-md text-sm'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="flex items-center space-x-4">
                <button
                  type="button"
                  className={`hidden sm:block px-4 py-2 rounded-md ${
                    scrolling ? 'bg-[#37B6FF] text-white' : 'bg-[#38B6FF] text-white'
                  } hover:bg-[#0071BC] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800`}
                >
                 <a href='https://w.app/PointXandZest' target='blank'>Let&apos;s Talk</a> 
                </button>
                <div className="sm:hidden">
                  <Disclosure.Button className="text-gray-400 hover:text-[#0071BC] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    {open ? (
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    'font-semibold',
                    scrolling ? 'text-[#061956] hover:text-[#37B6FF] hover:underline hover:text-shadow-white' : 'text-white hover:text-[#37B6FF] hover:underline hover:text-shadow-white',
                    'block px-3 py-2 rounded-md text-base'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </a>
              ))}
              <button
                type="button"
                className={`block w-full text-left px-4 py-2 rounded-md ${
                  scrolling ? 'bg-[#37B6FF] text-white' : 'bg-[#0071BC] text-white'
                } hover:bg-[#37B6FF] focus:outline-none focus:ring-2 focus:ring-white`}
              >
               <a href='https://wa.link/o7wgvh'>Let&apos;s Talk</a> 
              </button>
              
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
