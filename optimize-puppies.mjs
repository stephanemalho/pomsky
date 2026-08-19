import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const puppyDir = "/Users/stephanemalho/dev/work/pomsky/public/pages/puppies";

const puppies = [
  {
    folderName: "pomsky-male-aki",
    baseName: "pomsky-male-aki",
    count: 5,
  },
  {
    folderName: "pomsky-femelle-koa",
    baseName: "pomsky-femelle-koa",
    count: 2,
  },
  {
    folderName: "pomsky-fluffly-sky",
    baseName: "pomsky-fluffly-sky",
    count: 5,
  },
];

async function optimizeImage(inputPath, outputBasePath, baseName, index) {
  const num = index + 1;
  const filename = `${baseName}-${num}`;

  // Créer les dossiers s'ils n'existent pas
  const dirs = ["webp", "jpeg", "avif", "png"];
  for (const dir of dirs) {
    await fs.mkdir(path.join(outputBasePath, dir), { recursive: true });
  }

  const image = sharp(inputPath);
  const metadata = await image.metadata();
  const sourceWidth = metadata.width;

  // Fichier full size
  const webpFull = path.join(outputBasePath, "webp", `${filename}.webp`);
  const jpegFull = path.join(outputBasePath, "jpeg", `${filename}.jpeg`);
  const jpgFull = path.join(outputBasePath, "jpeg", `${filename}.jpg`);
  const avifFull = path.join(outputBasePath, "avif", `${filename}.avif`);
  const pngFull = path.join(outputBasePath, "png", `${filename}.png`);

  // Fichiers medium (60%)
  const webpMd = path.join(outputBasePath, "webp", `${filename}-md.webp`);
  const jpegMd = path.join(outputBasePath, "jpeg", `${filename}-md.jpeg`);
  const avifMd = path.join(outputBasePath, "avif", `${filename}-md.avif`);

  // Fichiers small (30%)
  const webpSm = path.join(outputBasePath, "webp", `${filename}-sm.webp`);
  const jpegSm = path.join(outputBasePath, "jpeg", `${filename}-sm.jpeg`);
  const avifSm = path.join(outputBasePath, "avif", `${filename}-sm.avif`);

  const mdWidth = Math.round(sourceWidth * 0.6);
  const smWidth = Math.round(sourceWidth * 0.3);

  console.log(
    `  Optimizing ${filename} (${sourceWidth}px -> ${mdWidth}px / ${smWidth}px)...`
  );

  // Full size
  await Promise.all([
    sharp(inputPath).webp({ quality: 80 }).toFile(webpFull),
    sharp(inputPath).jpeg({ quality: 85, progressive: true }).toFile(jpegFull),
    sharp(inputPath)
      .jpeg({ quality: 85, progressive: true })
      .toFile(jpgFull),
    sharp(inputPath).avif({ quality: 70 }).toFile(avifFull),
    sharp(inputPath).png().toFile(pngFull),
  ]);

  // Medium
  await Promise.all([
    sharp(inputPath)
      .resize(mdWidth, undefined, { withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(webpMd),
    sharp(inputPath)
      .resize(mdWidth, undefined, { withoutEnlargement: true })
      .jpeg({ quality: 82, progressive: true })
      .toFile(jpegMd),
    sharp(inputPath)
      .resize(mdWidth, undefined, { withoutEnlargement: true })
      .avif({ quality: 68 })
      .toFile(avifMd),
  ]);

  // Small
  await Promise.all([
    sharp(inputPath)
      .resize(smWidth, undefined, { withoutEnlargement: true })
      .webp({ quality: 75 })
      .toFile(webpSm),
    sharp(inputPath)
      .resize(smWidth, undefined, { withoutEnlargement: true })
      .jpeg({ quality: 80, progressive: true })
      .toFile(jpegSm),
    sharp(inputPath)
      .resize(smWidth, undefined, { withoutEnlargement: true })
      .avif({ quality: 65 })
      .toFile(avifSm),
  ]);
}

async function processPuppy(puppy) {
  const folderPath = path.join(puppyDir, puppy.folderName);
  const outputPath = path.join(puppyDir, puppy.folderName);

  console.log(`\nProcessing ${puppy.folderName}...`);

  const files = await fs.readdir(folderPath);
  const imageFiles = files
    .filter((f) => f.match(/\.(jpg|jpeg|png|webp)$/i))
    .sort();

  if (imageFiles.length === 0) {
    console.log("  No images found!");
    return [];
  }

  const processedImages = [];
  for (let i = 0; i < imageFiles.length; i++) {
    const imagePath = path.join(folderPath, imageFiles[i]);
    const baseName = puppy.baseName;
    await optimizeImage(imagePath, outputPath, baseName, i);
    processedImages.push(`${baseName}-${i + 1}`);
  }

  return processedImages;
}

async function main() {
  console.log("Starting image optimization...\n");

  const allProcessedImages = {};

  for (const puppy of puppies) {
    const processed = await processPuppy(puppy);
    allProcessedImages[puppy.baseName] = processed;
  }

  console.log("\n✅ Optimization complete!\n");
  console.log("Images to add to puppies.ts:");

  for (const [baseName, images] of Object.entries(allProcessedImages)) {
    console.log(`\n${baseName}:`);
    const paths = images.map(
      (img) => `    "${baseName}/webp/${img}.webp"`
    );
    console.log(paths.join(",\n"));
  }
}

main().catch(console.error);
