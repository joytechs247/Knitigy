'use client'
import { useState } from 'react'
import { ChevronDown, ChevronUp, Home, FileText, User, Building, Shield } from 'lucide-react'

export default function UseCases() {
  const [openItems, setOpenItems] = useState([])

  const toggleItem = (index) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    )
  }

  const useCases = [
    {
      icon: Home,
      title: 'Buying a property?',
      description: 'We verify ownership history and documents to ensure your investment is secure.',
      details: 'Complete property verification including title check, encumbrance certificate, and legal opinion.'
    },
    {
      icon: FileText,
      title: 'Need a will or power of attorney?',
      description: 'We draft documents reviewed by certified professionals to protect your interests.',
      details: 'Professionally drafted wills, power of attorney documents with proper legal safeguards.'
    },
    {
      icon: User,
      title: 'Changing your name?',
      description: 'We handle the complete affidavit and Gazette process from start to finish.',
      details: 'End-to-end name change process including affidavit drafting, newspaper publication, and gazette notification.'
    },
    {
      icon: Building,
      title: 'Starting a company?',
      description: 'Founders\' agreements, registration, and intellectual property support for your business.',
      details: 'Complete business setup support including company registration, founder agreements, and trademark filing.'
    },
    {
      icon: Shield,
      title: 'Need a document notarized or stamped?',
      description: 'We assist through the complete document attestation and stamping process.',
      details: 'Document notarization, e-stamping, and attestation services with proper legal verification.'
    }
  ]

  return (
    <section id="use-cases" className="py-16 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Can You Get Done With Us?
          </h2>
          <p className="text-lg text-gray-600">
            Tell us what you need — and we'll get it done.
          </p>
        </div>

        <div className="space-y-4">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 overflow-hidden">
              <button
                onClick={() => toggleItem(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <useCase.icon size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {useCase.description}
                    </p>
                  </div>
                </div>
                {openItems.includes(index) ? (
                  <ChevronUp size={20} className="text-gray-400 flex-shrink-0" />
                ) : (
                  <ChevronDown size={20} className="text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openItems.includes(index) && (
                <div className="px-6 pb-6 border-t border-gray-100 pt-4">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {useCase.details}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Sticky CTA for mobile */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg">
          <button 
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
          >
            Tell Us What You Need
          </button>
        </div>
      </div>
    </section>
  )
}