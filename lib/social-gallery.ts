import { siteConfig } from "@/lib/seo-config"

export const GALLERY_REVALIDATE_SECONDS = 21600

export type SocialGalleryItem = {
    id: string
    title: string
    href: string
    thumbnailSrc: string
    thumbnailAlt: string
    summary: string
    publishedAt?: string
}

export type GalleryImageItem = {
    id: string
    src: string
    alt: string
    title: string
    summary: string
    className: string
}

type YouTubeOEmbedResponse = {
    title?: string
    thumbnail_url?: string
}

const browserHeaders = {
    "user-agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36"
}

export const galleryImageItems: GalleryImageItem[] = [
    {
        id: "alou",
        src: "/ALOU-pomsky-toy-f3.webp",
        alt: "Portrait d'Alou, femelle Pomsky toy F3 de l'élevage Royal POMSKY",
        title: "ALOU",
        summary: "Femelle Pomsky toy F3, robe noire grise et blanche, masque bandit et yeux vairons.",
        className: "md:col-span-7 md:row-span-2"
    },
    {
        id: "bandit",
        src: "/BANDIT-pomsky-toy-f5.webp",
        alt: "Portrait de Bandit, mâle Pomsky toy F5+ à la robe bleue exotique",
        title: "BANDIT",
        summary: "Mâle Pomsky toy F5+, import USA, robe bleue exotique et regard bleu intense.",
        className: "md:col-span-5"
    },
    {
        id: "beauty",
        src: "/BEAUTY-pomsky-miniature-f4.webp",
        alt: "Portrait de Beauty, femelle Pomsky miniature F4 noire et blanche",
        title: "BEAUTY",
        summary: "Femelle Pomsky miniature F4, pelage fluffy, masque Fleur de Lys et yeux bleus.",
        className: "md:col-span-5"
    },
    {
        id: "inuit",
        src: "/INUIT-pomsky-toy-f5.webp",
        alt: "Portrait d'Inuit, mâle Pomsky toy F5 chocolat et blanc",
        title: "INUIT",
        summary: "Mâle Pomsky toy F5, chocolat et blanc, masque bandit et format très compact.",
        className: "md:col-span-4"
    },
    {
        id: "mogu",
        src: "/MOGU-pomsky-miniature-f4.webp",
        alt: "Portrait de Mogu, femelle Pomsky miniature F4 noire et blanche",
        title: "MOGU",
        summary: "Femelle Pomsky miniature F4, masque Fleur de Lys, allure douce et très expressive.",
        className: "md:col-span-4"
    },
    {
        id: "sally",
        src: "/SALLY-pomsky-miniature.webp",
        alt: "Portrait de Sally, femelle Pomsky miniature chocolat et blanc",
        title: "SALLY",
        summary: "Femelle Pomsky miniature, robe chocolat et blanc, yeux bleus et masque Fleur de Lys.",
        className: "md:col-span-4"
    },
    {
        id: "shadow",
        src: "/SHADOW-pomsky-F4.webp",
        alt: "Portrait de Shadow, femelle Pomsky miniature F4 noire et blanche",
        title: "SHADOW",
        summary: "Femelle Pomsky miniature F4, caractère stable, regard bleu particolor et belle prestance.",
        className: "md:col-span-6"
    },
    {
        id: "sky",
        src: "/SKY-pomsky-miniature-f3.webp",
        alt: "Portrait de Sky, mâle Pomsky miniature F3+ bleu et blanc",
        title: "SKY",
        summary: "Mâle Pomsky miniature F3+, import USA, couleur rare bleu et blanc et fourrure whooly.",
        className: "md:col-span-6"
    },
    {
        id: "bambou",
        src: "/BAMBOU-pomsky-miniature-f5.webp",
        alt: "Portrait de Bambou, femelle Pomsky toy F5 noire et blanche",
        title: "BAMBOU",
        summary: "Femelle Pomsky toy F5, robe noire et blanche, regard bleu lumineux et masque Fleur de Lys.",
        className: "md:col-span-4"
    },
    {
        id: "shane",
        src: "/SHANE-pomsky-miniature-f3.webp",
        alt: "Portrait de Shane, femelle Pomsky miniature F3 bleu et blanc",
        title: "SHANE",
        summary: "Femelle Pomsky miniature F3, import USA, robe rare bleu et blanc et tempérament sensible.",
        className: "md:col-span-4"
    },
    {
        id: "pweek",
        src: "/PWEEK-pomsky-toy-f3.webp",
        alt: "Portrait de Pweek, femelle Pomsky toy F3 noire et blanche",
        title: "PWEEK",
        summary: "Femelle Pomsky toy F3, import Russie, masque bandit et yeux particolor très singuliers.",
        className: "md:col-span-4"
    }
]

export const galleryInstagramItems: SocialGalleryItem[] = [
    {
        id: "instagram-djpckuc",
        title: "Anyblue, Pomsky F5, aux côtés de Jose Mourinho",
        href: "https://www.instagram.com/reel/DJPckUcIoB5/",
        thumbnailSrc: "/pages/galerie/insta/jose-mourinho-avec-anyblue-pomsky-de-royal-pomsky.webp",
        thumbnailAlt: "Aperçu du reel Instagram montrant Anyblue aux côtés de Jose Mourinho",
        summary:
            "Un reel Instagram choisi pour montrer un Pomsky au profil marquant et l'univers partagé par Royal POMSKY sur ses réseaux.",
        publishedAt: "2025-05-04"
    },
    {
        id: "instagram-dwwuzk5",
        title: "Rromaaaane et Mister Boo chez Royal POMSKY",
        href: "https://www.instagram.com/reel/C4i8ah1ooe0/",
        thumbnailSrc: "/pages/galerie/insta/rromaaaane-et-mister-boo-pomsky-de-royal-pomsky.webp",
        thumbnailAlt: "Aperçu du reel Instagram avec Rromaaaane et Mister Boo chez Royal POMSKY",
        summary:
            "Un reel Instagram sélectionné pour montrer un moment tendre du quotidien et la relation créée autour des Pomsky à l'élevage.",
        publishedAt: "2024-03-15"
    },
    {
        id: "instagram-cgu1yba",
        title: "Les aventures de Sirius et sa famille",
        href: "https://www.instagram.com/tv/CgU1yBAFW23/",
        thumbnailSrc: "/pages/galerie/insta/Sirius-le-pomsky-conduit-un-scooter-a-paris.webp",
        thumbnailAlt: "Aperçu du reel Instagram montrant Sirius le Pomsky avec sa famille à Paris",
        summary:
            "Un souvenir partagé autour de la vie après adoption et du lien qui se crée entre Royal POMSKY et les familles.",
        publishedAt: "2022-07-22"
    }
]

export const galleryTikTokItems: SocialGalleryItem[] = [
    {
        id: "7503509177734548758",
        title: "Un moment de bien-être à l'élevage",
        href: "https://www.tiktok.com/@royalpomsky/video/7503509177734548758",
        thumbnailSrc: "/assets/tiktok/7503509177734548758.optimized.webp",
        thumbnailAlt: "Aperçu de la vidéo TikTok sur le bien-être à l'élevage Royal POMSKY",
        summary:
            "Une vidéo TikTok axée sur l'ambiance de l'élevage, le rythme des chiens et leur cadre de vie au quotidien.",
        publishedAt: "2025-05-12"
    },
    {
        id: "6940582843424738565",
        title: "Pomsky à la plage",
        href: "https://www.tiktok.com/@royalpomsky/video/6940582843424738565",
        thumbnailSrc: "/assets/tiktok/6940582843424738565.jpg",
        thumbnailAlt: "Aperçu de la vidéo TikTok montrant un Pomsky Royal POMSKY à la plage",
        summary:
            "Une vidéo TikTok plus contemplative, choisie pour montrer les Pomsky dans un décor extérieur et un moment simple à regarder.",
        publishedAt: "2021-03-17"
    },
    {
        id: "7101955478313356549",
        title: "Un souvenir d'adoption chez Royal Pomsky",
        href: "https://www.tiktok.com/@royalpomsky/video/7101955478313356549",
        thumbnailSrc: "/assets/tiktok/7101955478313356549.optimized.webp",
        thumbnailAlt: "Aperçu de la vidéo TikTok montrant un souvenir d'adoption chez Royal POMSKY",
        summary:
            "Un moment autour de la rencontre entre un chiot et sa future famille, dans l'esprit de suivi et d'accompagnement de l'élevage.",
        publishedAt: "2022-05-26"
    }
]

export const galleryFacebookItems: SocialGalleryItem[] = [
    {
        id: "facebook-reel-26399232579693211",
        title: "Vuk est disponible",
        href: "https://www.facebook.com/reel/26399232579693211/",
        thumbnailSrc: "/pages/galerie/facebook/vuk-et-marine-jouent-dans-le-parc-de-royal-pomsky.webp",
        thumbnailAlt: "Aperçu du reel Facebook montrant Vuk et Marine dans le parc de Royal POMSKY",
        summary:
            "Dans ce premier reel Facebook, Vuk apparaît comme un mini Pomsky F5 joueur, curieux et très attachant."
    },
    {
        id: "facebook-reel-2371708993341957",
        title: "Nos petits loustics au soleil",
        href: "https://www.facebook.com/reel/2371708993341957/",
        thumbnailSrc: "/pages/galerie/facebook/les-pomsky-jouent-pendant-la-recreation.webp",
        thumbnailAlt: "Aperçu du reel Facebook montrant des Pomsky en récréation au soleil",
        summary:
            "Un reel Facebook lumineux qui montre nos petits loustics dehors, heureux de profiter d'un moment de récréation au soleil."
    },
    {
        id: "facebook-reel-885166760972417",
        title: "Thor a passé la barre des 5 semaines",
        href: "https://www.facebook.com/reel/885166760972417/",
        thumbnailSrc: "/pages/galerie/facebook/thor-aime-les-gratouilles.webp",
        thumbnailAlt: "Aperçu du reel Facebook consacré à Thor à l'âge de 5 semaines",
        summary:
            "Un reel Facebook consacré à Thor, au moment où il passe le cap des 5 semaines avec toute son expression déjà bien révélée."
    }
]

async function getYouTubeOEmbed(videoId: string) {
    const oEmbedUrl = new URL("https://www.youtube.com/oembed")
    oEmbedUrl.searchParams.set("url", `https://www.youtube.com/shorts/${videoId}`)
    oEmbedUrl.searchParams.set("format", "json")

    const response = await fetch(oEmbedUrl, {
        headers: browserHeaders,
        next: {
            revalidate: GALLERY_REVALIDATE_SECONDS
        }
    })

    if (!response.ok) {
        return null
    }

    return (await response.json()) as YouTubeOEmbedResponse
}

export async function getLatestYouTubeShorts(limit = 3): Promise<SocialGalleryItem[]> {
    try {
        const channelUrl = `${siteConfig.socialLinks.youtube.replace(/\/$/, "")}/shorts`
        const response = await fetch(channelUrl, {
            headers: browserHeaders,
            next: {
                revalidate: GALLERY_REVALIDATE_SECONDS
            }
        })

        if (!response.ok) {
            return []
        }

        const html = await response.text()
        const videoIds = Array.from(html.matchAll(/"videoId":"([A-Za-z0-9_-]{11})"/g))
            .map((match) => match[1])
            .filter((videoId, index, values) => values.indexOf(videoId) === index)
            .slice(0, limit)

        if (!videoIds.length) {
            return []
        }

        const shorts = await Promise.all(
            videoIds.map(async (videoId, index) => {
                const oEmbed = await getYouTubeOEmbed(videoId)

                return {
                    id: videoId,
                    title: oEmbed?.title || `Short YouTube Royal Pomsky ${index + 1}`,
                    href: `https://www.youtube.com/shorts/${videoId}`,
                    thumbnailSrc: oEmbed?.thumbnail_url || `https://i.ytimg.com/vi/${videoId}/hq2.jpg`,
                    thumbnailAlt: `Aperçu du short YouTube Royal POMSKY : ${oEmbed?.title || `vidéo ${index + 1}`}`,
                    summary: "Short YouTube publié sur la chaîne Royal POMSKY pour montrer un moment de vie, un chiot ou l'ambiance de l'élevage."
                } satisfies SocialGalleryItem
            })
        )

        return shorts
    } catch {
        return []
    }
}
