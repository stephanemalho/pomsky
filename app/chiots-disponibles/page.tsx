import Image from "next/image"
import { FAQSection } from "@/components/faq"
import { faqNosChiots } from "@/lib/faq-data"
import { BadgeCheck, Banknote, Calendar, Dog, FileText, Mars, PawPrint, Venus, Weight } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import { buildOpenGraph, buildTwitter, pageMetadata, returnLastmod, siteConfig, sitemapPages } from "@/lib/seo-config"
import { pageContent } from "@/lib/page-content"
import {
    generateBreadcrumbSchema,
    generateFAQSchema,
    generateFutureLittersSchema,
    generateLitterCertificationsSchema,
    generatePuppyCatalogSchema,
    generatePuppyListSchema,
    generateStructuredDataGraph,
    generateWebPageSchema
} from "@/lib/schema-generators"
import { convertFAQsToSchema } from "@/lib/faq-utils"
import { litterCertifications, puppies, type LitterCertification, type Puppy } from "./puppies"
import { Card, CardContent } from "@/components/ui/card"
import ImageCarousel from "@/components/client/carousel/ImageCarousel"
import BreedingRecordModal from "@/components/client/puppies/BreedingRecordModal"
import { Badge } from "@/components/ui/badge"

const puppiesOgImage = "/pages/puppies/Aika-femelle-pomsky-a-vendre.jpg"

const futureLitters: Parameters<typeof generateFutureLittersSchema>[0] = []

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

function getLitterCertificationForPuppy(puppy: Puppy) {
    return litterCertifications.find((certification) =>
        certification.parentLabel === puppy.parents && certification.puppyNames.includes(puppy.name)
    )
}

function formatCertificationBirthDate(certification: LitterCertification) {
    return new Intl.DateTimeFormat("fr-FR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    }).format(new Date(`${certification.litterBirthDate}T12:00:00+01:00`))
}

function getCertificationIdsForPuppy(puppy: Puppy) {
    const certification = getLitterCertificationForPuppy(puppy)

    return certification ? [certification.id] : undefined
}

type PuppyParentProfile = {
    role: "Mère" | "Père"
    name: string
    image: string
    generation: string
    href: string
}

const puppyParentProfilesByLabel: Record<string, PuppyParentProfile[]> = {
    "Parents : CHARM & BEAUTY": [
        {
            role: "Mère",
            name: "Beauty",
            image: "/BEAUTY-pomsky-miniature-f4.webp",
            generation: "Pomsky F4",
            href: `/femelles-reproductrices#${getReproductorAnchorId("BEAUTY")}`,
        },
        {
            role: "Père",
            name: "Charm",
            image: "/pages/reproducteurs/CHARM-pomsky-toy-f3.webp",
            generation: "Pomsky F3",
            href: `/femelles-reproductrices#${getReproductorAnchorId("CHARM")}`,
        },
    ],
    "Parents : SKY & SALLY": [
        {
            role: "Mère",
            name: "Sally",
            image: "/SALLY-pomsky-miniature.webp",
            generation: "Pomsky miniature",
            href: `/femelles-reproductrices#${getReproductorAnchorId("SALLY")}`,
        },
        {
            role: "Père",
            name: "Sky",
            image: "/SKY-pomsky-miniature-f3.webp",
            generation: "Pomsky F3",
            href: `/femelles-reproductrices#${getReproductorAnchorId("SKY")}`,
        },
    ],
    "Parents : INUIT & MOGU": [
        {
            role: "Mère",
            name: "Mogu",
            image: "/MOGU-pomsky-miniature-f4.webp",
            generation: "Pomsky F4",
            href: `/femelles-reproductrices#${getReproductorAnchorId("MOGU")}`,
        },
        {
            role: "Père",
            name: "Inuit",
            image: "/INUIT-pomsky-toy-f5.webp",
            generation: "Pomsky F5",
            href: `/femelles-reproductrices#${getReproductorAnchorId("INUIT")}`,
        },
    ],
    "Parents : CHARM & ALOU": [
        {
            role: "Mère",
            name: "Alou",
            image: "/ALOU-pomsky-toy-f3.webp",
            generation: "Pomsky F3",
            href: `/femelles-reproductrices#${getReproductorAnchorId("ALOU")}`,
        },
        {
            role: "Père",
            name: "Charm",
            image: "/pages/reproducteurs/CHARM-pomsky-toy-f3.webp",
            generation: "Pomsky F3",
            href: `/femelles-reproductrices#${getReproductorAnchorId("CHARM")}`,
        },
    ],
    "Parents : PWEEK & CHARM": [
        {
            role: "Mère",
            name: "Pweek",
            image: "/PWEEK-pomsky-toy-f3.webp",
            generation: "Pomsky F3",
            href: `/femelles-reproductrices#${getReproductorAnchorId("PWEEK")}`,
        },
        {
            role: "Père",
            name: "Charm",
            image: "/pages/reproducteurs/CHARM-pomsky-toy-f3.webp",
            generation: "Pomsky F3",
            href: `/femelles-reproductrices#${getReproductorAnchorId("CHARM")}`,
        },
    ],
}

function getPuppyParentProfiles(puppy: Puppy) {
    return puppyParentProfilesByLabel[puppy.parents] ?? []
}

export default function NosChiotsPage() {
    // Schémas JSON-LD
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Accueil", url: "/" },
        { name: "Nos chiots", url: siteConfig.pages.puppies },
    ], siteConfig.pages.puppies)
    const faqSchema = generateFAQSchema(convertFAQsToSchema(faqNosChiots), siteConfig.pages.puppies)
    const pageLastModValue = sitemapPages.find((page) => page.url === siteConfig.pages.puppies)?.lastmod
    const visiblePuppies = puppies.filter((puppy) => !puppy.isAdopted)
    const availablePuppies = puppies.filter((puppy) => !puppy.isReserved && !puppy.isAdopted)
    const puppyListSchema = availablePuppies.length > 0
        ? generatePuppyListSchema(availablePuppies)
        : null
    const puppyCatalogSchema = generatePuppyCatalogSchema(
        visiblePuppies.map((puppy) => ({
            ...puppy,
            status: getPuppyStatus(puppy),
            url: `${siteConfig.pages.puppies}#${getPuppyAnchorId(puppy.name)}`,
            interestFormUrl: puppy.linkTo,
            certificationIds: getCertificationIdsForPuppy(puppy),
        }))
    )
    const futureLittersSchema = futureLitters.length > 0
        ? generateFutureLittersSchema(futureLitters)
        : null
    const litterCertificationsSchema = generateLitterCertificationsSchema(litterCertifications)
    const webPageSchema = generateWebPageSchema({
        name: pageMetadata.puppies.title,
        description: pageMetadata.puppies.description,
        url: siteConfig.pages.puppies,
        dateModified: pageLastModValue,
        about: ["Chiots Pomsky disponibles", "Adoption Pomsky", "Élevage Pomsky"]
    })
    const structuredDataSchema = generateStructuredDataGraph([
        breadcrumbSchema,
        faqSchema,
        puppyListSchema,
        puppyCatalogSchema,
        futureLittersSchema,
        litterCertificationsSchema,
        webPageSchema
    ])
    const lastMod = returnLastmod(siteConfig.pages.puppies)

    return (
        <>
            {/* JSON-LD Schemas */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataSchema) }}
            />
            <div className="pb-16 ">
                <div className="container mx-auto my-12">
                    <section className="text-center space-y-4 mb-12">
                        <h1
                            className="text-xl md:text-3xl font-bold">{pageContent.puppies.h1}</h1>
                        <p className="text-md text-muted-foreground max-w-3xl mx-auto">
                            {pageContent.puppies.descriptionSecondary}
                        </p>
                    </section>
                    {/* <NoAvailable /> */}
                    <section className="relative mx-auto mb-12 overflow-hidden rounded-4xl border border-primary/12 bg-[radial-gradient(circle_at_top_right,rgba(196,86,55,0.12),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.92),rgba(248,240,236,0.86))] p-6 text-center shadow-sm dark:border-white/10 dark:bg-[linear-gradient(135deg,rgba(39,19,16,0.98),rgba(64,30,25,0.94),rgba(28,13,11,0.98))] dark:shadow-[0_18px_60px_rgba(0,0,0,0.42)] md:p-10">
                        <div className="absolute -left-10 top-8 h-28 w-28 rounded-full bg-primary/8 blur-3xl dark:bg-primary/12" aria-hidden="true" />
                        <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-primary/8 blur-3xl dark:bg-primary/12" aria-hidden="true" />
                        <h2 className="text-xl md:text-3xl font-semibold leading-tight">
                            Liste des chiots actuellement disponibles à l&apos;adoption
                        </h2>
                        <div className="relative mx-auto my-10 w-24 h-1 rounded-full bg-primary" aria-hidden="true" />
                        <p className="text-md text-muted-foreground max-w-3xl mx-auto">
                            {pageContent.puppies.description}
                        </p>
                        <div className="grid gap-10 my-12">
                            {visiblePuppies.map((puppy, index) => {
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
                                const litterCertification = getLitterCertificationForPuppy(puppy)
                                const availabilityLabel =
                                    puppyStatus === "available"
                                        ? "Départ possible"
                                        : puppyStatus === "reserved"
                                            ? "Statut"
                                            : "Adoption"
                                const parentProfiles = getPuppyParentProfiles(puppy)

                                return (
                                    <Card
                                        key={puppy.name}
                                        className={`relative overflow-hidden rounded-[1.75rem] border border-primary/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.84),rgba(246,237,233,0.76))] p-0 shadow-sm dark:border-white/10 dark:bg-[linear-gradient(135deg,rgba(39,19,16,0.98),rgba(64,30,25,0.94),rgba(28,13,11,0.98))] dark:shadow-[0_18px_60px_rgba(0,0,0,0.32)] md:p-5 ${cardStatusClasses}`}
                                    >
                                        <CardContent className="p-0">
                                            {isUnavailable ? (
                                                <div
                                                    className={`absolute right-4 top-4 z-20 rotate-6 rounded-md border-2 px-4 py-1 text-sm font-extrabold uppercase tracking-wider ${ribbonClasses}`}
                                                >
                                                    {ribbonLabel}
                                                </div>
                                            ) : null}
                                            <div className={`grid items-start gap-6 xl:grid-cols-[minmax(360px,0.82fr)_minmax(640px,1.18fr)] ${index % 2 === 1 ? "xl:grid-flow-col-dense" : ""}`}>
                                                <ImageCarousel
                                                    className={`mx-auto w-full max-w-[620px] ${index % 2 === 1 ? "xl:order-2" : ""}`}
                                                    images={puppy.images.map((image) => image.src)}
                                                    alt={"Photos du chiot Pomsky " + puppy.name}
                                                    caption={`Photos récentes de ${puppy.name}, pour découvrir son évolution, son type et son expression.`}
                                                    priority={index === 0}
                                                    sizes="(min-width: 1280px) 38vw, 100vw"
                                                    ratioClassName="aspect-[4/5] sm:aspect-[5/4] xl:aspect-[4/5]"
                                                />
                                                <div className={`mx-auto w-full max-w-4xl min-w-0 space-y-5 p-6 text-left md:p-8 xl:max-w-none xl:py-4 ${index % 2 === 1 ? "xl:order-1" : ""}`}>
                                                    <div className="flex flex-wrap items-center gap-2">
                                                        <Badge variant="secondary" className="bg-background/80 dark:bg-white/8">
                                                            <PawPrint className="h-4 w-4 mr-1" />
                                                            {puppy.coat}
                                                        </Badge>
                                                        <Badge variant="outline" className="min-w-0 whitespace-normal wrap-break-word border-primary/20 bg-background/55 dark:border-primary/25 dark:bg-white/5">
                                                            {puppy.color}
                                                        </Badge>
                                                    </div>
                                                    <div className="space-y-2 text-center">
                                                        <h3 id={puppyAnchorId} className="scroll-mt-28 text-2xl font-bold">{puppy.name}</h3>
                                                        <p className="text-muted-foreground">{puppy.description}</p>
                                                    </div>
                                                    <dl className="overflow-hidden rounded-3xl border border-primary/10 bg-background/55 text-left text-sm shadow-sm dark:border-primary/18 dark:bg-white/5">
                                                        <div className="grid gap-1 px-4 py-3 sm:grid-cols-[minmax(140px,0.7fr)_1fr] sm:items-center">
                                                            <dt className="flex items-center gap-2 font-semibold text-muted-foreground">
                                                                <Dog className="h-4 w-4 text-primary" aria-hidden="true" />
                                                                Sexe
                                                            </dt>
                                                            <dd className="text-foreground sm:text-right">{puppy.sexe}</dd>
                                                        </div>
                                                        <div className="grid gap-2 border-t border-primary/8 px-4 py-3 sm:grid-cols-[minmax(140px,0.7fr)_1fr] sm:items-center dark:border-primary/15">
                                                            <dt className="flex items-center gap-2 font-semibold text-muted-foreground">
                                                                <FileText className="h-4 w-4 text-primary" aria-hidden="true" />
                                                                Fiche administrative
                                                            </dt>
                                                            <dd className="flex min-w-0 items-center justify-between gap-3 text-foreground sm:text-right">
                                                                <span className="min-w-0">
                                                                    {litterCertification ? (
                                                                        <>
                                                                            <span>{litterCertification.certificationIdentification}</span>
                                                                            <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
                                                                                Portée née le {formatCertificationBirthDate(litterCertification)}
                                                                            </span>
                                                                        </>
                                                                    ) : (
                                                                        <span>Fiche administrative en cours de finalisation</span>
                                                                    )}
                                                                </span>
                                                                {litterCertification ? (
                                                                    <BreedingRecordModal
                                                                        imageSrc={litterCertification.imageSrc}
                                                                        title={litterCertification.name}
                                                                        description={litterCertification.description}
                                                                    />
                                                                ) : null}
                                                            </dd>
                                                        </div>
                                                        <div className="grid gap-1 border-t border-primary/8 px-4 py-3 sm:grid-cols-[minmax(140px,0.7fr)_1fr] sm:items-center dark:border-primary/15">
                                                            <dt className="flex items-center gap-2 font-semibold text-muted-foreground">
                                                                <Calendar className="h-4 w-4 text-primary" aria-hidden="true" />
                                                                {availabilityLabel}
                                                            </dt>
                                                            <dd className="text-foreground sm:text-right">{puppy.readyDate}</dd>
                                                        </div>
                                                        <div className="grid gap-1 border-t border-primary/8 px-4 py-3 sm:grid-cols-[minmax(140px,0.7fr)_1fr] sm:items-center dark:border-primary/15">
                                                            <dt className="flex items-center gap-2 font-semibold text-muted-foreground">
                                                                <PawPrint className="h-4 w-4 text-primary" aria-hidden="true" />
                                                                Naissance
                                                            </dt>
                                                            <dd className="text-foreground sm:text-right">{puppy.age}</dd>
                                                        </div>
                                                        <div className="grid gap-1 border-t border-primary/8 px-4 py-3 sm:grid-cols-[minmax(140px,0.7fr)_1fr] sm:items-center dark:border-primary/15">
                                                            <dt className="flex items-center gap-2 font-semibold text-muted-foreground">
                                                                <Weight className="h-4 w-4 text-primary" aria-hidden="true" />
                                                                Poids estimé
                                                            </dt>
                                                            <dd className="text-foreground sm:text-right">{puppy.weight}</dd>
                                                        </div>
                                                        {!isUnavailable ? (
                                                            <div className="grid gap-1 border-t border-primary/8 px-4 py-3 sm:grid-cols-[minmax(140px,0.7fr)_1fr] sm:items-center dark:border-primary/15">
                                                                <dt className="flex items-center gap-2 font-semibold text-muted-foreground">
                                                                    <BadgeCheck className="h-4 w-4 text-primary" aria-hidden="true" />
                                                                    Pédigrée
                                                                </dt>
                                                                <dd className="text-foreground sm:text-right">Fédération Française du Pomsky</dd>
                                                            </div>
                                                        ) : null}
                                                        {typeof puppy.price === "number" ? (
                                                            <div className="grid gap-1 border-t border-primary/8 px-4 py-3 sm:grid-cols-[minmax(140px,0.7fr)_1fr] sm:items-center dark:border-primary/15">
                                                                <dt className="flex items-center gap-2 font-semibold text-muted-foreground">
                                                                    <Banknote className={`h-4 w-4 ${priceToneClass}`} aria-hidden="true" />
                                                                    Prix
                                                                </dt>
                                                                <dd className={`sm:text-right ${priceTextClass}`}>
                                                                    <span className="block text-lg font-semibold">
                                                                        {formatPuppyPrice(puppy.price, puppy.priceCurrency ?? "EUR")}
                                                                    </span>
                                                                    <span className="mt-1 block text-xs text-muted-foreground">
                                                                        {puppy.priceIncludes}
                                                                    </span>
                                                                </dd>
                                                            </div>
                                                        ) : null}
                                                    </dl>
                                                    {parentProfiles.length > 0 ? (
                                                        <section
                                                            aria-labelledby={`${puppyAnchorId}-parents-title`}
                                                            className="space-y-3 rounded-3xl border border-primary/10 bg-background/45 p-4 text-left dark:border-primary/18 dark:bg-white/5"
                                                        >
                                                            <h4
                                                                id={`${puppyAnchorId}-parents-title`}
                                                                className="text-xs font-bold uppercase tracking-[0.24em] text-primary/75"
                                                            >
                                                                Ses parents
                                                            </h4>
                                                            <div className="grid gap-3 min-[900px]:grid-cols-2 xl:grid-cols-2">
                                                                {parentProfiles.map((parent) => {
                                                                    const ParentIcon = parent.role === "Mère" ? Venus : Mars
                                                                    const iconClassName = parent.role === "Mère"
                                                                        ? "text-rose-500"
                                                                        : "text-sky-500"

                                                                    return (
                                                                        <Link
                                                                            key={`${puppy.name}-${parent.role}-${parent.name}`}
                                                                            href={parent.href}
                                                                            className="group flex min-w-0 items-center gap-3 rounded-2xl border border-primary/12 bg-background/72 p-3 transition hover:border-primary/30 hover:bg-primary/8 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:border-primary/20 dark:bg-white/6 dark:hover:bg-white/10"
                                                                            aria-label={`Voir la fiche de ${parent.name}, ${parent.role.toLowerCase()} de ${puppy.name}`}
                                                                        >
                                                                            <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-primary/15 bg-muted shadow-sm group-hover:border-primary/30">
                                                                                <Image
                                                                                    src={parent.image}
                                                                                    alt={`${parent.name}, ${parent.role.toLowerCase()} de ${puppy.name}`}
                                                                                    fill
                                                                                    className="object-cover"
                                                                                    sizes="64px"
                                                                                />
                                                                            </span>
                                                                            <span className="min-w-0">
                                                                                <span className="flex items-center gap-1.5 text-sm font-semibold text-muted-foreground">
                                                                                    <ParentIcon className={`h-4 w-4 ${iconClassName}`} aria-hidden="true" />
                                                                                    {parent.role}
                                                                                </span>
                                                                                <span className="block truncate text-lg font-bold text-foreground">
                                                                                    {parent.name}
                                                                                </span>
                                                                                <span className="block truncate text-xs text-muted-foreground">
                                                                                    {parent.generation}
                                                                                </span>
                                                                            </span>
                                                                        </Link>
                                                                    )
                                                                })}
                                                            </div>
                                                        </section>
                                                    ) : null}
                                                    <div className="flex flex-wrap gap-2">
                                                        {puppy.highlights.map((item) => (
                                                            <Badge key={item} variant="secondary">
                                                                {item}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                    <div className="mx-auto mb-2 flex w-full flex-col gap-3 min-[900px]:max-w-2xl min-[900px]:flex-row min-[900px]:justify-center xl:max-w-none">
                                                        {isUnavailable ? (
                                                            <span
                                                                aria-disabled="true"
                                                                className={`cursor-not-allowed rounded-xl border px-4 py-2 text-center font-medium opacity-95 ${statusPillClasses}`}
                                                            >
                                                                {statusPillLabel}
                                                            </span>
                                                        ) : (
                                                            <div className="flex w-full flex-col gap-3 min-[900px]:flex-row min-[900px]:justify-center">
                                                                <Link
                                                                    href="/contact"
                                                                    className="rounded-xl border border-primary/25 bg-background/70 px-4 py-2 text-center text-primary shadow-xs transition hover:bg-primary/10 dark:border-primary/30 dark:bg-white/6 dark:hover:bg-white/10"
                                                                >
                                                                    Contacter l&apos;élevage
                                                                </Link>
                                                                <a
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="rounded-xl bg-primary px-4 py-2 text-center text-primary-foreground shadow-xs transition hover:bg-primary/90 min-[900px]:min-w-[340px]"
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
                    <section className="relative mx-auto mb-12 overflow-hidden rounded-4xl border border-primary/12 bg-[radial-gradient(circle_at_top_right,rgba(196,86,55,0.12),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.92),rgba(248,240,236,0.86))] p-6 text-center shadow-sm dark:border-white/10 dark:bg-[linear-gradient(135deg,rgba(39,19,16,0.98),rgba(64,30,25,0.94),rgba(28,13,11,0.98))] dark:shadow-[0_18px_60px_rgba(0,0,0,0.42)] md:p-10">
                        <Badge className="border-0 bg-primary text-primary-foreground hover:bg-primary">
                            Adoption accompagnée
                        </Badge>
                        <div className="relative mx-auto my-10 w-24 h-1 rounded-full bg-primary" aria-hidden="true" />
                        <h2 className="text-xl md:text-3xl font-semibold leading-tight">
                            Un processus d&apos;adoption transparent et accompagné
                        </h2>
                        <p className="mx-auto max-w-3xl text-muted-foreground">
                            Chaque adoption chez Royal POMSKY s&apos;inscrit dans un parcours réfléchi : échanges préalables avec les familles, conseils personnalisés, transparence sur les lignées et accompagnement avant et après l&apos;arrivée du chiot. Cette approche garantit une adoption durable et respectueuse du bien-être animal.
                        </p>
                        <div className="grid gap-3 mt-12 md:grid-cols-3">
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
