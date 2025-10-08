// 'use client';
// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { FiCheck, FiArrowRight, FiShield, FiBarChart2, FiZap, FiMail } from 'react-icons/fi';
// import PaystackPop from '@paystack/inline-js';

// export default function LandingPage() {
//   const [email, setEmail] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [activePlan, setActivePlan] = useState('basic');

//   const handlePayment = (plan) => {
//     if (plan === 'custom') {
//       window.location.href = 'mailto:support@plagiarismshield.com?subject=Custom%20Plagiarism%20Request';
//       return;
//     }

//     setIsLoading(true);
    
//     const paystack = new PaystackPop();
//     paystack.newTransaction({
//       key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
//       email: email,
//       amount: plan === 'basic' ? 299900 : 2000000, // ₦2,999 and ₦20,000 in kobo
//       currency: 'NGN',
//       metadata: {
//         custom_fields: [
//           {
//             display_name: "Service Type",
//             variable_name: "service_type",
//             value: plan === 'basic' ? 'Basic Check' : 'Pro Document Fix'
//           }
//         ]
//       },
//       onSuccess: (transaction) => {
//         setIsLoading(false);
//         window.location.href = `/success?reference=${transaction.reference}`;
//       },
//       onCancel: () => {
//         setIsLoading(false);
//       }
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">


//       {/* Hero Section */}
//       <section className="container mx-auto px-6 py-16 md:py-24">
//         <div className="max-w-4xl mx-auto text-center">
//           <motion.h1 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
//           >
//             Professional <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Plagiarism Solutions</span>
//           </motion.h1>
          
//           <motion.p 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
//           >
//             From quick checks to complete document rewriting, we ensure your work meets the highest originality standards.
//           </motion.p>
          
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
//           >
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter your email"
//               className="flex-grow px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//             <button 
//               onClick={() => handlePayment(activePlan)}
//               disabled={isLoading || !email}
//               className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium flex items-center justify-center transition-all disabled:opacity-70"
//             >
//               {isLoading ? 'Processing...' : 'Get Started'} <FiArrowRight className="ml-2" />
//             </button>
//           </motion.div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="container mx-auto px-6 py-16 bg-white">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Comprehensive Plagiarism Services</h2>
          
//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: <FiZap className="text-blue-600 text-2xl" />,
//                 title: "Instant Checking",
//                 description: "Get immediate results with our AI-powered plagiarism detection system."
//               },
//               {
//                 icon: <FiBarChart2 className="text-blue-600 text-2xl" />,
//                 title: "Document Fixing",
//                 description: "Professional rewriting to eliminate plagiarism while preserving your original meaning."
//               },
//               {
//                 icon: <FiMail className="text-blue-600 text-2xl" />,
//                 title: "Custom Solutions",
//                 description: "Tailored services for complex projects and institutional needs."
//               }
//             ].map((feature, index) => (
//               <motion.div 
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="bg-gray-50 p-6 rounded-xl"
//               >
//                 <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
//                   {feature.icon}
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
//                 <p className="text-gray-600">{feature.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Pricing Section */}
//       <section className="container mx-auto px-6 py-16">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Straightforward Pricing</h2>
//           <p className="text-center text-gray-600 mb-12">Choose the service that fits your needs</p>
          
//           <div className="grid md:grid-cols-3 gap-6">
//             {[
//               {
//                 id: 'basic',
//                 name: "Basic Check",
//                 price: "₦2,999",
//                 description: "One-time document check",
//                 features: [
//                   "AI-powered plagiarism detection",
//                   "Comprehensive similarity report",
//                   "Web and academic database comparison",
//                   "Instant results",
//                   "Up to 50 pages document"
//                 ],
//                 cta: "Check Document"
//               },
//               {
//                 id: 'pro',
//                 name: "Pro Fix",
//                 price: "₦20,000",
//                 description: "Full document rewriting",
//                 features: [
//                   "Everything in Basic Check PLUS",
//                   "Professional plagiarism removal",
//                   "Human-quality rewriting",
//                   "Style and tone preservation",
//                   "Academic formatting included",
//                   "2 rounds of revisions",
//                   "24-48 hour turnaround"
//                 ],
//                 cta: "Fix My Document",
//                 recommended: true
//               },
//               {
//                 id: 'custom',
//                 name: "Custom Solution",
//                 price: "Contact Us",
//                 description: "For complex requirements",
//                 features: [
//                   "Bulk document processing",
//                   "Institutional licensing",
//                   "API integration",
//                   "White-label solutions",
//                   "Priority support",
//                   "Custom turnaround times"
//                 ],
//                 cta: "Discuss Needs"
//               }
//             ].map((plan) => (
//               <motion.div
//                 key={plan.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//                 viewport={{ once: true }}
//                 className={`relative rounded-xl border-2 p-6 flex flex-col h-full ${
//                   plan.recommended ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'
//                 } ${plan.id === 'custom' ? 'border-purple-500 bg-purple-50' : ''}`}
//                 onClick={() => setActivePlan(plan.id)}
//               >
//                 {plan.recommended && (
//                   <div className="absolute top-0 right-6 -translate-y-1/2 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
//                     Most Popular
//                   </div>
//                 )}
//                 <h3 className="text-xl font-semibold mb-2 text-gray-900">{plan.name}</h3>
//                 <div className="mb-4">
//                   <span className="text-3xl font-bold">
//                     {plan.price}
//                   </span>
//                   {plan.price !== "Contact Us" && (
//                     <span className="text-gray-600 text-sm block mt-1">{plan.description}</span>
//                   )}
//                 </div>
//                 <ul className="space-y-3 mb-6 flex-grow">
//                   {plan.features.map((feature, index) => (
//                     <li key={index} className="flex items-start">
//                       <FiCheck className="text-green-500 mr-2 mt-1 flex-shrink-0" /> 
//                       <span>{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//                 <button
//                   onClick={() => handlePayment(plan.id)}
//                   disabled={isLoading}
//                   className={`w-full py-3 rounded-lg font-medium transition-all mt-auto ${
//                     plan.recommended 
//                       ? 'bg-blue-600 hover:bg-blue-700 text-white' 
//                       : plan.id === 'custom' 
//                         ? 'bg-purple-600 hover:bg-purple-700 text-white' 
//                         : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
//                   }`}
//                 >
//                   {plan.cta}
//                 </button>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* How It Works */}
//       <section className="container mx-auto px-6 py-16 bg-gray-50">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How Our Service Works</h2>
          
//           <div className="space-y-8">
//             {[
//               {
//                 step: "1",
//                 title: "Upload Your Document",
//                 description: "Submit your file in any common format (DOCX, PDF, etc.) through our secure portal."
//               },
//               {
//                 step: "2",
//                 title: "Run Plagiarism Check",
//                 description: "Our system scans against billions of web pages and academic papers (Basic Check)."
//               },
//               {
//                 step: "3",
//                 title: "Receive Detailed Report",
//                 description: "Get a comprehensive similarity analysis with highlighted problematic sections."
//               },
//               {
//                 step: "4",
//                 title: "Professional Rewriting (Pro Only)",
//                 description: "Our experts completely rewrite flagged content while maintaining your original meaning."
//               },
//               {
//                 step: "5",
//                 title: "Download Clean Document",
//                 description: "Receive a plagiarism-free version formatted to your requirements."
//               }
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="flex items-start"
//               >
//                 <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1 flex-shrink-0">
//                   {item.step}
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
//                   <p className="text-gray-600">{item.description}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className="container mx-auto px-6 py-16">
//         <div className="max-w-2xl mx-auto text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
//           <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Academic Integrity Assurance?</h2>
//           <p className="mb-6 opacity-90">Choose the solution that fits your requirements and budget.</p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button 
//               onClick={() => handlePayment('basic')}
//               disabled={isLoading}
//               className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-full font-medium transition-all"
//             >
//               Basic Check (₦2,999)
//             </button>
//             <button 
//               onClick={() => handlePayment('pro')}
//               disabled={isLoading}
//               className="bg-purple-500 hover:bg-purple-400 text-white px-6 py-3 rounded-full font-medium transition-all"
//             >
//               Pro Document Fix (₦20,000)
//             </button>
//           </div>
//         </div>
//       </section>


//     </div>
//   );
// }


'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiArrowRight, FiShield, FiBarChart2, FiZap, FiMail } from 'react-icons/fi';

export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [activePlan, setActivePlan] = useState('basic');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handlePayment = async (plan) => {
    if (plan === 'custom') {
      if (isClient) {
        window.location.href = 'mailto:support@plagiarismshield.com?subject=Custom%20Plagiarism%20Request';
      }
      return;
    }

    setIsLoading(true);
    
    try {
      // Dynamically import Paystack only on client side
      const PaystackPop = (await import('@paystack/inline-js')).default;
      
      const paystack = new PaystackPop();
      paystack.newTransaction({
        key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
        email: email,
        amount: plan === 'basic' ? 299900 : 2000000, // ₦2,999 and ₦20,000 in kobo
        currency: 'NGN',
        metadata: {
          custom_fields: [
            {
              display_name: "Service Type",
              variable_name: "service_type",
              value: plan === 'basic' ? 'Basic Check' : 'Pro Document Fix'
            }
          ]
        },
        onSuccess: (transaction) => {
          setIsLoading(false);
          if (isClient) {
            window.location.href = `/success?reference=${transaction.reference}`;
          }
        },
        onCancel: () => {
          setIsLoading(false);
        }
      });
    } catch (error) {
      console.error('Error loading Paystack:', error);
      setIsLoading(false);
    }
  };

  // Don't render anything until we're on the client side
  if (!isClient) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Professional <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Plagiarism Solutions</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
          >
            From quick checks to complete document rewriting, we ensure your work meets the highest originality standards.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-grow px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button 
              onClick={() => handlePayment(activePlan)}
              disabled={isLoading || !email}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium flex items-center justify-center transition-all disabled:opacity-70"
            >
              {isLoading ? 'Processing...' : 'Get Started'} <FiArrowRight className="ml-2" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Comprehensive Plagiarism Services</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FiZap className="text-blue-600 text-2xl" />,
                title: "Instant Checking",
                description: "Get immediate results with our AI-powered plagiarism detection system."
              },
              {
                icon: <FiBarChart2 className="text-blue-600 text-2xl" />,
                title: "Document Fixing",
                description: "Professional rewriting to eliminate plagiarism while preserving your original meaning."
              },
              {
                icon: <FiMail className="text-blue-600 text-2xl" />,
                title: "Custom Solutions",
                description: "Tailored services for complex projects and institutional needs."
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-xl"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Straightforward Pricing</h2>
          <p className="text-center text-gray-600 mb-12">Choose the service that fits your needs</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                id: 'basic',
                name: "Basic Check",
                price: "₦2,999",
                description: "One-time document check",
                features: [
                  "AI-powered plagiarism detection",
                  "Comprehensive similarity report",
                  "Web and academic database comparison",
                  "Instant results",
                  "Up to 50 pages document"
                ],
                cta: "Check Document"
              },
              {
                id: 'pro',
                name: "Pro Fix",
                price: "₦20,000",
                description: "Full document rewriting",
                features: [
                  "Everything in Basic Check PLUS",
                  "Professional plagiarism removal",
                  "Human-quality rewriting",
                  "Style and tone preservation",
                  "Academic formatting included",
                  "2 rounds of revisions",
                  "24-48 hour turnaround"
                ],
                cta: "Fix My Document",
                recommended: true
              },
              {
                id: 'custom',
                name: "Custom Solution",
                price: "Contact Us",
                description: "For complex requirements",
                features: [
                  "Bulk document processing",
                  "Institutional licensing",
                  "API integration",
                  "White-label solutions",
                  "Priority support",
                  "Custom turnaround times"
                ],
                cta: "Discuss Needs"
              }
            ].map((plan) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className={`relative rounded-xl border-2 p-6 flex flex-col h-full ${
                  plan.recommended ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'
                } ${plan.id === 'custom' ? 'border-purple-500 bg-purple-50' : ''}`}
                onClick={() => setActivePlan(plan.id)}
              >
                {plan.recommended && (
                  <div className="absolute top-0 right-6 -translate-y-1/2 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">
                    {plan.price}
                  </span>
                  {plan.price !== "Contact Us" && (
                    <span className="text-gray-600 text-sm block mt-1">{plan.description}</span>
                  )}
                </div>
                <ul className="space-y-3 mb-6 flex-grow">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <FiCheck className="text-green-500 mr-2 mt-1 flex-shrink-0" /> 
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handlePayment(plan.id)}
                  disabled={isLoading}
                  className={`w-full py-3 rounded-lg font-medium transition-all mt-auto ${
                    plan.recommended 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : plan.id === 'custom' 
                        ? 'bg-purple-600 hover:bg-purple-700 text-white' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                  }`}
                >
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-6 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How Our Service Works</h2>
          
          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Upload Your Document",
                description: "Submit your file in any common format (DOCX, PDF, etc.) through our secure portal."
              },
              {
                step: "2",
                title: "Run Plagiarism Check",
                description: "Our system scans against billions of web pages and academic papers (Basic Check)."
              },
              {
                step: "3",
                title: "Receive Detailed Report",
                description: "Get a comprehensive similarity analysis with highlighted problematic sections."
              },
              {
                step: "4",
                title: "Professional Rewriting (Pro Only)",
                description: "Our experts completely rewrite flagged content while maintaining your original meaning."
              },
              {
                step: "5",
                title: "Download Clean Document",
                description: "Receive a plagiarism-free version formatted to your requirements."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start"
              >
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1 flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-2xl mx-auto text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Academic Integrity Assurance?</h2>
          <p className="mb-6 opacity-90">Choose the solution that fits your requirements and budget.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => handlePayment('basic')}
              disabled={isLoading}
              className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-full font-medium transition-all"
            >
              Basic Check (₦2,999)
            </button>
            <button 
              onClick={() => handlePayment('pro')}
              disabled={isLoading}
              className="bg-purple-500 hover:bg-purple-400 text-white px-6 py-3 rounded-full font-medium transition-all"
            >
              Pro Document Fix (₦20,000)
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}