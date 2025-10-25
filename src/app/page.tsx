/**
 * ============================================================================
 * FILE: src/app/page.tsx
 * ============================================================================
 * DESCRIPTION: Homepage for SV Architects website with auto-slider hero section
 * ============================================================================
 */

'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import Link from 'next/link';
import { getImagePath } from '@/config/site';

// Hero slides data
const heroSlides = [
  {
    id: 1,
    title: "Phra Nangchao Sirikit Hospital",
    subtitle: "International Premium Clinic",
    description: "State-of-the-art medical facility designed for optimal patient care with advanced medical technology integration and healing environment design.",
    image: getImagePath("/images/homepage/phra-nangchao-sirikit-hospital.jpg"),
    ctaText: "View Project",
    ctaLink: "/projects/phra-nangchao-sirikit-hospital"
  },
  {
    id: 2,
    title: "U-Tapao Airport New Passenger Terminal",
    subtitle: "Modern Aviation Infrastructure",
    description: "Modern passenger terminal with sustainable design principles, featuring advanced passenger flow systems and energy-efficient building systems.",
    image: getImagePath("/images/homepage/u-tapao-airport-new-terminal.jpg"),
    ctaText: "View Project",
    ctaLink: "/projects/u-tapao-airport-new-terminal"
  },
  {
    id: 3,
    title: "High Speed Rail (HSR) Stations",
    subtitle: "Transportation Infrastructure Excellence",
    description: "Modern high-speed rail station complex featuring efficient passenger flow, sustainable design, and integrated transportation systems.",
    image: getImagePath("/images/homepage/high-speed-rail-stations.png"),
    ctaText: "View Project",
    ctaLink: "/projects/high-speed-rail-stations"
  },
  {
    id: 4,
    title: "Bunditpatanasilpa Institute Auditorium",
    subtitle: "Cultural Excellence in Nakhon Pathom",
    description: "Modern cultural auditorium featuring state-of-the-art acoustic design, flexible performance spaces, and cultural integration for educational and community events.",
    image: getImagePath("/images/homepage/bunditpatanasilpa-auditorium.jpg"),
    ctaText: "View Project",
    ctaLink: "/projects/bunditpatanasilpa-institute-auditorium"
  },
  {
    id: 5,
    title: "Chaopraya Mahanatee Riverside Condominium",
    subtitle: "Luxury Riverside Living",
    description: "Riverside condominium development offering stunning river views and luxury amenities in prime Bangkok location.",
    image: getImagePath("/images/homepage/chaopraya-mahanatee-riverside-condominium.jpg"),
    ctaText: "View Project",
    ctaLink: "/projects/chaopraya-mahanatee-riverside-condominium"
  },
  {
    id: 6,
    title: "SIAMESE RAMA 9",
    subtitle: "High-Rise Residential Excellence",
    description: "High-rise residential development featuring contemporary design and comprehensive amenities for modern urban living.",
    image: getImagePath("/images/homepage/siamese-rama9.jpg"),
    ctaText: "View Project",
    ctaLink: "/projects/siamese-rama9"
  }
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPreviousSlide = () => {
    const prevSlide = currentSlide === 0 ? heroSlides.length - 1 : currentSlide - 1;
    goToSlide(prevSlide);
  };

  const goToNextSlide = () => {
    const nextSlide = (currentSlide + 1) % heroSlides.length;
    goToSlide(nextSlide);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Auto-Sliding Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="relative w-full h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${heroSlides[currentSlide]?.image || ''})` }}
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40" />
              
              {/* Content Overlay */}
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="max-w-4xl text-white"
                  >
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                      {heroSlides[currentSlide]?.title || ''}
                    </h1>
                    <h2 className="text-2xl md:text-3xl mb-4 text-gray-200">
                      {heroSlides[currentSlide]?.subtitle || ''}
                    </h2>
                    <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl">
                      {heroSlides[currentSlide]?.description || ''}
                    </p>
                    <Link 
                      href={heroSlides[currentSlide]?.ctaLink || '/projects'}
                      className="inline-block bg-black hover:bg-gray-800 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                    >
                      {heroSlides[currentSlide]?.ctaText || 'View Projects'}
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPreviousSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={goToNextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="flex space-x-3">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Auto-play Indicator */}
        <div className="absolute top-20 right-8 z-10 md:top-8">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
            aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            {isAutoPlaying ? (
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
              </svg>
            ) : (
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </button>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl max-w-3xl mx-auto text-gray-600">
              Explore our portfolio of award-winning architectural projects that showcase our commitment to innovation and excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {heroSlides.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div 
                    className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.subtitle}
                  </p>
                  <p className="text-gray-700 mb-6">
                    {project.description}
                  </p>
                  <Link 
                    href={project.ctaLink}
                    className="inline-flex items-center text-black hover:text-gray-700 font-semibold transition-colors duration-200"
                  >
                    {project.ctaText}
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/projects" className="inline-block bg-black hover:bg-gray-800 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Let's discuss how SV Architects can bring your vision to life with innovative design solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-block bg-white text-black hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
              Get in Touch
            </Link>
            <Link href="/projects" className="inline-block bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}