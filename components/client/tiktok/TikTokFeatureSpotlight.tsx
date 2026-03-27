"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Play, RotateCcw } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

type TikTokFeatureSpotlightProps = {
    badge: string
    title: string
    description: string
    videoTitle: string
    videoSummary: string
    posterSrc: string
    posterAlt: string
    videoSrc: string
    tiktokHref: string
    buttonLabel?: string
}

export function TikTokFeatureSpotlight({
    badge,
    title,
    description,
    videoTitle,
    videoSummary,
    posterSrc,
    posterAlt,
    videoSrc,
    tiktokHref,
    buttonLabel = "Lire la vidéo",
}: TikTokFeatureSpotlightProps) {
    const [isPlaying, setIsPlaying] = useState(false)
    const videoRef = useRef<HTMLVideoElement | null>(null)

    useEffect(() => {
        if (!isPlaying || !videoRef.current) return

        const player = videoRef.current
        void player.play().catch(() => {
            player.controls = true
        })
    }, [isPlaying])

    return (
        <section className="mb-16">
            <Card className="overflow-hidden border border-primary/10 bg-[linear-gradient(135deg,rgba(170,126,88,0.08),rgba(255,255,255,0.98),rgba(170,126,88,0.03))] shadow-[0_18px_60px_rgba(66,40,18,0.08)]">
                <CardContent className="p-0">
                    <div className="grid gap-6 lg:grid-cols-[360px_minmax(0,1fr)] lg:items-center">
                        <div className="flex justify-center p-6 md:p-8 lg:p-10 lg:pr-0">
                            <div className="w-full max-w-[320px] overflow-hidden rounded-[2rem] border border-border/60 bg-black shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
                                <div className="relative aspect-[9/16]">
                                    {isPlaying ? (
                                        <video
                                            ref={videoRef}
                                            key={videoSrc}
                                            className="absolute inset-0 h-full w-full object-cover"
                                            controls
                                            playsInline
                                            preload="metadata"
                                            poster={posterSrc}
                                        >
                                            <source src={videoSrc} type="video/mp4" />
                                            Votre navigateur ne prend pas en charge la lecture vidéo.
                                        </video>
                                    ) : (
                                        <>
                                            <Image
                                                src={posterSrc}
                                                alt={posterAlt}
                                                fill
                                                sizes="(min-width: 1024px) 320px, (min-width: 768px) 320px, 100vw"
                                                className="object-cover"
                                            />
                                            <div
                                                className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(0,0,0,0.54))]"
                                                aria-hidden="true"
                                            />
                                            <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                                                <Badge className="bg-white/14 text-white hover:bg-white/14">
                                                    {badge}
                                                </Badge>
                                                <p className="mt-3 text-sm leading-relaxed text-white/88">
                                                    {videoSummary}
                                                </p>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="flex min-h-96 flex-col justify-center px-6 pb-6 md:px-8 md:pb-8 lg:px-0 lg:py-10 lg:pr-10">
                            <div className="space-y-5">
                                <div className="space-y-3">
                                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/80">
                                        {badge}
                                    </p>
                                    <h2 className="text-2xl font-bold leading-tight md:text-3xl">
                                        {title}
                                    </h2>
                                    <p className="max-w-2xl leading-relaxed text-muted-foreground">
                                        {description}
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-primary/10 bg-background/80 p-4">
                                    <p className="text-sm font-semibold text-foreground">{videoTitle}</p>
                                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                        {videoSummary}
                                    </p>
                                </div>

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
                    </div>
                </CardContent>
            </Card>
        </section>
    )
}
