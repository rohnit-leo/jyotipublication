"use client"

import { notFound } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, BookOpen, Users, Award, CheckCircle, Package } from "lucide-react"
import { AnnouncementBar } from "@/components/announcement-bar"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { getComboBySlug } from "@/lib/combo-data"
import { useEffect, useState } from "react"

interface ComboPageProps {
  params: {
    slug: string
  }
}

export default function ComboDetailPageClient({ params }: ComboPageProps) {
  const [combo, setCombo] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Get combo data on client side to ensure it works after deployment
    const comboData = getComboBySlug(params.slug)
    setCombo(comboData)
    setLoading(false)
  }, [params.slug])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading combo details...</p>
        </div>
      </div>
    )
  }

  if (!combo) {
    notFound()
  }

  const handleBuyNow = () => {
    const booksList = combo.books.map((book: any) => `• ${book.name}`).join("\n")
    const message = `Hi! I'm interested in the "${combo.name}" priced at ₹${combo.comboPrice} (Save ₹${combo.savings}!).

This combo includes ${combo.totalBooks} books:
${booksList}

Please provide more details and confirm availability.`
    window.open(`https://wa.me/919914632817?text=${encodeURIComponent(message)}`, "_blank")
  }

  const handleEnquiry = () => {
    const message = `Hi! I need more information about the "${combo.name}" combo package. Can you help me with details about the books included and delivery?`
    window.open(`https://wa.me/919914632817?text=${encodeURIComponent(message)}`, "_blank")
  }

  const discountPercentage = Math.round((combo.savings / combo.originalPrice) * 100)

  return (
    <div className="min-h-screen bg-gray-50">
      <AnnouncementBar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-600">
          <span>Home</span> / <span>Combos</span> / <span className="text-gray-900">{combo.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Combo Image */}
          <div className="space-y-4">
            <div className="relative bg-white rounded-lg shadow-lg p-8">
              <img
                src={combo.image || "/placeholder.svg?height=400&width=300"}
                alt={combo.name}
                className="w-full max-w-lg mx-auto h-auto object-contain"
                style={{ minHeight: "400px" }}
              />
              {combo.bestseller && (
                <Badge className="absolute top-4 left-4 bg-red-500 hover:bg-red-600">Bestseller</Badge>
              )}
              <div className="absolute bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded-full font-bold">
                Save ₹{combo.savings}
              </div>
            </div>
          </div>

          {/* Combo Details */}
          <div className="space-y-6">
            <div>
              <Badge className="mb-3 bg-blue-100 text-blue-800 hover:bg-blue-200">
                <Package className="h-4 w-4 mr-1" />
                {combo.course} Complete Package
              </Badge>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{combo.name}</h1>
              <p className="text-xl text-gray-600 mb-4">{combo.totalBooks} Books • Complete Study Package</p>

              {/* Rating */}
              <div className="flex items-center space-x-2 mb-6">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(combo.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-lg font-medium">{combo.rating}</span>
                <span className="text-gray-600">({combo.reviews} reviews)</span>
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-3xl font-bold text-green-600">₹{combo.comboPrice}</span>
                <span className="text-xl text-gray-500 line-through">₹{combo.originalPrice}</span>
                <Badge variant="secondary" className="text-sm">
                  {discountPercentage}% OFF
                </Badge>
              </div>
              <p className="text-sm text-green-700 font-medium">🎉 You save ₹{combo.savings} with this combo!</p>
              <p className="text-xs text-green-600 mt-1">Individual books would cost ₹{combo.originalPrice}</p>
            </div>

            {/* Short Description */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">About This Combo</h3>
              <p className="text-gray-700 leading-relaxed">{combo.shortDescription}</p>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {combo.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Button onClick={handleBuyNow} size="lg" className="w-full bg-green-600 hover:bg-green-700 text-lg py-6">
                <ShoppingCart className="mr-3 h-5 w-5" />
                Buy Complete Combo - ₹{combo.comboPrice}
              </Button>

              <Button
                onClick={handleEnquiry}
                variant="outline"
                size="lg"
                className="w-full text-lg py-6 bg-transparent"
              >
                <Users className="mr-3 h-5 w-5" />
                Ask Questions / Get Help
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t">
              <div className="text-center">
                <Award className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-900">Quality Assured</p>
                <p className="text-xs text-gray-600">Trusted Content</p>
              </div>
              <div className="text-center">
                <BookOpen className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-900">Complete Package</p>
                <p className="text-xs text-gray-600">{combo.totalBooks} Books</p>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-900">24/7 Support</p>
                <p className="text-xs text-gray-600">WhatsApp Help</p>
              </div>
            </div>
          </div>
        </div>

        {/* Books Included */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Books Included in This Combo</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {combo.books.map((book: any, index: number) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
                    <BookOpen className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">{book.name}</h4>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">
                        {book.type === "foundation" ? "Foundation Book" : "Course-Specific"}
                      </span>
                      <div className="text-right">
                        <span className="text-sm font-medium text-gray-900">₹{book.price}</span>
                        {book.pages && <p className="text-xs text-gray-500">{book.pages} pages</p>}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-900">Total if bought individually:</span>
                <span className="text-lg font-bold text-gray-900">₹{combo.originalPrice}</span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="font-semibold text-green-700">Combo Price:</span>
                <span className="text-lg font-bold text-green-600">₹{combo.comboPrice}</span>
              </div>
              <div className="flex justify-between items-center mt-2 pt-2 border-t border-green-300">
                <span className="font-bold text-green-800">Your Savings:</span>
                <span className="text-xl font-bold text-green-600">₹{combo.savings}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Description */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed Description</h2>
            <div className="prose max-w-none">
              <div className="text-gray-700 leading-relaxed whitespace-pre-line">{combo.longDescription}</div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your {combo.course} Journey?</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Get this complete study package with {combo.totalBooks} books and save ₹{combo.savings}. Everything you
              need for {combo.course} success in one convenient package!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={handleBuyNow} size="lg" className="bg-green-600 hover:bg-green-700">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Order Complete Combo - ₹{combo.comboPrice}
              </Button>
              <Button onClick={handleEnquiry} variant="outline" size="lg" className="bg-transparent">
                <Users className="mr-2 h-5 w-5" />
                Need Help? Contact Us
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <WhatsAppFloat />
    </div>
  )
}
