import { Mail, MapPin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                <Image 
                  src="/favicon.ico" 
                  alt="Knitigya Logo" 
                  width={40} 
                  height={40}
                  className="rounded-lg"
                />
              </div>
              <span className="text-xl font-bold">Knitigya</span>
            </div>

            <p className="text-blue-100 mb-6 leading-relaxed text-sm">
              Making important paperwork simple, secure, and stress-free.
              Get your documents done right, without the running around.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Get In Touch</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3 text-blue-100">
                <Mail size={18} />
                <span>nikhilks.981@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3 text-blue-100">
                <MapPin size={18} className="mt-0.5" />
                <span>Delhi NCR, Uttar Pradesh, India</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              We provide document preparation and verification services.
              We do not offer litigation or court case services.
              All documents are reviewed by expert professionals.
            </p>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <div className="space-y-2 text-sm">
              <Link
                href="/terms-and-conditions"
                className="block text-blue-100 hover:text-white transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/privacy-policy"
                className="block text-blue-100 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-blue-400 mt-10 pt-6 text-center">
          <p className="text-blue-200 text-sm">
            © {currentYear} Knitigya. All rights reserved.
          </p>
          <p className="text-blue-200 text-xs mt-2">
            Your privacy and data security are our priority.
          </p>
        </div>
      </div>
    </footer>
  )
}