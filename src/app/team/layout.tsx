/**
 * ============================================================================
 * FILE: src/app/team/layout.tsx
 * ============================================================================
 * DESCRIPTION: Layout for Team Page with SEO Metadata
 * 
 * This layout file handles SEO metadata for the Team page since the main
 * page component is a client component and cannot export metadata directly.
 * 
 * SEO FEATURES:
 * - Comprehensive meta tags and Open Graph
 * - Twitter Cards for social sharing
 * - Structured data for team members
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
 * Production-grade SEO metadata for the Team page
 * Includes comprehensive meta tags, Open Graph, Twitter Cards, and structured data
 */
export const metadata: Metadata = {
  // Basic meta tags
  title: 'Our Team | SV Architects and Associates Ltd. | Bangkok Thailand',
  description: 'Meet our talented team of architects, designers, and professionals at SV Architects and Associates Ltd. Discover our diverse expertise and collaborative approach to design excellence.',
  keywords: [
    'SV Architects team',
    'Architects Bangkok',
    'Thailand architects',
    'Architectural team',
    'Design professionals',
    'Architecture firm team',
    'Bangkok design team',
    'Professional architects',
    'Interior designers Thailand',
    'Project managers',
    'Urban planners',
    'Design consultants',
    'Architecture experts',
    'Creative professionals'
  ],
  
  // Open Graph meta tags
  openGraph: {
    type: 'website',
    title: 'Our Team | SV Architects and Associates Ltd.',
    description: 'Meet our talented team of architects, designers, and professionals at SV Architects and Associates Ltd.',
    url: 'https://sv-architects.github.io/team',
    siteName: 'SV Architects and Associates Ltd.',
    images: [
      {
        url: 'https://sv-architects.github.io/sv-architects-website/images/team/team-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'SV Architects team members'
      }
    ],
    locale: 'en_US'
  },
  
  // Twitter Card meta tags
  twitter: {
    card: 'summary_large_image',
    title: 'Our Team | SV Architects and Associates Ltd.',
    description: 'Meet our talented team of architects, designers, and professionals.',
    images: ['https://sv-architects.github.io/sv-architects-website/images/team/team-hero.jpg']
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
    canonical: 'https://sv-architects.github.io/team'
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
 * Team Layout Component
 * 
 * This layout component wraps the Team page content and provides
 * the necessary structure for SEO optimization.
 * 
 * @param children - The Team page content
 * @returns JSX element with layout structure
 */
export default function TeamLayout({
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
            "@type": "Organization",
            "name": "SV Architects and Associates Ltd.",
            "url": "https://sv-architects.github.io",
            "employee": [
              {
                "@type": "Person",
                "name": "Picharn Foongkiatcharoen",
                "jobTitle": "Principal Architect",
                "description": "Experienced architect with expertise in commercial and residential design",
                "url": "https://sv-architects.github.io/team#picharn-foongkiatcharoen"
              },
              {
                "@type": "Person",
                "name": "Supassara Bannapanya",
                "jobTitle": "Senior Architect",
                "description": "Senior architect specializing in healthcare and institutional projects",
                "url": "https://sv-architects.github.io/team#supassara-bannapanya"
              },
              {
                "@type": "Person",
                "name": "Niran Siriporn",
                "jobTitle": "Project Manager",
                "description": "Project manager with extensive experience in large-scale developments",
                "url": "https://sv-architects.github.io/team#niran-siriporn"
              }
            ],
            "knowsAbout": [
              "Architecture",
              "Interior Design",
              "Urban Planning",
              "Project Management",
              "Sustainable Design"
            ]
          })
        }}
      />
      
      {children}
    </>
  );
}
