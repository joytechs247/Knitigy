import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Hassle-Free Name Change: Your Step-by-Step Guide to Official Gazette Publication | Knitigy',
  description: 'Complete legal process for name change including affidavit, newspaper publication, and gazette notification. Make your name change legally recognized.',
  keywords: 'name change, gazette notification, name change affidavit, legal name change, gazette publication',
  openGraph: {
    title: 'Hassle-Free Name Change: Your Step-by-Step Guide to Official Gazette Publication',
    description: 'Complete legal process for name change including affidavit, newspaper publication, and gazette notification.',
    type: 'article',
    publishedTime: '2024-01-08T00:00:00.000Z',
    authors: ['Knitigy Team'],
  },
}

export default function NameChangeGuide() {
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
                Hassle-Free Name Change: Your Step-by-Step Guide to Official Gazette Publication
              </h1>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-gray-500">
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span>January 8, 2024</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock size={16} />
                    <span>5 min read</span>
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
                  src="/blog4.png" 
                  alt="Property Title Verification Guide"
                  width={800}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            
            <div className="prose prose-lg max-w-none mb-12">
              <p className="lead text-xl text-gray-600 mb-6">
                Whether you're changing your name due to marriage, numerology, spelling correction, gender identity, or personal preference, it's not enough to tell friends and update social media! The legal steps are crucial.
              </p>

              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">The Two Core Steps to a Legal Name Change</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
                  <thead className="bg-primary-500 text-white">
                    <tr>
                      <th className="border border-gray-300 px-4 py-3 text-left">Step</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">What It Is</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Why It Matters</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white even:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">1. Affidavit for Name Change</td>
                      <td className="border border-gray-300 px-4 py-3">A sworn declaration drafted on non-judicial stamp paper and notarised</td>
                      <td className="border border-gray-300 px-4 py-3">Provides the initial legal proof of your intent to change your name</td>
                    </tr>
                    <tr className="bg-white even:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">2. Gazette Notification</td>
                      <td className="border border-gray-300 px-4 py-3">Official government publication in the Central or State Gazette</td>
                      <td className="border border-gray-300 px-4 py-3">Provides the official, permanent government record accepted by all authorities</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">Documents & Cost Overview</h2>
              <p>Typical documents required for the Gazette application include:</p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>The original notarised affidavit</li>
                <li>Original copies of the newspaper advertisements</li>
                <li>Passport-size photos and identity/address proof (Aadhaar, PAN, etc.)</li>
                <li>Application form and applicable fee (₹700 to ₹1,700 depending on service and urgency)</li>
              </ul>

              <div className="bg-purple-50 p-6 rounded-2xl my-8 border border-purple-200">
                <h3 className="text-xl font-bold text-purple-800 mb-3">Scenario: The Risk of Skipping the Official Process</h3>
                <p className="text-purple-700">
                  Mr. A updated his name with some institutions informally but skipped the Gazette publication. When he tried to change his Passport and link a new PAN card, authorities rejected his application because there was no official Gazette notification. His bank froze transactions until he produced the Gazette copy.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">How We Make Your Name Change Simple</h2>
              <p>We support you end-to-end to ensure your name change is legally clean and accepted everywhere:</p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li><strong>Affidavit Preparation:</strong> Draft the correct affidavit and manage notarisation</li>
                <li><strong>Publication Management:</strong> Handle newspaper advertisement and application filing</li>
                <li><strong>Gazette Liaison:</strong> Liaise with Controller of Publications and track your application</li>
                <li><strong>Document Guidance:</strong> Guide you through updating Aadhaar, PAN, Passport in Delhi & UP</li>
              </ul>
            </div>

            
            <div className="mt-12 p-8 bg-gradient-to-r from-primary-50 to-brand-lavender/20 rounded-2xl text-center border border-primary-100">
              <h3 className="text-2xl font-bold text-primary-500 mb-4">
                Ready to make your new name your recognised identity?
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                Reach out today — we'll send you a full checklist, handle the filings, and ensure you're legally secure on all records.
              </p>
              <Link
                href="/#contact-form"
                className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2"
              >
                <span>Get Name Change Help</span>
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}