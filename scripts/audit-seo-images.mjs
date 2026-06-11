import fs from "node:fs";
import path from "node:path";

const projectRoot = process.cwd();
const publicDir = path.join(projectRoot, "public");
const sourceDirs = ["app", "lib", "components", "constants"]
    .map((dir) => path.join(projectRoot, dir))
    .filter((dir) => fs.existsSync(dir));
const imageExtensions = ["avif", "webp", "jpg", "jpeg", "png", "gif", "ico"];
const sourceExtensions = new Set([".js", ".jsx", ".mjs", ".ts", ".tsx"]);
const imageLiteralPattern = new RegExp(
    String.raw`(["'\`])([^"'\`]+\.(?:${imageExtensions.join("|")})(?:\?[^"'\`]*)?)\1`,
    "gi"
);

function walk(dir) {
    const files = [];
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            files.push(...walk(fullPath));
        } else if (entry.isFile() && sourceExtensions.has(path.extname(entry.name))) {
            files.push(fullPath);
        }
    }

    return files;
}

function lineNumberForIndex(content, index) {
    return content.slice(0, index).split("\n").length;
}

function normalizeAssetPath(rawValue, sourceFile) {
    const value = rawValue.trim();

    if (/^(https?:|data:|blob:)/i.test(value)) {
        return null;
    }

    const cleanValue = value.split("?")[0];

    if (cleanValue.includes("${") || /^[.-]/.test(cleanValue)) {
        return null;
    }

    if (cleanValue.startsWith("@/public/")) {
        return `/${cleanValue.slice("@/public/".length)}`;
    }

    if (cleanValue.startsWith("public/")) {
        return `/${cleanValue.slice("public/".length)}`;
    }

    if (cleanValue.startsWith("/")) {
        return cleanValue;
    }

    if (cleanValue.startsWith("pages/") || cleanValue.startsWith("assets/") || cleanValue.startsWith("images/")) {
        return `/${cleanValue}`;
    }

    if (path.relative(projectRoot, sourceFile) === path.join("app", "chiots-disponibles", "puppies.ts") && cleanValue.includes(".")) {
        return `/pages/puppies/${cleanValue}`;
    }

    if (/^[^/]+\.(?:avif|webp|jpe?g|png|gif|ico)$/i.test(cleanValue)) {
        return `/${cleanValue}`;
    }

    return null;
}

function expectedResponsiveVariants(assetPath) {
    if (!assetPath.startsWith("/pages/puppies/") || !assetPath.endsWith(".webp") || /-(?:sm|md)\.webp$/.test(assetPath)) {
        return [];
    }

    const withoutExt = assetPath.slice(0, -".webp".length);
    const variants = [`${withoutExt}-sm.webp`];

    if (/-[67]semaines?$/.test(withoutExt)) {
        variants.push(
            `${withoutExt}-md.webp`,
            `${withoutExt}.avif`,
            `${withoutExt}-sm.avif`,
            `${withoutExt}-md.avif`,
            `${withoutExt}.jpeg`
        );
    }

    return variants;
}

const references = new Map();
const files = sourceDirs.flatMap(walk);

for (const file of files) {
    const content = fs.readFileSync(file, "utf8");
    const relFile = path.relative(projectRoot, file);

    for (const match of content.matchAll(imageLiteralPattern)) {
        const assetPath = normalizeAssetPath(match[2], file);

        if (!assetPath) continue;

        const reference = {
            file: relFile,
            line: lineNumberForIndex(content, match.index ?? 0),
            raw: match[2]
        };

        if (!references.has(assetPath)) {
            references.set(assetPath, []);
        }

        references.get(assetPath).push(reference);

        for (const variantPath of expectedResponsiveVariants(assetPath)) {
            if (!references.has(variantPath)) {
                references.set(variantPath, []);
            }

            references.get(variantPath).push({
                ...reference,
                raw: `${match[2]} -> responsive variant`
            });
        }
    }
}

const missing = [];

for (const [assetPath, refs] of references) {
    const diskPath = path.join(publicDir, assetPath.replace(/^\/+/, ""));

    if (!fs.existsSync(diskPath)) {
        missing.push({ assetPath, refs });
    }
}

const sortedReferences = [...references.entries()].sort(([a], [b]) => a.localeCompare(b));
const sortedMissing = missing.sort((a, b) => a.assetPath.localeCompare(b.assetPath));

console.log(`SEO_IMAGE_REFERENCES ${sortedReferences.length}`);
console.log(`SEO_IMAGE_MISSING ${sortedMissing.length}`);

if (sortedMissing.length > 0) {
    console.log("");
    for (const item of sortedMissing) {
        console.log(`MISSING ${item.assetPath}`);

        for (const ref of item.refs) {
            console.log(`  ${ref.file}:${ref.line} (${ref.raw})`);
        }
    }
}
