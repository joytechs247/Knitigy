import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Property Title Check / Verification — Why it\'s your first must-do before buying property | Knitigy',
  description: 'Learn why property title verification is crucial before buying any property. Protect yourself from fraud, hidden claims, and legal complications with professional title checks.',
  keywords: 'property title check, title verification, property due diligence, real estate verification, property fraud prevention',
  openGraph: {
    title: 'Property Title Check / Verification — Why it\'s your first must-do before buying property',
    description: 'Protect yourself from fraud and legal complications with professional property title verification.',
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
                Property Title Check / Verification — Why it's your first must-do before buying property
              </h1>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-gray-500">
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span>January 15, 2024</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock size={16} />
                    <span>6 min read</span>
                  </div>
                </div>
                <div className="text-sm">
                  By <span className="font-semibold text-primary-500">Knitigy Team</span>
                </div>
              </div>
            </header>

            {/* Featured Image */}
            <div className="mb-8 rounded-2xl overflow-hidden">
              <div className="w-full h-64 lg:h-80 rounded-2xl">
                <Image
                  src="/blog1.png" // Change this path for each blog page
                  alt="Property Title Verification Guide"
                  width={800}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Blog Content */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="lead text-xl text-gray-600 mb-6">
                Buying property is exciting — but one small paperwork miss can turn it into a long, expensive headache. A property title check examines the chain of ownership and public records to confirm the seller actually has the right to sell and that the property is free of hidden claims like mortgages, liens, or pending mutations.
              </p>

              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">Why Professional Verification Matters</h2>
              <p>Professional verification saves you from fraud, delayed registration, and unexpected liabilities. It's your first line of defense against property-related legal complications.</p>

              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">What We Check, Simply:</h2>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li><strong>Title deeds and chain of ownership</strong> (sale deeds, earlier transfers)</li>
                <li><strong>Encumbrance Certificate</strong> (records of registered transactions, mortgages)</li>
                <li><strong>Mutation and land-revenue/khata records</strong> (who's recorded as owner in municipal/revenue books)</li>
                <li><strong>Physical verification and survey</strong> to match documents with reality</li>
              </ul>

              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">Quick Local Tools You Should Use:</h2>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Delhi e-Search / registration portal for deed lookups and e-mutation reports</li>
                <li>Municipal / revenue land record portals and the sub-registrar for official ECs and archival checks</li>
              </ul>

              <div className="bg-yellow-50 p-6 rounded-2xl my-8 border border-yellow-200">
                <h3 className="text-xl font-bold text-yellow-800 mb-3">Case Study: The Cost of Skipping Title Check</h3>
                <p className="text-yellow-700">
                  A young buyer in Delhi signed a token agreement and paid part of the price without a full title check. Months later she discovered a prior unregistered sale and a forged document. Reversing the transaction cost her time, legal fees, and significant stress — a pattern seen repeatedly in local reports of title fraud.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">How We Help</h2>
              <p>Our title check includes a practical, plain-language report with:</p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Chain-of-title summary</li>
                <li>Verified EC/mutation copies</li>
                <li>Red flags identification (mortgages, pending litigation)</li>
                <li>Next steps guidance (regularisation, indemnity, or exit)</li>
              </ul>
              <p>We work with local registrars and municipal portals to speed corrections and reduce surprises.</p>
            </div>

            {/* CTA Section */}
            <div className="mt-12 p-8 bg-gradient-to-r from-primary-50 to-brand-lavender/20 rounded-2xl text-center border border-primary-100">
              <h3 className="text-2xl font-bold text-primary-500 mb-4">
                Thinking of a property in Delhi or UP?
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                Book a title check—avoid costly mistakes before you pay a rupee. Contact us and we'll guide you through the exact documents to gather.
              </p>
              <Link
                href="/#contact-form"
                className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2"
              >
                <span>Get Property Verification Help</span>
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}