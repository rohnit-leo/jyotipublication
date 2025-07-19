"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Star,
  ShoppingCart,
  BookOpen,
  Users,
  Award,
  CheckCircle,
  Target,
  BookMarked,
  GraduationCap,
  Lightbulb,
} from "lucide-react"
import { AnnouncementBar } from "@/components/announcement-bar"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import type { Book } from "@/lib/books-data"

interface BookDetailPageClientProps {
  book: Book
}

export default function BookDetailPageClient({ book }: BookDetailPageClientProps) {
  const handleBuyNow = () => {
    const message = `Hi! I'm interested in "${book.name}" for ${book.university} ${book.course} entrance exam, priced at ₹${book.price}. Please provide more details and confirm availability.`
    window.open(`https://wa.me/919914632817?text=${encodeURIComponent(message)}`, "_blank")
  }

  const handleEnquiry = () => {
    const message = `Hi! I need more information about "${book.name}" for ${book.university}. Can you help me with details about the book content and delivery?`
    window.open(`https://wa.me/919914632817?text=${encodeURIComponent(message)}`, "_blank")
  }

  const discountPercentage = Math.round(((book.originalPrice - book.price) / book.originalPrice) * 100)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <AnnouncementBar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-600">
          <span>Home</span> / <span>Books</span> / <span className="text-gray-900">{book.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Book Image */}
          <div className="space-y-4">
            <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20">
              <img
                src={book.image || "/placeholder.svg?height=400&width=300"}
                alt={book.name}
                className="w-full max-w-lg mx-auto h-auto object-contain hover:scale-105 transition-transform duration-500"
                style={{ minHeight: "400px" }}
              />
              {book.bestseller && (
                <Badge className="absolute top-4 left-4 bg-gradient-to-r from-red-500 via-pink-500 to-red-600 hover:from-red-600 hover:via-pink-600 hover:to-red-700 animate-pulse">
                  ⭐ Bestseller
                </Badge>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-100/20 to-transparent rounded-3xl pointer-events-none"></div>
            </div>
          </div>

          {/* Book Details */}
          <div className="space-y-6">
            <div>
              <Badge className="mb-3 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 hover:from-blue-200 hover:to-purple-200 border border-blue-200">
                <GraduationCap className="h-4 w-4 mr-1" />
                {book.course} • {book.university}
              </Badge>
              <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-4">
                {book.name}
              </h1>
              <p className="text-xl text-gray-600 mb-4">by {book.author}</p>

              {/* Rating */}
              <div className="flex items-center space-x-2 mb-6">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(book.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-lg font-medium">{book.rating}</span>
                <span className="text-gray-600">({book.reviews} reviews)</span>
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-gradient-to-r from-green-50 via-emerald-50 to-green-50 p-6 rounded-2xl border-2 border-green-200 shadow-lg">
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  ₹{book.price}
                </span>
                <span className="text-xl text-gray-500 line-through">₹{book.originalPrice}</span>
                <Badge
                  variant="secondary"
                  className="text-sm bg-gradient-to-r from-orange-100 to-red-100 text-orange-700"
                >
                  {discountPercentage}% OFF
                </Badge>
              </div>
              <p className="text-sm text-green-700 font-medium">🎉 You save ₹{book.originalPrice - book.price}!</p>
            </div>

            {/* Short Description */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
                About This Book
              </h3>
              <p className="text-gray-700 leading-relaxed">{book.shortDescription}</p>
            </div>

            {/* Key Features */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Lightbulb className="h-5 w-5 mr-2 text-purple-600" />
                Key Features
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {book.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Button
                onClick={handleBuyNow}
                size="lg"
                className="w-full bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 hover:from-green-700 hover:via-emerald-700 hover:to-green-800 text-lg py-6 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                disabled={!book.inStock}
              >
                <ShoppingCart className="mr-3 h-5 w-5" />
                {book.inStock ? "Buy Now via WhatsApp" : "Out of Stock"}
              </Button>

              <Button
                onClick={handleEnquiry}
                variant="outline"
                size="lg"
                className="w-full text-lg py-6 bg-white/80 backdrop-blur-sm border-2 border-blue-200 hover:border-purple-300 hover:bg-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Users className="mr-3 h-5 w-5" />
                Ask Questions / Get Help
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
              <div className="text-center">
                <Award className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-900">Quality Assured</p>
                <p className="text-xs text-gray-600">Trusted Content</p>
              </div>
              <div className="text-center">
                <BookOpen className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-900">Expert Authors</p>
                <p className="text-xs text-gray-600">15+ Years Experience</p>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-900">24/7 Support</p>
                <p className="text-xs text-gray-600">WhatsApp Help</p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Content Sections */}
        <div className="space-y-8">
          {/* Detailed Description */}
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <BookMarked className="h-6 w-6 mr-3 text-blue-600" />
                Detailed Description
              </h2>
              <div className="prose max-w-none">
                <div className="text-gray-700 leading-relaxed whitespace-pre-line text-lg">{book.longDescription}</div>
              </div>
            </CardContent>
          </Card>

          {/* Table of Contents */}
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <BookOpen className="h-6 w-6 mr-3 text-purple-600" />
                Table of Contents
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {book.tableOfContents.map((chapter, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg"
                  >
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <span className="text-gray-800 font-medium">{chapter}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Key Highlights & Target Audience */}
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Target className="h-6 w-6 mr-3 text-green-600" />
                  Key Highlights
                </h2>
                <div className="space-y-4">
                  {book.keyHighlights.map((highlight, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="bg-green-100 rounded-full p-1 mt-1">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      </div>
                      <span className="text-gray-700 leading-relaxed">{highlight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Users className="h-6 w-6 mr-3 text-orange-600" />
                  Target Audience
                </h2>
                <div className="space-y-4">
                  {book.targetAudience.map((audience, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="bg-orange-100 rounded-full p-1 mt-1">
                        <GraduationCap className="h-4 w-4 text-orange-600" />
                      </div>
                      <span className="text-gray-700 leading-relaxed">{audience}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Exam Pattern & Syllabus Coverage */}
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 shadow-2xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">📋 Exam Pattern</h2>
                <p className="text-gray-700 leading-relaxed">{book.examPattern}</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 shadow-2xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-green-900 mb-4">📚 Syllabus Coverage</h2>
                <p className="text-gray-700 leading-relaxed">{book.syllabusCoverage}</p>
              </CardContent>
            </Card>
          </div>

          {/* Specifications */}
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Book Specifications</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">Course:</span>
                    <span className="text-gray-700 font-semibold">{book.course}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">University:</span>
                    <span className="text-gray-700 font-semibold">{book.university}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">Author:</span>
                    <span className="text-gray-700 font-semibold">{book.author}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">Publisher:</span>
                    <span className="text-gray-700 font-semibold">Jyoti Publication</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">Language:</span>
                    <span className="text-gray-700 font-semibold">English</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">Format:</span>
                    <span className="text-gray-700 font-semibold">Paperback</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">Availability:</span>
                    <span className={`font-semibold ${book.inStock ? "text-green-600" : "text-red-600"}`}>
                      {book.inStock ? "✅ In Stock" : "❌ Out of Stock"}
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">Delivery:</span>
                    <span className="text-gray-700 font-semibold">3-7 Business Days</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white border-0 shadow-2xl">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Start Your Preparation?</h2>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto text-lg">
                Get this comprehensive study material and boost your chances of success in the {book.university}{" "}
                {book.course} entrance exam.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleBuyNow}
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                  disabled={!book.inStock}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Order Now - ₹{book.price}
                </Button>
                <Button
                  onClick={handleEnquiry}
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <Users className="mr-2 h-5 w-5" />
                  Need Help? Contact Us
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <WhatsAppFloat />
    </div>
  )
}
