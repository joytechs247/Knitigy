'use client'
import { useEffect } from 'react'
import { CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function ThankYou() {
  useEffect(() => {
    // Fire Google Ads conversion tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'allow_custom_scripts': true
      })
    }

    // Alternative: Fire Google Analytics event for conversion
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'form_submission', {
        'event_category': 'engagement',
        'event_label': 'lead_form_submitted'
      })
    }

    // Send conversion event to Google Ads via gtag
    // This corresponds to your "Submit lead forms" goal
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'submit_lead_form', {
        'value': 1,
        'currency': 'USD'
      })
    }
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center bg-white py-16 px-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
          <CheckCircle size={80} className="text-green-500 mx-auto mb-6" />
          <h1 className="text-3xl lg:text-4xl font-bold text-primary-500 mb-4">
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
              className="inline-block px-8 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors"
            >
              Back to Home
            </Link>
            <Link
              href="/blogs"
              className="inline-block px-8 py-3 border border-primary-500 text-primary-500 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
            >
              Read Our Blog
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
