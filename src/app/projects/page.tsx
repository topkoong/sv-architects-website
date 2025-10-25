/**
 * ============================================================================
 * FILE: src/app/projects/page.tsx
 * ============================================================================
 * DESCRIPTION: Projects showcase page displaying SV Architects' portfolio
 * Comprehensive display of completed and ongoing architectural projects
 * 
 * FEATURES:
 * - Complete project portfolio showcase
 * - Project categories and filtering
 * - Detailed project information
 * - High-quality project images
 * - Project statistics and achievements
 * - SEO optimized with comprehensive metadata
 * - Responsive design with mobile-first approach
 * - Smooth animations and transitions
 * 
 * DEPENDENCIES:
 * - framer-motion: For smooth animations
 * - @/components/ui/OptimizedImage: For optimized images
 * - @/lib/animations: For animation variants
 * 
 * USAGE:
 * This page is accessible at /projects
 * 
 * LAST MODIFIED: [Current Date]
 * AUTHOR: Development Team
 * 
 * ============================================================================
 */

'use client'; // Mark as client component for state management

// Import Framer Motion for animations
import { AnimatePresence, motion } from 'framer-motion';
// Import animation variants
import { fadeIn, slideUp, staggerContainer } from '@/lib/animations';

// Import Next.js components
import Link from 'next/link';
import Image from 'next/image';
// Import custom components
// Import React components
import { useState } from 'react';

// Note: Metadata is handled by the layout.tsx file for client components

/**
 * ============================================================================
 * PROJECT DATA INTERFACE
 * ============================================================================
 * TypeScript interface for project data structure
 * ============================================================================
 */
interface Project {
  id: string;
  name: string;
  category: string;
  categories?: string[]; // Optional array for projects that belong to multiple categories
  type: string;
  location: string;
  year: number;
  status: 'completed' | 'ongoing' | 'planned';
  size: string;
  client: string;
  description: string;
  features: string[];
  images: {
    thumbnail: string;
    gallery: string[];
  };
  awards?: string[];
  sustainability?: {
    leed: boolean;
    greenBuilding: boolean;
    energyEfficient: boolean;
  };
}

/**
 * ============================================================================
 * PROJECT DATA
 * ============================================================================
 * Mock project data - replace with actual data from CMS or API
 * ============================================================================
 */
const projects: Project[] = [
  {
    id: 'u-tapao-airport',
    name: 'U-Tapao Airport New Terminal',
    category: 'Aviation',
    type: 'Airport Terminal',
    location: 'Rayong, Thailand',
    year: 2023,
    status: 'completed',
    size: '45,000 sqm',
    client: 'Airports of Thailand Public Company Limited',
    description: 'Modern passenger terminal with sustainable design principles, featuring advanced passenger flow systems and energy-efficient building systems.',
    features: [
      'Advanced passenger flow systems',
      'Energy-efficient HVAC systems',
      'Sustainable materials and construction',
      'Accessibility compliance',
      'Modern security systems'
    ],
    images: {
      thumbnail: '/sv-architects-website/images/projects/u-tapao-airport-new-terminal/u-tapao-airport-new-terminal.jpg',
      gallery: [
        '/sv-architects-website/images/projects/u-tapao-airport-new-terminal/u-tapao-airport-new-terminal.jpg'
      ]
    },
    awards: ['Best Airport Design 2023', 'Sustainable Design Excellence'],
    sustainability: {
      leed: true,
      greenBuilding: true,
      energyEfficient: true
    }
  },
  {
    id: 'don-mueang-airport-terminal3',
    name: 'Don Mueang International Airport Terminal 3',
    category: 'Aviation',
    type: 'Airport Terminal',
    location: 'Bangkok, Thailand',
    year: 2023,
    status: 'ongoing',
    size: '160,000 sqm',
    client: 'AOT',
    description: 'International aviation hub bridging heritage and embracing the future. Modern terminal expansion featuring advanced passenger processing systems and sustainable design principles.',
    features: [
      'Advanced passenger processing systems',
      'International departure facilities',
      'Sustainable terminal design',
      'Modern security infrastructure',
      'Enhanced passenger experience',
      'Heritage integration design'
    ],
    images: {
      thumbnail: '/sv-architects-website/images/projects/u-tapao-airport-new-terminal/u-tapao-airport-new-terminal.jpg',
      gallery: [
        '/sv-architects-website/images/projects/u-tapao-airport-new-terminal/u-tapao-airport-new-terminal.jpg'
      ]
    },
    awards: ['Airport Design Excellence 2023'],
    sustainability: {
      leed: true,
      greenBuilding: true,
      energyEfficient: true
    }
  },
  {
    id: 'mahachai-airport-luxe',
    name: 'Mahachai Airport Luxe City',
    category: 'Aviation',
    type: 'Airport Development',
    location: 'Samut Sakhon, Thailand',
    year: 2019,
    status: 'completed',
    size: '35,000 sqm',
    client: 'Mahachai Development Corporation',
    description: 'Luxury airport development combining aviation facilities with premium commercial and hospitality spaces.',
    features: [
      'Luxury airport facilities',
      'Premium commercial spaces',
      'Integrated hospitality services',
      'Modern aviation infrastructure',
      'Sustainable development approach'
    ],
    images: {
      thumbnail: '/sv-architects-website/images/projects/bunditpatanasilpa-auditorium/bunditpatanasilpa-auditorium.jpg',
      gallery: [
        '/sv-architects-website/images/projects/bunditpatanasilpa-auditorium/bunditpatanasilpa-auditorium.jpg'
      ]
    },
    awards: ['Luxury Airport Development 2019'],
    sustainability: {
      leed: true,
      greenBuilding: true,
      energyEfficient: true
    }
  },
  {
    id: 'u-tapao-mro-facility',
    name: 'Maintenance Repair Operation U-tapao Airport',
    category: 'Aviation',
    type: 'MRO Facility',
    location: 'Rayong, Thailand',
    year: 2019,
    status: 'completed',
    size: '25,000 sqm',
    client: 'U-Tapao Airport Authority',
    description: '"Space within space", Maintenance Repair Operation facility at U-tapao airport, Air Cargo expansion for the Air-Cargo industry, Thailand.',
    features: [
      'Aircraft maintenance facilities',
      'Repair and overhaul capabilities',
      'Safety compliance systems',
      'Operational efficiency design',
      'Modern MRO infrastructure',
      'Air cargo expansion facilities',
      'Space within space design concept'
    ],
    images: {
      thumbnail: '/sv-architects-website/images/projects/maintenance-repair-operation-u-tapao-airport-aviation/maintenance-repair-operation-u-tapao-1.jpg',
      gallery: [
        '/sv-architects-website/images/projects/maintenance-repair-operation-u-tapao-airport-aviation/maintenance-repair-operation-u-tapao-1.jpg',
        '/sv-architects-website/images/projects/maintenance-repair-operation-u-tapao-airport-aviation/maintenance-repair-operation-u-tapao-2.jpg',
        '/sv-architects-website/images/projects/maintenance-repair-operation-u-tapao-airport-aviation/maintenance-repair-operation-u-tapao-3.jpg'
      ]
    },
    awards: ['MRO Facility Excellence 2019'],
    sustainability: {
      leed: true,
      greenBuilding: true,
      energyEfficient: true
    }
  },
  {
    id: 'centerpoint-siamsquare',
    name: 'Centerpoint Siamsquare',
    category: 'Commercial',
    type: 'Commercial Development',
    location: 'Bangkok, Thailand',
    year: 2022,
    status: 'completed',
    size: '120,000 sqm',
    client: 'Central Group',
    description: 'Commercial development featuring retail, office, and entertainment spaces in the heart of Bangkok.',
    features: [
      'Integrated retail and office spaces',
      'Entertainment facilities',
      'Public plaza and green spaces',
      'Underground parking system',
      'Smart building technology'
    ],
    images: {
      thumbnail: '/sv-architects-website/images/projects/centerpoint-siamsquare-commercial/centerpoint-siamsquare-bts-lower.png',
      gallery: [
        '/sv-architects-website/images/projects/centerpoint-siamsquare-commercial/centerpoint-siamsquare-bts-lower.png',
        '/sv-architects-website/images/projects/centerpoint-siamsquare-commercial/centerpoint-siamsquare-4th-floor.jpg',
        '/sv-architects-website/images/projects/centerpoint-siamsquare-commercial/centerpoint-siamsquare-2nd-floor-2.jpg',
        '/sv-architects-website/images/projects/centerpoint-siamsquare-commercial/centerpoint-siamsquare-2nd-floor-1.jpg'
      ]
    },
    sustainability: {
      leed: true,
      greenBuilding: true,
      energyEfficient: true
    }
  },
  {
    id: 'somdech-phra-nangchao-sirikit-hospital',
    name: 'Somdech Phra Nangchao Sirikit Hospital',
    category: 'Healthcare',
    type: 'Medical Facility',
    location: 'Bangkok, Thailand',
    year: 2022,
    status: 'completed',
    size: '45,000 sqm',
    client: 'Somdech Phra Nangchao Sirikit Hospital',
    description: 'State-of-the-art medical hub for clinical excellence. Architectural design works done in collaboration with Team SQ. This project encompasses both Master Planning and Healthcare project types.',
    features: [
      'State-of-the-art medical facilities',
      'Clinical excellence design',
      'Advanced medical technology integration',
      'Healing environment design',
      'Collaborative design approach',
      'Modern healthcare infrastructure',
      'Master planning integration'
    ],
    images: {
      thumbnail: '/sv-architects-website/images/projects/somdech-phra-nangchao-sirikit-hospital.jpg',
      gallery: [
        '/sv-architects-website/images/projects/somdech-phra-nangchao-sirikit-hospital.jpg',
        '/sv-architects-website/images/projects/healthcare-facility.jpg',
        '/sv-architects-website/images/projects/government-savings-bank.jpg'
      ]
    },
    sustainability: {
      leed: true,
      greenBuilding: true,
      energyEfficient: true
    }
  },
  {
    id: 'chaopraya-mahanatee-hotel',
    name: 'Chaopraya Mahanatee Hotel',
    category: 'Hospitality',
    type: 'Hotel Development',
    location: 'Bangkok, Thailand',
    year: 2021,
    status: 'completed',
    size: '65,000 sqm',
    client: 'Hotel Development Group',
    description: 'Premium four-star hotel development featuring luxury accommodations and sustainable design principles.',
    features: [
      'Premium four-star hotel facilities',
      'Luxury guest accommodations',
      'Sustainable hotel design',
      'Integrated spa and wellness facilities',
      'Environmental conservation features',
      'Modern hospitality amenities'
    ],
    images: {
      thumbnail: '/sv-architects-website/images/projects/chaopraya-mahanatee-hotel-1.jpg',
      gallery: [
        '/sv-architects-website/images/projects/chaopraya-mahanatee-hotel-1.jpg',
        '/sv-architects-website/images/projects/chaopraya-mahanatee-hotel-2.jpg',
        '/sv-architects-website/images/projects/chaopraya-mahanatee-hotel-3.jpg',
        '/sv-architects-website/images/projects/chaopraya-mahanatee-hotel-4.jpg'
      ]
    },
    sustainability: {
      leed: true,
      greenBuilding: true,
      energyEfficient: true
    }
  },
  {
    id: 'office-tower',
    name: 'Bangkok Office Tower',
    category: 'Commercial',
    type: 'Office Building',
    location: 'Bangkok, Thailand',
    year: 2020,
    status: 'completed',
    size: '95,000 sqm',
    client: 'Property Development Corporation',
    description: 'Modern office tower with flexible workspace design and advanced building systems for optimal tenant experience.',
    features: [
      'Flexible workspace design',
      'Advanced building systems',
      'Tenant experience optimization',
      'Smart building technology',
      'Sustainable office design'
    ],
    images: {
      thumbnail: '/sv-architects-website/images/projects/office-tower-thumb.jpg',
      gallery: [
        '/sv-architects-website/images/projects/office-tower-thumb.jpg',
        '/sv-architects-website/images/projects/government-savings-bank.jpg',
        '/sv-architects-website/images/projects/innovation-center.jpg'
      ]
    },
    sustainability: {
      leed: true,
      greenBuilding: true,
      energyEfficient: true
    }
  },
  {
    id: 'jet-villa-residence',
    name: 'Jet Villa Residence',
    category: 'Residential',
    type: 'Luxury Villa Development',
    location: 'Bangkok, Thailand',
    year: 2022,
    status: 'completed',
    size: '2,500 sqm',
    client: 'Jet Villa Development Co.',
    description: 'Luxury villa residence featuring modern architectural design with premium amenities and sustainable living features.',
    features: [
      'Modern architectural design',
      'Premium amenities',
      'Sustainable living features',
      'Private garden spaces',
      'Smart home technology'
    ],
    images: {
      thumbnail: '/sv-architects-website/images/projects/jet-villa-residence-residential/jet-villa-air-view.jpg',
      gallery: [
        '/sv-architects-website/images/projects/jet-villa-residence-residential/jet-villa-air-view.jpg',
        '/sv-architects-website/images/projects/jet-villa-residence-residential/jet-villa-view2.jpg',
        '/sv-architects-website/images/projects/jet-villa-residence-residential/jet-villa-view3.jpg',
        '/sv-architects-website/images/projects/jet-villa-residence-residential/jet-villa-view4.jpg',
        '/sv-architects-website/images/projects/jet-villa-residence-residential/jet-villa-view5.jpg',
        '/sv-architects-website/images/projects/jet-villa-residence-residential/jet-villa-view6.jpg',
        '/sv-architects-website/images/projects/jet-villa-residence-residential/jet-villa-view7.jpg',
        '/sv-architects-website/images/projects/jet-villa-residence-residential/jet-villa-view8.jpg',
        '/sv-architects-website/images/projects/jet-villa-residence-residential/jet-villa-view9.jpg',
        '/sv-architects-website/images/projects/jet-villa-residence-residential/jet-villa-view10.jpg'
      ]
    },
    sustainability: {
      leed: true,
      greenBuilding: true,
      energyEfficient: true
    }
  },
  {
    id: 'siamese-rama9',
    name: 'SIAMESE RAMA 9',
    category: 'Residential',
    categories: ['Residential', 'Mixed-Use', 'Awards'], // Multiple categories for filtering
    type: 'High-Rise Residential',
    location: 'Bangkok, Thailand',
    year: 2021,
    status: 'completed',
    size: '45,000 sqm',
    client: 'Siamese Development Co.',
    description: 'An Award-winning residential development encompassing cutting-edge technology for a superior and premium lifestyle.',
    features: [
      'Award-winning residential development',
      'Cutting-edge technology integration',
      'Superior and premium lifestyle',
      'Contemporary high-rise design',
      'Comprehensive amenities',
      'Modern urban living spaces',
      'Rooftop facilities',
      'Underground parking',
      'Mixed-use development',
      'Residential and commercial integration',
      'Architectural excellence recognition',
      'Innovative design features',
      'Sustainable living implementation'
    ],
    images: {
      thumbnail: '/sv-architects-website/images/projects/siamese-rama9-award-winning/siamese-rama9-view1.jpg',
      gallery: [
        '/sv-architects-website/images/projects/siamese-rama9-award-winning/siamese-rama9-view1.jpg',
        '/sv-architects-website/images/projects/siamese-rama9-award-winning/siamese-rama9-view2.jpg',
        '/sv-architects-website/images/projects/siamese-rama9-award-winning/siamese-rama9-view3.jpg'
      ]
    },
    sustainability: {
      leed: true,
      greenBuilding: true,
      energyEfficient: true
    }
  },
  {
    id: 'villa-perpetual',
    name: 'Villa Perpetual',
    category: 'Residential',
    type: 'Luxury Villa',
    location: 'Bangkok, Thailand',
    year: 2020,
    status: 'completed',
    size: '1,800 sqm',
    client: 'Perpetual Properties Ltd.',
    description: 'An epitome of luxury and modern elegance.',
    features: [
      'Epitome of luxury design',
      'Modern elegance',
      'Timeless design principles',
      'Premium finishes',
      'Sophisticated living spaces',
      'Private outdoor areas',
      'High-end materials',
      'Luxury villa amenities'
    ],
    images: {
      thumbnail: '/sv-architects-website/images/projects/villa-perpetual-entrance.jpg',
      gallery: [
        '/sv-architects-website/images/projects/villa-perpetual-entrance.jpg',
        '/sv-architects-website/images/projects/villa-perpetual-bird-eye.jpg',
        '/sv-architects-website/images/projects/villa-perpetual-landscape.jpg'
      ]
    },
    sustainability: {
      leed: true,
      greenBuilding: true,
      energyEfficient: true
    }
  },
  {
    id: 'hh-park-residence',
    name: 'HH Park Residence',
    category: 'Residential',
    type: 'Residential Complex',
    location: 'Bangkok, Thailand',
    year: 2020,
    status: 'completed',
    size: '35,000 sqm',
    client: 'HH Development Group',
    description: 'Green holistic mixed-used HH park development.',
    features: [
      'Green holistic development',
      'Mixed-use integration',
      'Park-like amenities',
      'Community-focused design',
      'Family living spaces',
      'Recreation facilities',
      'Green building features',
      'Sustainable living design'
    ],
    images: {
      thumbnail: '/sv-architects-website/images/projects/hh-park-residence-residential/hh-park-residence-1.jpg',
      gallery: [
        '/sv-architects-website/images/projects/hh-park-residence-residential/hh-park-residence-1.jpg',
        '/sv-architects-website/images/projects/hh-park-residence-residential/hh-park-residence-2.jpg',
        '/sv-architects-website/images/projects/hh-park-residence-residential/hh-park-residence-3.jpg'
      ]
    },
    sustainability: {
      leed: true,
      greenBuilding: true,
      energyEfficient: true
    }
  },
  {
    id: 'phuket-condominium',
    name: 'Phuket Condominium',
    category: 'Residential',
    type: 'Beachfront Condominium',
    location: 'Phuket, Thailand',
    year: 2020,
    status: 'completed',
    size: '28,000 sqm',
    client: 'Phuket Beach Development',
    description: 'Designed to fully optimize its environment with panoramic views and connectivity to the nature through biophilic designs.',
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
    sustainability: {
      leed: true,
      greenBuilding: true,
      energyEfficient: true
    }
  },
  {
    id: 'service-apartment-selangor',
    name: 'Service Apartment Selangor, Malaysia',
    category: 'Residential',
    type: 'Service Apartment',
    location: 'Selangor, Malaysia',
    year: 2019,
    status: 'completed',
    size: '22,000 sqm',
    client: 'Malaysian Development Corp.',
    description: 'Aspen Vision Development Serviced an Apartment complex at Aspen Bandar Putra Permai South of Kuala Lumpur.',
    features: [
      'Aspen Vision Development',
      'Serviced apartment complex',
      'Aspen Bandar Putra Permai location',
      'South of Kuala Lumpur',
      'Business traveler focused',
      'Long-term resident amenities',
      'Comprehensive facilities',
      'Modern design'
    ],
    images: {
      thumbnail: '/sv-architects-website/images/projects/service-apartment-selangor-malaysia/service-apartment-selangor-1.jpg',
      gallery: [
        '/sv-architects-website/images/projects/service-apartment-selangor-malaysia/service-apartment-selangor-1.jpg',
        '/sv-architects-website/images/projects/service-apartment-selangor-malaysia/service-apartment-selangor-2.jpg'
      ]
    },
    sustainability: {
      leed: true,
      greenBuilding: true,
      energyEfficient: true
    }
  },
  {
    id: 'chaopraya-mahanatee',
    name: 'Chaopraya Mahanatee Riverside Condominium',
    category: 'Residential',
    type: 'Riverside Condominium',
    location: 'Bangkok, Thailand',
    year: 2019,
    status: 'completed',
    size: '40,000 sqm',
    client: 'Chaopraya Development Ltd.',
    description: 'Riverside condominium development offering stunning river views and luxury amenities in prime Bangkok location.',
    features: [
      'Stunning river views',
      'Luxury amenities',
      'Prime Bangkok location',
      'Riverside facilities',
      'Premium finishes'
    ],
    images: {
      thumbnail: '/sv-architects-website/images/projects/chaopraya-mahanatee-riverside-condominium-residential/chaopraya-mahanatee-river-view.jpg',
      gallery: [
        '/sv-architects-website/images/projects/chaopraya-mahanatee-riverside-condominium-residential/chaopraya-mahanatee-river-view.jpg',
        '/sv-architects-website/images/projects/chaopraya-mahanatee-riverside-condominium-residential/chaopraya-mahanatee-riverside.jpg',
        '/sv-architects-website/images/projects/chaopraya-mahanatee-riverside-condominium-residential/chaopraya-mahanatee-pool.jpg',
        '/sv-architects-website/images/projects/chaopraya-mahanatee-riverside-condominium-residential/chaopraya-mahanatee-night.jpg'
      ]
    },
    sustainability: {
      leed: true,
      greenBuilding: true,
      energyEfficient: true
    }
  },
  {
    id: 'baan-huahin',
    name: 'BAAN HUAHIN',
    category: 'Residential',
    type: 'Resort-Style Residence',
    location: 'Hua Hin, Thailand',
    year: 2019,
    status: 'completed',
    size: '18,000 sqm',
    client: 'Hua Hin Resort Development',
    description: 'Resort-style residential development in Hua Hin featuring tropical design and vacation home amenities.',
    features: [
      'Resort-style design',
      'Tropical architecture',
      'Vacation home amenities',
      'Beach proximity',
      'Relaxation facilities'
    ],
    images: {
      thumbnail: '/sv-architects-website/images/projects/baan-huahin.jpg',
      gallery: [
        '/sv-architects-website/images/projects/baan-huahin.jpg',
        '/sv-architects-website/images/projects/chaopraya-mahanatee.jpg',
        '/sv-architects-website/images/projects/vivo-executive-apartment.jpg'
      ]
    },
    sustainability: {
      leed: true,
      greenBuilding: true,
      energyEfficient: true
    }
  },
  {
    id: 'vivo-executive-apartment',
    name: 'Vivo Executive Apartment',
    category: 'Residential',
    type: 'Executive Apartment',
    location: 'Bangkok, Thailand',
    year: 2019,
    status: 'completed',
    size: '15,000 sqm',
    client: 'Vivo Development Co.',
    description: 'Executive apartment complex designed for business professionals with modern amenities and convenient location.',
    features: [
      'Executive-focused design',
      'Business professional amenities',
      'Modern facilities',
      'Convenient location',
      'High-end finishes'
    ],
    images: {
      thumbnail: '/sv-architects-website/images/projects/vivo-executive-apartment.jpg',
      gallery: [
        '/sv-architects-website/images/projects/vivo-executive-apartment.jpg',
        '/sv-architects-website/images/projects/baan-huahin.jpg',
        '/sv-architects-website/images/projects/jet-villa-residence.jpg'
      ]
    },
    sustainability: {
      leed: true,
      greenBuilding: true,
      energyEfficient: true
    }
  },
  {
    id: 'u-tapao-airport-interior',
    name: 'U-Tapao Airport New Passenger Terminal',
    category: 'Interior Design',
    type: 'Airport Terminal Interior',
    location: 'Rayong, Thailand',
    year: 2022,
    status: 'completed',
    size: '45,000 sqm',
    client: 'Airports of Thailand Public Company Limited',
    description: 'Modern passenger terminal interior design featuring contemporary aesthetics, efficient passenger flow, and sustainable materials. This project encompasses both Interior Design and Aviation project types.',
    features: [
      'Contemporary interior aesthetics',
      'Efficient passenger flow design',
      'Sustainable interior materials',
      'Modern lighting systems',
      'Accessibility compliance',
      'Aviation terminal design'
    ],
    images: {
      thumbnail: '/sv-architects-website/images/projects/u-tapao-airport-new-terminal-interior.jpg',
      gallery: [
        '/sv-architects-website/images/projects/u-tapao-airport-new-terminal-interior.jpg',
        '/sv-architects-website/images/projects/u-tapao-airport-new.jpg',
        '/sv-architects-website/images/projects/hi-tech-sandbox.jpg',
        '/sv-architects-website/images/projects/innovation-center-interior.jpg'
      ]
    },
    sustainability: {
      leed: true,
      greenBuilding: true,
      energyEfficient: true
    }
  },
  {
    id: 'hi-tech-sandbox',
    name: 'Hi-tech Sandbox',
    category: 'Interior Design',
    type: 'Technology Hub Interior',
    location: 'Bangkok, Thailand',
    year: 2022,
    status: 'completed',
    size: '8,000 sqm',
    client: 'Technology Innovation Group',
    description: 'Cutting-edge technology hub interior design featuring modern workspaces, collaborative areas, and innovative design elements.',
    features: [
      'Modern workspace design',
      'Collaborative work areas',
      'Innovative design elements',
      'Technology integration',
      'Flexible space planning'
    ],
    images: {
      thumbnail: '/sv-architects-website/images/projects/hi-tech-sandbox.jpg',
      gallery: [
        '/sv-architects-website/images/projects/hi-tech-sandbox.jpg',
        '/sv-architects-website/images/projects/innovation-center-interior.jpg',
        '/sv-architects-website/images/projects/u-tapao-airport-interior.jpg'
      ]
    },
    sustainability: {
      leed: true,
      greenBuilding: true,
      energyEfficient: true
    }
  },
  {
    id: 'innovation-center-interior',
    name: 'Innovation Center Interior',
    category: 'Interior Design',
    type: 'Research Center Interior',
    location: 'Bangkok, Thailand',
    year: 2022,
    status: 'completed',
    size: '12,000 sqm',
    client: 'Innovation Development Corp.',
    description: 'Research and innovation center interior design featuring flexible workspaces, meeting areas, and creative collaboration zones.',
    features: [
      'Flexible workspace design',
      'Creative collaboration zones',
      'Modern meeting areas',
      'Research facility integration',
      'Sustainable interior materials'
    ],
    images: {
      thumbnail: '/sv-architects-website/images/projects/innovation-center-interior.jpg',
      gallery: [
        '/sv-architects-website/images/projects/innovation-center-interior.jpg',
        '/sv-architects-website/images/projects/hi-tech-sandbox.jpg',
        '/sv-architects-website/images/projects/villa-perpetual-interior.jpg'
      ]
    },
    sustainability: {
      leed: true,
      greenBuilding: true,
      energyEfficient: true
    }
  },
  {
    id: 'villa-perpetual-interior',
    name: 'Villa Perpetual Interior',
    category: 'Interior Design',
    type: 'Luxury Villa Interior',
    location: 'Bangkok, Thailand',
    year: 2020,
    status: 'completed',
    size: '1,800 sqm',
    client: 'Perpetual Properties Ltd.',
    description: 'Elegant luxury villa interior design featuring sophisticated living spaces, premium finishes, and timeless design principles.',
    features: [
      'Sophisticated living spaces',
      'Premium interior finishes',
      'Timeless design principles',
      'Luxury amenities',
      'High-end materials'
    ],
    images: {
      thumbnail: '/sv-architects-website/images/projects/villa-perpetual-interior.jpg',
      gallery: [
        '/sv-architects-website/images/projects/villa-perpetual-interior.jpg',
        '/sv-architects-website/images/projects/baan-huahin-interior.jpg',
        '/sv-architects-website/images/projects/phuket-condominium-interior.jpg'
      ]
    },
    sustainability: {
      leed: true,
      greenBuilding: true,
      energyEfficient: true
    }
  },
  {
    id: 'baan-huahin-interior',
    name: 'Baan Huahin Interior',
    category: 'Interior Design',
    type: 'Resort-Style Residence Interior',
    location: 'Hua Hin, Thailand',
    year: 2019,
    status: 'completed',
    size: '18,000 sqm',
    client: 'Hua Hin Resort Development',
    description: 'Resort-style residential interior design featuring tropical aesthetics, vacation home amenities, and relaxation-focused spaces.',
    features: [
      'Tropical interior aesthetics',
      'Vacation home amenities',
      'Relaxation-focused spaces',
      'Beach-inspired design',
      'Natural material integration'
    ],
    images: {
      thumbnail: '/sv-architects-website/images/projects/baan-huahin-interior-design/baan-huahin-interior-1.jpg',
      gallery: [
        '/sv-architects-website/images/projects/baan-huahin-interior-design/baan-huahin-interior-1.jpg',
        '/sv-architects-website/images/projects/baan-huahin-interior-design/baan-huahin-interior-2.jpg',
        '/sv-architects-website/images/projects/baan-huahin-interior-design/baan-huahin-interior-3.jpg',
        '/sv-architects-website/images/projects/baan-huahin-interior-design/baan-huahin-interior-4.jpg'
      ]
    },
    sustainability: {
      leed: true,
      greenBuilding: true,
      energyEfficient: true
    }
  },
  {
    id: 'phuket-condominium-interior',
    name: 'Phuket Condominium Interior',
    category: 'Interior Design',
    type: 'Beachfront Condominium Interior',
    location: 'Phuket, Thailand',
    year: 2020,
    status: 'completed',
    size: '28,000 sqm',
    client: 'Phuket Beach Development',
    description: 'Beachfront condominium interior design featuring coastal living aesthetics, panoramic ocean views, and resort-style amenities.',
    features: [
      'Coastal living aesthetics',
      'Ocean view optimization',
      'Resort-style amenities',
      'Luxury coastal design',
      'Sustainable interior materials'
    ],
    images: {
      thumbnail: '/sv-architects-website/images/projects/phuket-condominium-interior.jpg',
      gallery: [
        '/sv-architects-website/images/projects/phuket-condominium-interior.jpg',
        '/sv-architects-website/images/projects/baan-huahin-interior.jpg',
        '/sv-architects-website/images/projects/villa-perpetual-interior.jpg'
      ]
    },
    sustainability: {
      leed: true,
      greenBuilding: true,
      energyEfficient: true
    }
  },
  {
    id: 'hi-tech-sandbox-office',
    name: 'Hi-tech Sandbox',
    category: 'Office',
    type: 'Technology Office Complex',
    location: 'Bangkok, Thailand',
    year: 2022,
    status: 'completed',
    size: '15,000 sqm',
    client: 'Technology Innovation Group',
    description: 'Cutting-edge technology office complex featuring modern workspaces, collaborative areas, and innovative design elements for tech companies.',
    features: [
      'Modern office workspace design',
      'Collaborative work areas',
      'Innovative design elements',
      'Technology integration',
      'Flexible office space planning'
    ],
    images: {
      thumbnail: '/sv-architects-website/images/projects/hi-tech-sandbox.jpg',
      gallery: [
        '/sv-architects-website/images/projects/hi-tech-sandbox.jpg',
        '/sv-architects-website/images/projects/government-savings-bank-intelligent-training.jpg',
        '/sv-architects-website/images/projects/innovation-center-interior.jpg'
      ]
    },
    sustainability: {
      leed: true,
      greenBuilding: true,
      energyEfficient: true
    }
  },
  {
    id: 'government-savings-bank-training',
    name: 'Government Savings Bank Intelligent Training Center',
    category: 'Office',
    type: 'Corporate Training Facility',
    location: 'Bangkok, Thailand',
    year: 2019,
    status: 'completed',
    size: '25,000 sqm',
    client: 'Government Savings Bank',
    description: 'Intelligent training center for corporate education featuring modern learning spaces, technology integration, and flexible training environments.',
    features: [
      'Modern learning spaces',
      'Technology integration',
      'Flexible training environments',
      'Corporate education facilities',
      'Intelligent building systems'
    ],
    images: {
      thumbnail: '/sv-architects-website/images/projects/government-savings-bank-intelligent-training.jpg',
      gallery: [
        '/sv-architects-website/images/projects/government-savings-bank-intelligent-training.jpg',
        '/sv-architects-website/images/projects/hi-tech-sandbox.jpg',
        '/sv-architects-website/images/projects/innovation-center-interior.jpg'
      ]
    },
    sustainability: {
      leed: true,
      greenBuilding: true,
      energyEfficient: true
    }
  },
  {
    id: 'innovation-center-office',
    name: 'Innovation Center',
    category: 'Office',
    type: 'Research and Development Office',
    location: 'Bangkok, Thailand',
    year: 2022,
    status: 'completed',
    size: '20,000 sqm',
    client: 'Innovation Development Corp.',
    description: 'Research and development office complex featuring flexible workspaces, meeting areas, and creative collaboration zones for innovation teams.',
    features: [
      'Flexible office workspace design',
      'Creative collaboration zones',
      'Modern meeting areas',
      'Research facility integration',
      'Innovation-focused design'
    ],
    images: {
      thumbnail: '/sv-architects-website/images/projects/innovation-center-interior.jpg',
      gallery: [
        '/sv-architects-website/images/projects/innovation-center-interior.jpg',
        '/sv-architects-website/images/projects/hi-tech-sandbox.jpg',
        '/sv-architects-website/images/projects/government-savings-bank-intelligent-training.jpg'
      ]
    },
    sustainability: {
      leed: true,
      greenBuilding: true,
      energyEfficient: true
    }
  },
  {
    id: 'sukhumvit-hills-office',
    name: 'Sukhumvit Hills',
    category: 'Office',
    type: 'Mixed-Use Office Development',
    location: 'Bangkok, Thailand',
    year: 2019,
    status: 'completed',
    size: '35,000 sqm',
    client: 'Sukhumvit Development Co.',
    description: 'Mixed-use office development featuring modern office spaces, retail integration, and comprehensive amenities in prime Sukhumvit location.',
    features: [
      'Modern office spaces',
      'Retail integration',
      'Comprehensive amenities',
      'Prime location design',
      'Mixed-use development'
    ],
    images: {
      thumbnail: '/sv-architects-website/images/projects/sukhumvit-hills.png',
      gallery: [
        '/sv-architects-website/images/projects/sukhumvit-hills.png',
        '/sv-architects-website/images/projects/hi-tech-sandbox.jpg',
        '/sv-architects-website/images/projects/government-savings-bank-intelligent-training.jpg'
      ]
    },
    sustainability: {
      leed: true,
      greenBuilding: true,
      energyEfficient: true
    }
  },
  {
    id: 'eec-silicon-technology-park',
    name: 'EEC Silicon Technology Park',
    category: 'Master Planning',
    type: 'Technology Park Master Plan',
    location: 'Eastern Economic Corridor, Thailand',
    year: 2022,
    status: 'completed',
    size: '500,000 sqm',
    client: 'EEC Development Corporation',
    description: 'Comprehensive master plan for silicon technology park featuring integrated facilities, sustainable design, and innovation-focused development.',
    features: [
      'Integrated facility planning',
      'Sustainable design principles',
      'Innovation-focused development',
      'Technology infrastructure',
      'Mixed-use integration'
    ],
    images: {
      thumbnail: '/sv-architects-website/images/projects/eec-silicon-technology-park-master-planning/eec-silicon-tech-park-view1.jpg',
      gallery: [
        '/sv-architects-website/images/projects/eec-silicon-technology-park-master-planning/eec-silicon-tech-park-view1.jpg',
        '/sv-architects-website/images/projects/eec-silicon-technology-park-master-planning/eec-silicon-tech-park-innovation-center.jpg',
        '/sv-architects-website/images/projects/eec-silicon-technology-park-master-planning/eec-silicon-tech-park-view2.jpg'
      ]
    },
    sustainability: {
      leed: true,
      greenBuilding: true,
      energyEfficient: true
    }
  },
  {
    id: 'somdech-phra-nangchao-sirikit-hospital-masterplan',
    name: 'Somdech Phra Nangchao Sirikit Hospital Master Plan',
    category: 'Master Planning',
    type: 'Healthcare Campus Master Plan',
    location: 'Bangkok, Thailand',
    year: 2022,
    status: 'completed',
    size: '150,000 sqm',
    client: 'Bangkok Health System',
    description: 'Comprehensive master plan for healthcare campus featuring integrated medical facilities, patient care optimization, and sustainable healthcare design.',
    features: [
      'Integrated medical facilities',
      'Patient care optimization',
      'Sustainable healthcare design',
      'Campus planning',
      'Medical infrastructure'
    ],
    images: {
      thumbnail: '/sv-architects-website/images/projects/somdech-phra-nangchao-sirikit-hospital-masterplan.jpg',
      gallery: [
        '/sv-architects-website/images/projects/somdech-phra-nangchao-sirikit-hospital-masterplan.jpg',
        '/sv-architects-website/images/projects/eec-silicon-technology-park.jpg',
        '/sv-architects-website/images/projects/zen-village-masterplan.jpg'
      ]
    },
    sustainability: {
      leed: true,
      greenBuilding: true,
      energyEfficient: true
    }
  },
  {
    id: 'zen-village-masterplan',
    name: 'Zen Village Master Plan',
    category: 'Master Planning',
    type: 'Residential Community Master Plan',
    location: 'Bangkok, Thailand',
    year: 2020,
    status: 'completed',
    size: '200,000 sqm',
    client: 'Zen Development Group',
    description: 'Comprehensive master plan for residential community featuring sustainable living, community integration, and wellness-focused design.',
    features: [
      'Sustainable living design',
      'Community integration',
      'Wellness-focused planning',
      'Residential development',
      'Green space integration'
    ],
    images: {
      thumbnail: '/sv-architects-website/images/projects/zen-village-masterplan.jpg',
      gallery: [
        '/sv-architects-website/images/projects/zen-village-masterplan.jpg',
        '/sv-architects-website/images/projects/hue-tourist-market.jpg',
        '/sv-architects-website/images/projects/transit-oriented-development-masterplan.jpg'
      ]
    },
    sustainability: {
      leed: true,
      greenBuilding: true,
      energyEfficient: true
    }
  },
  {
    id: 'hue-tourist-market',
    name: 'Hue Tourist Market',
    category: 'Master Planning',
    type: 'Tourist Market Master Plan',
    location: 'Hue, Vietnam',
    year: 2020,
    status: 'completed',
    size: '50,000 sqm',
    client: 'Hue Tourism Development',
    description: 'Master plan for tourist market featuring cultural integration, sustainable tourism design, and local community engagement.',
    features: [
      'Cultural integration design',
      'Sustainable tourism planning',
      'Local community engagement',
      'Market facility planning',
      'Tourist experience optimization'
    ],
    images: {
      thumbnail: '/sv-architects-website/images/projects/hue-tourist-market.jpg',
      gallery: [
        '/sv-architects-website/images/projects/hue-tourist-market.jpg',
        '/sv-architects-website/images/projects/zen-village-masterplan.jpg',
        '/sv-architects-website/images/projects/transit-oriented-development-masterplan.jpg'
      ]
    },
    sustainability: {
      leed: true,
      greenBuilding: true,
      energyEfficient: true
    }
  },
  {
    id: 'transit-oriented-development-masterplan',
    name: 'Transit Oriented Development (TOD) Master Plan',
    category: 'Master Planning',
    type: 'TOD Master Plan',
    location: 'Bangkok, Thailand',
    year: 2019,
    status: 'completed',
    size: '300,000 sqm',
    client: 'Bangkok Metropolitan Administration',
    description: 'Comprehensive transit-oriented development master plan featuring integrated transportation, mixed-use development, and sustainable urban design.',
    features: [
      'Integrated transportation planning',
      'Mixed-use development',
      'Sustainable urban design',
      'Transit connectivity',
      'Urban density optimization'
    ],
    images: {
      thumbnail: '/sv-architects-website/images/projects/transit-oriented-development-masterplan.jpg',
      gallery: [
        '/sv-architects-website/images/projects/transit-oriented-development-masterplan.jpg',
        '/sv-architects-website/images/projects/mahachai-airport-luxe-masterplan.jpg',
        '/sv-architects-website/images/projects/geo-valley-apartment-masterplan.jpg'
      ]
    },
    sustainability: {
      leed: true,
      greenBuilding: true,
      energyEfficient: true
    }
  },
  {
    id: 'mahachai-airport-luxe-masterplan',
    name: 'Mahachai Airport Luxe City Master Plan',
    category: 'Master Planning',
    type: 'Airport City Master Plan',
    location: 'Samut Sakhon, Thailand',
    year: 2019,
    status: 'completed',
    size: '400,000 sqm',
    client: 'Mahachai Development Corporation',
    description: 'Innovative infrastructure and master planning concept for a lifestyle in the fast lane. Comprehensive master plan for airport city development featuring aviation facilities, luxury amenities, and integrated urban planning.',
    features: [
      'Innovative infrastructure planning',
      'Master planning concept for fast lane lifestyle',
      'Aviation facility planning',
      'Luxury amenity integration',
      'Integrated urban planning',
      'Airport city development',
      'Commercial integration'
    ],
    images: {
      thumbnail: '/sv-architects-website/images/projects/mahachai-airport-luxe-city-master-planning/mahachai-airport-luxe-city.jpg',
      gallery: [
        '/sv-architects-website/images/projects/mahachai-airport-luxe-city-master-planning/mahachai-airport-luxe-city.jpg'
      ]
    },
    sustainability: {
      leed: true,
      greenBuilding: true,
      energyEfficient: true
    }
  },
  {
    id: 'geo-valley-apartment-masterplan',
    name: 'Geo Valley Apartment and Master Plan',
    category: 'Master Planning',
    type: 'Residential Master Plan',
    location: 'Bangkok, Thailand',
    year: 2019,
    status: 'completed',
    size: '180,000 sqm',
    client: 'Geo Valley Development',
    description: 'Comprehensive master plan for residential development featuring sustainable living, community planning, and integrated amenities.',
    features: [
      'Sustainable living planning',
      'Community planning',
      'Integrated amenities',
      'Residential development',
      'Green space design'
    ],
    images: {
      thumbnail: '/sv-architects-website/images/projects/geo-valley-apartment-masterplan.jpg',
      gallery: [
        '/sv-architects-website/images/projects/geo-valley-apartment-masterplan.jpg',
        '/sv-architects-website/images/projects/mahachai-airport-luxe-masterplan.jpg',
        '/sv-architects-website/images/projects/eec-silicon-technology-park.jpg'
      ]
    },
    sustainability: {
      leed: true,
      greenBuilding: true,
      energyEfficient: true
    }
  },
  {
    id: 'high-speed-rail-stations',
    name: 'High Speed Rail (HSR) Stations',
    category: 'Transportation',
    type: 'Railway Station Complex',
    location: 'Thailand',
    year: 2023,
    status: 'completed',
    size: '200,000 sqm',
    client: 'State Railway of Thailand',
    description: 'Modern high-speed rail station complex featuring efficient passenger flow, sustainable design, and integrated transportation systems.',
    features: [
      'Efficient passenger flow design',
      'Sustainable transportation design',
      'Integrated rail systems',
      'Modern station facilities',
      'Accessibility compliance'
    ],
    images: {
      thumbnail: '/sv-architects-website/images/projects/high-speed-rail-stations.png',
      gallery: [
        '/sv-architects-website/images/projects/high-speed-rail-stations.png',
        '/sv-architects-website/images/projects/transit-oriented-development.jpg',
        '/sv-architects-website/images/projects/tod-service-apartment.jpg'
      ]
    },
    sustainability: {
      leed: true,
      greenBuilding: true,
      energyEfficient: true
    }
  },
  {
    id: 'mrta-yellow-line-project',
    name: 'MRTA Yellow Line Project',
    category: 'Transportation',
    type: 'Metro Rail Project',
    location: 'Bangkok, Thailand',
    year: 2023,
    status: 'completed',
    size: '180,000 sqm',
    client: 'Mass Rapid Transit Authority of Thailand',
    description: 'Metro rail project featuring modern station design, efficient passenger flow, and integrated transportation systems.',
    features: [
      'Modern metro station design',
      'Efficient passenger flow systems',
      'Integrated transportation planning',
      'Accessibility compliance',
      'Sustainable rail infrastructure'
    ],
    images: {
      thumbnail: '/sv-architects-website/images/projects/high-speed-rail-stations.png',
      gallery: [
        '/sv-architects-website/images/projects/high-speed-rail-stations.png',
        '/sv-architects-website/images/projects/transit-oriented-development.jpg',
        '/sv-architects-website/images/projects/tod-service-apartment.jpg'
      ]
    },
    sustainability: {
      leed: true,
      greenBuilding: true,
      energyEfficient: true
    }
  },
  {
    id: 'tod-service-apartment',
    name: 'TOD Service Apartment',
    category: 'Transportation',
    type: 'Transit-Oriented Residential',
    location: 'Bangkok, Thailand',
    year: 2019,
    status: 'completed',
    size: '45,000 sqm',
    client: 'TOD Development Corp.',
    description: 'Service apartment complex designed around transit connectivity featuring efficient access to transportation and sustainable living.',
    features: [
      'Transit connectivity design',
      'Efficient transportation access',
      'Sustainable living features',
      'Service apartment amenities',
      'Urban integration'
    ],
    images: {
      thumbnail: '/sv-architects-website/images/projects/tod-service-apartment.jpg',
      gallery: [
        '/sv-architects-website/images/projects/tod-service-apartment.jpg',
        '/sv-architects-website/images/projects/transit-oriented-development.jpg',
        '/sv-architects-website/images/projects/high-speed-rail-stations.png'
      ]
    },
    sustainability: {
      leed: true,
      greenBuilding: true,
      energyEfficient: true
    }
  },
  {
    id: 'sukhumvit-hills-mixed-use',
    name: 'Sukhumvit Hills',
    category: 'Mixed-Use',
    categories: ['Mixed-Use', 'Commercial'], // Also belongs to Commercial category
    type: 'Mixed-Use Office Development',
    location: 'Sukhumvit 58, Bangkok, Thailand',
    year: 2019,
    status: 'completed',
    size: '35,000 sqm',
    client: 'Sukhumvit Development Co.',
    description: 'On-nut Hill Building, an office tower, and a hotel at Sukhumvit 58 Bangkok. Mixed-use development featuring modern office spaces, hotel facilities, and comprehensive amenities in prime Sukhumvit location.',
    features: [
      'On-nut Hill Building',
      'Office tower development',
      'Hotel facilities',
      'Modern office spaces',
      'Retail integration',
      'Comprehensive amenities',
      'Prime Sukhumvit 58 location',
      'Mixed-use development',
      'Urban integration'
    ],
    images: {
      thumbnail: '/sv-architects-website/images/projects/sukhumvit-hills-mixed-use/sukhumvit-hills-main.png',
      gallery: [
        '/sv-architects-website/images/projects/sukhumvit-hills-mixed-use/sukhumvit-hills-main.png',
        '/sv-architects-website/images/projects/sukhumvit-hills-mixed-use/sukhumvit-hills-detailed.png'
      ]
    },
    sustainability: {
      leed: true,
      greenBuilding: true,
      energyEfficient: true
    }
  },
  {
    id: 'bunditpatanasilpa-auditorium',
    name: 'Bunditpatanasilpa Institute Auditorium',
    category: 'Cultural',
    type: 'Cultural Auditorium',
    location: 'Nakhon Pathom, Thailand',
    year: 2022,
    status: 'completed',
    size: '15,000 sqm',
    client: 'Bunditpatanasilpa Institute',
    description: 'Modern cultural auditorium featuring state-of-the-art acoustic design, flexible performance spaces, and cultural integration for educational and community events.',
    features: [
      'State-of-the-art acoustic design',
      'Flexible performance spaces',
      'Cultural integration',
      'Educational facility design',
      'Community event capabilities',
      'Modern auditorium technology'
    ],
    images: {
      thumbnail: '/sv-architects-website/images/projects/bunditpatanasilpa-auditorium.jpg',
      gallery: [
        '/sv-architects-website/images/projects/bunditpatanasilpa-auditorium.jpg',
        '/sv-architects-website/images/projects/bunditpatanasilpa-auditorium-interior1.jpg',
        '/sv-architects-website/images/projects/bunditpatanasilpa-auditorium-interior2.jpg',
        '/sv-architects-website/images/projects/bunditpatanasilpa-auditorium-gallery.jpg'
      ]
    },
    sustainability: {
      leed: true,
      greenBuilding: true,
      energyEfficient: true
    }
  },
  {
    id: 'baan-huahin',
    name: 'BAAN HUAHIN',
    category: 'Residential',
    type: 'Luxury Villa',
    location: 'Hua Hin, Thailand',
    year: 2019,
    status: 'completed',
    size: '2,500 sqm',
    client: 'Private Client',
    description: 'Little house in forest - A luxury villa designed to harmonize with nature, featuring sustainable design principles and forest integration.',
    features: [
      'Forest integration design',
      'Sustainable architecture',
      'Natural material usage',
      'Privacy and seclusion',
      'Luxury villa amenities',
      'Environmental harmony',
      'Modern forest living'
    ],
    images: {
      thumbnail: '/sv-architects-website/images/projects/baan-huahin-residential/baan-huahin-1.jpg',
      gallery: [
        '/sv-architects-website/images/projects/baan-huahin-residential/baan-huahin-1.jpg',
        '/sv-architects-website/images/projects/baan-huahin-residential/baan-huahin-2.jpg'
      ]
    },
    sustainability: {
      leed: true,
      greenBuilding: true,
      energyEfficient: true
    }
  },
  {
    id: 'vivo-executive-apartment',
    name: 'Vivo Executive Apartment',
    category: 'Residential',
    type: 'Executive Apartment Complex',
    location: 'Penang, Malaysia',
    year: 2019,
    status: 'completed',
    size: '25,000 sqm',
    client: 'Aspen Vision City',
    description: 'An Executive Apartment complex at Aspen Vision City, Penang, Malaysia. Modern residential development featuring executive-level amenities and contemporary design.',
    features: [
      'Executive-level amenities',
      'Modern residential design',
      'Aspen Vision City integration',
      'Contemporary architecture',
      'Premium living spaces',
      'Malaysian market focus',
      'International standards'
    ],
    images: {
      thumbnail: '/sv-architects-website/images/projects/vivo-executive-apartment/vivo-executive-apartment-1.jpg',
      gallery: [
        '/sv-architects-website/images/projects/vivo-executive-apartment/vivo-executive-apartment-1.jpg',
        '/sv-architects-website/images/projects/vivo-executive-apartment/vivo-executive-apartment-2.jpg'
      ]
    },
    sustainability: {
      leed: true,
      greenBuilding: true,
      energyEfficient: true
    }
  },
  {
    id: 'hue-tourist-market',
    name: 'Hue Tourist Market',
    category: 'Master Planning',
    type: 'Tourist Market Development',
    location: 'Hue, Vietnam',
    year: 2020,
    status: 'completed',
    size: '30,000 sqm',
    client: 'Hue Tourism Authority',
    description: 'Hue\'s new hot-spot for tourists from all over the world. A comprehensive master planning project for a tourist market complex featuring cultural integration and sustainable tourism development.',
    features: [
      'Tourist market complex',
      'Cultural integration design',
      'Sustainable tourism development',
      'International visitor focus',
      'Master planning excellence',
      'Vietnamese cultural heritage',
      'Modern market facilities'
    ],
    images: {
      thumbnail: '/sv-architects-website/images/projects/hue-tourist-market-placeholder.svg',
      gallery: [
        '/sv-architects-website/images/projects/hue-tourist-market-placeholder.svg'
      ]
    },
    sustainability: {
      leed: true,
      greenBuilding: true,
      energyEfficient: true
    }
  },
  {
    id: 'zen-village',
    name: 'Zen Village',
    category: 'Master Planning',
    type: 'Commercial Zone Master Plan',
    location: 'Hue, Vietnam',
    year: 2020,
    status: 'completed',
    size: '35,000 sqm',
    client: 'Hue Tourism Authority',
    description: 'Zen village, a tranquil Commercial zone beside the Thein Mu Pagoda. A master planning project that creates a harmonious blend of commercial development and spiritual tranquility.',
    features: [
      'Tranquil commercial zone design',
      'Thein Mu Pagoda integration',
      'Spiritual tranquility focus',
      'Commercial zone master planning',
      'Cultural heritage preservation',
      'Tourist-friendly development',
      'Zen-inspired architecture'
    ],
    images: {
      thumbnail: '/sv-architects-website/images/projects/zen-village-master-plan/zen-village-market.jpg',
      gallery: [
        '/sv-architects-website/images/projects/zen-village-master-plan/zen-village-market.jpg',
        '/sv-architects-website/images/projects/zen-village-master-plan/zen-village-boutique-square.jpg',
        '/sv-architects-website/images/projects/zen-village-master-plan/zen-village-boat-station.jpg'
      ]
    },
    sustainability: {
      leed: true,
      greenBuilding: true,
      energyEfficient: true
    }
  },
  {
    id: 'transit-oriented-development-tod',
    name: 'Transit Oriented Development (TOD)',
    category: 'Master Planning',
    type: 'Transportation Hub Master Plan',
    location: 'Bangkok, Thailand',
    year: 2019,
    status: 'completed',
    size: '120,000 sqm',
    client: 'Bangkok Metropolitan Administration',
    description: 'A new standard for smart growth and urbanization utilizing a transportation hub. Comprehensive master planning project that integrates transportation infrastructure with urban development.',
    features: [
      'Smart growth and urbanization',
      'Transportation hub integration',
      'Pedestrian-friendly design',
      'Skywalk systems',
      'Plaza development',
      'Multi-modal transportation',
      'Urban connectivity',
      'Sustainable transportation planning',
      'Community integration'
    ],
    images: {
      thumbnail: '/sv-architects-website/images/projects/tod-st-plaza.jpg',
      gallery: [
        '/sv-architects-website/images/projects/tod-st-plaza.jpg',
        '/sv-architects-website/images/projects/tod-walk.jpg',
        '/sv-architects-website/images/projects/tod-hnedu.jpg',
        '/sv-architects-website/images/projects/tod-overall.jpg',
        '/sv-architects-website/images/projects/tod-overall-phase.jpg',
        '/sv-architects-website/images/projects/tod-pedes-bridge.jpg',
        '/sv-architects-website/images/projects/tod-pedes-final.jpg',
        '/sv-architects-website/images/projects/tod-plaza.jpg',
        '/sv-architects-website/images/projects/tod-skywalk-pedes.jpg'
      ]
    },
    sustainability: {
      leed: true,
      greenBuilding: true,
      energyEfficient: true
    }
  },
  {
    id: 'geo-valley-apartment-master-plan',
    name: 'Geo Valley Apartment and Master Plan',
    category: 'Master Planning',
    type: 'Mixed-Use Development Master Plan',
    location: 'Jalan Bukit Kukus, Malaysia',
    year: 2019,
    status: 'completed',
    size: '29 acres',
    client: 'Geo Valley Development',
    description: 'A mixed-use development located on a 29-acre freehold land along Jalan Bukit Kukus, Malaysia. Comprehensive master planning project featuring residential apartments and integrated commercial facilities.',
    features: [
      'Mixed-use development planning',
      '29-acre freehold land development',
      'Residential apartment complex',
      'Integrated commercial facilities',
      'Strategic location planning',
      'Malaysian market focus',
      'Comprehensive master planning',
      'Sustainable development approach',
      'Community-focused design'
    ],
    images: {
      thumbnail: '/sv-architects-website/images/projects/geo-valley-apartment-master-plan/geo-valley-apartment-1.jpg',
      gallery: [
        '/sv-architects-website/images/projects/geo-valley-apartment-master-plan/geo-valley-apartment-1.jpg',
        '/sv-architects-website/images/projects/geo-valley-apartment-master-plan/geo-valley-apartment-2.jpg'
      ]
    },
    sustainability: {
      leed: true,
      greenBuilding: true,
      energyEfficient: true
    }
  },
  {
    id: 'hi-tech-sandbox',
    name: 'Hi-tech Sandbox',
    category: 'Interior Design',
    type: 'Technology Hub Interior',
    location: 'EEC Silicon Technology Park, Thailand',
    year: 2022,
    status: 'completed',
    size: '8,500 sqm',
    client: 'EEC Silicon Technology Park',
    description: 'EEC Silicon Tech Park is set to inspire, stimulate and spark the Spirits of Innovation inside of all the brilliant minds. A cutting-edge interior design project featuring modern technology integration and collaborative workspace design.',
    features: [
      'Spirits of Innovation design',
      'Modern technology integration',
      'Collaborative workspace design',
      'Executive office spaces',
      'Training room facilities',
      'Technology hub interior',
      'Innovation-focused environment',
      'Flexible workspace solutions',
      'Advanced meeting facilities'
    ],
    images: {
      thumbnail: '/sv-architects-website/images/projects/hi-tech-sandbox-interior-design/hi-tech-sandbox-main.jpg',
      gallery: [
        '/sv-architects-website/images/projects/hi-tech-sandbox-interior-design/hi-tech-sandbox-main.jpg',
        '/sv-architects-website/images/projects/hi-tech-sandbox-interior-design/hi-tech-sandbox-interior.jpg',
        '/sv-architects-website/images/projects/hi-tech-sandbox-interior-design/hi-tech-sandbox-executive.jpg',
        '/sv-architects-website/images/projects/hi-tech-sandbox-interior-design/hi-tech-sandbox-office.jpg',
        '/sv-architects-website/images/projects/hi-tech-sandbox-interior-design/hi-tech-sandbox-training-room.jpg'
      ]
    },
    sustainability: {
      leed: true,
      greenBuilding: true,
      energyEfficient: true
    }
  },
  {
    id: 'villa-perpetual-interior-design',
    name: 'Villa Perpetual (Rayong) Interior Design',
    category: 'Interior Design',
    type: 'Luxury Villa Interior',
    location: 'Rayong, Thailand',
    year: 2020,
    status: 'completed',
    size: '1,200 sqm',
    client: 'Private Client',
    description: 'An epitome of luxury and modern elegance. Interior design project for Villa Perpetual featuring sophisticated living spaces, elegant dining areas, and luxurious master bedroom design.',
    features: [
      'Epitome of luxury design',
      'Modern elegance',
      'Sophisticated living spaces',
      'Elegant dining areas',
      'Luxurious master bedroom',
      'Premium interior finishes',
      'Contemporary design elements',
      'High-end materials',
      'Timeless aesthetic'
    ],
    images: {
      thumbnail: '/sv-architects-website/images/projects/villa-perpetual-residential/Entrance-1.jpg',
      gallery: [
        '/sv-architects-website/images/projects/villa-perpetual-residential/Entrance-1.jpg',
        '/sv-architects-website/images/projects/villa-perpetual-residential/Bird-eye-view-1-1.jpg',
        '/sv-architects-website/images/projects/villa-perpetual-residential/Landscape-1.jpg'
      ]
    },
    sustainability: {
      leed: true,
      greenBuilding: true,
      energyEfficient: true
    }
  },
  {
    id: 'innovation-center',
    name: 'Innovation Center',
    category: 'Interior Design',
    type: 'Research Center Interior',
    location: 'EEC Silicon Technology Park, Thailand',
    year: 2022,
    status: 'completed',
    size: '12,000 sqm',
    client: 'EEC Silicon Technology Park',
    description: 'EEC Silicon Tech Park is set to inspire, stimulate and spark the Spirits of Innovation inside of all the brilliant minds. A cutting-edge interior design project featuring modern research facilities, collaborative spaces, and innovation-focused environments.',
    features: [
      'Spirits of Innovation design',
      'Modern research facilities',
      'Collaborative innovation spaces',
      'Cutting-edge interior design',
      'Research center interior',
      'Innovation-focused environment',
      'Technology integration',
      'Flexible workspace solutions',
      'Advanced meeting facilities',
      'Hall and presentation spaces'
    ],
    images: {
      thumbnail: '/sv-architects-website/images/projects/innovation-center-interior-design/innovation-center-main.jpg',
      gallery: [
        '/sv-architects-website/images/projects/innovation-center-interior-design/innovation-center-main.jpg',
        '/sv-architects-website/images/projects/innovation-center-interior-design/innovation-center-closeup.jpg',
        '/sv-architects-website/images/projects/innovation-center-interior-design/innovation-center-scene2.jpg',
        '/sv-architects-website/images/projects/innovation-center-interior-design/innovation-center-hall.jpg'
      ]
    },
    sustainability: {
      leed: true,
      greenBuilding: true,
      energyEfficient: true
    }
  },
  {
    id: 'phuket-condominium-interior-design',
    name: 'Phuket Condominium Interior Design',
    category: 'Interior Design',
    type: 'Beachfront Condominium Interior',
    location: 'Phuket, Thailand',
    year: 2020,
    status: 'completed',
    size: '8,500 sqm',
    client: 'Phuket Development Co.',
    description: 'Designed to fully optimize its environment with panoramic views and connectivity to the nature through biophilic designs. Interior design project featuring coastal living aesthetics, natural material integration, and ocean-inspired design elements.',
    features: [
      'Environment optimization design',
      'Panoramic ocean views',
      'Connectivity to nature',
      'Biophilic design principles',
      'Coastal living aesthetics',
      'Natural material integration',
      'Ocean-inspired design elements',
      'Beachfront interior design',
      'Sustainable coastal materials',
      'Modern tropical design'
    ],
    images: {
      thumbnail: '/sv-architects-website/images/projects/phuket-condominium-residential/phuket-condominium-1.jpg',
      gallery: [
        '/sv-architects-website/images/projects/phuket-condominium-residential/phuket-condominium-1.jpg',
        '/sv-architects-website/images/projects/phuket-condominium-residential/phuket-condominium-2.jpg',
        '/sv-architects-website/images/projects/phuket-condominium-residential/phuket-condominium-3.jpg'
      ]
    },
    sustainability: {
      leed: true,
      greenBuilding: true,
      energyEfficient: true
    }
  },
];

/**
 * ============================================================================
 * PROJECT CATEGORIES
 * ============================================================================
 * Available project categories for filtering
 * ============================================================================
 */
const categories = [
  { id: 'all', name: 'All Projects', count: projects.length },
  { id: 'residential', name: 'Residential', count: projects.filter(p => 
    p.category.toLowerCase() === 'residential' || 
    (p.categories && p.categories.some(cat => cat.toLowerCase() === 'residential'))
  ).length },
  { id: 'master-planning', name: 'Master-Planning', count: projects.filter(p => 
    p.category.toLowerCase() === 'master planning' || 
    (p.categories && p.categories.some(cat => cat.toLowerCase() === 'master planning'))
  ).length },
  { id: 'interior-design', name: 'Interior Design', count: projects.filter(p => 
    p.category.toLowerCase() === 'interior design' || 
    (p.categories && p.categories.some(cat => cat.toLowerCase() === 'interior design'))
  ).length },
  { id: 'aviation', name: 'Aviation', count: projects.filter(p => 
    p.category.toLowerCase() === 'aviation' || 
    (p.categories && p.categories.some(cat => cat.toLowerCase() === 'aviation'))
  ).length },
  { id: 'office', name: 'Office', count: projects.filter(p => 
    p.category.toLowerCase() === 'office' || 
    (p.categories && p.categories.some(cat => cat.toLowerCase() === 'office'))
  ).length },
  { id: 'transportation', name: 'Transportation', count: projects.filter(p => 
    p.category.toLowerCase() === 'transportation' || 
    (p.categories && p.categories.some(cat => cat.toLowerCase() === 'transportation'))
  ).length },
  { id: 'mixed-use', name: 'Mixed-Use', count: projects.filter(p => 
    p.category.toLowerCase() === 'mixed-use' || 
    (p.categories && p.categories.some(cat => cat.toLowerCase() === 'mixed-use'))
  ).length },
  { id: 'awards', name: 'Awards', count: projects.filter(p => 
    p.category.toLowerCase() === 'awards' || 
    (p.categories && p.categories.some(cat => cat.toLowerCase() === 'awards'))
  ).length },
  { id: 'commercial', name: 'Commercial', count: projects.filter(p => 
    p.category.toLowerCase() === 'commercial' || 
    (p.categories && p.categories.some(cat => cat.toLowerCase() === 'commercial'))
  ).length },
  { id: 'healthcare', name: 'Healthcare', count: projects.filter(p => 
    p.category.toLowerCase() === 'healthcare' || 
    (p.categories && p.categories.some(cat => cat.toLowerCase() === 'healthcare'))
  ).length },
  { id: 'hospitality', name: 'Hospitality', count: projects.filter(p => 
    p.category.toLowerCase() === 'hospitality' || 
    (p.categories && p.categories.some(cat => cat.toLowerCase() === 'hospitality'))
  ).length },
  { id: 'cultural', name: 'Cultural', count: projects.filter(p => 
    p.category.toLowerCase() === 'cultural' || 
    (p.categories && p.categories.some(cat => cat.toLowerCase() === 'cultural'))
  ).length }
];

/**
 * ============================================================================
 * PROJECT TYPES
 * ============================================================================
 * Available project types for filtering
 * ============================================================================
 */
export const projectTypes = [
  { id: 'all', name: 'All Types', count: projects.length },
  { id: 'airport-terminal', name: 'Airport Terminal', count: projects.filter(p => p.type.toLowerCase().includes('airport terminal')).length },
  { id: 'airport-development', name: 'Airport Development', count: projects.filter(p => p.type.toLowerCase().includes('airport development')).length },
  { id: 'airport-city-master-plan', name: 'Airport City Master Plan', count: projects.filter(p => p.type.toLowerCase().includes('airport city master plan')).length },
  { id: 'mro-facility', name: 'MRO Facility', count: projects.filter(p => p.type.toLowerCase().includes('mro facility')).length },
  { id: 'commercial-development', name: 'Commercial Development', count: projects.filter(p => p.type.toLowerCase().includes('commercial development')).length },
  { id: 'commercial-zone-master-plan', name: 'Commercial Zone Master Plan', count: projects.filter(p => p.type.toLowerCase().includes('commercial zone master plan')).length },
  { id: 'medical-facility', name: 'Medical Facility', count: projects.filter(p => p.type.toLowerCase().includes('medical facility')).length },
  { id: 'hotel-development', name: 'Hotel Development', count: projects.filter(p => p.type.toLowerCase().includes('hotel development')).length },
  { id: 'office-building', name: 'Office Building', count: projects.filter(p => p.type.toLowerCase().includes('office building')).length },
  { id: 'technology-office-complex', name: 'Technology Office Complex', count: projects.filter(p => p.type.toLowerCase().includes('technology office complex')).length },
  { id: 'corporate-training-facility', name: 'Corporate Training Facility', count: projects.filter(p => p.type.toLowerCase().includes('corporate training facility')).length },
  { id: 'research-development-office', name: 'Research & Development Office', count: projects.filter(p => p.type.toLowerCase().includes('research and development office')).length },
  { id: 'mixed-use-office-development', name: 'Mixed-Use Office Development', count: projects.filter(p => p.type.toLowerCase().includes('mixed-use office development')).length },
  { id: 'high-rise-residential', name: 'High-Rise Residential', count: projects.filter(p => p.type.toLowerCase().includes('high-rise residential')).length },
  { id: 'luxury-villa', name: 'Luxury Villa', count: projects.filter(p => p.type.toLowerCase().includes('luxury villa')).length },
  { id: 'luxury-villa-development', name: 'Luxury Villa Development', count: projects.filter(p => p.type.toLowerCase().includes('luxury villa development')).length },
  { id: 'residential-complex', name: 'Residential Complex', count: projects.filter(p => p.type.toLowerCase().includes('residential complex')).length },
  { id: 'beachfront-condominium', name: 'Beachfront Condominium', count: projects.filter(p => p.type.toLowerCase().includes('beachfront condominium')).length },
  { id: 'service-apartment', name: 'Service Apartment', count: projects.filter(p => p.type.toLowerCase().includes('service apartment')).length },
  { id: 'riverside-condominium', name: 'Riverside Condominium', count: projects.filter(p => p.type.toLowerCase().includes('riverside condominium')).length },
  { id: 'resort-style-residence', name: 'Resort-Style Residence', count: projects.filter(p => p.type.toLowerCase().includes('resort-style residence')).length },
  { id: 'executive-apartment', name: 'Executive Apartment', count: projects.filter(p => p.type.toLowerCase().includes('executive apartment')).length },
  { id: 'executive-apartment-complex', name: 'Executive Apartment Complex', count: projects.filter(p => p.type.toLowerCase().includes('executive apartment complex')).length },
  { id: 'transit-oriented-residential', name: 'Transit-Oriented Residential', count: projects.filter(p => p.type.toLowerCase().includes('transit-oriented residential')).length },
  { id: 'airport-terminal-interior', name: 'Airport Terminal Interior', count: projects.filter(p => p.type.toLowerCase().includes('airport terminal interior')).length },
  { id: 'technology-hub-interior', name: 'Technology Hub Interior', count: projects.filter(p => p.type.toLowerCase().includes('technology hub interior')).length },
  { id: 'research-center-interior', name: 'Research Center Interior', count: projects.filter(p => p.type.toLowerCase().includes('research center interior')).length },
  { id: 'luxury-villa-interior', name: 'Luxury Villa Interior', count: projects.filter(p => p.type.toLowerCase().includes('luxury villa interior')).length },
  { id: 'resort-style-residence-interior', name: 'Resort-Style Residence Interior', count: projects.filter(p => p.type.toLowerCase().includes('resort-style residence interior')).length },
  { id: 'beachfront-condominium-interior', name: 'Beachfront Condominium Interior', count: projects.filter(p => p.type.toLowerCase().includes('beachfront condominium interior')).length },
  { id: 'technology-park-master-plan', name: 'Technology Park Master Plan', count: projects.filter(p => p.type.toLowerCase().includes('technology park master plan')).length },
  { id: 'healthcare-campus-master-plan', name: 'Healthcare Campus Master Plan', count: projects.filter(p => p.type.toLowerCase().includes('healthcare campus master plan')).length },
  { id: 'residential-community-master-plan', name: 'Residential Community Master Plan', count: projects.filter(p => p.type.toLowerCase().includes('residential community master plan')).length },
  { id: 'tourist-market-master-plan', name: 'Tourist Market Master Plan', count: projects.filter(p => p.type.toLowerCase().includes('tourist market master plan')).length },
  { id: 'tod-master-plan', name: 'TOD Master Plan', count: projects.filter(p => p.type.toLowerCase().includes('tod master plan')).length },
  { id: 'residential-master-plan', name: 'Residential Master Plan', count: projects.filter(p => p.type.toLowerCase().includes('residential master plan')).length },
  { id: 'mixed-use-development-master-plan', name: 'Mixed-Use Development Master Plan', count: projects.filter(p => p.type.toLowerCase().includes('mixed-use development master plan')).length },
  { id: 'railway-station-complex', name: 'Railway Station Complex', count: projects.filter(p => p.type.toLowerCase().includes('railway station complex')).length },
  { id: 'metro-rail-project', name: 'Metro Rail Project', count: projects.filter(p => p.type.toLowerCase().includes('metro rail project')).length },
  { id: 'transportation-hub-master-plan', name: 'Transportation Hub Master Plan', count: projects.filter(p => p.type.toLowerCase().includes('transportation hub master plan')).length },
  { id: 'cultural-auditorium', name: 'Cultural Auditorium', count: projects.filter(p => p.type.toLowerCase().includes('cultural auditorium')).length },
  { id: 'tourist-market-development', name: 'Tourist Market Development', count: projects.filter(p => p.type.toLowerCase().includes('tourist market development')).length }
];

/**
 * ============================================================================
 * HELPER FUNCTIONS
 * ============================================================================
 * Utility functions for project handling
 * ============================================================================
 */

/**
 * Helper function to convert project name to URL-friendly slug
 * 
 * FUNCTIONALITY:
 * - Converts project names to URL-friendly slugs
 * - Uses predefined mapping for specific projects
 * - Falls back to automatic conversion for unmapped projects
 * 
 * @param projectName - The display name of the project
 * @returns {string} URL-friendly slug for the project
 */
function getProjectSlug(projectName: string): string {
  // Predefined mapping for specific project names to slugs
  const PROJECT_SLUG_MAP: { [key: string]: string } = {
    'U-Tapao Airport New Terminal': 'transportation-infrastructure',
    'Bangkok Commercial Complex': 'leading-architectural-excellence',
    'Healthcare Facility Bangkok': 'healthcare-architecture',
    'Sustainable Office Tower': 'sustainable-design-leadership'
  };
  
  // Return mapped slug or generate from project name
  return PROJECT_SLUG_MAP[projectName] || projectName.toLowerCase().replace(/\s+/g, '-');
}

/**
 * ============================================================================
 * MAIN PROJECTS PAGE COMPONENT
 * ============================================================================
 * Displays all projects with filtering and search capabilities
 * ============================================================================
 */
export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <main className="min-h-screen bg-background-primary">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Projects Filter Section */}
      <ProjectsFilter 
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      
      {/* Projects Grid Section */}
      <ProjectsGrid 
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      
      {/* Statistics Section */}
      <StatisticsSection />
    </main>
  );
}

/**
 * ============================================================================
 * HERO SECTION COMPONENT
 * ============================================================================
 * Hero section with project overview and statistics
 * ============================================================================
 */
const HeroSection = () => {
  return (
    <section className="
      relative // Position context
      py-16 // 64px vertical padding mobile
      md:py-20 // 80px vertical padding tablet
      lg:py-24 // 96px vertical padding desktop
      bg-gradient-to-br // Gradient background
      from-primary-50 // Light blue start
      to-neutral-100 // Light gray end
      overflow-hidden // Hide overflow
    ">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/sv-architects-website/images/patterns/architecture-pattern.svg')] bg-repeat" />
      </div>
      
      <div className="container-responsive relative">
        <motion.div
          variants={fadeIn} // Apply fade-in animation
          initial="hidden" // Start hidden
          animate="visible" // Animate to visible
          className="text-center max-w-4xl mx-auto"
        >
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-black">
            PROJECTS
          </h1>
          
          {/* Subheading */}
          <p className="text-xl max-w-3xl mx-auto text-gray-600 leading-relaxed mb-8">
            Explore our portfolio of award-winning architectural projects across multiple sectors.
          </p>
          
          {/* Project Statistics */}
          <div className="
            grid // Grid layout
            grid-cols-2 // 2 columns on mobile
            md:grid-cols-4 // 4 columns on tablet+
            gap-6 // 24px gap
            mt-12 // 48px top margin
          ">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">{projects.length}</div>
              <div className="text-sm text-text-tertiary">Total Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">{projects.filter(p => p.status === 'completed').length}</div>
              <div className="text-sm text-text-tertiary">Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">{projects.filter(p => p.sustainability?.leed).length}</div>
              <div className="text-sm text-text-tertiary">LEED Certified</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-sm text-text-tertiary">Client Satisfaction</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/**
 * ============================================================================
 * PROJECTS FILTER COMPONENT
 * ============================================================================
 * Filter and search functionality for projects
 * ============================================================================
 */
const ProjectsFilter = ({ 
  activeCategory, 
  setActiveCategory
}: {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}) => {

  return (
    <section className="py-8 bg-white border-b border-neutral-200">
      <div className="container-responsive">
        {/* Category Filter */}
        <div className="mb-6">
          <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 text-center">Filter by Category</h3>
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 md:gap-4"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`
                  px-3 py-2 md:px-6 md:py-3 rounded-full text-xs md:text-sm font-semibold transition-all duration-200
                  ${activeCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }
                `}
              >
                {category.name}
                <span className="ml-1 md:ml-2 text-xs opacity-75">({category.count})</span>
              </button>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

/**
 * ============================================================================
 * PROJECTS GRID COMPONENT
 * ============================================================================
 * Displays filtered projects in a responsive grid
 * ============================================================================
 */
const ProjectsGrid = ({ 
  activeCategory, 
  setActiveCategory
}: {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}) => {
  
  // Filter projects based on active category
  const filteredProjects = projects.filter(project => {
    // Category filtering
    const categoryMatch = activeCategory === 'all' || 
      (project.categories && Array.isArray(project.categories) 
        ? project.categories.some(cat => cat.toLowerCase() === activeCategory)
        : project.category.toLowerCase() === activeCategory);
    
    return categoryMatch;
  });

  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="container-responsive">
        {/* Projects Grid */}
        <motion.div
          variants={staggerContainer} // Apply stagger animation
          initial="hidden" // Start hidden
          whileInView="visible" // Animate when in viewport
          viewport={{ once: true }} // Only animate once
          className="
            grid // Grid layout
            grid-cols-1 // 1 column on mobile
            md:grid-cols-2 // 2 columns on tablet
            lg:grid-cols-3 // 3 columns on desktop
            gap-8 // 32px gap
          "
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                variants={slideUp} // Apply slide-up animation
                initial="hidden" // Start hidden
                animate="visible" // Animate to visible
                exit="hidden" // Exit hidden
                className="
                  group // Group for hover effects
                  card // Card styling
                  overflow-hidden // Hide overflow for image
                  hover:shadow-elegant // Elegant shadow on hover
                  transition-shadow // Smooth shadow transition
                  duration-300 // 300ms transition
                  hover-lift // Lift on hover
                "
              >
                {/* Project Image */}
                <div className="
                  relative // For overlay positioning
                  aspect-[4/3] // 4:3 aspect ratio
                  overflow-hidden // Hide overflow
                ">
                  <Image
                    src={project.images.thumbnail || ''}
                    alt={`${project.name} - ${project.category} project`}
                    className="
                      w-full h-full object-cover
                      group-hover:scale-105 // Subtle zoom on hover
                      transition-transform // Smooth transform
                      duration-500 // 500ms transition
                    "
                    fill
                    objectFit="cover"
                  />
                  
                  {/* Category Badge */}
                  <div className="
                    absolute // Position absolute
                    top-4 // 16px from top
                    left-4 // 16px from left
                    px-2 // 8px horizontal padding
                    py-1 // 4px vertical padding
                    bg-black // Black background
                    text-white // White text
                    text-xs // 12px font
                    font-semibold // Semi-bold
                    tracking-wide // Letter spacing
                    rounded-none // Sharp corners
                  ">
                    {project.category.toUpperCase()}
                  </div>
                  
                  {/* Status Badge */}
                  <div className="
                    absolute // Position absolute
                    top-4 // 16px from top
                    right-4 // 16px from right
                    px-2 // 8px horizontal padding
                    py-1 // 4px vertical padding
                    bg-white // White background
                    text-black // Black text
                    text-xs // 12px font
                    font-semibold // Semi-bold
                    tracking-wide // Letter spacing
                    rounded-none // Sharp corners
                  ">
                    {project.status === 'completed' ? 'COMPLETED' : project.status.toUpperCase()}
                  </div>
                  
                  {/* Overlay on hover */}
                  <div className="
                    absolute // Position over image
                    inset-0 // Cover entire image
                    bg-black // Black background
                    bg-opacity-0 // Transparent by default
                    group-hover:bg-opacity-40 // 40% opacity on hover
                    transition-all // Smooth transition
                    duration-300 // 300ms
                  " />
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-black group-hover:text-black transition-colors duration-200">
                    {project.name}
                  </h3>
                  
                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    <svg className="w-4 h-4 mr-2 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {project.location}
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600 mb-6">
                    <svg className="w-4 h-4 mr-2 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {project.year} • {project.size}
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <span 
                          key={featureIndex}
                          className="
                            px-2 // 8px horizontal padding
                            py-1 // 4px vertical padding
                            bg-neutral-100 // Light gray background
                            text-neutral-700 // Dark gray text
                            rounded-full // Rounded pill
                            text-xs // Extra small text
                          "
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Sustainability Badges */}
                  {project.sustainability && (
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {project.sustainability.leed && (
                          <span className="px-1.5 py-0.5 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                            LEED
                          </span>
                        )}
                        {project.sustainability.greenBuilding && (
                          <span className="px-1.5 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                            Green
                          </span>
                        )}
                        {project.sustainability.energyEfficient && (
                          <span className="px-1.5 py-0.5 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                            Efficient
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  <Link 
                    href={`/projects/${getProjectSlug(project.name)}`}
                    className="
                      inline-flex // Inline flex
                      items-center // Center vertically
                      text-sm // 14px
                      font-semibold // Semi-bold
                      text-black // Black text
                      hover:text-gray-700 // Darker gray on hover
                      transition-colors // Smooth transition
                    "
                  >
                    View Project Details
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <motion.div
            variants={fadeIn} // Apply fade-in animation
            initial="hidden" // Start hidden
            animate="visible" // Animate to visible
            className="text-center py-16"
          >
            <h3 className="text-2xl font-bold mb-4 text-black">No Projects Found</h3>
            <p className="body-lg text-text-secondary mb-8">
              No projects match the selected category. Try selecting a different category.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
              }}
              className="btn-primary hover-lift"
            >
              View All Projects
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

/**
 * ============================================================================
 * STATISTICS SECTION COMPONENT
 * ============================================================================
 * Project statistics and achievements
 * ============================================================================
 */
const StatisticsSection = () => {
  const stats = [
    {
      title: 'Total Project Value',
      value: '฿2.5B+',
      description: 'Combined value of all completed projects'
    },
    {
      title: 'LEED Certified Projects',
      value: '100%',
      description: 'All our projects achieve LEED certification'
    },
    {
      title: 'Client Retention Rate',
      value: '95%',
      description: 'Clients return for additional projects'
    },
    {
      title: 'Awards Received',
      value: '15+',
      description: 'Industry recognition and awards'
    }
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-neutral-50">
      <div className="container-responsive">
        {/* Section Header */}
        <motion.div
          variants={fadeIn} // Apply fade-in animation
          initial="hidden" // Start hidden
          whileInView="visible" // Animate when in viewport
          viewport={{ once: true }} // Only animate once
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-black">Project Statistics</h2>
          <p className="body-lg max-w-3xl mx-auto text-text-secondary">
            Our track record speaks for itself. Here are some key statistics that 
            demonstrate our commitment to excellence and client satisfaction.
          </p>
        </motion.div>

        {/* Statistics Grid */}
        <motion.div
          variants={staggerContainer} // Apply stagger animation
          initial="hidden" // Start hidden
          whileInView="visible" // Animate when in viewport
          viewport={{ once: true }} // Only animate once
          className="
            grid // Grid layout
            grid-cols-1 // 1 column on mobile
            md:grid-cols-2 // 2 columns on tablet
            lg:grid-cols-4 // 4 columns on desktop
            gap-8 // 32px gap
          "
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={slideUp} // Apply slide-up animation
              className="
                card // Card styling
                p-8 // 32px padding
                text-center // Center text
                hover:shadow-elegant // Elegant shadow on hover
                transition-shadow // Smooth shadow transition
                duration-300 // 300ms transition
                hover-lift // Lift on hover
              "
            >
              {/* Stat Value */}
              <div className="text-4xl font-bold text-primary-600 mb-4">
                {stat.value}
              </div>
              
              {/* Stat Title */}
              <h3 className="text-xl font-bold mb-3 text-black">{stat.title}</h3>
              
              {/* Stat Description */}
              <p className="body-sm text-text-secondary">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={fadeIn} // Apply fade-in animation
          initial="hidden" // Start hidden
          whileInView="visible" // Animate when in viewport
          viewport={{ once: true }} // Only animate once
          className="text-center mt-16"
        >
          <h3 className="text-3xl font-bold mb-4 text-black">Ready to Start Your Project?</h3>
          <p className="body-lg mb-8 text-text-secondary max-w-2xl mx-auto">
            Let's discuss how we can bring your architectural vision to life with 
            innovative design solutions and sustainable practices.
          </p>
          <Link
            href="/contact"
            className="btn-primary hover-lift hover-glow"
          >
            Start Your Project
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
