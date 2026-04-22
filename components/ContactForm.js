

'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'


const initEmailJS = () => {
  if (typeof window !== 'undefined') {
    return require('emailjs-com')
  }
  return null
}

export default function ContactForm({ allowedCategories = null }) {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    category: '',
    service: '',
    description: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [emailJS, setEmailJS] = useState(null)

  useEffect(() => {
    setEmailJS(initEmailJS())
  }, [])


  const servicesData = {
    "Real Estate & Property": [
      "Property Title Check / Verification",
      "Property Due Diligence",
      "Sale/Gift/Lease Deed Drafting",
      "Mutation & Registration Help",
      "Rental / Leave & License Agreement",
      "Khatauni / Jamabandi / Khasra Extract",
      "Land Ownership / NOC for Land"
    ],
    "Identity & Residence": [
      "Name Change Affidavit + Gazette",
      "Domicile Certificate (Niwas)",
      "Marriage Registration Assistance",
      "Nationality / Identity Certificate",
      "Birth/Death Certificate Correction"
    ],
    "Community & Quota": [
      "Caste Certificate (SC/ST/OBC)",
      "EWS Certificate",
      "Income Certificate",
      "Non-Creamy Layer (NCL)",
      "Minority / BPL Certificate"
    ],
    "Family & Succession": [
      "Legal Heir Certificate (Varis)",
      "Will Drafting",
      "Power of Attorney Drafting",
      "Family Member / Parivar Register",
      "Affidavit Drafting & Notarization"
    ],
    "Business & Startup": [
      "Company / LLP Registration Support",
      "Founders' or Shareholder Agreement",
      "Trademark / IP Filing Help",
      "FSSAI / Shop Act Licenses",
      "Farmer / Agricultural Certificate"
    ],
    "Welfare & Grievances": [
      "Senior Citizen / Disability Certificate",
      "Pension Eligibility (Widow/Old Age)",
      "Consumer Complaint Help",
      "RTI Filing",
      "College/University Dispute"
    ]
  }

  const masterCategories = Object.keys(servicesData)

  const filteredCategories = allowedCategories
    ? masterCategories.filter(cat => allowedCategories.includes(cat))
    : masterCategories

  const subServices = formData.category
    ? servicesData[formData.category] || []
    : []

  const handleChange = (e) => {
    const { name, value } = e.target

    if (name === 'category') {
      setFormData(prev => ({
        ...prev,
        category: value,
        service: ''
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      if (!emailJS) throw new Error('EmailJS not initialized')

      const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone,
        category: formData.category,
        service_type: formData.service,
        description: formData.description || 'No additional description provided',
        submitted_at: new Date().toLocaleString('en-IN', {
          timeZone: 'Asia/Kolkata',
          dateStyle: 'full',
          timeStyle: 'medium'
        })
      }

      await emailJS.send(serviceID, templateID, templateParams, publicKey)

      // Redirect to thank you page for Google Ads conversion tracking
      router.push('/thank-you')

    } catch (error) {
      console.error(error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitStatus === 'success') {
    return null
  }

  return (
    <section id="contact-form" className="py-16 lg:py-24 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-500 mb-4">
            Tell Us What You Need Help With
          </h2>
          <p className="text-lg text-gray-600">
            Fill out this quick form. We'll contact you shortly.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-6">

          
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Full Name *"
            className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 text-lg"
          />

          
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="Phone Number *"
            className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 text-lg"
          />

          
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Email Address *"
            className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 text-lg"
          />

         
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              How can we help you with? *
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 text-lg"
            >
              <option value="">Select category</option>
              {filteredCategories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
              <option value="Not sure, I need advice">Not sure, I need advice</option>
            </select>
          </div>

          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Which document you need help with? *
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              disabled={!formData.category}
              className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 text-lg"
            >
              <option value="">Select service</option>
              {subServices.map(service => (
                <option key={service} value={service}>{service}</option>
              ))}
              <option value="Not sure, I need advice">Not sure, I need advice</option>
            </select>
          </div>

          
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            placeholder="Brief description (optional)"
            className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 text-lg"
          />

          <div className="flex items-start space-x-2 text-sm text-gray-600">
            <input type="checkbox" required className="mt-1" />
            <span>
              I agree to the <a href="/terms-and-conditions" className="text-primary-500 underline">Terms & Conditions</a> and consent to be contacted.
            </span>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-primary text-lg py-4 flex items-center justify-center space-x-2"
          >
            <Send size={20} />
            <span>{isSubmitting ? 'Submitting...' : 'Get Help Now'}</span>
          </button>

          {submitStatus === 'error' && (
            <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-lg">
              <AlertCircle size={20} />
              <span>Something went wrong. Please try again.</span>
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
