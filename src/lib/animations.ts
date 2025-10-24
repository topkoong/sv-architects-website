/**
 * ============================================================================
 * FILE: src/lib/animations.ts
 * ============================================================================
 * DESCRIPTION: Centralized Framer Motion animation variants for consistent
 * animations across the entire SV Architects website
 * 
 * FEATURES:
 * - Reusable animation variants for common use cases
 * - Consistent timing and easing across the site
 * - Professional, elegant animations suitable for architecture firm
 * - Performance-optimized animations
 * 
 * USAGE:
 * import { fadeIn, slideUp, staggerContainer } from '@/lib/animations';
 * 
 * <motion.div variants={fadeIn} initial="hidden" animate="visible">
 *   Content
 * </motion.div>
 * 
 * LAST MODIFIED: [Current Date]
 * AUTHOR: Development Team
 * 
 * ============================================================================
 */

// Import Variants type from framer-motion for type safety
import { Variants } from 'framer-motion';

/**
 * ============================================================================
 * BASIC ANIMATION VARIANTS
 * ============================================================================
 * Simple, commonly used animations for elements entering the viewport
 * ============================================================================
 */

/**
 * Fade-in animation variant
 * Used for elements that should fade in when entering viewport
 * Perfect for text content, overlays, and subtle reveals
 */
export const fadeIn: Variants = {
  // Hidden state (initial): element is invisible
  hidden: { 
    opacity: 0 // Fully transparent
  },
  // Visible state (animate): element fades in smoothly
  visible: { 
    opacity: 1, // Fully opaque
    transition: { 
      duration: 0.6, // Animation lasts 0.6 seconds
      ease: 'easeOut' // Smooth easing function (fast start, slow end)
    }
  }
};

/**
 * Slide-up animation variant
 * Used for elements that should slide up from below while fading in
 * Great for cards, sections, and content blocks
 */
export const slideUp: Variants = {
  hidden: { 
    opacity: 0, // Start invisible
    y: 60 // Start 60 pixels below final position
  },
  visible: { 
    opacity: 1, // Fade to fully visible
    y: 0, // Move to final position
    transition: { 
      duration: 0.8, // Slightly longer animation for smooth motion
      ease: [0.6, -0.05, 0.01, 0.99] // Custom cubic-bezier easing for elegance
    }
  }
};

/**
 * Slide-down animation variant
 * Used for elements that should slide down from above while fading in
 * Perfect for dropdowns, modals, and header elements
 */
export const slideDown: Variants = {
  hidden: { 
    opacity: 0, // Start invisible
    y: -60 // Start 60 pixels above final position
  },
  visible: { 
    opacity: 1, // Fade to fully visible
    y: 0, // Move to final position
    transition: { 
      duration: 0.8, // Smooth animation duration
      ease: [0.6, -0.05, 0.01, 0.99] // Elegant easing curve
    }
  }
};

/**
 * Slide-left animation variant
 * Used for elements that should slide in from the right
 * Great for sidebars, navigation panels, and lateral content
 */
export const slideLeft: Variants = {
  hidden: { 
    opacity: 0, // Start invisible
    x: 60 // Start 60 pixels to the right
  },
  visible: { 
    opacity: 1, // Fade to fully visible
    x: 0, // Move to final position
    transition: { 
      duration: 0.8, // Smooth animation duration
      ease: [0.6, -0.05, 0.01, 0.99] // Elegant easing curve
    }
  }
};

/**
 * Slide-right animation variant
 * Used for elements that should slide in from the left
 * Perfect for content that appears from the left side
 */
export const slideRight: Variants = {
  hidden: { 
    opacity: 0, // Start invisible
    x: -60 // Start 60 pixels to the left
  },
  visible: { 
    opacity: 1, // Fade to fully visible
    x: 0, // Move to final position
    transition: { 
      duration: 0.8, // Smooth animation duration
      ease: [0.6, -0.05, 0.01, 0.99] // Elegant easing curve
    }
  }
};

/**
 * Scale-in animation variant
 * Used for elements that should scale up from smaller size while fading in
 * Great for buttons, icons, and interactive elements
 */
export const scaleIn: Variants = {
  hidden: { 
    opacity: 0, // Start invisible
    scale: 0.9 // Start at 90% of final size
  },
  visible: { 
    opacity: 1, // Fade to fully visible
    scale: 1, // Scale to full size
    transition: { 
      duration: 0.5, // Faster animation for interactive elements
      ease: [0.6, -0.05, 0.01, 0.99] // Elegant easing curve
    }
  }
};

/**
 * ============================================================================
 * STAGGER ANIMATION VARIANTS
 * ============================================================================
 * Parent-child animation patterns for creating sequential animations
 * ============================================================================
 */

/**
 * Staggered children animation
 * Used for parent containers to create sequential animation of child elements
 * Perfect for grids, lists, and card layouts
 */
export const staggerContainer: Variants = {
  hidden: { 
    opacity: 0 // Parent starts invisible
  },
  visible: {
    opacity: 1, // Parent fades in
    transition: {
      staggerChildren: 0.1, // Delay 0.1s between each child animation
      delayChildren: 0.3 // Wait 0.3s before starting first child animation
    }
  }
};

/**
 * Staggered children with faster timing
 * Used when you want quicker sequential animations
 * Great for navigation items and quick interactions
 */
export const staggerContainerFast: Variants = {
  hidden: { 
    opacity: 0 // Parent starts invisible
  },
  visible: {
    opacity: 1, // Parent fades in
    transition: {
      staggerChildren: 0.05, // Faster stagger: 0.05s between children
      delayChildren: 0.1 // Quicker start: 0.1s delay
    }
  }
};

/**
 * Staggered children with slower timing
 * Used for dramatic, elegant reveals
 * Perfect for hero sections and important content
 */
export const staggerContainerSlow: Variants = {
  hidden: { 
    opacity: 0 // Parent starts invisible
  },
  visible: {
    opacity: 1, // Parent fades in
    transition: {
      staggerChildren: 0.2, // Slower stagger: 0.2s between children
      delayChildren: 0.5 // Longer delay: 0.5s before starting
    }
  }
};

/**
 * ============================================================================
 * SPECIALIZED ANIMATION VARIANTS
 * ============================================================================
 * Specific animations for particular use cases and components
 * ============================================================================
 */

/**
 * Hero section animation
 * Used for main hero content with dramatic entrance
 * Combines multiple animation types for maximum impact
 */
export const heroAnimation: Variants = {
  hidden: { 
    opacity: 0, // Start invisible
    y: 100, // Start 100px below
    scale: 0.95 // Start slightly smaller
  },
  visible: { 
    opacity: 1, // Fade to fully visible
    y: 0, // Move to final position
    scale: 1, // Scale to full size
    transition: { 
      duration: 1.2, // Longer duration for dramatic effect
      ease: [0.6, -0.05, 0.01, 0.99], // Elegant easing curve
      delay: 0.2 // Slight delay for timing
    }
  }
};

/**
 * Card hover animation
 * Used for interactive cards and hover effects
 * Subtle scale and shadow changes for professional feel
 */
export const cardHover: Variants = {
  rest: { 
    scale: 1, // Normal size
    boxShadow: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)' // Soft shadow
  },
  hover: { 
    scale: 1.02, // Slight scale up (2%)
    boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.1)', // Elegant shadow
    transition: { 
      duration: 0.3, // Quick transition
      ease: 'easeOut' // Smooth easing
    }
  }
};

/**
 * Button press animation
 * Used for button interactions and click feedback
 * Quick scale down for tactile feedback
 */
export const buttonPress: Variants = {
  rest: { 
    scale: 1 // Normal size
  },
  pressed: { 
    scale: 0.98, // Slight scale down (2%)
    transition: { 
      duration: 0.1, // Very quick transition
      ease: 'easeOut' // Smooth easing
    }
  }
};

/**
 * Modal animation
 * Used for modal dialogs and overlays
 * Combines fade and scale for smooth appearance
 */
export const modalAnimation: Variants = {
  hidden: { 
    opacity: 0, // Start invisible
    scale: 0.9, // Start smaller
    y: 20 // Start slightly below
  },
  visible: { 
    opacity: 1, // Fade to fully visible
    scale: 1, // Scale to full size
    y: 0, // Move to final position
    transition: { 
      duration: 0.4, // Quick but smooth
      ease: [0.6, -0.05, 0.01, 0.99] // Elegant easing curve
    }
  },
  exit: { 
    opacity: 0, // Fade out
    scale: 0.9, // Scale down slightly
    y: 20, // Move down slightly
    transition: { 
      duration: 0.3, // Quick exit
      ease: 'easeIn' // Quick easing for exit
    }
  }
};

/**
 * Navigation menu animation
 * Used for mobile navigation and dropdown menus
 * Slides in from the side with staggered children
 */
export const navMenuAnimation: Variants = {
  hidden: { 
    opacity: 0, // Start invisible
    x: '100%' // Start completely off-screen to the right
  },
  visible: { 
    opacity: 1, // Fade to fully visible
    x: 0, // Move to final position
    transition: { 
      duration: 0.4, // Quick slide in
      ease: [0.6, -0.05, 0.01, 0.99], // Elegant easing curve
      staggerChildren: 0.1, // Stagger child animations
      delayChildren: 0.1 // Small delay before children start
    }
  },
  exit: { 
    opacity: 0, // Fade out
    x: '100%', // Slide back off-screen
    transition: { 
      duration: 0.3, // Quick exit
      ease: 'easeIn' // Quick easing for exit
    }
  }
};

/**
 * Image reveal animation
 * Used for images that should appear with a subtle effect
 * Combines fade and slight scale for elegant reveal
 */
export const imageReveal: Variants = {
  hidden: { 
    opacity: 0, // Start invisible
    scale: 1.05 // Start slightly larger
  },
  visible: { 
    opacity: 1, // Fade to fully visible
    scale: 1, // Scale to normal size
    transition: { 
      duration: 0.8, // Smooth reveal
      ease: 'easeOut' // Smooth easing
    }
  }
};

/**
 * Text reveal animation
 * Used for text content that should appear character by character
 * Creates a typewriter-like effect
 */
export const textReveal: Variants = {
  hidden: { 
    opacity: 0, // Start invisible
    y: 20 // Start slightly below
  },
  visible: { 
    opacity: 1, // Fade to fully visible
    y: 0, // Move to final position
    transition: { 
      duration: 0.6, // Smooth reveal
      ease: 'easeOut' // Smooth easing
    }
  }
};

/**
 * ============================================================================
 * PAGE TRANSITION ANIMATIONS
 * ============================================================================
 * Animations for page transitions and route changes
 * ============================================================================
 */

/**
 * Page enter animation
 * Used when a new page loads
 * Smooth fade and slide up for professional feel
 */
export const pageEnter: Variants = {
  initial: { 
    opacity: 0, // Start invisible
    y: 20 // Start slightly below
  },
  animate: { 
    opacity: 1, // Fade to fully visible
    y: 0, // Move to final position
    transition: { 
      duration: 0.6, // Smooth transition
      ease: 'easeOut' // Smooth easing
    }
  },
  exit: { 
    opacity: 0, // Fade out
    y: -20, // Move slightly up
    transition: { 
      duration: 0.4, // Quick exit
      ease: 'easeIn' // Quick easing
    }
  }
};

/**
 * ============================================================================
 * UTILITY FUNCTIONS
 * ============================================================================
 * Helper functions for creating custom animations
 * ============================================================================
 */

/**
 * Create a custom stagger animation with specified timing
 * @param staggerDelay - Delay between child animations (in seconds)
 * @param childDelay - Initial delay before first child (in seconds)
 * @returns Custom stagger animation variants
 */
export const createStaggerAnimation = (
  staggerDelay: number = 0.1,
  childDelay: number = 0.3
): Variants => ({
  hidden: { 
    opacity: 0 
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: childDelay
    }
  }
});

/**
 * Create a custom slide animation with specified direction and distance
 * @param direction - Direction of slide ('up', 'down', 'left', 'right')
 * @param distance - Distance to slide (in pixels)
 * @returns Custom slide animation variants
 */
export const createSlideAnimation = (
  direction: 'up' | 'down' | 'left' | 'right',
  distance: number = 60
): Variants => {
  const directionMap = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance }
  };

  return {
    hidden: { 
      opacity: 0,
      ...directionMap[direction]
    },
    visible: { 
      opacity: 1,
      x: 0,
      y: 0,
      transition: { 
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };
};

/**
 * Create a custom scale animation with specified scale values
 * @param initialScale - Initial scale value (default: 0.9)
 * @param finalScale - Final scale value (default: 1)
 * @returns Custom scale animation variants
 */
export const createScaleAnimation = (
  initialScale: number = 0.9,
  finalScale: number = 1
): Variants => ({
  hidden: { 
    opacity: 0,
    scale: initialScale
  },
  visible: { 
    opacity: 1,
    scale: finalScale,
    transition: { 
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
});

/**
 * ============================================================================
 * ANIMATION PRESETS
 * ============================================================================
 * Pre-configured animation combinations for common use cases
 * ============================================================================
 */

/**
 * Animation presets for different component types
 */
export const animationPresets = {
  // Hero section animations
  hero: {
    container: staggerContainerSlow,
    title: heroAnimation,
    subtitle: slideUp,
    button: scaleIn
  },
  
  // Card grid animations
  cardGrid: {
    container: staggerContainer,
    card: slideUp
  },
  
  // Navigation animations
  navigation: {
    menu: navMenuAnimation,
    item: fadeIn
  },
  
  // Modal animations
  modal: {
    overlay: fadeIn,
    content: modalAnimation
  },
  
  // Image gallery animations
  gallery: {
    container: staggerContainer,
    image: imageReveal
  },
  
  // Text content animations
  textContent: {
    container: staggerContainer,
    heading: slideUp,
    paragraph: fadeIn
  }
};

/**
 * ============================================================================
 * PERFORMANCE OPTIMIZATIONS
 * ============================================================================
 * Animation configurations optimized for performance
 * ============================================================================
 */

/**
 * Reduced motion variants for accessibility
 * Respects user's motion preferences
 */
export const reducedMotionVariants: Variants = {
  hidden: { 
    opacity: 0 
  },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.1 // Very quick transition
    }
  }
};

/**
 * Check if user prefers reduced motion
 * @returns boolean indicating if reduced motion is preferred
 */
export const prefersReducedMotion = (): boolean => {
  // Check if window is available (client-side)
  if (typeof window === 'undefined') return false;
  
  // Check user's motion preference
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Get appropriate animation variants based on user preferences
 * @param normalVariants - Normal animation variants
 * @param reducedVariants - Reduced motion variants
 * @returns Appropriate animation variants
 */
export const getAccessibleVariants = (
  normalVariants: Variants,
  reducedVariants: Variants = reducedMotionVariants
): Variants => {
  return prefersReducedMotion() ? reducedVariants : normalVariants;
};
