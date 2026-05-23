/**
 * Optimizes all site images by resizing them to display-appropriate dimensions.
 * Processes files in-place — run after convert-to-webp.js, before each deploy.
 *
 * Sizes are derived from the actual `sizes=` props in each page/component × 2× DPR.
 * Does NOT rotate images. Does NOT convert formats (WebP stays WebP, JPEG stays JPEG).
 * Original JPEG files are preserved so they can be used as OG metadata fallbacks.
 *
 * Run: node scripts/optimize-all-images.mjs
 * Or:  npm run optimize:images
 */

import sharp from "sharp";
import { readdir, writeFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC = path.join(__dirname, "../public");

// Per-directory config derived from component `sizes=` props × 2× DPR.
// All directories are non-recursive (subdirs listed explicitly below).
const CONFIGS = [
    // Root public/ — hero image (960px × 2=1920) + dog portraits (50vw × 1440 × 2=1440)
    { dir: ".", maxWidth: 1920, quality: 88 },

    // authors: largest use = home founders at 33vw × 1440 × 2 = 952px → cap 960
    { dir: "assets/authors", maxWidth: 960, quality: 88 },

    // blog: article header 1038px originals, slug page at 70vw max → cap 1200
    { dir: "assets/blog", maxWidth: 1200, quality: 88 },

    // tiktok: thumbnails at 320px fixed × 2 = 640, or 33vw × 1440 × 2 = 952 → cap 960
    { dir: "assets/tiktok", maxWidth: 960, quality: 85 },

    // homePage: benefits grid at 33vw × 1440 × 2 = 952px → cap 1200
    { dir: "pages/homePage", maxWidth: 1200, quality: 90 },

    // conditions-de-vie: carousel images at ~50vw × 2 = 1440
    { dir: "pages/conditions-de-vie", maxWidth: 1440, quality: 88 },

    // galerie: grid at 33-50vw × 2 = 1440
    { dir: "pages/galerie", maxWidth: 1440, quality: 88 },
    { dir: "pages/galerie/facebook", maxWidth: 1440, quality: 88 },
    { dir: "pages/galerie/insta", maxWidth: 1440, quality: 88 },

    // le-pomsky: hero at 50vw × 2 = 1440, generation grid at 25vw × 2 = 720 → safe cap 1440
    { dir: "pages/le-pomsky", maxWidth: 1440, quality: 88 },

    // presentation-elevage: two-col at 50vw × 2 = 1440
    { dir: "pages/presentation-elevage", maxWidth: 1440, quality: 90 },

    // puppies: detail modal at 900px × 2 = 1800, cap at 1500 for balance
    { dir: "pages/puppies", maxWidth: 1500, quality: 85 },

    // reproducteurs: two-col at 50vw × 2 = 1440
    { dir: "pages/reproducteurs", maxWidth: 1440, quality: 88 },
];

const IMAGE_EXTS = new Set([".webp", ".jpeg", ".jpg", ".png"]);

function formatBytes(bytes) {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

async function processDir(dirConfig) {
    const { dir, maxWidth, quality } = dirConfig;
    const absDir = path.join(PUBLIC, dir);

    let files;
    try {
        files = await readdir(absDir);
    } catch {
        console.log(`  ⚠ Skipping ${dir} (not found)`);
        return { resized: 0, skipped: 0, savedBytes: 0 };
    }

    // Only process immediate files — subdirs are listed explicitly in CONFIGS
    const imageFiles = files.filter((f) => {
        const ext = path.extname(f).toLowerCase();
        return IMAGE_EXTS.has(ext) && !f.startsWith(".");
    });

    let resized = 0;
    let skipped = 0;
    let savedBytes = 0;

    for (const file of imageFiles) {
        const filePath = path.join(absDir, file);
        const ext = path.extname(file).toLowerCase();

        const { size: originalSize } = await stat(filePath);
        const meta = await sharp(filePath).metadata();
        const originalWidth = meta.width ?? 0;

        if (originalWidth <= maxWidth) {
            skipped++;
            continue;
        }

        // Resize without rotating — withoutEnlargement ensures no upscaling
        let pipeline = sharp(filePath).resize(maxWidth, null, { withoutEnlargement: true });

        if (ext === ".webp") {
            pipeline = pipeline.webp({ quality });
        } else if (ext === ".jpeg" || ext === ".jpg") {
            // Keep as JPEG — original files are used as OG metadata fallbacks
            pipeline = pipeline.jpeg({ quality, mozjpeg: true });
        } else if (ext === ".png") {
            pipeline = pipeline.png({ quality });
        }

        const buffer = await pipeline.toBuffer();
        await writeFile(filePath, buffer);

        const saved = originalSize - buffer.length;
        savedBytes += saved;
        resized++;
        console.log(
            `  ✓ ${file.padEnd(60)} ${originalWidth}px → ${maxWidth}px  ${formatBytes(originalSize)} → ${formatBytes(buffer.length)}  (−${formatBytes(saved)})`
        );
    }

    return { resized, skipped, savedBytes };
}

console.log("Optimizing all site images…\n");

let totalResized = 0;
let totalSkipped = 0;
let totalSaved = 0;

for (const config of CONFIGS) {
    console.log(`📁 ${config.dir.padEnd(35)} (max ${config.maxWidth}px, q${config.quality})`);
    const result = await processDir(config);
    totalResized += result.resized;
    totalSkipped += result.skipped;
    totalSaved += result.savedBytes;
    if (result.resized === 0) console.log("  → all images already within limits");
    console.log();
}

console.log("─".repeat(72));
console.log("Done.");
console.log(`  Resized : ${totalResized} images`);
console.log(`  Skipped : ${totalSkipped} images (already within limits)`);
console.log(`  Saved   : ${formatBytes(totalSaved)} total`);
console.log(`
Next steps:
  git add -A && git commit -m "perf: optimize all site images"
`);
