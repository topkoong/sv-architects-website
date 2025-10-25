#!/bin/bash

# Script to revert OptimizedImage imports and use Next.js Image instead
# This is simpler and will work correctly

echo "🔧 Reverting to Next.js Image component for project detail pages..."

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
    echo "📝 Processing: $file"
    
    # Remove OptimizedImage import if present
    if grep -q "OptimizedImage" "$file"; then
      echo "  ➖ Removing OptimizedImage import"
      sed -i "" '/import.*OptimizedImage/d' "$file"
    fi
    
    # Add Next.js Image import if not present
    if ! grep -q "import.*Image.*from.*next/image" "$file"; then
      echo "  ➕ Adding Next.js Image import"
      sed -i "" '/import.*from.*next\/link/a\
import Image from "next/image";
' "$file"
    fi
    
    # Replace OptimizedImage with Image
    if grep -q "OptimizedImage" "$file"; then
      echo "  🔄 Replacing OptimizedImage with Image"
      sed -i "" 's/OptimizedImage/Image/g' "$file"
    fi
    
    echo "✅ Completed: $file"
  else
    echo "⚠️  File not found: $file"
  fi
done

echo ""
echo "✅ All project detail pages have been updated!"
echo "📋 Summary of changes:"
echo "   - Removed OptimizedImage imports"
echo "   - Added Next.js Image imports"
echo "   - Replaced OptimizedImage components with Image components"
echo "   - Images should now render correctly with Next.js optimization"
