// import Link from 'next/link'

// export default function BundleCard({ bundle }) {
//   return (
//     <div
//       className={`relative flex flex-col rounded-3xl p-8 border shadow-sm
//       ${bundle.highlight ? 'border-indigo-600 shadow-xl scale-[1.03]' : 'border-slate-200'}
//       bg-white`}
//     >
//       {bundle.highlight && (
//         <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-bold px-4 py-1 rounded-full">
//           Most Popular
//         </span>
//       )}

//       <h3 className="text-2xl font-bold text-slate-900 mb-2">
//         {bundle.name}
//       </h3>

//       <p className="text-slate-600 mb-6">{bundle.description}</p>

//       <div className="mb-8">
//         <p className="text-4xl font-extrabold text-slate-900">
//           ₦{bundle.price.toLocaleString()}
//         </p>
//         <p className="text-sm text-slate-500">
//           {bundle.minProducts}+ products included
//         </p>
//       </div>

//       <Link
//         href={`/ecommerce-bundles/${bundle.slug}`}
//         className="mt-auto"
//       >
//         <button
//           className={`w-full py-4 rounded-xl font-bold transition
//           ${bundle.highlight
//             ? 'bg-indigo-600 text-white hover:bg-indigo-700'
//             : 'bg-slate-900 text-white hover:bg-slate-800'}`}
//         >
//           Choose Bundle
//         </button>
//       </Link>
//     </div>
//   )
// }


import Link from 'next/link'

export default function BundleCard({ bundle }) {
  return (
    <div
      className={`relative rounded-3xl border bg-white p-8 shadow-sm transition hover:shadow-xl flex flex-col ${
        bundle.highlight ? 'border-indigo-600 scale-[1.02]' : 'border-slate-200'
      }`}
    >
      {/* Badge */}
      {bundle.highlight && (
        <span className="absolute -top-3 left-6 bg-indigo-600 text-white text-xs font-bold px-4 py-1 rounded-full">
          Most Popular
        </span>
      )}

      {/* Header */}
      <h3 className="text-2xl font-extrabold text-slate-900 mb-2">
        {bundle.name}
      </h3>

      <p className="text-slate-500 mb-6">{bundle.description}</p>

      {/* Price */}
      <div className="mb-6">
        <p className="text-4xl font-black text-slate-900">
          ₦{bundle.price.toLocaleString()}
        </p>
        <p className="text-sm text-slate-400">
          {bundle.minProducts} products included
        </p>
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-8">
        {bundle.features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <li key={index} className="flex items-center gap-3 text-slate-700">
              <Icon className="w-5 h-5 text-indigo-600" />
              <span className="text-sm font-medium">{feature.label}</span>
            </li>
          )
        })}
      </ul>

      {/* CTA */}
      <Link
        href={`/ecommerce-bundles/${bundle.slug}`}
        className="mt-auto inline-flex items-center justify-center rounded-xl bg-indigo-600 text-white py-4 font-semibold hover:bg-indigo-700 transition"
      >
        View Full Details
      </Link>
    </div>
  )
}
