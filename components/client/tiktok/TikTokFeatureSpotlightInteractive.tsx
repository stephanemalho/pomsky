"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Play, RotateCcw } from "lucide-react"

import { Badge } from "@/components/ui/badge"

type TikTokFeatureSpotlightInteractiveProps = {
    badge: string
    posterSrc: string
    posterAlt: string
    videoSrc: string
    tiktokHref: string
    buttonLabel: string
    children: ReactNode
}

export function TikTokFeatureSpotlightInteractive({
    badge,
    posterSrc,
    posterAlt,
    videoSrc,
    tiktokHref,
    buttonLabel,
    children,
}: TikTokFeatureSpotlightInteractiveProps) {
    const [isPlaying, setIsPlaying] = useState(false)
    const videoRef = useRef<HTMLVideoElement | null>(null)

    useEffect(() => {
        const player = videoRef.current

        if (!player) return

        if (!isPlaying) {
            player.pause()
            player.currentTime = 0
            return
        }

        void player.play().catch(() => {
            player.controls = true
        })
    }, [isPlaying])

    const mediaBlock = (
        <div className="w-full max-w-80 overflow-hidden rounded-4xl border border-border/60 bg-black shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
            <div className="relative aspect-9/16">
                <Image
                    src={posterSrc}
                    alt={posterAlt}
                    fill
                    sizes="(min-width: 1024px) 320px, (min-width: 768px) 320px, 100vw"
                    className={`object-cover transition-opacity duration-300 ${isPlaying ? "opacity-0" : "opacity-100"}`}
                />
                <video
                    ref={videoRef}
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${isPlaying ? "opacity-100" : "pointer-events-none opacity-0"}`}
                    controls={isPlaying}
                    playsInline
                    preload="none"
                    aria-hidden={!isPlaying}
                >
                    <source src={videoSrc} type="video/mp4" />
                    Votre navigateur ne prend pas en charge la lecture vidéo.
                </video>
                <div
                    className={`absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(0,0,0,0.54))] transition-opacity duration-300 ${isPlaying ? "opacity-0" : "opacity-100"}`}
                    aria-hidden="true"
                />
                <div
                    className={`absolute inset-x-0 bottom-0 p-5 text-white transition-opacity duration-300 ${isPlaying ? "opacity-0" : "opacity-100"}`}
                >
                    <Badge className="bg-white/14 text-white hover:bg-white/14">
                        {badge}
                    </Badge>
                </div>
            </div>
        </div>
    )

    return (
        <div className="grid gap-6 lg:grid-cols-[360px_minmax(0,1fr)] lg:items-center">
            <div className="order-2 flex justify-center px-6 md:px-8 lg:order-1 lg:row-span-2 lg:p-10 lg:pr-0">
                {mediaBlock}
            </div>

            <div className="order-1 flex min-h-0 flex-col justify-center px-6 pt-6 md:px-8 md:pt-8 lg:order-2 lg:px-0 lg:pt-10 lg:pr-10">
                <div className="space-y-5">{children}</div>
            </div>

            <div className="order-3 px-6 pb-6 md:px-8 md:pb-8 lg:order-3 lg:px-0 lg:pb-10 lg:pr-10">
                <div className="flex flex-col gap-3 sm:flex-row">
                    <button
                        type="button"
                        onClick={() => setIsPlaying((current) => !current)}
                        className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 font-semibold text-white transition-colors hover:bg-primary/85 dark:text-[#5b3a1a]"
                    >
                        {isPlaying ? (
                            <RotateCcw className="h-4 w-4" aria-hidden="true" />
                        ) : (
                            <Play className="h-4 w-4" aria-hidden="true" />
                        )}
                        {isPlaying ? "Revenir à l'image" : buttonLabel}
                    </button>
                    <Link
                        href={tiktokHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-md border border-primary px-5 py-3 font-semibold text-primary transition-colors hover:bg-primary/10"
                    >
                        Voir sur TikTok
                        <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    </Link>
                </div>
            </div>
        </div>
    )
}
