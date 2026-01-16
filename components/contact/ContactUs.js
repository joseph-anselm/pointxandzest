// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import "@fortawesome/fontawesome-svg-core/styles.css";  
// import { faLinkedin, faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

// const ContactUs = () => {
//   return (
//     <div className="bg-gray-100 py-20">
//       <div className="container mx-auto max-w-7xl px-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//           <div>
//             <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
//             {/* Contact details */}
//             <div className="flex flex-col space-y-4">
//               <div className="flex items-center space-x-4">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//                 </svg>
//                 <p className="text-gray-700"><b>Head Office:</b> 2 Adaralegbe Street, Ajah Lagos</p>
                
//               </div>
//               <div className="flex items-center space-x-4">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//                 </svg>
                
//                 <p className="text-gray-700"><b>Branch Office:</b> 44 Olisa Street, Ijebu Ode. Ogun</p>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//                 </svg>
//                 <p className="text-gray-700">info@pointxandzest.com</p>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//                 </svg>
//                 <p className="text-gray-700">+2348032501608</p>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//                 </svg>
//                 <p className="text-gray-700">www.pointxandzest.com</p>
//               </div>
//             </div>
//             {/* Follow Us */}
//             <h3 className="text-xl mt-14">Follow Us</h3>
//             <div className="md:w-1/2 flex items-start justify-left">
//               <FontAwesomeIcon icon={faLinkedin} spin border className="mr-4 text-lg" />
//               <FontAwesomeIcon icon={faFacebook} spin border className="text-lg mr-4" />
//               <FontAwesomeIcon icon={faTwitter} spin spinReverse className="text-lg mr-4" />
//               <FontAwesomeIcon icon={faInstagram} spin spinReverse className="text-lg mr-4" />
//               <FontAwesomeIcon icon={faYoutube} spin spinReverse className="text-lg mr-4" />
//             </div>
//           </div>
//           {/* Contact form */}
//           <div>
//             <form className="space-y-4">
//               <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-blue-500" />
//               <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-blue-500" />
//               <textarea rows="5" placeholder="Your Message" className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-blue-500"></textarea>
//               <button type="submit" className="bg-[#37B6FF] text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300">Send Message</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;





"use client";
import React, { useState } from 'react';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Globe, 
  Linkedin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Send,
  ArrowUpRight,
  MessageSquare
} from 'lucide-react';

const ContactUs = () => {
  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('loading');
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 4000);
    }, 1500);
  };

  const contactMethods = [
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Head Office",
      detail: "2 Adaralegbe Street, Ajah, Lagos",
      link: "#"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Branch Office",
      detail: "44 Olisa Street, Ijebu Ode, Ogun",
      link: "#"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email Inquiries",
      detail: "info@pointxandzest.com",
      link: "mailto:info@pointxandzest.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Direct Connect",
      detail: "+234 803 250 1608",
      link: "tel:+2348032501608"
    }
  ];

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn" },
    { icon: <Facebook className="w-5 h-5" />, label: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, label: "Twitter" },
    { icon: <Instagram className="w-5 h-5" />, label: "Instagram" },
    { icon: <Youtube className="w-5 h-5" />, label: "YouTube" }
  ];

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Aesthetic Background Detail */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#37B6FF]/5 blur-[140px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-slate-50 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Information Side */}
          <div className="flex-1">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 mb-8">
              <MessageSquare className="w-4 h-4 text-[#37B6FF]" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-slate-500">Contact Hub</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-900 tracking-tight mb-8 leading-[1.1]">
              Let’s Architect Your <br />
              <span className="text-[#37B6FF]">Digital Future.</span>
            </h2>

            <p className="text-slate-500 text-lg leading-relaxed mb-12 max-w-xl">
              Ready to deploy excellence? Reach out to our research consultancy team. We specialize in transforming complex business challenges into streamlined IT solutions.
            </p>

            {/* Contact Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {contactMethods.map((method, idx) => (
                <a 
                  key={idx} 
                  href={method.link}
                  className="group p-6 rounded-2xl bg-white border border-slate-100 hover:border-[#37B6FF]/30 hover:shadow-xl hover:shadow-[#37B6FF]/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-50 text-slate-400 group-hover:bg-[#37B6FF] group-hover:text-white flex items-center justify-center transition-colors mb-4">
                    {method.icon}
                  </div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">{method.title}</h4>
                  <p className="text-slate-900 font-bold text-sm tracking-tight">{method.detail}</p>
                </a>
              ))}
            </div>

            {/* Social Infrastructure */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400 mb-6 flex items-center gap-4">
                Global Connectivity
                <div className="h-px flex-1 bg-slate-100"></div>
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, i) => (
                  <button 
                    key={i} 
                    className="w-12 h-12 rounded-xl border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-[#37B6FF] hover:text-white hover:-translate-y-1 transition-all duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="flex-1 w-full max-w-xl">
            <div className="relative p-1 bg-slate-50 rounded-[3rem] border border-slate-100">
              <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm">
                {formStatus === 'success' ? (
                  <div className="py-12 text-center animate-fade-in">
                    <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Send className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">Message Deployed</h3>
                    <p className="text-slate-500">Our research team will synchronize with you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                        <input 
                          type="text" 
                          required
                          className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-4 focus:ring-[#37B6FF]/5 focus:border-[#37B6FF] transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                        <input 
                          type="email" 
                          required
                          className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-4 focus:ring-[#37B6FF]/5 focus:border-[#37B6FF] transition-all"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Inquiry Type</label>
                      <select className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-4 focus:ring-[#37B6FF]/5 focus:border-[#37B6FF] transition-all appearance-none">
                        <option>IT Advisory</option>
                        <option>Managed Services</option>
                        <option>Web Engineering</option>
                        <option>Research Collaboration</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Project Brief</label>
                      <textarea 
                        rows={5}
                        required
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-4 focus:ring-[#37B6FF]/5 focus:border-[#37B6FF] transition-all resize-none"
                        placeholder="Tell us about your objectives..."
                      ></textarea>
                    </div>

                    <button 
                      type="submit"
                      disabled={formStatus === 'loading'}
                      className="w-full py-5 bg-[#37B6FF] text-white rounded-xl font-bold text-[11px] uppercase tracking-[0.25em] hover:bg-slate-900 transition-all duration-300 shadow-xl shadow-[#37B6FF]/20 flex items-center justify-center gap-3 active:scale-[0.98] disabled:opacity-70"
                    >
                      {formStatus === 'loading' ? (
                        <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                      ) : (
                        <>
                          Establish Connection
                          <ArrowUpRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}} />
    </section>
  );
};

export default ContactUs;
