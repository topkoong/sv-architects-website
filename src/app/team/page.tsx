/**
 * ============================================================================
 * FILE: src/app/team/page.tsx
 * ============================================================================
 * DESCRIPTION: Team listing page showcasing all team members
 * Displays comprehensive information about the SV Architects team
 * 
 * FEATURES:
 * - Complete team member directory
 * - Leadership team highlights
 * - Professional profiles with photos
 * - Skills and expertise showcase
 * - Contact information
 * - SEO optimized with comprehensive metadata
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
 * This page is accessible at /team
 * 
 * LAST MODIFIED: [Current Date]
 * AUTHOR: Development Team
 * 
 * ============================================================================
 */

'use client';

// Import animation variants
import { fadeIn, slideUp, staggerContainer } from '@/lib/animations';
// Import team data
import { getAllTeamMembers, getLeadershipTeam } from '@/data/team';

// Import Next.js components
import Link from 'next/link';
import Image from 'next/image';
// Import custom components
// Import Framer Motion for animations
import { motion } from 'framer-motion';

// Note: Metadata is handled by layout.tsx since this is a client component

/**
 * ============================================================================
 * MAIN TEAM PAGE COMPONENT
 * ============================================================================
 * Displays all team members with comprehensive information
 * ============================================================================
 */
export default function TeamPage() {
  // Get all team members and leadership team
  const allTeamMembers = getAllTeamMembers();
  const leadershipTeam = getLeadershipTeam();

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Leadership Team Section */}
      <LeadershipSection teamMembers={leadershipTeam} />
      
      {/* All Team Members Section */}
      <AllTeamSection teamMembers={allTeamMembers} />
      
      {/* Company Culture Section */}
      <CultureSection />
    </main>
  );
}

/**
 * ============================================================================
 * HERO SECTION COMPONENT
 * ============================================================================
 * Hero section with team overview and statistics
 * ============================================================================
 */
const HeroSection = () => {
  return (
    <section className="
      relative // Position context
      py-16 // 64px vertical padding mobile
      md:py-20 // 80px vertical padding tablet
      lg:py-24 // 96px vertical padding desktop
      bg-white // Clean white background
      overflow-hidden // Hide overflow
    ">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/sv-architects-website/images/patterns/architecture-pattern.svg')] bg-repeat" />
      </div>
      
      <div className="container-responsive relative">
        <motion.div
          variants={fadeIn} // Apply fade-in animation
          initial="hidden" // Start hidden
          animate="visible" // Animate to visible
          className="text-center max-w-4xl mx-auto"
        >
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-black">
            MEET OUR TEAM
          </h1>
          
          {/* Subheading */}
          <p className="text-xl max-w-3xl mx-auto text-gray-600 leading-relaxed mb-8">
            Our diverse team of experienced architects, designers, and project managers 
            brings together decades of expertise to deliver innovative architectural 
            solutions across Thailand and beyond.
          </p>
          
          {/* Team Statistics */}
          <div className="
            grid // Grid layout
            grid-cols-2 // 2 columns on mobile
            md:grid-cols-4 // 4 columns on tablet+
            gap-6 // 24px gap
            mt-12 // 48px top margin
          ">
            <div className="text-center">
              <div className="text-3xl font-bold text-black mb-2">15+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-black mb-2">50+</div>
              <div className="text-sm text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-black mb-2">20+</div>
              <div className="text-sm text-gray-600">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-black mb-2">100%</div>
              <div className="text-sm text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/**
 * ============================================================================
 * LEADERSHIP SECTION COMPONENT
 * ============================================================================
 * Highlights the leadership team members
 * ============================================================================
 */
const LeadershipSection = ({ teamMembers }: { teamMembers: any[] }) => {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="container-responsive">
        {/* Section Header */}
        <motion.div
          variants={fadeIn} // Apply fade-in animation
          initial="hidden" // Start hidden
          whileInView="visible" // Animate when in viewport
          viewport={{ once: true }} // Only animate once
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="heading-lg mb-4">Leadership Team</h2>
          <p className="body-lg max-w-3xl mx-auto text-text-secondary">
            Our leadership team brings together decades of experience and expertise 
            to guide our architectural vision and ensure exceptional project delivery.
          </p>
        </motion.div>

        {/* Leadership Grid */}
        <motion.div
          variants={staggerContainer} // Apply stagger animation
          initial="hidden" // Start hidden
          whileInView="visible" // Animate when in viewport
          viewport={{ once: true }} // Only animate once
          className="
            grid // Grid layout
            grid-cols-1 // 1 column on mobile
            md:grid-cols-2 // 2 columns on tablet
            lg:grid-cols-3 // 3 columns on desktop
            gap-8 // 32px gap
          "
        >
          {teamMembers.map((member) => (
            <motion.article
              key={member.id}
              variants={slideUp} // Apply slide-up animation
              className="
                group // Group for hover effects
                card // Card styling
                text-center // Center text
                hover:shadow-elegant // Elegant shadow on hover
                transition-shadow // Smooth shadow transition
                duration-300 // 300ms transition
                hover-lift // Lift on hover
              "
            >
              {/* Team Member Photo */}
              <div className="
                relative // Position context
                aspect-square // Square aspect ratio for circular images
                mx-auto // Center horizontally
                mb-6 // 24px bottom margin
                w-40 // 160px width
                rounded-full // Circular
                overflow-hidden // Hide overflow
                shadow-md // Medium shadow
              ">
                <Image
                  src={member.image || ''}
                  alt={`${member.fullName} - ${member.title}`}
                  className="w-full h-full object-cover object-[center_top] group-hover:scale-105 transition-transform duration-500"
                  fill
                  objectFit="cover"
                />
              </div>

              {/* Team Member Info */}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-black group-hover:text-black transition-colors duration-200">
                  {member.fullName}
                </h3>
                
                <p className="text-lg mb-4 text-gray-600 font-semibold">
                  {member.title}
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {member.shortBio}
                </p>

                {/* Key Skills */}
                <div className="mb-8">
                  <div className="flex flex-wrap gap-3 justify-center">
                    {member.skills.slice(0, 3).map((skill: string, skillIndex: number) => (
                      <span 
                        key={skillIndex}
                        className="
                          px-4 // 16px horizontal padding
                          py-2 // 8px vertical padding
                          bg-gray-100 // Light gray background
                          text-gray-700 // Gray text color
                          text-sm // 14px font
                          font-medium // Medium weight
                          tracking-wide // Letter spacing
                        "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <Link 
                  href={`/team-member/${member.slug}`}
                  className="
                    inline-flex // Inline flex
                    items-center // Center vertically
                    justify-center // Center horizontally
                    w-full // Full width
                    px-6 // 24px horizontal padding
                    py-3 // 12px vertical padding
                    bg-black // Black background
                    text-white // White text
                    font-semibold // Semi-bold
                    text-sm // 14px font
                    tracking-wide // Letter spacing
                    transition-all // Smooth transitions
                    duration-200 // 200ms duration
                    hover:bg-gray-800 // Darker on hover
                    hover:shadow-lg // Shadow on hover
                    group-hover:transform // Transform on hover
                    group-hover:-translate-y-0.5 // Lift on hover
                  "
                >
                  VIEW PROFILE
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/**
 * ============================================================================
 * ALL TEAM SECTION COMPONENT
 * ============================================================================
 * Displays all team members in a comprehensive grid
 * ============================================================================
 */
const AllTeamSection = ({ teamMembers }: { teamMembers: any[] }) => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="container-responsive">
        {/* Section Header */}
        <motion.div
          variants={fadeIn} // Apply fade-in animation
          initial="hidden" // Start hidden
          whileInView="visible" // Animate when in viewport
          viewport={{ once: true }} // Only animate once
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">ALL TEAM MEMBERS</h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-600 leading-relaxed">
            Get to know each member of our talented team and their unique contributions 
            to our architectural projects and company culture.
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={staggerContainer} // Apply stagger animation
          initial="hidden" // Start hidden
          whileInView="visible" // Animate when in viewport
          viewport={{ once: true }} // Only animate once
          className="
            grid // Grid layout
            grid-cols-1 // 1 column on mobile
            md:grid-cols-2 // 2 columns on tablet
            lg:grid-cols-3 // 3 columns on desktop
            gap-8 // 32px gap
          "
        >
          {teamMembers.map((member) => (
            <motion.article
              key={member.id}
              variants={slideUp} // Apply slide-up animation
              className="
                group // Group for hover effects
                card // Card styling
                hover:shadow-elegant // Elegant shadow on hover
                transition-shadow // Smooth shadow transition
                duration-300 // 300ms transition
                hover-lift // Lift on hover
              "
            >
              {/* Team Member Photo */}
              <div className="
                relative // Position context
                aspect-[4/3] // 4:3 aspect ratio
                overflow-hidden // Hide overflow
                rounded-t-xl // Rounded top corners
              ">
                <Image
                  src={member.image || ''}
                  alt={`${member.fullName} - ${member.title}`}
                  className="w-full h-full object-cover object-[center_top] group-hover:scale-105 transition-transform duration-500"
                  fill
                  objectFit="cover"
                />
                
                {/* Overlay */}
                <div className="
                  absolute // Position over image
                  inset-0 // Cover entire image
                  bg-gradient-to-t // Gradient top to bottom
                  from-black/60 // Black with 60% opacity at bottom
                  to-transparent // Transparent at top
                " />
                
                {/* Position Badge */}
                <div className="
                  absolute // Position absolute
                  top-4 // 16px from top
                  right-4 // 16px from right
                  px-3 // 12px horizontal padding
                  py-1 // 4px vertical padding
                  bg-white/90 // Semi-transparent white background
                  backdrop-blur-sm // Backdrop blur effect
                  rounded-full // Rounded pill
                  text-xs // Extra small text
                  font-semibold // Semi-bold
                  text-text-primary // Primary text color
                ">
                  {member.title}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="heading-sm mb-2 group-hover:text-black transition-colors duration-200">
                  {member.fullName}
                </h3>
                
                <p className="body-sm mb-4 text-text-secondary">
                  {member.shortBio}
                </p>

                {/* Experience and Skills */}
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-text-tertiary">
                    <svg className="w-4 h-4 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {member.experience.years}+ years experience
                  </div>
                  
                  <div className="flex items-center text-sm text-text-tertiary">
                    <svg className="w-4 h-4 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {member.experience.areas.slice(0, 2).join(', ')}
                  </div>
                </div>

                {/* Key Skills */}
                <div className="mt-4 mb-6">
                  <div className="flex flex-wrap gap-2">
                    {member.skills.slice(0, 4).map((skill: string, skillIndex: number) => (
                      <span 
                        key={skillIndex}
                        className="
                          px-2 // 8px horizontal padding
                          py-1 // 4px vertical padding
                          bg-neutral-100 // Light gray background
                          text-neutral-700 // Dark gray text
                          rounded-full // Rounded pill
                          text-xs // Extra small text
                        "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <Link 
                  href={`/team-member/${member.slug}`}
                  className="
                    inline-flex // Inline flex
                    items-center // Center vertically
                    text-sm // 14px
                    font-semibold // Semi-bold
                    text-primary-600 // Blue text
                    hover:text-primary-700 // Darker blue on hover
                    transition-colors // Smooth transition
                  "
                >
                  View Profile
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/**
 * ============================================================================
 * CULTURE SECTION COMPONENT
 * ============================================================================
 * Company culture and values section
 * ============================================================================
 */
const CultureSection = () => {
  const values = [
    {
      title: 'Innovation',
      description: 'We embrace cutting-edge design technologies and sustainable practices to create forward-thinking architectural solutions.',
      icon: '💡'
    },
    {
      title: 'Collaboration',
      description: 'Our team works closely with clients, consultants, and stakeholders to ensure every project exceeds expectations.',
      icon: '🤝'
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards of design quality and project delivery across all our architectural endeavors.',
      icon: '⭐'
    },
    {
      title: 'Sustainability',
      description: 'Environmental responsibility is at the core of our design philosophy, creating buildings that benefit communities.',
      icon: '🌱'
    }
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="container-responsive">
        {/* Section Header */}
        <motion.div
          variants={fadeIn} // Apply fade-in animation
          initial="hidden" // Start hidden
          whileInView="visible" // Animate when in viewport
          viewport={{ once: true }} // Only animate once
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">OUR CULTURE & VALUES</h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-600 leading-relaxed">
            Our team is united by shared values that guide our work and shape our 
            company culture, ensuring we deliver exceptional results for every client.
          </p>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          variants={staggerContainer} // Apply stagger animation
          initial="hidden" // Start hidden
          whileInView="visible" // Animate when in viewport
          viewport={{ once: true }} // Only animate once
          className="
            grid // Grid layout
            grid-cols-1 // 1 column on mobile
            md:grid-cols-2 // 2 columns on tablet
            lg:grid-cols-4 // 4 columns on desktop
            gap-8 // 32px gap
          "
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={slideUp} // Apply slide-up animation
              className="
                card // Card styling
                p-8 // 32px padding
                text-center // Center text
                hover:shadow-elegant // Elegant shadow on hover
                transition-shadow // Smooth shadow transition
                duration-300 // 300ms transition
                hover-lift // Lift on hover
              "
            >
              {/* Value Icon */}
              <div className="text-4xl mb-4">{value.icon}</div>
              
              {/* Value Title */}
              <h3 className="heading-sm mb-4">{value.title}</h3>
              
              {/* Value Description */}
              <p className="body-sm text-text-secondary">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={fadeIn} // Apply fade-in animation
          initial="hidden" // Start hidden
          whileInView="visible" // Animate when in viewport
          viewport={{ once: true }} // Only animate once
          className="text-center mt-16"
        >
          <h3 className="heading-md mb-4">Join Our Team</h3>
          <p className="body-lg mb-8 text-text-secondary max-w-2xl mx-auto">
            We're always looking for talented architects, designers, and project managers 
            who share our passion for innovative design and sustainable architecture.
          </p>
          <Link
            href="/contact"
            className="btn-primary hover-lift hover-glow"
          >
            View Open Positions
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
