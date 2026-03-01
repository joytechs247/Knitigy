

"use client"

import ContactForm from "../../components/ContactForm"
import { Shield, CheckCircle, Clock, FileText, Users, Award } from 'lucide-react'
import Header from "../../components/Header"



export default function GovernmentCertificateAssistancePage() {
  const certificates = [
    { name: "Caste Certificate (SC/ST/OBC)", icon: Users },
    { name: "EWS Certificate", icon: Award },
    { name: "Income Certificate", icon: FileText },
    { name: "Non-Creamy Layer (NCL)", icon: Shield },
    { name: "Domicile Certificate", icon: FileText },
    { name: "Minority / BPL Certificate", icon: Users },
  ]

  const promises = [
    { text: "Clear documentation guidance", icon: FileText },
    { text: "No hidden charges", icon: Shield },
    { text: "Transparent process", icon: CheckCircle },
    { text: "Dedicated support", icon: Clock },
  ]

  return (
    <>
    <Header />
    <main className="bg-white">
      
      <section className="relative py-20 lg:py-36 bg-gradient-to-br from-primary-50 via-white to-primary-50 overflow-hidden">
        
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-200 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-300 rounded-full filter blur-3xl opacity-20"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
         
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full mb-6">
            <Shield className="w-4 h-4" />
            <span className="text-sm font-medium">Government Services Simplified</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-primary-500 mb-6 leading-tight">
            Government Certificate
            <span className="block text-primary-600">Assistance</span>
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We assist with caste, income, domicile, EWS, NCL, and other government
            certificate processes — <span className="font-semibold text-primary-500">without running around government offices.</span>
          </p>

         
          <div className="flex flex-wrap justify-center gap-8 mt-10">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-500">✓ Verified</div>
              <div className="text-sm text-gray-500">Thorough Checks</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-500">Expert</div>
              <div className="text-sm text-gray-500">Legal Review</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-500">Secure</div>
              <div className="text-sm text-gray-500">Documentation</div>
            </div>
          </div>

          <p className="text-center text-gray-500 mt-6">
            * Knitigya is a private consultancy and is not affiliated with any government agency.
          </p>
        </div>
      </section>

      
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-500 mb-4">
              Comprehensive Certificate Assistance
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We handle all types of government certificates with precision and care
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            <div className="group bg-white border border-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="bg-gradient-to-r from-primary-500 to-primary-600 px-6 py-4">
                <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Certificates We Help With
                </h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 gap-3">
                  {certificates.map((item, index) => {
                    const Icon = item.icon
                    return (
                      <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary-50 transition-colors">
                        <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon className="w-4 h-4 text-primary-600" />
                        </div>
                        <span className="text-gray-700">{item.name}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            
            <div className="group bg-white border border-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-6 py-4">
                <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Our Promise
                </h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {promises.map((item, index) => {
                    const Icon = item.icon
                    return (
                      <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
                        <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-primary-600" />
                        </div>
                        <div>
                          <span className="font-medium text-gray-800">{item.text}</span>
                          <p className="text-sm text-gray-500 mt-0.5">
                            {index === 0 && "Step-by-step assistance with all paperwork"}
                            {index === 1 && "Completely transparent pricing structure"}
                            {index === 2 && "Track your application status anytime"}
                            {index === 3 && "Personal assistance throughout the process"}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>

               
                <div className="mt-6 p-4 bg-primary-50 rounded-xl border border-primary-100">
                  <div className="flex items-center gap-3">
                    <Shield className="w-6 h-6 text-primary-600" />
                    <div>
                      <h4 className="font-semibold text-primary-700">Trusted & Reliable</h4>
                      <p className="text-sm text-gray-600">Government authorized assistance with complete confidentiality</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     
      <section className="py-16 bg-primary-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-500 mb-4">
              Simple 3-Step Process
            </h2>
            <p className="text-gray-600">
              Get your certificate without any hassle
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Share Requirements", desc: "Tell us which certificate you need", icon: FileText },
              { step: "02", title: "Documentation", desc: "We guide you through the paperwork", icon: CheckCircle },
              { step: "03", title: "Application Filed", desc: "We submit and track your application", icon: Shield },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="relative">
                  {index < 2 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-primary-200 -translate-y-1/2"></div>
                  )}
                  <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div className="text-sm font-bold text-primary-400 mb-2">{item.step}</div>
                    <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

    
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary-500 mb-4">
              Ready to Get Your Certificate?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Fill out the form below and our team will assist you with the entire process
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-primary-500 to-primary-600 px-6 py-4">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Request Assistance
              </h3>
            </div>
            <div className="p-8">
              <ContactForm
                allowedCategories={[
                  "Identity & Residence",
                  "Community & Quota",
                  "Welfare & Grievances"
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      
      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, #e5e7eb 1px, transparent 1px),
            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </main>
    </>
  )
}