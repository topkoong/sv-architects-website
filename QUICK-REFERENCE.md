# 🔧 SV Architects Website - Quick Troubleshooting Reference

## 1-Page Quick Fix Guide

---

## 🚨 Emergency Fixes

### Site Won't Build
```bash
# Nuclear option - fixes 90% of issues
rm -rf .next node_modules pnpm-lock.yaml
pnpm install
pnpm run build
```

### Images Not Loading
```javascript
// In next.config.js, ensure:
images: {
  unoptimized: true, // TRUE for GitHub Pages static export
  domains: ['sv-arch.com', 'www.sv-arch.com'],
}
```

### Mobile Menu Not Working
```typescript
// Check Header.tsx has:
const menuRef = useRef<HTMLDivElement>(null);

// And in the mobile menu:
<motion.nav ref={menuRef}>
```

### Site Running Slow
```javascript
// Check next.config.js has:
output: 'export', // For GitHub Pages static export

// For production deployment (Vercel/Netlify):
output: undefined, // Remove 'export'
```

---

## 📱 Mobile Issues

### Problem: Text Too Small
```css
/* Add to globals.css */
body {
  font-size: 16px; /* Minimum for mobile */
}
```

### Problem: Buttons Too Small
```css
/* Add to globals.css */
.touch-target {
  min-height: 44px;
  min-width: 44px;
}
```

### Problem: Horizontal Scrolling
```css
/* Add to layout */
html, body {
  overflow-x: hidden;
  max-width: 100vw;
}
```

---

## 🖼️ Image Problems

### Images Show as Broken
1. Check path: Use `/images/...` not `./images/...`
2. Verify file exists: `ls -la public/images/`
3. Check format: JPG, PNG, WebP, AVIF only

### Images Load Slowly
```typescript
// Use priority for above-fold images:
<OptimizedImage
  src="/images/hero.jpg"
  alt="Hero"
  priority={true} // Add this!
/>
```

### External Images Don't Work
```javascript
// In next.config.js:
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'your-domain.com',
    },
  ],
}
```

---

## ⚡ Performance Issues

### Low Lighthouse Score
**Check these in order:**

1. ✅ Image optimization enabled (unoptimized: false)
2. ✅ Using priority for hero images
3. ✅ Animations not too complex (< 0.5s duration)
4. ✅ No console.log in production
5. ✅ Compression enabled

### Slow Page Load
```bash
# Analyze bundle
npm install --save-dev @next/bundle-analyzer
ANALYZE=true npm run build

# Look for large packages
# Consider dynamic imports
```

---

## 🎨 Styling Issues

### Tailwind Classes Not Working
```bash
# Rebuild
rm -rf .next
npm run dev
```

### Dark Mode Issues
```css
/* Check globals.css has: */
@media (prefers-color-scheme: dark) {
  :root {
    /* Dark mode colors */
  }
}
```

### Fonts Not Loading
```css
/* Check globals.css has: */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap');
```

---

## 🔒 Security Warnings

### Remove X-Powered-By Header
```javascript
// In next.config.js:
poweredByHeader: false,
```

### Add Security Headers
```javascript
// In next.config.js, add to headers():
{
  key: 'X-Frame-Options',
  value: 'SAMEORIGIN'
},
{
  key: 'X-Content-Type-Options',
  value: 'nosniff'
}
```

---

## 🌐 Deployment Issues

### Vercel Deploy Fails
```bash
# Check build locally first
npm run build

# If successful, push to GitHub
git push origin main

# Vercel auto-deploys from main branch
```

### GitHub Pages 404 Errors
```javascript
// Ensure next.config.js has:
output: 'export',
basePath: '/repository-name',
trailingSlash: true,
```

### Environment Variables Not Working
```bash
# Create .env.local
NEXT_PUBLIC_SITE_URL=https://sv-arch.com

# Restart dev server
npm run dev
```

---

## 📊 Testing Quick Commands

```bash
# Development
pnpm run dev                    # Start dev server

# Testing
pnpm run lint                   # Check code quality
pnpm run type-check             # Check TypeScript
pnpm run format                 # Format code

# Production
pnpm run build                  # Build for production
pnpm start                      # Start production server

# Deployment
vercel --prod                  # Deploy to Vercel
netlify deploy --prod          # Deploy to Netlify
```

---

## 🔍 Debug Checklist

When something breaks, check in this order:

```markdown
1. Console Errors
   - [ ] Open DevTools (F12)
   - [ ] Check Console tab
   - [ ] Note any red errors

2. Network Tab
   - [ ] Check failed requests
   - [ ] Look for 404s
   - [ ] Check image loading

3. Clear Cache
   - [ ] Hard reload (Ctrl+Shift+R)
   - [ ] Clear browser cache
   - [ ] Delete .next folder

4. Dependencies
   - [ ] pnpm install
   - [ ] Check package versions
   - [ ] Update if needed

5. Configuration
   - [ ] Check next.config.js
   - [ ] Verify paths
   - [ ] Check environment variables

6. Code
   - [ ] Run linting
   - [ ] Check TypeScript
   - [ ] Review recent changes
```

---

## 📞 Get Help Fast

### 1. Check Documentation
- Main guide: `SV-ARCHITECTS-FIXES-AND-IMPROVEMENTS.md`
- Implementation: `IMPLEMENTATION-GUIDE.md`

### 2. Review Fixed Files
- Header: `Header-FIXED.tsx`
- Images: `OptimizedImage-FIXED.tsx`
- Config: `next.config-FIXED.js`

### 3. Test Components
```bash
# Test individual component
pnpm run dev
# Then navigate to page
```

### 4. Run Diagnostics
```bash
# Full diagnostic
pnpm run lint
pnpm run type-check
pnpm run build
```

---

## ⚙️ Configuration Quick Reference

### next.config.js (Production - Vercel/Netlify)
```javascript
{
  reactStrictMode: true,
  images: { 
    unoptimized: false,
    formats: ['image/webp', 'image/avif']
  },
  poweredByHeader: false,
  compress: true,
}
```

### next.config.js (GitHub Pages - Current Setup)
```javascript
{
  output: 'export',
  basePath: '/sv-architects-website',
  trailingSlash: false,
  images: { 
    unoptimized: true,
    formats: ['image/webp', 'image/avif']
  },
  poweredByHeader: false,
  compress: true,
}
```

### tailwind.config.js
```javascript
{
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
}
```

---

## 🎯 Performance Targets

| Metric | Target | How to Check |
|--------|--------|--------------|
| Lighthouse Score | 95+ | Chrome DevTools |
| FCP | < 1.2s | Lighthouse |
| LCP | < 2.5s | Lighthouse |
| CLS | < 0.1 | Lighthouse |
| Bundle Size | < 100KB | `ANALYZE=true npm run build` |

---

## 🚀 Quick Deploy

### Vercel (Recommended)
```bash
vercel login
vercel
vercel --prod
```

### Netlify
```bash
netlify login
netlify init
netlify deploy --prod
```

### GitHub Pages (Current Setup)
```bash
pnpm run build
pnpm run export
# Files are in 'out' directory
# Push to gh-pages branch or use GitHub Actions
```

---

## ✅ Pre-Deploy Checklist

```markdown
Critical (Must Do):
- [ ] Build succeeds locally
- [ ] No console errors
- [ ] Images load
- [ ] Mobile menu works
- [ ] All pages accessible

Important (Should Do):
- [ ] Lighthouse score > 90
- [ ] Mobile responsive
- [ ] SEO meta tags
- [ ] Analytics configured

Nice to Have (Can Do Later):
- [ ] Contact form tested
- [ ] 404 page styled
- [ ] Sitemap generated
```

---

## 💡 Pro Tips

1. **Always test locally before deploying**
   ```bash
   pnpm run build && pnpm start
   ```

2. **Use preview deployments**
   - Vercel: Automatic on PR
   - Netlify: Deploy previews

3. **Monitor after deployment**
   - Check Web Vitals
   - Review error logs
   - Test on real devices

4. **Keep dependencies updated**
   ```bash
   pnpm outdated
   pnpm update
   ```

5. **Regular backups**
   ```bash
   git commit -am "Backup before changes"
   git push
   ```

---

## 🆘 Still Stuck?

### Last Resort:
```bash
# Complete reset
git stash
git pull origin main
rm -rf .next node_modules pnpm-lock.yaml
pnpm install
pnpm run build
```

### If that doesn't work:
1. Check all three documentation files
2. Review the fixed component files
3. Compare with original working version
4. Test on a fresh clone of the repository

---

**Quick Reference Version 2.0**  
**Updated:** December 2024  
**Package Manager:** pnpm  
**Current Setup:** GitHub Pages with static export

## 🎯 Current Project Status
- ✅ Production-grade SEO implemented
- ✅ Performance optimized (Core Web Vitals targets met)
- ✅ All components follow naming conventions
- ✅ Comprehensive documentation created
- ✅ About page images integrated
- ✅ Ready for deployment

Keep this handy for quick troubleshooting! 🔧
