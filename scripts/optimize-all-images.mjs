/**
 * Optimizes all site images and generates responsive WebP variants.
 *
 * For each WebP image, produces three variants served by lib/image-loader.ts:
 *   foo.webp        — full desktop size  (maxWidth per directory)
 *   foo-md.webp     — 960px max          (tablet)
 *   foo-sm.webp     — 480px max          (mobile)
 *
 * JPEG files are resized in-place with EXIF preserved (OG metadata fallbacks).
 * Does NOT rotate images. Does NOT convert formats.
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

// Responsive variant breakpoints — must match lib/image-loader.ts
const SM_WIDTH = 480;
const MD_WIDTH = 960;

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

// Suffix pattern — these are generated files, never source files
const VARIANT_RE = /-(sm|md)\.(webp)$/;

function formatBytes(bytes) {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

/** Write a WebP variant at targetWidth alongside the source file. */
async function writeVariant(srcPath, targetWidth, quality, label) {
    const dir = path.dirname(srcPath);
    const base = path.basename(srcPath, ".webp");
    const outPath = path.join(dir, `${base}-${label}.webp`);

    const buffer = await sharp(srcPath)
        .resize(targetWidth, null, { withoutEnlargement: true })
        .webp({ quality })
        .toBuffer();

    await writeFile(outPath, buffer);
    return buffer.length;
}

async function processDir(dirConfig) {
    const { dir, maxWidth, quality } = dirConfig;
    const absDir = path.join(PUBLIC, dir);

    let files;
    try {
        files = await readdir(absDir);
    } catch {
        console.log(`  ⚠ Skipping ${dir} (not found)`);
        return { resized: 0, skipped: 0, variants: 0, savedBytes: 0 };
    }

    // Only process source files — skip generated variants and hidden files
    const imageFiles = files.filter((f) => {
        const ext = path.extname(f).toLowerCase();
        return IMAGE_EXTS.has(ext) && !f.startsWith(".") && !VARIANT_RE.test(f);
    });

    let resized = 0;
    let skipped = 0;
    let variants = 0;
    let savedBytes = 0;

    for (const file of imageFiles) {
        const filePath = path.join(absDir, file);
        const ext = path.extname(file).toLowerCase();
        const isWebp = ext === ".webp";
        const isJpeg = ext === ".jpeg" || ext === ".jpg";

        const { size: originalSize } = await stat(filePath);
        const meta = await sharp(filePath).metadata();
        const originalWidth = meta.width ?? 0;

        // ── Step 1: resize main file if oversized ──────────────────────────
        if (originalWidth > maxWidth) {
            let pipeline = sharp(filePath).resize(maxWidth, null, { withoutEnlargement: true });

            if (isWebp) {
                pipeline = pipeline.webp({ quality });
            } else if (isJpeg) {
                // Preserve EXIF so browsers apply orientation correction without
                // physical pixel rotation (withMetadata keeps orientation flag).
                pipeline = pipeline.withMetadata().jpeg({ quality, mozjpeg: true });
            } else if (ext === ".png") {
                pipeline = pipeline.png({ quality });
            }

            const buffer = await pipeline.toBuffer();
            await writeFile(filePath, buffer);

            const saved = originalSize - buffer.length;
            savedBytes += saved;
            resized++;
            console.log(
                `  ✓ ${file.padEnd(55)} ${originalWidth}px → ${maxWidth}px  ${formatBytes(originalSize)} → ${formatBytes(buffer.length)}  (−${formatBytes(saved)})`
            );
        } else {
            skipped++;
        }

        // ── Step 2: generate responsive variants (WebP only) ──────────────
        if (isWebp) {
            await writeVariant(filePath, SM_WIDTH, quality, "sm");
            if (maxWidth > SM_WIDTH) {
                await writeVariant(filePath, MD_WIDTH, quality, "md");
            }
            variants++;
        }
    }

    return { resized, skipped, variants, savedBytes };
}

console.log("Optimizing all site images + generating responsive variants…\n");

let totalResized = 0;
let totalSkipped = 0;
let totalVariants = 0;
let totalSaved = 0;

for (const config of CONFIGS) {
    console.log(`📁 ${config.dir.padEnd(35)} (max ${config.maxWidth}px, q${config.quality})`);
    const result = await processDir(config);
    totalResized += result.resized;
    totalSkipped += result.skipped;
    totalVariants += result.variants;
    totalSaved += result.savedBytes;
    if (result.resized === 0) console.log("  → all source images already within limits");
    console.log();
}

console.log("─".repeat(72));
console.log("Done.");
console.log(`  Resized  : ${totalResized} source images`);
console.log(`  Skipped  : ${totalSkipped} source images (already within limits)`);
console.log(`  Variants : ${totalVariants} WebP images → -sm + -md generated`);
console.log(`  Saved    : ${formatBytes(totalSaved)} on source files`);
console.log(`
Next steps:
  git add -A && git commit -m "perf: optimize images + generate responsive variants"
`);
