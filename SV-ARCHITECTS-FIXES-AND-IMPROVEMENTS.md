# SV Architects Website - Comprehensive Diagnostic Report & Fixes

## 🔍 Analysis Summary

After analyzing your uploaded files, I've identified several areas that need attention to ensure your Next.js 16 website meets production-grade standards.

---

## 🚨 Critical Issues Identified

### 1. **Next.js Configuration Issues**

**Problem:** The `next.config.js` has `output: 'export'` which is for static export, but this conflicts with several features:

```javascript
// Current configuration (PROBLEMATIC)
output: 'export',
images: {
  unoptimized: true, // This disables Next.js image optimization!
}
```

**Issues:**
- ❌ Image optimization is completely disabled
- ❌ No server-side rendering capabilities
- ❌ Limited API routes functionality
- ❌ Missing dynamic features

**Solution:**

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development
  reactStrictMode: true,

  // Compiler optimizations
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // REMOVE output: 'export' unless you specifically need static export
  // For GitHub Pages, keep it, but for Vercel/Netlify, remove it
  
  // Image optimization configuration
  images: {
    // DO NOT SET unoptimized: true unless absolutely necessary
    formats: ['image/webp', 'image/avif'],
    domains: ['sv-arch.com'], // Add your domain
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },

  // Performance optimizations
  poweredByHeader: false, // Remove X-Powered-By header
  compress: true, // Enable gzip compression
  
  // Experimental features for Next.js 16
  experimental: {
    // Optimize package imports
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
};

module.exports = nextConfig;
```

---

### 2. **Missing Type Definitions**

**Problem:** The `OptimizedImage` component imports `ProjectImage` type that may not match its props:

```typescript
import { ProjectImage } from '@/types/project';
```

**Solution:** Ensure type consistency:

```typescript
// In src/types/project.ts - ensure this matches your OptimizedImage needs
export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
  isPrimary?: boolean;
  width?: number;
  height?: number;
}
```

---

### 3. **Animation Performance Issues**

**Problem:** The `animations.ts` file uses complex animations that might cause performance issues:

```typescript
// Potentially heavy animation
export const slideUp: Variants = {
  hidden: { 
    opacity: 0,
    y: 60 // Large movement
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.8, // Long duration
      ease: [0.6, -0.05, 0.01, 0.99] // Complex cubic-bezier
    }
  }
};
```

**Solution:** Optimize animations for better performance:

```typescript
// Optimized version
export const slideUp: Variants = {
  hidden: { 
    opacity: 0,
    y: 30, // Reduced movement for better performance
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.5, // Shorter duration
      ease: 'easeOut', // Simpler easing
    }
  }
};
```

---

### 4. **Header Component Mobile Menu Issues**

**Problem:** The mobile menu has complex state management that could cause issues:

```typescript
// In Header.tsx - lines 76-91
useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (isMobileMenuOpen && !target.closest('.mobile-menu-container')) {
      setIsMobileMenuOpen(false);
    }
  };
  // ... event listener logic
}, [isMobileMenuOpen]);
```

**Issues:**
- Multiple useEffect hooks for the same functionality
- Potential memory leaks
- Race conditions with event listeners

**Solution:** Consolidate into a single, more robust hook:

```typescript
'use client';

import { useEffect, useState, useCallback, useRef } from 'react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Consolidated effect for mobile menu closing
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    // Add both listeners
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    
    // Prevent body scroll when menu is open
    document.body.style.overflow = 'hidden';

    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Rest of component...
  return (
    <motion.header {...}>
      {/* ... */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            ref={menuRef} // Add ref here
            // ... rest of mobile menu
          >
            {/* Menu content */}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
```

---

### 5. **Image Loading Strategy Issues**

**Problem:** The `OptimizedImage` component doesn't properly handle loading states:

**Solution:** Enhanced loading states:

```typescript
export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  priority = false,
  fill = false,
  className = '',
  objectFit = 'cover',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  quality = 85,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [imageSrc, setImageSrc] = useState(src);

  // Reset states when src changes
  useEffect(() => {
    setIsLoading(true);
    setHasError(false);
    setImageSrc(src);
  }, [src]);

  const handleLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  const handleError = useCallback(() => {
    setHasError(true);
    setIsLoading(false);
    // Set fallback image
    setImageSrc('/images/placeholder.jpg');
  }, []);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Loading skeleton */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200 animate-pulse" />
      )}
      
      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 bg-neutral-100 flex items-center justify-center">
          <div className="text-center p-4">
            <svg className="w-12 h-12 mx-auto mb-2 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-sm text-neutral-500">Image unavailable</p>
          </div>
        </div>
      )}

      {/* Image */}
      <Image
        src={imageSrc}
        alt={alt}
        fill={fill}
        priority={priority}
        quality={quality}
        sizes={sizes}
        style={{ objectFit }}
        onLoad={handleLoad}
        onError={handleError}
        className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        {...props}
      />
    </div>
  );
};
```

---

### 6. **Missing Global Styles**

**Problem:** The `globals.css` file is comprehensive but missing some critical responsive utilities:

**Solution:** Add these to your `globals.css`:

```css
/* Add to globals.css */

/* Improved focus states for accessibility */
@layer base {
  *:focus-visible {
    @apply outline-none ring-2 ring-primary-500 ring-offset-2 rounded;
  }
  
  /* Remove focus ring for mouse users */
  *:focus:not(:focus-visible) {
    @apply outline-none ring-0;
  }
}

/* Better text rendering */
@layer base {
  body {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
}

/* Container query support */
@layer utilities {
  .container-query {
    container-type: inline-size;
  }
}

/* Safe area insets for mobile devices */
@layer utilities {
  .safe-top {
    padding-top: env(safe-area-inset-top);
  }
  
  .safe-bottom {
    padding-bottom: env(safe-area-inset-bottom);
  }
  
  .safe-left {
    padding-left: env(safe-area-inset-left);
  }
  
  .safe-right {
    padding-right: env(safe-area-inset-right);
  }
}

/* Improved touch targets for mobile */
@layer utilities {
  .touch-target {
    @apply min-h-[44px] min-w-[44px];
  }
}
```

---

### 7. **Team Member Data Validation**

**Problem:** The team member data might not have proper validation:

**Solution:** Add runtime validation:

```typescript
// In src/data/team.ts

import { TeamMember } from '@/types/team';

/**
 * Validate team member data
 */
function validateTeamMember(member: TeamMember): boolean {
  const required = [
    member.id,
    member.slug,
    member.fullName,
    member.position,
    member.title,
    member.image,
    member.bio,
  ];

  return required.every(field => Boolean(field));
}

/**
 * Get team member by slug with validation
 */
export function getTeamMemberBySlug(slug: string): TeamMember | undefined {
  const member = teamMembers.find(m => m.slug === slug);
  
  if (member && !validateTeamMember(member)) {
    console.error(`Invalid team member data for slug: ${slug}`);
    return undefined;
  }
  
  return member;
}
```

---

## ✅ Recommended Improvements

### 1. **Add Error Boundaries**

Create a comprehensive error boundary component:

```typescript
// src/components/ErrorBoundary.tsx
'use client';

import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-screen flex items-center justify-center bg-neutral-50">
          <div className="text-center p-8">
            <h1 className="text-4xl font-bold text-text-primary mb-4">
              Oops! Something went wrong
            </h1>
            <p className="text-lg text-text-secondary mb-8">
              We're sorry for the inconvenience. Please try refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="btn-primary"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
```

### 2. **Add Loading States**

Create a proper loading component:

```typescript
// src/app/loading.tsx
export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-lg text-text-secondary">Loading...</p>
      </div>
    </div>
  );
}
```

### 3. **Implement Proper SEO**

Create a comprehensive SEO component:

```typescript
// src/components/SEO.tsx
import Head from 'next/head';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
}

export function SEO({ 
  title, 
  description, 
  image = '/images/og-default.jpg',
  url,
  type = 'website'
}: SEOProps) {
  const siteUrl = 'https://sv-arch.com';
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const fullImage = `${siteUrl}${image}`;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title} | SV Architects</title>
      <meta name="description" content={description} />
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content="SV Architects" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
    </Head>
  );
}
```

### 4. **Add Performance Monitoring**

```typescript
// src/lib/performance.ts

/**
 * Log Web Vitals metrics
 */
export function reportWebVitals(metric: any) {
  if (process.env.NODE_ENV === 'production') {
    // Send to analytics service
    console.log(metric);
    
    // Example: Send to Google Analytics
    if (window.gtag) {
      window.gtag('event', metric.name, {
        value: Math.round(metric.value),
        metric_id: metric.id,
        metric_value: metric.value,
        metric_delta: metric.delta,
      });
    }
  }
}
```

Then in your `src/app/layout.tsx`:

```typescript
import { reportWebVitals } from '@/lib/performance';

export { reportWebVitals };
```

---

## 📱 Mobile Responsiveness Checklist

### Issues to Fix:

1. **Touch Targets Too Small**
   - Ensure all buttons are minimum 44x44px
   - Add padding to navigation items

2. **Text Too Small on Mobile**
   - Check that body text is minimum 16px
   - Headings should scale properly

3. **Images Not Optimized for Mobile**
   - Use responsive images with proper `sizes` attribute
   - Implement lazy loading properly

4. **Navigation Issues on Small Screens**
   - Mobile menu should work smoothly
   - No horizontal scrolling

### Testing Checklist:

```markdown
## Mobile Testing Checklist

- [ ] Test on iPhone SE (375px)
- [ ] Test on iPhone 12/13/14 (390px)
- [ ] Test on iPhone 12/13/14 Pro Max (428px)
- [ ] Test on iPad Mini (768px)
- [ ] Test on iPad Pro (1024px)
- [ ] All text is readable (minimum 16px body)
- [ ] Touch targets are minimum 44x44px
- [ ] Images load properly on all devices
- [ ] Navigation works on all screen sizes
- [ ] No horizontal scrolling
- [ ] Forms are easy to use on mobile
- [ ] Spacing looks balanced
- [ ] Typography scales appropriately
```

---

## 🎯 Performance Optimization Checklist

### Current Issues:

1. ❌ Image optimization disabled (`unoptimized: true`)
2. ❌ Heavy animations (large movements, long durations)
3. ❌ Multiple useEffect hooks in Header
4. ❌ No code splitting strategy
5. ❌ No bundle size monitoring

### Fixes:

```bash
# 1. Enable proper image optimization
# Remove unoptimized: true from next.config.js

# 2. Add bundle analyzer
npm install --save-dev @next/bundle-analyzer

# Then in next.config.js:
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);

# 3. Run bundle analysis
ANALYZE=true npm run build

# 4. Implement dynamic imports for heavy components
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('@/components/HeavyComponent'), {
  loading: () => <LoadingSpinner />,
  ssr: false, // If component is client-side only
});

# 5. Add lighthouse CI for automated performance testing
npm install --save-dev @lhci/cli
```

---

## 🔧 Deployment Configuration

### For Vercel (Recommended):

```bash
# vercel.json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "regions": ["sin1"], # Singapore region for Thailand
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        }
      ]
    }
  ]
}
```

### For GitHub Pages:

If you must use GitHub Pages (with `output: 'export'`):

```javascript
// next.config.js for GitHub Pages
const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Required for GitHub Pages
  basePath: isProd ? '/repository-name' : '',
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true,
};

module.exports = nextConfig;
```

**Note:** If using GitHub Pages, you'll lose:
- Image optimization
- API routes
- Server-side rendering
- Incremental Static Regeneration

**Recommendation:** Use Vercel or Netlify instead for best performance.

---

## 🐛 Common Issues and Solutions

### Issue 1: "Module not found" errors

**Solution:**
```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run dev
```

### Issue 2: Images not loading

**Solution:**
```typescript
// Check image paths are correct
// Images in public/ should be referenced as /images/...
<OptimizedImage src="/images/team/picharn.jpg" alt="..." />
```

### Issue 3: Animations causing janky performance

**Solution:**
```typescript
// Use will-change CSS property sparingly
.animated-element {
  will-change: transform, opacity;
}

// Remove after animation completes
.animated-element:not(:hover) {
  will-change: auto;
}
```

### Issue 4: Mobile menu not closing

**Solution:**
```typescript
// Ensure ref is properly attached
const menuRef = useRef<HTMLDivElement>(null);

// Use ref in AnimatePresence
<motion.nav ref={menuRef}>
  {/* Menu content */}
</motion.nav>
```

---

## 📊 Performance Targets

### Before Optimization:
- Lighthouse Performance: Unknown
- FCP: Unknown
- LCP: Unknown
- Bundle Size: Unknown

### After Optimization (Goals):
- ✅ Lighthouse Performance: 95+ (mobile), 98+ (desktop)
- ✅ First Contentful Paint: < 1.2s
- ✅ Largest Contentful Paint: < 2.5s
- ✅ Cumulative Layout Shift: < 0.1
- ✅ Time to Interactive: < 3.5s
- ✅ JS Bundle Size: < 100KB (gzipped)

---

## 🚀 Next Steps

### Immediate Actions (Priority 1):

1. **Fix Next.js Configuration**
   - Remove `output: 'export'` if not using GitHub Pages
   - Enable proper image optimization
   - Add proper domain configuration

2. **Fix Header Component**
   - Consolidate useEffect hooks
   - Add proper ref for mobile menu
   - Add body scroll lock

3. **Optimize Images**
   - Ensure all images have proper alt text
   - Use appropriate sizes attribute
   - Implement proper loading states

### Short-term Actions (Priority 2):

4. **Add Error Boundaries**
   - Implement global error boundary
   - Add specific error boundaries for critical sections

5. **Improve Performance**
   - Reduce animation complexity
   - Implement code splitting
   - Add bundle analyzer

6. **Mobile Testing**
   - Test on all target devices
   - Fix touch target sizes
   - Ensure no horizontal scrolling

### Long-term Actions (Priority 3):

7. **Add Analytics**
   - Implement Google Analytics
   - Track Web Vitals
   - Monitor performance metrics

8. **Add Testing**
   - Unit tests for components
   - Integration tests for pages
   - E2E tests for critical flows

9. **Documentation**
   - Update README with deployment instructions
   - Document component props
   - Add code comments

---

## 📝 Updated Team Member: Picharn Foongkiatcharoen

The team data already looks correct based on the uploaded `team.ts` file. The profile includes:

✅ Correct position: Head of Architect
✅ Correct education: Master of the Built Environment in Sustainable Development and Architecture, UNSW
✅ 15+ years experience
✅ Multiple architectural sectors covered

**No changes needed** - the data is already properly structured.

---

## 🎨 Design System Consistency

### Colors:
```css
/* Ensure these are used consistently throughout */
--primary: #2563eb (Blue)
--neutral: Various grays
--accent-gold: #d4af37
```

### Typography:
```css
/* Body: Inter */
/* Display: Playfair Display */
/* Ensure minimum 16px for body text on mobile */
```

### Spacing:
```css
/* Use Tailwind spacing scale consistently */
/* Avoid magic numbers */
```

---

## 🔒 Security Checklist

- [ ] Remove `X-Powered-By` header
- [ ] Add Content Security Policy
- [ ] Implement rate limiting for contact forms
- [ ] Sanitize user inputs
- [ ] Use HTTPS everywhere
- [ ] Add security headers
- [ ] Implement CORS properly
- [ ] No sensitive data in client-side code

---

## 📈 Monitoring Setup

```typescript
// src/lib/monitoring.ts

export function initMonitoring() {
  // Web Vitals
  if (typeof window !== 'undefined') {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(console.log);
      getFID(console.log);
      getFCP(console.log);
      getLCP(console.log);
      getTTFB(console.log);
    });
  }
}
```

---

## 🎓 Learning Resources

- [Next.js 16 Documentation](https://nextjs.org/docs)
- [Framer Motion Best Practices](https://www.framer.com/motion/)
- [Web Vitals](https://web.dev/vitals/)
- [Lighthouse Performance Guide](https://web.dev/performance-scoring/)
- [Tailwind CSS Best Practices](https://tailwindcss.com/docs)

---

## 🤝 Support

If you need help implementing these fixes:

1. Start with Priority 1 items
2. Test thoroughly on mobile devices
3. Monitor performance metrics
4. Iterate based on user feedback

---

## ✅ Final Checklist

Before deploying to production:

- [ ] All TypeScript errors resolved
- [ ] ESLint warnings addressed
- [ ] Mobile responsiveness tested on all devices
- [ ] Performance meets target metrics
- [ ] SEO metadata complete on all pages
- [ ] Images optimized and loading properly
- [ ] Animations smooth and performant
- [ ] Error boundaries implemented
- [ ] Loading states working
- [ ] 404 page styled and functional
- [ ] Contact form working
- [ ] Analytics configured
- [ ] Security headers in place
- [ ] Documentation updated
- [ ] Environment variables configured
- [ ] Deployment tested on staging

---

**Created:** October 24, 2025  
**Version:** 1.0  
**Status:** Ready for Implementation

Good luck with your deployment! 🚀
