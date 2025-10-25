/**
 * ============================================================================
 * FILE: src/app/projects/page.tsx
 * ============================================================================
 * DESCRIPTION: Projects showcase page displaying SV Architects' portfolio
 * Updated to use centralized project data with dynamic routes
 * 
 * FEATURES:
 * - Complete project portfolio showcase using centralized data
 * - Project categories and filtering
 * - Dynamic project links to [slug] routes
 * - High-quality project images with proper paths
 * - Project statistics and achievements
 * - SEO optimized with comprehensive metadata
 * - Responsive design with mobile-first approach
 * - Smooth animations and transitions
 * 
 * DEPENDENCIES:
 * - framer-motion: For smooth animations
 * - @/data/projects: Centralized project data
 * - @/types/project: Type definitions
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

import Image from 'next/image';
// Import Next.js components
import Link from 'next/link';
// Import React components
import { useState } from 'react';

// Import centralized data and types
import { projects, getAvailableCategories, getProjectStats } from '@/data/projects';
import { getProjectThumbnail, getCategoryDisplayName, getStatusInfo } from '@/types/project';

// Note: Metadata is handled by the layout.tsx file for client components

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
  const stats = getProjectStats();
  
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
              <div className="text-3xl font-bold text-primary-600 mb-2">{stats.total}</div>
              <div className="text-sm text-text-tertiary">Total Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">{stats.completed}</div>
              <div className="text-sm text-text-tertiary">Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">{stats.ongoing}</div>
              <div className="text-sm text-text-tertiary">Ongoing</div>
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
  const availableCategories = getAvailableCategories();
  const stats = getProjectStats();

  // Create categories array with counts
  const categories = [
    { id: 'all', name: 'All Projects', count: stats.total },
    ...availableCategories.map(category => ({
      id: category,
      name: getCategoryDisplayName(category),
      count: stats.byCategory.find(cat => cat.category === category)?.count || 0
    }))
  ];

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
      project.category === activeCategory;
    
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
                    src={getProjectThumbnail(project)}
                    alt={`${project.name} - ${getCategoryDisplayName(project.category)} project`}
                    className="
                      w-full h-full object-cover
                      group-hover:scale-105 // Subtle zoom on hover
                      transition-transform // Smooth transform
                      duration-500 // 500ms transition
                    "
                    fill
                    objectFit="cover"
                    unoptimized
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
                    {getCategoryDisplayName(project.category).toUpperCase()}
                  </div>
                  
                  {/* Status Badge */}
                  {project.status && (
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
                      {getStatusInfo(project.status).label.toUpperCase()}
                    </div>
                  )}
                  
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
                  
                  {project.location && (
                    <div className="flex items-center text-sm text-gray-600 mb-3">
                      <svg className="w-4 h-4 mr-2 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {project.location}
                    </div>
                  )}
                  
                  {project.year && (
                    <div className="flex items-center text-sm text-gray-600 mb-6">
                      <svg className="w-4 h-4 mr-2 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {project.year}
                      {project.size && ` • ${project.size}`}
                    </div>
                  )}

                  {project.description && (
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                  )}

                  {/* Key Features */}
                  {project.features && project.features.length > 0 && (
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
                  )}

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
                    href={`/projects/${project.id}`}
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
  const stats = getProjectStats();
  
  const displayStats = [
    {
      title: 'Total Projects',
      value: stats.total.toString(),
      description: 'Comprehensive portfolio across multiple sectors'
    },
    {
      title: 'Completed Projects',
      value: stats.completed.toString(),
      description: 'Successfully delivered architectural solutions'
    },
    {
      title: 'Ongoing Projects',
      value: stats.ongoing.toString(),
      description: 'Currently in development'
    },
    {
      title: 'Project Categories',
      value: stats.byCategory.length.toString(),
      description: 'Diverse expertise across sectors'
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
          {displayStats.map((stat, index) => (
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