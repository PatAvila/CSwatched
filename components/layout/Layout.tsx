import type React from "react"
import Footer from "./Footer"
import MobileNavigation from "./MobileNavigation"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow pb-16 md:pb-0">{children}</main>
      <Footer />
      <MobileNavigation />
    </div>
  )
}
