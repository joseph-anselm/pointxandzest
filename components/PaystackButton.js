// 'use client'

// export default function PaystackButton({
//   email,
//   phone,
//   amount,
//   bundleName,
//   onSuccess
// }) {
//   const pay = () => {
//     if (!email || !phone) {
//       alert('Please enter email and phone number')
//       return
//     }

//     const handler = window.PaystackPop.setup({
//       key: process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY,
//       email,
//       amount: amount * 100,
//       currency: 'NGN',
//       metadata: {
//         custom_fields: [
//           { display_name: 'Phone', value: phone },
//           { display_name: 'Bundle', value: bundleName }
//         ]
//       },
//       callback: res => onSuccess(res.reference)
//     })

//     handler.openIframe()
//   }

//   return (
//     <button
//       onClick={pay}
//       className="w-full bg-brand text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
//     >
//       Pay Now
//     </button>
//   )
// }



'use client'

import { useEffect } from 'react'

export default function PaystackButton({
  email,
  phone,
  amount,
  bundleName,
  onSuccess
}) {
  /* ✅ Load Paystack script safely */
  useEffect(() => {
    if (typeof window === 'undefined') return

    if (!window.PaystackPop) {
      const script = document.createElement('script')
      script.src = 'https://js.paystack.co/v1/inline.js'
      script.async = true
      document.body.appendChild(script)
    }
  }, [])

  const pay = () => {
    if (!email || !phone) {
      alert('Please enter email and phone number')
      return
    }

    if (!window.PaystackPop) {
      alert('Payment system not ready. Please refresh the page.')
      return
    }

    const publicKey = process.env.NEXT_PUBLIC_PAYSTACK

    if (!publicKey) {
      console.error('Missing Paystack public key')
      alert('Payment configuration error')
      return
    }

    const handler = window.PaystackPop.setup({
      key: publicKey, // ✅ CORRECT KEY
      email,
      amount: Math.round(Number(amount) * 100), // ✅ Kobo
      currency: 'NGN',
      metadata: {
        custom_fields: [
          { display_name: 'Phone', value: phone },
          { display_name: 'Bundle', value: bundleName }
        ]
      },
      callback: response => {
        if (response?.reference) {
          onSuccess(response.reference)
        }
      },
      onClose: () => {
        console.log('Payment window closed')
      }
    })

    handler.openIframe()
  }

  return (
    <button
      type="button"
      onClick={pay}
      className="w-full bg-brand text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
    >
      Pay Now
    </button>
  )
}
