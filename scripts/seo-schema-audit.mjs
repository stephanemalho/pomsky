import fs from "node:fs";
import path from "node:path";

const projectRoot = process.cwd();
const appDir = path.join(projectRoot, "app");

const schemaFnToType = {
  generateOrganizationSchema: "Organization",
  generateWebsiteSchema: "WebSite",
  generateLocalBusinessSchema: "LocalBusiness",
  generateContactPointSchema: "ContactPoint",
  generateFAQSchema: "FAQPage",
  generateBreadcrumbSchema: "BreadcrumbList",
  generatePuppySchema: "Product",
  generatePuppyListSchema: "ItemList",
  generateReproductorSchema: "Product",
};

const globalSchemaTypes = new Set(["Organization", "WebSite"]);

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
const results = [];

for (const file of files) {
  const content = fs.readFileSync(file, "utf8");
  const schemaFns = Object.keys(schemaFnToType).filter((fn) =>
    content.includes(fn)
  );
  if (schemaFns.length === 0) continue;

  const schemaTypes = schemaFns.map((fn) => schemaFnToType[fn]);
  const relPath = path.relative(projectRoot, file);
  results.push({ file: relPath, schemaFns, schemaTypes });
}

const layoutSchemas = results
  .filter((item) => item.file.endsWith("app/layout.tsx"))
  .flatMap((item) => item.schemaTypes);

const layoutSchemaSet = new Set(layoutSchemas);

const warnings = [];

for (const item of results) {
  const duplicatesInFile = item.schemaTypes.filter(
    (type, idx, arr) => arr.indexOf(type) !== idx
  );
  if (duplicatesInFile.length > 0) {
    warnings.push(
      `DUPLICATE_IN_FILE ${item.file} -> ${[
        ...new Set(duplicatesInFile),
      ].join(", ")}`
    );
  }

  if (item.file !== "app/layout.tsx") {
    const duplicatesWithLayout = item.schemaTypes.filter(
      (type) => layoutSchemaSet.has(type) && globalSchemaTypes.has(type)
    );
    if (duplicatesWithLayout.length > 0) {
      warnings.push(
        `DUPLICATE_WITH_LAYOUT ${item.file} -> ${[
          ...new Set(duplicatesWithLayout),
        ].join(", ")}`
      );
    }
  }
}

const byFile = results
  .sort((a, b) => a.file.localeCompare(b.file))
  .map((item) => {
    const types = [...new Set(item.schemaTypes)].join(", ");
    return `${item.file} -> ${types}`;
  });

console.log("SCHEMAS_BY_FILE");
for (const line of byFile) {
  console.log(line);
}

console.log("");
console.log("WARNINGS");
if (warnings.length === 0) {
  console.log("None");
} else {
  for (const warning of warnings) {
    console.log(warning);
  }
}
