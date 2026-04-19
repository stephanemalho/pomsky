import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

import { TikTokFeatureSpotlightInteractive } from "./TikTokFeatureSpotlightInteractive"

type TikTokFeatureSpotlightProps = {
    id?: string
    badge: string
    title: string
    description: string
    videoTitle: string
    videoSummary: string
    posterSrc: string
    posterAlt: string
    mediaCaption?: string
    videoSrc?: string
    tiktokHref: string
    buttonLabel?: string
}

export function TikTokFeatureSpotlight({
    id,
    badge,
    title,
    description,
    videoTitle,
    videoSummary,
    posterSrc,
    posterAlt,
    mediaCaption,
    videoSrc,
    tiktokHref,
    buttonLabel = "Lire la vidéo",
}: TikTokFeatureSpotlightProps) {
    return (
        <section id={id} className="mb-16 scroll-mt-28">
            <Card className="overflow-hidden border rounded-4xl border-primary/10 bg-[linear-gradient(135deg,rgba(170,126,88,0.08),rgba(255,255,255,0.98),rgba(170,126,88,0.03))] shadow-[0_18px_60px_rgba(66,40,18,0.08)] dark:border-white/10 dark:bg-[linear-gradient(135deg,rgba(39,19,16,0.98),rgba(64,30,25,0.94),rgba(28,13,11,0.98))] dark:shadow-[0_18px_60px_rgba(0,0,0,0.42)]">
                <CardContent className="p-0">
                    <TikTokFeatureSpotlightInteractive
                        badge={badge}
                        posterSrc={posterSrc}
                        posterAlt={posterAlt}
                        mediaCaption={mediaCaption}
                        videoSrc={videoSrc}
                        tiktokHref={tiktokHref}
                        buttonLabel={buttonLabel}
                    >
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
                                <div className="space-y-2">
                                    <Badge variant="secondary" className="w-fit">
                                        {badge}
                                    </Badge>
                                    <p className="text-sm font-semibold text-foreground">
                                        {videoTitle}
                                    </p>
                                    <p className="text-sm leading-relaxed text-muted-foreground">
                                        {videoSummary}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </TikTokFeatureSpotlightInteractive>
                </CardContent>
            </Card>
        </section>
    )
}
