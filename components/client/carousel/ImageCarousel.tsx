"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

function ImageCarousel({ images, alt }: { images: string[]; alt: string }) {
    const [index, setIndex] = useState(0)
    const total = images.length
    const isOneImage = total === 1

    const prev = () => setIndex((i) => (i - 1 + total) % total)
    const next = () => setIndex((i) => (i + 1) % total)

    return (
        <div className="relative h-72 md:h-full overflow-hidden rounded-lg bg-amber-950 mx-4">
            <Image
                src={`/${images[index]}`}
                alt={`${alt} - photo ${index + 1}`}
                fill
                className="object-cover transition duration-300 p-2"
                sizes="(min-width: 768px) 50vw, 100vw"
                priority={index === 0}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute top-3 right-3 text-xs px-3 py-1 rounded-full bg-black/60 text-white">
                {index + 1}/{total}
            </div>
            {!isOneImage && (
                <>
                    <button
                        aria-label="Précédent"
                        onClick={prev}
                        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 text-white p-2 hover:bg-black/70 transition"
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                        aria-label="Suivant"
                        onClick={next}
                        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 text-white p-2 hover:bg-black/70 transition"
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
    )
}

export default ImageCarousel;