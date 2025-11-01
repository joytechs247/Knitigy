import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Will vs Power of Attorney: When You Need Which Document | Knitigy',
  description: 'Understand the key differences between a Will and Power of Attorney and when to use each document for proper estate planning. Expert guide from Knitigy.',
  keywords: 'will drafting, power of attorney, estate planning, legal documents, inheritance planning',
  openGraph: {
    title: 'Will vs Power of Attorney: When You Need Which Document',
    description: 'Understand the key differences between a Will and Power of Attorney for proper estate planning.',
    type: 'article',
    publishedTime: '2024-01-12T00:00:00.000Z',
    authors: ['Knitigy Team'],
  },
}

export default function WillVsPoa() {
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
                Personal
              </span>
              <h1 className="text-3xl lg:text-4xl font-bold text-primary-500 mb-4 leading-tight">
                Will vs Power of Attorney: When You Need Which Document
              </h1>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-gray-500">
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span>January 12, 2024</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock size={16} />
                    <span>10 min read</span>
                  </div>
                </div>
                <div className="text-sm">
                  By <span className="font-semibold text-primary-500">Knitigy Team</span>
                </div>
              </div>
            </header>

            {/* Featured Image */}
            <div className="mb-8 rounded-2xl overflow-hidden">
              <div className="w-full h-64 lg:h-80 bg-gradient-to-r from-brand-teal to-accent-400 rounded-2xl flex items-center justify-center text-white text-center">
                <div>
                  <div className="text-4xl mb-4">📝</div>
                  <p className="text-lg font-semibold">Estate Planning Guide</p>
                </div>
              </div>
            </div>

            {/* Blog Content */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="lead text-xl text-gray-600 mb-6">
                Understanding the difference between a Will and Power of Attorney (PoA) is essential for proper personal and financial planning. Both serve different purposes and are used in different circumstances.
              </p>
              
              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">What is a Will?</h2>
              <p>A Will is a legal document that specifies how your assets should be distributed after your death. It comes into effect only after you pass away and allows you to:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Distribute your assets according to your wishes</li>
                <li>Appoint guardians for minor children</li>
                <li>Nominate executors to manage your estate</li>
                <li>Specify funeral arrangements</li>
                <li>Make charitable donations</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">What is Power of Attorney (PoA)?</h2>
              <p>A Power of Attorney is a document that authorizes someone else to act on your behalf while you're alive. It can be:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li><strong>General PoA:</strong> Broad authority for various matters</li>
                <li><strong>Specific PoA:</strong> Limited to specific tasks or time periods</li>
                <li><strong>Medical PoA:</strong> For healthcare decisions</li>
                <li><strong>Durable PoA:</strong> Remains valid if you become incapacitated</li>
              </ul>

              <div className="bg-green-50 p-6 rounded-2xl my-8 border border-green-200">
                <h3 className="text-xl font-bold text-green-800 mb-3">Expert Tip</h3>
                <p className="text-green-700">Many people benefit from having both documents - a Will for after-death planning and a PoA for lifetime management, especially as they get older or have complex affairs.</p>
              </div>

              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">Key Differences Between Will and PoA</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
                  <thead className="bg-primary-500 text-white">
                    <tr>
                      <th className="border border-gray-300 px-4 py-3 text-left">Aspect</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Will</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Power of Attorney</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white even:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">When it takes effect</td>
                      <td className="border border-gray-300 px-4 py-3">After death</td>
                      <td className="border border-gray-300 px-4 py-3">During lifetime</td>
                    </tr>
                    <tr className="bg-white even:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">Primary purpose</td>
                      <td className="border border-gray-300 px-4 py-3">Asset distribution</td>
                      <td className="border border-gray-300 px-4 py-3">Representation and decision-making</td>
                    </tr>
                    <tr className="bg-white even:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">Validity period</td>
                      <td className="border border-gray-300 px-4 py-3">Until revoked or replaced</td>
                      <td className="border border-gray-300 px-4 py-3">As specified in document</td>
                    </tr>
                    <tr className="bg-white even:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">Can be revoked</td>
                      <td className="border border-gray-300 px-4 py-3">Yes, anytime while competent</td>
                      <td className="border border-gray-300 px-4 py-3">Yes, while competent</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-12 p-8 bg-gradient-to-r from-primary-50 to-brand-lavender/20 rounded-2xl text-center border border-primary-100">
              <h3 className="text-2xl font-bold text-primary-500 mb-4">
                Need Help With Will or Power of Attorney?
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                Our experts can help you draft proper Wills and Power of Attorney documents tailored to your specific needs.
              </p>
              <Link 
                href="/#contact-form"
                className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2"
              >
                <span>Get Document Help Now</span>
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}