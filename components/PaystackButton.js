'use client'

export default function PaystackButton({
  email,
  phone,
  amount,
  bundleName,
  onSuccess
}) {
  const pay = () => {
    if (!email || !phone) {
      alert('Please enter email and phone number')
      return
    }

    const handler = window.PaystackPop.setup({
      key: process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY,
      email,
      amount: amount * 100,
      currency: 'NGN',
      metadata: {
        custom_fields: [
          { display_name: 'Phone', value: phone },
          { display_name: 'Bundle', value: bundleName }
        ]
      },
      callback: res => onSuccess(res.reference)
    })

    handler.openIframe()
  }

  return (
    <button
      onClick={pay}
      className="w-full bg-brand text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
    >
      Pay Now
    </button>
  )
}
