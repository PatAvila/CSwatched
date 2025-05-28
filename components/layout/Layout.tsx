import type React from "react"
import { Dispatch, SetStateAction } from "react"
import Footer from "./Footer"
import MobileNavigation from "./MobileNavigation"

interface LayoutProps {
  children: React.ReactNode
  isMobileMenuOpen: boolean
  setIsMobileMenuOpen: Dispatch<SetStateAction<boolean>>
}

export default function Layout({ children, isMobileMenuOpen, setIsMobileMenuOpen }: LayoutProps) {
  return (
    <>
      {children}
      <Footer />
      <MobileNavigation isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
    </>
  )
}
