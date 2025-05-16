import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-bold text-pink-600">SWATCHED</h3>
            <p className="mt-4 text-sm text-gray-600">
              Discover your perfect beauty match with our AI-powered recommendations.
            </p>
            <div className="flex mt-4 space-x-4">
              <Link href="#" className="text-gray-500 hover:text-pink-600">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-pink-600">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-pink-600">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900">Shop</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/shop" className="text-sm text-gray-600 hover:text-pink-600">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/brands" className="text-sm text-gray-600 hover:text-pink-600">
                  All Brands
                </Link>
              </li>
              <li>
                <Link href="/shop/foundation" className="text-sm text-gray-600 hover:text-pink-600">
                  Foundation
                </Link>
              </li>
              <li>
                <Link href="/shop/concealer" className="text-sm text-gray-600 hover:text-pink-600">
                  Concealer
                </Link>
              </li>
              <li>
                <Link href="/shop/powder" className="text-sm text-gray-600 hover:text-pink-600">
                  Powder
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-pink-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-sm text-gray-600 hover:text-pink-600">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-gray-600 hover:text-pink-600">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/brand-partnership" className="text-sm text-gray-600 hover:text-pink-600">
                  Brand Partnership
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900">Support</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/customer-service" className="text-sm text-gray-600 hover:text-pink-600">
                  Customer Service
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-sm text-gray-600 hover:text-pink-600">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-gray-600 hover:text-pink-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-gray-600 hover:text-pink-600">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/accessibility" className="text-sm text-gray-600 hover:text-pink-600">
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-gray-200">
          <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} Swatched. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
