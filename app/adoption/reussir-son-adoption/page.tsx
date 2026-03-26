import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import {
    ArrowRight,
    Backpack,
    CarFront,
    CheckCircle2,
    Clock3,
    HeartHandshake,
    House,
    Lightbulb,
    PawPrint,
    Plane,
    ShieldAlert,
    TrainFront,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { FAQSection } from "@/components/faq"
import { convertFAQsToSchema } from "@/lib/faq-utils"
import { buildOpenGraph, buildTwitter, pageMetadata, returnLastmod, siteConfig } from "@/lib/seo-config"
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators"

const adoptionGuideOgJpg = "/nurcery-panier.jpg"
const adoptionGuideOgWebp = "/nurcery-panier.webp"

export const metadata: Metadata = {
    title: pageMetadata.adoptionGuide.title,
    description: pageMetadata.adoptionGuide.description,
    keywords: pageMetadata.adoptionGuide.keywords,
    openGraph: buildOpenGraph({
        title: pageMetadata.adoptionGuide.title,
        description: pageMetadata.adoptionGuide.description,
        url: `${siteConfig.siteUrl}${siteConfig.pages.adoptionGuide}`,
        images: [
            {
                url: `${siteConfig.siteUrl}${adoptionGuideOgJpg}`,
                alt: "Chiot Pomsky dans un panier avant son départ",
                width: siteConfig.ogImageWidth,
                height: siteConfig.ogImageHeight,
                type: "image/jpeg",
            },
            {
                url: `${siteConfig.siteUrl}${adoptionGuideOgWebp}`,
                alt: "Chiot Pomsky dans un panier avant son départ",
                width: siteConfig.ogImageWidth,
                height: siteConfig.ogImageHeight,
                type: "image/webp",
            },
        ],
    }),
    twitter: buildTwitter({
        title: pageMetadata.adoptionGuide.title,
        description: pageMetadata.adoptionGuide.description,
        imageUrl: `${siteConfig.siteUrl}${adoptionGuideOgJpg}`,
    }),
    alternates: {
        canonical: `${siteConfig.siteUrl}${siteConfig.pages.adoptionGuide}`,
    },
}

const dayOfAdoptionChecklist = [
    "une couverture ou un plaid déjà prêt pour rassurer le chiot pendant le trajet",
    "de l'eau et une petite gamelle de voyage",
    "un snack simple et adapté au chiot, à utiliser seulement si besoin",
    "des alèses ou une serviette absorbante",
    "une caisse de transport ou un système d'attache sécurisé",
]

const travelModes = [
    {
        title: "En voiture",
        icon: CarFront,
        items: [
            "Installez le chiot dans une caisse de transport stable ou avec un harnais de sécurité.",
            "Évitez un repas juste avant le départ pour limiter les nausées.",
            "Prévoyez des pauses calmes si le trajet est long, sans multiplier les manipulations.",
            "Gardez à portée une serviette, de l'eau et de quoi nettoyer rapidement si nécessaire.",
        ],
    },
    {
        title: "En train",
        icon: TrainFront,
        items: [
            "Préparez un contenant confortable, discret et facile à garder près de vous.",
            "Voyagez léger pour pouvoir gérer le chiot sans stress sur le quai et à l'embarquement.",
            "Prévoyez une alèse, un peu d'eau et une couverture pour créer un cocon stable.",
            "Vérifiez les conditions de votre transporteur avant le départ et réservez ce qu'il faut en amont.",
        ],
    },
    {
        title: "En avion",
        icon: Plane,
        items: [
            "L'avion doit rester un cas préparé avec soin, selon le profil du chiot et la destination.",
            "Confirmez très en avance les conditions de la compagnie, les documents et le type de transport accepté.",
            "Privilégiez si possible les trajets simples, avec peu d'attente et peu de changements.",
            "Pour un départ international, faites vérifier les formalités sanitaires et administratives avant toute réservation.",
        ],
    },
]

const homeChecklist = [
    "un coin repos calme, stable et facile à retrouver",
    "une niche, un panier ou un couchage moelleux placé dans une zone peu passante",
    "deux gamelles, dont une dédiée à l'eau fraîche en permanence",
    "des jouets simples à mâcher et adaptés à l'âge du chiot",
    "un espace sécurisé pour la nuit et les temps de repos",
    "un rythme simple: sorties, repas, sommeil, présence humaine calme",
]

const firstWeekAvoid = [
    "organiser une fête d'arrivée ou recevoir beaucoup de visiteurs",
    "faire passer le chiot de bras en bras toute la journée",
    "imposer immédiatement tous les espaces de la maison",
    "forcer le contact s'il cherche au contraire à observer et se poser",
]

const pottySchedule = [
    { age: "Vers 2 mois", rhythm: "environ toutes les 2 heures", note: "et systématiquement après le réveil, le repas, le jeu ou une émotion forte" },
    { age: "Vers 3 mois", rhythm: "environ toutes les 3 heures", note: "avec encore beaucoup d'accompagnement et peu de marge d'attente" },
    { age: "Vers 4 mois", rhythm: "environ toutes les 4 heures", note: "si le chiot est reposé, régulier et bien guidé" },
    { age: "Jusqu'à 6 mois", rhythm: "la retenue reste limitée", note: "on garde des sorties fréquentes et on n'attend pas un contrôle complet trop tôt" },
]

const resources = [
    {
        title: "Esprit Dog Start",
        href: "https://www.espritdog.com/esprit-dog-start/",
        description: "Une base utile pour les premiers repères, l'arrivée du chiot et les erreurs à éviter.",
    },
    {
        title: "Esprit Dog: apprendre la propreté à son chiot",
        href: "https://www.espritdog.com/esprit-dog-chiot/",
        description: "À consulter pour structurer les sorties, le rythme et l'apprentissage sans punition.",
    },
    {
        title: "Esprit Dog: apprendre la solitude au chiot",
        href: "https://www.youtube.com/watch?v=EeZzgqsGa1M",
        description: "Une vidéo utile pour comprendre les troubles de la solitude, éviter les mauvaises routines au départ et mettre en place des absences plus progressives.",
    },
    {
        title: "Anivet Voyage",
        href: "https://anivetvoyage.com/",
        description: "Un repère utile si votre chiot doit voyager à l'international avec formalités spécifiques.",
    },
]

const adoptionGuideFaq = [
    {
        question: "Que faut-il prévoir pour le trajet du jour de l'adoption ?",
        answer: (
            <div className="space-y-3">
                <p>
                    Préparez une couverture, de l&apos;eau, une petite gamelle de voyage, une alèse ou une serviette absorbante,
                    ainsi qu&apos;un moyen de transport sécurisé comme une caisse ou un harnais adapté.
                </p>
                <p>
                    L&apos;objectif est de garder le trajet simple, calme et confortable pour le chiot Pomsky, sans surstimulation inutile.
                </p>
            </div>
        ),
    },
    {
        question: "Comment accueillir un chiot Pomsky à la maison la première semaine ?",
        answer: (
            <div className="space-y-3">
                <p>
                    La première semaine, il vaut mieux limiter l&apos;environnement aux habitants de la maison et éviter les visites en série.
                </p>
                <p>
                    Le chiot doit pouvoir observer, dormir, explorer à son rythme et choisir un endroit refuge où son couchage pourra ensuite être installé durablement.
                </p>
            </div>
        ),
    },
    {
        question: "À quelle fréquence un chiot doit-il sortir pour apprendre la propreté ?",
        answer: (
            <div className="space-y-3">
                <p>
                    Vers 2 mois, il faut souvent proposer une sortie environ toutes les 2 heures, puis toutes les 3 heures vers 3 mois, avec de grandes variations selon le chiot.
                </p>
                <p>
                    Les moments clés restent le réveil, les repas, l&apos;eau, le jeu et les émotions fortes. Avant 6 mois, la retenue reste encore limitée.
                </p>
            </div>
        ),
    },
    {
        question: "Faut-il commencer à apprendre la solitude dès les premières semaines ?",
        answer: (
            <div className="space-y-3">
                <p>
                    Oui, mais de façon progressive. On évite les départs brutaux ou les rituels anxiogènes, et on construit des absences courtes, lisibles et répétées.
                </p>
                <p>
                    L&apos;enjeu est d&apos;éviter que le chiot associe chaque départ à une montée de stress, surtout chez un Pomsky très proche de l&apos;humain.
                </p>
            </div>
        ),
    },
    {
        question: "Faut-il une formation pour apprendre à élever son chiot ?",
        answer: (
            <div className="space-y-3">
                <p>
                    Oui et non. L&apos;apprentissage d&apos;un chiot repose très souvent sur le bon sens, la régularité et l&apos;attention que l&apos;on porte à ses besoins au quotidien.
                </p>
                <p>
                    Il n&apos;est donc pas obligatoire de suivre une formation, mais il peut être très utile de se préparer avant l&apos;arrivée du chiot avec des ressources sérieuses, comme certaines formations proposées par Esprit Dog.
                </p>
                <p>
                    L&apos;important reste de choisir des conseils cohérents, respectueux du bien-être du chiot et adaptés à votre mode de vie. Vous restez libre de retenir les approches qui vous correspondent le mieux.
                </p>
            </div>
        ),
    },
]

export default function AdoptionSuccessPage() {
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Accueil", url: "/" },
        { name: "Réussir son adoption", url: siteConfig.pages.adoptionGuide },
    ])
    const faqSchema = generateFAQSchema(convertFAQsToSchema(adoptionGuideFaq))
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: pageMetadata.adoptionGuide.title,
        description: pageMetadata.adoptionGuide.description,
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${siteConfig.siteUrl}${siteConfig.pages.adoptionGuide}`,
        },
        inLanguage: "fr-FR",
        datePublished: "2026-03-07T09:00:00+01:00",
        dateModified: "2026-03-07T09:00:00+01:00",
        author: {
            "@type": "Organization",
            name: siteConfig.name,
            url: siteConfig.siteUrl,
        },
        publisher: {
            "@type": "Organization",
            name: siteConfig.name,
            logo: {
                "@type": "ImageObject",
                url: `${siteConfig.siteUrl}/icon.png`,
            },
        },
        image: [
            `${siteConfig.siteUrl}/nurcery-panier.webp`,
            `${siteConfig.siteUrl}/pomsky-and-his-pet-family-parent.jpg`,
        ],
        about: [
            { "@type": "Thing", name: "Pomsky" },
            { "@type": "Thing", name: "Adoption de chiot" },
            { "@type": "Thing", name: "Éducation du chiot" },
            { "@type": "Thing", name: "Propreté du chiot" },
        ],
    }
    const lastMod = returnLastmod(siteConfig.pages.adoptionGuide)

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
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />

            <div className="py-16">
                <div className="container mx-auto space-y-16">
                    <section className="grid gap-8 rounded-3xl border border-muted bg-muted/30 p-6 md:grid-cols-[1.1fr_0.9fr] md:p-10">
                        <div className="space-y-6">
                            <Badge variant="secondary" className="w-fit">
                                Guide adoption
                            </Badge>
                            <div className="space-y-4">
                                <h1 className="text-2xl font-bold md:text-3xl">
                                    Réussir l&apos;adoption de son chiot Pomsky: le jour du départ, l&apos;arrivée à la maison et les premières semaines
                                </h1>
                                <p className="max-w-3xl text-muted-foreground">
                                    Une adoption réussie se prépare avant même le trajet. Le jour J, l&apos;objectif n&apos;est pas d&apos;en faire trop, mais
                                    d&apos;offrir à votre chiot Pomsky un départ doux, prévisible et rassurant.
                                </p>
                                <p className="max-w-3xl text-muted-foreground">
                                    Cette page réunit les repères essentiels pour les futurs parents: trajet en voiture, train ou avion, installation à la
                                    maison, premières nuits, premières sorties et rythme de propreté.
                                </p>
                                <p className="max-w-3xl text-muted-foreground">
                                    Ces conseils sont pensés pour tous les formats de Pomsky, du Pomsky toy au Pomsky standard, et pour des profils de chiots très différents, du plus calme au plus sensible. Beaucoup de repères restent utiles pour d&apos;autres races, mais nous les avons ici formulés à partir de notre expérience avec les Pomsky de Royal POMSKY.
                                </p>
                            </div>
                            <div className="grid gap-3 sm:grid-cols-3">
                                <Card className="bg-background/80">
                                    <CardContent className="p-3 md:p-4">
                                        <p className="text-sm font-semibold">Un départ apaisé</p>
                                        <p className="mt-2 text-sm text-muted-foreground">Transition douce avec la maman, l&apos;éleveur et la future famille.</p>
                                    </CardContent>
                                </Card>
                                <Card className="bg-background/80">
                                    <CardContent className="p-3 md:p-4">
                                        <p className="text-sm font-semibold">Un trajet préparé</p>
                                        <p className="mt-2 text-sm text-muted-foreground">Le bon matériel réduit fortement le stress du chiot.</p>
                                    </CardContent>
                                </Card>
                                <Card className="bg-background/80">
                                    <CardContent className="p-3 md:p-4">
                                        <p className="text-sm font-semibold">Une maison calme</p>
                                        <p className="mt-2 text-sm text-muted-foreground">Peu de monde, peu de bruit, beaucoup d&apos;observation et de repos.</p>
                                    </CardContent>
                                </Card>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <Link
                                    href="/chiots-disponibles"
                                    className="inline-flex items-center rounded-md bg-primary px-4 py-2 font-semibold text-white transition hover:bg-primary/85 dark:text-[#5b3a1a]"
                                >
                                    Voir nos chiots Pomsky disponibles
                                </Link>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center rounded-md border border-primary px-4 py-2 font-semibold text-primary transition hover:bg-primary/10 w-full md:w-fit"
                                >
                                    Parler de votre projet
                                </Link>
                            </div>
                        </div>

                        <div className="grid gap-4">
                            <div className="relative min-h-70 overflow-hidden rounded-2xl">
                                <Image
                                    src="/nurcery-panier.webp"
                                    alt="Chiot pomsky dans un panier prêt pour une arrivée douce dans sa nouvelle famille"
                                    fill
                                    className="object-cover"
                                    priority
                                    fetchPriority="high"
                                    sizes="(min-width: 768px) 40vw, 100vw"
                                />
                            </div>
                            <div className="rounded-2xl border border-primary/20 bg-background/85 p-5">
                                <div className="flex items-start gap-3">
                                    <HeartHandshake className="mt-1 min-h-5 min-w-5 text-primary" />
                                    <div className="space-y-2">
                                        <h2 className="font-semibold">Ce que nous faisons pour une séparation plus douce</h2>
                                        <p className="text-sm text-muted-foreground">
                                            Avant le départ, nous laissons un temps calme entre la maman, son chiot et les futurs adoptants pour limiter la
                                            rupture. L&apos;élevage remet également un objet portant l&apos;odeur de la maman afin d&apos;offrir à votre chiot un repère familier
                                            dès les premières heures.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="grid gap-8 md:grid-cols-[0.95fr_1.05fr] md:items-center">
                        <div className="relative min-h-96 overflow-hidden rounded-3xl">
                            <Image
                                src="/pomsky-black-and-white-f3-generation.webp"
                                alt="Chiot pomsky attentif et calme pendant ses premières découvertes"
                                fill
                                className="object-cover"
                                sizes="(min-width: 768px) 45vw, 100vw"
                            />
                        </div>
                        <div className="space-y-6">
                            <div className="space-y-3">
                                <Badge variant="secondary" className="w-fit">
                                    Le jour J
                                </Badge>
                                <h2 className="text-xl font-bold md:text-2xl">Le départ doit être simple, calme et lisible pour le chiot</h2>
                                <p className="text-muted-foreground">
                                    Le chiot quitte tout son univers en quelques minutes. Plus l&apos;ambiance est calme, plus la transition est facile. On
                                    évite donc l&apos;excitation, les manipulations en boucle et les départs précipités.
                                </p>
                                <p className="text-muted-foreground">
                                    Prévoyez un sac prêt avant d&apos;arriver. Une fois le chiot installé, on parle peu, on rassure sans surstimuler, et on
                                    laisse le temps faire son travail.
                                </p>
                            </div>
                            <Card className="bg-muted/30">
                                <CardContent className="p-4 md:p-6">
                                    <div className="mb-4 flex items-center gap-3">
                                        <Backpack className="h-5 w-5 text-primary" />
                                        <h3 className="font-semibold">Dans votre sac pour le trajet</h3>
                                    </div>
                                    <ul className="space-y-3 text-sm text-muted-foreground">
                                        {dayOfAdoptionChecklist.map((item) => (
                                            <li key={item} className="flex items-start gap-3">
                                                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    <section className="space-y-6 rounded-3xl border border-muted bg-muted/30 p-6 md:p-10">
                        <div className="max-w-3xl space-y-3">
                            <Badge variant="secondary" className="w-fit">
                                Préparer le trajet
                            </Badge>
                            <h2 className="text-xl font-bold md:text-2xl">Voiture, train ou avion: on adapte le matériel au trajet, pas l&apos;inverse</h2>
                            <p className="text-muted-foreground">
                                Le meilleur trajet est celui qui reste simple, sécurisé et prévisible. Un chiot Pomsky n&apos;a pas besoin de stimulation, il a besoin
                                de stabilité, de température confortable et d&apos;un adulte disponible.
                            </p>
                        </div>
                        <div className="grid gap-6 md:grid-cols-3">
                            {travelModes.map((mode) => {
                                const Icon = mode.icon
                                return (
                                    <Card key={mode.title} className="bg-background/85">
                                        <CardContent className="p-4 md:p-6">
                                            <div className="mb-4 flex items-center gap-3">
                                                <div className="rounded-full bg-primary/10 p-2 text-primary">
                                                    <Icon className="h-5 w-5" />
                                                </div>
                                                <h3 className="font-semibold">{mode.title}</h3>
                                            </div>
                                            <ul className="space-y-3 text-sm text-muted-foreground">
                                                {mode.items.map((item) => (
                                                    <li key={item} className="flex items-start gap-3">
                                                        <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </CardContent>
                                    </Card>
                                )
                            })}
                        </div>
                    </section>

                    <section className="grid gap-8 md:grid-cols-[1fr_0.9fr]">
                        <div className="space-y-6">
                            <div className="space-y-3">
                                <Badge variant="secondary" className="w-fit">
                                    À la maison
                                </Badge>
                                <h2 className="text-xl font-bold md:text-2xl">Les premières 48 heures doivent ressembler à un sas, pas à une fête</h2>
                                <p className="text-muted-foreground">
                                    La première semaine, on limite l&apos;environnement aux habitants de la maison. Le chiot découvre déjà énormément de choses:
                                    nouvelles odeurs, nouveaux sols, nouvelles voix, nouveaux rythmes.
                                </p>
                                <p className="text-muted-foreground">
                                    Laissez-lui choisir son endroit refuge. C&apos;est souvent à cet endroit qu&apos;il faudra ensuite poser son couchage de façon
                                    durable. On accompagne, on n&apos;impose pas.
                                </p>
                            </div>
                            <Card className="bg-background/85">
                                <CardContent className="p-4 md:p-6">
                                    <div className="mb-4 flex items-center gap-3">
                                        <House className="h-5 w-5 text-primary" />
                                        <h3 className="font-semibold">Ce qu&apos;il faut prévoir avant l&apos;arrivée</h3>
                                    </div>
                                    <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
                                        {homeChecklist.map((item) => (
                                            <li key={item} className="flex items-start gap-3">
                                                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>

                        <Card className="border-amber-600/30 bg-amber-50/70 dark:bg-amber-950/20">
                            <CardContent className="p-4 md:p-6">
                                <div className="mb-4 flex items-center gap-3">
                                    <ShieldAlert className="h-5 w-5 text-amber-700 dark:text-amber-300" />
                                    <h3 className="font-semibold">À éviter pendant la première semaine</h3>
                                </div>
                                <ul className="space-y-3 text-sm text-muted-foreground">
                                    {firstWeekAvoid.map((item) => (
                                        <li key={item} className="flex items-start gap-3">
                                            <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-700 dark:bg-amber-300" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-6 rounded-2xl bg-background/80 p-4 text-sm text-muted-foreground">
                                    Plus la maison reste calme au début, plus le chiot prend rapidement ses repères. Un chiot fatigué ou débordé apprend
                                    moins bien, dort moins bien et élimine moins bien.
                                </div>
                            </CardContent>
                        </Card>
                    </section>

                    <section className="space-y-6">
                        <div className="max-w-3xl space-y-3">
                            <Badge variant="secondary" className="w-fit">
                                Propreté
                            </Badge>
                            <h2 className="text-xl font-bold md:text-2xl">Un chiot ne peut pas se retenir comme un adulte, surtout avant 6 mois</h2>
                            <p className="text-muted-foreground">
                                Ce tableau donne des repères utiles, pas une règle absolue. Certains chiots Pomsky auront besoin de sortir encore plus souvent,
                                notamment après le sommeil, les repas, le jeu, l&apos;eau ou une montée d&apos;émotion.
                            </p>
                        </div>
                        <div className="grid gap-4 md:grid-cols-4">
                            {pottySchedule.map((entry) => (
                                <Card key={entry.age} className="bg-muted/30">
                                    <CardContent className="space-y-3 p-5">
                                        <div className="flex items-center gap-3">
                                            <Clock3 className="h-5 w-5 text-primary" />
                                            <p className="font-semibold">{entry.age}</p>
                                        </div>
                                        <p className="text-sm font-medium">{entry.rhythm}</p>
                                        <p className="text-sm text-muted-foreground">{entry.note}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                        <Card className="bg-background/85">
                            <CardContent className="p-4 md:p-6">
                                <h3 className="font-semibold">Repères très concrets pour aider votre chiot Pomsky dans les premiers mois</h3>
                                <ul className="mt-4 grid gap-3 text-sm text-muted-foreground md:grid-cols-2">
                                    <li className="flex items-start gap-3 rounded-2xl bg-muted/40 p-4">
                                        <PawPrint className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                                        <span>Sortie au réveil, même après une micro-sieste.</span>
                                    </li>
                                    <li className="flex items-start gap-3 rounded-2xl bg-muted/40 p-4">
                                        <PawPrint className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                                        <span>Sortie quelques minutes après le repas ou l&apos;eau. (pas de jeux après le repas)</span>
                                    </li>
                                    <li className="flex items-start gap-3 rounded-2xl bg-muted/40 p-4">
                                        <PawPrint className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                                        <span>Sortie après une séance de jeu ou d&apos;excitation.</span>
                                    </li>
                                    <li className="flex items-start gap-3 rounded-2xl bg-muted/40 p-4">
                                        <PawPrint className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                                        <span>Aucune punition si l&apos;accident se produit à l&apos;intérieur.</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </section>

                    <section className="grid gap-8 rounded-3xl border border-muted bg-muted/30 p-6 md:grid-cols-[0.95fr_1.05fr] md:p-10">
                        <div className="space-y-4">
                            <Badge variant="secondary" className="w-fit">
                                Ressources utiles
                            </Badge>
                            <h2 className="text-xl font-bold md:text-2xl">Pour aller plus loin après l&apos;adoption</h2>
                            <p className="text-muted-foreground">
                                Pour prolonger ces conseils, nous vous recommandons notamment les contenus de Tony Sylvestre et de l&apos;équipe Esprit Dog
                                sur les bases éducatives, la propreté et la socialisation progressive du chiot. Nous n&apos;avons aucun lien commercial avec
                                Esprit Dog, mais c&apos;est pour nous une référence sérieuse en matière d&apos;apprentissage et de bien-être du chiot.
                            </p>
                            <div className="relative min-h-96 overflow-hidden rounded-3xl">
                                <Image
                                    src="/pomsky-and-his-pet-family-parent.jpg"
                                    alt="Jeune pomsky avec sa famille humaine dans un moment calme"
                                    fill
                                    className="object-cover"
                                    sizes="(min-width: 768px) 40vw, 100vw"
                                />
                            </div>
                        </div>
                        <div className="grid gap-4">
                            {resources.map((resource) => (
                                <Card key={resource.href} className="bg-background/85">
                                    <CardContent className="p-4 md:p-5">
                                        <h3 className="font-semibold">{resource.title}</h3>
                                        <p className="mt-2 text-sm text-muted-foreground">{resource.description}</p>
                                        <a
                                            href={resource.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary underline underline-offset-4 hover:no-underline"
                                        >
                                            Consulter la ressource
                                            <ArrowRight className="h-4 w-4" />
                                        </a>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>

                    <section className="rounded-3xl bg-muted px-6 py-8 md:px-10">
                        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                            <div className="max-w-2xl">
                                <h2 className="flex items-center gap-3 text-xl font-bold md:text-2xl text-primary">
                                    <Lightbulb className="h-5 w-5 md:h-8 md:w-8 shrink-0" />
                                    <span>Un doute avant l&apos;adoption ou après l&apos;arrivée ?</span>
                                </h2>
                                <p className="mt-2 text-sm">
                                    Le bon réflexe reste toujours de poser vos questions avant de vous retrouver dans une situation stressante le jour du
                                    départ ou pendant la première semaine.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center rounded-md bg-white px-4 py-2 font-semibold text-primary transition hover:bg-white/90 w-full md:w-fit"
                                >
                                    Contacter l&apos;élevage
                                </Link>
                                <Link
                                    href="/le-pomsky"
                                    className="inline-flex items-center rounded-md border border-white/40 px-4 py-2 font-semibold transition hover:bg-white/10"
                                >
                                    Revoir les bases sur le Pomsky
                                </Link>
                            </div>
                        </div>
                    </section>

                    <FAQSection
                        title="FAQ adoption du chiot Pomsky"
                        description="Les repères essentiels pour préparer le départ, les premiers jours à la maison et les bases d'un démarrage serein."
                        items={adoptionGuideFaq}
                    />

                    <p className="text-center text-sm text-muted-foreground">
                        Dernière mise à jour: {lastMod}
                    </p>
                </div>
            </div>
        </>
    )
}
