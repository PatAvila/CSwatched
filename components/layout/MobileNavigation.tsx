"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Search, Camera, ShoppingBag, User, MousePointer2, Sparkles, HelpCircle } from "lucide-react"
import { Dispatch, SetStateAction, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SearchBar from '@/app/components/SearchBar';

interface MobileNavigationProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export default function MobileNavigation({ isMobileMenuOpen, setIsMobileMenuOpen }: MobileNavigationProps) {
  const pathname = usePathname()
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const isActive = (path: string) => {
    return pathname === path
  }

  const navItems = [
    { name: "Navigation", href: "/", icon: MousePointer2 },
    { name: "Search", href: "#", icon: Search },
    { name: "Face Analysis", href: "/scan", icon: Camera },
    { name: "Take Quiz", href: "/quiz", icon: Sparkles },
    { name: "Support", href: "https://example.com/support", icon: HelpCircle },
  ]

  return (
    <>
      <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t md:hidden">
        <div className="grid h-full grid-cols-5">
          {navItems.map((item) => {
            const Icon = item.icon
            const active = isActive(item.href)

            if (item.name === "Navigation") {
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex flex-col items-center justify-center ${active ? "text-pink-600" : "text-gray-500"}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMobileMenuOpen(!isMobileMenuOpen);
                  }}
                >
                  <Icon className={`h-6 w-6 ${active ? "text-pink-600" : "text-gray-500"}`} />
                  <span className="text-xs mt-1">{item.name}</span>
                </Link>
              )
            }

            if (item.name === "Search") {
              return (
                <button
                  key={item.name}
                  onClick={() => setIsSearchModalOpen(true)}
                  className={`flex flex-col items-center justify-center ${active ? "text-pink-600" : "text-gray-500"}`}
                >
                  <Icon className={`h-6 w-6 ${active ? "text-pink-600" : "text-gray-500"}`} />
                  <span className="text-xs mt-1">{item.name}</span>
                </button>
              )
            }

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex flex-col items-center justify-center ${active ? "text-pink-600" : "text-gray-500"}`}
                target={item.name === "Support" ? "_blank" : undefined}
                rel={item.name === "Support" ? "noopener noreferrer" : undefined}
              >
                <Icon className={`h-6 w-6 ${active ? "text-pink-600" : "text-gray-500"}`} />
                <span className="text-xs mt-1">{item.name}</span>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Search Modal */}
      <AnimatePresence>
        {isSearchModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-[60] flex items-start justify-center pt-20"
            onClick={() => setIsSearchModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg w-full max-w-md mx-4 p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <SearchBar />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
