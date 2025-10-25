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
  // ========== FULL DETAIL PROJECTS ==========
  
  {
    id: 'centerpoint-siamsquare',
    name: 'Centerpoint Siamsquare',
    category: 'commercial',
    displayMode: 'full',
    
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
        url: getImagePath('/images/projects/centerpoint-siamsquare-commercial/centerpoint-siamsquare-2nd-floor-1.jpg'),
        alt: 'Centerpoint Siamsquare exterior view',
        caption: 'Main entrance and public plaza'
      },
      {
        url: getImagePath('/images/projects/centerpoint-siamsquare-commercial/centerpoint-siamsquare-2nd-floor-2.jpg'),
        alt: 'Centerpoint Siamsquare retail space',
        caption: 'Modern retail environment with natural lighting'
      },
      {
        url: getImagePath('/images/projects/centerpoint-siamsquare-commercial/centerpoint-siamsquare-4th-floor.jpg'),
        alt: 'Centerpoint Siamsquare office tower at night',
        caption: 'Office tower illuminated at night'
      },
      {
        url: getImagePath('/images/projects/centerpoint-siamsquare-commercial/centerpoint-siamsquare-bts-lower.png'),
        alt: 'Centerpoint Siamsquare green spaces',
        caption: 'Public plaza with landscaped green spaces'
      }
    ],
    
    metaDescription: 'Centerpoint Siamsquare - A landmark 120,000 sqm commercial development in Bangkok featuring integrated retail, office, and entertainment spaces with sustainable design.',
    keywords: ['commercial development', 'Bangkok', 'retail', 'office space', 'mixed-use', 'sustainable design', 'LEED certified']
  },

  {
    id: 'siamese-rama9',
    name: 'Siamese Rama 9',
    category: 'residential',
    displayMode: 'full',
    
    tagline: 'AWARD-WINNING RESIDENTIAL DEVELOPMENT',
    description: 'An Award-winning residential development encompassing cutting-edge technology for a superior and premium lifestyle. This iconic mixed-use development has received multiple international awards for its innovative design and sustainable features.',
    
    location: 'Bangkok, Thailand',
    year: 2021,
    status: 'completed',
    size: '45,000 sqm',
    client: 'Siamese Development Co.',
    type: 'High-Rise Residential',
    
    features: [
      'Award-winning residential development',
      'Cutting-edge technology integration',
      'Superior and premium lifestyle',
      'Contemporary high-rise design',
      'Comprehensive amenities',
      'Modern urban living spaces',
      'Rooftop facilities',
      'Underground parking'
    ],
    
    sustainability: {
      leed: true,
      greenBuilding: true,
      energyEfficient: true,
      additionalFeatures: ['Solar panels', 'Rainwater harvesting', 'Green roof system']
    },
    
    images: [
      {
        url: getImagePath('/images/projects/siamese-rama9-award-winning/siamese-rama9-view1.jpg'),
        alt: 'Siamese Rama 9 towers',
        caption: 'Twin towers with distinctive architecture'
      },
      {
        url: getImagePath('/images/projects/siamese-rama9-award-winning/siamese-rama9-view2.jpg'),
        alt: 'Siamese Rama 9 retail area',
        caption: 'Modern retail podium'
      },
      {
        url: getImagePath('/images/projects/siamese-rama9-award-winning/siamese-rama9-view3.jpg'),
        alt: 'Siamese Rama 9 sky garden',
        caption: 'Rooftop sky garden with city views'
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
    
    metaDescription: 'Siamese Rama 9 - Award-winning residential development in Bangkok featuring cutting-edge technology and premium lifestyle amenities.',
    keywords: ['residential', 'Bangkok', 'award-winning', 'high-rise', 'sustainable design', 'LEED', 'premium lifestyle']
  },

  {
    id: 'baan-huahin',
    name: 'Baan Huahin',
    category: 'residential',
    displayMode: 'full',
    
    tagline: 'LITTLE HOUSE IN FOREST',
    description: 'Little house in forest - A luxury villa designed to harmonize with nature, featuring sustainable design principles and forest integration. This project represents the perfect blend of modern luxury and environmental consciousness.',
    
    location: 'Hua Hin, Thailand',
    year: 2019,
    status: 'completed',
    size: '2,500 sqm',
    client: 'Private Client',
    type: 'Luxury Villa',
    
    features: [
      'Forest integration design',
      'Sustainable architecture',
      'Natural material usage',
      'Privacy and seclusion',
      'Luxury villa amenities',
      'Environmental harmony',
      'Modern forest living'
    ],
    
    sustainability: {
      leed: true,
      greenBuilding: true,
      energyEfficient: true
    },
    
    images: [
      {
        url: getImagePath('/images/projects/baan-huahin-residential/baan-huahin-1.jpg'),
        alt: 'Baan Huahin exterior view',
        caption: 'Villa integrated with forest environment'
      },
      {
        url: getImagePath('/images/projects/baan-huahin-residential/baan-huahin-2.jpg'),
        alt: 'Baan Huahin living space',
        caption: 'Modern living space with natural materials'
      }
    ],
    
    metaDescription: 'Baan Huahin - A luxury villa in Hua Hin designed to harmonize with nature, featuring sustainable design and forest integration.',
    keywords: ['luxury villa', 'Hua Hin', 'forest integration', 'sustainable design', 'natural materials', 'privacy']
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
        url: getImagePath('/images/projects/u-tapao-airport-new-terminal/u-tapao-airport-new-terminal.jpg'),
        alt: 'U-Tapao Airport Terminal exterior',
        caption: 'Modern terminal facade with distinctive roof design'
      }
    ],
    
    metaDescription: 'U-Tapao Airport New Passenger Terminal - A next-generation aviation facility designed to serve 15 million passengers annually as part of Thailand\'s Eastern Economic Corridor.',
    keywords: ['aviation', 'airport', 'U-Tapao', 'EEC', 'passenger terminal', 'infrastructure', 'Thailand']
  },

  {
    id: 'don-mueang-airport-terminal3',
    name: 'Don Mueang International Airport Terminal 3',
    category: 'aviation',
    displayMode: 'full',
    
    tagline: 'INTERNATIONAL AVIATION HUB',
    description: 'International aviation hub bridging heritage and embracing the future. Modern terminal expansion featuring advanced passenger processing systems and sustainable design principles.',
    
    location: 'Bangkok, Thailand',
    year: 2023,
    status: 'ongoing',
    size: '160,000 sqm',
    client: 'AOT',
    type: 'Airport Terminal',
    
    features: [
      'Advanced passenger processing systems',
      'International departure facilities',
      'Sustainable terminal design',
      'Modern security infrastructure',
      'Enhanced passenger experience',
      'Heritage integration design'
    ],
    
    sustainability: {
      leed: true,
      greenBuilding: true,
      energyEfficient: true
    },
    
    images: [
      {
        url: getImagePath('/images/projects/don-mueang-international-airport-terminal-3-aviation/IMG_2621.jpeg'),
        alt: 'Don Mueang Airport Terminal 3 exterior',
        caption: 'Modern terminal expansion'
      },
      {
        url: getImagePath('/images/projects/don-mueang-international-airport-terminal-3-aviation/IMG_2622.jpeg'),
        alt: 'Don Mueang Airport Terminal 3 interior',
        caption: 'Spacious departure hall'
      },
      {
        url: getImagePath('/images/projects/don-mueang-international-airport-terminal-3-aviation/IMG_2623.jpeg'),
        alt: 'Don Mueang Airport Terminal 3 concourse',
        caption: 'Retail and dining areas'
      },
      {
        url: getImagePath('/images/projects/don-mueang-international-airport-terminal-3-aviation/IMG_2624.jpeg'),
        alt: 'Don Mueang Airport Terminal 3 aerial view',
        caption: 'Aerial view of terminal complex'
      },
      {
        url: getImagePath('/images/projects/don-mueang-international-airport-terminal-3-aviation/IMG_2625.jpeg'),
        alt: 'Don Mueang Airport Terminal 3 gate area',
        caption: 'Passenger boarding gates'
      }
    ],
    
    metaDescription: 'Don Mueang International Airport Terminal 3 - Modern terminal expansion featuring advanced passenger processing systems and sustainable design.',
    keywords: ['aviation', 'airport', 'Don Mueang', 'terminal', 'Bangkok', 'passenger processing', 'sustainable design']
  },

  {
    id: 'chaopraya-mahanatee-hotel',
    name: 'Chaopraya Mahanatee Hotel',
    category: 'hospitality',
    displayMode: 'full',
    
    tagline: 'RIVERSIDE HOSPITALITY EXCELLENCE',
    description: 'Luxury riverside hotel offering unparalleled views of the Chao Phraya River. This hospitality project combines traditional Thai architecture with modern amenities and sustainable design principles.',
    
    location: 'Bangkok, Thailand',
    year: 2022,
    status: 'completed',
    size: '25,000 sqm',
    client: 'Mahanatee Group',
    type: 'Luxury Hotel',
    
    features: [
      'Riverside location with panoramic views',
      'Luxury accommodation facilities',
      'Traditional Thai architectural elements',
      'Modern hospitality amenities',
      'Sustainable design integration',
      'Cultural heritage preservation'
    ],
    
    sustainability: {
      greenBuilding: true,
      energyEfficient: true,
      additionalFeatures: ['Water conservation', 'Local material usage', 'Energy-efficient systems']
    },
    
    images: [
      {
        url: getImagePath('/images/projects/chaopraya-mahanatee-hotel-hospitality/chaopraya-mahanatee-hotel-night.jpg'),
        alt: 'Chaopraya Mahanatee Hotel exterior',
        caption: 'Riverside hotel facade'
      },
      {
        url: getImagePath('/images/projects/chaopraya-mahanatee-hotel-hospitality/chaopraya-mahanatee-hotel-pool.jpg'),
        alt: 'Chaopraya Mahanatee Hotel lobby',
        caption: 'Elegant lobby design'
      },
      {
        url: getImagePath('/images/projects/chaopraya-mahanatee-hotel-hospitality/chaopraya-mahanatee-hotel-river.jpg'),
        alt: 'Chaopraya Mahanatee Hotel room',
        caption: 'Luxury accommodation with river views'
      },
      {
        url: getImagePath('/images/projects/chaopraya-mahanatee-hotel-hospitality/chaopraya-mahanatee-hotel-view10.jpg'),
        alt: 'Chaopraya Mahanatee Hotel restaurant',
        caption: 'Riverside dining experience'
      }
    ],
    
    metaDescription: 'Chaopraya Mahanatee Hotel - Luxury riverside hotel in Bangkok featuring traditional Thai architecture and modern amenities.',
    keywords: ['hospitality', 'hotel', 'Chao Phraya', 'riverside', 'luxury', 'Bangkok', 'traditional architecture']
  },

  {
    id: 'bunditpatanasilpa-institute-auditorium',
    name: 'Bunditpatanasilpa Institute Auditorium',
    category: 'institutional',
    displayMode: 'full',
    
    tagline: 'CULTURAL INSTITUTION EXCELLENCE',
    description: 'State-of-the-art auditorium facility for the Bunditpatanasilpa Institute, designed to support cultural and educational activities with modern acoustics and flexible performance spaces.',
    
    location: 'Bangkok, Thailand',
    year: 2021,
    status: 'completed',
    size: '8,500 sqm',
    client: 'Bunditpatanasilpa Institute',
    type: 'Cultural Institution',
    
    features: [
      'State-of-the-art acoustics',
      'Flexible performance spaces',
      'Modern cultural facilities',
      'Educational support spaces',
      'Accessibility compliance',
      'Cultural heritage integration'
    ],
    
    sustainability: {
      greenBuilding: true,
      energyEfficient: true
    },
    
    images: [
      {
        url: getImagePath('/images/projects/bunditpatanasilpa-auditorium/bunditpatanasilpa-auditorium.jpg'),
        alt: 'Bunditpatanasilpa Institute Auditorium exterior',
        caption: 'Modern cultural institution facade'
      }
    ],
    
    metaDescription: 'Bunditpatanasilpa Institute Auditorium - State-of-the-art cultural facility with modern acoustics and flexible performance spaces.',
    keywords: ['cultural institution', 'auditorium', 'acoustics', 'performance', 'education', 'Bangkok']
  },

  {
    id: 'somdech-phra-nangchao-sirikit-hospital',
    name: 'Somdech Phra Nangchao Sirikit Hospital',
    category: 'healthcare',
    displayMode: 'full',
    
    tagline: 'MODERN HEALTHCARE FACILITY',
    description: 'Comprehensive healthcare facility designed to provide modern medical services with patient-centered design and advanced medical technology integration.',
    
    location: 'Bangkok, Thailand',
    year: 2023,
    status: 'completed',
    size: '45,000 sqm',
    client: 'Ministry of Public Health',
    type: 'General Hospital',
    
    features: [
      'Patient-centered design',
      'Advanced medical technology',
      'Comprehensive healthcare services',
      'Modern medical facilities',
      'Accessibility compliance',
      'Healing environment design'
    ],
    
    sustainability: {
      greenBuilding: true,
      energyEfficient: true,
      additionalFeatures: ['Natural lighting', 'Air quality systems', 'Sustainable materials']
    },
    
    images: [
      {
        url: getImagePath('/images/projects/phra-nangchao-sirikit-hospital/phra-nangchao-sirikit-hospital.jpg'),
        alt: 'Somdech Phra Nangchao Sirikit Hospital exterior',
        caption: 'Modern healthcare facility'
      }
    ],
    
    metaDescription: 'Somdech Phra Nangchao Sirikit Hospital - Modern healthcare facility with patient-centered design and advanced medical technology.',
    keywords: ['healthcare', 'hospital', 'medical facility', 'patient care', 'Bangkok', 'modern medicine']
  },

  // ========== GALLERY-ONLY PROJECTS ==========
  
  {
    id: 'jet-villa-residence',
    name: 'Jet Villa Residence',
    category: 'residential',
    displayMode: 'gallery-only',
    
    location: 'Bangkok, Thailand',
    year: 2023,
    
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
        alt: 'Jet Villa Residence living spaces'
      },
      {
        url: getImagePath('/images/projects/jet-villa-residence-residential/jet-villa-view6.jpg'),
        alt: 'Jet Villa Residence architectural details'
      },
      {
        url: getImagePath('/images/projects/jet-villa-residence-residential/jet-villa-view7.jpg'),
        alt: 'Jet Villa Residence outdoor areas'
      },
      {
        url: getImagePath('/images/projects/jet-villa-residence-residential/jet-villa-view8.jpg'),
        alt: 'Jet Villa Residence modern design'
      },
      {
        url: getImagePath('/images/projects/jet-villa-residence-residential/jet-villa-view9.jpg'),
        alt: 'Jet Villa Residence landscape integration'
      },
      {
        url: getImagePath('/images/projects/jet-villa-residence-residential/jet-villa-view10.jpg'),
        alt: 'Jet Villa Residence complete view'
      }
    ]
  },

  {
    id: 'villa-perpetual',
    name: 'Villa Perpetual',
    category: 'residential',
    displayMode: 'gallery-only',
    
    location: 'Bangkok, Thailand',
    year: 2020,
    
    images: [
      {
        url: getImagePath('/images/projects/villa-perpetual-residential/Bird-eye-view-1-1.jpg'),
        alt: 'Villa Perpetual exterior'
      },
      {
        url: getImagePath('/images/projects/villa-perpetual-residential/Entrance-1.jpg'),
        alt: 'Villa Perpetual pool area'
      },
      {
        url: getImagePath('/images/projects/villa-perpetual-residential/Landscape-1.jpg'),
        alt: 'Villa Perpetual living space'
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
        url: getImagePath('/images/projects/innovation-center-interior-design/innovation-center-closeup.jpg'),
        alt: 'Innovation Center exterior'
      },
      {
        url: getImagePath('/images/projects/innovation-center-interior-design/innovation-center-hall.jpg'),
        alt: 'Innovation Center interior'
      },
      {
        url: getImagePath('/images/projects/innovation-center-interior-design/innovation-center-main.jpg'),
        alt: 'Innovation Center common area'
      },
      {
        url: getImagePath('/images/projects/innovation-center-interior-design/innovation-center-scene2.jpg'),
        alt: 'Innovation Center workspace'
      }
    ]
  },

  {
    id: 'hi-tech-sandbox',
    name: 'Hi-Tech Sandbox',
    category: 'institutional',
    displayMode: 'gallery-only',
    
    location: 'Bangkok, Thailand',
    year: 2023,
    
    images: [
      {
        url: getImagePath('/images/projects/hi-tech-sandbox-interior-design/hi-tech-sandbox-executive.jpg'),
        alt: 'Hi-Tech Sandbox exterior'
      },
      {
        url: getImagePath('/images/projects/hi-tech-sandbox-interior-design/hi-tech-sandbox-interior.jpg'),
        alt: 'Hi-Tech Sandbox interior'
      },
      {
        url: getImagePath('/images/projects/hi-tech-sandbox-interior-design/hi-tech-sandbox-main.jpg'),
        alt: 'Hi-Tech Sandbox workspace'
      },
      {
        url: getImagePath('/images/projects/hi-tech-sandbox-interior-design/hi-tech-sandbox-office.jpg'),
        alt: 'Hi-Tech Sandbox technology area'
      },
      {
        url: getImagePath('/images/projects/hi-tech-sandbox-interior-design/hi-tech-sandbox-training-room.jpg'),
        alt: 'Hi-Tech Sandbox training facilities'
      }
    ]
  },

  {
    id: 'hh-park-residence',
    name: 'HH Park Residence',
    category: 'residential',
    displayMode: 'gallery-only',
    
    location: 'Bangkok, Thailand',
    year: 2022,
    
    images: [
      {
        url: getImagePath('/images/projects/hh-park-residence-residential/hh-park-residence-1.jpg'),
        alt: 'HH Park Residence exterior'
      },
      {
        url: getImagePath('/images/projects/hh-park-residence-residential/hh-park-residence-2.jpg'),
        alt: 'HH Park Residence common area'
      },
      {
        url: getImagePath('/images/projects/hh-park-residence-residential/hh-park-residence-3.jpg'),
        alt: 'HH Park Residence garden'
      }
    ]
  },

  {
    id: 'phuket-condominium',
    name: 'Phuket Condominium',
    category: 'residential',
    displayMode: 'gallery-only',
    
    location: 'Phuket, Thailand',
    year: 2023,
    
    images: [
      {
        url: getImagePath('/images/projects/phuket-condominium-residential/phuket-condominium-1.jpg'),
        alt: 'Phuket Condominium exterior'
      },
      {
        url: getImagePath('/images/projects/phuket-condominium-residential/phuket-condominium-2.jpg'),
        alt: 'Phuket Condominium pool area'
      },
      {
        url: getImagePath('/images/projects/phuket-condominium-residential/phuket-condominium-3.jpg'),
        alt: 'Phuket Condominium beach view'
      }
    ]
  },

  {
    id: 'vivo-executive-apartment',
    name: 'Vivo Executive Apartment',
    category: 'residential',
    displayMode: 'gallery-only',
    
    location: 'Bangkok, Thailand',
    year: 2023,
    
    images: [
      {
        url: getImagePath('/images/projects/vivo-executive-apartment/vivo-executive-apartment-1.jpg'),
        alt: 'Vivo Executive Apartment exterior'
      },
      {
        url: getImagePath('/images/projects/vivo-executive-apartment/vivo-executive-apartment-2.jpg'),
        alt: 'Vivo Executive Apartment lobby'
      }
    ]
  },

  {
    id: 'zen-village',
    name: 'Zen Village',
    category: 'residential',
    displayMode: 'gallery-only',
    
    location: 'Bangkok, Thailand',
    year: 2022,
    
    images: [
      {
        url: getImagePath('/images/projects/zen-village-master-plan/zen-village-boat-station.jpg'),
        alt: 'Zen Village exterior'
      },
      {
        url: getImagePath('/images/projects/zen-village-master-plan/zen-village-boutique-square.jpg'),
        alt: 'Zen Village garden'
      },
      {
        url: getImagePath('/images/projects/zen-village-master-plan/zen-village-market.jpg'),
        alt: 'Zen Village common area'
      }
    ]
  },

  {
    id: 'eec-silicon-technology-park',
    name: 'EEC Silicon Technology Park',
    category: 'master-planning',
    displayMode: 'gallery-only',
    
    location: 'Eastern Economic Corridor, Thailand',
    year: 2024,
    
    images: [
      {
        url: getImagePath('/images/projects/eec-silicon-technology-park-master-planning/eec-silicon-tech-park-view1.jpg'),
        alt: 'EEC Silicon Technology Park master plan'
      },
      {
        url: getImagePath('/images/projects/eec-silicon-technology-park-master-planning/eec-silicon-tech-park-view2.jpg'),
        alt: 'EEC Silicon Technology Park facilities'
      },
      {
        url: getImagePath('/images/projects/eec-silicon-technology-park-master-planning/eec-silicon-tech-park-innovation-center.jpg'),
        alt: 'EEC Silicon Technology Park infrastructure'
      }
    ]
  },

  {
    id: 'geo-valley-apartment-master-plan',
    name: 'Geo Valley Apartment Master Plan',
    category: 'master-planning',
    displayMode: 'gallery-only',
    
    location: 'Bangkok, Thailand',
    year: 2023,
    
    images: [
      {
        url: getImagePath('/images/projects/geo-valley-apartment-master-plan/geo-valley-apartment-1.jpg'),
        alt: 'Geo Valley Apartment Master Plan overview'
      },
      {
        url: getImagePath('/images/projects/geo-valley-apartment-master-plan/geo-valley-apartment-2.jpg'),
        alt: 'Geo Valley Apartment Master Plan layout'
      }
    ]
  },

  {
    id: 'mahachai-airport-luxe-city-master-plan',
    name: 'Mahachai Airport Luxe City Master Plan',
    category: 'master-planning',
    displayMode: 'gallery-only',
    
    location: 'Samut Sakhon, Thailand',
    year: 2024,
    
    images: [
      {
        url: getImagePath('/images/projects/mahachai-airport-luxe-city-master-planning/mahachai-airport-luxe-city.jpg'),
        alt: 'Mahachai Airport Luxe City Master Plan overview'
      }
    ]
  },

  {
    id: 'maintenance-repair-operation-u-tapao-airport',
    name: 'Maintenance Repair Operation U-Tapao Airport',
    category: 'aviation',
    displayMode: 'gallery-only',
    
    location: 'Rayong, Thailand',
    year: 2023,
    
    images: [
      {
        url: getImagePath('/images/projects/maintenance-repair-operation-u-tapao-airport-aviation/maintenance-repair-operation-u-tapao-1.jpg'),
        alt: 'Maintenance Repair Operation U-Tapao Airport facility'
      },
      {
        url: getImagePath('/images/projects/maintenance-repair-operation-u-tapao-airport-aviation/maintenance-repair-operation-u-tapao-2.jpg'),
        alt: 'Maintenance Repair Operation U-Tapao Airport hangar'
      },
      {
        url: getImagePath('/images/projects/maintenance-repair-operation-u-tapao-airport-aviation/maintenance-repair-operation-u-tapao-3.jpg'),
        alt: 'Maintenance Repair Operation U-Tapao Airport workshop'
      }
    ]
  },

  {
    id: 'service-apartment-selangor-malaysia',
    name: 'Service Apartment Selangor Malaysia',
    category: 'residential',
    displayMode: 'gallery-only',
    
    location: 'Selangor, Malaysia',
    year: 2023,
    
    images: [
      {
        url: getImagePath('/images/projects/service-apartment-selangor-malaysia/service-apartment-selangor-1.jpg'),
        alt: 'Service Apartment Selangor Malaysia exterior'
      },
      {
        url: getImagePath('/images/projects/service-apartment-selangor-malaysia/service-apartment-selangor-2.jpg'),
        alt: 'Service Apartment Selangor Malaysia lobby'
      }
    ]
  },

  {
    id: 'sukhumvit-hills',
    name: 'Sukhumvit Hills',
    category: 'mixed-use',
    displayMode: 'gallery-only',
    
    location: 'Bangkok, Thailand',
    year: 2022,
    
    images: [
      {
        url: getImagePath('/images/projects/sukhumvit-hills-mixed-use/sukhumvit-hills-detailed.png'),
        alt: 'Sukhumvit Hills exterior'
      },
      {
        url: getImagePath('/images/projects/sukhumvit-hills-mixed-use/sukhumvit-hills-main.png'),
        alt: 'Sukhumvit Hills retail area'
      }
    ]
  },

  {
    id: 'transit-oriented-development-tod',
    name: 'Transit-Oriented Development TOD',
    category: 'master-planning',
    displayMode: 'gallery-only',
    
    location: 'Bangkok, Thailand',
    year: 2024,
    
    images: [
      {
        url: getImagePath('/images/projects/transit-oriented-development-tod/tod-hnedu.jpg'),
        alt: 'Transit-Oriented Development TOD master plan'
      },
      {
        url: getImagePath('/images/projects/transit-oriented-development-tod/tod-st-plaza.jpg'),
        alt: 'Transit-Oriented Development TOD layout'
      },
      {
        url: getImagePath('/images/projects/transit-oriented-development-tod/tod-walk.jpg'),
        alt: 'Transit-Oriented Development TOD facilities'
      }
    ]
  },

  // ========== INTERIOR DESIGN PROJECTS ==========
  
  {
    id: 'phuket-condominium-interior-design',
    name: 'Phuket Condominium Interior Design',
    category: 'interior-design',
    displayMode: 'gallery-only',
    
    location: 'Phuket, Thailand',
    year: 2023,
    
    images: [
      {
        url: getImagePath('/images/projects/phuket-condominium-interior-design/'),
        alt: 'Phuket Condominium Interior Design living room'
      },
      {
        url: getImagePath('/images/projects/phuket-condominium-interior-design/'),
        alt: 'Phuket Condominium Interior Design bedroom'
      },
      {
        url: getImagePath('/images/projects/phuket-condominium-interior-design/'),
        alt: 'Phuket Condominium Interior Design kitchen'
      },
      {
        url: getImagePath('/images/projects/phuket-condominium-interior-design/'),
        alt: 'Phuket Condominium Interior Design bathroom'
      }
    ]
  },

  {
    id: 'villa-perpetual-interior-design',
    name: 'Villa Perpetual Interior Design',
    category: 'interior-design',
    displayMode: 'gallery-only',
    
    location: 'Bangkok, Thailand',
    year: 2020,
    
    images: [
      {
        url: getImagePath('/images/projects/villa-perpetual-interior-design/villa-perpetual-living.jpg'),
        alt: 'Villa Perpetual Interior Design living space'
      },
      {
        url: getImagePath('/images/projects/villa-perpetual-interior-design/villa-perpetual-master-bedroom.jpg'),
        alt: 'Villa Perpetual Interior Design bedroom'
      },
      {
        url: getImagePath('/images/projects/villa-perpetual-interior-design/villa-perpetual-dining.jpg'),
        alt: 'Villa Perpetual Interior Design kitchen'
      },
      {
        url: getImagePath('/images/projects/villa-perpetual-interior-design/villa-perpetual-family.jpg'),
        alt: 'Villa Perpetual Interior Design bathroom'
      }
    ]
  },

  {
    id: 'baan-huahin-interior-design',
    name: 'Baan Huahin Interior Design',
    category: 'interior-design',
    displayMode: 'gallery-only',
    
    location: 'Hua Hin, Thailand',
    year: 2019,
    
    images: [
      {
        url: getImagePath('/images/projects/baan-huahin-interior-design/'),
        alt: 'Baan Huahin Interior Design living room'
      },
      {
        url: getImagePath('/images/projects/baan-huahin-interior-design/'),
        alt: 'Baan Huahin Interior Design bedroom'
      },
      {
        url: getImagePath('/images/projects/baan-huahin-interior-design/'),
        alt: 'Baan Huahin Interior Design kitchen'
      },
      {
        url: getImagePath('/images/projects/baan-huahin-interior-design/'),
        alt: 'Baan Huahin Interior Design bathroom'
      }
    ]
  },

  {
    id: 'hi-tech-sandbox-interior-design',
    name: 'Hi-Tech Sandbox Interior Design',
    category: 'interior-design',
    displayMode: 'gallery-only',
    
    location: 'Bangkok, Thailand',
    year: 2023,
    
    images: [
      {
        url: getImagePath('/images/projects/hi-tech-sandbox-interior-design/'),
        alt: 'Hi-Tech Sandbox Interior Design workspace'
      },
      {
        url: getImagePath('/images/projects/hi-tech-sandbox-interior-design/'),
        alt: 'Hi-Tech Sandbox Interior Design meeting room'
      },
      {
        url: getImagePath('/images/projects/hi-tech-sandbox-interior-design/'),
        alt: 'Hi-Tech Sandbox Interior Design common area'
      },
      {
        url: getImagePath('/images/projects/hi-tech-sandbox-interior-design/'),
        alt: 'Hi-Tech Sandbox Interior Design technology area'
      }
    ]
  },

  {
    id: 'innovation-center-interior-design',
    name: 'Innovation Center Interior Design',
    category: 'interior-design',
    displayMode: 'gallery-only',
    
    location: 'Bangkok, Thailand',
    year: 2023,
    
    images: [
      {
        url: getImagePath('/images/projects/innovation-center-interior-design/innovation-center-closeup.jpg'),
        alt: 'Innovation Center Interior Design workspace'
      },
      {
        url: getImagePath('/images/projects/innovation-center-interior-design/innovation-center-hall.jpg'),
        alt: 'Innovation Center Interior Design meeting room'
      },
      {
        url: getImagePath('/images/projects/innovation-center-interior-design/innovation-center-main.jpg'),
        alt: 'Innovation Center Interior Design common area'
      },
      {
        url: getImagePath('/images/projects/innovation-center-interior-design/innovation-center-scene2.jpg'),
        alt: 'Innovation Center Interior Design collaboration space'
      }
    ]
  },

  // ========== AWARD PROJECTS ==========
  
  {
    id: 'siamese-rama9-award',
    name: 'Siamese Rama 9 Award',
    category: 'institutional',
    displayMode: 'gallery-only',
    
    location: 'Bangkok, Thailand',
    year: 2021,
    
    images: [
      {
        url: getImagePath('/images/projects/siamese-rama9-award-winning/siamese-rama9-view1.jpg'),
        alt: 'Siamese Rama 9 Award ceremony'
      },
      {
        url: getImagePath('/images/projects/siamese-rama9-award-winning/siamese-rama9-view2.jpg'),
        alt: 'Siamese Rama 9 Award recognition'
      },
      {
        url: getImagePath('/images/projects/siamese-rama9-award-winning/siamese-rama9-view3.jpg'),
        alt: 'Siamese Rama 9 Award presentation'
      }
    ]
  }
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