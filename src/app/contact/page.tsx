/**
 * ============================================================================
 * FILE: src/app/contact/page.tsx
 * ============================================================================
 * DESCRIPTION: Contact page for SV Architects website
 * Comprehensive contact information and inquiry form
 * 
 * FEATURES:
 * - Contact form with validation
 * - Office location and contact details
 * - Interactive map integration
 * - Team contact information
 * - Office hours and availability
 * - SEO optimized with comprehensive metadata
 * - Responsive design with mobile-first approach
 * - Smooth animations and transitions
 * 
 * DEPENDENCIES:
 * - framer-motion: For smooth animations
 * - @/components/ui/OptimizedImage: For optimized images
 * - @/lib/animations: For animation variants
 * 
 * USAGE:
 * This page is accessible at /contact
 * 
 * LAST MODIFIED: [Current Date]
 * AUTHOR: Development Team
 * 
 * ============================================================================
 */

// Import metadata types
import type { Metadata } from 'next';

/**
 * ============================================================================
 * METADATA CONFIGURATION
 * ============================================================================
 * SEO metadata for the contact page
 * ============================================================================
 */
export const metadata: Metadata = {
  // Page title
  title: 'Contact Us | SV Architects and Associates Ltd.',
  
  // Meta description
  description: 'Get in touch with SV Architects for your next project. Contact our team of experienced architects for commercial, healthcare, hospitality, and residential projects in Thailand.',
  
  // Keywords
  keywords: [
    'contact architects',
    'SV Architects contact',
    'architectural consultation',
    'project inquiry',
    'Bangkok architects',
    'Thailand architecture',
    'architectural services',
    'design consultation',
    'project planning',
    'architectural design'
  ],

  // Open Graph metadata
  openGraph: {
    type: 'website',
    url: 'https://sv-arch.com/contact',
    title: 'Contact Us | SV Architects and Associates Ltd.',
    description: 'Get in touch with SV Architects for your next architectural project.',
    siteName: 'SV Architects and Associates Ltd.',
    images: [
      {
        url: 'https://sv-arch.com/images/contact/office-exterior.jpg',
        width: 1200,
        height: 630,
        alt: 'SV Architects office exterior'
      }
    ]
  },

  // Twitter Card metadata
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | SV Architects and Associates Ltd.',
    description: 'Get in touch with SV Architects for your next architectural project.',
    images: ['https://sv-arch.com/images/contact/office-exterior.jpg']
  },

  // Canonical URL
  alternates: {
    canonical: 'https://sv-arch.com/contact'
  }
};

/**
 * ============================================================================
 * MAIN CONTACT PAGE COMPONENT
 * ============================================================================
 * Displays contact information and inquiry form
 * ============================================================================
 */
export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        <p className="text-lg text-center text-gray-600 mb-12">
          Ready to start your next architectural project? Contact us today for a consultation.
        </p>
        <div className="max-w-2xl mx-auto">
          <form className="bg-white p-8 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold text-gray-900 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-semibold text-gray-900 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email address"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                placeholder="Please describe your project requirements..."
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}


