// "use client"
// import { useState, useEffect } from 'react';
// import React from 'react';
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

// const Footer = () => {

//     const [showBackToTop, setShowBackToTop] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       const scrollThreshold = 200;
//       setShowBackToTop(scrollY > scrollThreshold);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const handleBackToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };
//   return (
//     <footer className="relative bg-cover bg-center" style={{ backgroundImage: `url('/img/Banner-pointx1.jpg')`, minHeight: '500px' }}>
//       <div className="absolute inset-0 bg-black opacity-80"></div>
//       {/* <div className="text-center text-white py-16 relative z-10 m-4">
//         <h6 className="text-2xl text-left">Get started with us!</h6>
//         <h1 className="text-5xl font-bold mb-2 text-[#37B6FF]">Excellence<span className='text-white'> @ </span>EESL</h1>
//       </div> */}

//         <div className="text-center text-white py-16 relative z-10 m-4">
//         {/* <h6 className="text-2xl max-sm:text-left md:text-center">Get started with us!</h6>
//         <h1 className="text-4xl max-sm:text-left md:text-5xl font-bold mb-2 text-[#37B6FF]">Excellence<span className='text-white'> @ </span>PointX and Zest</h1> */}
//         </div>

//       <div className="flex flex-col md:flex-row items-stretch justify-center container mx-auto relative z-10 h-full">
        
//         {/* Column 1 */}
//         <div className="flex flex-col mb-8 md:w-full md:max-w-sm md:pr-4 md:pl-8 m-2">
//         <h1 className="text-2xl font-bold mb-2 text-[#37B6FF]">PointX and Zest</h1>
//           <img className="h-auto w-[60px] mb-2" src="/img/logo-pointx.png" alt="PointX and Zest" />
//           <div className="text-white">
            
//             <p className="text-sm">Welcome to PointX and Zest, your trusted partner in the realm of IT innovation and digital transformation. As a leading IT firm, we specialize in a diverse array of services tailored to elevate your online presence and drive business growth..</p>
//           </div>
//         </div>

//         {/* Column 2 */}
//         <div className="flex flex-col mb-8 md:w-full md:max-w-sm md:px-4 m-4">
//           <div className="text-white">
//             <h1 className="text-2xl text-[#37B6FF] font-bold mb-2">Contact Us</h1>
//             <p className="text-sm mb-2"><b>Head Office:</b>2 Adaralegbe Street, Ajah Lagos</p>
//             <p className="text-sm mb-2"><b>Branch Office:</b>44 Olisa Street, Ijebu Ode. Ogun</p>
//             <p className="text-sm mb-2"><b>Phone:</b> +234 8032501608</p>
//             <p className="text-sm mb-2"><b>Email:</b> info@pointxandzest.com</p>
//             <p className="text-sm"><b>Website:</b> www.pointxandzest.com</p>
//           </div>
          
//           {/* Social Media Icons */}
//           <div className="flex space-x-4 mt-7 m-4">
//             <a href="#" className="text-white hover:text-[#3b5998]"><FaFacebook size={24} /></a>
//             <a href="#" className="text-white hover:text-[#00acee]"><FaTwitter size={24} /></a>
//             <a href="#" className="text-white hover:text-[#e4405f]"><FaInstagram size={24} /></a>
//             <a href="#" className="text-white hover:text-[#0077b5]"><FaLinkedin size={24} /></a>
//             <a href="#" className="text-white hover:text-[#ea4335]"><FaEnvelope size={24} /></a>
//           </div>
//         </div>

//         {/* Column 3 */}
//         <div className="flex flex-col md:w-full md:max-w-sm md:pl-4 md:pr-8 m-4">
//           <div className=" text-[#37B6FF]">
//             <h1 className="text-2xl font-bold mb-2">Submit an Inquiry</h1>
//             <form className="w-full">
//               {/* Add your form fields here */}
//               <div className="mb-2">
//                 <input type="text" placeholder="Name" className="w-full py-1 px-2 rounded bg-gray-800 text-white" />
//               </div>
//               <div className="mb-2">
//                 <input type="email" placeholder="Email" className="w-full py-1 px-2 rounded bg-gray-800 text-white" />
//               </div>
//               <div className="mb-2">
//                 <textarea placeholder="Message" className="w-full py-1 px-2 rounded bg-gray-800 text-white"></textarea>
//               </div>
//               <button type="submit" className="bg-[#37B6FF] text-white py-2 px-4 w-full rounded">Submit</button>
//             </form>
//           </div>
//         </div>
//       </div>
//  {showBackToTop && (
//           <div
//             className="fixed bottom-8 right-8 bg-[#37B6FF] text-white p-3 rounded-full cursor-pointer z-10"
//             onClick={handleBackToTop}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               className="h-6 w-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M5 10l7-7m0 0l7 7m-7-7v18"
//               />
//             </svg>
//           </div>
//         )}

// <div className="bg-gray-800 text-white text-center py-4 relative z-5">
//       <p className="mb-2">&copy; 2023 PointX and Zest</p>

//       {/* Quick Links */}
//       <div className="flex justify-center space-x-4">
//         <a href="/services" className="text-[#37B6FF] hover:text-[#0071BC]">Services</a>
//         <span className="text-gray-400">|</span>
//         <a href="/about" className="text-[#37B6FF] hover:text-[#0071BC]">About Us</a>
//         <span className="text-gray-400">|</span>
//         <a href="/contact" className="text-[#37B6FF] hover:text-[#0071BC]">Contact us</a>
//       </div>
//     </div>
//     </footer>
//   );
// };

// export default Footer;

  


"use client";
import React, { useState, useEffect } from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  ArrowUp, 
  MapPin, 
  Phone, 
  Send
} from 'lucide-react';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-950 pt-24 pb-12 overflow-hidden">
      {/* Dynamic Background Accents */}
      <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-[#37B6FF]/5 blur-[140px] rounded-full -z-0"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-2/3 bg-blue-600/5 blur-[120px] rounded-full -z-0"></div>
      
      {/* Decorative Grid Overlay for texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] pointer-events-none mix-blend-overlay"></div>

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 mb-24">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-[#37B6FF] rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-[#37B6FF]/20 group cursor-pointer transition-transform hover:rotate-12">
                PZ
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-display font-bold text-white tracking-tight leading-none">PointX <span className="text-[#37B6FF]">&</span> Zest</span>
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase mt-1.5 text-slate-500">Research & IT Studio</span>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed mb-10 max-w-sm text-base">
              Pioneering digital ecosystems through precision engineering and research-driven innovation. We build the core architecture for forward-thinking enterprises.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Facebook className="w-5 h-5" />, href: "#" },
                { icon: <Twitter className="w-5 h-5" />, href: "#" },
                { icon: <Instagram className="w-5 h-5" />, href: "#" },
                { icon: <Linkedin className="w-5 h-5" />, href: "#" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-[#37B6FF] hover:text-white hover:-translate-y-1 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-4 flex flex-col lg:px-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-white mb-10 flex items-center gap-3">
              <span className="w-8 h-px bg-[#37B6FF]"></span>
              Intelligence Hub
            </h4>
            <div className="space-y-8">
              <div className="flex gap-5 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#37B6FF] shrink-0 group-hover:bg-[#37B6FF]/10 transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Headquarters</p>
                  <p className="text-slate-300 text-sm leading-relaxed">2 Adaralegbe Street, Ajah,<br />Lagos State, Nigeria</p>
                </div>
              </div>
              <div className="flex gap-5 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#37B6FF] shrink-0 group-hover:bg-[#37B6FF]/10 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Connect with us</p>
                  <p className="text-white text-lg font-bold tracking-tight">+234 803 250 1608</p>
                </div>
              </div>
              <div className="flex gap-5 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#37B6FF] shrink-0 group-hover:bg-[#37B6FF]/10 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Project Inquiries</p>
                  <p className="text-slate-300 text-sm hover:text-[#37B6FF] transition-colors cursor-pointer">info@pointxandzest.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry Column */}
          <div className="lg:col-span-4 relative">
            <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-[2.5rem] border border-white/10 -z-10 shadow-2xl"></div>
            <div className="p-10">
              <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white mb-8">Start your transformation</h4>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="relative group">
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    className="w-full px-6 py-4 rounded-xl bg-slate-900/50 border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#37B6FF]/20 focus:border-[#37B6FF] transition-all placeholder:text-slate-600"
                  />
                </div>
                <div className="relative group">
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full px-6 py-4 rounded-xl bg-slate-900/50 border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#37B6FF]/20 focus:border-[#37B6FF] transition-all placeholder:text-slate-600"
                  />
                </div>
                <div className="relative group">
                  <textarea 
                    placeholder="Message" 
                    rows={4}
                    className="w-full px-6 py-4 rounded-xl bg-slate-900/50 border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#37B6FF]/20 focus:border-[#37B6FF] transition-all resize-none placeholder:text-slate-600"
                  ></textarea>
                </div>
                <button className="w-full py-4.5 rounded-xl bg-[#37B6FF] text-white font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-slate-950 transition-all flex items-center justify-center gap-3 shadow-lg shadow-[#37B6FF]/10 group">
                  Deploy Message
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-slate-600 text-[10px] font-bold uppercase tracking-[0.3em]">
              &copy; {new Date().getFullYear()} PointX & Zest. All Systems Nominal.
            </p>
            <div className="h-px w-8 bg-white/10 hidden md:block"></div>
            <div className="flex gap-6">
              <a href="#" className="text-slate-500 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-500 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors">Terms of Service</a>
            </div>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Cloud Infrastructure: Operational</span>
          </div>
        </div>
      </div>

      {/* Floating Back to Top */}
      <div 
        className={`fixed bottom-10 right-10 z-50 transition-all duration-700 ease-out transform ${showBackToTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
      >
        <button 
          onClick={handleBackToTop}
          className="w-16 h-16 rounded-full bg-[#37B6FF] text-white flex items-center justify-center shadow-[0_0_30px_rgba(55,182,255,0.3)] hover:bg-white hover:text-[#37B6FF] hover:-translate-y-2 transition-all active:scale-90 group"
        >
          <ArrowUp className="w-7 h-7 group-hover:animate-bounce" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
