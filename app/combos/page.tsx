"use client"

import { useState, useMemo } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, ShoppingCart, BookOpen, Search, Package } from "lucide-react"
import Link from "next/link"
import { AnnouncementBar } from "@/components/announcement-bar"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { combosData } from "@/lib/combo-data"

export default function CombosPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("name")

  // Get unique categories
  const categories = useMemo(() => {
    const cats = [...new Set(combosData.map((combo) => combo.category))]
    return [{ value: "all", label: "All Categories" }, ...cats.map((cat) => ({ value: cat, label: cat.toUpperCase() }))]
  }, [])

  // Filter and sort combos
  const filteredCombos = useMemo(() => {
    const filtered = combosData.filter((combo) => {
      const matchesSearch =
        combo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        combo.course.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "all" || combo.category === selectedCategory
      return matchesSearch && matchesCategory
    })

    // Sort combos
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.comboPrice - b.comboPrice
        case "price-high":
          return b.comboPrice - a.comboPrice
        case "savings":
          return b.savings - a.savings
        case "rating":
          return b.rating - a.rating
        case "name":
        default:
          return a.name.localeCompare(b.name)
      }
    })

    return filtered
  }, [searchTerm, selectedCategory, sortBy])

  const handleWhatsAppOrder = (combo: any) => {
    const message = `Hi! I'm interested in the "${combo.name}" combo package priced at ₹${combo.comboPrice} (Save ₹${combo.savings}!). Please provide more details.`
    window.open(`https://wa.me/919914632817?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <AnnouncementBar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-4">
            Combo Packages
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Save more with our carefully curated combo packages. Get multiple books at discounted prices!
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search combo packages..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <Package className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat.value} value={cat.value}>
                    {cat.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name (A-Z)</SelectItem>
                <SelectItem value="price-low">Price (Low to High)</SelectItem>
                <SelectItem value="price-high">Price (High to Low)</SelectItem>
                <SelectItem value="savings">Savings (High to Low)</SelectItem>
                <SelectItem value="rating">Rating (High to Low)</SelectItem>
              </SelectContent>
            </Select>

            <div className="text-sm text-gray-600 flex items-center justify-center">
              {filteredCombos.length} combos found
            </div>
          </div>
        </div>

        {/* Combos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCombos.map((combo) => (
            <Card
              key={combo.id}
              className="bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
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

        {filteredCombos.length === 0 && (
          <div className="text-center py-12">
            <Package className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No combo packages found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or browse all categories</p>
          </div>
        )}
      </div>

      <WhatsAppFloat />
    </div>
  )
}
