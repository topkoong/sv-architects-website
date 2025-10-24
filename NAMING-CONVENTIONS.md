/**
 * ============================================================================
 * FILE: NAMING-CONVENTIONS.md
 * ============================================================================
 * DESCRIPTION: Production-Grade Naming Conventions for SV Architects Website
 * 
 * This document outlines the comprehensive naming conventions used throughout
 * the SV Architects website codebase. These conventions ensure consistency,
 * readability, and maintainability across all components, functions, variables,
 * and project structure.
 * 
 * STANDARDS COMPLIANCE:
 * - TypeScript/JavaScript best practices
 * - React/Next.js conventions
 * - Enterprise-level code standards
 * - Accessibility guidelines
 * - SEO optimization standards
 * 
 * @author SV Architects Development Team
 * @version 1.0.0
 * @since 2024
 * ============================================================================
 */

# Production-Grade Naming Conventions

## Table of Contents
1. [Component Naming](#component-naming)
2. [Function Naming](#function-naming)
3. [Variable Naming](#variable-naming)
4. [Constant Naming](#constant-naming)
5. [Interface and Type Naming](#interface-and-type-naming)
6. [File and Directory Naming](#file-and-directory-naming)
7. [CSS Class Naming](#css-class-naming)
8. [API and Data Naming](#api-and-data-naming)
9. [Event Handler Naming](#event-handler-naming)
10. [Hook Naming](#hook-naming)
11. [Configuration Naming](#configuration-naming)
12. [Documentation Naming](#documentation-naming)

---

## Component Naming

### React Components
- **Format**: `PascalCase`
- **Pattern**: `[ComponentName]` or `[ComponentName]Component`
- **Examples**:
  ```typescript
  // ✅ Correct
  export const Header = () => { ... }
  export const Footer = () => { ... }
  export const ProjectCard = () => { ... }
  export const TeamMemberCard = () => { ... }
  
  // ❌ Incorrect
  export const header = () => { ... }
  export const HeaderComponent = () => { ... } // Redundant
  export const header_component = () => { ... }
  ```

### Page Components
- **Format**: `PascalCase` with `Page` suffix
- **Pattern**: `[PageName]Page`
- **Examples**:
  ```typescript
  // ✅ Correct
  export default function AboutPage() { ... }
  export default function ProjectsPage() { ... }
  export default function TeamPage() { ... }
  
  // ❌ Incorrect
  export default function about() { ... }
  export default function About() { ... } // Missing Page suffix
  ```

### Layout Components
- **Format**: `PascalCase` with `Layout` suffix
- **Pattern**: `[LayoutName]Layout`
- **Examples**:
  ```typescript
  // ✅ Correct
  export const MainLayout = () => { ... }
  export const ProjectLayout = () => { ... }
  
  // ❌ Incorrect
  export const mainLayout = () => { ... }
  export const Main = () => { ... }
  ```

---

## Function Naming

### Event Handlers
- **Format**: `camelCase` with `handle` prefix
- **Pattern**: `handle[Action]`
- **Examples**:
  ```typescript
  // ✅ Correct
  const handleClick = () => { ... }
  const handleSubmit = () => { ... }
  const handleImageChange = () => { ... }
  const handleMenuToggle = () => { ... }
  
  // ❌ Incorrect
  const onClick = () => { ... }
  const clickHandler = () => { ... }
  const handle_click = () => { ... }
  ```

### Utility Functions
- **Format**: `camelCase` with descriptive action
- **Pattern**: `[action][Object]` or `[action][Action]`
- **Examples**:
  ```typescript
  // ✅ Correct
  const formatDate = (date: Date) => { ... }
  const validateEmail = (email: string) => { ... }
  const generateSlug = (text: string) => { ... }
  const calculateDistance = (point1: Point, point2: Point) => { ... }
  
  // ❌ Incorrect
  const format_date = (date: Date) => { ... }
  const FormatDate = (date: Date) => { ... }
  const dateFormatter = (date: Date) => { ... }
  ```

### Async Functions
- **Format**: `camelCase` with async indicator
- **Pattern**: `[action][Object]` or `fetch[Object]`
- **Examples**:
  ```typescript
  // ✅ Correct
  const fetchProjects = async () => { ... }
  const loadTeamMembers = async () => { ... }
  const uploadImage = async (file: File) => { ... }
  
  // ❌ Incorrect
  const fetch_projects = async () => { ... }
  const FetchProjects = async () => { ... }
  const getProjectsAsync = async () => { ... }
  ```

---

## Variable Naming

### State Variables
- **Format**: `camelCase` with descriptive state
- **Pattern**: `[state][Object]` or `is[State]`
- **Examples**:
  ```typescript
  // ✅ Correct
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [activeCategory, setActiveCategory] = useState('all')
  const [isLoading, setIsLoading] = useState(false)
  
  // ❌ Incorrect
  const [menuOpen, setMenuOpen] = useState(false)
  const [current_image_index, setCurrentImageIndex] = useState(0)
  const [active_category, setActiveCategory] = useState('all')
  ```

### Local Variables
- **Format**: `camelCase` with descriptive purpose
- **Pattern**: `[purpose][Object]` or `[descriptive]`
- **Examples**:
  ```typescript
  // ✅ Correct
  const filteredProjects = projects.filter(...)
  const imageCount = images.length
  const currentYear = new Date().getFullYear()
  const projectSlug = generateSlug(project.name)
  
  // ❌ Incorrect
  const filtered_projects = projects.filter(...)
  const image_count = images.length
  const current_year = new Date().getFullYear()
  const project_slug = generateSlug(project.name)
  ```

### Props Variables
- **Format**: `camelCase` with descriptive purpose
- **Pattern**: `[purpose][Object]` or `[descriptive]`
- **Examples**:
  ```typescript
  // ✅ Correct
  interface ProjectCardProps {
    project: Project
    onImageClick: (image: string) => void
    isActive: boolean
    showDetails: boolean
  }
  
  // ❌ Incorrect
  interface ProjectCardProps {
    project: Project
    on_image_click: (image: string) => void
    is_active: boolean
    show_details: boolean
  }
  ```

---

## Constant Naming

### Configuration Constants
- **Format**: `SCREAMING_SNAKE_CASE`
- **Pattern**: `[CATEGORY]_[DESCRIPTION]`
- **Examples**:
  ```typescript
  // ✅ Correct
  const API_BASE_URL = 'https://api.sv-arch.com'
  const MAX_IMAGE_SIZE = 5 * 1024 * 1024 // 5MB
  const CAROUSEL_AUTO_ADVANCE_INTERVAL = 5000
  const DEFAULT_PAGE_SIZE = 12
  
  // ❌ Incorrect
  const apiBaseUrl = 'https://api.sv-arch.com'
  const maxImageSize = 5 * 1024 * 1024
  const carouselAutoAdvanceInterval = 5000
  ```

### Data Constants
- **Format**: `SCREAMING_SNAKE_CASE` for arrays/objects
- **Pattern**: `[CATEGORY]_[DESCRIPTION]`
- **Examples**:
  ```typescript
  // ✅ Correct
  const NAV_ITEMS = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' }
  ] as const
  
  const CAROUSEL_IMAGES = [
    { id: 1, src: '/image1.jpg', alt: 'Description' },
    { id: 2, src: '/image2.jpg', alt: 'Description' }
  ]
  
  // ❌ Incorrect
  const navItems = [...]
  const carouselImages = [...]
  ```

### Enum Constants
- **Format**: `SCREAMING_SNAKE_CASE`
- **Pattern**: `[CATEGORY]_[VALUE]`
- **Examples**:
  ```typescript
  // ✅ Correct
  enum ProjectStatus {
    COMPLETED = 'completed',
    ONGOING = 'ongoing',
    PLANNED = 'planned'
  }
  
  enum ProjectCategory {
    RESIDENTIAL = 'residential',
    COMMERCIAL = 'commercial',
    HEALTHCARE = 'healthcare'
  }
  
  // ❌ Incorrect
  enum ProjectStatus {
    completed = 'completed',
    ongoing = 'ongoing',
    planned = 'planned'
  }
  ```

---

## Interface and Type Naming

### Interfaces
- **Format**: `PascalCase` with descriptive suffix
- **Pattern**: `[Object]` or `[Object]Props` or `[Object]Data`
- **Examples**:
  ```typescript
  // ✅ Correct
  interface Project {
    id: string
    name: string
    category: string
    description: string
  }
  
  interface ProjectCardProps {
    project: Project
    onImageClick: (image: string) => void
  }
  
  interface TeamMemberData {
    id: string
    name: string
    position: string
    bio: string
  }
  
  // ❌ Incorrect
  interface project { ... }
  interface ProjectCard { ... } // Missing Props suffix
  interface team_member_data { ... }
  ```

### Type Aliases
- **Format**: `PascalCase` with descriptive suffix
- **Pattern**: `[Object]` or `[Object]Type`
- **Examples**:
  ```typescript
  // ✅ Correct
  type ProjectStatus = 'completed' | 'ongoing' | 'planned'
  type ProjectCategory = 'residential' | 'commercial' | 'healthcare'
  type AnimationVariant = 'fadeIn' | 'slideUp' | 'stagger'
  
  // ❌ Incorrect
  type projectStatus = 'completed' | 'ongoing' | 'planned'
  type project_category = 'residential' | 'commercial' | 'healthcare'
  type AnimationVariantType = 'fadeIn' | 'slideUp' | 'stagger' // Redundant
  ```

---

## File and Directory Naming

### Component Files
- **Format**: `PascalCase.tsx` or `PascalCase.ts`
- **Pattern**: `[ComponentName].tsx`
- **Examples**:
  ```
  // ✅ Correct
  src/components/layout/Header.tsx
  src/components/ui/ProjectCard.tsx
  src/components/forms/ContactForm.tsx
  
  // ❌ Incorrect
  src/components/layout/header.tsx
  src/components/ui/project-card.tsx
  src/components/forms/contact_form.tsx
  ```

### Page Files
- **Format**: `page.tsx` (Next.js App Router convention)
- **Pattern**: `page.tsx`
- **Examples**:
  ```
  // ✅ Correct
  src/app/about/page.tsx
  src/app/projects/page.tsx
  src/app/team/page.tsx
  
  // ❌ Incorrect
  src/app/about/AboutPage.tsx
  src/app/projects/ProjectsPage.tsx
  src/app/team/TeamPage.tsx
  ```

### Utility Files
- **Format**: `camelCase.ts`
- **Pattern**: `[utilityName].ts`
- **Examples**:
  ```
  // ✅ Correct
  src/lib/animations.ts
  src/lib/utils.ts
  src/lib/performance.ts
  src/utils/dateFormatter.ts
  
  // ❌ Incorrect
  src/lib/Animations.ts
  src/lib/utils.ts
  src/lib/performance-utils.ts
  src/utils/date_formatter.ts
  ```

### Data Files
- **Format**: `camelCase.ts`
- **Pattern**: `[dataType].ts`
- **Examples**:
  ```
  // ✅ Correct
  src/data/projects.ts
  src/data/team.ts
  src/data/constants.ts
  
  // ❌ Incorrect
  src/data/Projects.ts
  src/data/team-members.ts
  src/data/Constants.ts
  ```

---

## CSS Class Naming

### Tailwind CSS Classes
- **Format**: `kebab-case` (Tailwind convention)
- **Pattern**: `[property]-[value]` or `[property]-[value]-[modifier]`
- **Examples**:
  ```typescript
  // ✅ Correct
  className="text-lg font-semibold text-gray-900"
  className="bg-white shadow-lg rounded-lg p-6"
  className="hover:bg-gray-100 transition-colors duration-200"
  
  // ❌ Incorrect
  className="textLg fontSemibold textGray900"
  className="bg_white shadow_lg rounded_lg p_6"
  ```

### Custom CSS Classes
- **Format**: `kebab-case`
- **Pattern**: `[component]-[element]` or `[component]-[element]-[modifier]`
- **Examples**:
  ```css
  /* ✅ Correct */
  .btn-primary { ... }
  .btn-secondary { ... }
  .card-hover { ... }
  .nav-item-active { ... }
  
  /* ❌ Incorrect */
  .btnPrimary { ... }
  .btn_secondary { ... }
  .cardHover { ... }
  .nav-item_active { ... }
  ```

---

## API and Data Naming

### API Endpoints
- **Format**: `kebab-case`
- **Pattern**: `[resource]` or `[resource]/[id]`
- **Examples**:
  ```typescript
  // ✅ Correct
  const API_ENDPOINTS = {
    PROJECTS: '/api/projects',
    TEAM_MEMBERS: '/api/team-members',
    CONTACT_FORM: '/api/contact-form',
    PROJECT_DETAILS: '/api/projects/:id'
  }
  
  // ❌ Incorrect
  const API_ENDPOINTS = {
    projects: '/api/projects',
    teamMembers: '/api/teamMembers',
    contact_form: '/api/contact_form'
  }
  ```

### Data Properties
- **Format**: `camelCase`
- **Pattern**: `[descriptive]` or `[object][Property]`
- **Examples**:
  ```typescript
  // ✅ Correct
  interface Project {
    id: string
    name: string
    category: string
    description: string
    imageUrl: string
    createdAt: Date
    updatedAt: Date
  }
  
  // ❌ Incorrect
  interface Project {
    id: string
    name: string
    category: string
    description: string
    image_url: string
    created_at: Date
    updated_at: Date
  }
  ```

---

## Event Handler Naming

### Click Handlers
- **Format**: `camelCase` with `handle` prefix
- **Pattern**: `handle[Action]` or `handle[Object][Action]`
- **Examples**:
  ```typescript
  // ✅ Correct
  const handleClick = () => { ... }
  const handleImageClick = () => { ... }
  const handleMenuToggle = () => { ... }
  const handleProjectSelect = () => { ... }
  
  // ❌ Incorrect
  const onClick = () => { ... }
  const handle_image_click = () => { ... }
  const HandleMenuToggle = () => { ... }
  ```

### Form Handlers
- **Format**: `camelCase` with `handle` prefix
- **Pattern**: `handle[Form][Action]`
- **Examples**:
  ```typescript
  // ✅ Correct
  const handleFormSubmit = () => { ... }
  const handleFormReset = () => { ... }
  const handleFormValidation = () => { ... }
  const handleInputChange = () => { ... }
  
  // ❌ Incorrect
  const onSubmit = () => { ... }
  const handle_form_submit = () => { ... }
  const HandleFormSubmit = () => { ... }
  ```

### Navigation Handlers
- **Format**: `camelCase` with `handle` prefix
- **Pattern**: `handle[Action]` or `handle[Object][Action]`
- **Examples**:
  ```typescript
  // ✅ Correct
  const handleNextImage = () => { ... }
  const handlePreviousImage = () => { ... }
  const handleMenuClose = () => { ... }
  const handleCategoryChange = () => { ... }
  
  // ❌ Incorrect
  const nextImage = () => { ... }
  const handle_previous_image = () => { ... }
  const HandleMenuClose = () => { ... }
  ```

---

## Hook Naming

### Custom Hooks
- **Format**: `camelCase` with `use` prefix
- **Pattern**: `use[Purpose]` or `use[Object][Action]`
- **Examples**:
  ```typescript
  // ✅ Correct
  const useLocalStorage = (key: string) => { ... }
  const useImageCarousel = (images: string[]) => { ... }
  const useFormValidation = (schema: Schema) => { ... }
  const useProjectFilter = (projects: Project[]) => { ... }
  
  // ❌ Incorrect
  const use_local_storage = (key: string) => { ... }
  const UseImageCarousel = (images: string[]) => { ... }
  const useImageCarouselHook = (images: string[]) => { ... }
  ```

### Built-in Hooks
- **Format**: `camelCase` (React convention)
- **Pattern**: `use[State]` or `use[Effect]`
- **Examples**:
  ```typescript
  // ✅ Correct
  const [state, setState] = useState(initialValue)
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  
  useEffect(() => { ... }, [])
  useCallback(() => { ... }, [])
  useMemo(() => { ... }, [])
  
  // ❌ Incorrect
  const [state, setState] = useState(initialValue)
  const [data, setData] = useState(null)
  const [is_loading, setIsLoading] = useState(false)
  ```

---

## Configuration Naming

### Environment Variables
- **Format**: `SCREAMING_SNAKE_CASE`
- **Pattern**: `[CATEGORY]_[DESCRIPTION]`
- **Examples**:
  ```bash
  # ✅ Correct
  NEXT_PUBLIC_API_URL=https://api.sv-arch.com
  DATABASE_URL=postgresql://...
  JWT_SECRET=your-secret-key
  UPLOAD_MAX_SIZE=5242880
  
  # ❌ Incorrect
  next_public_api_url=https://api.sv-arch.com
  databaseUrl=postgresql://...
  jwt-secret=your-secret-key
  uploadMaxSize=5242880
  ```

### Configuration Objects
- **Format**: `camelCase`
- **Pattern**: `[purpose]Config` or `[object]Config`
- **Examples**:
  ```typescript
  // ✅ Correct
  const animationConfig = {
    duration: 300,
    easing: 'ease-in-out',
    delay: 0
  }
  
  const apiConfig = {
    baseUrl: 'https://api.sv-arch.com',
    timeout: 5000,
    retries: 3
  }
  
  // ❌ Incorrect
  const animation_config = { ... }
  const AnimationConfig = { ... }
  const api_config = { ... }
  ```

---

## Documentation Naming

### Documentation Files
- **Format**: `SCREAMING_SNAKE_CASE.md`
- **Pattern**: `[CATEGORY]_[DESCRIPTION].md`
- **Examples**:
  ```
  // ✅ Correct
  README.md
  NAMING_CONVENTIONS.md
  API_DOCUMENTATION.md
  DEPLOYMENT_GUIDE.md
  COMPONENT_DOCUMENTATION.md
  
  // ❌ Incorrect
  readme.md
  naming-conventions.md
  apiDocumentation.md
  deployment_guide.md
  ```

### Code Comments
- **Format**: `Sentence case` with proper punctuation
- **Pattern**: `[Description]` or `[Action]` or `[Purpose]`
- **Examples**:
  ```typescript
  // ✅ Correct
  // Track current image index in the carousel
  // Used to control which image is currently displayed
  // Updates automatically every 5 seconds or manually via navigation
  
  /**
   * Navigate to next image in carousel
   * 
   * FUNCTIONALITY:
   * - Advances to next image in sequence
   * - Loops back to first image if at end
   * - Used by next button and auto-advance
   * 
   * @returns {void}
   */
  
  // ❌ Incorrect
  // track current image index in the carousel
  // used to control which image is currently displayed
  // updates automatically every 5 seconds or manually via navigation
  
  /**
   * navigate to next image in carousel
   * functionality:
   * - advances to next image in sequence
   * - loops back to first image if at end
   * - used by next button and auto-advance
   * returns: void
   */
  ```

---

## Best Practices Summary

### General Rules
1. **Consistency**: Use the same naming pattern throughout the codebase
2. **Descriptiveness**: Names should clearly indicate purpose and functionality
3. **Readability**: Choose names that are easy to read and understand
4. **Convention**: Follow established conventions for each technology stack
5. **Length**: Balance between descriptive and concise names

### Common Mistakes to Avoid
1. **Mixed Cases**: Don't mix camelCase, snake_case, and PascalCase
2. **Abbreviations**: Avoid unnecessary abbreviations that reduce clarity
3. **Generic Names**: Avoid generic names like `data`, `item`, `value`
4. **Inconsistent Prefixes**: Use consistent prefixes (handle, use, is, etc.)
5. **Overly Long Names**: Don't create excessively long names that reduce readability

### Validation Checklist
- [ ] All components use PascalCase
- [ ] All functions use camelCase
- [ ] All constants use SCREAMING_SNAKE_CASE
- [ ] All interfaces use PascalCase
- [ ] All files follow appropriate naming conventions
- [ ] All CSS classes use kebab-case
- [ ] All event handlers use `handle` prefix
- [ ] All custom hooks use `use` prefix
- [ ] All documentation follows sentence case
- [ ] All naming is consistent throughout the codebase

---

## Conclusion

These naming conventions ensure that the SV Architects website codebase maintains high standards of readability, maintainability, and consistency. By following these guidelines, developers can easily understand and work with the code, reducing bugs and improving development efficiency.

For questions or clarifications about these naming conventions, please refer to the development team or update this documentation as needed.
