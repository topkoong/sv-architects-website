'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

/**
 * ============================================================================
 * INNOVATION CENTER PROJECT DETAIL PAGE
 * ============================================================================
 * Project: Innovation Center
 * Category: Interior Design
 * Type: Research Center Interior
 * Location: EEC Silicon Technology Park, Thailand
 * Year: 2022
 * Status: Completed
 * Size: 12,000 sqm
 * Client: EEC Silicon Technology Park
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
  id: 'innovation-center',
  name: 'Innovation Center',
  category: 'Interior Design',
  type: 'Research Center Interior',
  location: 'EEC Silicon Technology Park, Thailand',
  year: 2022,
  status: 'completed',
  size: '12,000 sqm',
  client: 'EEC Silicon Technology Park',
  tagline: 'EEC SILICON TECH PARK is set to inspire, stimulate and spark the Spirits of Innovation inside of all the brilliant minds',
  description: 'EEC Silicon Tech Park is set to inspire, stimulate and spark the Spirits of Innovation inside of all the brilliant minds. A cutting-edge interior design project featuring modern research facilities, collaborative spaces, and innovation-focused environments.',
  features: [
    'Spirits of Innovation design',
    'Modern research facilities',
    'Collaborative innovation spaces',
    'Cutting-edge interior design',
    'Research center interior',
    'Innovation-focused environment',
    'Technology integration',
    'Flexible workspace solutions',
    'Advanced meeting facilities',
    'Hall and presentation spaces'
  ],
  images: [
    '/images/projects/innovation-center-main.jpg',
    '/images/projects/innovation-center-closeup.jpg',
    '/images/projects/innovation-center-scene2.jpg',
    '/images/projects/innovation-center-hall.jpg'
  ],
  sustainability: {
    leed: true,
    greenBuilding: true,
    energyEfficient: true
  }
};

/**
 * Innovation Center Project Detail Page Component
 * 
 * This component displays detailed information about the Innovation Center project,
 * including project overview, features, sustainability initiatives, and contact information.
 * Features an image slider with automatic transitions and manual navigation.
 * 
 * @returns {JSX.Element} The Innovation Center project detail page
 */
export default function InnovationCenterPage() {
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
                  {project.description} Our approach for the {project.name} project focused on creating an interior environment that fosters creativity, collaboration, and technological advancement within the EEC Silicon Technology Park.
                </p>

                <h4 className="text-2xl font-semibold mb-4 text-gray-800">Key Features</h4>
                <ul className="list-disc list-inside text-lg text-gray-700 mb-8 space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>

                <h4 className="text-2xl font-semibold mb-4 text-gray-800">Innovation-Focused Design</h4>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  The Innovation Center interior design emphasizes the "Spirits of Innovation" concept, creating spaces that inspire brilliant minds to think creatively and collaborate effectively. The design integrates cutting-edge technology with flexible workspace solutions to support various innovation activities.
                </p>

                <h4 className="text-2xl font-semibold mb-4 text-gray-800">Research Facilities</h4>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  This interior design project features modern research facilities with collaborative innovation spaces, advanced meeting facilities, and hall and presentation spaces. The design supports both individual research work and team collaboration activities within the technology park environment.
                </p>

                <h4 className="text-2xl font-semibold mb-4 text-gray-800">Technology Integration</h4>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  The Innovation Center seamlessly integrates modern technology throughout the workspace, creating an innovation-focused environment that supports cutting-edge research and development activities. The flexible workspace solutions accommodate various types of innovation work.
                </p>

                <h4 className="text-2xl font-semibold mb-4 text-gray-800">Client & Collaboration</h4>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  This project was a successful collaboration with <strong>{project.client}</strong>. Our team worked closely with them to translate their vision of inspiring innovation into a tangible interior design solution that supports technological advancement and creative thinking.
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
