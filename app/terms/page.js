'use client'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Terms() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20 lg:pt-24">
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Terms of Service
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-600 mb-6">
                Please read these terms of service carefully before using our legal services platform.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Service Description
              </h2>
              <p className="text-gray-600 mb-4">
                LegalHelp provides non-litigation legal services including document drafting, verification, and legal consultation through verified professionals.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                User Responsibilities
              </h2>
              <p className="text-gray-600 mb-6">
                Users are responsible for providing accurate information and understanding that our services are for documentation and consultation purposes only.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                No Court Representation
              </h2>
              <p className="text-gray-600 mb-6">
                We do not provide litigation services or court representation. Our services are limited to document preparation, verification, and non-litigation legal assistance.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}