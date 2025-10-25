/**
 * ============================================================================
 * FILE: src/data/projects.ts
 * ============================================================================
 * DESCRIPTION: Projects data for SV Architects portfolio
 * Centralized data source for all project information
 * ============================================================================
 */

export interface Project {
  id: string;
  name: string;
  category: string;
  categories?: string[];
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

export const projects: Project[] = [
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
      thumbnail: '/sv-architects-website/images/projects/don-mueang-international-airport-terminal-3-aviation/IMG_2621.jpeg',
      gallery: [
        '/sv-architects-website/images/projects/don-mueang-international-airport-terminal-3-aviation/IMG_2621.jpeg',
        '/sv-architects-website/images/projects/don-mueang-international-airport-terminal-3-aviation/IMG_2622.jpeg',
        '/sv-architects-website/images/projects/don-mueang-international-airport-terminal-3-aviation/IMG_2623.jpeg',
        '/sv-architects-website/images/projects/don-mueang-international-airport-terminal-3-aviation/IMG_2624.jpeg',
        '/sv-architects-website/images/projects/don-mueang-international-airport-terminal-3-aviation/IMG_2625.jpeg'
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
      thumbnail: '/sv-architects-website/images/projects/phra-nangchao-sirikit-hospital/phra-nangchao-sirikit-hospital.jpg',
      gallery: [
        '/sv-architects-website/images/projects/phra-nangchao-sirikit-hospital/phra-nangchao-sirikit-hospital.jpg',
        '/sv-architects-website/images/projects/somdech-phra-nangchao-sirikit-hospital-1.jpg',
        '/sv-architects-website/images/projects/somdech-phra-nangchao-sirikit-hospital-2.jpg',
        '/sv-architects-website/images/projects/somdech-phra-nangchao-sirikit-hospital-3.jpg',
        '/sv-architects-website/images/projects/somdech-phra-nangchao-sirikit-hospital-4.jpg'
      ]
    },
    sustainability: {
      leed: true,
      greenBuilding: true,
      energyEfficient: true
    }
  }
];