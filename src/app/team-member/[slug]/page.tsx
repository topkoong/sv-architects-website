/**
 * ============================================================================
 * FILE: src/app/team-member/[slug]/page.tsx
 * ============================================================================
 * DESCRIPTION: Dynamic route for individual team member profile pages
 * Displays detailed information about each team member including Picharn Foongkiatcharoen
 * 
 * FEATURES:
 * - Comprehensive team member profile display
 * - Education and experience details
 * - Project involvement showcase
 * - Skills and certifications
 * - Contact information
 * - SEO optimized with dynamic metadata
 * - Responsive design with mobile-first approach
 * - Smooth animations and transitions
 * 
 * DEPENDENCIES:
 * - framer-motion: For smooth animations
 * - @/components/ui/OptimizedImage: For optimized images
 * - @/lib/animations: For animation variants
 * - @/data/team: For team member data
 * 
 * USAGE:
 * This page is accessible at /team-member/[slug] where slug is the team member's URL identifier
 * Example: /team-member/picharn-foongkiatcharoen
 * 
 * PROPS:
 * - params.slug (string): URL slug of the team member
 * 
 * LAST MODIFIED: [Current Date]
 * AUTHOR: Development Team
 * 
 * ============================================================================
 */

// Import team data and types
import { getAllTeamMemberSlugs, getTeamMemberBySlug } from '@/data/team';

// Import Next.js components
import Link from 'next/link';
import Image from 'next/image';
// Import metadata types
import type { Metadata } from 'next';
// Import custom components
import type { TeamMember } from '@/types/team';
// Import React components
import { notFound } from 'next/navigation';

// TypeScript interface for page props (Next.js App Router)
interface TeamMemberPageProps {
  params: {
    slug: string; // URL parameter for team member identifier
  };
}

/**
 * ============================================================================
 * METADATA GENERATION
 * ============================================================================
 * Generates dynamic SEO metadata for team member pages
 * Called by Next.js for each team member page to create unique meta tags
 * ============================================================================
 */

/**
 * Generate metadata for team member pages
 * This function is called by Next.js during build/render time
 * 
 * @param params - Route parameters containing the team member slug
 * @returns Metadata object with complete SEO configuration
 */
export async function generateMetadata({ 
  params 
}: { 
  params: { slug: string } 
}): Promise<Metadata> {
  // Retrieve team member data using slug from URL
  const { slug } = await params;
  const member = getTeamMemberBySlug(slug);
  
  // Handle 404 case - team member not found
  if (!member) {
    return {
      title: 'Team Member Not Found',
      description: 'The requested team member profile could not be found.',
      robots: {
        index: false, // Don't index 404 pages
        follow: false // Don't follow links on 404 pages
      }
    };
  }

  // Construct full URL for this team member page
  const pageUrl = `https://sv-arch.com/team-member/${params.slug}`;
  
  // Construct canonical image URL
  const imageUrl = `https://sv-arch.com${member.image}`;

  // Return comprehensive metadata for this team member
  return {
    // Page title - appears in browser tab and search results
    title: `${member.fullName} - ${member.title}`,
    
    // Meta description - appears in search results (150-160 characters optimal)
    description: `${member.fullName}, ${member.title} at SV Architects and Associates Ltd. ${member.education[0]?.degree} from ${member.education[0]?.institution}. ${member.experience.years}+ years of experience in ${member.experience.areas.slice(0, 3).join(', ')}.`,
    
    // Keywords relevant to this team member
    keywords: [
      member.fullName,
      member.title,
      'architect',
      'SV Architects',
      ...member.experience.areas,
      'Bangkok architect',
      'Thailand architecture',
      member.education[0]?.institution || '',
      'LEED certified architect'
    ],

    // Open Graph metadata for social media sharing
    openGraph: {
      type: 'profile', // OG type for person profile
      url: pageUrl, // Canonical URL of this page
      title: `${member.fullName} - ${member.title} | SV Architects`, // OG title
      description: `${member.experience.summary}. ${member.experience.years} years of experience across ${member.experience.areas.length} architectural sectors.`, // OG description
      siteName: 'SV Architects and Associates Ltd.', // Parent site name
      images: [ // Profile image for social sharing
        {
          url: imageUrl, // Team member photo URL
          width: 1200, // Image width
          height: 630, // Image height
          alt: `${member.fullName} - ${member.title}`, // Image alt text
        }
      ],
      // Profile-specific OG tags
      firstName: member.firstName, // First name
      lastName: member.lastName, // Last name
    },

    // Twitter Card metadata
    twitter: {
      card: 'summary', // Use summary card for profile pages
      title: `${member.fullName} - ${member.title}`, // Twitter title
      description: member.experience.summary, // Twitter description
      images: [imageUrl], // Profile image
      creator: '@svarchitects' // Twitter handle
    },

    // Canonical URL to prevent duplicate content
    alternates: {
      canonical: pageUrl
    },

    // Additional structured data
    other: {
      'profile:username': params.slug, // Profile username (slug)
    }
  };
}

/**
 * ============================================================================
 * STATIC GENERATION
 * ============================================================================
 * Generates static paths for all team member pages
 * ============================================================================
 */

/**
 * Generate static params for all team member pages
 * This function is called by Next.js during build time
 * 
 * @returns Array of params objects for static generation
 */
export async function generateStaticParams() {
  // Get all team member slugs
  const slugs = getAllTeamMemberSlugs();
  
  // Return array of params for static generation
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

/**
 * ============================================================================
 * JSON-LD STRUCTURED DATA COMPONENT
 * ============================================================================
 * Embeds Person schema for rich search results
 * Helps Google understand team member information for Knowledge Graph
 * ============================================================================
 */
const TeamMemberSchema = ({ member }: { member: TeamMember }) => {
  // Construct structured data object following Schema.org Person specification
  const schema = {
    '@context': 'https://schema.org', // Schema.org vocabulary
    '@type': 'Person', // Schema type: Person
    name: member.fullName, // Full name
    givenName: member.firstName, // First name
    familyName: member.lastName, // Last name
    jobTitle: member.title, // Current position
    worksFor: { // Employer information
      '@type': 'Organization',
      name: 'SV Architects and Associates Ltd.',
      url: 'https://sv-arch.com'
    },
    alumniOf: member.education.map(edu => ({ // Educational background
      '@type': 'EducationalOrganization',
      name: edu.institution,
      address: {
        '@type': 'PostalAddress',
        addressLocality: edu.location.split(',')[0], // City
        addressCountry: edu.location.split(',')[1]?.trim() // Country
      }
    })),
    hasCredential: member.certifications.map(cert => ({ // Professional certifications
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: cert.type,
      about: cert.name,
      recognizedBy: {
        '@type': 'Organization',
        name: cert.issuingBody
      }
    })),
    knowsAbout: member.experience.areas, // Areas of expertise
    image: `https://sv-arch.com${member.image}`, // Profile photo
    url: `https://sv-arch.com/team-member/${member.slug}`, // Profile page URL
    email: member.contact.email, // Email address
    telephone: member.contact.phone, // Phone number
    sameAs: Object.values(member.contact.socialMedia || {}).filter(Boolean) // Social media profiles
  };

  return (
    <script
      type="application/ld+json" // MIME type for JSON-LD
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} // Inject JSON-LD
    />
  );
};

/**
 * ============================================================================
 * MAIN TEAM MEMBER PAGE COMPONENT
 * ============================================================================
 * Displays comprehensive information about a single team member
 * ============================================================================
 */
export default async function TeamMemberPage({ params }: TeamMemberPageProps) {
  // Find team member data based on URL slug
  const { slug } = await params;
  const member = getTeamMemberBySlug(slug);

  // Handle case where team member is not found (404)
  if (!member) {
    notFound();
  }

  return (
    <>
      {/* Include structured data for SEO */}
      <TeamMemberSchema member={member} />
      
      <main className="min-h-screen bg-background-primary">
        {/* Hero section with team member photo and name */}
        <HeroSection member={member} />
        
        {/* Main content section */}
        <ContentSection member={member} />
        
        {/* Contact and additional information */}
        <ContactSection member={member} />
      </main>
    </>
  );
}

/**
 * ============================================================================
 * HERO SECTION COMPONENT
 * ============================================================================
 * Hero section with team member photo and basic information
 * ============================================================================
 */
const HeroSection = ({ member }: { member: TeamMember }) => {
  return (
    <section className="
      relative // Position context
      h-[60vh] // 60% viewport height
      bg-gradient-to-br // Gradient background
      from-neutral-900 // Dark gray start
      to-neutral-800 // Darker gray end
      overflow-hidden // Hide overflow
    ">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src={member.image || ''}
          alt={`${member.fullName} - ${member.title}`}
          className="w-full h-full object-cover object-[center_top] opacity-30"
          fill
          objectFit="cover"
        />
      </div>
      
      {/* Text content overlaid on image */}
      <div className="
        absolute // Position absolute
        inset-0 // Cover entire section
        flex // Flex container
        items-center // Center vertically
        justify-center // Center horizontally
      ">
        <div
          className="text-center text-white"
        >
          {/* Team member name */}
          <h1 className="heading-xl mb-4">
            {member.fullName}
          </h1>
          
          {/* Team member position */}
          <p className="body-lg text-neutral-300 mb-6">
            {member.title}
          </p>
          
          {/* Years of experience */}
          <div className="
            inline-flex // Inline flex
            items-center // Center items
            px-6 // 24px horizontal padding
            py-3 // 12px vertical padding
            bg-white/10 // Semi-transparent white background
            backdrop-blur-sm // Backdrop blur effect
            rounded-full // Rounded pill shape
            border // Border
            border-white/20 // Semi-transparent white border
          ">
            <span className="text-sm font-semibold">
              {member.experience.years}+ Years Experience
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * ============================================================================
 * CONTENT SECTION COMPONENT
 * ============================================================================
 * Main content section with detailed information
 * ============================================================================
 */
const ContentSection = ({ member }: { member: TeamMember }) => {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <div
         // Apply stagger animation
         // Start hidden
         // Animate when in viewport
        className="space-y-16" // 64px vertical spacing
      >
        {/* Biography Section */}
        <div >
          <h2 className="heading-md mb-6 text-text-primary">
            Biography
          </h2>
          <div className="card p-8">
            <p className="body-lg text-text-secondary leading-relaxed">
              {member.bio}
            </p>
          </div>
        </div>

        {/* Education Section */}
        <div >
          <h2 className="heading-md mb-6 text-text-primary">
            Education
          </h2>
          <div className="space-y-4">
            {member.education.map((edu, index) => (
              <div key={index} className="card p-6">
                <h3 className="heading-sm mb-2 text-text-primary">
                  {edu.degree}
                </h3>
                <p className="body-md text-primary-600 font-semibold mb-2">
                  {edu.institution}
                </p>
                <p className="body-sm text-text-tertiary">
                  {edu.location}
                  {edu.year && ` • ${edu.year}`}
                </p>
                {edu.honors && edu.honors.length > 0 && (
                  <div className="mt-3">
                    <p className="text-sm font-medium text-text-secondary mb-1">Honors:</p>
                    <ul className="text-sm text-text-tertiary">
                      {edu.honors.map((honor, honorIndex) => (
                        <li key={honorIndex}>• {honor}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Professional Experience Section */}
        <div >
          <h2 className="heading-md mb-6 text-text-primary">
            Professional Experience
          </h2>
          <div className="card p-8">
            <p className="body-lg text-text-secondary mb-6">
              {member.experience.summary}
            </p>
            
            {/* Expertise areas */}
            <div className="mb-8">
              <h3 className="heading-sm mb-4 text-text-primary">Areas of Expertise</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {member.experience.areas.map((area, index) => (
                  <div 
                    key={index}
                    className="
                      bg-primary-50 // Light blue background
                      p-3 // 12px padding
                      rounded-lg // Rounded corners
                      border-l-4 // Left border
                      border-primary-600 // Blue left border
                    "
                  >
                    <span className="text-sm font-medium text-text-primary">
                      {area.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Work History */}
            <div>
              <h3 className="heading-sm mb-4 text-text-primary">Work History</h3>
              <div className="space-y-6">
                {member.experience.workHistory.map((work, index) => (
                  <div key={index} className="
                    border-l-2 // Left border
                    border-primary-200 // Light blue border
                    pl-6 // Left padding
                    relative // Position context
                  ">
                    {/* Timeline dot */}
                    <div className="
                      absolute // Position absolute
                      left-[-6px] // Position left of border
                      top-2 // Top position
                      w-3 // 12px width
                      h-3 // 12px height
                      bg-primary-600 // Blue background
                      rounded-full // Circular
                    " />
                    
                    <div className="mb-2">
                      <h4 className="font-semibold text-text-primary">
                        {work.position}
                      </h4>
                      <p className="text-primary-600 font-medium">
                        {work.company}
                      </p>
                      <p className="text-sm text-text-tertiary">
                        {work.location} • {work.startDate.split('-')[0]} - {work.endDate ? work.endDate.split('-')[0] : 'Present'}
                      </p>
                    </div>
                    
                    <p className="text-sm text-text-secondary mb-3">
                      {work.description}
                    </p>
                    
                    {work.achievements && work.achievements.length > 0 && (
                      <div>
                        <p className="text-sm font-medium text-text-secondary mb-2">Key Achievements:</p>
                        <ul className="text-sm text-text-tertiary space-y-1">
                          {work.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex}>• {achievement}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skills and Certifications Section */}
        <div >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Skills */}
            <div>
              <h2 className="heading-md mb-6 text-text-primary">
                Skills & Expertise
              </h2>
              <div className="card p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-text-primary mb-3">Technical Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, index) => (
                        <span 
                          key={index}
                          className="
                            px-3 // 12px horizontal padding
                            py-1 // 4px vertical padding
                            bg-neutral-100 // Light gray background
                            text-neutral-700 // Dark gray text
                            rounded-full // Rounded pill
                            text-sm // Small text
                          "
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-text-primary mb-3">Software Proficiency</h3>
                    <div className="flex flex-wrap gap-2">
                      {member.software.map((software, index) => (
                        <span 
                          key={index}
                          className="
                            px-3 // 12px horizontal padding
                            py-1 // 4px vertical padding
                            bg-primary-100 // Light blue background
                            text-primary-700 // Blue text
                            rounded-full // Rounded pill
                            text-sm // Small text
                          "
                        >
                          {software}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="heading-md mb-6 text-text-primary">
                Certifications
              </h2>
              <div className="card p-6">
                <div className="space-y-4">
                  {member.certifications.map((cert, index) => (
                    <div key={index} className="
                      p-4 // 16px padding
                      bg-neutral-50 // Light background
                      rounded-lg // Rounded corners
                      border // Border
                      border-neutral-200 // Light border
                    ">
                      <h3 className="font-semibold text-text-primary mb-1">
                        {cert.name}
                      </h3>
                      <p className="text-sm text-text-secondary mb-2">
                        {cert.issuingBody}
                      </p>
                      <p className="text-xs text-text-tertiary">
                        Issued: {new Date(cert.issueDate).toLocaleDateString()}
                        {cert.expiryDate && ` • Expires: ${new Date(cert.expiryDate).toLocaleDateString()}`}
                      </p>
                      <div className="mt-2">
                        <span className={`
                          px-2 // 8px horizontal padding
                          py-1 // 4px vertical padding
                          rounded-full // Rounded pill
                          text-xs // Extra small text
                          font-medium // Medium weight
                          ${cert.status === 'active' 
                            ? 'bg-green-100 text-green-700' 
                            : cert.status === 'expired'
                            ? 'bg-red-100 text-red-700'
                            : 'bg-yellow-100 text-yellow-700'
                          }
                        `}>
                          {cert.status.charAt(0).toUpperCase() + cert.status.slice(1)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Involvement Section */}
        {member.projects && member.projects.length > 0 && (
          <div >
            <h2 className="heading-md mb-6 text-text-primary">
              Project Involvement
            </h2>
            <div className="card p-6">
              <div className="space-y-4">
                {member.projects.map((project, index) => (
                  <div key={index} className="
                    p-4 // 16px padding
                    bg-neutral-50 // Light background
                    rounded-lg // Rounded corners
                    border // Border
                    border-neutral-200 // Light border
                  ">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-semibold text-text-primary mb-1">
                          {project.projectName}
                        </h3>
                        <p className="text-sm text-primary-600 font-medium">
                          {project.role}
                        </p>
                      </div>
                      <span className={`
                        px-2 // 8px horizontal padding
                        py-1 // 4px vertical padding
                        rounded-full // Rounded pill
                        text-xs // Extra small text
                        font-medium // Medium weight
                        ${project.isActive 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-neutral-100 text-neutral-700'
                        }
                      `}>
                        {project.isActive ? 'Active' : 'Completed'}
                      </span>
                    </div>
                    
                    <p className="text-sm text-text-secondary mb-3">
                      {project.startDate.split('-')[0]} - {project.endDate ? project.endDate.split('-')[0] : 'Present'}
                    </p>
                    
                    <div>
                      <p className="text-sm font-medium text-text-secondary mb-2">Responsibilities:</p>
                      <ul className="text-sm text-text-tertiary space-y-1">
                        {project.responsibilities.map((responsibility, respIndex) => (
                          <li key={respIndex}>• {responsibility}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

/**
 * ============================================================================
 * CONTACT SECTION COMPONENT
 * ============================================================================
 * Contact information and additional details
 * ============================================================================
 */
const ContactSection = ({ member }: { member: TeamMember }) => {
  return (
    <section className="py-16 bg-neutral-50">
      <div className="container-responsive">
        <div
           // Apply stagger animation
           // Start hidden
           // Animate when in viewport
          className="max-w-4xl mx-auto"
        >
          <div  className="text-center mb-12">
            <h2 className="heading-md mb-4 text-text-primary">
              Get In Touch
            </h2>
            <p className="body-lg text-text-secondary">
              Ready to discuss your project? Contact {member.firstName} directly or reach out to our team.
            </p>
          </div>

          <div  className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="card p-8">
              <h3 className="heading-sm mb-6 text-text-primary">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a 
                    href={`mailto:${member.contact.email}`}
                    className="text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    {member.contact.email}
                  </a>
                </div>
                
                {member.contact.phone && (
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-primary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a 
                      href={`tel:${member.contact.phone}`}
                      className="text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      {member.contact.phone}
                    </a>
                  </div>
                )}
                
                {member.contact.office && (
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-primary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-text-secondary">{member.contact.office}</span>
                  </div>
                )}
              </div>

              {/* Social Media Links */}
              {member.contact.socialMedia && (
                <div className="mt-6">
                  <h4 className="font-semibold text-text-primary mb-3">Connect</h4>
                  <div className="flex space-x-4">
                    {member.contact.socialMedia.linkedin && (
                      <a 
                        href={member.contact.socialMedia.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-700 transition-colors"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    )}
                    {member.contact.socialMedia.website && (
                      <a 
                        href={member.contact.socialMedia.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-700 transition-colors"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Additional Information */}
            <div className="card p-8">
              <h3 className="heading-sm mb-6 text-text-primary">Additional Information</h3>
              <div className="space-y-4">
                {/* Languages */}
                <div>
                  <h4 className="font-semibold text-text-primary mb-2">Languages</h4>
                  <p className="text-sm text-text-secondary">
                    {member.languages.join(', ')}
                  </p>
                </div>

                {/* Awards */}
                {member.awards && member.awards.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-text-primary mb-2">Awards & Recognition</h4>
                    <ul className="text-sm text-text-secondary space-y-1">
                      {member.awards.map((award, index) => (
                        <li key={index}>• {award}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Publications */}
                {member.publications && member.publications.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-text-primary mb-2">Publications</h4>
                    <ul className="text-sm text-text-secondary space-y-1">
                      {member.publications.map((publication, index) => (
                        <li key={index}>• {publication}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Back to Team Button */}
          <div  className="text-center mt-12">
            <Link
              href="/team"
              className="btn-secondary hover-lift"
            >
              ← Back to Team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
