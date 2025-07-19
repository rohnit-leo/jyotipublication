"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    course: "B.Ed Graduate",
    university: "Banaras Hindu University",
    rating: 5,
    text: "The B.Ed preparation book from Jyoti Publication was incredibly helpful. The practice sets were exactly like the actual exam, and I cleared BHU B.Ed entrance with flying colors!",
    image: "/placeholder.svg?height=60&width=60&text=PS",
  },
  {
    id: 2,
    name: "Rahul Kumar",
    course: "M.Com Student",
    university: "Delhi University",
    rating: 5,
    text: "Excellent study material for M.Com entrance. The book covers all topics comprehensively and the previous year questions helped me understand the exam pattern perfectly.",
    image: "/placeholder.svg?height=60&width=60&text=RK",
  },
  {
    id: 3,
    name: "Anjali Patel",
    course: "MBA Aspirant",
    university: "Symbiosis International",
    rating: 5,
    text: "The MBA entrance book is a complete package. From quantitative aptitude to logical reasoning, everything is explained clearly. Highly recommend for serious MBA aspirants!",
    image: "/placeholder.svg?height=60&width=60&text=AP",
  },
  {
    id: 4,
    name: "Vikash Singh",
    course: "MCA Student",
    university: "Jawaharlal Nehru University",
    rating: 4,
    text: "Great resource for MCA preparation. The programming concepts are well explained with practical examples. The practice sets really boosted my confidence.",
    image: "/placeholder.svg?height=60&width=60&text=VS",
  },
  {
    id: 5,
    name: "Meera Gupta",
    course: "M.Ed Graduate",
    university: "Jamia Millia Islamia",
    rating: 5,
    text: "The research methodology section in the M.Ed book was particularly helpful. The contemporary educational issues coverage is excellent and very relevant.",
    image: "/placeholder.svg?height=60&width=60&text=MG",
  },
  {
    id: 6,
    name: "Arjun Reddy",
    course: "M.Tech Student",
    university: "BITS Pilani",
    rating: 5,
    text: "Outstanding technical content for M.Tech preparation. The engineering mathematics section is comprehensive and the industry-relevant examples make learning easier.",
    image: "/placeholder.svg?height=60&width=60&text=AR",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-4">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from thousands of successful students who achieved their dreams with Jyoti Publication study materials
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-blue-200"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.course}</p>
                    <p className="text-xs text-blue-600 font-medium">{testimonial.university}</p>
                  </div>
                  <Quote className="h-6 w-6 text-blue-400 flex-shrink-0" />
                </div>

                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                    />
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed italic">"{testimonial.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg">
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="font-bold text-gray-900">4.8/5</span>
            </div>
            <div className="h-6 w-px bg-gray-300"></div>
            <p className="text-gray-700 font-medium">Based on 2,500+ reviews</p>
          </div>
        </div>
      </div>
    </section>
  )
}
