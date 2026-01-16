// "use client"

// import { useState } from 'react';

// const Subscribe = () => {
//   const [email, setEmail] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission here
//   };

//   return (
//     <div className="">
//       <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
//         <div className="lg:text-center">
//           <p className="text-base leading-6 text-[#37B6FF] font-semibold tracking-wide uppercase">
//             Sign up for our newsletter
//           </p>
//           <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
//             Stay up to date with tech news!
//           </h2>
//           <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
//             Subscribe to our newsletter and get the latest tech news delivered straight to your inbox.
//           </p>
//         </div>
//         <form className="mt-12 sm:flex sm:justify-center lg:justify-start" onSubmit={handleSubmit}>
//           <div className="min-w-0 flex-1">
//             <label htmlFor="email-address" className="sr-only">
//               Email address
//             </label>
//             <input
//               id="email-address"
//               type="email"
//               autoComplete="email"
//               required
//               className="block w-full appearance-none bg-white border border-[#37B6FF] rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-green-700 transition duration-150 ease-in-out sm:text-sm"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className="mt-4 sm:mt-0 sm:ml-3">
//             <button
//               type="submit"
//               className="block w-full appearance-none text-white bg-[#37B6FF] border border-transparent rounded-md py-3 px-4 leading-tight hover:bg-[#0071BC] focus:outline-none focus:bg-[#0071BC] transition duration-150 ease-in-out sm:text-sm sm:w-auto"
//             >
//               Sign up
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Subscribe;


"use client";
import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, Sparkles, Zap, BellRing } from 'lucide-react';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('loading');
    // Simulate an API call with brand-consistent latency
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      // Reset after a few seconds
      setTimeout(() => setStatus('idle'), 5000);
    }, 1200);
  };

  return (
    <section className="relative py-20 lg:py-28 bg-slate-50 overflow-hidden border-t border-slate-100">
      {/* Dynamic Background Elements for light theme */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#37B6FF]/5 to-transparent pointer-events-none"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-[100px] pointer-events-none opacity-50"></div>
      
      {/* Tech-Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#37B6FF 2px, transparent 2px)', backgroundSize: '32px 32px' }}></div>

      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        <div className="relative">
          {/* Main Floating Card */}
          <div className="relative bg-white rounded-[3rem] p-8 md:p-16 lg:p-20 shadow-xl shadow-slate-200/50 border border-white">
            
            {/* Subtle Inner Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-[#37B6FF]/40 to-transparent"></div>

            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              
              {/* Content Side */}
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 text-[#37B6FF] text-[10px] font-bold uppercase tracking-[0.25em] mb-6 shadow-sm">
                  <BellRing className="w-3.5 h-3.5" />
                  Nexus Intelligence
                </div>
                
                <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 tracking-tight mb-6 leading-tight">
                  Accelerate your <br />
                  <span className="text-[#37B6FF]">Digital Insight.</span>
                </h2>
                
                <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
                  Join a network of forward-thinking leaders. Get precision research and IT advisory delivered weekly to your executive inbox.
                </p>

                {/* Trust Badges */}
                <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-6 opacity-40">
                  <div className="flex items-center gap-2 grayscale">
                    <Zap className="w-4 h-4 text-slate-400" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600">Real-time Analytics</span>
                  </div>
                  <div className="flex items-center gap-2 grayscale">
                    <Sparkles className="w-4 h-4 text-slate-400" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600">Expert Curation</span>
                  </div>
                </div>
              </div>

              {/* Interaction Side */}
              <div className="flex-1 w-full max-w-md">
                <div className="relative p-1 bg-slate-50 rounded-[2.5rem] border border-slate-100 shadow-inner">
                  {status === 'success' ? (
                    <div className="bg-white p-10 rounded-[2.2rem] text-center animate-in-fade-up">
                      <div className="w-16 h-16 bg-[#37B6FF]/10 rounded-2xl flex items-center justify-center text-[#37B6FF] mx-auto mb-6 shadow-sm">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-display font-bold text-slate-900 mb-2">Nexus Synchronized</h3>
                      <p className="text-slate-400 text-sm">Check your inbox for your first briefing.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="bg-white p-6 md:p-10 rounded-[2.2rem] shadow-sm">
                      <div className="space-y-4">
                        <div className="group relative">
                          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1 mb-2 block">
                            Corporate Email
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-slate-300 group-focus-within:text-[#37B6FF] transition-colors">
                              <Mail className="w-5 h-5" />
                            </div>
                            <input
                              type="email"
                              required
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="you@company.com"
                              className="w-full pl-14 pr-6 py-4.5 bg-slate-50 border border-slate-100 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-4 focus:ring-[#37B6FF]/5 focus:border-[#37B6FF] transition-all placeholder:text-slate-300 font-medium"
                            />
                          </div>
                        </div>

                        <button
                          type="submit"
                          disabled={status === 'loading'}
                          className="group relative w-full py-4.5 bg-[#37B6FF] text-white rounded-xl font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-slate-900 transition-all duration-300 shadow-lg shadow-[#37B6FF]/20 flex items-center justify-center gap-3 active:scale-[0.98] disabled:opacity-70 overflow-hidden"
                        >
                          {status === 'loading' ? (
                            <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                          ) : (
                            <>
                              Join the Intelligence
                              <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </>
                          )}
                        </button>
                      </div>

                      <p className="mt-6 text-[9px] text-center text-slate-400 font-bold uppercase tracking-widest">
                        Zero Spam Policy • Unsubscribe in one-click
                      </p>
                    </form>
                  )}
                </div>
              </div>

            </div>

            {/* Floating Ornamental Node */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-white rounded-2xl shadow-lg border border-slate-50 flex items-center justify-center text-[#37B6FF] animate-float">
               <Zap className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        .animate-in-fade-up {
          animation: fade-up 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        .py-4\\.5 { padding-top: 1.125rem; padding-bottom: 1.125rem; }
      `}} />
    </section>
  );
};

export default Subscribe;
