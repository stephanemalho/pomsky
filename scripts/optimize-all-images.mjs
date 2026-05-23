/**
 * Optimizes all site images based on their actual display sizes.
 * Resizes in-place, like the mame-shiba project, so production does not depend
 * on the Next/Vercel image optimization quota.
 *
 * Sizes are based on the actual `sizes=` props found in each component + 2x DPR.
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

// Per-directory config derived from component `sizes=` props x 2 DPR.
// Directories are non-recursive; subdirectories are listed explicitly.
const CONFIGS = [
    // Root public/ — home hero/card images and social fallbacks.
    { dir: ".", maxWidth: 1300, quality: 88 },

    // authors: largest use = home founders around 33vw x 1440 x 2.
    { dir: "assets/authors", maxWidth: 960, quality: 88 },

    // blog: article headers and listing thumbnails.
    { dir: "assets/blog", maxWidth: 1200, quality: 88 },

    // tiktok: thumbnails and spotlight images.
    { dir: "assets/tiktok", maxWidth: 960, quality: 85 },

    // homePage: hero/benefits grid, largest practical display around 50vw.
    { dir: "pages/homePage", maxWidth: 1300, quality: 90 },

    // conditions-de-vie: carousel images at about 45-50vw.
    { dir: "pages/conditions-de-vie", maxWidth: 1200, quality: 88 },

    // galerie: responsive grid and detail images.
    { dir: "pages/galerie", maxWidth: 1300, quality: 88 },
    { dir: "pages/galerie/facebook", maxWidth: 1300, quality: 88 },
    { dir: "pages/galerie/insta", maxWidth: 1300, quality: 88 },

    // le-pomsky: hero at 50vw and smaller grids.
    { dir: "pages/le-pomsky", maxWidth: 1300, quality: 88 },

    // presentation-elevage: two-column images.
    { dir: "pages/presentation-elevage", maxWidth: 1300, quality: 90 },

    // puppies: detail modal and listing images.
    { dir: "pages/puppies", maxWidth: 1300, quality: 85 },

    // reproducteurs: two-column/carousel displays.
    { dir: "pages/reproducteurs", maxWidth: 1300, quality: 88 },
];

const IMAGE_EXTS = new Set([".webp", ".jpeg", ".jpg", ".png"]);
const EXCLUDED_FILES = new Set([
    "qr-code-contact-exotic-perle-teckel.png",
    "qr-code-contact-exotic-perle-teckel.webp",
]);

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
        console.log(`  Skipping ${dir} (not found)`);
        return { resized: 0, skipped: 0, savedBytes: 0 };
    }

    const imageFiles = files.filter((file) => {
        const ext = path.extname(file).toLowerCase();
        return IMAGE_EXTS.has(ext) && !file.startsWith(".") && !EXCLUDED_FILES.has(file);
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

        let pipeline = sharp(filePath).resize(maxWidth, null, { withoutEnlargement: true });

        if (ext === ".webp") {
            pipeline = pipeline.webp({ quality });
        } else if (ext === ".jpeg" || ext === ".jpg") {
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
            `  ${file.padEnd(55)} ${originalWidth}px -> ${maxWidth}px  ${formatBytes(originalSize)} -> ${formatBytes(buffer.length)}  (-${formatBytes(saved)})`
        );
    }

    return { resized, skipped, savedBytes };
}

console.log("Optimizing all site images...\n");

let totalResized = 0;
let totalSkipped = 0;
let totalSaved = 0;

for (const config of CONFIGS) {
    console.log(`${config.dir}  (max ${config.maxWidth}px, q${config.quality})`);
    const result = await processDir(config);
    totalResized += result.resized;
    totalSkipped += result.skipped;
    totalSaved += result.savedBytes;
    if (result.resized === 0) console.log("  all images already within limits");
    console.log();
}

console.log("-".repeat(70));
console.log("Done.");
console.log(`  Resized: ${totalResized} images`);
console.log(`  Skipped: ${totalSkipped} images (already within limits)`);
console.log(`  Saved:   ${formatBytes(totalSaved)} total`);
