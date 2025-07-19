"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Users, Award, TrendingUp } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const handleWhatsAppContact = () => {
    const message =
      "Hi! I'm interested in your educational books and would like to know more about your study materials."
    const whatsappUrl = `https://wa.me/919914632817?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section className="relative bg-gray-50 py-16 md:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-600 rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-blue-500 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-400 rounded-full"></div>
        <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-blue-600 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-blue-600">
                <Award className="h-5 w-5" />
                <span className="font-semibold text-blue-600">Northeast India's #1 Educational Publisher</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your Gateway to
                <span className="text-blue-600 block">Academic Excellence</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Discover comprehensive educational resources from Assam's most trusted publisher. Quality books, expert
                guidance, and seamless WhatsApp ordering.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600">15,000+</div>
                <div className="text-sm md:text-base text-gray-600 font-medium">Happy Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600">500+</div>
                <div className="text-sm md:text-base text-gray-600 font-medium">Quality Books</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600">15+</div>
                <div className="text-sm md:text-base text-gray-600 font-medium">Years Experience</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/combos">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl"
                >
                  Explore Combo Packages
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white shadow-lg hover:shadow-xl bg-transparent"
                onClick={handleWhatsAppContact}
              >
                <Users className="mr-2 h-5 w-5" />
                Get Expert Guidance
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-8">
              <div className="flex items-center space-x-2 text-gray-600">
                <Award className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium">Trusted Quality</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <TrendingUp className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium">Fast Delivery</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <BookOpen className="h-5 w-5 text-purple-600" />
                <span className="text-sm font-medium">Expert Content</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="bg-gray-50 rounded-2xl p-6">
                <img
                  src="/images/logo-with-text.png"
                  alt="Jyoti Publication Logo"
                  className="w-full h-auto max-w-sm mx-auto"
                />
                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-100">
                    <span className="text-sm font-medium text-blue-800">Complete Study Packages</span>
                    <BookOpen className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-100">
                    <span className="text-sm font-medium text-green-800">WhatsApp Ordering</span>
                    <TrendingUp className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg border border-purple-100">
                    <span className="text-sm font-medium text-purple-800">Expert Support</span>
                    <Users className="h-5 w-5 text-purple-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-blue-500 rounded-full p-4 shadow-lg">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-green-500 rounded-full p-4 shadow-lg">
              <Award className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
