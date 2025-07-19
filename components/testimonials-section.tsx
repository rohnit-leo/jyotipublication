import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Priya Sharma",
    course: "B.Ed Graduate",
    location: "Guwahati, Assam",
    rating: 5,
    text: "Jyoti Publication books helped me excel in my B.Ed course. The content is comprehensive and easy to understand. Highly recommended!",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Rajesh Kumar",
    course: "MBA Student",
    location: "Dibrugarh, Assam",
    rating: 5,
    text: "The MBA combo package is excellent value for money. All books are well-organized and cover the entire syllabus perfectly.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Anita Devi",
    course: "M.Com Graduate",
    location: "Silchar, Assam",
    rating: 5,
    text: "WhatsApp ordering made it so convenient! Books arrived quickly and the quality is outstanding. Thank you Jyoti Publication!",
    image: "/placeholder.svg?height=80&width=80",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of successful students who trust Jyoti Publication for their academic journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <Quote className="h-8 w-8 text-blue-600 opacity-50" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-gray-700 italic leading-relaxed">"{testimonial.text}"</p>

                <div className="flex items-center space-x-4 pt-4 border-t">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.course}</p>
                    <p className="text-xs text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
