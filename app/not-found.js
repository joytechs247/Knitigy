'use client'
import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary flex items-center justify-center space-x-2">
            <Home size={20} />
            <span>Back to Home</span>
          </Link>
          <button 
            onClick={() => window.history.back()} 
            className="btn-secondary flex items-center justify-center space-x-2"
          >
            <ArrowLeft size={20} />
            <span>Go Back</span>
          </button>
        </div>
      </div>
    </div>
  )
}