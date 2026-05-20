import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
    ArrowLeft,
    BadgeCheck,
    Banknote,
    Calendar,
    Dog,
    FileText,
    Heart,
    MapPin,
    Mars,
    PawPrint,
    ShieldCheck,
    Venus,
    Weight,
} from "lucide-react";

import BreedingRecordModal from "@/components/client/puppies/BreedingRecordModal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { buildOpenGraph, buildTwitter, siteConfig } from "@/lib/seo-config";
import { generateBreadcrumbSchema } from "@/lib/schema-generators";
import { getPuppyParentProfiles } from "../puppy-parents";
import { litterCertifications, puppies, type LitterCertification, type Puppy } from "../puppies";
import {
    buildPuppyProductStructuredData,
    formatPuppyPrice,
    getPuppyDisplayImageSrc,
    getPuppyImageSrc,
    getPuppyLastModified,
    getPuppySeoDescription,
    getPuppySlug,
    getPuppyStatus,
    getPuppyStatusLabel,
    getPuppyUrl,
} from "../puppy-seo";

type PuppyPageProps = {
    params: Promise<{ slug: string }>;
};

function findPuppyBySlug(slug: string) {
    return puppies.find((puppy) => getPuppySlug(puppy.name) === slug);
}

function getPuppyPriceLabel(puppy: Puppy) {
    if (typeof puppy.price === "number") {
        return formatPuppyPrice(puppy.price, puppy.priceCurrency ?? "EUR");
    }

    return puppy.priceLabel ?? "Prix à définir";
}

function getAdjacentPuppies(puppy: Puppy) {
    const visiblePuppies = puppies.filter((item) => !item.isAdopted);
    const currentIndex = visiblePuppies.findIndex((item) => getPuppySlug(item.name) === getPuppySlug(puppy.name));

    if (currentIndex === -1 || visiblePuppies.length <= 1) {
        return { previousPuppy: undefined, nextPuppy: undefined };
    }

    return {
        previousPuppy: visiblePuppies[(currentIndex - 1 + visiblePuppies.length) % visiblePuppies.length],
        nextPuppy: visiblePuppies[(currentIndex + 1) % visiblePuppies.length],
    };
}

function getLitterCertificationForPuppy(puppy: Puppy) {
    return litterCertifications.find((certification) =>
        certification.parentLabel === puppy.parents && certification.puppyNames.includes(puppy.name)
    );
}

function formatCertificationBirthDate(certification: LitterCertification) {
    return new Intl.DateTimeFormat("fr-FR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    }).format(new Date(`${certification.litterBirthDate}T12:00:00+01:00`));
}

export function generateStaticParams() {
    return puppies.map((puppy) => ({
        slug: getPuppySlug(puppy.name),
    }));
}

export async function generateMetadata({ params }: PuppyPageProps): Promise<Metadata> {
    const { slug } = await params;
    const puppy = findPuppyBySlug(slug);

    if (!puppy) {
        return {};
    }

    const firstImage = getPuppyImageSrc(puppy.images[0]?.src ?? "/pages/puppies/pomsky-f4-inuk-1.jpeg");
    const description = getPuppySeoDescription(puppy);
    const title = `${puppy.name}, chiot Pomsky ${puppy.color} ${getPuppyStatusLabel(puppy).toLowerCase()}`;
    const url = `${siteConfig.siteUrl}${getPuppyUrl(puppy)}`;

    return {
        title,
        description,
        keywords: [
            `chiot Pomsky ${puppy.name}`,
            `Pomsky ${puppy.color}`,
            `chiot Pomsky ${puppy.sexe.toLowerCase()}`,
            "chiot Pomsky disponible",
            "élevage Pomsky France",
        ],
        openGraph: buildOpenGraph({
            title,
            description,
            url,
            images: [
                {
                    url: `${siteConfig.siteUrl}${firstImage}`,
                    alt: `${puppy.name}, chiot Pomsky ${puppy.color} de l'élevage Royal POMSKY`,
                    type: "image/jpeg",
                },
            ],
        }),
        twitter: buildTwitter({
            title,
            description,
            imageUrl: `${siteConfig.siteUrl}${firstImage}`,
        }),
        alternates: {
            canonical: url,
        },
        other: {
            "article:modified_time": getPuppyLastModified(puppy) ?? "",
        },
    };
}

export default async function PuppyDetailPage({ params }: PuppyPageProps) {
    const { slug } = await params;
    const puppy = findPuppyBySlug(slug);

    if (!puppy) {
        notFound();
    }

    const status = getPuppyStatus(puppy);
    const statusLabel = getPuppyStatusLabel(puppy);
    const isAvailable = status === "available";
    const priceLabel = getPuppyPriceLabel(puppy);
    const parentProfiles = getPuppyParentProfiles(puppy.parents);
    const litterCertification = getLitterCertificationForPuppy(puppy);
    const { previousPuppy, nextPuppy } = getAdjacentPuppies(puppy);
    const lastModified = getPuppyLastModified(puppy);
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Accueil", url: "/" },
        { name: "Nos chiots", url: siteConfig.pages.puppies },
        { name: puppy.name, url: getPuppyUrl(puppy) },
    ], getPuppyUrl(puppy));
    const productStructuredData = buildPuppyProductStructuredData(puppy);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productStructuredData) }}
            />

            <main className="py-16">
                <div className="container mx-auto my-12 space-y-12">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <Link
                            href="/chiots-disponibles"
                            className="inline-flex items-center gap-2 rounded-md border border-primary/20 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        >
                            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                            Retour aux chiots disponibles
                        </Link>
                        <nav aria-label="Fil d'Ariane" className="text-sm text-muted-foreground">
                            <Link href="/chiots-disponibles" className="hover:text-primary">
                                Chiots disponibles
                            </Link>
                            <span className="px-2" aria-hidden="true">/</span>
                            <span>{puppy.name}</span>
                        </nav>
                    </div>

                    <section className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
                        <div className="grid gap-3 sm:grid-cols-2">
                            {puppy.images.map((image, index) => (
                                <figure
                                    key={image.src}
                                    className={`relative overflow-hidden rounded-2xl border border-primary/10 bg-muted/40 ${
                                        index === 0 ? "aspect-4/5 sm:col-span-2 lg:aspect-16/11" : "aspect-4/3"
                                    }`}
                                >
                                    <Image
                                        src={getPuppyDisplayImageSrc(image.src)}
                                        alt={image.alt}
                                        fill
                                        priority={index === 0}
                                        sizes={index === 0
                                            ? "(min-width: 1024px) 52vw, 100vw"
                                            : "(min-width: 1024px) 25vw, 50vw"}
                                        className="object-contain p-2"
                                        quality={index === 0 ? 80 : 70}
                                    />
                                </figure>
                            ))}
                        </div>

                        <article className="space-y-6">
                            <div className="space-y-4">
                                <div className="flex flex-wrap items-center gap-2">
                                    <Badge variant="secondary">
                                        <PawPrint className="mr-1 h-4 w-4" aria-hidden="true" />
                                        {puppy.coat}
                                    </Badge>
                                    <Badge variant="outline">{puppy.color}</Badge>
                                    <Badge className={isAvailable ? "bg-primary text-primary-foreground hover:bg-primary" : "bg-green-700 text-white hover:bg-green-700"}>
                                        {statusLabel}
                                    </Badge>
                                </div>

                                <div>
                                    <h1 className="text-3xl font-bold md:text-4xl">
                                        {puppy.name}, chiot Pomsky {puppy.color.toLowerCase()}
                                    </h1>
                                    <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
                                        {puppy.description}
                                    </p>
                                </div>
                            </div>

                            <Card className="border-primary/10 bg-muted/25">
                                <CardContent className="p-0">
                                    <dl className="divide-y divide-primary/10 text-sm">
                                        {[
                                            { icon: Dog, label: "Sexe", value: puppy.sexe },
                                            { icon: Heart, label: "Parents", value: puppy.parents.replace("Parents : ", "") },
                                            { icon: FileText, label: "Pédigrée", value: puppy.pedigree ?? "Fédération Française du Pomsky" },
                                            { icon: Calendar, label: "Disponibilité", value: puppy.readyDate },
                                            { icon: PawPrint, label: "Naissance", value: puppy.age },
                                            { icon: Weight, label: "Poids estimé", value: puppy.weight },
                                            { icon: BadgeCheck, label: "Format", value: puppy.size },
                                            { icon: ShieldCheck, label: "Pelage", value: puppy.ruler },
                                            { icon: Banknote, label: "Prix", value: priceLabel },
                                            { icon: MapPin, label: "Remise", value: "Retrait à l'élevage uniquement, sauf cas particulier pour les pays étrangers. Nous accompagnons les adoptants si besoin pour préserver les meilleures conditions du chiot." },
                                        ].map((item) => {
                                            const Icon = item.icon;

                                            return (
                                                <div key={item.label} className="grid gap-1 px-4 py-3 sm:grid-cols-[180px_1fr] sm:items-center">
                                                    <dt className="flex items-center gap-2 font-semibold text-muted-foreground">
                                                        <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
                                                        {item.label}
                                                    </dt>
                                                    <dd className="font-medium text-foreground sm:text-right">{item.value}</dd>
                                                </div>
                                            );
                                        })}
                                    </dl>
                                </CardContent>
                            </Card>

                            {litterCertification ? (
                                <section className="space-y-3 rounded-2xl border border-primary/10 bg-background p-5">
                                    <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-primary/75">
                                        Fiche administrative
                                    </h2>
                                    <div className="flex flex-wrap items-center justify-between gap-4">
                                        <div>
                                            <p className="font-semibold">{litterCertification.certificationIdentification}</p>
                                            <p className="text-sm text-muted-foreground">
                                                Portée née le {formatCertificationBirthDate(litterCertification)}
                                            </p>
                                        </div>
                                        <BreedingRecordModal
                                            imageSrc={getPuppyDisplayImageSrc(litterCertification.imageSrc)}
                                            title={litterCertification.name}
                                            description={litterCertification.description}
                                        />
                                    </div>
                                </section>
                            ) : null}

                            {parentProfiles.length > 0 ? (
                                <section className="space-y-4 rounded-2xl border border-primary/10 bg-background p-5">
                                    <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-primary/75">
                                        Ses parents
                                    </h2>
                                    <div className="grid gap-3 sm:grid-cols-2">
                                        {parentProfiles.map((parent) => {
                                            const ParentIcon = parent.role === "Mère" ? Venus : Mars;
                                            const iconClassName = parent.role === "Mère" ? "text-rose-500" : "text-sky-500";

                                            return (
                                                <Link
                                                    key={`${puppy.name}-${parent.role}-${parent.name}`}
                                                    href={parent.href}
                                                    className="group flex min-w-0 items-center gap-3 rounded-2xl border border-primary/12 bg-background/72 p-3 transition hover:border-primary/30 hover:bg-primary/8 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                                    aria-label={`Voir les reproducteurs, dont ${parent.name}, ${parent.role.toLowerCase()} de ${puppy.name}`}
                                                >
                                                    <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-primary/15 bg-muted shadow-sm">
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
                                                            {parent.description}
                                                        </span>
                                                    </span>
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </section>
                            ) : null}

                            <section className="space-y-3">
                                <h2 className="flex items-center gap-2 text-lg font-semibold">
                                    <ShieldCheck className="h-5 w-5 text-primary" aria-hidden="true" />
                                    Suivi du chiot
                                </h2>
                                <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                                    {(puppy.health ?? []).map((healthItem) => (
                                        <li key={healthItem}>{healthItem}</li>
                                    ))}
                                    <li>Accompagnement des familles avant le départ et après l'arrivée du chiot.</li>
                                </ul>
                            </section>

                            <div className="flex flex-wrap gap-2">
                                {puppy.highlights.map((item) => (
                                    <Badge key={item} variant="secondary">
                                        {item}
                                    </Badge>
                                ))}
                            </div>

                            <div className="flex flex-col gap-3 sm:flex-row">
                                {isAvailable ? (
                                    <a
                                        href={puppy.linkTo}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 font-semibold text-primary-foreground shadow-xs transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                    >
                                        Demander l'adoption de {puppy.name}
                                    </a>
                                ) : (
                                    <span className="inline-flex cursor-not-allowed items-center justify-center rounded-md border border-green-700 bg-green-50 px-5 py-3 font-semibold text-green-800">
                                        {puppy.name} est {statusLabel.toLowerCase()}
                                    </span>
                                )}
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center rounded-md border border-primary px-5 py-3 font-semibold text-primary transition-colors hover:bg-primary/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                >
                                    Poser une question à l'élevage
                                </Link>
                            </div>
                            {lastModified ? (
                                <p className="text-right text-xs text-muted-foreground">
                                    Fiche mise à jour le {new Intl.DateTimeFormat("fr-FR", { dateStyle: "long" }).format(new Date(lastModified))}
                                </p>
                            ) : null}
                        </article>
                    </section>

                    {(previousPuppy || nextPuppy) ? (
                        <section className="space-y-5 rounded-2xl border border-primary/10 bg-muted/25 p-5 md:p-6">
                            <div className="space-y-2 text-center">
                                <h2 className="text-xl font-bold md:text-2xl">Voir les autres chiots de l'élevage</h2>
                                <p className="text-sm text-muted-foreground">
                                    Continuez la visite des fiches pour comparer les profils, les parents et les disponibilités.
                                </p>
                            </div>
                            <div className="grid gap-4 md:grid-cols-2">
                                {previousPuppy ? (
                                    <PuppyNavigationCard label="Chiot précédent" puppy={previousPuppy} />
                                ) : null}

                                {nextPuppy ? (
                                    <PuppyNavigationCard label="Chiot suivant" puppy={nextPuppy} alignRight />
                                ) : null}
                            </div>
                        </section>
                    ) : null}
                </div>
            </main>
        </>
    );
}

function PuppyNavigationCard({
    label,
    puppy,
    alignRight = false,
}: {
    label: string;
    puppy: Puppy;
    alignRight?: boolean;
}) {
    const firstImage = puppy.images[0];

    return (
        <Link
            href={getPuppyUrl(puppy)}
            className={`group flex items-center gap-4 rounded-2xl border border-primary/10 bg-background p-4 transition hover:border-primary/30 hover:bg-primary/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${alignRight ? "md:justify-end" : ""}`}
        >
            {!alignRight ? (
                <PuppyNavigationImage puppy={puppy} image={firstImage} />
            ) : null}
            <span className={`min-w-0 ${alignRight ? "md:text-right" : ""}`}>
                <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {label}
                </span>
                <span className="block truncate text-lg font-bold group-hover:text-primary">
                    {puppy.name}
                </span>
                <span className="block text-sm text-muted-foreground">
                    {puppy.sexe} {puppy.color.toLowerCase()} - {getPuppyStatusLabel(puppy)}
                </span>
            </span>
            {alignRight ? (
                <PuppyNavigationImage puppy={puppy} image={firstImage} />
            ) : null}
        </Link>
    );
}

function PuppyNavigationImage({
    puppy,
    image,
}: {
    puppy: Puppy;
    image?: Puppy["images"][number];
}) {
    return (
        <span className="relative h-18 w-18 shrink-0 overflow-hidden rounded-full border-2 border-primary/10 bg-muted">
            {image ? (
                <Image
                    src={getPuppyDisplayImageSrc(image.src)}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="72px"
                />
            ) : (
                <span className="flex h-full w-full items-center justify-center text-xs font-semibold text-muted-foreground">
                    {puppy.name.slice(0, 2)}
                </span>
            )}
        </span>
    );
}
