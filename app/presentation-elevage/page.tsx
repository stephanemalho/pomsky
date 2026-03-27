import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FAQSection } from "@/components/faq"
import { faqPresentation } from "@/lib/faq-data"
import { Heart, Leaf, Star, HeartPulse, PawPrint, Stethoscope, Eye, Handshake } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import { buildOpenGraph, buildTwitter, pageMetadata, returnLastmod, siteConfig, sitemapPages } from "@/lib/seo-config"
import { generateBreadcrumbSchema, generateFAQSchema, generateWebPageSchema } from "@/lib/schema-generators"
import { convertFAQsToSchema } from "@/lib/faq-utils"

const presentationOgJpg = "/pages/presentation-elevage/eleveuse-royal-pomsky-avec-un-pomsky.jpg"
const presentationOgWebp = "/pages/presentation-elevage/eleveuse-royal-pomsky-avec-un-pomsky.webp"

export const metadata: Metadata = {
    title: pageMetadata.presentation.title,
    description: pageMetadata.presentation.description,
    keywords: pageMetadata.presentation.keywords,
    openGraph: buildOpenGraph({
        title: pageMetadata.presentation.title,
        description: pageMetadata.presentation.description,
        url: `${siteConfig.siteUrl}/presentation-elevage`,
        images: [
            {
                url: `${siteConfig.siteUrl}${presentationOgJpg}`,
                alt: "Éleveuse Royal Pomsky avec un Pomsky",
                width: siteConfig.ogImageWidth,
                height: siteConfig.ogImageHeight,
                type: "image/jpeg",
            },
            {
                url: `${siteConfig.siteUrl}${presentationOgWebp}`,
                alt: "Éleveuse Royal Pomsky avec un Pomsky",
                width: siteConfig.ogImageWidth,
                height: siteConfig.ogImageHeight,
                type: "image/webp",
            },
        ],
    }),
    twitter: buildTwitter({
        title: pageMetadata.presentation.title,
        description: pageMetadata.presentation.description,
        imageUrl: `${siteConfig.siteUrl}${presentationOgJpg}`,
    }),
    alternates: {
        canonical: `${siteConfig.siteUrl}/presentation-elevage`,
    },
}

export default function PresentationPage() {
    // Schémas JSON-LD
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Accueil", url: "/" },
        { name: "Présentation", url: siteConfig.pages.presentation },
    ])
    const faqSchema = generateFAQSchema(convertFAQsToSchema(faqPresentation))
    const pageLastModValue = sitemapPages.find((page) => page.url === siteConfig.pages.presentation)?.lastmod
    const webPageSchema = generateWebPageSchema({
        name: pageMetadata.presentation.title,
        description: pageMetadata.presentation.description,
        url: siteConfig.pages.presentation,
        dateModified: pageLastModValue,
        about: ["Politique d'élevage Pomsky", "Sélection des reproducteurs", "Lignées américaines", "Suivi sanitaire"],
    })
    const lastMod = returnLastmod(siteConfig.pages.presentation)

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
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
            />

            <div className="py-16">
                <div className="container mx-auto">
                    {/* Hero Section */}
                    <section className="text-center space-y-6 mb-16">
                        <h1
                            className="text-xl md:text-3xl font-bold">La politique d’élevage Royal Pomsky</h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Chez Royal Pomsky, notre travail commence bien avant la naissance. Cette page explique les choix qui structurent notre élevage : sélection des parents, lignées importées des États-Unis, exigences sanitaires, portées raisonnées et accompagnement sérieux de chaque chiot.
                        </p>
                        <p className="text-muted-foreground max-w-2xl mx-auto">Si vous voulez comprendre notre méthode d’élevage et la manière dont nous cherchons à faire naître des chiots Pomsky sains, stables et bien préparés, vous êtes au bon endroit.
                        </p>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full" aria-hidden="true" />
                    </section>

                    {/* Mission Section */}
                    <section className="mb-16">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <Badge variant="secondary" className="w-fit">
                                    <Heart className="h-4 w-4 mr-2" aria-hidden="true" />
                                    Notre philosophie
                                </Badge>
                                <h2 className="text-xl md:text-2xl font-bold">
                                    Faire naître des chiots en bonne santé commence par les bons choix
                                </h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Notre programme d’élevage repose sur une idée simple : la qualité d’un chiot se prépare en amont. Nous accordons une attention majeure à la sélection des reproducteurs, à leur santé, à leur tempérament et à la cohérence des mariages, pour construire des portées réfléchies plutôt que de multiplier les naissances.
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    Nous avons fait le choix de bâtir notre élevage autour de lignées américaines soigneusement sélectionnées. Ce travail sur les origines, les profils et le suivi sanitaire nous permet de viser des chiots plus homogènes, plus sains et mieux préparés pour la vie de famille.
                                </p>
                            </div>
                            <div className="relative h-64 md:h-100 rounded-lg overflow-hidden">
                                <Image
                                    src="/pages/presentation-elevage/chiot-pomsky-yeux-bleu-pelage-standard.webp"
                                    alt="Chiot Pomsky aux yeux bleu assis a coté d'une citrouille d'halloween"
                                    fill
                                    className="object-cover"
                                    priority
                                    fetchPriority="high"
                                    sizes="(min-width: 768px) 50vw, 100vw"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Values Section */}
                    <section className="mb-16 bg-muted/30 -mx-4 px-4 py-16 rounded-lg">
                        <div className="text-center mb-12">
                            <h2
                                className="text-xl md:text-2xl font-bold mb-4">Les piliers de notre programme d’élevage</h2>
                            <div className="w-24 h-1 bg-primary mx-auto rounded-full" aria-hidden="true" />
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            <Card className="text-center bg-muted/80">
                                <CardContent className="p-6">
                                    <div className="flex justify-center mb-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                                            <HeartPulse className="h-6 w-6 text-primary-foreground" />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">Sélection et cohérence des mariages</h3>
                                    <p className="text-muted-foreground text-sm">
                                        Chaque portée est pensée en fonction de la santé, du tempérament, de la construction et de l’objectif de notre programme, afin d’éviter les choix approximatifs.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card className="text-center bg-muted/80">
                                <CardContent className="p-6">
                                    <div className="flex justify-center mb-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                                            <Heart className="h-6 w-6 text-primary-foreground" />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">Lignées américaines choisies avec exigence</h3>
                                    <p className="text-muted-foreground text-sm">
                                        Nos reproducteurs ont été importés des États-Unis pour construire un élevage fondé sur des bases solides et sur des lignées que nous avons réellement choisies.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="text-center bg-muted/80">
                                <CardContent className="p-6">
                                    <div className="flex justify-center mb-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                                            <Leaf className="h-6 w-6 text-primary-foreground" />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">Suivi sanitaire et préparation du départ</h3>
                                    <p className="text-muted-foreground text-sm">
                                        Tests, suivi vétérinaire, observation et préparation des familles font partie intégrante du travail qui entoure chaque chiot avant son départ.
                                    </p>
                                </CardContent>
                            </Card>
                            <h3 className="text-xl font-semibold mb-2 text-center md:col-span-3">Pour mieux comprendre la race, ses formats et les repères utiles avant adoption, vous pouvez consulter notre guide complet sur le Pomsky.</h3>
                            <div className="flex justify-center md:col-span-3 hover:underline">
                                <Link
                                    href="/le-pomsky"
                                    className="flex items-center bg-primary h-10 text-white hover:bg-primary/80 px-4 font-semibold  dark:text-[#5b3a1a] rounded-md w-fit"
                                >Lire le guide complet sur le Pomsky</Link>
                            </div>
                        </div>
                    </section>

                    {/* Approach Section */}
                    <section className="mb-16">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="relative h-64 md:h-100 rounded-lg overflow-hidden md:order-2">
                                <Image
                                    src="/pages/presentation-elevage/eleveuse-royal-pomsky-avec-un-pomsky.webp"
                                    alt="Aurélie de l'élevage Royal Pomsky et un pomsky qui attend son jouet"
                                    fill
                                    className="object-cover"
                                    sizes="(min-width: 768px) 50vw, 100vw"
                                />
                            </div>
                            <div className="space-y-6 md:order-1">
                                <Badge variant="secondary" className="w-fit">
                                    <Star className="h-4 w-4 mr-2" />
                                    Notre approche
                                </Badge>
                                <h2
                                    className="text-xl md:text-2xl font-bold">Une méthode d’élevage pensée dans la durée</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Notre objectif n’est pas seulement de faire naître de beaux Pomsky, mais de construire un élevage cohérent, lisible et exigeant, avec des choix assumés sur les origines, la santé et l’accompagnement.
                                </p>
                                <div className="space-y-3">
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                                        <p className="text-sm">Parents choisis pour la santé, le tempérament et la qualité de leurs lignées</p>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                                        <p className="text-sm">Importation de reproducteurs américains pour travailler sur des bases solides</p>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                                        <p className="text-sm">Suivi sanitaire, transparence et accompagnement des familles à chaque étape</p>
                                    </div>
                                </div>
                                <Link
                                    href="/bien-etre-animal"
                                    className="flex items-center bg-primary h-10 text-white hover:bg-primary/80 px-4 font-semibold  dark:text-[#5b3a1a] rounded-md w-fit"
                                >Voir comment vivent nos chiots au quotidien</Link>
                            </div>

                        </div>
                        <div className="w-24 my-12 h-1 bg-primary mx-auto rounded-full" aria-hidden="true" />
                        <div className="max-w-3xl mx-auto text-center md:col-span-2 mt-12"><p className="text-muted-foreground text-sm mt-4">
                            Nous prenons aussi le temps de vous accompagner dans le choix de votre futur compagnon, avec une lecture honnête des caractères, des besoins et de l’adéquation entre un chiot et votre mode de vie.
                        </p>
                        </div>
                        <div className="text-center my-6 max-w-4xl mx-auto">
                            <h3 className="md:text-lg  font-semibold mb-2 my-6">Découvrez les reproducteurs qui portent notre vision de l’élevage</h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                Nos reproducteurs ne sont pas choisis au hasard. Ils représentent la base de notre programme, avec un vrai travail sur les origines, la santé, la stabilité et le type de Pomsky que nous souhaitons développer au fil des générations.
                            </p>
                        </div>
                        <Link
                            href="/femelles-reproductrices"
                            className="flex items-center mx-auto bg-primary h-10 text-white hover:bg-primary/80 px-4 font-semibold  dark:text-[#5b3a1a] rounded-md w-fit"
                        >Voir nos pomsky reproducteurs</Link>
                    </section>

                    {/* Story Section */}
                    <section className="mb-16 bg-muted/30 -mx-4 px-4 py-16 rounded-lg">
                        <div className="max-w-4xl mx-auto text-center space-y-6">
                            <h2
                                className="text-xl md:text-2xl font-bold">Notre histoire</h2>
                            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8" />
                            <h3 className="text-2xl font-bold">
                                Un élevage professionnel au cœur du Jura, en Bourgogne-Franche-Comté, dédié au Pomsky Toy américain
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Nous avons choisi depuis l'année 2017 de nous installer au cœur de la nature, dans de grands espaces sauvages pour consacrer notre élevage et notre vie au Pomsky : pour le coup de cœur absolu que cela nous a procuré : son allure de chien nordique de traîneau miniature, sa nature proche de l'humain et son amour inconditionnel en font le chien le plus parfaitement adapté à nous.
                                Notre expérience est désormais devenue une expertise complète de cette merveilleuse race en devenir.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Nous avons sélectionné nos reproducteurs Pomsky au sein même du berceau de la race, afin de construire notre élevage sur des lignées américaines choisies avec exigence. Nos adultes sont nés aux quatre coins des États-Unis, de New York à Seattle, en passant par la Californie et la Floride. Ils ont rejoint la France pour devenir les fondations de notre programme d’élevage.


                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Notre histoire s'est construite au fil des années, rencontres avec les éleveurs américains créateurs de cette race et des familles adoptantes. Nous recherchons depuis notre première portée née en 2018 à obtenir un Pomsky au physique abouti, bien dans sa tête, stable et joyeux, qui s'intègre facilement à la vie de famille.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Au fil des années, nous avons aussi construit une relation de confiance avec les familles adoptantes. Elles repartent avec des explications claires, un accompagnement concret et une vision plus juste du travail réalisé avant l’arrivée du chiot à la maison. Pour découvrir plus en détail le quotidien et les conditions de vie offertes à nos chiens, nous avons dédié une page spécifique à ce sujet.
                            </p>
                        </div>
                    </section>

                    {/* Commitment Section */}
                    <section className="mb-16">
                        <div className="text-center mb-12">
                            <h2
                                className="text-xl md:text-2xl font-bold mb-4">Nos engagements</h2>
                            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <Card className="bg-muted/80">
                                <CardContent className="p-6">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary">
                                            <PawPrint className="h-5 w-5 text-primary-foreground" aria-hidden="true" />
                                        </div>
                                        <h3 className="text-xl font-semibold">Sélection des reproducteurs</h3>
                                    </div>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        Élever des Pomsky ne consiste pas uniquement à faire naître des chiots. C’est d’abord un travail de sélection, de cohérence génétique et d’observation mené sur plusieurs années pour construire un programme sérieux.
                                    </p>
                                    <Link
                                        href="/femelles-reproductrices"
                                        className="mt-3 inline-flex text-sm font-medium text-primary underline underline-offset-4"
                                    >
                                        Découvrez nos reproducteurs sélectionnés
                                    </Link>
                                </CardContent>
                            </Card>

                            <Card className="bg-muted/80">
                                <CardContent className="p-6">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary">
                                            <Stethoscope className="h-5 w-5 text-primary-foreground" aria-hidden="true" />
                                        </div>
                                        <h3 className="text-xl font-semibold">Suivi vétérinaire</h3>
                                    </div>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        Suivi sanitaire complet, identification, vaccination, vermifuge, antiparasitaires, tests ADN du laboratoire EMBARK des parents, test de filiation du laboratoire ANTAGENE et conseils de santé transmis au moment du départ.
                                    </p>
                                    <div className="flex flex-col">
                                        <Link
                                            href="/blog/pomsky/genetique/pourquoi-le-test-embark-est-essentiel-dans-un-elevage-de-pomsky"
                                            className="mt-3 inline-flex text-sm font-medium text-primary underline underline-offset-4"
                                        >
                                            Pourquoi le test ADN EMBARK est essentiel
                                        </Link>
                                        <a
                                            href="https://embarkvet.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-2 inline-flex text-sm font-medium text-primary underline underline-offset-4"
                                        >
                                            Site officiel EMBARK
                                        </a>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="bg-muted/80">
                                <CardContent className="p-6">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary">
                                            <Eye className="h-5 w-5 text-primary-foreground" aria-hidden="true" />
                                        </div>
                                        <h3 className="text-xl font-semibold">Transparence</h3>
                                    </div>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        Nous partageons régulièrement des photos et nouvelles de l'évolution des chiots durant toute la période de sevrage.
                                        Les familles peuvent suivre leur croissance, leurs premières découvertes et leur développement au fil des semaines.
                                        Les échanges sont ouverts, les documents accessibles, et chaque étape peut être expliquée simplement, en toute confiance.
                                    </p>
                                    <div className="flex flex-col">
                                        <Link
                                            href="/chiots-disponibles"
                                            className="mt-3 inline-flex text-sm font-medium text-primary underline underline-offset-4"
                                        >
                                            Voir les dernières photos de nos chiots disponibles
                                        </Link>
                                        <a
                                            href="https://www.instagram.com/royalpomsky"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-2 inline-flex text-sm font-medium text-primary underline underline-offset-4"
                                        >
                                            Site Instagram officiel de Royal Pomsky
                                        </a>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="bg-muted/80">
                                <CardContent className="p-6">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary">
                                            <Handshake className="h-5 w-5 text-primary-foreground" aria-hidden="true" />
                                        </div>
                                        <h3 className="text-xl font-semibold">Accompagnement</h3>
                                    </div>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        Conseils personnalisés : guide pour l'accueil de votre chiot, kit de départ, conseil d'un éducateur canin agréé par notre réseau de connaissances ( éducation positive ) et disponibilité pour vous aider à chaque étape.
                                    </p>
                                    <div className="flex flex-col">
                                        <Link
                                            href="/contact"
                                            className="mt-3 inline-flex text-sm font-medium text-primary underline underline-offset-4"
                                        >
                                            Contactez-nous pour un accompagnement personnalisé
                                        </Link>

                                        <a
                                            href="https://forms.gle/2ZtWVzEzJ9QQhZfa8"
                                            target="_blank"
                                            rel="noopener"
                                            className="mt-2 inline-flex text-sm font-medium text-primary underline underline-offset-4"
                                        >
                                            Écrivez-nous pour discuter de votre projet d’adoption de Pomsky
                                        </a>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    <FAQSection
                        title="FAQ Pomsky et élevage"
                        description="Nos réponses sur l&apos;élevage, la vie à la maison et l&apos;accueil d&apos;un Pomsky."
                        items={faqPresentation}
                    />
                    {/* CTA Section */}
                    <section className="text-center space-y-6">
                        <h2
                            className="text-xl md:text-2xl font-bold">Envie de rencontrer nos Pomsky ?</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Réservez une visite ou suivez l&apos;ouverture des réservations pour nos prochaines portées.
                        </p>
                        <div className="flex flex-col mt-12 sm:flex-row gap-8 justify-center h-10 items-center">
                            <Link
                                href="/chiots-disponibles"
                                className="flex items-center min-h-12 bg-primary text-white hover:bg-primary/80 px-4 font-semibold dark:text-[#5b3a1a] rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                            >Voir nos portées</Link>
                            <Link
                                href="/contact"
                                className="flex cursor-pointer h-full hover:underline text-sm text-muted-foreground justify-center items-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded px-2 py-1"
                            >
                                Programmer une visite
                            </Link>
                        </div>
                        <div className="text-right text-xs text-muted-foreground mt-20">
                            Dernière mise à jour : {lastMod}
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}
