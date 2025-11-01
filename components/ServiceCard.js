// components/ServiceCard.js
'use client'
import { motion } from 'framer-motion'
import { ArrowRight, BadgeCheck } from 'lucide-react'

export default function ServiceCard({ service, index }) {
  const services = [
    {
      title: "Property Title Check & Legal Verification",
      description: "Avoid costly legal mistakes. Lawyer-reviewed report before purchase.",
      price: "From ₹1,999",
      icon: "🏠",
      features: ["Title verification", "Encumbrance check", "Legal opinion", "Risk assessment"]
    },
    {
      title: "Will Drafting & Power of Attorney (PoA)",
      description: "Secure your family. Lawyer-drafted, registration-ready docs.",
      price: "From ₹999",
      icon: "📝",
      features: ["Will drafting", "PoA preparation", "Registration guidance", "Executor nomination"]
    },
    {
      title: "Rental Agreement & Leave & License",
      description: "E-stamped & ready in 24-48 hrs.",
      price: "From ₹799",
      icon: "🔑",
      features: ["Agreement drafting", "E-stamping", "Notarization", "Digital delivery"]
    },
    {
      title: "Caste Certificate Application Assistance",
      description: "Form filling, affidavit, department submission guidance.",
      price: "From ₹599",
      icon: "🎓",
      features: ["Form preparation", "Affidavit drafting", "Document checklist", "Submission guidance"]
    },
    {
      title: "Affidavit Drafting & Attestation",
      description: "Education, address change, employment — drafted & attested.",
      price: "From ₹499",
      icon: "📄",
      features: ["Custom drafting", "Notarization", "Multiple copies", "Quick turnaround"]
    },
    {
      title: "Startup Legal Kit",
      description: "Founders documents & filings packaged for startups.",
      price: "From ₹2,499",
      icon: "💼",
      features: ["Founders agreement", "NDA templates", "Incorporation docs", "Compliance checklist"]
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="card p-6 h-full group cursor-pointer"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="text-3xl">{service.icon}</div>
        <BadgeCheck size={20} className="text-primary-600" />
      </div>
      
      <h3 className="text-xl font-semibold text-neutral-900 mb-3 group-hover:text-primary-700 transition-colors">
        {service.title}
      </h3>
      
      <p className="text-neutral-600 mb-4 leading-relaxed">
        {service.description}
      </p>
      
      <div className="space-y-3 mb-6">
        {service.features.map((feature, idx) => (
          <div key={idx} className="flex items-center space-x-2 text-sm text-neutral-600">
            <div className="w-1.5 h-1.5 bg-primary-600 rounded-full"></div>
            <span>{feature}</span>
          </div>
        ))}
      </div>
      
      <div className="flex items-center justify-between mt-auto">
        <span className="text-lg font-bold text-primary-700">{service.price}</span>
        <button className="flex items-center space-x-2 text-primary-700 font-semibold group-hover:text-primary-800 transition-colors">
          <span>Get This Service</span>
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  )
}