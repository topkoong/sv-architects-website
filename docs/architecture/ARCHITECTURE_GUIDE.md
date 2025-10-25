# 🏗️ SV Architects Website - Data Architecture & Implementation Guide

## 📋 Table of Contents
1. [Architecture Decision](#architecture-decision)
2. [Recommended Approach](#recommended-approach)
3. [Data Structure](#data-structure)
4. [Implementation Strategy](#implementation-strategy)
5. [Cursor AI Instructions](#cursor-ai-instructions)
6. [Handling Missing Data](#handling-missing-data)

---

## 🎯 Architecture Decision

### **RECOMMENDED: Use Dynamic Routes with Centralized Data** ✅

**Why this approach?**
- ✅ Single source of truth for all data
- ✅ Easy to update - change data file, not 28 separate files
- ✅ Consistent design across all pages
- ✅ Better SEO with generateStaticParams
- ✅ Easier to maintain and scale
- ✅ Can handle missing data gracefully
- ✅ Supports different display modes (full detail vs image-only)

### Current Structure Analysis

```
Your Current Setup:
├── /team-member/[slug]/page.tsx     ✅ GOOD - Dynamic route
├── /projects/[slug]/page.tsx        ❓ SHOULD BE - Dynamic route
└── /projects/
    ├── centerpoint-siamsquare/      ❌ BAD - Hardcoded folders
    ├── baan-huahin/                 ❌ BAD - Hard to maintain
    ├── siamese-rama9/               ❌ BAD - 28 duplicate files!
    └── ... (25 more folders)
```

### ❌ Problems with Hardcoded Folders:
1. **Maintenance Nightmare**: Need to update 28 files for design changes
2. **Inconsistency**: Easy to have different layouts/bugs across pages
3. **Duplication**: Same code copy-pasted 28 times
4. **Scaling Issues**: Adding new projects requires creating new folders
5. **Data Scattered**: Project info mixed with UI code

### ✅ Benefits of Dynamic Routes:
1. **One Template**: Single page.tsx handles all projects
2. **Centralized Data**: All project info in one place
3. **Consistent**: Guaranteed same design everywhere
4. **Easy Updates**: Change data file, done!
5. **Flexible**: Can handle different project types easily

---

## 🎯 Recommended Approach

### Project Structure

```
src/
├── app/
│   ├── projects/
│   │   ├── [slug]/
│   │   │   └── page.tsx              ← Single dynamic template
│   │   ├── layout.tsx                ← Projects layout
│   │   └── page.tsx                  ← Projects listing page
│   └── team-member/
│       ├── [slug]/
│       │   └── page.tsx              ← Already good! ✅
│       └── page.tsx
│
├── data/
│   ├── projects.ts                   ← ALL project data here
│   ├── team.ts                       ← ALL team data here
│   └── types/
│       ├── project.ts                ← Project TypeScript types
│       └── team.ts                   ← Team TypeScript types
│
├── config/
│   └── site.ts                       ← Image paths & config
│
└── components/
    └── projects/
        ├── ProjectHero.tsx           ← Reusable components
        ├── ProjectGallery.tsx
        ├── ProjectDetails.tsx
        └── ImageOnlyCarousel.tsx     ← For projects with only images
```

---

## 📊 Data Structure

### Project Data Types

```typescript
// src/types/project.ts

export type ProjectStatus = 'completed' | 'ongoing' | 'upcoming';

export type ProjectCategory = 
  | 'residential' 
  | 'commercial' 
  | 'hospitality' 
  | 'aviation' 
  | 'healthcare' 
  | 'institutional'
  | 'master-planning'
  | 'interior-design'
  | 'mixed-use';

export interface ProjectImage {
  url: string;              // Path to image
  caption?: string;         // Optional image caption
  alt: string;              // Alt text for accessibility
}

export interface ProjectData {
  // Basic Info (REQUIRED)
  id: string;               // Unique identifier (slug)
  name: string;             // Project name
  category: ProjectCategory;
  images: ProjectImage[];   // At least 1 image required
  
  // Display Mode (REQUIRED)
  displayMode: 'full' | 'gallery-only'; // Controls what to show
  
  // Optional Full Details (for displayMode: 'full')
  tagline?: string;
  description?: string;
  location?: string;
  year?: number;
  status?: ProjectStatus;
  size?: string;
  client?: string;
  type?: string;
  features?: string[];
  sustainability?: {
    leed?: boolean;
    greenBuilding?: boolean;
    energyEfficient?: boolean;
  };
  
  // SEO & Metadata (Optional but recommended)
  metaDescription?: string;
  keywords?: string[];
  
  // Thumbnail for listings (Optional, uses images[0] if not provided)
  thumbnail?: string;
}
```

### Example Project Data

```typescript
// src/data/projects.ts

import { ProjectData } from '@/types/project';
import { getProjectImages, getImagePath } from '@/config/site';

export const projects: ProjectData[] = [
  // FULL DETAIL PROJECT
  {
    id: 'centerpoint-siamsquare',
    name: 'Centerpoint Siamsquare',
    category: 'commercial',
    displayMode: 'full', // Show full detail page
    
    // Full project details
    tagline: 'COMMERCIAL DEVELOPMENT EXCELLENCE',
    description: 'Commercial development featuring retail, office, and entertainment spaces in the heart of Bangkok.',
    location: 'Bangkok, Thailand',
    year: 2022,
    status: 'completed',
    size: '120,000 sqm',
    client: 'Central Group',
    type: 'Commercial Development',
    
    features: [
      'Integrated retail and office spaces',
      'Entertainment facilities',
      'Public plaza and green spaces',
      'Underground parking system',
      'Smart building technology',
      'Modern commercial amenities'
    ],
    
    sustainability: {
      leed: true,
      greenBuilding: true,
      energyEfficient: true
    },
    
    // Images with proper paths
    images: [
      {
        url: getImagePath('images/projects/centerpoint-siamsquare-1.jpg'),
        alt: 'Centerpoint Siamsquare exterior view',
        caption: 'Main entrance and plaza'
      },
      {
        url: getImagePath('images/projects/centerpoint-siamsquare-2.jpg'),
        alt: 'Centerpoint Siamsquare retail space',
        caption: 'Modern retail environment'
      },
      {
        url: getImagePath('images/projects/centerpoint-siamsquare-3.jpg'),
        alt: 'Centerpoint Siamsquare office tower',
        caption: 'Office tower at night'
      },
      {
        url: getImagePath('images/projects/centerpoint-siamsquare-4.jpg'),
        alt: 'Centerpoint Siamsquare public plaza',
        caption: 'Public plaza with green spaces'
      }
    ],
    
    metaDescription: 'Centerpoint Siamsquare - A landmark commercial development in Bangkok featuring retail, office, and entertainment spaces.',
    keywords: ['commercial development', 'Bangkok', 'retail', 'office space', 'mixed-use']
  },
  
  // GALLERY-ONLY PROJECT (No details available yet)
  {
    id: 'jet-villa-residence',
    name: 'Jet Villa Residence',
    category: 'residential',
    displayMode: 'gallery-only', // Only show image carousel
    
    // Minimal info
    location: 'Bangkok, Thailand',
    year: 2023,
    
    // Images only
    images: [
      {
        url: getImagePath('images/projects/jet-villa-residence-residential/jet-villa-air-view.jpg'),
        alt: 'Jet Villa aerial view'
      },
      {
        url: getImagePath('images/projects/jet-villa-residence-residential/jet-villa-view2.jpg'),
        alt: 'Jet Villa exterior view'
      },
      {
        url: getImagePath('images/projects/jet-villa-residence-residential/jet-villa-view3.jpg'),
        alt: 'Jet Villa garden view'
      },
      // ... up to 10 images
    ]
  },
  
  // PROJECT WITH SUBDIRECTORY IMAGES
  {
    id: 'don-mueang-airport-terminal3',
    name: 'Don Mueang International Airport Terminal 3',
    category: 'aviation',
    displayMode: 'full',
    
    tagline: 'NEXT-GENERATION AVIATION INFRASTRUCTURE',
    description: 'Modern terminal design for Thailand\'s second-busiest airport.',
    location: 'Bangkok, Thailand',
    year: 2024,
    status: 'ongoing',
    
    // Using subdirectory images
    images: [
      {
        url: getImagePath('images/projects/don-mueang-international-airport-terminal-3-aviation/IMG_2621.jpeg'),
        alt: 'Terminal 3 interior concourse',
        caption: 'Spacious departure hall'
      },
      {
        url: getImagePath('images/projects/don-mueang-international-airport-terminal-3-aviation/IMG_2622.jpeg'),
        alt: 'Terminal 3 check-in area',
        caption: 'Modern check-in facilities'
      },
      // ... more images
    ]
  }
];

// Helper functions
export function getAllProjectSlugs(): string[] {
  return projects.map(project => project.id);
}

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projects.find(project => project.id === slug);
}

export function getProjectsByCategory(category: ProjectCategory): ProjectData[] {
  return projects.filter(project => project.category === category);
}

export function getFeaturedProjects(count: number = 6): ProjectData[] {
  return projects
    .filter(p => p.status === 'completed' && p.displayMode === 'full')
    .slice(0, count);
}
```

---

## 🛠️ Implementation Strategy

### Phase 1: Create Data Files

1. **Create type definitions** (`src/types/project.ts`)
2. **Create data file** (`src/data/projects.ts`)
3. **Migrate existing data** from hardcoded pages to centralized file

### Phase 2: Create Dynamic Route

1. **Create** `src/app/projects/[slug]/page.tsx`
2. **Implement** conditional rendering based on `displayMode`
3. **Add** SEO metadata generation
4. **Test** with a few projects first

### Phase 3: Delete Old Structure

1. **Verify** all projects work with new dynamic route
2. **Delete** hardcoded project folders
3. **Update** any internal links

---

## 🤖 Cursor AI Instructions

Copy and paste these instructions to Cursor AI:

### Instruction 1: Create Project Types

```
Create src/types/project.ts with TypeScript types for projects.

Requirements:
- ProjectData interface with all fields
- displayMode: 'full' | 'gallery-only' to control page display
- Make optional fields truly optional
- Include proper JSDoc comments
- Export ProjectCategory and ProjectStatus types
```

### Instruction 2: Create Centralized Project Data

```
Create src/data/projects.ts with all project data centralized.

Requirements:
- Import types from @/types/project
- Import image helpers from @/config/site
- Create array of all projects following these rules:
  
  For projects WITH full details (description, features, etc):
  - Set displayMode: 'full'
  - Include all available fields
  
  For projects with ONLY images (no description yet):
  - Set displayMode: 'gallery-only'
  - Only include: id, name, category, displayMode, images
  - Add location and year if available
  
- Use proper image paths with getImagePath helper
- Export helper functions: getAllProjectSlugs, getProjectBySlug
```

### Instruction 3: Create Dynamic Project Page

```
Create src/app/projects/[slug]/page.tsx as a dynamic route.

Requirements:
1. Fetch project data using getProjectBySlug(params.slug)
2. Return notFound() if project doesn't exist
3. Implement TWO display modes:

   MODE A - Full Detail (displayMode === 'full'):
   - Hero section with image slider
   - Project title, tagline, description
   - Key features list
   - Project specifications grid
   - Image gallery section
   - All rich content sections
   
   MODE B - Gallery Only (displayMode === 'gallery-only'):
   - Full-screen image carousel
   - Project name overlay
   - Location and year (if available)
   - Navigation arrows and image indicators
   - Minimal UI, focus on images
   - "View All Projects" button at bottom

4. Generate dynamic metadata for SEO
5. Implement generateStaticParams for static generation
6. Use proper image handling with unoptimized prop
7. Responsive design with mobile-first approach
8. Smooth Framer Motion animations
```

### Instruction 4: Example Gallery-Only Component

```tsx
// For projects with displayMode: 'gallery-only'
// Show a beautiful full-screen image carousel

<main className="min-h-screen bg-black">
  {/* Full-screen Image Carousel */}
  <section className="relative h-screen">
    <AnimatePresence mode="wait">
      <motion.div
        key={currentImageIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0"
      >
        <Image
          src={project.images[currentImageIndex].url}
          alt={project.images[currentImageIndex].alt}
          fill
          className="object-cover"
          unoptimized
          priority={currentImageIndex === 0}
        />
      </motion.div>
    </AnimatePresence>

    {/* Minimal Overlay Info */}
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
          {project.name}
        </h1>
        {project.location && (
          <p className="text-white/80 text-lg">
            📍 {project.location} {project.year && `• ${project.year}`}
          </p>
        )}
        {project.images[currentImageIndex].caption && (
          <p className="text-white/60 text-sm mt-2">
            {project.images[currentImageIndex].caption}
          </p>
        )}
      </div>
    </div>

    {/* Navigation */}
    <NavigationArrows onPrev={prevImage} onNext={nextImage} />
    <ImageIndicators 
      total={project.images.length} 
      current={currentImageIndex}
      onSelect={goToImage}
    />
  </section>

  {/* Bottom CTA */}
  <section className="bg-white py-12">
    <div className="container mx-auto text-center">
      <Link href="/projects" className="btn-primary">
        View All Projects
      </Link>
    </div>
  </section>
</main>
```

### Instruction 5: Update Projects Listing Page

```
Update src/app/projects/page.tsx to use centralized data.

Requirements:
- Import projects from @/data/projects
- Display all projects in grid
- Show thumbnail (images[0]) for each project
- Add category filter tabs
- Link to dynamic route: /projects/{slug}
- Show status badge (completed/ongoing)
- Responsive grid layout
```

---

## 🎨 Handling Missing Data

### Strategy for Incomplete Projects

```typescript
// Component logic
export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  
  if (!project) {
    return notFound();
  }

  // DECISION POINT: Which display mode?
  if (project.displayMode === 'gallery-only') {
    return <GalleryOnlyView project={project} />;
  }
  
  // Full detail view
  return <FullDetailView project={project} />;
}

// Gallery-only for projects without details
function GalleryOnlyView({ project }: { project: ProjectData }) {
  return (
    <main className="min-h-screen">
      {/* Beautiful image carousel */}
      <ImageCarousel images={project.images} />
      
      {/* Minimal info overlay */}
      <ProjectInfoOverlay 
        name={project.name}
        location={project.location}
        year={project.year}
      />
    </main>
  );
}

// Full detail for projects with complete information
function FullDetailView({ project }: { project: ProjectData }) {
  return (
    <main className="min-h-screen">
      <HeroSection project={project} />
      {project.description && <DescriptionSection project={project} />}
      {project.features && <FeaturesSection features={project.features} />}
      <GallerySection images={project.images} />
      {project.sustainability && <SustainabilitySection data={project.sustainability} />}
    </main>
  );
}
```

### Graceful Degradation

```typescript
// Always show what you have, hide what you don't
{project.tagline && <h2>{project.tagline}</h2>}
{project.description && <p>{project.description}</p>}
{project.features && project.features.length > 0 && (
  <FeaturesGrid features={project.features} />
)}

// Provide defaults
const displayName = project.name || 'Untitled Project';
const displayYear = project.year || 'Year Unknown';
const thumbnail = project.thumbnail || project.images[0]?.url;
```

---

## 📝 Migration Checklist

### For Each Project:

- [ ] Verify images exist in /public/images/projects/
- [ ] Choose displayMode: 'full' or 'gallery-only'
- [ ] If 'full': Add complete description, features, specs
- [ ] If 'gallery-only': Just add images, basic info
- [ ] Add to projects.ts array
- [ ] Test individual project page
- [ ] Verify SEO metadata
- [ ] Check responsive design
- [ ] Test image loading

### Quality Checks:

- [ ] All images load correctly
- [ ] SEO metadata generated properly
- [ ] Mobile responsive design works
- [ ] Animation smooth and performant
- [ ] Navigation arrows work
- [ ] Back button works
- [ ] No console errors
- [ ] Lighthouse score > 90

---

## 🎯 Final Structure

```
After Implementation:

src/app/projects/
├── [slug]/
│   └── page.tsx              ← ONE template for ALL projects
├── layout.tsx
└── page.tsx                  ← Projects listing

src/data/
└── projects.ts               ← ALL project data (28 projects)

Result:
✅ Maintainable
✅ Consistent
✅ Scalable
✅ SEO-friendly
✅ Handles missing data gracefully
✅ Easy to update
```

---

## 💡 Benefits Summary

### Before (Hardcoded Folders):
- ❌ 28 separate page files
- ❌ Duplicate code everywhere
- ❌ Hard to maintain consistency
- ❌ Design changes = 28 files to update
- ❌ Data mixed with UI

### After (Dynamic Routes):
- ✅ 1 template file
- ✅ Centralized data
- ✅ Guaranteed consistency
- ✅ Design changes = 1 file to update
- ✅ Clean separation of data and UI
- ✅ Flexible display modes
- ✅ Easy to add new projects
- ✅ Better performance
- ✅ Better SEO

---

## 🚀 Next Steps

1. **Create** type definitions
2. **Migrate** 2-3 projects to test
3. **Verify** everything works
4. **Migrate** remaining projects
5. **Delete** old hardcoded folders
6. **Deploy** and celebrate! 🎉
