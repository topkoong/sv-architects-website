/**
 * ============================================================================
 * FILE: src/components/SEO.tsx
 * ============================================================================
 * DESCRIPTION: SEO Component for SV Architects Website
 * 
 * This component provides comprehensive SEO meta tags for pages that need
 * dynamic SEO configuration. It handles Open Graph, Twitter Cards, and
 * basic meta tags for optimal search engine visibility.
 * 
 * FEATURES:
 * - Dynamic title and description
 * - Open Graph meta tags for social sharing
 * - Twitter Card optimization
 * - Canonical URL management
 * - Flexible image and URL handling
 * 
 * @author SV Architects Development Team
 * @version 1.0.0
 * @since 2024
 * ============================================================================
 */

import Head from 'next/head';

/**
 * ============================================================================
 * TYPESCRIPT INTERFACES
 * ============================================================================
 */

/**
 * Props interface for SEO component
 */
interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
}

/**
 * ============================================================================
 * CONSTANTS
 * ============================================================================
 */

/**
 * Base site URL for absolute URL generation
 */
const SITE_BASE_URL = 'https://sv-architects.github.io';

/**
 * Default Open Graph image
 */
const DEFAULT_OG_IMAGE = '/sv-architects-website/images/og-default.jpg';

/**
 * Default meta type
 */
const DEFAULT_META_TYPE = 'website';

/**
 * ============================================================================
 * SEO COMPONENT
 * ============================================================================
 * 
 * Generates comprehensive SEO meta tags for optimal search engine visibility
 * and social media sharing. Handles Open Graph, Twitter Cards, and basic
 * meta tags with automatic URL generation.
 * 
 * FEATURES:
 * - Dynamic page titles with site branding
 * - Meta descriptions for search results
 * - Open Graph tags for social sharing
 * - Twitter Card optimization
 * - Canonical URL management
 * - Automatic absolute URL generation
 * 
 * USAGE:
 * <SEO
 *   title="Page Title"
 *   description="Page description"
 *   image="/sv-architects-website/images/page-specific.jpg"
 *   url="/page-path"
 *   type="article"
 * />
 */
export function SEO({ 
  title, 
  description, 
  image = DEFAULT_OG_IMAGE,
  url,
  type = DEFAULT_META_TYPE
}: SEOProps) {
  // Generate absolute URLs with proper validation
  const absoluteUrl = url ? `${SITE_BASE_URL}${url}` : SITE_BASE_URL;
  const absoluteImageUrl = `${SITE_BASE_URL}${image}`;
  
  // Generate full page title with consistent branding
  const fullPageTitle = `${title} | SV Architects and Associates Ltd.`;
  
  // Site name constant for consistency
  const siteName = 'SV Architects and Associates Ltd.';

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullPageTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content={siteName} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteImageUrl} />
      <meta property="og:url" content={absoluteUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImageUrl} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={absoluteUrl} />
    </Head>
  );
}