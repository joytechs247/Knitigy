import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Will Drafting Mistakes: The Simple Fix That Stops Family Court Disputes | Knitigy',
  description: 'Learn how proper will drafting can prevent family disputes and ensure your assets are distributed as per your wishes. Avoid common will drafting mistakes.',
  keywords: 'will drafting, will preparation, estate planning, inheritance, will mistakes',
  openGraph: {
    title: 'Will Drafting Mistakes: The Simple Fix That Stops Family Court Disputes',
    description: 'Learn how proper will drafting can prevent family disputes and ensure your assets are distributed as per your wishes.',
    type: 'article',
    publishedTime: '2024-01-05T00:00:00.000Z',
    authors: ['Knitigy Team'],
  },
}

export default function WillDraftingMistakes() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-20 lg:pt-24">
        <article className="py-16 lg:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
           
            <Link
              href="/blogs"
              className="inline-flex items-center space-x-2 text-primary-500 hover:text-primary-600 mb-8 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Back to Blogs</span>
            </Link>

         
            <header className="mb-8 border-b border-gray-200 pb-8">
              <span className="inline-block px-3 py-1 bg-brand-teal text-white rounded-full text-sm font-medium mb-4">
                Personal
              </span>
              <h1 className="text-3xl lg:text-4xl font-bold text-primary-500 mb-4 leading-tight">
                Will Drafting Mistakes: The Simple Fix That Stops Family Court Disputes
              </h1>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-gray-500">
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span>January 5, 2024</span>
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

            
            <div className="mb-8 rounded-2xl overflow-hidden">
              <div className="w-full h-64 lg:h-80 rounded-2xl">
                <Image
                  src="/blog5.png" 
                  alt="Property Title Verification Guide"
                  width={800}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            
            <div className="prose prose-lg max-w-none mb-12">
              <p className="lead text-xl text-gray-600 mb-6">
                Putting off drafting your will feels harmless today — but when you're gone, a poorly drafted or absent will can leave loved ones confused, exposed and embroiled in disputes. A well-drafted will means clarity, fewer legal headaches and peace of mind.
              </p>

              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">Why It Matters</h2>
              <p>If you die without a valid will (intestate), your estate will be distributed under default laws (e.g., Hindu Succession Act, 1956 for Hindus) which may not reflect your wishes.</p>

              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">Key Steps in Drafting Your Will</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
                  <thead className="bg-primary-500 text-white">
                    <tr>
                      <th className="border border-gray-300 px-4 py-3 text-left">Step</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">What to do</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Why it matters</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white even:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">1. List all assets & liabilities</td>
                      <td className="border border-gray-300 px-4 py-3">Include immovable property, bank accounts, jewellery, investments, digital assets</td>
                      <td className="border border-gray-300 px-4 py-3">Avoids omission of valuable items</td>
                    </tr>
                    <tr className="bg-white even:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">2. Decide beneficiaries & executor</td>
                      <td className="border border-gray-300 px-4 py-3">Name who gets what and who carries out your wishes</td>
                      <td className="border border-gray-300 px-4 py-3">Reduces ambiguity and dispute risk</td>
                    </tr>
                    <tr className="bg-white even:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">3. Draft the will in clear language</td>
                      <td className="border border-gray-300 px-4 py-3">Describe assets precisely, use unambiguous terms</td>
                      <td className="border border-gray-300 px-4 py-3">Vague wording often leads to court challenges</td>
                    </tr>
                    <tr className="bg-white even:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">4. Sign & get two witnesses</td>
                      <td className="border border-gray-300 px-4 py-3">Under Indian Succession Act, sign in presence of two witnesses</td>
                      <td className="border border-gray-300 px-4 py-3">Failure here can invalidate the will</td>
                    </tr>
                    <tr className="bg-white even:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">5. Review/update periodically</td>
                      <td className="border border-gray-300 px-4 py-3">Change if you acquire/dispose of assets, marry/divorce, have children</td>
                      <td className="border border-gray-300 px-4 py-3">Keeps will relevant and legally sound</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-blue-50 p-6 rounded-2xl my-8 border border-blue-200">
                <h3 className="text-xl font-bold text-blue-800 mb-3">Scenario: What can go wrong if you skip proper will-drafting</h3>
                <p className="text-blue-700">
                  Mr P had some property in Delhi and a bank account. He prepared a "handwritten will" without legal review, using general terms like "all my assets to my daughter". He did not name an executor nor update it when he bought another flat. After his death, his wife and daughter got into disagreement about the new flat and bank account management. The lack of a clear, professionally drafted will led to a long court process, legal fees and family stress.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">How We Help</h2>
              <p>We prepare a complete will-drafting service for Delhi & UP that includes:</p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Asset mapping and beneficiary appointment</li>
                <li>Clear precise drafting and correct execution with witnesses</li>
                <li>Advice on registration (optional but recommended)</li>
                <li>Review and update services when circumstances change</li>
              </ul>
            </div>

            
            <div className="mt-12 p-8 bg-gradient-to-r from-primary-50 to-brand-lavender/20 rounded-2xl text-center border border-primary-100">
              <h3 className="text-2xl font-bold text-primary-500 mb-4">
                Ready to draft your will?
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                Contact us and we'll send you a full checklist, draft the document to suit your wishes and ensure your legacy is protected.
              </p>
              <Link
                href="/#contact-form"
                className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2"
              >
                <span>Get Will Drafting Help</span>
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}