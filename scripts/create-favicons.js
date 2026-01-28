const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const publicDir = path.join(__dirname, "..", "public");
const logoPath = path.join(publicDir, "logo-royal-pomsky-black.webp");

async function createFavicons() {
    if (!fs.existsSync(logoPath)) {
        console.log("❌ logo-royal-pomsky-black.webp not found!");
        return;
    }

    console.log("🎨 Creating favicons from logo...\n");

    // 1. Favicon.ico (32x32)
    await sharp(logoPath)
        .resize(32, 32, {
            fit: "contain",
            background: { r: 255, g: 255, b: 255, alpha: 0 }
        })
        .toFile(path.join(publicDir, "favicon.png"));
    console.log("✅ Created favicon.png (32x32)");

    // 2. Apple Touch Icon (180x180)
    await sharp(logoPath)
        .resize(180, 180, {
            fit: "contain",
            background: { r: 255, g: 255, b: 255, alpha: 0 }
        })
        .toFile(path.join(publicDir, "apple-touch-icon.png"));
    console.log("✅ Created apple-touch-icon.png (180x180)");

    // 3. Favicon 192x192 (Android)
    await sharp(logoPath)
        .resize(192, 192, {
            fit: "contain",
            background: { r: 255, g: 255, b: 255, alpha: 0 }
        })
        .toFile(path.join(publicDir, "favicon-192.png"));
    console.log("✅ Created favicon-192.png (192x192)");

    // 4. Favicon 512x512 (Android)
    await sharp(logoPath)
        .resize(512, 512, {
            fit: "contain",
            background: { r: 255, g: 255, b: 255, alpha: 0 }
        })
        .toFile(path.join(publicDir, "favicon-512.png"));
    console.log("✅ Created favicon-512.png (512x512)");

    console.log("\n✨ All favicons created successfully!");
    console.log("\n📝 Next steps:");
    console.log("   1. Update app/layout.tsx with the new favicon references");
    console.log(
        "   2. Optional: Convert favicon.png to favicon.ico using an online tool"
    );
}

createFavicons().catch(console.error);
