// import ContactForm from "../../components/ContactForm"

// // export const metadata = {
// //   title: "Property Due Diligence | Knitigya",
// //   description: "Property title verification, due diligence, sale deed drafting and land documentation support."
// // }

// export default function PropertyDueDiligencePage() {
//   return (
//     <main className="bg-white">

//       {/* Hero Section */}
//       <section className="py-16 lg:py-24 bg-primary-50">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h1 className="text-4xl lg:text-5xl font-bold text-primary-500 mb-6">
//             Property Due Diligence & Verification Services
//           </h1>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Buying land or property? We help you verify ownership, check legal records,
//             draft agreements, and ensure your investment is legally secure.
//           </p>
//         </div>
//       </section>

//       {/* Service Highlights */}
//       <section className="py-16">
//         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">

//           <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
//             <h3 className="text-xl font-semibold text-primary-500 mb-3">
//               What We Help With
//             </h3>
//             <ul className="space-y-2 text-gray-600">
//               <li>• Property Title Check / Verification</li>
//               <li>• Property Due Diligence</li>
//               <li>• Sale / Gift / Lease Deed Drafting</li>
//               <li>• Mutation & Registration Help</li>
//               <li>• Land Ownership / NOC</li>
//               <li>• Rental / Leave & License Agreement</li>
//             </ul>
//           </div>

//           <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
//             <h3 className="text-xl font-semibold text-primary-500 mb-3">
//               Why Choose Knitigya?
//             </h3>
//             <ul className="space-y-2 text-gray-600">
//               <li>• No advance payment</li>
//               <li>• Expert document review</li>
//               <li>• Fast turnaround (48–72 hours)</li>
//               <li>• End-to-end support</li>
//             </ul>
//           </div>

//         </div>
//       </section>

//       {/* Contact Form (Filtered to Property Category Only) */}
//       <ContactForm allowedCategories={["Real Estate & Property"]} />

//     </main>
//   )
// }













"use client"


import ContactForm from "../../components/ContactForm"
import { Shield, FileText, CheckCircle, Clock, Home, ScrollText, Landmark, FileCheck } from 'lucide-react'
import Header from "../../components/Header"

// export const metadata = {
//   title: "Property Due Diligence | Knitigya",
//   description: "Property title verification, due diligence, sale deed drafting and land documentation support."
// }

export default function PropertyDueDiligencePage() {
  const services = [
    { name: "Property Title Check / Verification", icon: FileCheck },
    { name: "Property Due Diligence", icon: Shield },
    { name: "Sale / Gift / Lease Deed Drafting", icon: ScrollText },
    { name: "Mutation & Registration Help", icon: FileText },
    { name: "Land Ownership / NOC", icon: Landmark },
    { name: "Rental / Leave & License Agreement", icon: Home },
  ]

  const benefits = [
    { text: "No advance payment", icon: Shield, desc: "Pay only after service delivery" },
    { text: "Expert document review", icon: FileCheck, desc: "Thorough verification by legal experts" },
    { text: "Fast turnaround", icon: Clock, desc: "Quick processing within days" },
    { text: "End-to-end support", icon: CheckCircle, desc: "Complete assistance throughout" },
  ]

  return (
    <>
    <Header />
    <main className="bg-white">
      {/* Hero Section with Enhanced Design */}
      <section className="relative py-20 lg:py-36 bg-gradient-to-br from-primary-50 via-white to-primary-50 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-200 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-300 rounded-full filter blur-3xl opacity-20"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full mb-6">
            <Home className="w-4 h-4" />
            <span className="text-sm font-medium">Real Estate Legal Services</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-primary-500 mb-6 leading-tight">
            Property Due Diligence 
            <span className="block text-primary-600">& Verification Services</span>
          </h1>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Buying land or property? We help you verify ownership, check legal records,
            draft agreements, and <span className="font-semibold text-primary-500">ensure your investment is legally secure.</span>
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 mt-10">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-500">100%</div>
              <div className="text-sm text-gray-500">Verified Checks</div>
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
        </div>
      </section>

      {/* Services Section with Enhanced Cards */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-500 mb-4">
              Comprehensive Property Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete legal support for all your property documentation needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Services Card */}
            <div className="group bg-white border border-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="bg-gradient-to-r from-primary-500 to-primary-600 px-6 py-4">
                <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  What We Help With
                </h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 gap-3">
                  {services.map((item, index) => {
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

            {/* Benefits Card */}
            <div className="group bg-white border border-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-6 py-4">
                <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Why Choose Knitigya?
                </h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {benefits.map((item, index) => {
                    const Icon = item.icon
                    return (
                      <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
                        <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-primary-600" />
                        </div>
                        <div>
                          <span className="font-medium text-gray-800">{item.text}</span>
                          <p className="text-sm text-gray-500 mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Trust Badge */}
                <div className="mt-6 p-4 bg-primary-50 rounded-xl border border-primary-100">
                  <div className="flex items-center gap-3">
                    <Landmark className="w-6 h-6 text-primary-600" />
                    <div>
                      <h4 className="font-semibold text-primary-700">Legal Expertise You Can Trust</h4>
                      <p className="text-sm text-gray-600">Thorough verification by experienced legal professionals</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-500 mb-4">
              Simple 3-Step Process
            </h2>
            <p className="text-gray-600">
              Get your property documents verified without any hassle
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Share Documents", desc: "Upload your property papers for review", icon: FileText },
              { step: "02", title: "Expert Verification", desc: "Our team thoroughly checks all records", icon: FileCheck },
              { step: "03", title: "Get Report", desc: "Receive detailed verification report", icon: Shield },
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

      {/* Why Due Diligence Matters */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <h3 className="text-2xl font-bold text-primary-500 mb-6 text-center">
              Why Property Due Diligence Matters
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-600 font-bold">✕</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Avoid Legal Disputes</h4>
                  <p className="text-sm text-gray-600">Prevent future ownership conflicts and litigation</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Secure Investment</h4>
                  <p className="text-sm text-gray-600">Ensure your property investment is legally protected</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">✓</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Clear Title</h4>
                  <p className="text-sm text-gray-600">Verify undisputed ownership before purchase</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-bold">✓</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Peace of Mind</h4>
                  <p className="text-sm text-gray-600">Complete confidence in your property transaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section with Enhanced Styling */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary-500 mb-4">
              Ready to Verify Your Property?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Fill out the form below and our legal experts will assist you with the verification process
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-primary-500 to-primary-600 px-6 py-4">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Request Property Verification
              </h3>
            </div>
            <div className="p-8">
              <ContactForm allowedCategories={["Real Estate & Property"]} />
            </div>
          </div>
        </div>
      </section>

      {/* Add custom CSS for grid pattern */}
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