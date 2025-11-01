'use client'
import { useState } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    description: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const serviceOptions = [
    'Property & Real Estate',
    'Property Title Check / Verification',
    'Sale/Gift/Lease Deed Drafting',
    'Property Due Diligence',
    'Mutation & Registration Help',
    'Personal / Identity',
    'Name Change Affidavit + Gazette',
    'Will Drafting',
    'Marriage Registration Assistance',
    'Power of Attorney Drafting',
    'Rental & Documents',
    'Rental / Leave & License Agreement',
    'Affidavit Drafting & Notarization',
    'E-Stamping Support',
    'Document Attestation',
    'Business & Startup',
    'Company / LLP Registration Support',
    'Founders\' or Shareholder Agreement Drafting',
    'Trademark / IP Filing Help',
    'License Registrations (FSSAI, Shop Act)',
    'Others',
    'Consumer Complaint Help',
    'RTI Filing',
    'College/University Dispute',
    'Not Sure — I need advice'
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setSubmitStatus('success')
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        description: ''
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitStatus === 'success') {
    return (
      <section id="contact-form" className="py-16 lg:py-24 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <CheckCircle size={64} className="text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Thank You!
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Our team will contact you within 2 working hours.
            </p>
            <p className="text-sm text-gray-500 mb-8">
              We never store your data unnecessarily. All documents are encrypted and deleted once your service is complete.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.location.href = '/'}
                className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200"
              >
                Back to Home
              </button>
              <button 
                onClick={() => window.open('https://wa.me/919876543210', '_blank')}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200"
              >
                Chat with Support
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact-form" className="py-16 lg:py-24 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Tell Us What You Need Help With
          </h2>
          <p className="text-lg text-gray-600">
            Fill out this quick form. We'll contact you to understand your requirement. No spam. No obligation.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-6">
          {/* Full Name */}
          <div className="relative">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-lg"
              placeholder="Enter your full name"
            />
          </div>

          {/* Phone Number */}
          <div className="relative">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-lg"
              placeholder="Enter your phone number"
              inputMode="numeric"
            />
          </div>

          {/* Email (Optional) */}
          <div className="relative">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-lg"
              placeholder="Enter your email address"
            />
          </div>

          {/* Service Dropdown */}
          <div className="relative">
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
              What Do You Need Help With? *
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-lg appearance-none bg-white"
            >
              <option value="">Select what you need help with</option>
              {serviceOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>

          {/* Description (Optional) */}
          <div className="relative">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
              Brief Description (Optional)
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-lg"
              placeholder="Tell us a bit more about your requirement..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 text-lg flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <Send size={20} />
                <span>Get Help Now</span>
              </>
            )}
          </button>

          {/* Microcopy */}
          <div className="text-center text-sm text-gray-500 space-y-1">
            <p>No advance payment. We'll reach out only if we can help.</p>
            <p>Documents are encrypted & deleted post service.</p>
          </div>

          {/* Error Message */}
          {submitStatus === 'error' && (
            <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-lg">
              <AlertCircle size={20} />
              <span>Something went wrong. Please try again or contact us directly.</span>
            </div>
          )}
        </form>
      </div>
    </section>
  )
}