/**
 * ============================================================================
 * FILE: src/app/projects/[slug]/page.tsx
 * ============================================================================
 * DESCRIPTION: Dynamic project page that handles both display modes
 * 
 * This page supports two display modes:
 * 1. FULL MODE: Complete project details with all sections
 * 2. GALLERY-ONLY MODE: Beautiful image carousel for projects without full details
 * 
 * @author SV Architects Development Team
 * @version 1.0.0
 * ============================================================================
 */

import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getProjectBySlug, getAllProjectSlugs } from '@/data/projects';
import FullDetailView from './FullDetailView';
import GalleryOnlyView from './GalleryOnlyView';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

/**
 * Generate metadata for SEO
 */
export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  
  if (!project) {
    return {
      title: 'Project Not Found | SV Architects',
      description: 'The requested project could not be found.',
      robots: { index: false, follow: false }
    };
  }
  
  return {
    title: `${project.name} | SV Architects`,
    description: project.metaDescription || project.description || `${project.name} - ${project.category} project by SV Architects`,
    openGraph: {
      title: `${project.name} | SV Architects`,
      description: project.metaDescription || project.description || `${project.name} - ${project.category} project`,
      images: project.images.length > 0 ? [project.images[0]?.url || ''] : [],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.name} | SV Architects`,
      description: project.metaDescription || project.description || `${project.name} - ${project.category} project`,
      images: project.images.length > 0 ? [project.images[0]?.url || ''] : [],
    },
    keywords: project.keywords?.join(', ') || `${project.name}, ${project.category}, architecture, SV Architects`,
  };
}

/**
 * Generate static params for all projects
 */
export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map(slug => ({ slug }));
}

/**
 * Main project page component
 */
export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  
  if (!project) {
    notFound();
  }
  
  // DECISION POINT: Which display mode?
  if (project.displayMode === 'gallery-only') {
    return <GalleryOnlyView project={project} />;
  }
  
  return <FullDetailView project={project} />;
}