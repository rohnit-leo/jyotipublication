"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, BookOpen, Truck, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: MessageCircle,
    title: "WhatsApp Us",
    description: "Send us a message on WhatsApp with your course requirements",
    color: "text-green-600",
    bgColor: "bg-green-100",
    step: "01",
  },
  {
    icon: BookOpen,
    title: "Choose Package",
    description: "Select from our curated combo packages or individual books",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    step: "02",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Get your books delivered within 24-48 hours across Northeast",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    step: "03",
  },
  {
    icon: CheckCircle,
    title: "Start Learning",
    description: "Begin your journey to academic success with quality content",
    color: "text-orange-600",
    bgColor: "bg-orange-100",
    step: "04",
  },
]

export function ProcessSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How It
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple 4-step process to get your educational books delivered to your doorstep
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 shadow-lg relative overflow-hidden"
              >
                <CardContent className="p-8 text-center space-y-6">
                  {/* Step Number */}
                  <div className="absolute top-4 right-4 text-6xl font-bold text-gray-100 group-hover:text-gray-200 transition-colors">
                    {step.step}
                  </div>

                  <div
                    className={`${step.bgColor} w-20 h-20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform relative z-10`}
                  >
                    <IconComponent className={`h-10 w-10 ${step.color}`} />
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button
            onClick={() =>
              window.open("https://wa.me/919914632817?text=Hi! I want to order books for my course.", "_blank")
            }
            className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
          >
            <MessageCircle className="inline-block mr-2 h-5 w-5" />
            Start Your Order Now
          </button>
        </div>
      </div>
    </section>
  )
}
