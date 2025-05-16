"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Search, Camera, ShoppingBag, User } from "lucide-react"

export default function MobileNavigation() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Shop", href: "/shop", icon: Search },
    { name: "Scan", href: "/scan", icon: Camera },
    { name: "Cart", href: "/cart", icon: ShoppingBag },
    { name: "Account", href: "/account", icon: User },
  ]

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t md:hidden">
      <div className="grid h-full grid-cols-5">
        {navItems.map((item) => {
          const Icon = item.icon
          const active = isActive(item.href)

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center justify-center ${active ? "text-pink-600" : "text-gray-500"}`}
            >
              <Icon className={`h-6 w-6 ${active ? "text-pink-600" : "text-gray-500"}`} />
              <span className="text-xs mt-1">{item.name}</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
