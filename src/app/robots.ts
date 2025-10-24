/**
 * ============================================================================
 * FILE: src/app/robots.ts
 * ============================================================================
 * DESCRIPTION: Robots.txt Configuration for SV Architects Website
 * 
 * This file generates the robots.txt file for search engine crawlers,
 * providing instructions on which pages to crawl and index.
 * 
 * FEATURES:
 * - Allow all crawlers to access all pages
 * - Specify sitemap location
 * - Optimize crawling efficiency
 * - Follow SEO best practices
 * 
 * @author SV Architects Development Team
 * @version 1.0.0
 * @since 2024
 * ============================================================================
 */

import { MetadataRoute } from 'next';

// Force static generation for robots.txt
export const dynamic = 'force-static';

/**
 * Generate robots.txt for SEO
 * 
 * This function creates a robots.txt file that:
 * - Allows all search engine crawlers
 * - Specifies the sitemap location
 * - Optimizes crawling efficiency
 * - Follows SEO best practices
 * 
 * @returns {MetadataRoute.Robots} Robots.txt configuration
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/_next/',
        '/admin/',
        '/private/',
        '*.json',
        '*.xml',
      ],
    },
    sitemap: 'https://sv-architects.github.io/sitemap.xml',
  };
}
