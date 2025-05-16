import { Camera } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CallToActionScan() {
  return (
    <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-6 md:p-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900">Ready to Find Your Perfect Beauty Match?</h2>
        <p className="mt-2 text-gray-600">
          Our AI technology analyzes your unique features to recommend products that work for you.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
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
  )
}
