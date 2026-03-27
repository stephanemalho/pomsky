import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { FAQSection, type FAQItem } from "@/components/faq"
import { convertFAQsToSchema } from "@/lib/faq-utils"
import { buildOpenGraph, buildTwitter, pageMetadata, returnLastmod, siteConfig, sitemapPages } from "@/lib/seo-config"
import { generateBreadcrumbSchema, generateFAQSchema, generateWebPageSchema } from "@/lib/schema-generators"
import { Banknote, Heart, NotebookText, PawPrint, Sprout } from "lucide-react"

const pomskyPriceOgJpg = "/BAMBOU-pomsky-miniature-f5.jpg"
const pomskyPriceOgWebp = "/BAMBOU-pomsky-miniature-f5.webp"

export const metadata: Metadata = {
    title: pageMetadata.pomskyPrice.title,
    description: pageMetadata.pomskyPrice.description,
    keywords: pageMetadata.pomskyPrice.keywords,
    openGraph: buildOpenGraph({
        title: pageMetadata.pomskyPrice.title,
        description: pageMetadata.pomskyPrice.description,
        url: `${siteConfig.siteUrl}${siteConfig.pages.pomskyPrice}`,
        images: [
            {
                url: `${siteConfig.siteUrl}${pomskyPriceOgJpg}`,
                alt: "Pomsky miniature chez Royal Pomsky",
                width: siteConfig.ogImageWidth,
                height: siteConfig.ogImageHeight,
                type: "image/jpeg",
            },
            {
                url: `${siteConfig.siteUrl}${pomskyPriceOgWebp}`,
                alt: "Pomsky miniature chez Royal Pomsky",
                width: siteConfig.ogImageWidth,
                height: siteConfig.ogImageHeight,
                type: "image/webp",
            },
        ],
    }),
    twitter: buildTwitter({
        title: pageMetadata.pomskyPrice.title,
        description: pageMetadata.pomskyPrice.description,
        imageUrl: `${siteConfig.siteUrl}${pomskyPriceOgJpg}`,
    }),
    alternates: {
        canonical: `${siteConfig.siteUrl}${siteConfig.pages.pomskyPrice}`,
    },
}

const quickPrices = [
    { label: "Pomsky Standard", price: "à partir de 2 500 €" },
    { label: "Pomsky Miniature", price: "à partir de 3 800 €" },
    { label: "Pomsky Toy", price: "à partir de 4 000 €" },
]

const priceCategories = [
    {
        category: "Pomsky Standard",
        size: "format le plus grand",
        profile: "robe marquage husky génération F4 / F5 / F6",
        lineage: "américaine",
        price: "2 500 € à 3 800 €",
        availability: "Oui",
    },
    {
        category: "Pomsky Miniature",
        size: "petit à moyen format",
        profile: "format intermédiaire très apprécié",
        lineage: "américaine",
        price: "3 800 € à 4 500 €",
        availability: "Oui",
    },
    {
        category: "Pomsky Toy",
        size: "très petit format",
        profile: "profil rare et très demandé",
        lineage: "américaine",
        price: "4 000 € à 5 500 €",
        availability: "Oui",
    },
]

const priceFactors = [
    {
        title: "1. Le format recherché",
        text: "Le format fait partie des premiers éléments qui influencent le prix d’un Pomsky. Les profils Toy et certains très petits Miniature sont généralement plus recherchés et plus complexes à obtenir de manière cohérente et responsable dans un programme de sélection. Cette rareté peut se refléter dans le tarif.",
    },
    {
        title: "2. La lignée et le travail de sélection",
        text: "La qualité des lignées a un impact direct sur la stabilité du type, la morphologie, le tempérament et la prévisibilité du chiot. Un élevage qui travaille ses lignées avec exigence, qui sélectionne soigneusement ses reproducteurs et qui suit une vision claire sur plusieurs générations investit bien davantage dans la qualité future de ses chiots.",
    },
    {
        title: "3. La génération du Pomsky",
        text: "Selon qu’il s’agisse d’un Pomsky issu de certaines générations ou de combinaisons de lignées particulières, le travail de sélection peut être plus complexe. Cela peut jouer sur le type du chiot, sa taille estimée, son équilibre visuel et donc sur son positionnement tarifaire.",
    },
    {
        title: "4. Les caractéristiques morphologiques",
        text: "Certaines caractéristiques attirent particulièrement les familles : un très petit format, une expression marquée, une robe spécifique, un masque harmonieux, des yeux clairs ou vairons, une fourrure recherchée ou encore un type très “Pomsky”. Lorsque plusieurs de ces critères sont réunis dans un même profil, cela peut influencer le prix. Certaines couleurs rares, comme le Silverwolf, peuvent également faire monter le tarif de certains chiots jusqu’à 6 000 €.",
    },
    {
        title: "5. La qualité d’élevage et l’accompagnement",
        text: "Le prix d’un chiot Pomsky ne reflète pas uniquement le chiot lui-même. Il reflète aussi les conditions dans lesquelles il a été élevé, la qualité du suivi mis en place, le temps consacré à sa socialisation, l’attention portée à son développement et l’accompagnement proposé aux familles avant et après l’adoption.",
    },
]

const includedItems = [
    "la sélection attentive des reproducteurs",
    "le suivi de la portée dès les premières étapes",
    "le temps consacré à la présence humaine et à la socialisation",
    "un cadre de vie pensé pour le bien-être et l’équilibre du chiot",
    "l’accompagnement des familles dans leur réflexion d’adoption",
    "les premiers soins et le suivi de base avant le départ",
    "les documents nécessaires au moment de l’adoption",
    "les conseils personnalisés pour préparer l’arrivée du chiot à la maison",
    "un accompagnement de départ pour favoriser une transition sereine",
]

const categoryGuides = [
    {
        title: "Pomsky Standard",
        text: "Le Pomsky Standard peut convenir aux familles qui apprécient un gabarit plus présent, une allure plus proche du Husky et un chien pouvant exprimer davantage de prestance physique.",
    },
    {
        title: "Pomsky Miniature",
        text: "Le Pomsky Miniature est souvent perçu comme le format le plus équilibré. Il offre un bon compromis entre petit gabarit, expression typée, praticité au quotidien et présence harmonieuse.",
    },
    {
        title: "Pomsky Toy",
        text: "Le Pomsky Toy attire les familles qui recherchent un très petit format et un profil particulièrement rare. Il séduit par son côté compact, sa forte attractivité visuelle et sa singularité au sein de la race.",
    },
]

const faqPomskyPrice: FAQItem[] = [
    {
        question: "Quel est le prix moyen d’un Pomsky en France ?",
        answer: (
            <p>
                En 2026, le prix d’un Pomsky en France peut varier selon sa catégorie, son gabarit, sa lignée et ses caractéristiques. Chez Royal Pomsky, nos tarifs indicatifs démarrent à partir de 2 500 € et peuvent aller jusqu’à 6 000 € selon le profil du chiot.
            </p>
        ),
    },
    {
        question: "Pourquoi un Pomsky Toy coûte-t-il plus cher ?",
        answer: (
            <p>
                Le Pomsky Toy est un profil particulièrement recherché. Son très petit format et la complexité de sélection nécessaire pour obtenir ce type de chiot de manière cohérente peuvent expliquer un tarif plus élevé.
            </p>
        ),
    },
    {
        question: "Quelle différence de prix entre un Pomsky Toy, Miniature et Standard ?",
        answer: (
            <p>
                Le Pomsky Standard se situe généralement dans la fourchette la plus accessible, le Miniature dans une zone intermédiaire, et le Toy dans la fourchette la plus élevée. Cette différence s’explique par la rareté, le format et certains critères morphologiques.
            </p>
        ),
    },
    {
        question: "Le prix inclut-il l’accompagnement avant l’adoption ?",
        answer: (
            <p>
                Oui, l’accompagnement fait partie intégrante d’un élevage sérieux. Il permet de guider la famille dans sa réflexion, de préparer l’arrivée du chiot et de favoriser une adoption cohérente et sereine.
            </p>
        ),
    },
    {
        question: "Comment savoir quel Pomsky est adapté à ma famille ?",
        answer: (
            <p>
                Le choix d’un Pomsky dépend du mode de vie, de l’espace disponible, des attentes de la famille et du type de compagnon recherché. Il est important de choisir un profil cohérent plutôt que de se baser uniquement sur le format ou l’apparence.
            </p>
        ),
    },
]

export default function PomskyPricePage() {
    const pageLastModValue = sitemapPages.find((page) => page.url === siteConfig.pages.pomskyPrice)?.lastmod
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Accueil", url: "/" },
        { name: "Prix du Pomsky", url: siteConfig.pages.pomskyPrice },
    ])
    const faqSchema = generateFAQSchema(convertFAQsToSchema(faqPomskyPrice))
    const webPageSchema = generateWebPageSchema({
        name: pageMetadata.pomskyPrice.title,
        description: pageMetadata.pomskyPrice.description,
        url: siteConfig.pages.pomskyPrice,
        imageUrl: pomskyPriceOgJpg,
        dateModified: pageLastModValue,
        about: ["Prix du Pomsky", "Pomsky Toy", "Pomsky Miniature", "Pomsky Standard", "Adoption Pomsky"],
    })
    const lastMod = returnLastmod(siteConfig.pages.pomskyPrice)

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
                    <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                        <div className="space-y-6">
                            <Badge variant="secondary" className="w-fit">
                                Prix Royal Pomsky 2026
                            </Badge>
                            <h1 className="text-2xl font-bold md:text-4xl">
                                Prix des Pomsky Royal Pomsky en 2026 : tarifs, catégories et accompagnement
                            </h1>
                            <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
                                En 2026, le prix d’un chiot Pomsky chez Royal Pomsky varie selon sa catégorie, son gabarit adulte estimé, sa lignée, sa génération et ses caractéristiques morphologiques. Nous avons choisi de présenter une grille claire et accessible pour vous aider à comprendre nos tarifs, à partir de 2 500 €, et à identifier le chiot le plus cohérent avec votre projet d’adoption.
                            </p>
                            <p className="max-w-3xl leading-relaxed text-muted-foreground">
                                Sur cette page, vous retrouvez les repères de prix Royal Pomsky 2026 pour les catégories Standard, Miniature et Toy, ainsi que les principaux critères qui expliquent les écarts de tarif d’un chiot à l’autre.
                            </p>
                            <div className="flex flex-col gap-3 sm:flex-row">
                                <Link
                                    href="/chiots-disponibles"
                                    className="inline-flex w-fit rounded-md bg-primary px-5 py-3 font-semibold text-white transition-colors hover:bg-primary/85 dark:text-[#5b3a1a]"
                                >
                                    Voir les chiots disponibles
                                </Link>
                                <Link
                                    href="/contact"
                                    className="inline-flex w-fit rounded-md border border-primary px-5 py-3 font-semibold text-primary transition-colors hover:bg-primary/10"
                                >
                                    Nous contacter
                                </Link>
                            </div>
                        </div>

                        <div className="relative h-80 overflow-hidden rounded-2xl bg-muted lg:h-120">
                            <Image
                                src="/BAMBOU-pomsky-miniature-f5.webp"
                                alt="Pomsky miniature de Royal Pomsky"
                                fill
                                priority
                                fetchPriority="high"
                                className="object-cover"
                                sizes="(min-width: 1024px) 40vw, 100vw"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-transparent" aria-hidden="true" />
                        </div>
                    </section>

                    <section className="space-y-8">
                        <div className="space-y-3">
                            <h2 className="text-xl font-bold md:text-2xl">Quels sont les prix des Pomsky Royal Pomsky en 2026 ?</h2>
                            <p className="max-w-4xl leading-relaxed text-muted-foreground">
                                Le prix d’un Pomsky dépend avant tout de sa catégorie et de ses caractéristiques propres. En 2026, chez Royal Pomsky, un chiot peut se situer dans une fourchette allant de 2 500 € à 6 000 €.
                            </p>
                            <p className="max-w-4xl leading-relaxed text-muted-foreground">
                                Voici une première estimation de nos catégories de prix pour 2026. Ces tarifs sont donnés à titre indicatif. Le prix exact peut varier selon le profil du chiot, sa morphologie, son type, sa lignée et la rareté de certaines caractéristiques recherchées.
                            </p>
                            <p className="max-w-4xl leading-relaxed text-muted-foreground">
                                Certains profils réunissant plusieurs critères recherchés, notamment un très petit format et une couleur rare comme le Silverwolf, peuvent atteindre 6 000 €.
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-3">
                            {quickPrices.map((item) => (
                                <Card key={item.label} className="border-primary/15 bg-primary/5">
                                    <CardHeader className="space-y-3">
                                        <div className="flex items-center gap-2 text-primary">
                                            <Banknote className="h-4 w-4" aria-hidden="true" />
                                            <span className="text-sm font-medium">{item.label}</span>
                                        </div>
                                        <p className="text-2xl font-bold text-foreground">{item.price}</p>
                                    </CardHeader>
                                </Card>
                            ))}
                        </div>
                    </section>

                    <section className="space-y-8">
                        <div className="space-y-3">
                            <h2 className="text-xl font-bold md:text-2xl">Nos catégories de prix Pomsky chez Royal Pomsky</h2>
                            <p className="max-w-4xl leading-relaxed text-muted-foreground">
                                Pour vous aider à mieux comparer les profils, voici un aperçu simple des différentes catégories de Pomsky proposées chez Royal Pomsky en 2026.
                            </p>
                        </div>

                        <div className="overflow-hidden rounded-2xl border bg-muted/35">
                            <div className="overflow-x-auto">
                                <table className="min-w-full text-left text-sm">
                                    <thead className="bg-background/80">
                                        <tr className="border-b">
                                            <th className="px-5 py-4 font-semibold">Catégorie</th>
                                            <th className="px-5 py-4 font-semibold">Gabarit adulte estimé</th>
                                            <th className="px-5 py-4 font-semibold">Profil recherché</th>
                                            <th className="px-5 py-4 font-semibold">Lignée</th>
                                            <th className="px-5 py-4 font-semibold">Fourchette indicative</th>
                                            <th className="px-5 py-4 font-semibold">Proposé chez Royal Pomsky</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {priceCategories.map((item) => (
                                            <tr key={item.category} className="border-b last:border-b-0">
                                                <td className="px-5 py-4 font-semibold text-foreground">{item.category}</td>
                                                <td className="px-5 py-4 text-muted-foreground">{item.size}</td>
                                                <td className="px-5 py-4 text-muted-foreground">{item.profile}</td>
                                                <td className="px-5 py-4 text-muted-foreground">{item.lineage}</td>
                                                <td className="px-5 py-4 font-medium text-primary">{item.price}</td>
                                                <td className="px-5 py-4 text-muted-foreground">{item.availability}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <Card className="bg-muted/45">
                            <CardContent className="space-y-3 p-6 text-sm leading-relaxed text-muted-foreground md:p-8">
                                <p>
                                    Le Pomsky Toy fait partie des profils les plus recherchés en raison de son petit gabarit et de la complexité de sélection qu’il implique. Le Pomsky Miniature séduit par son excellent compromis entre format, type et facilité d’intégration dans de nombreux foyers. Le Pomsky Standard, quant à lui, peut convenir aux familles qui souhaitent conserver davantage la prestance du Husky dans un format plus accessible.
                                </p>
                                <p>
                                    Certains chiots se distinguent aussi par la rareté de leur robe. Des couleurs recherchées comme le Silverwolf peuvent justifier un positionnement plus élevé et amener certains profils jusqu’à 6 000 €.
                                </p>
                            </CardContent>
                        </Card>
                    </section>

                    <section className="space-y-8">
                        <div className="space-y-3">
                            <h2 className="text-xl font-bold md:text-2xl">Pourquoi le prix d’un Pomsky Royal Pomsky peut-il varier ?</h2>
                            <p className="max-w-4xl leading-relaxed text-muted-foreground">
                                Deux chiots Pomsky n’ont pas forcément le même prix, même au sein d’une même portée. Plusieurs critères peuvent expliquer un écart de tarif. Il ne s’agit pas uniquement d’une question d’apparence, mais d’un ensemble de facteurs liés au travail de sélection, à la rareté de certains profils et à la qualité globale du chiot.
                            </p>
                        </div>

                        <div className="grid gap-6 lg:grid-cols-2">
                            {priceFactors.map((factor) => (
                                <Card key={factor.title} className="bg-muted/40">
                                    <CardHeader>
                                        <h3 className="text-lg font-semibold">{factor.title}</h3>
                                    </CardHeader>
                                    <CardContent className="text-sm leading-relaxed text-muted-foreground">
                                        {factor.text}
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>

                    <section className="space-y-8 rounded-2xl bg-muted/35 p-8">
                        <div className="space-y-3">
                            <h2 className="text-xl font-bold md:text-2xl">Que comprend le prix d’un chiot Pomsky chez Royal Pomsky ?</h2>
                            <p className="max-w-4xl leading-relaxed text-muted-foreground">
                                Adopter un chiot Pomsky dans un élevage sérieux ne consiste pas uniquement à “acheter un chien”. Le prix comprend tout le travail réalisé en amont pour lui offrir un bon départ dans la vie et vous permettre d’accueillir votre chiot dans les meilleures conditions.
                            </p>
                        </div>

                        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
                            <Card className="bg-background/85">
                                <CardHeader>
                                    <div className="flex items-center gap-2">
                                        <NotebookText className="h-4 w-4 text-primary" aria-hidden="true" />
                                        <h3 className="font-semibold">Ce que le prix inclut notamment</h3>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                                        {includedItems.map((item) => (
                                            <li key={item} className="flex items-start gap-3">
                                                <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card className="overflow-hidden bg-background/85">
                                <div className="relative min-h-72">
                                    <Image
                                        src="/INUIT-pomsky-toy-f5.webp"
                                        alt="Pomsky Toy de Royal Pomsky"
                                        fill
                                        className="object-cover"
                                        sizes="(min-width: 1024px) 30vw, 100vw"
                                    />
                                </div>
                                <CardContent className="space-y-3 p-6 text-sm leading-relaxed text-muted-foreground">
                                    <div className="flex items-center gap-2 text-primary">
                                        <Heart className="h-4 w-4" aria-hidden="true" />
                                        <span className="font-medium">Bloc de réassurance</span>
                                    </div>
                                    <p>
                                        Un chiot élevé avec sérieux, attention et cohérence ne se résume jamais à un simple tarif affiché. Le prix reflète aussi la qualité du travail invisible réalisé chaque jour pour construire un chiot bien dans ses pattes, bien entouré et prêt à rejoindre sa future famille.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    <section className="space-y-8">
                        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                            <div className="relative h-80 overflow-hidden rounded-2xl bg-muted lg:h-120">
                                <Image
                                    src="/SALLY-pomsky-miniature.webp"
                                    alt="Pomsky miniature adulte chez Royal Pomsky"
                                    fill
                                    className="object-cover"
                                    sizes="(min-width: 1024px) 35vw, 100vw"
                                />
                            </div>
                            <div className="space-y-4">
                                <Badge variant="secondary" className="w-fit">
                                    Bien choisir
                                </Badge>
                                <h2 className="text-xl font-bold md:text-2xl">Quelle catégorie de Pomsky est faite pour vous ?</h2>
                                <p className="leading-relaxed text-muted-foreground">
                                    Le meilleur choix n’est pas forcément le plus petit ou le plus rare. Il dépend surtout de votre mode de vie, de vos attentes, de votre environnement et du type de compagnon que vous recherchez au quotidien.
                                </p>
                                <p className="leading-relaxed text-muted-foreground">
                                    Le choix de la catégorie doit toujours être guidé par la compatibilité avec votre foyer et non uniquement par l’apparence. Nous pouvons vous aider à identifier le profil le plus cohérent avec votre projet.
                                </p>
                            </div>
                        </div>

                        <div className="grid gap-6 md:grid-cols-3">
                            {categoryGuides.map((item) => (
                                <Card key={item.title} className="bg-muted/40">
                                    <CardHeader>
                                        <div className="flex items-center gap-2">
                                            <PawPrint className="h-4 w-4 text-primary" aria-hidden="true" />
                                            <h3 className="font-semibold">{item.title}</h3>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="text-sm leading-relaxed text-muted-foreground">
                                        {item.text}
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>

                    <section className="space-y-6">
                        <Card className="border-primary/15 bg-primary/5">
                            <CardContent className="space-y-4 p-6 md:p-8">
                                <div className="flex items-center gap-2 text-primary">
                                    <Sprout className="h-4 w-4" aria-hidden="true" />
                                    <span className="text-sm font-medium">Complément pédagogique</span>
                                </div>
                                <h2 className="text-xl font-bold md:text-2xl">Vous voulez aussi estimer le coût d’entretien d’un Pomsky au quotidien ?</h2>
                                <p className="max-w-4xl leading-relaxed text-muted-foreground">
                                Cette page vous aide à comprendre le prix d’adoption d’un chiot Pomsky chez Royal Pomsky. Si vous souhaitez ensuite vous projeter plus concrètement dans la vie avec un Pomsky, nous vous conseillons de lire notre guide dédié au budget du quotidien tel que l'alimentation, le toilettage, les frais vétérinaires, ou les soins courants comme le traitements antiparasitaires et autres dépenses à anticiper pour bien accueillir votre futur compagnon.
                                </p>
                                <Link
                                    href="/blog/pomsky/prix/pomsky-prix-guide-complet-pour-comprendre-le-cout-dadoption-et-dentretien"
                                    className="inline-flex rounded-md border border-primary px-5 py-3 font-semibold text-primary transition-colors hover:bg-primary/10"
                                >
                                    Lire notre guide sur le budget d’un Pomsky au quotidien
                                </Link>
                            </CardContent>
                        </Card>
                    </section>

                    <section className="space-y-6">
                        <Card className="bg-muted/45">
                            <CardContent className="space-y-5 p-6 md:p-8 lg:p-10">
                                <h2 className="text-xl font-bold md:text-2xl">Découvrir nos chiots Pomsky disponibles</h2>
                                <p className="max-w-4xl leading-relaxed text-muted-foreground">
                                    Vous souhaitez connaître les disponibilités actuelles ou échanger sur le profil qui vous conviendrait le mieux ? Découvrez nos chiots disponibles ou contactez-nous pour préparer votre projet d’adoption.
                                </p>
                                <div className="flex flex-col gap-3 sm:flex-row">
                                    <Link
                                        href="/chiots-disponibles"
                                        className="inline-flex w-fit rounded-md bg-primary px-5 py-3 font-semibold text-white transition-colors hover:bg-primary/85 dark:text-[#5b3a1a]"
                                    >
                                        Voir les chiots disponibles
                                    </Link>
                                    <Link
                                        href="/contact"
                                        className="inline-flex w-fit rounded-md border border-primary px-5 py-3 font-semibold text-primary transition-colors hover:bg-primary/10"
                                    >
                                        Nous contacter
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    </section>

                    <FAQSection
                        title="Questions fréquentes sur le prix du Pomsky en 2026"
                        description="Les réponses essentielles sur les tarifs Royal Pomsky 2026, les différences entre catégories et les critères à regarder avant adoption."
                        items={faqPomskyPrice}
                    />

                    <div className="text-right text-xs text-muted-foreground">
                        Dernière mise à jour : {lastMod}
                    </div>
                </div>
            </div>
        </>
    )
}
