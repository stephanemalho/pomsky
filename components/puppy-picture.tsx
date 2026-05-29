import type { CSSProperties, ImgHTMLAttributes } from "react";

import type { PuppyImage } from "@/app/chiots-disponibles/puppies";
import { getPuppyAvifImageSrc, getPuppyImageSrc, getPuppySourceImageSrc, getPuppyThumbImageSrc } from "@/app/chiots-disponibles/puppy-seo";

type PuppyPictureProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt" | "loading"> & {
    image: PuppyImage;
    fill?: boolean;
    priority?: boolean;
    loading?: "eager" | "lazy";
    fetchPriority?: "high" | "low" | "auto";
};

const fillStyle: CSSProperties = {
    position: "absolute",
    height: "100%",
    width: "100%",
    inset: 0,
    color: "transparent",
};

function getVariantSrcSet(src?: string) {
    if (!src) return undefined;

    const full = getPuppyImageSrc(src);
    const sm = full.replace(/(\.(?:webp|avif))$/, "-sm$1");
    const md = full.replace(/(\.(?:webp|avif))$/, "-md$1");

    return `${sm} 480w, ${md} 768w, ${full} 1300w`;
}

export function PuppyPicture({
    image,
    fill = false,
    priority = false,
    loading,
    fetchPriority,
    decoding = "async",
    sizes,
    style,
    ...props
}: PuppyPictureProps) {
    const webpSrcSet = getVariantSrcSet(getPuppySourceImageSrc(image));
    const avifSrcSet = getVariantSrcSet(getPuppyAvifImageSrc(image));
    const resolvedStyle = fill ? { ...fillStyle, ...style } : style;
    const resolvedLoading = loading ?? (priority ? "eager" : "lazy");
    const resolvedFetchPriority = fetchPriority ?? (priority ? "high" : "auto");

    return (
        <picture>
            {avifSrcSet ? (
                <source type="image/avif" srcSet={avifSrcSet} sizes={sizes} />
            ) : null}
            {webpSrcSet ? (
                <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />
            ) : null}
            <img
                src={getPuppyThumbImageSrc(image)}
                srcSet={webpSrcSet}
                sizes={sizes}
                alt={image.alt}
                loading={resolvedLoading}
                fetchPriority={resolvedFetchPriority}
                decoding={decoding}
                style={resolvedStyle}
                {...props}
            />
        </picture>
    );
}
