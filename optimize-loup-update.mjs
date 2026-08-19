import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const loupDir = "/Users/stephanemalho/dev/work/pomsky/public/pages/puppies/pomsky-noir-blanc-loup";

// Les noms de base à conserver pour le SEO
const baseNames = [
  "pomsky-noir-et-blanc-loup",
  "pomsky-noir-et-blanc-yeux-bleu-loup",
  "pomsky-noir-et-blanc-yeux-bleu-loup-2",
  "pomsky-noir-et-blanc-yeux-bleu-loup-3",
];

// Images brutes à traiter (dans l'ordre)
const rawImages = [
  "171855DF-9E29-4057-B62A-C657C8E77435.jpeg",
  "24DC63B8-BCF1-4F3A-98EB-E12FBAD9F160.jpeg",
  "AF643AC2-1BF9-4C72-BFD7-E25E82729EF1.png",
  "CF58BBF6-FFCC-4A98-87C5-4F9268A36236.jpeg",
];

async function optimizeImage(inputPath, outputBasePath, baseName) {
  // Créer les dossiers s'ils n'existent pas
  const dirs = ["webp", "jpeg", "avif", "png"];
  for (const dir of dirs) {
    await fs.mkdir(path.join(outputBasePath, dir), { recursive: true });
  }

  const image = sharp(inputPath);
  const metadata = await image.metadata();
  const sourceWidth = metadata.width;

  const mdWidth = Math.round(sourceWidth * 0.6);
  const smWidth = Math.round(sourceWidth * 0.3);

  console.log(
    `  Optimizing ${baseName} (${sourceWidth}px -> ${mdWidth}px / ${smWidth}px)...`
  );

  // Full size
  await Promise.all([
    sharp(inputPath).webp({ quality: 80 }).toFile(path.join(outputBasePath, "webp", `${baseName}.webp`)),
    sharp(inputPath).jpeg({ quality: 85, progressive: true }).toFile(path.join(outputBasePath, "jpeg", `${baseName}.jpeg`)),
    sharp(inputPath).jpeg({ quality: 85, progressive: true }).toFile(path.join(outputBasePath, "jpeg", `${baseName}.jpg`)),
    sharp(inputPath).avif({ quality: 70 }).toFile(path.join(outputBasePath, "avif", `${baseName}.avif`)),
    sharp(inputPath).png().toFile(path.join(outputBasePath, "png", `${baseName}.png`)),
  ]);

  // Medium (60%)
  await Promise.all([
    sharp(inputPath).resize(mdWidth, undefined, { withoutEnlargement: true }).webp({ quality: 80 }).toFile(path.join(outputBasePath, "webp", `${baseName}-md.webp`)),
    sharp(inputPath).resize(mdWidth, undefined, { withoutEnlargement: true }).jpeg({ quality: 82, progressive: true }).toFile(path.join(outputBasePath, "jpeg", `${baseName}-md.jpeg`)),
    sharp(inputPath).resize(mdWidth, undefined, { withoutEnlargement: true }).avif({ quality: 68 }).toFile(path.join(outputBasePath, "avif", `${baseName}-md.avif`)),
  ]);

  // Small (30%)
  await Promise.all([
    sharp(inputPath).resize(smWidth, undefined, { withoutEnlargement: true }).webp({ quality: 75 }).toFile(path.join(outputBasePath, "webp", `${baseName}-sm.webp`)),
    sharp(inputPath).resize(smWidth, undefined, { withoutEnlargement: true }).jpeg({ quality: 80, progressive: true }).toFile(path.join(outputBasePath, "jpeg", `${baseName}-sm.jpeg`)),
    sharp(inputPath).resize(smWidth, undefined, { withoutEnlargement: true }).avif({ quality: 65 }).toFile(path.join(outputBasePath, "avif", `${baseName}-sm.avif`)),
  ]);
}

async function main() {
  console.log("Starting Loup image update...\n");

  for (let i = 0; i < rawImages.length; i++) {
    const rawImage = rawImages[i];
    const baseName = baseNames[i];
    const inputPath = path.join(loupDir, rawImage);

    if (!await fs.stat(inputPath).catch(() => null)) {
      console.log(`⚠️  Image not found: ${rawImage}, skipping...`);
      continue;
    }

    await optimizeImage(inputPath, loupDir, baseName);
  }

  console.log("\n✅ Loup images updated!");
  console.log("\nNo changes needed in puppies.ts - image names are the same");
  console.log("You can delete the raw image files if you want.");
}

main().catch(console.error);
