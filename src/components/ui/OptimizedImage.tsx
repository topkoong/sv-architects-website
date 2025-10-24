/**
 * ============================================================================
 * FILE: src/components/ui/OptimizedImage.tsx
 * ============================================================================
 * DESCRIPTION: Optimized Image Component for SV Architects website
 * FIXED VERSION - Enhanced error handling and performance
 * 
 * IMPROVEMENTS:
 * - ✅ Better loading state management
 * - ✅ Enhanced error handling with retry logic
 * - ✅ Proper image source validation
 * - ✅ Optimized re-renders with useMemo
 * - ✅ Better accessibility
 * - ✅ Improved performance
 * 
 * FEATURES:
 * - Automatic image optimization with WebP/AVIF formats
 * - Lazy loading with loading states
 * - Error handling with fallback states
 * - Responsive sizing with proper aspect ratios
 * - Accessibility features (alt text, loading states)
 * - Performance optimizations (priority loading, sizes)
 * 
 * ============================================================================
 */

'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';

import Image from 'next/image';

/**
 * ============================================================================
 * TYPESCRIPT INTERFACES
 * ============================================================================
 */

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  fill?: boolean;
  className?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  sizes?: string;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  loading?: 'lazy' | 'eager';
  onLoad?: () => void;
  onError?: () => void;
  fallbackSrc?: string;
}

/**
 * ============================================================================
 * CONSTANTS
 * ============================================================================
 */

const DEFAULT_BLUR_DATA_URL = 
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=';

const DEFAULT_FALLBACK_IMAGE = '/images/placeholder.jpg';

const DEFAULT_SIZES = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';

/**
 * ============================================================================
 * MAIN COMPONENT
 * ============================================================================
 */

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  priority = false,
  className = '',
  objectFit = 'cover',
  sizes = DEFAULT_SIZES,
  quality = 85,
  placeholder = 'empty',
  blurDataURL,
  loading,
  onLoad,
  onError,
  fallbackSrc = DEFAULT_FALLBACK_IMAGE,
}) => {
  // State management
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);
  const [retryCount, setRetryCount] = useState(0);

  // Maximum retry attempts
  const MAX_RETRIES = 2;

  /**
   * Reset states when src changes
   */
  useEffect(() => {
    setIsLoading(true);
    setHasError(false);
    setCurrentSrc(src);
    setRetryCount(0);
  }, [src]);

  /**
   * Handle successful image load
   */
  const handleLoad = useCallback(() => {
    setIsLoading(false);
    setHasError(false);
    onLoad?.();
  }, [onLoad]);

  /**
   * Handle image load error with retry logic
   */
  const handleError = useCallback(() => {
    setIsLoading(false);

    // Try to retry loading the image
    if (retryCount < MAX_RETRIES) {
      setTimeout(() => {
        setRetryCount(prev => prev + 1);
        setIsLoading(true);
        setCurrentSrc(`${src}?retry=${retryCount + 1}`);
      }, 1000 * (retryCount + 1)); // Exponential backoff
    } else {
      // Max retries reached, use fallback
      setHasError(true);
      setCurrentSrc(fallbackSrc);
      onError?.();
    }
  }, [retryCount, src, fallbackSrc, onError]);

  /**
   * Determine loading behavior
   */
  const loadingBehavior = useMemo(() => 
    loading || (priority ? 'eager' : 'lazy'),
    [loading, priority]
  );

  /**
   * Get blur placeholder
   */
  const blurPlaceholder = useMemo(() => 
    blurDataURL || (placeholder === 'blur' ? DEFAULT_BLUR_DATA_URL : undefined),
    [blurDataURL, placeholder]
  );

  /**
   * Validate image source
   */
  const isValidSrc = useMemo(() => {
    if (!currentSrc) return false;
    if (typeof currentSrc !== 'string') return false;
    if (currentSrc.length === 0) return false;
    return true;
  }, [currentSrc]);

  /**
   * Container classes
   */
  const containerClasses = useMemo(() => 
    `relative overflow-hidden ${className}`,
    [className]
  );

  /**
   * Image classes with loading state
   */
  const imageClasses = useMemo(() => 
    `transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`,
    [isLoading]
  );

  // If source is invalid, show error state immediately
  if (!isValidSrc) {
    return (
      <div className={containerClasses}>
        <ErrorFallback />
      </div>
    );
  }

  return (
    <div className={containerClasses}>
      {/* Loading skeleton */}
      {isLoading && !hasError && <LoadingSkeleton />}
      
      {/* Error state */}
      {hasError && retryCount >= MAX_RETRIES && <ErrorFallback />}

      {/* Image component */}
      <Image
        src={currentSrc}
        alt={alt}
        {...(width && height ? { width, height } : { fill: true })}
        priority={priority}
        quality={quality}
        loading={loadingBehavior}
        sizes={sizes}
        style={{ objectFit }}
        placeholder={placeholder}
        {...(blurPlaceholder && { blurDataURL: blurPlaceholder })}
        onLoad={handleLoad}
        onError={handleError}
        className={imageClasses}
      />
    </div>
  );
};

/**
 * ============================================================================
 * HELPER COMPONENTS
 * ============================================================================
 */

/**
 * Loading skeleton component
 */
const LoadingSkeleton = () => (
  <div 
    className="
      absolute inset-0 
      bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200 
      animate-pulse
    "
    aria-label="Loading image"
    role="status"
  />
);

/**
 * Error fallback component
 */
const ErrorFallback = () => (
  <div 
    className="
      absolute inset-0 
      bg-neutral-100 
      flex items-center justify-center
      border-2 border-dashed border-neutral-300
    "
    role="img"
    aria-label="Image unavailable"
  >
    <div className="text-center p-4">
      <svg 
        className="w-12 h-12 mx-auto mb-2 text-neutral-400" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
        />
      </svg>
      <span className="text-sm text-neutral-500">Image unavailable</span>
    </div>
  </div>
);

/**
 * ============================================================================
 * SPECIALIZED IMAGE COMPONENTS
 * ============================================================================
 */

/**
 * Hero Image - For large header images
 */
export const HeroImage: React.FC<Omit<OptimizedImageProps, 'priority' | 'sizes'>> = (props) => (
  <OptimizedImage
    {...props}
    priority={true}
    sizes="100vw"
    quality={90}
    placeholder="blur"
  />
);

/**
 * Project Thumbnail - For project portfolio grid
 */
export const ProjectThumbnail: React.FC<Omit<OptimizedImageProps, 'sizes'>> = (props) => (
  <OptimizedImage
    {...props}
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    quality={80}
    placeholder="blur"
  />
);

/**
 * Team Member Photo - For team member profiles
 */
export const TeamMemberPhoto: React.FC<Omit<OptimizedImageProps, 'sizes'>> = (props) => (
  <OptimizedImage
    {...props}
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
    quality={85}
    placeholder="blur"
  />
);

/**
 * Gallery Image - For image galleries
 */
export const GalleryImage: React.FC<Omit<OptimizedImageProps, 'sizes'>> = (props) => (
  <OptimizedImage
    {...props}
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    quality={90}
    placeholder="blur"
  />
);

/**
 * ============================================================================
 * UTILITY FUNCTIONS
 * ============================================================================
 */

/**
 * Generate responsive sizes string
 */
export const getResponsiveSizes = (
  layout: 'hero' | 'card' | 'gallery' | 'thumbnail'
): string => {
  const sizeMap = {
    hero: '100vw',
    card: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    gallery: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    thumbnail: '(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw'
  };
  
  return sizeMap[layout];
};

/**
 * Generate blur placeholder
 */
export const generateBlurPlaceholder = (
  width: number = 10,
  height: number = 10
): string => {
  // Only works in Node.js environment (server-side)
  if (typeof window === 'undefined' && typeof Buffer !== 'undefined') {
    return `data:image/svg+xml;base64,${Buffer.from(
      `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#f3f4f6"/>
      </svg>`
    ).toString('base64')}`;
  }
  
  return DEFAULT_BLUR_DATA_URL;
};

/**
 * Check if image URL is external
 */
export const isExternalImage = (src: string): boolean => {
  return src.startsWith('http://') || src.startsWith('https://');
};

/**
 * Get optimal image quality
 */
export const getOptimalQuality = (
  useCase: 'hero' | 'gallery' | 'thumbnail' | 'avatar'
): number => {
  const qualityMap = {
    hero: 90,
    gallery: 85,
    thumbnail: 75,
    avatar: 80
  };
  
  return qualityMap[useCase];
};

/**
 * Validate image source
 */
export const isValidImageSrc = (src: unknown): src is string => {
  return typeof src === 'string' && src.length > 0;
};
