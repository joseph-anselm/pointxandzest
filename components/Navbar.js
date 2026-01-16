// "use client"


// import { useState, useEffect } from 'react';
// import { Disclosure } from '@headlessui/react';
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
// import Link from 'next/link';

// const navigation = [
//   { name: 'Home', href: '/', current: true },
//   { name: 'About', href: '/about', current: false },
//   { name: 'Services', href: '/services', current: false },
//   { name: 'Portfolio', href: '/portfolio', current: false },
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
//                   className="h-20 w-auto"
//                   src="/img/logo.png"
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
//                       scrolling ? 'text-[#061956] hover:text-[#37B6FF] hover:underline hover:text-shadow-white' : 'text-white hover:text-[#061956] hover:underline hover:text-shadow-white',
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
//                   } hover:bg-[#0071BC] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800`}
//                 >
//                  <a href='https://w.app/PointXandZest' target='blank'>Let&apos;s Talk</a> 
//                 </button>
//                 <div className="sm:hidden">
//                   <Disclosure.Button className="text-gray-400 hover:text-[#0071BC] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
//                     scrolling ? 'text-[#061956] hover:text-[#37B6FF] hover:underline hover:text-shadow-white' : 'text-white hover:text-[#37B6FF] hover:underline hover:text-shadow-white',
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
//                <a href='https://wa.link/o7wgvh'>Let&apos;s Talk</a> 
//               </button>
              
//             </div>
//           </Disclosure.Panel>
//         </>
//       )}
//     </Disclosure>
//   );
// }



// "use client"
// import React, { useState, useEffect } from 'react';
// import { Menu, X } from 'lucide-react';

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4 bg-black/80 backdrop-blur-lg border-b border-white/10' : 'py-8 bg-transparent'}`}>
//       <div className="container mx-auto px-6 flex items-center justify-between">
//         {/* Logo Section */}
//         <div className="flex flex-col items-center group cursor-pointer">
//           <div className="flex items-center justify-center">
//             <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-sky-400">
//               <path d="M20 20C20 20 40 20 60 40C80 60 80 80 80 80L20 80V20Z" fill="currentColor" fillOpacity="0.2"/>
//               <path d="M20 20V80H80M20 20L80 80" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
//               <circle cx="50" cy="50" r="10" fill="currentColor"/>
//             </svg>
//           </div>
//           <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-sky-400 mt-1">PointX & Zest</span>
//         </div>

//         {/* Center Links */}
//         <div className="hidden lg:flex items-center gap-10 text-[13px] font-bold tracking-wider uppercase text-white/90">
//           <a href="#home" className="hover:text-sky-400 transition-colors">Home</a>
//           <a href="#about" className="hover:text-sky-400 transition-colors">About</a>
//           <a href="#services" className="hover:text-sky-400 transition-colors">Services</a>
//           <a href="#portfolio" className="hover:text-sky-400 transition-colors">Portfolio</a>
//           <a href="#contact" className="hover:text-sky-400 transition-colors">Contact</a>
//         </div>

//         {/* Right Button */}
//         <div className="flex items-center">
//           <button className="hidden sm:block px-7 py-2.5 rounded-lg bg-sky-400 text-white text-sm font-bold hover:bg-sky-500 transition-all shadow-lg shadow-sky-500/20 active:scale-95">
//             Let's Talk
//           </button>
//           <button className="lg:hidden p-2 text-white ml-4">
//             <Menu className="w-7 h-7" />
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Define your menu paths
  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4 bg-black/80 backdrop-blur-lg border-b border-white/10' : 'py-8 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/img/logo.png" // Replace with your bold logo image path
            alt="PointX & Zest"
            className="w-12 h-12 object-contain"
          />
          <span className="text-[14px] font-extrabold tracking-[0.3em] uppercase text-sky-400">
            PointX & Zest
          </span>
        </Link>

        {/* Center Links */}
        <div className="hidden lg:flex items-center gap-10 text-[13px] font-bold tracking-wider uppercase text-white/90">
          {menuItems.map((item) => (
            <Link key={item.label} href={item.path} className="hover:text-sky-400 transition-colors">
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right Buttons */}
        <div className="flex items-center">
          <Link href="/contact" className="hidden sm:block px-7 py-2.5 rounded-lg bg-sky-400 text-white text-sm font-bold hover:bg-sky-500 transition-all shadow-lg shadow-sky-500/20 active:scale-95">
            Let's Talk
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white ml-4"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-black/90 backdrop-blur-lg text-white uppercase text-center py-6 space-y-4">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.path}
              className="block text-lg font-bold hover:text-sky-400 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
