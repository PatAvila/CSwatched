import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function BetaAccessPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex flex-col items-center justify-center flex-1 px-4 py-12">
        <div className="w-full max-w-md">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-pink-600">SWATCHED</h1>
            <p className="mt-2 text-sm text-gray-600">
              AI-powered beauty recommendations tailored to your unique features.
            </p>
          </div>

          <div className="mt-8">
            <form className="space-y-6">
              <div>
                <Input type="email" placeholder="Email address" required />
              </div>
              <div>
                <Input type="password" placeholder="Password" required />
              </div>
              <div>
                <Button className="w-full bg-pink-600 hover:bg-pink-700">Friends & Family Login</Button>
              </div>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don't have access?{" "}
                <Link href="/waitlist" className="font-medium text-pink-600 hover:text-pink-500">
                  Join the waitlist
                </Link>
              </p>
            </div>

            <div className="mt-8 text-center">
              <p className="text-xs text-gray-500">
                For brand partnership inquiries, please contact{" "}
                <a href="mailto:partners@swatched.com" className="text-pink-600">
                  partners@swatched.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
