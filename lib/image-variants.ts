export function getImageVariant(src: string, variant: "sm" | "md") {
    if (src.startsWith("http://") || src.startsWith("https://")) return src;
    if (!src.endsWith(".webp")) return src;
    if (src.endsWith(`-${variant}.webp`)) return src;
    if (/-sm\.webp$|-md\.webp$/.test(src)) return src;

    return `${src.slice(0, -5)}-${variant}.webp`;
}

export function getSmallImageSrc(src: string) {
    return getImageVariant(src, "sm");
}

export function getMediumImageSrc(src: string) {
    return getImageVariant(src, "md");
}
