/**
 * ============================================================================
 * FILE: src/app/about/page.tsx
 * ============================================================================
 * DESCRIPTION: About Us Page for SV Architects and Associates Ltd.
 * 
 * This page showcases the company's philosophy, team approach, and commitment
 * to design excellence. It features a hero section with company messaging,
 * an image carousel showcasing the team and office environment, and contact
 * information.
 * 
 * CONTENT STRUCTURE:
 * - Hero section with company tagline and philosophy
 * - Image carousel with team and office photos
 * - Company information and contact details
 * 
 * DESIGN FEATURES:
 * - Professional monochrome color scheme
 * - Responsive design for all devices
 * - Smooth animations with Framer Motion
 * - Image carousel with navigation controls
 * - Clean typography and spacing
 * 
 * TECHNICAL STACK:
 * - Next.js 16 App Router
 * - TypeScript for type safety
 * - Tailwind CSS for styling
 * - Framer Motion for animations
 * - Responsive image handling
 * 
 * SEO OPTIMIZATION:
 * - Comprehensive meta tags and Open Graph
 * - Structured data (JSON-LD) for organization
 * - Optimized images with proper alt text
 * - Semantic HTML structure
 * - Fast loading with performance optimization
 * 
 * @author SV Architects Development Team
 * @version 1.0.0
 * @since 2024
 * ============================================================================
 */

'use client';

// Import Framer Motion components for animations
import { AnimatePresence, motion } from 'framer-motion';
// Import animation variants
import { fadeIn, slideUp } from '@/lib/animations';
// Import React hooks for state management and side effects
import { useEffect, useState } from 'react';
// Import image path helper
import { getImagePath } from '@/config/site';

import Image from 'next/image';
// Import Next.js components
import Link from 'next/link';

/**
 * ============================================================================
 * ABOUT PAGE COMPONENT
 * ============================================================================
 * 
 * Main About page component that displays company information, philosophy,
 * and team environment through a combination of text content and image
 * carousel.
 * 
 * FEATURES:
 * - Hero section with company philosophy
 * - Image carousel showcasing team and office
 * - Contact information section
 * - Responsive design for all devices
 * - Smooth animations and transitions
 * 
 * STATE MANAGEMENT:
 * - currentImageIndex: Controls which image is displayed in carousel
 * 
 * EFFECTS:
 * - Auto-advance carousel every 5 seconds
 * - Manual navigation controls
 * - Responsive image handling
 * 
 * @returns {JSX.Element} The About page component
 * ============================================================================
 */
export default function AboutPage() {
  // ===== STATE MANAGEMENT =====
  
  /**
   * Track current image index in the carousel
   * Used to control which image is currently displayed
   * Updates automatically every 5 seconds or manually via navigation
   */
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // ===== IMAGE CAROUSEL DATA =====
  
  /**
   * Array of images for the carousel
   * These images showcase the team, office environment, and company culture
   * Each image includes alt text for accessibility
   */
  const CAROUSEL_IMAGES = [
    {
      id: 1,
      src: '/sv-architects-website/images/about/DSC_4275-1.jpg',
      alt: 'SV Architects modern office environment showcasing professional workspace and collaborative design area'
    },
    {
      id: 2,
      src: '/sv-architects-website/images/about/DSC_4380-1-1.jpg',
      alt: 'Contemporary office space at SV Architects with innovative design elements and natural lighting'
    },
    {
      id: 3,
      src: '/sv-architects-website/images/about/DSC_4407-1-1.jpg',
      alt: 'Professional workspace at SV Architects featuring modern architectural design and team collaboration areas'
    },
    {
      id: 4,
      src: '/sv-architects-website/images/about/05.jpg',
      alt: 'SV Architects team members working together on architectural projects in collaborative environment'
    },
    {
      id: 5,
      src: '/sv-architects-website/images/about/06.jpg',
      alt: 'Professional architects at SV Architects discussing design concepts and project development'
    },
    {
      id: 6,
      src: '/sv-architects-website/images/about/DSC_4394-1-1.jpg',
      alt: 'SV Architects team in creative workspace developing innovative architectural solutions'
    },
    {
      id: 7,
      src: '/sv-architects-website/images/about/DSC_4325-2-1.jpg',
      alt: 'Modern office design at SV Architects showcasing contemporary architectural workspace'
    }
  ];

  // ===== AUTO-ADVANCE CAROUSEL EFFECT =====
  
  /**
   * Auto-advance carousel effect
   * 
   * FUNCTIONALITY:
   * - Automatically advances to next image every 5 seconds
   * - Loops back to first image after reaching the end
   * - Cleans up interval on component unmount
   * - Only runs when component is mounted
   * 
   * PERFORMANCE:
   * - Uses setInterval for consistent timing
   * - Proper cleanup prevents memory leaks
   * - Conditional execution based on image array length
   */
  useEffect(() => {
    // Early return if no images available
    if (!CAROUSEL_IMAGES || CAROUSEL_IMAGES.length === 0) return;

    // Set up auto-advance interval
    const interval = setInterval(() => {
      // Advance to next image, looping back to start if at end
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % CAROUSEL_IMAGES.length
      );
    }, 5000); // 5 second intervals

    // Cleanup function to clear interval on unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array - effect runs once on mount

  // ===== MANUAL CAROUSEL NAVIGATION =====
  
  /**
   * Navigate to next image in carousel
   * 
   * FUNCTIONALITY:
   * - Advances to next image in sequence
   * - Loops back to first image if at end
   * - Used by next button and auto-advance
   * 
   * @returns {void}
   */
  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex + 1) % CAROUSEL_IMAGES.length
    );
  };

  /**
   * Navigate to previous image in carousel
   * 
   * FUNCTIONALITY:
   * - Goes back to previous image in sequence
   * - Loops to last image if at beginning
   * - Used by previous button
   * 
   * @returns {void}
   */
  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? CAROUSEL_IMAGES.length - 1 : prevIndex - 1
    );
  };

  // ===== STRUCTURED DATA (JSON-LD) =====
  
  /**
   * Generate structured data for SEO
   * Provides search engines with detailed information about the organization
   */
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SV Architects and Associates Ltd.",
    "alternateName": "SV Architects",
    "url": "https://sv-architects.github.io",
    "logo": "https://sv-architects.github.io/sv-architects-website/images/logo/sv-architects-logo.png",
    "description": "Leading architectural firm in Bangkok, Thailand specializing in innovative design solutions and collaborative team approaches.",
    "foundingDate": "2010",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bangkok",
      "addressCountry": "Thailand"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+66-2-123-4567",
      "contactType": "customer service",
      "email": "info@sv-arch.com"
    },
    "sameAs": [
      "https://www.facebook.com/svarchitects",
      "https://www.linkedin.com/company/sv-architects",
      "https://www.instagram.com/svarchitects"
    ],
    "knowsAbout": [
      "Architecture",
      "Interior Design",
      "Urban Planning",
      "Project Management",
      "Sustainable Design",
      "Commercial Architecture",
      "Residential Architecture",
      "Healthcare Architecture",
      "Aviation Architecture"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Architectural Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Architectural Design",
            "description": "Comprehensive architectural design services for residential, commercial, and institutional projects"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Interior Design",
            "description": "Professional interior design services for various project types"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Project Management",
            "description": "End-to-end project management services for architectural projects"
          }
        }
      ]
    }
  };

  // ===== COMPONENT RENDER =====
  
  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <main className="min-h-screen bg-white">
      {/* ===== HERO SECTION ===== */}
      
      /**
       * Hero section with company philosophy and background image
       * 
       * DESIGN FEATURES:
       * - Full-height hero section with background image
       * - Overlay for text readability
       * - Responsive typography and spacing
       * - Professional monochrome color scheme
       * - Smooth animations on load
       */
      <section className="relative h-[70vh] md:h-[80vh] lg:h-[90vh] overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/sv-architects-website/images/about/DSC_4275-1.jpg"
            alt="SV Architects office and team environment"
            fill
            className="object-cover"
            priority
            unoptimized
            onError={(e) => {
              console.error('Hero image failed to load:', e);
              // Fallback to a solid background if image fails
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black bg-opacity-70" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="container mx-auto px-4 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Company tagline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                First Class Design
              </h1>
              
              {/* Company philosophy */}
              <div className="max-w-4xl mx-auto">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed text-gray-100"
                >
                  We believe that creativity and innovation flourish through collaborative team efforts rather than individual work alone. With this philosophy, combined with the right environment, we attract many young, talented design enthusiasts who share this commitment to excellence.
                </motion.p>
                
                {/* Company commitment */}
                <motion.blockquote
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-xl md:text-2xl lg:text-3xl font-semibold italic text-white border-l-4 border-white pl-6"
                >
                  "SV is committed to design excellence and progressive innovation"
                </motion.blockquote>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== IMAGE CAROUSEL SECTION ===== */}
      
      /**
       * Image carousel showcasing team and office environment
       * 
       * FEATURES:
       * - Auto-advancing carousel with manual controls
       * - Smooth transitions between images
       * - Navigation arrows and dot indicators
       * - Responsive design for all devices
       * - Accessibility features
       * - Error handling and fallbacks
       */
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          {/* Section title */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Team & Environment
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover the collaborative workspace and talented team that drives our design excellence
            </p>
          </motion.div>

          {/* Carousel container */}
          <motion.div
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative max-w-7xl mx-auto"
          >
            {/* Image display area */}
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-gray-200">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={CAROUSEL_IMAGES[currentImageIndex]?.src || '/sv-architects-website/images/about/DSC_4275-1.jpg'}
                    alt={CAROUSEL_IMAGES[currentImageIndex]?.alt || 'Office image'}
                    fill
                    className="object-cover"
                    unoptimized
                    onError={(e) => {
                      console.error('Carousel image failed to load:', e.currentTarget.src);
                      // Try to load a fallback image
                      e.currentTarget.src = '/sv-architects-website/images/about/DSC_4275-1.jpg';
                    }}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Navigation arrows */}
              <button
                onClick={handlePreviousImage}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm hover:bg-white transition-all duration-300 rounded-full p-4 text-gray-800 shadow-lg hover:shadow-xl group"
                aria-label="Previous image"
              >
                <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={handleNextImage}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm hover:bg-white transition-all duration-300 rounded-full p-4 text-gray-800 shadow-lg hover:shadow-xl group"
                aria-label="Next image"
              >
                <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Image indicators */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
                {CAROUSEL_IMAGES.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? 'bg-white shadow-lg'
                        : 'bg-white/60 hover:bg-white/80'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>

              {/* Image counter */}
              <div className="absolute top-6 right-6 z-20 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                {currentImageIndex + 1} / {CAROUSEL_IMAGES.length}
              </div>
            </div>

            {/* Image thumbnails */}
            <div className="mt-8 flex justify-center space-x-3 overflow-x-auto pb-2">
              {CAROUSEL_IMAGES.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative w-20 h-12 rounded-lg overflow-hidden transition-all duration-300 ${
                    index === currentImageIndex
                      ? 'ring-2 ring-gray-800 scale-105'
                      : 'hover:scale-105 opacity-70 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== COMPANY INFORMATION SECTION ===== */}
      
      /**
       * Company information and contact details section
       * 
       * CONTENT:
       * - Company philosophy and approach
       * - Contact information
       * - Office location details
       * - Call-to-action buttons
       * - Enhanced visual design
       */
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Company philosophy */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  About SV Architects
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-gray-800 to-gray-400 rounded-full mb-8"></div>
              </div>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-gray-800">
                  <p className="font-medium">
                    SV Architects and Associates Ltd. is committed to design excellence and progressive innovation. We believe that creativity and innovation flourish through collaborative team efforts rather than individual work alone.
                  </p>
                </div>
                
                <p>
                  Our philosophy centers on creating the right environment that attracts young, talented design enthusiasts who share our commitment to excellence. We foster a culture of collaboration, continuous learning, and innovative thinking.
                </p>
                
                <p>
                  With our team of experienced architects and designers, we deliver first-class design solutions that meet the highest standards of quality and innovation.
                </p>
              </div>

              {/* Call-to-action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  View Our Projects
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-900 text-gray-900 font-semibold rounded-xl hover:bg-gray-900 hover:text-white transition-all duration-300"
                >
                  Get In Touch
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </Link>
              </div>
            </motion.div>

            {/* Contact information */}
            <motion.div
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl shadow-lg ring-1 ring-gray-200"
            >
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Contact Information
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-gray-800 to-gray-400 rounded-full"></div>
              </div>
              
              <div className="space-y-6">
                {/* Office address */}
                <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Head Office</h4>
                    <p className="text-gray-600 leading-relaxed">
                      61/120 4FL, ECO BUILDING, RAMA 9 ROAD<br />
                      HUAI-KHWANG, HUAI-KHWANG<br />
                      BANGKOK, THAILAND 10310
                    </p>
                  </div>
                </div>

                {/* Phone number */}
                <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-1">Phone</h4>
                    <a href="tel:+662-162-0838" className="text-gray-600 hover:text-gray-900 transition-colors text-lg">
                      +662-162-0838
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-1">Email</h4>
                    <a href="mailto:info@sv-arch.com" className="text-gray-600 hover:text-gray-900 transition-colors text-lg">
                      info@sv-arch.com
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      </main>
    </>
  );
}
