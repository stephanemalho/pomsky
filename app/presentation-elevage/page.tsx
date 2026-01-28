import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FAQSection } from "@/components/faq"
import { faqPresentation } from "@/lib/faq-data"
import { Heart, Leaf, Users, Star } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import { pageMetadata, returnLastmod, siteConfig } from "@/lib/seo-config"
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
                            className="text-xl md:text-3xl font-bold">Elevage Royal POMSKY</h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Un élevage professionel de pomsky nains et Toys, élevés dans le Jura (39) avec amour, santé et caractère équilibré.
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
                                    className="text-xl md:text-2xl font-bold">Faire naître des compagnons harmonieux</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Chaque portée est préparée bien avant la naissance : sélection de lignées saines, dépistage ADN
                                    et maladies génétiques, suivi vétérinaire rigoureux et beaucoup de présence humaine dès les
                                    premiers jours.
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    Nous élevons nos pomsky dans des espaces dédiés à leur sécurité et leur bien être, habitués aux
                                    bruits du quotidien et aux sorties dans notre terrain d&apos;un hectare ! L&apos;objectif : des chiots curieux,
                                    confiants et faciles à intégrer dans leur nouvelle famille.
                                </p>
                            </div>
                            <div className="relative h-64 md:h-100 rounded-lg overflow-hidden">
                                <Image
                                    src="/teckel-Toy-noir-et-feu.webp"
                                    alt="Elevage familial de pomsky dans le Jura"
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
                                    <h3 className="text-xl font-semibold mb-2">Santé et bien-être</h3>
                                    <p className="text-muted-foreground text-sm">
                                        Examens génétiques ciblés, suivi vétérinaire et alimentation premium pour des chiots robustes dès la naissance.
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
                                    <h3 className="text-xl font-semibold mb-2">Socialisation précoce</h3>
                                    <p className="text-muted-foreground text-sm">
                                        Jeux, sorties quotidiennes et découvertes progressives afin de préparer des chiens bien dans leurs pattes.
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
                                        Visites sur rendez-vous, livret d&apos;élevage détaillé et conseils partagés avant et après l&apos;adoption.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    {/* Approach Section */}
                    <section className="mb-16">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="relative h-64 md:h-100 rounded-lg overflow-hidden md:order-2">
                                <Image src="/adorable-chien-au-lit.webp" alt="Notre approche" fill className="object-cover" />
                            </div>
                            <div className="space-y-6 md:order-1">
                                <Badge variant="secondary" className="w-fit">
                                    <Star className="h-4 w-4 mr-2" />
                                    Notre approche
                                </Badge>
                                <h2
                                    className="text-xl md:text-2xl font-bold">Une méthode d&apos;élevage responsable</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Portées limitées, temps dédié à chaque chiot et famille, et un suivi personnalisé sur le tempérament et les besoins.
                                </p>
                                <div className="space-y-3">
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                                        <p className="text-sm">Parents testés et radiographiés, tempéraments stables et joyeux</p>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                                        <p className="text-sm">Stimulation neurosensorielle dès les premiers jours</p>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                                        <p className="text-sm">Livret d&apos;accueil, kit chiot et accompagnement à la socialisation</p>
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
                                L&apos;élevage est situé dans le Jura non loin de la commune de Saint-Amour !
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Notre élevage est consacre exclusivement au teckel à poil ras, et aux caractéristiques rares !
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Né de notre coup de cœur pour le teckel : un petit chien vif, affectueux, loyal et courageux. En
                                tant qu&apos;éducateur canin comportementaliste, j&apos;ai trouvé que le teckel possédait énormément de
                                qualités qui font de lui un excellent chien de compagnie ! Leur proximité avec l&apos;humain a été une
                                grande surprise : ce sont dès chiens en demande d&apos;affection et d&apos;amour qui font preuve d&apos;une

                                grande loyauté !
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Ils ont accès à des structures chauffées, sécurisées, et un terrain d&apos;un hectare pour se balader, ils savent également marcher en laisse.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Notre priorité : des chiots équilibrés, des couleurs rares, proches de l&apos;humain, habitués à la vie de famille. Nous partageons volontiers nos choix de sélection, de socialisation et nos petites astuces du quotidien.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">Les familles repartent avec bien plus qu&apos;un chiot : un suivi, des conseils et la communauté des pomsky de l&apos;élevage Royal POMSKY !
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
                                        Sorties quotidiennes, enrichissement olfactif et rythmes respectés pour des pomsky sereins et joueurs.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="bg-muted/80">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-semibold mb-4">Suivi vétérinaire</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        Vaccins, identification, vermifuges réguliers et bilan santé complet remis le jour du départ.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="bg-muted/80">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-semibold mb-4">Transparence</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        Livret détaillé, contrats clairs, photos et vidéos régulières de l&apos;évolution des chiots.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="bg-muted/80">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-semibold mb-4">Accompagnement</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        Conseils d&apos;éducation, kit de transition et disponibilité après l&apos;adoption pour répondre à vos questions.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    <FAQSection
                        title="FAQ teckel et élevage"
                        description="Nos réponses sur le caractère, la taille et l'histoire du teckel pour préparer votre visite."
                        items={faqPresentation}
                    />
                    {/* CTA Section */}
                    <section className="text-center space-y-6">
                        <h2
                            className="text-xl md:text-2xl font-bold">Envie de rencontrer nos pomsky ?</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Planifiez une visite ou inscrivez-vous pour suivre l&apos;ouverture des réservations sur nos prochaines portées.
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
                        <div className="text-right text-xs text-muted-foreground mt-6">
                            Dernière mise à jour : {lastMod}
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}
