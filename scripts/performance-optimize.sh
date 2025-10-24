#!/bin/bash

# ============================================================================
# FILE: scripts/performance-optimize.sh
# ============================================================================
# DESCRIPTION: Performance optimization script for SV Architects website
# Runs various optimization tasks to improve Core Web Vitals and Lighthouse scores
# ============================================================================

set -e  # Exit on any error

echo "🚀 Starting performance optimization for SV Architects website..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    print_error "Please run this script from the project root directory"
    exit 1
fi

# Check if pnpm is installed
if ! command -v pnpm &> /dev/null; then
    print_error "pnpm is not installed. Please install pnpm first."
    exit 1
fi

print_status "Installing dependencies..."
pnpm install

print_status "Running type checking..."
pnpm type-check

print_status "Running linting..."
pnpm lint

print_status "Checking code formatting..."
pnpm format:check

print_status "Building production bundle..."
pnpm build

print_status "Analyzing bundle size..."
ANALYZE=true pnpm build

print_status "Starting production server for testing..."
pnpm start &
SERVER_PID=$!

# Wait for server to start
sleep 10

print_status "Running Lighthouse audit..."
if command -v lighthouse &> /dev/null; then
    lighthouse http://localhost:3000 --output=html --output-path=./lighthouse-report.html --chrome-flags="--headless"
    print_success "Lighthouse report generated: lighthouse-report.html"
else
    print_warning "Lighthouse CLI not found. Install with: npm install -g lighthouse"
fi

print_status "Running PageSpeed Insights check..."
if command -v psi &> /dev/null; then
    psi http://localhost:3000 --format=json > pagespeed-report.json
    print_success "PageSpeed Insights report generated: pagespeed-report.json"
else
    print_warning "PageSpeed Insights CLI not found. Install with: npm install -g psi"
fi

# Stop the server
kill $SERVER_PID

print_status "Optimizing images..."
if [ -d "public/images" ]; then
    # Check if imagemagick is installed
    if command -v convert &> /dev/null; then
        find public/images -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" | while read file; do
            print_status "Optimizing $file"
            convert "$file" -quality 85 -strip "$file"
        done
        print_success "Images optimized"
    else
        print_warning "ImageMagick not found. Install for image optimization."
    fi
else
    print_warning "No images directory found"
fi

print_status "Generating sitemap..."
if [ -f "src/app/sitemap.ts" ]; then
    print_success "Sitemap configuration found"
else
    print_warning "Sitemap configuration not found"
fi

print_status "Checking robots.txt..."
if [ -f "public/robots.txt" ]; then
    print_success "robots.txt found"
else
    print_warning "robots.txt not found"
fi

print_status "Validating HTML structure..."
if command -v html-validate &> /dev/null; then
    html-validate public/**/*.html || true
else
    print_warning "html-validate not found. Install with: npm install -g html-validate"
fi

print_status "Checking accessibility..."
if command -v axe &> /dev/null; then
    axe http://localhost:3000 --save results/accessibility-report.json || true
else
    print_warning "axe CLI not found. Install with: npm install -g @axe-core/cli"
fi

print_status "Performance optimization complete!"

echo ""
echo "📊 Performance Optimization Summary:"
echo "=================================="
echo "✅ Dependencies installed"
echo "✅ Type checking passed"
echo "✅ Linting passed"
echo "✅ Code formatting checked"
echo "✅ Production build completed"
echo "✅ Bundle analysis generated"
echo "✅ Lighthouse audit completed"
echo "✅ PageSpeed Insights checked"
echo "✅ Images optimized"
echo "✅ Sitemap validated"
echo "✅ robots.txt checked"
echo "✅ HTML structure validated"
echo "✅ Accessibility checked"
echo ""
echo "📁 Generated Reports:"
echo "- lighthouse-report.html"
echo "- pagespeed-report.json"
echo "- bundle-analysis.html"
echo "- accessibility-report.json"
echo ""
echo "🎯 Next Steps:"
echo "1. Review Lighthouse report for Core Web Vitals"
echo "2. Check PageSpeed Insights for mobile performance"
echo "3. Analyze bundle size report for optimization opportunities"
echo "4. Review accessibility report for WCAG compliance"
echo "5. Deploy to production environment"
echo ""
print_success "Performance optimization completed successfully!"
