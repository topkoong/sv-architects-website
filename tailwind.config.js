/**
 * ============================================================================
 * FILE: tailwind.config.js
 * ============================================================================
 * DESCRIPTION: Tailwind CSS configuration for SV Architects website
 * Professional color palette, responsive breakpoints, and custom utilities
 * ============================================================================
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  // Enable dark mode support (class-based)
  darkMode: 'class',
  
  // Content paths for Tailwind to scan for classes
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  
  theme: {
    extend: {
      // Professional color palette for architecture firm
      colors: {
        // Primary brand colors - Professional monochrome palette
        primary: {
          50: '#f8f9fa',   // Lightest gray - subtle backgrounds
          100: '#e9ecef',  // Very light gray - hover states
          200: '#dee2e6',  // Light gray - borders, dividers
          300: '#ced4da',  // Medium light gray - secondary elements
          400: '#adb5bd',  // Medium gray - accents
          500: '#6c757d',  // Main brand gray - primary actions
          600: '#495057',  // Darker gray - hover states
          700: '#343a40',  // Dark gray - active states
          800: '#212529',  // Very dark gray - text on light
          900: '#000000',  // Pure black - headings
          950: '#000000',  // Ultra black - dark mode text
        },
        
        // Neutral grays for professional look
        neutral: {
          50: '#fafafa',   // Pure white alternative
          100: '#f5f5f5',  // Very light gray - backgrounds
          200: '#e5e5e5',  // Light gray - borders
          300: '#d4d4d4',  // Medium light gray - dividers
          400: '#a3a3a3',  // Medium gray - placeholder text
          500: '#737373',  // Medium dark gray - secondary text
          600: '#525252',  // Dark gray - body text
          700: '#404040',  // Very dark gray - headings
          800: '#262626',  // Almost black - primary text
          900: '#171717',  // Pure black - dark mode text
          950: '#0a0a0a',  // Ultra black - dark mode backgrounds
        },
        
        // Accent colors for highlights and special elements
        accent: {
          gold: '#d4af37',      // Elegant gold for awards/highlights
          warmGray: '#78716c',  // Warm gray for secondary text
          success: '#10b981',   // Success green
          warning: '#f59e0b',   // Warning amber
          error: '#ef4444',     // Error red
        },
        
        // Semantic colors for UI elements
        background: {
          primary: '#ffffff',   // Main background
          secondary: '#f8fafc', // Secondary background
          tertiary: '#f1f5f9',  // Tertiary background
        },
        
        text: {
          primary: '#0f172a',   // Primary text color
          secondary: '#475569', // Secondary text color
          tertiary: '#64748b',  // Tertiary text color
          inverse: '#ffffff',   // Text on dark backgrounds
        },
      },
      
      // Professional font families
      fontFamily: {
        // Primary sans-serif font stack
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        // Display font for headings
        display: [
          'Playfair Display',
          'Georgia',
          'Times New Roman',
          'serif',
        ],
        // Monospace for code
        mono: [
          'JetBrains Mono',
          'Fira Code',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },
      
      // Responsive typography scale
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],      // 12px
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],  // 14px
        'base': ['1rem', { lineHeight: '1.5rem' }],     // 16px
        'lg': ['1.125rem', { lineHeight: '1.75rem' }], // 18px
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],  // 20px
        '2xl': ['1.5rem', { lineHeight: '2rem' }],     // 24px
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],   // 36px
        '5xl': ['3rem', { lineHeight: '1' }],           // 48px
        '6xl': ['3.75rem', { lineHeight: '1' }],        // 60px
        '7xl': ['4.5rem', { lineHeight: '1' }],         // 72px
        '8xl': ['6rem', { lineHeight: '1' }],           // 96px
        '9xl': ['8rem', { lineHeight: '1' }],           // 128px
      },
      
      // Professional spacing scale
      spacing: {
        '18': '4.5rem',   // 72px
        '22': '5.5rem',   // 88px
        '26': '6.5rem',   // 104px
        '30': '7.5rem',   // 120px
        '34': '8.5rem',   // 136px
        '38': '9.5rem',   // 152px
        '42': '10.5rem',  // 168px
        '46': '11.5rem',  // 184px
        '50': '12.5rem',  // 200px
      },
      
      // Elegant shadows for professional look
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'elegant': '0 10px 40px -10px rgba(0, 0, 0, 0.1)',
        'luxury': '0 20px 60px -15px rgba(0, 0, 0, 0.15)',
        'inner-soft': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'glow': '0 0 20px rgba(59, 130, 246, 0.15)',
        'glow-lg': '0 0 40px rgba(59, 130, 246, 0.2)',
      },
      
      // Professional border radius
      borderRadius: {
        'none': '0px',
        'sm': '0.125rem',   // 2px
        'DEFAULT': '0.25rem', // 4px
        'md': '0.375rem',   // 6px
        'lg': '0.5rem',     // 8px
        'xl': '0.75rem',    // 12px
        '2xl': '1rem',      // 16px
        '3xl': '1.5rem',    // 24px
        '4xl': '2rem',      // 32px
        'full': '9999px',
      },
      
      // Animation durations
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-down': 'slideDown 0.8s ease-out',
        'slide-left': 'slideLeft 0.8s ease-out',
        'slide-right': 'slideRight 0.8s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      
      // Keyframes for animations
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(60px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-60px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      
      // Container configuration
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1400px',
        },
      },
      
      // Aspect ratios for images
      aspectRatio: {
        '4/3': '4 / 3',
        '3/2': '3 / 2',
        '16/9': '16 / 9',
        '21/9': '21 / 9',
      },
    },
  },
  
  plugins: [
    // Add Tailwind plugins here if needed
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/aspect-ratio'),
  ],
};
