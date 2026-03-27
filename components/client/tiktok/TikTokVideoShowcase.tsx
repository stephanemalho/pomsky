"use client"

import { useId, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Play, Video } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

type TikTokVideoItem = {
    id: string
    title: string
    summary: string
    label: string
    href: string
    posterSrc: string
    videoSrc: string
}

type TikTokVideoShowcaseProps = {
    title: string
    description: string
    videos: TikTokVideoItem[]
}

export function TikTokVideoShowcase({
    title,
    description,
    videos,
}: TikTokVideoShowcaseProps) {
    const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null)
    const panelId = useId()
    const selectedVideo = videos.find((video) => video.id === selectedVideoId) ?? null

    return (
        <section className="mx-auto mb-12 space-y-6 rounded-2xl border border-muted bg-muted/30 p-6 md:p-10">
            <div className="space-y-3 text-center">
                <Badge variant="secondary" className="w-fit mx-auto">
                    Vidéos TikTok
                </Badge>
                <h2 className="text-xl md:text-2xl font-semibold leading-tight">{title}</h2>
                <p className="max-w-3xl mx-auto text-muted-foreground">{description}</p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                {videos.map((video) => {
                    const isActive = video.id === selectedVideoId

                    return (
                        <Card
                            key={video.id}
                            className={`overflow-hidden border transition-colors ${
                                isActive ? "border-primary bg-primary/5" : "border-border bg-background/85"
                            }`}
                        >
                            <CardContent className="flex h-full flex-col p-0">
                                <div className="relative aspect-9/16 overflow-hidden bg-black">
                                    <Image
                                        src={video.posterSrc}
                                        alt={video.title}
                                        fill
                                        sizes="(min-width: 768px) 33vw, 100vw"
                                        className="object-cover"
                                    />
                                    <div
                                        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(0,0,0,0.5))]"
                                        aria-hidden="true"
                                    />
                                    <div className="relative flex h-full flex-col justify-between p-5 text-white">
                                        <Badge className="w-fit bg-white/15 text-white hover:bg-white/15">
                                            {video.label}
                                        </Badge>
                                        <div className="space-y-3">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/14">
                                                <Video className="h-5 w-5" aria-hidden="true" />
                                            </div>
                                            <div>
                                                <p className="text-lg font-semibold leading-snug">{video.title}</p>
                                                <p className="mt-2 text-sm leading-relaxed text-white/82">
                                                    {video.summary}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-3 p-4">
                                    <button
                                        type="button"
                                        onClick={() => setSelectedVideoId(video.id)}
                                        aria-controls={panelId}
                                        aria-pressed={isActive}
                                        className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary/85 dark:text-[#5b3a1a]"
                                    >
                                        <Play className="h-4 w-4" aria-hidden="true" />
                                        {isActive ? "Vidéo chargée ci-dessous" : "Voir la vidéo"}
                                    </button>
                                    <Link
                                        href={video.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 rounded-md border border-primary px-4 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
                                    >
                                        Ouvrir sur TikTok
                                        <ExternalLink className="h-4 w-4" aria-hidden="true" />
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>

            <div
                id={panelId}
                className="rounded-2xl border border-primary/15 bg-background p-4 md:p-6"
            >
                {selectedVideo ? (
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <p className="text-sm font-medium text-primary">{selectedVideo.label}</p>
                            <h3 className="text-lg font-semibold">{selectedVideo.title}</h3>
                            <p className="text-sm text-muted-foreground">{selectedVideo.summary}</p>
                        </div>
                        <div className="mx-auto max-w-sm overflow-hidden rounded-3xl border border-border bg-black shadow-lg">
                            <div className="relative aspect-9/16">
                                <video
                                    key={selectedVideo.id}
                                    className="absolute inset-0 h-full w-full object-cover"
                                    controls
                                    playsInline
                                    muted
                                    preload="metadata"
                                    poster={selectedVideo.posterSrc}
                                    autoPlay
                                >
                                    <source src={selectedVideo.videoSrc} type="video/mp4" />
                                    Votre navigateur ne prend pas en charge la lecture vidéo.
                                </video>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="space-y-2 text-center">
                        <p className="text-lg font-semibold">Choisissez une vidéo pour la charger</p>
                        <p className="text-sm text-muted-foreground">
                            Les vidéos TikTok ne sont pas chargées automatiquement pour préserver les performances de la page.
                        </p>
                    </div>
                )}
            </div>
        </section>
    )
}
