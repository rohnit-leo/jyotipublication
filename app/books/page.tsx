"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Star, ShoppingCart, BookOpen, Eye, Sparkles } from "lucide-react"
import { AnnouncementBar } from "@/components/announcement-bar"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { booksData } from "@/lib/books-data"
import Link from "next/link"

const categories = [
  { value: "all", label: "All Categories" },
  { value: "bed", label: "B.Ed Books" },
  { value: "mba", label: "MBA Books" },
  { value: "mcom", label: "M.Com Books" },
  { value: "mca", label: "MCA Books" },
  { value: "other", label: "Other Courses" },
]

export default function BooksPage() {
  const searchParams = useSearchParams()
  const [books, setBooks] = useState(booksData)
  const [filteredBooks, setFilteredBooks] = useState(booksData)
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
    let filtered = books

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter((book) => book.category === selectedCategory)
    }

    // Enhanced search functionality
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase()
      filtered = filtered.filter(
        (book) =>
          book.name.toLowerCase().includes(searchLower) ||
          book.author.toLowerCase().includes(searchLower) ||
          book.university.toLowerCase().includes(searchLower) ||
          book.course.toLowerCase().includes(searchLower) ||
          book.shortDescription.toLowerCase().includes(searchLower),
      )
    }

    // Sort books
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "rating":
          return b.rating - a.rating
        default:
          return a.name.localeCompare(b.name)
      }
    })

    setFilteredBooks(filtered)
  }, [books, selectedCategory, searchTerm, sortBy])

  const handleBuyNow = (book: (typeof booksData)[0]) => {
    const message = `Hi! I'm interested in "${book.name}" by ${book.author} for ${book.university} ${book.course}, priced at ₹${book.price}. Please provide more details and confirm availability.`
    window.open(`https://wa.me/919914632817?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <AnnouncementBar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Sparkles className="h-8 w-8 text-purple-600 animate-pulse" />
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Educational Books &
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                {" "}
                Resources
              </span>
            </h1>
            <Sparkles className="h-8 w-8 text-blue-600 animate-pulse" />
          </div>
          <p className="text-xl text-gray-600">Discover our comprehensive collection of academic resources</p>
        </div>

        {/* Enhanced Filters */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-6 mb-8 border border-white/20">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search books, authors, universities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-2 border-gray-200 focus:border-purple-500 rounded-full bg-white/90"
              />
            </div>

            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="border-2 border-gray-200 focus:border-purple-500 rounded-full bg-white/90">
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
              <SelectTrigger className="border-2 border-gray-200 focus:border-purple-500 rounded-full bg-white/90">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name (A-Z)</SelectItem>
                <SelectItem value="price-low">Price (Low to High)</SelectItem>
                <SelectItem value="price-high">Price (High to Low)</SelectItem>
                <SelectItem value="rating">Rating</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-4 py-2">
              <Filter className="h-4 w-4" />
              <span className="font-medium">{filteredBooks.length} books found</span>
            </div>
          </div>
        </div>

        {/* Books Grid - Mobile Responsive (2 columns on mobile) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {filteredBooks.map((book) => (
            <Card
              key={book.id}
              className="group hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 shadow-lg transform hover:scale-105 bg-white/90 backdrop-blur-sm hover:bg-white"
            >
              <div className="relative">
                <img
                  src={book.image || "/placeholder.svg"}
                  alt={book.name}
                  className="w-full h-48 md:h-64 object-contain bg-gradient-to-br from-gray-50 to-blue-50 group-hover:scale-110 transition-transform duration-500 p-2 md:p-4"
                />
                {book.bestseller && (
                  <Badge className="absolute top-2 left-2 bg-gradient-to-r from-red-500 via-pink-500 to-red-600 hover:from-red-600 hover:via-pink-600 hover:to-red-700 text-xs animate-pulse">
                    ⭐ Bestseller
                  </Badge>
                )}
                <div className="absolute top-2 right-2 bg-white/95 backdrop-blur-sm rounded-full px-2 py-1 shadow-lg">
                  <div className="flex items-center space-x-1">
                    <Star className="h-3 w-3 text-yellow-400 fill-current" />
                    <span className="text-xs font-medium">{book.rating}</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <CardContent className="p-3 md:p-4 space-y-3">
                <div>
                  <h3 className="font-bold text-gray-900 text-sm md:text-base mb-1 line-clamp-2 group-hover:text-purple-600 transition-colors">
                    {book.name}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 mb-1">by {book.author}</p>
                  <p className="text-xs text-blue-600 font-medium">{book.university}</p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                      ₹{book.price}
                    </span>
                    <span className="text-xs text-gray-500 line-through">₹{book.originalPrice}</span>
                  </div>
                  <Badge
                    variant="secondary"
                    className="text-xs bg-gradient-to-r from-orange-100 to-red-100 text-orange-700"
                  >
                    {Math.round(((book.originalPrice - book.price) / book.originalPrice) * 100)}% OFF
                  </Badge>
                </div>

                <div className="flex flex-col space-y-2">
                  <Link href={`/books/${book.slug}`}>
                    <Button
                      variant="outline"
                      className="w-full bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 border-2 border-blue-200 hover:border-purple-300 text-xs md:text-sm py-2 transition-all duration-300"
                    >
                      <Eye className="mr-1 h-3 w-3 md:h-4 md:w-4" />
                      View Details
                    </Button>
                  </Link>

                  <Button
                    className="w-full bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 hover:from-green-700 hover:via-emerald-700 hover:to-green-800 text-xs md:text-sm py-2 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    onClick={() => handleBuyNow(book)}
                    disabled={!book.inStock}
                  >
                    <ShoppingCart className="mr-1 h-3 w-3 md:h-4 md:w-4" />
                    {book.inStock ? "Buy Now" : "Out of Stock"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <BookOpen className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No books found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            <Button
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("all")
              }}
              className="mt-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
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
