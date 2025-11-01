import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Property Title Check: 8 Things Your Professional Will Look For | Knitigy',
  description: 'Learn the critical elements professionals examine during property title verification to protect your investment. Expert guide from Knitigy.',
  keywords: 'property title check, property verification, real estate documents, title search, property due diligence',
  openGraph: {
    title: 'Property Title Check: 8 Things Your Professional Will Look For',
    description: 'Learn the critical elements professionals examine during property title verification to protect your investment.',
    type: 'article',
    publishedTime: '2024-01-15T00:00:00.000Z',
    authors: ['Knitigy Team'],
  },
}

export default function PropertyTitleCheck() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20 lg:pt-24">
        <article className="py-16 lg:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back Button */}
            <Link 
              href="/blogs"
              className="inline-flex items-center space-x-2 text-primary-500 hover:text-primary-600 mb-8 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Back to Blogs</span>
            </Link>

            {/* Blog Header */}
            <header className="mb-8 border-b border-gray-200 pb-8">
              <span className="inline-block px-3 py-1 bg-brand-teal text-white rounded-full text-sm font-medium mb-4">
                Property
              </span>
              <h1 className="text-3xl lg:text-4xl font-bold text-primary-500 mb-4 leading-tight">
                Property Title Check: 8 Things Your Professional Will Look For
              </h1>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-gray-500">
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span>January 15, 2024</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock size={16} />
                    <span>8 min read</span>
                  </div>
                </div>
                <div className="text-sm">
                  By <span className="font-semibold text-primary-500">Knitigy Team</span>
                </div>
              </div>
            </header>

            {/* Featured Image */}
            <div className="mb-8 rounded-2xl overflow-hidden">
              <div className="w-full h-64 lg:h-80 bg-gradient-to-r from-primary-500 to-brand-teal rounded-2xl flex items-center justify-center text-white text-center">
                <div>
                  <div className="text-4xl mb-4">🏠</div>
                  <p className="text-lg font-semibold">Property Title Verification Guide</p>
                </div>
              </div>
            </div>

            {/* Blog Content */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="lead text-xl text-gray-600 mb-6">
                When purchasing property, ensuring clear title ownership is crucial to avoid future legal complications and financial losses. Here are the key elements professionals examine during property title verification:
              </p>
              
              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">1. Chain of Title Ownership</h2>
              <p>Professionals verify the complete history of property ownership transfers to ensure there are no breaks, gaps, or suspicious transactions in the ownership chain. This includes checking all previous sale deeds, inheritance documents, and transfer records spanning decades.</p>
              
              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">2. Encumbrance Certificate</h2>
              <p>This crucial document reveals any mortgages, liens, or charges against the property. Professionals check for outstanding loans, legal claims, or any other financial burdens that could affect your ownership rights or lead to unexpected liabilities.</p>
              
              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">3. Property Tax Records</h2>
              <p>Ensuring all property taxes are paid up to date is essential to avoid future liabilities and potential legal issues with municipal authorities. Unpaid taxes can lead to property attachment or auction.</p>
              
              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">4. Land Use and Zoning Restrictions</h2>
              <p>Verifying local zoning laws and land use regulations that might restrict how you can use the property, including building height limitations, commercial use restrictions, and environmental regulations that could impact your plans.</p>
              
              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">5. Pending Litigation and Disputes</h2>
              <p>Checking for any ongoing legal disputes, court cases, or family settlements involving the property that could jeopardize your ownership or lead to lengthy legal battles.</p>
              
              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">6. Ownership Document Authenticity</h2>
              <p>Verifying the authenticity of all sale deeds, inheritance documents, gift deeds, and other ownership proofs to ensure they're legally valid, properly executed, and registered with appropriate authorities.</p>
              
              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">7. Local Authority Approvals</h2>
              <p>Ensuring the property has all necessary building approvals, completion certificates, occupancy certificates, and no violation notices from local municipal authorities that could result in penalties or demolition orders.</p>
              
              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">8. Succession and Inheritance Issues</h2>
              <p>In case of inherited properties, checking proper succession to ensure all legal heirs have given consent and there are no pending inheritance disputes that could surface later and challenge your ownership.</p>

              <div className="bg-blue-50 p-6 rounded-2xl mt-8 border border-blue-200">
                <h3 className="text-xl font-bold text-blue-800 mb-3">Need Professional Property Verification?</h3>
                <p className="text-blue-700 mb-4">Our experts conduct thorough property title checks and provide detailed verification reports with legal opinions to protect your investment and ensure peace of mind.</p>
                <Link 
                  href="/#contact-form"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center space-x-2"
                >
                  <span>Get Property Verification Help</span>
                </Link>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-12 p-8 bg-gradient-to-r from-primary-50 to-brand-lavender/20 rounded-2xl text-center border border-primary-100">
              <h3 className="text-2xl font-bold text-primary-500 mb-4">
                Need Professional Help With Property Documents?
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                Our experts can help you with complete property verification, document preparation, and ensure everything is legally sound.
              </p>
              <Link 
                href="/#contact-form"
                className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2"
              >
                <span>Get Expert Help Now</span>
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}