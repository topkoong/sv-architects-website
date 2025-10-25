#!/bin/bash

# Comprehensive script to fix image rendering in ALL project detail pages
# Replaces <img> tags with OptimizedImage components

echo "🔧 Fixing image rendering in ALL project detail pages..."

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
    
    # Add OptimizedImage import if not present
    if ! grep -q "OptimizedImage" "$file"; then
      echo "  ➕ Adding OptimizedImage import"
      # Find the framer-motion import line and add OptimizedImage import after it
      sed -i "" '/import.*framer-motion/a\
import OptimizedImage from "@/components/ui/OptimizedImage";
' "$file"
    fi
    
    # Count img tags before replacement
    img_count=$(grep -c '<img' "$file" || echo "0")
    
    if [ "$img_count" -gt 0 ]; then
      echo "  🔄 Found $img_count <img> tags to replace"
      
      # Create a temporary file for processing
      temp_file=$(mktemp)
      
      # Process the file line by line
      while IFS= read -r line; do
        # Check if line contains <img tag
        if echo "$line" | grep -q '<img'; then
          # Replace <img with <OptimizedImage and add fill objectFit="cover"
          echo "$line" | sed 's/<img/<OptimizedImage/g' | sed 's|/>| fill objectFit="cover" />|g' >> "$temp_file"
        else
          echo "$line" >> "$temp_file"
        fi
      done < "$file"
      
      # Replace original file with processed version
      mv "$temp_file" "$file"
      
      echo "  ✅ Replaced $img_count <img> tags with OptimizedImage components"
    else
      echo "  ℹ️  No <img> tags found"
    fi
    
    echo "✅ Completed: $file"
  else
    echo "⚠️  File not found: $file"
  fi
done

echo ""
echo "✅ All project detail pages have been processed!"
echo "📋 Summary of changes:"
echo "   - Added OptimizedImage imports where needed"
echo "   - Replaced <img> tags with OptimizedImage components"
echo "   - Added fill and objectFit props for proper responsive behavior"
echo "   - Images should now render correctly with Next.js optimization"
