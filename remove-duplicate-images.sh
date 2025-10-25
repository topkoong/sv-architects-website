#!/bin/bash

# Simple script to remove duplicate image lines from all project files
echo "🧹 Removing duplicate image lines from all project files..."

# Get all project pages
PROJECT_PAGES=$(find src/app/projects -name 'page.tsx' ! -path '*/projects/page.tsx' ! -path '*/projects/[slug]/page.tsx')

for file in $PROJECT_PAGES; do
  echo "📝 Cleaning: $file"
  
  # Remove lines that look like duplicate image entries
  # This removes lines that start with spaces and contain image paths but are outside the proper images array
  sed -i '' '/^[[:space:]]*\/sv-architects-website\/images\/projects\/.*\.jpg[[:space:]]*,$/d' "$file"
  sed -i '' '/^[[:space:]]*\/images\/projects\/.*\.jpg[[:space:]]*,$/d' "$file"
  sed -i '' '/^[[:space:]]*\/images\/projects\/.*\.png[[:space:]]*,$/d' "$file"
  
  # Remove lines that are just image paths without proper array structure
  sed -i '' '/^[[:space:]]*\/sv-architects-website\/images\/projects\/.*\.jpg$/d' "$file"
  sed -i '' '/^[[:space:]]*\/images\/projects\/.*\.jpg$/d' "$file"
  sed -i '' '/^[[:space:]]*\/images\/projects\/.*\.png$/d' "$file"
  
  echo "✅ Cleaned: $file"
done

echo "✅ All project files have been cleaned of duplicate image lines!"
