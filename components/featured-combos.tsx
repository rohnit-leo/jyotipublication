"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart } from "lucide-react"
import Link from "next/link"
import { combosData } from "@/lib/combo-data"

// Replace the featuredCombos array with:

const featuredCombos = combosData
  .filter((combo) => combo.bestseller)
  .slice(0, 3)
  .map((combo) => ({
    id: combo.id,
    name: combo.name,
    originalPrice: combo.originalPrice,
    salePrice: combo.comboPrice,
    rating: combo.rating,
    reviews: combo.reviews,
    image: combo.image,
    features: combo.features.slice(0, 4),
    bestseller: combo.bestseller,
    slug: combo.slug,
    course: combo.course,
    savings: combo.savings,
    totalBooks: combo.totalBooks,
  }))

export function FeaturedCombos() {
  const handleBuyNow = (combo: (typeof featuredCombos)[0]) => {
    const message = `Hi! I'm interested in the ${combo.name} combo for ${combo.course} priced at ₹${combo.salePrice} (Save ₹${combo.savings}!). Please provide more details.`
    window.open(`https://wa.me/919914632817?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Featured Combo Packages</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our most popular complete study packages with foundation books + course-specific content. Save money with
            combo deals!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCombos.map((combo) => (
            <Card key={combo.id} className="group hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="relative">
                <img
                  src={combo.image || "/placeholder.svg"}
                  alt={combo.name}
                  className="w-full h-80 object-contain bg-white group-hover:scale-105 transition-transform duration-300 p-4"
                />
                {combo.bestseller && (
                  <Badge className="absolute top-4 left-4 bg-red-500 hover:bg-red-600">Bestseller</Badge>
                )}
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 shadow-lg">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{combo.rating}</span>
                  </div>
                </div>
              </div>

              <CardContent className="p-6 space-y-4">
                <div>
                  <Link href={`/combos/${combo.slug}`}>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors cursor-pointer">
                      {combo.name}
                    </h3>
                  </Link>
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-2xl font-bold text-green-600">₹{combo.salePrice}</span>
                    <span className="text-lg text-gray-500 line-through">₹{combo.originalPrice}</span>
                    <Badge variant="secondary" className="text-xs">
                      Save ₹{combo.savings}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    {combo.totalBooks} Books • {combo.reviews} reviews
                  </p>
                </div>

                <div className="space-y-2">
                  {combo.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-green-600 hover:bg-green-700" onClick={() => handleBuyNow(combo)}>
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Buy Now via WhatsApp
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
