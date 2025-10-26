# SV Architects Website

Professional architectural firm website built with Next.js 16, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ (recommended: pnpm)
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/sv-architects/sv-architects-website.git
cd sv-architects-website

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Open http://localhost:3000 in your browser
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── career/            # Career page
│   ├── contact/           # Contact page
│   ├── projects/          # Projects showcase
│   │   ├── [slug]/       # Dynamic project routes
│   │   │   ├── FullDetailView.tsx
│   │   │   ├── GalleryOnlyView.tsx
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── team/             # Team listing
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── team-member/      # Team member profiles
│   │   └── [slug]/page.tsx
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Homepage
│   ├── robots.ts         # robots.txt generator
│   └── sitemap.ts        # XML sitemap generator
├── components/            # Reusable components
│   ├── layout/
│   │   ├── Header.tsx    # Site navigation
│   │   └── Footer.tsx    # Site footer
│   ├── projects/
│   │   └── ProjectsFilter.tsx
│   ├── ui/
│   │   └── OptimizedImage.tsx
│   ├── ErrorBoundary.tsx
│   └── SEO.tsx
├── config/               # Configuration
│   └── site.ts          # Site config & helpers
├── data/                # Static data
│   ├── projects.ts      # All projects data
│   └── team.ts         # Team member data
├── lib/                 # Utilities
│   ├── animations.ts
│   └── performance.ts
├── types/               # TypeScript types
│   ├── project.ts
│   └── team.ts
└── styles/
    └── globals.css
```

See [STRUCTURE.md](./STRUCTURE.md) for complete project structure documentation.

## 📚 Documentation

### Essential Documentation

- **[STRUCTURE.md](./STRUCTURE.md)** - Complete project structure and architecture
- **[NAMING-CONVENTIONS.md](./NAMING-CONVENTIONS.md)** - Code naming standards
- **[COMPONENTS.md](./COMPONENTS.md)** - Component documentation and usage
- **[SEO-GUIDE.md](./SEO-GUIDE.md)** - SEO implementation guide
- **[SEO-IMPLEMENTATION-SUMMARY.md](./SEO-IMPLEMENTATION-SUMMARY.md)** - SEO status overview
- **[PERFORMANCE-OPTIMIZATION-GUIDE.md](./PERFORMANCE-OPTIMIZATION-GUIDE.md)** - Performance optimization guide

### For New Developers

#### Starting Development

1. **Read the Structure**: Start with [STRUCTURE.md](./STRUCTURE.md) to understand the project
2. **Follow Naming Conventions**: Review [NAMING-CONVENTIONS.md](./NAMING-CONVENTIONS.md)
3. **Understand Components**: Check [COMPONENTS.md](./COMPONENTS.md) for component patterns
4. **Check SEO Implementation**: Review [SEO-IMPLEMENTATION-SUMMARY.md](./SEO-IMPLEMENTATION-SUMMARY.md)

#### Key Concepts

- **Dynamic Routes**: Projects and team members use `[slug]` dynamic routes
- **Data Centralization**: All data in `src/data/` (projects.ts, team.ts)
- **Type Safety**: TypeScript types in `src/types/`
- **SEO**: Comprehensive metadata on every page
- **Performance**: Optimized images, animations, and code splitting

## 🛠️ Development

### Available Scripts

```bash
# Development
pnpm dev              # Start dev server (http://localhost:3000)
pnpm build            # Build for production
pnpm start            # Start production server
pnpm lint             # Run ESLint
pnpm type-check       # Run TypeScript checking
```

### Adding New Projects

1. **Add to data file**: Edit `src/data/projects.ts`
2. **Add images**: Place in `public/images/projects/[project-name]/`
3. **Types**: All types defined in `src/types/project.ts`

```typescript
// Example: Adding a new project
export const projects: ProjectData[] = [
  {
    id: 'project-slug',
    name: 'Project Name',
    category: 'commercial',
    displayMode: 'full', // or 'gallery-only'
    images: [
      { url: getImagePath('/images/projects/project-name/image.jpg'), alt: 'Description' }
    ],
    description: 'Project description...',
    // ... other fields
  }
];
```

### Adding Team Members

1. **Add to data file**: Edit `src/data/team.ts`
2. **Add photo**: Place in `public/images/team/name.jpg`
3. **Follow TeamMember interface**: See `src/types/team.ts`

```typescript
// Example: Adding a team member
export const teamMembers: TeamMember[] = [
  {
    id: 'unique-id',
    slug: 'member-name',
    firstName: 'John',
    lastName: 'Doe',
    fullName: 'John Doe',
    position: 'architect',
    title: 'Senior Architect',
    image: getImagePath('/images/team/john-doe.jpg'),
    // ... other fields
  }
];
```

## 🎨 Styling

### Tailwind CSS

The project uses Tailwind CSS for styling. Custom configuration in `tailwind.config.js`.

### Animation System

Animation variants defined in `src/lib/animations.ts`:

```typescript
import { fadeIn, slideUp, staggerContainer } from '@/lib/animations';

<motion.div variants={fadeIn} initial="hidden" animate="visible">
  Content
</motion.div>
```

## 🔍 Code Quality

### Naming Conventions

Follow production-grade naming conventions:
- Components: `PascalCase.tsx`
- Data/Util files: `camelCase.ts`
- Interfaces: `PascalCase` (e.g., `TeamMember`)
- Props: `camelCase + Props` (e.g., `ProjectCardProps`)
- Functions: `camelCase` (e.g., `getTeamMemberBySlug`)
- Constants: `SCREAMING_SNAKE_CASE`

See [NAMING-CONVENTIONS.md](./NAMING-CONVENTIONS.md) for complete guidelines.

### TypeScript

All code is strictly typed. Types defined in `src/types/`.

### Component Documentation

All components include comprehensive JSDoc comments:

```typescript
/**
 * Component description
 * 
 * @param prop1 - Description of prop1
 * @param prop2 - Description of prop2
 * @returns JSX element
 */
```

## 🚀 Deployment

### Build

```bash
pnpm build
```

### Deploy

The site is configured for GitHub Pages static export. See `next.config.js`:

```javascript
output: 'export',
basePath: '/sv-architects-website',
```

### Alternative Platforms

For Vercel/Netlify deployment, update `next.config.js` to remove static export configuration.

## 📊 Performance

Target metrics:
- Lighthouse Performance: 95+ (mobile), 98+ (desktop)
- FCP: < 1.2s
- LCP: < 2.5s
- CLS: < 0.1

See [PERFORMANCE-OPTIMIZATION-GUIDE.md](./PERFORMANCE-OPTIMIZATION-GUIDE.md) for details.

## 🔍 SEO

Comprehensive SEO implementation:
- Meta tags on all pages
- Open Graph and Twitter Cards
- Structured data (JSON-LD)
- XML sitemap
- robots.txt

See [SEO-IMPLEMENTATION-SUMMARY.md](./SEO-IMPLEMENTATION-SUMMARY.md) for complete overview.

## 🤝 Contributing

1. Follow naming conventions in [NAMING-CONVENTIONS.md](./NAMING-CONVENTIONS.md)
2. Add JSDoc comments to all components
3. Ensure TypeScript types are properly defined
4. Test responsive design on mobile devices
5. Run `pnpm lint` and `pnpm type-check` before committing

## 📞 Support

- Documentation: See documentation files in project root
- Component reference: [COMPONENTS.md](./COMPONENTS.md)
- Architecture: [STRUCTURE.md](./STRUCTURE.md)

## 📄 License

Proprietary - SV Architects and Associates Ltd.

---

**Version:** 1.0.0  
**Status:** Production Ready ✅  
**Last Updated:** December 2024
