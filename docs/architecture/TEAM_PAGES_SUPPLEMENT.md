# 🤖 Cursor AI Instructions - Team Pages Supplement

## 📋 Overview

**Good News:** Your team member pages already use the correct dynamic route architecture! ✅

This supplement ensures:
1. Team pages follow the same patterns as Projects
2. Image paths are consistent
3. Missing data is handled gracefully
4. Everything is properly typed

---

## ✅ What's Already Correct

Your team structure already has:
```
✅ /team-member/[slug]/page.tsx    - Dynamic route
✅ /data/team.ts                    - Centralized data
✅ /types/team.ts                   - TypeScript types
✅ getTeamMemberBySlug()            - Helper function
✅ getAllTeamMemberSlugs()          - Static generation
✅ generateMetadata()               - SEO optimization
```

**This is the exact pattern we want for Projects!** 🎉

---

## 🔧 What Needs Attention

### 1. Image Paths (Same Issue as Projects)

**Check:** Do team member images load correctly?

**If NOT, the issue is the same as projects:**

**File:** `src/data/team.ts`

```typescript
// ❌ WRONG (hardcoded production path)
image: '/sv-architects-website/images/team/picharn-foongkiatcharoen.jpg'

// ✅ CORRECT (environment-aware)
import { getImagePath } from '@/config/site';

image: getImagePath('/images/team/picharn-foongkiatcharoen.jpg')
```

**Fix for all team members:**
```typescript
// src/data/team.ts
import { getImagePath } from '@/config/site';

export const teamMembers: TeamMember[] = [
  {
    slug: 'picharn-foongkiatcharoen',
    firstName: 'Picharn',
    lastName: 'Foongkiatcharoen',
    // ... other fields
    image: getImagePath('/images/team/picharn-foongkiatcharoen.jpg'),
    // NOT: '/sv-architects-website/images/team/...'
  },
  // ... other team members
];
```

---

## 🎯 Team Data Structure Recommendations

### Current TeamMember Type (Verify This Exists)

**File:** `src/types/team.ts`

```typescript
export interface TeamMember {
  // Basic Info (REQUIRED)
  slug: string;                    // URL identifier
  firstName: string;
  lastName: string;
  fullName: string;                // Display name
  title: string;                   // Job title
  image: string;                   // Profile photo path
  
  // Professional Info (RECOMMENDED)
  email?: string;
  phone?: string;
  bio?: string;                    // Short biography
  
  // Experience (OPTIONAL but recommended)
  experience?: {
    years: number;
    areas: string[];               // Areas of expertise
    summary: string;               // Professional summary
  };
  
  // Education (OPTIONAL)
  education?: Array<{
    degree: string;
    institution: string;
    year?: number;
  }>;
  
  // Skills & Certifications (OPTIONAL)
  skills?: string[];
  certifications?: string[];
  languages?: string[];
  
  // Project Involvement (OPTIONAL)
  projects?: Array<{
    name: string;
    role: string;
    startDate: string;
    endDate?: string;
    isActive: boolean;
    responsibilities: string[];
  }>;
  
  // Contact & Social (OPTIONAL)
  contact?: {
    email: string;
    phone?: string;
    office?: string;
    socialMedia?: {
      linkedin?: string;
      website?: string;
      twitter?: string;
    };
  };
  
  // Additional Info (OPTIONAL)
  awards?: string[];
  publications?: string[];
  
  // SEO (OPTIONAL but recommended)
  metaDescription?: string;
  keywords?: string[];
}
```

---

## 🎨 Handling Incomplete Team Member Profiles

### Strategy: Progressive Enhancement

Unlike projects (which have 2 display modes), team members can use **progressive enhancement** - show what you have, hide what you don't.

**Example: Team member with minimal info**
```typescript
{
  slug: 'new-architect',
  firstName: 'John',
  lastName: 'Doe',
  fullName: 'John Doe',
  title: 'Junior Architect',
  image: getImagePath('/images/team/john-doe.jpg'),
  // That's it! No bio, no experience yet
}
```

**The page should handle this gracefully:**
```tsx
// In the component
{member.bio && (
  <div className="bio-section">
    <p>{member.bio}</p>
  </div>
)}

{member.experience && (
  <div className="experience-section">
    <h3>Experience</h3>
    <p>{member.experience.summary}</p>
  </div>
)}

{member.projects && member.projects.length > 0 && (
  <div className="projects-section">
    <h3>Project Involvement</h3>
    {/* Show projects */}
  </div>
)}
```

---

## 🔄 Parallel Structure: Projects vs Team

Both should follow the same pattern:

```
PROJECTS                          TEAM
────────────────────────────────────────────────────────
/projects/[slug]/page.tsx    →   /team-member/[slug]/page.tsx
/data/projects.ts            →   /data/team.ts
/types/project.ts            →   /types/team.ts
getProjectBySlug()           →   getTeamMemberBySlug()
getAllProjectSlugs()         →   getAllTeamMemberSlugs()
displayMode: full/gallery    →   Progressive enhancement
```

---

## 🎯 Phase-by-Phase Tasks for Team

### Phase 1: Verify Types ✅ (Probably already done)

**Check:** Does `src/types/team.ts` exist with proper TeamMember interface?

**If YES:** ✅ Skip to Phase 2  
**If NO:** Create it using the structure above

---

### Phase 2: Fix Image Paths 🔧

**Task:** Update all team member images to use `getImagePath()`

**File:** `src/data/team.ts`

**Instructions:**
```
Update src/data/team.ts to use environment-aware image paths.

FOR EACH team member:
1. Import getImagePath at the top:
   import { getImagePath } from '@/config/site';

2. Change image paths from:
   image: '/sv-architects-website/images/team/name.jpg'
   
   To:
   image: getImagePath('/images/team/name.jpg')

3. Do this for ALL team members in the array

4. Test: Images should load in both local dev and production
```

---

### Phase 3: Add Missing Data 📝 (Optional)

**Task:** Fill in incomplete team member profiles

**Strategy:**
```
For each team member:

MINIMUM REQUIRED:
- slug
- firstName
- lastName
- fullName
- title
- image

RECOMMENDED TO ADD:
- bio (1-2 paragraphs)
- email (contact info)
- experience.summary
- skills (array of expertise areas)

NICE TO HAVE:
- Education history
- Project involvement
- Certifications
- Awards
```

**Example: Upgrading a minimal profile**
```typescript
// BEFORE (minimal)
{
  slug: 'picharn-foongkiatcharoen',
  firstName: 'Picharn',
  lastName: 'Foongkiatcharoen',
  fullName: 'Picharn Foongkiatcharoen',
  title: 'Principal Architect',
  image: getImagePath('/images/team/picharn-foongkiatcharoen.jpg'),
}

// AFTER (enhanced)
{
  slug: 'picharn-foongkiatcharoen',
  firstName: 'Picharn',
  lastName: 'Foongkiatcharoen',
  fullName: 'Picharn Foongkiatcharoen',
  title: 'Principal Architect',
  image: getImagePath('/images/team/picharn-foongkiatcharoen.jpg'),
  
  bio: 'Picharn is a Principal Architect with over 20 years of experience in commercial and residential design. He leads our team with a focus on sustainable architecture and innovative design solutions.',
  
  experience: {
    years: 20,
    areas: ['Commercial Architecture', 'Residential Design', 'Sustainable Design', 'Project Management'],
    summary: 'Extensive experience leading large-scale commercial and residential projects across Thailand and Southeast Asia.'
  },
  
  education: [
    {
      degree: 'Master of Architecture',
      institution: 'Chulalongkorn University',
      year: 2003
    }
  ],
  
  skills: ['AutoCAD', 'Revit', 'SketchUp', 'Project Management', 'Client Relations'],
  
  contact: {
    email: 'picharn@sv-architects.com',
    phone: '+66 2 XXX XXXX',
    office: 'Bangkok Head Office'
  },
  
  languages: ['Thai', 'English'],
  
  metaDescription: 'Picharn Foongkiatcharoen - Principal Architect at SV Architects with 20+ years experience in commercial and residential design.'
}
```

---

### Phase 4: Verify Team Member Page Component 🔍

**File:** `src/app/team-member/[slug]/page.tsx`

**Check these requirements:**

```typescript
✅ Imports getTeamMemberBySlug from @/data/team
✅ Imports TeamMember type from @/types/team
✅ Uses notFound() for missing members
✅ Generates metadata with generateMetadata()
✅ Generates static params with generateStaticParams()
✅ All Image components have 'unoptimized' prop
✅ Handles optional fields gracefully (shows only what exists)
✅ Responsive design
✅ Proper TypeScript types
```

**Key code patterns to verify:**

```tsx
// 1. Data fetching
const member = getTeamMemberBySlug(slug);
if (!member) {
  notFound();
}

// 2. Image handling
<Image
  src={member.image}
  alt={member.fullName}
  fill
  unoptimized  // ← Must have this!
  className="object-cover"
/>

// 3. Optional field handling
{member.bio && (
  <section>
    <p>{member.bio}</p>
  </section>
)}

// 4. Array field handling
{member.skills && member.skills.length > 0 && (
  <div>
    {member.skills.map(skill => (
      <span key={skill}>{skill}</span>
    ))}
  </div>
)}
```

---

### Phase 5: Update Team Listing Page 📄

**File:** `src/app/team/page.tsx`

**Requirements:**
```
✅ Import team members from @/data/team
✅ Display all team members in grid
✅ Link to /team-member/{slug}
✅ Show profile photo (using member.image)
✅ Show name and title
✅ Responsive grid layout
✅ Hover effects on cards
```

**Example team card:**
```tsx
<Link href={`/team-member/${member.slug}`}>
  <div className="team-card">
    <div className="relative aspect-square">
      <Image
        src={member.image}
        alt={member.fullName}
        fill
        className="object-cover"
        unoptimized
      />
    </div>
    <div className="p-4">
      <h3 className="font-bold">{member.fullName}</h3>
      <p className="text-sm text-gray-600">{member.title}</p>
    </div>
  </div>
</Link>
```

---

## 🔍 Testing Checklist

### For Each Team Member:

- [ ] Profile page loads without errors
- [ ] Profile photo displays correctly
- [ ] Name and title show correctly
- [ ] Bio shows if available (hidden if not)
- [ ] Experience shows if available
- [ ] Education shows if available
- [ ] Skills show if available
- [ ] Contact info shows if available
- [ ] SEO metadata generated correctly
- [ ] Mobile responsive design works
- [ ] No console errors
- [ ] Links work (back to team, social media, etc.)

### For Team Listing Page:

- [ ] All team members display
- [ ] Grid layout works on all screen sizes
- [ ] Profile photos load correctly
- [ ] Links to detail pages work
- [ ] Hover effects work
- [ ] No layout shifts
- [ ] No console errors

---

## 🚨 Common Issues & Fixes

### Issue 1: Team member photos don't load

**Solution:**
```typescript
// Check src/data/team.ts
// Change from:
image: '/sv-architects-website/images/team/name.jpg'

// To:
import { getImagePath } from '@/config/site';
image: getImagePath('/images/team/name.jpg')
```

### Issue 2: Page shows error for team member with minimal info

**Solution:**
```tsx
// In component, add conditional rendering
{member.bio && <p>{member.bio}</p>}
{member.experience?.summary && <p>{member.experience.summary}</p>}
{member.skills?.length > 0 && (
  <div>
    {member.skills.map(skill => <span key={skill}>{skill}</span>)}
  </div>
)}
```

### Issue 3: TypeScript errors about missing fields

**Solution:**
```typescript
// In src/types/team.ts, make fields optional with ?
export interface TeamMember {
  slug: string;        // required
  fullName: string;    // required
  title: string;       // required
  image: string;       // required
  bio?: string;        // optional
  experience?: {       // optional
    summary: string;
  };
  // etc.
}
```

---

## 📝 Cursor AI Instructions for Team

### Task: Fix Team Member Image Paths

**Instructions:**
```
Update src/data/team.ts to use environment-aware image paths.

1. Add import at top:
   import { getImagePath } from '@/config/site';

2. For each team member, change:
   FROM: image: '/sv-architects-website/images/team/name.jpg'
   TO:   image: getImagePath('/images/team/name.jpg')

3. Keep all other data the same

4. Ensure all Image components in 
   src/app/team-member/[slug]/page.tsx have 'unoptimized' prop
```

### Task: Add Missing Team Member Data

**Instructions:**
```
For team member [NAME], add the following information to src/data/team.ts:

Bio: [provide bio text]
Experience summary: [provide text]
Skills: [provide array of skills]
Education: [provide education array]
Contact: [provide email/phone if available]

Ensure all optional fields are properly typed with ? in TeamMember interface.
```

### Task: Verify Team Component Handles Optional Data

**Instructions:**
```
Review src/app/team-member/[slug]/page.tsx and ensure:

1. All optional fields are conditionally rendered:
   {member.bio && <p>{member.bio}</p>}

2. Arrays are checked before mapping:
   {member.skills?.length > 0 && member.skills.map(...)}

3. Nested optional fields use optional chaining:
   {member.experience?.summary && <p>{member.experience.summary}</p>}

4. No field is assumed to exist without checking

5. Page looks good even with minimal data (only required fields)
```

---

## 🎯 Summary: Team vs Projects

| Aspect | Projects | Team |
|--------|----------|------|
| **Structure** | Dynamic route ✅ | Dynamic route ✅ |
| **Data location** | /data/projects.ts | /data/team.ts ✅ |
| **Type file** | /types/project.ts | /types/team.ts ✅ |
| **Display modes** | full / gallery-only | Progressive enhancement |
| **Missing data** | Switch display mode | Hide sections gracefully |
| **Helper functions** | getProjectBySlug() | getTeamMemberBySlug() ✅ |
| **Image paths** | Need fixing | Need same fix |
| **Status** | Needs refactor | Already good! ✅ |

---

## ✅ Quick Checklist for Team

**Minimum to verify:**
- [ ] Team member pages use `/team-member/[slug]` route ✅
- [ ] Data centralized in `/data/team.ts` ✅
- [ ] Types defined in `/types/team.ts` ✅
- [ ] Image paths use `getImagePath()` ⚠️ (probably needs fix)
- [ ] All Image components have `unoptimized` prop ⚠️
- [ ] Optional fields handled gracefully ✅ (probably)
- [ ] Team listing page shows all members ✅

**Only thing likely needing attention: Image paths!**

Follow the same fix as projects:
```typescript
import { getImagePath } from '@/config/site';

image: getImagePath('/images/team/member-name.jpg')
```

---

## 🎉 Good News!

Your team structure is **already following best practices!** 

The main work is:
1. ✅ Fix image paths (same as projects)
2. ✅ Ensure 'unoptimized' on Image components
3. ✅ Optionally enhance team member data

**Team members are the MODEL that projects should follow!** 🌟
