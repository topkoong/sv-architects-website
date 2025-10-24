# Project Structure Documentation

This document provides a comprehensive overview of the SV Architects website project structure, explaining the organization, purpose, and relationships between different parts of the codebase.

## 📁 Directory Structure

```
sv-architects-website/
├── 📁 public/                          # Static assets served directly
│   ├── 📁 images/                      # Image assets
│   │   ├── 📁 projects/                # Project images
│   │   ├── 📁 team/                    # Team member photos
│   │   ├── 📁 contact/                 # Contact page images
│   │   └── 📁 patterns/                # Background patterns
│   ├── 📄 favicon.svg                  # SVG favicon
│   ├── 📄 favicon-16x16.png           # 16x16 PNG favicon
│   ├── 📄 favicon-32x32.png           # 32x32 PNG favicon
│   ├── 📄 apple-touch-icon.png        # Apple touch icon
│   ├── 📄 safari-pinned-tab.svg       # Safari pinned tab icon
│   └── 📄 site.webmanifest            # Web app manifest
├── 📁 src/                             # Source code
│   ├── 📁 app/                         # Next.js App Router pages
│   │   ├── 📁 contact/                 # Contact page
│   │   │   └── 📄 page.tsx            # Contact page component
│   │   ├── 📁 projects/                # Projects showcase
│   │   │   └── 📄 page.tsx            # Projects page component
│   │   ├── 📁 team/                    # Team directory
│   │   │   └── 📄 page.tsx            # Team page component
│   │   ├── 📁 team-member/             # Individual team profiles
│   │   │   └── 📁 [slug]/             # Dynamic route for team members
│   │   │       └── 📄 page.tsx        # Team member profile page
│   │   ├── 📄 layout.tsx               # Root layout component
│   │   ├── 📄 page.tsx                 # Homepage component
│   │   ├── 📄 loading.tsx              # Global loading component
│   │   ├── 📄 not-found.tsx            # 404 page component
│   │   └── 📄 error.tsx                # Error page component
│   ├── 📁 components/                  # Reusable React components
│   │   ├── 📁 layout/                  # Layout components
│   │   │   ├── 📄 Header.tsx          # Site header/navigation
│   │   │   └── 📄 Footer.tsx          # Site footer
│   │   └── 📁 ui/                      # UI components
│   │       └── 📄 OptimizedImage.tsx  # Image optimization component
│   ├── 📁 data/                        # Static data and content
│   │   └── 📄 team.ts                 # Team member data
│   ├── 📁 lib/                         # Utility functions and configurations
│   │   └── 📄 animations.ts           # Framer Motion animation variants
│   ├── 📁 styles/                      # Global styles
│   │   └── 📄 globals.css             # Global CSS and Tailwind imports
│   └── 📁 types/                       # TypeScript type definitions
│       ├── 📄 project.ts              # Project-related types
│       └── 📄 team.ts                 # Team member types
├── 📄 .eslintrc.json                   # ESLint configuration
├── 📄 .prettierrc                      # Prettier configuration
├── 📄 .gitignore                       # Git ignore rules
├── 📄 next.config.js                   # Next.js configuration
├── 📄 tailwind.config.js               # Tailwind CSS configuration
├── 📄 postcss.config.js                # PostCSS configuration
├── 📄 tsconfig.json                    # TypeScript configuration
├── 📄 package.json                     # Dependencies and scripts
└── 📄 README.md                        # Project documentation
```

## 🏗️ Architecture Overview

### Next.js App Router Structure

The project uses Next.js 16's App Router, which provides:

- **File-based routing**: Pages are created by adding `page.tsx` files
- **Nested layouts**: Shared UI between pages using `layout.tsx`
- **Loading states**: Automatic loading UI with `loading.tsx`
- **Error handling**: Error boundaries with `error.tsx`
- **Not found pages**: Custom 404 pages with `not-found.tsx`

### Component Architecture

```
📁 components/
├── 📁 layout/           # Layout-level components
│   ├── Header.tsx      # Site navigation
│   └── Footer.tsx      # Site footer
└── 📁 ui/               # Reusable UI components
    └── OptimizedImage.tsx  # Image optimization wrapper
```

### Data Layer

```
📁 data/
└── team.ts             # Static team member data
    ├── teamMembers[]    # Array of team member objects
    ├── getTeamMemberBySlug()    # Get member by URL slug
    ├── getAllTeamMembers()      # Get all members
    ├── getLeadershipTeam()      # Get leadership team
    └── getAllTeamMemberSlugs()  # Get all slugs for static generation
```

### Type System

```
📁 types/
├── project.ts          # Project-related interfaces
│   ├── Project         # Main project interface
│   ├── ProjectImage    # Project image interface
│   └── ProjectCategory # Project category enum
└── team.ts             # Team member interfaces
    ├── TeamMember      # Main team member interface
    ├── Education       # Education interface
    ├── Certification   # Certification interface
    └── WorkHistory     # Work history interface
```

## 🔧 Configuration Files

### Next.js Configuration (`next.config.js`)

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,           // Enable React strict mode
  turbo: {                         // Turbopack configuration
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
  images: {                        // Image optimization
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ['sv-arch.com'],
    minimumCacheTTL: 60,
  },
  compiler: {                      // Compiler options
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {                  // Experimental features
    optimizePackageImports: ['framer-motion'],
  },
  async headers() {                // Security headers
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};
```

### Tailwind CSS Configuration (`tailwind.config.js`)

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {                    // Custom color palette
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb',
          900: '#1e3a8a',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          500: '#737373',
          900: '#171717',
        },
      },
      fontFamily: {               // Custom fonts
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      fontSize: {                  // Custom font sizes
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      boxShadow: {                // Custom shadows
        'elegant': '0 10px 40px -10px rgba(0, 0, 0, 0.1)',
        'luxury': '0 20px 60px -10px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};
```

### TypeScript Configuration (`tsconfig.json`)

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

## 🎨 Styling Architecture

### Global Styles (`src/styles/globals.css`)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Base styles */
@layer base {
  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-feature-settings: 'rlig' 1, 'calt' 1;
  }
  
  /* Custom selection colors */
  ::selection {
    background-color: theme('colors.primary.100');
    color: theme('colors.primary.900');
  }
}

/* Component styles */
@layer components {
  .btn-primary {
    @apply inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-primary-600 rounded-xl hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors duration-200;
  }
  
  .btn-secondary {
    @apply inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-primary-600 bg-white border-2 border-primary-600 rounded-xl hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors duration-200;
  }
  
  .card {
    @apply bg-white rounded-xl shadow-sm border border-neutral-200;
  }
  
  .container-responsive {
    @apply container mx-auto px-4 sm:px-6 lg:px-8;
  }
}

/* Utility classes */
@layer utilities {
  .text-gradient {
    @apply bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent;
  }
  
  .hover-lift {
    @apply transform transition-transform duration-200 hover:scale-105;
  }
  
  .hover-glow {
    @apply transition-shadow duration-200 hover:shadow-lg;
  }
}
```

## 🎭 Animation System

### Animation Variants (`src/lib/animations.ts`)

The animation system is centralized in `src/lib/animations.ts` with predefined variants:

```typescript
// Basic animations
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } }
};

export const slideUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] } }
};

// Stagger animations
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

// Specialized animations
export const heroAnimation: Variants = {
  hidden: { opacity: 0, y: 100, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { duration: 1.2, ease: [0.6, -0.05, 0.01, 0.99], delay: 0.2 } 
  }
};
```

## 📊 Data Flow

### Static Data Management

```typescript
// src/data/team.ts
export const teamMembers: TeamMember[] = [
  // Team member data
];

export const getTeamMemberBySlug = (slug: string): TeamMember | null => {
  return teamMembers.find(member => member.slug === slug) || null;
};

export const getAllTeamMembers = (): TeamMember[] => {
  return teamMembers;
};

export const getLeadershipTeam = (): TeamMember[] => {
  return teamMembers.filter(member => 
    member.position === 'managing-director' || 
    member.position === 'senior-architect'
  );
};
```

### Page Data Flow

1. **Static Generation**: Pages are pre-rendered at build time
2. **Dynamic Routes**: Team member pages use `generateStaticParams()`
3. **Metadata Generation**: Dynamic metadata with `generateMetadata()`
4. **Type Safety**: Full TypeScript coverage for all data structures

## 🔍 SEO Architecture

### Metadata Structure

Each page implements comprehensive SEO:

```typescript
export const metadata: Metadata = {
  title: 'Page Title | SV Architects',
  description: 'Page description',
  keywords: ['keyword1', 'keyword2'],
  openGraph: {
    type: 'website',
    url: 'https://sv-arch.com/page',
    title: 'Page Title',
    description: 'Page description',
    images: ['https://sv-arch.com/image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Page Title',
    description: 'Page description',
    images: ['https://sv-arch.com/image.jpg'],
  },
};
```

### Structured Data

JSON-LD structured data is embedded in pages:

```typescript
const schema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SV Architects and Associates Ltd.',
  // ... additional properties
};
```

## 🚀 Performance Architecture

### Image Optimization

```typescript
// src/components/ui/OptimizedImage.tsx
export const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  priority = false,
  quality = 85,
  // ... other props
}) => {
  // Loading states, error handling, responsive sizing
};
```

### Code Splitting

- **Route-based splitting**: Each page is automatically code-split
- **Component lazy loading**: Heavy components loaded on demand
- **Dynamic imports**: Conditional component loading

### Caching Strategy

- **Static assets**: Long-term caching with versioning
- **API responses**: Appropriate cache headers
- **Image optimization**: Next.js automatic optimization

## 🧪 Testing Strategy

### File Organization

```
📁 __tests__/                    # Test files
├── 📁 components/               # Component tests
├── 📁 pages/                   # Page tests
├── 📁 utils/                   # Utility tests
└── 📁 integration/             # Integration tests
```

### Testing Types

1. **Unit Tests**: Individual component testing
2. **Integration Tests**: Component interaction testing
3. **E2E Tests**: Full user journey testing
4. **Performance Tests**: Lighthouse audits
5. **Accessibility Tests**: axe-core testing

## 📦 Build and Deployment

### Build Process

1. **Type Checking**: TypeScript compilation
2. **Linting**: ESLint code quality checks
3. **Formatting**: Prettier code formatting
4. **Static Generation**: Pre-render all pages
5. **Optimization**: Image and asset optimization
6. **Bundle Analysis**: Size and performance analysis

### Deployment Pipeline

1. **Source Control**: Git-based workflow
2. **CI/CD**: Automated testing and deployment
3. **Environment Management**: Development, staging, production
4. **Monitoring**: Performance and error tracking

## 🔧 Development Workflow

### Local Development

```bash
# Start development server
pnpm dev

# Run type checking
pnpm type-check

# Run linting
pnpm lint

# Format code
pnpm format
```

### Code Quality

- **ESLint**: Code quality and consistency
- **Prettier**: Code formatting
- **TypeScript**: Type safety
- **Husky**: Git hooks for quality gates

### Git Workflow

1. **Feature branches**: `feature/description`
2. **Conventional commits**: `feat:`, `fix:`, `docs:`
3. **Pull requests**: Code review process
4. **Automated testing**: CI/CD pipeline

---

This structure provides a solid foundation for a maintainable, scalable, and performant website that follows modern web development best practices.
