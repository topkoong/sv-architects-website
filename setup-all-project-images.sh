#!/bin/bash

# Comprehensive script to add local images to ALL project pages
# Downloads placeholder images and updates project data

echo "🔧 Setting up local images for ALL project pages..."

# Define all project pages that need images (excluding the 2 we already fixed)
PROJECTS=(
  "baan-huahin"
  "centerpoint-siamsquare"
  "don-mueang-airport-terminal3"
  "eec-silicon-technology-park"
  "geo-valley-apartment-master-plan"
  "hh-park-residence"
  "hi-tech-sandbox"
  "innovation-center"
  "jet-villa-residence"
  "mahachai-airport-luxe-city-master-plan"
  "maintenance-repair-operation-u-tapao-airport"
  "phuket-condominium"
  "phuket-condominium-interior-design"
  "service-apartment-selangor-malaysia"
  "siamese-rama9"
  "siamese-rama9-award"
  "somdech-phra-nangchao-sirikit-hospital"
  "sukhumvit-hills"
  "transit-oriented-development-tod"
  "u-tapao-airport-new-passenger-terminal"
  "villa-perpetual"
  "villa-perpetual-interior-design"
  "vivo-executive-apartment"
  "zen-village"
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

# Create projects directory
mkdir -p public/images/projects

echo "📥 Downloading images for ${#PROJECTS[@]} projects..."

# Download images for each project
for project in "${PROJECTS[@]}"; do
  echo "📝 Processing: $project"
  
  # Download 4 images for each project
  for i in {1..4}; do
    image_url="${PLACEHOLDER_IMAGES[$((i-1))]}"
    filename="${project}-${i}.jpg"
    
    echo "  📥 Downloading: $filename"
    curl -s -o "public/images/projects/$filename" "$image_url"
  done
  
  echo "✅ Completed: $project"
done

echo ""
echo "📝 Updating project data files..."

# Update project data files
for project in "${PROJECTS[@]}"; do
  file="src/app/projects/$project/page.tsx"
  
  if [ -f "$file" ]; then
    echo "📝 Updating: $file"
    
    # Create a temporary file for processing
    temp_file=$(mktemp)
    
    # Process the file line by line
    while IFS= read -r line; do
      # Check if line contains images array
      if echo "$line" | grep -q "images: \["; then
        echo "  images: [" >> "$temp_file"
        # Add local image paths
        for i in {1..4}; do
          if [ $i -eq 4 ]; then
            echo "    '/sv-architects-website/images/projects/${project}-${i}.jpg'" >> "$temp_file"
          else
            echo "    '/sv-architects-website/images/projects/${project}-${i}.jpg'," >> "$temp_file"
          fi
        done
        echo "  ]," >> "$temp_file"
      else
        echo "$line" >> "$temp_file"
      fi
    done < "$file"
    
    # Replace original file with processed version
    mv "$temp_file" "$file"
    
    echo "✅ Updated: $file"
  else
    echo "⚠️  File not found: $file"
  fi
done

echo ""
echo "✅ All project pages have been updated with local images!"
echo "📋 Summary:"
echo "   - Downloaded images for ${#PROJECTS[@]} projects"
echo "   - Updated project data files"
echo "   - All images are now hosted locally"
echo "   - Ready for build and deployment"
