'use client'
import { useEffect, useLayoutEffect } from 'react'
import { CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function ThankYou() {
  // Fire conversion events immediately on page load
  useLayoutEffect(() => {
    // Fire Google Ads conversion tracking
    try {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'conversion', {
          'allow_custom_scripts': true
        })
        window.gtag('event', 'submit_lead_form', {
          'value': 1,
          'currency': 'USD'
        })
      }
    } catch (error) {
      console.log('Conversion tracking:', error)
    }
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center bg-white py-16 px-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
          <CheckCircle size={80} className="text-green-500 mx-auto mb-6" />
          <h1 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#2A3A6F' }}>
            Thank You!
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            Your form has been submitted successfully.
          </p>
          <p className="text-base text-gray-500 mb-8">
            Our team will contact you within 2 working hours.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-block px-8 py-3 text-white font-semibold rounded-lg transition-colors"
              style={{ backgroundColor: '#2A3A6F' }}
            >
              Back to Home
            </Link>
            <Link
              href="/blogs"
              className="inline-block px-8 py-3 font-semibold rounded-lg transition-colors"
              style={{ border: '2px solid #2A3A6F', color: '#2A3A6F' }}
            >
              Read Our Blog
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
