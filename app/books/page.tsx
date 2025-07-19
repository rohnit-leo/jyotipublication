"use client"

import { useState, useMemo } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, ShoppingCart, BookOpen, Search, Filter } from "lucide-react"
import Link from "next/link"
import { AnnouncementBar } from "@/components/announcement-bar"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { booksData } from "@/lib/books-data"

export default function BooksPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("name")

  // Get unique categories
  const categories = useMemo(() => {
    const cats = [...new Set(booksData.map((book) => book.category))]
    return [{ value: "all", label: "All Categories" }, ...cats.map((cat) => ({ value: cat, label: cat.toUpperCase() }))]
  }, [])

  // Filter and sort books
  const filteredBooks = useMemo(() => {
    const filtered = booksData.filter((book) => {
      const matchesSearch =
        book.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.university.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.course.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "all" || book.category === selectedCategory
      return matchesSearch && matchesCategory
    })

    // Sort books
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "rating":
          return b.rating - a.rating
        case "name":
        default:
          return a.name.localeCompare(b.name)
      }
    })

    return filtered
  }, [searchTerm, selectedCategory, sortBy])

  const handleWhatsAppOrder = (book: any) => {
    const message = `Hi! I'm interested in "${book.name}" for ${book.university} ${book.course} entrance exam, priced at ₹${book.price}. Please provide more details.`
    window.open(`https://wa.me/919914632817?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <AnnouncementBar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-4">
            Educational Books Collection
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive study materials for entrance exams across various universities and courses
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search books, universities, courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <Filter className="h-4 w-4 mr-2" />
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
                <SelectItem value="rating">Rating (High to Low)</SelectItem>
              </SelectContent>
            </Select>

            <div className="text-sm text-gray-600 flex items-center justify-center">
              {filteredBooks.length} books found
            </div>
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredBooks.map((book) => (
            <Card
              key={book.id}
              className="bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={book.image || "/placeholder.svg?height=200&width=150"}
                    alt={book.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  {book.bestseller && (
                    <Badge className="absolute top-2 left-2 bg-gradient-to-r from-red-500 to-pink-500 text-white animate-pulse">
                      ⭐ Bestseller
                    </Badge>
                  )}
                  <div className="absolute bottom-2 right-2 bg-green-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                    {Math.round(((book.originalPrice - book.price) / book.originalPrice) * 100)}% OFF
                  </div>
                </div>

                <div className="p-4 space-y-3">
                  <div>
                    <h3 className="font-bold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {book.name}
                    </h3>
                    <p className="text-sm text-gray-600">{book.university}</p>
                    <p className="text-xs text-blue-600 font-medium">{book.course}</p>
                  </div>

                  <div className="flex items-center space-x-1">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${
                            i < Math.floor(book.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs font-medium">{book.rating}</span>
                    <span className="text-gray-500 text-xs">({book.reviews})</span>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-green-600">₹{book.price}</span>
                      <span className="text-sm text-gray-500 line-through">₹{book.originalPrice}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Button
                      onClick={() => handleWhatsAppOrder(book)}
                      className="w-full bg-green-600 hover:bg-green-700 text-white text-sm py-2"
                      disabled={!book.inStock}
                    >
                      <ShoppingCart className="mr-2 h-3 w-3" />
                      {book.inStock ? "Order Now" : "Out of Stock"}
                    </Button>
                    <Button asChild variant="outline" className="w-full text-sm py-2 bg-transparent">
                      <Link href={`/books/${book.slug}`}>
                        <BookOpen className="mr-2 h-3 w-3" />
                        View Details
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No books found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or browse all categories</p>
          </div>
        )}
      </div>

      <WhatsAppFloat />
    </div>
  )
}
