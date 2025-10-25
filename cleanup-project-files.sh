#!/bin/bash

# Clean up script to remove leftover image lines from all project files
echo "🧹 Cleaning up leftover image lines in all project files..."

# Get all project pages
PROJECT_PAGES=$(find src/app/projects -name 'page.tsx' ! -path '*/projects/page.tsx' ! -path '*/projects/[slug]/page.tsx')

for file in $PROJECT_PAGES; do
  echo "📝 Cleaning: $file"
  
  # Create a temporary file for processing
  temp_file=$(mktemp)
  
  # Process the file line by line
  in_images_array=false
  images_closed=false
  
  while IFS= read -r line; do
    # Check if we're entering the images array
    if echo "$line" | grep -q "images: \["; then
      in_images_array=true
      images_closed=false
      echo "$line" >> "$temp_file"
    # Check if we're exiting the images array
    elif [ "$in_images_array" = true ] && echo "$line" | grep -q "],"; then
      in_images_array=false
      images_closed=true
      echo "$line" >> "$temp_file"
    # If we're inside the images array but haven't closed it yet, skip lines that look like old image paths
    elif [ "$in_images_array" = true ] && ! [ "$images_closed" = true ]; then
      # Only keep lines that look like our new image paths
      if echo "$line" | grep -q "/sv-architects-website/images/projects/"; then
        echo "$line" >> "$temp_file"
      fi
    # Otherwise, add the line normally
    else
      echo "$line" >> "$temp_file"
    fi
  done < "$file"
  
  # Replace original file with processed version
  mv "$temp_file" "$file"
  
  echo "✅ Cleaned: $file"
done

echo "✅ All project files have been cleaned up!"
