/**
 * ============================================================================
 * FILE: src/types/project.ts
 * ============================================================================
 * DESCRIPTION: TypeScript type definitions for project-related data
 * Defines the structure for architectural projects and portfolio items
 * ============================================================================
 */

/**
 * Project category enumeration
 * Defines the different types of architectural projects
 */
export type ProjectCategory = 
  | 'commercial'
  | 'hospitality'
  | 'healthcare'
  | 'transportation'
  | 'aviation'
  | 'mixed-use'
  | 'office'
  | 'residential'
  | 'educational'
  | 'industrial';

/**
 * Project status enumeration
 * Tracks the current status of projects
 */
export type ProjectStatus = 
  | 'planning'
  | 'design'
  | 'construction'
  | 'completed'
  | 'on-hold'
  | 'cancelled';

/**
 * Project size enumeration
 * Categorizes projects by scale
 */
export type ProjectSize = 
  | 'small'
  | 'medium'
  | 'large'
  | 'mega';

/**
 * Project image interface
 * Defines the structure for project images
 */
export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
  isPrimary?: boolean;
  width?: number;
  height?: number;
}

/**
 * Project location interface
 * Defines the geographical location of a project
 */
export interface ProjectLocation {
  city: string; // City name
  province: string; // Province or state
  country: string; // Country name
  coordinates?: { // Optional GPS coordinates
    lat: number; // Latitude
    lng: number; // Longitude
  };
}

/**
 * Project client interface
 * Defines information about the project client
 */
export interface ProjectClient {
  name: string; // Client name
  type: 'private' | 'public' | 'government' | 'corporate'; // Client type
  website?: string; // Client website URL
  logo?: string; // Client logo image path
}

/**
 * Project team member interface
 * Defines team members involved in the project
 */
export interface ProjectTeamMember {
  name: string; // Team member name
  role: string; // Role in the project
  slug: string; // URL slug for team member profile
}

/**
 * Project statistics interface
 * Defines key metrics and statistics for the project
 */
export interface ProjectStats {
  area?: number; // Total area in square meters
  floors?: number; // Number of floors
  rooms?: number; // Number of rooms
  capacity?: number; // Capacity (for hospitality, etc.)
  budget?: number; // Project budget
  duration?: number; // Project duration in months
}

/**
 * Project sustainability features interface
 * Defines green building and sustainability aspects
 */
export interface ProjectSustainability {
  leedRating?: 'certified' | 'silver' | 'gold' | 'platinum'; // LEED certification
  greenBuildingFeatures?: string[]; // Array of green features
  energyEfficiency?: string; // Energy efficiency rating
  renewableEnergy?: string[]; // Renewable energy sources used
}

/**
 * Main Project interface
 * Defines the complete structure of an architectural project
 */
export interface Project {
  // Basic identification
  id: string; // Unique project identifier
  slug: string; // URL-friendly identifier
  name: string; // Project name
  tagline?: string; // Short project tagline
  
  // Classification
  category: ProjectCategory; // Project category
  status: ProjectStatus; // Current project status
  size: ProjectSize; // Project size category
  
  // Content
  description: string; // Detailed project description
  shortDescription: string; // Brief description for listings
  features: string[]; // Key project features
  challenges: string[]; // Design challenges addressed
  solutions: string[]; // Solutions implemented
  
  // Visual content
  images: ProjectImage[]; // Array of project images
  thumbnail: string; // Primary thumbnail image
  gallery?: string[]; // Additional gallery images
  
  // Location and client
  location: ProjectLocation; // Project location
  client: ProjectClient; // Project client information
  
  // Team and timeline
  team: ProjectTeamMember[]; // Team members involved
  year: number; // Project year
  startDate?: string; // Project start date (ISO format)
  endDate?: string; // Project end date (ISO format)
  
  // Technical details
  stats: ProjectStats; // Project statistics
  sustainability?: ProjectSustainability; // Sustainability features
  
  // SEO and metadata
  metaTitle?: string; // Custom meta title
  metaDescription?: string; // Custom meta description
  keywords?: string[]; // SEO keywords
  
  // Additional information
  awards?: string[]; // Awards received
  publications?: string[]; // Publications featuring the project
  testimonials?: string[]; // Client testimonials
  
  // Timestamps
  createdAt: string; // Creation timestamp (ISO format)
  updatedAt: string; // Last update timestamp (ISO format)
  publishedAt?: string; // Publication timestamp (ISO format)
}

/**
 * Project filter interface
 * Defines filtering options for project listings
 */
export interface ProjectFilter {
  category?: ProjectCategory; // Filter by category
  status?: ProjectStatus; // Filter by status
  size?: ProjectSize; // Filter by size
  year?: number; // Filter by year
  location?: string; // Filter by location
  client?: string; // Filter by client
  search?: string; // Text search query
}

/**
 * Project sort options
 * Defines sorting options for project listings
 */
export type ProjectSortOption = 
  | 'name-asc'
  | 'name-desc'
  | 'year-asc'
  | 'year-desc'
  | 'created-asc'
  | 'created-desc'
  | 'updated-asc'
  | 'updated-desc';

/**
 * Project listing response interface
 * Defines the structure for paginated project listings
 */
export interface ProjectListingResponse {
  projects: Project[]; // Array of projects
  total: number; // Total number of projects
  page: number; // Current page number
  limit: number; // Number of projects per page
  hasNext: boolean; // Whether there are more pages
  hasPrev: boolean; // Whether there are previous pages
}

/**
 * Project category information interface
 * Defines information about project categories
 */
export interface ProjectCategoryInfo {
  category: ProjectCategory; // Category identifier
  name: string; // Display name
  description: string; // Category description
  icon?: string; // Category icon
  color?: string; // Category color
  count: number; // Number of projects in this category
}

/**
 * Project statistics interface
 * Defines overall project statistics
 */
export interface ProjectStatistics {
  totalProjects: number; // Total number of projects
  completedProjects: number; // Number of completed projects
  activeProjects: number; // Number of active projects
  categories: ProjectCategoryInfo[]; // Category breakdown
  yearlyStats: { // Yearly project statistics
    year: number;
    count: number;
  }[];
  locationStats: { // Location-based statistics
    location: string;
    count: number;
  }[];
}
