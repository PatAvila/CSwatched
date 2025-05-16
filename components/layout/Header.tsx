"use client"

import React from "react"
import { Search, Camera, ShoppingBag, User, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold text-pink-600">SWATCHED</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium hover:text-pink-600">
            Home
          </Link>
          <Link href="/shop" className="text-sm font-medium hover:text-pink-600">
            Shop
          </Link>
          <Link href="/brands" className="text-sm font-medium hover:text-pink-600">
            Brands
          </Link>
          <Link href="/how-it-works" className="text-sm font-medium hover:text-pink-600">
            How It Works
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Camera className="h-5 w-5" />
            <span className="sr-only">AI Scan</span>
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingBag className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b">
          <div className="container px-4 py-3">
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="px-4 py-2 text-sm font-medium hover:bg-gray-50 rounded-md">
                Home
              </Link>
              <Link href="/shop" className="px-4 py-2 text-sm font-medium hover:bg-gray-50 rounded-md">
                Shop
              </Link>
              <Link href="/brands" className="px-4 py-2 text-sm font-medium hover:bg-gray-50 rounded-md">
                Brands
              </Link>
              <Link href="/how-it-works" className="px-4 py-2 text-sm font-medium hover:bg-gray-50 rounded-md">
                How It Works
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
