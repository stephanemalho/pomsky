"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type ImageCarouselProps = {
    images: string[]
    alt: string
    caption?: string
    priority?: boolean
    sizes?: string
    className?: string
    ratioClassName?: string
    imageClassName?: string
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
}: ImageCarouselProps) {
    const [index, setIndex] = useState(0)
    const total = images.length
    const isOneImage = total === 1
    const resolvedSizes = sizes ?? "(min-width: 1024px) 50vw, (min-width: 768px) 50vw, 100vw"
    const figureClassName = ["min-w-0", className].filter(Boolean).join(" ")
    const containerClassName = [
        "relative mb-6 w-full overflow-hidden bg-stone-950",
        ratioClassName ?? "aspect-4/3",
    ]
        .filter(Boolean)
        .join(" ")

    const prev = () => setIndex((i) => (i - 1 + total) % total)
    const next = () => setIndex((i) => (i + 1) % total)

    return (
        <figure className={figureClassName}>
            <div className={containerClassName}>
                <Image
                    src={`/${images[index]}`}
                    alt=""
                    fill
                    aria-hidden="true"
                    className="scale-110 object-cover opacity-30 blur-2xl"
                    sizes={resolvedSizes}
                />
                <div className="absolute inset-0 bg-black/20" />
                <Image
                    src={`/${images[index]}`}
                    alt={`${alt} - photo ${index + 1}`}
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
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/45 via-black/10 to-transparent" />
                <div className="absolute top-3 right-3 rounded-full bg-black/60 px-3 py-1 text-xs text-white backdrop-blur-sm">
                    {index + 1}/{total}
                </div>
                {!isOneImage && (
                    <>
                        <button
                            aria-label="Précédent"
                            onClick={prev}
                            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/55 p-2 text-white backdrop-blur-sm transition hover:bg-black/70"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                            aria-label="Suivant"
                            onClick={next}
                            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/55 p-2 text-white backdrop-blur-sm transition hover:bg-black/70"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </button>
                    </>
                )}
                <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
                    {images.map((_, i) => (
                        <span
                            key={i}
                            className={`h-2 w-2 rounded-full ${i === index ? "bg-primary" : "bg-white/60"}`}
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
