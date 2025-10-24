/**
 * ============================================================================
 * FILE: src/components/layout/Footer.tsx
 * ============================================================================
 * DESCRIPTION: Footer Component for SV Architects website
 * Modern black footer with company information and links
 * ============================================================================
 */

import Link from 'next/link';
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <Image
                src="/images/logos/logo-sv-black.png"
                alt="SV Architects Logo"
                width={200}
                height={60}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Leading architectural firm specializing in innovative design solutions across Thailand. 
              Creating sustainable, functional, and aesthetically pleasing spaces.
            </p>
            <div className="text-gray-300 space-y-2">
              <p>Bangkok, Thailand</p>
              <p>Email: info@sv-arch.com</p>
              <p>Phone: +66 2 123 4567</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors duration-200">Home</Link></li>
              <li><Link href="/projects" className="text-gray-300 hover:text-white transition-colors duration-200">Projects</Link></li>
              <li><Link href="/team" className="text-gray-300 hover:text-white transition-colors duration-200">Team</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-3">
              <li><span className="text-gray-300">Commercial Architecture</span></li>
              <li><span className="text-gray-300">Healthcare Facilities</span></li>
              <li><span className="text-gray-300">Transportation Infrastructure</span></li>
              <li><span className="text-gray-300">Sustainable Design</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 SV Architects and Associates Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};