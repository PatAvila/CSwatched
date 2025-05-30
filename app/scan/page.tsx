"use client";

import Layout from "@/components/layout/Layout"
import { Button } from "@/components/ui/button"
import { Camera, Upload, Info, X, User, EyeOff, Lightbulb, ChevronLeft } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"
import type { CheckedState } from "@radix-ui/react-checkbox"

export default function ScanPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scanPhase, setScanPhase] = useState('initial') // 'initial', 'consenting', 'upload', 'live-scan', 'analyzing', 'results'
  const [isChecked, setIsChecked] = useState(false); // State for the consent checkbox
  const searchParams = useSearchParams()

  useEffect(() => {
    if (searchParams.get('modal') === 'open') {
      setScanPhase('consenting')
    }
  }, [searchParams])

  const handleCloseModal = () => {
    setScanPhase('initial');
  };

  // Placeholder functions for scan actions
  const handleUploadClick = () => {
    // Simulate changing to upload phase
    setScanPhase('upload');
  };

  const handleLiveScanClick = () => {
    // Simulate changing to live scan phase
    setScanPhase('live-scan');
  };

  const handleCheckedChange = (checked: CheckedState) => {
    if (typeof checked === 'boolean') {
      setIsChecked(checked);
    }
  };

  // Placeholder for analysis and results logic
  const simulateAnalysis = () => {
    setScanPhase('analyzing');
    setTimeout(() => {
      setScanPhase('results');
    }, 3000); // Simulate analysis time
  };

  return (
    <Layout isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen}>
      <div className="container px-4 py-8 mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">AI Face Scan</h1>
            <p className="mt-2 text-gray-600">
              Let our AI analyze your unique features to find your perfect beauty matches.
            </p>
          </div>

          {/* Main Scan Page Content (Visible when modal is not open) */}
          {scanPhase === 'initial' && (
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
                  {/* These buttons will now open the modal */}
                  <Button className="bg-pink-600 hover:bg-pink-700" onClick={() => setScanPhase('consenting')}>
                    <Camera className="mr-2 h-4 w-4" />
                    Start Scan
                  </Button>
                  <Button variant="outline" onClick={() => setScanPhase('consenting')}>
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
          )}

          {/* How It Works and Quiz Link (Always Visible) */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Not comfortable with face scanning()?{" "}
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

      {/* Face Analysis Modal */}
      <Dialog open={scanPhase !== 'initial'} onOpenChange={(open) => { if (!open) handleCloseModal(); }}>
        <DialogContent className="sm:max-w-[425px]">
          {/* Custom Header with Back and Close Buttons */}
          <div className="flex items-center justify-between p-4 border-b">
            {scanPhase !== 'consenting' && (
              <Button variant="ghost" size="icon" onClick={() => setScanPhase('consenting')}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
            )}
            {scanPhase === 'consenting' && (
              <div className="w-4"></div> // Placeholder for alignment
            )}
            {/* Placeholder for Logo/Title */}
            <div className="flex-grow text-center font-bold">Face Analysis</div>
            <Button variant="ghost" size="icon" onClick={handleCloseModal}>
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Accessibility Title (Visually Hidden) */}
          <DialogTitle className="sr-only">Face Analysis Modal</DialogTitle>

          {scanPhase === 'consenting' && (
            <div className="p-6 flex flex-col h-full overflow-y-auto">
              {/* Content for Consenting Phase */}
              <h3 className="text-sm font-medium text-gray-900 mb-2">Tips for Best Results</h3>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Ensure your face is well-lit with natural light if possible</li>
                <li>• Remove glasses, hats, or anything that covers your face</li>
                <li>• Look directly at the camera with a neutral expression</li>
                <li>• If using makeup, scan both with and without for different recommendations</li>
              </ul>

              {/* Consent Checkbox */}
              <div className="flex items-start space-x-2 mb-6">
                <Checkbox id="consent" checked={isChecked} onCheckedChange={handleCheckedChange} />
                <label
                  htmlFor="consent"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I declare that I am over 18 years of age and can use this tool in accordance with the terms and conditions and the 'Privacy Notice for Clients'.
                   I have read and accept the 'Terms and Conditions' and the 'Privacy Notice for Clients'.
                </label>
              </div>

              {/* Buttons styled to look like the example, disabled based on checkbox state */}
              <Button className="w-full mb-3 bg-gray-900 text-white hover:bg-gray-800" onClick={handleLiveScanClick} disabled={!isChecked}>
                <Camera className="mr-2 h-4 w-4" /> Live Analysis
              </Button>
              <Button variant="outline" className="w-full border-gray-300 bg-gray-900 text-white hover:bg-gray-800" onClick={handleUploadClick} disabled={!isChecked}>
                <Upload className="mr-2 h-4 w-4" /> Upload Photo
              </Button>
            </div>
          )}

          {scanPhase === 'upload' && (
            <div className="p-6 flex flex-col h-full overflow-y-auto">
              {/* Content for Upload Phase */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">INSTRUCTIONS FOR UPLOADING PHOTO</h3>

              <div className="space-y-4 mb-6">
                {/* Instruction 1 */}
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 text-gray-700">
                    {/* Placeholder Icon for face */} <User className="h-5 w-5" />
                  </div>
                  <p className="text-sm text-gray-700">Use a photo where your face is visible from the front.</p>
                </div>
                {/* Instruction 2 */}
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 text-gray-700">
                     {/* Placeholder Icon for no obstruction */} <EyeOff className="h-5 w-5" />
                  </div>
                  <p className="text-sm text-gray-700">Make sure nothing obstructs your face.</p>
                </div>
                {/* Instruction 3 */}
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 text-gray-700">
                     {/* Placeholder Icon for lighting */} <Lightbulb className="h-5 w-5" />
                  </div>
                  <p className="text-sm text-gray-700">Ensure adequate lighting.</p>
                </div>
              </div>

              {/* Upload Button */}
              <Button className="w-full bg-gray-900 text-white hover:bg-gray-800" onClick={simulateAnalysis}>
                <Upload className="mr-2 h-4 w-4" /> Upload Photo
              </Button>

            </div>
          )}

          {scanPhase === 'live-scan' && (
            <div className="p-6 flex flex-col h-full overflow-y-auto">
              {/* Content for Live Scan Phase */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">INSTRUCTIONS FOR LIVE SCAN</h3>

              <div className="space-y-4 mb-6">
                {/* Instruction 1: Position face */}
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 text-gray-700">
                     <User className="h-5 w-5" />
                  </div>
                  <p className="text-sm text-gray-700">Position your face in the frame.</p>
                </div>
                {/* Instruction 2: No obstruction */}
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 text-gray-700">
                     <EyeOff className="h-5 w-5" />
                  </div>
                  <p className="text-sm text-gray-700">Ensure nothing obstructs your face.</p>
                </div>
                {/* Instruction 3: Good lighting */}
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 text-gray-700">
                     <Lightbulb className="h-5 w-5" />
                  </div>
                  <p className="text-sm text-gray-700">Ensure adequate lighting.</p>
                </div>
              </div>

              {/* Start Scan Button */}
              <Button className="w-full bg-gray-900 text-white hover:bg-gray-800" onClick={simulateAnalysis}>
                <Camera className="mr-2 h-4 w-4" /> Start Scan
              </Button>

            </div>
          )}

          {scanPhase === 'analyzing' && (
            <div>
              <p>Analyzing...</p>
              {/* Add a spinner or progress indicator */}
            </div>
          )}

          {scanPhase === 'results' && (
            <div>
              <p>Analysis results go here...</p>
              <Button>View Product Matches</Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  )
}
