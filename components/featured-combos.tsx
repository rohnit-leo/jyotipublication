"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, BookOpen, ArrowRight } from "lucide-react"
import { combosData } from "@/lib/combo-data"

export function FeaturedCombos() {
  // Get the first 3 combos as featured
  const featuredCombos = combosData.slice(0, 3)

  const handleWhatsAppOrder = (combo: any) => {
    const message = `Hi! I'm interested in the "${combo.name}" combo package priced at ₹${combo.comboPrice}. Please provide more details.`
    window.open(`https://wa.me/919914632817?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-4">
            Featured Combo Packages
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Save more with our carefully curated combo packages. Get multiple books at discounted prices!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCombos.map((combo) => (
            <Card
              key={combo.id}
              className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 group"
            >
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={combo.image || "/placeholder.svg?height=200&width=300"}
                    alt={combo.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  {combo.bestseller && (
                    <Badge className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-pink-500 text-white animate-pulse">
                      ⭐ Bestseller
                    </Badge>
                  )}
                  <div className="absolute bottom-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    Save ₹{combo.savings}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {combo.name}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">{combo.shortDescription}</p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(combo.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium">{combo.rating}</span>
                    <span className="text-gray-500 text-sm">({combo.reviews})</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-green-600">₹{combo.comboPrice}</span>
                        <span className="text-lg text-gray-500 line-through">₹{combo.originalPrice}</span>
                      </div>
                      <p className="text-sm text-gray-600">{combo.totalBooks} Books Included</p>
                    </div>
                    <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                      {Math.round((combo.savings / combo.originalPrice) * 100)}% OFF
                    </Badge>
                  </div>

                  <div className="space-y-2">
                    <Button
                      onClick={() => handleWhatsAppOrder(combo)}
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                    >
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Order on WhatsApp
                    </Button>
                    <Button asChild variant="outline" className="w-full bg-transparent">
                      <Link href={`/combos/${combo.slug}`}>
                        <BookOpen className="mr-2 h-4 w-4" />
                        View Details
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <Link href="/combos">
              View All Combos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
