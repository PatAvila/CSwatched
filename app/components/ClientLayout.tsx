'use client'

import { useEffect, useState } from 'react'
import NavBar from './NavBar'
import MobileNav from './MobileNav'
// import Layout from '../../components/layout/Layout'
import Footer from '../../components/layout/Footer';
import MobileNavigation from '../../components/layout/MobileNavigation';

import { Dispatch, SetStateAction } from 'react'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mounted, setMounted] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      <NavBar />
      {/* Removed MobileNav component directly from here */}
      {/* Main content area with padding for fixed header */}
      <main className="pt-[64px] lg:pt-[104px] pb-16 md:pb-0">
        {children}
      </main>
      {/* Footer and Mobile Navigation are now directly in ClientLayout */}
      <Footer />
      <MobileNavigation isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
      {/* Mobile Navigation Menu */}
      <MobileNav isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
    </>
  )
} 