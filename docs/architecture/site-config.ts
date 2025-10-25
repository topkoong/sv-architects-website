/**
 * ============================================================================
 * FILE: src/config/site.ts
 * ============================================================================
 * DESCRIPTION: Site configuration with environment-based path handling
 * Automatically handles different base paths for development vs production
 * ============================================================================
 */

// Base path for the site
// - Production (GitHub Pages): '/sv-architects-website'
// - Development (local): ''
export const BASE_PATH = process.env.NODE_ENV === 'production' 
  ? '/sv-architects-website' 
  : '';

/**
 * Get the correct image path for the current environment
 * @param path - Path relative to public folder (e.g., 'images/projects/project-1.jpg')
 * @returns Full path with correct base for current environment
 */
export const getImagePath = (path: string): string => {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In production, add base path; in development, just use root
  return BASE_PATH ? `${BASE_PATH}/${cleanPath}` : `/${cleanPath}`;
};

/**
 * Get multiple image paths
 * @param paths - Array of paths relative to public folder
 * @returns Array of full paths with correct base for current environment
 */
export const getImagePaths = (paths: string[]): string[] => {
  return paths.map(path => getImagePath(path));
};

/**
 * Site metadata configuration
 */
export const SITE_CONFIG = {
  name: 'SV Architects',
  description: 'Professional architectural design and planning services',
  url: BASE_PATH ? `https://yourdomain.com${BASE_PATH}` : 'http://localhost:3000',
} as const;

/**
 * Project image configuration helper
 * Automatically generates numbered image paths (1-4) for projects
 * @param projectSlug - The project slug (e.g., 'centerpoint-siamsquare')
 * @param count - Number of images (default: 4)
 * @returns Array of image paths
 */
export const getProjectImages = (projectSlug: string, count: number = 4): string[] => {
  return Array.from({ length: count }, (_, i) => 
    getImagePath(`images/projects/${projectSlug}-${i + 1}.jpg`)
  );
};

/**
 * Get project subdirectory images
 * For projects that store images in subdirectories
 * @param projectSlug - The project slug
 * @param subdirectory - The subdirectory name
 * @param imageNames - Array of image file names
 * @returns Array of image paths
 */
export const getProjectSubdirectoryImages = (
  projectSlug: string, 
  subdirectory: string, 
  imageNames: string[]
): string[] => {
  return imageNames.map(name => 
    getImagePath(`images/projects/${projectSlug}-${subdirectory}/${name}`)
  );
};
