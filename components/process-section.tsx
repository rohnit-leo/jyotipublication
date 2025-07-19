"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Search, ShoppingCart, BookOpen, Trophy } from "lucide-react"

const steps = [
  {
    step: 1,
    icon: Search,
    title: "Browse & Select",
    description:
      "Explore our comprehensive collection of entrance exam books and combo packages tailored for your course.",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
  {
    step: 2,
    icon: ShoppingCart,
    title: "Order via WhatsApp",
    description:
      "Place your order instantly through WhatsApp. Get personalized assistance and quick order confirmation.",
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
  },
  {
    step: 3,
    icon: BookOpen,
    title: "Receive & Study",
    description:
      "Get your books delivered within 3-7 days. Start your preparation with our expertly crafted study materials.",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
  },
  {
    step: 4,
    icon: Trophy,
    title: "Achieve Success",
    description:
      "Clear your entrance exams with confidence. Join thousands of successful students who achieved their dreams.",
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200",
  },
]

export function ProcessSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple 4-step process to get your hands on quality study materials and achieve your educational goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card
                className={`bg-white border-2 ${step.borderColor} shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105`}
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`${step.bgColor} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 relative`}
                  >
                    <step.icon className={`h-8 w-8 ${step.color}`} />
                    <div className="absolute -top-2 -right-2 bg-gray-900 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>

              {/* Connector Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"></div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-purple-400 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-white rounded-full px-8 py-4 shadow-lg border border-gray-200">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-bold text-gray-900">Ready to Start?</span>
            </div>
            <div className="h-6 w-px bg-gray-300"></div>
            <p className="text-gray-700 font-medium">Contact us on WhatsApp now!</p>
          </div>
        </div>
      </div>
    </section>
  )
}
