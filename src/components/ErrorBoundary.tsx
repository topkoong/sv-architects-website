/**
 * ============================================================================
 * FILE: src/components/ErrorBoundary.tsx
 * ============================================================================
 * DESCRIPTION: Error Boundary Component for SV Architects Website
 * 
 * This component catches JavaScript errors anywhere in the child component tree,
 * logs those errors, and displays a fallback UI instead of the component tree
 * that crashed. This prevents the entire application from crashing.
 * 
 * FEATURES:
 * - Catches JavaScript errors in child components
 * - Logs errors for debugging purposes
 * - Displays user-friendly error message
 * - Provides refresh functionality
 * - Customizable fallback UI
 * 
 * @author SV Architects Development Team
 * @version 1.0.0
 * @since 2024
 * ============================================================================
 */

'use client';

import { Component, ErrorInfo, ReactNode } from 'react';

/**
 * ============================================================================
 * TYPESCRIPT INTERFACES
 * ============================================================================
 */

/**
 * Props interface for ErrorBoundary component
 */
interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

/**
 * State interface for ErrorBoundary component
 */
interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

/**
 * ============================================================================
 * ERROR BOUNDARY COMPONENT
 * ============================================================================
 * 
 * This class component implements React's Error Boundary pattern to catch
 * and handle JavaScript errors in child components.
 * 
 * FUNCTIONALITY:
 * - Catches errors during rendering, lifecycle methods, and constructors
 * - Logs errors for debugging and monitoring
 * - Displays fallback UI to prevent app crashes
 * - Provides recovery mechanism through page refresh
 * 
 * USAGE:
 * Wrap any component tree that might throw errors:
 * <ErrorBoundary fallback={<CustomErrorUI />}>
 *   <ComponentThatMightError />
 * </ErrorBoundary>
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  /**
   * Constructor for ErrorBoundary component
   * 
   * @param props - Component props
   */
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  /**
   * Static method to update state when an error occurs
   * 
   * @param error - The error that was thrown
   * @returns {ErrorBoundaryState} Updated state with error information
   */
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Update state to trigger fallback UI
    return { hasError: true, error };
  }

  /**
   * Lifecycle method called when an error is caught
   * 
   * @param error - The error that was thrown
   * @param errorInfo - Additional error information
   */
  override componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Log error for debugging and monitoring
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    
    // In production, you might want to send this to an error reporting service
    // Example: errorReportingService.captureException(error, errorInfo);
  }

  /**
   * Render method that displays either children or fallback UI
   * 
   * @returns {ReactNode} Either children components or error fallback UI
   */
  override render(): ReactNode {
    // If an error occurred, display fallback UI
    if (this.state.hasError) {
      return this.props.fallback || this.renderDefaultErrorUI();
    }

    // Otherwise, render children normally
    return this.props.children;
  }

  /**
   * Render default error UI when no custom fallback is provided
   * 
   * @returns {ReactNode} Default error UI component
   */
  private renderDefaultErrorUI(): ReactNode {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 max-w-md mx-auto">
          {/* Error Icon */}
          <div className="mb-6">
            <svg 
              className="w-16 h-16 mx-auto text-red-500" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" 
              />
            </svg>
          </div>
          
          {/* Error Message */}
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Oops! Something went wrong
          </h1>
          <p className="text-gray-600 mb-8">
            We're sorry for the inconvenience. Our team has been notified and is working to fix this issue.
          </p>
          
          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={this.handleRefreshPage}
              className="w-full bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors duration-200"
            >
              Refresh Page
            </button>
            <button
              onClick={this.handleGoHome}
              className="w-full bg-gray-200 text-gray-800 px-6 py-3 rounded-md font-semibold hover:bg-gray-300 transition-colors duration-200"
            >
              Go to Homepage
            </button>
          </div>
        </div>
      </div>
    );
  }

  /**
   * Handle page refresh action
   */
  private handleRefreshPage = (): void => {
    window.location.reload();
  };

  /**
   * Handle navigation to homepage
   */
  private handleGoHome = (): void => {
    window.location.href = '/';
  };
}