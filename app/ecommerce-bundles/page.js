// import Link from 'next/link'
// import SubHeaders from '@/components/SubHeaders';

// const bundles = [
//   {
//     name: 'Starter Ecommerce Bundle',
//     slug: 'starter',
//     minProducts: 20,
//     price: 150000,
//     description: 'Ideal for startups launching ecommerce'
//   },
//   {
//     name: 'Growth Ecommerce Bundle',
//     slug: 'growth',
//     minProducts: 50,
//     price: 300000,
//     description: 'For scaling ecommerce businesses'
//   },
//   {
//     name: 'Enterprise Ecommerce Bundle',
//     slug: 'enterprise',
//     minProducts: 100,
//     price: 600000,
//     description: 'High-volume ecommerce solution'
//   }
// ]

// export default function EcommerceBundlesPage() {
//   return (
//     <>
//      <SubHeaders  
//             title="Ecommerce Excellence"
//             backgroundImage="/img/Banner-pointx3.jpg"
//             />  
   
//     <section className="max-w-7xl mx-auto px-4 py-16">
//       <h1 className="text-3xl md:text-4xl font-bold text-center text-brand">
//         Ecommerce Sales Funnel Bundles
//       </h1>

//       <div className="grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3">
//         {bundles.map(bundle => (
//           <div
//             key={bundle.slug}
//             className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition"
//           >
//             <h3 className="text-xl font-semibold mb-2">{bundle.name}</h3>
//             <p className="text-gray-600 mb-4">{bundle.description}</p>

//             <div className="space-y-1 text-sm">
//               <p><strong>Min Products:</strong> {bundle.minProducts}+</p>
//               <p><strong>Price:</strong> ₦{bundle.price.toLocaleString()}</p>
//             </div>

//             <Link href={`/ecommerce-bundles/${bundle.slug}`}>
//               <button className="mt-6 w-full bg-brand text-white py-3 rounded-xl font-medium hover:opacity-90 transition">
//                 Choose Bundle
//               </button>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </section>
//      </>
//   )
// }


import BundleCard from '@/components/BundleCard'
import SubHeaders from '@/components/SubHeaders';
import { Zap, CreditCard, Package, Layers, Truck, Users, Globe } from 'lucide-react'

const BUNDLES = [
  {
    name: 'Starter Ecommerce Bundle',
    slug: 'starter',
    price: 50000,
    minProducts: '0–20',
    description: 'Launch fast with a clean, conversion-ready store',
    features: [
      { icon: Zap, label: 'Superfast Website' },
      { icon: CreditCard, label: 'Paystack (Direct Bank Payment)' },
      { icon: Package, label: 'Up to 20 Products' },
      { icon: Globe, label: 'Custom Domain' }
    ]
  },
  {
    name: 'Growth Ecommerce Bundle',
    slug: 'growth',
    price: 100000,
    minProducts: '0–50',
    highlight: true,
    description: 'Scale confidently with advanced ecommerce tools',
    features: [
        { icon: Zap, label: 'Superfast Website' },
        { icon: CreditCard, label: 'Paystack (Direct Bank Payment)' },
        { icon: Package, label: 'Up to 50 Products' },
        { icon: Globe, label: 'Custom Domain' },
    ]
  },
  {
    name: 'Enterprise Ecommerce Bundle',
    slug: 'enterprise',
    price: 300000,
    minProducts: '0–100',
    description: 'Enterprise-grade ecommerce with automation',
    features: [
      { icon: Users, label: 'CMS Product Management' },
      { icon: Truck, label: 'Advanced SEO' },
      { icon: Package, label: 'Up to 100 Products' },
      { icon: Globe, label: 'Custom Domain & Email' },
    ]
  }
]

export default function EcommerceBundlesPage() {
  return (
      <>
     <SubHeaders  
            title="Premium Sales Funnel Bundles"
            backgroundImage="/img/Banner-pointx3.jpg"
             />  
    <main className="max-w-7xl mx-auto px-6 mt-16 md:mt-24">

      {/* Hero Section */}
      <section className="text-center mb-20 md:mb-32">
        <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 px-4 py-2 rounded-full mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          <span className="text-xs font-bold text-indigo-700 uppercase tracking-widest">
            Ecommerce Excellence
          </span>
        </div>


        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Everything you need to launch, scale, and automate your high-converting
          ecommerce store with expert precision.
        </p>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {BUNDLES.map(bundle => (
            <BundleCard key={bundle.slug} bundle={bundle} />
          ))}
        </div>
      </section>

      {/* Social Proof */}
      <section className="mt-32 text-center">
        <p className="text-slate-400 font-medium text-sm uppercase tracking-[0.2em] mb-12">
          Trusted by innovative brands
        </p>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition">
          <div className="text-2xl font-black text-slate-800">Larrytino</div>
          <div className="text-2xl font-black text-slate-800 italic">Cyrus Electric</div>
          <div className="text-2xl font-black text-slate-800">SmatStores 247</div>
          <div className="text-2xl font-black text-slate-800 tracking-widest">NOVA</div>
        </div>
      </section>

      {/* CTA */}
      <section className="my-32 p-8 md:p-16 rounded-[3rem] bg-indigo-600 text-white overflow-hidden relative shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400/20 rounded-full -ml-32 -mb-32 blur-3xl" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Ready to transform your sales engine?
            </h2>
            <p className="text-indigo-100 text-lg opacity-80">
              Join 500+ businesses scaling with Pointx & Zest ecommerce funnels.
            </p>
          </div>

          <a
            href="#pricing"
            className="bg-white text-indigo-600 px-10 py-5 rounded-2xl font-bold text-lg shadow-xl hover:bg-slate-50 transition transform hover:scale-105 active:scale-95"
          >
            View Bundles
          </a>
        </div>
      </section>
    </main>
    </>
  )
}
