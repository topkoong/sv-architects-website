#!/bin/bash

# Script to fix image rendering in project detail pages
# Replaces <img> tags with OptimizedImage components

echo "🔧 Fixing image rendering in project detail pages..."

# Define the project detail pages to update
PROJECT_PAGES=(
  "src/app/projects/bunditpatanasilpa-institute-auditorium/page.tsx"
  "src/app/projects/chaopraya-mahanatee-hotel/page.tsx"
  "src/app/projects/centerpoint-siamsquare/page.tsx"
  "src/app/projects/don-mueang-airport-terminal3/page.tsx"
  "src/app/projects/eec-silicon-technology-park/page.tsx"
  "src/app/projects/hh-park-residence/page.tsx"
  "src/app/projects/jet-villa-residence/page.tsx"
  "src/app/projects/maintenance-repair-operation-u-tapao-airport/page.tsx"
  "src/app/projects/mahachai-airport-luxe-city-master-plan/page.tsx"
  "src/app/projects/phuket-condominium/page.tsx"
  "src/app/projects/service-apartment-selangor-malaysia/page.tsx"
  "src/app/projects/siamese-rama9/page.tsx"
  "src/app/projects/siamese-rama9-award/page.tsx"
  "src/app/projects/somdech-phra-nangchao-sirikit-hospital/page.tsx"
  "src/app/projects/u-tapao-airport-new-passenger-terminal/page.tsx"
  "src/app/projects/villa-perpetual/page.tsx"
)

for file in "${PROJECT_PAGES[@]}"; do
  if [ -f "$file" ]; then
    echo "📝 Updating: $file"
    
    # Add OptimizedImage import if not present
    if ! grep -q "OptimizedImage" "$file"; then
      # Find the import section and add OptimizedImage import
      sed -i "" '/import.*from.*framer-motion/a\
import OptimizedImage from "@/components/ui/OptimizedImage";
' "$file"
    fi
    
    # Replace <img> tags with OptimizedImage components
    # Pattern 1: Simple img tags with src and alt
    sed -i "" 's|<img[[:space:]]*src={\([^}]*\)}[[:space:]]*alt={\([^}]*\)}[[:space:]]*className="\([^"]*\)"[[:space:]]*/>|<OptimizedImage src={\1} alt={\2} className="\3" fill objectFit="cover" />|g' "$file"
    
    # Pattern 2: img tags without className
    sed -i "" 's|<img[[:space:]]*src={\([^}]*\)}[[:space:]]*alt={\([^}]*\)}[[:space:]]*/>|<OptimizedImage src={\1} alt={\2} fill objectFit="cover" />|g' "$file"
    
    echo "✅ Updated: $file"
  else
    echo "⚠️  File not found: $file"
  fi
done

echo "✅ All project detail pages have been updated!"
echo "📋 Summary of changes:"
echo "   - Added OptimizedImage imports where needed"
echo "   - Replaced <img> tags with OptimizedImage components"
echo "   - Added proper fill and objectFit props for responsive images"
echo "   - Images should now render correctly with Next.js optimization"
