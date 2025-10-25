#!/bin/bash

# Comprehensive fix script to remove ALL duplicate image lines and fix syntax errors
echo "🔧 Comprehensive fix for all project files..."

# Get all project pages
PROJECT_PAGES=$(find src/app/projects -name 'page.tsx' ! -path '*/projects/page.tsx' ! -path '*/projects/[slug]/page.tsx')

for file in $PROJECT_PAGES; do
  echo "📝 Fixing: $file"
  
  # Remove ALL lines that look like duplicate image entries
  # This removes lines that contain image paths but are outside the proper images array structure
  sed -i '' '/^[[:space:]]*\/.*images\/projects\/.*\.jpg[[:space:]]*,$/d' "$file"
  sed -i '' '/^[[:space:]]*\/.*images\/projects\/.*\.png[[:space:]]*,$/d' "$file"
  sed -i '' '/^[[:space:]]*\/.*images\/projects\/.*\.jpg$/d' "$file"
  sed -i '' '/^[[:space:]]*\/.*images\/projects\/.*\.png$/d' "$file"
  
  # Remove lines that are just standalone image paths without proper array structure
  sed -i '' '/^[[:space:]]*\/images\/projects\/.*\.jpg[[:space:]]*$/d' "$file"
  sed -i '' '/^[[:space:]]*\/images\/projects\/.*\.png[[:space:]]*$/d' "$file"
  
  # Remove any remaining malformed lines that start with spaces and contain image paths
  sed -i '' '/^[[:space:]]*\/.*images\/projects\/.*\.jpg[[:space:]]*,$/d' "$file"
  sed -i '' '/^[[:space:]]*\/.*images\/projects\/.*\.png[[:space:]]*,$/d' "$file"
  
  echo "✅ Fixed: $file"
done

echo "✅ All project files have been comprehensively fixed!"
