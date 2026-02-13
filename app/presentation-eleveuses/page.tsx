import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { FAQSection } from "@/components/faq"
import type { Metadata } from "next"
import { buildOpenGraph, buildTwitter, pageMetadata, returnLastmod, siteConfig } from "@/lib/seo-config"
import { pageContent } from "@/lib/page-content"
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators"
import { convertFAQsToSchema } from "@/lib/faq-utils"
import { faqEleveuses } from "@/lib/faq-data"
import Link from "next/link"

export const metadata: Metadata = {
    title: pageMetadata.eleveuses.title,
    description: pageMetadata.eleveuses.description,
    keywords: pageMetadata.eleveuses.keywords,
    openGraph: buildOpenGraph({
        title: pageMetadata.eleveuses.title,
        description: pageMetadata.eleveuses.description,
        url: `${siteConfig.siteUrl}/presentation-eleveuses`,
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
        title: pageMetadata.eleveuses.title,
        description: pageMetadata.eleveuses.description,
        imageUrl: `${siteConfig.siteUrl}${siteConfig.ogImage}`,
    }),
    alternates: {
        canonical: `${siteConfig.siteUrl}/presentation-eleveuses`,
    },
}

export default function PresentationEleveusesPage() {
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Accueil", url: "/" },
        { name: "Les éleveuses", url: siteConfig.pages.eleveuses },
    ])
    const faqSchema = generateFAQSchema(convertFAQsToSchema(faqEleveuses))
    const lastMod = returnLastmod(siteConfig.pages.eleveuses)
    const aurelieGallery = [
        {
            src: "/assets/authors/Aurelie.webp",
            alt: "Aurélie dans l'élevage Royal POMSKY",
            className: "col-span-6 md:col-span-4 row-span-6 md:row-span-4",
        },
        {
            src: "/assets/authors/aurelie-violette-elevage-royal-pomsky.webp",
            alt: "Aurélie avec un Pomsky",
            className: "col-span-3 md:col-span-2 row-span-2",
        },
        {
            src: "/assets/authors/aurelie-moshi.webp",
            alt: "Aurélie et Moshi",
            className: "col-span-3 md:col-span-2 row-span-2",
        },
    ]
    const marineGallery = [
        {
            src: "/assets/authors/marine-eleveuse-royal-pomsky.webp",
            alt: "Portrait de Marine, éleveuse Royal POMSKY",
            className: "col-span-6 md:col-span-4 row-span-6 md:row-span-4",
        },
        {
            src: "/assets/authors/marine-elevage-royal-pomsky.webp",
            alt: "Marine avec un Pomsky",
            className: "col-span-3 md:col-span-2 row-span-2",
        },
        {
            src: "/assets/authors/marine-ava.webp",
            alt: "Marine et Ava",
            className: "col-span-3 md:col-span-2 row-span-2",
        },
    ]

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
                    {/* Hero Section */}
                    <section className="text-center space-y-6 mb-16">
                        <h1 className="text-xl md:text-3xl font-bold">{pageContent.eleveuses.h1}</h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            {pageContent.eleveuses.description}
                        </p>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full" aria-hidden="true" />
                    </section>

                    {/* Qui sommes nous */}
                    <section className="mb-16">
                        <div className="text-center mb-12">
                            <h2 className="text-xl md:text-2xl font-bold">Qui sommes nous ?</h2>
                            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4" aria-hidden="true" />
                        </div>

                        <div className="space-y-12">
                            {/* Aurélie */}
                            <article className="grid md:grid-cols-2 gap-12 items-start">
                                <div className="grid grid-cols-6 auto-rows-[88px] md:auto-rows-[120px] gap-3">
                                    {aurelieGallery.map((image, index) => (
                                        <div
                                            key={`${image.src}-${index}`}
                                            className={`relative overflow-hidden rounded-xl ${image.className}`}
                                        >
                                            <Image
                                                src={image.src}
                                                alt={image.alt}
                                                fill
                                                sizes="(min-width: 1024px) 560px, 100vw"
                                                className="object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="space-y-6">
                                    <Badge variant="secondary" className="w-fit">
                                        Aurélie - 34 ans !
                                    </Badge>
                                    <h3 className="text-xl md:text-2xl font-bold">Aurélie - 34 ans !</h3>

                                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                                        <p>
                                            Lorsque je n'élève pas cette merveilleuse meute de chiens, je suis également hypnothérapeute et magnétiseuse que j'exerce en cabinet en parallèle de mon activité d'éleveuse.
                                        </p>
                                        <p>
                                            « Mon chemin m'a amenée vers le comportement de l'animal d'abord, puis plus tard celui de l'humain. Ils sont source de fascination pour moi, et la combinaison des deux explique énormément de phénomènes lors de certaines adoptions.
                                        </p>
                                        <p>Aucun chien n'arrive chez vous par hasard.</p>
                                        <p>
                                            Pour moi, et au regard de la thérapeute que je suis, l'animal vient révéler ce qui reste à mettre en lumière dans la personnalité de l'humain qui l'accueille.
                                            À travers l'amour inconditionnel dont il fait preuve, il va révéler une partie enfouie, et venir apporter une certaine guérison psychique dans son environnement de vie.
                                            Il nous apprennent à vivre l'instant présent. Pour moi ce sont des être qui ont un niveau de consciences supérieure aux humains.
                                        </p>
                                        <p>
                                            Les expériences et processus d'apprentissages parfois difficiles révèlent nos parts d'ombres, nos blessures, un effet miroir… ils sont un accélérateur ou un déclencheur pour amener l'humain à entamer un processus de changement. Une personnalité contrôlante… des masques à faire tomber… l'animal révèle des dimensions psychiques assez étonnantes.
                                        </p>
                                        <p>
                                            J'accompagne chaque famille tant dans le bonheur que dans les phases difficiles de leur apprentissage, non seulement les familles adoptantes de mon élevage mais également généralement d'autres personnes ayant choisi un chien qui a un lourd passif : SPA… association… don.. et j'aide volontiers les gens à comprendre ce qu'il se passe à l'intérieur et à résoudre ces problématiques par étape.
                                        </p>
                                        <h4 className="text-lg font-semibold text-foreground">Une approche holistique :</h4>
                                        <p>
                                            La communication animale est aussi une technique que j'ai approfondi à mesure des années : depuis 2020, je n'ai de cesse de développer et perfectionner cette technique, ce ressenti. Tout cela dans le but d'amener l'animal à se sentir bien, mieux s'adapter, et résoudre des problématiques comportementales. Le résultat est souvent flagrant.
                                            Les animaux ressentent tout.
                                        </p>
                                        <h4 className="text-lg font-semibold text-foreground">La fascination autour du husky</h4>
                                        <p>
                                            La fascination autour du husky, du chien loup vient de mon enfance. Elle a toujours été la… petite j'aimais tous les chiens, mais à travers le dessin animé BALTO j'ai ressenti ce sentiment unique au monde.
                                        </p>
                                        <p>
                                            Ce dessin animé au message initiatique m'a profondément marquée, les animaux totem, le grand nord, le loup, le chien, la mission de vie, la notion de guide spirituel, de découvrir qui nous sommes et pas ce que nous sommes. Tout ceci m'a amenée vers une fascination du husky, que je gardais à l'intérieur de moi, parce que le husky n'est absolument pas adapté au mode de vie urbain et citadin, je ne voulais pas d'un chien malheureux.
                                        </p>
                                        <p>
                                            J'ai découvert la naissance du Pomsky en 2015 et ma vie était instable, toujours en déplacement professionnel. Quand j'ai décidé de me stabiliser en 2017, le Pomsky a occupé la place première dans mes pensées, mes rêves, mes objectifs, dans tout ce que j'étais à l'intérieur comme à l'extérieur. Puis j'ai accueilli mes 3 premiers chiens, je suis partie à la recherche du meilleur trio possible pour débuter : CHIPPER et ISIS venaient des États Unis, élevés dans un cadre familial au sein d'une communauté Amish, en pensylvannie et AVA est né en Irlande, et c'est ainsi que l'élevage fut créé.
                                        </p>
                                        <p>
                                            Chaque adoptant était si heureux de voir une portée de chiots déjà ressemblant à de véritables mini husky que notre première portée de 9 chiots a eu un grand succès et a été adoptée en l'espace d'une semaine.
                                            Beaucoup de gens rapportaient alors que nous étions le meilleur élevage existant en France.
                                            Je ne sais pas si tel était le cas, mais ce que je sais c'est que le travail et l'investissement a été grandement apprécié par nos adoptants : bouche à oreille a été extrêmement présent et que notre élevage fut très sollicité par la suite… quelques années plus tard notre expertise et notre passion ainsi que notre enthousiasme augmenté.
                                            C'est grâce aux adoptants et leur exigeance dès le début ainsi que leur exigeance actuelle que nous sommes ce que nous sommes aujourd'hui.
                                        </p>
                                    </div>
                                </div>
                            </article>

                            {/* Marine */}
                            <article className="grid md:grid-cols-2 gap-12 items-start">
                                <div className="grid grid-cols-6 auto-rows-[88px] md:auto-rows-[120px] gap-3 md:order-2">
                                    {marineGallery.map((image, index) => (
                                        <div
                                            key={`${image.src}-${index}`}
                                            className={`relative overflow-hidden rounded-xl ${image.className}`}
                                        >
                                            <Image
                                                src={image.src}
                                                alt={image.alt}
                                                fill
                                                sizes="(min-width: 1024px) 560px, 100vw"
                                                className="object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="space-y-6 md:order-1">
                                    <Badge variant="secondary" className="w-fit">
                                        Marine
                                    </Badge>
                                    <h3 className="text-xl md:text-2xl font-bold">Marine</h3>
                                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                                        <p>
                                            Marine : Grande adoratrice de chats à la base, ce n'est qu'après plusieurs années à côtoyer Aurélie et son élevage de chiens que j'ai apprécié la relation unique et fusionnelle qu'à le chien avec l'homme.
                                        </p>
                                        <p>
                                            Issue d'une école de commerce, J'ai évolué dans un milieu très compétitif et masculin à travers différentes professions telles que celle de responsable d'un magasin  dans une grande enseigne automobile.
                                        </p>
                                        <p>
                                            Ceci a forgé ma personnalité et peu à peu, l'animal a pu m'apporter quelque chose de différent : ce calme, cette bonté naturelle, pas de compétition, pas de prise de pouvoir.
                                        </p>
                                        <p>
                                            Ma vie a basculé après une longue réflexion, j'ai décidé de faire confiance à une opportunité unique qui était celle de m'associer avec Aurélie pour ce projet. Ce métier passion comporte beaucoup d'exigence sur le plan sanitaire, sur le plan émotionnel et responsabilité.
                                        </p>
                                        <p>
                                            Avant j'étais très en contact avec les clients de mon magasin, aujourd'hui je suis en retrait et ne communique que peu avec les adoptants mais cela m'apporte un autre équilibre, je m'épanouis dans le milieu animalier : pas de malentendu à régler, de problèmes à résoudre sans cesse.
                                        </p>
                                        <p>
                                            Je suis de nature contrôlante et les chiens me poussent depuis 4 ans à lâcher le contrôle, l'attente, pour vivre l'instant présent et ceci est un défi pour moi à la base.
                                        </p>
                                        <p>Mes passions sont également l'informatique et le gaming !</p>
                                        <p>
                                            Vous comprendrez que le contact humain aujourd'hui est pour moi secondaire et que je suis de ce fait toujours heureuse de pouvoir échanger avec nos visiteurs, les rencontrer, leur présenter nos chiens, cela change un peu le rythme des journées.
                                        </p>
                                        <p>
                                            J'ai un haut niveau d'exigence envers moi même, envers les stagiaires qui peuvent venir nous accompagner, envers le bien être des animaux.
                                        </p>
                                        <p>
                                            Les mises bas étaient au départ quelque chose d'angoissant pour moi mais avec l'expérience, c'est quelque chose d'extraordinaire, unique et cependant toujours à gérer avec technicité et un regard médical avisé.
                                        </p>
                                        <p>
                                            Avec Aurélie nous formons un beau duo complémentaire et passionné.
                                        </p>
                                        <p>Je ne vois pas ma vie sans mes chiens aujourd'hui.</p>
                                        <p>Chacun d'entre eux est absolument unique.</p>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </section>

                    <FAQSection
                        title="FAQ sur notre vision et notre parcours"
                        description="Quelques réponses aux questions fréquentes sur l'élevage et notre approche."
                        items={faqEleveuses}
                    />

                    <section className="text-center space-y-6">
                        <h2 className="text-xl md:text-2xl font-bold">Envie d'échanger avec nous ?</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Parlons de votre projet et trouvons ensemble le Pomsky qui vous correspond.
                        </p>
                        <div className="flex flex-col mt-10 sm:flex-row gap-8 justify-center h-10 items-center">
                            <Link
                                href="/contact"
                                className="flex items-center min-h-12 bg-primary text-white hover:bg-primary/80 px-4 font-semibold dark:text-[#5b3a1a] rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                            >
                                Contacter Aurélie et Marine
                            </Link>
                            <Link
                                href="/chiots-disponibles"
                                className="flex cursor-pointer h-full hover:underline text-sm text-muted-foreground justify-center items-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded px-2 py-1"
                            >
                                Voir nos portées
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
