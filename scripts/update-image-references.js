const fs = require("fs");
const path = require("path");

const appDir = path.join(__dirname, "..", "app");
const componentsDir = path.join(__dirname, "..", "components");
const imageExtensions = [".jpg", ".jpeg", ".png", ".JPG", ".JPEG", ".PNG"];

let filesUpdated = 0;
let referencesUpdated = 0;

function updateImageReferences(filePath) {
    if (!filePath.endsWith(".tsx") && !filePath.endsWith(".ts")) return;

    let content = fs.readFileSync(filePath, "utf8");
    let hasChanges = false;

    // Remplacer les extensions d'images par .webp
    imageExtensions.forEach((ext) => {
        const regex = new RegExp(`(['"\`])([^'"\\s]+)\\${ext}\\1`, "g");
        if (regex.test(content)) {
            content = content.replace(regex, (match, quote, imagePath) => {
                referencesUpdated++;
                hasChanges = true;
                return `${quote}${imagePath}.webp${quote}`;
            });
        }
    });

    if (hasChanges) {
        fs.writeFileSync(filePath, content, "utf8");
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

console.log("🔄 Updating image references in code...\n");

scanDirectory(appDir);
scanDirectory(componentsDir);

console.log(`\n📊 Update Summary:`);
console.log(`   Files updated: ${filesUpdated}`);
console.log(`   References changed: ${referencesUpdated}`);
console.log("\n✨ Done! All image references now point to .webp files.");
