# Local Image Setup Guide for SV Architects Website

## ✅ Current Status
- **2 project pages now working with local images:**
  - Bunditpatanasilpa Institute Auditorium
  - Chaopraya Mahanatee Hotel
- **Images are properly hosted locally** in `public/images/projects/`
- **Next.js Image component** is configured correctly
- **Build and deployment** working successfully

## 📁 Directory Structure

```
public/
├── images/
│   ├── projects/           # Project images
│   │   ├── bunditpatanasilpa-auditorium.jpg
│   │   ├── bunditpatanasilpa-interior1.jpg
│   │   ├── bunditpatanasilpa-interior2.jpg
│   │   ├── bunditpatanasilpa-gallery.jpg
│   │   ├── chaopraya-hotel-1.jpg
│   │   ├── chaopraya-hotel-2.jpg
│   │   ├── chaopraya-hotel-3.jpg
│   │   └── chaopraya-hotel-4.jpg
│   ├── homepage/          # Homepage images
│   └── team/              # Team member photos
```

## 🔧 How to Add Images for Other Projects

### Step 1: Download Images
```bash
# Navigate to projects directory
cd public/images/projects/

# Download images for a specific project (example: siamese-rama9)
curl -o siamese-rama9-1.jpg "https://your-image-source.com/image1.jpg"
curl -o siamese-rama9-2.jpg "https://your-image-source.com/image2.jpg"
curl -o siamese-rama9-3.jpg "https://your-image-source.com/image3.jpg"
curl -o siamese-rama9-4.jpg "https://your-image-source.com/image4.jpg"
```

### Step 2: Update Project Data
In the project's `page.tsx` file, update the images array:

```typescript
// Example: src/app/projects/siamese-rama9/page.tsx
const project = {
  // ... other project data
  images: [
    '/sv-architects-website/images/projects/siamese-rama9-1.jpg',
    '/sv-architects-website/images/projects/siamese-rama9-2.jpg',
    '/sv-architects-website/images/projects/siamese-rama9-3.jpg',
    '/sv-architects-website/images/projects/siamese-rama9-4.jpg'
  ],
  // ... rest of project data
};
```

### Step 3: Verify Image Components
Make sure the project page uses Next.js Image components:

```typescript
import Image from "next/image";

// In the component:
<Image
  src={project.images[currentImageIndex] || ''}
  alt={`${project.name} - Image ${currentImageIndex + 1}`}
  className="w-full h-full object-cover"
  fill
  objectFit="cover"
/>
```

## 🎯 Best Practices

### 1. Image Naming Convention
- Use descriptive names: `project-name-description.jpg`
- Examples:
  - `siamese-rama9-exterior.jpg`
  - `siamese-rama9-interior.jpg`
  - `siamese-rama9-gallery.jpg`

### 2. Image Optimization
- **Format**: Use JPG for photos, PNG for graphics with transparency
- **Size**: Aim for 800x600px or similar aspect ratios
- **File Size**: Keep under 200KB per image for web performance

### 3. Image Paths
- Always use the full path: `/sv-architects-website/images/projects/filename.jpg`
- This ensures compatibility with GitHub Pages `basePath`

## 🚀 Quick Setup Script

Here's a script to quickly set up images for any project:

```bash
#!/bin/bash
# Usage: ./setup-project-images.sh project-name

PROJECT_NAME=$1
if [ -z "$PROJECT_NAME" ]; then
    echo "Usage: $0 <project-name>"
    exit 1
fi

echo "Setting up images for project: $PROJECT_NAME"

# Create project directory if it doesn't exist
mkdir -p "public/images/projects"

# Download placeholder images (replace with actual image URLs)
cd public/images/projects
curl -o "${PROJECT_NAME}-1.jpg" "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
curl -o "${PROJECT_NAME}-2.jpg" "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop"
curl -o "${PROJECT_NAME}-3.jpg" "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop"
curl -o "${PROJECT_NAME}-4.jpg" "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop"

echo "Images downloaded for $PROJECT_NAME"
echo "Now update the project data in src/app/projects/${PROJECT_NAME}/page.tsx"
```

## 🔍 Troubleshooting

### Images Not Loading?
1. **Check file paths**: Ensure paths start with `/sv-architects-website/images/`
2. **Verify file exists**: Check if image files are in `public/images/projects/`
3. **Check build**: Run `pnpm run build` to see if there are any errors
4. **Clear cache**: Try hard refresh (Ctrl+F5 or Cmd+Shift+R)

### Build Errors?
1. **TypeScript errors**: Make sure image paths are strings, not undefined
2. **Missing images**: Add null checking: `src={project.images[index] || ''}`
3. **Syntax errors**: Check for proper comma placement in arrays

## 📋 Next Steps

1. **Download real project images** from SV Architects' existing website or photo library
2. **Replace placeholder images** with actual project photos
3. **Add images for remaining projects** using the same pattern
4. **Optimize images** for web performance (compress, resize)
5. **Add alt text** descriptions for accessibility

## 🎉 Benefits of Local Images

- ✅ **Faster loading** - No external dependencies
- ✅ **Better reliability** - Images won't disappear
- ✅ **Full control** - You own the images
- ✅ **Better SEO** - Search engines can index your images
- ✅ **Consistent branding** - All images match your brand
- ✅ **Offline capability** - Works without internet connection

The infrastructure is now properly set up! You can follow this guide to add images for all your remaining projects.
