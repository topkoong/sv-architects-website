# SEO Optimization Guide

This document provides comprehensive guidance for SEO optimization of the SV Architects website, including implementation details, best practices, and performance monitoring.

## 📋 Table of Contents

- [SEO Overview](#seo-overview)
- [Technical SEO](#technical-seo)
- [Content SEO](#content-seo)
- [Structured Data](#structured-data)
- [Performance SEO](#performance-seo)
- [Local SEO](#local-seo)
- [Monitoring & Analytics](#monitoring--analytics)
- [SEO Checklist](#seo-checklist)

## 🎯 SEO Overview

### Goals

- **Primary Goal**: Achieve top rankings for architectural services in Thailand
- **Secondary Goals**: 
  - Increase organic traffic by 200%
  - Improve conversion rates from organic search
  - Establish authority in architectural design
  - Generate qualified leads from search

### Target Keywords

#### Primary Keywords
- "architects Bangkok"
- "architectural services Thailand"
- "commercial architecture Bangkok"
- "healthcare architecture Thailand"
- "LEED certified architects"

#### Secondary Keywords
- "sustainable architecture Bangkok"
- "hospitality design Thailand"
- "office building design"
- "residential architecture Bangkok"
- "project management architecture"

#### Long-tail Keywords
- "best architectural firm Bangkok Thailand"
- "LEED certified commercial architects Bangkok"
- "healthcare facility design Thailand"
- "sustainable office building architects"
- "luxury resort architecture Thailand"

## 🔧 Technical SEO

### Meta Tags Implementation

#### Page-Level Meta Tags

```typescript
// src/app/layout.tsx
export const metadata: Metadata = {
  title: {
    default: 'SV Architects and Associates Ltd. | Leading Architectural Firm in Thailand',
    template: '%s | SV Architects and Associates Ltd.'
  },
  description: 'Leading architectural firm in Bangkok, Thailand specializing in commercial, hospitality, healthcare, transportation, aviation, mixed-use, office, and residential projects.',
  keywords: [
    'architects Bangkok',
    'architectural services Thailand',
    'commercial architecture',
    'healthcare architecture',
    'hospitality design',
    'LEED certified architects',
    'sustainable architecture',
    'project management'
  ],
  authors: [{ name: 'SV Architects and Associates Ltd.' }],
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
      'max-snippet': -1,
    },
  },
};
```

#### Dynamic Meta Tags

```typescript
// src/app/team-member/[slug]/page.tsx
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const member = getTeamMemberBySlug(params.slug);
  
  if (!member) {
    return {
      title: 'Team Member Not Found',
      description: 'The requested team member profile could not be found.',
      robots: { index: false, follow: false }
    };
  }

  return {
    title: `MEMBER_FULL_NAME - MEMBER_TITLE`,
    description: `MEMBER_FULL_NAME, MEMBER_TITLE at SV Architects and Associates Ltd. MEMBER_EXPERIENCE_YEARS+ years of experience in MEMBER_EXPERIENCE_AREAS.`,
    keywords: [
      member.fullName,
      member.title,
      'architect',
      'SV Architects',
      ...member.experience.areas,
      'Bangkok architect',
      'Thailand architecture'
    ],
  };
}
```

### Open Graph Implementation

```typescript
// Open Graph metadata
openGraph: {
  type: 'website',
  url: 'https://sv-arch.com',
  title: 'SV Architects and Associates Ltd. | Leading Architectural Firm in Thailand',
  description: 'Leading architectural firm in Bangkok, Thailand specializing in commercial, hospitality, healthcare, and residential projects.',
  siteName: 'SV Architects and Associates Ltd.',
  images: [
    {
      url: 'https://sv-arch.com/images/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'SV Architects - Leading Architectural Firm in Thailand',
    }
  ],
  locale: 'en_US',
  countryName: 'Thailand',
},
```

### Twitter Card Implementation

```typescript
// Twitter Card metadata
twitter: {
  card: 'summary_large_image',
  title: 'SV Architects and Associates Ltd. | Leading Architectural Firm in Thailand',
  description: 'Leading architectural firm in Bangkok, Thailand specializing in commercial, hospitality, healthcare, and residential projects.',
  images: ['https://sv-arch.com/images/twitter-card.jpg'],
  creator: '@svarchitects',
  site: '@svarchitects',
},
```

### Canonical URLs

```typescript
// Canonical URL implementation
alternates: {
  canonical: 'https://sv-arch.com',
  languages: {
    'en-US': 'https://sv-arch.com',
    'th-TH': 'https://sv-arch.com/th',
  },
},
```

### Robots.txt

```txt
# robots.txt
User-agent: *
Allow: /

# Sitemaps
Sitemap: https://sv-arch.com/sitemap.xml
Sitemap: https://sv-arch.com/sitemap-images.xml

# Disallow admin areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/

# Allow important pages
Allow: /projects/
Allow: /team/
Allow: /contact/
```

### XML Sitemap

```typescript
// src/app/sitemap.ts
import { MetadataRoute } from 'next';
import { getAllTeamMemberSlugs } from '@/data/team';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sv-arch.com';
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `BASE_URL/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `BASE_URL/team`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `BASE_URL/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // Dynamic team member pages
  const teamMemberSlugs = getAllTeamMemberSlugs();
  const teamMemberPages = teamMemberSlugs.map((slug) => ({
    url: `BASE_URL/team-member/SLUG`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticPages, ...teamMemberPages];
}
```

## 📝 Content SEO

### Heading Structure

```html
<!-- Proper heading hierarchy -->
<h1>SV Architects and Associates Ltd.</h1>
  <h2>Our Services</h2>
    <h3>Commercial Architecture</h3>
    <h3>Healthcare Facilities</h3>
    <h3>Hospitality Design</h3>
  <h2>Our Team</h2>
    <h3>Leadership Team</h3>
      <h4>Picharn Foongkiatcharoen</h4>
      <h4>Somchai Wongsa</h4>
    <h3>Project Managers</h3>
      <h4>Niran Siriporn</h4>
```

### Content Optimization

#### Homepage Content

```tsx
// Optimized homepage content
const HeroSection = () => (
  <section>
    <h1>Leading Architectural Firm in Bangkok, Thailand</h1>
    <p>
      SV Architects and Associates delivers innovative, sustainable design solutions 
      for commercial, residential, and healthcare projects across Thailand. 
      With over 15 years of excellence, we specialize in LEED-certified buildings 
      and modern architectural design.
    </p>
  </section>
);
```

#### Service Pages Content

```tsx
// Service-specific content
const CommercialArchitectureContent = () => (
  <div>
    <h2>Commercial Architecture Services in Bangkok</h2>
    <p>
      Our commercial architecture team specializes in designing modern office buildings, 
      retail spaces, and commercial complexes throughout Thailand. We combine innovative 
      design with sustainable practices to create functional, energy-efficient commercial spaces.
    </p>
    
    <h3>Commercial Project Types</h3>
    <ul>
      <li>Office Buildings and Corporate Headquarters</li>
      <li>Retail Centers and Shopping Malls</li>
      <li>Mixed-Use Developments</li>
      <li>Industrial Facilities</li>
      <li>LEED-Certified Commercial Buildings</li>
    </ul>
  </div>
);
```

### Image SEO

```tsx
// Optimized image implementation
<OptimizedImage
  src="/images/commercial-office-building.jpg"
  alt="Modern commercial office building designed by SV Architects in Bangkok, Thailand"
  width={800}
  height={600}
  priority={true}
/>
```

#### Image Alt Text Best Practices

- **Descriptive**: "Modern commercial office building designed by SV Architects"
- **Contextual**: Include location and project type
- **Keyword-rich**: Include relevant keywords naturally
- **Specific**: Mention architectural features or design elements

### Internal Linking Strategy

```tsx
// Strategic internal linking
const ProjectCard = ({ project }) => (
  <div>
    <h3>{project.name}</h3>
    <p>{project.description}</p>
    <Link href="/projects/PROJECT_ID">
      View Project Details
    </Link>
    <Link href="/team">
      Meet Our Team
    </Link>
  </div>
);
```

## 🏗️ Structured Data

### Organization Schema

```typescript
// src/app/layout.tsx
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SV Architects and Associates Ltd.',
  alternateName: 'SV Architects',
  url: 'https://sv-arch.com',
  logo: 'https://sv-arch.com/images/logo.png',
  description: 'Leading architectural firm in Bangkok, Thailand specializing in commercial, hospitality, healthcare, transportation, aviation, mixed-use, office, and residential projects.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Sukhumvit Road',
    addressLocality: 'Khlong Toei',
    addressRegion: 'Bangkok',
    postalCode: '10110',
    addressCountry: 'TH'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+66-2-XXX-XXXX',
    contactType: 'customer service',
    areaServed: 'TH',
    availableLanguage: ['en', 'th']
  },
  sameAs: [
    'https://www.facebook.com/svarchitects',
    'https://www.linkedin.com/company/svarchitects',
    'https://www.instagram.com/svarchitects'
  ],
  foundingDate: '2009',
  numberOfEmployees: '50-100',
  industry: 'Architecture',
  services: [
    'Commercial Architecture',
    'Hospitality Design',
    'Healthcare Facilities',
    'Transportation Infrastructure',
    'Aviation Facilities',
    'Mixed-Use Developments',
    'Office Spaces',
    'Residential Projects'
  ]
};
```

### Person Schema (Team Members)

```typescript
// src/app/team-member/[slug]/page.tsx
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: member.fullName,
  givenName: member.firstName,
  familyName: member.lastName,
  jobTitle: member.title,
  worksFor: {
    '@type': 'Organization',
    name: 'SV Architects and Associates Ltd.',
    url: 'https://sv-arch.com'
  },
  alumniOf: member.education.map(edu => ({
    '@type': 'EducationalOrganization',
    name: edu.institution,
    address: {
      '@type': 'PostalAddress',
      addressLocality: edu.location.split(',')[0],
      addressCountry: edu.location.split(',')[1]?.trim()
    }
  })),
  hasCredential: member.certifications.map(cert => ({
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: cert.type,
    about: cert.name,
    recognizedBy: {
      '@type': 'Organization',
      name: cert.issuingBody
    }
  })),
  knowsAbout: member.experience.areas,
  image: `https://sv-arch.com/MEMBER_IMAGE`,
  url: `https://sv-arch.com/team-member/MEMBER_SLUG`,
  email: member.contact.email,
  telephone: member.contact.phone,
  sameAs: Object.values(member.contact.socialMedia || {}).filter(Boolean)
};
```

### CreativeWork Schema (Projects)

```typescript
// Project schema
const projectSchema = {
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: project.name,
  description: project.description,
  creator: {
    '@type': 'Organization',
    name: 'SV Architects and Associates Ltd.',
    url: 'https://sv-arch.com'
  },
  dateCreated: project.year,
  locationCreated: {
    '@type': 'Place',
    name: project.location,
    address: {
      '@type': 'PostalAddress',
      addressLocality: project.location,
      addressCountry: 'TH'
    }
  },
  genre: project.category,
  keywords: project.features,
  image: `https://sv-arch.com/PROJECT_THUMBNAIL`,
  url: `https://sv-arch.com/projects/PROJECT_ID`
};
```

### Breadcrumb Schema

```typescript
// Breadcrumb navigation schema
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://sv-arch.com'
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Team',
      item: 'https://sv-arch.com/team'
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: member.fullName,
      item: `https://sv-arch.com/team-member/MEMBER_SLUG`
    }
  ]
};
```

### FAQ Schema

```typescript
// FAQ schema for common questions
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What architectural services does SV Architects provide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SV Architects provides comprehensive architectural services including commercial architecture, healthcare facilities, hospitality design, transportation infrastructure, aviation facilities, mixed-use developments, office spaces, and residential projects.'
      }
    },
    {
      '@type': 'Question',
      name: 'Are SV Architects LEED certified?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, SV Architects specializes in LEED-certified projects and our team includes LEED Accredited Professionals who ensure sustainable design practices in all our projects.'
      }
    }
  ]
};
```

## ⚡ Performance SEO

### Core Web Vitals Optimization

#### Largest Contentful Paint (LCP)

```typescript
// Optimize LCP with priority loading
<OptimizedImage
  src="/images/hero-image.jpg"
  alt="SV Architects - Leading Architectural Firm"
  priority={true}
  quality={90}
  sizes="100vw"
/>
```

#### First Input Delay (FID)

```typescript
// Minimize JavaScript execution
// Use React.lazy for code splitting
const TeamSection = React.lazy(() => import('./TeamSection'));

// Optimize animations
const optimizedAnimation = {
  duration: 0.3, // Keep animations short
  ease: 'easeOut' // Use efficient easing
};
```

#### Cumulative Layout Shift (CLS)

```typescript
// Reserve space for images
<div className="aspect-[4/3]">
  <OptimizedImage
    src="/images/project.jpg"
    alt="Project image"
    fill
    sizes="(max-width: 768px) 100vw, 50vw"
  />
</div>

// Use consistent font loading
const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // Prevent layout shift
});
```

### Image Optimization

```typescript
// Next.js image optimization
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
};
```

### Font Optimization

```typescript
// Optimize font loading
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});
```

## 🏢 Local SEO

### Google My Business Optimization

```typescript
// Local business schema
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'SV Architects and Associates Ltd.',
  description: 'Leading architectural firm in Bangkok, Thailand',
  url: 'https://sv-arch.com',
  telephone: '+66-2-XXX-XXXX',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Sukhumvit Road',
    addressLocality: 'Khlong Toei',
    addressRegion: 'Bangkok',
    postalCode: '10110',
    addressCountry: 'TH'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '13.7563',
    longitude: '100.5018'
  },
  openingHours: [
    'Mo-Fr 08:00-18:00',
    'Sa 09:00-13:00'
  ],
  priceRange: '$$',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '127'
  }
};
```

### Location-Based Content

```tsx
// Location-specific content
const LocationContent = () => (
  <div>
    <h2>Architectural Services in Bangkok, Thailand</h2>
    <p>
      SV Architects is proud to serve clients throughout Bangkok and Thailand. 
      Our central location in Sukhumvit allows us to easily access projects 
      across the metropolitan area and beyond.
    </p>
    
    <h3>Areas We Serve</h3>
    <ul>
      <li>Bangkok Metropolitan Area</li>
      <li>Central Thailand</li>
      <li>Eastern Seaboard</li>
      <li>Tourist Destinations (Phuket, Chiang Mai)</li>
    </ul>
  </div>
);
```

## 📊 Monitoring & Analytics

### Google Analytics 4 Setup

```typescript
// Google Analytics implementation
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"
        />
        <script
          dangerouslySetInnerHTML={% raw %}{{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_TRACKING_ID', {
                page_title: document.title,
                page_location: window.location.href,
              });
            `,
          }}{% endraw %}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

### Search Console Integration

```typescript
// Google Search Console verification
export const metadata: Metadata = {
  verification: {
    google: 'your-google-search-console-verification-code',
  },
};
```

### Performance Monitoring

```typescript
// Core Web Vitals monitoring
export function reportWebVitals(metric: NextWebVitalsMetric) {
  if (metric.label === 'web-vital') {
    // Send to analytics
    gtag('event', metric.name, {
      value: Math.round(metric.value),
      event_label: metric.id,
      non_interaction: true,
    });
  }
}
```

## ✅ SEO Checklist

### Technical SEO Checklist

- [ ] **Meta Tags**: Title, description, keywords on all pages
- [ ] **Open Graph**: Complete OG tags for social sharing
- [ ] **Twitter Cards**: Twitter-specific meta tags
- [ ] **Canonical URLs**: Proper canonical URL implementation
- [ ] **Robots.txt**: Correct robots.txt file
- [ ] **XML Sitemap**: Complete sitemap with all pages
- [ ] **Structured Data**: JSON-LD markup for all content types
- [ ] **Mobile Optimization**: Responsive design and mobile-first approach
- [ ] **Page Speed**: Core Web Vitals optimization
- [ ] **HTTPS**: SSL certificate implementation
- [ ] **URL Structure**: Clean, SEO-friendly URLs

### Content SEO Checklist

- [ ] **Heading Structure**: Proper H1-H6 hierarchy
- [ ] **Keyword Optimization**: Target keywords in content
- [ ] **Content Quality**: Original, valuable content
- [ ] **Internal Linking**: Strategic internal link structure
- [ ] **Image Optimization**: Alt text and file optimization
- [ ] **Content Freshness**: Regular content updates
- [ ] **User Experience**: Clear navigation and user flow

### Local SEO Checklist

- [ ] **Google My Business**: Complete GMB profile
- [ ] **Local Citations**: Consistent NAP (Name, Address, Phone)
- [ ] **Location Pages**: Location-specific content
- [ ] **Local Keywords**: Location-based keyword targeting
- [ ] **Reviews**: Customer review management
- [ ] **Local Schema**: Local business structured data

### Performance SEO Checklist

- [ ] **Page Speed**: < 3 seconds load time
- [ ] **Core Web Vitals**: LCP < 2.5s, FID < 100ms, CLS < 0.1
- [ ] **Image Optimization**: WebP/AVIF formats
- [ ] **Font Optimization**: Font display swap
- [ ] **Code Splitting**: Efficient JavaScript loading
- [ ] **Caching**: Proper cache headers
- [ ] **CDN**: Content delivery network implementation

### Monitoring Checklist

- [ ] **Google Analytics**: GA4 implementation
- [ ] **Search Console**: GSC setup and monitoring
- [ ] **Performance Monitoring**: Core Web Vitals tracking
- [ ] **Error Monitoring**: 404 and server error tracking
- [ ] **Ranking Monitoring**: Keyword position tracking
- [ ] **Competitor Analysis**: Regular competitor monitoring

## 🚀 SEO Implementation Timeline

### Phase 1: Foundation (Week 1-2)
- Technical SEO setup
- Meta tags implementation
- Structured data markup
- XML sitemap creation

### Phase 2: Content Optimization (Week 3-4)
- Content audit and optimization
- Keyword research and implementation
- Internal linking strategy
- Image optimization

### Phase 3: Performance (Week 5-6)
- Core Web Vitals optimization
- Page speed improvements
- Mobile optimization
- Font and image optimization

### Phase 4: Local SEO (Week 7-8)
- Google My Business setup
- Local schema implementation
- Location-based content
- Review management

### Phase 5: Monitoring (Week 9-10)
- Analytics setup
- Search Console configuration
- Performance monitoring
- SEO reporting

## 📈 Expected Results

### 3 Months
- Improved Core Web Vitals scores
- Better search engine visibility
- Increased organic traffic by 50%

### 6 Months
- Top 10 rankings for primary keywords
- Increased organic traffic by 150%
- Higher conversion rates from organic search

### 12 Months
- Top 3 rankings for primary keywords
- Increased organic traffic by 300%
- Established authority in architectural services
- Consistent lead generation from organic search

---

This SEO guide provides comprehensive strategies and implementation details for optimizing the SV Architects website for search engines. Regular monitoring and updates are essential for maintaining and improving SEO performance.
