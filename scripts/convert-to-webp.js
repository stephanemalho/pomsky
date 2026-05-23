const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const publicDir = path.join(__dirname, "..", "public");

// Optional: pass a subdirectory as first argument
// e.g. node scripts/convert-to-webp.js pages/puppies
const targetArg = process.argv[2];
const targetDir = targetArg
    ? path.resolve(publicDir, targetArg)
    : publicDir;

const imageExtensions = [".jpg", ".jpeg", ".png", ".JPG", ".JPEG", ".PNG"];

let totalOriginalSize = 0;
let totalWebpSize = 0;
let convertedCount = 0;

async function convertToWebP(filePath) {
    const ext = path.extname(filePath);
    if (!imageExtensions.includes(ext)) return;

    const fileName = path.basename(filePath, ext);
    const dirName = path.dirname(filePath);
    const webpPath = path.join(dirName, `${fileName}.webp`);

    if (fs.existsSync(webpPath)) {
        console.log(`⏭️  Skipped (already exists): ${path.basename(filePath)}`);
        return;
    }

    try {
        const originalStats = fs.statSync(filePath);
        totalOriginalSize += originalStats.size;

        // Apply EXIF orientation before writing WebP. Browsers honor JPEG EXIF,
        // but WebP output stores physical pixels, so skipping this can rotate
        // photos shot on cameras/phones with orientation metadata.
        // The original file is kept so it can be used as a JPEG fallback in OG metadata.
        await sharp(filePath)
            .rotate()
            .webp({ quality: 85, effort: 6 })
            .toFile(webpPath);

        const webpStats = fs.statSync(webpPath);
        totalWebpSize += webpStats.size;
        convertedCount++;

        const reduction = (
            (1 - webpStats.size / originalStats.size) *
            100
        ).toFixed(1);
        console.log(
            `✅ ${path.basename(filePath)} → ${path.basename(webpPath)} (${reduction}% smaller)`
        );
    } catch (error) {
        console.error(`❌ Error converting ${filePath}:`, error.message);
    }
}

async function scanDirectory(dir) {
    const files = fs.readdirSync(dir, { withFileTypes: true });

    for (const file of files) {
        const fullPath = path.join(dir, file.name);

        if (file.isDirectory()) {
            await scanDirectory(fullPath);
        } else if (file.isFile()) {
            await convertToWebP(fullPath);
        }
    }
}

async function main() {
    console.log("🖼️  Starting image conversion to WebP...\n");

    if (!fs.existsSync(targetDir)) {
        throw new Error(`Directory not found: ${targetDir}`);
    }

    console.log(`   Scanning: ${path.relative(path.join(__dirname, ".."), targetDir) || "public/"}\n`);

    await scanDirectory(targetDir);

    console.log("\n📊 Conversion Summary:");
    console.log(`   Files converted: ${convertedCount}`);
    console.log(`   Scanned directory: ${targetDir}`);
    console.log(`   Original size: ${(totalOriginalSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`   WebP size: ${(totalWebpSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(
        `   Total reduction: ${
            totalOriginalSize > 0
                ? ((1 - totalWebpSize / totalOriginalSize) * 100).toFixed(1)
                : "0.0"
        }%`
    );
    console.log("\n✨ Done! Original files kept as JPEG fallbacks for OG metadata.");
    console.log("   Next: npm run update:images  (updates src= props to .webp)");
    console.log("   Then: npm run optimize:images (resize to display-appropriate dimensions)");
}

main().catch(console.error);
