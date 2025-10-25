/**
 * ============================================================================
 * FILE: src/data/projects.ts
 * ============================================================================
 * DESCRIPTION: Centralized project data for SV Architects website
 * 
 * This file contains ALL project data in one place. Each project can be
 * displayed in two modes:
 * 
 * 1. FULL MODE: Complete project details with all information
 * 2. GALLERY-ONLY MODE: Just images carousel for projects without full details
 * 
 * @author SV Architects Development Team
 * @version 1.0.0
 * ============================================================================
 */

import { ProjectData, ProjectCategory } from '@/types/project';
import { getImagePath } from '@/config/site';

/**
 * All projects data
 * Add new projects to this array
 */
export const projects: ProjectData[] = [
  // ========== EXAMPLE: FULL DETAIL PROJECT ==========
  {
    id: 'centerpoint-siamsquare',
    name: 'Centerpoint Siamsquare',
    category: 'commercial',
    displayMode: 'full', // Show complete project page
    
    tagline: 'COMMERCIAL DEVELOPMENT EXCELLENCE',
    description: 'Commercial development featuring retail, office, and entertainment spaces in the heart of Bangkok. This landmark project represents the future of integrated commercial spaces, combining modern design with sustainable practices.',
    
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
    
    images: [
      {
        url: getImagePath('/images/projects/centerpoint-siamsquare-1.jpg'),
        alt: 'Centerpoint Siamsquare exterior view',
        caption: 'Main entrance and public plaza'
      },
      {
        url: getImagePath('/images/projects/centerpoint-siamsquare-2.jpg'),
        alt: 'Centerpoint Siamsquare retail space',
        caption: 'Modern retail environment with natural lighting'
      },
      {
        url: getImagePath('/images/projects/centerpoint-siamsquare-3.jpg'),
        alt: 'Centerpoint Siamsquare office tower at night',
        caption: 'Office tower illuminated at night'
      },
      {
        url: getImagePath('/images/projects/centerpoint-siamsquare-4.jpg'),
        alt: 'Centerpoint Siamsquare green spaces',
        caption: 'Public plaza with landscaped green spaces'
      }
    ],
    
    metaDescription: 'Centerpoint Siamsquare - A landmark 120,000 sqm commercial development in Bangkok featuring integrated retail, office, and entertainment spaces with sustainable design.',
    keywords: ['commercial development', 'Bangkok', 'retail', 'office space', 'mixed-use', 'sustainable design', 'LEED certified']
  },

  // ========== EXAMPLE: GALLERY-ONLY PROJECT ==========
  {
    id: 'jet-villa-residence',
    name: 'Jet Villa Residence',
    category: 'residential',
    displayMode: 'gallery-only', // Only show image carousel
    
    // Minimal info - just location and year
    location: 'Bangkok, Thailand',
    year: 2023,
    
    // Images with proper paths
    images: [
      {
        url: getImagePath('/images/projects/jet-villa-residence-residential/jet-villa-air-view.jpg'),
        alt: 'Jet Villa Residence aerial view'
      },
      {
        url: getImagePath('/images/projects/jet-villa-residence-residential/jet-villa-view2.jpg'),
        alt: 'Jet Villa Residence exterior design'
      },
      {
        url: getImagePath('/images/projects/jet-villa-residence-residential/jet-villa-view3.jpg'),
        alt: 'Jet Villa Residence garden and landscape'
      },
      {
        url: getImagePath('/images/projects/jet-villa-residence-residential/jet-villa-view4.jpg'),
        alt: 'Jet Villa Residence pool area'
      },
      {
        url: getImagePath('/images/projects/jet-villa-residence-residential/jet-villa-view5.jpg'),
        alt: 'Jet Villa Residence entrance'
      }
    ]
  },

  // ========== MORE FULL DETAIL EXAMPLES ==========
  {
    id: 'siamese-rama9',
    name: 'Siamese Rama 9',
    category: 'mixed-use',
    displayMode: 'full',
    
    tagline: 'AWARD-WINNING MIXED-USE DEVELOPMENT',
    description: 'An iconic mixed-use development that has received multiple international awards for its innovative design and sustainable features. Located in the heart of Bangkok\'s business district.',
    
    location: 'Bangkok, Thailand',
    year: 2021,
    status: 'completed',
    size: '85,000 sqm',
    client: 'Siamese Asset',
    type: 'Mixed-Use Development',
    
    features: [
      'Residential towers',
      'Retail podium',
      'Office spaces',
      'Sky gardens',
      'Rooftop amenities',
      'Smart home technology'
    ],
    
    sustainability: {
      leed: true,
      greenBuilding: true,
      energyEfficient: true,
      additionalFeatures: ['Solar panels', 'Rainwater harvesting', 'Green roof system']
    },
    
    images: [
      {
        url: getImagePath('/images/projects/siamese-rama9-1.jpg'),
        alt: 'Siamese Rama 9 towers',
        caption: 'Twin towers with distinctive architecture'
      },
      {
        url: getImagePath('/images/projects/siamese-rama9-2.jpg'),
        alt: 'Siamese Rama 9 retail area',
        caption: 'Modern retail podium'
      },
      {
        url: getImagePath('/images/projects/siamese-rama9-3.jpg'),
        alt: 'Siamese Rama 9 sky garden',
        caption: 'Rooftop sky garden with city views'
      },
      {
        url: getImagePath('/images/projects/siamese-rama9-4.jpg'),
        alt: 'Siamese Rama 9 at night',
        caption: 'Illuminated facade at night'
      }
    ],
    
    additionalInfo: {
      awards: [
        'MIPIM Asia Awards 2021 - Best Residential Development',
        'Thailand Property Awards 2021 - Best High-Rise Development',
        'Asia Property Awards 2021 - Best Mixed-Use Development'
      ],
      style: 'Contemporary Modern',
      duration: '36 months'
    },
    
    metaDescription: 'Siamese Rama 9 - Award-winning mixed-use development in Bangkok featuring residential towers, retail spaces, and innovative sustainable design.',
    keywords: ['mixed-use', 'Bangkok', 'award-winning', 'residential', 'retail', 'sustainable design', 'LEED']
  },

  {
    id: 'u-tapao-airport-new-passenger-terminal',
    name: 'U-Tapao Airport New Passenger Terminal',
    category: 'aviation',
    displayMode: 'full',
    
    tagline: 'NEXT-GENERATION AVIATION INFRASTRUCTURE',
    description: 'Designing Thailand\'s future aviation hub with state-of-the-art passenger terminal facilities. This project supports the Eastern Economic Corridor (EEC) development and positions U-Tapao as a major international gateway.',
    
    location: 'Rayong, Thailand',
    year: 2024,
    status: 'ongoing',
    size: '150,000 sqm',
    client: 'Department of Airports',
    type: 'Aviation Infrastructure',
    
    features: [
      'International terminal capacity for 15 million passengers/year',
      'Modern check-in and immigration facilities',
      'Retail and dining concourses',
      'VIP lounges',
      'Ground transportation hub',
      'Sustainable design with natural ventilation'
    ],
    
    sustainability: {
      greenBuilding: true,
      energyEfficient: true,
      additionalFeatures: ['Natural lighting', 'Solar energy', 'Water recycling system']
    },
    
    images: [
      {
        url: getImagePath('/images/projects/u-tapao-airport-new-passenger-terminal-1.jpg'),
        alt: 'U-Tapao Airport Terminal exterior',
        caption: 'Modern terminal facade with distinctive roof design'
      },
      {
        url: getImagePath('/images/projects/u-tapao-airport-new-passenger-terminal-2.jpg'),
        alt: 'U-Tapao Airport Terminal interior',
        caption: 'Spacious departure hall with natural lighting'
      },
      {
        url: getImagePath('/images/projects/u-tapao-airport-new-passenger-terminal-3.jpg'),
        alt: 'U-Tapao Airport Terminal concourse',
        caption: 'Retail and dining concourse'
      },
      {
        url: getImagePath('/images/projects/u-tapao-airport-new-passenger-terminal-4.jpg'),
        alt: 'U-Tapao Airport Terminal aerial view',
        caption: 'Aerial view of terminal complex'
      }
    ],
    
    metaDescription: 'U-Tapao Airport New Passenger Terminal - A next-generation aviation facility designed to serve 15 million passengers annually as part of Thailand\'s Eastern Economic Corridor.',
    keywords: ['aviation', 'airport', 'U-Tapao', 'EEC', 'passenger terminal', 'infrastructure', 'Thailand']
  },

  // ========== MORE GALLERY-ONLY EXAMPLES ==========
  {
    id: 'villa-perpetual',
    name: 'Villa Perpetual',
    category: 'residential',
    displayMode: 'gallery-only',
    
    location: 'Phuket, Thailand',
    year: 2023,
    
    images: [
      {
        url: getImagePath('/images/projects/villa-perpetual-1.jpg'),
        alt: 'Villa Perpetual exterior'
      },
      {
        url: getImagePath('/images/projects/villa-perpetual-2.jpg'),
        alt: 'Villa Perpetual pool area'
      },
      {
        url: getImagePath('/images/projects/villa-perpetual-3.jpg'),
        alt: 'Villa Perpetual living space'
      },
      {
        url: getImagePath('/images/projects/villa-perpetual-4.jpg'),
        alt: 'Villa Perpetual garden view'
      }
    ]
  },

  {
    id: 'innovation-center',
    name: 'Innovation Center',
    category: 'institutional',
    displayMode: 'gallery-only',
    
    location: 'Bangkok, Thailand',
    year: 2023,
    
    images: [
      {
        url: getImagePath('/images/projects/innovation-center-1.jpg'),
        alt: 'Innovation Center exterior'
      },
      {
        url: getImagePath('/images/projects/innovation-center-2.jpg'),
        alt: 'Innovation Center interior'
      },
      {
        url: getImagePath('/images/projects/innovation-center-3.jpg'),
        alt: 'Innovation Center common area'
      },
      {
        url: getImagePath('/images/projects/innovation-center-4.jpg'),
        alt: 'Innovation Center workspace'
      }
    ]
  },

  // Add more projects here...
];

/**
 * ============================================================================
 * HELPER FUNCTIONS
 * ============================================================================
 */

/**
 * Get all project slugs for static generation
 */
export function getAllProjectSlugs(): string[] {
  return projects.map(project => project.id);
}

/**
 * Get project by slug
 */
export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projects.find(project => project.id === slug);
}

/**
 * Get projects by category
 */
export function getProjectsByCategory(category: ProjectCategory): ProjectData[] {
  return projects.filter(project => project.category === category);
}

/**
 * Get all categories that have projects
 */
export function getAvailableCategories(): ProjectCategory[] {
  const categories = new Set<ProjectCategory>();
  projects.forEach(project => categories.add(project.category));
  return Array.from(categories);
}

/**
 * Get featured projects (for homepage, etc.)
 * Returns completed projects with full details
 */
export function getFeaturedProjects(count: number = 6): ProjectData[] {
  return projects
    .filter(p => p.status === 'completed' && p.displayMode === 'full')
    .slice(0, count);
}

/**
 * Get recent projects
 */
export function getRecentProjects(count: number = 6): ProjectData[] {
  return projects
    .sort((a, b) => (b.year || 0) - (a.year || 0))
    .slice(0, count);
}

/**
 * Search projects by name or description
 */
export function searchProjects(query: string): ProjectData[] {
  const lowerQuery = query.toLowerCase();
  return projects.filter(project => 
    project.name.toLowerCase().includes(lowerQuery) ||
    project.description?.toLowerCase().includes(lowerQuery) ||
    project.location?.toLowerCase().includes(lowerQuery)
  );
}

/**
 * Get project statistics
 */
export function getProjectStats() {
  return {
    total: projects.length,
    completed: projects.filter(p => p.status === 'completed').length,
    ongoing: projects.filter(p => p.status === 'ongoing').length,
    upcoming: projects.filter(p => p.status === 'upcoming').length,
    byCategory: getAvailableCategories().map(category => ({
      category,
      count: getProjectsByCategory(category).length
    }))
  };
}
