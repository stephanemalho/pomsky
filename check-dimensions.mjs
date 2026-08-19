import sharp from "sharp";

const images = [
  "/Users/stephanemalho/dev/work/pomsky/public/pages/puppies/pomsky-male-aki/webp/pomsky-male-aki-1.webp",
  "/Users/stephanemalho/dev/work/pomsky/public/pages/puppies/pomsky-femelle-koa/webp/pomsky-femelle-koa-1.webp",
  "/Users/stephanemalho/dev/work/pomsky/public/pages/puppies/pomsky-fluffly-sky/webp/pomsky-fluffly-sky-1.webp",
  "/Users/stephanemalho/dev/work/pomsky/public/pages/puppies/pomsky-noir-blanc-loup/webp/pomsky-noir-et-blanc-loup.webp",
];

for (const img of images) {
  const metadata = await sharp(img).metadata();
  console.log(`${img.split("/").pop()}: ${metadata.width}x${metadata.height}`);
}
