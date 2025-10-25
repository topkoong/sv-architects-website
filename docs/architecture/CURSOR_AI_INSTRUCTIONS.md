# 🤖 Cursor AI Instructions - Project & Team Dynamic Routes

## 📌 Project Overview

Convert SV Architects website from hardcoded project folders to a dynamic route system with centralized data management. Support two display modes:
1. **Full Detail Mode**: Complete project information with all sections
2. **Gallery-Only Mode**: Beautiful image carousel for projects without full details

---

## 🎯 Phase 1: Setup Type Definitions and Configuration

### Task 1.1: Create Project Types

**File:** `src/types/project.ts`

**Instructions:**
```
Copy the complete content from project-types.ts file provided.
This file includes:
- ProjectData interface with all fields
- ProjectCategory and ProjectStatus types
- ProjectDisplayMode type ('full' | 'gallery-only')
- Helper functions for type guards and display formatting
- Comprehensive JSDoc comments

No modifications needed - use as-is.
```

### Task 1.2: Verify Site Configuration

**File:** `src/config/site.ts`

**Instructions:**
```
Ensure this file exists with the getImagePath helper function:

export const BASE_PATH = process.env.NODE_ENV === 'production' 
  ? '/sv-architects-website' 
  : '';

export const getImagePath = (path: string): string => {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return BASE_PATH ? `${BASE_PATH}/${cleanPath}` : `/${cleanPath}`;
};

If file doesn't exist, create it with this content.
```

---

## 🎯 Phase 2: Create Centralized Project Data

### Task 2.1: Create Projects Data File

**File:** `src/data/projects.ts`

**Instructions:**
```
Create this file to centralize ALL project data.

STEP 1: Start with the sample structure from projects-data-sample.ts

STEP 2: For EACH of the 28 projects, decide:
  a) Does this project have full description, features, etc?
     → Use displayMode: 'full'
     → Include all available fields
  
  b) Does this project only have images (no details yet)?
     → Use displayMode: 'gallery-only'
     → Include: id, name, category, displayMode, images
     → Optionally add: location, year if known

STEP 3: Image path rules:
  - Use getImagePath('/images/projects/...')
  - For numbered images: project-name-1.jpg, project-name-2.jpg, etc.
  - For subdirectory images: project-name-subdirectory/image.jpg
  - Each image needs an alt text (minimum requirement)
  - Captions are optional but recommended for 'full' mode

STEP 4: Verify all helper functions are exported:
  - getAllProjectSlugs()
  - getProjectBySlug()
  - getProjectsByCategory()
  - getFeaturedProjects()
  - getRecentProjects()
```

**Example Projects to Migrate:**

```typescript
// FULL DETAIL PROJECTS (have descriptions):
- centerpoint-siamsquare
- siamese-rama9
- u-tapao-airport-new-passenger-terminal
- don-mueang-airport-terminal3
- chaopraya-mahanatee-hotel
- somdech-phra-nangchao-sirikit-hospital
- bunditpatanasilpa-institute-auditorium
- sukhumvit-hills
- transit-oriented-development-tod

// GALLERY-ONLY PROJECTS (images only):
- jet-villa-residence
- villa-perpetual
- innovation-center
- hi-tech-sandbox
- hh-park-residence
- baan-huahin
- phuket-condominium
- vivo-executive-apartment
- zen-village
- eec-silicon-technology-park
- geo-valley-apartment-master-plan
- mahachai-airport-luxe-city-master-plan
- maintenance-repair-operation-u-tapao-airport
- service-apartment-selangor-malaysia
```

---

## 🎯 Phase 3: Create Dynamic Project Page

### Task 3.1: Create Dynamic Route Template

**File:** `src/app/projects/[slug]/page.tsx`

**Instructions:**
```
Create a dynamic route that handles BOTH display modes.

REQUIREMENTS:

1. IMPORTS:
   import { notFound } from 'next/navigation';
   import { Metadata } from 'next';
   import { getProjectBySlug, getAllProjectSlugs } from '@/data/projects';
   import { ProjectData } from '@/types/project';
   // ... other imports

2. GENERATE METADATA:
   export async function generateMetadata({ params }): Promise<Metadata> {
     const { slug } = await params;
     const project = getProjectBySlug(slug);
     
     if (!project) {
       return {
         title: 'Project Not Found',
         robots: { index: false, follow: false }
       };
     }
     
     return {
       title: `${project.name} | SV Architects`,
       description: project.metaDescription || project.description || `${project.name} - ${project.category} project`,
       openGraph: { ... },
       twitter: { ... }
     };
   }

3. GENERATE STATIC PARAMS:
   export async function generateStaticParams() {
     const slugs = getAllProjectSlugs();
     return slugs.map(slug => ({ slug }));
   }

4. MAIN COMPONENT STRUCTURE:
   export default async function ProjectPage({ params }) {
     const { slug } = await params;
     const project = getProjectBySlug(slug);
     
     if (!project) {
       notFound();
     }
     
     // DECISION POINT: Which display mode?
     if (project.displayMode === 'gallery-only') {
       return <GalleryOnlyView project={project} />;
     }
     
     return <FullDetailView project={project} />;
   }
```

### Task 3.2: Implement Full Detail View

**Component:** `FullDetailView`

**Instructions:**
```
Create a comprehensive project page with these sections:

1. HERO SECTION:
   - Full-screen image slider with navigation
   - Project title and tagline overlay
   - Location, year, size badges
   - Navigation arrows and image indicators

2. PROJECT OVERVIEW SECTION:
   - Description
   - Key features list with checkmarks
   - Sustainability badges (if applicable)

3. PROJECT SPECIFICATIONS:
   - Project type
   - Location
   - Year
   - Size
   - Client
   - Status
   - Development type

4. IMAGE GALLERY:
   - Grid of all project images
   - Clickable to view in hero slider
   - Hover effects

5. BACK TO PROJECTS BUTTON

TECHNICAL REQUIREMENTS:
- Use Framer Motion for animations
- Image components must have 'unoptimized' prop
- Responsive design (mobile-first)
- Proper TypeScript types
- Accessibility features (ARIA labels)

CODE STRUCTURE:
<main className="min-h-screen bg-white">
  <HeroSection project={project} />
  <OverviewSection project={project} />
  <SpecificationsSection project={project} />
  <GallerySection images={project.images} />
  <BackToProjectsButton />
</main>
```

### Task 3.3: Implement Gallery-Only View

**Component:** `GalleryOnlyView`

**Instructions:**
```
Create a minimal, image-focused page for projects without full details:

1. FULL-SCREEN IMAGE CAROUSEL:
   - Black background
   - Full-screen images
   - Smooth transitions with AnimatePresence
   - Navigation arrows
   - Image indicators (dots)

2. MINIMAL INFO OVERLAY (bottom):
   - Project name (large, white text)
   - Location (if available)
   - Year (if available)
   - Image caption (if available)
   - Gradient overlay for text readability

3. BOTTOM CTA SECTION:
   - White background
   - "View All Projects" button
   - Centered layout

DESIGN NOTES:
- Emphasize the images - minimal UI
- Use black background (#000000)
- White text with transparency
- Smooth, elegant transitions
- Focus on visual impact

CODE STRUCTURE:
<main className="min-h-screen bg-black">
  {/* Full-screen carousel */}
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

    {/* Info overlay - bottom */}
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          {project.name}
        </h1>
        {(project.location || project.year) && (
          <p className="text-white/80 text-lg mt-2">
            {project.location && `📍 ${project.location}`}
            {project.location && project.year && ' • '}
            {project.year}
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
  <section className="bg-white py-16">
    <div className="container mx-auto text-center">
      <Link href="/projects" className="btn-primary inline-flex items-center">
        ← View All Projects
      </Link>
    </div>
  </section>
</main>
```

---

## 🎯 Phase 4: Update Projects Listing Page

### Task 4.1: Update Main Projects Page

**File:** `src/app/projects/page.tsx`

**Instructions:**
```
Update to use centralized data instead of hardcoded projects:

1. IMPORTS:
   import { projects, getProjectsByCategory } from '@/data/projects';
   import { getProjectThumbnail } from '@/types/project';

2. PROJECT CARDS:
   - Use getProjectThumbnail() for thumbnail image
   - Link to /projects/{slug}
   - Show category badge
   - Show status badge (if available)
   - Display year
   - Responsive grid layout

3. CATEGORY FILTERS:
   - Get available categories from data
   - Filter projects by selected category
   - "All" option to show everything

4. GRID LAYOUT:
   - Grid with 1/2/3 columns (responsive)
   - Card hover effects
   - Consistent card heights

EXAMPLE CARD:
<Link href={`/projects/${project.id}`}>
  <div className="card overflow-hidden hover:shadow-lg transition-shadow">
    <div className="relative aspect-[4/3]">
      <Image
        src={getProjectThumbnail(project)}
        alt={project.name}
        fill
        className="object-cover"
        unoptimized
      />
    </div>
    <div className="p-6">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-medium text-primary-600 uppercase">
          {getCategoryDisplayName(project.category)}
        </span>
        {project.status && (
          <span className={`text-xs px-2 py-1 rounded-full ${getStatusInfo(project.status).color}`}>
            {getStatusInfo(project.status).label}
          </span>
        )}
      </div>
      <h3 className="text-xl font-bold mb-2">{project.name}</h3>
      {project.location && (
        <p className="text-sm text-gray-600">📍 {project.location}</p>
      )}
      {project.year && (
        <p className="text-sm text-gray-500 mt-1">📅 {project.year}</p>
      )}
    </div>
  </div>
</Link>
```

---

## 🎯 Phase 5: Testing & Cleanup

### Task 5.1: Testing Checklist

```
TEST EACH PROJECT:
□ Page loads without errors
□ Images display correctly
□ Full detail mode shows all sections
□ Gallery-only mode shows carousel
□ Navigation arrows work
□ Image indicators work
□ "Back to Projects" button works
□ SEO metadata generated correctly
□ Mobile responsive
□ No console errors

TEST LISTING PAGE:
□ All projects display
□ Category filters work
□ Project cards link correctly
□ Responsive grid works
□ Thumbnails load

TEST IMAGE PATHS:
□ Local development works (no basePath)
□ Production build works (with basePath)
□ All images accessible
□ No 404 errors
```

### Task 5.2: Delete Old Structure

```
ONLY AFTER VERIFYING EVERYTHING WORKS:

1. Delete hardcoded project folders:
   rm -rf src/app/projects/centerpoint-siamsquare/
   rm -rf src/app/projects/baan-huahin/
   rm -rf src/app/projects/siamese-rama9/
   ... (delete all 28 folders)

2. Keep these:
   ✅ src/app/projects/[slug]/page.tsx (new dynamic route)
   ✅ src/app/projects/page.tsx (listing page)
   ✅ src/app/projects/layout.tsx

3. Verify build:
   npm run build
   
4. Check output:
   - Should show 28 static pages generated
   - No errors or warnings
```

---

## 🎯 Phase 6: Same Process for Team Members

### Task 6.1: Verify Team Structure

**Instructions:**
```
The team member pages already use dynamic routes correctly!

CHECK:
□ src/app/team-member/[slug]/page.tsx exists
□ src/data/team.ts exists with centralized data
□ Uses getTeamMemberBySlug()
□ Uses getAllTeamMemberSlugs()
□ Generates static params

IF WORKING:
✅ No changes needed - this is the model we're following!

IF NOT WORKING:
Apply the same pattern as projects:
1. Centralize data in src/data/team.ts
2. Use dynamic route src/app/team-member/[slug]/page.tsx
3. Handle missing data gracefully
```

---

## 📝 Summary of Key Decisions

### ✅ DO:
- Use dynamic routes with [slug]
- Centralize all data in /data files
- Support multiple display modes
- Use environment-aware image paths
- Generate static params for SEO
- Handle missing data gracefully
- Use TypeScript for type safety
- Include comprehensive JSDoc comments

### ❌ DON'T:
- Create separate folders for each project
- Hardcode project data in component files
- Mix data with UI code
- Forget 'unoptimized' prop on images
- Skip metadata generation
- Leave console errors
- Deploy without testing

---

## 🚀 Deployment Checklist

```
BEFORE DEPLOYING:
□ All projects migrated to centralized data
□ All old folders deleted
□ npm run build succeeds
□ No TypeScript errors
□ No console errors in browser
□ All images load correctly
□ SEO metadata generated
□ Responsive design tested
□ Cross-browser tested
□ Lighthouse score > 90

PRODUCTION CONFIG:
□ Uncomment basePath in next.config.js
□ Verify all image paths work
□ Test on actual deployment URL
□ Check robots.txt
□ Submit sitemap to Google

POST-DEPLOYMENT:
□ Verify all project pages load
□ Check analytics tracking
□ Monitor for 404 errors
□ Test social media sharing
```

---

## 💡 Tips for Success

1. **Start Small**: Migrate 2-3 projects first, test thoroughly
2. **Test Both Modes**: Ensure both 'full' and 'gallery-only' work
3. **Check Images**: Verify all image paths are correct
4. **Use TypeScript**: Catch errors before runtime
5. **Document Changes**: Update README with new structure
6. **Keep Backups**: Don't delete old folders until confident
7. **Monitor Performance**: Check Lighthouse scores
8. **Ask Questions**: If anything is unclear, ask before proceeding

---

## 🆘 Common Issues & Solutions

**Issue**: Images don't load
**Solution**: Check basePath in next.config.js - comment out for local dev

**Issue**: Page shows 404
**Solution**: Verify project exists in projects.ts with correct slug

**Issue**: TypeScript errors
**Solution**: Ensure all types imported correctly from @/types/project

**Issue**: Build fails
**Solution**: Check for missing exports in data files

**Issue**: Gallery-only shows full detail
**Solution**: Verify displayMode is set to 'gallery-only' in data

**Issue**: Metadata not generating
**Solution**: Ensure generateMetadata is async and returns Promise<Metadata>

---

## ✅ Done!

When all phases are complete, you'll have:
- ✅ Centralized, maintainable data
- ✅ Consistent design across all projects
- ✅ Flexible display modes
- ✅ Excellent SEO
- ✅ Easy to add new projects
- ✅ Type-safe code
- ✅ Professional, scalable architecture
