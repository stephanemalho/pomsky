import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FAQSection } from "@/components/faq"
import { faqHome } from "@/lib/faq-data"
import Link from "next/link"
import type { Metadata } from "next"
import { pageMetadata, returnLastmod, siteConfig } from "@/lib/seo-config"
import { generateLocalBusinessSchema, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema-generators"
import { convertFAQsToSchema } from "@/lib/faq-utils"
import { dachshundBenefits } from "@/components/content/home/dashshund/dachshundBenefits"

export const metadata: Metadata = {
  title: pageMetadata.home.title,
  description: pageMetadata.home.description,
  keywords: pageMetadata.home.keywords,
  openGraph: {
    title: pageMetadata.home.title,
    description: pageMetadata.home.description,
    url: siteConfig.siteUrl,
    images: [{ url: `${siteConfig.siteUrl}${siteConfig.ogImage}` }],
  },
  alternates: {
    canonical: siteConfig.siteUrl,
  },
}

export default function HomePage() {
  // Schémas JSON-LD
  const localBusinessSchema = generateLocalBusinessSchema()
  const breadcrumbSchema = generateBreadcrumbSchema([{ name: "Accueil", url: "/" }])
  const faqSchema = generateFAQSchema(convertFAQsToSchema(faqHome))
  const lastMod = returnLastmod(siteConfig.pages.home)
  const founders = [
    {
      name: "Aurélie",
      image: "/aurelie-moshi.webp",
      description:
        "Aurelie & Moshi ( la chihuahua ) est une passionnée par les animaux depuis toujours : ancienne éducatrice comportementaliste, elle a collaboré avec de nombreux centres de rééducation, éducation canine ainsi que des associations de protection animale : après des années de pratique elle se spécialise dans l'élevage canin : depuis 2018, le Pomsky est la race de cœur qui a convaincu Aurelie de se laisser guider vers le métier exclusif d'éleveur : Marine et moi étions originaire du VAR (83) et avons changé de région suite au développement de notre élevage de Pomsky, et à cette occasion nous avons rencontré le pomsky, chien de chasse relativement populaire dans le Jura et en région bourgogne franche compté. Suite à cela notre coup de cœur s'est porté sur les pomsky de très petite taille : les Toy qui pèsent moins de 3kg ! Ainsi que les pomsky standards de couleur exotique qui ressemblent à leur cousins le braque de Weimar mais en version absolument miniature !  Aurélie met ses compétences dans le développement et le bien être animal. Des chiots à l Socialisation parfaite, des protocoles précis pour accompagner les familles adoptantes durant toutes les étapes de la vie du chiot et jusqu'à l'âge adulte ! Moshi, la chihuahua de compagnie partage notre quotidien, elle est également présente pour l'éducation de nos petits pomsky !! Elle veille à ce que les codes canins soient respectés, une véritable Tati qui aide de façon bienveillante chaque maman dans son processus d'apprentissage. Une chihuahua au caractère fort et au cœur tendre : une super nanny",
      badges: [
        "8 ans d'expérience en élevage canin",
        "Ancienne éducatrice comportementaliste",
        "Spécialiste socialisation chiots",
      ],
    },
    {
      name: "Marine",
      image: "/marine-ava.webp",
      description:
        "Marine est passionnée par le monde de l'élevage et a changé de vie pour se consacrer à leur développement depuis 4 ans !  Eleveuse de primitifs avant tout, elle est née en Bourgogne Franche comté, ce n'est qu'en retournant dans la région de sa naissance et en découvrant le caractère du pomsky, très apprécié par les chasseurs mais également par les personnes désirant un chien de compagnie affectueux, qu'elle a décidé de suivre Aurelie dans l'aventure, ayant une préférence pour les pomsky de taille Toy, pour leur taille extrêmement petite !  Marine est une véritable perfectionniste : avec elle les locaux doivent être entretenus de façon très protocolaire afin que nos chiots évoluent dans des conditions optimales pour leur santé et leur bien être. Chaque chiot est soigneusement ausculté chaque jour, elle porte attention à chaque caractère également grâce à son instinct d'anticipation, chaque petit est bichonné dès sa naissance ! « L'idée n'est pas de présenter le pomsky comme un chien de chasse mais bel et bien un chien de compagnie adapté à la vie citadine »",
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

      <div className="flex flex-col">
        <section className="bg-accent-foreground">
          {/* Hero Section */}
          <div className="relative h-[90vh] flex items-center justify-center overflow-hidden group">
            {/* Image de fond */}
            <div className="absolute inset-0 z-0 m-auto">
              <Image
                src="/cute-pomsky-looking-us.webp"
                alt="Tout les formats de pomsky en format paysage"
                fill
                className="object-cover scale-105 transition-transform duration-2000 group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/45 to-black/75" aria-hidden="true" />
              <div className="absolute inset-0 opacity-60 [background:radial-gradient(900px_circle_at_center,rgba(255,255,255,0.08),transparent_55%)]" aria-hidden="true" />
            </div>
            <div className="relative z-10 text-center space-y-8 px-6 max-w-3xl py-10 mx-auto rounded-2xl border border-white/15 bg-black/35 backdrop-blur-md shadow-[0_30px_120px_rgba(0,0,0,0.55)]">
              <div className="mx-auto inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-[11px] uppercase tracking-[0.35em] text-white/80">
                Royal Pomsky
              </div>
              <h1 className="text-2xl md:text-4xl font-semibold tracking-wide text-white">
                Royal Pomsky 🐺
                <span className="block text-base md:text-xl font-light text-white/80 mt-2">
                  Premier élevage de Pomsky en France, lignées Américaines
                </span>
              </h1>
              <div className="mx-auto">
                <p className="text-base md:text-lg text-white/85">
                  Notre élevage se situe dans la commune de SAINT-AMOUR (39160) en région Bourgogne Franche Comté est le premier élevage de Pomsky en France ayant fait le choix de débuter sa sélection en 2017 avec des lignées Américaines : directement au berceau de la race, pour amener en France le Pomsky absolument parfait.
                </p>
                <div className="mt-12">
                  <p className="text-base md:text-lg text-white/85">
                    Depuis notre première portée née en 2018 notre objectif est de vous apporter le meilleur et l'excellence version Pomsky : Un physique parfait, une santé de fer, une expertise comportementale, une sociabilisation parfaite, un suivi tout au long de la vie du chiot.
                  </p>
                  <p className="text-base md:text-lg text-white/85">
                    Nous avons rédigé plusieurs articles contenant de très nombreuses informations, merci d'en prendre connaissance avant d'envisager l'adoption de votre chiot ! Vous pourrez consulter la page de nos chiots pomsky disponibles en cliquant ci-dessous :
                  </p>
                </div>
              </div>
              <Link
                href="/chiots-disponibles"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 mt-12 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Voir les chiots Pomsky disponibles
              </Link>
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

                <h2 className="text-xl md:text-2xl font-bold">Des Pomsky élevés par des professionnelles passionnées, dans le respect de la race
                </h2>

                <p className="text-muted-foreground leading-relaxed">
                  Alors que la création de la race commençait à arriver en France et s'effectuait par des croisements au résultat aléatoire, aux caractéristiques physiques et comportementales peu précises, nous avons fait le choix d'importer nos premiers Pomsky directement aux États Unis d'Amérique dans le but d'apporter aux futurs adoptants de nos chiots un physique prévisible, un comportement prévisible, et une construction de la race avec une stabilisation des le départ : chez nous, aucune place pour le hasard depuis le début.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Nos Pomsky sont uniques et font entièrement partie de notre univers, ils sont nos protégés ! Ils sont aimés et représentent notre passion et notre fierté, ils sont dans nos pensées permanentes, nous accompagnent à chaque instant.
                  ils sont constamment au cœur de nos préoccupations.
                </p>

                <div className="space-y-2">
                  <p className="font-semibold">Des Pomsky de toutes tailles élevées dans le bonheur</p>
                  <p className="text-sm text-muted-foreground">
                    Notre élevage situé dans le Jura (39), en France. Chez Royal Pomsky, nous n'expédions jamais nos chiots à distance. Ils sont
                    à adopter sur place, après visite de l'élevage et rencontre avec les parents.
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
                  src="/puppy-pomsky-blue-eyes.webp"
                  alt="pomsky chiots noir/rouge et blanc aux yeux bleue dans un arbre"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Portées disponibles */}
        {/* <section className="py-16 my-8">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-xl md:text-2xl font-bold">Portées actuellement disponibles</h2>

            <div className="flex items-center justify-center space-x-4 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>Portée du 12 octobre 2025</span>
              </div>

              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Île-de-France</span>
              </div>
            </div>

            <Link href="/chiots-disponibles" className="bg-primary text-white hover:bg-primary/80 p-4 font-semibold inline-block dark:text-[#5b3a1a] rounded-md">
              Voir les chiots disponibles
            </Link>
          </div>


        </div>
      </section> */}
        {/* Pourquoi choisir un pomsky */}
        <section className="py-16 my-8 bg-muted/30">
          <div className="container mx-auto p-2">
            <div className="text-center space-y-4 mb-10">
              <h2 className="text-xl md:text-2xl font-bold">
                Pourquoi choisir un pomsky nain ou Toy ?
              </h2>

              <p className="text-muted-foreground max-w-3xl mx-auto">
                Petit chien au grand cœur, le pomsky nain et le pomsky Toy sont deux
                variétés de petit gabarit, reconnues pour leur intelligence vive et leur
                grande proximité avec leur famille.
              </p>

              <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {dachshundBenefits.map((item) => (
                <Card key={item.title} className="overflow-hidden bg-muted/70 p-2">
                  <div className="relative aspect-4/3 rounded-lg overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover"
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
              <h2 className="text-xl md:text-2xl font-bold">Les Éleveurs</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto text-sm leading-relaxed">
                Derrière l'élevage se trouvent <strong>Aurélie et Marine</strong>, deux
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
                <article key={index} className="relative text-center bg-muted/70 rounded-lg overflow-hidden">
                  <div className="absolute top-4 right-4 md:flex hidden flex-col items-end gap-2 z-10">
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
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{founder.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {founder.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
            <div className="text-center space-y-4 my-12">
              <h3 className="text-xl md:text-2xl font-semibold">
                Vous souhaitez adopter un pomsky standard, miniature ou toy ?
              </h3>
              <p className="text-sm text-muted-foreground max-w-xl mx-auto">
                Échangeons ensemble sur votre projet d'adoption et trouvons le pomsky
                (standard, miniature ou toy) qui correspond le mieux à votre mode de vie.
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
