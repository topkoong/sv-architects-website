/**
 * ============================================================================
 * FILE: src/app/projects/[slug]/GalleryOnlyView.tsx
 * ============================================================================
 * DESCRIPTION: Gallery-only view component for projects with images only
 * 
 * This component displays a minimal, image-focused page with:
 * - Full-screen image carousel
 * - Minimal info overlay
 * - Navigation arrows and indicators
 * - Bottom CTA section
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
import { ProjectData } from '@/types/project';

interface GalleryOnlyViewProps {
  project: ProjectData;
}

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
 * Main GalleryOnlyView component
 */
export default function GalleryOnlyView({ project }: GalleryOnlyViewProps) {
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
    <main className="min-h-screen bg-black">
      {/* Full-screen carousel */}
      <section className="relative h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
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
          </motion.div>
        </AnimatePresence>

        {/* Info overlay - bottom */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {project.name}
            </h1>
            {(project.location || project.year) && (
              <p className="text-white/80 text-lg mb-2">
                {project.location && `📍 ${project.location}`}
                {project.location && project.year && ' • '}
                {project.year && `📅 ${project.year}`}
              </p>
            )}
            {project.images[currentImageIndex]?.caption && (
              <p className="text-white/60 text-sm">
                {project.images[currentImageIndex]?.caption}
              </p>
            )}
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
      </section>

      {/* Bottom CTA */}
      <section className="bg-white py-16">
        <div className="container mx-auto text-center">
          <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Explore More Projects
            </h2>
            <p className="text-gray-600 mb-8">
              Discover our complete portfolio of architectural excellence
            </p>
            <Link 
              href="/projects" 
              className="inline-flex items-center px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-200"
            >
              ← View All Projects
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
