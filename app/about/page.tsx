import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, BookOpen, Award, Heart, Target, Eye } from "lucide-react"
import { AnnouncementBar } from "@/components/announcement-bar"
import { WhatsAppFloat } from "@/components/whatsapp-float"

const stats = [
  { icon: Users, label: "Happy Students", value: "10,000+", color: "text-blue-600" },
  { icon: BookOpen, label: "Quality Books", value: "500+", color: "text-purple-600" },
  { icon: Award, label: "Years Experience", value: "15+", color: "text-green-600" },
  { icon: Heart, label: "Satisfied Customers", value: "98%", color: "text-red-600" },
]

const team = [
  {
    name: "Bhuneshwer Singh",
    role: "Founder & Director",
    image: "/placeholder.svg?height=200&width=200",
    description: "Visionary leader with 15+ years in educational publishing",
  },
  {
    name: "Dr. Rajesh Kumar",
    role: "Academic Director",
    image: "/placeholder.svg?height=200&width=200",
    description: "PhD in Education, curriculum design expert",
  },
  {
    name: "Priya Sharma",
    role: "Content Manager",
    image: "/placeholder.svg?height=200&width=200",
    description: "Masters in Literature, quality assurance specialist",
  },
]

const milestones = [
  { year: "2009", event: "Jyoti Publication founded in Assam" },
  { year: "2012", event: "Launched first B.Ed book series" },
  { year: "2015", event: "Expanded to MBA and M.Com publications" },
  { year: "2018", event: "Introduced MCA technical books" },
  { year: "2020", event: "Digital transformation and online presence" },
  { year: "2024", event: "Serving 10,000+ students across Northeast India" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <AnnouncementBar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">About Jyoti Publication</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Empowering Education Since 2009</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From humble beginnings in Assam to becoming Northeast India's trusted educational publisher, Jyoti
            Publication has been dedicated to providing quality academic resources that shape successful careers.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <IconComponent className={`h-12 w-12 ${stat.color} mx-auto mb-4`} />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To democratize quality education by providing comprehensive, affordable, and accessible academic
                resources that empower students to achieve their career aspirations. We believe every student deserves
                access to excellent educational materials regardless of their geographical location or economic
                background.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Eye className="h-8 w-8 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To become the leading educational publisher in Northeast India, recognized for innovation, quality, and
                student success. We envision a future where every student has access to world-class educational
                resources that prepare them for the challenges of tomorrow's competitive landscape.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Our Story */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Journey</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">From Vision to Reality</h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Founded in 2009 by Bhuneshwer Singh, Jyoti Publication began with a simple yet powerful vision: to
                    bridge the gap between quality education and accessibility in Northeast India.
                  </p>
                  <p>
                    Starting with a small collection of B.Ed books, we recognized the unique challenges faced by
                    students in our region - limited access to quality study materials, high costs, and outdated content
                    that didn't align with modern curricula.
                  </p>
                  <p>
                    Today, we're proud to serve over 10,000 students across multiple disciplines, offering comprehensive
                    book combos that combine affordability with academic excellence. Our WhatsApp-based ordering system
                    reflects our commitment to convenience and accessibility.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="bg-blue-600 text-white rounded-full w-16 h-8 flex items-center justify-center text-sm font-bold">
                      {milestone.year}
                    </div>
                    <div className="text-gray-700">{milestone.event}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Quality</h3>
              <p className="text-gray-600 text-sm">Uncompromising commitment to academic excellence</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Accessibility</h3>
              <p className="text-gray-600 text-sm">Making education affordable and reachable for all</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Community</h3>
              <p className="text-gray-600 text-sm">Building strong relationships with students and educators</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600 text-sm">Continuously evolving to meet modern educational needs</p>
            </div>
          </div>
        </div>
      </div>

      <WhatsAppFloat />
    </div>
  )
}
