'use client'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  const scrollToForm = () => {
    const element = document.getElementById('contact-form')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-brand-lavender/20 flex items-center pt-24 lg:pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content - More Compact */}
          <div className="space-y-6 lg:space-y-8">
            <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold text-primary-500 leading-tight">
              Get Important Paperwork Done —{' '}
              <span className="text-accent-400">Without the Stress</span>{' '}
              or Running Around
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              Buying property, changing your name, or need a document drafted? We help you get it done start to finish. Expert-reviewed. No chasing agents. No upfront payment.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={scrollToForm}
                className="btn-primary text-lg px-8 py-4 flex items-center justify-center space-x-2"
              >
                <span>Tell Us What You Need</span>
                <ArrowRight size={20} />
              </button>
            </div>

            {/* Trust Indicators - More Compact */}
            <div className="grid grid-cols-2 gap-3 pt-6">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-brand-teal rounded-full"></div>
                <span>No Upfront Payment</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-brand-teal rounded-full"></div>
                <span>Expert-Reviewed</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-brand-teal rounded-full"></div>
                <span>End-to-End Support</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-brand-teal rounded-full"></div>
                <span>Fast Turnaround</span>
              </div>
            </div>
          </div>

          {/* Right Visual - Hero Image */}
          <div className="relative h-64 lg:h-80 xl:h-96 rounded-3xl flex items-center justify-center overflow-hidden">
            <Image 
              src="/image1.png" 
              alt="Paperwork Made Simple"
              width={600}
              height={400}
              className="w-full h-full object-cover rounded-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-brand-teal/10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}