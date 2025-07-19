"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Users, BookOpen, Award, Zap, Shield } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 md:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-600 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-purple-600 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-green-600 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-orange-600 rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-blue-600">
                <Star className="h-5 w-5 fill-current animate-spin" />
                <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Northeast India's #1 Educational Publisher
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your Gateway to
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                  Academic Excellence
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Discover comprehensive educational resources from Assam's most trusted publisher. Quality books, expert
                guidance, and seamless WhatsApp ordering.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-8">
              <div className="text-center transform hover:scale-105 transition-transform">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  15,000+
                </div>
                <div className="text-sm md:text-base text-gray-600 font-medium">Happy Students</div>
              </div>
              <div className="text-center transform hover:scale-105 transition-transform">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  500+
                </div>
                <div className="text-sm md:text-base text-gray-600 font-medium">Quality Books</div>
              </div>
              <div className="text-center transform hover:scale-105 transition-transform">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  15+
                </div>
                <div className="text-sm md:text-base text-gray-600 font-medium">Years Experience</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/combos">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
                >
                  Explore Combo Packages
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all bg-transparent"
                onClick={() =>
                  window.open(
                    "https://wa.me/919914632817?text=Hi! I need help choosing the right books for my course.",
                    "_blank",
                  )
                }
              >
                <Users className="mr-2 h-5 w-5" />
                Get Expert Guidance
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-8">
              <div className="flex items-center space-x-2 text-gray-600">
                <Shield className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium">Trusted Quality</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Zap className="h-5 w-5 text-yellow-600" />
                <span className="text-sm font-medium">Fast Delivery</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Award className="h-5 w-5 text-purple-600" />
                <span className="text-sm font-medium">Expert Content</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <img
                  src="/images/logo-with-text.png"
                  alt="Jyoti Publication Logo"
                  className="w-full h-auto max-w-sm mx-auto"
                />
                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span className="text-sm font-medium text-blue-800">Complete Study Packages</span>
                    <BookOpen className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="text-sm font-medium text-green-800">WhatsApp Ordering</span>
                    <Zap className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <span className="text-sm font-medium text-purple-800">Expert Support</span>
                    <Users className="h-5 w-5 text-purple-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-4 shadow-lg animate-bounce">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full p-4 shadow-lg animate-pulse">
              <Star className="h-6 w-6 text-white fill-current" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
