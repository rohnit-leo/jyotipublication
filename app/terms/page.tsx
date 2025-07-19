import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, AlertCircle, CheckCircle, XCircle } from "lucide-react"
import { AnnouncementBar } from "@/components/announcement-bar"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <AnnouncementBar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Terms & Conditions</Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-xl text-gray-600">Last updated: January 2024</p>
        </div>

        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <FileText className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Agreement to Terms</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              By accessing and using the Jyoti Publication website (www.jyotipublication.in) and our services, you agree
              to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not
              use our website or services.
            </p>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <Card>
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Use of Our Services</h3>
              </div>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h4 className="font-semibold mb-2">Permitted Use:</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Browse and purchase educational books for personal or educational use</li>
                    <li>Contact us for academic guidance and support</li>
                    <li>Share our content with proper attribution</li>
                    <li>Use our WhatsApp ordering system for legitimate purchases</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Prohibited Use:</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Reselling our books without authorization</li>
                    <li>Copying or reproducing our content without permission</li>
                    <li>Using our services for illegal or unauthorized purposes</li>
                    <li>Attempting to disrupt or harm our website or services</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <AlertCircle className="h-6 w-6 text-orange-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Ordering and Payment</h3>
              </div>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h4 className="font-semibold mb-2">WhatsApp Ordering Process:</h4>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>All orders are processed through WhatsApp (+91 9914632817)</li>
                    <li>Order confirmation will be provided via WhatsApp message</li>
                    <li>Payment methods and terms will be communicated during order processing</li>
                    <li>We reserve the right to refuse or cancel orders at our discretion</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Pricing and Availability:</h4>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>All prices are in Indian Rupees (INR) and subject to change</li>
                    <li>Book availability is subject to stock and may vary</li>
                    <li>Promotional offers are time-limited and subject to terms</li>
                    <li>Bulk order discounts may be available upon request</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Delivery and Shipping</h3>
              </div>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h4 className="font-semibold mb-2">Delivery Terms:</h4>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Delivery timelines will be communicated during order confirmation</li>
                    <li>Shipping charges may apply based on location and order value</li>
                    <li>We primarily serve Northeast India but may consider other locations</li>
                    <li>Risk of loss passes to customer upon delivery</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Delivery Issues:</h4>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Report delivery issues within 48 hours of expected delivery</li>
                    <li>Provide accurate delivery address to avoid delays</li>
                    <li>Additional charges may apply for re-delivery due to incorrect address</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <XCircle className="h-6 w-6 text-red-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Intellectual Property</h3>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  All content on our website, including text, images, logos, and book content, is protected by copyright
                  and other intellectual property laws. You may not:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Reproduce, distribute, or display our content without permission</li>
                  <li>Use our trademarks or logos without authorization</li>
                  <li>Create derivative works based on our content</li>
                  <li>Remove or alter copyright notices</li>
                </ul>
                <p>For permission to use our content, please contact us at jyotipublicationbooks@gmail.com.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Limitation of Liability</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  To the maximum extent permitted by law, Jyoti Publication shall not be liable for any indirect,
                  incidental, special, or consequential damages arising from:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Use or inability to use our website or services</li>
                  <li>Delays or interruptions in service</li>
                  <li>Loss of data or information</li>
                  <li>Third-party actions or content</li>
                </ul>
                <p>
                  Our total liability for any claim shall not exceed the amount paid by you for the specific product or
                  service giving rise to the claim.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">User Responsibilities</h3>
              <div className="space-y-4 text-gray-700">
                <p>As a user of our services, you agree to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the confidentiality of your account information</li>
                  <li>Use our services in compliance with applicable laws</li>
                  <li>Respect the intellectual property rights of others</li>
                  <li>Report any unauthorized use of your account</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Governing Law</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  These Terms and Conditions are governed by the laws of India. Any disputes arising from these terms or
                  your use of our services shall be subject to the exclusive jurisdiction of the courts in Assam, India.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Changes to Terms</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  We reserve the right to modify these Terms and Conditions at any time. Changes will be effective
                  immediately upon posting on our website. Your continued use of our services after changes are posted
                  constitutes acceptance of the modified terms.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-4 text-gray-700">
                <p>For questions about these Terms and Conditions, please contact us:</p>
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
        </div>
      </div>
    </div>
  )
}
