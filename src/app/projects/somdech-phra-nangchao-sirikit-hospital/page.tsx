/**
 * ============================================================================
 * FILE: src/app/projects/somdech-phra-nangchao-sirikit-hospital/page.tsx
 * ============================================================================
 * DESCRIPTION: Project detail page for Somdech Phra Nangchao Sirikit Hospital
 * Features single image and comprehensive project information
 * ============================================================================
 */

'use client';

import { motion } from 'framer-motion';
import { fadeIn, slideUp } from '@/lib/animations';
import Link from 'next/link';

// Project data
const project = {
  id: 'somdech-phra-nangchao-sirikit-hospital',
  name: 'Somdech Phra Nangchao Sirikit Hospital',
  category: 'Healthcare',
  type: 'Medical Facility',
  location: 'Bangkok, Thailand',
  year: 2022,
  status: 'completed',
  size: '45,000 sqm',
  client: 'Somdech Phra Nangchao Sirikit Hospital',
  tagline: 'STATE-OF-THE-ART MEDICAL HUB for Clinical Excellence',
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
  images: [
    '/images/projects/somdech-phra-nangchao-sirikit-hospital.jpg'
  ],
  sustainability: {
    leed: true,
    greenBuilding: true,
    energyEfficient: true
  }
};

export default function SomdechPhraNangchaoSirikitHospitalPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with Hospital Image */}
      <section className="relative h-screen overflow-hidden">
        <div className="relative w-full h-full">
          <img
            src={project.images[0]}
            alt={`${project.name} - Hospital Image`}
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
                    🏥 Medical Facility
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual Project Types Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h2 className="text-4xl font-bold mb-4 text-black">Dual Project Types</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The Somdech Phra Nangchao Sirikit Hospital project encompasses both Master Planning and Healthcare project types, 
              showcasing our comprehensive approach to medical facility development and campus planning.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-4xl font-bold text-green-600 mb-4">🏥</div>
                <h3 className="text-xl font-bold mb-2 text-black">Healthcare</h3>
                <p className="text-gray-600">State-of-the-art medical facilities designed for clinical excellence with advanced medical technology integration</p>
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
                <div className="text-4xl font-bold text-blue-600 mb-4">🗺️</div>
                <h3 className="text-xl font-bold mb-2 text-black">Master Planning</h3>
                <p className="text-gray-600">Comprehensive campus planning and master planning integration for optimal healthcare delivery</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
              <div className="text-4xl font-bold text-purple-600 mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-2 text-black">Collaborative Design</h3>
              <p className="text-gray-600">
                This project was developed in collaboration with Team SQ, combining expertise in healthcare architecture, 
                medical facility design, and master planning to create a state-of-the-art medical hub.
              </p>
            </div>
          </motion.div>
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
                    The Somdech Phra Nangchao Sirikit Hospital represents a landmark achievement in healthcare architecture, 
                    combining state-of-the-art medical facilities with innovative design principles. This collaborative 
                    project with Team SQ showcases our commitment to creating healing environments that support both 
                    patient care and medical excellence.
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
                    <span className="text-gray-600 font-medium">Project Categories</span>
                    <span className="text-black font-semibold">Master Planning & Healthcare</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600 font-medium">Collaboration</span>
                    <span className="text-black font-semibold">Team SQ</span>
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

      {/* Hospital Image Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold mb-4 text-black">Hospital Design</h3>
            <p className="text-lg text-gray-600">
              State-of-the-art medical hub designed for clinical excellence
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
                alt={`${project.name} - Hospital Design`}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
