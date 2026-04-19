import Image from "next/image"
import { FAQSection } from "@/components/faq"
import { faqNosChiots } from "@/lib/faq-data"
import { Banknote, Calendar, Dog, Heart, NotebookText, PawPrint, Sprout, Weight } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import { buildOpenGraph, buildTwitter, pageMetadata, returnLastmod, siteConfig, sitemapPages } from "@/lib/seo-config"
import { pageContent } from "@/lib/page-content"
import { generateBreadcrumbSchema, generateFAQSchema, generatePuppyListSchema, generateVideoObjectSchema, generateWebPageSchema } from "@/lib/schema-generators"
import { convertFAQsToSchema } from "@/lib/faq-utils"
import { puppies, type Puppy } from "./puppies"
import { Card, CardContent } from "@/components/ui/card"
import ImageCarousel from "@/components/client/carousel/ImageCarousel"
import { Badge } from "@/components/ui/badge"
import { TikTokFeatureSpotlight } from "@/components/client/tiktok/TikTokFeatureSpotlight"

const puppiesOgImage = "/pages/puppies/VUK-male-pomsky-f5-2.jpeg"
const familyVideoAnchor = `${siteConfig.pages.puppies}#souvenir-d-adoption`
const familyVideoSchema = generateVideoObjectSchema({
    name: "Souvenir d'adoption d'un chiot Royal POMSKY",
    description:
        "Vidéo montrant la surprise d'adoption d'un chiot Royal POMSKY au moment de la rencontre avec sa future famille.",
    pageUrl: familyVideoAnchor,
    contentUrl: "/assets/tiktok/7101955478313356549.mp4",
    thumbnailUrl: "/assets/tiktok/7101955478313356549.optimized.webp",
    uploadDate: "2022-05-26",
})

export const metadata: Metadata = {
    title: pageMetadata.puppies.title,
    description: pageMetadata.puppies.description,
    keywords: pageMetadata.puppies.keywords,
    openGraph: buildOpenGraph({
        title: pageMetadata.puppies.title,
        description: pageMetadata.puppies.description,
        url: `${siteConfig.siteUrl}/chiots-disponibles`,
        images: [
            {
                url: `${siteConfig.siteUrl}${puppiesOgImage}`,
                alt: "Chiot Pomsky disponible chez Royal Pomsky",
                width: siteConfig.ogImageWidth,
                height: siteConfig.ogImageHeight,
                type: "image/jpeg",
            },
        ],
    }),
    twitter: buildTwitter({
        title: pageMetadata.puppies.title,
        description: pageMetadata.puppies.description,
        imageUrl: `${siteConfig.siteUrl}${puppiesOgImage}`,
    }),
    alternates: {
        canonical: `${siteConfig.siteUrl}/chiots-disponibles`,
    },
}

function formatPuppyPrice(price: number, currency = "EUR") {
    return new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency,
        maximumFractionDigits: 0
    }).format(price)
}

function getPuppyAnchorId(name: string) {
    return name.trim().toLowerCase().replace(/\s+/g, "-")
}

function getReproductorAnchorId(name: string) {
    return name.replace(/['"]/g, "").trim().toLowerCase().replace(/\s+/g, "-")
}

function getPuppyStatus(puppy: Puppy) {
    if (puppy.isAdopted) return "adopted"
    if (puppy.isReserved) return "reserved"
    return "available"
}

export default function NosChiotsPage() {
    // Schémas JSON-LD
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Accueil", url: "/" },
        { name: "Nos chiots", url: siteConfig.pages.puppies },
    ])
    const faqSchema = generateFAQSchema(convertFAQsToSchema(faqNosChiots))
    const pageLastModValue = sitemapPages.find((page) => page.url === siteConfig.pages.puppies)?.lastmod
    const availablePuppies = puppies.filter((puppy) => !puppy.isReserved && !puppy.isAdopted)
    const puppyListSchema = availablePuppies.length > 0
        ? generatePuppyListSchema(availablePuppies)
        : null
    const webPageSchema = generateWebPageSchema({
        name: pageMetadata.puppies.title,
        description: pageMetadata.puppies.description,
        url: siteConfig.pages.puppies,
        dateModified: pageLastModValue,
        about: ["Chiots Pomsky disponibles", "Adoption Pomsky", "Élevage Pomsky"]
    })
    const lastMod = returnLastmod(siteConfig.pages.puppies)

    return (
        <>
            {/* JSON-LD Schemas */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            {puppyListSchema ? (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(puppyListSchema) }}
                />
            ) : null}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(familyVideoSchema) }}
            />
            <div className="pb-16 ">
                <div className="container mx-auto my-12">
                    <section className="text-center space-y-4 mb-12">
                        <h1
                            className="text-xl md:text-3xl font-bold">{pageContent.puppies.h1}</h1>
                        <p className="text-md text-muted-foreground max-w-3xl mx-auto">
                            {pageContent.puppies.description}
                        </p>
                        <p className="text-md text-muted-foreground max-w-3xl mx-auto">
                            {pageContent.puppies.descriptionSecondary}
                        </p>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full" aria-hidden="true" />
                    </section>
                    {/* <NoAvailable /> */}
                    <section className="relative mx-auto mb-12 overflow-hidden rounded-[2rem] border border-primary/12 bg-[radial-gradient(circle_at_top_right,_rgba(196,86,55,0.12),_transparent_32%),linear-gradient(180deg,_rgba(255,255,255,0.92),_rgba(248,240,236,0.86))] p-6 text-center shadow-sm dark:border-white/10 dark:bg-[linear-gradient(135deg,rgba(39,19,16,0.98),rgba(64,30,25,0.94),rgba(28,13,11,0.98))] dark:shadow-[0_18px_60px_rgba(0,0,0,0.42)] md:p-10">
                        <div className="absolute -left-10 top-8 h-28 w-28 rounded-full bg-primary/8 blur-3xl dark:bg-primary/12" aria-hidden="true" />
                        <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-primary/8 blur-3xl dark:bg-primary/12" aria-hidden="true" />
                        <div className="relative space-y-5">
                            <Badge className="border-0 bg-primary text-primary-foreground hover:bg-primary">
                                Adoption accompagnee
                            </Badge>
                            <h2 className="text-xl md:text-3xl font-semibold leading-tight">
                                Un processus d&apos;adoption transparent et accompagné
                            </h2>
                            <p className="mx-auto max-w-3xl text-muted-foreground">
                                Chaque adoption chez Royal POMSKY s&apos;inscrit dans un parcours réfléchi : échanges préalables avec les familles, conseils personnalisés, transparence sur les lignées et accompagnement avant et après l&apos;arrivée du chiot. Cette approche garantit une adoption durable et respectueuse du bien-être animal.
                            </p>
                            <div className="grid gap-3 pt-2 md:grid-cols-3">
                                {[
                                    { label: "Accompagnement", value: "Avant et après l'arrivée" },
                                    { label: "Retrait", value: "Uniquement à l'élevage" },
                                    { label: "Zone", value: "France et Suisse" },
                                ].map((item) => (
                                    <div key={item.label} className="rounded-2xl border border-primary/10 bg-background/72 p-4 text-left shadow-sm backdrop-blur dark:border-primary/18 dark:bg-white/6">
                                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                                            {item.label}
                                        </p>
                                        <p className="mt-2 text-sm font-semibold text-foreground md:text-base">
                                            {item.value}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative mx-auto mt-10 w-24 h-1 rounded-full bg-primary" aria-hidden="true" />
                        <div className="relative space-y-4 max-w-3xl mx-auto pt-10">
                            <h3 id="adoption-france-suisse" className="text-lg font-medium pt-16">
                                Adoption possible partout en France et en Suisse, avec retrait des chiots à l&apos;élevage uniquement sur rendez-vous.
                            </h3>
                            <p className="text-muted-foreground">
                                Vous résidez à l&apos;étranger ? Nous pouvons vous aider pour le départ de votre chiot sous conditions, avec un accompagnement
                                personnalisé pour chaque étape administrative et sanitaire. Pour un transport international sécurisé, nous recommandons{" "}
                                <a
                                    href="https://anivetvoyage.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-medium text-primary underline underline-offset-4 hover:no-underline"
                                >
                                    Anivet Voyage
                                </a>.
                            </p>
                            <p className="text-sm text-muted-foreground">
                                Pour préparer le trajet, l&apos;installation à la maison et les premiers jours, consultez aussi notre guide{" "}
                                <Link
                                    href="/adoption/reussir-son-adoption"
                                    className="font-medium text-primary underline underline-offset-4 hover:no-underline"
                                >
                                    Réussir son adoption
                                </Link>.
                            </p>
                        </div>
                        <div className="grid gap-10 my-12">
                            {puppies.map((puppy, index) => {
                                const puppyAnchorId = getPuppyAnchorId(puppy.name)
                                const puppyStatus = getPuppyStatus(puppy)
                                const isUnavailable = puppyStatus !== "available"
                                const cardStatusClasses =
                                    puppyStatus === "reserved"
                                        ? "border-2 border-green-600 ring-2 ring-green-600/40 ring-offset-2 ring-offset-background"
                                        : puppyStatus === "adopted"
                                            ? "border-2 border-amber-500/80 ring-2 ring-amber-500/30 ring-offset-2 ring-offset-background"
                                            : ""
                                const ribbonClasses =
                                    puppyStatus === "reserved"
                                        ? "border-green-700 bg-green-100 text-green-800 shadow-[0_0_0_3px_#166534]"
                                        : "border-amber-700 bg-amber-100 text-amber-900 shadow-[0_0_0_3px_#b45309]"
                                const ribbonLabel =
                                    puppyStatus === "reserved" ? "RÉSERVÉ" : "A REJOINT SA FAMILLE"
                                const statusPillClasses =
                                    puppyStatus === "reserved"
                                        ? "border-green-700 bg-green-50 text-green-800"
                                        : "border-amber-700 bg-amber-50 text-amber-900"
                                const statusPillLabel =
                                    puppyStatus === "reserved"
                                        ? `${puppy.name} est réservé`
                                        : `${puppy.name} a rejoint sa famille`
                                const priceToneClass = isUnavailable ? "text-muted-foreground" : "text-primary"
                                const priceTextClass = isUnavailable
                                    ? "text-muted-foreground line-through"
                                    : "text-primary"
                                const availabilityLabel =
                                    puppyStatus === "available"
                                        ? "Départ possible"
                                        : puppyStatus === "reserved"
                                            ? "Statut"
                                            : "Adoption"

                                return (
                                    <Card
                                        key={puppy.name}
                                        className={`relative overflow-hidden rounded-[1.75rem] border border-primary/10 bg-[linear-gradient(180deg,_rgba(255,255,255,0.84),_rgba(246,237,233,0.76))] p-0 shadow-sm dark:border-white/10 dark:bg-[linear-gradient(135deg,rgba(39,19,16,0.98),rgba(64,30,25,0.94),rgba(28,13,11,0.98))] dark:shadow-[0_18px_60px_rgba(0,0,0,0.32)] md:p-5 ${cardStatusClasses}`}
                                    >
                                        <CardContent className="p-0">
                                            {isUnavailable ? (
                                                <div
                                                    className={`absolute right-4 top-4 z-20 rotate-6 rounded-md border-2 px-4 py-1 text-sm font-extrabold uppercase tracking-wider ${ribbonClasses}`}
                                                >
                                                    {ribbonLabel}
                                                </div>
                                            ) : null}
                                            <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? "md:grid-flow-col-dense" : ""}`}>
                                                <ImageCarousel
                                                    className={index % 2 === 1 ? "md:order-2" : undefined}
                                                    images={puppy.images}
                                                    alt={"Photos du chiot Pomsky " + puppy.name}
                                                    caption={`Photos récentes de ${puppy.name}, pour découvrir son évolution, son type et son expression.`}
                                                    priority={index === 0}
                                                    sizes="(min-width: 1024px) 50vw, (min-width: 768px) 50vw, 100vw"
                                                />
                                                <div className={`p-8 space-y-5 flex flex-col justify-center min-w-0 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                                                    <div className="flex flex-wrap items-center gap-2">
                                                        <Badge variant="secondary" className="bg-background/80 dark:bg-white/8">
                                                            <PawPrint className="h-4 w-4 mr-1" />
                                                            {puppy.coat}
                                                        </Badge>
                                                        <Badge variant="outline" className="min-w-0 whitespace-normal break-words border-primary/20 bg-background/55 dark:border-primary/25 dark:bg-white/5">
                                                            {puppy.color}
                                                        </Badge>
                                                    </div>
                                                    <div className="space-y-2">
                                                        <h3 id={puppyAnchorId} className="scroll-mt-28 text-2xl font-bold">{puppy.name}</h3>
                                                        <p className="text-muted-foreground">{puppy.description}</p>
                                                    </div>
                                                    <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                                                        <div className="flex items-center gap-2 rounded-2xl border border-primary/8 bg-background/58 px-3 py-2 text-muted-foreground dark:border-primary/15 dark:bg-white/5">
                                                            <dt className="sr-only">Sexe</dt>
                                                            <Dog className="h-4 w-4 text-primary" aria-hidden="true" />
                                                            <dd>{puppy.sexe}</dd>
                                                        </div>
                                                        <div className="flex items-center gap-2 rounded-2xl border border-primary/8 bg-background/58 px-3 py-2 text-muted-foreground dark:border-primary/15 dark:bg-white/5">
                                                            <dt className="sr-only">Parents</dt>
                                                            <Heart className="h-4 w-4 text-primary" aria-hidden="true" />
                                                            <dd>{puppy.parents}</dd>
                                                        </div>
                                                        <div className="flex items-center gap-2 rounded-2xl border border-primary/8 bg-background/58 px-3 py-2 text-muted-foreground dark:border-primary/15 dark:bg-white/5">
                                                            <dt className="sr-only">{availabilityLabel}</dt>
                                                            <Calendar className="h-4 w-4 text-primary" aria-hidden="true" />
                                                            <dd>{puppy.readyDate}</dd>
                                                        </div>
                                                        <div className="flex items-center gap-2 rounded-2xl border border-primary/8 bg-background/58 px-3 py-2 text-muted-foreground dark:border-primary/15 dark:bg-white/5">
                                                            <dt className="sr-only">Âge</dt>
                                                            <PawPrint className="h-4 w-4 text-primary" aria-hidden="true" />
                                                            <dd>{puppy.age}</dd>
                                                        </div>
                                                        <div className="flex items-center gap-2 rounded-2xl border border-primary/8 bg-background/58 px-3 py-2 text-muted-foreground dark:border-primary/15 dark:bg-white/5">
                                                            <dt className="sr-only">Poids</dt>
                                                            <Weight className="h-4 w-4 text-primary" aria-hidden="true" />
                                                            <dd>{puppy.weight}</dd>
                                                        </div>
                                                        {typeof puppy.price === "number" ? (
                                                            <div className="flex items-center gap-2 rounded-2xl border border-primary/8 bg-background/58 px-3 py-2 text-muted-foreground sm:col-span-2 dark:border-primary/15 dark:bg-white/5">
                                                                <Banknote
                                                                    className={`min-h-4 min-w-4 ${priceToneClass}`}
                                                                    aria-hidden="true"
                                                                />
                                                                <dt className="sr-only">Prix</dt>
                                                                <dd
                                                                    className={`flex gap-2 items-center text-lg font-semibold ${priceTextClass}`}
                                                                >
                                                                    {formatPuppyPrice(puppy.price, puppy.priceCurrency ?? "EUR")}
                                                                    <p className="text-xs text-muted-foreground mt-1">
                                                                        {puppy.priceIncludes}
                                                                    </p>
                                                                </dd>
                                                            </div>
                                                        ) : null}
                                                    </dl>
                                                    <div className="flex flex-wrap gap-2">
                                                        {puppy.highlights.map((item) => (
                                                            <Badge key={item} variant="secondary">
                                                                {item}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                    <div className="flex m-auto flex-col sm:flex-row gap-3 mb-2">
                                                        {isUnavailable ? (
                                                            <span
                                                                aria-disabled="true"
                                                                className={`cursor-not-allowed rounded-xl border px-4 py-2 text-center font-medium opacity-95 ${statusPillClasses}`}
                                                            >
                                                                {statusPillLabel}
                                                            </span>
                                                        ) : (
                                                            <div className="flex flex-col sm:flex-row gap-3">
                                                                <Link
                                                                    href="/contact"
                                                                    className="rounded-xl border border-primary/25 bg-background/70 px-4 py-2 text-center text-primary shadow-xs transition hover:bg-primary/10 dark:border-primary/30 dark:bg-white/6 dark:hover:bg-white/10"
                                                                >
                                                                    Contacter l&apos;élevage
                                                                </Link>
                                                                <a
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="rounded-xl bg-primary px-4 py-2 text-center text-primary-foreground shadow-xs transition hover:bg-primary/90"
                                                                    href={puppy.linkTo}
                                                                >
                                                                    Réserver une visite ou demander plus de photos/vidéos
                                                                </a>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                )
                            })}
                        </div>
                    </section>
                    <section
                        id="portee-charm-beauty"
                        className="relative my-6 mt-12 overflow-hidden rounded-[2rem] border border-primary/15 bg-[radial-gradient(circle_at_top_left,_rgba(196,86,55,0.16),_transparent_38%),linear-gradient(135deg,_rgba(255,255,255,0.94),_rgba(251,240,235,0.96)_48%,_rgba(246,228,220,0.98))] p-6 dark:border-white/10 dark:bg-[linear-gradient(135deg,rgba(39,19,16,0.98),rgba(64,30,25,0.94),rgba(28,13,11,0.98))] dark:shadow-[0_18px_60px_rgba(0,0,0,0.42)] md:p-10"
                    >
                        <div className="absolute -left-12 top-10 h-32 w-32 rounded-full bg-primary/10 blur-3xl dark:bg-primary/14" aria-hidden="true" />
                        <div className="absolute -right-16 bottom-6 h-40 w-40 rounded-full bg-primary/10 blur-3xl dark:bg-primary/14" aria-hidden="true" />
                        <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                            <div className="space-y-6">
                                <div className="flex flex-wrap gap-3">
                                    <Badge className="border-0 bg-primary text-primary-foreground hover:bg-primary">
                                        Mariage confirmé
                                    </Badge>
                                    <Badge variant="secondary" className="bg-background/85 text-foreground dark:bg-white/8">
                                        4 chiots visibles à la radiographie
                                    </Badge>
                                    <Badge variant="outline" className="border-primary/30 bg-background/75 dark:border-primary/25 dark:bg-white/6">
                                        Naissances prévues du 20 au 26 avril 2026
                                    </Badge>
                                </div>

                                <div className="space-y-4">
                                    <h2 className="max-w-2xl text-2xl font-semibold leading-tight md:text-4xl">
                                        Charm et Beauty attendent 4 chiots
                                    </h2>
                                    <p className="max-w-2xl text-base leading-relaxed text-foreground/80 md:text-lg">
                                        Le mariage entre Charm et Beauty est confirmé à l&apos;élevage. La radiographie a montré 4 chiots, une belle nouvelle que nous avions envie de partager avec les familles qui suivent nos futures portées.
                                    </p>
                                    <p className="max-w-2xl text-base leading-relaxed text-foreground/75">
                                        Les naissances sont attendues durant la semaine du 20 avril 2026. Nous partagerons l&apos;évolution de la portée et les premières nouvelles des bébés dès que tout ce petit monde sera arrivé.
                                    </p>
                                </div>

                                <div className="grid gap-3 sm:grid-cols-3">
                                    {[
                                        { label: "Parents", value: "Charm × Beauty" },
                                        { label: "Radiographie", value: "4 chiots pomsky F4" },
                                        { label: "Naissances", value: "Semaine du 20 avril 2026" },
                                    ].map((item) => (
                                        <div
                                            key={item.label}
                                            className="rounded-2xl border border-primary/10 bg-background/75 p-4 shadow-sm backdrop-blur dark:border-primary/18 dark:bg-white/6"
                                        >
                                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                                                {item.label}
                                            </p>
                                            <p className="mt-2 text-base font-semibold text-foreground">
                                                {item.value}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <div className="rounded-[1.5rem] border border-primary/10 bg-background/70 p-5 shadow-sm dark:border-primary/18 dark:bg-white/6">
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <div className="space-y-2">
                                            <p className="text-sm font-semibold text-foreground">Une portée suivie avec attention</p>
                                            <p className="text-sm leading-relaxed text-muted-foreground">
                                                Cette annonce correspond à une gestation déjà confirmée, avec un suivi vétérinaire en cours et une communication transparente sur l&apos;avancée de la portée.
                                            </p>
                                        </div>
                                        <div className="space-y-2">
                                            <p className="text-sm font-semibold text-foreground">Pour les familles intéressées</p>
                                            <p className="text-sm leading-relaxed text-muted-foreground">
                                                Si vous souhaitez être prévenu des naissances ou recevoir les prochaines nouvelles, vous pouvez nous contacter dès maintenant.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-3 sm:flex-row">
                                    <Link
                                        href="/contact"
                                        className="flex items-center justify-center rounded-md bg-primary px-5 py-3 font-semibold text-white transition hover:bg-primary/85 dark:text-[#5b3a1a]"
                                    >
                                        Être informé de la naissance
                                    </Link>
                                    <div className="flex flex-col gap-3 sm:flex-row">
                                        <Link
                                            href={`/femelles-reproductrices#${getReproductorAnchorId("CHARM")}`}
                                            className="flex items-center justify-center rounded-md border border-primary/25 bg-background/75 px-5 py-3 font-semibold text-primary transition hover:bg-primary/10 dark:border-primary/30 dark:bg-white/6 dark:hover:bg-white/10"
                                        >
                                            Voir Charm
                                        </Link>
                                        <Link
                                            href={`/femelles-reproductrices#${getReproductorAnchorId("BEAUTY")}`}
                                            className="flex items-center justify-center rounded-md border border-primary/25 bg-background/75 px-5 py-3 font-semibold text-primary transition hover:bg-primary/10 dark:border-primary/30 dark:bg-white/6 dark:hover:bg-white/10"
                                        >
                                            Voir Beauty
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="grid gap-4 lg:justify-items-end">
                                <figure className="w-full max-w-md overflow-hidden rounded-[1.5rem] border border-primary/10 bg-background/70 shadow-md dark:border-primary/18 dark:bg-white/6">
                                    <div className="relative aspect-[6/4] w-full">
                                        <div className="absolute left-4 top-5 z-10 -rotate-6 rounded-[1.25rem] border-[3px] border-amber-700 bg-[#fff1c9] px-5 py-2 text-sm font-extrabold uppercase tracking-[0.08em] text-amber-800 shadow-[0_0_0_4px_#d97706] md:text-base">
                                            En cours
                                        </div>
                                        <Image
                                            src="/pages/reproducteurs/mariage-de-charm-et-beauty-pomsky.jpg"
                                            alt="Charm et Beauty, deux Pomsky de l'élevage Royal POMSKY, présentés pour annoncer leur mariage"
                                            fill
                                            className="object-cover"
                                            sizes="(min-width: 1024px) 26rem, (min-width: 640px) 70vw, 100vw"
                                        />
                                    </div>
                                    <figcaption className="p-4 text-sm leading-relaxed text-muted-foreground">
                                        Charm et Beauty, un mariage annoncé à l&apos;élevage pour une future portée suivie de près.
                                    </figcaption>
                                </figure>

                                <figure className="w-full max-w-md overflow-hidden rounded-[1.5rem] border border-primary/10 bg-background/70 shadow-md dark:border-primary/18 dark:bg-white/6">
                                    <div className="relative aspect-[6/4] w-full">
                                        <Image
                                            src="/pages/reproducteurs/echographie-chiot.jpg"
                                            alt="Radiographie confirmant 4 chiots pour la portée de Charm et Beauty"
                                            fill
                                            className="object-cover"
                                            sizes="(min-width: 1024px) 20rem, (min-width: 640px) 45vw, 100vw"
                                        />
                                    </div>
                                    <figcaption className="p-4 text-sm leading-relaxed text-muted-foreground">
                                        Radiographie réalisée : 4 chiots ont été observés. Les naissances sont attendues durant la semaine du 20 avril 2026.
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </section>
                    <section id="portee-sky-sally" className="relative mx-auto mt-12 mb-12 overflow-hidden rounded-[2rem] border border-primary/12 bg-[radial-gradient(circle_at_bottom_right,_rgba(196,86,55,0.12),_transparent_30%),linear-gradient(180deg,_rgba(255,255,255,0.94),_rgba(247,238,234,0.88))] p-8 text-left shadow-sm dark:border-white/10 dark:bg-[linear-gradient(135deg,rgba(39,19,16,0.98),rgba(64,30,25,0.94),rgba(28,13,11,0.98))] dark:shadow-[0_18px_60px_rgba(0,0,0,0.42)] md:p-10">
                        <div className="absolute -right-8 top-12 h-28 w-28 rounded-full bg-primary/8 blur-3xl dark:bg-primary/12" aria-hidden="true" />
                        <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                            <div className="space-y-6">
                                <div className="flex flex-wrap gap-3">
                                    <Badge className="border-0 bg-primary text-primary-foreground hover:bg-primary">
                                        Portée annoncée
                                    </Badge>
                                    <Badge variant="secondary" className="bg-background/85 text-foreground dark:bg-white/8">
                                        Mariage Sky × Sally
                                    </Badge>
                                    <Badge variant="outline" className="border-primary/30 bg-background/75 dark:border-primary/25 dark:bg-white/6">
                                        Portée Pomsky F4
                                    </Badge>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="rounded-full bg-primary/10 p-2.5 text-primary">
                                            <NotebookText className="h-5 w-5 text-2xl text-primary" aria-hidden="true" />
                                        </div>
                                        <div>
                                            <h2 className="text-xl md:text-3xl font-semibold leading-tight">
                                                Une portée Pomsky rare est attendue
                                            </h2>
                                            <p className="text-muted-foreground mt-2">
                                                Issue du mariage entre Sky et Sally, deux reproducteurs parfaitement typés et équilibrés.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid gap-3 sm:grid-cols-3">
                                    {[
                                        { label: "Parents", value: "Sky × Sally" },
                                        { label: "Génération", value: "Pomsky F4" },
                                        { label: "Projet", value: "Portée à venir" },
                                    ].map((item) => (
                                        <div
                                            key={item.label}
                                            className="rounded-2xl border border-primary/10 bg-background/75 p-4 shadow-sm backdrop-blur dark:border-primary/18 dark:bg-white/6"
                                        >
                                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                                                {item.label}
                                            </p>
                                            <p className="mt-2 text-base font-semibold text-foreground">
                                                {item.value}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <div className="rounded-[1.5rem] border border-primary/10 bg-background/70 p-5 shadow-sm dark:border-primary/18 dark:bg-white/6">
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <div className="space-y-2">
                                            <p className="text-sm font-semibold text-foreground">Un mariage suivi avec exigence</p>
                                            <p className="text-sm leading-relaxed text-muted-foreground">
                                                Sky et Sally sont sélectionnés pour leur stabilité, leur morphologie harmonieuse et la cohérence du type recherché dans notre programme.
                                            </p>
                                        </div>
                                        <div className="space-y-2">
                                            <p className="text-sm font-semibold text-foreground">Pour les familles intéressées</p>
                                            <p className="text-sm leading-relaxed text-muted-foreground">
                                                Cette portée s&apos;adresse aux familles qui souhaitent suivre un projet à venir et être informées dès l&apos;ouverture concrète des réservations.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                <p className="text-muted-foreground">
                                    Sky et Sally, sont deux véritables trésors de douceur, reconnus pour leur stabilité émotionnelle,
                                    leur morphologie harmonieuse et leur excellente qualité de lignée.
                                    Leur union donne naissance à des chiots Pomsky F4 à la fois rares, équilibrés et très recherchés.
                                </p>

                                <div className="grid gap-3 md:grid-cols-2">
                                    {[
                                        "gabarits mini et toy soigneusement maîtrisés,",
                                        "chiots bien équilibrés mentalement,",
                                        "look irrésistible : yeux expressifs, oreilles bien placées, pelage fourni,",
                                        "génération Pomsky F4, gage de stabilité et de conformité.",
                                    ].map((item) => (
                                        <div key={item} className="flex gap-4 items-center rounded-2xl border border-primary/10 bg-background/72 px-4 py-3 shadow-sm dark:border-primary/18 dark:bg-white/6">
                                            <div className="rounded-full bg-primary/10 p-2 text-primary" aria-hidden="true">
                                                <NotebookText className="h-4 w-4" />
                                            </div>
                                            <p className="text-muted-foreground">{item}</p>
                                        </div>
                                    ))}
                                </div>

                                <p className="text-muted-foreground">
                                    Ces Pomsky représentent une opportunité rare.
                                    Les réservations sont ouvertes dès maintenant pour les familles sérieuses et engagées.
                                </p>

                                <p className="text-muted-foreground">
                                    Contactez-nous pour recevoir des photos, des vidéos ou organiser une visite.
                                    Nous serons ravies de vous accompagner et de vous guider vers le chiot idéal pour votre projet de vie.
                                </p>

                                <div className="flex flex-col gap-3 sm:flex-row">
                                    <Link
                                        href="/contact"
                                        className="flex items-center justify-center rounded-xl bg-primary px-5 py-3 font-semibold text-white transition hover:bg-primary/80 dark:text-[#5b3a1a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                    >
                                        Rejoindre la liste d&apos;attente
                                    </Link>
                                    <div className="flex flex-col gap-3 sm:flex-row">
                                        <Link
                                            href={`/femelles-reproductrices#${getReproductorAnchorId("SKY")}`}
                                            className="flex items-center justify-center rounded-xl border border-primary/25 bg-background/75 px-5 py-3 font-semibold text-primary transition hover:bg-primary/10 dark:border-primary/30 dark:bg-white/6 dark:hover:bg-white/10"
                                        >
                                            Voir Sky
                                        </Link>
                                        <Link
                                            href={`/femelles-reproductrices#${getReproductorAnchorId("SALLY")}`}
                                            className="flex items-center justify-center rounded-xl border border-primary/25 bg-background/75 px-5 py-3 font-semibold text-primary transition hover:bg-primary/10 dark:border-primary/30 dark:bg-white/6 dark:hover:bg-white/10"
                                        >
                                            Voir Sally
                                        </Link>
                                    </div>
                                </div>
                                </div>
                            </div>

                            <div className="grid gap-4 lg:justify-items-end">
                                <figure className="w-full max-w-md overflow-hidden rounded-[1.5rem] border border-primary/10 bg-background/70 shadow-md dark:border-primary/18 dark:bg-white/6">
                                    <div className="relative aspect-[6/4] w-full">
                                        <div className="absolute left-4 top-5 z-10 -rotate-6 rounded-[1.25rem] border-[3px] border-amber-700 bg-[#fff1c9] px-5 py-2 text-sm font-extrabold uppercase tracking-[0.08em] text-amber-800 shadow-[0_0_0_4px_#d97706] md:text-base">
                                            À venir
                                        </div>
                                        <Image
                                            src="/pages/reproducteurs/mariage-sky-et-sally-pomsky.jpg"
                                            alt="Sky et Sally, présentés pour annoncer un futur mariage Pomsky à l'élevage Royal POMSKY"
                                            fill
                                            className="object-cover"
                                            sizes="(min-width: 1024px) 26rem, (min-width: 640px) 70vw, 100vw"
                                        />
                                    </div>
                                    <figcaption className="p-4 text-sm leading-relaxed text-muted-foreground">
                                        Sky et Sally, un futur mariage envisagé dans nos projets de portées à venir.
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </section>
                    <TikTokFeatureSpotlight
                        id="souvenir-d-adoption"
                        badge="Souvenir d'adoption"
                        title="Un chiot Royal Pomsky, c'est aussi une vraie émotion au moment de la rencontre"
                        description="Il y a des adoptions qui marquent dès les premières secondes. Dans cette scène, on ne voit pas seulement un chiot rejoindre son foyer: on voit un père qui a gardé le secret, des enfants qui découvrent la surprise, puis cet instant très particulier où tout bascule dans la joie. C'est exactement le type de moment qui rappelle qu'un chiot n'arrive jamais seulement dans une maison, mais dans une histoire de famille qui commence."
                        videoTitle="Une surprise de famille autour d'un chiot Royal Pomsky"
                        videoSummary="Un moment simple et sincère qui montre la rencontre réelle entre un chiot et sa future famille."
                        posterSrc="/assets/tiktok/7101955478313356549.optimized.webp"
                        posterAlt="Rencontre entre un chiot Royal POMSKY et sa future famille lors d'une surprise d'adoption"
                        mediaCaption="Une scène de rencontre qui illustre l'émotion du départ et l'entrée du chiot dans sa nouvelle histoire de famille."
                        videoSrc="/assets/tiktok/7101955478313356549.mp4"
                        tiktokHref="https://www.tiktok.com/@royalpomsky/video/7101955478313356549"
                        buttonLabel="Lire le souvenir de famille"
                    />
                    <section className="relative mx-auto overflow-hidden rounded-[2rem] border border-primary/12 bg-[radial-gradient(circle_at_top_left,_rgba(196,86,55,0.12),_transparent_28%),linear-gradient(180deg,_rgba(255,255,255,0.94),_rgba(246,239,235,0.9))] p-8 text-left shadow-sm dark:border-white/10 dark:bg-[linear-gradient(135deg,rgba(39,19,16,0.98),rgba(64,30,25,0.94),rgba(28,13,11,0.98))] dark:shadow-[0_18px_60px_rgba(0,0,0,0.42)] md:p-10">
                        <div className="absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-primary/8 blur-3xl dark:bg-primary/12" aria-hidden="true" />
                        <div className="relative space-y-6">
                            <div className="flex items-start gap-3">
                                <div className="rounded-full bg-primary/10 p-2.5 text-primary">
                                    <Sprout className="h-5 w-5 text-2xl text-primary" />
                                </div>
                                <div>
                                    <Badge variant="secondary" className="mb-3 bg-background/80 dark:bg-white/8">Portées à venir</Badge>
                                    <h2
                                        className="text-xl md:text-3xl font-semibold leading-tight">Ces perles rares prennent le temps de naître</h2>
                                    <p className="text-muted-foreground mt-2">
                                        Chez Royal POMSKY, nous croyons que les plus belles portées ne se précipitent pas.
                                    </p>
                                </div>
                            </div>

                            <p className="text-muted-foreground">
                                Nos chiots sont élevés comme de véritables perles : rares, précieuses, uniques, révélées au bon moment.
                            </p>
                            <p className="text-muted-foreground">
                                Chaque future portée est pensée avec soin :
                            </p>
                            <div className="grid gap-3 md:grid-cols-2">
                                {[
                                    "sélection rigoureuse des lignées,",
                                    "suivi vétérinaire attentif,",
                                    "respect du rythme naturel de nos reproducteurs,",
                                    "accompagnement des familles avant, pendant et après l'adoption.",
                                ].map((item) => (
                                    <div key={item} className="flex gap-4 items-center rounded-2xl border border-primary/10 bg-background/72 px-4 py-3 shadow-sm dark:border-primary/18 dark:bg-white/6">
                                        <div className="rounded-full bg-primary/10 p-2 text-primary">
                                            <Sprout className="h-4 w-4" />
                                        </div>
                                        <p className="text-muted-foreground">{item}</p>
                                    </div>
                                ))}
                            </div>
                            <Link
                                href="/bien-etre-animal"
                                className="flex items-center justify-center rounded-xl bg-primary p-4 font-semibold text-white transition hover:bg-primary/80 dark:text-[#5b3a1a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                            >Voir les conditions de vie des chiots</Link>
                        </div>
                    </section>
                    <FAQSection
                        title="FAQ adoption et vie avec un pomsky"
                        description="Le caractère, l'éducation, la cohabitation et les besoins quotidiens des pomsky."
                        items={faqNosChiots}
                    />
                    <div className="text-right text-xs text-muted-foreground mt-6">
                        Dernière mise à jour : {lastMod}
                    </div>
                </div>
            </div>
        </>
    )
}
