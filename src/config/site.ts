/**
 * ============================================================================
 * FILE: src/config/site.ts
 * ============================================================================
 * DESCRIPTION: Site configuration and helper functions
 * Contains site-wide settings and utility functions
 * ============================================================================
 */

/**
 * Base path for the site
 * Dynamically matches Next.js basePath configuration
 * Empty in development, '/sv-architects-website' in production
 */
export const BASE_PATH = process.env.NODE_ENV === 'production' ? '/sv-architects-website' : '';

/**
 * Site metadata
 */
export const SITE_CONFIG = {
  name: 'SV Architects',
  description: 'Leading architectural firm specializing in innovative design solutions',
  url: 'https://sv-architects.com',
  ogImage: '/images/og-image.jpg',
  twitterHandle: '@svarchitects',
  creator: 'SV Architects',
} as const;

/**
 * Get the full image path with base path
 * @param path - The image path (with or without leading slash)
 * @returns The full image path with base path if needed
 */
export const getImagePath = (path: string): string => {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return BASE_PATH ? `${BASE_PATH}/${cleanPath}` : `/${cleanPath}`;
};

/**
 * Get the full URL for a given path
 * @param path - The path (with or without leading slash)
 * @returns The full URL
 */
export const getFullUrl = (path: string): string => {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const baseUrl = BASE_PATH ? `${SITE_CONFIG.url}${BASE_PATH}` : SITE_CONFIG.url;
  return `${baseUrl}/${cleanPath}`;
};

/**
 * Get the internal link path with base path
 * @param path - The internal path (with or without leading slash)
 * @returns The internal path with base path if needed
 */
export const getInternalPath = (path: string): string => {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return BASE_PATH ? `${BASE_PATH}/${cleanPath}` : `/${cleanPath}`;
};

/**
 * Navigation configuration
 */
export const NAVIGATION = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Team', href: '/team' },
    { name: 'Career', href: '/career' },
    { name: 'Contact', href: '/contact' },
  ],
  footer: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Sitemap', href: '/sitemap' },
  ],
} as const;

/**
 * Social media links
 */
export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/svarchitects',
  twitter: 'https://twitter.com/svarchitects',
  linkedin: 'https://linkedin.com/company/svarchitects',
  instagram: 'https://instagram.com/svarchitects',
} as const;

/**
 * Contact information
 */
export const CONTACT_INFO = {
  email: 'info@sv-architects.com',
  phone: '+66 2 123 4567',
  address: '123 Sukhumvit Road, Bangkok 10110, Thailand',
  officeHours: 'Monday - Friday: 9:00 AM - 6:00 PM',
} as const;
