# Components Documentation

This document provides detailed documentation for all components in the SV Architects website, including usage examples, props, and implementation details.

## 📋 Table of Contents

- [Layout Components](#layout-components)
- [UI Components](#ui-components)
- [Page Components](#page-components)
- [Animation Components](#animation-components)
- [Component Guidelines](#component-guidelines)

## 🏗️ Layout Components

### Header Component

**File**: `src/components/layout/Header.tsx`

The main site header with responsive navigation and mobile menu.

#### Features

- Responsive navigation with mobile hamburger menu
- Active page highlighting with animated underlines
- Smooth scroll-based background opacity changes
- Keyboard accessible navigation
- Mobile-first responsive design

#### Props

```typescript
interface HeaderProps {
  // No props - uses internal state and routing
}
```

#### Usage

```tsx
import { Header } from '@/components/layout/Header';

export default function Layout() {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
}
```

#### Implementation Details

- **State Management**: Uses `useState` for mobile menu toggle
- **Scroll Effects**: Uses `useEffect` with scroll listener
- **Animations**: Framer Motion for smooth transitions
- **Accessibility**: Proper ARIA labels and keyboard navigation

#### Styling Classes

```css
.header-container {
  @apply fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200;
}

.nav-link {
  @apply relative px-4 py-2 text-neutral-700 hover:text-primary-600 transition-colors duration-200;
}

.nav-link.active::after {
  @apply absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600;
}
```

### Footer Component

**File**: `src/components/layout/Footer.tsx`

The main site footer with company information and navigation links.

#### Features

- Company information and branding
- Navigation links organized in columns
- Contact information with icons
- Social media links
- Services listing
- Copyright and legal information

#### Props

```typescript
interface FooterProps {
  // No props - static content
}
```

#### Usage

```tsx
import { Footer } from '@/components/layout/Footer';

export default function Layout() {
  return (
    <div>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
```

#### Implementation Details

- **Responsive Grid**: CSS Grid with responsive columns
- **Icon Integration**: SVG icons for contact methods
- **Social Links**: External links with proper attributes
- **Animations**: Framer Motion for staggered animations

## 🎨 UI Components

### OptimizedImage Component

**File**: `src/components/ui/OptimizedImage.tsx`

A wrapper around Next.js Image component with enhanced features for loading states and error handling.

#### Features

- Automatic image optimization using next/image
- Loading skeleton with shimmer effect
- Error state with retry functionality
- Responsive sizing and aspect ratio handling
- Lazy loading with intersection observer
- WebP/AVIF format support
- Accessibility features (alt text, loading states)

#### Props

```typescript
interface OptimizedImageProps {
  src: string;                    // Image source URL or path
  alt: string;                   // Alt text for accessibility (required)
  width?: number;                // Image width (optional if fill is true)
  height?: number;               // Image height (optional if fill is true)
  priority?: boolean;            // Load image immediately (for above-fold images)
  fill?: boolean;                // Image fills parent container
  className?: string;            // Additional CSS classes
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  sizes?: string;                // Responsive sizes for different breakpoints
  quality?: number;              // Image quality (1-100, default: 85)
  placeholder?: 'blur' | 'empty'; // Placeholder type
  blurDataURL?: string;         // Base64 encoded blur placeholder
  loading?: 'lazy' | 'eager';   // Loading behavior
  onLoad?: () => void;          // Callback when image loads
  onError?: () => void;         // Callback when image fails to load
}
```

#### Usage

```tsx
import { OptimizedImage } from '@/components/ui/OptimizedImage';

// Basic usage
<OptimizedImage
  src="/images/project.jpg"
  alt="Project description"
  width={800}
  height={600}
/>

// With priority loading
<OptimizedImage
  src="/images/hero.jpg"
  alt="Hero image"
  width={1200}
  height={600}
  priority={true}
  quality={90}
/>

// Fill container
<OptimizedImage
  src="/images/team-member.jpg"
  alt="Team member photo"
  fill
  className="rounded-full"
/>
```

#### Specialized Components

##### HeroImage

```tsx
import { HeroImage } from '@/components/ui/OptimizedImage';

<HeroImage
  src="/images/hero.jpg"
  alt="Hero image"
  width={1200}
  height={600}
/>
```

**Features**:
- Priority loading enabled
- Higher quality (90)
- Blur placeholder
- Full viewport width sizing

##### ProjectThumbnail

```tsx
import { ProjectThumbnail } from '@/components/ui/OptimizedImage';

<ProjectThumbnail
  src="/images/project-thumb.jpg"
  alt="Project thumbnail"
  width={400}
  height={300}
/>
```

**Features**:
- Optimized for project showcases
- Responsive sizing
- Good quality (80)
- Blur placeholder

##### TeamMemberPhoto

```tsx
import { TeamMemberPhoto } from '@/components/ui/OptimizedImage';

<TeamMemberPhoto
  src="/images/team-member.jpg"
  alt="Team member photo"
  width={300}
  height={300}
/>
```

**Features**:
- Optimized for profile photos
- Responsive sizing
- Good quality (85)
- Blur placeholder

##### GalleryImage

```tsx
import { GalleryImage } from '@/components/ui/OptimizedImage';

<GalleryImage
  src="/images/gallery.jpg"
  alt="Gallery image"
  width={600}
  height={400}
/>
```

**Features**:
- High quality (90)
- Gallery-optimized sizing
- Blur placeholder

#### Utility Functions

```tsx
import { 
  getResponsiveSizes, 
  generateBlurPlaceholder, 
  getOptimalQuality 
} from '@/components/ui/OptimizedImage';

// Get responsive sizes for different layouts
const heroSizes = getResponsiveSizes('hero');
const cardSizes = getResponsiveSizes('card');

// Generate blur placeholder
const blurDataURL = generateBlurPlaceholder(10, 10);

// Get optimal quality for use case
const heroQuality = getOptimalQuality('hero');
const thumbnailQuality = getOptimalQuality('thumbnail');
```

## 📄 Page Components

### Homepage Components

**File**: `src/app/page.tsx`

#### HeroSection

```tsx
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-neutral-50 to-neutral-100">
      {/* Hero content */}
    </section>
  );
};
```

**Features**:
- Full viewport height
- Gradient background
- Responsive layout
- Call-to-action buttons
- Floating statistics card

#### FeaturedProjectsSection

```tsx
const FeaturedProjectsSection = () => {
  const featuredProjects = [
    // Project data
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24">
      {/* Projects grid */}
    </section>
  );
};
```

**Features**:
- Responsive grid layout
- Hover effects
- Project filtering
- View all projects button

#### AboutSection

```tsx
const AboutSection = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-neutral-50">
      {/* About content */}
    </section>
  );
};
```

**Features**:
- Two-column layout
- Company statistics
- Professional image
- Responsive design

#### TeamSection

```tsx
const TeamSection = ({ teamMembers }: { teamMembers: TeamMember[] }) => {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      {/* Team grid */}
    </section>
  );
};
```

**Features**:
- Team member cards
- Profile photos
- Skills display
- Link to individual profiles

#### ServicesSection

```tsx
const ServicesSection = () => {
  const services = [
    // Service data
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-neutral-50">
      {/* Services grid */}
    </section>
  );
};
```

**Features**:
- Service cards with icons
- Hover effects
- Responsive grid
- Professional styling

#### ContactCTASection

```tsx
const ContactCTASection = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-primary-600">
      {/* Contact CTA */}
    </section>
  );
};
```

**Features**:
- Call-to-action buttons
- Primary color background
- Responsive layout
- Contact links

### Team Page Components

**File**: `src/app/team/page.tsx`

#### HeroSection

```tsx
const HeroSection = () => {
  return (
    <section className="relative py-16 md:py-20 lg:py-24 bg-gradient-to-br from-primary-50 to-neutral-100 overflow-hidden">
      {/* Team overview */}
    </section>
  );
};
```

**Features**:
- Team statistics
- Company culture overview
- Responsive design

#### LeadershipSection

```tsx
const LeadershipSection = ({ teamMembers }: { teamMembers: TeamMember[] }) => {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      {/* Leadership team grid */}
    </section>
  );
};
```

**Features**:
- Leadership team highlights
- Enhanced member cards
- Skills display
- Profile links

#### AllTeamSection

```tsx
const AllTeamSection = ({ teamMembers }: { teamMembers: TeamMember[] }) => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-neutral-50">
      {/* All team members grid */}
    </section>
  );
};
```

**Features**:
- Complete team directory
- Detailed member information
- Experience and skills
- Contact information

#### CultureSection

```tsx
const CultureSection = () => {
  const values = [
    // Company values
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24">
      {/* Company culture */}
    </section>
  );
};
```

**Features**:
- Company values
- Culture highlights
- Join our team CTA

### Team Member Profile Components

**File**: `src/app/team-member/[slug]/page.tsx`

#### HeroSection

```tsx
const HeroSection = ({ member }: { member: TeamMember }) => {
  return (
    <section className="relative h-[60vh] bg-gradient-to-br from-neutral-900 to-neutral-800 overflow-hidden">
      {/* Member hero */}
    </section>
  );
};
```

**Features**:
- Member photo background
- Name and title overlay
- Years of experience badge
- Professional styling

#### ContentSection

```tsx
const ContentSection = ({ member }: { member: TeamMember }) => {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      {/* Member details */}
    </section>
  );
};
```

**Features**:
- Biography section
- Education details
- Professional experience
- Skills and certifications
- Project involvement

#### ContactSection

```tsx
const ContactSection = ({ member }: { member: TeamMember }) => {
  return (
    <section className="py-16 bg-neutral-50">
      {/* Contact information */}
    </section>
  );
};
```

**Features**:
- Contact details
- Social media links
- Additional information
- Back to team button

### Projects Page Components

**File**: `src/app/projects/page.tsx`

#### HeroSection

```tsx
const HeroSection = () => {
  return (
    <section className="relative py-16 md:py-20 lg:py-24 bg-gradient-to-br from-primary-50 to-neutral-100 overflow-hidden">
      {/* Projects overview */}
    </section>
  );
};
```

**Features**:
- Project statistics
- Portfolio overview
- Responsive design

#### ProjectsFilter

```tsx
const ProjectsFilter = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <section className="py-8 bg-white border-b border-neutral-200">
      {/* Category filters */}
    </section>
  );
};
```

**Features**:
- Category filtering
- Active state management
- Responsive buttons
- Project counts

#### ProjectsGrid

```tsx
const ProjectsGrid = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category.toLowerCase() === activeCategory);

  return (
    <section className="py-16 md:py-20 lg:py-24">
      {/* Filtered projects */}
    </section>
  );
};
```

**Features**:
- Dynamic filtering
- Project cards
- Status badges
- Sustainability indicators
- View details links

#### StatisticsSection

```tsx
const StatisticsSection = () => {
  const stats = [
    // Project statistics
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-neutral-50">
      {/* Statistics grid */}
    </section>
  );
};
```

**Features**:
- Project statistics
- Achievement highlights
- Call-to-action

### Contact Page Components

**File**: `src/app/contact/page.tsx`

#### HeroSection

```tsx
const HeroSection = () => {
  return (
    <section className="relative py-16 md:py-20 lg:py-24 bg-gradient-to-br from-primary-50 to-neutral-100 overflow-hidden">
      {/* Contact overview */}
    </section>
  );
};
```

**Features**:
- Quick contact info
- Contact methods
- Responsive layout

#### ContactInfoSection

```tsx
const ContactInfoSection = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      {/* Detailed contact information */}
    </section>
  );
};
```

**Features**:
- Office address
- Phone numbers
- Email addresses
- Office hours
- Professional image

#### ContactFormSection

```tsx
const ContactFormSection = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-neutral-50">
      {/* Contact form */}
    </section>
  );
};
```

**Features**:
- Comprehensive form
- Form validation
- Project type selection
- Budget range
- Submit functionality

#### OfficeLocationSection

```tsx
const OfficeLocationSection = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      {/* Office location */}
    </section>
  );
};
```

**Features**:
- Map placeholder
- Location details
- Getting here instructions
- Office hours
- Get directions button

#### TeamContactSection

```tsx
const TeamContactSection = () => {
  const teamContacts = [
    // Team contact data
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-neutral-50">
      {/* Team contact cards */}
    </section>
  );
};
```

**Features**:
- Direct team contact
- Specialties display
- Contact information
- Professional cards

## 🎭 Animation Components

### Animation Variants

**File**: `src/lib/animations.ts`

#### Basic Animations

```tsx
import { fadeIn, slideUp, slideDown, slideLeft, slideRight, scaleIn } from '@/lib/animations';

// Fade in animation
<motion.div variants={fadeIn} initial="hidden" animate="visible">
  Content
</motion.div>

// Slide up animation
<motion.div variants={slideUp} initial="hidden" animate="visible">
  Content
</motion.div>
```

#### Stagger Animations

```tsx
import { staggerContainer, staggerContainerFast, staggerContainerSlow } from '@/lib/animations';

// Staggered children
<motion.div variants={staggerContainer} initial="hidden" animate="visible">
  <motion.div variants={slideUp}>Item 1</motion.div>
  <motion.div variants={slideUp}>Item 2</motion.div>
  <motion.div variants={slideUp}>Item 3</motion.div>
</motion.div>
```

#### Specialized Animations

```tsx
import { heroAnimation, cardHover, buttonPress, modalAnimation } from '@/lib/animations';

// Hero animation
<motion.div variants={heroAnimation} initial="hidden" animate="visible">
  Hero content
</motion.div>

// Card hover
<motion.div variants={cardHover} initial="rest" whileHover="hover">
  Card content
</motion.div>

// Button press
<motion.button variants={buttonPress} initial="rest" whileTap="pressed">
  Button
</motion.button>
```

#### Animation Presets

```tsx
import { animationPresets } from '@/lib/animations';

// Hero section animations
<motion.div variants={animationPresets.hero.container} initial="hidden" animate="visible">
  <motion.h1 variants={animationPresets.hero.title}>Title</motion.h1>
  <motion.p variants={animationPresets.hero.subtitle}>Subtitle</motion.p>
  <motion.button variants={animationPresets.hero.button}>Button</motion.button>
</motion.div>
```

## 📋 Component Guidelines

### Naming Conventions

- **Components**: PascalCase (`Header.tsx`, `OptimizedImage.tsx`)
- **Files**: PascalCase for components, camelCase for utilities
- **Props**: camelCase (`teamMembers`, `isLoading`)
- **CSS Classes**: kebab-case (`btn-primary`, `container-responsive`)

### File Structure

```
src/components/
├── layout/           # Layout components
│   ├── Header.tsx
│   └── Footer.tsx
└── ui/               # Reusable UI components
    └── OptimizedImage.tsx
```

### Component Template

```tsx
/**
 * ============================================================================
 * FILE: src/components/ComponentName.tsx
 * ============================================================================
 * DESCRIPTION: Brief description of the component
 * 
 * FEATURES:
 * - Feature 1
 * - Feature 2
 * 
 * USAGE:
 * import { ComponentName } from '@/components/ComponentName';
 * 
 * <ComponentName prop1="value" prop2={true} />
 * 
 * PROPS:
 * - prop1 (string): Description
 * - prop2 (boolean): Description
 * 
 * LAST MODIFIED: [Current Date]
 * AUTHOR: Development Team
 * 
 * ============================================================================
 */

// Import statements
import React from 'react';

// TypeScript interfaces
interface ComponentNameProps {
  prop1: string;
  prop2: boolean;
}

// Component implementation
export const ComponentName: React.FC<ComponentNameProps> = ({
  prop1,
  prop2
}) => {
  return (
    <div className="component-class">
      {/* Component content */}
    </div>
  );
};

// Default export
export default ComponentName;
```

### Styling Guidelines

1. **Use Tailwind CSS**: Prefer utility classes over custom CSS
2. **Responsive Design**: Mobile-first approach with responsive breakpoints
3. **Consistent Spacing**: Use the defined spacing scale
4. **Color Palette**: Use the custom color palette
5. **Typography**: Use the defined font families and sizes

### Accessibility Guidelines

1. **Alt Text**: Always provide descriptive alt text for images
2. **ARIA Labels**: Use proper ARIA labels for interactive elements
3. **Keyboard Navigation**: Ensure all interactive elements are keyboard accessible
4. **Color Contrast**: Maintain proper color contrast ratios
5. **Focus Indicators**: Provide visible focus indicators

### Performance Guidelines

1. **Lazy Loading**: Use lazy loading for images and components
2. **Code Splitting**: Split code at route and component level
3. **Image Optimization**: Use OptimizedImage component
4. **Bundle Size**: Keep bundle size minimal
5. **Caching**: Implement proper caching strategies

---

This documentation provides comprehensive guidance for working with all components in the SV Architects website. For additional help or questions, refer to the main README.md or contact the development team.
