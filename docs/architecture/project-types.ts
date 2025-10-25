/**
 * ============================================================================
 * FILE: src/types/project.ts
 * ============================================================================
 * DESCRIPTION: TypeScript type definitions for project data
 * 
 * This file defines all TypeScript interfaces and types used throughout
 * the project pages. It ensures type safety and provides clear documentation
 * for the project data structure.
 * 
 * @author SV Architects Development Team
 * @version 1.0.0
 * ============================================================================
 */

/**
 * Project completion status
 */
export type ProjectStatus = 'completed' | 'ongoing' | 'upcoming';

/**
 * Project categories matching your actual projects
 */
export type ProjectCategory = 
  | 'residential'           // Houses, condos, apartments
  | 'commercial'            // Retail, office buildings
  | 'hospitality'          // Hotels, resorts
  | 'aviation'             // Airports, terminals
  | 'healthcare'           // Hospitals, clinics
  | 'institutional'        // Schools, government buildings
  | 'master-planning'      // Urban planning, large developments
  | 'interior-design'      // Interior design projects
  | 'mixed-use';           // Multi-purpose developments

/**
 * Display mode determines how the project page is rendered
 * - 'full': Shows complete project details with all sections
 * - 'gallery-only': Shows only image carousel for projects without full details
 */
export type ProjectDisplayMode = 'full' | 'gallery-only';

/**
 * Project image with metadata
 */
export interface ProjectImage {
  /** Path to the image file (use getImagePath helper) */
  url: string;
  
  /** Alt text for accessibility (REQUIRED) */
  alt: string;
  
  /** Optional caption displayed below image */
  caption?: string;
}

/**
 * Sustainability certifications and features
 */
export interface ProjectSustainability {
  /** LEED certification */
  leed?: boolean;
  
  /** Green building certification */
  greenBuilding?: boolean;
  
  /** Energy efficient features */
  energyEfficient?: boolean;
  
  /** Additional sustainability features */
  additionalFeatures?: string[];
}

/**
 * Complete project data structure
 * 
 * REQUIRED fields:
 * - id: Unique identifier (used in URL slug)
 * - name: Project name
 * - category: Project category
 * - displayMode: How to display the project
 * - images: At least one image
 * 
 * OPTIONAL fields (recommended for 'full' displayMode):
 * - All other fields provide richer project information
 */
export interface ProjectData {
  // ========== REQUIRED FIELDS ==========
  
  /** Unique identifier (slug) - used in URLs */
  id: string;
  
  /** Project name */
  name: string;
  
  /** Project category */
  category: ProjectCategory;
  
  /** Display mode - determines page layout */
  displayMode: ProjectDisplayMode;
  
  /** Project images (minimum 1 required) */
  images: ProjectImage[];
  
  // ========== OPTIONAL FIELDS ==========
  
  /** Short tagline or subtitle */
  tagline?: string;
  
  /** Detailed project description */
  description?: string;
  
  /** Project location (e.g., "Bangkok, Thailand") */
  location?: string;
  
  /** Year completed or started */
  year?: number;
  
  /** Current project status */
  status?: ProjectStatus;
  
  /** Project size (e.g., "120,000 sqm") */
  size?: string;
  
  /** Client name */
  client?: string;
  
  /** Project type (e.g., "Commercial Development") */
  type?: string;
  
  /** List of key features */
  features?: string[];
  
  /** Sustainability information */
  sustainability?: ProjectSustainability;
  
  // ========== SEO FIELDS ==========
  
  /** Custom meta description for SEO */
  metaDescription?: string;
  
  /** Keywords for SEO */
  keywords?: string[];
  
  /** Custom thumbnail for project cards (defaults to images[0]) */
  thumbnail?: string;
  
  // ========== ADDITIONAL INFO ==========
  
  /** Additional project details or notes */
  additionalInfo?: {
    /** Architectural style */
    style?: string;
    
    /** Awards received */
    awards?: string[];
    
    /** Publications or media coverage */
    publications?: string[];
    
    /** Collaborators or partners */
    collaborators?: string[];
    
    /** Budget range (if public) */
    budget?: string;
    
    /** Project duration */
    duration?: string;
  };
}

/**
 * Type guard to check if a project has full details
 */
export function hasFullDetails(project: ProjectData): boolean {
  return project.displayMode === 'full' && 
         !!project.description && 
         !!project.tagline;
}

/**
 * Type guard to check if a project is gallery-only
 */
export function isGalleryOnly(project: ProjectData): boolean {
  return project.displayMode === 'gallery-only';
}

/**
 * Get display-ready project year
 */
export function getProjectYear(project: ProjectData): string {
  return project.year?.toString() || 'Year Unknown';
}

/**
 * Get display-ready project location
 */
export function getProjectLocation(project: ProjectData): string {
  return project.location || 'Location Unknown';
}

/**
 * Get project thumbnail URL
 */
export function getProjectThumbnail(project: ProjectData): string {
  return project.thumbnail || project.images[0]?.url || '';
}

/**
 * Get category display name
 */
export function getCategoryDisplayName(category: ProjectCategory): string {
  const displayNames: Record<ProjectCategory, string> = {
    'residential': 'Residential',
    'commercial': 'Commercial',
    'hospitality': 'Hospitality',
    'aviation': 'Aviation',
    'healthcare': 'Healthcare',
    'institutional': 'Institutional',
    'master-planning': 'Master Planning',
    'interior-design': 'Interior Design',
    'mixed-use': 'Mixed Use'
  };
  
  return displayNames[category];
}

/**
 * Get status display info
 */
export function getStatusInfo(status?: ProjectStatus): {
  label: string;
  color: string;
} {
  if (!status) {
    return { label: 'Unknown', color: 'bg-gray-100 text-gray-700' };
  }
  
  const statusInfo: Record<ProjectStatus, { label: string; color: string }> = {
    'completed': {
      label: 'Completed',
      color: 'bg-green-100 text-green-700'
    },
    'ongoing': {
      label: 'Ongoing',
      color: 'bg-blue-100 text-blue-700'
    },
    'upcoming': {
      label: 'Upcoming',
      color: 'bg-purple-100 text-purple-700'
    }
  };
  
  return statusInfo[status];
}
