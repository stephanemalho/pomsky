import type { Metadata } from "next"
import Link from "next/link"
import { buildOpenGraph, pageMetadata, returnLastmod, siteConfig } from "@/lib/seo-config"
import { pageContent } from "@/lib/page-content"
import { generateBreadcrumbSchema } from "@/lib/schema-generators"

export const metadata: Metadata = {
  title: pageMetadata.terms.title,
  description: pageMetadata.terms.description,
  keywords: pageMetadata.terms.keywords,
  openGraph: buildOpenGraph({
    title: pageMetadata.terms.title,
    description: pageMetadata.terms.description,
    url: `${siteConfig.siteUrl}${siteConfig.pages.terms}`,
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
  alternates: {
    canonical: `${siteConfig.siteUrl}${siteConfig.pages.terms}`,
  },
}

export default function ConditionsGeneralesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Accueil", url: "/" },
    { name: "Conditions générales", url: siteConfig.pages.terms },
  ])

  const lastMod = returnLastmod(siteConfig.pages.terms)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="py-16">
        <div className="container mx-auto max-w-4xl space-y-10">
          <header className="space-y-3">
            <p className="text-sm uppercase tracking-wide text-primary/80">Conditions d&apos;utilisation</p>
            <h1 className="text-xl md:text-3xl font-bold">{pageContent.terms.h1}</h1>
            <p className="text-muted-foreground">
              {pageContent.terms.description}
            </p>
          </header>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold">1. Objet et champ d&apos;application</h2>
            <p className="text-muted-foreground">
              Le site {siteConfig.name} présente l&apos;élevage professionel, les reproducteurs et les chiots disponibles.
              Il ne constitue pas un site de vente en ligne : toute adoption ou réservation nécessite un échange direct
              avec l&apos;éleveur (visite, visio, contrat). Les photos, tarifs indicatifs et disponibilités sont
              communiqués à titre informatif et peuvent évoluer.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold">2. Accès au site</h2>
            <p className="text-muted-foreground">
              Le site est accessible 7j/7 sous réserve des opérations de maintenance ou de force majeure.
              L&apos;utilisateur s&apos;assure de disposer d&apos;un équipement et d&apos;une connexion adaptés. Royal POMSKY
              ne peut être tenue responsable d&apos;une indisponibilité temporaire ni de dommages liés à l&apos;usage du réseau internet.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold">3. Prise de contact et réservations</h2>
            <p className="text-muted-foreground">
              Les prises de contact se font via le formulaire dédié, email, téléphone ou questionnaire de pré-visite.
              Les informations demandées (identité, coordonnées, projet d&apos;adoption, environnement du foyer) servent à
              évaluer la compatibilité des chiots et à préparer un accompagnement personnalisé. Aucune réservation n&apos;est
              définitive sans confirmation écrite et signature du contrat remis par l&apos;éleveur.
            </p>
            <p className="text-muted-foreground">
              Les délais de réponse indicatifs sont précisés sur la{" "}
              <Link href={siteConfig.pages.contact} className="text-primary hover:underline">
                page contact
              </Link>
              . Les vidéos et visites se font sur rendez-vous afin de respecter le bien-être des chiots.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold">4. Obligations des utilisateurs</h2>
            <p className="text-muted-foreground">
              L&apos;utilisateur s&apos;engage à fournir des informations exactes lors des échanges (identité, coordonnées, projet)
              et à ne pas détourner le site de sa finalité (spamming, extraction automatisée de données, diffusion de contenus illicites).
              Toute usurpation d&apos;identité ou tentative de perturbation technique pourra entraîner une restriction d&apos;accès.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold">5. Propriété intellectuelle</h2>
            <p className="text-muted-foreground">
              Les contenus présents sur le site sont protégés par le droit d&apos;auteur. Toute reproduction ou réutilisation,
              notamment des photographies des chiens, nécessite l&apos;accord écrit préalable d&apos;Royal POMSKY.
              Pour plus de détails, consultez nos{" "}
              <Link href={siteConfig.pages.legalNotice} className="text-primary hover:underline">
                mentions légales
              </Link>
              .
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold">6. Responsabilité</h2>
            <p className="text-muted-foreground">
              Royal POMSKY met tout en œuvre pour assurer l&apos;exactitude des informations publiées et la sécurité du site.
              Elle ne pourra toutefois être tenue responsable des dommages directs ou indirects résultant d&apos;une
              mauvaise utilisation du site, d&apos;une interruption de service, ou de la présence éventuelle de logiciels malveillants
              provenant de sites tiers ou du réseau.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold">7. Liens externes et réseaux sociaux</h2>
            <p className="text-muted-foreground">
              Les liens vers Instagram, formulaires et ressources externes sont fournis pour votre convenance.
              Royal POMSKY ne contrôle pas ces contenus et décline toute responsabilité quant aux informations
              ou pratiques appliquées par ces sites tiers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold">8. Droit applicable</h2>
            <p className="text-muted-foreground">
              Les présentes conditions sont soumises au droit français. En cas de litige et à défaut de résolution amiable,
              les juridictions françaises seront seules compétentes. Pour toute question, vous pouvez nous écrire à{" "}
              <a href={`mailto:${siteConfig.contact.email}`} className="text-primary hover:underline">
                {siteConfig.contact.email}
              </a>.
            </p>
            <div className="text-right text-xs text-muted-foreground mt-6">
              Dernière mise à jour : {lastMod}
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

