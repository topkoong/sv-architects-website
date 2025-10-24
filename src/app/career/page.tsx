import type { Metadata } from 'next';
import Link from 'next/link';

/**
 * Production-grade SEO metadata for the Career page
 * Includes comprehensive meta tags, Open Graph, Twitter Cards, and structured data
 */
export const metadata: Metadata = {
  // Basic meta tags
  title: 'Career Opportunities | SV Architects and Associates Ltd. | Bangkok Thailand',
  description: 'Join SV Architects and Associates Ltd., a leading architectural firm in Bangkok, Thailand. Explore career opportunities in architecture, design, and project management.',
  keywords: [
    'SV Architects careers',
    'Architecture jobs Bangkok',
    'Thailand architecture careers',
    'Architectural jobs',
    'Design careers Thailand',
    'Project manager jobs',
    'Interior design careers',
    'Urban planning jobs',
    'Architecture firm careers',
    'Bangkok design jobs',
    'Professional architecture careers',
    'Architectural design positions',
    'Construction careers Thailand',
    'Engineering jobs Bangkok'
  ],
  
  // Open Graph meta tags
  openGraph: {
    type: 'website',
    title: 'Career Opportunities | SV Architects and Associates Ltd.',
    description: 'Join SV Architects and Associates Ltd., a leading architectural firm in Bangkok, Thailand.',
    url: 'https://sv-architects.github.io/career',
    siteName: 'SV Architects and Associates Ltd.',
    images: [
      {
        url: 'https://sv-architects.github.io/images/career/team-working.jpg',
        width: 1200,
        height: 630,
        alt: 'SV Architects team working together'
      }
    ],
    locale: 'en_US'
  },
  
  // Twitter Card meta tags
  twitter: {
    card: 'summary_large_image',
    title: 'Career Opportunities | SV Architects and Associates Ltd.',
    description: 'Join SV Architects and Associates Ltd., a leading architectural firm in Bangkok, Thailand.',
    images: ['https://sv-architects.github.io/images/career/team-working.jpg']
  },
  
  // Additional meta tags
  authors: [{ name: 'SV Architects Development Team' }],
  creator: 'SV Architects and Associates Ltd.',
  publisher: 'SV Architects and Associates Ltd.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  
  // Canonical URL
  alternates: {
    canonical: 'https://sv-architects.github.io/career'
  },
  
  // Additional SEO meta tags
  other: {
    'geo.region': 'TH',
    'geo.placename': 'Bangkok',
    'geo.position': '13.7563;100.5018',
    'ICBM': '13.7563, 100.5018'
  }
};

export default function CareerPage() {
  // ===== STRUCTURED DATA (JSON-LD) =====
  
  /**
   * Generate structured data for SEO
   * Provides search engines with detailed job posting information
   */
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Architectural Design Positions",
    "description": "Join SV Architects and Associates Ltd. as an architectural designer. Work on diverse projects including residential, commercial, healthcare, and aviation architecture.",
    "datePosted": "2024-01-01",
    "validThrough": "2024-12-31",
    "employmentType": "FULL_TIME",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "SV Architects and Associates Ltd.",
      "url": "https://sv-architects.github.io",
      "logo": "https://sv-architects.github.io/images/logo/sv-architects-logo.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Sukhumvit Road",
        "addressLocality": "Bangkok",
        "addressRegion": "Bangkok",
        "postalCode": "10110",
        "addressCountry": "TH"
      }
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Sukhumvit Road",
        "addressLocality": "Bangkok",
        "addressRegion": "Bangkok",
        "postalCode": "10110",
        "addressCountry": "TH"
      }
    },
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": "THB",
      "value": {
        "@type": "QuantitativeValue",
        "minValue": 50000,
        "maxValue": 100000,
        "unitText": "MONTH"
      }
    },
    "qualifications": [
      "Bachelor's degree in Architecture",
      "2+ years of architectural design experience",
      "Proficiency in AutoCAD, Revit, and SketchUp",
      "Strong design and technical skills",
      "Excellent communication abilities"
    ],
    "responsibilities": [
      "Develop architectural designs and drawings",
      "Collaborate with project teams",
      "Prepare construction documents",
      "Coordinate with consultants and contractors",
      "Ensure design compliance with regulations"
    ]
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-black">
              CAREER
            </h1>
            
            <p className="text-xl max-w-3xl mx-auto text-gray-600 leading-relaxed mb-8">
              The power of the pen... is the power of ideas.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-black mb-2">20+</div>
                <div className="text-sm text-gray-600">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black mb-2">30+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black mb-2">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black mb-2">100%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Opportunities Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl font-bold mb-4 text-black">Career Opportunities</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-600">
              Join our team of passionate architects and designers who are committed to 
              excellence, innovation, and creating exceptional built environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Senior Architect',
                department: 'Architecture',
                location: 'Bangkok, Thailand',
                type: 'Full-time',
                description: 'Lead architectural design projects and mentor junior architects in our growing team.',
                requirements: [
                  'Bachelor\'s degree in Architecture',
                  '5+ years of architectural experience',
                  'Proficiency in AutoCAD, Revit, and SketchUp',
                  'Strong design and technical skills',
                  'Leadership and mentoring abilities'
                ]
              },
              {
                title: 'Project Manager',
                department: 'Project Management',
                location: 'Bangkok, Thailand',
                type: 'Full-time',
                description: 'Manage complex architectural projects from conception to completion.',
                requirements: [
                  'Degree in Architecture or related field',
                  '3+ years of project management experience',
                  'Strong organizational and communication skills',
                  'Experience with construction processes',
                  'PMP certification preferred'
                ]
              },
              {
                title: 'Interior Designer',
                department: 'Interior Design',
                location: 'Bangkok, Thailand',
                type: 'Full-time',
                description: 'Create innovative interior design solutions for residential and commercial projects.',
                requirements: [
                  'Bachelor\'s degree in Interior Design',
                  '2+ years of interior design experience',
                  'Proficiency in design software',
                  'Strong creative and technical skills',
                  'Portfolio of completed projects'
                ]
              },
              {
                title: 'Junior Architect',
                department: 'Architecture',
                location: 'Bangkok, Thailand',
                type: 'Full-time',
                description: 'Support senior architects in design development and project documentation.',
                requirements: [
                  'Bachelor\'s degree in Architecture',
                  '0-2 years of architectural experience',
                  'Proficiency in AutoCAD and Revit',
                  'Strong design and technical skills',
                  'Eagerness to learn and grow'
                ]
              }
            ].map((opportunity, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold mb-3 text-black">{opportunity.title}</h3>
                
                <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    {opportunity.department}
                  </span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {opportunity.location}
                  </span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {opportunity.type}
                  </span>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {opportunity.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-black">Requirements:</h4>
                  <ul className="space-y-2">
                    {opportunity.requirements.map((requirement, reqIndex) => (
                      <li key={reqIndex} className="flex items-start text-gray-600">
                        <svg className="w-4 h-4 mr-2 mt-0.5 text-black flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {requirement}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="#application-form"
                  className="inline-flex items-center px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-200"
                >
                  Apply Now
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application-form" className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-black">Apply Now</h2>
              <p className="text-lg text-gray-600">
                Ready to join our team? Fill out the application form below and we'll get back to you soon.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-semibold text-black mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-colors duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-black mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-colors duration-200"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-black mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-colors duration-200"
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="position" className="block text-sm font-semibold text-black mb-2">
                      Position Applied For *
                    </label>
                    <select
                      id="position"
                      name="position"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-colors duration-200"
                    >
                      <option value="">Select a position</option>
                      <option value="senior-architect">Senior Architect</option>
                      <option value="project-manager">Project Manager</option>
                      <option value="interior-designer">Interior Designer</option>
                      <option value="junior-architect">Junior Architect</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="experience" className="block text-sm font-semibold text-black mb-2">
                      Years of Experience
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-colors duration-200"
                    >
                      <option value="">Select experience level</option>
                      <option value="0-1">0-1 years</option>
                      <option value="2-3">2-3 years</option>
                      <option value="4-5">4-5 years</option>
                      <option value="6-10">6-10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="coverLetter" className="block text-sm font-semibold text-black mb-2">
                    Cover Letter
                  </label>
                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-colors duration-200 resize-none"
                    placeholder="Tell us why you want to join SV Architects and what you can bring to our team..."
                  />
                </div>

                <div>
                  <label htmlFor="resume" className="block text-sm font-semibold text-black mb-2">
                    Upload Resume *
                  </label>
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-colors duration-200 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-black hover:file:bg-gray-200"
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    Accepted formats: PDF, DOC, DOCX (Max size: 10MB)
                  </p>
                </div>

                <div className="text-center pt-6">
                  <button
                    type="submit"
                    className="inline-flex items-center px-8 py-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-200 shadow-lg hover:shadow-xl"
                  >
                    Submit Application
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4 text-black">Ready to Start Your Career?</h3>
            <p className="text-lg mb-8 text-gray-600 max-w-2xl mx-auto">
              Join our team of passionate architects and designers who are shaping the future 
              of architecture in Thailand and beyond.
            </p>
            <Link
              href="#application-form"
              className="inline-flex items-center px-8 py-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Apply Now
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      </main>
    </>
  );
}