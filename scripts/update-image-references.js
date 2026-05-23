/**
 * Updates image src= attributes in TSX/TS files from .jpg/.jpeg/.png → .webp.
 *
 * IMPORTANT — what this script does NOT touch:
 *   - OG / OpenGraph metadata image URLs (type: "image/jpeg" lines)
 *   - Twitter metadata image URLs
 *   - JSON-LD / structured-data imageUrl values
 *   - Variables whose name contains "Jpg", "Jpeg", "Fallback", or "FALLBACK"
 *   - Any line that contains `type: "image/` (OG type declarations)
 *
 * Those JPEG references must be kept so social scrapers and search engines
 * receive a universally-supported fallback alongside the WebP primary image.
 *
 * Run: node scripts/update-image-references.js
 * Or:  npm run update:images
 */

const fs = require("fs");
const path = require("path");

const appDir = path.join(__dirname, "..", "app");
const componentsDir = path.join(__dirname, "..", "components");

let filesUpdated = 0;
let referencesUpdated = 0;

// Patterns that indicate an OG/metadata/schema context — skip these lines entirely.
const SKIP_LINE_PATTERNS = [
    /type:\s*["']image\/(jpeg|jpg|png|webp)/,   // OG image type declarations
    /openGraph/,                                  // openGraph block markers
    /twitter:/,                                   // Twitter card markers
    /imageUrl:/,                                  // JSON-LD imageUrl
    /"@type":\s*"ImageObject"/,                  // JSON-LD ImageObject
    /schemaImageUrl/,                             // explicit schema image vars
];

// Variable-name patterns that indicate intentional JPEG fallbacks — skip.
const SKIP_VAR_PATTERNS = [
    /\b\w*(Jpg|Jpeg|jpg|jpeg|Fallback|FALLBACK|OG_IMAGE|META_IMAGE)\w*\s*=/,
];

function shouldSkipLine(line) {
    return (
        SKIP_LINE_PATTERNS.some((re) => re.test(line)) ||
        SKIP_VAR_PATTERNS.some((re) => re.test(line))
    );
}

/**
 * Matches src= attributes in JSX Image components and posterSrc= props.
 * Also matches `image:` keys in data-array objects used as page image sources.
 * Does NOT match `url:` (OG metadata) or bare string constants.
 */
const SRC_RE = /(\b(?:src|posterSrc)=)(['"`])([^'"`\s]+)\.(jpg|jpeg|png|JPG|JPEG|PNG)\2/g;
const IMG_PROP_RE = /(\bimage:\s*)(['"`])([^'"`\s]+)\.(jpg|jpeg|png|JPG|JPEG|PNG)\2/g;

function replaceExtension(_match, prefix, quote, imgPath) {
    referencesUpdated++;
    return `${prefix}${quote}${imgPath}.webp${quote}`;
}

function updateImageReferences(filePath) {
    if (!filePath.endsWith(".tsx") && !filePath.endsWith(".ts")) return;

    const lines = fs.readFileSync(filePath, "utf8").split("\n");
    let hasChanges = false;

    const updatedLines = lines.map((line) => {
        if (shouldSkipLine(line)) return line;

        let updated = line.replace(SRC_RE, (match, prefix, quote, imgPath) => {
            hasChanges = true;
            return replaceExtension(match, prefix, quote, imgPath);
        });

        updated = updated.replace(IMG_PROP_RE, (match, prefix, quote, imgPath) => {
            hasChanges = true;
            return replaceExtension(match, prefix, quote, imgPath);
        });

        return updated;
    });

    if (hasChanges) {
        fs.writeFileSync(filePath, updatedLines.join("\n"), "utf8");
        filesUpdated++;
        console.log(`✅ Updated: ${path.relative(process.cwd(), filePath)}`);
    }
}

function scanDirectory(dir) {
    const files = fs.readdirSync(dir, { withFileTypes: true });

    for (const file of files) {
        const fullPath = path.join(dir, file.name);

        if (file.isDirectory()) {
            scanDirectory(fullPath);
        } else if (file.isFile()) {
            updateImageReferences(fullPath);
        }
    }
}

console.log("🔄 Updating image src= references to .webp…\n");
console.log("   (OG metadata, Twitter, JSON-LD schema and explicit JPEG fallback");
console.log("    variables are preserved as-is for social scraper compatibility)\n");

scanDirectory(appDir);
scanDirectory(componentsDir);

console.log(`\n📊 Update Summary:`);
console.log(`   Files updated: ${filesUpdated}`);
console.log(`   References changed: ${referencesUpdated}`);
console.log("\n✨ Done! src= attributes now point to .webp files.");
console.log("   OG/metadata JPEG references unchanged.");
