/**
 * ============================================================================
 * FILE: src/app/projects/layout.tsx
 * ============================================================================
 * DESCRIPTION: Layout for Projects Page with SEO Metadata
 * 
 * This layout file handles SEO metadata for the Projects page since the main
 * page component is a client component and cannot export metadata directly.
 * 
 * SEO FEATURES:
 * - Comprehensive meta tags and Open Graph
 * - Twitter Cards for social sharing
 * - Structured data for project portfolio
 * - Optimized for search engine visibility
 * - Canonical URLs and robots directives
 * 
 * @author SV Architects Development Team
 * @version 1.0.0
 * @since 2024
 * ============================================================================
 */

import type { Metadata } from 'next';

/**
 * Production-grade SEO metadata for the Projects page
 * Includes comprehensive meta tags, Open Graph, Twitter Cards, and structured data
 */
export const metadata: Metadata = {
  // Basic meta tags
  title: 'Projects Portfolio | SV Architects and Associates Ltd. | Bangkok Thailand',
  description: 'Explore our comprehensive portfolio of architectural projects including residential, commercial, healthcare, aviation, and mixed-use developments across Thailand.',
  keywords: [
    'SV Architects projects',
    'Architectural portfolio Thailand',
    'Bangkok architecture projects',
    'Residential architecture',
    'Commercial architecture',
    'Healthcare architecture',
    'Aviation architecture',
    'Mixed-use development',
    'Interior design projects',
    'Master planning Thailand',
    'Office buildings Bangkok',
    'Transportation architecture',
    'Cultural architecture',
    'Hospitality projects',
    'Award-winning architecture'
  ],
  
  // Open Graph meta tags
  openGraph: {
    type: 'website',
    title: 'Projects Portfolio | SV Architects and Associates Ltd.',
    description: 'Explore our comprehensive portfolio of architectural projects including residential, commercial, healthcare, aviation, and mixed-use developments across Thailand.',
    url: 'https://sv-architects.github.io/projects',
    siteName: 'SV Architects and Associates Ltd.',
    images: [
      {
        url: 'https://sv-architects.github.io/images/projects/portfolio-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'SV Architects project portfolio showcase'
      }
    ],
    locale: 'en_US'
  },
  
  // Twitter Card meta tags
  twitter: {
    card: 'summary_large_image',
    title: 'Projects Portfolio | SV Architects and Associates Ltd.',
    description: 'Explore our comprehensive portfolio of architectural projects across Thailand.',
    images: ['https://sv-architects.github.io/images/projects/portfolio-hero.jpg']
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
    canonical: 'https://sv-architects.github.io/projects'
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
 * Projects Layout Component
 * 
 * This layout component wraps the Projects page content and provides
 * the necessary structure for SEO optimization.
 * 
 * @param children - The Projects page content
 * @returns JSX element with layout structure
 */
export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "SV Architects Project Portfolio",
            "description": "Comprehensive portfolio of architectural projects by SV Architects and Associates Ltd.",
            "url": "https://sv-architects.github.io/projects",
            "numberOfItems": 50,
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@type": "CreativeWork",
                  "name": "Don Mueang International Airport Terminal 3",
                  "description": "Modern aviation terminal design with sustainable features",
                  "url": "https://sv-architects.github.io/projects/don-mueang-airport-terminal-3"
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@type": "CreativeWork",
                  "name": "Somdech Phra Nangchao Sirikit Hospital",
                  "description": "Healthcare facility design with patient-centered approach",
                  "url": "https://sv-architects.github.io/projects/somdech-phra-nangchao-sirikit-hospital"
                }
              },
              {
                "@type": "ListItem",
                "position": 3,
                "item": {
                  "@type": "CreativeWork",
                  "name": "U-Tapao Airport New Passenger Terminal",
                  "description": "Aviation terminal with interior design excellence",
                  "url": "https://sv-architects.github.io/projects/u-tapao-airport-new-passenger-terminal"
                }
              }
            ]
          })
        }}
      />
      
      {children}
    </>
  );
}