import fs from "node:fs";
import path from "node:path";

const projectRoot = process.cwd();
const appDir = path.join(projectRoot, "app");

const isTsx = (file) => file.endsWith(".tsx");

const walk = (dir) => {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walk(fullPath));
    } else if (entry.isFile() && isTsx(entry.name)) {
      files.push(fullPath);
    }
  }
  return files;
};

const files = walk(appDir);

const ignorePaths = new Set([
  path.join(appDir, "layout.tsx"),
  path.join(appDir, "not-found.tsx"),
  path.join(appDir, "error.tsx"),
]);

const results = [];
const args = new Set(process.argv.slice(2));
const outputJson = args.has("--json");

for (const file of files) {
  if (ignorePaths.has(file)) continue;
  const content = fs.readFileSync(file, "utf8");
  const relPath = path.relative(projectRoot, file);
  if (relPath.includes(`${path.sep}loading.tsx`)) continue;

  const hasMetadataExport = /export\s+const\s+metadata\s*:\s*Metadata\s*=/.test(
    content
  );
  const hasGenerateMetadata = /function\s+generateMetadata\s*\(/.test(content);

  if (!hasMetadataExport && !hasGenerateMetadata) continue;

  const hasTitle = /title\s*:/.test(content);
  const hasDescription = /description\s*:/.test(content);
  const hasCanonical =
    /alternates\s*:\s*\{[\s\S]*canonical\s*:/.test(content);
  const hasOpenGraph = /openGraph\s*:/.test(content);
  const hasBuildOpenGraph = /buildOpenGraph\s*\(/.test(content);
  const hasOgImageProps =
    /images\s*:\s*\[[\s\S]*alt\s*:/.test(content) &&
    /images\s*:\s*\[[\s\S]*width\s*:/.test(content) &&
    /images\s*:\s*\[[\s\S]*height\s*:/.test(content);
  const hasOgType =
    /type\s*:\s*"(website|article)"/.test(content) || hasBuildOpenGraph;
  const hasTwitter = /twitter\s*:/.test(content);
  const hasTwitterImages =
    /twitter\s*:[\s\S]*images\s*:/.test(content) ||
    /buildTwitter\s*\(/.test(content);

  results.push({
    file: relPath,
    hasMetadataExport,
    hasGenerateMetadata,
    hasTitle,
    hasDescription,
    hasCanonical,
    hasOpenGraph,
    hasBuildOpenGraph,
    hasOgImageProps,
    hasOgType,
    hasTwitter,
    hasTwitterImages,
  });
}

const warnings = [];

for (const item of results) {
  if (!item.hasTitle) {
    warnings.push(`MISSING_TITLE ${item.file}`);
  }
  if (!item.hasDescription) {
    warnings.push(`MISSING_DESCRIPTION ${item.file}`);
  }
  if (!item.hasCanonical) {
    warnings.push(`MISSING_CANONICAL ${item.file}`);
  }
  if (!item.hasOpenGraph) {
    warnings.push(`MISSING_OPEN_GRAPH ${item.file}`);
  }
  if (item.hasOpenGraph && !item.hasBuildOpenGraph) {
    warnings.push(`OPEN_GRAPH_NOT_NORMALIZED ${item.file}`);
  }
  if (item.hasOpenGraph && !item.hasOgImageProps && !item.hasBuildOpenGraph) {
    warnings.push(`OPEN_GRAPH_IMAGE_MISSING_ALT_OR_SIZE ${item.file}`);
  }
  if (item.hasOpenGraph && !item.hasOgType) {
    warnings.push(`OPEN_GRAPH_TYPE_MISSING ${item.file}`);
  }
  if (!item.hasTwitter) {
    warnings.push(`MISSING_TWITTER ${item.file}`);
  }
  if (item.hasTwitter && !item.hasTwitterImages) {
    warnings.push(`TWITTER_IMAGES_MISSING ${item.file}`);
  }
}

const strictArticleWarnings = [];
const strictWebsiteWarnings = [];

for (const item of results) {
  if (item.file.startsWith(`app${path.sep}blog${path.sep}`)) {
    const content = fs.readFileSync(path.join(projectRoot, item.file), "utf8");
    if (item.file.includes(`[...slug]`)) {
      const hasArticleType =
        /type\s*:\s*"article"/.test(content) || /type:\s*"article"/.test(content);
      if (!hasArticleType) {
        strictArticleWarnings.push(
          `BLOG_ARTICLE_MISSING_OG_TYPE_ARTICLE ${item.file}`
        );
      }
    } else if (item.file.includes(`${path.sep}blog${path.sep}pomsky`)) {
      const hasWebsiteType =
        /type\s*:\s*"website"/.test(content) || /type:\s*"website"/.test(content);
      if (!hasWebsiteType) {
        strictWebsiteWarnings.push(
          `BLOG_LIST_MISSING_OG_TYPE_WEBSITE ${item.file}`
        );
      }
    }
  }
}

const finalWarnings = [
  ...warnings,
  ...strictArticleWarnings,
  ...strictWebsiteWarnings,
];

if (outputJson) {
  console.log(
    JSON.stringify(
      {
        metaByFile: results
          .sort((a, b) => a.file.localeCompare(b.file))
          .map((item) => ({
            file: item.file,
            flags: [
              item.hasMetadataExport ? "metadata" : null,
              item.hasGenerateMetadata ? "generateMetadata" : null,
              item.hasOpenGraph ? "og" : null,
              item.hasTwitter ? "twitter" : null,
              item.hasCanonical ? "canonical" : null,
            ].filter(Boolean),
          })),
        warnings: finalWarnings,
      },
      null,
      2
    )
  );
} else {
  const byFile = results
    .sort((a, b) => a.file.localeCompare(b.file))
    .map((item) => {
      const flags = [
        item.hasMetadataExport ? "metadata" : null,
        item.hasGenerateMetadata ? "generateMetadata" : null,
        item.hasOpenGraph ? "og" : null,
        item.hasTwitter ? "twitter" : null,
        item.hasCanonical ? "canonical" : null,
      ]
        .filter(Boolean)
        .join(", ");
      return `${item.file} -> ${flags}`;
    });

  console.log("META_BY_FILE");
  for (const line of byFile) {
    console.log(line);
  }

  console.log("");
  console.log("WARNINGS");
  if (finalWarnings.length === 0) {
    console.log("None");
  } else {
    for (const warning of finalWarnings) {
      console.log(warning);
    }
  }
}
