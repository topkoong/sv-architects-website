/**
 * ============================================================================
 * FILE: src/data/projects.ts
 * ============================================================================
 * DESCRIPTION: Centralized project data and type definitions
 * Contains all project information for the SV Architects website
 * 
 * FEATURES:
 * - Complete project profiles with images and details
 * - Type-safe data structure
 * - Helper functions for data access
 * - Project filtering and search capabilities
 * 
 * LAST MODIFIED: [Current Date]
 * AUTHOR: Development Team
 * 
 * ============================================================================
 */

// Import type definitions
import { Project, ProjectStatus } from '@/types/projects';

/**
 * ============================================================================
 * PROJECT DATA
 * ============================================================================
 * Array of all projects with complete information
 * ============================================================================
 */

export const projects: Project[] = [
  {
    id: 'bunditpatanasilpa-institute-auditorium',
    slug: 'bunditpatanasilpa-institute-auditorium',
    name: 'Bunditpatanasilpa Institute Auditorium',
    category: 'Cultural',
    categories: ['Cultural', 'Awards'],
    type: 'Auditorium',
    location: 'Bangkok, Thailand',
    year: 2023,
    status: ProjectStatus.COMPLETED,
    size: '15,000 sqm',
    client: 'Bunditpatanasilpa Institute',
    tagline: 'CULTURAL ARCHITECTURAL EXCELLENCE',
    description: 'A state-of-the-art auditorium designed for cultural performances and educational events, featuring modern acoustics and sustainable design principles.',
    longDescription: 'The Bunditpatanasilpa Institute Auditorium represents a fusion of traditional Thai architectural elements with contemporary design principles. This cultural landmark serves as a hub for artistic expression and educational excellence, featuring world-class acoustics, flexible seating arrangements, and sustainable building systems.',
    features: [
      'World-class acoustics design',
      'Flexible seating arrangements',
      'Sustainable building systems',
      'Cultural architectural elements',
      'Modern performance technology',
      'Accessible design compliance',
      'Energy-efficient lighting',
      'Climate control systems'
    ],
    images: {
      thumbnail: '/sv-architects-website/images/projects/bunditpatanasilpa-auditorium.jpg',
      gallery: [
        '/sv-architects-website/images/projects/bunditpatanasilpa-auditorium.jpg',
        '/sv-architects-website/images/projects/bunditpatanasilpa-auditorium-2.jpg',
        '/sv-architects-website/images/projects/bunditpatanasilpa-auditorium-3.jpg'
      ]
    },
    team: [
      'Suchart Bannapanya',
      'Picharn Foongkiatcharoen',
      'Nobpadol Suvachananonda'
    ],
    awards: [
      'Cultural Architecture Excellence Award 2023',
      'Sustainable Design Recognition 2023'
    ],
    sustainability: {
      leed: true,
      greenBuilding: true,
      energyEfficient: true
    },
    technologies: [
      'BIM modeling',
      'Acoustic simulation',
      '3D visualization',
      'Sustainable materials'
    ],
    metaTitle: 'Bunditpatanasilpa Institute Auditorium | SV Architects',
    metaDescription: 'Cultural auditorium featuring world-class acoustics and sustainable design principles in Bangkok, Thailand.',
    keywords: ['auditorium', 'cultural architecture', 'acoustics', 'sustainable design'],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: 'don-mueang-airport-terminal3',
    slug: 'don-mueang-airport-terminal3',
    name: 'DON MUEANG INTERNATIONAL AIRPORT TERMINAL 3',
    category: 'Aviation',
    categories: ['Aviation', 'Transportation'],
    type: 'Airport Terminal',
    location: 'Bangkok, Thailand',
    year: 2024,
    status: ProjectStatus.COMPLETED,
    size: '180,000 sqm',
    client: 'Airports of Thailand',
    tagline: 'MODERN AVIATION INFRASTRUCTURE',
    description: 'A state-of-the-art airport terminal designed to handle increased passenger capacity with modern amenities and efficient passenger flow.',
    longDescription: 'The Don Mueang International Airport Terminal 3 represents the future of aviation infrastructure in Thailand. Designed to accommodate the growing passenger demand, this terminal features cutting-edge technology, sustainable design principles, and enhanced passenger experience through intuitive wayfinding and modern amenities.',
    features: [
      'Advanced passenger flow design',
      'Modern security systems',
      'Sustainable building materials',
      'Energy-efficient systems',
      'Accessible design compliance',
      'Smart building technology',
      'Flexible terminal layout',
      'International standards compliance'
    ],
    images: {
      thumbnail: '/sv-architects-website/images/projects/don-mueang-airport-terminal3.jpg',
      gallery: [
        '/sv-architects-website/images/projects/don-mueang-airport-terminal3.jpg',
        '/sv-architects-website/images/projects/don-mueang-airport-terminal3-2.jpg',
        '/sv-architects-website/images/projects/don-mueang-airport-terminal3-3.jpg'
      ]
    },
    team: [
      'Suchart Bannapanya',
      'Picharn Foongkiatcharoen',
      'Nobpadol Suvachananonda'
    ],
    awards: [
      'Aviation Architecture Excellence Award 2024',
      'Sustainable Infrastructure Recognition 2024'
    ],
    sustainability: {
      leed: true,
      greenBuilding: true,
      energyEfficient: true
    },
    technologies: [
      'BIM modeling',
      'Passenger flow simulation',
      '3D visualization',
      'Smart building systems'
    ],
    metaTitle: 'Don Mueang Airport Terminal 3 | SV Architects',
    metaDescription: 'Modern airport terminal featuring advanced passenger flow design and sustainable infrastructure in Bangkok, Thailand.',
    keywords: ['airport terminal', 'aviation', 'passenger flow', 'sustainable infrastructure'],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: 'phuket-condominium',
    slug: 'phuket-condominium',
    name: 'Phuket Condominium',
    category: 'Residential',
    categories: ['Residential'],
    type: 'Beachfront Condominium',
    location: 'Phuket, Thailand',
    year: 2020,
    status: ProjectStatus.COMPLETED,
    size: '28,000 sqm',
    client: 'Phuket Beach Development',
    tagline: 'ENVIRONMENT OPTIMIZATION WITH BIOPHILIC DESIGN',
    description: 'Designed to fully optimize its environment with panoramic views and connectivity to the nature through biophilic designs.',
    longDescription: 'The Phuket Condominium represents a perfect harmony between luxury living and environmental consciousness. This beachfront development features biophilic design principles that seamlessly integrate the built environment with the natural landscape, creating a unique living experience that celebrates the beauty of Phuket\'s coastal environment.',
    features: [
      'Environment optimization design',
      'Panoramic views',
      'Connectivity to nature',
      'Biophilic design principles',
      'Beachfront location',
      'Luxury coastal living',
      'Resort-style amenities',
      'Sustainable design'
    ],
    images: {
      thumbnail: '/sv-architects-website/images/projects/phuket-condominium-1.jpg',
      gallery: [
        '/sv-architects-website/images/projects/phuket-condominium-1.jpg',
        '/sv-architects-website/images/projects/phuket-condominium-2.jpg',
        '/sv-architects-website/images/projects/phuket-condominium-3.jpg'
      ]
    },
    team: [
      'Suchart Bannapanya',
      'Picharn Foongkiatcharoen',
      'Nobpadol Suvachananonda'
    ],
    awards: [
      'Residential Design Excellence Award 2020',
      'Sustainable Living Recognition 2020'
    ],
    sustainability: {
      leed: true,
      greenBuilding: true,
      energyEfficient: true
    },
    technologies: [
      'BIM modeling',
      'Environmental simulation',
      '3D visualization',
      'Biophilic design systems'
    ],
    metaTitle: 'Phuket Condominium | SV Architects',
    metaDescription: 'Beachfront condominium featuring biophilic design and panoramic views in Phuket, Thailand.',
    keywords: ['condominium', 'beachfront', 'biophilic design', 'sustainable living'],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  }
  // Add more projects here...
];

/**
 * ============================================================================
 * HELPER FUNCTIONS
 * ============================================================================
 * Utility functions for accessing and manipulating project data
 * ============================================================================
 */

/**
 * Get project by slug
 * Finds and returns a project based on its URL slug
 * 
 * @param slug - URL slug of the project
 * @returns Project object or undefined if not found
 */
export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

/**
 * Get all project slugs
 * Returns array of all project slugs for static generation
 * 
 * @returns Array of project slugs
 */
export const getAllProjectSlugs = (): string[] => {
  return projects.map(project => project.slug);
};

/**
 * Get all projects
 * Returns all projects (useful for listings and statistics)
 * 
 * @returns Array of all projects
 */
export const getAllProjects = (): Project[] => {
  return projects;
};

/**
 * Get projects by category
 * Filters projects by category
 * 
 * @param category - Category to filter by
 * @returns Array of projects in the specified category
 */
export const getProjectsByCategory = (category: string): Project[] => {
  return projects.filter(project => 
    project.category === category || 
    (project.categories && project.categories.includes(category))
  );
};

/**
 * Get projects by team member
 * Filters projects by team member involvement
 * 
 * @param teamMemberName - Name of the team member
 * @returns Array of projects involving the specified team member
 */
export const getProjectsByTeamMember = (teamMemberName: string): Project[] => {
  return projects.filter(project => 
    project.team.includes(teamMemberName)
  );
};

/**
 * Get projects by status
 * Filters projects by completion status
 * 
 * @param status - Project status to filter by
 * @returns Array of projects with the specified status
 */
export const getProjectsByStatus = (status: ProjectStatus): Project[] => {
  return projects.filter(project => project.status === status);
};

/**
 * Search projects
 * Searches projects by name, description, or features
 * 
 * @param query - Search query
 * @returns Array of matching projects
 */
export const searchProjects = (query: string): Project[] => {
  const lowercaseQuery = query.toLowerCase();
  
  return projects.filter(project => 
    project.name.toLowerCase().includes(lowercaseQuery) ||
    project.description.toLowerCase().includes(lowercaseQuery) ||
    project.features.some(feature => feature.toLowerCase().includes(lowercaseQuery))
  );
};

/**
 * Get project statistics
 * Returns various statistics about the project portfolio
 * 
 * @returns Object containing project statistics
 */
export const getProjectStatistics = () => {
  const totalProjects = projects.length;
  const completedProjects = projects.filter(p => p.status === 'completed').length;
  const ongoingProjects = projects.filter(p => p.status === 'ongoing').length;
  const plannedProjects = projects.filter(p => p.status === 'planned').length;
  
  const categories = [...new Set(projects.flatMap(p => p.categories || [p.category]))];
  const totalSize = projects.reduce((sum, p) => {
    const size = parseInt(p.size.replace(/[^\d]/g, ''));
    return sum + (isNaN(size) ? 0 : size);
  }, 0);
  
  return {
    totalProjects,
    completedProjects,
    ongoingProjects,
    plannedProjects,
    categories: categories.length,
    totalSize: `${totalSize.toLocaleString()} sqm`
  };
};
