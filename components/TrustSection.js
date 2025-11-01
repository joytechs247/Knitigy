'use client'
import { Lock, Clock, Shield, Users, FileCheck, Heart } from 'lucide-react'

export default function TrustSection() {
  const trustFeatures = [
    {
      icon: Lock,
      title: 'No Upfront Payment',
      description: 'Pay only after your paperwork is complete and you are satisfied.'
    },
    {
      icon: Shield,
      title: 'Document Security',
      description: 'All documents encrypted, securely stored, and deleted post service.'
    },
    {
      icon: Users,
      title: 'End-to-End Support',
      description: 'No agents, no government office visits. We handle everything for you.'
    },
    {
      icon: FileCheck,
      title: 'Expert Review',
      description: 'Documents reviewed by certified professionals to ensure accuracy.'
    },
    {
      icon: Clock,
      title: 'Fast Turnaround',
      description: 'Most services completed in 48–72 hours from requirement finalization.'
    },
    {
      icon: Heart,
      title: 'Stress-Free Experience',
      description: 'We manage the entire process so you can focus on what matters.'
    }
  ]

  return (
    <section id="trust" className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-brand-lavender/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-500 mb-4">
            Why People Trust Us
          </h2>
          <p className="text-lg text-gray-600">
            We make paperwork simple, secure, and stress-free
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {trustFeatures.map((feature, index) => (
            <div key={index} className="card text-center hover:shadow-lg transition-all duration-300 p-2">
              <div className="w-16 h-16 bg-brand-teal rounded-lg flex items-center justify-center mb-4 mx-auto">
                <feature.icon size={28} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-primary-500 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}