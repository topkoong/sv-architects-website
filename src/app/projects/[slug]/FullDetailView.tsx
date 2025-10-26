/**
 * ============================================================================
 * FILE: src/app/projects/[slug]/FullDetailView.tsx
 * ============================================================================
 * DESCRIPTION: Full detail view component for projects with complete information
 * 
 * This component displays comprehensive project information including:
 * - Hero section with image slider
 * - Project overview and features
 * - Specifications
 * - Image gallery
 * - Back to projects button
 * 
 * @author SV Architects Development Team
 * @version 1.0.0
 * ============================================================================
 */

'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ProjectData, getStatusInfo } from '@/types/project';

interface FullDetailViewProps {
  project: ProjectData;
}

/**
 * Animation variants
 */
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const slideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
};

/**
 * Navigation arrows component
 */
const NavigationArrows = ({ onPrev, onNext }: { onPrev: () => void; onNext: () => void }) => (
  <>
    <button
      onClick={onPrev}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
      aria-label="Previous image"
    >
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    
    <button
      onClick={onNext}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
      aria-label="Next image"
    >
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </>
);

/**
 * Image indicators component
 */
const ImageIndicators = ({ 
  total, 
  current, 
  onSelect 
}: { 
  total: number; 
  current: number; 
  onSelect: (index: number) => void; 
}) => (
  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
    <div className="flex space-x-3">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onSelect(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            index === current 
              ? 'bg-white scale-125' 
              : 'bg-white/50 hover:bg-white/75'
          }`}
          aria-label={`Go to image ${index + 1}`}
        />
      ))}
    </div>
  </div>
);

/**
 * Hero section component
 */
const HeroSection = ({ project }: { project: ProjectData }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={project.images[currentImageIndex]?.url || ''}
              alt={project.images[currentImageIndex]?.alt || project.name}
              fill
              className="object-cover"
              unoptimized
              priority={currentImageIndex === 0}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40" />
          </motion.div>
        </AnimatePresence>

        {/* Project Title Overlay */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 pt-24 md:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-4xl text-white"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                {project.name}
              </h1>
              {project.tagline && (
                <h2 className="text-2xl md:text-3xl mb-4 text-gray-200">
                  {project.tagline}
                </h2>
              )}
              {project.description && (
                <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl">
                  {project.description}
                </p>
              )}
              <div className="flex flex-wrap gap-4 text-sm">
                {project.location && (
                  <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                    📍 {project.location}
                  </span>
                )}
                {project.year && (
                  <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                    📅 {project.year}
                  </span>
                )}
                {project.size && (
                  <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                    📏 {project.size}
                  </span>
                )}
                {project.type && (
                  <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                    🏢 {project.type}
                  </span>
                )}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Navigation */}
        {project.images.length > 1 && (
          <>
            <NavigationArrows onPrev={prevImage} onNext={nextImage} />
            <ImageIndicators 
              total={project.images.length}
              current={currentImageIndex}
              onSelect={goToImage}
            />
          </>
        )}
      </div>
    </section>
  );
};

/**
 * Overview section component
 */
const OverviewSection = ({ project }: { project: ProjectData }) => (
  <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-indigo-50 to-purple-50">
    <div className="container mx-auto px-4">
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center justify-center w-20 h-20 bg-indigo-100 rounded-full mb-6">
          <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>
        <h2 className="text-4xl font-bold mb-4 text-black">Project Excellence</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {project.name} represents the pinnacle of architectural excellence, 
          seamlessly integrating innovative design with sustainable practices.
        </p>
      </motion.div>

      {project.features && project.features.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {project.features.slice(0, 3).map((feature, index) => (
            <motion.div
              key={index}
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-4xl font-bold text-indigo-600 mb-4">
                  {index === 0 ? '🏗️' : index === 1 ? '🌱' : '⚡'}
                </div>
                <h3 className="text-xl font-bold mb-2 text-black">Key Feature</h3>
                <p className="text-gray-600">{feature}</p>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  </section>
);

/**
 * Specifications section component
 */
const SpecificationsSection = ({ project }: { project: ProjectData }) => (
  <section className="py-16 md:py-20 lg:py-24">
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Project Information */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold mb-6 text-black">Project Overview</h3>
              {project.description && (
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  {project.description}
                </p>
              )}
            </div>

            {project.features && project.features.length > 0 && (
              <div>
                <h4 className="text-2xl font-bold mb-4 text-black">Key Features</h4>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-gray-600">
                      <svg className="w-5 h-5 mr-3 mt-0.5 text-black flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Sustainability Badges */}
            {project.sustainability && (
              <div>
                <h4 className="text-2xl font-bold mb-4 text-black">Sustainability</h4>
                <div className="flex flex-wrap gap-3">
                  {project.sustainability.leed && (
                    <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                      LEED Certified
                    </span>
                  )}
                  {project.sustainability.greenBuilding && (
                    <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      Green Building
                    </span>
                  )}
                  {project.sustainability.energyEfficient && (
                    <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                      Energy Efficient
                    </span>
                  )}
                  {project.sustainability.additionalFeatures?.map((feature, index) => (
                    <span key={index} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* Project Specifications */}
          <motion.div
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gray-50 p-8 rounded-lg"
          >
            <h3 className="text-3xl font-bold mb-6 text-black">Project Specifications</h3>
            
            <div className="space-y-6">
              {project.type && (
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600 font-medium">Project Type</span>
                  <span className="text-black font-semibold">{project.type}</span>
                </div>
              )}
              
              {project.location && (
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600 font-medium">Location</span>
                  <span className="text-black font-semibold">{project.location}</span>
                </div>
              )}
              
              {project.year && (
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600 font-medium">Year</span>
                  <span className="text-black font-semibold">{project.year}</span>
                </div>
              )}
              
              {project.size && (
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600 font-medium">Size</span>
                  <span className="text-black font-semibold">{project.size}</span>
                </div>
              )}
              
              {project.status && (
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600 font-medium">Status</span>
                  <span className={`px-2 py-1 rounded-full text-sm font-medium ${getStatusInfo(project.status).color}`}>
                    {getStatusInfo(project.status).label}
                  </span>
                </div>
              )}
              
              {project.client && (
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600 font-medium">Client</span>
                  <span className="text-black font-semibold">{project.client}</span>
                </div>
              )}
            </div>

            <div className="mt-8">
              <Link
                href="/projects"
                className="inline-flex items-center px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-200"
              >
                ← Back to Projects
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

/**
 * Gallery section component
 */
const GallerySection = ({ project }: { project: ProjectData }) => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold mb-4 text-black">Project Gallery</h3>
          <p className="text-lg text-gray-600">
            Explore the architectural excellence of {project.name}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {project.images.map((image, index) => (
            <motion.div
              key={index}
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                {image.caption && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <p className="text-white text-sm">{image.caption}</p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/**
 * Main FullDetailView component
 */
export default function FullDetailView({ project }: FullDetailViewProps) {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection project={project} />
      <OverviewSection project={project} />
      <SpecificationsSection project={project} />
      <GallerySection project={project} />
    </main>
  );
}
