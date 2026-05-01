"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type ImageCarouselProps = {
    images: Array<string | { src: string; alt?: string }>
    alt: string
    caption?: string
    priority?: boolean
    sizes?: string
    className?: string
    ratioClassName?: string
    imageClassName?: string
    showBackdrop?: boolean
}

function ImageCarousel({
    images,
    alt,
    caption,
    priority = false,
    sizes,
    className,
    ratioClassName,
    imageClassName,
    showBackdrop = false,
}: ImageCarouselProps) {
    const [index, setIndex] = useState(0)
    const total = images.length
    const isOneImage = total === 1
    const resolvedSizes = sizes ?? "(min-width: 1024px) 50vw, (min-width: 768px) 50vw, 100vw"
    const figureClassName = ["min-w-0", className].filter(Boolean).join(" ")
    const containerClassName = [
        "relative mb-6 w-full overflow-hidden bg-linear-to-br from-muted via-accent/45 to-secondary ring-1 ring-border/60",
        ratioClassName ?? "aspect-square sm:aspect-4/3",
    ]
        .filter(Boolean)
        .join(" ")

    const prev = () => setIndex((i) => (i - 1 + total) % total)
    const next = () => setIndex((i) => (i + 1) % total)
    const currentImage = images[index]
    const currentSrc = typeof currentImage === "string" ? currentImage : currentImage.src
    const currentAlt = typeof currentImage === "string"
        ? `${alt} - photo ${index + 1}`
        : currentImage.alt?.trim() || `${alt} - photo ${index + 1}`

    return (
        <figure className={figureClassName}>
            <div className={containerClassName}>
                {showBackdrop ? (
                    <Image
                        src={`/${currentSrc}`}
                        alt=""
                        fill
                        aria-hidden="true"
                        className="scale-110 object-cover opacity-25 blur-2xl"
                        sizes={resolvedSizes}
                    />
                ) : null}
                <div className="absolute inset-0 bg-linear-to-b from-background/10 via-transparent to-background/30" />
                <Image
                    src={`/${currentSrc}`}
                    alt={currentAlt}
                    fill
                    className={[
                        "object-contain object-center p-3 transition duration-300 sm:p-4 md:p-5",
                        imageClassName,
                    ]
                        .filter(Boolean)
                        .join(" ")}
                    sizes={resolvedSizes}
                    priority={priority}
                    fetchPriority={priority ? "high" : "auto"}
                    loading={priority ? "eager" : "lazy"}
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-background/55 via-background/12 to-transparent" />
                <div className="absolute top-3 right-3 rounded-full bg-card/90 px-3 py-1 text-xs text-foreground ring-1 ring-border/70 backdrop-blur-sm shadow-sm">
                    {index + 1}/{total}
                </div>
                {!isOneImage && (
                    <>
                        <button
                            aria-label="Précédent"
                            onClick={prev}
                            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-card/88 p-2 text-foreground ring-1 ring-border/70 backdrop-blur-sm shadow-sm transition hover:bg-accent"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                            aria-label="Suivant"
                            onClick={next}
                            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-card/88 p-2 text-foreground ring-1 ring-border/70 backdrop-blur-sm shadow-sm transition hover:bg-accent"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </button>
                    </>
                )}
                <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
                    {images.map((_, i) => (
                        <span
                            key={i}
                            className={`h-2 w-2 rounded-full ${i === index ? "bg-primary" : "bg-foreground/25"}`}
                        />
                    ))}
                </div>
            </div>
            {caption ? (
                <figcaption className="px-4 py-3 text-xs leading-relaxed text-muted-foreground">
                    {caption}
                </figcaption>
            ) : null}
        </figure>
    )
}

export default ImageCarousel;
