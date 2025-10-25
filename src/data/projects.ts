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
  }];
