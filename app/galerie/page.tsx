import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Facebook, ImageIcon, Instagram, Play, Youtube } from "lucide-react"
import { FaTiktok } from "react-icons/fa6"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { buildOpenGraph, buildTwitter, pageMetadata, returnLastmod, siteConfig, sitemapPages } from "@/lib/seo-config"
import {
    galleryFacebookItems,
    galleryImageItems,
    galleryInstagramItems,
    galleryTikTokItems,
    getLatestYouTubeShorts,
    type GalleryImageItem,
    type SocialGalleryItem
} from "@/lib/social-gallery"
import { generateBreadcrumbSchema, generateWebPageSchema } from "@/lib/schema-generators"
import { cn } from "@/lib/utils"

const galleryOgImage = "/pages/galerie/jose-mourinho-et-un-pomsky-royal-pomsky.png"

export const revalidate = 21600

export const metadata: Metadata = {
    title: pageMetadata.gallery.title,
    description: pageMetadata.gallery.description,
    keywords: pageMetadata.gallery.keywords,
    openGraph: buildOpenGraph({
        title: pageMetadata.gallery.title,
        description: pageMetadata.gallery.description,
        url: `${siteConfig.siteUrl}${siteConfig.pages.gallery}`,
        images: [
            {
                url: `${siteConfig.siteUrl}${galleryOgImage}`,
                alt: "Jose Mourinho avec un Pomsky Royal Pomsky",
                width: siteConfig.ogImageWidth,
                height: siteConfig.ogImageHeight,
                type: "image/png"
            }
        ]
    }),
    twitter: buildTwitter({
        title: pageMetadata.gallery.title,
        description: pageMetadata.gallery.description,
        imageUrl: `${siteConfig.siteUrl}${galleryOgImage}`
    }),
    alternates: {
        canonical: `${siteConfig.siteUrl}${siteConfig.pages.gallery}`
    }
}

function formatPublishedAt(value?: string) {
    if (!value) {
        return null
    }

    return new Intl.DateTimeFormat("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric"
    }).format(new Date(value))
}

function PhotoGallerySection({ id, items }: { id: string; items: GalleryImageItem[] }) {
    return (
        <section id={id} className="space-y-6 scroll-mt-28">
            <div className="space-y-3">
                <Badge variant="secondary" className="w-fit">
                    Photos de l'élevage
                </Badge>
                <h2 className="text-xl md:text-2xl font-semibold leading-tight">
                    Des photos de nos Pomsky qui posent pour vous séduire.
                </h2>
                <p className="max-w-3xl text-muted-foreground">
                    Cette galerie photo vous permet de découvrir Royal POMSKY de façon plus concrète avec des 
                    portraits de nos chiens de
                    l'élevage. Une façon simple de mieux voir nos Pomsky dans leur environnement.
                </p>
            </div>

            <div className="grid gap-4 md:auto-rows-[220px] xl:auto-rows-[250px] md:grid-cols-12">
                {items.map((item) => (
                    <figure
                        key={item.id}
                        className={cn(
                            "group relative overflow-hidden rounded-[1.75rem] border border-primary/10 bg-background shadow-[0_16px_48px_rgba(66,40,18,0.08)]",
                            "min-h-[320px] md:min-h-0",
                            item.className
                        )}
                    >
                        <Image
                            src={item.src}
                            alt={item.alt}
                            fill
                            sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                        <div
                            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,12,8,0.04),rgba(20,12,8,0.62))]"
                            aria-hidden="true"
                        />
                        <figcaption className="absolute inset-x-0 bottom-0 space-y-2 p-5 text-white">
                            <p className="text-lg font-semibold leading-snug">{item.title}</p>
                            <p className="max-w-xl text-sm leading-relaxed text-white/85">
                                {item.summary}
                            </p>
                        </figcaption>
                    </figure>
                ))}
            </div>
        </section>
    )
}

function SocialThumbnail({ item }: { item: SocialGalleryItem }) {
    return (
        <div className="relative aspect-[4/5] overflow-hidden bg-muted">
            <Image
                src={item.thumbnailSrc}
                alt={item.thumbnailAlt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 100vw"
                className="object-cover"
            />
        </div>
    )
}

function SocialSection({
    id,
    badge,
    title,
    description,
    profileHref,
    profileLabel,
    ctaLabel = "Voir la vidéo",
    items,
    emptyMessage
}: {
    id: string
    badge: string
    title: string
    description: string
    profileHref: string
    profileLabel: string
    ctaLabel?: string
    items: SocialGalleryItem[]
    emptyMessage: string
}) {
    return (
        <section id={id} className="space-y-6 scroll-mt-28">
            <div className="space-y-3">
                <Badge variant="secondary" className="w-fit">
                    {badge}
                </Badge>
                <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
                    <div className="space-y-3">
                        <h2 className="text-xl md:text-2xl font-semibold leading-tight">{title}</h2>
                        <p className="max-w-3xl text-muted-foreground">{description}</p>
                    </div>
                    <Link
                        href={profileHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-md border border-primary px-4 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
                    >
                        {profileLabel}
                        <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    </Link>
                </div>
            </div>

            {items.length > 0 ? (
                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {items.map((item) => {
                        const publishedAt = formatPublishedAt(item.publishedAt)

                        return (
                            <Card
                                key={item.id}
                                className="overflow-hidden border-primary/10 bg-background/90 p-0 shadow-[0_14px_40px_rgba(66,40,18,0.06)]"
                            >
                                <CardContent className="p-0">
                                    <figure className="flex h-full flex-col">
                                        <SocialThumbnail item={item} />
                                        <figcaption className="space-y-4 p-5">
                                            {publishedAt ? (
                                                <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary/80">
                                                    {publishedAt}
                                                </p>
                                            ) : null}
                                            <div className="space-y-2">
                                                <h3 className="text-lg font-semibold leading-snug">{item.title}</h3>
                                                <p className="text-sm leading-relaxed text-muted-foreground">
                                                    {item.summary}
                                                </p>
                                            </div>
                                            <Link
                                                href={item.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary/85 dark:text-[#5b3a1a]"
                                            >
                                                {ctaLabel}
                                                <Play className="h-4 w-4" aria-hidden="true" />
                                            </Link>
                                        </figcaption>
                                    </figure>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            ) : (
                <Card className="border-primary/10 bg-primary/5">
                    <CardContent className="px-6 py-6">
                        <p className="text-sm leading-relaxed text-muted-foreground">{emptyMessage}</p>
                    </CardContent>
                </Card>
            )}
        </section>
    )
}

export default async function GaleriePage() {
    const youtubeShorts = await getLatestYouTubeShorts(3)

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Accueil", url: "/" },
        { name: "Galerie", url: siteConfig.pages.gallery }
    ])
    const pageLastModValue = sitemapPages.find((page) => page.url === siteConfig.pages.gallery)?.lastmod
    const webPageSchema = generateWebPageSchema({
        name: pageMetadata.gallery.title,
        description: pageMetadata.gallery.description,
        url: siteConfig.pages.gallery,
        imageUrl: galleryOgImage,
        dateModified: pageLastModValue,
        about: [
            "Galerie photo de Pomsky",
            "Élevage Pomsky en photos",
            "Reels Instagram Royal Pomsky",
            "Shorts YouTube Royal Pomsky",
            "Vidéos TikTok Royal Pomsky",
            "Reels Facebook Royal Pomsky"
        ]
    })
    const lastMod = returnLastmod(siteConfig.pages.gallery)

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
            />

            <div className="py-16">
                <div className="container mx-auto space-y-14">
                    <section className="space-y-6 text-center">
                        <Badge variant="secondary" className="mx-auto w-fit">
                            Galerie photos et vidéos
                        </Badge>
                        <h1 className="text-xl md:text-3xl font-bold">
                            Galerie Royal POMSKY : photos de nos Pomsky et vidéos de l'élevage
                        </h1>
                        <p className="mx-auto max-w-3xl text-muted-foreground">
                            Cette page rassemble des photos de nos Pomsky, des scènes de vie à l'élevage
                            et une sélection de vidéos publiées sur nos réseaux. Elle a été pensée pour
                            vous aider à mieux découvrir notre univers, notre travail et l'ambiance de
                            l'élevage.
                        </p>
                        <p className="mx-auto max-w-2xl text-sm text-muted-foreground">
                            Contenu mis à jour le {lastMod}
                        </p>
                        <div className="mx-auto h-1 w-24 rounded-full bg-primary" aria-hidden="true" />
                    </section>

                    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
                        <Link href="#galerie-photos" className="block h-full">
                            <Card className="h-full border-primary/10 bg-primary/5 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_14px_40px_rgba(66,40,18,0.08)]">
                                <CardContent className="flex h-full px-6 py-6">
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between gap-3">
                                            <p className="font-semibold">Galerie photos</p>
                                            <ImageIcon className="h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
                                        </div>
                                        <p className="text-sm text-muted-foreground">
                                            Des portraits de Pomsky de notre élevage Royal Pomsky, pour mieux
                                            découvrir nos chiens, leur morphologie et leur cadre de vie.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link href="#galerie-instagram" className="block h-full">
                            <Card className="h-full border-primary/10 bg-primary/5 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_14px_40px_rgba(66,40,18,0.08)]">
                                <CardContent className="flex h-full px-6 py-6">
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between gap-3">
                                            <p className="font-semibold">Instagram</p>
                                            <Instagram className="h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
                                        </div>
                                        <p className="text-sm text-muted-foreground">
                                            Une sélection de reels Instagram pour retrouver l'ambiance de
                                            l'élevage et quelques présentations de chiots.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link href="#galerie-youtube" className="block h-full">
                            <Card className="h-full border-primary/10 bg-primary/5 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_14px_40px_rgba(66,40,18,0.08)]">
                                <CardContent className="flex h-full px-6 py-6">
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between gap-3">
                                            <p className="font-semibold">YouTube Shorts</p>
                                            <Youtube className="h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
                                        </div>
                                        <p className="text-sm text-muted-foreground">
                                            Les derniers shorts de notre chaîne YouTube pour voir les Pomsky
                                            en mouvement et suivre la vie de l'élevage.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link href="#galerie-tiktok" className="block h-full">
                            <Card className="h-full border-primary/10 bg-primary/5 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_14px_40px_rgba(66,40,18,0.08)]">
                                <CardContent className="flex h-full px-6 py-6">
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between gap-3">
                                            <p className="font-semibold">TikTok</p>
                                            <FaTiktok className="h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
                                        </div>
                                        <p className="text-sm text-muted-foreground">
                                            Trois vidéos TikTok choisies pour montrer l'élevage de façon
                                            simple, rapide et agréable à consulter.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link href="#galerie-facebook" className="block h-full">
                            <Card className="h-full border-primary/10 bg-primary/5 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_14px_40px_rgba(66,40,18,0.08)]">
                                <CardContent className="flex h-full px-6 py-6">
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between gap-3">
                                            <p className="font-semibold">Facebook</p>
                                            <Facebook className="h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
                                        </div>
                                        <p className="text-sm text-muted-foreground">
                                            Trois reels Facebook accessibles en un clic, avec des aperçus
                                            visuels et un lien direct vers la page officielle.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    </section>

                    <PhotoGallerySection id="galerie-photos" items={galleryImageItems} />

                    <SocialSection
                        id="galerie-instagram"
                        badge="Instagram"
                        title="Reels Instagram de Royal POMSKY"
                        description="Nous avons sélectionné trois reels Instagram qui reflètent bien notre élevage : présentation de chiots, moments de vie et souvenirs partagés avec les familles."
                        profileHref={siteConfig.socialLinks.instagram}
                        profileLabel="Ouvrir Instagram"
                        ctaLabel="Voir le reel"
                        items={galleryInstagramItems}
                        emptyMessage="Aucun reel Instagram n'est disponible pour le moment. Vous pouvez consulter notre profil via le bouton ci-dessus."
                    />

                    <SocialSection
                        id="galerie-youtube"
                        badge="YouTube Shorts"
                        title="Les derniers shorts YouTube de l'élevage"
                        description="Cette section affiche les shorts récents publiés sur notre chaîne YouTube. C'est un bon moyen de découvrir nos Pomsky, leur énergie et l'ambiance quotidienne de l'élevage."
                        profileHref={siteConfig.socialLinks.youtube}
                        profileLabel="Ouvrir YouTube"
                        ctaLabel="Voir le short"
                        items={youtubeShorts}
                        emptyMessage="Les shorts YouTube n'ont pas pu être récupérés automatiquement pour le moment. Vous pouvez ouvrir directement la chaîne via le bouton ci-dessus."
                    />

                    <SocialSection
                        id="galerie-tiktok"
                        badge="TikTok"
                        title="Une sélection TikTok de Royal POMSKY"
                        description="Ces trois vidéos TikTok ont été retenues pour montrer l'élevage dans des situations simples et réelles, avec un affichage stable et léger."
                        profileHref={siteConfig.socialLinks.tiktok}
                        profileLabel="Ouvrir TikTok"
                        ctaLabel="Voir la vidéo"
                        items={galleryTikTokItems}
                        emptyMessage="Aucune vidéo TikTok n'est disponible pour le moment."
                    />

                    <SocialSection
                        id="galerie-facebook"
                        badge="Facebook"
                        title="Trois reels Facebook à ouvrir en un clic"
                        description="Pour Facebook, nous avons privilégié des liens simples vers trois reels choisis. La page reste ainsi plus légère, tout en vous laissant accéder facilement aux vidéos publiées sur le compte Royal POMSKY."
                        profileHref={siteConfig.socialLinks.facebook}
                        profileLabel="Ouvrir Facebook"
                        ctaLabel="Voir le reel"
                        items={galleryFacebookItems}
                        emptyMessage="Aucun reel Facebook n'est disponible pour le moment."
                    />
                </div>
            </div>
        </>
    )
}
