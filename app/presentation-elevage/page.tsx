import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FAQSection } from "@/components/faq"
import { faqPresentation } from "@/lib/faq-data"
import { Heart, Leaf, Users, Star } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import { pageMetadata, returnLastmod, siteConfig } from "@/lib/seo-config"
import { pageContent } from "@/lib/page-content"
import { generateOrganizationSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators"
import { convertFAQsToSchema } from "@/lib/faq-utils"

export const metadata: Metadata = {
    title: pageMetadata.presentation.title,
    description: pageMetadata.presentation.description,
    keywords: pageMetadata.presentation.keywords,
    openGraph: {
        title: pageMetadata.presentation.title,
        description: pageMetadata.presentation.description,
        url: `${siteConfig.siteUrl}/presentation-elevage`,
        images: [{ url: `${siteConfig.siteUrl}${siteConfig.ogImage}` }],
    },
    alternates: {
        canonical: `${siteConfig.siteUrl}/presentation-elevage`,
    },
}

export default function PresentationPage() {
    // Schémas JSON-LD
    const organizationSchema = generateOrganizationSchema()
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Accueil", url: "/" },
        { name: "Présentation", url: siteConfig.pages.presentation },
    ])
    const faqSchema = generateFAQSchema(convertFAQsToSchema(faqPresentation))
    const lastMod = returnLastmod(siteConfig.pages.presentation)

    return (
        <>
            {/* JSON-LD Schemas */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className="py-16">
                <div className="container mx-auto">
                    {/* Hero Section */}
                    <section className="text-center space-y-6 mb-16">
                        <h1
                            className="text-xl md:text-3xl font-bold">{pageContent.presentation.h1}</h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            {pageContent.presentation.description}
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
                                <h2
                                    className="text-xl md:text-2xl font-bold">Faire naître des compagnons équilibrés</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Notre travail commence bien avant la naissance : choix des parents, suivi vétérinaire, et attention constante à la qualité de vie des femelles. Chaque chiot bénéficie d'un départ progressif et serein.
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    Les petits grandissent dans des espaces pensés pour l'apprentissage : repères stables, manipulations douces, bruits du quotidien et découvertes guidées. L'objectif : un Pomsky confiant, bien socialisé et prêt pour sa famille.
                                </p>
                            </div>
                            <div className="relative h-64 md:h-100 rounded-lg overflow-hidden">
                                <Image
                                    src="/pages/presentation-elevage/chiot-pomsky-yeux-bleu-pelage-standard.webp"
                                    alt="Elevage professionnel de pomsky dans le Jura"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Values Section */}
                    <section className="mb-16 bg-muted/30 -mx-4 px-4 py-16 rounded-lg">
                        <div className="text-center mb-12">
                            <h2
                                className="text-xl md:text-2xl font-bold mb-4">Nos valeurs</h2>
                            <div className="w-24 h-1 bg-primary mx-auto rounded-full" aria-hidden="true" />
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <Card className="text-center bg-muted/80">
                                <CardContent className="p-6">
                                    <div className="flex justify-center mb-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                                            <Heart className="h-6 w-6 text-primary-foreground" />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">Santé & équilibre</h3>
                                    <p className="text-muted-foreground text-sm">
                                        Contrôles vétérinaires réguliers, alimentation adaptée et environnement sain pour des chiots solides et épanouis.
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
                                    <h3 className="text-xl font-semibold mb-2">Socialisation progressive</h3>
                                    <p className="text-muted-foreground text-sm">
                                        Stimulation douce, jeux d&apos;éveil et mises en situation variées pour des Pomsky à l&apos;aise partout.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="text-center bg-muted/80">
                                <CardContent className="p-6">
                                    <div className="flex justify-center mb-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                                            <Users className="h-6 w-6 text-primary-foreground" />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">Transparence</h3>
                                    <p className="text-muted-foreground text-sm">
                                        Échanges clairs, conseils honnêtes et informations complètes avant, pendant et après l&apos;adoption.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    {/* Approach Section */}
                    <section className="mb-16">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="relative h-64 md:h-100 rounded-lg overflow-hidden md:order-2">
                                <Image src="/pages/presentation-elevage/eleveuse-royal-pomsky-avec-un-pomsky.webp" alt="illustration d'un pomsky chiots de royal pomsky" fill className="object-cover" />
                            </div>
                            <div className="space-y-6 md:order-1">
                                <Badge variant="secondary" className="w-fit">
                                    <Star className="h-4 w-4 mr-2" />
                                    Notre approche
                                </Badge>
                                <h2
                                    className="text-xl md:text-2xl font-bold">Une approche respectueuse et exigeante</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Portées raisonnées, temps dédié à chaque chiot et à chaque famille, et un accompagnement personnalisé selon le caractère.
                                </p>
                                <div className="space-y-3">
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                                        <p className="text-sm">Parents sélectionnés pour la santé, le tempérament et la morphologie</p>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                                        <p className="text-sm">Stimulation sensorielle progressive dès les premiers jours</p>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                                        <p className="text-sm">Kit de départ, conseils d&apos;intégration et suivi post-adoption</p>
                                    </div>
                                </div>
                                <Link
                                    href="/femelles-reproductrices"
                                    className="flex items-center bg-primary h-10 text-white hover:bg-primary/80 px-4 font-semibold  dark:text-[#5b3a1a] rounded-md w-fit"
                                >Voir nos reproducteurs</Link>
                            </div>
                        </div>
                    </section>

                    {/* Story Section */}
                    <section className="mb-16 bg-muted/30 -mx-4 px-4 py-16 rounded-lg">
                        <div className="max-w-4xl mx-auto text-center space-y-6">
                            <h2
                                className="text-xl md:text-2xl font-bold">Notre histoire</h2>
                            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8" />
                            <h3 className="text-2xl font-bold">
                                Un élevage familial au cœur du Jura, à deux pas de Saint-Amour
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Nous avons choisi depuis l'année 2017 de nous installer au cœur de la nature, dans de grands espaces sauvages pour consacrer notre élevage et notre vie au Pomsky : pour le coup de cœur absolu que cela nous a procuré : son allure de chien nordique de traîneau miniature, sa nature proche de l'humain et son amour inconditionnel en font le chien le plus parfaitement adapté à nous.
                                Notre expérience est désormais devenue une expertise complète de cette merveilleuse race en devenir.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Nous avons sélectionné nos reproducteurs Pomsky au sein même du berceau de la race, pour vous apporter les meilleures lignées de Pomsky qui existent au monde. Nos adultes sont nés au quatre coins des Etats Unis d'Amérique : d'est en ouest, de New York à Seattle, en passant par la Californie et en revenant par la Floride. Ils ont débarqué en France pour faire partie de notre programme d'élevage canin, afin que nous puissions vous proposer les meilleures lignées de pomsky, parce nous visons l'excellence pour notre programme d'élevage ainsi que pour le devenir de la race.


                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Notre histoire s'est construite au fil des années, rencontres avec les éleveurs américains créateurs de cette race et des familles adoptantes. Nous recherchons depuis notre première portée née en 2018 à obtenir un Pomsky au physique abouti, bien dans sa tête, stable et joyeux, qui s'intègre facilement à la vie de famille.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Les chiens vivent à nos côtés, avec des espaces sécurisés et des moments de détente en extérieur pour nourrir leur curiosité.
                                Des balades sont régulièrement organisées en extérieur avec d'autres races de chiens.
                                Notre priorité : des chiots équilibrés, sociables et prêts à démarrer une belle histoire avec leur future famille.
                                Les familles repartent avec un accompagnement concret, des conseils pratiques et des nouvelles régulières et un groupe whatsapp avec les familles adoptantes de leur fratrie.
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
                                    <h3 className="text-xl font-semibold mb-4">Bien-être animal</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        Rythmes respectés, sorties adaptées et activités d&apos;éveil pour des Pomsky sereins et curieux.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="bg-muted/80">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-semibold mb-4">Suivi vétérinaire</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        Suivi sanitaire complet, identification, vaccination, vemifuge, antiparasitaires, tests ADN du laboratoire EMBARK des parents, test de filiation du laboratoire ANTAGENE et conseils de santé transmis au moment du départ.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="bg-muted/80">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-semibold mb-4">Transparence</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        Informations claires, visites et visio, documents lisibles et échanges réguliers tout au long du parcours.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="bg-muted/80">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-semibold mb-4">Accompagnement</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        Conseils personnalisés : guide pour l'accueil de votre chiot, kit de départ, conseil d'un éducateur canin agréé par notre réseau de connaissances ( éducation positive ) et disponibilité pour vous aider à chaque étape.
                                    </p>
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

