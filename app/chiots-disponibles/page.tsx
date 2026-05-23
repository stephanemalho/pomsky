import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
    BadgeCheck,
    Banknote,
    Calendar,
    Dog,
    FileText,
    Heart,
    Mars,
    PawPrint,
    Sprout,
    Venus,
    Weight,
} from "lucide-react";

import { FAQSection } from "@/components/faq";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { faqNosChiots } from "@/lib/faq-data";
import { convertFAQsToSchema } from "@/lib/faq-utils";
import { pageContent } from "@/lib/page-content";
import {
    buildOpenGraph,
    buildTwitter,
    pageMetadata,
    returnLastmod,
    siteConfig,
    sitemapPages,
} from "@/lib/seo-config";
import {
    generateBreadcrumbSchema,
    generateFAQSchema,
    generateLitterCertificationsSchema,
    generatePuppyCatalogSchema,
    generateStructuredDataGraph,
    generateWebPageSchema,
} from "@/lib/schema-generators";
import { litterCertifications, puppies, type Puppy } from "./puppies";
import { getPuppyParentProfiles } from "./puppy-parents";
import {
    buildPuppyItemListStructuredData,
    formatPuppyPrice,
    getPuppyThumbImageSrc,
    getPuppyStatus,
    getPuppyStatusLabel,
    getPuppyUrl,
} from "./puppy-seo";

const puppiesOgImage = "/pages/puppies/pomsky-f4-inuk-1.jpeg";

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
};

function getLitterCertificationForPuppy(puppy: Puppy) {
    return litterCertifications.find((certification) =>
        certification.parentLabel === puppy.parents && certification.puppyNames.includes(puppy.name)
    );
}

function getCertificationIdsForPuppy(puppy: Puppy) {
    const certification = getLitterCertificationForPuppy(puppy);

    return certification ? [certification.id] : undefined;
}

function getPuppyPriceLabel(puppy: Puppy) {
    if (typeof puppy.price === "number") {
        return formatPuppyPrice(puppy.price, puppy.priceCurrency ?? "EUR");
    }

    return puppy.priceLabel ?? "Prix à définir";
}

export default function NosChiotsPage() {
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Accueil", url: "/" },
        { name: "Nos chiots", url: siteConfig.pages.puppies },
    ], siteConfig.pages.puppies);
    const faqSchema = generateFAQSchema(convertFAQsToSchema(faqNosChiots), siteConfig.pages.puppies);
    const pageLastModValue = sitemapPages.find((page) => page.url === siteConfig.pages.puppies)?.lastmod;
    const visiblePuppies = puppies.filter((puppy) => !puppy.isAdopted);
    const availablePuppies = visiblePuppies.filter((puppy) => !puppy.isReserved);
    const puppyListSchema = buildPuppyItemListStructuredData(visiblePuppies);
    const puppyCatalogSchema = generatePuppyCatalogSchema(
        visiblePuppies.map((puppy) => ({
            ...puppy,
            status: getPuppyStatus(puppy),
            url: getPuppyUrl(puppy),
            interestFormUrl: puppy.linkTo,
            certificationIds: getCertificationIdsForPuppy(puppy),
        }))
    );
    const litterCertificationsSchema = generateLitterCertificationsSchema(litterCertifications);
    const webPageSchema = generateWebPageSchema({
        name: pageMetadata.puppies.title,
        description: pageMetadata.puppies.description,
        url: siteConfig.pages.puppies,
        dateModified: pageLastModValue,
        about: ["Chiots Pomsky disponibles", "Adoption Pomsky", "Élevage Pomsky"],
    });
    const structuredDataSchema = generateStructuredDataGraph([
        breadcrumbSchema,
        faqSchema,
        puppyListSchema,
        puppyCatalogSchema,
        litterCertificationsSchema,
        webPageSchema,
    ]);
    const lastMod = returnLastmod(siteConfig.pages.puppies);
    const availablePuppiesTitle = availablePuppies.length > 0
        ? `${availablePuppies.length} chiot${availablePuppies.length > 1 ? "s" : ""} disponible${availablePuppies.length > 1 ? "s" : ""} à l'adoption`
        : "Aucun chiot disponible actuellement";

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataSchema) }}
            />

            <main className="pb-16">
                <div className="container mx-auto my-12">
                    <section className="mb-12 space-y-4 text-center">
                        <h1 className="text-xl font-bold md:text-3xl">{pageContent.puppies.h1}</h1>
                        <p className="mx-auto max-w-3xl text-md text-muted-foreground">
                            {pageContent.puppies.descriptionSecondary}
                        </p>
                        <p className="mx-auto max-w-3xl text-md text-muted-foreground">
                            Chaque chiot dispose maintenant d'une fiche dédiée avec ses photos, ses parents, son statut, ses informations administratives et son lien de réservation.
                        </p>
                    </section>

                    <section className="my-12 rounded-3xl border border-primary/10 bg-muted/20 p-4 shadow-sm md:p-8">
                        <div className="mb-8 max-w-3xl space-y-3">
                            <Badge variant="secondary" className="w-fit">
                                Chiots disponibles
                            </Badge>
                            <h2 className="text-2xl font-bold md:text-3xl">{availablePuppiesTitle}</h2>
                            <p className="text-muted-foreground">
                                Retrouvez ici tous les chiots actuellement présentés par l'élevage. Les chiots réservés restent affichés pour suivre les portées, mais seuls les chiots encore ouverts à la réservation sont comptabilisés comme disponibles.
                            </p>
                        </div>

                        <div className="grid gap-5">
                            {visiblePuppies.map((puppy, index) => {
                                const status = getPuppyStatus(puppy);
                                const isReserved = status === "reserved";
                                const statusLabel = getPuppyStatusLabel(puppy);
                                const puppyUrl = getPuppyUrl(puppy);
                                const firstImage = puppy.images[0];
                                const priceTextClass = isReserved ? "text-muted-foreground line-through" : "text-primary";
                                const certification = getLitterCertificationForPuppy(puppy);
                                const eyeHighlight = puppy.highlights.find((highlight) => highlight.toLowerCase().startsWith("yeux"));
                                const parentProfiles = getPuppyParentProfiles(puppy.parents);

                                return (
                                    <Card
                                        key={puppy.name}
                                        className={`relative overflow-hidden bg-background ${isReserved ? "border-2 border-green-600 ring-2 ring-green-600/20 ring-offset-2 ring-offset-background" : ""}`}
                                    >
                                        <CardContent className="p-0">
                                            <div className="grid md:grid-cols-[220px_1fr_auto] md:items-stretch">
                                                <Link
                                                    href={puppyUrl}
                                                    className="relative block h-96 w-full overflow-hidden bg-muted transition-opacity hover:opacity-90 sm:h-120 md:h-full md:min-h-full"
                                                    aria-label={`Voir la fiche détaillée de ${puppy.name}`}
                                                >
                                                    {firstImage ? (
                                                        <Image
                                                            src={getPuppyThumbImageSrc(firstImage)}
                                                            alt={firstImage.alt}
                                                            fill
                                                            className="object-cover"
                                                            sizes="(min-width: 768px) 220px, 100vw"
                                                            priority={index === 0}
                                                        />
                                                    ) : null}
                                                </Link>

                                                <div className="min-w-0 space-y-2 p-4 text-left md:space-y-3 md:p-6">
                                                    <div className="space-y-1">
                                                        <h2 className="text-xl font-bold md:text-2xl">{puppy.name}</h2>
                                                        <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground md:line-clamp-none md:text-base">
                                                            {puppy.description}
                                                        </p>
                                                    </div>

                                                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                                                        <Badge variant="secondary">
                                                            <PawPrint className="mr-1 h-4 w-4" aria-hidden="true" />
                                                            {puppy.sexe}
                                                        </Badge>
                                                        <Badge variant="outline">{puppy.color}</Badge>
                                                        {eyeHighlight ? (
                                                            <Badge variant="outline">{eyeHighlight}</Badge>
                                                        ) : null}
                                                        <Badge variant="secondary">{puppy.parents.replace("Parents : ", "")}</Badge>
                                                        <Badge variant="outline">{puppy.size}</Badge>
                                                        {certification ? (
                                                            <Badge variant="secondary">
                                                                <FileText className="mr-1 h-4 w-4" aria-hidden="true" />
                                                                Fiche portée
                                                            </Badge>
                                                        ) : null}
                                                        {isReserved ? (
                                                            <Badge className="bg-green-700 text-white hover:bg-green-700">{statusLabel}</Badge>
                                                        ) : (
                                                            <Badge className="bg-primary text-primary-foreground hover:bg-primary">Disponible</Badge>
                                                        )}
                                                        <Badge variant="outline" className={priceTextClass}>
                                                            <Banknote className="mr-1 h-4 w-4" aria-hidden="true" />
                                                            {getPuppyPriceLabel(puppy)}
                                                        </Badge>
                                                    </div>

                                                    {parentProfiles.length > 0 ? (
                                                        <div className="grid gap-2 pt-1 sm:grid-cols-2">
                                                            {parentProfiles.map((parent) => {
                                                                const ParentIcon = parent.role === "Mère" ? Venus : Mars;
                                                                const iconClassName = parent.role === "Mère" ? "text-rose-500" : "text-sky-500";

                                                                return (
                                                                    <Link
                                                                        key={`${puppy.name}-${parent.role}-${parent.name}`}
                                                                        href={parent.href}
                                                                        className="group/parent flex min-w-0 items-center gap-2 rounded-lg border border-primary/10 bg-muted/25 p-2 transition hover:border-primary/25 hover:bg-primary/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                                                        aria-label={`Voir ${parent.name}, ${parent.role.toLowerCase()} de ${puppy.name}`}
                                                                    >
                                                                        <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-primary/10 bg-background">
                                                                            <Image
                                                                                src={parent.image}
                                                                                alt={`${parent.name}, ${parent.role.toLowerCase()} de ${puppy.name}`}
                                                                                fill
                                                                                className="object-cover"
                                                                                sizes="44px"
                                                                            />
                                                                        </span>
                                                                        <span className="min-w-0">
                                                                            <span className="flex items-center gap-1 text-xs font-medium text-muted-foreground">
                                                                                <ParentIcon className={`h-3.5 w-3.5 ${iconClassName}`} aria-hidden="true" />
                                                                                {parent.role}
                                                                            </span>
                                                                            <span className="block truncate text-sm font-semibold text-foreground group-hover/parent:text-primary">
                                                                                {parent.name}
                                                                            </span>
                                                                        </span>
                                                                    </Link>
                                                                );
                                                            })}
                                                        </div>
                                                    ) : null}
                                                </div>

                                                <div className="flex flex-col justify-center gap-2 border-t border-primary/10 p-4 pt-3 md:min-w-60 md:border-t-0 md:p-6 md:pl-0">
                                                    <Link
                                                        href={puppyUrl}
                                                        className="inline-flex items-center justify-center rounded-md border border-primary px-4 py-2 font-semibold text-primary transition-colors hover:bg-primary/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                                    >
                                                        Voir la fiche détaillée
                                                    </Link>
                                                    {isReserved ? (
                                                        <span className="cursor-not-allowed rounded-md border border-green-700 bg-green-50 px-4 py-2 text-center font-medium text-green-800">
                                                            {puppy.name} est {statusLabel.toLowerCase()}
                                                        </span>
                                                    ) : (
                                                        <a
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 font-semibold text-primary-foreground shadow-xs hover:bg-primary/90"
                                                            href={puppy.linkTo}
                                                        >
                                                            Demander {puppy.name}
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                );
                            })}
                        </div>
                    </section>

                    <section className="relative mx-auto mb-12 overflow-hidden rounded-4xl border border-primary/12 bg-[radial-gradient(circle_at_top_right,rgba(196,86,55,0.12),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.92),rgba(248,240,236,0.86))] p-6 text-center shadow-sm dark:border-white/10 dark:bg-[linear-gradient(135deg,rgba(39,19,16,0.98),rgba(64,30,25,0.94),rgba(28,13,11,0.98))] dark:shadow-[0_18px_60px_rgba(0,0,0,0.42)] md:p-10">
                        <Badge className="border-0 bg-primary text-primary-foreground hover:bg-primary">
                            Adoption accompagnée
                        </Badge>
                        <div className="relative mx-auto my-10 h-1 w-24 rounded-full bg-primary" aria-hidden="true" />
                        <h2 className="text-xl font-semibold leading-tight md:text-3xl">
                            Un processus d&apos;adoption transparent et accompagné
                        </h2>
                        <p className="mx-auto max-w-3xl text-muted-foreground">
                            Chaque adoption chez Royal POMSKY s&apos;inscrit dans un parcours réfléchi : échanges préalables avec les familles, conseils personnalisés, transparence sur les lignées et accompagnement avant et après l&apos;arrivée du chiot.
                        </p>
                        <div className="mt-12 grid gap-3 md:grid-cols-3">
                            {[
                                { icon: Heart, label: "Accompagnement", value: "Avant et après l'arrivée" },
                                { icon: Dog, label: "Retrait", value: "Uniquement à l'élevage" },
                                { icon: Sprout, label: "Zone", value: "France et Suisse" },
                            ].map((item) => {
                                const Icon = item.icon;

                                return (
                                    <div key={item.label} className="rounded-2xl border border-primary/10 bg-background/72 p-4 text-left shadow-sm backdrop-blur dark:border-primary/18 dark:bg-white/6">
                                        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                                            <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
                                            {item.label}
                                        </p>
                                        <p className="mt-2 text-sm font-semibold text-foreground md:text-base">
                                            {item.value}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </section>

                    <section className="mb-12 grid gap-6 md:grid-cols-3">
                        {[
                            { icon: Calendar, label: "Départ", value: "Selon l'âge, le suivi vétérinaire et la maturité du chiot." },
                            { icon: Weight, label: "Gabarit", value: "Estimation suivie au fil de la croissance, surtout sur les formats Toy et Miniature." },
                            { icon: BadgeCheck, label: "Suivi", value: "Informations administratives, santé et évolution regroupées sur chaque fiche." },
                        ].map((item) => {
                            const Icon = item.icon;

                            return (
                                <Card key={item.label} className="bg-muted/30">
                                    <CardContent className="space-y-3 p-6">
                                        <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                                        <h2 className="text-lg font-semibold">{item.label}</h2>
                                        <p className="text-sm text-muted-foreground">{item.value}</p>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </section>

                    <FAQSection
                        title="FAQ adoption et vie avec un Pomsky"
                        description="Le caractère, l'éducation, la cohabitation et les besoins quotidiens des Pomsky."
                        items={faqNosChiots}
                    />
                    <div className="mt-6 text-right text-xs text-muted-foreground">
                        Dernière mise à jour : {lastMod}
                    </div>
                </div>
            </main>
        </>
    );
}
