import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FAQSection } from "@/components/faq"
import { faqPomsky } from "@/lib/faq-data"
import type { Metadata } from "next"
import { buildOpenGraph, buildTwitter, pageMetadata, returnLastmod, siteConfig } from "@/lib/seo-config"
import { pageContent } from "@/lib/page-content"
import { convertFAQsToSchema } from "@/lib/faq-utils"
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators"
import { Feather, Heart, History, PawPrint, Ruler, Scale, ScrollText, Sparkles } from "lucide-react"

export const metadata: Metadata = {
    title: pageMetadata.pomsky.title,
    description: pageMetadata.pomsky.description,
    keywords: pageMetadata.pomsky.keywords,
    openGraph: buildOpenGraph({
        title: pageMetadata.pomsky.title,
        description: pageMetadata.pomsky.description,
        url: `${siteConfig.siteUrl}/le-pomsky`,
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
        title: pageMetadata.pomsky.title,
        description: pageMetadata.pomsky.description,
        imageUrl: `${siteConfig.siteUrl}${siteConfig.ogImage}`,
    }),
    alternates: {
        canonical: `${siteConfig.siteUrl}/le-pomsky`,
    },
}

const sizes = [
    {
        title: pageContent.pomsky.h3toy,
        chest: "25 à 34 cm",
        weight: "3,5 à 5 kg",
        text: "Le plus petit gabarit. Très proche de ses humains, expressif et joueur, c'est le plus petit de tous les Pomsky ! Il représente la taille d'un husky à deux mois, durant toute sa vie. Le toy est énergique, sa petite taille n'en fait pas un chien de canapé.Il est plus facilement transportable lors de déplacements, s'il est habitué il voyagera aisément en sac à dos par exemple ! Cela permet d'avoir un compagnon idéal pour la vie citadine.",
        image: "/size-for-toy-pomsky.webp",
        alt: "comparatif de taille d'un pomsky toy vs husky",
        pawSize: 4,
    },
    {
        title: pageContent.pomsky.h3Miniature,
        chest: "35 à 40 cm",
        weight: "6 à 9 kg",
        text: "C'est le format qui met tout le monde d'accord : entre deux tailles, il est l'équivalent de la taille d'un husky de 4 mois toute sa vie. Vif, proche de l'humain, son format lui permet d'être plus facile à gérer. Il garde une morphologie extrêmement équilibrée en génération avancée..",
        image: "/size-for-mini-pomsky.webp",
        alt: "comparatif de taille d'un pomsky miniature vs husky",
        pawSize: 5,
    },
    {
        title: pageContent.pomsky.h3Standard,
        chest: "41 à 45 cm",
        weight: "9 à 12 kg",
        text: "Le plus grand gabarit. Il conserve l'allure du Husky, de la taille équivalente à un husky de 5 mois environ toute sa vie ! il n'est pas plus énergique que les tailles miniatures où Toy. Sa prestance impressionne tant le standard est un chien équilibré et facile à vivre.",
        image: "/size-for-standard-pomsky.webp",
        alt: "comparatif de taille d'un pomsky standard vs husky",
        pawSize: 6,
    },
]

const generations = [
    {
        title: "F1 : première génération de pomsky",
        description:
            "Croisement initial entre une femelle Husky Sibérien et un mâle Spitz nain (Poméranien). Résultat : Les chiots peuvent varier en taille, en morphologie et en caractère et être plus primitifs ( en raison de la maman qui est un husky )",
        image: "/pages/le-pomsky/femmelle-pomsky-f1.webp",
        alt: "Pomsky F1 debout le regard assuré et fière.",
    },
    {
        title: "F2 : deuxième génération de pomsky",
        description:
            "Croisement entre deux Pomskys F1. Les portées deviennent un peu plus homogènes, mais le résultat reste encore variable notamment en taille.",
        image: "/pages/le-pomsky/chiot-pomsky-f2-avec-citrouille.jpeg",
        alt: "Pomsky F2 assis à coté d'une citrouille d'halloween.",
    },
    {
        title: "F3 à F5 : stabilisation",
        description:
            "Plus la génération avance, plus le type, le comportement, la morphologie idéale et le marquage se stabilisent. À partir de F5, on parle souvent de Pomsky multigénérationnel.",
        image: "/pages/le-pomsky/pomsky-male-f3-pelage-fluffy.jpeg",
        alt: "Pomsky F3 en position de concentration fixant un object non visible",
    },
]

export default function dogPage() {
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Accueil", url: "/" },
        { name: "Le Pomsky", url: siteConfig.pages.pomsky },
    ])
    const faqSchema = generateFAQSchema(convertFAQsToSchema(faqPomsky))
    const lastMod = returnLastmod(siteConfig.pages.pomsky)

    return (
        <>
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
                    <section className="grid md:grid-cols-2 gap-10 items-center mb-16">
                        <div className="space-y-6">
                            <Badge variant="secondary" className="w-fit">
                                Le pomsky
                            </Badge>
                            <h1 className="text-xl md:text-3xl font-bold">
                                {pageContent.pomsky.h1}
                            </h1>
                            <p className="text-lg text-muted-foreground leading-relaxed">{pageContent.pomsky.description}</p>
                            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                                <div className="flex items-center gap-2">
                                    <Heart className="h-4 w-4 text-primary" aria-hidden="true" />
                                    <span>Compagnon proche de sa famille</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
                                    <span>Intelligent et attentif</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Feather className="h-4 w-4 text-primary" aria-hidden="true" />
                                    <span>Format adapté à la vie moderne</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-72 md:h-105 rounded-lg overflow-hidden bg-black">
                            <Image
                                src="/pages/le-pomsky/pomsky-f4-et-une-citrouille.jpeg"
                                alt="Pomsky chiot f4 avec ses pattes avant sur un citrouille d'halloween"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" aria-hidden="true" />
                        </div>
                    </section>

                    <section className="mb-16 space-y-10">
                        <div className="text-center space-y-3">
                            <h2 className="text-xl md:text-2xl font-bold">{pageContent.pomsky.h2}</h2>
                            <p className="text-muted-foreground max-w-xl mx-auto">
                                On distingue généralement trois tailles : toy (ou micro), miniature et standard.
                                Les tailles sont exprimées au garrot.
                            </p>
                            <div className="w-24 h-1 bg-primary mx-auto rounded-full" aria-hidden="true" />
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {sizes.map((item) => (
                                <Card key={item.title} className="flex flex-col bg-muted/60 h-full overflow-hidden">
                                    <CardHeader>
                                        <div className="flex items-center justify-between">
                                            <CardTitle className="text-xl">{item.title}</CardTitle>
                                            <PawPrint className={`h-${item.pawSize} w-`} />
                                        </div>
                                    </CardHeader>
                                    <CardContent className="space-y-3 text-sm text-muted-foreground">
                                        <div className="relative aspect-4/3 w-full overflow-hidden rounded-md mb-10 bg-black">
                                            <Image
                                                src={item.image}
                                                alt={item.alt}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Ruler className="h-4 w-4 text-primary" aria-hidden="true" />
                                            <span>Taille au garrot : {item.chest}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Scale className="h-4 w-4 text-primary" aria-hidden="true" />
                                            <span>Poids moyen : {item.weight}</span>
                                        </div>
                                        <p className="leading-relaxed">{item.text}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        <Card className="bg-primary/2 border-primary/10">
                            <CardContent className="py-6 px-6 md:px-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                                <div className="space-y-3">
                                    <h3 className="text-2xl font-semibold">Une seule race, trois formats</h3>
                                    <p className="text-muted-foreground max-w-3xl">
                                        Le poids suit la taille mais n'est pas indicative de la catégorie. Seule la taille au garrot l'est, cependant voici un exemple de proportions : 3,5 à 5 kg pour les toy/micro, 6 à 8 kg pour les miniatures, 9 à 12 kg pour les standards.
                                    </p>
                                </div>
                                <div className="text-sm text-muted-foreground bg-background/60 border rounded-lg p-4 space-y-2 max-w-xs">
                                    <p className="font-semibold text-foreground">En résumé :</p>
                                    <ul className="list-disc ml-4 space-y-1">
                                        <li>Standard : 41 à 45 cm, 9 à 12 kg</li>
                                        <li>Miniature : 35 à 40 cm, 6 à 9 kg</li>
                                        <li>Toy/Micro : 25 à 34 cm, 3,5 à 5 kg</li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>
                    </section>

                    <section className="mb-16 grid lg:grid-cols-2 gap-8 items-center">
                        <div className="space-y-4">
                            <Badge variant="secondary" className="w-fit">
                                Origines
                            </Badge>
                            <h2 className="text-xl md:text-2xl font-bold">{pageContent.pomsky.pomskyOrigin}</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Le Pomsky est né aux États-Unis. L'objectif : obtenir un chien de compagnie au look de Husky Sibérien (masque, regard, silhouette) dans un format plus petit ! Nous cherchons galement un comportement équilibré et plus adapté à notre époque et au mode de vie urbain.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Le résultat est merveilleux : c'est un mélange équilibré du Spitz nain et du husky qui en ressort avec un chien ayant le physique d'un nordique de traîneau, dans une petite taille, avec un comportement de parfait chien de compagnie.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                {
                                    icon: <History className="h-4 w-4 text-primary" aria-hidden="true" />,
                                    title: "Origines américaines",
                                    text: "Race récente, née aux USA et rapidement adoptée en Europe.",
                                },
                                {
                                    icon: <ScrollText className="h-4 w-4 text-primary" aria-hidden="true" />,
                                    title: "Croisement fondateur",
                                    text: "Husky Sibérien x Spitz nain : même allure que le Husky, mais en plus petit.",
                                },
                                {
                                    icon: <Heart className="h-4 w-4 text-primary" aria-hidden="true" />,
                                    title: "Création en 2012",
                                    text: "Association de deux éleveuses : Arctic Design Pomskies et Apex Pomskies.",
                                },
                                {
                                    icon: <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />,
                                    title: "Pomsky vs Klee Kai",
                                    text: "Le Pomsky est un chien de compagnie, plus accessible à l'éducation que l'Alaskan Klee Kai.",
                                },
                            ].map((item) => (
                                <Card key={item.title} className="bg-muted/60 h-full">
                                    <CardHeader className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            {item.icon}
                                            <CardTitle className="text-base">{item.title}</CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>
                    <section className="mb-16 space-y-8">
                        <div className="text-center space-y-3">
                            <h2 className="text-xl md:text-2xl font-bold">Les générations de Pomsky</h2>
                            <p className="text-muted-foreground max-w-3xl mx-auto">
                                La lettre F désigne la filiation. Plus la génération est avancée,
                                plus les portées sont homogènes en taille, en type et en comportement.
                            </p>
                            <div className="w-24 h-1 bg-primary mx-auto rounded-full" aria-hidden="true" />
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            {generations.map((generation) => (
                                <Card
                                    key={generation.title}
                                    className="bg-muted/60 h-full flex flex-col"
                                >
                                    {/* Titre – toujours en haut */}
                                    <CardHeader className="pb-2">
                                        <CardTitle className="text-xl">
                                            {generation.title}
                                        </CardTitle>
                                    </CardHeader>

                                    {/* Corps de carte */}
                                    <CardContent className="flex flex-col flex-1">
                                        {/* Description – zone centrale */}
                                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                            {generation.description}
                                        </p>

                                        {/* Image – toujours en bas */}
                                        <div className="relative h-72 rounded-md overflow-hidden mt-auto">
                                            <Image
                                                src={generation.image}
                                                alt={generation.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                        <Card className="bg-muted/60">
                            <CardContent className="py-6 px-6 space-y-3 text-muted-foreground">
                                <p className="font-semibold text-foreground">Le cas des Pomsky « B » (Backcross)</p>
                                <p className="leading-relaxed">
                                    Un Pomsky peut être recroisé avec un Husky ou un Poméranien pour renforcer une caractéristique
                                    physique. On parle alors de F1B, F2B, F3B selon la génération du parent Pomsky.
                                </p>
                                <ul className="list-disc ml-4 space-y-1">
                                    <li>Retour Husky : plus grand, look plus nordique</li>
                                    <li>Retour Poméranien : plus petit, type plus compact</li>
                                    <li>Impact possible sur la taille et le tempérament</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </section>

                    <section className="mb-16 space-y-6">
                        <div className="text-center space-y-3">
                            <h2 className="text-xl md:text-2xl font-bold">Traits physiques et couleurs</h2>
                            <p className="text-muted-foreground max-w-3xl mx-auto">
                                Le Pomsky hérite du Husky ses yeux expressifs, son masque et sa robe.
                                Les couleurs sont variées : agouti, gris, noir, gris loup, chocolat, red, etc.
                                Le poil peut être long (wooly), mi-long (plush) ou standard.
                            </p>
                            <div className="w-24 h-1 bg-primary mx-auto rounded-full" aria-hidden="true" />
                        </div>

                        <div className="grid md:grid-cols-2 auto-rows-fr items-stretch gap-6">
                            <Card className="bg-muted/60 flex flex-col h-full overflow-hidden">
                                <CardHeader>
                                    <CardTitle className="text-xl">Les yeux du Pomsky</CardTitle>
                                </CardHeader>
                                <CardContent className="flex flex-1 text-sm flex-col text-muted-foreground leading-relaxed space-y-3">
                                    <div className="mt-4 space-y-3">
                                        <p>
                                            Les yeux bleus sont très prisés, mais on peut aussi rencontrer des yeux verts, ambre,
                                            bruns, hétérochromes ou vairons. Cette diversité est héritée du Husky Sibérien.
                                        </p>
                                        <p>
                                            Le regard est intense et expressif, ce qui participe beaucoup au charme du Pomsky.
                                        </p>
                                    </div>
                                    <div className="relative mt-auto w-full flex-[0_0_50%] min-h-48 md:min-h-56 overflow-hidden rounded-md">
                                        <Image
                                            src="/pomsky-eye-colors-blue-brown-heterochromia.webp"
                                            alt="Montage de plusieurs couleurs des yeux du Pomsky"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="bg-muted/60 flex flex-col h-full overflow-hidden">
                                <CardHeader>
                                    <CardTitle className="text-xl">Morphologie générale</CardTitle>
                                </CardHeader>
                                <CardContent className="flex flex-1 text-sm flex-col text-muted-foreground leading-relaxed space-y-3">
                                    <div className="mt-4 space-y-3">
                                        <p>
                                            Le corps est compact, la queue est touffue et enroulée au-dessus du dos.
                                            Les oreilles sont triangulaires, hautes et plutôt proches l'une de l'autre.
                                        </p>
                                        <p>
                                            Le Pomsky est une race en devenir, non reconnue au LOF aujourd'hui.
                                        </p>
                                    </div>
                                    <div className="relative mt-auto w-full flex-[0_0_50%] min-h-48 md:min-h-56 overflow-hidden rounded-md">
                                        <Image
                                            src="/pages/le-pomsky/male-pomsky-chocolat.webp"
                                            alt="Pomsky couleur chocolat qui tire la langue"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    <section className="mb-16 space-y-6 bg-muted/40 rounded-lg p-8">
                        <div className="text-center space-y-3">
                            <h2 className="text-xl md:text-2xl font-bold">{pageContent.pomsky.googToKnow}</h2>
                            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                                L'espérance de vie d'un Pomsky est généralement comprise entre 15 et 17 ans.
                                C'est un engagement au long cours : sorties quotidiennes, stimulation intellectuelle
                                et vraie présence.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <Card className="bg-background/70">
                                <CardHeader>
                                    <CardTitle className="text-xl">Caractère et éducation</CardTitle>
                                </CardHeader>
                                <CardContent className="text-sm text-muted-foreground leading-relaxed space-y-3">
                                    <p>
                                        Chien de compagnie, proche de l'humain, enjoué et actif, le Pomsky s'éduque plutôt bien
                                        si l'approche est positive, cohérente et régulière.
                                        La socialisation précoce reste essentielle.
                                    </p>
                                    <p>
                                        Un éducateur canin peut vous aider à mettre en place de bonnes bases
                                        et des activités adaptées.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="bg-background/70">
                                <CardHeader>
                                    <CardTitle className="text-xl">Santé et robustesse</CardTitle>
                                </CardHeader>
                                <CardContent className="text-sm text-muted-foreground leading-relaxed space-y-3">
                                    <p>
                                        Grâce aux gènes du Husky, le Pomsky est globalement robuste.
                                        Dans un élevage sérieux, les parents sont dépistés pour les tares génétiques
                                        et testés ADN.
                                    </p>
                                    <p>
                                        Cela réduit fortement le risque de maladies héréditaires.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <Card className="bg-background/70">
                                <CardHeader>
                                    <CardTitle className="text-xl">Soins et entretien</CardTitle>
                                </CardHeader>
                                <CardContent className="text-sm text-muted-foreground leading-relaxed space-y-3">
                                    <p>
                                        Le Pomsky n'est pas compliqué d'entretien : un brossage une fois par semaine à raison de 15 minutes maximum sera nécessaire pour préserver la beauté du pelage : durant les périodes de mue (2x par an ), un toilettage sera utile, ou un bain suivi d'un brossage quotidienpour l'aider à enlever sa mue. Une fois la mue faite, le pelage ne tombe plus jusqu'à la prochaine mue.
                                    </p>
                                    <p>Des soins classiques des yeux et des oreilles de temps à autres. </p>
                                    <p>
                                        Alimentation riche en protéines et pauvre en amidon conseillée. Des traitements antiparasitaires et des vermifuge plusieurs fois par an seront nécessaire.
                                        Une visite de contrôle annuel chez le vétérinaire. C'est un chien extrêmement robuste.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="bg-background/70">
                                <CardHeader>
                                    <CardTitle className="text-xl">Prix et adoption</CardTitle>
                                </CardHeader>
                                <CardContent className="text-sm text-muted-foreground leading-relaxed space-y-3">
                                    <p>
                                        Le prix d'un Pomsky se situe généralement entre 3 000 et 6 000 euros selon la taille, la rareté des traits (yeux, marquage), la lignée et la génération.
                                    </p>
                                    <p>
                                        Dans un élevage professionnel vous bénéficiez de garanties de santé, d'un suivi et de conseils concrets.
                                    </p>
                                    <Link
                                        href="/chiots-disponibles"
                                        className="border border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-md font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                    >
                                        Voir nos chiots disponibles
                                    </Link>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    <section className="mb-16 text-center space-y-6">
                        <h2 className="text-xl md:text-2xl font-bold">Un compagnon vif et équilibré</h2>
                        <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            Actif, sociable et joueur, le Pomsky s'épanouit avec des sorties régulières,
                            des activités variées et une vraie proximité avec sa famille.
                            Avec des enfants ou d'autres animaux, la cohabitation se passe bien si la
                            socialisation est faite tôt et que chacun respecte son espace.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/chiots-disponibles"
                                className="bg-primary text-white hover:bg-primary/80 px-6 py-3 rounded-md font-semibold dark:text-[#5b3a1a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                            >
                                Découvrir nos chiots
                            </Link>
                            <Link
                                href="/contact"
                                className="border border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-md font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                            >
                                Poser vos questions
                            </Link>
                        </div>
                    </section>

                    <FAQSection
                        title="FAQ sur le Pomsky"
                        description="Comportement, cohabitation, tailles et prix : tout ce qu'il faut savoir avant d'adopter."
                        items={faqPomsky}
                    />

                    <div className="text-right text-xs text-muted-foreground mt-6">
                        Dernière mise à jour : {lastMod}
                    </div>
                </div>
            </div>
        </>
    )
}
