/**
 * ============================================================================
 * FILE: src/app/layout.tsx
 * ============================================================================
 * DESCRIPTION: Root layout component for SV Architects website
 * Implements comprehensive SEO configuration, global styles, and metadata
 * 
 * FEATURES:
 * - Comprehensive meta tags and Open Graph configuration
 * - Twitter Cards and JSON-LD structured data
 * - Global CSS imports and font loading
 * - Responsive viewport configuration
 * - Performance optimizations
 * - Accessibility features
 * 
 * DEPENDENCIES:
 * - next/font: For optimized font loading
 * - next/head: For meta tag management
 * - @/styles/globals.css: Global styles
 * 
 * USAGE:
 * This layout wraps all pages in the application
 * 
 * LAST MODIFIED: [Current Date]
 * AUTHOR: Development Team
 * 
 * ============================================================================
 */

// Import Next.js font optimization
import { Inter, Playfair_Display } from 'next/font/google';
// Import Next.js types and components
import type { Metadata, Viewport } from 'next';
// Import global styles
import '@/styles/globals.css';

import { Footer } from '@/components/layout/Footer';
// Import custom components
import { Header } from '@/components/layout/Header';
import { reportWebVitals } from '@/lib/performance';

// Configure Inter font for body text
const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // Optimize font loading
  variable: '--font-inter', // CSS variable for font
  preload: true, // Preload font for better performance
});

// Configure Playfair Display font for headings
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap', // Optimize font loading
  variable: '--font-playfair', // CSS variable for font
  preload: true, // Preload font for better performance
});

// Define viewport configuration for responsive design
export const viewport: Viewport = {
  width: 'device-width', // Responsive width
  initialScale: 1, // Initial zoom level
  maximumScale: 5, // Maximum zoom level for accessibility
  userScalable: true, // Allow user zooming
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' }, // Light theme color
    { media: '(prefers-color-scheme: dark)', color: '#171717' } // Dark theme color
  ],
};

// Define comprehensive site-wide metadata
export const metadata: Metadata = {
  // Basic Meta Tags
  title: {
    default: 'SV Architects and Associates Ltd. | Architecture Design in Bangkok, Thailand', // Default title for homepage
    template: '%s | SV Architects' // Template for other pages (%s will be replaced with page title)
  },
  description: 'Leading architectural firm in Bangkok, Thailand specializing in commercial, hospitality, healthcare, transportation, aviation, mixed-use, office, and residential projects. Award-winning sustainable design solutions.', // Primary site description (150-160 characters optimal)
  keywords: [ // Array of relevant keywords for SEO
    'architecture firm bangkok',
    'architects thailand',
    'commercial architecture',
    'hospitality design',
    'healthcare facilities',
    'sustainable architecture',
    'mixed-use development',
    'SV Architects',
    'architectural services thailand',
    'bangkok architects',
    'thailand architecture',
    'green building design',
    'LEED certified architects',
    'aviation architecture',
    'transportation infrastructure'
  ],
  authors: [{ name: 'SV Architects and Associates Ltd.' }], // Author information
  creator: 'SV Architects and Associates Ltd.', // Content creator
  publisher: 'SV Architects and Associates Ltd.', // Content publisher
  
  // Robots directives - control search engine crawling and indexing
  robots: {
    index: true, // Allow search engines to index this page
    follow: true, // Allow search engines to follow links on this page
    googleBot: {
      index: true, // Specifically tell Google to index
      follow: true, // Specifically tell Google to follow links
      'max-image-preview': 'large', // Allow large image previews in search results
      'max-snippet': -1, // No limit on text snippet length in search results
      'max-video-preview': -1 // No limit on video preview length
    }
  },

  // Open Graph Meta Tags (for Facebook, LinkedIn, etc.)
  openGraph: {
    type: 'website', // Type of content (website, article, etc.)
    locale: 'en_US', // Primary locale
    alternateLocale: ['th_TH'], // Alternative locales if site supports multiple languages
    url: 'https://sv-arch.com', // Canonical URL of the page
    siteName: 'SV Architects and Associates Ltd.', // Name of the website
    title: 'SV Architects and Associates Ltd. | Leading Architecture Firm in Bangkok', // OG-specific title
    description: 'Award-winning architectural firm in Bangkok specializing in commercial, hospitality, healthcare, and sustainable design solutions across Thailand.', // OG-specific description
    images: [ // Array of images for social media sharing
      {
        url: 'https://sv-arch.com/images/og-image.jpg', // Primary OG image URL
        width: 1200, // Image width in pixels (1200x630 is optimal for OG)
        height: 630, // Image height in pixels
        alt: 'SV Architects - Modern architectural projects in Bangkok', // Alt text for image
        type: 'image/jpeg' // MIME type of image
      },
      {
        url: 'https://sv-arch.com/images/og-image-square.jpg', // Square OG image for some platforms
        width: 1200,
        height: 1200,
        alt: 'SV Architects Logo',
        type: 'image/jpeg'
      }
    ]
  },

  // Twitter Card Meta Tags (for Twitter/X social sharing)
  twitter: {
    card: 'summary_large_image', // Type of Twitter card (summary_large_image shows large preview)
    site: '@svarchitects', // Twitter handle of the website
    creator: '@svarchitects', // Twitter handle of content creator
    title: 'SV Architects and Associates Ltd. | Architecture Design in Bangkok', // Twitter-specific title
    description: 'Leading architectural firm in Bangkok, Thailand. Commercial, hospitality, healthcare, and sustainable design solutions.', // Twitter-specific description
    images: ['https://sv-arch.com/images/twitter-card.jpg'] // Twitter card image (1200x675 optimal)
  },

  // Verification tags for search engines and services
  verification: {
    google: 'your-google-verification-code', // Google Search Console verification
    yandex: 'your-yandex-verification-code', // Yandex verification (if targeting Russian market)
    // bing: 'your-bing-verification-code', // Bing Webmaster Tools verification
  },

  // Alternate language versions (if applicable)
  alternates: {
    canonical: 'https://sv-arch.com', // Canonical URL to prevent duplicate content issues
    languages: {
      'en-US': 'https://sv-arch.com/en', // English version
      'th-TH': 'https://sv-arch.com/th' // Thai version (if applicable)
    }
  },

  // Additional meta tags
  other: {
    'google-site-verification': 'your-google-site-verification-code', // Alternative Google verification method
    'msapplication-TileColor': '#3b82f6', // Microsoft tile color
    'theme-color': '#3b82f6', // Theme color for mobile browsers
  },

  // Icons and manifest
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#3b82f6' },
    ],
  },
  manifest: '/site.webmanifest',
};

// Root layout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="en" // Language attribute for accessibility and SEO
      className={`${inter.variable} ${playfairDisplay.variable}`} // Apply font variables
    >
      <head>
        {/* JSON-LD Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org', // Schema.org context
              '@type': 'Organization', // Type: Organization
              name: 'SV Architects and Associates Ltd.', // Company name
              alternateName: 'SV Architects', // Alternative/short name
              url: 'https://sv-arch.com', // Website URL
              logo: 'https://sv-arch.com/images/logo.png', // Company logo URL
              description: 'Leading architectural firm in Bangkok, Thailand specializing in commercial, hospitality, healthcare, transportation, aviation, mixed-use, office, and residential projects.',
              address: { // Physical address
                '@type': 'PostalAddress',
                streetAddress: 'Your Street Address', // TODO: Add actual address
                addressLocality: 'Bangkok',
                addressRegion: 'Bangkok',
                postalCode: 'Your Postal Code', // TODO: Add actual postal code
                addressCountry: 'TH'
              },
              contactPoint: { // Contact information
                '@type': 'ContactPoint',
                telephone: '+66-XX-XXX-XXXX', // TODO: Add actual phone
                contactType: 'customer service',
                areaServed: 'TH',
                availableLanguage: ['en', 'th']
              },
              sameAs: [ // Social media profiles
                'https://www.facebook.com/svarchitects', // TODO: Add actual URLs
                'https://www.linkedin.com/company/svarchitects',
                'https://www.instagram.com/svarchitects'
              ],
              foundingDate: '2009', // Company founding date
              numberOfEmployees: '50-100', // Employee count range
              industry: 'Architecture',
              services: [
                'Commercial Architecture',
                'Hospitality Design',
                'Healthcare Facilities',
                'Transportation Infrastructure',
                'Aviation Facilities',
                'Mixed-Use Developments',
                'Office Spaces',
                'Residential Projects'
              ]
            })
          }}
        />
        
        {/* Additional meta tags for performance and security */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="SV Architects" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      </head>
      
      <body className={`
        ${inter.className} // Apply Inter font to body
        antialiased // Enable font antialiasing
        bg-background-primary // Apply background color
        text-text-primary // Apply text color
        selection:bg-primary-100 // Custom text selection color
        selection:text-primary-900 // Custom text selection text color
      `}>
        {/* Header Navigation */}
        <Header />
        
        {/* Main content area */}
        <main className="min-h-screen">
          {children}
        </main>
        
        {/* Footer */}
        <Footer />
        
        {/* Global scripts and analytics */}
        {/* Google Analytics - Replace with actual tracking ID */}
        {/* <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}');
            `,
          }}
        /> */}
      </body>
    </html>
  );
}


export { reportWebVitals };
