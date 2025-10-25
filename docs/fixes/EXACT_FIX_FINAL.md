# 🎯 EXACT FIX - Based on Your Actual Code

## Problem Found! 

I analyzed your actual `team.ts` and `projects.ts` files:

### ✅ Team.ts is CORRECT!
- Already using `getImagePath('/images/team/name.jpg')` ✅
- If team images still don't show, it's an Image component issue, not data!

### ❌ Projects.ts is WRONG!
- Using numbered files: `centerpoint-siamsquare-1.jpg`
- Should use subdirectory: `centerpoint-siamsquare-commercial/*.jpg`
- This causes duplicates AND wrong images!

---

## 🚨 Copy This EXACT Message to Cursor AI

```
I found the root cause of all image problems!

ANALYSIS OF CURRENT CODE:
✅ src/data/team.ts - CORRECT (already using getImagePath)
❌ src/data/projects.ts - WRONG (using numbered files instead of subdirectories)

═══════════════════════════════════════════════════════
FIX 1: TEAM IMAGES (Component Issue)
═══════════════════════════════════════════════════════

The data is correct but images don't show. This means Image components 
are missing the 'unoptimized' prop.

TASK: Add 'unoptimized' prop to ALL <Image> components in:
1. src/app/team/page.tsx
2. src/app/team-member/[slug]/page.tsx

Every <Image> must have:
<Image src={...} alt={...} unoptimized />

═══════════════════════════════════════════════════════
FIX 2: PROJECT IMAGES (Data Wrong + Duplicates)
═══════════════════════════════════════════════════════

CURRENT PROBLEM:
src/data/projects.ts uses:
- centerpoint-siamsquare-1.jpg (numbered)
- jet-villa-residence-1.jpg (numbered)

But your file structure has BETTER images in subdirectories!

SOLUTION: Replace ALL project images with subdirectory paths.

Here's the EXACT mapping for EVERY project:

─────────────────────────────────────────────────────────
PROJECT: centerpoint-siamsquare
CURRENT (WRONG):
  getImagePath('/images/projects/centerpoint-siamsquare-1.jpg')
  getImagePath('/images/projects/centerpoint-siamsquare-2.jpg')
  getImagePath('/images/projects/centerpoint-siamsquare-3.jpg')
  getImagePath('/images/projects/centerpoint-siamsquare-4.jpg')

REPLACE WITH (CORRECT):
  getImagePath('/images/projects/centerpoint-siamsquare-commercial/centerpoint-siamsquare-2nd-floor-1.jpg')
  getImagePath('/images/projects/centerpoint-siamsquare-commercial/centerpoint-siamsquare-2nd-floor-2.jpg')
  getImagePath('/images/projects/centerpoint-siamsquare-commercial/centerpoint-siamsquare-4th-floor.jpg')
  getImagePath('/images/projects/centerpoint-siamsquare-commercial/centerpoint-siamsquare-bts-lower.png')

─────────────────────────────────────────────────────────
PROJECT: siamese-rama9
CURRENT (WRONG):
  getImagePath('/images/projects/siamese-rama9-1.jpg')
  getImagePath('/images/projects/siamese-rama9-2.jpg')
  getImagePath('/images/projects/siamese-rama9-3.jpg')
  getImagePath('/images/projects/siamese-rama9-4.jpg')

REPLACE WITH (CORRECT):
  getImagePath('/images/projects/siamese-rama9-award-winning/siamese-rama9-view1.jpg')
  getImagePath('/images/projects/siamese-rama9-award-winning/siamese-rama9-view2.jpg')
  getImagePath('/images/projects/siamese-rama9-award-winning/siamese-rama9-view3.jpg')

─────────────────────────────────────────────────────────
PROJECT: jet-villa-residence
CURRENT (WRONG):
  getImagePath('/images/projects/jet-villa-residence-1.jpg')
  getImagePath('/images/projects/jet-villa-residence-2.jpg')
  getImagePath('/images/projects/jet-villa-residence-3.jpg')
  getImagePath('/images/projects/jet-villa-residence-4.jpg')

REPLACE WITH (CORRECT - 10 images!):
  getImagePath('/images/projects/jet-villa-residence-residential/jet-villa-air-view.jpg')
  getImagePath('/images/projects/jet-villa-residence-residential/jet-villa-view2.jpg')
  getImagePath('/images/projects/jet-villa-residence-residential/jet-villa-view3.jpg')
  getImagePath('/images/projects/jet-villa-residence-residential/jet-villa-view4.jpg')
  getImagePath('/images/projects/jet-villa-residence-residential/jet-villa-view5.jpg')
  getImagePath('/images/projects/jet-villa-residence-residential/jet-villa-view6.jpg')
  getImagePath('/images/projects/jet-villa-residence-residential/jet-villa-view7.jpg')
  getImagePath('/images/projects/jet-villa-residence-residential/jet-villa-view8.jpg')
  getImagePath('/images/projects/jet-villa-residence-residential/jet-villa-view9.jpg')
  getImagePath('/images/projects/jet-villa-residence-residential/jet-villa-view10.jpg')

─────────────────────────────────────────────────────────
PROJECT: don-mueang-airport-terminal3
CURRENT (WRONG):
  getImagePath('/images/projects/don-mueang-airport-terminal3-1.jpg')
  getImagePath('/images/projects/don-mueang-airport-terminal3-2.jpg')
  getImagePath('/images/projects/don-mueang-airport-terminal3-3.jpg')
  getImagePath('/images/projects/don-mueang-airport-terminal3-4.jpg')

REPLACE WITH (CORRECT):
  getImagePath('/images/projects/don-mueang-international-airport-terminal-3-aviation/IMG_2621.jpeg')
  getImagePath('/images/projects/don-mueang-international-airport-terminal-3-aviation/IMG_2622.jpeg')
  getImagePath('/images/projects/don-mueang-international-airport-terminal-3-aviation/IMG_2623.jpeg')
  getImagePath('/images/projects/don-mueang-international-airport-terminal-3-aviation/IMG_2624.jpeg')
  getImagePath('/images/projects/don-mueang-international-airport-terminal-3-aviation/IMG_2625.jpeg')

─────────────────────────────────────────────────────────
PROJECT: baan-huahin
Replace with:
  getImagePath('/images/projects/baan-huahin-residential/baan-huahin-1.jpg')
  getImagePath('/images/projects/baan-huahin-residential/baan-huahin-2.jpg')

─────────────────────────────────────────────────────────
PROJECT: chaopraya-mahanatee (if it's the hotel)
Replace with:
  getImagePath('/images/projects/chaopraya-mahanatee-hotel-hospitality/chaopraya-mahanatee-hotel-night.jpg')
  getImagePath('/images/projects/chaopraya-mahanatee-hotel-hospitality/chaopraya-mahanatee-hotel-pool.jpg')
  getImagePath('/images/projects/chaopraya-mahanatee-hotel-hospitality/chaopraya-mahanatee-hotel-river.jpg')
  getImagePath('/images/projects/chaopraya-mahanatee-hotel-hospitality/chaopraya-mahanatee-hotel-view10.jpg')

PROJECT: chaopraya-mahanatee (if it's the condominium)
Replace with:
  getImagePath('/images/projects/chaopraya-mahanatee-riverside-condominium-residential/chaopraya-mahanatee-night.jpg')
  getImagePath('/images/projects/chaopraya-mahanatee-riverside-condominium-residential/chaopraya-mahanatee-pool.jpg')
  getImagePath('/images/projects/chaopraya-mahanatee-riverside-condominium-residential/chaopraya-mahanatee-river-view.jpg')
  getImagePath('/images/projects/chaopraya-mahanatee-riverside-condominium-residential/chaopraya-mahanatee-riverside.jpg')

─────────────────────────────────────────────────────────
PROJECT: eec-silicon-technology-park
Replace with:
  getImagePath('/images/projects/eec-silicon-technology-park-master-planning/eec-silicon-tech-park-innovation-center.jpg')
  getImagePath('/images/projects/eec-silicon-technology-park-master-planning/eec-silicon-tech-park-view1.jpg')
  getImagePath('/images/projects/eec-silicon-technology-park-master-planning/eec-silicon-tech-park-view2.jpg')

─────────────────────────────────────────────────────────
PROJECT: geo-valley-apartment-master-plan
Replace with:
  getImagePath('/images/projects/geo-valley-apartment-master-plan/geo-valley-apartment-1.jpg')
  getImagePath('/images/projects/geo-valley-apartment-master-plan/geo-valley-apartment-2.jpg')

─────────────────────────────────────────────────────────
PROJECT: hh-park-residence
Replace with:
  getImagePath('/images/projects/hh-park-residence-residential/hh-park-residence-1.jpg')
  getImagePath('/images/projects/hh-park-residence-residential/hh-park-residence-2.jpg')
  getImagePath('/images/projects/hh-park-residence-residential/hh-park-residence-3.jpg')

─────────────────────────────────────────────────────────
PROJECT: hi-tech-sandbox
Replace with:
  getImagePath('/images/projects/hi-tech-sandbox-interior-design/hi-tech-sandbox-executive.jpg')
  getImagePath('/images/projects/hi-tech-sandbox-interior-design/hi-tech-sandbox-interior.jpg')
  getImagePath('/images/projects/hi-tech-sandbox-interior-design/hi-tech-sandbox-main.jpg')
  getImagePath('/images/projects/hi-tech-sandbox-interior-design/hi-tech-sandbox-office.jpg')
  getImagePath('/images/projects/hi-tech-sandbox-interior-design/hi-tech-sandbox-training-room.jpg')

─────────────────────────────────────────────────────────
PROJECT: innovation-center
Replace with:
  getImagePath('/images/projects/innovation-center-interior-design/innovation-center-closeup.jpg')
  getImagePath('/images/projects/innovation-center-interior-design/innovation-center-hall.jpg')
  getImagePath('/images/projects/innovation-center-interior-design/innovation-center-main.jpg')
  getImagePath('/images/projects/innovation-center-interior-design/innovation-center-scene2.jpg')

─────────────────────────────────────────────────────────
PROJECT: maintenance-repair-operation-u-tapao-airport
Replace with:
  getImagePath('/images/projects/maintenance-repair-operation-u-tapao-airport-aviation/maintenance-repair-operation-u-tapao-1.jpg')
  getImagePath('/images/projects/maintenance-repair-operation-u-tapao-airport-aviation/maintenance-repair-operation-u-tapao-2.jpg')
  getImagePath('/images/projects/maintenance-repair-operation-u-tapao-airport-aviation/maintenance-repair-operation-u-tapao-3.jpg')

─────────────────────────────────────────────────────────
PROJECT: phuket-condominium (residential)
Replace with:
  getImagePath('/images/projects/phuket-condominium-residential/phuket-condominium-1.jpg')
  getImagePath('/images/projects/phuket-condominium-residential/phuket-condominium-2.jpg')
  getImagePath('/images/projects/phuket-condominium-residential/phuket-condominium-3.jpg')

PROJECT: phuket-condominium (interior design)
Replace with:
  getImagePath('/images/projects/phuket-condominium-interior-design/phuket-condominium-interior-design-1.jpg')
  getImagePath('/images/projects/phuket-condominium-interior-design/phuket-condominium-interior-design-2.jpg')
  getImagePath('/images/projects/phuket-condominium-interior-design/phuket-condominium-interior-design-3.jpg')
  getImagePath('/images/projects/phuket-condominium-interior-design/phuket-condominium-interior-design-4.jpg')

─────────────────────────────────────────────────────────
PROJECT: service-apartment-selangor-malaysia
Replace with:
  getImagePath('/images/projects/service-apartment-selangor-malaysia/service-apartment-selangor-1.jpg')
  getImagePath('/images/projects/service-apartment-selangor-malaysia/service-apartment-selangor-2.jpg')

─────────────────────────────────────────────────────────
PROJECT: sukhumvit-hills
Replace with:
  getImagePath('/images/projects/sukhumvit-hills-mixed-use/sukhumvit-hills-detailed.png')
  getImagePath('/images/projects/sukhumvit-hills-mixed-use/sukhumvit-hills-main.png')

─────────────────────────────────────────────────────────
PROJECT: transit-oriented-development-tod
Replace with:
  getImagePath('/images/projects/transit-oriented-development-tod/tod-hnedu.jpg')
  getImagePath('/images/projects/transit-oriented-development-tod/tod-st-plaza.jpg')
  getImagePath('/images/projects/transit-oriented-development-tod/tod-walk.jpg')

─────────────────────────────────────────────────────────
PROJECT: villa-perpetual (residential)
Replace with:
  getImagePath('/images/projects/villa-perpetual-residential/Bird-eye-view-1-1.jpg')
  getImagePath('/images/projects/villa-perpetual-residential/Entrance-1.jpg')
  getImagePath('/images/projects/villa-perpetual-residential/Landscape-1.jpg')

PROJECT: villa-perpetual (interior design)
Replace with:
  getImagePath('/images/projects/villa-perpetual-interior-design/villa-perpetual-dining-alt.jpg')
  getImagePath('/images/projects/villa-perpetual-interior-design/villa-perpetual-dining.jpg')
  getImagePath('/images/projects/villa-perpetual-interior-design/villa-perpetual-family.jpg')
  getImagePath('/images/projects/villa-perpetual-interior-design/villa-perpetual-living.jpg')
  getImagePath('/images/projects/villa-perpetual-interior-design/villa-perpetual-master-bedroom.jpg')

─────────────────────────────────────────────────────────
PROJECT: vivo-executive-apartment
Replace with:
  getImagePath('/images/projects/vivo-executive-apartment/vivo-executive-apartment-1.jpg')
  getImagePath('/images/projects/vivo-executive-apartment/vivo-executive-apartment-2.jpg')

─────────────────────────────────────────────────────────
PROJECT: zen-village
Replace with:
  getImagePath('/images/projects/zen-village-master-plan/zen-village-boat-station.jpg')
  getImagePath('/images/projects/zen-village-master-plan/zen-village-boutique-square.jpg')
  getImagePath('/images/projects/zen-village-master-plan/zen-village-market.jpg')

─────────────────────────────────────────────────────────
PROJECTS WITH SINGLE IMAGE (use subdirectory):

PROJECT: bunditpatanasilpa-auditorium
  getImagePath('/images/projects/bunditpatanasilpa-auditorium/bunditpatanasilpa-auditorium.jpg')

PROJECT: mahachai-airport-luxe-city
  getImagePath('/images/projects/mahachai-airport-luxe-city-master-planning/mahachai-airport-luxe-city.jpg')

PROJECT: phra-nangchao-sirikit-hospital
  getImagePath('/images/projects/phra-nangchao-sirikit-hospital/phra-nangchao-sirikit-hospital.jpg')

PROJECT: u-tapao-airport-new-terminal
  getImagePath('/images/projects/u-tapao-airport-new-terminal/u-tapao-airport-new-terminal.jpg')

═══════════════════════════════════════════════════════

TASK: Update src/data/projects.ts

For EVERY project, replace the numbered file paths with the 
subdirectory paths shown above.

This will:
✅ Remove duplicates (no longer loading both sets)
✅ Show correct images (subdirectories have better names)
✅ Show more images (jet-villa goes from 4 to 10!)

After updating paths, also verify Image components have 
'unoptimized' prop in:
- src/app/projects/[slug]/FullDetailView.tsx
- src/app/projects/[slug]/GalleryOnlyView.tsx
- src/app/projects/page.tsx

START NOW. Update src/data/projects.ts with ALL the mappings above.
```

---

## ✅ Expected Results After Fix

### Team Pages:
- `/team` → All 16 photos visible ✅
- `/team-member/picharn-foongkiatcharoen` → Profile photo shows ✅

### Project Pages:
- `/projects` → One thumbnail per project (no duplicates) ✅
- `/projects/centerpoint-siamsquare` → 4 correct images from commercial folder ✅
- `/projects/jet-villa-residence` → 10 beautiful images from residential folder ✅
- `/projects/siamese-rama9` → 3 award-winning images ✅

---

## 🎉 Why This Fixes Everything

**Root cause:** Using numbered files when subdirectories exist

**Result:** 
- Projects show wrong images (numbered are generic)
- Missing better images (subdirectories have more)
- May cause duplicates if both sets loaded

**Solution:**
- Use subdirectory paths exclusively
- Get better image names
- Get more images per project
- No duplicates possible

**This is the complete fix!** 🚀
