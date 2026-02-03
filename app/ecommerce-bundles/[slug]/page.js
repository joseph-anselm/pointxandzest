// 'use client'

// import { useState } from 'react'
// import PaystackButton from '@/components/PaystackButton'
// import { saveOrder } from '@/lib/saveOrderToSanity'

// const bundles = {
//   starter: { name: 'Starter Ecommerce Bundle', price: 150000, products: 20 },
//   growth: { name: 'Growth Ecommerce Bundle', price: 300000, products: 50 },
//   enterprise: { name: 'Enterprise Ecommerce Bundle', price: 600000, products: 100 }
// }

// export default function BundlePage({ params }) {
//   const bundle = bundles[params.slug]

//   const [email, setEmail] = useState('')
//   const [phone, setPhone] = useState('')

//   if (!bundle) return <p className="p-10">Bundle not found</p>

//   const handleSuccess = async (reference) => {
//     await saveOrder({
//       email,
//       phone,
//       bundle: bundle.name,
//       amount: bundle.price,
//       reference
//     })

//     alert('Payment successful! We will contact you shortly.')
//   }

//   return (
//     <section className="max-w-xl mx-auto px-4 py-16">

//       {/* ✅ HARD BACK BUTTON (CANNOT FAIL) */}
//       <button
//         type="button"
//         onClick={() => {
//           window.location.href = '/ecommerce-bundles'
//         }}
//         className="mb-6 text-sm font-medium text-brand hover:underline flex items-center gap-2"
//       >
//         ← Back to Bundles
//       </button>

//       <div className="border rounded-2xl p-8 shadow-sm">
//         <h1 className="text-2xl font-bold text-brand mb-2">
//           {bundle.name}
//         </h1>

//         <p className="text-gray-600 mb-6">
//           {bundle.products}+ products • ₦{bundle.price.toLocaleString()}
//         </p>

//         <input
//           type="email"
//           placeholder="Email address"
//           value={email}
//           onChange={e => setEmail(e.target.value)}
//           className="w-full mb-4 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand outline-none"
//         />

//         <input
//           type="tel"
//           placeholder="Phone number"
//           value={phone}
//           onChange={e => setPhone(e.target.value)}
//           className="w-full mb-6 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand outline-none"
//         />

//         <PaystackButton
//           email={email}
//           phone={phone}
//           amount={bundle.price}
//           bundleName={bundle.name}
//           onSuccess={handleSuccess}
//         />

//         <a
//   href="/ecommerce-bundles"
//   className="
//     mt-4 block w-full text-center
//     rounded-xl border border-brand
//     py-3 text-sm font-semibold
//     text-brand bg-transparent
//     hover:bg-brand hover:text-white
//     transition
//   "
// >
//   Select another bundle
// </a>
//       </div>
//     </section>
//   )
// }


// 'use client'

// import { useState } from 'react'
// import { useRouter } from 'next/navigation'
// import PaystackButton from '@/components/PaystackButton'
// import { saveOrder } from '@/lib/saveOrderToSanity'
// import * as Icons from 'lucide-react' // Assuming you use lucide for Icons

// const bundles = {
//   starter: {
//     name: 'Starter Ecommerce Bundle',
//     slug: 'starter',
//     price: 150000,
//     minProducts: 20,
//     description: 'Launch fast with a clean, conversion-ready store'
//   },
//   growth: {
//     name: 'Growth Ecommerce Bundle',
//     slug: 'growth',
//     price: 300000,
//     minProducts: 50,
//     description: 'Scale confidently with advanced funnel optimization'
//   },
//   enterprise: {
//     name: 'Enterprise Ecommerce Bundle',
//     slug: 'enterprise',
//     price: 600000,
//     minProducts: 100,
//     description: 'High-volume ecommerce with automation & integrations'
//   }
// }

// export default function BundlePage({ params }) {
//   const router = useRouter()
//   const bundle = bundles[params.slug]

//   const [email, setEmail] = useState('')
//   const [phone, setPhone] = useState('')

//   if (!bundle) return <p className="p-10">Bundle not found</p>

//   const handleSuccess = async (reference) => {
//     await saveOrder({
//       email,
//       phone,
//       bundle: bundle.name,
//       amount: bundle.price,
//       reference
//     })

//     alert('Payment successful! We will contact you shortly.')
//   }

//   const onBack = () => router.push('/ecommerce-bundles')

//   return (
//     <section className="max-w-4xl mx-auto px-6 py-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
//       {/* Back Button */}
//       <button
//         onClick={onBack}
//         className="mb-8 flex items-center gap-2 text-slate-500 hover:text-indigo-600 font-medium transition-colors group"
//       >
//         <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
//         </svg>
//         Back to Bundles
//       </button>

//       <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-slate-100 overflow-hidden relative">
//         <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-full -z-0 opacity-50" />

//         {/* Bundle Summary */}
//         <div className="relative z-10">
//           <span className="inline-block px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-widest mb-4">
//             Order Summary
//           </span>
//           <h1 className="text-3xl font-extrabold text-slate-900 mb-2">{bundle.name}</h1>
//           <p className="text-slate-500 mb-8 leading-relaxed">{bundle.description}</p>

//           <div className="space-y-4 mb-8">
//             <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
//               <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm text-indigo-600">
//                 <Icons.Package />
//               </div>
//               <div>
//                 <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter leading-none mb-1">Inventory</p>
//                 <p className="text-slate-900 font-bold">{bundle.minProducts}+ Products Setup</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
//               <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm text-indigo-600">
//                 <Icons.Zap />
//               </div>
//               <div>
//                 <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter leading-none mb-1">Timeline</p>
//                 <p className="text-slate-900 font-bold">Estimated 7-10 Days Delivery</p>
//               </div>
//             </div>
//           </div>

//           <div className="pt-6 border-t border-slate-100">
//             <div className="flex justify-between items-end">
//               <div>
//                 <p className="text-sm font-medium text-slate-500">Total Investment</p>
//                 <p className="text-4xl font-black text-slate-900">₦{bundle.price.toLocaleString()}</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Checkout Form */}
//         <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 flex flex-col justify-center">
//           <div className="mb-8">
//             <h2 className="text-xl font-bold text-slate-900 mb-2">Customer Details</h2>
//             <p className="text-sm text-slate-500">Please provide your contact information to proceed with the setup.</p>
//           </div>

//           <div className="space-y-5 mb-8">
//             <div>
//               <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">Email Address</label>
//               <input
//                 type="email"
//                 placeholder="name@company.com"
//                 value={email}
//                 onChange={e => setEmail(e.target.value)}
//                 className="w-full px-5 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-indigo-100 focus:border-indigo-600 outline-none transition-all text-slate-900 placeholder:text-slate-300 font-medium"
//               />
//             </div>

//             <div>
//               <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">Phone Number</label>
//               <input
//                 type="tel"
//                 placeholder="+234 000 000 0000"
//                 value={phone}
//                 onChange={e => setPhone(e.target.value)}
//                 className="w-full px-5 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-indigo-100 focus:border-indigo-600 outline-none transition-all text-slate-900 placeholder:text-slate-300 font-medium"
//               />
//             </div>
//           </div>

//           {/* Paystack Button */}
//           <PaystackButton
//             email={email}
//             phone={phone}
//             amount={bundle.price}
//             bundleName={bundle.name}
//             onSuccess={handleSuccess}
//           />

//           {/* Secondary Back Button below Paystack */}
//           <button
//             onClick={onBack}
//             className="mt-4 w-full py-4 rounded-xl border border-indigo-600 text-indigo-600 font-semibold hover:bg-indigo-600 hover:text-white transition"
//           >
//             Select Another Bundle
//           </button>

//           <p className="text-center mt-6 text-xs text-slate-400 font-medium">
//             Secure Encrypted Checkout • Powering Ecommerce Growth
//           </p>
//         </div>
//       </div>
//     </section>
//   )
// }



'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import PaystackButton from '@/components/PaystackButton'
import SubHeader from '@/components/SubHeaders';
import { saveOrder } from '@/lib/saveOrderToSanity'
import * as Icons from 'lucide-react'

const bundles = {
  starter: {
    name: 'Starter Ecommerce Bundle',
    slug: 'starter',
    price: 50000,
    previousPrice: 75000,
    minProducts: 20,
    description: 'Perfect to launch your first online store quickly and efficiently.',
    backgroundImage: '/images/bundle-starter.jpg',
    features: [
      '0-20 Products Setup',
      'Superfast Website',
      'Paystack Payment Gateway Integration (direct to your bank)',
      'Organic Basic SEO Optimization',
      'Custom Domain: yourcompany.com',
      'Mobile Responsive Design',
      'Basic CMS for product management',
      'Basic Order & Inventory Management'
    ]
  },
  growth: {
    name: 'Growth Ecommerce Bundle',
    slug: 'growth',
    price: 100000,
    previousPrice: 150000,
    minProducts: 50,
    description: 'Scale your business with advanced features for a growing store.',
    backgroundImage: '/images/bundle-growth.jpg',
    features: [
      '0-50 Products Setup',
      'Superfast Website',
      'Paystack Payment Gateway Integration (direct to your bank)',
      'Organic SEO Optimization',
      'Custom Domain: yourbusiness.com',
      'Mobile Responsive Design',
      'Advanced CMS with categories & collections',
      'Email Notifications for Orders & Updates',
    ]
  },
  enterprise: {
    name: 'Enterprise Ecommerce Bundle',
    slug: 'enterprise',
    price: 300000,
    previousPrice: 450000,
    minProducts: 100,
    description: 'Full-featured ecommerce system with automation, integrations, and enterprise support.',
    backgroundImage: '/images/bundle-enterprise.jpg',
    features: [
      '0-100 Products Setup',
      'Superfast Website',
      'Paystack Payment Gateway Integration (direct to your bank)',
      'Advance Organic SEO Optimization',
      '3 Custom Emails (you@yourcompany.com)',
      'Mobile Responsive Design',
      'Automated Email & SMS Notifications',
      'Discount Management',
      'Customer Support Chat Integration',
    ]
  }
}


export default function BundlePage({ params }) {
  const router = useRouter()
  const bundle = bundles[params.slug]

  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  if (!bundle) return <p className="p-10">Bundle not found</p>

  const handleSuccess = async (reference) => {
    await saveOrder({
      email,
      phone,
      bundle: bundle.name,
      amount: bundle.price,
      reference
    })

    alert('Payment successful! We will contact you shortly.')
  }

  const onBack = () => router.push('/ecommerce-bundles')

  return (
    <>
      {/* Dynamic SubHeader */}
      <SubHeader 
        title={bundle.name} 
        subtitle={bundle.description} 
        backgroundImage={bundle.backgroundImage} 
      />

      {/* Main Bundle Checkout Section */}
      <section className="max-w-4xl mx-auto px-6 py-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
        
        {/* Back Button */}
        <button
          onClick={onBack}
          className="mb-8 flex items-center gap-2 text-slate-500 hover:text-indigo-600 font-medium transition-colors group"
        >
          <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Bundles
        </button>

        <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-slate-100 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-full -z-0 opacity-50" />

          {/* Bundle Summary */}
<div className="relative z-10">
  <span className="inline-block px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-widest mb-4">
    Order Summary
  </span>

  <h1 className="text-3xl font-extrabold text-slate-900 mb-2">{bundle.name}</h1>
  <p className="text-slate-500 mb-4">{bundle.description}</p>

  <div className="mb-6">
    <p className="text-sm text-gray-500 line-through">₦{bundle.previousPrice?.toLocaleString()}</p>
    <p className="text-4xl font-black text-slate-900">₦{bundle.price.toLocaleString()}</p>
  </div>

  <ul className="space-y-3 mb-8">
    {bundle.features.map((feature, idx) => (
      <li key={idx} className="flex items-start gap-3">
        <Icons.Check className="w-5 h-5 text-indigo-600 mt-1" />
        <span className="text-slate-700">{feature}</span>
      </li>
    ))}
  </ul>
</div>


          {/* Checkout Form */}
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 flex flex-col justify-center">
            <div className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-2">Customer Details</h2>
              <p className="text-sm text-slate-500">Please provide your contact information to proceed with the setup.</p>
            </div>

            <div className="space-y-5 mb-8">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">Email Address</label>
                <input
                  type="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full px-5 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-indigo-100 focus:border-indigo-600 outline-none transition-all text-slate-900 placeholder:text-slate-300 font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+234 000 000 0000"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  className="w-full px-5 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-indigo-100 focus:border-indigo-600 outline-none transition-all text-slate-900 placeholder:text-slate-300 font-medium"
                />
              </div>
            </div>

            <PaystackButton
              email={email}
              phone={phone}
              amount={bundle.price}
              bundleName={bundle.name}
              onSuccess={handleSuccess}
            />

            <button
              onClick={onBack}
              className="mt-4 w-full py-4 rounded-xl border border-indigo-600 text-indigo-600 font-semibold hover:bg-indigo-600 hover:text-white transition"
            >
              Select Another Bundle
            </button>

            <p className="text-center mt-6 text-xs text-slate-400 font-medium">
              Secure Encrypted Checkout • Powering Ecommerce Growth
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
