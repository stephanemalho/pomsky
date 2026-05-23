# Image Optimization Setup

Self-hosted responsive images — no Vercel Image Optimization billing.

## How it works

Three scripts + one Next.js custom loader replace Vercel's paid image optimizer:

1. **`convert:webp`** — converts JPEG/PNG → WebP. Keeps originals as OG metadata fallbacks.
2. **`update:images`** — rewrites `src=` props in TSX/TS from `.jpg/.png` → `.webp`. Leaves OG/Twitter/JSON-LD image URLs untouched.
3. **`optimize:images`** — resizes images to display-appropriate dimensions AND generates two responsive variants per WebP: `-sm.webp` (480px) for mobile, `-md.webp` (960px) for tablet.
4. **`lib/image-loader.ts`** — custom Next.js loader that maps each srcset width request to the right pre-generated variant. Zero Vercel calls.

Run everything at once:
```bash
npm run images:full
```

Run after adding or replacing any image. Safe to re-run: already-sized files are skipped (main files), variants are always regenerated fresh.

---

## Replicating on a new project

### 1. Install sharp

```bash
npm install --save-dev sharp
```

### 2. Copy the three scripts

Copy these files from `scripts/` into the new project's `scripts/` folder:
- `convert-to-webp.js`
- `update-image-references.js`
- `optimize-all-images.mjs`

Then edit **`optimize-all-images.mjs`**: update the `CONFIGS` array to match the new project's `public/` directory structure and component `sizes=` props.

**How to calculate `maxWidth`**: find the largest `sizes=` breakpoint in the components that use that directory, then multiply by 2× for 2× DPR.  
Example: `sizes="50vw"` on a 1440px viewport → `0.5 × 1440 × 2 = 1440` → `maxWidth: 1440`.

```js
const CONFIGS = [
    { dir: ".",                   maxWidth: 1920, quality: 88 },
    { dir: "pages/home",          maxWidth: 1200, quality: 90 },
    { dir: "pages/puppies",       maxWidth: 1500, quality: 85 },
    // add one entry per directory that contains images
];
```

### 3. Copy the custom loader

Copy `lib/image-loader.ts` as-is — no changes needed. The loader maps:
- width ≤ 480 → `-sm.webp`
- width ≤ 960 → `-md.webp`
- width > 960 → `.webp` (full size)

### 4. Update `next.config.ts`

Replace the `images` block:

```typescript
images: {
    loader: "custom",
    loaderFile: "./lib/image-loader.ts",
    // deviceSizes must match the variant breakpoints in image-loader.ts
    deviceSizes: [480, 960, 1440, 1920],
    imageSizes: [64, 128, 256, 480],
    remotePatterns: [
        // keep existing remote patterns (YouTube thumbnails, etc.)
    ]
},
```

Remove `formats`, `qualities`, and `unoptimized` if present — they only apply to Vercel's optimizer.

### 5. Update `package.json` scripts

```json
"scripts": {
    "convert:webp":   "node scripts/convert-to-webp.js",
    "update:images":  "node scripts/update-image-references.js",
    "optimize:images":"node scripts/optimize-all-images.mjs",
    "images:full":    "npm run convert:webp && npm run update:images && npm run optimize:images"
}
```

### 6. Fix TypeScript imports from public/

Any image imported as a TypeScript module bypasses the custom loader:

```ts
// ❌ bypasses loader — becomes /_next/static/media/... hash URL
import heroImg from "@/public/hero.webp";

// ✅ goes through loader — correct responsive srcSet generated
image: "/hero.webp"
```

Search for all static imports from `public/` and replace with string paths:
```bash
grep -rn 'from "@/public/' app/ components/
```

Change the type from `StaticImageData` to `string` in the affected data types.

### 7. Add `priority` to the LCP hero image

The largest visible image on first load must not be lazy-loaded:

```tsx
// ❌ lazy-loaded — hurts LCP
<Image src="/hero.webp" fill ... />

// ✅ preloaded — browser fetches it immediately
<Image src="/hero.webp" fill priority ... />
```

Identify the LCP image with Lighthouse → "Détection de la requête LCP" section. Add `priority` prop to that specific `<Image>`.

---

## Key constraints (do not change)

| Rule | Why |
|------|-----|
| `.rotate()` only in `convert-to-webp.js` for JPEG→WebP | WebP has no EXIF orientation; browsers auto-correct JPEG via EXIF |
| `.withMetadata()` when resizing JPEG in-place | Preserves EXIF so browsers display correct orientation without physical rotation |
| Never delete original JPEG/PNG | They serve as OG/Twitter/JSON-LD metadata fallbacks (WebP not universally supported by scrapers) |
| Never change OG/Twitter/JSON-LD image URLs | `update-image-references.js` intentionally skips these |
| `loader: "custom"` not `unoptimized: true` | `unoptimized` removes srcSet entirely; custom loader keeps responsive srcSet |
| Avoid `import img from "@/public/..."` | Static imports route to `/_next/static/media/` hash URLs that bypass the loader |

---

## Adding or replacing an image

```bash
# 1. Drop new JPEG/PNG files into the appropriate public/ subdirectory
# 2. Run the full pipeline
npm run images:full
# 3. Commit everything (originals + WebP + -sm + -md variants)
git add -A && git commit -m "perf: add/update images"
```

If the new image is in a directory not listed in `CONFIGS` in `optimize-all-images.mjs`, add it first.

---

## File naming after the pipeline

For each source image `foo.jpg` in `public/pages/puppies/`:

```
public/pages/puppies/
  foo.jpg          ← original, kept as OG JPEG fallback
  foo.webp         ← desktop WebP (maxWidth from CONFIGS)
  foo-md.webp      ← tablet WebP (960px)
  foo-sm.webp      ← mobile WebP (480px)
```

The `<Image src="/pages/puppies/foo.webp" sizes="..." />` component renders:
```html
<link rel="preload" as="image" imageSrcSet="/pages/puppies/foo-sm.webp 480w, /pages/puppies/foo-md.webp 960w, /pages/puppies/foo.webp 1440w" ...>
<img srcset="/pages/puppies/foo-sm.webp 480w, /pages/puppies/foo-md.webp 960w, /pages/puppies/foo.webp 1440w" ...>
```
