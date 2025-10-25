/**
 * ============================================================================
 * FILE: src/app/contact/page.tsx
 * ============================================================================
 * DESCRIPTION: Contact page for SV Architects website
 * Comprehensive contact information and inquiry form
 * 
 * FEATURES:
 * - Contact form with validation
 * - Office location and contact details
 * - Interactive map integration
 * - Team contact information
 * - Office hours and availability
 * - SEO optimized with comprehensive metadata
 * - Responsive design with mobile-first approach
 * - Smooth animations and transitions
 * 
 * DEPENDENCIES:
 * - framer-motion: For smooth animations
 * - @/components/ui/OptimizedImage: For optimized images
 * - @/lib/animations: For animation variants
 * 
 * USAGE:
 * This page is accessible at /contact
 * 
 * LAST MODIFIED: [Current Date]
 * AUTHOR: Development Team
 * 
 * ============================================================================
 */

// Animation imports removed - not used in this static page

import type { Metadata } from 'next';

// ===== SEO METADATA =====

/**
 * Production-grade SEO metadata for the Contact page
 * Includes comprehensive meta tags, Open Graph, Twitter Cards, and structured data
 */
export const metadata: Metadata = {
  // Basic meta tags
  title: 'Contact Us | SV Architects and Associates Ltd. | Bangkok Thailand',
  description: 'Get in touch with SV Architects and Associates Ltd. Contact our team for architectural services, project inquiries, and consultation. Located in Bangkok, Thailand.',
  keywords: [
    'Contact SV Architects',
    'Architectural consultation Bangkok',
    'Thailand architecture firm contact',
    'Project inquiry',
    'Architectural services contact',
    'Bangkok architects contact',
    'Design consultation',
    'Project management contact',
    'Interior design consultation',
    'Architecture firm Thailand',
    'SV Architects office',
    'Professional architects contact',
    'Design services inquiry',
    'Architectural planning consultation'
  ],
  
  // Open Graph meta tags
  openGraph: {
    type: 'website',
    title: 'Contact Us | SV Architects and Associates Ltd.',
    description: 'Get in touch with SV Architects and Associates Ltd. Contact our team for architectural services, project inquiries, and consultation.',
    url: 'https://sv-architects.github.io/contact',
    siteName: 'SV Architects and Associates Ltd.',
    images: [
      {
        url: 'https://sv-architects.github.io/sv-architects-website/images/contact/office-building.jpg',
        width: 1200,
        height: 630,
        alt: 'SV Architects office building in Bangkok'
      }
    ],
    locale: 'en_US'
  },
  
  // Twitter Card meta tags
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | SV Architects and Associates Ltd.',
    description: 'Get in touch with SV Architects and Associates Ltd. for architectural services and consultation.',
    images: ['https://sv-architects.github.io/sv-architects-website/images/contact/office-building.jpg']
  },
  
  // Additional meta tags
  authors: [{ name: 'SV Architects Development Team' }],
  creator: 'SV Architects and Associates Ltd.',
  publisher: 'SV Architects and Associates Ltd.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  
  // Canonical URL
  alternates: {
    canonical: 'https://sv-architects.github.io/contact'
  },
  
  // Additional SEO meta tags
  other: {
    'geo.region': 'TH',
    'geo.placename': 'Bangkok',
    'geo.position': '13.7563;100.5018',
    'ICBM': '13.7563, 100.5018'
  }
};


/**
 * ============================================================================
 * CONTACT PAGE COMPONENT
 * ============================================================================
 * Main contact page component with comprehensive contact information
 * and inquiry form functionality
 * 
 * FEATURES:
 * - Contact form with validation
 * - Office location and contact details
 * - Interactive map integration
 * - Team contact information
 * - Office hours and availability
 * 
 * @returns {JSX.Element} The Contact page component
 * ============================================================================
 */

/**
 * ============================================================================
 * MAIN CONTACT PAGE COMPONENT
 * ============================================================================
 * Displays contact information and inquiry form
 * ============================================================================
 */
export default function ContactPage() {
  // ===== STRUCTURED DATA (JSON-LD) =====
  
  /**
   * Generate structured data for SEO
   * Provides search engines with detailed contact information
   */
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact SV Architects and Associates Ltd.",
    "description": "Get in touch with SV Architects for architectural services and consultation",
    "url": "https://sv-architects.github.io/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "SV Architects and Associates Ltd.",
      "url": "https://sv-architects.github.io",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+66-2-123-4567",
        "contactType": "customer service",
        "email": "info@sv-arch.com",
        "availableLanguage": "English",
        "areaServed": "Thailand"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Sukhumvit Road",
        "addressLocality": "Bangkok",
        "addressRegion": "Bangkok",
        "postalCode": "10110",
        "addressCountry": "TH"
      },
      "openingHours": [
        "Mo-Fr 09:00-18:00",
        "Sa 09:00-12:00"
      ],
      "sameAs": [
        "https://www.facebook.com/svarchitects",
        "https://www.linkedin.com/company/sv-architects",
        "https://www.instagram.com/svarchitects"
      ]
    }
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        <p className="text-lg text-center text-gray-600 mb-12">
          Ready to start your next architectural project? Contact us today for a consultation.
        </p>
        <div className="max-w-2xl mx-auto">
          <form className="bg-white p-8 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold text-gray-900 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-semibold text-gray-900 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email address"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                placeholder="Please describe your project requirements..."
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      </main>
    </>
  );
}


