import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { RefreshCw, Clock, CheckCircle, AlertTriangle } from "lucide-react"
import { AnnouncementBar } from "@/components/announcement-bar"

export default function RefundPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <AnnouncementBar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Refund Policy</Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Return & Refund Policy</h1>
          <p className="text-xl text-gray-600">Last updated: January 2024</p>
        </div>

        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <RefreshCw className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Our Commitment</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              At Jyoti Publication, we stand behind the quality of our educational books and are committed to ensuring
              your complete satisfaction. This policy outlines the terms and conditions for returns and refunds to
              ensure transparency and fairness for all our customers.
            </p>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <Card>
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Return Timeline</h3>
              </div>
              <div className="space-y-4 text-gray-700">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">7-Day Return Window</h4>
                  <p className="text-green-700">
                    You may return books within 7 days of delivery for a full refund, provided they meet our return
                    conditions.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Important Timeline Notes:</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Return period starts from the date of delivery</li>
                    <li>Return request must be initiated within 7 days</li>
                    <li>Books must be returned within 14 days of return approval</li>
                    <li>Refund processing begins after we receive the returned books</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Eligible Returns</h3>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>We accept returns for the following reasons:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Quality Issues</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Damaged or defective books</li>
                      <li>• Missing pages or printing errors</li>
                      <li>• Binding issues</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">Order Errors</h4>
                    <ul className="text-sm text-purple-700 space-y-1">
                      <li>• Wrong book delivered</li>
                      <li>• Incorrect quantity</li>
                      <li>• Duplicate shipment</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Return Conditions:</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Books must be in original condition (unused, unmarked)</li>
                    <li>Original packaging and materials must be included</li>
                    <li>All books in a combo set must be returned together</li>
                    <li>Return reason must be clearly stated</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <AlertTriangle className="h-6 w-6 text-red-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Non-Returnable Items</h3>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>The following items cannot be returned:</p>
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <ul className="list-disc list-inside space-y-2 text-red-700">
                    <li>Books with writing, highlighting, or other markings</li>
                    <li>Damaged books due to misuse or normal wear</li>
                    <li>Books returned after the 7-day return window</li>
                    <li>Digital or downloadable content (if applicable)</li>
                    <li>Books purchased during special clearance sales</li>
                    <li>Customized or personalized books</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Return Process</h3>
              <div className="space-y-6 text-gray-700">
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <span className="text-blue-600 font-bold">1</span>
                    </div>
                    <h4 className="font-semibold mb-2">Contact Us</h4>
                    <p className="text-sm">WhatsApp us at +91 9914632817 with your order details</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <span className="text-green-600 font-bold">2</span>
                    </div>
                    <h4 className="font-semibold mb-2">Get Approval</h4>
                    <p className="text-sm">Receive return authorization and instructions</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <span className="text-purple-600 font-bold">3</span>
                    </div>
                    <h4 className="font-semibold mb-2">Ship Books</h4>
                    <p className="text-sm">Send books back using provided return address</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <span className="text-orange-600 font-bold">4</span>
                    </div>
                    <h4 className="font-semibold mb-2">Get Refund</h4>
                    <p className="text-sm">Receive refund after inspection</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Required Information for Return Request:</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                    <li>Order number or reference</li>
                    <li>Book titles and quantities</li>
                    <li>Reason for return</li>
                    <li>Photos of damaged items (if applicable)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Refund Processing</h3>
              <div className="space-y-4 text-gray-700">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Refund Timeline:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        <span className="text-sm">Inspection: 2-3 business days</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                        <span className="text-sm">Refund processing: 3-5 business days</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                        <span className="text-sm">Bank credit: 5-7 business days</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Refund Methods:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        <span className="text-sm">Original payment method</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        <span className="text-sm">Bank transfer (if requested)</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        <span className="text-sm">Store credit (optional)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Shipping Costs</h3>
              <div className="space-y-4 text-gray-700">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2">We Cover Shipping When:</h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Books are damaged or defective</li>
                      <li>• Wrong items were delivered</li>
                      <li>• Our error in order processing</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                    <h4 className="font-semibold text-orange-800 mb-2">Customer Covers Shipping When:</h4>
                    <ul className="text-sm text-orange-700 space-y-1">
                      <li>• Change of mind returns</li>
                      <li>• Ordered wrong books</li>
                      <li>• No longer needed</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact for Returns</h3>
              <div className="space-y-4 text-gray-700">
                <p>For all return and refund inquiries, please contact us immediately:</p>
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-2">WhatsApp (Preferred)</h4>
                      <p className="text-blue-700">+91 9914632817</p>
                      <p className="text-sm text-blue-600 mt-1">Available 24/7 for quick response</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-2">Email</h4>
                      <p className="text-blue-700">jyotipublicationbooks@gmail.com</p>
                      <p className="text-sm text-blue-600 mt-1">Response within 24 hours</p>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  <strong>Note:</strong> WhatsApp is our preferred communication method for faster processing of return
                  requests and real-time updates on your refund status.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
