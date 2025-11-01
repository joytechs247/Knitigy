'use client'
import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToForm = () => {
    const element = document.getElementById('contact-form')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                <Image 
                  src="/favicon.ico" 
                  alt="Knitigy" 
                  width={40} 
                  height={40}
                  className="rounded-lg"
                />
              </div>
              <span className="ml-3 text-xl font-bold text-primary-500">
                Knitigy
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                href="/blogs"
                className="text-gray-700 hover:text-primary-500 font-medium transition-colors duration-200"
              >
                Blogs
              </Link>
              <button
                onClick={() => document.getElementById('use-cases')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-700 hover:text-primary-500 font-medium transition-colors duration-200"
              >
                What We Help With
              </button>
              <button
                onClick={() => document.getElementById('trust')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-700 hover:text-primary-500 font-medium transition-colors duration-200"
              >
                Why Trust Us
              </button>
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center">
              <button 
                onClick={scrollToForm}
                className="btn-primary flex items-center space-x-2"
              >
                <Phone size={18} />
                <span>Tell Us What You Need</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-primary-500 hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed top-16 inset-x-0 bg-white/95 backdrop-blur-md shadow-lg z-40">
          <div className="px-4 py-6 space-y-4">
            <Link
              href="/blogs"
              className="block w-full text-left px-4 py-3 text-gray-700 hover:text-primary-500 hover:bg-gray-50 rounded-lg font-medium transition-colors"
            >
              Blogs
            </Link>
            <button
              onClick={() => document.getElementById('use-cases')?.scrollIntoView({ behavior: 'smooth' })}
              className="block w-full text-left px-4 py-3 text-gray-700 hover:text-primary-500 hover:bg-gray-50 rounded-lg font-medium transition-colors"
            >
              What We Help With
            </button>
            <button
              onClick={() => document.getElementById('trust')?.scrollIntoView({ behavior: 'smooth' })}
              className="block w-full text-left px-4 py-3 text-gray-700 hover:text-primary-500 hover:bg-gray-50 rounded-lg font-medium transition-colors"
            >
              Why Trust Us
            </button>
            <button 
              onClick={scrollToForm}
              className="w-full btn-primary flex items-center justify-center space-x-2 mt-4"
            >
              <Phone size={18} />
              <span>Tell Us What You Need</span>
            </button>
          </div>
        </div>
      )}
    </>
  )
}