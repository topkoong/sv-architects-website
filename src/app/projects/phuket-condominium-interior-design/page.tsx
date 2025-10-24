'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

/**
 * ============================================================================
 * PHUKET CONDOMINIUM INTERIOR DESIGN PROJECT DETAIL PAGE
 * ============================================================================
 * Project: Phuket Condominium Interior Design
 * Category: Interior Design
 * Type: Beachfront Condominium Interior
 * Location: Phuket, Thailand
 * Year: 2020
 * Status: Completed
 * Size: 8,500 sqm
 * Client: Phuket Development Co.
 * ============================================================================
 */

// Animation variants for page transitions
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const slideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
};

// Project data
const project = {
  id: 'phuket-condominium-interior-design',
  name: 'Phuket Condominium Interior Design',
  category: 'Interior Design',
  type: 'Beachfront Condominium Interior',
  location: 'Phuket, Thailand',
  year: 2020,
  status: 'completed',
  size: '8,500 sqm',
  client: 'Phuket Development Co.',
  tagline: 'DESIGNED TO FULLY OPTIMIZE ITS ENVIRONMENT with panoramic views and connectivity to the nature through biophilic designs',
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
  images: [
    '/images/projects/phuket-condominium-interior-1.jpg',
    '/images/projects/phuket-condominium-interior-2.jpg',
    '/images/projects/phuket-condominium-interior-3.jpg'
  ],
  sustainability: {
    leed: true,
    greenBuilding: true,
    energyEfficient: true
  }
};

/**
 * Phuket Condominium Interior Design Project Detail Page Component
 * 
 * This component displays detailed information about the Phuket Condominium Interior Design project,
 * including project overview, features, sustainability initiatives, and contact information.
 * Features an image slider with automatic transitions and manual navigation.
 * 
 * @returns {JSX.Element} The Phuket Condominium Interior Design project detail page
 */
export default function PhuketCondominiumInteriorDesignPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-advance image slider
  useEffect(() => {
    if (!project.images || project.images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % project.images.length
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Manual image navigation
  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex + 1) % project.images.length
    );
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with Image Slider */}
      <section className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${project.images[currentImageIndex]})` }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50" />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        {project.images.length > 1 && (
          <>
            <button
              onClick={goToPreviousImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 rounded-full p-3 text-white"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToNextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 rounded-full p-3 text-white"
              aria-label="Next image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Image Indicators */}
        {project.images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
            {project.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImageIndex
                    ? 'bg-white'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}

        <div className="relative z-10 flex items-center justify-center h-full text-white text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
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
                {project.location}
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                {project.year}
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                {project.size}
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                {project.status.toUpperCase()}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Details Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold mb-6 text-gray-900">Project Overview</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  {project.description} Our approach for the {project.name} project focused on creating an interior environment that maximizes the natural beauty of Phuket's coastal setting while providing modern, comfortable living spaces.
                </p>

                <h4 className="text-2xl font-semibold mb-4 text-gray-800">Key Features</h4>
                <ul className="list-disc list-inside text-lg text-gray-700 mb-8 space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>

                <h4 className="text-2xl font-semibold mb-4 text-gray-800">Environment Optimization</h4>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  The Phuket Condominium Interior Design project was specifically designed to fully optimize its environment, taking advantage of panoramic ocean views and creating seamless connectivity to nature. The design maximizes natural light, ventilation, and visual connections to the surrounding tropical landscape.
                </p>

                <h4 className="text-2xl font-semibold mb-4 text-gray-800">Biophilic Design Principles</h4>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  The interior design incorporates biophilic design principles to create a strong connection between indoor spaces and the natural environment. This includes the use of natural materials, organic forms, and design elements that reflect the coastal and tropical setting of Phuket.
                </p>

                <h4 className="text-2xl font-semibold mb-4 text-gray-800">Coastal Living Aesthetics</h4>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  The design features coastal living aesthetics with ocean-inspired design elements, natural material integration, and modern tropical design principles. The interior spaces reflect the relaxed, luxurious lifestyle associated with beachfront living in Phuket.
                </p>

                <h4 className="text-2xl font-semibold mb-4 text-gray-800">Sustainable Coastal Materials</h4>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  The project utilizes sustainable coastal materials that are both environmentally responsible and suitable for the tropical climate. These materials enhance the natural aesthetic while providing durability and low maintenance requirements in the coastal environment.
                </p>

                <h4 className="text-2xl font-semibold mb-4 text-gray-800">Client & Collaboration</h4>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  This project was a successful collaboration with <strong>{project.client}</strong>. Our team worked closely with them to translate their vision of optimized coastal living into a tangible interior design solution that enhances the natural beauty of Phuket's environment.
                </p>

                {project.sustainability && (
                  <>
                    <h4 className="text-2xl font-semibold mb-4 text-gray-800">Sustainability Initiatives</h4>
                    <div className="flex flex-wrap gap-3 mb-8">
                      {project.sustainability.leed && (
                        <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">LEED Certified</span>
                      )}
                      {project.sustainability.greenBuilding && (
                        <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Green Building</span>
                      )}
                      {project.sustainability.energyEfficient && (
                        <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Energy Efficient</span>
                      )}
                    </div>
                  </>
                )}
              </motion.div>
            </div>

            <div className="lg:col-span-1">
              <motion.div
                variants={slideUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-lg shadow-md"
              >
                <h4 className="text-2xl font-bold mb-6 text-gray-900">Project Information</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600 font-medium">Category</span>
                    <span className="text-black font-semibold">{project.category}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600 font-medium">Type</span>
                    <span className="text-black font-semibold">{project.type}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600 font-medium">Location</span>
                    <span className="text-black font-semibold">{project.location}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600 font-medium">Year</span>
                    <span className="text-black font-semibold">{project.year}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600 font-medium">Status</span>
                    <span className="text-black font-semibold">{project.status.charAt(0).toUpperCase() + project.status.slice(1)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600 font-medium">Size</span>
                    <span className="text-black font-semibold">{project.size}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600 font-medium">Client</span>
                    <span className="text-black font-semibold">{project.client}</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={slideUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-12 bg-gray-50 p-8 rounded-lg shadow-md"
              >
                <h4 className="text-2xl font-bold mb-6 text-gray-900">Contact Us</h4>
                <p className="text-lg text-gray-700 mb-6">
                  Interested in a similar project? Let's discuss your vision.
                </p>
                <Link href="/contact" className="btn-primary w-full text-center">
                  Get in Touch
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
