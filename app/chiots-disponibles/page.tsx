import { FAQSection } from "@/components/faq"
import { faqNosChiots } from "@/lib/faq-data"
import { NotebookText, PawPrint, Sprout } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import { pageMetadata, returnLastmod, siteConfig } from "@/lib/seo-config"
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators"
import { convertFAQsToSchema } from "@/lib/faq-utils"

export const metadata: Metadata = {
    title: pageMetadata.puppies.title,
    description: pageMetadata.puppies.description,
    keywords: pageMetadata.puppies.keywords,
    openGraph: {
        title: pageMetadata.puppies.title,
        description: pageMetadata.puppies.description,
        url: `${siteConfig.siteUrl}/chiots-disponibles`,
        images: [{ url: `${siteConfig.siteUrl}${siteConfig.ogImage}` }],
    },
    alternates: {
        canonical: `${siteConfig.siteUrl}/chiots-disponibles`,
    },
}

// type Puppy = {
//     name: string
//     age: string
//     coat: string
//     color: string
//     readyDate: string
//     weight: string
//     parents: string
//     description: string
//     highlights: string[]
//     images: string[]
// }

// const puppies: Puppy[] = [
//     {
//         name: "Lila du Mamite",
//         age: "6 semaines",
//         coat: "Poil ras – naine",
//         color: "Noir et feu",
//         readyDate: "Disponible à partir du 10 décembre",
//         weight: "1.4 kg",
//         parents: "Nova x Pixel (tests génétiques OK)",
//         description:
//             "Petite fusée curieuse, adore suivre les enfants dans le jardin. Habituée aux bruits du quotidien et aux manipulations douces.",
//         highlights: ["LOF en cours", "Stimulation précoce + sortie jardin", "Kit chiot et conseils personnalisés"],
//         images: [
//             "WhatsApp Image 2025-11-01 at 19.07.56.jpeg",
//             "WhatsApp Image 2025-11-01 at 19.07.57.jpeg",
//             "WhatsApp Image 2025-11-01 at 19.07.57(5).jpeg",
//         ],
//     },
// ]

// function ImageCarousel({ images, alt }: { images: string[]; alt: string }) {
//     const [index, setIndex] = useState(0)
//     const total = images.length

//     const prev = () => setIndex((i) => (i - 1 + total) % total)
//     const next = () => setIndex((i) => (i + 1) % total)

//     return (
//         <div className="relative h-72 md:h-full overflow-hidden rounded-lg bg-amber-950 mx-4">
//             <Image
//                 src={`/${images[index]}`}
//                 alt={`${alt} - photo ${index + 1}`}
//                 fill
//                 className="object-cover transition duration-300 p-2"
//                 sizes="(min-width: 768px) 50vw, 100vw"
//                 priority={index === 0}
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
//             <div className="absolute top-3 right-3 text-xs px-3 py-1 rounded-full bg-black/60 text-white">
//                 {index + 1}/{total}
//             </div>
//             <button
//                 aria-label="Précédent"
//                 onClick={prev}
//                 className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 text-white p-2 hover:bg-black/70 transition"
//             >
//                 <ChevronLeft className="h-5 w-5" />
//             </button>
//             <button
//                 aria-label="Suivant"
//                 onClick={next}
//                 className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 text-white p-2 hover:bg-black/70 transition"
//             >
//                 <ChevronRight className="h-5 w-5" />
//             </button>
//             <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
//                 {images.map((_, i) => (
//                     <span
//                         key={i}
//                         className={`h-2 w-2 rounded-full ${i === index ? "bg-primary" : "bg-white/60"}`}
//                     />
//                 ))}
//             </div>
//         </div>
//     )
// }

export default function NosChiotsPage() {
    // Schémas JSON-LD
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Accueil", url: "/" },
        { name: "Nos chiots", url: siteConfig.pages.puppies },
    ])
    const faqSchema = generateFAQSchema(convertFAQsToSchema(faqNosChiots))
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

            <div className="py-16">
                <div className="container mx-auto my-12">
                    <section className="text-center space-y-4 mb-12">
                        <h1
                            className="text-xl md:text-3xl font-bold">Nos chiots disponibles</h1>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Chez Royal POMSKY, chaque naissance est le fruit d&apos;un choix conscient, réfléchi et profondément respectueux du bien-être animal.
                        </p>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Notre élevage est dédié aux pomsky Toy rares et exotiques, élevés avec amour, patience et exigence, tant sur le plan de la santé que de l&apos;équilibre émotionnel.
                        </p>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full" aria-hidden="true" />
                    </section>

                    <section className="max-w-4xl mx-auto bg-muted/30 border border-muted rounded-2xl p-8 md:p-10 space-y-6 text-left mb-12">
                        <div className="flex items-start gap-3">
                            <PawPrint className="text-2xl text-primary" aria-hidden="true" />
                            <div>
                                <h2
                                    className="text-xl md:text-2xl font-semibold leading-tight">Pas de chiots disponibles pour le moment</h2>
                                <p className="text-muted-foreground mt-2">
                                    À l&apos;heure actuelle, aucun chiot n&apos;est disponible.
                                </p>
                            </div>
                        </div>
                        <p className="text-muted-foreground">
                            Les prochaines naissances sont prévues courant 2026, conformément à notre vision d&apos;un élevage
                            raisonné, où la qualité prime toujours sur la quantité. Nous choisissons de limiter volontairement
                            le nombre de portées afin de pouvoir offrir à chaque chiot :
                        </p>
                        <div className="grid gap-3">
                            {[
                                "un départ dans la vie serein et sécurisé,",
                                "une socialisation précoce soignée,",
                                "une attention individuelle,",
                                "et un environnement riche, doux et structurant.",
                            ].map((item) => (
                                <div key={item} className="flex gap-4 items-center">
                                    <div className="rounded-full bg-primary/10 p-2 text-primary" aria-hidden="true">
                                        <PawPrint className="h-4 w-4" />
                                    </div>
                                    <p className="text-muted-foreground">{item}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                    <section className="max-w-4xl mx-auto bg-muted/30 border border-muted rounded-2xl p-8 md:p-10 space-y-6 text-left mb-12">
                        <div className="flex items-start gap-3">
                            <NotebookText className="text-2xl text-primary" aria-hidden="true" />
                            <div>
                                <h2
                                    className="text-xl md:text-2xl font-semibold leading-tight">Vous souhaitez rejoindre notre liste d&apos;attente ?</h2>
                                <p className="text-muted-foreground mt-2">
                                    Nous privilégions des adoptions conscientes, basées sur la rencontre, la confiance et le respect mutuel.
                                </p>
                            </div>
                        </div>
                        <p className="text-muted-foreground">
                            Si notre philosophie résonne avec vos valeurs et que vous souhaitez accueillir, en 2026, un teckel Royal POMSKY dans votre foyer, nous vous invitons à :
                        </p>
                        <div className="grid gap-3">
                            {[
                                "nous contacter via la page Contact,",
                                "nous parler de votre projet de vie,",
                                "et prendre le temps de créer un lien en amont.",
                            ].map((item) => (
                                <div key={item} className="flex gap-4 items-center">
                                    <div className="rounded-full bg-primary/10 p-2 text-primary" aria-hidden="true">
                                        <NotebookText className="h-4 w-4" />
                                    </div>
                                    <p className="text-muted-foreground">{item}</p>
                                </div>
                            ))}
                        </div>
                        <Link
                            href="/contact"
                            className="flex items-center bg-primary justify-center text-white hover:bg-primary/80 p-4 font-semibold dark:text-[#5b3a1a] rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        >Inscrivez vous sur la liste d&apos;attente</Link>
                    </section>
                    <section className="max-w-4xl mx-auto bg-muted/30 border border-muted rounded-2xl p-8 md:p-10 space-y-6 text-left">
                        <div className="flex items-start gap-3">
                            <Sprout className="text-2xl text-primary" />
                            <div>
                                <h2
                                    className="text-xl md:text-2xl font-semibold leading-tight">Une perle rare prend le temps de naître</h2>
                                <p className="text-muted-foreground mt-2">
                                    Chez Royal POMSKY, nous croyons que les plus belles choses ne se précipitent pas.
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

                    <FAQSection
                        title="FAQ adoption et vie avec un teckel"
                        description="Le caractère, l'éducation, la cohabitation et les besoins quotidiens des pomsky."
                        items={faqNosChiots}
                    />

                    {/* <div className="grid gap-10">
                    {puppies.map((puppy, index) => (
                        <Card key={puppy.name} className="overflow-hidden bg-muted/30">
                            <CardContent className="p-0">
                                <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? "md:grid-flow-col-dense" : ""}`}>
                                    <div className={`relative min-h-[320px] ${index % 2 === 1 ? "md:order-2" : ""}`}>
                                        <ImageCarousel images={puppy.images} alt={puppy.name} />
                                    </div>
                                    <div className={`p-8 space-y-4 flex flex-col justify-center ${index % 2 === 1 ? "md:order-1" : ""}`}>
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
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                                            <div className="flex items-center gap-2 text-muted-foreground">
                                                <Heart className="h-4 w-4 text-primary" />
                                                <span>{puppy.parents}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-muted-foreground">
                                                <Calendar className="h-4 w-4 text-primary" />
                                                <span>{puppy.readyDate}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-muted-foreground">
                                                <PawPrint className="h-4 w-4 text-primary" />
                                                <span>{puppy.age}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-muted-foreground">
                                                <Weight className="h-4 w-4 text-primary" />
                                                <span>{puppy.weight}</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {puppy.highlights.map((item) => (
                                                <Badge key={item} variant="secondary">
                                                    {item}
                                                </Badge>
                                            ))}
                                        </div>
                                        <div className="flex flex-col sm:flex-row gap-3">
                                            <Button>Réserver une visite</Button>
                                            <Button variant="outline">Demander plus de photos</Button>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div> */}
                    <div className="text-right text-xs text-muted-foreground mt-6">
                        Dernière mise à jour : {lastMod}
                    </div>
                </div>
            </div>
        </>
    )
}
