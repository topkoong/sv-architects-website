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
// Import image path helper
import { getImagePath } from '@/config/site';

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
        <div className="absolute inset-0 bg-[url('/images/patterns/architecture-pattern.svg')] bg-repeat" />
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
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-responsive">
        {/* Section Header */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full mb-6">
            <span className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Leadership</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">Leadership Team</h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-600 leading-relaxed">
            Our leadership team brings together decades of experience and expertise 
            to guide our architectural vision and ensure exceptional project delivery.
          </p>
        </motion.div>

        {/* Leadership Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
        >
          {teamMembers.map((member) => (
            <motion.article
              key={member.id}
              variants={slideUp}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 overflow-hidden"
            >
              {/* Team Member Photo */}
              <div className="relative aspect-square mx-auto mb-8 w-40 rounded-full overflow-hidden shadow-2xl ring-4 ring-white group-hover:ring-gray-200 transition-all duration-500">
                <Image
                  src={member.image || ''}
                  alt={`${member.fullName} - ${member.title}`}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  fill
                  style={{ objectFit: 'cover' }}
                  unoptimized
                  priority={true}
                />
              </div>

              {/* Team Member Info */}
              <div className="px-8 pt-4 pb-8 text-center">
                <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
                  {member.fullName}
                </h3>
                
                <p className="text-lg mb-4 text-gray-600 font-semibold">
                  {member.title}
                </p>

                <p className="text-gray-500 mb-8 leading-relaxed">
                  {member.shortBio}
                </p>

                {/* Key Skills */}
                <div className="mb-8">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.skills.slice(0, 3).map((skill: string, skillIndex: number) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold border border-gray-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <Link 
                  href={`/team-member/${member.slug}`}
                  className="inline-flex items-center justify-center w-full px-8 py-4 bg-gray-900 text-white font-semibold text-sm rounded-xl shadow-lg hover:shadow-xl hover:bg-gray-800 transition-all duration-300 group-hover:scale-105 transform"
                >
                  View Profile
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="container-responsive">
        {/* Section Header */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full mb-6">
            <span className="text-sm font-semibold text-gray-700 uppercase tracking-wide">All Members</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">All Team Members</h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-600 leading-relaxed">
            Get to know each member of our talented team and their unique contributions 
            to our architectural projects and company culture.
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
        >
          {teamMembers.map((member) => (
            <motion.article
              key={member.id}
              variants={slideUp}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-400 hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              {/* Team Member Photo */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={member.image || ''}
                  alt={`${member.fullName} - ${member.title}`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  fill
                  style={{ objectFit: 'cover' }}
                  unoptimized
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Position Badge */}
                <div className="absolute top-3 right-3 px-2 py-1 bg-white/95 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-800 shadow-sm">
                  {member.title}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-gray-700 transition-colors duration-200">
                  {member.fullName}
                </h3>
                
                <p className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-3">
                  {member.shortBio}
                </p>

                {/* Experience */}
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {member.experience.years}+ years experience
                </div>

                {/* Key Skills */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-1.5">
                    {member.skills.slice(0, 3).map((skill: string, skillIndex: number) => (
                      <span 
                        key={skillIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <Link 
                  href={`/team-member/${member.slug}`}
                  className="inline-flex items-center justify-center w-full px-4 py-3 bg-gray-900 text-white font-semibold text-sm rounded-lg shadow-md hover:shadow-lg hover:bg-gray-800 transition-all duration-300 group-hover:scale-105 transform"
                >
                  View Profile
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-responsive">
        {/* Section Header */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full mb-6">
            <span className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Culture</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">Our Culture & Values</h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-600 leading-relaxed">
            Our team is united by shared values that guide our work and shape our 
            company culture, ensuring we deliver exceptional results for every client.
          </p>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={slideUp}
              className="group bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-400 hover:-translate-y-2 border border-gray-100"
            >
              {/* Value Icon */}
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
              
              {/* Value Title */}
              <h3 className="text-xl font-bold mb-4 text-gray-900">{value.title}</h3>
              
              {/* Value Description */}
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-3xl font-bold mb-4 text-gray-900">Join Our Team</h3>
          <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We're always looking for talented architects, designers, and project managers 
            who share our passion for innovative design and sustainable architecture.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1"
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
