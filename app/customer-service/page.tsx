import Layout from "@/components/layout/Layout"
import { Button } from "@/components/ui/button"
import { MessageCircle, Mail, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CustomerServicePage() {
  return (
    <Layout>
      <div className="container px-4 py-8 mx-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-gray-900">CUSTOMER SERVICE</h1>

          <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
            <Link href="/privacy" className="p-6 transition-colors border rounded-lg hover:bg-gray-50">
              <h2 className="text-lg font-medium text-gray-900">PRIVACY POLICY</h2>
              <p className="mt-2 text-sm text-gray-600">
                Learn about how we collect, use, and protect your personal information.
              </p>
              <div className="flex items-center mt-4 text-pink-600">
                <span className="text-sm font-medium">Read more</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>

            <Link href="/terms" className="p-6 transition-colors border rounded-lg hover:bg-gray-50">
              <h2 className="text-lg font-medium text-gray-900">TERMS OF USE</h2>
              <p className="mt-2 text-sm text-gray-600">
                Review the terms and conditions that govern your use of our services.
              </p>
              <div className="flex items-center mt-4 text-pink-600">
                <span className="text-sm font-medium">Read more</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>

            <Link href="/returns" className="p-6 transition-colors border rounded-lg hover:bg-gray-50">
              <h2 className="text-lg font-medium text-gray-900">RETURNS & EXCHANGES</h2>
              <p className="mt-2 text-sm text-gray-600">
                Information about our return policy and how to process a return or exchange.
              </p>
              <div className="flex items-center mt-4 text-pink-600">
                <span className="text-sm font-medium">Read more</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>

            <Link href="/accessibility" className="p-6 transition-colors border rounded-lg hover:bg-gray-50">
              <h2 className="text-lg font-medium text-gray-900">ACCESSIBILITY</h2>
              <p className="mt-2 text-sm text-gray-600">
                Learn about our commitment to making our website accessible to all users.
              </p>
              <div className="flex items-center mt-4 text-pink-600">
                <span className="text-sm font-medium">Read more</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>

            <Link href="/privacy-choices" className="p-6 transition-colors border rounded-lg hover:bg-gray-50">
              <h2 className="text-lg font-medium text-gray-900">YOUR PRIVACY CHOICES</h2>
              <p className="mt-2 text-sm text-gray-600">
                Manage your privacy preferences and control how your data is used.
              </p>
              <div className="flex items-center mt-4 text-pink-600">
                <span className="text-sm font-medium">Read more</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>

            <Link href="/contact" className="p-6 transition-colors border rounded-lg hover:bg-gray-50">
              <h2 className="text-lg font-medium text-gray-900">CONTACT US</h2>
              <p className="mt-2 text-sm text-gray-600">
                Get in touch with our customer service team for any questions or concerns.
              </p>
              <div className="flex items-center mt-4 text-pink-600">
                <span className="text-sm font-medium">Read more</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-2">
            <div className="p-6 text-center bg-gray-50 rounded-lg">
              <MessageCircle className="w-8 h-8 mx-auto text-pink-600" />
              <h2 className="mt-4 text-lg font-medium text-gray-900">Live Chat</h2>
              <p className="mt-2 text-sm text-gray-600">
                Chat with our customer service team in real-time for immediate assistance.
              </p>
              <Button className="mt-4 bg-pink-600 hover:bg-pink-700">Start Chat</Button>
              <p className="mt-2 text-xs text-gray-500">Available Monday-Friday, 9am-5pm EST</p>
            </div>

            <div className="p-6 text-center bg-gray-50 rounded-lg">
              <Mail className="w-8 h-8 mx-auto text-pink-600" />
              <h2 className="mt-4 text-lg font-medium text-gray-900">Email Us</h2>
              <p className="mt-2 text-sm text-gray-600">Send us an email and we'll get back to you within 24 hours.</p>
              <Button className="mt-4 bg-pink-600 hover:bg-pink-700">Send Email</Button>
              <p className="mt-2 text-xs text-gray-500">support@swatched.com</p>
            </div>
          </div>

          <div className="p-6 mt-12 text-center bg-pink-50 rounded-lg">
            <h2 className="text-xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <div className="mt-6 space-y-4 text-left">
              {[
                {
                  question: "How does the face scanning technology work?",
                  answer:
                    "Our AI technology analyzes your facial features, skin tone, and undertones to recommend products that match your unique characteristics.",
                },
                {
                  question: "Is my facial data secure?",
                  answer:
                    "Yes, your facial data is processed securely and is never shared with third parties without your explicit consent.",
                },
                {
                  question: "How do I return a product?",
                  answer:
                    "You can initiate a return through your account dashboard within 30 days of purchase. Visit our Returns & Exchanges page for more details.",
                },
                {
                  question: "Can I use Swatched on mobile devices?",
                  answer:
                    "Yes, Swatched is fully optimized for mobile devices, allowing you to scan your face and shop on the go.",
                },
                {
                  question: "How accurate are the product recommendations?",
                  answer:
                    "Our AI technology has been trained on thousands of skin tones and features, providing highly accurate recommendations for most users.",
                },
              ].map((faq, index) => (
                <div key={index} className="p-4 border rounded-md">
                  <h3 className="text-sm font-medium text-gray-900">{faq.question}</h3>
                  <p className="mt-2 text-sm text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>

            <Button asChild variant="outline" className="mt-6">
              <Link href="/faq">View All FAQs</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  )
}
