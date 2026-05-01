import Image from "next/image"
import { FAQSection } from "@/components/faq"
import { faqNosChiots } from "@/lib/faq-data"
import { BadgeCheck, Banknote, Calendar, Dog, Heart, NotebookText, PawPrint, Sprout, Weight } from "lucide-react"
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

const futureLitters = [
    {
        name: "Portée de Sky et Sally - Pomsky F4",
        description:
            "Portée née chez Royal POMSKY le 28 avril 2026, issue du mariage entre Sky et Sally. Sept chiots sont désormais suivis à l'élevage et présentés sur cette page.",
        url: `${siteConfig.pages.puppies}#portee-sky-sally`,
        image: "/pages/reproducteurs/mariage-sky-et-sally-pomsky.jpg",
        parents: "Sky et Sally",
        generation: "Pomsky F4+",
        stage: "Portée née",
        observedCount: "7 chiots nés le 28 avril 2026",
    },
    {
        name: "Portée d'Inuit et Mogu",
        description:
            "Gestation confirmée chez Royal POMSKY pour le mariage entre Inuit et Mogu. L'échographie a confirmé 4 chiots et la portée est suivie à l'élevage.",
        url: `${siteConfig.pages.puppies}#portee-inuit-mogu`,
        image: "/pages/reproducteurs/mariage-de-inuit-et-mogu.jpg",
        parents: "Inuit et Mogu",
        stage: "Gestation confirmée",
        observedCount: "4 chiots observés à l'échographie",
    },
    {
        name: "Projet de portée Charm et Alou",
        description:
            "Projet de portée à venir chez Royal POMSKY, issu du mariage entre Charm et Alou. Cette future portée s'adresse aux familles souhaitant suivre l'ouverture prochaine des réservations.",
        url: `${siteConfig.pages.puppies}#projet-charm-alou`,
        image: "/pages/reproducteurs/mariage-de-charm-et-alou.jpg",
        parents: "Charm et Alou",
        stage: "Portée annoncée",
    },
    {
        name: "Projet de portée Charm et Puik",
        description:
            "Projet de portée à venir chez Royal POMSKY, issu du mariage entre Charm et Puik. Cette future portée s'adresse aux familles souhaitant suivre l'ouverture prochaine des réservations.",
        url: `${siteConfig.pages.puppies}#projet-charm-puik`,
        image: "/pages/reproducteurs/mariage-de-charm-et-puik.jpg",
        parents: "Charm et Puik",
        stage: "Portée annoncée",
    },
]

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

function getCertificationParentLine(certification: LitterCertification) {
    return certification.parents
        .map((parent) => `${parent.role} : ${parent.name} (${parent.generation}, ${parent.pedigree})`)
        .join(" · ")
}

function getCertificationIdsForPuppy(puppy: Puppy) {
    const certification = getLitterCertificationForPuppy(puppy)

    return certification ? [certification.id] : undefined
}

const breedingCtaPanelClass =
    "rounded-3xl border border-primary/18 bg-primary/[0.07] p-4 shadow-sm dark:border-primary/25 dark:bg-primary/[0.12]"
const breedingPrimaryCtaClass =
    "flex min-h-12 items-center justify-center rounded-xl bg-primary px-5 py-3 text-center font-semibold text-white shadow-[0_14px_34px_rgba(196,86,55,0.22)] transition hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-[0_18px_38px_rgba(196,86,55,0.28)] dark:text-[#5b3a1a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
const breedingSecondaryCtaClass =
    "flex min-h-12 items-center justify-center rounded-xl border border-primary/30 bg-background/88 px-5 py-3 text-center font-semibold text-primary transition hover:bg-primary/10 dark:border-primary/30 dark:bg-white/8 dark:hover:bg-white/12"

export default function NosChiotsPage() {
    // Schémas JSON-LD
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Accueil", url: "/" },
        { name: "Nos chiots", url: siteConfig.pages.puppies },
    ], siteConfig.pages.puppies)
    const faqSchema = generateFAQSchema(convertFAQsToSchema(faqNosChiots), siteConfig.pages.puppies)
    const pageLastModValue = sitemapPages.find((page) => page.url === siteConfig.pages.puppies)?.lastmod
    const availablePuppies = puppies.filter((puppy) => !puppy.isReserved && !puppy.isAdopted)
    const puppyListSchema = availablePuppies.length > 0
        ? generatePuppyListSchema(availablePuppies)
        : null
    const puppyCatalogSchema = generatePuppyCatalogSchema(
        availablePuppies.map((puppy) => ({
            ...puppy,
            status: getPuppyStatus(puppy),
            url: `${siteConfig.pages.puppies}#${getPuppyAnchorId(puppy.name)}`,
            interestFormUrl: puppy.linkTo,
            certificationIds: getCertificationIdsForPuppy(puppy),
        }))
    )
    const futureLittersSchema = generateFutureLittersSchema(futureLitters)
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
                            {availablePuppies.map((puppy, index) => {
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
                                const hasCharmBeautyAdministrativeRecord = puppy.parents === "Parents : CHARM & BEAUTY"
                                const litterCertification = getLitterCertificationForPuppy(puppy)
                                const availabilityLabel =
                                    puppyStatus === "available"
                                        ? "Départ possible"
                                        : puppyStatus === "reserved"
                                            ? "Statut"
                                            : "Adoption"

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
                                            <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? "md:grid-flow-col-dense" : ""}`}>
                                                <ImageCarousel
                                                    className={index % 2 === 1 ? "md:order-2" : undefined}
                                                    images={puppy.images.map((image) => image.src)}
                                                    alt={"Photos du chiot Pomsky " + puppy.name}
                                                    caption={`Photos récentes de ${puppy.name}, pour découvrir son évolution, son type et son expression.`}
                                                    priority={index === 0}
                                                    sizes="(min-width: 1024px) 50vw, (min-width: 768px) 50vw, 100vw"
                                                    ratioClassName="aspect-[4/5] sm:aspect-4/3"
                                                />
                                                <div className={`p-8 space-y-5 flex flex-col justify-center min-w-0 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                                                    <div className="flex flex-wrap items-center gap-2">
                                                        <Badge variant="secondary" className="bg-background/80 dark:bg-white/8">
                                                            <PawPrint className="h-4 w-4 mr-1" />
                                                            {puppy.coat}
                                                        </Badge>
                                                        <Badge variant="outline" className="min-w-0 whitespace-normal wrap-break-word border-primary/20 bg-background/55 dark:border-primary/25 dark:bg-white/5">
                                                            {puppy.color}
                                                        </Badge>
                                                    </div>
                                                    <div className="space-y-2">
                                                        <h3 id={puppyAnchorId} className="scroll-mt-28 text-2xl font-bold">{puppy.name}</h3>
                                                        <p className="text-muted-foreground">{puppy.description}</p>
                                                    </div>
                                                    <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                                                        <div className="rounded-2xl border border-primary/8 bg-background/58 px-3 py-2 text-muted-foreground dark:border-primary/15 dark:bg-white/5">
                                                            <dt className="sr-only">Sexe</dt>
                                                            <dd className="flex items-center gap-2">
                                                                <Dog className="h-4 w-4 text-primary" aria-hidden="true" />
                                                                {puppy.sexe}
                                                            </dd>
                                                        </div>
                                                        <div className="rounded-2xl border border-primary/8 bg-background/58 px-3 py-2 text-muted-foreground dark:border-primary/15 dark:bg-white/5">
                                                            <dt className="sr-only">Parents</dt>
                                                            <dd className="flex items-center gap-2">
                                                                <Heart className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                                                                <span className="flex min-w-0 flex-1 items-center justify-between gap-3">
                                                                    <span className="min-w-0">
                                                                    <span>{puppy.parents}</span>
                                                                    {litterCertification ? (
                                                                        <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
                                                                            {litterCertification.certificationIdentification} · portée née le 24/04/2026 · {getCertificationParentLine(litterCertification)}
                                                                        </span>
                                                                    ) : null}
                                                                    </span>
                                                                    {hasCharmBeautyAdministrativeRecord ? (
                                                                        <BreedingRecordModal
                                                                            imageSrc={litterCertification?.imageSrc ?? "/pages/puppies/fiche-administrative-mariage-pomsky-f4-et-pomsky-f3.jpg"}
                                                                            title={litterCertification?.name ?? "Fiche administrative du mariage Charm et Beauty"}
                                                                            description={litterCertification?.description ?? "Document récapitulatif du mariage à l'origine de cette portée, consultable en grand format."}
                                                                        />
                                                                    ) : null}
                                                                </span>
                                                            </dd>
                                                        </div>
                                                        <div className="rounded-2xl border border-primary/8 bg-background/58 px-3 py-2 text-muted-foreground dark:border-primary/15 dark:bg-white/5">
                                                            <dt className="sr-only">{availabilityLabel}</dt>
                                                            <dd className="flex items-center gap-2">
                                                                <Calendar className="h-4 w-4 text-primary" aria-hidden="true" />
                                                                {puppy.readyDate}
                                                            </dd>
                                                        </div>
                                                        <div className="rounded-2xl border border-primary/8 bg-background/58 px-3 py-2 text-muted-foreground dark:border-primary/15 dark:bg-white/5">
                                                            <dt className="sr-only">Âge</dt>
                                                            <dd className="flex items-center gap-2">
                                                                <PawPrint className="h-4 w-4 text-primary" aria-hidden="true" />
                                                                {puppy.age}
                                                            </dd>
                                                        </div>
                                                        <div className="rounded-2xl border border-primary/8 bg-background/58 px-3 py-2 text-muted-foreground dark:border-primary/15 dark:bg-white/5">
                                                            <dt className="sr-only">Poids</dt>
                                                            <dd className="flex items-center gap-2">
                                                                <Weight className="h-4 w-4 text-primary" aria-hidden="true" />
                                                                {puppy.weight}
                                                            </dd>
                                                        </div>
                                                        {!isUnavailable ? (
                                                            <div className="rounded-2xl border border-primary/8 bg-background/58 px-3 py-2 text-muted-foreground dark:border-primary/15 dark:bg-white/5">
                                                                <dt className="sr-only">Pédigré</dt>
                                                                <dd className="flex items-center gap-2">
                                                                    <BadgeCheck className="h-4 w-4 min-h-4 min-w-4 text-primary" aria-hidden="true" />
                                                                    Fédération Française du Pomsky
                                                                </dd>
                                                            </div>
                                                        ) : null}
                                                        {typeof puppy.price === "number" ? (
                                                            <div className="rounded-2xl border border-primary/8 bg-background/58 px-3 py-2 text-muted-foreground sm:col-span-2 dark:border-primary/15 dark:bg-white/5">
                                                                <dt className="sr-only">Prix</dt>
                                                                <dd
                                                                    className={`flex gap-2 items-center text-lg font-semibold ${priceTextClass}`}
                                                                >
                                                                    <Banknote
                                                                        className={`min-h-4 min-w-4 ${priceToneClass}`}
                                                                        aria-hidden="true"
                                                                    />
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

                    <section id="portee-inuit-mogu" className="relative mx-auto mt-12 mb-12 overflow-hidden rounded-4xl border border-primary/12 bg-[radial-gradient(circle_at_bottom_right,rgba(196,86,55,0.12),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.94),rgba(247,238,234,0.88))] p-8 text-left shadow-sm dark:border-white/10 dark:bg-[linear-gradient(135deg,rgba(39,19,16,0.98),rgba(64,30,25,0.94),rgba(28,13,11,0.98))] dark:shadow-[0_18px_60px_rgba(0,0,0,0.42)] md:p-10">
                        <div className="absolute -right-8 top-12 h-28 w-28 rounded-full bg-primary/8 blur-3xl dark:bg-primary/12" aria-hidden="true" />
                        <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                            <div className="space-y-6">
                                <div className="flex flex-wrap gap-3">
                                    <Badge className="border-0 bg-primary text-primary-foreground hover:bg-primary">
                                        Gestation confirmée
                                    </Badge>
                                    <Badge variant="secondary" className="bg-background/85 text-foreground dark:bg-white/8">
                                        4 chiots visibles à l&apos;échographie
                                    </Badge>
                                    <Badge variant="outline" className="border-primary/30 bg-background/75 dark:border-primary/25 dark:bg-white/6">
                                        Portée suivie à l&apos;élevage
                                    </Badge>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="rounded-full bg-primary/10 p-2.5 text-primary">
                                            <NotebookText className="h-5 w-5 text-2xl text-primary" aria-hidden="true" />
                                        </div>
                                        <div>
                                            <h2 className="text-xl md:text-3xl font-semibold leading-tight">
                                                Inuit et Mogu attendent eux aussi une portée suivie de près
                                            </h2>
                                            <p className="text-muted-foreground mt-2">
                                                Le mariage entre Inuit et Mogu est confirmé à l&apos;élevage. L&apos;échographie a mis en évidence 4 chiots, et la portée bénéficie d&apos;un suivi attentif au quotidien.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid gap-3 sm:grid-cols-3">
                                    {[
                                        { label: "Parents", value: "Inuit × Mogu" },
                                        { label: "Échographie", value: "4 chiots observés" },
                                        { label: "Suivi", value: "Gestation confirmée" },
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

                                <div className="rounded-3xl border border-primary/10 bg-background/70 p-5 shadow-sm dark:border-primary/18 dark:bg-white/6">
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <div className="space-y-2">
                                            <p className="text-sm font-semibold text-foreground">Une portée suivie avec attention</p>
                                            <p className="text-sm leading-relaxed text-muted-foreground">
                                                Cette annonce correspond à une gestation confirmée, avec un suivi vétérinaire en cours et une communication régulière autour de l&apos;évolution de la portée.
                                            </p>
                                        </div>
                                        <div className="space-y-2">
                                            <p className="text-sm font-semibold text-foreground">Pour les familles intéressées</p>
                                            <p className="text-sm leading-relaxed text-muted-foreground">
                                                Si vous souhaitez suivre cette portée et recevoir les prochaines nouvelles, vous pouvez rejoindre la liste d&apos;attente dès maintenant.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <p className="text-muted-foreground">
                                        Inuit, mâle toy chocolat et blanc au masque bien affirmé, et Mogu, femelle miniature noire et blanche au masque Fleur de Lys, composent un duo particulièrement complémentaire par leur type, leur équilibre et leur qualité de lignée.
                                    </p>

                                    <div className="grid gap-3 md:grid-cols-2">
                                        {[
                                            "alliance de formats toy et miniature soigneusement travaillés,",
                                            "chiots attendus avec de belles expressions husky et une morphologie harmonieuse,",
                                            "tempéraments suivis avec attention dans la continuité de notre programme,",
                                            "4 chiots déjà visibles à l'échographie.",
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
                                        Cette portée représente une belle opportunité pour les familles qui souhaitent suivre son évolution dès maintenant et se positionner sur une future adoption.
                                    </p>

                                    <p className="text-muted-foreground">
                                        Contactez-nous si vous souhaitez recevoir les prochaines nouvelles, poser vos questions ou être orienté vers la portée la plus adaptée à votre projet de vie.
                                    </p>

                                    <div className={breedingCtaPanelClass}>
                                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary/80">
                                            Suivre Cette Portée
                                        </p>
                                        <div className="flex flex-col gap-3 sm:flex-row">
                                            <a
                                                href="https://forms.gle/7a9kRVTysftzNGwS7"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={breedingPrimaryCtaClass}
                                            >
                                                Rejoindre la liste d&apos;attente
                                            </a>
                                            <div className="flex flex-col gap-3 sm:flex-row">
                                                <Link
                                                    href={`/femelles-reproductrices#${getReproductorAnchorId("INUIT")}`}
                                                    className={breedingSecondaryCtaClass}
                                                >
                                                    Voir Inuit
                                                </Link>
                                                <Link
                                                    href={`/femelles-reproductrices#${getReproductorAnchorId("MOGU")}`}
                                                    className={breedingSecondaryCtaClass}
                                                >
                                                    Voir Mogu
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid gap-4 lg:justify-items-end">
                                <figure className="w-full max-w-md overflow-hidden rounded-3xl border border-primary/10 bg-background/70 shadow-md dark:border-primary/18 dark:bg-white/6">
                                    <div className="relative aspect-6/4 w-full">
                                        <div className="absolute left-4 top-5 z-10 -rotate-6 rounded-[1.25rem] border-[3px] border-amber-700 bg-[#fff1c9] px-5 py-2 text-sm font-extrabold uppercase tracking-[0.08em] text-amber-800 shadow-[0_0_0_4px_#d97706] md:text-base">
                                            En cours
                                        </div>
                                        <Image
                                            src="/pages/reproducteurs/mariage-de-inuit-et-mogu.jpg"
                                            alt="Inuit et Mogu, présentés pour suivre leur portée Pomsky à l'élevage Royal POMSKY"
                                            fill
                                            className="object-cover"
                                            sizes="(min-width: 1024px) 26rem, (min-width: 640px) 70vw, 100vw"
                                        />
                                    </div>
                                    <figcaption className="p-4 text-sm leading-relaxed text-muted-foreground">
                                        Inuit et Mogu, un mariage suivi à l&apos;élevage pour une portée en cours.
                                    </figcaption>
                                </figure>

                                <figure className="w-full max-w-md overflow-hidden rounded-3xl border border-primary/10 bg-background/70 shadow-md dark:border-primary/18 dark:bg-white/6">
                                    <div className="relative aspect-6/4 w-full">
                                        <Image
                                            src="/pages/reproducteurs/echographie-de-inuit-et-mogu.jpg"
                                            alt="Échographie de suivi pour la portée d'Inuit et Mogu"
                                            fill
                                            className="object-cover"
                                            sizes="(min-width: 1024px) 20rem, (min-width: 640px) 45vw, 100vw"
                                        />
                                    </div>
                                    <figcaption className="p-4 text-sm leading-relaxed text-muted-foreground">
                                        L&apos;échographie d&apos;Inuit et Mogu confirme une portée de 4 chiots, suivie avec attention à l&apos;élevage.
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </section>
                    <section
                        id="projet-charm-alou"
                        className="relative mx-auto mt-12 mb-12 overflow-hidden rounded-4xl border border-primary/12 bg-[radial-gradient(circle_at_bottom_right,rgba(196,86,55,0.12),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.94),rgba(247,238,234,0.88))] p-8 text-left shadow-sm dark:border-white/10 dark:bg-[linear-gradient(135deg,rgba(39,19,16,0.98),rgba(64,30,25,0.94),rgba(28,13,11,0.98))] dark:shadow-[0_18px_60px_rgba(0,0,0,0.42)] md:p-10"
                    >
                        <div className="absolute -right-8 top-12 h-28 w-28 rounded-full bg-primary/8 blur-3xl dark:bg-primary/12" aria-hidden="true" />
                        <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                            <div className="space-y-6">
                                <div className="flex flex-wrap gap-3">
                                    <Badge className="border-0 bg-primary text-primary-foreground hover:bg-primary">
                                        Portée annoncée
                                    </Badge>
                                    <Badge variant="secondary" className="bg-background/85 text-foreground dark:bg-white/8">
                                        Mariage Charm × Alou
                                    </Badge>
                                    <Badge variant="outline" className="border-primary/30 bg-background/75 dark:border-primary/25 dark:bg-white/6">
                                        Projet à venir
                                    </Badge>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="rounded-full bg-primary/10 p-2.5 text-primary">
                                            <Sprout className="h-5 w-5 text-2xl text-primary" />
                                        </div>
                                        <div>
                                            <h2 className="text-xl md:text-3xl font-semibold leading-tight">
                                                Charm et Alou font partie des prochains mariages suivis
                                            </h2>
                                            <p className="text-muted-foreground mt-2">
                                                Ce projet réunit Charm, mâle toy très typé au masque Fleur de Lys, et Alou, femelle toy expressive au regard vairon.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid gap-3 sm:grid-cols-3">
                                    {[
                                        { label: "Parents", value: "Charm × Alou" },
                                        { label: "Projet", value: "À venir" },
                                        { label: "Format", value: "Toy" },
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

                                <div className="rounded-3xl border border-primary/10 bg-background/70 p-5 shadow-sm dark:border-primary/18 dark:bg-white/6">
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <div className="space-y-2">
                                            <p className="text-sm font-semibold text-foreground">Une portée pensée avec soin</p>
                                            <p className="text-sm leading-relaxed text-muted-foreground">
                                                Cette union est envisagée avec la même exigence que nos autres mariages, autour du type, de la stabilité et de la qualité de lignée recherchés à l&apos;élevage.
                                            </p>
                                        </div>
                                        <div className="space-y-2">
                                            <p className="text-sm font-semibold text-foreground">Pour les familles intéressées</p>
                                            <p className="text-sm leading-relaxed text-muted-foreground">
                                                Si vous souhaitez suivre les naissances et être tenu au courant de son évolution, vous pouvez nous contacter dès maintenant.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <p className="text-muted-foreground">
                                        Une union pensée pour des chiots harmonieux, bien typés et suivis avec la même attention que les autres portées présentées sur cette page.
                                    </p>

                                    <div className="grid gap-3 md:grid-cols-2">
                                        {[
                                            "mariage réfléchi autour de deux profils toy complémentaires,",
                                            "expressions husky marquées et morphologies harmonieuses recherchées,",
                                            "tempéraments suivis avec exigence dans la continuité du programme,",
                                            "projet pensé pour des familles souhaitant anticiper leur adoption.",
                                        ].map((item) => (
                                            <div key={item} className="flex gap-4 items-center rounded-2xl border border-primary/10 bg-background/72 px-4 py-3 shadow-sm dark:border-primary/18 dark:bg-white/6">
                                                <div className="rounded-full bg-primary/10 p-2 text-primary" aria-hidden="true">
                                                    <Sprout className="h-4 w-4" />
                                                </div>
                                                <p className="text-muted-foreground">{item}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <div className={breedingCtaPanelClass}>
                                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary/80">
                                            Suivi des naissances
                                        </p>
                                        <div className="flex flex-col gap-3 sm:flex-row">
                                            <a
                                                href="https://forms.gle/7o7g6MptyDDkP611A"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={breedingPrimaryCtaClass}
                                            >
                                                Nous contacter pour suivre cette portée
                                            </a>
                                            <div className="flex flex-col gap-3 sm:flex-row">
                                                <Link
                                                    href={`/femelles-reproductrices#${getReproductorAnchorId("CHARM")}`}
                                                    className={breedingSecondaryCtaClass}
                                                >
                                                    Voir Charm
                                                </Link>
                                                <Link
                                                    href={`/femelles-reproductrices#${getReproductorAnchorId("ALOU")}`}
                                                    className={breedingSecondaryCtaClass}
                                                >
                                                    Voir Alou
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid gap-4 lg:justify-items-end">
                                <figure className="w-full max-w-md overflow-hidden rounded-3xl border border-primary/10 bg-background/70 shadow-md dark:border-primary/18 dark:bg-white/6">
                                    <div className="relative aspect-6/4 w-full">
                                        <div className="absolute left-4 top-5 z-10 -rotate-6 rounded-[1.25rem] border-[3px] border-amber-700 bg-[#fff1c9] px-5 py-2 text-sm font-extrabold uppercase tracking-[0.08em] text-amber-800 shadow-[0_0_0_4px_#d97706] md:text-base">
                                            À venir
                                        </div>
                                        <Image
                                            src="/pages/reproducteurs/mariage-de-charm-et-alou.jpg"
                                            alt="Charm et Alou, présentés pour annoncer un futur mariage Pomsky à l'élevage Royal POMSKY"
                                            fill
                                            className="object-cover"
                                            sizes="(min-width: 1024px) 26rem, (min-width: 640px) 70vw, 100vw"
                                        />
                                    </div>
                                    <figcaption className="p-4 text-sm leading-relaxed text-muted-foreground">
                                        Charm et Alou, un futur mariage suivi à l&apos;élevage dans nos projets de portées à venir.
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </section>
                    <section
                        id="projet-charm-puik"
                        className="relative mx-auto mb-12 overflow-hidden rounded-4xl border border-primary/12 bg-[radial-gradient(circle_at_bottom_right,rgba(196,86,55,0.12),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.94),rgba(247,238,234,0.88))] p-8 text-left shadow-sm dark:border-white/10 dark:bg-[linear-gradient(135deg,rgba(39,19,16,0.98),rgba(64,30,25,0.94),rgba(28,13,11,0.98))] dark:shadow-[0_18px_60px_rgba(0,0,0,0.42)] md:p-10"
                    >
                        <div className="absolute -right-8 top-12 h-28 w-28 rounded-full bg-primary/8 blur-3xl dark:bg-primary/12" aria-hidden="true" />
                        <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                            <div className="space-y-6">
                                <div className="flex flex-wrap gap-3">
                                    <Badge className="border-0 bg-primary text-primary-foreground hover:bg-primary">
                                        Portée annoncée
                                    </Badge>
                                    <Badge variant="secondary" className="bg-background/85 text-foreground dark:bg-white/8">
                                        Mariage Charm × Puik
                                    </Badge>
                                    <Badge variant="outline" className="border-primary/30 bg-background/75 dark:border-primary/25 dark:bg-white/6">
                                        Projet à venir
                                    </Badge>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="rounded-full bg-primary/10 p-2.5 text-primary">
                                            <Sprout className="h-5 w-5 text-2xl text-primary" />
                                        </div>
                                        <div>
                                            <h2 className="text-xl md:text-3xl font-semibold leading-tight">
                                                Charm et Puik rejoignent eux aussi les prochains mariages suivis
                                            </h2>
                                            <p className="text-muted-foreground mt-2">
                                                Ce futur mariage associe Charm à Puik pour une portée pensée avec soin autour de la stabilité, du type et de l&apos;expression recherchée chez le Pomsky.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid gap-3 sm:grid-cols-3">
                                    {[
                                        { label: "Parents", value: "Charm × Puik" },
                                        { label: "Projet", value: "À venir" },
                                        { label: "Format", value: "Toy" },
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

                                <div className="rounded-3xl border border-primary/10 bg-background/70 p-5 shadow-sm dark:border-primary/18 dark:bg-white/6">
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <div className="space-y-2">
                                            <p className="text-sm font-semibold text-foreground">Un projet préparé avec exigence</p>
                                            <p className="text-sm leading-relaxed text-muted-foreground">
                                                Cette future portée est envisagée dans le respect du rythme naturel des reproducteurs, avec un choix réfléchi autour de la cohérence du type et de la qualité du programme.
                                            </p>
                                        </div>
                                        <div className="space-y-2">
                                            <p className="text-sm font-semibold text-foreground">Pour les familles intéressées</p>
                                            <p className="text-sm leading-relaxed text-muted-foreground">
                                                Si vous souhaitez suivre les naissances et être averti dès qu&apos;il avance concrètement, nous pouvons vous accompagner dès maintenant.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <p className="text-muted-foreground">
                                        Un projet suivi dès maintenant pour les familles qui souhaitent anticiper leur adoption et rester proches des prochaines étapes.
                                    </p>

                                    <div className="grid gap-3 md:grid-cols-2">
                                        {[
                                            "mariage pensé autour de profils typés et équilibrés,",
                                            "sélection rigoureuse fidèle à la ligne de l'élevage,",
                                            "portée suivie dès les premières étapes du projet,",
                                            "accompagnement possible pour les familles qui souhaitent se positionner en amont.",
                                        ].map((item) => (
                                            <div key={item} className="flex gap-4 items-center rounded-2xl border border-primary/10 bg-background/72 px-4 py-3 shadow-sm dark:border-primary/18 dark:bg-white/6">
                                                <div className="rounded-full bg-primary/10 p-2 text-primary" aria-hidden="true">
                                                    <Sprout className="h-4 w-4" />
                                                </div>
                                                <p className="text-muted-foreground">{item}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <div className={breedingCtaPanelClass}>
                                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary/80">
                                            Suivi des naissances
                                        </p>
                                        <div className="flex flex-col gap-3 sm:flex-row">
                                            <a
                                                href="https://forms.gle/DJCcN9iHtUSCAhZE7"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={breedingPrimaryCtaClass}
                                            >
                                                Nous contacter pour suivre cette portée
                                            </a>
                                            <div className="flex flex-col gap-3 sm:flex-row">
                                                <Link
                                                    href={`/femelles-reproductrices#${getReproductorAnchorId("CHARM")}`}
                                                    className={breedingSecondaryCtaClass}
                                                >
                                                    Voir Charm
                                                </Link>
                                                <Link
                                                    href={`/femelles-reproductrices#${getReproductorAnchorId("PWEEK")}`}
                                                    className={breedingSecondaryCtaClass}
                                                >
                                                    Voir Puik
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid gap-4 lg:justify-items-end">
                                <figure className="w-full max-w-md overflow-hidden rounded-3xl border border-primary/10 bg-background/70 shadow-md dark:border-primary/18 dark:bg-white/6">
                                    <div className="relative aspect-6/4 w-full">
                                        <div className="absolute left-4 top-5 z-10 -rotate-6 rounded-[1.25rem] border-[3px] border-amber-700 bg-[#fff1c9] px-5 py-2 text-sm font-extrabold uppercase tracking-[0.08em] text-amber-800 shadow-[0_0_0_4px_#d97706] md:text-base">
                                            À venir
                                        </div>
                                        <Image
                                            src="/pages/reproducteurs/mariage-de-charm-et-puik.jpg"
                                            alt="Charm et Puik, présentés pour annoncer un futur mariage Pomsky à l'élevage Royal POMSKY"
                                            fill
                                            className="object-cover"
                                            sizes="(min-width: 1024px) 26rem, (min-width: 640px) 70vw, 100vw"
                                        />
                                    </div>
                                    <figcaption className="p-4 text-sm leading-relaxed text-muted-foreground">
                                        Charm et Puik, un futur mariage suivi à l&apos;élevage dans nos projets de portées à venir.
                                    </figcaption>
                                </figure>
                            </div>
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
