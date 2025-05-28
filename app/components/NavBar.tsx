"use client";

import Link from "next/link";
import MobileNav from "./MobileNav";
import { Heart, ShoppingCart, User } from 'lucide-react';
import SearchBar from './SearchBar';
import { useState } from 'react';

const navLinks = [
  { href: '/shop', label: 'Shop All' },
  { href: '/brands', label: 'Brands' },
  { href: '/shop/skincare', label: 'Skincare' },
  { href: '/shop/makeup', label: 'Makeup' },
  { href: '/shop/lipcare', label: 'Lipcare' },
  { href: '/shop/nails', label: 'Nails' },
  { href: '/shop/accessories', label: 'Accessories' },
];

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full z-50 relative">
      {/* Primary Header Row (Fixed) - White background, Black text/icons */}
      <div className="fixed top-0 left-0 right-0 z-50 w-full bg-white border-b border-gray-200 h-16">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          {/* Left section with logo and mobile nav */}
          <div className="flex items-center">
            <MobileNav isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
            <div className="ml-4 lg:ml-0">
              <Link href="/">
                <h1 className="text-2xl font-light tracking-wide text-black">SWATCHED</h1>
              </Link>
            </div>
          </div>

          {/* Center section with search bar */}
          <div className="hidden md:flex flex-1 justify-center px-4 lg:px-0">
            <SearchBar />
          </div>

          {/* Right section with icons */}
          <div className="flex items-center space-x-4">
            <Link href="/wishlist" className="text-black hover:text-pink-400 transition">
              <Heart size={24} />
            </Link>
            <Link href="/cart" className="text-black hover:text-pink-400 transition">
              <ShoppingCart size={24} />
            </Link>
            <Link href="/account" className="text-black hover:text-pink-400 transition">
              <User size={24} />
            </Link>
          </div>
        </div>
      </div>

      {/* Secondary Navigation Row (Desktop Only - Fixed Below Primary) - Black background, White text */}
      <div className="hidden lg:flex fixed top-[64px] left-0 right-0 z-40 w-full items-center justify-center gap-6 h-10 px-2 bg-black text-white border-t border-gray-700">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="text-sm font-medium hover:text-pink-400 transition">
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
} 