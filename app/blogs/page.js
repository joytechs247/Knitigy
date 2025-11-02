import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import Image from 'next/image'

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
    title: 'Property Title Check / Verification — Why it\'s your first must-do before buying property',
    excerpt: 'Learn why property title verification is crucial before buying any property and how it protects you from fraud and legal complications.',
    date: '2024-01-15',
    readTime: '6 min read',
    category: 'Property',
    image: '/blog1.png'
  },
  {
    slug: 'sale-gift-lease-deed',
    title: 'Sale / Gift / Lease Deed Drafting – Get It Right from the Start',
    excerpt: 'Professional deed drafting ensures your property transactions are legally secure and free from future disputes.',
    date: '2024-01-12',
    readTime: '8 min read',
    category: 'Property',
    image: '/blog2.png'
  },
  {
    slug: 'mutation-registration-help',
    title: 'Mutation & Registration Help — Secure Your Ownership, from Deed to Official Records',
    excerpt: 'Complete guide to property registration and mutation process in Delhi and UP to secure your ownership rights.',
    date: '2024-01-10',
    readTime: '7 min read',
    category: 'Property',
    image: '/blog3.png'
  },
  {
    slug: 'name-change-guide',
    title: 'Hassle-Free Name Change: Your Step-by-Step Guide to Official Gazette Publication',
    excerpt: 'Complete legal process for name change including affidavit, newspaper publication, and gazette notification.',
    date: '2024-01-08',
    readTime: '5 min read',
    category: 'Personal',
    image: '/blog4.png'
  },
  {
    slug: 'will-drafting-mistakes',
    title: 'Will Drafting Mistakes: The Simple Fix That Stops Family Court Disputes',
    excerpt: 'Learn how proper will drafting can prevent family disputes and ensure your assets are distributed as per your wishes.',
    date: '2024-01-05',
    readTime: '6 min read',
    category: 'Personal',
    image: '/blog5.png'
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
                      {/* Blog Image - Only Image in Rectangle Shape */}
                      <div className="w-full h-48 rounded-xl overflow-hidden mb-4">
                        <Image 
                          src={post.image}
                          alt={post.title}
                          width={400}
                          height={192}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
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