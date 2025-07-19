"use client"

import { BookOpen, Users, Award, TrendingUp, Star, Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const stats = [
  {
    icon: BookOpen,
    number: "50+",
    label: "Study Books",
    description: "Comprehensive study materials for various entrance exams",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Users,
    number: "10,000+",
    label: "Happy Students",
    description: "Students who achieved success with our books",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    icon: Award,
    number: "15+",
    label: "Years Experience",
    description: "Trusted educational publisher since 2010",
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
  },
  {
    icon: TrendingUp,
    number: "95%",
    label: "Success Rate",
    description: "Students who cleared their entrance exams",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: Star,
    number: "4.8/5",
    label: "Average Rating",
    description: "Based on 2,500+ student reviews",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
  {
    icon: Globe,
    number: "Pan India",
    label: "Delivery",
    description: "Free shipping across all states",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
  },
]

export function StatsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-4">
            Why Choose Jyoti Publication?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Numbers that speak for our commitment to educational excellence and student success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-8 text-center">
                <div className={`${stat.bgColor} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold text-gray-900">{stat.number}</h3>
                  <h4 className="text-lg font-semibold text-gray-800">{stat.label}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{stat.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full px-8 py-4 shadow-lg">
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <span className="font-bold text-gray-900">Trusted by 10,000+ Students</span>
            </div>
            <div className="h-6 w-px bg-gray-300"></div>
            <p className="text-gray-700 font-medium">Join the Success Story</p>
          </div>
        </div>
      </div>
    </section>
  )
}
