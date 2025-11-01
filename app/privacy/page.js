'use client'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Privacy() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20 lg:pt-24">
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Privacy Policy
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-600 mb-6">
                Your privacy is important to us. This privacy policy explains how we collect, use, and protect your personal information.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Information We Collect
              </h2>
              <p className="text-gray-600 mb-4">
                We collect information that you provide directly to us when you use our services, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Contact information (name, email, phone number)</li>
                <li>Service-related information and documents</li>
                <li>Communication preferences</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                How We Use Your Information
              </h2>
              <p className="text-gray-600 mb-6">
                We use the information we collect to provide and improve our legal services, communicate with you, and ensure the security of our platform.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Data Security
              </h2>
              <p className="text-gray-600 mb-6">
                All documents are encrypted and securely stored. We delete your data once your service is complete, unless required to maintain it for legal purposes.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}