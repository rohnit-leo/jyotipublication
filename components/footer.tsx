import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/images/logo-with-text.png"
                alt="Jyoti Publication"
                className="h-10 w-auto bg-white rounded-lg p-1"
              />
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your trusted partner for educational excellence. Providing quality study materials for entrance exams
              across India since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/books" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Books
                </Link>
              </li>
              <li>
                <Link href="/combos" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Combos
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/books?category=bed" className="text-gray-300 hover:text-blue-400 transition-colors">
                  B.Ed Books
                </Link>
              </li>
              <li>
                <Link href="/books?category=mcom" className="text-gray-300 hover:text-blue-400 transition-colors">
                  M.Com Books
                </Link>
              </li>
              <li>
                <Link href="/books?category=mba" className="text-gray-300 hover:text-blue-400 transition-colors">
                  MBA Books
                </Link>
              </li>
              <li>
                <Link href="/books?category=mca" className="text-gray-300 hover:text-blue-400 transition-colors">
                  MCA Books
                </Link>
              </li>
              <li>
                <Link href="/combos" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Combo Packages
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+91 9914632817</p>
                  <p className="text-sm text-gray-400">Mon-Sat, 9AM-7PM</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">jyotipublicationbooks@gmail.com</p>
                  <p className="text-sm text-gray-400">24/7 Email Support</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Assam, India</p>
                  <p className="text-sm text-gray-400">Serving Pan India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400">
                © 2024 Jyoti Publication. All rights reserved. | Empowering Education Since 2010
              </p>
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Terms of Service
              </Link>
              <Link href="/refund" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
