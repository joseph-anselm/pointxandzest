// import React from 'react';

// const RequestQuote = () => {
//   return (
//     <div className="bg-gray-100 py-20">
//       <div className="container mx-auto max-w-7xl px-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//           <div>
//             <h2 className="text-3xl font-bold text-gray-800 mb-4">Request a Quote</h2>
//             <p className="text-gray-700 text-lg mb-6">Get in touch with us for a customized solution tailored to your business needs.</p>
//             <form className="space-y-4">
//               <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-blue-500" />
//               <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-blue-500" />
//               <textarea placeholder="Your Message" rows="4" className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-blue-500"></textarea>
//               <button type="submit" className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300">Submit</button>
//             </form>
//           </div>
//           <div className="flex justify-center">
//             <img src="/img/pointx-img2.jpg" alt="Request a Quote" className="w-auto h-auto " />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RequestQuote;



"use client";
import React, { useState } from 'react';
import { Send, CheckCircle, Clock, Settings, ArrowRight, ShieldCheck } from 'lucide-react';

const RequestQuote = () => {
  const [status, setStatus] = useState('idle'); // idle, loading, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      // Reset form would happen here
    }, 1500);
  };

  const benefits = [
    {
      icon: <Clock className="w-5 h-5 text-[#37B6FF]" />,
      text: "24h Response Protocol"
    },
    {
      icon: <Settings className="w-5 h-5 text-[#37B6FF]" />,
      text: "Custom Architecture"
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#37B6FF]" />,
      text: "NDA Protected Session"
    }
  ];

  return (
    <section id="request-quote" className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-50 rounded-full blur-[120px] -mr-96 -mt-96 opacity-60"></div>
      
      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          
          {/* Form Content */}
          <div className="order-2 lg:order-1">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 text-[#37B6FF] text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
                Engagement Phase
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 tracking-tight mb-6">
                Initiate Your <span className="text-[#37B6FF]">Briefing.</span>
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-10">
                Provide your technical requirements below. Our principal consultants will review your brief and architect a tailored roadmap within one business cycle.
              </p>

              {status === 'success' ? (
                <div className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 text-center animate-in-fade-up">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">Request Transmitted</h3>
                  <p className="text-slate-500 text-sm">Synchronizing with our research leads. Check your inbox.</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-8 text-[10px] font-bold uppercase tracking-widest text-[#37B6FF] hover:text-slate-900 transition-colors"
                  >
                    Send Another Brief
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Identity</label>
                      <input 
                        required
                        type="text" 
                        placeholder="Your Full Name" 
                        className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-100 text-slate-900 text-sm focus:outline-none focus:ring-4 focus:ring-[#37B6FF]/5 focus:border-[#37B6FF] transition-all placeholder:text-slate-300" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Email Endpoint</label>
                      <input 
                        required
                        type="email" 
                        placeholder="you@company.com" 
                        className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-100 text-slate-900 text-sm focus:outline-none focus:ring-4 focus:ring-[#37B6FF]/5 focus:border-[#37B6FF] transition-all placeholder:text-slate-300" 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Project Parameters</label>
                    <textarea 
                      required
                      placeholder="Describe your architectural vision or technical bottlenecks..." 
                      rows="4" 
                      className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-100 text-slate-900 text-sm focus:outline-none focus:ring-4 focus:ring-[#37B6FF]/5 focus:border-[#37B6FF] transition-all placeholder:text-slate-300 resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={status === 'loading'}
                    className="w-full py-5 bg-slate-900 text-white rounded-xl font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-[#37B6FF] transition-all duration-300 shadow-xl shadow-slate-900/10 flex items-center justify-center gap-3 active:scale-95 disabled:opacity-70 group"
                  >
                    {status === 'loading' ? (
                      <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>
                        Deploy Request
                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Visual Column */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop" 
                alt="Strategic Consulting" 
                className="w-full h-auto aspect-[4/5] object-cover transition-transform duration-[2000ms] group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
              
              {/* Overlay Content */}
              <div className="absolute bottom-10 left-10 right-10">
                <div className="p-8 glass rounded-3xl border border-white/20 backdrop-blur-xl">
                  <div className="space-y-6">
                    {benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-4 group/item">
                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/10 group-hover/item:bg-[#37B6FF] transition-colors">
                          {benefit.icon}
                        </div>
                        <span className="text-white text-xs font-bold uppercase tracking-widest">{benefit.text}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                    <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Global Standards</span>
                    <ArrowRight className="w-4 h-4 text-[#37B6FF]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Detail */}
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-[#37B6FF]/10 rounded-full blur-[80px] -z-10 animate-pulse"></div>
            <div className="absolute -bottom-8 -right-8 p-6 bg-white rounded-2xl shadow-xl border border-slate-50 z-20 hidden xl:block">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} alt="analyst" className="w-8 h-8 rounded-full border-2 border-white bg-slate-100" />
                  ))}
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  Leads On-Standby
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-in-fade-up {
          animation: fade-up 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
      `}} />
    </section>
  );
};

export default RequestQuote;
