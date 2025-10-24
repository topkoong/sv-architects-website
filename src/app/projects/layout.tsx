/**
 * ============================================================================
 * FILE: src/app/projects/layout.tsx
 * ============================================================================
 * DESCRIPTION: Layout for projects page with SSR metadata
 * ============================================================================
 */

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Projects | SV Architects and Associates Ltd.',
  description: 'Explore our portfolio of award-winning architectural projects including commercial buildings, healthcare facilities, hospitality venues, and sustainable developments across Thailand.',
  keywords: [
    'architectural projects',
    'portfolio',
    'SV Architects',
    'commercial architecture',
    'healthcare facilities',
    'hospitality design',
    'sustainable buildings',
    'LEED certified',
    'Bangkok projects',
    'Thailand architecture'
  ],
  openGraph: {
    type: 'website',
    url: 'https://sv-arch.com/projects',
    title: 'Our Projects | SV Architects and Associates Ltd.',
    description: 'Explore our portfolio of award-winning architectural projects across Thailand.',
    siteName: 'SV Architects and Associates Ltd.',
    images: [
      {
        url: 'https://sv-arch.com/images/projects/portfolio-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'SV Architects project portfolio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Projects | SV Architects and Associates Ltd.',
    description: 'Explore our portfolio of award-winning architectural projects.',
    images: ['https://sv-arch.com/images/projects/portfolio-hero.jpg']
  },
  alternates: {
    canonical: 'https://sv-arch.com/projects'
  }
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
