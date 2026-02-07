import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FAQSection } from "@/components/faq"
import { faqBienEtre } from "@/lib/faq-data"
import { Calendar, MapPin, Bed, Utensils, Dumbbell, SpadeIcon as Spa, PawPrint, Dog } from "lucide-react"
import type { Metadata } from "next"
import { pageMetadata, returnLastmod, siteConfig } from "@/lib/seo-config"
import { pageContent } from "@/lib/page-content"
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators"
import { convertFAQsToSchema } from "@/lib/faq-utils"
import Link from "next/link"
import ImageCarousel from "@/components/client/carousel/ImageCarousel"

export const metadata: Metadata = {
    title: pageMetadata.wellness.title,
    description: pageMetadata.wellness.description,
    keywords: pageMetadata.wellness.keywords,
    openGraph: {
        title: pageMetadata.wellness.title,
        description: pageMetadata.wellness.description,
        url: `${siteConfig.siteUrl}/bien-etre-animal`,
        images: [{ url: `${siteConfig.siteUrl}${siteConfig.ogImage}` }],
    },
    alternates: {
        canonical: `${siteConfig.siteUrl}/bien-etre-animal`,
    },
}

export default function SejoursPage() {
    // Schémas JSON-LD
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Accueil", url: "/" },
        { name: "Bien-être animal", url: "/bien-etre-animal" },
    ])
    const faqSchema = generateFAQSchema(convertFAQsToSchema(faqBienEtre))


    const lastMod = returnLastmod(siteConfig.pages.wellness)

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

            <div className="py-16">
                <div className="container mx-auto">
                    <section className="text-center space-y-6 mb-16">
                        <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
                            <Image src="/locaux.webp" alt="Portée de pomsky dans le Jura" fill className="object-cover" />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                <div className="text-white text-center space-y-4">
                                    <h1 className="text-xl md:text-3xl font-bold">{pageContent.wellness.h1}</h1>
                                    <div className="flex flex-col items-center justify-center space-x-4 p-2 md:flex-row">
                                        <Calendar className="h-5 w-5" aria-hidden="true" />
                                        <span className="md:text-lg">Prochaine portée prévue premier semestre 2026</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Portée Info */}
                    <section className="text-center mb-16">
                        <h2 className="text-xl md:text-2xl font-bold mb-4">{pageContent.wellness.description}</h2>
                        <div className="flex flex-col md:flex-row items-center justify-center text-muted-foreground mb-8 gap-6">
                            <div className="flex flex-col items-center justify-center md:flex-row">
                                <MapPin className="h-4 w-4" aria-hidden="true" />
                                <span className="ml-2">Saint Amour, Jura</span>
                            </div>
                            <div className="flex flex-col items-center justify-center p-2 md:flex-row">
                                <Dog className="h-4 w-4" />
                                {/* <span>6 chiots attendus</span> */}
                                <span className="ml-2">La nouvelle portée déjà reservée <Link href="/contact" className="text-blue-700 underline hover:text-blue-500">(inscrivez vous pour la prochaine)</Link></span>
                            </div>
                        </div>
                    </section>
                    {/* Nursery Sections */}
                    <div className="space-y-16">
                        {/* Nursery */}
                        <section>
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div className="space-y-6">
                                    <Badge variant="secondary" className="w-fit">
                                        <Bed className="h-4 w-4 mr-2" />
                                        Nursery intérieure
                                    </Badge>
                                    <h3 className="text-xl md:text-2xl font-bold">Un cocon dès la naissance</h3>
                                     <p className="text-muted-foreground leading-relaxed">
                                        La nursery intérieure est pensée comme un véritable cocon, calme et sécurisé, où chaque chiot peut évoluer dans les meilleures conditions dès ses premières heures de vie. La température, l'hygiène et l'ambiance sonore sont maîtrisées afin de limiter le stress et de favoriser un développement harmonieux, aussi bien physique qu'émotionnel.
                                    </p>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Les chiots naissent dans une salle de mise bas : une pièce tempérée, sous surveillance et avec une présence humaine continue. Nous assurons un suivi vétérinaire rapproché et des pesées quotidiennes.
                                    </p>
                                     <p className="text-muted-foreground leading-relaxed">
                                        Cette présence humaine quotidienne permet aux chiots de s'habituer très tôt aux manipulations douces, aux odeurs et aux bruits du quotidien. Cette phase essentielle pose les bases d'un chiot confiant, serein et réceptif, facilitant les apprentissages futurs et la transition vers sa nouvelle famille. 
                                    </p>
                                </div>
                                <div className="relative h-64 md:h-122 rounded-lg overflow-hidden">
                                    <ImageCarousel
                                        images={[
                                            "pages/conditions-de-vie/cocom-pour-chiots-pomsky.jpg",
                                            "pages/conditions-de-vie/bebe-chiots-lit-douillet.jpg",
                                            "pages/conditions-de-vie/salle-ambiante-pour-chiots.jpg",
                                        ]}
                                        alt="Nursery pour chiots pomsky"
                                    />
                                </div>
                            </div>
                        </section>
                        {/* Espaces Intérieurs */}
                        <section className="bg-muted/30 -mx-4 px-4 py-16 rounded-lg">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div className="relative h-64 md:h-122 rounded-lg overflow-hidden md:order-2">
                                    <ImageCarousel
                                        images={[
                                            "pages/conditions-de-vie/pomsky-joue-avec-balle-plastique.png",
                                            "pages/conditions-de-vie/chiots-jouent-dans-bac-a-boules.png",
                                            "pages/conditions-de-vie/ensemble-de-jouets-pour-chiots.png",
                                        ]}
                                        alt="Jeux d'éveil pour chiots pomsky"
                                    />
                                </div>
                                <div className="space-y-6 md:order-1">
                                    <Badge variant="secondary" className="w-fit">
                                        <Spa className="h-4 w-4 mr-2" />
                                        Socialisation
                                    </Badge>
                                    <h3 className="text-xl md:text-2xl font-bold">Jeux d&apos;éveil et découvertes</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Tunnels, textures, sons doux et rencontres quotidiennes : nous multiplions les expériences positives pour
                                        des pomsky curieux et équilibrés.
                                    </p>
                                </div>
                            </div>
                        </section>
                        {/* Espaces Extérieurs */}
                        <section>
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div className="space-y-6">
                                    <Badge variant="secondary" className="w-fit">
                                        <Dumbbell className="h-4 w-4 mr-2" />
                                        Jardin sécurisé
                                    </Badge>
                                    <h3 className="text-xl md:text-2xl font-bold">Des sorties régulières en pleine nature, au cœur de l'éducation Royal Pomsky</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Chez Royal Pomsky, le bien-être et l'équilibre de nos chiens et chiots sont une priorité quotidienne. Au-delà d'un environnement sécurisé à la maison, nous accordons une place essentielle aux sorties régulières en pleine nature, encadrées par les éleveurs.
                                    </p>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Forêts, jardins, lacs, prairies et chemins de campagne font partie intégrante de leur quotidien. Ces promenades permettent aux chiens adultes comme aux chiots de découvrir des environnements variés, de développer leur curiosité naturelle et de renforcer leur confiance face aux bruits du monde extérieur.
                                    </p>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Les chiots bénéficient ainsi très tôt d'une socialisation progressive et positive : nouveaux sons, nouvelles odeurs, terrains différents, interactions avec leurs congénères et avec l'humain. Cette stimulation douce favorise leur équilibre émotionnel, leur capacité d'adaptation et prépare sereinement leur future vie de chien de famille.
                                    </p>
                                    <p className="text-muted-foreground leading-relaxed">
                                        À la maison, cet apprentissage est complété par un parc d'herbe clôturé, des jeux en extérieur et un apprentissage progressif de la propreté, toujours dans le respect du rythme de chaque chiot.
                                    </p>
                                    <p className="text-muted-foreground leading-relaxed">
                                        L'engagement de Royal Pomsky est : élever des chiens bien dans leurs pattes, sociables, équilibrés et prêts à s'épanouir pleinement au sein de leur future famille.
                                    </p>
                                </div>
                                <div className="relative h-64 md:h-122 rounded-lg overflow-hidden">
                                    <ImageCarousel
                                        images={[
                                            "pages/conditions-de-vie/sortie-encadree-avec-marine.png",
                                            "pages/conditions-de-vie/marine-joue-avec-les-chiots.png",
                                            "pages/conditions-de-vie/sortie-avec-les-pomsky-adultes.png",
                                            "pages/conditions-de-vie/pomsky-adulte-joue-avec-marine.png"
                                        ]}
                                        alt="Chiots pomsky dans le jardin"
                                    />
                                </div>
                            </div>
                        </section>
                        {/* Alimentation */}
                        <section className="bg-muted/30 -mx-4 px-4 py-16 rounded-lg">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div className="relative h-64 md:h-80 rounded-lg overflow-hidden md:order-2">
                                    <ImageCarousel
                                        images={[
                                            "pages/conditions-de-vie/pomsky-nurcery-veterinaire.png",
                                            "pages/conditions-de-vie/beurk-food.png",
                                        ]}
                                        alt="Alimentation premium"
                                    />
                                </div>
                                <div className="space-y-6 md:order-1">
                                    <Badge variant="secondary" className="w-fit">
                                        <Utensils className="h-4 w-4 mr-2" />
                                        Alimentation
                                    </Badge>
                                    <h3
                                        className="text-xl md:text-2xl font-bold">Nutrition et soins adaptée</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Sevrage en douceur, croquettes premium et introduction au BARF pour les familles qui le souhaitent.
                                        Un kit alimentaire de départ est remis le jour du départ.
                                    </p>
                                </div>
                            </div>
                        </section>
                        {/* Chambres */}
                        <section>
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div className="space-y-6">
                                    <Badge variant="secondary" className="w-fit">
                                        <Bed className="h-4 w-4 mr-2" />
                                        Temps calme
                                    </Badge>
                                    <h3
                                        className="text-xl md:text-2xl font-bold">Attente avec maman</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Espaces de repos individuels pour faciliter l&apos;apprentissage du calme et la gestion douce des séparations.
                                    </p>
                                </div>
                                <div className="relative h-104 md:h-180 rounded-lg overflow-hidden">
                                    <ImageCarousel
                                        images={[
                                            "pomsky-mom-with-her-two-baby.png",
                                            "two-pomsky-puppy.webp",
                                        ]}
                                        alt="Espace repos des chiots"
                                    />
                                </div>
                            </div>
                        </section>
                    </div>
                    {/* Programme Type */}
                    <section className="mt-16">
                        <div className="text-center mb-12">
                            <h2
                                className="text-xl md:text-2xl font-bold mb-4">Planning de socialisation</h2>
                            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <Card className="bg-muted/40">
                                <CardHeader>
                                    <CardTitle>Matin</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <p>
                                            <strong>8h :</strong> Pesée, câlins et nettoyage de la nurserie
                                        </p>
                                        <p>
                                            <strong>9h :</strong> Jeux d&apos;éveil et manipulations douces
                                        </p>
                                        <p>
                                            <strong>10h :</strong> Sortie au jardin ou sur la terrasse
                                        </p>
                                        <p>
                                            <strong>11h :</strong> Séance d&apos;imprégnation sons et textures
                                        </p>
                                        <p>
                                            <strong>12h :</strong> Sieste et repas de la mère
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="bg-muted/40">
                                <CardHeader>
                                    <CardTitle>Après-midi</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <p>
                                            <strong>13h :</strong> Repas des chiots et jeux calmes
                                        </p>
                                        <p>
                                            <strong>14h :</strong> Présentation de nouveaux objets/odeurs
                                        </p>
                                        <p>
                                            <strong>15h :</strong> Séances individuelles avec manipulation vétérinaire simulée
                                        </p>
                                        <p>
                                            <strong>16h30 :</strong> Visite des familles réservataires (sur rendez-vous)
                                        </p>
                                        <p>
                                            <strong>19h :</strong> Dernière sortie, câlins et mise au repos
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </section>
                    <FAQSection
                        title="FAQ adoption et quotidien"
                        description="Tout ce qu'il faut savoir sur le caractère, l'éducation, la cohabitation et les soins du pomsky."
                        items={faqBienEtre}
                    />
                    {/* Localisation */}
                    <section className="mt-16 text-center">
                        <h2
                            className="text-xl md:text-2xl font-bold mb-4">Visiter l&apos;élevage</h2>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8" />
                        <p className="text-muted-foreground max-w-3xl mx-auto">
                            Notre élevage se situe dans le Jura. Les visites se font exclusivement sur
                            rendez-vous pour préserver la tranquillité des chiots et des mamans.
                        </p>
                        <Link
                            href="/contact"
                            className="flex items-center mt-6 w-fit m-auto bg-primary justify-center text-white hover:bg-primary/80 p-4 font-semibold dark:text-[#5b3a1a] rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        >Contacter l'élevage</Link>
                        <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-3 text-muted-foreground">
                            <PawPrint className="h-5 w-5" aria-hidden="true" />
                            <span>Parking sur place et promenade à quelques minutes.</span>
                        </div>
                    </section>
                    <div className="text-right text-xs text-muted-foreground mt-6">
                        Dernière mise à jour : {lastMod}
                    </div>
                </div>
            </div>
        </>
    )
}





