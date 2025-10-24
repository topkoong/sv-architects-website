/**
 * ============================================================================
 * FILE: src/types/projects.ts
 * ============================================================================
 * DESCRIPTION: TypeScript type definitions for project data
 * Contains all interfaces and types used for project-related functionality
 * 
 * FEATURES:
 * - Complete project data structure
 * - Type-safe project interfaces
 * - Enum definitions for project properties
 * - Helper types for project filtering and search
 * 
 * LAST MODIFIED: [Current Date]
 * AUTHOR: Development Team
 * 
 * ============================================================================
 */

/**
 * ============================================================================
 * ENUMS
 * ============================================================================
 */

/**
 * Project categories
 */
export enum ProjectCategory {
  RESIDENTIAL = 'Residential',
  COMMERCIAL = 'Commercial',
  HEALTHCARE = 'Healthcare',
  HOSPITALITY = 'Hospitality',
  CULTURAL = 'Cultural',
  AVIATION = 'Aviation',
  TRANSPORTATION = 'Transportation',
  MIXED_USE = 'Mixed-Use',
  MASTER_PLANNING = 'Master-Planning',
  INTERIOR_DESIGN = 'Interior Design',
  OFFICE = 'Office',
  AWARDS = 'Awards'
}

/**
 * Project status
 */
export enum ProjectStatus {
  COMPLETED = 'completed',
  ONGOING = 'ongoing',
  PLANNED = 'planned'
}

/**
 * Project types
 */
export enum ProjectType {
  RESIDENTIAL = 'Residential',
  COMMERCIAL = 'Commercial',
  HEALTHCARE = 'Healthcare',
  HOSPITALITY = 'Hospitality',
  CULTURAL = 'Cultural',
  AVIATION = 'Aviation',
  TRANSPORTATION = 'Transportation',
  MIXED_USE = 'Mixed-Use',
  MASTER_PLANNING = 'Master-Planning',
  INTERIOR_DESIGN = 'Interior Design',
  OFFICE = 'Office',
  AWARDS = 'Awards'
}

/**
 * ============================================================================
 * INTERFACES
 * ============================================================================
 */

/**
 * Project images structure
 */
export interface ProjectImages {
  thumbnail: string;
  gallery: string[];
}

/**
 * Project sustainability features
 */
export interface ProjectSustainability {
  leed: boolean;
  greenBuilding: boolean;
  energyEfficient: boolean;
}

/**
 * Main project interface
 */
export interface Project {
  // Basic identification
  id: string;
  slug: string;
  name: string;
  
  // Classification
  category: string;
  categories?: string[]; // Optional array for multi-category projects
  type: string;
  
  // Project details
  location: string;
  year: number;
  status: ProjectStatus;
  size: string;
  client: string;
  
  // Content
  tagline: string;
  description: string;
  longDescription: string;
  features: string[];
  
  // Media
  images: ProjectImages;
  
  // Team and collaboration
  team: string[];
  
  // Recognition
  awards?: string[];
  
  // Sustainability
  sustainability?: ProjectSustainability;
  
  // Technology
  technologies?: string[];
  
  // SEO and metadata
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  
  // Timestamps
  createdAt: string;
  updatedAt: string;
}

/**
 * Project filter options
 */
export interface ProjectFilterOptions {
  category?: string;
  status?: ProjectStatus;
  year?: number;
  teamMember?: string;
  search?: string;
}

/**
 * Project search result
 */
export interface ProjectSearchResult {
  project: Project;
  relevanceScore: number;
  matchedFields: string[];
}

/**
 * Project statistics
 */
export interface ProjectStatistics {
  totalProjects: number;
  completedProjects: number;
  ongoingProjects: number;
  plannedProjects: number;
  categories: number;
  totalSize: string;
}

/**
 * Project comparison data
 */
export interface ProjectComparison {
  projects: Project[];
  comparisonFields: string[];
}

/**
 * Project gallery item
 */
export interface ProjectGalleryItem {
  src: string;
  alt: string;
  caption?: string;
}

/**
 * Project timeline item
 */
export interface ProjectTimelineItem {
  date: string;
  event: string;
  description: string;
  status: 'completed' | 'ongoing' | 'planned';
}

/**
 * Project location data
 */
export interface ProjectLocation {
  address: string;
  city: string;
  country: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

/**
 * Project client information
 */
export interface ProjectClient {
  name: string;
  type: 'private' | 'public' | 'government';
  contact?: {
    email?: string;
    phone?: string;
  };
}

/**
 * Extended project interface with additional details
 */
export interface DetailedProject extends Omit<Project, 'location' | 'client'> {
  timeline?: ProjectTimelineItem[];
  location: ProjectLocation;
  client: ProjectClient;
  gallery: ProjectGalleryItem[];
  relatedProjects?: string[]; // Array of project IDs
}
