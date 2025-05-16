import Link from "next/link";
import { Search, Heart, ShoppingCart, User } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        {/* Logo */}
        <Link href="/" className="text-3xl font-bold tracking-tight text-gray-900">SWATCHED</Link>
        {/* Search Bar */}
        <form className="flex-1 max-w-lg mx-8 flex relative">
          <input
            type="search"
            placeholder="Ask me anything..."
            className="w-full rounded-full border border-gray-300 py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <button type="submit" className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <Search className="h-5 w-5" />
          </button>
        </form>
        {/* Icons */}
        <div className="flex items-center gap-4 ml-4">
          <Link href="/wishlist" className="hover:text-pink-600"><Heart className="h-6 w-6" /></Link>
          <Link href="/cart" className="hover:text-pink-600"><ShoppingCart className="h-6 w-6" /></Link>
          <Link href="/account" className="hover:text-pink-600"><User className="h-6 w-6" /></Link>
        </div>
      </div>
    </header>
  );
} 