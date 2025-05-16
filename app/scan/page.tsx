import Layout from "@/components/layout/Layout"
import { Button } from "@/components/ui/button"
import { Camera, Upload, Info } from "lucide-react"
import Link from "next/link"

export default function ScanPage() {
  return (
    <Layout>
      <div className="container px-4 py-8 mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">AI Face Scan</h1>
            <p className="mt-2 text-gray-600">
              Let our AI analyze your unique features to find your perfect beauty matches.
            </p>
          </div>

          <div className="mt-8 overflow-hidden bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg">
            <div className="p-6 md:p-8">
              <div className="relative aspect-video bg-white rounded-lg border-2 border-dashed border-gray-300 flex flex-col items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="/placeholder.svg?height=400&width=600&text=Camera+Preview&fontsize=24&textcolor=%23d946ef&bgcolor=%23fdf2f8"
                    alt="Camera preview"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                  <div className="text-center text-white p-6">
                    <Camera className="w-16 h-16 mx-auto mb-4" />
                    <h3 className="text-xl font-bold">Ready to Scan</h3>
                    <p className="mt-2">Position your face in the frame and ensure good lighting</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-pink-600 hover:bg-pink-700">
                  <Camera className="mr-2 h-4 w-4" />
                  Start Scan
                </Button>
                <Button variant="outline">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Photo
                </Button>
              </div>

              <div className="mt-8 bg-white p-4 rounded-lg border">
                <div className="flex items-start">
                  <Info className="flex-shrink-0 w-5 h-5 mt-0.5 mr-3 text-pink-600" />
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Tips for Best Results</h3>
                    <ul className="mt-2 text-sm text-gray-600 space-y-2">
                      <li>• Ensure your face is well-lit with natural light if possible</li>
                      <li>• Remove glasses, hats, or anything that covers your face</li>
                      <li>• Look directly at the camera with a neutral expression</li>
                      <li>• If using makeup, scan both with and without for different recommendations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Not comfortable with face scanning?{" "}
              <Link href="/quiz" className="text-pink-600 hover:text-pink-700 font-medium">
                Take our beauty quiz instead
              </Link>
            </p>
          </div>

          <div className="mt-12 bg-white p-6 rounded-lg border">
            <h2 className="text-xl font-bold text-gray-900">How It Works</h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-pink-600 font-bold">1</span>
                </div>
                <h3 className="mt-4 text-sm font-medium text-gray-900">Scan Your Face</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Our AI captures your unique features, skin tone, and undertones.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-pink-600 font-bold">2</span>
                </div>
                <h3 className="mt-4 text-sm font-medium text-gray-900">AI Analysis</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Advanced algorithms analyze your features and match them to our product database.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-pink-600 font-bold">3</span>
                </div>
                <h3 className="mt-4 text-sm font-medium text-gray-900">Get Recommendations</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Receive personalized product matches with percentage match scores.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/how-it-works" className="text-sm text-pink-600 hover:text-pink-700 font-medium">
              Learn more about our technology and privacy
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
