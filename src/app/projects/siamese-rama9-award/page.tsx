/**
 * ============================================================================
 * FILE: src/app/projects/siamese-rama9-award/page.tsx
 * ============================================================================
 * DESCRIPTION: Project detail page for Siamese Rama 9 Award
 * Features single award image and comprehensive project information
 * ============================================================================
 */

'use client';

import { motion } from 'framer-motion';
import { fadeIn, slideUp } from '@/lib/animations';
import Link from 'next/link';

// Project data
const project = {
  id: 'siamese-rama9-award',
  name: 'Siamese Rama 9 Award',
  category: 'Awards',
  type: 'Architectural Excellence Award',
  location: 'Bangkok, Thailand',
  year: 2022,
  status: 'completed',
  size: '45,000 sqm',
  client: 'Siamese Development Co.',
  description: 'Award-winning residential development recognized for architectural excellence, innovative design, and sustainable living features.',
  features: [
    'Architectural excellence recognition',
    'Innovative design features',
    'Sustainable living implementation',
    'Award-winning project',
    'Industry recognition',
    'Contemporary high-rise design'
  ],
  images: [
    '/images/projects/siamese-rama9-award.jpg'
  ],
  sustainability: {
    leed: true,
    greenBuilding: true,
    energyEfficient: true
  }
};

export default function SiameseRama9AwardPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with Award Image */}
      <section className="relative h-screen overflow-hidden">
        <div className="relative w-full h-full">
          <img
            src={project.images[0]}
            alt={`${project.name} - Award Image`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />

          {/* Project Title Overlay */}
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="max-w-4xl text-white"
              >
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                  {project.name}
                </h1>
                <h2 className="text-2xl md:text-3xl mb-4 text-gray-200">
                  {project.type}
                </h2>
                <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                    📍 {project.location}
                  </span>
                  <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                    📅 {project.year}
                  </span>
                  <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                    📏 {project.size}
                  </span>
                  <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                    🏢 {project.client}
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Award Recognition Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-100 rounded-full mb-6">
              <svg className="w-10 h-10 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h2 className="text-4xl font-bold mb-4 text-black">Award Recognition</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The Siamese Rama 9 project has been recognized for its outstanding architectural 
              design and innovative approach to sustainable residential development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-4xl font-bold text-yellow-600 mb-4">🏆</div>
                <h3 className="text-xl font-bold mb-2 text-black">Architectural Excellence</h3>
                <p className="text-gray-600">Recognized for innovative design and sustainable practices</p>
              </div>
            </motion.div>

            <motion.div
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-4xl font-bold text-green-600 mb-4">🌱</div>
                <h3 className="text-xl font-bold mb-2 text-black">Sustainable Design</h3>
                <p className="text-gray-600">LEED certified with green building features</p>
              </div>
            </motion.div>

            <motion.div
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-4xl font-bold text-blue-600 mb-4">🏢</div>
                <h3 className="text-xl font-bold mb-2 text-black">Industry Recognition</h3>
                <p className="text-gray-600">Awarded for outstanding residential development</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Details Section */}
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
                  <h3 className="text-3xl font-bold mb-6 text-black">Award Details</h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    The Siamese Rama 9 project represents a landmark achievement in residential 
                    architecture, combining contemporary design with sustainable living principles. 
                    This award-winning development has been recognized by industry professionals 
                    for its innovative approach to high-rise residential design, comprehensive 
                    amenities, and commitment to environmental responsibility.
                  </p>
                </div>

                <div>
                  <h4 className="text-2xl font-bold mb-4 text-black">Award Features</h4>
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

                {/* Sustainability Badges */}
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
                  </div>
                </div>
              </motion.div>

              {/* Project Specifications */}
              <motion.div
                variants={slideUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-lg"
              >
                <h3 className="text-3xl font-bold mb-6 text-black">Award Specifications</h3>
                
                <div className="space-y-6">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600 font-medium">Award Type</span>
                    <span className="text-black font-semibold">{project.type}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600 font-medium">Location</span>
                    <span className="text-black font-semibold">{project.location}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600 font-medium">Year Awarded</span>
                    <span className="text-black font-semibold">{project.year}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600 font-medium">Project Size</span>
                    <span className="text-black font-semibold">{project.size}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600 font-medium">Status</span>
                    <span className="text-black font-semibold capitalize">{project.status}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600 font-medium">Client</span>
                    <span className="text-black font-semibold">{project.client}</span>
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    href="/projects"
                    className="inline-flex items-center px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-200"
                  >
                    View All Projects
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

      {/* Award Image Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold mb-4 text-black">Award Image</h3>
            <p className="text-lg text-gray-600">
              The prestigious Siamese Rama 9 Award recognizing architectural excellence
            </p>
          </motion.div>

          <motion.div
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg shadow-2xl">
              <img
                src={project.images[0]}
                alt={`${project.name} - Award Image`}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
