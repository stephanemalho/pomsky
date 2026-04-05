import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { FAQSection } from "@/components/faq"
import { faqPomsky } from "@/lib/faq-data"
import { convertFAQsToSchema } from "@/lib/faq-utils"
import { buildOpenGraph, buildTwitter, pageMetadata, returnLastmod, siteConfig, sitemapPages } from "@/lib/seo-config"
import { generateBreadcrumbSchema, generateFAQSchema, generateWebPageSchema } from "@/lib/schema-generators"
import { Feather, Heart, History, PawPrint, Ruler, Scale, ScrollText, Sparkles } from "lucide-react"

const pomskyPageOgJpg = "/pages/le-pomsky/pomsky-f4-et-une-citrouille.jpg"
const pomskyPageOgWebp = "/pages/le-pomsky/pomsky-f4-et-une-citrouille.webp"

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
                url: `${siteConfig.siteUrl}${pomskyPageOgJpg}`,
                alt: "Pomsky au regard expressif chez Royal Pomsky",
                width: siteConfig.ogImageWidth,
                height: siteConfig.ogImageHeight,
                type: "image/jpeg",
            },
            {
                url: `${siteConfig.siteUrl}${pomskyPageOgWebp}`,
                alt: "Pomsky au regard expressif chez Royal Pomsky",
                width: siteConfig.ogImageWidth,
                height: siteConfig.ogImageHeight,
                type: "image/webp",
            },
        ],
    }),
    twitter: buildTwitter({
        title: pageMetadata.pomsky.title,
        description: pageMetadata.pomsky.description,
        imageUrl: `${siteConfig.siteUrl}${pomskyPageOgJpg}`,
    }),
    alternates: {
        canonical: `${siteConfig.siteUrl}/le-pomsky`,
    },
}

const heroTitle = "Pomsky : taille, caractère, origines, générations F1 à F5 et adoption"
const heroDescription =
    "Le Pomsky est un chien issu du croisement entre le Husky sibérien et le Spitz nain. Apprécié pour son apparence de Husky miniature, il séduit par son intelligence, sa proximité avec l’humain et ses différents formats, du Pomsky Toy au Pomsky standard. Cette page vous donne une vue d’ensemble claire sur la race. Pour chaque sujet plus précis, comme le prix, le budget global, les générations ou l’adoption, nous vous renvoyons ensuite vers nos pages dédiées."

const sizes = [
    {
        title: "Le Pomsky Toy",
        chest: "25 à 34 cm",
        weight: "3,5 à 5 kg",
        text: "Le Pomsky Toy est le plus petit gabarit. Très proche de ses humains, expressif et joueur, il combine une petite taille avec une vraie énergie. Son format le rend plus simple à transporter et souvent plus pratique pour une vie citadine, à condition de respecter ses besoins d’activité, de stimulation et d’éducation. Sa petite taille ne fait pas de lui un chien passif ou fragile par nature.",
        image: "/size-for-toy-pomsky.webp",
        alt: "Schéma comparatif de taille entre un Pomsky Toy et un Husky sibérien",
        linkHref: "/blog/pomsky/caracteristique/tout-savoir-sur-le-pomsky-toy-race-caracteristiques-et-conseils",
    },
    {
        title: "Le Pomsky miniature",
        chest: "35 à 40 cm",
        weight: "6 à 9 kg",
        text: "Le Pomsky miniature représente souvent le format le plus recherché pour son équilibre entre allure nordique, maniabilité et confort de vie. Vif, proche de l’humain et facile à intégrer dans le quotidien, il conserve une morphologie harmonieuse et un gabarit pratique pour de nombreuses familles.",
        image: "/size-for-mini-pomsky.webp",
        alt: "Schéma comparatif de taille entre un Pomsky miniature et un Husky sibérien",
        linkHref: "/blog/pomsky/caracteristique/decouvrez-le-pomsky-nain-un-adorable-compagnon-a-quatre-pattes",
    },
    {
        title: "Le Pomsky standard",
        chest: "41 à 45 cm",
        weight: "9 à 12 kg",
        text: "Le Pomsky standard est le plus grand des trois formats. Il conserve davantage la prestance du Husky tout en restant plus compact. Son gabarit plus grand ne signifie pas forcément qu’il est plus difficile à vivre : bien sélectionné et bien éduqué, il peut être tout aussi équilibré, proche de sa famille et agréable au quotidien.",
        image: "/size-for-standard-pomsky.webp",
        alt: "Schéma comparatif de taille entre un Pomsky standard et un Husky sibérien",
        linkHref: "/blog/pomsky/caracteristique/le-pomsky-adulte-tout-ce-que-vous-devez-savoir-sur-cette-race-unique",
    },
]

const origins = [
    {
        title: "Origine américaine",
        text: "Le développement du Pomsky débute aux États-Unis au début des années 2010. Le Pomsky Club of America est fondé en 2012, période qui marque la structuration de l’élevage spécialisé.",
        href: "https://americanpomskykennelclub.org/",
        label: "Découvrir l’American Pomsky Kennel Club",
        external: true,
        icon: <History className="h-4 w-4 text-primary" aria-hidden="true" />,
    },
    {
        title: "Croisement fondateur",
        text: "Le Pomsky est issu du croisement entre le Husky sibérien et le Spitz nain. Cette base explique son apparence nordique, son regard expressif et son format plus compact.",
        href: "/blog/pomsky/origine/quelle-est-lhistoire-du-pomsky-les-origines-du-chien-pomsky",
        label: "Lire notre article sur l’histoire du Pomsky",
        external: false,
        icon: <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />,
    },
    {
        title: "Pomsky et Alaskan Klee Kai : quelle différence ?",
        text: "Le Pomsky est généralement recherché comme chien de compagnie familial. Il est souvent perçu comme plus accessible à l’éducation et plus adaptable que l’Alaskan Klee Kai, selon les lignées et la qualité de socialisation.",
        href: "https://fr.wikipedia.org/wiki/Alaskan_Klee_Kai",
        label: "Comparer avec l’Alaskan Klee Kai",
        external: true,
        icon: <Heart className="h-4 w-4 text-primary" aria-hidden="true" />,
    },
]

const generations = [
    {
        title: "Pomsky F1",
        text: "Première génération issue du croisement initial entre Husky sibérien et Spitz nain. Les chiots peuvent être plus variables en taille, en morphologie et en caractère.",
        image: "/pages/le-pomsky/femmelle-pomsky-f1.webp",
        alt: "Pomsky F1 debout, utilisé pour illustrer la première génération",
    },
    {
        title: "Pomsky F2",
        text: "Croisement entre deux Pomskys F1. L’homogénéité progresse, mais des variations restent possibles.",
        image: "/pages/le-pomsky/chiot-pomsky-f2-avec-citrouille.webp",
        alt: "Pomsky F2 assis près d'une citrouille, utilisé pour illustrer la deuxième génération",
    },
    {
        title: "Pomsky F3 à F5",
        text: "À mesure que les générations avancent, le type, le marquage, la taille et le comportement deviennent généralement plus stables. À partir de F5, on parle souvent de Pomsky multigénérationnel.",
        image: "/pages/le-pomsky/pomsky-male-f3-pelage-fluffy.webp",
        alt: "Pomsky des générations avancées F3 à F5, avec fourrure fluffy",
    },
    {
        title: "Le cas des Pomsky B ou backcross",
        text: "Un Pomsky peut être recroisé avec un Husky ou un Poméranien pour renforcer certaines caractéristiques physiques. Ces recroisements peuvent influencer la taille, le type et parfois le tempérament.",
        image: "/pages/le-pomsky/male-pomsky-chocolat.webp",
        alt: "Pomsky adulte chocolat utilisé pour illustrer le cas des backcross",
    },
]

const adoptionChecks = [
    "Votre disponibilité quotidienne pour les sorties, l’éducation et la présence.",
    "Le sérieux de l’éleveur, la transparence sur les parents et les tests de santé.",
    "La cohérence entre la taille recherchée, votre mode de vie et vos attentes.",
    "La préparation de la famille avant l’arrivée du chiot à la maison.",
]

const furtherReadingCards = [
    {
        title: "Comprendre le prix d'adoption",
        text: "Consultez notre page dédiée aux tarifs Royal Pomsky pour comparer les catégories Standard, Miniature et Toy.",
        href: "/pomsky-prix",
    },
    {
        title: "Estimer le budget global",
        text: "Alimentation, vétérinaire, entretien, imprévus: notre guide vous aide à projeter le coût réel d'un Pomsky sur sa vie.",
        href: "/blog/pomsky/prix/pomsky-prix-guide-complet-pour-comprendre-le-cout-dadoption-et-dentretien",
    },
    {
        title: "Comprendre les générations",
        text: "F1, F2, F3, F4, F5: voyez ce que ces appellations signifient vraiment et ce qu'elles changent dans la lecture d'un chiot.",
        href: "/blog/pomsky/genetique/pomsky-f1-f2-f3-cest-quoi",
    },
    {
        title: "Préparer l'adoption",
        text: "Trajet, arrivée à la maison, première semaine et repères de départ: tout ce qu'il faut anticiper avant l'accueil du chiot.",
        href: "/adoption/reussir-son-adoption",
    },
]

export default function DogPage() {
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Accueil", url: "/" },
        { name: "Le Pomsky", url: siteConfig.pages.pomsky },
    ])
    const faqSchema = generateFAQSchema(convertFAQsToSchema(faqPomsky))
    const pageLastModValue = sitemapPages.find((page) => page.url === siteConfig.pages.pomsky)?.lastmod
    const webPageSchema = generateWebPageSchema({
        name: pageMetadata.pomsky.title,
        description: pageMetadata.pomsky.description,
        url: siteConfig.pages.pomsky,
        dateModified: pageLastModValue,
        about: ["Pomsky", "Pomsky Toy", "Pomsky Miniature", "Taille du Pomsky", "Caractère du Pomsky"],
    })
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
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
            />

            <div className="py-16">
                <div className="container mx-auto space-y-16">
                    <section className="grid gap-10 md:grid-cols-2 md:items-center">
                        <div className="space-y-6">
                            <Badge variant="secondary" className="w-fit">
                                Guide complet
                            </Badge>
                            <h1 className="text-2xl font-bold md:text-4xl">{heroTitle}</h1>
                            <p className="text-lg leading-relaxed text-muted-foreground">{heroDescription}</p>
                            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                                <div className="flex items-center gap-2">
                                    <Ruler className="h-4 w-4 text-primary" aria-hidden="true" />
                                    <span>Tailles toy, miniature et standard</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <ScrollText className="h-4 w-4 text-primary" aria-hidden="true" />
                                    <span>Générations F1 à F5</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Heart className="h-4 w-4 text-primary" aria-hidden="true" />
                                    <span>Conseils avant adoption responsable</span>
                                </div>
                            </div>
                        </div>

                        <figure className="space-y-3">
                            <div className="relative h-80 overflow-hidden rounded-2xl bg-black md:h-112">
                                <Image
                                    src="/pages/le-pomsky/pomsky-f4-et-une-citrouille.webp"
                                    alt="Pomsky adulte au regard expressif, utilisé comme visuel d'introduction à la race"
                                    fill
                                    priority
                                    fetchPriority="high"
                                    className="object-cover"
                                    sizes="(min-width: 768px) 50vw, 100vw"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-transparent" aria-hidden="true" />
                            </div>
                            <figcaption className="text-sm leading-relaxed text-muted-foreground">
                                Un visuel d&apos;ouverture pour présenter le type Pomsky, son expression nordique et son allure compacte.
                            </figcaption>
                        </figure>
                    </section>

                    <section className="space-y-6">
                        <div className="space-y-3">
                            <h2 className="text-xl font-bold md:text-2xl">Qu’est-ce qu’un Pomsky ?</h2>
                            <p className="max-w-4xl leading-relaxed text-muted-foreground">
                                Le Pomsky est un chien de compagnie né du croisement entre le Husky sibérien et le Spitz nain, aussi appelé Poméranien.
                                Encore non reconnu par la FCI, il attire par son allure nordique, son regard expressif et son format plus adapté à la vie moderne.
                                Le Pomsky est un compagnon intelligent, actif et proche de sa famille, qui demande une éducation cohérente, du temps et un cadre adapté.
                            </p>
                            <p className="max-w-4xl leading-relaxed text-muted-foreground">
                                Cette page a volontairement un rôle de synthèse. Son objectif est de vous aider à comprendre rapidement la race, puis de vous orienter vers les bons contenus si vous souhaitez approfondir un sujet précis comme le prix, le budget global, les générations ou l'adoption.
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-3">
                            <Card className="bg-muted/50">
                                <CardHeader className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
                                        <h3 className="font-semibold">Croisement fondateur</h3>
                                    </div>
                                </CardHeader>
                                <CardContent className="text-sm leading-relaxed text-muted-foreground">
                                    Le Pomsky réunit le type nordique du Husky et le format plus compact du Spitz nain.
                                </CardContent>
                            </Card>

                            <Card className="bg-muted/50">
                                <CardHeader className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <Heart className="h-4 w-4 text-primary" aria-hidden="true" />
                                        <h3 className="font-semibold">Chien de compagnie</h3>
                                    </div>
                                </CardHeader>
                                <CardContent className="text-sm leading-relaxed text-muted-foreground">
                                    Il recherche une vraie proximité avec sa famille et s’épanouit dans un environnement stable.
                                </CardContent>
                            </Card>

                            <Card className="bg-muted/50">
                                <CardHeader className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <ScrollText className="h-4 w-4 text-primary" aria-hidden="true" />
                                        <h3 className="font-semibold">Race en développement</h3>
                                    </div>
                                </CardHeader>
                                <CardContent className="text-sm leading-relaxed text-muted-foreground">
                                    La sélection des lignées et des générations joue un rôle important sur la stabilité du type et du comportement.
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    <section className="space-y-8">
                        <div className="space-y-3">
                            <h2 className="text-xl font-bold md:text-2xl">Quelles sont les tailles du Pomsky ?</h2>
                            <p className="max-w-4xl leading-relaxed text-muted-foreground">
                                On distingue généralement trois tailles de Pomsky : le Pomsky Toy, le Pomsky miniature et le Pomsky standard.
                                La catégorie se définit avant tout par la taille au garrot, plus que par le poids seul.
                            </p>
                        </div>

                        <div className="grid gap-6 lg:grid-cols-3">
                            {sizes.map((size) => (
                                <Link key={size.title} href={size.linkHref} className="group block h-full">
                                    <Card className="flex h-full flex-col overflow-hidden bg-muted/50 transition-colors group-hover:border-primary/50">
                                        <CardHeader className="space-y-4">
                                            <div className="flex items-center justify-between gap-4">
                                                <h3 className="text-xl font-semibold">{size.title}</h3>
                                                <PawPrint className="h-5 w-5 text-primary" aria-hidden="true" />
                                            </div>
                                            <figure className="space-y-3">
                                                <div className="relative aspect-4/3 overflow-hidden rounded-xl bg-black/80">
                                                    <Image
                                                        src={size.image}
                                                        alt={size.alt}
                                                        fill
                                                        className="object-contain"
                                                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                                                    />
                                                </div>
                                                <figcaption className="text-xs leading-relaxed text-muted-foreground">
                                                    Repère visuel pour comprendre le gabarit du {size.title.toLowerCase()} par rapport au Husky sibérien.
                                                </figcaption>
                                            </figure>
                                        </CardHeader>
                                        <CardContent className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                                            <div className="flex items-center gap-2">
                                                <Ruler className="h-4 w-4 text-primary" aria-hidden="true" />
                                                <span>Taille au garrot : {size.chest}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Scale className="h-4 w-4 text-primary" aria-hidden="true" />
                                                <span>Poids moyen : {size.weight}</span>
                                            </div>
                                            <p>{size.text}</p>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </section>

                    <section className="space-y-6">
                        <div className="space-y-3">
                            <h2 className="text-xl font-bold md:text-2xl">Différence entre Pomsky Toy, miniature et standard</h2>
                            <p className="max-w-4xl leading-relaxed text-muted-foreground">
                                Le Pomsky constitue une seule race en développement, mais il existe en plusieurs formats.
                                Le poids suit généralement la taille sans suffire à définir la catégorie. La référence principale reste la taille au garrot.
                            </p>
                        </div>

                        <Card className="border-primary/15 bg-primary/5">
                            <CardContent className="grid gap-6 px-6 py-6 md:grid-cols-[1.4fr_1fr] md:px-8">
                                <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                                    <p>
                                        Le format recherché influence surtout l’encombrement, la maniabilité au quotidien et l’impression générale du chien.
                                        En revanche, l’intelligence, le besoin de présence et la nécessité d’une éducation cohérente restent communs aux trois formats.
                                    </p>
                                    <p>
                                        Un élevage sérieux raisonne d’abord sur la lignée, la construction et la stabilité du chiot, pas seulement sur un chiffre annoncé à l’avance.
                                    </p>
                                </div>

                                <div className="rounded-xl border bg-background/80 p-4 text-sm text-muted-foreground">
                                    <p className="font-semibold text-foreground">En résumé :</p>
                                    <ul className="mt-3 space-y-2">
                                        <li>Pomsky Toy : 25 à 34 cm, 3,5 à 5 kg</li>
                                        <li>Pomsky miniature : 35 à 40 cm, 6 à 9 kg</li>
                                        <li>Pomsky standard : 41 à 45 cm, 9 à 12 kg</li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>
                    </section>

                    <section className="space-y-8">
                        <div className="space-y-3">
                            <h2 className="text-xl font-bold md:text-2xl">D’où vient le Pomsky ?</h2>
                            <p className="max-w-4xl leading-relaxed text-muted-foreground">
                                Le Pomsky est né aux États-Unis avec l’objectif d’obtenir un chien de compagnie au look de Husky sibérien dans un format plus petit.
                                Le travail de sélection a cherché à conserver des traits physiques nordiques, comme le masque, le regard ou la silhouette, tout en visant un comportement plus compatible avec la vie de famille et les modes de vie actuels.
                            </p>
                        </div>

                        <div className="grid gap-6 lg:grid-cols-3">
                            {origins.map((origin) => (
                                <Card key={origin.title} className="flex h-full flex-col bg-muted/50">
                                    <CardHeader className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            {origin.icon}
                                            <h3 className="font-semibold">{origin.title}</h3>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="flex h-full flex-col gap-4 text-sm leading-relaxed text-muted-foreground">
                                        <p>{origin.text}</p>
                                        {origin.external ? (
                                            <a
                                                href={origin.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="mt-auto inline-flex text-primary underline underline-offset-4"
                                            >
                                                {origin.label}
                                            </a>
                                        ) : (
                                            <Link href={origin.href} className="mt-auto inline-flex text-primary underline underline-offset-4">
                                                {origin.label}
                                            </Link>
                                        )}
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>

                    <section className="space-y-8">
                        <div className="space-y-3">
                            <h2 className="text-xl font-bold md:text-2xl">Que signifient les générations F1 à F5 chez le Pomsky ?</h2>
                            <p className="max-w-4xl leading-relaxed text-muted-foreground">
                                La lettre F désigne la filiation. Plus la génération est avancée, plus le type, la taille et le comportement tendent à se stabiliser.
                            </p>
                        </div>

                        <div className="grid gap-6 lg:grid-cols-2">
                            {generations.map((generation) => (
                                <Card key={generation.title} className="flex h-full flex-col overflow-hidden bg-muted/50">
                                    <div className="grid h-full gap-6 md:grid-cols-[1fr_1.1fr]">
                                        <figure className="flex h-full flex-col">
                                            <div className="relative min-h-64 bg-black/80">
                                                <Image
                                                    src={generation.image}
                                                    alt={generation.alt}
                                                    fill
                                                    className="object-cover"
                                                    sizes="(min-width: 1024px) 25vw, 100vw"
                                                />
                                            </div>
                                            <figcaption className="px-4 py-3 text-xs leading-relaxed text-muted-foreground">
                                                Illustration associée à {generation.title}, pour visualiser l&apos;évolution du type selon les générations.
                                            </figcaption>
                                        </figure>
                                        <div className="flex flex-col justify-center p-6">
                                            <h3 className="text-lg font-semibold">{generation.title}</h3>
                                            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{generation.text}</p>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>

                        <Link
                            href="/blog/pomsky/genetique/pomsky-f1-f2-f3-cest-quoi"
                            className="inline-flex text-primary underline underline-offset-4"
                        >
                            Approfondir les générations F1 à F5
                        </Link>
                    </section>

                    <section className="space-y-6">
                        <div className="space-y-3">
                            <h2 className="text-xl font-bold md:text-2xl">Caractère du Pomsky : à quoi s’attendre ?</h2>
                            <p className="max-w-4xl leading-relaxed text-muted-foreground">
                                Le Pomsky est un chien proche de l’humain, attentif, vif et enjoué. Il apprécie la présence de sa famille et supporte mieux un cadre cohérent, une routine stable et des interactions régulières.
                                Son intelligence facilite l’apprentissage, mais demande aussi de la constance, une socialisation précoce et une éducation positive. Ce n’est pas un simple chien “mignon” : il a besoin de présence, d’activités et d’un vrai investissement quotidien.
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            <Card className="bg-muted/50">
                                <CardHeader>
                                    <h3 className="font-semibold">Vie de famille et quotidien</h3>
                                </CardHeader>
                                <CardContent className="text-sm leading-relaxed text-muted-foreground">
                                    Bien socialisé, le Pomsky peut s’intégrer dans des environnements variés. Il reste toutefois plus équilibré quand sa famille lui offre des repères stables, des sorties régulières et de vraies interactions.
                                </CardContent>
                            </Card>

                            <Card className="bg-muted/50">
                                <CardHeader>
                                    <h3 className="font-semibold">Éducation et stimulation</h3>
                                </CardHeader>
                                <CardContent className="text-sm leading-relaxed text-muted-foreground">
                                    Une éducation positive, cohérente et suivie permet d’exploiter son intelligence sans laisser s’installer l’ennui, la frustration ou des habitudes gênantes.
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    <section className="space-y-8">
                        <div className="space-y-3">
                            <h2 className="text-xl font-bold md:text-2xl">À quoi ressemble un Pomsky adulte ?</h2>
                            <p className="max-w-4xl leading-relaxed text-muted-foreground">
                                Le Pomsky adulte présente généralement un corps compact, une queue touffue portée au-dessus du dos, des oreilles triangulaires et un regard très expressif.
                                Il peut afficher différentes textures de poil, du standard au plush ou wooly, ainsi qu’une grande variété de couleurs : noir, gris, gris loup, agouti, chocolat, rouge et autres nuances héritées de ses lignées.
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            <Link
                                href="/blog/pomsky/apparence/pomsky-noir-aux-yeux-bleus-decouvrez-ce-magnifique-chien-au-regard-envoutant"
                                className="group block h-full"
                            >
                                <Card className="flex h-full flex-col overflow-hidden bg-muted/50 transition-colors group-hover:border-primary/50">
                                    <CardHeader>
                                        <h3 className="text-xl font-semibold">Regard, couleurs et textures</h3>
                                    </CardHeader>
                                    <CardContent className="flex flex-1 flex-col gap-4 text-sm leading-relaxed text-muted-foreground">
                                        <p>
                                            Les yeux peuvent être bleus, bruns, ambre, verts ou vairons. Le pelage peut être standard, plush ou wooly selon les lignées.
                                        </p>
                                        <figure className="space-y-3">
                                            <div className="relative min-h-64 overflow-hidden rounded-xl bg-background">
                                                <Image
                                                    src="/pomsky-eye-colors-blue-brown-heterochromia.webp"
                                                    alt="Montage illustrant différentes couleurs d'yeux observées chez le Pomsky"
                                                    fill
                                                    className="object-contain"
                                                    sizes="(min-width: 768px) 50vw, 100vw"
                                                />
                                            </div>
                                            <figcaption className="text-xs leading-relaxed text-muted-foreground">
                                                Un repère visuel pour illustrer la diversité des couleurs d&apos;yeux et l&apos;expressivité du Pomsky.
                                            </figcaption>
                                        </figure>
                                    </CardContent>
                                </Card>
                            </Link>

                            <Link
                                href="/blog/pomsky/caracteristique/le-pomsky-adulte-tout-ce-que-vous-devez-savoir-sur-cette-race-unique"
                                className="group block h-full"
                            >
                                <Card className="flex h-full flex-col overflow-hidden bg-muted/50 transition-colors group-hover:border-primary/50">
                                    <CardHeader>
                                        <h3 className="text-xl font-semibold">Morphologie générale</h3>
                                    </CardHeader>
                                    <CardContent className="flex flex-1 flex-col gap-4 text-sm leading-relaxed text-muted-foreground">
                                        <p>
                                            Sa silhouette reste compacte, avec des oreilles dressées, une queue fournie et une expression très marquée qui rappelle le Husky sibérien.
                                        </p>
                                        <figure className="space-y-3">
                                            <div className="relative min-h-64 overflow-hidden rounded-xl bg-background">
                                                <Image
                                                    src="/pages/le-pomsky/male-pomsky-chocolat.webp"
                                                    alt="Pomsky adulte chocolat illustrant la morphologie générale de la race"
                                                    fill
                                                    className="object-cover"
                                                    sizes="(min-width: 768px) 50vw, 100vw"
                                                />
                                            </div>
                                            <figcaption className="text-xs leading-relaxed text-muted-foreground">
                                                Un exemple de silhouette adulte pour visualiser la construction, la queue fournie et l&apos;expression typique du Pomsky.
                                            </figcaption>
                                        </figure>
                                    </CardContent>
                                </Card>
                            </Link>
                        </div>
                    </section>

                    <section className="space-y-8 rounded-2xl bg-muted/35 p-8">
                        <div className="space-y-3">
                            <h2 className="text-xl font-bold md:text-2xl">Santé, entretien et espérance de vie du Pomsky</h2>
                            <p className="max-w-4xl leading-relaxed text-muted-foreground">
                                L’espérance de vie d’un Pomsky se situe souvent entre 15 et 17 ans. Globalement robuste lorsqu’il est issu d’un élevage sérieux, il nécessite un suivi vétérinaire classique, une alimentation de qualité, des soins antiparasitaires réguliers et un entretien adapté à son pelage.
                                Un brossage hebdomadaire suffit la plupart du temps hors période de mue, avec un entretien renforcé lors des deux grandes mues annuelles.
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-3">
                            <Card className="bg-background/80">
                                <CardHeader className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <Heart className="h-4 w-4 text-primary" aria-hidden="true" />
                                        <h3 className="font-semibold">Robustesse générale</h3>
                                    </div>
                                </CardHeader>
                                <CardContent className="text-sm leading-relaxed text-muted-foreground">
                                    Un programme d’élevage sérieux repose sur des parents testés, un suivi vétérinaire rigoureux et une vraie sélection comportementale.
                                </CardContent>
                            </Card>

                            <Card className="bg-background/80">
                                <CardHeader className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <Feather className="h-4 w-4 text-primary" aria-hidden="true" />
                                        <h3 className="font-semibold">Entretien du pelage</h3>
                                    </div>
                                </CardHeader>
                                <CardContent className="text-sm leading-relaxed text-muted-foreground">
                                    Hors mue, un brossage régulier suffit souvent. Pendant les mues saisonnières, un entretien plus soutenu évite l’accumulation de poils morts.
                                </CardContent>
                            </Card>

                            <Card className="bg-background/80">
                                <CardHeader className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
                                        <h3 className="font-semibold">Hygiène de vie</h3>
                                    </div>
                                </CardHeader>
                                <CardContent className="text-sm leading-relaxed text-muted-foreground">
                                    Une alimentation adaptée, des soins antiparasitaires, une activité régulière et un suivi annuel restent les bases d’un Pomsky bien entretenu.
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    <section className="space-y-6">
                        <div className="space-y-3">
                            <h2 className="text-xl font-bold md:text-2xl">Quel est le prix d’un Pomsky ?</h2>
                            <p className="max-w-4xl leading-relaxed text-muted-foreground">
                                Le prix d’un Pomsky se situe généralement entre 2500 et 6000 euros selon la taille, la génération, la qualité des lignées, la rareté de certains traits physiques et le niveau de sélection effectué par l’éleveur.
                                Au-delà du prix, il est essentiel d’évaluer le sérieux de l’élevage, la transparence sur les parents, les tests de santé, l’accompagnement proposé et les conditions d’élevage.
                            </p>
                            <p className="max-w-4xl leading-relaxed text-muted-foreground">
                                Ici, nous restons volontairement sur un repère général. Si votre question porte sur les tarifs Royal Pomsky, consultez notre page prix. Si vous cherchez plutôt à savoir combien coûte réellement un Pomsky sur 10 à 15 ans, le bon contenu est notre guide dédié au budget global.
                            </p>
                        </div>

                        <Card className="border-primary/15 bg-primary/5">
                            <CardContent className="flex flex-col gap-4 px-6 py-6 md:flex-row md:items-center md:justify-between md:px-8">
                                <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
                                    Un prix plus élevé peut refléter un vrai travail de sélection, de suivi vétérinaire et d’accompagnement. À l’inverse, une promesse trop attractive sur le papier mérite toujours d’être vérifiée.
                                </p>
                                <div className="flex flex-col gap-3 sm:flex-row">
                                    <Link
                                        href="/pomsky-prix"
                                        className="inline-flex w-fit rounded-md border border-primary px-5 py-3 font-semibold text-primary transition-colors hover:bg-primary/10"
                                    >
                                        Voir les prix Royal Pomsky
                                    </Link>
                                    <Link
                                        href="/blog/pomsky/prix/pomsky-prix-guide-complet-pour-comprendre-le-cout-dadoption-et-dentretien"
                                        className="inline-flex w-fit rounded-md border border-primary px-5 py-3 font-semibold text-primary transition-colors hover:bg-primary/10"
                                    >
                                        Estimer le budget global
                                    </Link>
                                    <Link
                                        href="/chiots-disponibles"
                                        className="inline-flex w-fit rounded-md border border-primary px-5 py-3 font-semibold text-primary transition-colors hover:bg-primary/10"
                                    >
                                        Voir nos chiots disponibles
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    </section>

                    <section className="space-y-8">
                        <div className="space-y-3">
                            <h2 className="text-xl font-bold md:text-2xl">Pour aller plus loin selon votre question</h2>
                            <p className="max-w-4xl leading-relaxed text-muted-foreground">
                                Une page pilier doit vous aider à vous orienter rapidement. Voici les contenus les plus utiles selon que vous cherchiez un tarif, un budget de vie, une explication sur les générations ou des repères concrets avant l'adoption.
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            {furtherReadingCards.map((item) => (
                                <Link key={item.title} href={item.href} className="group block h-full">
                                    <Card className="flex h-full flex-col bg-muted/50 transition-colors group-hover:border-primary/50">
                                        <CardHeader>
                                            <h3 className="text-lg font-semibold">{item.title}</h3>
                                        </CardHeader>
                                        <CardContent className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                                            <p>{item.text}</p>
                                            <span className="inline-flex text-primary underline underline-offset-4">
                                                Lire la page dédiée
                                            </span>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </section>

                    <section className="space-y-8">
                        <div className="space-y-3">
                            <h2 className="text-xl font-bold md:text-2xl">Adopter un Pomsky : les points à vérifier avant de se lancer</h2>
                            <p className="max-w-4xl leading-relaxed text-muted-foreground">
                                Adopter un Pomsky engage pour de nombreuses années. Avant de réserver un chiot, il est important d’évaluer votre disponibilité, votre mode de vie, votre capacité à assurer les sorties, l’éducation, les soins et la stabilité dont ce chien a besoin.
                                Une adoption responsable repose autant sur le choix de l’éleveur que sur la préparation de la famille.
                            </p>
                        </div>

                        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                            <Card className="bg-muted/50">
                                <CardHeader>
                                    <h3 className="font-semibold">Les vérifications essentielles avant réservation</h3>
                                </CardHeader>
                                <CardContent className="text-sm leading-relaxed text-muted-foreground">
                                    <ul className="space-y-3">
                                        {adoptionChecks.map((item) => (
                                            <li key={item} className="flex items-start gap-3">
                                                <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card className="bg-muted/50">
                                <CardHeader>
                                    <h3 className="font-semibold">Pomsky Toy : prudence sur les promesses</h3>
                                </CardHeader>
                                <CardContent className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                                    <p>
                                        Le format Toy existe, mais sa taille adulte ne se garantit pas à 100 % dès la naissance. Une estimation sérieuse repose sur les lignées, les générations et la construction du chiot.
                                    </p>
                                    <Link
                                        href="/blog/pomsky/prix/pomsky-toy-comprendre-les-promesses-et-choisir-un-elevage-serieux"
                                        className="inline-flex text-primary underline underline-offset-4"
                                    >
                                        Lire notre guide sur les fausses promesses
                                    </Link>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="flex flex-col gap-4 sm:flex-row">
                            <Link
                                href="/adoption/reussir-son-adoption"
                                className="inline-flex w-fit rounded-md bg-primary px-5 py-3 font-semibold text-white transition-colors hover:bg-primary/85 dark:text-[#5b3a1a]"
                            >
                                Lire le guide d’adoption
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex w-fit rounded-md border border-primary px-5 py-3 font-semibold text-primary transition-colors hover:bg-primary/10"
                            >
                                Nous contacter
                            </Link>
                        </div>
                    </section>

                    <FAQSection
                        title="FAQ sur le Pomsky"
                        description="Réponses courtes et utiles sur le caractère, la taille, la mue, la reconnaissance et l’adoption du Pomsky."
                        items={faqPomsky}
                    />

                    <div className="text-right text-xs text-muted-foreground">
                        Dernière mise à jour : {lastMod}
                    </div>
                </div>
            </div>
        </>
    )
}
