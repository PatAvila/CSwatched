"use client";

import { useEffect, useRef, Dispatch, SetStateAction } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { analytics } from '../utils/analytics';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/shop', label: 'Shop All' },
  { href: '/brands', label: 'Brands' },
  { href: '/shop/skincare', label: 'Skincare' },
  { href: '/shop/makeup', label: 'Makeup' },
  { href: '/shop/lipcare', label: 'Lipcare' },
  { href: '/shop/nails', label: 'Nails' },
  { href: '/shop/accessories', label: 'Accessories' },
];

// Define props for MobileNav
interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

// Accept isOpen and setIsOpen as props
export default function MobileNav({ isOpen, setIsOpen }: MobileNavProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const firstMenuItemRef = useRef<HTMLAnchorElement>(null);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'Escape':
          setIsOpen(false);
          analytics.trackEvent({
            action: 'close_menu',
            category: 'Navigation',
            label: 'keyboard_escape',
          });
          break;
        case 'Tab':
          // Adjusted Tab handling since first item is now a button in the header
          if (e.shiftKey && document.activeElement?.getAttribute('aria-label') === 'Close menu') {
             e.preventDefault();
             // Optionally focus the last tabbable element in the drawer or the backdrop
          }
           // Add logic to loop focus within the drawer if needed
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, setIsOpen]); // Add setIsOpen to dependencies

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        analytics.trackEvent({
          action: 'close_menu',
          category: 'Navigation',
          label: 'click_outside',
        });
      }
    };

    // Only add event listener if menu is open
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, setIsOpen]); // Add setIsOpen to dependency array

  // Removed toggleMenu function as state is managed externally

  const handleItemClick = (label: string) => {
    setIsOpen(false);
    analytics.trackNavigation(`/mobile-nav/${label.toLowerCase().replace(/\s+/g, '-')}`);
  };

  return (
    <div className="lg:hidden" ref={menuRef} data-testid="mobile-nav">
      {/* No button here - triggered externally */}

      {/* Slide-out Drawer - controlled by isOpen prop */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setIsOpen(false);
                analytics.trackEvent({
                  action: 'close_menu',
                  category: 'Navigation',
                  label: 'backdrop_click',
                });
              }}
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              data-testid="menu-backdrop"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '-100%' }} // Slide from left
              animate={{ x: 0 }}
              exit={{ x: '-100%' }} // Slide out to left
              transition={{ type: 'spring', damping: 20 }}
              className="fixed left-0 top-0 h-full w-64 bg-black z-50 p-6 flex flex-col" // Position on left
              role="navigation"
              aria-label="Mobile menu"
              data-testid="menu-drawer"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  {/* Close button */}
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-white hover:text-pink-400 transition-colors"
                    aria-label="Close menu"
                  >
                    <X size={24} />
                  </button>
                  {/* SWATCHED text */}
                  <span className="text-xl font-light tracking-wide text-white ml-2">SWATCHED</span>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col space-y-4 flex-grow">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-white hover:text-pink-400 transition-colors text-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-black rounded"
                    onClick={() => handleItemClick(item.label)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
} 