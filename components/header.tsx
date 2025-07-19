"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Books", href: "/books" },
    { name: "Combos", href: "/combos" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 shadow-2xl border-b-2 border-blue-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo with Enhanced Background */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              {/* Logo Background with Glow Effect */}
              <div className="absolute inset-0 bg-white rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-white to-purple-100 rounded-2xl opacity-90"></div>

              {/* Glow Effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-3xl opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-300"></div>

              {/* Logo Image */}
              <div className="relative bg-white rounded-2xl p-3 shadow-lg border border-gray-200">
                <img
                  src="/images/logo-with-text.png"
                  alt="Jyoti Publication"
                  className="h-12 w-auto group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-200 hover:text-blue-300 font-semibold transition-colors relative group text-lg"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden xl:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm text-gray-300 hover:text-blue-300 transition-colors group">
              <div className="bg-green-500 rounded-full p-1">
                <Phone className="h-4 w-4 text-white" />
              </div>
              <span className="font-medium group-hover:text-green-300">+91 9914632817</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-300 hover:text-blue-300 transition-colors group">
              <div className="bg-blue-500 rounded-full p-1">
                <Mail className="h-4 w-4 text-white" />
              </div>
              <span className="hidden 2xl:inline font-medium group-hover:text-blue-300">
                jyotipublicationbooks@gmail.com
              </span>
            </div>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden text-white hover:bg-blue-800/50 border border-blue-600 hover:border-blue-400 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-blue-800/50 bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-sm rounded-b-2xl">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-200 hover:text-blue-300 font-semibold py-2 text-lg px-4 rounded-lg hover:bg-blue-800/30 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-blue-800/50 px-4">
                <p className="text-sm text-gray-300 mb-3 font-medium">Contact Us:</p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="bg-green-500 rounded-full p-1">
                      <Phone className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-sm text-gray-200">+91 9914632817</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="bg-blue-500 rounded-full p-1">
                      <Mail className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-sm text-gray-200">jyotipublicationbooks@gmail.com</span>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
