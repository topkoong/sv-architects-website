/**
 * ============================================================================
 * FILE: src/components/layout/Header.tsx
 * ============================================================================
 * DESCRIPTION: Modern Header Navigation Component for SV Architects website
 * 
 * This component provides a responsive navigation header with the following features:
 * - Fixed positioning with scroll-based styling changes
 * - Desktop navigation with active link highlighting
 * - Mobile hamburger menu with smooth animations
 * - Accessibility features (ARIA labels, keyboard navigation)
 * - Logo integration with hover effects
 * - Click-outside and escape key menu closing
 * - Performance optimized scroll handling
 * 
 * TECHNICAL STACK:
 * - Next.js 16 App Router with client-side rendering
 * - Framer Motion for smooth animations
 * - Tailwind CSS for styling
 * - TypeScript for type safety
 * 
 * PERFORMANCE OPTIMIZATIONS:
 * - Debounced scroll event handling using requestAnimationFrame
 * - useCallback for memoized event handlers
 * - Passive event listeners for scroll events
 * - Conditional effect execution based on state
 * 
 * ACCESSIBILITY FEATURES:
 * - ARIA labels and roles for screen readers
 * - Keyboard navigation support (Escape key)
 * - Focus management and visual indicators
 * - Semantic HTML structure
 * 
 * @author SV Architects Development Team
 * @version 1.0.0
 * @since 2024
 * ============================================================================
 */

// Enable client-side rendering for interactive features
'use client';

// Import Framer Motion components for animations
import { AnimatePresence, motion } from 'framer-motion';
// Import React hooks for state management and side effects
import { useCallback, useEffect, useRef, useState } from 'react';

// Import Next.js Image component for optimized images
import Image from 'next/image';
// Import Next.js Link component for client-side navigation
import Link from 'next/link';
// Import Next.js hook to get current route pathname
import { usePathname } from 'next/navigation';
// Import image path helper
import { getImagePath } from '@/config/site';

/**
 * ============================================================================
 * NAVIGATION ITEMS CONFIGURATION
 * ============================================================================
 * 
 * Centralized configuration for navigation menu items
 * This array defines all the main navigation links in the header
 * 
 * STRUCTURE:
 * - href: The route path for navigation
 * - label: The display text for the navigation link
 * 
 * BENEFITS:
 * - Single source of truth for navigation structure
 * - Easy to modify menu items without touching component logic
 * - Type safety with 'as const' assertion
 * - Consistent navigation across desktop and mobile
 * ============================================================================
 */
const NAV_ITEMS = [
  { href: '/', label: 'Home' },           // Homepage route
  { href: '/about', label: 'About' },     // About us page
  { href: '/projects', label: 'Projects' }, // Projects showcase page
  { href: '/team', label: 'Team' },       // Team members page
  { href: '/career', label: 'Career' },   // Career opportunities page
  { href: '/contact', label: 'Contact' }, // Contact information page
] as const; // 'as const' ensures TypeScript treats this as a readonly tuple

/**
 * ============================================================================
 * HEADER COMPONENT
 * ============================================================================
 * 
 * Main header navigation component for the SV Architects website
 * 
 * FEATURES:
 * - Responsive design (desktop and mobile layouts)
 * - Fixed positioning with scroll-based styling
 * - Mobile hamburger menu with smooth animations
 * - Active link highlighting based on current route
 * - Accessibility compliance (WCAG 2.1)
 * - Performance optimized event handling
 * 
 * STATE MANAGEMENT:
 * - isScrolled: Tracks scroll position for styling changes
 * - isMobileMenuOpen: Controls mobile menu visibility
 * 
 * REFS:
 * - menuRef: Reference to mobile menu for click-outside detection
 * 
 * HOOKS USED:
 * - useState: Local state management
 * - useEffect: Side effects (scroll, menu management)
 * - useCallback: Memoized event handlers
 * - useRef: DOM element references
 * - usePathname: Current route detection
 * 
 * @returns {JSX.Element} The header navigation component
 * ============================================================================
 */
export const Header = () => {
  // ===== STATE MANAGEMENT =====
  
  /**
   * Track scroll position to apply different styles when scrolled
   * - false: Default transparent background
   * - true: Solid background with shadow (scrolled state)
   */
  const [isScrolled, setIsScrolled] = useState(false);
  
  /**
   * Control mobile menu visibility
   * - false: Mobile menu is closed
   * - true: Mobile menu is open
   */
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // ===== REFS =====
  
  /**
   * Reference to the mobile menu container
   * Used for click-outside detection to close the menu
   * Type: HTMLDivElement - ensures type safety for DOM manipulation
   */
  const menuRef = useRef<HTMLDivElement>(null);
  
  // ===== ROUTE DETECTION =====
  
  /**
   * Get current pathname for active link highlighting
   * This hook provides the current route path for navigation state
   */
  const pathname = usePathname();

  // ===== SCROLL EFFECT MANAGEMENT =====
  
  /**
   * Scroll effect with performance optimization
   * 
   * PERFORMANCE FEATURES:
   * - Debounced scroll handling using requestAnimationFrame
   * - Passive event listeners for better performance
   * - Ticking flag prevents multiple simultaneous animations
   * - Automatic cleanup on component unmount
   * 
   * FUNCTIONALITY:
   * - Detects when user scrolls more than 20px from top
   * - Updates isScrolled state to trigger styling changes
   * - Applies backdrop blur and shadow effects when scrolled
   * 
   * DEPENDENCIES: [] - Empty dependency array means this effect runs once on mount
   */
  useEffect(() => {
    // Flag to prevent multiple simultaneous animation frame requests
    let ticking = false;

    /**
     * Optimized scroll handler using requestAnimationFrame
     * This ensures smooth performance by syncing with browser's repaint cycle
     */
    const handleScroll = () => {
      // Only proceed if no animation frame is currently pending
      if (!ticking) {
        // Request animation frame for smooth scroll handling
        window.requestAnimationFrame(() => {
          // Update scroll state based on scroll position
          // 20px threshold prevents flickering on small scrolls
          setIsScrolled(window.scrollY > 20);
          // Reset ticking flag to allow next animation frame
          ticking = false;
        });
        // Set ticking flag to prevent duplicate requests
        ticking = true;
      }
    };

    // Add scroll event listener with passive option for better performance
    // Passive listeners don't block scrolling, improving user experience
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Call handler immediately to set initial state
    handleScroll();

    // Cleanup function to remove event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty dependency array - effect runs once on mount

  // ===== MOBILE MENU EFFECT MANAGEMENT =====
  
  /**
   * Mobile menu side effects management
   * 
   * FEATURES:
   * - Click-outside detection to close menu
   * - Escape key handling for accessibility
   * - Body scroll prevention when menu is open
   * - Automatic cleanup of event listeners
   * 
   * ACCESSIBILITY:
   * - Keyboard navigation support
   * - Focus management
   * - Screen reader compatibility
   * 
   * DEPENDENCIES: [isMobileMenuOpen] - Effect runs when menu state changes
   */
  useEffect(() => {
    // Early return if menu is not open - no need to set up listeners
    if (!isMobileMenuOpen) return;

    /**
     * Handle clicks outside the mobile menu
     * Closes the menu when user clicks anywhere outside the menu container
     * 
     * @param event - Mouse event from document
     */
    const handleClickOutside = (event: MouseEvent) => {
      // Check if click target is outside the menu container
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        // Close the mobile menu
        setIsMobileMenuOpen(false);
      }
    };

    /**
     * Handle escape key press for accessibility
     * Allows users to close menu using keyboard navigation
     * 
     * @param event - Keyboard event from document
     */
    const handleEscape = (event: KeyboardEvent) => {
      // Check if escape key was pressed
      if (event.key === 'Escape') {
        // Close the mobile menu
        setIsMobileMenuOpen(false);
      }
    };

    // Add event listeners for click-outside and escape key detection
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    
    // Prevent body scroll when mobile menu is open
    // This prevents background scrolling while menu is active
    document.body.style.overflow = 'hidden';

    // Cleanup function to remove event listeners and restore scroll
    return () => {
      // Remove event listeners to prevent memory leaks
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
      // Restore body scroll when menu closes
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]); // Dependency on menu state - effect runs when menu opens/closes

  // ===== EVENT HANDLERS =====
  
  /**
   * Close mobile menu callback
   * 
   * Memoized with useCallback to prevent unnecessary re-renders
   * Used by navigation links and logo to close menu on navigation
   * 
   * @returns {void}
   */
  const closeMobileMenu = useCallback(() => {
    // Set mobile menu state to closed
    setIsMobileMenuOpen(false);
  }, []); // Empty dependency array - function never changes

  /**
   * Toggle mobile menu callback
   * 
   * Memoized with useCallback for performance optimization
   * Toggles between open and closed states
   * Includes debug logging for development
   * 
   * @returns {void}
   */
  const toggleMobileMenu = useCallback((e?: React.MouseEvent) => {
    // Prevent event bubbling
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    // Debug logging for development (can be removed in production)
    console.log('Toggle mobile menu clicked', isMobileMenuOpen);
    
    // Toggle mobile menu state using functional update
    // Functional update ensures we get the latest state value
    setIsMobileMenuOpen(prev => {
      console.log('Previous state:', prev, 'New state:', !prev);
      return !prev;
    });
  }, [isMobileMenuOpen]); // Include isMobileMenuOpen in dependencies

  /**
   * Check if navigation link is currently active
   * 
   * Determines which navigation link should be highlighted
   * Handles special case for home route (exact match)
   * Uses pathname to determine active state
   * 
   * @param href - The href of the navigation link to check
   * @returns {boolean} True if the link is currently active
   */
  const isActiveLink = useCallback((href: string) => {
    // Special handling for home route - must be exact match
    if (href === '/') {
      return pathname === '/';
    }
    
    // For all other routes, check if current pathname starts with href
    // This allows sub-routes to also be highlighted (e.g., /projects/some-project)
    return pathname?.startsWith(href);
  }, [pathname]); // Dependency on pathname - recalculates when route changes

  // ===== COMPONENT RENDER =====
  
  return (
    /**
     * Main header container with Framer Motion animation
     * 
     * ANIMATION PROPERTIES:
     * - initial: Starts 100px above final position (slide down effect)
     * - animate: Moves to final position (y: 0)
     * - transition: 0.6s duration with easeOut timing
     * 
     * STYLING:
     * - Fixed positioning covers full width
     * - High z-index (50) ensures header stays above other content
     * - Conditional styling based on scroll state
     * - Smooth transitions for all style changes
     */
    <motion.header
      initial={{ y: -100 }}                    // Start 100px above final position
      animate={{ y: 0 }}                       // Animate to final position
      transition={{ duration: 0.6, ease: 'easeOut' }} // Smooth slide-down animation
      className={`
        fixed top-0 left-0 right-0 z-50        // Fixed positioning with high z-index
        transition-all duration-300             // Smooth transitions for all properties
        ${isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200'  // Scrolled: solid background with blur and shadow
          : 'bg-white/90 backdrop-blur-sm'      // Default: semi-transparent with light blur
        }
      `}
    >
      {/* Container for header content with responsive padding */}
      <div className="container mx-auto px-4">
        {/* Flex container for header layout */}
        <div className="flex items-center justify-between h-16">
          
          {/* Logo Section */}
          <Link 
            href="/"
            className="flex items-center group z-50"
            onClick={closeMobileMenu}
            aria-label="SV Architects Home"
          >
            <Image
              src={getImagePath("/images/logos/logo-sv-black.png")}
              alt="SV Architects Logo"
              width={60}
              height={24}
              className="group-hover:scale-105 transition-transform duration-200"
              unoptimized // Required for static export
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main navigation">
            {/* Map through navigation items to create links */}
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}                 // Unique key for React rendering
                href={item.href}                // Link destination
                className={`
                  text-sm font-medium tracking-wide    // Typography styling
                  transition-colors duration-200        // Smooth color transitions
                  ${isActiveLink(item.href)             // Conditional styling based on active state
                    ? 'text-black font-semibold'        // Active: black text, semibold weight
                    : 'text-gray-800 hover:text-black'  // Default: gray text, black on hover
                  }
                `}
                aria-current={isActiveLink(item.href) ? 'page' : undefined} // Accessibility: indicates current page
              >
                {/* Link text content */}
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={(e) => toggleMobileMenu(e)}          // Toggle mobile menu on click
            className="
              md:hidden p-2 text-gray-800       // Mobile-only, padding, text color
              hover:text-black transition-colors // Hover effects
              rounded-md hover:bg-gray-100      // Rounded corners, hover background
              z-50 relative                      // High z-index, relative positioning
              focus:outline-none focus:ring-2 focus:ring-gray-300 // Focus accessibility
            "
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'} // Dynamic accessibility label
            aria-expanded={isMobileMenuOpen}     // Indicates menu state to screen readers
            aria-controls="mobile-menu"          // Associates button with menu element
            type="button"                        // Explicit button type
          >
            {/* Animated icon container
             * 
             * ANIMATION:
             * - Rotates 180 degrees when menu opens
             * - Smooth 0.3s transition
             * - pointer-events-none prevents interference with button clicks
             */}
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 180 : 0 }} // Conditional rotation
              transition={{ duration: 0.3 }}                   // Smooth transition
              className="pointer-events-none"                  // Prevent click interference
            >
              {/* Conditional icon rendering based on menu state */}
              {isMobileMenuOpen ? (
                // Close icon (X) - shown when menu is open
                <svg className="w-5 h-5 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger icon (three lines) - shown when menu is closed
                <svg className="w-5 h-5 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence mode="wait">
        {/* Only render menu when open */}
        {isMobileMenuOpen && (
          <motion.nav
            id="mobile-menu"                    // ID for aria-controls association
            ref={menuRef}                       // Ref for click-outside detection
            initial={{ opacity: 0, y: -20 }}   // Start transparent and above
            animate={{ opacity: 1, y: 0 }}     // Fade in and slide down
            exit={{ opacity: 0, y: -20 }}      // Fade out and slide up
            transition={{ duration: 0.2 }}     // Quick, responsive animation
            className="
              md:hidden fixed                   // Mobile-only, fixed positioning
              top-16 left-0 right-0             // Positioned below header
              bg-white shadow-lg z-40           // White background, shadow, z-index
              border-b border-gray-100           // Bottom border for separation
            "
            role="navigation"                   // Semantic role for accessibility
            aria-label="Mobile navigation"       // Accessibility label
          >
            {/* Container for navigation links */}
            <div className="flex flex-col p-4 space-y-1">
              {/* Map through navigation items for mobile menu */}
              {NAV_ITEMS.map((item) => (
                // Mobile navigation link with accessibility features
                <Link
                  key={item.href}               // Unique key for React rendering
                  href={item.href}              // Link destination
                  onClick={closeMobileMenu}    // Close menu when link is clicked
                  className={`
                    block py-3 px-4 text-sm font-medium  // Block display, padding, typography
                    rounded-md transition-colors        // Rounded corners, color transitions
                    ${isActiveLink(item.href)           // Conditional styling based on active state
                      ? 'text-black bg-gray-50'         // Active: black text, light background
                      : 'text-gray-600 hover:text-black hover:bg-gray-50' // Default: gray text, hover effects
                    }
                  `}
                  aria-current={isActiveLink(item.href) ? 'page' : undefined} // Accessibility: current page indication
                >
                  {/* Link text content */}
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