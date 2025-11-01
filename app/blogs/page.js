import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Blogs & Guides | Knitigy',
  description: 'Expert insights and comprehensive guides on property verification, will drafting, rental agreements, and document preparation. Learn from Knitigy professionals.',
  keywords: 'legal blogs, property guides, will drafting articles, rental agreement tips, document preparation',
  openGraph: {
    title: 'Blogs & Guides | Knitigy',
    description: 'Expert insights on property verification, will drafting, and document preparation.',
    type: 'website',
  },
}

const blogPosts = [
  {
    slug: 'property-title-check',
    title: 'Property Title Check: 8 Things Your Professional Will Look For',
    excerpt: 'Learn the critical elements professionals examine during property title verification to protect your investment and avoid legal complications.',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Property',
    image: '🏠'
  },
  {
    slug: 'will-vs-poa',
    title: 'Will vs Power of Attorney: When You Need Which Document',
    excerpt: 'Understand the key differences between a Will and Power of Attorney and when to use each document for proper estate planning and asset protection.',
    date: '2024-01-12',
    readTime: '10 min read',
    category: 'Personal',
    image: '📝'
  },
  {
    slug: 'rent-agreement-guide',
    title: 'How to Create a Rental Agreement That Protects Both Parties',
    excerpt: 'Essential clauses and legal requirements for creating comprehensive rental agreements that safeguard both landlords and tenants interests.',
    date: '2024-01-10',
    readTime: '7 min read',
    category: 'Rental',
    image: '🔑'
  }
]

export default function Blogs() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20 lg:pt-24">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary-50 to-brand-lavender/20 py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-500 mb-4">
              Knitigy Blog & Guides
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert insights and comprehensive guides to help you navigate paperwork and documentation with confidence and clarity.
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article key={post.slug} className="card group hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <Link href={`/blogs/${post.slug}`} className="block h-full">
                    <div className="p-6 h-full flex flex-col">
                      {/* Blog Image */}
                      <div className="w-full h-48 bg-gradient-to-br from-primary-500 to-brand-teal rounded-xl flex items-center justify-center text-white text-4xl mb-4">
                        {post.image}
                      </div>

                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center space-x-1">
                          <Calendar size={14} />
                          <span>{new Date(post.date).toLocaleDateString('en-IN', { 
                            year: 'numeric', 
                            month: 'short', 
                            day: 'numeric' 
                          })}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock size={14} />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <span className="inline-block px-3 py-1 bg-brand-teal text-white rounded-full text-xs font-medium mb-3 self-start">
                        {post.category}
                      </span>

                      <h3 className="text-xl font-semibold text-primary-500 mb-3 group-hover:text-accent-400 transition-colors line-clamp-2 flex-grow">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3 flex-grow">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-primary-500 font-semibold group-hover:text-accent-400 transition-colors">
                          Read Complete Guide
                        </span>
                        <ArrowRight 
                          size={16} 
                          className="text-primary-500 group-hover:translate-x-1 transition-transform" 
                        />
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>

            {/* More Content Coming Soon */}
            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-primary-50 to-brand-lavender/20 rounded-2xl p-8 border border-primary-100">
                <h3 className="text-2xl font-bold text-primary-500 mb-4">
                  More Guides Coming Soon
                </h3>
                <p className="text-gray-600 mb-6">
                  We're constantly adding new guides and articles to help you with all your documentation needs.
                </p>
                <Link 
                  href="/#contact-form"
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <span>Suggest a Topic</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}