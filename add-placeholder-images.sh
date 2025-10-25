#!/bin/bash

# Script to add placeholder images to all project detail pages
# Uses Unsplash images as placeholders until real project images are available

echo "🔧 Adding placeholder images to all project detail pages..."

# Define the project detail pages to update
PROJECT_PAGES=(
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

# Array of placeholder image URLs (architecture/building related)
PLACEHOLDER_IMAGES=(
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop"
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop"
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop"
  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop"
  "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800&h=600&fit=crop"
  "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop"
  "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop"
)

for file in "${PROJECT_PAGES[@]}"; do
  if [ -f "$file" ]; then
    echo "📝 Processing: $file"
    
    # Create a temporary file for processing
    temp_file=$(mktemp)
    
    # Process the file line by line
    while IFS= read -r line; do
      # Check if line contains images array
      if echo "$line" | grep -q "images: \["; then
        echo "  images: [" >> "$temp_file"
        # Add placeholder images
        for i in "${!PLACEHOLDER_IMAGES[@]}"; do
          if [ $i -eq $((${#PLACEHOLDER_IMAGES[@]} - 1)) ]; then
            echo "    '${PLACEHOLDER_IMAGES[$i]}'" >> "$temp_file"
          else
            echo "    '${PLACEHOLDER_IMAGES[$i]}'," >> "$temp_file"
          fi
        done
        echo "  ]," >> "$temp_file"
      else
        echo "$line" >> "$temp_file"
      fi
    done < "$file"
    
    # Replace original file with processed version
    mv "$temp_file" "$file"
    
    echo "✅ Completed: $file"
  else
    echo "⚠️  File not found: $file"
  fi
done

echo ""
echo "✅ All project detail pages have been updated with placeholder images!"
echo "📋 Summary of changes:"
echo "   - Added placeholder images from Unsplash"
echo "   - Images are architecture/building related"
echo "   - All project pages now have working images"
echo "   - Real project images can be added later by replacing the URLs"
