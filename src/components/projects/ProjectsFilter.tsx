/**
 * ============================================================================
 * FILE: src/components/projects/ProjectsFilter.tsx
 * ============================================================================
 * DESCRIPTION: Client-side projects filter component
 * ============================================================================
 */

'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn, slideUp, staggerContainer } from '@/lib/animations';
import { OptimizedImage } from '@/components/ui/OptimizedImage';

interface Project {
  id: string;
  name: string;
  category: string;
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

interface ProjectsFilterProps {
  projects: Project[];
  categories: Array<{ id: string; name: string; count: number }>;
}

export const ProjectsFilter = ({ projects, categories }: ProjectsFilterProps) => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Filter projects based on active category
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category.toLowerCase() === activeCategory);

  return (
    <>
      {/* Projects Filter */}
      <section className="py-8 bg-white border-b border-neutral-200">
        <div className="container-responsive">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`
                  px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200
                  ${activeCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }
                `}
              >
                {category.name}
                <span className="ml-2 text-xs opacity-75">({category.count})</span>
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="container-responsive">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project) => (
                <motion.article
                  key={project.id}
                  variants={slideUp}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="group card overflow-hidden hover:shadow-elegant transition-shadow duration-300 hover-lift"
                >
                  {/* Project Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <OptimizedImage
                      src={project.images.thumbnail}
                      alt={`${project.name} - ${project.category} project`}
                      fill
                      className="group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Status Badge */}
                    <div className={`
                      absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold
                      ${project.status === 'completed'
                        ? 'bg-green-100 text-green-700'
                        : project.status === 'ongoing'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-yellow-100 text-yellow-700'
                      }
                    `}>
                      {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-text-primary">
                      {project.category}
                    </div>
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300" />
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="heading-sm mb-2 group-hover:text-primary-600 transition-colors duration-200">
                      {project.name}
                    </h3>
                    
                    <div className="flex items-center text-sm text-text-tertiary mb-3">
                      <svg className="w-4 h-4 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {project.location}
                    </div>
                    
                    <div className="flex items-center text-sm text-text-tertiary mb-4">
                      <svg className="w-4 h-4 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {project.year} • {project.size}
                    </div>

                    <p className="body-sm mb-4 text-text-secondary">
                      {project.description}
                    </p>

                    {/* Key Features */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.features.slice(0, 3).map((feature, featureIndex) => (
                          <span 
                            key={featureIndex}
                            className="px-2 py-1 bg-neutral-100 text-neutral-700 rounded-full text-xs"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Sustainability Badges */}
                    {project.sustainability && (
                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                          {project.sustainability.leed && (
                            <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                              LEED Certified
                            </span>
                          )}
                          {project.sustainability.greenBuilding && (
                            <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                              Green Building
                            </span>
                          )}
                          {project.sustainability.energyEfficient && (
                            <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                              Energy Efficient
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    <a 
                      href={`/projects/${project.id}`}
                      className="inline-flex items-center text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      View Project Details
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* No Projects Message */}
          {filteredProjects.length === 0 && (
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="text-center py-16"
            >
              <h3 className="heading-md mb-4 text-text-primary">No Projects Found</h3>
              <p className="body-lg text-text-secondary mb-8">
                No projects match the selected category. Try selecting a different category.
              </p>
              <button
                onClick={() => setActiveCategory('all')}
                className="btn-primary hover-lift"
              >
                View All Projects
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
};
