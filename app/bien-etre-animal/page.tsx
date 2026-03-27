import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { FAQSection } from "@/components/faq"
import { faqBienEtre } from "@/lib/faq-data"
import { convertFAQsToSchema } from "@/lib/faq-utils"
import { buildOpenGraph, buildTwitter, pageMetadata, returnLastmod, siteConfig, sitemapPages } from "@/lib/seo-config"
import { generateBreadcrumbSchema, generateFAQSchema, generateWebPageSchema } from "@/lib/schema-generators"
import { Bed, Heart, NotebookText, PawPrint, Sprout, Utensils } from "lucide-react"

const wellnessOgJpg = "/pages/conditions-de-vie/la-maman-et-son-chiot-avec-marine.jpg"
const wellnessOgWebp = "/pages/conditions-de-vie/la-maman-et-son-chiot-avec-marine.webp"

export const metadata: Metadata = {
    title: pageMetadata.wellness.title,
    description: pageMetadata.wellness.description,
    keywords: pageMetadata.wellness.keywords,
    openGraph: buildOpenGraph({
        title: pageMetadata.wellness.title,
        description: pageMetadata.wellness.description,
        url: `${siteConfig.siteUrl}${siteConfig.pages.wellness}`,
        images: [
            {
                url: `${siteConfig.siteUrl}${wellnessOgJpg}`,
                alt: "La maman Pomsky et son chiot avec Marine",
                width: siteConfig.ogImageWidth,
                height: siteConfig.ogImageHeight,
                type: "image/jpeg",
            },
            {
                url: `${siteConfig.siteUrl}${wellnessOgWebp}`,
                alt: "La maman Pomsky et son chiot avec Marine",
                width: siteConfig.ogImageWidth,
                height: siteConfig.ogImageHeight,
                type: "image/webp",
            },
        ],
    }),
    twitter: buildTwitter({
        title: pageMetadata.wellness.title,
        description: pageMetadata.wellness.description,
        imageUrl: `${siteConfig.siteUrl}${wellnessOgJpg}`,
    }),
    alternates: {
        canonical: `${siteConfig.siteUrl}${siteConfig.pages.wellness}`,
    },
}

const sectionImages = {
    environment: "/pages/conditions-de-vie/cocom-pour-chiots-pomsky.webp",
    socialization: "/pages/conditions-de-vie/pomsky-joue-avec-balle-plastique.webp",
    discovery: "/pages/conditions-de-vie/sortie-avec-les-pomsky-adultes.webp",
    presence: "/pages/conditions-de-vie/pomsky-femmel-et-son-chiot-avec-marine.webp",
}

const dailyPillars = [
    {
        icon: NotebookText,
        title: "Un environnement rassurant et structuré",
        text: "Le bien-être d’un Pomsky commence par son cadre de vie. Nous veillons à offrir à nos chiens un environnement propre, sécurisé, stable et adapté à leurs besoins. Chaque étape de leur quotidien s’inscrit dans une logique de cohérence : moments de présence humaine, temps d’observation, espaces de repos, découvertes progressives et respect de leur rythme.",
    },
    {
        icon: Heart,
        title: "Une socialisation essentielle dès les premières étapes",
        text: "La socialisation joue un rôle majeur dans le développement d’un chiot Pomsky. Dès le plus jeune âge, nous mettons en place une approche progressive pour les familiariser avec la présence humaine, les manipulations douces, les sons du quotidien et différentes petites expériences adaptées à leur stade de développement.",
    },
    {
        icon: Sprout,
        title: "Des découvertes adaptées pour stimuler sans brusquer",
        text: "Nous accordons une place importante aux découvertes progressives et aux stimulations adaptées. Le contact avec différents environnements, les expériences du quotidien et les sorties encadrées participent à l’équilibre de nos chiens, tout en respectant leur sensibilité et leur niveau de maturité.",
    },
]

const carePoints = [
    {
        icon: Utensils,
        text: "alimentation adaptée et suivi quotidien du développement",
    },
    {
        icon: PawPrint,
        text: "observation attentive des besoins de chaque chiot",
    },
    {
        icon: NotebookText,
        text: "régularité des soins et vigilance sur les premières étapes de vie",
    },
    {
        icon: Heart,
        text: "accompagnement pensé pour un départ plus serein en famille",
    },
]

export default function WellnessPage() {
    const pageLastModValue = sitemapPages.find((page) => page.url === siteConfig.pages.wellness)?.lastmod
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Accueil", url: "/" },
        { name: "Bien-être animal", url: siteConfig.pages.wellness },
    ])
    const faqSchema = generateFAQSchema(convertFAQsToSchema(faqBienEtre))
    const webPageSchema = generateWebPageSchema({
        name: pageMetadata.wellness.title,
        description: pageMetadata.wellness.description,
        url: siteConfig.pages.wellness,
        imageUrl: wellnessOgJpg,
        dateModified: pageLastModValue,
        about: ["Conditions de vie des chiots", "Confort de vie du Pomsky", "Socialisation quotidienne", "Bien-être animal"],
    })
    const lastMod = returnLastmod(siteConfig.pages.wellness)

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
                    <section className="relative overflow-hidden rounded-[2rem] border border-primary/10 bg-[linear-gradient(135deg,rgba(170,126,88,0.12),rgba(255,255,255,0.94),rgba(170,126,88,0.04))] p-6 shadow-[0_24px_80px_rgba(66,40,18,0.08)] md:p-10 lg:p-12">
                        <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
                        <div className="absolute -left-16 bottom-0 h-44 w-44 rounded-full bg-primary/5 blur-3xl" aria-hidden="true" />

                        <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-center">
                            <div className="space-y-7">
                                <div className="space-y-4">
                                    <Badge variant="secondary" className="w-fit">
                                        Bien-être animal
                                    </Badge>
                                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/80">
                                        Conditions de vie, confort quotidien et respect du rythme
                                    </p>
                                    <h1 className="max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
                                        Les conditions de vie de nos chiots chez Royal Pomsky
                                    </h1>
                                    <p className="max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
                                        Cette page est dédiée à la vie quotidienne de nos chiots et de nos adultes. Chez Royal Pomsky, nous accordons une attention constante à leur environnement, à leur confort, à leur rythme, à la qualité de présence humaine et à la manière dont ils découvrent le monde autour d’eux. Notre objectif est de leur offrir un cadre stable, rassurant et respectueux dès leurs premières semaines.
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2.5">
                                    {[
                                        "environnement stable",
                                        "socialisation progressive",
                                        "respect du rythme",
                                        "présence humaine régulière",
                                    ].map((item) => (
                                        <span
                                            key={item}
                                            className="rounded-full border border-primary/15 bg-background/85 px-3 py-2 text-sm text-foreground/85 backdrop-blur-sm"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>

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

                            <div className="space-y-4">
                                <div className="relative min-h-80 overflow-hidden rounded-[1.75rem] border border-white/50 bg-muted shadow-lg md:min-h-[32rem]">
                                    <Image
                                        src={wellnessOgWebp}
                                        alt="Chiot Pomsky fixe sa balle en plastique"
                                        fill
                                        priority
                                        fetchPriority="high"
                                        className="object-cover"
                                        sizes="(min-width: 1024px) 420px, 100vw"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-transparent" aria-hidden="true" />
                                    <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                                            Cadre de vie
                                        </p>
                                        <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/90">
                                            Un environnement pensé pour les repères, le calme et l’adaptation progressive.
                                        </p>
                                    </div>
                                </div>

                                <Card className="border-primary/10 bg-background/88 backdrop-blur-sm">
                                    <CardContent className="grid gap-3 p-5 sm:grid-cols-3 lg:grid-cols-1">
                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">
                                                Socialisation
                                            </p>
                                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                                Découvertes progressives et expériences adaptées à l’âge du chiot.
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">
                                                Repos
                                            </p>
                                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                                Des temps calmes respectés pour préserver l’équilibre émotionnel.
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">
                                                Relation humaine
                                            </p>
                                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                                Une présence régulière et bienveillante pour préparer l’arrivée en famille.
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-8">
                        <div className="max-w-3xl space-y-3">
                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/80">
                                Notre approche au quotidien
                            </p>
                            <h2 className="text-2xl font-bold md:text-3xl">
                                Le bien-être se voit d’abord dans la manière dont les chiots vivent chaque jour
                            </h2>
                            <p className="leading-relaxed text-muted-foreground">
                                Le bien-être animal ne repose pas sur une promesse abstraite. Il se lit dans les espaces de vie, la qualité du repos, la régularité des soins, la douceur des interactions et la capacité à respecter le rythme réel de chaque chiot.
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-3">
                            {dailyPillars.map((item) => {
                                const Icon = item.icon

                                return (
                                    <Card
                                        key={item.title}
                                        className="h-full rounded-3xl border border-border/70 bg-background/80 shadow-sm"
                                    >
                                        <CardHeader className="space-y-4">
                                            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                                <Icon className="h-5 w-5" aria-hidden="true" />
                                            </div>
                                            <h3 className="text-xl font-bold leading-tight">{item.title}</h3>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                                        </CardContent>
                                    </Card>
                                )
                            })}
                        </div>
                    </section>

                    <section className="grid gap-6 md:grid-cols-3">
                        <div className="group relative min-h-80 overflow-hidden rounded-[1.75rem] border border-border/70 bg-muted shadow-sm">
                            <Image
                                src={sectionImages.environment}
                                alt="Nursery et espace structuré pour les chiots Pomsky"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                                sizes="(min-width: 768px) 33vw, 100vw"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/45 via-black/10 to-transparent" aria-hidden="true" />
                            <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">Environnement</p>
                                <p className="mt-2 text-base font-semibold">Un cadre stable pour créer de vrais repères</p>
                            </div>
                        </div>

                        <div className="group relative min-h-80 overflow-hidden rounded-[1.75rem] border border-border/70 bg-muted shadow-sm">
                            <Image
                                src="/pages/conditions-de-vie/chiots-jouent-dans-bac-a-boules.webp"
                                alt="Chiot Pomsky en socialisation avec jeux de bac à balles"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                                sizes="(min-width: 768px) 33vw, 100vw"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/45 via-black/10 to-transparent" aria-hidden="true" />
                            <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">Socialisation</p>
                                <p className="mt-2 text-base font-semibold">Des découvertes progressives, sans surstimulation</p>
                            </div>
                        </div>

                        <div className="group relative min-h-80 overflow-hidden rounded-[1.75rem] border border-border/70 bg-muted shadow-sm">
                            <Image
                                src="/pages/conditions-de-vie/sortie-encadree-avec-marine.webp"
                                alt="Sorties et découvertes extérieures des Pomsky"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                                sizes="(min-width: 768px) 33vw, 100vw"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/45 via-black/10 to-transparent" aria-hidden="true" />
                            <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">Découvertes</p>
                                <p className="mt-2 text-base font-semibold">Des expériences pensées pour l’équilibre futur</p>
                            </div>
                        </div>
                    </section>

                    <section className="grid gap-8 rounded-[2rem] border border-border/70 bg-muted/25 p-6 md:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                        <div className="space-y-4">
                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/80">
                                Rythme et relation
                            </p>
                            <h2 className="text-2xl font-bold md:text-3xl">Respecter le rythme de chaque chiot</h2>
                            <p className="leading-relaxed text-muted-foreground">
                                Le bien-être ne se mesure pas uniquement à l’activité ou à la stimulation. Le repos est tout aussi fondamental. Un chiot a besoin de temps calmes, d’un rythme respecté et d’un environnement dans lequel il peut récupérer sereinement. Nous veillons à maintenir un équilibre entre les phases de découverte, les interactions et les moments de repos.
                            </p>
                            <p className="leading-relaxed text-muted-foreground">
                                Respecter le rythme de chaque chiot, c’est aussi accepter que tous n’évoluent pas exactement de la même façon. Certains sont plus démonstratifs, d’autres plus observateurs. Cette attention portée à l’individualité permet d’accompagner le développement de manière plus juste et plus respectueuse.
                            </p>

                            <div className="grid gap-4 sm:grid-cols-2">
                                <Card className="border-primary/10 bg-background/90">
                                    <CardHeader>
                                        <div className="flex items-center gap-2">
                                            <Bed className="h-4 w-4 text-primary" aria-hidden="true" />
                                            <h3 className="text-base font-semibold">Repos fondamental</h3>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm leading-relaxed text-muted-foreground">
                                            Les phases calmes permettent au chiot de récupérer, d’intégrer ses découvertes et de se développer dans de bonnes conditions.
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card className="border-primary/10 bg-background/90">
                                    <CardHeader>
                                        <div className="flex items-center gap-2">
                                            <Heart className="h-4 w-4 text-primary" aria-hidden="true" />
                                            <h3 className="text-base font-semibold">Présence humaine régulière</h3>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm leading-relaxed text-muted-foreground">
                                            La proximité quotidienne, les gestes doux et la cohérence des interactions construisent une base relationnelle saine.
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>

                            <div className="grid gap-4">
                                <div className="relative min-h-80 overflow-hidden rounded-[1.75rem] bg-muted shadow-sm">
                                    <Image
                                        src={sectionImages.discovery}
                                        alt="Sorties progressives des Pomsky en extérieur"
                                        fill
                                        className="object-cover"
                                        sizes="(min-width: 1024px) 35vw, 100vw"
                                    />
                                </div>
                                <div className="relative min-h-80 overflow-hidden rounded-[1.5rem] bg-muted shadow-sm">
                                    <Image
                                        src={sectionImages.presence}
                                        alt="Présence humaine régulière auprès des chiots Pomsky"
                                        fill
                                    className="object-cover"
                                    sizes="(min-width: 1024px) 35vw, 100vw"
                                />
                            </div>
                        </div>
                    </section>

                    <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
                        <Card className="rounded-[2rem] border border-border/70 bg-background/85 shadow-sm">
                            <CardHeader className="space-y-4">
                                <div className="flex items-center gap-2 text-primary">
                                    <Utensils className="h-4 w-4" aria-hidden="true" />
                                    <span className="text-sm font-medium">Soins du quotidien</span>
                                </div>
                                <h2 className="text-2xl font-bold md:text-3xl">Alimentation, soins et attention au quotidien</h2>
                            </CardHeader>
                            <CardContent className="space-y-5">
                                <p className="leading-relaxed text-muted-foreground">
                                    Le bien-être animal passe également par une attention rigoureuse portée aux besoins essentiels : alimentation adaptée, suivi quotidien, observation du développement et accompagnement attentif des premières étapes de vie. Chaque chiot bénéficie d’un cadre de soin pensé pour favoriser son bon départ.
                                </p>
                                <p className="leading-relaxed text-muted-foreground">
                                    Nous considérons que la qualité de l’élevage se mesure aussi dans les détails du quotidien : la vigilance, la régularité, l’attention portée à l’évolution de chaque chiot et la volonté constante de préserver son équilibre général.
                                </p>
                                <ul className="grid gap-3 text-sm leading-relaxed text-muted-foreground sm:grid-cols-2">
                                    {carePoints.map((item) => (
                                        <li
                                            key={item.text}
                                            className="flex items-start gap-3 rounded-2xl border border-primary/10 bg-muted/30 p-4"
                                        >
                                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                                <item.icon className="h-4 w-4" aria-hidden="true" />
                                            </span>
                                            <span>{item.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>

                        <div className="grid gap-6">
                            <Card className="rounded-[2rem] border border-primary/10 bg-primary/5 shadow-sm">
                                <CardHeader className="space-y-4">
                                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/80">
                                        Pour les familles
                                    </p>
                                    <h2 className="text-2xl font-bold md:text-3xl">
                                        Pourquoi le bien-être animal change tout pour la future famille
                                    </h2>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="leading-relaxed text-muted-foreground">
                                        Un chiot qui a grandi dans un environnement équilibré, respectueux et cohérent dispose généralement de bases plus solides pour rejoindre sa nouvelle famille. Le bien-être vécu à l’élevage influence sa capacité d’adaptation, sa relation à l’humain, sa confiance face à la nouveauté et son confort émotionnel dans les premières semaines suivant son départ.
                                    </p>
                                    <p className="leading-relaxed text-muted-foreground">
                                        Choisir un élevage attentif au bien-être animal, ce n’est pas seulement faire un choix éthique. C’est aussi poser les meilleures bases possibles pour construire une relation harmonieuse et durable avec son futur compagnon.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="rounded-[2rem] border border-primary/15 bg-background shadow-sm">
                                <CardHeader>
                                    <div className="flex items-center gap-2">
                                        <NotebookText className="h-4 w-4 text-primary" aria-hidden="true" />
                                        <h2 className="text-2xl font-bold md:text-3xl">Notre vision du bien-être chez Royal Pomsky</h2>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="leading-relaxed text-muted-foreground">
                                        Chez Royal Pomsky, le bien-être animal n’est pas un argument décoratif. Il fait partie de notre manière de travailler, d’observer, d’accompagner et de faire grandir nos chiens. Nous cherchons à offrir à chaque chiot un départ dans la vie aussi serein que possible, dans un cadre où la qualité de présence, la cohérence du rythme et le respect de ses besoins occupent une place centrale.
                                    </p>
                                    <p className="text-sm font-medium text-foreground">
                                        La différence entre une vitrine rassurante et un élevage responsable se joue dans la constance du quotidien.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    <section className="overflow-hidden rounded-[2rem] border border-primary/10 bg-[linear-gradient(135deg,rgba(170,126,88,0.08),rgba(255,255,255,1),rgba(170,126,88,0.03))]">
                        <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
                            <div className="space-y-5">
                                <div className="flex items-center gap-2 text-primary">
                                    <Sprout className="h-4 w-4" aria-hidden="true" />
                                    <span className="text-sm font-medium">Projet d’adoption</span>
                                </div>
                                <h2 className="text-2xl font-bold md:text-3xl">Découvrir nos chiots disponibles</h2>
                                <p className="max-w-3xl leading-relaxed text-muted-foreground">
                                    Vous souhaitez en savoir plus sur nos chiots ou découvrir notre élevage à travers les profils actuellement disponibles ? Consultez notre page dédiée ou contactez-nous pour échanger sur votre projet d’adoption.
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

                            <div className="relative min-h-80 overflow-hidden rounded-[1.75rem] bg-muted shadow-sm">
                                <Image
                                    src="/pages/conditions-de-vie/groupe-de-chiots-en-siestes.webp"
                                    alt="Espace de vie des chiots Pomsky"
                                    fill
                                    className="object-cover"
                                    sizes="(min-width: 1024px) 30vw, 100vw"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" aria-hidden="true" />
                            </div>
                        </div>
                    </section>

                    <FAQSection
                        title="Questions fréquentes sur le bien-être animal en élevage Pomsky"
                        description="Les réponses essentielles sur l’environnement, la socialisation, le repos et les repères qui comptent dans un élevage attentif au bien-être."
                        items={faqBienEtre}
                    />

                    <div className="text-right text-xs text-muted-foreground">
                        Dernière mise à jour : {lastMod}
                    </div>
                </div>
            </div>
        </>
    )
}
