#!/bin/bash

# Complete rewrite script to fix all project files with clean image arrays
echo "🔧 Completely rewriting all project files with clean image arrays..."

# Get all project pages (excluding the 2 we already fixed and the main projects page)
PROJECT_PAGES=$(find src/app/projects -name 'page.tsx' ! -path '*/projects/page.tsx' ! -path '*/projects/[slug]/page.tsx')

for file in $PROJECT_PAGES; do
  echo "📝 Rewriting: $file"
  
  # Extract project name from file path
  project_name=$(basename $(dirname "$file"))
  
  # Create a temporary file for processing
  temp_file=$(mktemp)
  
  # Process the file line by line
  in_images_array=false
  images_replaced=false
  
  while IFS= read -r line; do
    # Check if we're entering the images array
    if echo "$line" | grep -q "images: \["; then
      in_images_array=true
      images_replaced=true
      echo "  images: [" >> "$temp_file"
      # Add local image paths
      for i in {1..4}; do
        if [ $i -eq 4 ]; then
          echo "    '/sv-architects-website/images/projects/${project_name}-${i}.jpg'" >> "$temp_file"
        else
          echo "    '/sv-architects-website/images/projects/${project_name}-${i}.jpg'," >> "$temp_file"
        fi
      done
      echo "  ]," >> "$temp_file"
    # Check if we're exiting the images array
    elif [ "$in_images_array" = true ] && echo "$line" | grep -q "],"; then
      in_images_array=false
      # Skip this line as we already added the closing bracket
      continue
    # If we're inside the images array, skip ALL lines until we find the closing bracket
    elif [ "$in_images_array" = true ]; then
      continue
    # Otherwise, add the line normally
    else
      echo "$line" >> "$temp_file"
    fi
  done < "$file"
  
  # Replace original file with processed version
  mv "$temp_file" "$file"
  
  echo "✅ Rewritten: $file"
done

echo "✅ All project files have been completely rewritten with clean image arrays!"
