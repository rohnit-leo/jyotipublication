"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Star, ShoppingCart, BookOpen, Package } from "lucide-react"
import { AnnouncementBar } from "@/components/announcement-bar"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { combosData } from "@/lib/combo-data"
import Link from "next/link"

const categories = [
  { value: "all", label: "All Combos" },
  { value: "bed", label: "B.Ed Combo" },
  { value: "mba", label: "MBA Combo" },
  { value: "mcom", label: "M.Com Combo" },
  { value: "mca", label: "MCA Combo" },
]

export default function CombosPage() {
  const searchParams = useSearchParams()
  const [combos, setCombos] = useState(combosData)
  const [filteredCombos, setFilteredCombos] = useState(combosData)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("name")

  useEffect(() => {
    const category = searchParams.get("category")
    const search = searchParams.get("search")

    if (category) {
      setSelectedCategory(category)
    }
    if (search) {
      setSearchTerm(search)
    }
  }, [searchParams])

  useEffect(() => {
    let filtered = combos

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter((combo) => combo.category === selectedCategory)
    }

    // Enhanced search functionality
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase()
      filtered = filtered.filter(
        (combo) =>
          combo.name.toLowerCase().includes(searchLower) ||
          combo.course.toLowerCase().includes(searchLower) ||
          combo.shortDescription.toLowerCase().includes(searchLower),
      )
    }

    // Sort combos
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.comboPrice - b.comboPrice
        case "price-high":
          return b.comboPrice - a.comboPrice
        case "rating":
          return b.rating - a.rating
        case "savings":
          return b.savings - a.savings
        default:
          return a.name.localeCompare(b.name)
      }
    })

    setFilteredCombos(filtered)
  }, [combos, selectedCategory, searchTerm, sortBy])

  const handleBuyNow = (combo: (typeof combosData)[0]) => {
    const booksList = combo.books.map((book) => `• ${book.name}`).join("\n")
    const message = `Hi! I'm interested in the "${combo.name}" priced at ₹${combo.comboPrice} (Save ₹${combo.savings}!).

This combo includes:
${booksList}

Please provide more details and confirm availability.`
    window.open(`https://wa.me/919914632817?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      <AnnouncementBar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Package className="h-8 w-8 text-blue-600" />
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Book Combo
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Packages
              </span>
            </h1>
          </div>
          <p className="text-xl text-gray-600">
            Complete study packages with foundation books + course-specific content. Save money with our combo deals!
          </p>
        </div>

        {/* Enhanced Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-100">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search combos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-2 border-gray-200 focus:border-blue-500 rounded-full"
              />
            </div>

            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="border-2 border-gray-200 focus:border-blue-500 rounded-full">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="border-2 border-gray-200 focus:border-blue-500 rounded-full">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name (A-Z)</SelectItem>
                <SelectItem value="price-low">Price (Low to High)</SelectItem>
                <SelectItem value="price-high">Price (High to Low)</SelectItem>
                <SelectItem value="rating">Rating</SelectItem>
                <SelectItem value="savings">Savings (High to Low)</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 bg-purple-50 rounded-full px-4 py-2">
              <Filter className="h-4 w-4" />
              <span className="font-medium">{filteredCombos.length} combos found</span>
            </div>
          </div>
        </div>

        {/* Combos Grid - Mobile Responsive (2 columns on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredCombos.map((combo) => (
            <Card
              key={combo.id}
              className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-0 shadow-lg transform hover:scale-105"
            >
              <div className="relative">
                <img
                  src={combo.image || "/placeholder.svg"}
                  alt={combo.name}
                  className="w-full h-64 md:h-80 object-contain bg-white group-hover:scale-110 transition-transform duration-300 p-4"
                />
                {combo.bestseller && (
                  <Badge className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600">
                    Bestseller
                  </Badge>
                )}
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 shadow-lg">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{combo.rating}</span>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  Save ₹{combo.savings}
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
                    <span className="text-2xl font-bold text-green-600">₹{combo.comboPrice}</span>
                    <span className="text-lg text-gray-500 line-through">₹{combo.originalPrice}</span>
                    <Badge variant="secondary" className="text-xs">
                      {Math.round((combo.savings / combo.originalPrice) * 100)}% OFF
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{combo.reviews} reviews</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Total Books:</span>
                    <span className="font-medium text-gray-900">{combo.totalBooks} Books</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Course:</span>
                    <span className="font-medium text-gray-900">{combo.course}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">You Save:</span>
                    <span className="font-bold text-green-600">₹{combo.savings}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-900">Includes:</p>
                  <div className="space-y-1">
                    {combo.books.slice(0, 3).map((book, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <BookOpen className="h-3 w-3 text-blue-600" />
                        <span className="text-xs text-gray-700">{book.name}</span>
                      </div>
                    ))}
                    {combo.books.length > 3 && (
                      <p className="text-xs text-gray-500 ml-5">+ {combo.books.length - 3} more books</p>
                    )}
                  </div>
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
                  onClick={() => handleBuyNow(combo)}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Buy Combo via WhatsApp
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCombos.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Package className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No combos found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            <Button
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("all")
              }}
              className="mt-4"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>

      <WhatsAppFloat />
    </div>
  )
}
