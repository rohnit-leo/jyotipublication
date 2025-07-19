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
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pink-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Your Gateway to
              <span className="block bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Educational Excellence
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive study materials for entrance exams across India. Join thousands of successful students who
              achieved their dreams with Jyoti Publication.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <BookOpen className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-sm text-gray-300">Study Books</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <Users className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">10K+</div>
                <div className="text-sm text-gray-300">Happy Students</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <Award className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">15+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <TrendingUp className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">95%</div>
                <div className="text-sm text-gray-300">Success Rate</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white border-0 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 text-lg px-8 py-6"
            >
              <Link href="/books">
                Explore Books
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              onClick={handleWhatsAppContact}
              variant="outline"
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-lg px-8 py-6"
            >
              Contact Us
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-8">
            <p className="text-gray-300 mb-4">Trusted by students from top universities</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-white font-semibold">Delhi University</div>
              <div className="text-white font-semibold">BHU</div>
              <div className="text-white font-semibold">JNU</div>
              <div className="text-white font-semibold">Symbiosis</div>
              <div className="text-white font-semibold">BITS Pilani</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-8 animate-bounce delay-300">
        <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 border border-white/20">
          <BookOpen className="h-6 w-6 text-blue-400" />
        </div>
      </div>
      <div className="absolute top-1/3 right-12 animate-bounce delay-700">
        <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 border border-white/20">
          <Award className="h-6 w-6 text-yellow-400" />
        </div>
      </div>
      <div className="absolute bottom-1/4 left-16 animate-bounce delay-1000">
        <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 border border-white/20">
          <Users className="h-6 w-6 text-green-400" />
        </div>
      </div>
    </section>
  )
}
