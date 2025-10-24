/**
 * ============================================================================
 * FILE: src/types/team.ts
 * ============================================================================
 * DESCRIPTION: TypeScript type definitions for team member data
 * Defines the structure for team member profiles and information
 * ============================================================================
 */

/**
 * Team member position enumeration
 * Defines the different positions within the architecture firm
 */
export type TeamMemberPosition = 
  | 'principal'
  | 'head-of-architect'
  | 'senior-architect'
  | 'architect'
  | 'junior-architect'
  | 'project-manager'
  | 'design-manager'
  | 'technical-manager'
  | 'associate'
  | 'consultant'
  | 'intern';

/**
 * Education level enumeration
 * Defines the different levels of education
 */
export type EducationLevel = 
  | 'bachelor'
  | 'master'
  | 'phd'
  | 'diploma'
  | 'certificate';

/**
 * Professional certification enumeration
 * Defines different types of professional certifications
 */
export type ProfessionalCertification = 
  | 'registered-architect'
  | 'leed-ap'
  | 'pmp'
  | 'peng'
  | 'other';

/**
 * Expertise area enumeration
 * Defines different areas of architectural expertise
 */
export type ExpertiseArea = 
  | 'commercial-architecture'
  | 'hospitality-design'
  | 'healthcare-facilities'
  | 'transportation-infrastructure'
  | 'aviation-facilities'
  | 'mixed-use-developments'
  | 'office-spaces'
  | 'residential-projects'
  | 'educational-buildings'
  | 'industrial-design'
  | 'sustainable-design'
  | 'urban-planning'
  | 'interior-design'
  | 'landscape-architecture';

/**
 * Education interface
 * Defines educational background information
 */
export interface Education {
  degree: string; // Full degree name
  institution: string; // University or institution name
  location: string; // City, Country
  year?: number; // Graduation year
  level: EducationLevel; // Education level
  field?: string; // Field of study
  gpa?: number; // Grade point average (if applicable)
  honors?: string[]; // Academic honors or distinctions
}

/**
 * Professional certification interface
 * Defines professional certifications and licenses
 */
export interface ProfessionalCert {
  type: ProfessionalCertification; // Type of certification
  name: string; // Full certification name
  issuingBody: string; // Issuing organization
  issueDate: string; // Issue date (ISO format)
  expiryDate?: string; // Expiry date (ISO format)
  credentialId?: string; // Credential ID or number
  status: 'active' | 'expired' | 'pending'; // Certification status
}

/**
 * Work experience interface
 * Defines professional work experience
 */
export interface WorkExperience {
  company: string; // Company name
  position: string; // Job title
  location: string; // Work location
  startDate: string; // Start date (ISO format)
  endDate?: string; // End date (ISO format) - undefined for current position
  description: string; // Job description
  achievements?: string[]; // Key achievements
  projects?: string[]; // Notable projects worked on
  isCurrent: boolean; // Whether this is the current position
}

/**
 * Project involvement interface
 * Defines team member's involvement in specific projects
 */
export interface ProjectInvolvement {
  projectId: string; // Project identifier
  projectName: string; // Project name
  role: string; // Role in the project
  responsibilities: string[]; // Specific responsibilities
  startDate: string; // Start date (ISO format)
  endDate?: string; // End date (ISO format)
  isActive: boolean; // Whether currently involved
}

/**
 * Social media interface
 * Defines social media profiles and links
 */
export interface SocialMedia {
  linkedin?: string; // LinkedIn profile URL
  twitter?: string; // Twitter profile URL
  instagram?: string; // Instagram profile URL
  facebook?: string; // Facebook profile URL
  behance?: string; // Behance portfolio URL
  dribbble?: string; // Dribbble portfolio URL
  website?: string; // Personal website URL
}

/**
 * Contact information interface
 * Defines contact details for team members
 */
export interface ContactInfo {
  email: string; // Primary email address
  phone?: string; // Phone number
  office?: string; // Office location
  extension?: string; // Phone extension
  socialMedia?: SocialMedia; // Social media profiles
}

/**
 * Main TeamMember interface
 * Defines the complete structure of a team member profile
 */
export interface TeamMember {
  // Basic identification
  id: string; // Unique team member identifier
  slug: string; // URL-friendly identifier
  firstName: string; // First name
  lastName: string; // Last name
  fullName: string; // Full name (computed)
  
  // Professional information
  position: TeamMemberPosition; // Current position
  title: string; // Professional title
  department?: string; // Department or division
  
  // Personal information
  image: string; // Profile photo path
  bio: string; // Professional biography
  shortBio: string; // Brief bio for listings
  
  // Education and qualifications
  education: Education[]; // Educational background
  certifications: ProfessionalCert[]; // Professional certifications
  
  // Professional experience
  experience: {
    summary: string; // Experience summary
    years: number; // Years of experience
    areas: ExpertiseArea[]; // Areas of expertise
    workHistory: WorkExperience[]; // Work experience history
  };
  
  // Project involvement
  projects: ProjectInvolvement[]; // Projects involved in
  
  // Skills and expertise
  skills: string[]; // Technical skills
  software: string[]; // Software proficiencies
  languages: string[]; // Languages spoken
  
  // Contact information
  contact: ContactInfo; // Contact details
  
  // Additional information
  awards?: string[]; // Awards and recognitions
  publications?: string[]; // Publications and articles
  speakingEngagements?: string[]; // Speaking engagements
  volunteerWork?: string[]; // Volunteer work
  
  // SEO and metadata
  metaTitle?: string; // Custom meta title
  metaDescription?: string; // Custom meta description
  keywords?: string[]; // SEO keywords
  
  // Timestamps
  createdAt: string; // Creation timestamp (ISO format)
  updatedAt: string; // Last update timestamp (ISO format)
  publishedAt?: string; // Publication timestamp (ISO format)
}

/**
 * Team member filter interface
 * Defines filtering options for team member listings
 */
export interface TeamMemberFilter {
  position?: TeamMemberPosition; // Filter by position
  department?: string; // Filter by department
  expertise?: ExpertiseArea; // Filter by expertise area
  experience?: { // Filter by experience range
    min?: number; // Minimum years
    max?: number; // Maximum years
  };
  search?: string; // Text search query
}

/**
 * Team member sort options
 * Defines sorting options for team member listings
 */
export type TeamMemberSortOption = 
  | 'name-asc'
  | 'name-desc'
  | 'position-asc'
  | 'position-desc'
  | 'experience-asc'
  | 'experience-desc'
  | 'joined-asc'
  | 'joined-desc';

/**
 * Team member listing response interface
 * Defines the structure for paginated team member listings
 */
export interface TeamMemberListingResponse {
  members: TeamMember[]; // Array of team members
  total: number; // Total number of team members
  page: number; // Current page number
  limit: number; // Number of members per page
  hasNext: boolean; // Whether there are more pages
  hasPrev: boolean; // Whether there are previous pages
}

/**
 * Team structure interface
 * Defines the organizational structure of the team
 */
export interface TeamStructure {
  departments: { // Department information
    name: string; // Department name
    description: string; // Department description
    members: TeamMember[]; // Department members
    head?: TeamMember; // Department head
  }[];
  leadership: TeamMember[]; // Leadership team
  totalMembers: number; // Total number of team members
}

/**
 * Team statistics interface
 * Defines overall team statistics
 */
export interface TeamStatistics {
  totalMembers: number; // Total number of team members
  averageExperience: number; // Average years of experience
  positionBreakdown: { // Position breakdown
    position: TeamMemberPosition;
    count: number;
  }[];
  expertiseBreakdown: { // Expertise breakdown
    area: ExpertiseArea;
    count: number;
  }[];
  educationBreakdown: { // Education breakdown
    level: EducationLevel;
    count: number;
  }[];
  certificationBreakdown: { // Certification breakdown
    type: ProfessionalCertification;
    count: number;
  }[];
}
