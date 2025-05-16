import Layout from "@/components/layout/Layout"
import { Button } from "@/components/ui/button"
import { Camera, ShieldCheck, Lock, FileText } from "lucide-react"
import Link from "next/link"

export default function HowItWorksPage() {
  return (
    <Layout>
      <div className="container px-4 py-8 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">How Our Face Analysis Works</h1>
          <p className="mt-4 text-lg text-gray-600">
            Our AI-powered technology helps you find your perfect beauty match.
          </p>
        </div>

        {/* Face Scanning Visualization */}
        <div className="relative max-w-2xl mx-auto mt-12">
          <div className="overflow-hidden bg-gray-100 rounded-lg aspect-video">
            <img
              src="/placeholder.svg?height=400&width=800&text=Face+Scanning+Visualization&fontsize=24&textcolor=%23d946ef&bgcolor=%23fdf2f8"
              alt="Face scanning visualization"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* How It Works Steps */}
        <div className="max-w-4xl mx-auto mt-16">
          <h2 className="text-2xl font-bold text-center text-gray-900">How Beauty Match AI Works</h2>

          <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-3">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-white bg-pink-600 rounded-full">
                <Camera className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Scan or Quiz</h3>
              <p className="mt-2 text-sm text-gray-600">
                Take a selfie with our AI scanner or complete our beauty quiz to help us understand your unique
                features.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-white bg-pink-600 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
                  <path d="M12 2v4" />
                  <path d="M12 18v4" />
                  <path d="M4.93 4.93l2.83 2.83" />
                  <path d="M16.24 16.24l2.83 2.83" />
                  <path d="M2 12h4" />
                  <path d="M18 12h4" />
                  <path d="M4.93 19.07l2.83-2.83" />
                  <path d="M16.24 7.76l2.83-2.83" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">AI Analysis</h3>
              <p className="mt-2 text-sm text-gray-600">
                Our advanced AI analyzes your skin tone, undertones, facial features, and preferences to create your
                beauty profile.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-white bg-pink-600 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Perfect Matches</h3>
              <p className="mt-2 text-sm text-gray-600">
                Get personalized product recommendations that are scientifically matched to your unique features and
                preferences.
              </p>
            </div>
          </div>
        </div>

        {/* Privacy Section */}
        <div className="max-w-4xl p-8 mx-auto mt-16 bg-gray-50 rounded-lg">
          <div className="flex items-center mb-6">
            <ShieldCheck className="w-8 h-8 mr-3 text-pink-600" />
            <h2 className="text-2xl font-bold text-gray-900">Your Privacy Matters</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex">
              <Lock className="flex-shrink-0 w-5 h-5 mt-1 mr-3 text-pink-600" />
              <div>
                <h3 className="text-sm font-medium text-gray-900">Secure Processing</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Your facial scan is processed securely on our servers and is never stored without your permission.
                </p>
              </div>
            </div>

            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 w-5 h-5 mt-1 mr-3 text-pink-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <line x1="17" y1="8" x2="23" y2="8" />
                <line x1="20" y1="5" x2="20" y2="11" />
              </svg>
              <div>
                <h3 className="text-sm font-medium text-gray-900">No Third-Party Sharing</h3>
                <p className="mt-1 text-sm text-gray-600">
                  We never share your facial data or personal information with third parties without your explicit
                  consent.
                </p>
              </div>
            </div>

            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 w-5 h-5 mt-1 mr-3 text-pink-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <path d="M14 2v6h6" />
                <path d="M9 15h6" />
                <path d="M9 11h6" />
              </svg>
              <div>
                <h3 className="text-sm font-medium text-gray-900">Data Deletion</h3>
                <p className="mt-1 text-sm text-gray-600">
                  You can request the deletion of your data at any time through your account settings.
                </p>
              </div>
            </div>

            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 w-5 h-5 mt-1 mr-3 text-pink-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <div>
                <h3 className="text-sm font-medium text-gray-900">Encryption</h3>
                <p className="mt-1 text-sm text-gray-600">
                  All data is encrypted both in transit and at rest using industry-standard encryption protocols.
                </p>
              </div>
            </div>

            <div className="flex">
              <FileText className="flex-shrink-0 w-5 h-5 mt-1 mr-3 text-pink-600" />
              <div>
                <h3 className="text-sm font-medium text-gray-900">GDPR & CCPA Compliance</h3>
                <p className="mt-1 text-sm text-gray-600">
                  We comply with global privacy regulations including GDPR and CCPA to protect your rights.
                </p>
              </div>
            </div>

            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 w-5 h-5 mt-1 mr-3 text-pink-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <div>
                <h3 className="text-sm font-medium text-gray-900">Privacy Controls</h3>
                <p className="mt-1 text-sm text-gray-600">
                  You have full control over your privacy settings and can adjust them at any time.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Button asChild variant="outline">
              <Link href="/privacy">Read Our Full Privacy Policy</Link>
            </Button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="max-w-3xl p-8 mx-auto mt-16 text-center bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900">Ready to Find Your Perfect Beauty Match?</h2>
          <p className="mt-4 text-gray-600">
            Try our AI face scanning technology today and discover products that are perfect for you.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 mt-6 sm:flex-row">
            <Button asChild className="bg-pink-600 hover:bg-pink-700">
              <Link href="/scan">
                <Camera className="mr-2 h-4 w-4" />
                Scan My Face
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/quiz">Take Beauty Quiz</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  )
}
