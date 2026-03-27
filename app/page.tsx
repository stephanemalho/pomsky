import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FAQSection } from "@/components/faq"
import { faqHome } from "@/lib/faq-data"
import Link from "next/link"
import type { Metadata } from "next"
import { buildOpenGraph, buildTwitter, pageMetadata, returnLastmod, siteConfig, sitemapPages } from "@/lib/seo-config"
import { generateLocalBusinessSchema, generateFAQSchema, generateBreadcrumbSchema, generateWebPageSchema } from "@/lib/schema-generators"
import { convertFAQsToSchema } from "@/lib/faq-utils"
import { pomskyBenefits } from "@/components/content/home/pomsky/pomskyBenefits"
import { pageContent } from "@/lib/page-content"

const HOME_OG_IMAGE = "/pomsky-and-his-pet-family-parent.jpg"

export const metadata: Metadata = {
  title: pageMetadata.home.title,
  description: pageMetadata.home.description,
  keywords: pageMetadata.home.keywords,
  openGraph: buildOpenGraph({
    title: pageMetadata.home.title,
    description: pageMetadata.home.description,
    url: siteConfig.siteUrl,
    images: [
      {
        url: `${siteConfig.siteUrl}${HOME_OG_IMAGE}`,
        alt: "Pomsky et sa famille",
        width: siteConfig.ogImageWidth,
        height: siteConfig.ogImageHeight,
        type: "image/jpeg",
      },
    ],
  }),
  twitter: buildTwitter({
    title: pageMetadata.home.title,
    description: pageMetadata.home.description,
    imageUrl: `${siteConfig.siteUrl}${HOME_OG_IMAGE}`,
  }),
  alternates: {
    canonical: siteConfig.siteUrl,
  },
}

export default function HomePage() {
  // Schémas JSON-LD
  const localBusinessSchema = generateLocalBusinessSchema()
  const breadcrumbSchema = generateBreadcrumbSchema([{ name: "Accueil", url: "/" }])
  const faqSchema = generateFAQSchema(convertFAQsToSchema(faqHome))
  const pageLastModValue = sitemapPages.find((page) => page.url === siteConfig.pages.home)?.lastmod
  const webPageSchema = generateWebPageSchema({
    name: pageMetadata.home.title,
    description: pageMetadata.home.description,
    url: siteConfig.pages.home,
    imageUrl: HOME_OG_IMAGE,
    dateModified: pageLastModValue,
    about: ["Élevage de chiots Pomsky", "Pomsky Toy", "Pomsky Miniature", "Chiots disponibles"],
  })
  const lastMod = returnLastmod(siteConfig.pages.home)
  const founders = [
    {
      name: "Aurélie",
      image: "/assets/authors/aurelie-violette-elevage-royal-pomsky.webp",
      description:
        "Aurélie est une passionnée par les chiens et courses de traîneaux depuis sa plus tendre enfance: la sélection du cheptel royal Pomsky repose sur son expertise! Éducatrice comportementaliste, elle a collaboré avec de nombreux centres de rééducation, éducation canine ainsi que des associations de protection animale tels que la S.P.A: après des années de pratique en éducation elle se spécialise dans l'élevage canin grâce au Pomsky : depuis 2018. « L'idée la plus extraordinaire créée dans ma génération : un husky miniature possédant toutes les qualités d'un chien de compagnie ! Pour moi, pas question de créer une race en faisant des essais, je me suis tournée vers les éleveurs Américains qui m'ont appris à sélectionner et importer dès la première portée des reproducteurs exceptionnels. Faire naître et voir évoluer un chien ressemblent physiquement au nordique, au husky, ou au malamute, en miniature avec un comportement totalement équilibré est une honneur absolu, un bonheur et un privilège. Je ne trouve absolument aucun « défaut » à mes Pomsky, ils sont juste parfaits et adaptés à tout mode de vie, et c'est'objectif que je m'étais fixée depuis 2018 » Sa grande expérience, sa sensibilité la mène également vers la communication animale depuis 2020. Avec Aurélie votre suivi sera totalement holistique et ce durant toute la vie de votre chiot Pomsky. Ses grandes connaissances en matière de santé et soins prodigués à l'animal pourront également vous être très utiles.",
      badges: [
        "diplômée éducateur canin comportementaliste",
        "Ancienne éducatrice comportementaliste",
        "8 ans d'expérience en élevage canin",
        "Certifiée en communication animale",
        "Spécialiste socialisation chiots",
      ],
    },
    {
      name: "Marine",
      image: "/assets/authors/marine-ava.webp",
      description:
        "Marine a suivi Aurélie dans l'aventure Pomsky, car à deux, la meute est absolument bichonnée ! Autodidacte, carrée, c'est une véritable perfectionniste : ancienne responsable de boutique dans une grande enseigne spécialisée en automobile, Marine a l'esprit de leader. Avec elle, les locaux doivent être entretenus de façon très protocolaire afin que nos chiots évoluent dans des conditions optimales pour leur santé et leur bien-être. Chaque chiot est soigneusement ausculté chaque jour, et elle porte aussi attention à chaque caractère grâce à son instinct d'anticipation. Chaque petit est bichonné dès sa naissance ! Son niveau d'exigence est extrêmement élevé, voire militaire : rien n'échappe aux yeux de Marine ! Chaque jour, elle passe beaucoup de temps avec les chiens adultes et les chiots, qu'elle connaît absolument par cœur. Observatrice, elle sait anticiper ce dont chacun a besoin. Le bien-être animal et les conditions sanitaires sont sa priorité. Marine gère le côté administratif de l'élevage. C'est donc elle qui prépare soigneusement les formalités pour le départ.",
      badges: [
        "4 ans d'expérience en élevage canin",
        "Protocoles d'hygiène rigoureux",
        "Suivi quotidien des chiots",
      ],
    },
  ]

  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
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

      <div className="flex flex-col">
        <section className="bg-accent-foreground">
          <div className="overflow-hidden bg-linear-to-b from-[#6a1820] via-[#3a1016] to-[#1a090d]">
            <div className="container mx-auto px-4 py-6 md:px-6 md:py-8 lg:px-8 lg:py-10">
              <div className="mx-auto max-w-6xl space-y-5 md:space-y-6">
                <div className="overflow-hidden rounded-xl md:rounded-4xl border border-white/10 bg-[#3a1117] shadow-[0_35px_120px_rgba(0,0,0,0.35)]">
                  <Image
                    src="/bandeau-presentaion-royal-pomsky-toy.jpeg"
                    alt="Bandeau de presentation Royal Pomsky Toy"
                    width={1260}
                    height={400}
                    priority
                    fetchPriority="high"
                    loading="eager"
                    sizes="(min-width: 1280px) 1152px, (min-width: 768px) calc(100vw - 48px), calc(100vw - 32px)"
                    className="block h-auto w-full"
                  />
                </div>

                <div className="mx-auto max-w-6xl rounded-xl md:rounded-4xl border border-white/12 bg-[#47131b]/72 px-6 py-6 text-center text-white shadow-[0_30px_100px_rgba(0,0,0,0.32)] backdrop-blur-sm md:px-8">
                  <div className="mx-auto max-w-4xl">
                    <div className="mx-auto inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-[11px] uppercase tracking-[0.35em] text-white/80">
                      Royal Pomsky
                    </div>
                    <h1 className="mt-4 text-3xl font-semibold tracking-[0.03em] text-white md:text-4xl lg:text-5xl">
                      {pageContent.home.h1}
                    </h1>
                  </div>
                </div>

                <div className="mx-auto max-w-6xl overflow-hidden rounded-xl md:rounded-4xl border border-white/12 bg-[#3a1117]/55 shadow-[0_30px_100px_rgba(0,0,0,0.28)] backdrop-blur-sm">
                  <div className="relative aspect-4/3 sm:aspect-16/11 md:aspect-16/8 lg:aspect-16/7">
                    <Image
                      src="/pomsky-and-his-pet-family-parent.jpg"
                      alt="Pomsky auprès de sa famille dans un moment tendre"
                      fill
                      className="object-cover object-center"
                      sizes="(min-width: 1280px) 960px, (min-width: 1024px) 80vw, (min-width: 768px) calc(100vw - 80px), calc(100vw - 32px)"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#2a0d12]/35 via-transparent to-transparent" aria-hidden="true" />
                  </div>
                </div>

                <div className="mx-auto max-w-6xl rounded-xl md:rounded-4xl border border-white/12 bg-[#2b0d13]/82 px-6 py-6 text-white shadow-[0_35px_120px_rgba(0,0,0,0.4)] backdrop-blur-md md:px-8 md:py-8 lg:px-10">
                  <p className="text-sm font-medium uppercase tracking-[0.28em] text-white/72">
                    {pageContent.home.h1Subtitle}
                  </p>
                  <div className="mt-5 grid gap-6 lg:grid-cols-[1.5fr_0.75fr] lg:items-end">
                    <div className="space-y-4">
                      <p className="text-base leading-relaxed text-white/88 md:text-lg">
                        {pageContent.home.description}
                      </p>
                      <p className="text-base leading-relaxed text-white/82 md:text-lg">
                        {pageContent.home.descriptionSecondary}
                      </p>
                      <p className="text-base leading-relaxed text-white/82 md:text-lg">
                        {pageContent.home.descriptionTertiary}
                      </p>
                    </div>
                    <div className="flex lg:justify-end">
                      <Link
                        href="/chiots-disponibles"
                        className="inline-flex items-center justify-center 
                         md:rounded-full 
                         rounded-md
                         border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                      >
                        Voir les chiots Pomsky disponibles
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Contenu centré */}
        {/* Présentation élevage */}
        <section className="py-16 bg-muted/30 my-8">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center p-2">
              <div className="space-y-6">
                <Badge variant="secondary" className="w-fit">
                  Notre élevage
                </Badge>
                <p className="text-sm text-muted-foreground">
                  Royal Pomsky est membre de la{" "}
                  <a
                    href="https://federation-francaise-pomsky.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium underline underline-offset-4 hover:text-foreground"
                  >
                    Fédération Française du Pomsky
                  </a>
                  .
                </p>

                <h2 className="text-xl md:text-2xl font-bold">Des Pomsky élevés par des professionnelles passionnées, dans le respect de la race
                </h2>

                <p className="text-muted-foreground leading-relaxed">
                  Alors que la création de la race commençait à arriver en France et s'effectuait par des croisements au résultat aléatoire, aux caractéristiques physiques et comportementales peu précises, <strong>nous avons fait le choix d'importer nos premiers Pomsky directement des États Unis d'Amérique</strong> dans le but d'apporter aux futurs adoptants de nos chiots un physique prévisible, un comportement prévisible, et une construction de la race avec une stabilisation des le départ : chez nous, aucune place pour le hasard depuis le début.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Nos Pomsky sont uniques et font entièrement partie de notre univers</strong>, ce sont nos protégés ! Ils sont aimés et représentent notre passion et notre fierté, ils sont dans nos pensées permanentes, nous accompagnent à chaque instant, et sont constamment au cœur de nos préoccupations.
                </p>

                <div className="space-y-2">
                  <h3 className="font-semibold">
                      Des Pomsky de tailles toy à standard élevés dans le bonheur
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Notre élevage est situé dans le Jura (39), en France. Chez Royal Pomsky, nous n'expédions jamais nos chiots à distance,  Ils sont à adopter sur place, après visite de l'élevage et rencontre avec les parents.  <Link
                      href="/chiots-disponibles#adoption-france-suisse"
                      className="underline text-accent-foreground hover:text-muted-foreground"
                    >sauf cas particulier ( raison de santé, impossibilité de déplacement etc… )</Link> votre demande sera étudiée au cas par cas après un entretien en appel visio
                  </p>
                </div>

                <Link
                  href="/presentation-elevage"
                  className="bg-primary text-white hover:bg-primary/80 p-4 font-semibold inline-block dark:text-[#5b3a1a] rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Découvrir notre élevage
                </Link>
              </div>

              <div className="relative w-full aspect-video md:h-200 h-125 md:aspect-4/5 overflow-hidden rounded-lg">
                <Image
                  src="/AKASHA-pomsky-toy-f4.webp"
                  alt="Pomsky f4 Akasha, une femelle pomsky toy de couleur sable et blanche avec des yeux bleus"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 85vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Pourquoi choisir un pomsky */}
        <section className="py-16 my-8 bg-muted/30">
          <div className="container mx-auto p-2">
            <div className="text-center space-y-4 mb-10">
              <h2 className="text-xl md:text-2xl font-bold">
                Pourquoi choisir un Pomsky Miniature ou Toy ?
              </h2>

              <p className="text-muted-foreground max-w-3xl mx-auto">
                Petit chien au grand cœur, <strong>
                  le pomsky miniature et le pomsky Toy sont deux
                  variétés de petit gabarit
                </strong>, reconnues pour leur intelligence vive et leur
                grande proximité avec leur famille.
              </p>

              <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {pomskyBenefits.map((item) => (
                <Card key={item.title} className="overflow-hidden bg-muted/70 p-2">
                  <div className="relative aspect-4/3 rounded-lg overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  <CardContent className="p-6 space-y-3">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.text}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <Link
            href="/le-pomsky"
            className="flex my-12 bg-primary m-auto text-white hover:bg-primary/80 p-4 font-semibold w-fit dark:text-[#5b3a1a] rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            En savoir plus sur le pomsky
          </Link>
        </section>
        {/* éleveurs */}
        <section className="py-16 my-8 bg-muted/30">
          <div className="container mx-auto p-2">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-xl md:text-2xl font-bold">Les Éleveuses</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto text-sm leading-relaxed">
                Derrière l'élevage de Pomsky se trouvent <strong>Aurélie et Marine</strong>, deux
                éleveuses passionnées par le bien-être animal et unies par un amour
                profond pour le <strong>pomsky miniature et le pomsky toy</strong>.
                Issues de parcours complémentaires dans l'éducation, le comportement et
                l'élevage canin, elles accordent une attention particulière à la
                socialisation, à l'équilibre émotionnel et au développement harmonieux de
                chaque chiot.
              </p>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full" aria-hidden="true" />
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {founders.map((founder, index) => (
                <Link
                  key={index}
                  href={`/presentation-eleveuses#${founder.name.toLowerCase()}`}
                  className="block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-lg"
                  aria-label={`Lire la présentation de ${founder.name}`}
                >
                  <article className="relative text-center bg-muted/70 rounded-lg overflow-hidden">
                    <div className="absolute top-4 left-4 md:flex hidden flex-col items-start gap-2 z-10">
                      {founder.badges.map((badge, badgeIdx) => (
                        <Badge
                          key={badgeIdx}
                          variant="secondary"
                          className="text-[11px] shadow-sm p-2 backdrop-blur-sm bg-background/85"
                        >
                          {badge}
                        </Badge>
                      ))}
                    </div>
                    <div className="relative w-full aspect-square">
                      <Image
                        src={founder.image || "/placeholder.svg"}
                        alt={`Photo d'${founder.name}, fondatrice de l'élevage`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{founder.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {founder.description}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
            <div className="text-center space-y-4 my-12">
              <h3 className="text-xl md:text-2xl font-semibold">
                Vous souhaitez un Pomsky mais vous ne savez pas quel format choisir ?
              </h3>
              <p className="text-sm text-muted-foreground max-w-xl mx-auto">
                Toy, Micro ou Miniature… chaque Pomsky a ses particularités. Nous vous aidons à choisir le format le plus adapté à votre mode de vie, votre environnement et vos attentes afin de trouver le compagnon idéal.
              </p>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full" aria-hidden="true" />
            </div>
            <Link
              href="/contact"
              aria-label="Contacter les éleveuses pour un projet d'adoption de pomsky"
              className="flex my-12 bg-primary m-auto text-white hover:bg-primary/80 p-4 font-semibold w-fit dark:text-[#5b3a1a] rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Contacter Aurélie et Marine
            </Link>
          </div>
        </section>
        <FAQSection
          title="FAQ pomsky en bref"
          description="Les points clés sur l'élevage Royal POMSKY en bref."
          items={faqHome}
        />
        <div className="container mx-auto text-right text-xs text-muted-foreground my-6">
          Dernière mise à jour : {lastMod}
        </div>
      </div>
    </>
  )
}
