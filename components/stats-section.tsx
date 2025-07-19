import { Card, CardContent } from "@/components/ui/card"
import { Users, BookOpen, Award, Heart, Star, Zap } from "lucide-react"

const stats = [
  {
    icon: Users,
    label: "Happy Students",
    value: "15,000+",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    description: "Students trust us",
  },
  {
    icon: BookOpen,
    label: "Quality Books",
    value: "500+",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    description: "Educational resources",
  },
  {
    icon: Award,
    label: "Years Experience",
    value: "15+",
    color: "text-green-600",
    bgColor: "bg-green-100",
    description: "In education sector",
  },
  {
    icon: Heart,
    label: "Success Rate",
    value: "98%",
    color: "text-red-600",
    bgColor: "bg-red-100",
    description: "Student satisfaction",
  },
  {
    icon: Star,
    label: "Average Rating",
    value: "4.8/5",
    color: "text-yellow-600",
    bgColor: "bg-yellow-100",
    description: "From our students",
  },
  {
    icon: Zap,
    label: "Fast Delivery",
    value: "24-48h",
    color: "text-orange-600",
    bgColor: "bg-orange-100",
    description: "Across Northeast",
  },
]

export function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Students Choose
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Jyoti Publication
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Numbers that speak for our commitment to educational excellence and student success.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 shadow-lg"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div
                    className={`${stat.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform`}
                  >
                    <IconComponent className={`h-8 w-8 ${stat.color}`} />
                  </div>
                  <div>
                    <div className={`text-2xl md:text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                    <div className="text-sm font-semibold text-gray-900 mb-1">{stat.label}</div>
                    <div className="text-xs text-gray-600">{stat.description}</div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
