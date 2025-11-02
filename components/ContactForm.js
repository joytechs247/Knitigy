'use client'
import { useState, useEffect } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

// Initialize EmailJS (you'll need to install emailjs-com)
const initEmailJS = () => {
  if (typeof window !== 'undefined') {
    return require('emailjs-com')
  }
  return null
}

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
  const [emailJS, setEmailJS] = useState(null)

  useEffect(() => {
    // Initialize EmailJS on client side only
    setEmailJS(initEmailJS())
  }, [])

  const serviceOptions = [

    'Property Title Check / Verification',
    'Sale/Gift/Lease Deed Drafting',
    'Property Due Diligence',
    'Mutation & Registration Help',
    'Name Change Affidavit + Gazette',
    'Will Drafting',
    'Marriage Registration Assistance',
    'Power of Attorney Drafting',
    'Rental / Leave & License Agreement',
    'Affidavit Drafting & Notarization',
    'E-Stamping Support',
    'Document Attestation',
    'Business & Startup',
    'Company / LLP Registration Support',
    'Founders\' or Shareholder Agreement Drafting',
    'Trademark / IP Filing Help',
    'License Registrations (FSSAI, Shop Act)',
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
      if (!emailJS) {
        throw new Error('EmailJS not initialized')
      }

      // EmailJS configuration - Replace with your actual credentials
      const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'your_service_id'
      const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'your_template_id'
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key'

      // Prepare template parameters with all form data
            const templateParams = {
              from_name: formData.name,
              from_email: formData.email || 'Not provided',
              from_phone: formData.phone,
              service_type: formData.service,
              description: formData.description || 'No additional description provided',
              submitted_at: new Date().toLocaleString('en-IN', {
                timeZone: 'Asia/Kolkata',
                dateStyle: 'full',
                timeStyle: 'medium'
              }),
              // Additional details for better email formatting
              client_name: formData.name,
              client_contact: `Phone: ${formData.phone}${formData.email ? ` | Email: ${formData.email}` : ''}`,
              full_message: `
      New Service Request Received:

      Client Details:
      - Name: ${formData.name}
      - Phone: ${formData.phone}
      - Email: ${formData.email || 'Not provided'}

      Service Required:
      ${formData.service}

      Additional Description:
      ${formData.description || 'No additional description provided'}

      Submitted on: ${new Date().toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        dateStyle: 'full',
        timeStyle: 'medium'
      })}

      Please contact the client within 2 working hours.
              `.trim()
            }



      // Send email using EmailJS
      const result = await emailJS.send(serviceID, templateID, templateParams, publicKey)

      console.log('Email sent successfully:', result)

      setSubmitStatus('success')
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        description: ''
      })
    } catch (error) {
      console.error('Email sending failed:', error)
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
            <h2 className="text-3xl font-bold text-primary-500 mb-4">
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
                className="btn-secondary"
              >
                Back to Home
              </button>
              {/* <button
                onClick={() => window.open('https://wa.me/917309292500', '_blank')}
                className="btn-primary"
              >
                Chat with Support
              </button> */}
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
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-500 mb-4">
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
              className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-lg"
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
              className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-lg"
              placeholder="Enter your phone number"
              inputMode="numeric"
              pattern="[0-9]{10}"
              title="Please enter a valid 10-digit phone number"
            />
          </div>

          {/* Email (Optional but recommended) */}
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
              required
              className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-lg"
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
              className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-lg appearance-none bg-white"
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
              className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-lg"
              placeholder="Tell us a bit more about your requirement..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-primary text-lg py-4 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
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