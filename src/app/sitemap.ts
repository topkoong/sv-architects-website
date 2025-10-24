/**
 * ============================================================================
 * FILE: src/app/sitemap.ts
 * ============================================================================
 * DESCRIPTION: Dynamic Sitemap Generation for SV Architects Website
 * 
 * This file generates a comprehensive sitemap for search engines,
 * including all pages, project detail pages, and team member pages.
 * 
 * FEATURES:
 * - Dynamic sitemap generation
 * - All static pages included
 * - Project detail pages
 * - Team member pages
 * - Proper priority and change frequency
 * - Last modified dates
 * 
 * @author SV Architects Development Team
 * @version 1.0.0
 * @since 2024
 * ============================================================================
 */

import { MetadataRoute } from 'next';

// Force static generation for sitemap.xml
export const dynamic = 'force-static';

/**
 * Generate dynamic sitemap for SEO
 * 
 * This function creates a comprehensive sitemap that includes:
 * - All static pages (home, about, projects, team, contact, career)
 * - Project detail pages
 * - Team member pages
 * - Proper priority and change frequency settings
 * 
 * @returns {Promise<MetadataRoute.Sitemap>} Complete sitemap data
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Base URL for the website
  const baseUrl = 'https://sv-architects.github.io';
  
  // Current date for last modified
  const currentDate = new Date().toISOString();
  
  // Static pages with high priority
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/team`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/career`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ];

  // Project detail pages
  const projectPages = [
    'don-mueang-airport-terminal-3',
    'somdech-phra-nangchao-sirikit-hospital',
    'u-tapao-airport-new-passenger-terminal',
    'chaopraya-mahanatee-hotel',
    'centerpoint-siamsquare',
    'mahachai-airport-luxe-city-master-plan',
    'jet-villa-residence',
    'maintenance-repair-operation-u-tapao-airport',
    'eec-silicon-technology-park',
    'siamese-rama-9',
    'villa-perpetual',
    'hh-park-residence',
    'phuket-condominium',
    'service-apartment-selangor-malaysia',
    'chaopraya-mahanatee-riverside-condominium',
    'baan-huahin',
    'vivo-executive-apartment',
    'hue-tourist-market',
    'zen-village',
    'transit-oriented-development-tod',
    'geo-valley-apartment-and-master-plan',
    'hi-tech-sandbox',
    'villa-perpetual-rayong-interior-design',
    'sukhumvit-hills',
    'innovation-center',
    'phuket-condominium-interior-design',
    'bunditpatanasilpa-auditorium'
  ].map(slug => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Team member pages (if they exist)
  const teamPages = [
    'picharn-foongkiatcharoen',
    'supassara-bannapanya',
    'niran-siriporn'
  ].map(slug => ({
    url: `${baseUrl}/team/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  // Combine all pages
  return [
    ...staticPages,
    ...projectPages,
    ...teamPages,
  ];
}
