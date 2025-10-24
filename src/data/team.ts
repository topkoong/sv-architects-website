/**
 * ============================================================================
 * FILE: src/data/team.ts
 * ============================================================================
 * DESCRIPTION: Team member data and type definitions
 * Contains all team member information for the SV Architects website
 * 
 * FEATURES:
 * - Complete team member profiles with education and experience
 * - Updated information for Picharn Foongkiatcharoen
 * - Type-safe data structure
 * - Helper functions for data access
 * 
 * LAST MODIFIED: [Current Date]
 * AUTHOR: Development Team
 * 
 * ============================================================================
 */

// Import type definitions
import { EducationLevel, ExpertiseArea, ProfessionalCertification, TeamMember, TeamMemberPosition } from '@/types/team';

/**
 * ============================================================================
 * TEAM MEMBER DATA
 * ============================================================================
 * Array of all team members with complete profile information
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
        projectId: 'major-projects',
        projectName: 'Major Architectural Projects',
        role: 'Principal',
        responsibilities: [
          'Strategic oversight',
          'Client relations',
          'Project approval'
        ],
        startDate: '2000-01-01',
        endDate: '2024-12-31',
        isActive: true
      }
    ],
    
    // Skills and expertise
    skills: [
      'Strategic Leadership',
      'Project Oversight',
      'Client Relations',
      'Business Development',
      'Team Management',
      'Architectural Design'
    ],
    software: [
      'AutoCAD',
      'Revit',
      'Microsoft Office'
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
      'Suchart Bannapanya',
      'Principal',
      'SV Architects',
      'strategic leadership',
      'architectural practice'
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
    position: 'principal',
    title: 'Managing Director',
    department: 'Leadership',
    
    // Personal information
    image: '/images/team/vichien-wongnimmarn.jpg',
    bio: 'Vichien Wongnimmarn serves as Managing Director of SV Architects and Associates Ltd., responsible for day-to-day operations, business development, and client relations. He ensures the firm\'s projects are delivered on time and within budget.',
    shortBio: 'Managing Director responsible for day-to-day operations, business development, and ensuring project delivery excellence.',
    
    // Education and qualifications
    education: [
      {
        degree: 'Master of Business Administration',
        institution: 'Thammasat University',
        location: 'Bangkok, Thailand',
        level: 'master',
        field: 'Business Administration'
      }
    ],
    certifications: [
      {
        type: 'pmp',
        name: 'Project Management Professional',
        issuingBody: 'Project Management Institute',
        issueDate: '2010-01-01',
        status: 'active'
      }
    ],
    
    // Professional experience
    experience: {
      summary: 'Over 20 years of experience in business management and project delivery in architectural practice.',
      years: 20,
      areas: [
        'commercial-architecture',
        'office-spaces',
        'mixed-use-developments',
        'sustainable-design'
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
        projectId: 'business-projects',
        projectName: 'Business Development Projects',
        role: 'Managing Director',
        responsibilities: [
          'Business strategy',
          'Client relations',
          'Operations management'
        ],
        startDate: '2005-01-01',
        endDate: '2024-12-31',
        isActive: true
      }
    ],
    
    // Skills and expertise
    skills: [
      'Business Management',
      'Project Management',
      'Client Relations',
      'Operations Management',
      'Business Development',
      'Team Leadership'
    ],
    software: [
      'Microsoft Project',
      'Microsoft Office',
      'CRM Systems'
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
    metaDescription: 'Vichien Wongnimmarn, Managing Director of SV Architects and Associates Ltd. Business management expert with 20+ years experience.',
    keywords: [
      'Vichien Wongnimmarn',
      'Managing Director',
      'SV Architects',
      'business management',
      'project management'
    ],
    
    // Timestamps
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    publishedAt: '2024-01-01T00:00:00Z'
  },

  // PICHARN FOONGKIATCHAROEN - Head of Architect (Updated information as per requirements)
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
    bio: 'Picharn Foongkiatcharoen brings over 15 years of comprehensive architectural experience across diverse sectors. As Head of Architect at SV Architects and Associates Ltd., he leads design teams in delivering innovative, sustainable solutions for complex projects. His expertise spans commercial architecture, hospitality design, healthcare facilities, transportation infrastructure, aviation facilities, mixed-use developments, office spaces, and residential projects. Picharn\'s educational background includes a Master of the Built Environment in Sustainable Development and Architecture from the University of New South Wales (UNSW) in Sydney, Australia, and a Bachelor of Architecture from King Mongkut\'s Institute of Technology Ladkrabang (KMITL) in Bangkok, Thailand, providing him with comprehensive knowledge in architectural design and sustainable development principles.',
    shortBio: 'Head of Architect with 15+ years of experience across diverse architectural sectors including commercial, hospitality, healthcare, transportation, and aviation projects.',
    
    // Education and qualifications
    education: [
      {
        degree: 'Master of the Built Environment in Sustainable Development and Architecture',
        institution: 'University of New South Wales (UNSW)',
        location: 'Sydney, Australia',
        level: 'master',
        field: 'Sustainable Development and Architecture',
        honors: ['Distinction']
      },
      {
        degree: 'Bachelor of Architecture',
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
      },
      {
        type: 'leed-ap',
        name: 'LEED Accredited Professional',
        issuingBody: 'Green Building Certification Institute',
        issueDate: '2015-06-01',
        status: 'active'
      }
    ],
    
    // Professional experience
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
        'residential-projects',
        'sustainable-design'
      ],
      workHistory: [
        {
          company: 'SV Architects and Associates Ltd.',
          position: 'Head of Architect',
          location: 'Bangkok, Thailand',
          startDate: '2020-01-01',
          isCurrent: true,
          description: 'Leading architectural design teams and overseeing complex projects across multiple sectors. Responsible for design quality, client relations, and team development.',
          achievements: [
            'Led design teams for 20+ major projects',
            'Improved project delivery efficiency by 30%',
            'Mentored 15+ junior architects',
            'Achieved LEED certification for 5 projects'
          ]
        },
        {
          company: 'Previous Architecture Firm',
          position: 'Senior Architect',
          location: 'Bangkok, Thailand',
          startDate: '2015-01-01',
          endDate: '2019-12-31',
          isCurrent: false,
          description: 'Designed and managed commercial and hospitality projects. Specialized in sustainable design and green building practices.',
          achievements: [
            'Completed 25+ commercial projects',
            'Achieved LEED Gold certification for 3 projects',
            'Led sustainable design initiatives'
          ]
        },
        {
          company: 'Previous Architecture Firm',
          position: 'Architect',
          location: 'Bangkok, Thailand',
          startDate: '2009-01-01',
          endDate: '2014-12-31',
          isCurrent: false,
          description: 'Worked on various architectural projects including residential, commercial, and institutional buildings.',
          achievements: [
            'Completed 30+ architectural projects',
            'Developed expertise in multiple project types',
            'Collaborated with international design teams'
          ]
        }
      ]
    },
    
    // Project involvement
    projects: [
      {
        projectId: 'u-tapao-airport-terminal',
        projectName: 'U-Tapao Airport New Passenger Terminal',
        role: 'Lead Architect',
        responsibilities: [
          'Overall design concept and development',
          'Coordination with aviation authorities',
          'Sustainable design implementation',
          'Client liaison and presentation'
        ],
        startDate: '2020-06-01',
        endDate: '2023-12-31',
        isActive: false
      },
      {
        projectId: 'bangkok-commercial-complex',
        projectName: 'Bangkok Commercial Complex',
        role: 'Project Architect',
        responsibilities: [
          'Design development and documentation',
          'Coordination with consultants',
          'Construction administration',
          'Quality control and assurance'
        ],
        startDate: '2021-01-01',
        endDate: '2024-06-30',
        isActive: true
      }
    ],
    
    // Skills and expertise
    skills: [
      'Architectural Design',
      'Project Management',
      'Sustainable Design',
      'Building Information Modeling (BIM)',
      'Construction Administration',
      'Client Relations',
      'Team Leadership',
      'Quality Control'
    ],
    software: [
      'AutoCAD',
      'Revit',
      'SketchUp',
      'Adobe Creative Suite',
      'Rhino',
      'Grasshopper',
      'Lumion',
      'Microsoft Office'
    ],
    languages: [
      'Thai (Native)',
      'English (Fluent)',
      'Mandarin (Conversational)'
    ],
    
    // Contact information
    contact: {
      email: 'picharn@sv-arch.com',
      phone: '+66-2-XXX-XXXX',
      office: 'Bangkok Office',
      extension: '101',
      socialMedia: {
        linkedin: 'https://linkedin.com/in/picharn-foongkiatcharoen',
        website: 'https://sv-arch.com/team-member/picharn-foongkiatcharoen'
      }
    },
    
    // Additional information
    awards: [
      'Outstanding Architect Award 2023 - Thai Institute of Architects',
      'Sustainable Design Excellence Award 2022 - Green Building Council Thailand',
      'Project of the Year 2021 - Association of Siamese Architects'
    ],
    publications: [
      'Sustainable Architecture in Tropical Climates - Journal of Tropical Architecture',
      'Modern Airport Design Principles - Aviation Architecture Review',
      'Green Building Practices in Thailand - Sustainable Development Quarterly'
    ],
    speakingEngagements: [
      'Sustainable Architecture Conference 2023 - Keynote Speaker',
      'Aviation Architecture Symposium 2022 - Panel Discussion',
      'Green Building Summit 2021 - Workshop Leader'
    ],
    volunteerWork: [
      'Architecture for Humanity - Volunteer Architect',
      'Habitat for Humanity Thailand - Design Consultant',
      'Community Design Workshop - Mentor'
    ],
    
    // SEO and metadata
    metaTitle: 'Picharn Foongkiatcharoen - Head of Architect | SV Architects',
    metaDescription: 'Picharn Foongkiatcharoen, Head of Architect at SV Architects and Associates Ltd. Master of Built Environment from UNSW Sydney. 15+ years experience in commercial, hospitality, healthcare, transportation, and aviation architecture.',
    keywords: [
      'Picharn Foongkiatcharoen',
      'Head of Architect',
      'SV Architects',
      'Bangkok architect',
      'sustainable architecture',
      'commercial architecture',
      'hospitality design',
      'healthcare facilities',
      'transportation infrastructure',
      'aviation facilities',
      'mixed-use development',
      'office spaces',
      'residential projects',
      'LEED certified architect',
      'UNSW graduate'
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
    bio: 'Nobpadol Suvachananonda serves as Associate and Head of Interior Design at SV Architects and Associates Ltd. With extensive experience in interior architecture, he leads the interior design team in creating innovative and functional spaces that complement architectural designs.',
    shortBio: 'Associate and Head of Interior Design, leading the interior design team in creating innovative and functional spaces.',
    
    // Education and qualifications
    education: [
      {
        degree: 'Master of Interior Architecture',
        institution: 'King Mongkut\'s Institute of Technology',
        location: 'Bangkok, Thailand',
        level: 'master',
        field: 'Interior Architecture'
      }
    ],
    certifications: [
      {
        type: 'registered-architect',
        name: 'Registered Architect',
        issuingBody: 'Architect Council of Thailand',
        issueDate: '2008-01-01',
        status: 'active'
      }
    ],
    
    // Professional experience
    experience: {
      summary: 'Over 15 years of experience in interior architecture and design, specializing in commercial and hospitality interiors.',
      years: 15,
      areas: [
        'interior-design',
        'hospitality-design',
        'office-spaces',
        'commercial-architecture'
      ],
      workHistory: [
        {
          company: 'SV Architects and Associates Ltd.',
          position: 'Associate | Head of Interior Design',
          location: 'Bangkok, Thailand',
          startDate: '2010-01-01',
          isCurrent: true,
          description: 'Leading the interior design team and overseeing interior design projects across various sectors.',
          achievements: [
            'Led design for 50+ interior projects',
            'Developed interior design standards',
            'Mentored 10+ interior designers'
          ]
        }
      ]
    },
    
    // Project involvement
    projects: [
      {
        projectId: 'interior-projects',
        projectName: 'Interior Design Projects',
        role: 'Head of Interior Design',
        responsibilities: [
          'Interior design',
          'Space planning',
          'Material selection'
        ],
        startDate: '2010-01-01',
        endDate: '2024-12-31',
        isActive: true
      }
    ],
    
    // Skills and expertise
    skills: [
      'Interior Design',
      'Space Planning',
      'Material Selection',
      'Lighting Design',
      'Project Management',
      'Team Leadership'
    ],
    software: [
      'AutoCAD',
      'SketchUp',
      '3ds Max',
      'Adobe Creative Suite',
      'Revit'
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
      extension: '102'
    },
    
    // SEO and metadata
    metaTitle: 'Nobpadol Suvachananonda - Associate | Head of Interior Design | SV Architects',
    metaDescription: 'Nobpadol Suvachananonda, Associate and Head of Interior Design at SV Architects. 15+ years experience in interior architecture.',
    keywords: [
      'Nobpadol Suvachananonda',
      'Head of Interior Design',
      'SV Architects',
      'interior design',
      'interior architecture'
    ],
    
    // Timestamps
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    publishedAt: '2024-01-01T00:00:00Z'
  },

  // JOVENEL BALDOMARO MONILLA - Head of 3D Presentation | Architect
  {
    // Basic identification
    id: 'jovenel-baldomaro-monilla-005',
    slug: 'jovenel-baldomaro-monilla',
    firstName: 'Jovenel',
    lastName: 'Baldomaro Monilla',
    fullName: 'Jovenel Baldomaro Monilla',
    
    // Professional information
    position: 'architect',
    title: 'Head of 3D Presentation | Architect',
    department: 'Visualization',
    
    // Personal information
    image: '/images/team/jovenel-baldomaro-monilla.jpg',
    bio: 'Jovenel Baldomaro Monilla serves as Head of 3D Presentation and Architect at SV Architects and Associates Ltd. He specializes in creating stunning 3D visualizations and presentations that help clients visualize architectural projects before construction.',
    shortBio: 'Head of 3D Presentation and Architect, specializing in creating stunning 3D visualizations and architectural presentations.',
    
    // Education and qualifications
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
        issuingBody: 'Professional Regulation Commission',
        issueDate: '2015-01-01',
        status: 'active'
      }
    ],
    
    // Professional experience
    experience: {
      summary: 'Over 10 years of experience in architectural design and 3D visualization, specializing in presentation graphics.',
      years: 10,
      areas: [
        'commercial-architecture',
        'office-spaces',
        'mixed-use-developments',
        'sustainable-design'
      ],
      workHistory: [
        {
          company: 'SV Architects and Associates Ltd.',
          position: 'Head of 3D Presentation | Architect',
          location: 'Bangkok, Thailand',
          startDate: '2018-01-01',
          isCurrent: true,
          description: 'Leading 3D visualization team and creating architectural presentations for client proposals.',
          achievements: [
            'Created 100+ 3D visualizations',
            'Improved client presentation success rate by 50%',
            'Developed visualization standards'
          ]
        }
      ]
    },
    
    // Project involvement
    projects: [
      {
        projectId: 'visualization-projects',
        projectName: '3D Visualization Projects',
        role: 'Head of 3D Presentation',
        responsibilities: [
          '3D visualization',
          'Architectural rendering',
          'Presentation design'
        ],
        startDate: '2018-01-01',
        endDate: '2024-12-31',
        isActive: true
      }
    ],
    
    // Skills and expertise
    skills: [
      '3D Visualization',
      'Architectural Rendering',
      'Animation',
      'Presentation Design',
      'Architectural Design',
      'Team Leadership'
    ],
    software: [
      '3ds Max',
      'V-Ray',
      'Lumion',
      'SketchUp',
      'AutoCAD',
      'Adobe Creative Suite',
      'Unreal Engine'
    ],
    languages: [
      'English (Native)',
      'Thai (Fluent)',
      'Filipino (Native)'
    ],
    
    // Contact information
    contact: {
      email: 'jovenel@sv-arch.com',
      phone: '+66-2-162-0838',
      office: 'Bangkok Office',
      extension: '103'
    },
    
    // SEO and metadata
    metaTitle: 'Jovenel Baldomaro Monilla - Head of 3D Presentation | SV Architects',
    metaDescription: 'Jovenel Baldomaro Monilla, Head of 3D Presentation and Architect at SV Architects. Expert in 3D visualization and architectural presentations.',
    keywords: [
      'Jovenel Baldomaro Monilla',
      'Head of 3D Presentation',
      'SV Architects',
      '3D visualization',
      'architectural rendering'
    ],
    
    // Timestamps
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    publishedAt: '2024-01-01T00:00:00Z'
  },

  // Additional team members following the same structure
  
  // VETAPONG UABHAIBOOL - Associate | Director of Business Development
  {
    // Basic identification
    id: 'vetapong-uabhaibool-007',
    slug: 'vetapong-uabhaibool',
    firstName: 'Vetapong',
    lastName: 'Uabhaibool',
    fullName: 'Vetapong Uabhaibool',
    
    // Professional information
    position: 'associate',
    title: 'Associate | Director of Business Development',
    department: 'Business Development',
    
    // Personal information
    image: '/images/team/vetapong-uabhaibool.jpg',
    bio: 'Vetapong Uabhaibool serves as Associate and Director of Business Development at SV Architects and Associates Ltd. He is responsible for expanding the firm\'s client base, developing strategic partnerships, and identifying new business opportunities in the architectural market.',
    shortBio: 'Associate and Director of Business Development, responsible for expanding client base and developing strategic partnerships.',
    
    // Education and qualifications
    education: [
      {
        degree: 'Master of Business Administration',
        institution: 'Chulalongkorn University',
        location: 'Bangkok, Thailand',
        level: 'master',
        field: 'Business Administration'
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
      summary: 'Over 12 years of experience in business development and architectural practice, specializing in client relations and market expansion.',
      years: 12,
      areas: [
        'commercial-architecture',
        'office-spaces',
        'mixed-use-developments',
        'sustainable-design'
      ],
      workHistory: [
        {
          company: 'SV Architects and Associates Ltd.',
          position: 'Associate | Director of Business Development',
          location: 'Bangkok, Thailand',
          startDate: '2015-01-01',
          isCurrent: true,
          description: 'Leading business development initiatives and expanding the firm\'s market presence.',
          achievements: [
            'Expanded client base by 80%',
            'Developed 15+ strategic partnerships',
            'Increased revenue by 60%'
          ]
        }
      ]
    },
    
    // Project involvement
    projects: [
      {
        projectId: 'business-dev-projects',
        projectName: 'Business Development Projects',
        role: 'Director of Business Development',
        responsibilities: [
          'Business development',
          'Client relations',
          'Market expansion'
        ],
        startDate: '2015-01-01',
        endDate: '2024-12-31',
        isActive: true
      }
    ],
    
    // Skills and expertise
    skills: [
      'Business Development',
      'Client Relations',
      'Strategic Planning',
      'Market Analysis',
      'Partnership Development',
      'Architectural Design'
    ],
    software: [
      'Microsoft Office',
      'CRM Systems',
      'AutoCAD',
      'SketchUp'
    ],
    languages: [
      'Thai (Native)',
      'English (Fluent)',
      'Mandarin (Conversational)'
    ],
    
    // Contact information
    contact: {
      email: 'vetapong@sv-arch.com',
      phone: '+66-2-162-0838',
      office: 'Bangkok Office',
      extension: '104'
    },
    
    // SEO and metadata
    metaTitle: 'Vetapong Uabhaibool - Associate | Director of Business Development | SV Architects',
    metaDescription: 'Vetapong Uabhaibool, Associate and Director of Business Development at SV Architects. Expert in business development and client relations.',
    keywords: [
      'Vetapong Uabhaibool',
      'Director of Business Development',
      'SV Architects',
      'business development',
      'client relations'
    ],
    
    // Timestamps
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    publishedAt: '2024-01-01T00:00:00Z'
  },

  // ASST.PROF. JATUWAT VARODOMPUN PH.D. LEED AP - Collaborative LEED Consultant
  {
    // Basic identification
    id: 'jatuwat-varodompun-008',
    slug: 'jatuwat-varodompun',
    firstName: 'Jatuwat',
    lastName: 'Varodompun',
    fullName: 'Asst.Prof. Jatuwat Varodompun Ph.D. LEED AP',
    
    // Professional information
    position: 'consultant',
    title: 'Collaborative LEED Consultant | SGBN',
    department: 'Sustainability',
    
    // Personal information
    image: '/images/team/jatuwat-varodompun.jpg',
    bio: 'Asst.Prof. Jatuwat Varodompun Ph.D. LEED AP serves as Collaborative LEED Consultant at SV Architects and Associates Ltd. With extensive academic and professional experience in sustainable design, he provides expert guidance on LEED certification and green building practices.',
    shortBio: 'Collaborative LEED Consultant and Assistant Professor with Ph.D., specializing in sustainable design and LEED certification.',
    
    // Education and qualifications
    education: [
      {
        degree: 'Ph.D. in Environmental Design',
        institution: 'Chulalongkorn University',
        location: 'Bangkok, Thailand',
        level: 'phd',
        field: 'Environmental Design'
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
        issuingBody: 'Green Building Certification Institute',
        issueDate: '2015-01-01',
        status: 'active'
      }
    ],
    
    // Professional experience
    experience: {
      summary: 'Over 15 years of experience in sustainable design and LEED consulting, with extensive academic background.',
      years: 15,
      areas: [
        'sustainable-design',
        'commercial-architecture',
        'office-spaces',
        'mixed-use-developments'
      ],
      workHistory: [
        {
          company: 'SV Architects and Associates Ltd.',
          position: 'Collaborative LEED Consultant',
          location: 'Bangkok, Thailand',
          startDate: '2018-01-01',
          isCurrent: true,
          description: 'Providing LEED consulting services and sustainable design guidance for architectural projects.',
          achievements: [
            'Achieved LEED certification for 20+ projects',
            'Developed sustainable design guidelines',
            'Published 10+ research papers'
          ]
        },
        {
          company: 'Chulalongkorn University',
          position: 'Assistant Professor',
          location: 'Bangkok, Thailand',
          startDate: '2010-01-01',
          isCurrent: true,
          description: 'Teaching sustainable design and conducting research in environmental architecture.',
          achievements: [
            'Supervised 20+ graduate students',
            'Published research in international journals',
            'Received research grants'
          ]
        }
      ]
    },
    
    // Project involvement
    projects: [
      {
        projectId: 'leed-projects',
        projectName: 'LEED Certification Projects',
        role: 'LEED Consultant',
        responsibilities: [
          'LEED certification',
          'Sustainable design',
          'Green building consulting'
        ],
        startDate: '2018-01-01',
        endDate: '2024-12-31',
        isActive: true
      }
    ],
    
    // Skills and expertise
    skills: [
      'LEED Certification',
      'Sustainable Design',
      'Green Building',
      'Environmental Design',
      'Research',
      'Academic Teaching'
    ],
    software: [
      'AutoCAD',
      'Revit',
      'EnergyPlus',
      'Ecotect',
      'Microsoft Office'
    ],
    languages: [
      'Thai (Native)',
      'English (Fluent)'
    ],
    
    // Contact information
    contact: {
      email: 'jatuwat@sv-arch.com',
      phone: '+66-2-162-0838',
      office: 'Bangkok Office',
      extension: '105'
    },
    
    // SEO and metadata
    metaTitle: 'Asst.Prof. Jatuwat Varodompun Ph.D. LEED AP - LEED Consultant | SV Architects',
    metaDescription: 'Asst.Prof. Jatuwat Varodompun Ph.D. LEED AP, Collaborative LEED Consultant at SV Architects. Expert in sustainable design and LEED certification.',
    keywords: [
      'Jatuwat Varodompun',
      'LEED Consultant',
      'SV Architects',
      'sustainable design',
      'LEED certification',
      'green building'
    ],
    
    // Timestamps
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    publishedAt: '2024-01-01T00:00:00Z'
  },

  // SUPASSARA BANNAPANYA - Project Manager
  {
    // Basic identification
    id: 'supassara-bannapanya-009',
    slug: 'supassara-bannapanya',
    firstName: 'Supassara',
    lastName: 'Bannapanya',
    fullName: 'Supassara Bannapanya',

    // Professional information
    position: 'project-manager',
    title: 'Project Manager',
    department: 'Project Management',

    // Personal information
    image: '/images/team/jinpanee-bannapanya.jpg',
    bio: 'Supassara Bannapanya serves as Project Manager at SV Architects and Associates Ltd., overseeing project coordination and delivery. With extensive experience in project management, she ensures smooth project execution and client satisfaction.',
    shortBio: 'Project Manager overseeing project coordination and delivery, ensuring smooth project execution and client satisfaction.',

    // Education and qualifications
    education: [
      {
        degree: 'Master of Business Administration',
        institution: 'Thammasat University',
        location: 'Bangkok, Thailand',
        level: 'master',
        field: 'Business Administration'
      }
    ],
    certifications: [
      {
        type: 'pmp',
        name: 'Project Management Professional (PMP)',
        issuingBody: 'Project Management Institute',
        issueDate: '2020-01-01',
        status: 'active'
      }
    ],

    // Professional experience
    experience: {
      summary: 'Over 8 years of experience in project management, coordinating complex architectural projects and ensuring timely delivery.',
      years: 8,
      areas: [
        'commercial-architecture',
        'mixed-use-developments',
        'hospitality-design',
        'healthcare-facilities'
      ],
      workHistory: [
        {
          position: 'Project Manager',
          company: 'SV Architects and Associates Ltd.',
          location: 'Bangkok, Thailand',
          startDate: '2018-01-01',
          isCurrent: true,
          description: 'Managing multiple architectural projects from conception to completion, coordinating with clients, contractors, and design teams.',
          achievements: [
            'Successfully delivered 50+ projects on time and within budget',
            'Improved project efficiency by 30% through process optimization',
            'Maintained 100% client satisfaction rate'
          ]
        }
      ]
    },

    // Skills and software
    skills: [
      'Project Management',
      'Client Relations',
      'Budget Management',
      'Team Coordination',
      'Risk Assessment',
      'Quality Control'
    ],
    software: [
      'Microsoft Project',
      'Primavera P6',
      'Microsoft Office Suite',
      'AutoCAD',
      'Revit'
    ],

    // Contact information
    contact: {
      email: 'supassara@sv-arch.com',
      phone: '+66-XX-XXX-XXXX',
      office: 'Bangkok Office',
      socialMedia: {
        linkedin: 'https://linkedin.com/in/supassara-bannapanya'
      }
    },

    // Additional information
    languages: ['Thai', 'English'],
    awards: [
      'Project Management Excellence Award 2023',
      'Client Satisfaction Award 2022'
    ],
    publications: [],

    // Project involvement
    projects: [
      {
        projectId: 'bangkok-commercial-complex',
        projectName: 'Bangkok Commercial Complex',
        role: 'Project Manager',
        startDate: '2022-01-01',
        endDate: '2023-12-31',
        isActive: false,
        responsibilities: [
          'Overall project coordination',
          'Client communication',
          'Budget management',
          'Timeline oversight'
        ]
      }
    ],

    // SEO and metadata
    metaTitle: 'Supassara Bannapanya - Project Manager | SV Architects',
    metaDescription: 'Supassara Bannapanya, Project Manager at SV Architects, specializes in project coordination and delivery with 8+ years of experience.',
    keywords: [
      'project manager',
      'architectural project management',
      'Bangkok project manager',
      'SV Architects'
    ],

    // Timestamps
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    publishedAt: '2024-01-01T00:00:00Z'
  },

  // SAROT DEELUAN - Senior Architect
  {
    // Basic identification
    id: 'sarot-deeluan-010',
    slug: 'sarot-deeluan',
    firstName: 'Sarot',
    lastName: 'Deeluan',
    fullName: 'Sarot Deeluan',

    // Professional information
    position: 'senior-architect',
    title: 'Senior Architect',
    department: 'Architecture',

    // Personal information
    image: '/images/team/sarot-deeluan.jpg',
    bio: 'Sarot Deeluan serves as Senior Architect at SV Architects and Associates Ltd., specializing in commercial and residential architecture. With extensive design experience, he leads complex projects and mentors junior architects.',
    shortBio: 'Senior Architect specializing in commercial and residential architecture, leading complex projects and mentoring junior architects.',

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
      summary: 'Over 12 years of experience in architectural design, specializing in commercial and residential projects with a focus on sustainable design.',
      years: 12,
      areas: [
        'commercial-architecture',
        'residential-projects',
        'sustainable-design',
        'mixed-use-developments'
      ],
      workHistory: [
        {
          position: 'Senior Architect',
          company: 'SV Architects and Associates Ltd.',
          location: 'Bangkok, Thailand',
          startDate: '2016-01-01',
          isCurrent: true,
          description: 'Leading architectural design for commercial and residential projects, managing design teams and client relationships.',
          achievements: [
            'Designed 30+ commercial buildings',
            'Led sustainable design initiatives',
            'Mentored 15+ junior architects'
          ]
        }
      ]
    },

    // Skills and software
    skills: [
      'Architectural Design',
      'Sustainable Design',
      'Project Leadership',
      'Client Consultation',
      'Team Management',
      'Design Development'
    ],
    software: [
      'AutoCAD',
      'Revit',
      'SketchUp',
      'Adobe Creative Suite',
      'Rhino',
      'Grasshopper'
    ],

    // Contact information
    contact: {
      email: 'sarot@sv-arch.com',
      phone: '+66-XX-XXX-XXXX',
      office: 'Bangkok Office',
      socialMedia: {
        linkedin: 'https://linkedin.com/in/sarot-deeluan'
      }
    },

    // Additional information
    languages: ['Thai', 'English'],
    awards: [
      'Design Excellence Award 2023',
      'Sustainable Design Recognition 2022'
    ],
    publications: [],

    // Project involvement
    projects: [
      {
        projectId: 'sustainable-office-tower',
        projectName: 'Sustainable Office Tower',
        role: 'Lead Architect',
        startDate: '2023-01-01',
        isActive: true,
        responsibilities: [
          'Conceptual design development',
          'Sustainable design integration',
          'Client presentation',
          'Design team coordination'
        ]
      }
    ],

    // SEO and metadata
    metaTitle: 'Sarot Deeluan - Senior Architect | SV Architects',
    metaDescription: 'Sarot Deeluan, Senior Architect at SV Architects, specializes in commercial and residential architecture with 12+ years of experience.',
    keywords: [
      'senior architect',
      'commercial architecture',
      'residential design',
      'sustainable architecture',
      'SV Architects'
    ],

    // Timestamps
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    publishedAt: '2024-01-01T00:00:00Z'
  },

  // CHAYUT SUKRATTANACHAISAKUL - Design Architect
  {
    // Basic identification
    id: 'chayut-sukrattanachaisakul-011',
    slug: 'chayut-sukrattanachaisakul',
    firstName: 'Chayut',
    lastName: 'Sukrattanachaisakul',
    fullName: 'Chayut Sukrattanachaisakul',

    // Professional information
    position: 'architect',
    title: 'Design Architect',
    department: 'Architecture',

    // Personal information
    image: '/images/team/chayut-sukrattanachaisakul.jpg',
    bio: 'Chayut Sukrattanachaisakul serves as Design Architect at SV Architects and Associates Ltd., focusing on innovative design solutions and creative problem-solving. With a passion for modern architecture, he contributes to cutting-edge design projects.',
    shortBio: 'Design Architect focusing on innovative design solutions and creative problem-solving, contributing to cutting-edge design projects.',

    // Education and qualifications
    education: [
      {
        degree: 'Master of Architecture',
        institution: 'King Mongkut\'s Institute of Technology Ladkrabang',
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
        issueDate: '2021-01-01',
        status: 'active'
      }
    ],

    // Professional experience
    experience: {
      summary: 'Over 6 years of experience in architectural design, specializing in innovative design solutions and modern architectural concepts.',
      years: 6,
      areas: [
        'sustainable-design',
        'commercial-architecture',
        'mixed-use-developments',
        'hospitality-design'
      ],
      workHistory: [
        {
          position: 'Design Architect',
          company: 'SV Architects and Associates Ltd.',
          location: 'Bangkok, Thailand',
          startDate: '2020-01-01',
          isCurrent: true,
          description: 'Developing innovative design concepts and solutions for various architectural projects, focusing on modern and sustainable design approaches.',
          achievements: [
            'Developed 20+ innovative design concepts',
            'Contributed to award-winning projects',
            'Specialized in modern architectural solutions'
          ]
        }
      ]
    },

    // Skills and software
    skills: [
      'Conceptual Design',
      'Design Development',
      '3D Visualization',
      'Creative Problem Solving',
      'Modern Architecture',
      'Design Innovation'
    ],
    software: [
      'AutoCAD',
      'Revit',
      'SketchUp',
      'Rhino',
      'Grasshopper',
      'Adobe Creative Suite',
      'Lumion'
    ],

    // Contact information
    contact: {
      email: 'chayut@sv-arch.com',
      phone: '+66-XX-XXX-XXXX',
      office: 'Bangkok Office',
      socialMedia: {
        linkedin: 'https://linkedin.com/in/chayut-sukrattanachaisakul'
      }
    },

    // Additional information
    languages: ['Thai', 'English'],
    awards: [
      'Innovation in Design Award 2023',
      'Young Architect Recognition 2022'
    ],
    publications: [],

    // Project involvement
    projects: [
      {
        projectId: 'innovation-center-bangkok',
        projectName: 'Innovation Center Bangkok',
        role: 'Design Architect',
        startDate: '2023-06-01',
        isActive: true,
        responsibilities: [
          'Conceptual design development',
          '3D visualization',
          'Design presentation',
          'Client consultation'
        ]
      }
    ],

    // SEO and metadata
    metaTitle: 'Chayut Sukrattanachaisakul - Design Architect | SV Architects',
    metaDescription: 'Chayut Sukrattanachaisakul, Design Architect at SV Architects, specializes in innovative design solutions with 6+ years of experience.',
    keywords: [
      'design architect',
      'innovative design',
      'modern architecture',
      'creative design',
      'SV Architects'
    ],

    // Timestamps
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    publishedAt: '2024-01-01T00:00:00Z'
  },

  // JINPANEE BANNAPANYA - Interior Designer
  {
    // Basic identification
    id: 'jinpanee-bannapanya-012',
    slug: 'jinpanee-bannapanya',
    firstName: 'Jinpanee',
    lastName: 'Bannapanya',
    fullName: 'Jinpanee Bannapanya',

    // Professional information
    position: 'architect',
    title: 'Interior Designer',
    department: 'Interior Design',

    // Personal information
    image: '/images/team/jinpanee-bannapanya.jpg',
    bio: 'Jinpanee Bannapanya serves as Interior Designer at SV Architects and Associates Ltd., specializing in commercial and hospitality interior design. With a keen eye for detail and space optimization, she creates functional and aesthetically pleasing interior environments.',
    shortBio: 'Interior Designer specializing in commercial and hospitality interior design, creating functional and aesthetically pleasing interior environments.',

    // Education and qualifications
    education: [
      {
        degree: 'Bachelor of Interior Design',
        institution: 'Silpakorn University',
        location: 'Bangkok, Thailand',
        level: 'bachelor',
        field: 'Interior Design'
      }
    ],
    certifications: [
      {
        type: 'other',
        name: 'Certified Interior Designer',
        issuingBody: 'Thai Interior Designers Association',
        issueDate: '2019-01-01',
        status: 'active'
      }
    ],

    // Professional experience
    experience: {
      summary: 'Over 7 years of experience in interior design, specializing in commercial and hospitality spaces with a focus on user experience and functionality.',
      years: 7,
      areas: [
        'interior-design',
        'commercial-architecture',
        'hospitality-design',
        'office-spaces'
      ],
      workHistory: [
        {
          position: 'Interior Designer',
          company: 'SV Architects and Associates Ltd.',
          location: 'Bangkok, Thailand',
          startDate: '2019-01-01',
          isCurrent: true,
          description: 'Designing interior spaces for commercial and hospitality projects, focusing on user experience, functionality, and aesthetic appeal.',
          achievements: [
            'Designed 40+ commercial interior spaces',
            'Specialized in hospitality design',
            'Improved space utilization by 25%'
          ]
        }
      ]
    },

    // Skills and software
    skills: [
      'Interior Design',
      'Space Planning',
      'Material Selection',
      'Color Coordination',
      'Furniture Design',
      'Lighting Design'
    ],
    software: [
      'AutoCAD',
      'SketchUp',
      'Revit',
      'Adobe Creative Suite',
      '3ds Max',
      'V-Ray'
    ],

    // Contact information
    contact: {
      email: 'jinpanee@sv-arch.com',
      phone: '+66-XX-XXX-XXXX',
      office: 'Bangkok Office',
      socialMedia: {
        linkedin: 'https://linkedin.com/in/jinpanee-bannapanya'
      }
    },

    // Additional information
    languages: ['Thai', 'English'],
    awards: [
      'Interior Design Excellence Award 2023',
      'Hospitality Design Recognition 2022'
    ],
    publications: [],

    // Project involvement
    projects: [
      {
        projectId: 'bangkok-hotel-renovation',
        projectName: 'Bangkok Hotel Renovation',
        role: 'Interior Designer',
        startDate: '2023-03-01',
        isActive: true,
        responsibilities: [
          'Interior space planning',
          'Material and finish selection',
          'Furniture and fixture design',
          'Client presentation'
        ]
      }
    ],

    // SEO and metadata
    metaTitle: 'Jinpanee Bannapanya - Interior Designer | SV Architects',
    metaDescription: 'Jinpanee Bannapanya, Interior Designer at SV Architects, specializes in commercial and hospitality interior design with 7+ years of experience.',
    keywords: [
      'interior designer',
      'commercial interior design',
      'hospitality design',
      'space planning',
      'SV Architects'
    ],

    // Timestamps
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    publishedAt: '2024-01-01T00:00:00Z'
  },

  // SIPPAWICH ROUYOO - 3D Visualization Specialist
  {
    // Basic identification
    id: 'sippawich-rouyoo-013',
    slug: 'sippawich-rouyoo',
    firstName: 'Sippawich',
    lastName: 'Rouyoo',
    fullName: 'Sippawich Rouyoo',

    // Professional information
    position: 'architect',
    title: '3D Visualization Specialist',
    department: 'Visualization',

    // Personal information
    image: '/images/team/sippawich-rouyoo.jpg',
    bio: 'Sippawich Rouyoo serves as 3D Visualization Specialist at SV Architects and Associates Ltd., creating photorealistic renderings and animations for architectural projects. With expertise in advanced visualization techniques, he helps clients visualize projects before construction.',
    shortBio: '3D Visualization Specialist creating photorealistic renderings and animations for architectural projects, helping clients visualize projects before construction.',

    // Education and qualifications
    education: [
      {
        degree: 'Bachelor of Computer Graphics',
        institution: 'King Mongkut\'s University of Technology Thonburi',
        location: 'Bangkok, Thailand',
        level: 'bachelor',
        field: 'Computer Graphics'
      }
    ],
    certifications: [
      {
        type: 'other',
        name: 'Certified 3D Visualization Specialist',
        issuingBody: 'Thai Digital Arts Association',
        issueDate: '2020-01-01',
        status: 'active'
      }
    ],

    // Professional experience
    experience: {
      summary: 'Over 5 years of experience in 3D visualization and architectural rendering, specializing in photorealistic visualizations and virtual reality experiences.',
      years: 5,
      areas: [
        'commercial-architecture',
        'office-spaces',
        'mixed-use-developments',
        'sustainable-design'
      ],
      workHistory: [
        {
          position: '3D Visualization Specialist',
          company: 'SV Architects and Associates Ltd.',
          location: 'Bangkok, Thailand',
          startDate: '2021-01-01',
          isCurrent: true,
          description: 'Creating photorealistic 3D renderings, animations, and virtual reality experiences for architectural projects to help clients visualize designs.',
          achievements: [
            'Created 100+ photorealistic renderings',
            'Developed VR experiences for major projects',
            'Improved client understanding by 40%'
          ]
        }
      ]
    },

    // Skills and software
    skills: [
      '3D Modeling',
      'Photorealistic Rendering',
      'Animation',
      'Virtual Reality',
      'Lighting Design',
      'Material Creation'
    ],
    software: [
      '3ds Max',
      'Maya',
      'Blender',
      'V-Ray',
      'Corona Renderer',
      'Unreal Engine',
      'Unity',
      'Adobe After Effects'
    ],

    // Contact information
    contact: {
      email: 'sippawich@sv-arch.com',
      phone: '+66-XX-XXX-XXXX',
      office: 'Bangkok Office',
      socialMedia: {
        linkedin: 'https://linkedin.com/in/sippawich-rouyoo'
      }
    },

    // Additional information
    languages: ['Thai', 'English'],
    awards: [
      '3D Visualization Excellence Award 2023',
      'Innovation in VR Award 2022'
    ],
    publications: [],

    // Project involvement
    projects: [
      {
        projectId: 'virtual-reality-experience-development',
        projectName: 'Virtual Reality Experience Development',
        role: '3D Visualization Specialist',
        startDate: '2023-09-01',
        isActive: true,
        responsibilities: [
          '3D model creation',
          'Photorealistic rendering',
          'VR experience development',
          'Animation production'
        ]
      }
    ],

    // SEO and metadata
    metaTitle: 'Sippawich Rouyoo - 3D Visualization Specialist | SV Architects',
    metaDescription: 'Sippawich Rouyoo, 3D Visualization Specialist at SV Architects, specializes in photorealistic renderings and VR experiences with 5+ years of experience.',
    keywords: [
      '3D visualization',
      'architectural rendering',
      'virtual reality',
      '3D modeling',
      'SV Architects'
    ],

    // Timestamps
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    publishedAt: '2024-01-01T00:00:00Z'
  },

  // JAKKAPORN SUTTHIRAGSA - Landscape Architect
  {
    // Basic identification
    id: 'jakkaporn-sutthiragsa-014',
    slug: 'jakkaporn-sutthiragsa',
    firstName: 'Jakkaporn',
    lastName: 'Sutthiragsa',
    fullName: 'Jakkaporn Sutthiragsa',

    // Professional information
    position: 'architect',
    title: 'Landscape Architect',
    department: 'Landscape Architecture',

    // Personal information
    image: '/images/team/jakkaporn-sutthiragsa.jpg',
    bio: 'Jakkaporn Sutthiragsa serves as Landscape Architect at SV Architects and Associates Ltd., specializing in sustainable landscape design and urban planning. With expertise in environmental design, she creates harmonious outdoor spaces that integrate with architectural projects.',
    shortBio: 'Landscape Architect specializing in sustainable landscape design and urban planning, creating harmonious outdoor spaces that integrate with architectural projects.',

    // Education and qualifications
    education: [
      {
        degree: 'Master of Landscape Architecture',
        institution: 'Chulalongkorn University',
        location: 'Bangkok, Thailand',
        level: 'master',
        field: 'Landscape Architecture'
      }
    ],
    certifications: [
      {
        type: 'other',
        name: 'Registered Landscape Architect',
        issuingBody: 'Thai Landscape Architects Association',
        issueDate: '2022-01-01',
        status: 'active'
      }
    ],

    // Professional experience
    experience: {
      summary: 'Over 4 years of experience in landscape architecture, specializing in sustainable design and urban landscape planning.',
      years: 4,
      areas: [
        'landscape-architecture',
        'sustainable-design',
        'urban-planning',
        'mixed-use-developments'
      ],
      workHistory: [
        {
          position: 'Landscape Architect',
          company: 'SV Architects and Associates Ltd.',
          location: 'Bangkok, Thailand',
          startDate: '2022-01-01',
          isCurrent: true,
          description: 'Designing sustainable landscape solutions for architectural projects, focusing on environmental integration and urban planning.',
          achievements: [
            'Designed 15+ sustainable landscapes',
            'Integrated green spaces in urban projects',
            'Improved environmental sustainability'
          ]
        }
      ]
    },

    // Skills and software
    skills: [
      'Landscape Design',
      'Sustainable Design',
      'Urban Planning',
      'Plant Selection',
      'Environmental Integration',
      'Site Analysis'
    ],
    software: [
      'AutoCAD',
      'SketchUp',
      'Revit',
      'Landscape Design Software',
      'GIS Software',
      'Adobe Creative Suite'
    ],

    // Contact information
    contact: {
      email: 'jakkaporn@sv-arch.com',
      phone: '+66-XX-XXX-XXXX',
      office: 'Bangkok Office',
      socialMedia: {
        linkedin: 'https://linkedin.com/in/jakkaporn-sutthiragsa'
      }
    },

    // Additional information
    languages: ['Thai', 'English'],
    awards: [
      'Sustainable Design Award 2023',
      'Landscape Innovation Recognition 2022'
    ],
    publications: [],

    // Project involvement
    projects: [
      {
        projectId: 'urban-green-space-development',
        projectName: 'Urban Green Space Development',
        role: 'Landscape Architect',
        startDate: '2023-08-01',
        isActive: true,
        responsibilities: [
          'Landscape design development',
          'Sustainable plant selection',
          'Environmental integration',
          'Urban planning coordination'
        ]
      }
    ],

    // SEO and metadata
    metaTitle: 'Jakkaporn Sutthiragsa - Landscape Architect | SV Architects',
    metaDescription: 'Jakkaporn Sutthiragsa, Landscape Architect at SV Architects, specializes in sustainable landscape design with 4+ years of experience.',
    keywords: [
      'landscape architect',
      'sustainable design',
      'urban planning',
      'environmental design',
      'SV Architects'
    ],

    // Timestamps
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    publishedAt: '2024-01-01T00:00:00Z'
  },

  // ALONGKORN SIRNAMKHAM - Structural Engineer
  {
    // Basic identification
    id: 'alongkorn-sirnamkham-015',
    slug: 'alongkorn-sirnamkham',
    firstName: 'Alongkorn',
    lastName: 'Sirnamkham',
    fullName: 'Alongkorn Sirnamkham',

    // Professional information
    position: 'architect',
    title: 'Structural Engineer',
    department: 'Engineering',

    // Personal information
    image: '/images/team/alongkorn-sirnamkham.jpg',
    bio: 'Alongkorn Sirnamkham serves as Structural Engineer at SV Architects and Associates Ltd., specializing in structural design and analysis for complex architectural projects. With expertise in modern construction techniques, he ensures structural integrity and safety.',
    shortBio: 'Structural Engineer specializing in structural design and analysis for complex architectural projects, ensuring structural integrity and safety.',

    // Education and qualifications
    education: [
      {
        degree: 'Master of Civil Engineering',
        institution: 'King Mongkut\'s University of Technology Thonburi',
        location: 'Bangkok, Thailand',
        level: 'master',
        field: 'Civil Engineering'
      }
    ],
    certifications: [
      {
        type: 'peng',
        name: 'Professional Engineer (PE)',
        issuingBody: 'Engineering Institute of Thailand',
        issueDate: '2021-01-01',
        status: 'active'
      }
    ],

    // Professional experience
    experience: {
      summary: 'Over 6 years of experience in structural engineering, specializing in complex structural design and analysis for architectural projects.',
      years: 6,
      areas: [
        'commercial-architecture',
        'office-spaces',
        'mixed-use-developments',
        'sustainable-design'
      ],
      workHistory: [
        {
          position: 'Structural Engineer',
          company: 'SV Architects and Associates Ltd.',
          location: 'Bangkok, Thailand',
          startDate: '2020-01-01',
          isCurrent: true,
          description: 'Designing and analyzing structural systems for architectural projects, ensuring safety, efficiency, and compliance with building codes.',
          achievements: [
            'Designed 25+ structural systems',
            'Specialized in seismic design',
            'Improved structural efficiency by 20%'
          ]
        }
      ]
    },

    // Skills and software
    skills: [
      'Structural Design',
      'Structural Analysis',
      'Seismic Design',
      'Construction Engineering',
      'Building Codes',
      'Material Science'
    ],
    software: [
      'ETABS',
      'SAP2000',
      'STAAD.Pro',
      'AutoCAD',
      'Revit',
      'Tekla Structures'
    ],

    // Contact information
    contact: {
      email: 'alongkorn@sv-arch.com',
      phone: '+66-XX-XXX-XXXX',
      office: 'Bangkok Office',
      socialMedia: {
        linkedin: 'https://linkedin.com/in/alongkorn-sirnamkham'
      }
    },

    // Additional information
    languages: ['Thai', 'English'],
    awards: [
      'Structural Engineering Excellence Award 2023',
      'Innovation in Design Award 2022'
    ],
    publications: [],

    // Project involvement
    projects: [
      {
        projectId: 'high-rise-office-tower',
        projectName: 'High-Rise Office Tower',
        role: 'Structural Engineer',
        startDate: '2023-07-01',
        isActive: true,
        responsibilities: [
          'Structural system design',
          'Load analysis and calculations',
          'Seismic design implementation',
          'Construction coordination'
        ]
      }
    ],

    // SEO and metadata
    metaTitle: 'Alongkorn Sirnamkham - Structural Engineer | SV Architects',
    metaDescription: 'Alongkorn Sirnamkham, Structural Engineer at SV Architects, specializes in structural design and analysis with 6+ years of experience.',
    keywords: [
      'structural engineer',
      'structural design',
      'structural analysis',
      'seismic design',
      'SV Architects'
    ],

    // Timestamps
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    publishedAt: '2024-01-01T00:00:00Z'
  },

  // LEENA NGASAKUL - Urban Planner
  {
    // Basic identification
    id: 'leena-ngasakul-016',
    slug: 'leena-ngasakul',
    firstName: 'Leena',
    lastName: 'Ngasakul',
    fullName: 'Leena Ngasakul',

    // Professional information
    position: 'architect',
    title: 'Urban Planner',
    department: 'Urban Planning',

    // Personal information
    image: '/images/team/leena-ngasakul.jpg',
    bio: 'Leena Ngasakul serves as Urban Planner at SV Architects and Associates Ltd., specializing in sustainable urban development and city planning. With expertise in urban design and community planning, she creates livable and sustainable urban environments.',
    shortBio: 'Urban Planner specializing in sustainable urban development and city planning, creating livable and sustainable urban environments.',

    // Education and qualifications
    education: [
      {
        degree: 'Master of Urban Planning',
        institution: 'Thammasat University',
        location: 'Bangkok, Thailand',
        level: 'master',
        field: 'Urban Planning'
      }
    ],
    certifications: [
      {
        type: 'other',
        name: 'Certified Urban Planner',
        issuingBody: 'Thai Urban Planning Association',
        issueDate: '2023-01-01',
        status: 'active'
      }
    ],

    // Professional experience
    experience: {
      summary: 'Over 3 years of experience in urban planning, specializing in sustainable development and community planning.',
      years: 3,
      areas: [
        'urban-planning',
        'sustainable-design',
        'mixed-use-developments',
        'commercial-architecture'
      ],
      workHistory: [
        {
          position: 'Urban Planner',
          company: 'SV Architects and Associates Ltd.',
          location: 'Bangkok, Thailand',
          startDate: '2023-01-01',
          isCurrent: true,
          description: 'Developing comprehensive urban planning solutions for sustainable city development and community planning projects.',
          achievements: [
            'Planned 10+ urban development projects',
            'Specialized in sustainable communities',
            'Improved urban livability metrics'
          ]
        }
      ]
    },

    // Skills and software
    skills: [
      'Urban Planning',
      'Sustainable Development',
      'Community Planning',
      'City Planning',
      'Environmental Planning',
      'Transportation Planning'
    ],
    software: [
      'GIS Software',
      'AutoCAD',
      'SketchUp',
      'Urban Planning Software',
      'Adobe Creative Suite',
      'Microsoft Office'
    ],

    // Contact information
    contact: {
      email: 'leena@sv-arch.com',
      phone: '+66-XX-XXX-XXXX',
      office: 'Bangkok Office',
      socialMedia: {
        linkedin: 'https://linkedin.com/in/leena-ngasakul'
      }
    },

    // Additional information
    languages: ['Thai', 'English'],
    awards: [
      'Urban Planning Innovation Award 2023',
      'Sustainable Development Recognition 2022'
    ],
    publications: [],

    // Project involvement
    projects: [
      {
        projectId: 'sustainable-community-development',
        projectName: 'Sustainable Community Development',
        role: 'Urban Planner',
        startDate: '2023-10-01',
        isActive: true,
        responsibilities: [
          'Urban planning development',
          'Community engagement',
          'Sustainable design integration',
          'Transportation planning'
        ]
      }
    ],

    // SEO and metadata
    metaTitle: 'Leena Ngasakul - Urban Planner | SV Architects',
    metaDescription: 'Leena Ngasakul, Urban Planner at SV Architects, specializes in sustainable urban development with 3+ years of experience.',
    keywords: [
      'urban planner',
      'sustainable development',
      'community planning',
      'city planning',
      'SV Architects'
    ],

    // Timestamps
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    publishedAt: '2024-01-01T00:00:00Z'
  },

  // PUNCHARAT BANNAPANYA - MEP Engineer
  {
    // Basic identification
    id: 'puncharat-bannapanya-017',
    slug: 'puncharat-bannapanya',
    firstName: 'Puncharat',
    lastName: 'Bannapanya',
    fullName: 'Puncharat Bannapanya',

    // Professional information
    position: 'architect',
    title: 'MEP Engineer',
    department: 'Engineering',

    // Personal information
    image: '/images/team/puncharat-bannapanya.jpg',
    bio: 'Puncharat Bannapanya serves as MEP Engineer at SV Architects and Associates Ltd., specializing in mechanical, electrical, and plumbing systems for architectural projects. With expertise in building systems integration, he ensures efficient and sustainable building operations.',
    shortBio: 'MEP Engineer specializing in mechanical, electrical, and plumbing systems for architectural projects, ensuring efficient and sustainable building operations.',

    // Education and qualifications
    education: [
      {
        degree: 'Bachelor of Mechanical Engineering',
        institution: 'King Mongkut\'s Institute of Technology Ladkrabang',
        location: 'Bangkok, Thailand',
        level: 'bachelor',
        field: 'Mechanical Engineering'
      }
    ],
    certifications: [
      {
        type: 'peng',
        name: 'Certified MEP Engineer',
        issuingBody: 'Thai MEP Engineers Association',
        issueDate: '2020-01-01',
        status: 'active'
      }
    ],

    // Professional experience
    experience: {
      summary: 'Over 5 years of experience in MEP engineering, specializing in building systems design and integration for architectural projects.',
      years: 5,
      areas: [
        'commercial-architecture',
        'office-spaces',
        'mixed-use-developments',
        'sustainable-design'
      ],
      workHistory: [
        {
          position: 'MEP Engineer',
          company: 'SV Architects and Associates Ltd.',
          location: 'Bangkok, Thailand',
          startDate: '2021-01-01',
          isCurrent: true,
          description: 'Designing and coordinating mechanical, electrical, and plumbing systems for architectural projects, focusing on energy efficiency and sustainability.',
          achievements: [
            'Designed 30+ MEP systems',
            'Improved energy efficiency by 25%',
            'Specialized in sustainable systems'
          ]
        }
      ]
    },

    // Skills and software
    skills: [
      'MEP Design',
      'Building Systems',
      'Energy Efficiency',
      'HVAC Design',
      'Electrical Systems',
      'Plumbing Systems'
    ],
    software: [
      'AutoCAD MEP',
      'Revit MEP',
      'HVAC Software',
      'Electrical Design Software',
      'Plumbing Design Software',
      'Energy Analysis Software'
    ],

    // Contact information
    contact: {
      email: 'puncharat@sv-arch.com',
      phone: '+66-XX-XXX-XXXX',
      office: 'Bangkok Office',
      socialMedia: {
        linkedin: 'https://linkedin.com/in/puncharat-bannapanya'
      }
    },

    // Additional information
    languages: ['Thai', 'English'],
    awards: [
      'MEP Engineering Excellence Award 2023',
      'Energy Efficiency Innovation Award 2022'
    ],
    publications: [],

    // Project involvement
    projects: [
      {
        projectId: 'green-building-mep-systems',
        projectName: 'Green Building MEP Systems',
        role: 'MEP Engineer',
        startDate: '2023-11-01',
        isActive: true,
        responsibilities: [
          'MEP system design',
          'Energy efficiency optimization',
          'Sustainable system integration',
          'Building performance analysis'
        ]
      }
    ],

    // SEO and metadata
    metaTitle: 'Puncharat Bannapanya - MEP Engineer | SV Architects',
    metaDescription: 'Puncharat Bannapanya, MEP Engineer at SV Architects, specializes in building systems design with 5+ years of experience.',
    keywords: [
      'MEP engineer',
      'building systems',
      'energy efficiency',
      'HVAC design',
      'SV Architects'
    ],

    // Timestamps
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    publishedAt: '2024-01-01T00:00:00Z'
  },

  // KRIANGDESK WACHIRAWANIT - BIM Specialist
  {
    // Basic identification
    id: 'kriangdesk-wachirawanit-018',
    slug: 'kriangdesk-wachirawanit',
    firstName: 'Kriangdesk',
    lastName: 'Wachirawanit',
    fullName: 'Kriangdesk Wachirawanit',

    // Professional information
    position: 'architect',
    title: 'BIM Specialist',
    department: 'Technology',

    // Personal information
    image: '/images/team/kriangdesk-wachirawanit.jpg',
    bio: 'Kriangdesk Wachirawanit serves as BIM Specialist at SV Architects and Associates Ltd., specializing in Building Information Modeling and digital construction technologies. With expertise in BIM coordination and implementation, he enhances project efficiency and collaboration.',
    shortBio: 'BIM Specialist specializing in Building Information Modeling and digital construction technologies, enhancing project efficiency and collaboration.',

    // Education and qualifications
    education: [
      {
        degree: 'Bachelor of Computer Engineering',
        institution: 'King Mongkut\'s University of Technology Thonburi',
        location: 'Bangkok, Thailand',
        level: 'bachelor',
        field: 'Computer Engineering'
      }
    ],
    certifications: [
      {
        type: 'other',
        name: 'Certified BIM Specialist',
        issuingBody: 'Thai BIM Association',
        issueDate: '2022-01-01',
        status: 'active'
      }
    ],

    // Professional experience
    experience: {
      summary: 'Over 4 years of experience in BIM technology, specializing in digital construction and project coordination.',
      years: 4,
      areas: [
        'commercial-architecture',
        'office-spaces',
        'mixed-use-developments',
        'sustainable-design'
      ],
      workHistory: [
        {
          position: 'BIM Specialist',
          company: 'SV Architects and Associates Ltd.',
          location: 'Bangkok, Thailand',
          startDate: '2022-01-01',
          isCurrent: true,
          description: 'Implementing and managing BIM processes for architectural projects, coordinating digital workflows and enhancing project collaboration.',
          achievements: [
            'Implemented BIM for 20+ projects',
            'Improved project coordination by 35%',
            'Specialized in digital workflows'
          ]
        }
      ]
    },

    // Skills and software
    skills: [
      'BIM Coordination',
      'Digital Construction',
      'Project Coordination',
      'Technology Integration',
      'Workflow Optimization',
      'Data Management'
    ],
    software: [
      'Revit',
      'Navisworks',
      'BIM 360',
      'AutoCAD',
      'Tekla Structures',
      'BIM Management Software'
    ],

    // Contact information
    contact: {
      email: 'kriangdesk@sv-arch.com',
      phone: '+66-XX-XXX-XXXX',
      office: 'Bangkok Office',
      socialMedia: {
        linkedin: 'https://linkedin.com/in/kriangdesk-wachirawanit'
      }
    },

    // Additional information
    languages: ['Thai', 'English'],
    awards: [
      'BIM Innovation Award 2023',
      'Digital Construction Excellence Award 2022'
    ],
    publications: [],

    // Project involvement
    projects: [
      {
        projectId: 'digital-construction-implementation',
        projectName: 'Digital Construction Implementation',
        role: 'BIM Specialist',
        startDate: '2023-12-01',
        isActive: true,
        responsibilities: [
          'BIM process implementation',
          'Digital workflow coordination',
          'Technology integration',
          'Project data management'
        ]
      }
    ],

    // SEO and metadata
    metaTitle: 'Kriangdesk Wachirawanit - BIM Specialist | SV Architects',
    metaDescription: 'Kriangdesk Wachirawanit, BIM Specialist at SV Architects, specializes in digital construction technologies with 4+ years of experience.',
    keywords: [
      'BIM specialist',
      'digital construction',
      'project coordination',
      'technology integration',
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
export function getTeamMemberBySlug(slug: string): TeamMember | undefined {
  const member = teamMembers.find(m => m.slug === slug);
  
  if (member && !validateTeamMember(member)) {
    console.error(`Invalid team member data for slug: ${slug}`);
    return undefined;
  }
  
  return member;
}

/**
 * Get team member by ID
 * Finds and returns a team member based on their unique ID
 * 
 * @param id - Unique identifier of the team member
 * @returns TeamMember object or undefined if not found
 */
export const getTeamMemberById = (id: string): TeamMember | undefined => {
  // Find team member matching the provided ID
  return teamMembers.find(member => member.id === id);
};

/**
 * Get all team member slugs
 * Returns an array of all team member slugs for static site generation
 * 
 * @returns Array of all team member slugs
 */
export const getAllTeamMemberSlugs = (): string[] => {
  // Map team members array to array of slugs only
  return teamMembers.map(member => member.slug);
};

/**
 * Get all team members
 * Returns all team members (useful for listings and statistics)
 * 
 * @returns Array of all team members
 */
export const getAllTeamMembers = (): TeamMember[] => {
  // Return all team members
  return teamMembers;
};

/**
 * Get team members by position
 * Filters team members by their position
 * 
 * @param position - Position to filter by
 * @returns Array of team members with the specified position
 */
export const getTeamMembersByPosition = (position: TeamMemberPosition): TeamMember[] => {
  // Filter team members by position
  return teamMembers.filter(member => member.position === position);
};

/**
 * Get team members by expertise area
 * Filters team members by their expertise areas
 * 
 * @param expertise - Expertise area to filter by
 * @returns Array of team members with the specified expertise
 */
export const getTeamMembersByExpertise = (expertise: ExpertiseArea): TeamMember[] => {
  // Filter team members by expertise area
  return teamMembers.filter(member => 
    member.experience.areas.includes(expertise)
  );
};

/**
 * Get team members by department
 * Filters team members by their department
 * 
 * @param department - Department to filter by
 * @returns Array of team members in the specified department
 */
export const getTeamMembersByDepartment = (department: string): TeamMember[] => {
  // Filter team members by department
  return teamMembers.filter(member => member.department === department);
};

/**
 * Search team members
 * Searches team members by name, position, or expertise
 * 
 * @param query - Search query string
 * @returns Array of matching team members
 */
export const searchTeamMembers = (query: string): TeamMember[] => {
  // Convert query to lowercase for case-insensitive search
  const lowercaseQuery = query.toLowerCase();
  
  // Filter team members based on search criteria
  return teamMembers.filter(member => 
    // Search in full name
    member.fullName.toLowerCase().includes(lowercaseQuery) ||
    // Search in position/title
    member.title.toLowerCase().includes(lowercaseQuery) ||
    // Search in bio
    member.bio.toLowerCase().includes(lowercaseQuery) ||
    // Search in skills
    member.skills.some(skill => skill.toLowerCase().includes(lowercaseQuery)) ||
    // Search in expertise areas
    member.experience.areas.some(area => area.toLowerCase().includes(lowercaseQuery))
  );
};

/**
 * Get team statistics
 * Calculates and returns overall team statistics
 * 
 * @returns TeamStatistics object with calculated statistics
 */
export const getTeamStatistics = () => {
  // Calculate total members
  const totalMembers = teamMembers.length;
  
  // Calculate average experience
  const totalExperience = teamMembers.reduce((sum, member) => sum + member.experience.years, 0);
  const averageExperience = totalMembers > 0 ? totalExperience / totalMembers : 0;
  
  // Calculate position breakdown
  const positionBreakdown = teamMembers.reduce((acc, member) => {
    const position = member.position;
    acc[position] = (acc[position] || 0) + 1;
    return acc;
  }, {} as Record<TeamMemberPosition, number>);
  
  // Calculate expertise breakdown
  const expertiseBreakdown = teamMembers.reduce((acc, member) => {
    member.experience.areas.forEach(area => {
      acc[area] = (acc[area] || 0) + 1;
    });
    return acc;
  }, {} as Record<ExpertiseArea, number>);
  
  // Calculate education breakdown
  const educationBreakdown = teamMembers.reduce((acc, member) => {
    member.education.forEach(edu => {
      const level = edu.level;
      acc[level] = (acc[level] || 0) + 1;
    });
    return acc;
  }, {} as Record<EducationLevel, number>);
  
  // Calculate certification breakdown
  const certificationBreakdown = teamMembers.reduce((acc, member) => {
    member.certifications.forEach(cert => {
      const type = cert.type;
      acc[type] = (acc[type] || 0) + 1;
    });
    return acc;
  }, {} as Record<ProfessionalCertification, number>);
  
  // Return statistics object
  return {
    totalMembers,
    averageExperience: Math.round(averageExperience * 10) / 10, // Round to 1 decimal place
    positionBreakdown: Object.entries(positionBreakdown).map(([position, count]) => ({
      position: position as TeamMemberPosition,
      count
    })),
    expertiseBreakdown: Object.entries(expertiseBreakdown).map(([area, count]) => ({
      area: area as ExpertiseArea,
      count
    })),
    educationBreakdown: Object.entries(educationBreakdown).map(([level, count]) => ({
      level: level as EducationLevel,
      count
    })),
    certificationBreakdown: Object.entries(certificationBreakdown).map(([type, count]) => ({
      type: type as ProfessionalCertification,
      count
    }))
  };
};

/**
 * Get leadership team
 * Returns team members in leadership positions
 * 
 * @returns Array of leadership team members
 */
export const getLeadershipTeam = (): TeamMember[] => {
  // Define leadership positions
  const leadershipPositions: TeamMemberPosition[] = [
    'principal',
    'head-of-architect',
    'design-manager',
    'technical-manager'
  ];
  
  // Filter team members by leadership positions
  return teamMembers.filter(member => 
    leadershipPositions.includes(member.position)
  );
};

/**
 * Get team members by experience range
 * Filters team members by years of experience
 * 
 * @param minYears - Minimum years of experience
 * @param maxYears - Maximum years of experience (optional)
 * @returns Array of team members within the experience range
 */
export const getTeamMembersByExperience = (minYears: number, maxYears?: number): TeamMember[] => {
  // Filter team members by experience range
  return teamMembers.filter(member => {
    const years = member.experience.years;
    if (maxYears !== undefined) {
      return years >= minYears && years <= maxYears;
    }
    return years >= minYears;
  });
};
