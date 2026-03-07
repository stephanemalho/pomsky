import { FAQSection } from "@/components/faq"
import { faqNosChiots } from "@/lib/faq-data"
import { Banknote, Calendar, Dog, Heart, NotebookText, PawPrint, Sprout, Weight } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import { buildOpenGraph, buildTwitter, pageMetadata, returnLastmod, siteConfig } from "@/lib/seo-config"
import { pageContent } from "@/lib/page-content"
import { generateBreadcrumbSchema, generateFAQSchema, generatePuppyListSchema, generatePuppyProductSchema } from "@/lib/schema-generators"
import { convertFAQsToSchema } from "@/lib/faq-utils"
import { puppies } from "./puppies"
import { Card, CardContent } from "@/components/ui/card"
import ImageCarousel from "@/components/client/carousel/ImageCarousel"
import { Badge } from "@/components/ui/badge"

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
                url: `${siteConfig.siteUrl}${siteConfig.ogImage}`,
                alt: siteConfig.ogImageAlt,
                width: siteConfig.ogImageWidth,
                height: siteConfig.ogImageHeight,
                type: "image/webp",
            },
        ],
    }),
    twitter: buildTwitter({
        title: pageMetadata.puppies.title,
        description: pageMetadata.puppies.description,
        imageUrl: `${siteConfig.siteUrl}${siteConfig.ogImage}`,
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

export default function NosChiotsPage() {
    // Schémas JSON-LD
    const puppiesForRichResults = puppies.filter((puppy) => typeof puppy.price === "number")
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Accueil", url: "/" },
        { name: "Nos chiots", url: siteConfig.pages.puppies },
    ])
    const faqSchema = generateFAQSchema(convertFAQsToSchema(faqNosChiots))
    const puppyListSchema = generatePuppyListSchema(puppiesForRichResults)
    const puppyProductsSchemas = puppiesForRichResults.map((puppy) => generatePuppyProductSchema(puppy))
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
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(puppyListSchema) }}
            />
            {puppyProductsSchemas.map((puppyProductSchema, index) => (
                <script
                    key={`puppy-product-schema-${puppiesForRichResults[index]?.name ?? index}`}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(puppyProductSchema) }}
                />
            ))}
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
                    <section className="mx-auto md:bg-muted/30 md:border border-muted rounded-2xl p-0 md:p-10 space-y-4 text-center mb-12">
                        <h2 className="text-xl md:text-2xl font-semibold leading-tight">
                            Un processus d'adoption transparent et accompagné
                        </h2>
                        <p className="text-muted-foreground">
                            Chaque adoption chez Royal POMSKY s'inscrit dans un parcours réfléchi : échanges préalables avec les familles, conseils personnalisés, transparence sur les lignées et accompagnement avant et après l'arrivée du chiot. Cette approche garantit une adoption durable et respectueuse du bien-être animal.
                        </p>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-16" aria-hidden="true" />
                        <div className="space-y-4 max-w-3xl mx-auto">
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
                        </div>
                        <div className="grid gap-10 my-12">
                            {puppies.map((puppy, index) => (
                                <Card
                                    key={puppy.name}
                                    id={puppy.name.toLowerCase()}
                                    className={`relative overflow-hidden bg-muted/30 p-0 md:p-6 ${puppy.isReserved ? "border-2 border-green-600 ring-2 ring-green-600/40 ring-offset-2 ring-offset-background" : ""}`}
                                >
                                    <CardContent className="p-0">
                                        {puppy.isReserved ? (
                                            <div
                                                className="absolute right-4 top-4 z-20 rotate-6 rounded-md border-2 border-green-700 bg-green-100 px-4 py-1 text-sm font-extrabold uppercase tracking-wider text-green-800 shadow-[0_0_0_3px_#166534]"
                                            >
                                                RÉSERVÉ
                                            </div>
                                        ) : null}
                                        <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? "md:grid-flow-col-dense" : ""}`}>
                                            <ImageCarousel
                                                className={index % 2 === 1 ? "md:order-2" : undefined}
                                                images={puppy.images}
                                                alt={"Carrousel d'images du chiots pomsky " + puppy.name}
                                                priority={index === 0}
                                                sizes="(min-width: 1024px) 50vw, (min-width: 768px) 50vw, 100vw"
                                            />
                                            <div className={`px-8 space-y-4 flex flex-col justify-center ${index % 2 === 1 ? "md:order-1" : ""}`}>
                                                <div className="flex items-center gap-2">
                                                    <Badge variant="secondary">
                                                        <PawPrint className="h-4 w-4 mr-1" />
                                                        {puppy.coat}
                                                    </Badge>
                                                    <Badge variant="outline">{puppy.color}</Badge>
                                                </div>
                                                <div className="space-y-2">
                                                    <h3 className="text-2xl font-bold">{puppy.name}</h3>
                                                    <p className="text-muted-foreground">{puppy.description}</p>
                                                </div>
                                                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                                                    <div className="flex items-center gap-2 text-muted-foreground">
                                                        <dt className="sr-only">Sexe</dt>
                                                        <Dog className="h-4 w-4 text-primary" aria-hidden="true" />
                                                        <dd>{puppy.sexe}</dd>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-muted-foreground">
                                                        <dt className="sr-only">Parents</dt>
                                                        <Heart className="h-4 w-4 text-primary" aria-hidden="true" />
                                                        <dd>{puppy.parents}</dd>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-muted-foreground">
                                                        <dt className="sr-only">Disponible le</dt>
                                                        <Calendar className="h-4 w-4 text-primary" aria-hidden="true" />
                                                        <dd>{puppy.readyDate}</dd>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-muted-foreground">
                                                        <dt className="sr-only">Âge</dt>
                                                        <PawPrint className="h-4 w-4 text-primary" aria-hidden="true" />
                                                        <dd>{puppy.age}</dd>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-muted-foreground">
                                                        <dt className="sr-only">Poids</dt>
                                                        <Weight className="h-4 w-4 text-primary" aria-hidden="true" />
                                                        <dd>{puppy.weight}</dd>
                                                    </div>
                                                    {typeof puppy.price === "number" ? (
                                                        <div className="flex items-center gap-2 text-muted-foreground sm:col-span-2">
                                                            <dt className="sr-only">Prix</dt>
                                                            <Banknote className="h-4 w-4 text-primary" aria-hidden="true" />
                                                            <dd>
                                                                {formatPuppyPrice(puppy.price, puppy.priceCurrency ?? "EUR")}
                                                                {puppy.priceIncludes ? ` - ${puppy.priceIncludes}` : ""}
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
                                                <div className="flex m-auto flex-col sm:flex-row gap-3 mb-6">
                                                    {puppy.isReserved ? (
                                                        <span
                                                            aria-disabled="true"
                                                            className="cursor-not-allowed rounded-md border border-green-700 bg-green-50 px-4 py-2 text-center font-medium text-green-800 opacity-90"
                                                        >
                                                            {puppy.isReserved && puppy.name} attend sa famille
                                                        </span>
                                                    ) : (
                                                        <div className="flex flex-col sm:flex-row gap-3">
                                                            <Link
                                                                href="/contact"
                                                                className="border border-primary text-primary shadow-xs hover:bg-primary/10 py-2 px-4 rounded-md text-center"
                                                            >
                                                                Contacter l&apos;élevage
                                                            </Link>
                                                            <a
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 py-2 px-4 rounded-md text-center"
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
                            ))}
                        </div>
                    </section>
                    <section className="max-w-4xl mx-auto bg-muted/30 border border-muted rounded-2xl p-8 md:p-10 space-y-6 text-left">
                        <div className="flex items-start gap-3">
                            <Sprout className="h-6 w-6 text-2xl text-primary" />
                            <div>
                                <h2
                                    className="text-xl md:text-2xl font-semibold leading-tight">Ces perles rares prennent le temps de naître</h2>
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
                        <div className="grid gap-3">
                            {[
                                "sélection rigoureuse des lignées,",
                                "suivi vétérinaire attentif,",
                                "respect du rythme naturel de nos reproducteurs,",
                                "accompagnement des familles avant, pendant et après l'adoption.",
                            ].map((item) => (
                                <div key={item} className="flex gap-4 items-center">
                                    <div className="rounded-full bg-primary/10 p-2 text-primary">
                                        <Sprout className="h-4 w-4" />
                                    </div>
                                    <p className="text-muted-foreground">{item}</p>
                                </div>
                            ))}
                        </div>
                        <Link
                            href="/bien-etre-animal"
                            className="flex items-center bg-primary justify-center text-white hover:bg-primary/80 p-4 font-semibold dark:text-[#5b3a1a] rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        >Voir les conditions de vie des chiots</Link>
                    </section>
                    <section className="max-w-4xl mt-12 mx-auto bg-muted/30 border border-muted rounded-2xl p-8 md:p-10 space-y-6 text-left mb-12">
                        <div className="flex items-start gap-3">
                            <NotebookText className="h-6 w-6 text-2xl text-primary" aria-hidden="true" />
                            <div>
                                <h2 className="text-xl md:text-2xl font-semibold leading-tight">
                                    Une portée Pomsky Miniature F5 rare est attendue
                                </h2>
                                <p className="text-muted-foreground mt-2">
                                    Issue du mariage entre Shadow & Bandit, deux reproducteurs parfaitement typés et équilibrés.
                                </p>
                            </div>
                        </div>

                        <p className="text-muted-foreground">
                            Shadow et Bandit sont deux véritables trésors de douceur, reconnus pour leur stabilité émotionnelle,
                            leur morphologie harmonieuse et leur excellente qualité de lignée.
                            Leur union donne naissance à des chiots Pomsky F5 Toy à la fois rares, équilibrés et très recherchés.
                        </p>

                        <div className="grid gap-3">
                            {[
                                "gabarits mini et toy soigneusement maîtrisés,",
                                "chiots bien équilibrés mentalement,",
                                "look irrésistible : yeux expressifs, oreilles bien placées, pelage fourni,",
                                "génération avancée Pomsky F5, gage de stabilité et de conformité.",
                            ].map((item) => (
                                <div key={item} className="flex gap-4 items-center">
                                    <div className="rounded-full bg-primary/10 p-2 text-primary" aria-hidden="true">
                                        <NotebookText className="h-4 w-4" />
                                    </div>
                                    <p className="text-muted-foreground">{item}</p>
                                </div>
                            ))}
                        </div>

                        <p className="text-muted-foreground">
                            Ces Pomsky F5 Toy représentent une opportunité rare.
                            Les réservations sont ouvertes dès maintenant pour les familles sérieuses et engagées.
                        </p>

                        <p className="text-muted-foreground">
                            📩 Contactez-moi pour recevoir des photos, des vidéos ou organiser une visite.
                            Je serai ravie de vous accompagner et de vous guider vers le chiot idéal pour votre projet de vie.
                        </p>

                        <Link
                            href="/contact"
                            className="flex items-center bg-primary justify-center text-white hover:bg-primary/80 p-4 font-semibold dark:text-[#5b3a1a] rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        >
                            Rejoindre la liste d&apos;attente
                        </Link>
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
