import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Mutation & Registration Help — Secure Your Ownership, from Deed to Official Records | Knitigy',
  description: 'Complete guide to property registration and mutation process in Delhi and UP. Learn why both steps are essential for secure property ownership.',
  keywords: 'property mutation, registration help, property transfer, mutation process, property records',
  openGraph: {
    title: 'Mutation & Registration Help — Secure Your Ownership, from Deed to Official Records',
    description: 'Complete guide to property registration and mutation process in Delhi and UP to secure your ownership rights.',
    type: 'article',
    publishedTime: '2024-01-10T00:00:00.000Z',
    authors: ['Knitigy Team'],
  },
}

export default function MutationRegistrationHelp() {
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
                Mutation & Registration Help — Secure Your Ownership, from Deed to Official Records
              </h1>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-gray-500">
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span>January 10, 2024</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock size={16} />
                    <span>7 min read</span>
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
                  src="/blog3.png"
                  alt="Property Title Verification Guide"
                  width={800}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

           
            <div className="prose prose-lg max-w-none mb-12">
              <p className="lead text-xl text-gray-600 mb-6">
                When you buy or receive a property, two essential legal steps must follow: Registration and Mutation. Think of them as the two pillars of secure ownership!
              </p>

              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">What's the Difference and Why Do Both Matter?</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
                  <thead className="bg-primary-500 text-white">
                    <tr>
                      <th className="border border-gray-300 px-4 py-3 text-left">Step</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">What It Records</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Why It's Critical</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white even:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">Registration</td>
                      <td className="border border-gray-300 px-4 py-3">The formal execution and recording of the Deed (Sale, Gift, Will, etc.)</td>
                      <td className="border border-gray-300 px-4 py-3">It makes your transfer legally valid and enforceable in court</td>
                    </tr>
                    <tr className="bg-white even:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">Mutation</td>
                      <td className="border border-gray-300 px-4 py-3">Updating the property details in Municipal/Revenue Records</td>
                      <td className="border border-gray-300 px-4 py-3">Essential for paying property tax, obtaining utility connections, and proving ownership</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">Regional Details: Delhi vs Lucknow/Kanpur</h2>

              <h3 className="text-xl font-semibold text-primary-500 mt-6 mb-3">Delhi:</h3>
              <p>Once your deed is registered, you file the mutation or khata-transfer application via the Municipal/Revenue portal. Incomplete documents mean your name is not reflected in tax records.</p>

              <h3 className="text-xl font-semibold text-primary-500 mt-6 mb-3">Lucknow / Kanpur (Uttar Pradesh):</h3>
              <p>In Lucknow, the Lucknow Development Authority has streamlined the mutation process. In Kanpur, offline application filing is still allowed if the online route fails.</p>

              <div className="bg-orange-50 p-6 rounded-2xl my-8 border border-orange-200">
                <h3 className="text-xl font-bold text-orange-800 mb-3">Scenario: The Risk of Skipping Mutation</h3>
                <p className="text-orange-700">
                  Ms. Y purchased a flat in Delhi through a properly registered sale deed but did not complete the mutation process. A year later, municipal tax bills were still issued under the seller's name. When she decided to resell, her potential buyer backed out because municipal records did not reflect her name. She had to pay the seller's years of pending municipal tax dues out of her own pocket.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">How Our Consultancy Can Help</h2>
              <p>We guide you through the entire journey, ensuring your ownership is secure in both the deed and the records:</p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li><strong>Registration Assistance:</strong> Help with correct execution of deed, stamp duty calculation, and Sub-Registrar compliance</li>
                <li><strong>Mutation Service:</strong> Prepare necessary forms, track status, and follow up with municipal/revenue office</li>
                <li><strong>Local Expertise:</strong> Specific knowledge of Delhi, Lucknow, and Kanpur procedures</li>
              </ul>
            </div>

            
            <div className="mt-12 p-8 bg-gradient-to-r from-primary-50 to-brand-lavender/20 rounded-2xl text-center border border-primary-100">
              <h3 className="text-2xl font-bold text-primary-500 mb-4">
                Ready to complete your registration and mutation?
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                Get in touch with us! We'll provide a step-by-step checklist specific to your area, review your documents, and ensure your legal ownership is flawlessly recorded.
              </p>
              <Link
                href="/#contact-form"
                className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2"
              >
                <span>Get Registration Help</span>
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}