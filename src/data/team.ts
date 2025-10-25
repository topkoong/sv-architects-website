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
import { getImagePath } from '@/config/site';

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
    id: 'suchart-bannapanya-001',
    slug: 'suchart-bannapanya',
    firstName: 'Suchart',
    lastName: 'Bannapanya',
    fullName: 'Suchart Bannapanya',
    position: 'principal',
    title: 'Principal',
    department: 'Leadership',
    image: getImagePath('/images/team/suchart-bannapanya.jpg'),
    bio: 'Suchart Bannapanya serves as Principal of SV Architects and Associates Ltd., providing strategic leadership and vision for the firm. With extensive experience in architectural practice, he oversees major projects and guides the firm\'s growth and development.',
    shortBio: 'Principal providing strategic leadership and vision for SV Architects, overseeing major projects and firm development.',
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
    contact: {
      email: 'suchart@sv-arch.com',
      phone: '+66-2-162-0838',
      office: 'Bangkok Office',
      extension: '100'
    },
    metaTitle: 'Suchart Bannapanya - Principal | SV Architects',
    metaDescription: 'Suchart Bannapanya, Principal of SV Architects and Associates Ltd. Strategic leader with 25+ years experience in architectural practice.',
    keywords: [
      'principal architect',
      'strategic leadership',
      'project management',
      'SV Architects'
    ],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    publishedAt: '2024-01-01T00:00:00Z'
  },

  // VICHIEN WONGNIMMARN - Managing Director
  {
    id: 'vichien-wongnimmarn-002',
    slug: 'vichien-wongnimmarn',
    firstName: 'Vichien',
    lastName: 'Wongnimmarn',
    fullName: 'Vichien Wongnimmarn',
    position: 'managing-director',
    title: 'Managing Director',
    department: 'Leadership',
    image: getImagePath('/images/team/vichien-wongnimmarn.jpg'),
    bio: 'Vichien Wongnimmarn serves as Managing Director of SV Architects and Associates Ltd. With extensive experience in aviation and infrastructure projects, he aims to provide aesthetic and higher level service and innovation to drive the future growth of aviation and infrastructure projects.',
    shortBio: 'Managing Director specializing in aviation and infrastructure projects with focus on innovation and service excellence.',
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
    contact: {
      email: 'vichien@sv-arch.com',
      phone: '+66-2-162-0838',
      office: 'Bangkok Office',
      extension: '101'
    },
    metaTitle: 'Vichien Wongnimmarn - Managing Director | SV Architects',
    metaDescription: 'Vichien Wongnimmarn, Managing Director of SV Architects and Associates Ltd. Aviation and infrastructure expert with 20+ years experience.',
    keywords: [
      'managing director',
      'aviation architecture',
      'infrastructure projects',
      'SV Architects'
    ],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    publishedAt: '2024-01-01T00:00:00Z'
  },

  // PICHARN FOONGKIATCHAROEN - Head of Architect
  {
    id: 'picharn-foongkiatcharoen-003',
    slug: 'picharn-foongkiatcharoen',
    firstName: 'Picharn',
    lastName: 'Foongkiatcharoen',
    fullName: 'Picharn Foongkiatcharoen',
    position: 'head-of-architect',
    title: 'Head of Architect',
    department: 'Architecture',
    image: getImagePath('/images/team/picharn-foongkiatcharoen.jpg'),
    bio: 'Picharn Foongkiatcharoen serves as Head of Architect at SV Architects and Associates Ltd., bringing over 15 years of comprehensive experience across diverse architectural sectors. With advanced degrees from both Thailand and Australia, he leads the architectural design team and oversees design development for major projects spanning commercial architecture, hospitality design, healthcare facilities, transportation infrastructure, aviation facilities, mixed-use developments, office spaces, and residential projects.',
    shortBio: 'Head of Architect with 15+ years of comprehensive experience across diverse architectural sectors including commercial, hospitality, healthcare, transportation, aviation, mixed-use, office, and residential projects.',
    education: [
      {
        degree: 'Master of the Built Environment in Sustainable Development and Architecture',
        institution: 'University of New South Wales (UNSW)',
        location: 'Sydney, Australia',
        level: 'master',
        field: 'Sustainable Development and Architecture'
      },
      {
        degree: 'Bachelor of Science Program in Architecture',
        institution: 'King Mongkut\'s Institute of Technology Ladkrabang (KMITL)',
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
    experience: {
      summary: 'Over 15 years of comprehensive experience across diverse architectural sectors including commercial architecture, hospitality design, healthcare facilities, transportation infrastructure, aviation facilities, mixed-use developments, office spaces, and residential projects.',
      years: 15,
      areas: [
        'commercial-architecture',
        'hospitality-design',
        'healthcare-facilities',
        'transportation-infrastructure',
        'aviation-facilities',
        'mixed-use-developments',
        'office-spaces',
        'residential-projects'
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
    skills: [
      'Commercial Architecture',
      'Hospitality Design',
      'Healthcare Facilities',
      'Transportation Infrastructure',
      'Aviation Facilities',
      'Mixed-Use Developments',
      'Office Spaces',
      'Residential Projects',
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
    contact: {
      email: 'picharn@sv-arch.com',
      phone: '+66-2-162-0838',
      office: 'Bangkok Office',
      extension: '102'
    },
    metaTitle: 'Picharn Foongkiatcharoen - Head of Architect | SV Architects',
    metaDescription: 'Picharn Foongkiatcharoen, Head of Architect at SV Architects and Associates Ltd. Design leader with 15+ years experience.',
    keywords: [
      'head architect',
      'architectural design',
      'project leadership',
      'SV Architects'
    ],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    publishedAt: '2024-01-01T00:00:00Z'
  },

  // NOBPADOL SUVACHANANONDA - Associate | Head of Interior Design
  {
    id: 'nobpadol-suvachananonda-004',
    slug: 'nobpadol-suvachananonda',
    firstName: 'Nobpadol',
    lastName: 'Suvachananonda',
    fullName: 'Nobpadol Suvachananonda',
    position: 'associate',
    title: 'Associate | Head of Interior Design',
    department: 'Interior Design',
    image: getImagePath('/images/team/nobpadol-suvachananonda.jpg'),
    bio: 'Nobpadol Suvachananonda serves as Associate and Head of Interior Design at SV Architects and Associates Ltd., leading the interior design team and overseeing interior design projects.',
    shortBio: 'Associate and Head of Interior Design leading interior design projects and team development.',
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
    contact: {
      email: 'nobpadol@sv-arch.com',
      phone: '+66-2-162-0838',
      office: 'Bangkok Office',
      extension: '103'
    },
    metaTitle: 'Nobpadol Suvachananonda - Head of Interior Design | SV Architects',
    metaDescription: 'Nobpadol Suvachananonda, Associate and Head of Interior Design at SV Architects and Associates Ltd. Interior design expert with 12+ years experience.',
    keywords: [
      'interior design',
      'space planning',
      'project management',
      'SV Architects'
    ],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    publishedAt: '2024-01-01T00:00:00Z'
  },

  // SUPASSARA BANNAPANYA - Senior Business Development | Senior Architect
  {
    id: 'supassara-bannapanya-005',
    slug: 'supassara-bannapanya',
    firstName: 'Supassara',
    lastName: 'Bannapanya',
    fullName: 'Supassara Bannapanya',
    position: 'senior-architect',
    title: 'Senior Business Development | Senior Architect',
    department: 'Business Development',
    image: getImagePath('/images/team/supassara-bannapanya.jpg'),
    bio: 'Supassara Bannapanya serves as Senior Business Development and Senior Architect at SV Architects and Associates Ltd., combining architectural expertise with business development skills.',
    shortBio: 'Senior Architect and Business Development specialist combining design expertise with business growth.',
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
    contact: {
      email: 'supassara@sv-arch.com',
      phone: '+66-2-162-0838',
      office: 'Bangkok Office',
      extension: '104'
    },
    metaTitle: 'Supassara Bannapanya - Senior Business Development | SV Architects',
    metaDescription: 'Supassara Bannapanya, Senior Business Development and Senior Architect at SV Architects and Associates Ltd. Business development expert with 10+ years experience.',
    keywords: [
      'business development',
      'senior architect',
      'client relations',
      'SV Architects'
    ],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    publishedAt: '2024-01-01T00:00:00Z'
  },

  // VETAPONG UABHAIBOOL - Senior Architect
  {
    id: 'vetapong-uabhaibool-006',
    slug: 'vetapong-uabhaibool',
    firstName: 'Vetapong',
    lastName: 'Uabhaibool',
    fullName: 'Vetapong Uabhaibool',
    position: 'senior-architect',
    title: 'Senior Architect',
    department: 'Architecture',
    image: getImagePath('/images/team/vetapong-uabhaibool.jpg'),
    bio: 'Vetapong Uabhaibool serves as Senior Architect at SV Architects and Associates Ltd., bringing extensive experience in architectural design and project management.',
    shortBio: 'Senior Architect with expertise in architectural design and project management.',
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
        issueDate: '2018-01-01',
        status: 'active'
      }
    ],
    experience: {
      summary: 'Over 8 years of experience in architectural design and project management.',
      years: 8,
      areas: [
        'architectural-design',
        'project-management',
        'design-development',
        'client-relations',
        'team-management'
      ],
      workHistory: [
        {
          company: 'SV Architects and Associates Ltd.',
          position: 'Senior Architect',
          location: 'Bangkok, Thailand',
          startDate: '2020-01-01',
          isCurrent: true,
          description: 'Leading architectural design projects and managing construction documentation.',
          achievements: [
            'Led design development for 20+ projects',
            'Improved project delivery efficiency',
            'Maintained high design quality standards',
            'Mentored junior architects'
          ]
        }
      ]
    },
    projects: [
      {
        projectId: 'senior-architect-projects',
        projectName: 'Senior Architect Projects',
        role: 'Senior Architect',
        responsibilities: [
          'Design development',
          'Project coordination',
          'Construction documentation',
          'Client presentation'
        ],
        startDate: '2020-01-01',
        endDate: '2024-12-31',
        isActive: true
      }
    ],
    skills: [
      'Architectural Design',
      'Project Management',
      'Construction Documentation',
      'Client Relations',
      'Team Collaboration',
      'Design Development'
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
    contact: {
      email: 'vetapong@sv-arch.com',
      phone: '+66-2-162-0838',
      office: 'Bangkok Office',
      extension: '105'
    },
    metaTitle: 'Vetapong Uabhaibool - Senior Architect | SV Architects',
    metaDescription: 'Vetapong Uabhaibool, Senior Architect at SV Architects and Associates Ltd. Architectural design expert with 8+ years experience.',
    keywords: [
      'senior architect',
      'architectural design',
      'project management',
      'SV Architects'
    ],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    publishedAt: '2024-01-01T00:00:00Z'
  },

  // JATUWAT VARODOMPUN - Assistant Professor
  {
    id: 'jatuwat-varodompun-007',
    slug: 'jatuwat-varodompun',
    firstName: 'Jatuwat',
    lastName: 'Varodompun',
    fullName: 'Asst.Prof. Jatuwat Varodompun Ph.D. LEED AP',
    position: 'consultant',
    title: 'Assistant Professor Ph.D. LEED AP',
    department: 'Research & Development',
    image: getImagePath('/images/team/jatuwat-varodompun.jpg'),
    bio: 'Asst.Prof. Jatuwat Varodompun Ph.D. LEED AP serves as Assistant Professor and LEED Accredited Professional at SV Architects and Associates Ltd., bringing academic expertise and sustainable design knowledge.',
    shortBio: 'Assistant Professor Ph.D. LEED AP specializing in sustainable design and academic research.',
    education: [
      {
        degree: 'Ph.D. in Architecture',
        institution: 'Chulalongkorn University',
        location: 'Bangkok, Thailand',
        level: 'phd',
        field: 'Architecture'
      },
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
        type: 'leed-ap',
        name: 'LEED Accredited Professional',
        issuingBody: 'US Green Building Council',
        issueDate: '2020-01-01',
        status: 'active'
      },
      {
        type: 'registered-architect',
        name: 'Registered Architect',
        issuingBody: 'Architect Council of Thailand',
        issueDate: '2015-01-01',
        status: 'active'
      }
    ],
    experience: {
      summary: 'Over 12 years of experience in sustainable architecture and academic research.',
      years: 12,
      areas: [
        'sustainable-design',
        'sustainable-design',
        'architectural-design',
        'sustainable-design',
        'sustainable-design'
      ],
      workHistory: [
        {
          company: 'SV Architects and Associates Ltd.',
          position: 'Assistant Professor Ph.D. LEED AP',
          location: 'Bangkok, Thailand',
          startDate: '2018-01-01',
          isCurrent: true,
          description: 'Leading sustainable design initiatives and academic research projects.',
          achievements: [
            'Led LEED certification for 15+ projects',
            'Published 20+ research papers',
            'Developed sustainable design standards',
            'Mentored graduate students'
          ]
        }
      ]
    },
    projects: [
      {
        projectId: 'sustainable-design-projects',
        projectName: 'Sustainable Design Projects',
        role: 'LEED AP',
        responsibilities: [
          'Sustainable design leadership',
          'LEED certification',
          'Research coordination',
          'Academic collaboration'
        ],
        startDate: '2018-01-01',
        endDate: '2024-12-31',
        isActive: true
      }
    ],
    skills: [
      'Sustainable Design',
      'LEED Certification',
      'Academic Research',
      'Green Building',
      'Environmental Design',
      'Research Methodology'
    ],
    software: [
      'AutoCAD',
      'Revit',
      'EnergyPlus',
      'Ecotect',
      'Microsoft Office',
      'Research Tools'
    ],
    languages: [
      'Thai (Native)',
      'English (Fluent)'
    ],
    contact: {
      email: 'jatuwat@sv-arch.com',
      phone: '+66-2-162-0838',
      office: 'Bangkok Office',
      extension: '106'
    },
    metaTitle: 'Jatuwat Varodompun - Assistant Professor Ph.D. LEED AP | SV Architects',
    metaDescription: 'Jatuwat Varodompun, Assistant Professor Ph.D. LEED AP at SV Architects and Associates Ltd. Sustainable design expert with 12+ years experience.',
    keywords: [
      'assistant professor',
      'LEED AP',
      'sustainable design',
      'SV Architects'
    ],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    publishedAt: '2024-01-01T00:00:00Z'
  },

  // JOVENEL BALDOMARO MONILLA - Architect
  {
    id: 'jovenel-baldomaro-monilla-008',
    slug: 'jovenel-baldomaro-monilla',
    firstName: 'Jovenel',
    lastName: 'Baldomaro Monilla',
    fullName: 'Jovenel Baldomaro Monilla',
    position: 'architect',
    title: 'Architect',
    department: 'Architecture',
    image: getImagePath('/images/team/jovenel-baldomaro-monilla.jpg'),
    bio: 'Jovenel Baldomaro Monilla serves as Architect at SV Architects and Associates Ltd., bringing international perspective and design expertise to the team.',
    shortBio: 'Architect with international perspective and design expertise.',
    education: [
      {
        degree: 'Bachelor of Architecture',
        institution: 'University of the Philippines',
        location: 'Manila, Philippines',
        level: 'bachelor',
        field: 'Architecture'
      }
    ],
    certifications: [
      {
        type: 'registered-architect',
        name: 'Registered Architect',
        issuingBody: 'Professional Regulation Commission Philippines',
        issueDate: '2019-01-01',
        status: 'active'
      }
    ],
    experience: {
      summary: 'Over 6 years of experience in architectural design and project coordination.',
      years: 6,
      areas: [
        'architectural-design',
        'project-management',
        'architectural-design',
        'design-development',
        'client-relations'
      ],
      workHistory: [
        {
          company: 'SV Architects and Associates Ltd.',
          position: 'Architect',
          location: 'Bangkok, Thailand',
          startDate: '2021-01-01',
          isCurrent: true,
          description: 'Contributing to architectural design projects and international collaborations.',
          achievements: [
            'Led design development for 10+ projects',
            'Contributed to international project coordination',
            'Maintained high design quality standards',
            'Collaborated with international teams'
          ]
        }
      ]
    },
    projects: [
      {
        projectId: 'architectural-design',
        projectName: 'International Projects',
        role: 'Architect',
        responsibilities: [
          'Design development',
          'Project coordination',
          'International collaboration',
          'Client presentation'
        ],
        startDate: '2021-01-01',
        endDate: '2024-12-31',
        isActive: true
      }
    ],
    skills: [
      'Architectural Design',
      'Project Coordination',
      'International Collaboration',
      'Design Development',
      'Client Relations',
      'Cross-cultural Communication'
    ],
    software: [
      'AutoCAD',
      'Revit',
      'SketchUp',
      'Adobe Creative Suite',
      'Microsoft Office'
    ],
    languages: [
      'English (Native)',
      'Thai (Fluent)',
      'Filipino (Native)'
    ],
    contact: {
      email: 'jovenel@sv-arch.com',
      phone: '+66-2-162-0838',
      office: 'Bangkok Office',
      extension: '107'
    },
    metaTitle: 'Jovenel Baldomaro Monilla - Architect | SV Architects',
    metaDescription: 'Jovenel Baldomaro Monilla, Architect at SV Architects and Associates Ltd. International design expert with 6+ years experience.',
    keywords: [
      'architect',
      'international projects',
      'design development',
      'SV Architects'
    ],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    publishedAt: '2024-01-01T00:00:00Z'
  },

  // SAROT DEELUAN - Architect
  {
    id: 'sarot-deeluan-009',
    slug: 'sarot-deeluan',
    firstName: 'Sarot',
    lastName: 'Deeluan',
    fullName: 'Sarot Deeluan',
    position: 'architect',
    title: 'Architect',
    department: 'Architecture',
    image: getImagePath('/images/team/sarot-deeluan.jpg'),
    bio: 'Sarot Deeluan serves as Architect at SV Architects and Associates Ltd., specializing in architectural design and project development.',
    shortBio: 'Architect specializing in architectural design and project development.',
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
        issueDate: '2020-01-01',
        status: 'active'
      }
    ],
    experience: {
      summary: 'Over 5 years of experience in architectural design and project development.',
      years: 5,
      areas: [
        'architectural-design',
        'project-management',
        'design-development',
        'client-relations',
        'team-management'
      ],
      workHistory: [
        {
          company: 'SV Architects and Associates Ltd.',
          position: 'Architect',
          location: 'Bangkok, Thailand',
          startDate: '2022-01-01',
          isCurrent: true,
          description: 'Contributing to architectural design projects and design documentation.',
          achievements: [
            'Led design development for 8+ projects',
            'Improved design documentation efficiency',
            'Maintained high design quality standards',
            'Collaborated effectively with project teams'
          ]
        }
      ]
    },
    projects: [
      {
        projectId: 'design-development-projects',
        projectName: 'Design Development Projects',
        role: 'Architect',
        responsibilities: [
          'Design development',
          'Design documentation',
          'Project coordination',
          'Client presentation'
        ],
        startDate: '2022-01-01',
        endDate: '2024-12-31',
        isActive: true
      }
    ],
    skills: [
      'Architectural Design',
      'Project Development',
      'Design Documentation',
      'Client Relations',
      'Team Collaboration',
      'Design Development'
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
    contact: {
      email: 'sarot@sv-arch.com',
      phone: '+66-2-162-0838',
      office: 'Bangkok Office',
      extension: '108'
    },
    metaTitle: 'Sarot Deeluan - Architect | SV Architects',
    metaDescription: 'Sarot Deeluan, Architect at SV Architects and Associates Ltd. Architectural design expert with 5+ years experience.',
    keywords: [
      'architect',
      'architectural design',
      'project development',
      'SV Architects'
    ],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    publishedAt: '2024-01-01T00:00:00Z'
  },

  // CHAYUT SUKRATTANACHAISAKUL - Architect
  {
    id: 'chayut-sukrattanachaisakul-010',
    slug: 'chayut-sukrattanachaisakul',
    firstName: 'Chayut',
    lastName: 'Sukrattanachaisakul',
    fullName: 'Chayut Sukrattanachaisakul',
    position: 'architect',
    title: 'Architect',
    department: 'Architecture',
    image: getImagePath('/images/team/chayut-sukrattanachaisakul.jpg'),
    bio: 'Chayut Sukrattanachaisakul serves as Architect at SV Architects and Associates Ltd., bringing fresh perspective and innovative design solutions.',
    shortBio: 'Architect with fresh perspective and innovative design solutions.',
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
        issueDate: '2021-01-01',
        status: 'active'
      }
    ],
    experience: {
      summary: 'Over 4 years of experience in architectural design and innovative solutions.',
      years: 4,
      areas: [
        'architectural-design',
        'architectural-design',
        'design-development',
        'client-relations',
        'architectural-design'
      ],
      workHistory: [
        {
          company: 'SV Architects and Associates Ltd.',
          position: 'Architect',
          location: 'Bangkok, Thailand',
          startDate: '2023-01-01',
          isCurrent: true,
          description: 'Contributing to innovative architectural design projects and technology integration.',
          achievements: [
            'Led design development for 6+ projects',
            'Introduced innovative design solutions',
            'Integrated new technologies in design',
            'Maintained high design quality standards'
          ]
        }
      ]
    },
    projects: [
      {
        projectId: 'innovative-design-projects',
        projectName: 'Innovative Design Projects',
        role: 'Architect',
        responsibilities: [
          'Design development',
          'Innovation integration',
          'Technology application',
          'Client presentation'
        ],
        startDate: '2023-01-01',
        endDate: '2024-12-31',
        isActive: true
      }
    ],
    skills: [
      'Architectural Design',
      'Innovative Solutions',
      'Design Development',
      'Client Relations',
      'Technology Integration',
      'Creative Problem Solving'
    ],
    software: [
      'AutoCAD',
      'Revit',
      'SketchUp',
      'Adobe Creative Suite',
      'Microsoft Office',
      '3D Modeling Tools'
    ],
    languages: [
      'Thai (Native)',
      'English (Fluent)'
    ],
    contact: {
      email: 'chayut@sv-arch.com',
      phone: '+66-2-162-0838',
      office: 'Bangkok Office',
      extension: '109'
    },
    metaTitle: 'Chayut Sukrattanachaisakul - Architect | SV Architects',
    metaDescription: 'Chayut Sukrattanachaisakul, Architect at SV Architects and Associates Ltd. Innovative design expert with 4+ years experience.',
    keywords: [
      'architect',
      'innovative design',
      'technology integration',
      'SV Architects'
    ],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    publishedAt: '2024-01-01T00:00:00Z'
  },

  // JINPANEE BANNAPANYA - Interior Designer
  {
    id: 'jinpanee-bannapanya-011',
    slug: 'jinpanee-bannapanya',
    firstName: 'Jinpanee',
    lastName: 'Bannapanya',
    fullName: 'Jinpanee Bannapanya',
    position: 'architect',
    title: 'Interior Designer',
    department: 'Interior Design',
    image: getImagePath('/images/team/jinpanee-bannapanya.jpg'),
    bio: 'Jinpanee Bannapanya serves as Interior Designer at SV Architects and Associates Ltd., specializing in interior design and space planning.',
    shortBio: 'Interior Designer specializing in interior design and space planning.',
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
        issueDate: '2021-01-01',
        status: 'active'
      }
    ],
    experience: {
      summary: 'Over 4 years of experience in interior design and space planning.',
      years: 4,
      areas: [
        'interior-design',
        'space-planning',
        'design-development',
        'client-relations',
        'interior-design'
      ],
      workHistory: [
        {
          company: 'SV Architects and Associates Ltd.',
          position: 'Interior Designer',
          location: 'Bangkok, Thailand',
          startDate: '2023-01-01',
          isCurrent: true,
          description: 'Contributing to interior design projects and space planning solutions.',
          achievements: [
            'Led interior design for 8+ projects',
            'Developed innovative space planning solutions',
            'Maintained high design quality standards',
            'Collaborated effectively with design teams'
          ]
        }
      ]
    },
    projects: [
      {
        projectId: 'interior-design-projects',
        projectName: 'Interior Design Projects',
        role: 'Interior Designer',
        responsibilities: [
          'Interior design development',
          'Space planning',
          'Material selection',
          'Client presentation'
        ],
        startDate: '2023-01-01',
        endDate: '2024-12-31',
        isActive: true
      }
    ],
    skills: [
      'Interior Design',
      'Space Planning',
      'Design Development',
      'Client Relations',
      'Material Selection',
      'Design Coordination'
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
    contact: {
      email: 'jinpanee@sv-arch.com',
      phone: '+66-2-162-0838',
      office: 'Bangkok Office',
      extension: '110'
    },
    metaTitle: 'Jinpanee Bannapanya - Interior Designer | SV Architects',
    metaDescription: 'Jinpanee Bannapanya, Interior Designer at SV Architects and Associates Ltd. Interior design expert with 4+ years experience.',
    keywords: [
      'interior designer',
      'space planning',
      'interior design',
      'SV Architects'
    ],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    publishedAt: '2024-01-01T00:00:00Z'
  },

  // SIPPAWICH ROUYOO - Architect
  {
    id: 'sippawich-rouyoo-012',
    slug: 'sippawich-rouyoo',
    firstName: 'Sippawich',
    lastName: 'Rouyoo',
    fullName: 'Sippawich Rouyoo',
    position: 'architect',
    title: 'Architect',
    department: 'Architecture',
    image: getImagePath('/images/team/sippawich-rouyoo.jpg'),
    bio: 'Sippawich Rouyoo serves as Architect at SV Architects and Associates Ltd., bringing expertise in architectural design and project coordination.',
    shortBio: 'Architect with expertise in architectural design and project coordination.',
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
        issueDate: '2022-01-01',
        status: 'active'
      }
    ],
    experience: {
      summary: 'Over 3 years of experience in architectural design and project coordination.',
      years: 3,
      areas: [
        'architectural-design',
        'project-management',
        'design-development',
        'client-relations',
        'team-management'
      ],
      workHistory: [
        {
          company: 'SV Architects and Associates Ltd.',
          position: 'Architect',
          location: 'Bangkok, Thailand',
          startDate: '2024-01-01',
          isCurrent: true,
          description: 'Contributing to architectural design projects and project coordination.',
          achievements: [
            'Led design development for 5+ projects',
            'Improved project coordination efficiency',
            'Maintained high design quality standards',
            'Collaborated effectively with project teams'
          ]
        }
      ]
    },
    projects: [
      {
        projectId: 'project-management-projects',
        projectName: 'Project Coordination Projects',
        role: 'Architect',
        responsibilities: [
          'Design development',
          'Project coordination',
          'Team collaboration',
          'Client presentation'
        ],
        startDate: '2024-01-01',
        endDate: '2024-12-31',
        isActive: true
      }
    ],
    skills: [
      'Architectural Design',
      'Project Coordination',
      'Design Development',
      'Client Relations',
      'Team Collaboration',
      'Project Management'
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
    contact: {
      email: 'sippawich@sv-arch.com',
      phone: '+66-2-162-0838',
      office: 'Bangkok Office',
      extension: '111'
    },
    metaTitle: 'Sippawich Rouyoo - Architect | SV Architects',
    metaDescription: 'Sippawich Rouyoo, Architect at SV Architects and Associates Ltd. Architectural design expert with 3+ years experience.',
    keywords: [
      'architect',
      'architectural design',
      'project coordination',
      'SV Architects'
    ],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    publishedAt: '2024-01-01T00:00:00Z'
  },

  // JAKKAPORN SUTTHIRAGSA - Architect
  {
    id: 'jakkaporn-sutthiragsa-013',
    slug: 'jakkaporn-sutthiragsa',
    firstName: 'Jakkaporn',
    lastName: 'Sutthiragsa',
    fullName: 'Jakkaporn Sutthiragsa',
    position: 'architect',
    title: 'Architect',
    department: 'Architecture',
    image: getImagePath('/images/team/jakkaporn-sutthiragsa.jpg'),
    bio: 'Jakkaporn Sutthiragsa serves as Architect at SV Architects and Associates Ltd., specializing in architectural design and sustainable solutions.',
    shortBio: 'Architect specializing in architectural design and sustainable solutions.',
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
        issueDate: '2023-01-01',
        status: 'active'
      }
    ],
    experience: {
      summary: 'Over 2 years of experience in architectural design and sustainable solutions.',
      years: 2,
      areas: [
        'architectural-design',
        'sustainable-design',
        'design-development',
        'client-relations',
        'sustainable-design'
      ],
      workHistory: [
        {
          company: 'SV Architects and Associates Ltd.',
          position: 'Architect',
          location: 'Bangkok, Thailand',
          startDate: '2024-01-01',
          isCurrent: true,
          description: 'Contributing to architectural design projects with focus on sustainable solutions.',
          achievements: [
            'Led design development for 4+ projects',
            'Integrated sustainable design principles',
            'Maintained high design quality standards',
            'Collaborated on environmental design solutions'
          ]
        }
      ]
    },
    projects: [
      {
        projectId: 'sustainable-design-projects',
        projectName: 'Sustainable Design Projects',
        role: 'Architect',
        responsibilities: [
          'Design development',
          'Sustainable solutions',
          'Environmental design',
          'Client presentation'
        ],
        startDate: '2024-01-01',
        endDate: '2024-12-31',
        isActive: true
      }
    ],
    skills: [
      'Architectural Design',
      'Sustainable Solutions',
      'Design Development',
      'Client Relations',
      'Environmental Design',
      'Green Building'
    ],
    software: [
      'AutoCAD',
      'Revit',
      'SketchUp',
      'Adobe Creative Suite',
      'Microsoft Office',
      'Energy Analysis Tools'
    ],
    languages: [
      'Thai (Native)',
      'English (Fluent)'
    ],
    contact: {
      email: 'jakkaporn@sv-arch.com',
      phone: '+66-2-162-0838',
      office: 'Bangkok Office',
      extension: '112'
    },
    metaTitle: 'Jakkaporn Sutthiragsa - Architect | SV Architects',
    metaDescription: 'Jakkaporn Sutthiragsa, Architect at SV Architects and Associates Ltd. Sustainable design expert with 2+ years experience.',
    keywords: [
      'architect',
      'sustainable design',
      'environmental design',
      'SV Architects'
    ],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    publishedAt: '2024-01-01T00:00:00Z'
  },

  // ALONGKORN SIRNAMKHAM - Architect
  {
    id: 'alongkorn-sirnamkham-014',
    slug: 'alongkorn-sirnamkham',
    firstName: 'Alongkorn',
    lastName: 'Sirnamkham',
    fullName: 'Alongkorn Sirnamkham',
    position: 'architect',
    title: 'Architect',
    department: 'Architecture',
    image: getImagePath('/images/team/alongkorn-sirnamkham.jpg'),
    bio: 'Alongkorn Sirnamkham serves as Architect at SV Architects and Associates Ltd., bringing expertise in architectural design and project management.',
    shortBio: 'Architect with expertise in architectural design and project management.',
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
        issueDate: '2023-01-01',
        status: 'active'
      }
    ],
    experience: {
      summary: 'Over 2 years of experience in architectural design and project management.',
      years: 2,
      areas: [
        'architectural-design',
        'project-management',
        'design-development',
        'client-relations',
        'team-management'
      ],
      workHistory: [
        {
          company: 'SV Architects and Associates Ltd.',
          position: 'Architect',
          location: 'Bangkok, Thailand',
          startDate: '2024-01-01',
          isCurrent: true,
          description: 'Contributing to architectural design projects and project management.',
          achievements: [
            'Led design development for 4+ projects',
            'Improved project management efficiency',
            'Maintained high design quality standards',
            'Collaborated effectively with project teams'
          ]
        }
      ]
    },
    projects: [
      {
        projectId: 'project-management-projects',
        projectName: 'Project Management Projects',
        role: 'Architect',
        responsibilities: [
          'Design development',
          'Project management',
          'Team collaboration',
          'Client presentation'
        ],
        startDate: '2024-01-01',
        endDate: '2024-12-31',
        isActive: true
      }
    ],
    skills: [
      'Architectural Design',
      'Project Management',
      'Design Development',
      'Client Relations',
      'Team Collaboration',
      'Project Coordination'
    ],
    software: [
      'AutoCAD',
      'Revit',
      'SketchUp',
      'Adobe Creative Suite',
      'Microsoft Office',
      'Project Management Tools'
    ],
    languages: [
      'Thai (Native)',
      'English (Fluent)'
    ],
    contact: {
      email: 'alongkorn@sv-arch.com',
      phone: '+66-2-162-0838',
      office: 'Bangkok Office',
      extension: '113'
    },
    metaTitle: 'Alongkorn Sirnamkham - Architect | SV Architects',
    metaDescription: 'Alongkorn Sirnamkham, Architect at SV Architects and Associates Ltd. Project management expert with 2+ years experience.',
    keywords: [
      'architect',
      'project management',
      'architectural design',
      'SV Architects'
    ],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    publishedAt: '2024-01-01T00:00:00Z'
  },

  // LEENA NGASAKUL - Interior Designer
  {
    id: 'leena-ngasakul-015',
    slug: 'leena-ngasakul',
    firstName: 'Leena',
    lastName: 'Ngasakul',
    fullName: 'Leena Ngasakul',
    position: 'architect',
    title: 'Interior Designer',
    department: 'Interior Design',
    image: getImagePath('/images/team/leena-ngasakul.jpg'),
    bio: 'Leena Ngasakul serves as Interior Designer at SV Architects and Associates Ltd., specializing in interior design and creative solutions.',
    shortBio: 'Interior Designer specializing in interior design and creative solutions.',
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
        issueDate: '2023-01-01',
        status: 'active'
      }
    ],
    experience: {
      summary: 'Over 2 years of experience in interior design and creative solutions.',
      years: 2,
      areas: [
        'interior-design',
        'interior-design',
        'design-development',
        'client-relations',
        'space-planning'
      ],
      workHistory: [
        {
          company: 'SV Architects and Associates Ltd.',
          position: 'Interior Designer',
          location: 'Bangkok, Thailand',
          startDate: '2024-01-01',
          isCurrent: true,
          description: 'Contributing to interior design projects with focus on creative solutions.',
          achievements: [
            'Led interior design for 4+ projects',
            'Developed creative design solutions',
            'Maintained high design quality standards',
            'Collaborated effectively with design teams'
          ]
        }
      ]
    },
    projects: [
      {
        projectId: 'creative-design-projects',
        projectName: 'Creative Design Projects',
        role: 'Interior Designer',
        responsibilities: [
          'Interior design development',
          'Creative solutions',
          'Space planning',
          'Client presentation'
        ],
        startDate: '2024-01-01',
        endDate: '2024-12-31',
        isActive: true
      }
    ],
    skills: [
      'Interior Design',
      'Creative Solutions',
      'Design Development',
      'Client Relations',
      'Space Planning',
      'Design Innovation'
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
    contact: {
      email: 'leena@sv-arch.com',
      phone: '+66-2-162-0838',
      office: 'Bangkok Office',
      extension: '114'
    },
    metaTitle: 'Leena Ngasakul - Interior Designer | SV Architects',
    metaDescription: 'Leena Ngasakul, Interior Designer at SV Architects and Associates Ltd. Creative design expert with 2+ years experience.',
    keywords: [
      'interior designer',
      'creative design',
      'interior design',
      'SV Architects'
    ],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    publishedAt: '2024-01-01T00:00:00Z'
  },

  // PUNCHARAT BANNAPANYA - Architect
  {
    id: 'puncharat-bannapanya-016',
    slug: 'puncharat-bannapanya',
    firstName: 'Puncharat',
    lastName: 'Bannapanya',
    fullName: 'Puncharat Bannapanya',
    position: 'architect',
    title: 'Architect',
    department: 'Architecture',
    image: getImagePath('/images/team/puncharat-bannapanya.jpg'),
    bio: 'Puncharat Bannapanya serves as Architect at SV Architects and Associates Ltd., bringing expertise in architectural design and project coordination.',
    shortBio: 'Architect with expertise in architectural design and project coordination.',
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
        issueDate: '2023-01-01',
        status: 'active'
      }
    ],
    experience: {
      summary: 'Over 2 years of experience in architectural design and project coordination.',
      years: 2,
      areas: [
        'architectural-design',
        'project-management',
        'design-development',
        'client-relations',
        'team-management'
      ],
      workHistory: [
        {
          company: 'SV Architects and Associates Ltd.',
          position: 'Architect',
          location: 'Bangkok, Thailand',
          startDate: '2024-01-01',
          isCurrent: true,
          description: 'Contributing to architectural design projects and project coordination.',
          achievements: [
            'Led design development for 4+ projects',
            'Improved project coordination efficiency',
            'Maintained high design quality standards',
            'Collaborated effectively with project teams'
          ]
        }
      ]
    },
    projects: [
      {
        projectId: 'coordination-projects',
        projectName: 'Coordination Projects',
        role: 'Architect',
        responsibilities: [
          'Design development',
          'Project coordination',
          'Team collaboration',
          'Client presentation'
        ],
        startDate: '2024-01-01',
        endDate: '2024-12-31',
        isActive: true
      }
    ],
    skills: [
      'Architectural Design',
      'Project Coordination',
      'Design Development',
      'Client Relations',
      'Team Collaboration',
      'Project Management'
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
    contact: {
      email: 'puncharat@sv-arch.com',
      phone: '+66-2-162-0838',
      office: 'Bangkok Office',
      extension: '115'
    },
    metaTitle: 'Puncharat Bannapanya - Architect | SV Architects',
    metaDescription: 'Puncharat Bannapanya, Architect at SV Architects and Associates Ltd. Project coordination expert with 2+ years experience.',
    keywords: [
      'architect',
      'project coordination',
      'architectural design',
      'SV Architects'
    ],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    publishedAt: '2024-01-01T00:00:00Z'
  },

  // KRIANGDESK WACHIRAWANIT - Architect
  {
    id: 'kriangdesk-wachirawanit-017',
    slug: 'kriangdesk-wachirawanit',
    firstName: 'Kriangdesk',
    lastName: 'Wachirawanit',
    fullName: 'Kriangdesk Wachirawanit',
    position: 'architect',
    title: 'Architect',
    department: 'Architecture',
    image: getImagePath('/images/team/kriangdesk-wachirawanit.jpg'),
    bio: 'Kriangdesk Wachirawanit serves as Architect at SV Architects and Associates Ltd., bringing expertise in architectural design and innovative solutions.',
    shortBio: 'Architect with expertise in architectural design and innovative solutions.',
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
        issueDate: '2023-01-01',
        status: 'active'
      }
    ],
    experience: {
      summary: 'Over 2 years of experience in architectural design and innovative solutions.',
      years: 2,
      areas: [
        'architectural-design',
        'architectural-design',
        'design-development',
        'client-relations',
        'architectural-design'
      ],
      workHistory: [
        {
          company: 'SV Architects and Associates Ltd.',
          position: 'Architect',
          location: 'Bangkok, Thailand',
          startDate: '2024-01-01',
          isCurrent: true,
          description: 'Contributing to architectural design projects with focus on innovative solutions.',
          achievements: [
            'Led design development for 4+ projects',
            'Introduced innovative design solutions',
            'Maintained high design quality standards',
            'Integrated new technologies in design'
          ]
        }
      ]
    },
    projects: [
      {
        projectId: 'innovation-projects',
        projectName: 'Innovation Projects',
        role: 'Architect',
        responsibilities: [
          'Design development',
          'Innovation integration',
          'Technology application',
          'Client presentation'
        ],
        startDate: '2024-01-01',
        endDate: '2024-12-31',
        isActive: true
      }
    ],
    skills: [
      'Architectural Design',
      'Innovative Solutions',
      'Design Development',
      'Client Relations',
      'Technology Integration',
      'Creative Problem Solving'
    ],
    software: [
      'AutoCAD',
      'Revit',
      'SketchUp',
      'Adobe Creative Suite',
      'Microsoft Office',
      '3D Modeling Tools'
    ],
    languages: [
      'Thai (Native)',
      'English (Fluent)'
    ],
    contact: {
      email: 'kriangdesk@sv-arch.com',
      phone: '+66-2-162-0838',
      office: 'Bangkok Office',
      extension: '116'
    },
    metaTitle: 'Kriangdesk Wachirawanit - Architect | SV Architects',
    metaDescription: 'Kriangdesk Wachirawanit, Architect at SV Architects and Associates Ltd. Innovative design expert with 2+ years experience.',
    keywords: [
      'architect',
      'innovative design',
      'technology integration',
      'SV Architects'
    ],
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