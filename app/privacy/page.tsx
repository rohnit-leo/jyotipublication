import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Eye, Lock, UserCheck } from "lucide-react"
import { AnnouncementBar } from "@/components/announcement-bar"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <AnnouncementBar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Privacy Policy</Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Your Privacy Matters</h1>
          <p className="text-xl text-gray-600">Last updated: January 2024</p>
        </div>

        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <Shield className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Our Commitment</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              At Jyoti Publication, we are committed to protecting your privacy and ensuring the security of your
              personal information. This Privacy Policy explains how we collect, use, and safeguard your information
              when you visit our website or interact with our services.
            </p>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <Card>
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Eye className="h-6 w-6 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Information We Collect</h3>
              </div>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h4 className="font-semibold mb-2">Personal Information:</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Name and contact details when you contact us</li>
                    <li>Email address for communication purposes</li>
                    <li>Phone number for WhatsApp orders and support</li>
                    <li>Shipping address for book delivery</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Usage Information:</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Website browsing patterns and preferences</li>
                    <li>Device information and IP address</li>
                    <li>Pages visited and time spent on our website</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <UserCheck className="h-6 w-6 text-purple-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">How We Use Your Information</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Process and fulfill your book orders through WhatsApp</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Provide customer support and respond to inquiries</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Send updates about new books and educational resources</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Improve our website and services based on user feedback</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Comply with legal obligations and protect our rights</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Lock className="h-6 w-6 text-red-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Information Security</h3>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  We implement appropriate technical and organizational security measures to protect your personal
                  information against unauthorized access, alteration, disclosure, or destruction.
                </p>
                <div>
                  <h4 className="font-semibold mb-2">Security Measures Include:</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Secure data transmission protocols</li>
                    <li>Regular security assessments and updates</li>
                    <li>Limited access to personal information on a need-to-know basis</li>
                    <li>Secure storage of customer data</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Information Sharing</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  We do not sell, trade, or rent your personal information to third parties. We may share your
                  information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>With delivery partners to fulfill book orders</li>
                  <li>When required by law or legal process</li>
                  <li>To protect our rights, property, or safety</li>
                  <li>With your explicit consent</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Rights</h3>
              <div className="space-y-4 text-gray-700">
                <p>You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access and review your personal information</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>File a complaint with relevant authorities</li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, please contact us at jyotipublicationbooks@gmail.com or WhatsApp us at +91
                  9914632817.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cookies and Tracking</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  Our website may use cookies and similar tracking technologies to enhance your browsing experience and
                  analyze website traffic. You can control cookie settings through your browser preferences.
                </p>
                <p>We use cookies for:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Remembering your preferences</li>
                  <li>Analyzing website performance</li>
                  <li>Improving user experience</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-4 text-gray-700">
                <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>
                    <strong>Jyoti Publication</strong>
                  </p>
                  <p>6482, Garubandha, Missamari, Sonitpur, Assam – 784506</p>
                  <p>Email: jyotipublicationbooks@gmail.com</p>
                  <p>WhatsApp: +91 9914632817</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Policy Updates</h3>
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal
                requirements. We will notify you of any significant changes by posting the updated policy on our website
                with a new effective date.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
