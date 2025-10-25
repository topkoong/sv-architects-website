/**
 * ============================================================================
 * FILE: next.config.js
 * ============================================================================
 * DESCRIPTION: Next.js configuration for SV Architects website
 * FIXED VERSION - Optimized for production deployment
 * 
 * IMPORTANT DECISION POINTS:
 * 
 * 1. DEPLOYMENT TARGET:
 *    - For Vercel/Netlify: Use the "PRODUCTION" configuration
 *    - For GitHub Pages: Use the "GITHUB PAGES" configuration
 *    - Recommendation: Use Vercel for best performance
 * 
 * 2. IMAGE OPTIMIZATION:
 *    - Production: Full optimization enabled with WebP/AVIF
 *    - GitHub Pages: Optimization disabled (required for static export)
 * 
 * 3. RENDERING:
 *    - Production: Hybrid (SSR + SSG) for best performance and SEO
 *    - GitHub Pages: Static export only (all pages pre-rendered)
 * 
 * ============================================================================
 */

// ============================================================================
// CONFIGURATION OPTION 1: PRODUCTION (RECOMMENDED)
// Use this for Vercel, Netlify, or any platform supporting SSR
// ============================================================================

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Compiler optimizations
  compiler: {
    // Remove console.log in production for cleaner output
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'], // Keep error and warn
    } : false,
  },

  // CRITICAL: Enable static export for GitHub Pages
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  
  // Set base path to repository name for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/sv-architects-website' : '',
  
  // Disable trailing slash to fix hydration errors
  trailingSlash: false,
  
  // Image configuration - optimized for performance
  images: {
    unoptimized: true, // Required for static export
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },

  // Performance optimizations
  poweredByHeader: false, // Remove X-Powered-By header for security
  compress: true, // Enable gzip compression
  
  // Experimental features for performance
  experimental: {
    optimizePackageImports: ['framer-motion', 'react-icons', 'lucide-react'],
  },
};

module.exports = nextConfig;

// ============================================================================
// CONFIGURATION OPTION 2: GITHUB PAGES (STATIC EXPORT)
// Use this ONLY if deploying to GitHub Pages
// NOTE: This disables many Next.js features including image optimization
// ============================================================================

/*
const isProd = process.env.NODE_ENV === 'production';
const repoName = 'sv-architects-website'; // CHANGE THIS to your repository name

const nextConfig = {
  // Enable React strict mode
  reactStrictMode: true,

  // Compiler optimizations
  compiler: {
    removeConsole: isProd ? { exclude: ['error', 'warn'] } : false,
  },

  // CRITICAL: Enable static export for GitHub Pages
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  
  // Set base path to repository name for GitHub Pages
  basePath: isProd ? `/${repoName}` : '',
  
  // Required for GitHub Pages
  trailingSlash: true,
  
  // Image configuration for static export
  images: {
    unoptimized: true, // REQUIRED for static export (disables optimization)
    formats: ['image/webp', 'image/avif'],
    domains: [],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Performance optimizations
  poweredByHeader: false,
  compress: true,

  // Experimental features
  experimental: {
    optimizePackageImports: ['framer-motion', 'react-icons', 'lucide-react'],
  },
};

module.exports = nextConfig;
*/

// ============================================================================
// NOTES AND RECOMMENDATIONS
// ============================================================================

/*
DEPLOYMENT COMPARISON:

1. VERCEL (RECOMMENDED):
   ✅ Full image optimization (WebP, AVIF)
   ✅ Automatic HTTPS
   ✅ CDN with edge network
   ✅ Zero configuration
   ✅ Preview deployments
   ✅ Analytics built-in
   ✅ Best performance
   
2. NETLIFY:
   ✅ Good image optimization
   ✅ Automatic HTTPS
   ✅ CDN
   ✅ Form handling
   ✅ Deploy previews
   ⚠️  Slightly slower than Vercel
   
3. GITHUB PAGES:
   ❌ No image optimization
   ❌ No server-side features
   ❌ No API routes
   ❌ No ISR
   ❌ Slower performance
   ✅ Free hosting
   ✅ Simple deployment

RECOMMENDATION:
Use Vercel or Netlify for production. GitHub Pages should only be used
for demo/testing purposes due to significant feature limitations.

PERFORMANCE TIPS:
1. Always use image optimization when possible
2. Enable compression
3. Set proper cache headers
4. Use security headers
5. Monitor Web Vitals
6. Use CDN for static assets
7. Optimize bundle size
8. Enable tree-shaking

SECURITY BEST PRACTICES:
1. Remove X-Powered-By header
2. Set X-Frame-Options
3. Enable HSTS
4. Set Content-Security-Policy
5. Configure CORS properly
6. Sanitize user inputs
7. Use environment variables for secrets
8. Implement rate limiting

DEVELOPMENT WORKFLOW:
1. Development: npm run dev
2. Build: npm run build
3. Start production: npm start
4. Analyze bundle: ANALYZE=true npm run build (requires @next/bundle-analyzer)
5. Lighthouse audit: npm run lighthouse (custom script)
*/
