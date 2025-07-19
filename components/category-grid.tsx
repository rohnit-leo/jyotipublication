"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, BookOpen, Users, TrendingUp } from "lucide-react"

const categories = [
  {
    id: "bed",
    name: "B.Ed Books",
    description: "Bachelor of Education entrance exam preparation materials",
    icon: GraduationCap,
    bookCount: 8,
    popularBooks: ["BHU B.Ed", "Jamia M.Ed", "Teaching Methodology"],
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    id: "mcom",
    name: "M.Com Books",
    description: "Master of Commerce entrance and coursework study materials",
    icon: TrendingUp,
    bookCount: 6,
    popularBooks: ["DU M.Com", "Business Statistics", "Financial Accounting"],
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    gradient: "from-green-500 to-green-600",
  },
  {
    id: "mba",
    name: "MBA Books",
    description: "Master of Business Administration entrance exam guides",
    icon: Users,
    bookCount: 7,
    popularBooks: ["Symbiosis MBA", "CAT Preparation", "Management Concepts"],
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    gradient: "from-purple-500 to-purple-600",
  },
  {
    id: "mca",
    name: "MCA Books",
    description: "Master of Computer Applications technical study materials",
    icon: BookOpen,
    bookCount: 5,
    popularBooks: ["JNU MCA", "Programming Concepts", "Data Structures"],
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    gradient: "from-orange-500 to-orange-600",
  },
]

export function CategoryGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-4">
            Explore by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find the perfect study materials for your entrance exam preparation across various academic disciplines
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Link key={category.id} href={`/books?category=${category.id}`}>
              <Card
                className={`bg-white border-2 ${category.borderColor} shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group`}
              >
                <CardContent className="p-8">
                  <div
                    className={`${category.bgColor} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <category.icon className={`h-8 w-8 ${category.color}`} />
                  </div>

                  <div className="text-center space-y-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{category.description}</p>

                    <div className="flex justify-center">
                      <Badge
                        className={`bg-gradient-to-r ${category.gradient} text-white hover:shadow-lg transition-shadow`}
                      >
                        {category.bookCount} Books Available
                      </Badge>
                    </div>

                    <div className="pt-2">
                      <p className="text-xs text-gray-500 mb-2">Popular Books:</p>
                      <div className="flex flex-wrap gap-1 justify-center">
                        {category.popularBooks.map((book, index) => (
                          <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                            {book}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/books"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            <BookOpen className="h-5 w-5" />
            <span>View All Books</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
