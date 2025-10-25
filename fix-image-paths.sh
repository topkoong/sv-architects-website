#!/bin/bash

# Script to fix all image paths for GitHub Pages basePath compatibility
# This replaces all "/images/" with "/sv-architects-website/images/" in all TypeScript/TSX files

echo "🔧 Fixing image paths for GitHub Pages basePath compatibility..."

# Find all TypeScript/TSX files and replace image paths
find src -name "*.tsx" -o -name "*.ts" | while read file; do
  if grep -q "/images/" "$file"; then
    echo "📝 Updating: $file"
    # Replace /images/ with /sv-architects-website/images/
    sed -i '' 's|/images/|/sv-architects-website/images/|g' "$file"
  fi
done

echo "✅ All image paths have been updated!"
echo "📋 Summary of changes:"
echo "   - All '/images/' paths → '/sv-architects-website/images/'"
echo "   - This ensures compatibility with GitHub Pages basePath"
echo "   - Images will now load correctly at https://topkoong.github.io/sv-architects-website/"
