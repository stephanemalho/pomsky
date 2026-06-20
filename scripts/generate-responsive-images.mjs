import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import sharp from "sharp";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const publicDir = path.join(projectRoot, "public");
const outputDir = path.join(publicDir, "images", "optimized");

// Static variants consumed through <picture> to avoid Vercel runtime Image Optimization quota.
const images = [
  {
    input: "pomsky-and-his-pet-family-parent.webp",
    outputName: "pomsky-family",
    widths: [480, 768, 1024],
  },
  {
    input: "AKASHA-pomsky-toy-f4.webp",
    outputName: "akasha-pomsky-toy-f4",
    widths: [360, 480, 640, 768],
  },
  {
    input: "pomsky-standard-size.webp",
    outputName: "pomsky-standard-size",
    widths: [480, 768, 1024],
  },
  {
    input: "pages/presentation-elevage/cloe-et-un-mameshiba-et-un-shiba.jpg",
    outputName: "mameshiba-cloe-shiba",
    widths: [360, 480, 640, 768],
  },
  {
    input: "pages/presentation-elevage/marine-et-un-mameshiba.jpg",
    outputName: "mameshiba-marine",
    widths: [360, 480, 640, 768],
  },
];

async function generateVariant(inputPath, outputName, sourceWidth, width) {
  if (width > sourceWidth) return [];

  const avifFile = `${outputName}-${width}.avif`;
  const webpFile = `${outputName}-${width}.webp`;

  await Promise.all([
    sharp(inputPath)
      .resize({ width, withoutEnlargement: true })
      .avif({ quality: 55 })
      .toFile(path.join(outputDir, avifFile)),
    sharp(inputPath)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 72 })
      .toFile(path.join(outputDir, webpFile)),
  ]);

  return [avifFile, webpFile];
}

await fs.mkdir(outputDir, { recursive: true });

const generatedFiles = [];

for (const image of images) {
  const inputPath = path.join(publicDir, image.input);
  const metadata = await sharp(inputPath).metadata();

  if (!metadata.width) {
    throw new Error(`Unable to read width for ${image.input}`);
  }

  for (const width of image.widths) {
    const files = await generateVariant(
      inputPath,
      image.outputName,
      metadata.width,
      width
    );
    generatedFiles.push(...files);
  }
}

console.log("Generated static responsive image variants:");
for (const file of generatedFiles) {
  console.log(`- public/images/optimized/${file}`);
}
