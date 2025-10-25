#!/bin/bash

# Comprehensive script to fix all TypeScript errors in project detail pages
# Handles all different image source patterns

echo "🔧 Fixing all TypeScript errors in project detail pages..."

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
    
    # Fix all different image source patterns
    sed -i "" 's/src={project\.images\[currentImageIndex\]}/src={project.images[currentImageIndex] || ""}/g' "$file"
    sed -i "" 's/src={project\.images\[0\]}/src={project.images[0] || ""}/g' "$file"
    sed -i "" 's/src={project\.images\[1\]}/src={project.images[1] || ""}/g' "$file"
    sed -i "" 's/src={project\.images\[2\]}/src={project.images[2] || ""}/g' "$file"
    sed -i "" 's/src={project\.images\[3\]}/src={project.images[3] || ""}/g' "$file"
    sed -i "" 's/src={image}/src={image || ""}/g' "$file"
    
    echo "✅ Completed: $file"
  else
    echo "⚠️  File not found: $file"
  fi
done

echo ""
echo "✅ All project detail pages have been updated!"
echo "📋 Summary of changes:"
echo "   - Added null checking for all image source patterns"
echo "   - Fixed TypeScript errors"
echo "   - Images should now render correctly"
