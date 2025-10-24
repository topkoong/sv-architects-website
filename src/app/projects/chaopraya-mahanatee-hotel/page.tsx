/**
 * ============================================================================
 * FILE: src/app/projects/chaopraya-mahanatee-hotel/page.tsx
 * ============================================================================
 * DESCRIPTION: Project detail page for Chaopraya Mahanatee Hotel
 * Features image slider and comprehensive project information
 * ============================================================================
 */

'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn, slideUp } from '@/lib/animations';
import Link from 'next/link';

// Project data
const project = {
  id: 'chaopraya-mahanatee-hotel',
  name: 'Chaopraya Mahanatee Hotel',
  category: 'Hospitality',
  type: 'Hotel Development',
  location: 'Bangkok, Thailand',
  year: 2021,
  status: 'completed',
  size: '65,000 sqm',
  client: 'Hotel Development Group',
  tagline: 'PREMIUM FOUR-STAR HOTEL DEVELOPMENT Luxury Hospitality Excellence',
  description: 'Premium four-star hotel development featuring luxury accommodations and sustainable design principles.',
  features: [
    'Premium four-star hotel facilities',
    'Luxury guest accommodations',
    'Sustainable hotel design',
    'Integrated spa and wellness facilities',
    'Environmental conservation features',
    'Modern hospitality amenities'
  ],
  images: [
    '/images/projects/chaopraya-mahanatee-hotel-1.jpg',
    '/images/projects/chaopraya-mahanatee-hotel-2.jpg',
    '/images/projects/chaopraya-mahanatee-hotel-3.jpg',
    '/images/projects/chaopraya-mahanatee-hotel-4.jpg'
  ],
  sustainability: {
    leed: true,
    greenBuilding: true,
    energyEfficient: true
  }
};

export default function ChaoprayaMahanateeHotelPage() {
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
    <main className="min-h-screen bg-white">
      {/* Hero Section with Image Slider */}
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
              <img
                src={project.images[currentImageIndex]}
                alt={`${project.name} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40" />
            </motion.div>
          </AnimatePresence>

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
                    🏨 Four-Star Hotel
                  </span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
            aria-label="Previous image"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
            aria-label="Next image"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image Indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
            <div className="flex space-x-3">
              {project.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex 
                      ? 'bg-white scale-125' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hospitality Excellence Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-100 rounded-full mb-6">
              <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z" />
              </svg>
            </div>
            <h2 className="text-4xl font-bold mb-4 text-black">Hospitality Excellence</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The Chaopraya Mahanatee Hotel represents the pinnacle of luxury hospitality design, 
              combining premium four-star amenities with sustainable architecture principles.
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
                <div className="text-4xl font-bold text-amber-600 mb-4">⭐</div>
                <h3 className="text-xl font-bold mb-2 text-black">Four-Star Luxury</h3>
                <p className="text-gray-600">Premium four-star hotel facilities with luxury guest accommodations</p>
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
                <p className="text-gray-600">Environmental conservation features and sustainable hotel design principles</p>
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
                <div className="text-4xl font-bold text-blue-600 mb-4">🏨</div>
                <h3 className="text-xl font-bold mb-2 text-black">Modern Amenities</h3>
                <p className="text-gray-600">Integrated spa and wellness facilities with modern hospitality amenities</p>
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
                    The Chaopraya Mahanatee Hotel stands as a testament to luxury hospitality design, 
                    offering guests an unparalleled experience in the heart of Bangkok. This premium 
                    four-star hotel development seamlessly blends contemporary luxury with sustainable 
                    design principles, creating a haven of comfort and environmental responsibility.
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
                    <span className="text-gray-600 font-medium">Hotel Rating</span>
                    <span className="text-black font-semibold">Four-Star Premium</span>
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

      {/* Image Gallery Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold mb-4 text-black">Hotel Gallery</h3>
            <p className="text-lg text-gray-600">
              Explore the luxury accommodations and amenities of the Chaopraya Mahanatee Hotel
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
                onClick={() => goToImage(index)}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <img
                    src={image}
                    alt={`${project.name} - Gallery Image ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
