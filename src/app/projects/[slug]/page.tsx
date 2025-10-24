/**
 * ============================================================================
 * FILE: src/app/projects/[slug]/page.tsx
 * ============================================================================
 * DESCRIPTION: Individual project detail page
 * Displays detailed information about a specific architectural project
 * ============================================================================
 */

// Import Next.js components
import Link from 'next/link';
// Import custom components

/**
 * ============================================================================
 * STATIC PARAMS GENERATION
 * ============================================================================
 * Required for static export (GitHub Pages)
 * Pre-generates all possible project routes at build time
 * ============================================================================
 */
export async function generateStaticParams() {
  const projectSlugs = [
    'leading-architectural-excellence',
    'sustainable-design-leadership',
    'transportation-infrastructure',
    'healthcare-architecture'
  ];

  return projectSlugs.map((slug) => ({
    slug: slug,
  }));
}

/**
 * ============================================================================
 * PROJECT DATA
 * ============================================================================
 * Individual project information
 * ============================================================================
 */
const projects = [
  {
    id: 1,
    slug: 'leading-architectural-excellence',
    title: 'Leading Architectural Excellence',
    subtitle: 'Innovative Design Solutions for Modern Thailand',
    description: 'SV Architects delivers cutting-edge architectural solutions across commercial, residential, healthcare, and transportation sectors.',
    longDescription: 'This comprehensive project showcases our expertise in delivering innovative architectural solutions across multiple sectors. Our team has successfully completed numerous projects that demonstrate our commitment to excellence, sustainability, and client satisfaction. From initial concept development to final construction, we ensure every project meets the highest standards of design and functionality.',
    image: '/images/projects/bunditpatanasilpa-auditorium.jpg',
    category: 'Commercial',
    status: 'completed',
    year: '2024',
    location: 'Bangkok, Thailand',
    size: '50,000 sqm',
    client: 'Major Development Corporation',
    team: ['Suchart Bannapanya', 'Picharn Foongkiatcharoen', 'Nobpadol Suvachananonda'],
    gallery: [
      '/images/projects/bunditpatanasilpa-auditorium.jpg',
      '/images/projects/u-tapao-airport.jpg',
      '/images/projects/mahachai-airport.jpg'
    ],
    features: [
      'Sustainable design principles',
      'LEED certification ready',
      'Modern architectural aesthetics',
      'Energy-efficient systems',
      'Accessible design compliance'
    ],
    technologies: [
      'BIM modeling',
      '3D visualization',
      'Sustainable materials',
      'Smart building systems'
    ]
  },
  {
    id: 2,
    slug: 'sustainable-design-leadership',
    title: 'Sustainable Design Leadership',
    subtitle: 'LEED-Certified Projects Across Thailand',
    description: 'Pioneering sustainable architecture with LEED certification expertise and eco-friendly design principles.',
    longDescription: 'Our sustainable design leadership project represents a breakthrough in eco-friendly architecture. We have successfully implemented LEED certification standards across multiple projects, demonstrating our commitment to environmental responsibility. This project showcases innovative green building technologies, renewable energy integration, and sustainable material selection.',
    image: '/images/projects/geo-valley-apartment.jpg',
    category: 'Sustainability',
    status: 'completed',
    year: '2024',
    location: 'Multiple Locations, Thailand',
    size: '75,000 sqm',
    client: 'Green Building Council Thailand',
    team: ['Jatuwat Varodompun', 'Picharn Foongkiatcharoen', 'Vichien Wongnimmarn'],
    gallery: [
      '/images/projects/geo-valley-apartment.jpg',
      '/images/projects/chaopraya-mahanatee.jpg',
      '/images/projects/zen-village.jpg'
    ],
    features: [
      'LEED Platinum certification',
      'Solar panel integration',
      'Rainwater harvesting',
      'Green roof systems',
      'Natural ventilation design'
    ],
    technologies: [
      'Energy modeling',
      'Solar analysis',
      'Water conservation systems',
      'Sustainable materials'
    ]
  },
  {
    id: 3,
    slug: 'transportation-infrastructure',
    title: 'Transportation Infrastructure',
    subtitle: 'Modern Mobility Solutions',
    description: 'Designing the future of transportation with innovative airport terminals and railway platforms.',
    longDescription: 'Our transportation infrastructure projects represent the future of mobility in Thailand. We have designed state-of-the-art airport terminals, railway stations, and transportation hubs that combine functionality with aesthetic appeal. These projects focus on passenger experience, operational efficiency, and sustainable design principles.',
    image: '/images/projects/u-tapao-airport.jpg',
    category: 'Transportation',
    status: 'completed',
    year: '2023',
    location: 'Bangkok International Airport',
    size: '120,000 sqm',
    client: 'Airports of Thailand',
    team: ['Suchart Bannapanya', 'Jovenel Baldomaro Monilla', 'Somchai Wongsa'],
    gallery: [
      '/images/projects/u-tapao-airport.jpg',
      '/images/projects/mahachai-airport.jpg',
      '/images/projects/bunditpatanasilpa-auditorium.jpg'
    ],
    features: [
      'Modern terminal design',
      'Efficient passenger flow',
      'Advanced security systems',
      'Sustainable energy solutions',
      'Accessibility compliance'
    ],
    technologies: [
      'Passenger flow modeling',
      'Security system integration',
      'Energy management systems',
      'Digital wayfinding'
    ]
  },
  {
    id: 4,
    slug: 'healthcare-architecture',
    title: 'Healthcare Architecture',
    subtitle: 'Healing Through Design',
    description: 'Creating healthcare facilities that promote healing and enhance patient care experiences.',
    longDescription: 'Our healthcare architecture projects focus on creating healing environments that enhance patient care and support medical staff efficiency. We have designed hospitals, clinics, and medical centers that prioritize patient comfort, operational efficiency, and medical functionality. These projects incorporate evidence-based design principles and the latest medical technology integration.',
    image: '/images/projects/somdech-phra-nangchao-sirikit-hospital.jpg',
    category: 'Healthcare',
    status: 'completed',
    year: '2023',
    location: 'Bangkok Medical District',
    size: '85,000 sqm',
    client: 'Bangkok Health System',
    team: ['Nobpadol Suvachananonda', 'Picharn Foongkiatcharoen', 'Niran Siriporn'],
    gallery: [
      '/images/projects/somdech-phra-nangchao-sirikit-hospital.jpg',
      '/images/projects/healthcare-facility.jpg',
      '/images/projects/government-savings-bank.jpg'
    ],
    features: [
      'Patient-centered design',
      'Medical equipment integration',
      'Infection control measures',
      'Natural lighting systems',
      'Healing garden spaces'
    ],
    technologies: [
      'Medical equipment planning',
      'HVAC system design',
      'Infection control systems',
      'Patient monitoring integration'
    ]
  }
];

/**
 * ============================================================================
 * MAIN PROJECT DETAIL COMPONENT
 * ============================================================================
 * Individual project detail page component
 * ============================================================================
 */
export default async function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  
  // Find the project by slug
  const project = projects.find(p => p.slug === slug);
  
  // If project not found, show 404
  if (!project) {
    return (
      <main className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-xl mb-8">The project you're looking for doesn't exist.</p>
          <Link 
            href="/projects" 
            className="inline-block bg-black hover:bg-gray-800 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-black text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <nav className="mb-8" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-sm">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li className="text-gray-400">/</li>
                <li>
                  <Link href="/projects" className="text-gray-400 hover:text-white transition-colors">
                    Projects
                  </Link>
                </li>
                <li className="text-gray-400">/</li>
                <li className="text-white font-medium">{project.title}</li>
              </ol>
            </nav>

            {/* Project Title */}
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {project.title}
            </h1>

            {/* Project Subtitle */}
            <h2 className="text-2xl md:text-3xl mb-6 text-gray-200">
              {project.subtitle}
            </h2>

            {/* Project Description */}
            <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-3xl leading-relaxed">
              {project.description}
            </p>

            {/* Project Meta */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div>
                <div className="text-sm text-gray-400 mb-1">Category</div>
                <div className="font-semibold">{project.category}</div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-1">Status</div>
                <div className="font-semibold capitalize">{project.status}</div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-1">Year</div>
                <div className="font-semibold">{project.year}</div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-1">Size</div>
                <div className="font-semibold">{project.size}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Image Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-black">
              Project Gallery
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.gallery.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Project Description */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-black">Project Overview</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {project.longDescription}
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-black mb-2">Client</h4>
                    <p className="text-gray-700">{project.client}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-2">Location</h4>
                    <p className="text-gray-700">{project.location}</p>
                  </div>
                </div>
              </div>

              {/* Project Features */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-black">Key Features</h3>
                <ul className="space-y-3 mb-8">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-black mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-2xl font-bold mb-6 text-black">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-black">
              Project Team
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.team.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h4 className="font-semibold text-black mb-2">{member}</h4>
                    <p className="text-gray-600 text-sm">Team Member</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Back to Projects */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-black">Explore More Projects</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
            Discover our complete portfolio of innovative architectural solutions.
          </p>
          <Link 
            href="/projects" 
            className="inline-block bg-black hover:bg-gray-800 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            View All Projects
          </Link>
        </div>
      </section>
    </main>
  );
}