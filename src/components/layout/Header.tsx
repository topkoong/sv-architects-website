/**
 * ============================================================================
 * FILE: src/components/layout/Header.tsx
 * ============================================================================
 * DESCRIPTION: Modern Header Navigation Component for SV Architects website
 * Clean, minimalist design with proper logo and improved functionality
 * ============================================================================
 */

'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

/**
 * ============================================================================
 * NAVIGATION ITEMS CONFIGURATION
 * ============================================================================
 */
const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/team', label: 'Team' },
  { href: '/career', label: 'Career' },
  { href: '/contact', label: 'Contact' },
] as const;

/**
 * ============================================================================
 * HEADER COMPONENT
 * ============================================================================
 */
export const Header = () => {
  // State management
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Refs
  const menuRef = useRef<HTMLDivElement>(null);
  
  // Get current pathname for active link highlighting
  const pathname = usePathname();

  /**
   * Scroll effect - with debouncing for better performance
   */
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /**
   * Mobile menu effects
   */
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    // Handle click outside
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    // Handle escape key
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    // Add event listeners
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    
    // Prevent body scroll when menu is open
    document.body.style.overflow = 'hidden';

    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  /**
   * Close mobile menu callback
   */
  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  /**
   * Toggle mobile menu callback
   */
  const toggleMobileMenu = useCallback(() => {
    console.log('Toggle mobile menu clicked, current state:', isMobileMenuOpen);
    setIsMobileMenuOpen(prev => !prev);
  }, [isMobileMenuOpen]);

  /**
   * Check if link is active
   */
  const isActiveLink = useCallback((href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname?.startsWith(href);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200' 
          : 'bg-white/90 backdrop-blur-sm'
        }
      `}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* ===== LOGO ===== */}
          <Link 
            href="/" 
            className="flex items-center group z-50"
            onClick={closeMobileMenu}
            aria-label="SV Architects Home"
          >
            <Image
              src="/images/logos/logo-sv-black.png"
              alt="SV Architects Logo"
              width={120}
              height={40}
              className="h-8 w-auto transition-transform duration-200 group-hover:scale-105"
              priority
            />
          </Link>

          {/* ===== DESKTOP NAVIGATION ===== */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main navigation">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  text-sm font-medium tracking-wide
                  transition-colors duration-200
                  relative group
                  ${isActiveLink(item.href)
                    ? 'text-black font-semibold'
                    : 'text-gray-800 hover:text-black'
                  }
                `}
                aria-current={isActiveLink(item.href) ? 'page' : undefined}
              >
                {item.label}
                <span className={`
                  absolute bottom-[-2px] left-0 h-px bg-black
                  transition-all duration-200
                  ${isActiveLink(item.href)
                    ? 'w-full'
                    : 'w-0 group-hover:w-full'
                  }
                `} />
              </Link>
            ))}
          </nav>

          {/* ===== MOBILE MENU BUTTON ===== */}
          <button
            onClick={toggleMobileMenu}
            className="
              md:hidden p-2 text-gray-800
              hover:text-black transition-colors
              rounded-md hover:bg-gray-100
              z-50 relative
              focus:outline-none focus:ring-2 focus:ring-gray-300
            "
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            type="button"
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="pointer-events-none"
            >
              {isMobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </motion.div>
          </button>
        </div>
      </div>

      {/* ===== MOBILE MENU DRAWER ===== */}
      <AnimatePresence mode="wait">
        {isMobileMenuOpen && (
          <motion.nav
            id="mobile-menu"
            ref={menuRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="
              md:hidden fixed
              top-16 left-0 right-0
              bg-white shadow-lg z-40
              border-b border-gray-100
            "
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col p-4 space-y-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={`
                    block py-3 px-4 text-sm font-medium
                    rounded-md transition-colors
                    ${isActiveLink(item.href)
                      ? 'text-black bg-gray-50'
                      : 'text-gray-600 hover:text-black hover:bg-gray-50'
                    }
                  `}
                  aria-current={isActiveLink(item.href) ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};