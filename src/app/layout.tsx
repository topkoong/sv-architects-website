/**
 * ============================================================================
 * FILE: src/app/layout.tsx
 * ============================================================================
 * DESCRIPTION: Root Layout for SV Architects Website with SEO Metadata
 * 
 * This layout file handles global SEO metadata, fonts, and provides
 * the root structure for all pages in the application.
 * 
 * SEO FEATURES:
 * - Global meta tags and Open Graph
 * - Twitter Cards for social sharing
 * - Structured data for organization
 * - Optimized for search engine visibility
 * - Canonical URLs and robots directives
 * 
 * @author SV Architects Development Team
 * @version 1.0.0
 * @since 2024
 * ============================================================================
 */

import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

// ===== FONT CONFIGURATION =====

/**
 * Configure Inter font for body text
 * Optimized for readability and performance
 */
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

/**
 * Configure Playfair Display font for headings
 * Elegant serif font for display typography
 */
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

// ===== GLOBAL SEO METADATA =====

/**
 * Production-grade global SEO metadata
 * Includes comprehensive meta tags, Open Graph, Twitter Cards, and structured data
 */
export const metadata: Metadata = {
  // Basic meta tags
  title: {
    default: 'SV Architects and Associates Ltd. | Leading Architecture Firm Bangkok Thailand',
    template: '%s | SV Architects and Associates Ltd.'
  },
  description: 'SV Architects and Associates Ltd. is a leading architectural firm in Bangkok, Thailand, specializing in innovative design solutions for residential, commercial, healthcare, aviation, and mixed-use projects.',
  keywords: [
    'SV Architects',
    'Architecture firm Bangkok',
    'Thailand architects',
    'Architectural design',
    'Interior design Thailand',
    'Commercial architecture',
    'Residential architecture',
    'Healthcare architecture',
    'Aviation architecture',
    'Mixed-use development',
    'Project management',
    'Sustainable design',
    'Urban planning',
    'Bangkok architecture',
    'Professional architects'
  ],
  
  // Open Graph meta tags
  openGraph: {
    type: 'website',
    title: 'SV Architects and Associates Ltd. | Leading Architecture Firm Bangkok Thailand',
    description: 'Leading architectural firm in Bangkok, Thailand, specializing in innovative design solutions for residential, commercial, healthcare, aviation, and mixed-use projects.',
    url: 'https://sv-architects.github.io',
    siteName: 'SV Architects and Associates Ltd.',
    images: [
      {
        url: 'https://sv-architects.github.io/images/logo/sv-architects-logo.png',
        width: 1200,
        height: 630,
        alt: 'SV Architects and Associates Ltd. Logo'
      }
    ],
    locale: 'en_US'
  },
  
  // Twitter Card meta tags
  twitter: {
    card: 'summary_large_image',
    title: 'SV Architects and Associates Ltd. | Leading Architecture Firm Bangkok Thailand',
    description: 'Leading architectural firm in Bangkok, Thailand, specializing in innovative design solutions.',
    images: ['https://sv-architects.github.io/images/logo/sv-architects-logo.png']
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
    canonical: 'https://sv-architects.github.io'
  },
  
  // Additional SEO meta tags
  other: {
    'geo.region': 'TH',
    'geo.placename': 'Bangkok',
    'geo.position': '13.7563;100.5018',
    'ICBM': '13.7563, 100.5018',
    'theme-color': '#000000',
    'msapplication-TileColor': '#000000',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent'
  }
};

/**
 * Root Layout Component
 * 
 * This layout component wraps all pages and provides
 * the necessary structure for SEO optimization and global styling.
 * 
 * @param children - The page content
 * @returns JSX element with layout structure
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable}`}>
      <head>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "SV Architects and Associates Ltd.",
              "alternateName": "SV Architects",
              "url": "https://sv-architects.github.io",
              "logo": "https://sv-architects.github.io/images/logo/sv-architects-logo.png",
              "description": "Leading architectural firm in Bangkok, Thailand specializing in innovative design solutions and collaborative team approaches.",
              "foundingDate": "2010",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Sukhumvit Road",
                "addressLocality": "Bangkok",
                "addressRegion": "Bangkok",
                "postalCode": "10110",
                "addressCountry": "TH"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+66-2-123-4567",
                "contactType": "customer service",
                "email": "info@sv-arch.com",
                "availableLanguage": "English",
                "areaServed": "Thailand"
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
            })
          }}
        />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}