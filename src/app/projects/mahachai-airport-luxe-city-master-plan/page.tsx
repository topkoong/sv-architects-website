/**
 * ============================================================================
 * FILE: src/app/projects/mahachai-airport-luxe-city-master-plan/page.tsx
 * ============================================================================
 * DESCRIPTION: Project detail page for Mahachai Airport Luxe City Master Plan
 * Features single image display and comprehensive project information
 * Note: This project uses the same image for all slides in the carousel
 * ============================================================================
 */

'use client';

import { motion } from 'framer-motion';
import { fadeIn, slideUp } from '@/lib/animations';
import Link from 'next/link';

// Project data
const project = {
  id: 'mahachai-airport-luxe-city-master-plan',
  name: 'Mahachai Airport Luxe City Master Plan',
  category: 'Master Planning',
  type: 'Airport City Master Plan',
  location: 'Samut Sakhon, Thailand',
  year: 2019,
  status: 'completed',
  size: '400,000 sqm',
  client: 'Mahachai Development Corporation',
  tagline: 'INNOVATIVE INFRASTRUCTURE AND MASTER PLANNING CONCEPT for a Lifestyle in the Fast Lane',
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
  images: [
    '/images/projects/mahachai-airport-luxe-city.jpg'
  ],
  sustainability: {
    leed: true,
    greenBuilding: true,
    energyEfficient: true
  }
};

export default function MahachaiAirportLuxeCityMasterPlanPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with Master Plan Image */}
      <section className="relative h-screen overflow-hidden">
        <div className="relative w-full h-full">
          <img
            src={project.images[0]}
            alt={`${project.name} - Master Plan Image`}
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
                  {project.tagline}
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
                    🗺️ Master Planning
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Master Planning Excellence Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
              <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            </div>
            <h2 className="text-4xl font-bold mb-4 text-black">Master Planning Excellence</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The Mahachai Airport Luxe City Master Plan represents innovative infrastructure and master planning 
              concept designed for a lifestyle in the fast lane, combining aviation facilities with luxury amenities.
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
                <div className="text-4xl font-bold text-blue-600 mb-4">🗺️</div>
                <h3 className="text-xl font-bold mb-2 text-black">Master Planning</h3>
                <p className="text-gray-600">Innovative infrastructure and master planning concept for fast lane lifestyle</p>
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
                <div className="text-4xl font-bold text-green-600 mb-4">✈️</div>
                <h3 className="text-xl font-bold mb-2 text-black">Aviation Integration</h3>
                <p className="text-gray-600">Comprehensive aviation facility planning with luxury amenity integration</p>
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
                <div className="text-4xl font-bold text-purple-600 mb-4">🏙️</div>
                <h3 className="text-xl font-bold mb-2 text-black">Urban Planning</h3>
                <p className="text-gray-600">Integrated urban planning with airport city development and commercial integration</p>
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
                  <h3 className="text-3xl font-bold mb-6 text-black">Project Overview</h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    The Mahachai Airport Luxe City Master Plan represents a groundbreaking approach to airport city development, 
                    seamlessly integrating aviation facilities with luxury amenities and comprehensive urban planning. This 
                    innovative master planning concept is designed for a lifestyle in the fast lane, creating a dynamic 
                    environment that serves both aviation and commercial needs while maintaining sustainable development principles.
                  </p>
                </div>

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
                <h3 className="text-3xl font-bold mb-6 text-black">Project Specifications</h3>
                
                <div className="space-y-6">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600 font-medium">Project Type</span>
                    <span className="text-black font-semibold">{project.type}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600 font-medium">Location</span>
                    <span className="text-black font-semibold">{project.location}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600 font-medium">Year Completed</span>
                    <span className="text-black font-semibold">{project.year}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600 font-medium">Total Area</span>
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
                  
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600 font-medium">Planning Concept</span>
                    <span className="text-black font-semibold">Fast Lane Lifestyle</span>
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

      {/* Master Plan Image Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold mb-4 text-black">Master Plan Design</h3>
            <p className="text-lg text-gray-600">
              Innovative infrastructure and master planning concept for a lifestyle in the fast lane
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
                alt={`${project.name} - Master Plan Design`}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
