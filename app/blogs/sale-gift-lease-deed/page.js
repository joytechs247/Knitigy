import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Sale / Gift / Lease Deed Drafting – Get It Right from the Start | Knitigy',
  description: 'Professional deed drafting ensures your property transactions are legally secure. Learn why proper drafting prevents disputes and protects your rights.',
  keywords: 'sale deed drafting, gift deed, lease deed, property documents, deed preparation',
  openGraph: {
    title: 'Sale / Gift / Lease Deed Drafting – Get It Right from the Start',
    description: 'Professional deed drafting ensures your property transactions are legally secure and free from future disputes.',
    type: 'article',
    publishedTime: '2024-01-12T00:00:00.000Z',
    authors: ['Knitigy Team'],
  },
}

export default function SaleGiftLeaseDeed() {
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
                Property
              </span>
              <h1 className="text-3xl lg:text-4xl font-bold text-primary-500 mb-4 leading-tight">
                Sale / Gift / Lease Deed Drafting – Get It Right from the Start
              </h1>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-gray-500">
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span>January 12, 2024</span>
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

            
            <div className="mb-8 rounded-2xl overflow-hidden">
              <div className="w-full h-64 lg:h-80 rounded-2xl">
                <Image
                  src="/blog2.png" 
                  alt="Property Title Verification Guide"
                  width={800}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

           
            <div className="prose prose-lg max-w-none mb-12">
              <p className="lead text-xl text-gray-600 mb-6">
                When you decide to sell, gift, or lease immovable property, the deed you sign is your legal anchor. A poorly drafted deed can lead to disputes, loss of rights, or unexpected liabilities.
              </p>

              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">Why Professional Drafting Matters</h2>
              <p>A well-drafted deed captures clear identification of parties, property description, consideration (if any), transfer of rights, date of possession, indemnity, and encumbrance clauses. Without correct wording and adhering to registration formalities, your document might not be legally enforceable.</p>

              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">Deed Types and Requirements</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
                  <thead className="bg-primary-500 text-white">
                    <tr>
                      <th className="border border-gray-300 px-4 py-3 text-left">Deed Type</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Core Requirement</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Key Action Point</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white even:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">Sale Deed</td>
                      <td className="border border-gray-300 px-4 py-3">Ownership is transferred in exchange for consideration (money)</td>
                      <td className="border border-gray-300 px-4 py-3">Must be on appropriate non-judicial stamp paper and registered</td>
                    </tr>
                    <tr className="bg-white even:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">Gift Deed</td>
                      <td className="border border-gray-300 px-4 py-3">Transfer is made without consideration (out of love/affection)</td>
                      <td className="border border-gray-300 px-4 py-3">Donor must voluntarily give to donee; registration is mandatory for immovable property</td>
                    </tr>
                    <tr className="bg-white even:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">Lease Deed</td>
                      <td className="border border-gray-300 px-4 py-3">Grant of tenancy or possession rights for a specified term</td>
                      <td className="border border-gray-300 px-4 py-3">Must clearly define term, rent, use, and renewal/exit conditions</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-red-50 p-6 rounded-2xl my-8 border border-red-200">
                <h3 className="text-xl font-bold text-red-800 mb-3">Scenario: The Hidden Cost of a Basic Template</h3>
                <p className="text-red-700 mb-4">
                  Mr. A in Delhi decided to sell his property to Mr. B. To save time and money, they simply used a basic template deed they found online, skipping a professional review.
                </p>
                <p className="text-red-700">
                  <strong>What went wrong?</strong> The deed was incomplete, Mr. B discovered hidden liabilities, and the generic deed lacked proper indemnity clauses. The simple "cost saving" turned into financial loss and emotional stress.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">How We Support Your Transaction</h2>
              <p>We prepare tailored deed-drafts (sale, gift, or lease) that make sure you avoid common pitfalls:</p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li><strong>Thorough Verification:</strong> Party verification and property description aligned with local government records</li>
                <li><strong>Clarity on Rights:</strong> Clear, robust clauses about payment, use, rights, and indemnity</li>
                <li><strong>Compliance Guaranteed:</strong> Assistance with state-specific stamp duty format and registration</li>
                <li><strong>Local Expertise:</strong> Specifically in Delhi and UP, ensuring compliance with local registrar offices</li>
              </ul>
            </div>

           
            <div className="mt-12 p-8 bg-gradient-to-r from-primary-50 to-brand-lavender/20 rounded-2xl text-center border border-primary-100">
              <h3 className="text-2xl font-bold text-primary-500 mb-4">
                Ready to draft your deed?
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                Contact us and we'll guide you through the right template, collect the correct details, and ensure it reflects your interests clearly—so you're legally secure from day one.
              </p>
              <Link
                href="/#contact-form"
                className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2"
              >
                <span>Get Deed Drafting Help</span>
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}