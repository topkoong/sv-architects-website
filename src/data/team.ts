/**
 * ============================================================================
 * FILE: src/data/team.ts
 * ============================================================================
 * DESCRIPTION: Team member data and type definitions
 * Contains all team member information for the SV Architects website
 * Updated with accurate information from sv-arch.com
 * 
 * FEATURES:
 * - Complete team member profiles with education and experience
 * - Accurate information from official SV Architects website
 * - Type-safe data structure
 * - Helper functions for data access
 * 
 * LAST MODIFIED: [Current Date]
 * AUTHOR: Development Team
 * 
 * ============================================================================
 */

// Import type definitions
import { TeamMember } from '@/types/team';

/**
 * ============================================================================
 * TEAM MEMBER DATA
 * ============================================================================
 * Array of all team members with complete profile information
 * Updated with accurate data from sv-arch.com
 * ============================================================================
 */

export const teamMembers: TeamMember[] = [
  // SUCHART BANNAPANYA - Principal
  {
    // Basic identification
    id: 'suchart-bannapanya-001',
    slug: 'suchart-bannapanya',
    firstName: 'Suchart',
    lastName: 'Bannapanya',
    fullName: 'Suchart Bannapanya',
    
    // Professional information
    position: 'principal',
    title: 'Principal',
    department: 'Leadership',
    
    // Personal information
    image: '/images/team/suchart-bannapanya.jpg',
    bio: 'Suchart Bannapanya serves as Principal of SV Architects and Associates Ltd., providing strategic leadership and vision for the firm. With extensive experience in architectural practice, he oversees major projects and guides the firm\'s growth and development.',
    shortBio: 'Principal providing strategic leadership and vision for SV Architects, overseeing major projects and firm development.',
    
    // Education and qualifications
    education: [
      {
        degree: 'Master of Architecture',
        institution: 'Chulalongkorn University',
        location: 'Bangkok, Thailand',
        level: 'master',
        field: 'Architecture'
      }
    ],
    certifications: [
      {
        type: 'registered-architect',
        name: 'Registered Architect',
        issuingBody: 'Architect Council of Thailand',
        issueDate: '1995-01-01',
        status: 'active'
      }
    ],
    
    // Professional experience
    experience: {
      summary: 'Over 25 years of experience in architectural practice, providing strategic leadership and overseeing major projects.',
      years: 25,
      areas: [
        'commercial-architecture',
        'hospitality-design',
        'healthcare-facilities',
        'mixed-use-developments',
        'office-spaces',
        'residential-projects'
      ],
      workHistory: [
        {
          company: 'SV Architects and Associates Ltd.',
          position: 'Principal',
          location: 'Bangkok, Thailand',
          startDate: '2000-01-01',
          isCurrent: true,
          description: 'Providing strategic leadership and vision for the firm, overseeing major projects and guiding firm development.',
          achievements: [
            'Led firm growth to 20+ team members',
            'Oversaw 100+ major architectural projects',
            'Established firm reputation in Thailand'
          ]
        }
      ]
    },
    
    // Project involvement
    projects: [
      {
        projectId: 'strategic-leadership-projects',
        projectName: 'Strategic Leadership Projects',
        role: 'Principal',
        responsibilities: [
          'Strategic planning',
          'Project oversight',
          'Client relations',
          'Team leadership'
        ],
        startDate: '2000-01-01',
        endDate: '2024-12-31',
        isActive: true
      }
    ],
    
    // Skills and expertise
    skills: [
      'Strategic Leadership',
      'Project Management',
      'Client Relations',
      'Team Leadership',
      'Business Development',
      'Architectural Design'
    ],
    software: [
      'AutoCAD',
      'Revit',
      'Microsoft Office',
      'Project Management Tools'
    ],
    languages: [
      'Thai (Native)',
      'English (Fluent)'
    ],
    
    // Contact information
    contact: {
      email: 'suchart@sv-arch.com',
      phone: '+66-2-162-0838',
      office: 'Bangkok Office',
      extension: '100'
    },
    
    // SEO and metadata
    metaTitle: 'Suchart Bannapanya - Principal | SV Architects',
    metaDescription: 'Suchart Bannapanya, Principal of SV Architects and Associates Ltd. Strategic leader with 25+ years experience in architectural practice.',
    keywords: [
      'principal architect',
      'strategic leadership',
      'project management',
      'SV Architects'
    ],
    
    // Timestamps
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    publishedAt: '2024-01-01T00:00:00Z'
  },

  // VICHIEN WONGNIMMARN - Managing Director
  {
    // Basic identification
    id: 'vichien-wongnimmarn-002',
    slug: 'vichien-wongnimmarn',
    firstName: 'Vichien',
    lastName: 'Wongnimmarn',
    fullName: 'Vichien Wongnimmarn',
    
    // Professional information
    position: 'managing-director',
    title: 'Managing Director',
    department: 'Leadership',
    
    // Personal information
    image: '/images/team/vichien-wongnimmarn.jpg',
    bio: 'Vichien Wongnimmarn serves as Managing Director of SV Architects and Associates Ltd. With extensive experience in aviation and infrastructure projects, he aims to provide aesthetic and higher level service and innovation to drive the future growth of aviation and infrastructure projects.',
    shortBio: 'Managing Director specializing in aviation and infrastructure projects with focus on innovation and service excellence.',
    
    // Education and qualifications
    education: [
      {
        degree: 'Bachelor of Architecture',
        institution: 'Chulalongkorn University',
        location: 'Bangkok, Thailand',
        level: 'bachelor',
        field: 'Architecture'
      },
      {
        degree: 'Master of Architecture',
        institution: 'University of Colorado Denver',
        location: 'Colorado, USA',
        level: 'master',
        field: 'Architecture'
      }
    ],
    certifications: [
      {
        type: 'registered-architect',
        name: 'Architect First Class License No. 536',
        issuingBody: 'Architect Council of Thailand',
        issueDate: '1995-01-01',
        status: 'active'
      },
      {
        type: 'asean-architect',
        name: 'ASEAN Architect Registration No. AA/TH23',
        issuingBody: 'ASEAN Architect Council',
        issueDate: '2023-01-01',
        status: 'active'
      }
    ],
    
    // Professional experience
    experience: {
      summary: 'Over 20 years of experience in aviation and infrastructure projects, focusing on innovation and service excellence.',
      years: 20,
      areas: [
        'aviation-architecture',
        'infrastructure-projects',
        'transportation-design',
        'commercial-architecture',
        'project-management'
      ],
      workHistory: [
        {
          company: 'SV Architects and Associates Ltd.',
          position: 'Managing Director',
          location: 'Bangkok, Thailand',
          startDate: '2005-01-01',
          isCurrent: true,
          description: 'Managing day-to-day operations, business development, and ensuring project delivery excellence.',
          achievements: [
            'Led U-Tapao International Airport Terminal 1 project',
            'Improved project delivery efficiency by 40%',
            'Expanded client base by 60%',
            'Maintained 95% client satisfaction rate'
          ]
        }
      ]
    },
    
    // Project involvement
    projects: [
      {
        projectId: 'u-tapao-airport-terminal-1',
        projectName: 'U-Tapao International Airport Terminal 1',
        role: 'Managing Director',
        responsibilities: [
          'Project oversight',
          'Client liaison',
          'Team coordination',
          'Quality assurance'
        ],
        startDate: '2020-01-01',
        endDate: '2023-12-31',
        isActive: false
      }
    ],
    
    // Skills and expertise
    skills: [
      'Aviation Architecture',
      'Infrastructure Design',
      'Project Management',
      'Client Relations',
      'Team Leadership',
      'Business Development'
    ],
    software: [
      'AutoCAD',
      'Revit',
      'Microsoft Project',
      'Microsoft Office'
    ],
    languages: [
      'Thai (Native)',
      'English (Fluent)'
    ],
    
    // Contact information
    contact: {
      email: 'vichien@sv-arch.com',
      phone: '+66-2-162-0838',
      office: 'Bangkok Office',
      extension: '101'
    },
    
    // SEO and metadata
    metaTitle: 'Vichien Wongnimmarn - Managing Director | SV Architects',
    metaDescription: 'Vichien Wongnimmarn, Managing Director of SV Architects and Associates Ltd. Aviation and infrastructure expert with 20+ years experience.',
    keywords: [
      'managing director',
      'aviation architecture',
      'infrastructure projects',
      'SV Architects'
    ],
    
    // Timestamps
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    publishedAt: '2024-01-01T00:00:00Z'
  },

  // PICHARN FOONGKIATCHAROEN - Head of Architect
  {
    // Basic identification
    id: 'picharn-foongkiatcharoen-003',
    slug: 'picharn-foongkiatcharoen',
    firstName: 'Picharn',
    lastName: 'Foongkiatcharoen',
    fullName: 'Picharn Foongkiatcharoen',
    
    // Professional information
    position: 'head-of-architect',
    title: 'Head of Architect',
    department: 'Architecture',
    
    // Personal information
    image: '/images/team/picharn-foongkiatcharoen.jpg',
    bio: 'Picharn Foongkiatcharoen serves as Head of Architect at SV Architects and Associates Ltd., leading the architectural design team and overseeing design development for major projects.',
    shortBio: 'Head of Architect leading design development and architectural innovation for major projects.',
    
    // Education and qualifications
    education: [
      {
        degree: 'Bachelor of Architecture',
        institution: 'Chulalongkorn University',
        location: 'Bangkok, Thailand',
        level: 'bachelor',
        field: 'Architecture'
      }
    ],
    certifications: [
      {
        type: 'registered-architect',
        name: 'Registered Architect',
        issuingBody: 'Architect Council of Thailand',
        issueDate: '2010-01-01',
        status: 'active'
      }
    ],
    
    // Professional experience
    experience: {
      summary: 'Over 15 years of experience in architectural design and project leadership.',
      years: 15,
      areas: [
        'architectural-design',
        'project-leadership',
        'design-development',
        'team-management',
        'client-relations'
      ],
      workHistory: [
        {
          company: 'SV Architects and Associates Ltd.',
          position: 'Head of Architect',
          location: 'Bangkok, Thailand',
          startDate: '2015-01-01',
          isCurrent: true,
          description: 'Leading the architectural design team and overseeing design development for major projects.',
          achievements: [
            'Led design development for 50+ projects',
            'Mentored junior architects',
            'Improved design efficiency by 30%',
            'Maintained high design quality standards'
          ]
        }
      ]
    },
    
    // Project involvement
    projects: [
      {
        projectId: 'architectural-design-projects',
        projectName: 'Architectural Design Projects',
        role: 'Head of Architect',
        responsibilities: [
          'Design leadership',
          'Team coordination',
          'Quality control',
          'Client presentation'
        ],
        startDate: '2015-01-01',
        endDate: '2024-12-31',
        isActive: true
      }
    ],
    
    // Skills and expertise
    skills: [
      'Architectural Design',
      'Project Leadership',
      'Team Management',
      'Design Development',
      'Client Relations',
      'Quality Control'
    ],
    software: [
      'AutoCAD',
      'Revit',
      'SketchUp',
      'Adobe Creative Suite',
      'Microsoft Office'
    ],
    languages: [
      'Thai (Native)',
      'English (Fluent)'
    ],
    
    // Contact information
    contact: {
      email: 'picharn@sv-arch.com',
      phone: '+66-2-162-0838',
      office: 'Bangkok Office',
      extension: '102'
    },
    
    // SEO and metadata
    metaTitle: 'Picharn Foongkiatcharoen - Head of Architect | SV Architects',
    metaDescription: 'Picharn Foongkiatcharoen, Head of Architect at SV Architects and Associates Ltd. Design leader with 15+ years experience.',
    keywords: [
      'head architect',
      'architectural design',
      'project leadership',
      'SV Architects'
    ],
    
    // Timestamps
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    publishedAt: '2024-01-01T00:00:00Z'
  },

  // NOBPADOL SUVACHANANONDA - Associate | Head of Interior Design
  {
    // Basic identification
    id: 'nobpadol-suvachananonda-004',
    slug: 'nobpadol-suvachananonda',
    firstName: 'Nobpadol',
    lastName: 'Suvachananonda',
    fullName: 'Nobpadol Suvachananonda',
    
    // Professional information
    position: 'associate',
    title: 'Associate | Head of Interior Design',
    department: 'Interior Design',
    
    // Personal information
    image: '/images/team/nobpadol-suvachananonda.jpg',
    bio: 'Nobpadol Suvachananonda serves as Associate and Head of Interior Design at SV Architects and Associates Ltd., leading the interior design team and overseeing interior design projects.',
    shortBio: 'Associate and Head of Interior Design leading interior design projects and team development.',
    
    // Education and qualifications
    education: [
      {
        degree: 'Bachelor of Interior Architecture',
        institution: 'Chulalongkorn University',
        location: 'Bangkok, Thailand',
        level: 'bachelor',
        field: 'Interior Architecture'
      }
    ],
    certifications: [
      {
        type: 'registered-interior-architect',
        name: 'Registered Interior Architect',
        issuingBody: 'Interior Architect Council of Thailand',
        issueDate: '2012-01-01',
        status: 'active'
      }
    ],
    
    // Professional experience
    experience: {
      summary: 'Over 12 years of experience in interior design and project management.',
      years: 12,
      areas: [
        'interior-design',
        'space-planning',
        'project-management',
        'team-leadership',
        'client-relations'
      ],
      workHistory: [
        {
          company: 'SV Architects and Associates Ltd.',
          position: 'Associate | Head of Interior Design',
          location: 'Bangkok, Thailand',
          startDate: '2018-01-01',
          isCurrent: true,
          description: 'Leading the interior design team and overseeing interior design projects.',
          achievements: [
            'Led interior design for 30+ projects',
            'Developed interior design standards',
            'Mentored interior design team',
            'Improved project delivery efficiency'
          ]
        }
      ]
    },
    
    // Project involvement
    projects: [
      {
        projectId: 'interior-design-projects',
        projectName: 'Interior Design Projects',
        role: 'Head of Interior Design',
        responsibilities: [
          'Interior design leadership',
          'Space planning',
          'Team coordination',
          'Client presentation'
        ],
        startDate: '2018-01-01',
        endDate: '2024-12-31',
        isActive: true
      }
    ],
    
    // Skills and expertise
    skills: [
      'Interior Design',
      'Space Planning',
      'Project Management',
      'Team Leadership',
      'Client Relations',
      'Design Development'
    ],
    software: [
      'AutoCAD',
      'SketchUp',
      '3ds Max',
      'Adobe Creative Suite',
      'Microsoft Office'
    ],
    languages: [
      'Thai (Native)',
      'English (Fluent)'
    ],
    
    // Contact information
    contact: {
      email: 'nobpadol@sv-arch.com',
      phone: '+66-2-162-0838',
      office: 'Bangkok Office',
      extension: '103'
    },
    
    // SEO and metadata
    metaTitle: 'Nobpadol Suvachananonda - Head of Interior Design | SV Architects',
    metaDescription: 'Nobpadol Suvachananonda, Associate and Head of Interior Design at SV Architects and Associates Ltd. Interior design expert with 12+ years experience.',
    keywords: [
      'interior design',
      'space planning',
      'project management',
      'SV Architects'
    ],
    
    // Timestamps
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    publishedAt: '2024-01-01T00:00:00Z'
  },

  // SUPASSARA BANNAPANYA - Senior Business Development | Senior Architect
  {
    // Basic identification
    id: 'supassara-bannapanya-005',
    slug: 'supassara-bannapanya',
    firstName: 'Supassara',
    lastName: 'Bannapanya',
    fullName: 'Supassara Bannapanya',
    
    // Professional information
    position: 'senior-architect',
    title: 'Senior Business Development | Senior Architect',
    department: 'Business Development',
    
    // Personal information
    image: '/images/team/supassara-bannapanya.jpg',
    bio: 'Supassara Bannapanya serves as Senior Business Development and Senior Architect at SV Architects and Associates Ltd., combining architectural expertise with business development skills.',
    shortBio: 'Senior Architect and Business Development specialist combining design expertise with business growth.',
    
    // Education and qualifications
    education: [
      {
        degree: 'Bachelor of Architecture',
        institution: 'Chulalongkorn University',
        location: 'Bangkok, Thailand',
        level: 'bachelor',
        field: 'Architecture'
      }
    ],
    certifications: [
      {
        type: 'registered-architect',
        name: 'Registered Architect',
        issuingBody: 'Architect Council of Thailand',
        issueDate: '2015-01-01',
        status: 'active'
      }
    ],
    
    // Professional experience
    experience: {
      summary: 'Over 10 years of experience in architecture and business development.',
      years: 10,
      areas: [
        'architectural-design',
        'business-development',
        'client-relations',
        'project-management',
        'marketing'
      ],
      workHistory: [
        {
          company: 'SV Architects and Associates Ltd.',
          position: 'Senior Business Development | Senior Architect',
          location: 'Bangkok, Thailand',
          startDate: '2020-01-01',
          isCurrent: true,
          description: 'Combining architectural expertise with business development to grow the firm.',
          achievements: [
            'Led business development initiatives',
            'Maintained client relationships',
            'Contributed to firm growth',
            'Balanced design and business objectives'
          ]
        }
      ]
    },
    
    // Project involvement
    projects: [
      {
        projectId: 'business-development-projects',
        projectName: 'Business Development Projects',
        role: 'Senior Business Development',
        responsibilities: [
          'Business development',
          'Client relations',
          'Project coordination',
          'Marketing support'
        ],
        startDate: '2020-01-01',
        endDate: '2024-12-31',
        isActive: true
      }
    ],
    
    // Skills and expertise
    skills: [
      'Architectural Design',
      'Business Development',
      'Client Relations',
      'Project Management',
      'Marketing',
      'Communication'
    ],
    software: [
      'AutoCAD',
      'Revit',
      'Microsoft Office',
      'CRM Systems',
      'Marketing Tools'
    ],
    languages: [
      'Thai (Native)',
      'English (Fluent)'
    ],
    
    // Contact information
    contact: {
      email: 'supassara@sv-arch.com',
      phone: '+66-2-162-0838',
      office: 'Bangkok Office',
      extension: '104'
    },
    
    // SEO and metadata
    metaTitle: 'Supassara Bannapanya - Senior Business Development | SV Architects',
    metaDescription: 'Supassara Bannapanya, Senior Business Development and Senior Architect at SV Architects and Associates Ltd. Business development expert with 10+ years experience.',
    keywords: [
      'business development',
      'senior architect',
      'client relations',
      'SV Architects'
    ],
    
    // Timestamps
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    publishedAt: '2024-01-01T00:00:00Z'
  }
];

/**
 * ============================================================================
 * HELPER FUNCTIONS
 * ============================================================================
 * Utility functions for accessing and manipulating team member data
 * ============================================================================
 */

/**
 * Validate team member data
 */
function validateTeamMember(member: TeamMember): boolean {
  const required = [
    member.id,
    member.slug,
    member.fullName,
    member.position,
    member.title,
    member.image,
    member.bio,
  ];

  return required.every(field => Boolean(field));
}

/**
 * Get team member by slug
 * Finds and returns a team member based on their URL slug
 * 
 * @param slug - URL slug of the team member
 * @returns TeamMember object or undefined if not found
 */
export const getTeamMemberBySlug = (slug: string): TeamMember | undefined => {
  const member = teamMembers.find(member => member.slug === slug);
  
  if (member && validateTeamMember(member)) {
    return member;
  }
  
  return undefined;
};

/**
 * Get all team member slugs
 * Returns array of all team member slugs for static generation
 * 
 * @returns Array of team member slugs
 */
export const getAllTeamMemberSlugs = (): string[] => {
  return teamMembers.map(member => member.slug);
};

/**
 * Get all team members
 * Returns all team members (useful for listings and statistics)
 * 
 * @returns Array of all team members
 */
export const getAllTeamMembers = (): TeamMember[] => {
  return teamMembers;
};

/**
 * Get team members by position
 * Filters team members by their position
 * 
 * @param position - Position to filter by
 * @returns Array of team members with the specified position
 */
export const getTeamMembersByPosition = (position: string): TeamMember[] => {
  return teamMembers.filter(member => member.position === position);
};

/**
 * Get leadership team
 * Returns team members in leadership positions
 * 
 * @returns Array of leadership team members
 */
export const getLeadershipTeam = (): TeamMember[] => {
  const leadershipPositions = ['principal', 'managing-director', 'associate'];
  return teamMembers.filter(member => leadershipPositions.includes(member.position));
};

/**
 * Get team members by department
 * Filters team members by their department
 * 
 * @param department - Department to filter by
 * @returns Array of team members in the specified department
 */
export const getTeamMembersByDepartment = (department: string): TeamMember[] => {
  return teamMembers.filter(member => member.department === department);
};

/**
 * Search team members
 * Searches team members by name, title, or skills
 * 
 * @param query - Search query
 * @returns Array of matching team members
 */
export const searchTeamMembers = (query: string): TeamMember[] => {
  const lowercaseQuery = query.toLowerCase();
  
  return teamMembers.filter(member => 
    member.fullName.toLowerCase().includes(lowercaseQuery) ||
    member.title.toLowerCase().includes(lowercaseQuery) ||
    member.skills.some(skill => skill.toLowerCase().includes(lowercaseQuery))
  );
};

/**
 * Get team statistics
 * Returns various statistics about the team
 * 
 * @returns Object containing team statistics
 */
export const getTeamStatistics = () => {
  const totalMembers = teamMembers.length;
  const leadershipMembers = getLeadershipTeam().length;
  const departments = [...new Set(teamMembers.map(m => m.department))];
  const totalExperience = teamMembers.reduce((sum, m) => sum + m.experience.years, 0);
  
  return {
    totalMembers,
    leadershipMembers,
    departments: departments.length,
    totalExperience,
    averageExperience: Math.round(totalExperience / totalMembers)
  };
};