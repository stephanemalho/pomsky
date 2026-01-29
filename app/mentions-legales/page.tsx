import type { Metadata } from "next"
import Link from "next/link"
import { pageMetadata, returnLastmod, siteConfig } from "@/lib/seo-config"
import { pageContent } from "@/lib/page-content"
import { generateBreadcrumbSchema } from "@/lib/schema-generators"

export const metadata: Metadata = {
  title: pageMetadata.legalNotice.title,
  description: pageMetadata.legalNotice.description,
  keywords: pageMetadata.legalNotice.keywords,
  openGraph: {
    title: pageMetadata.legalNotice.title,
    description: pageMetadata.legalNotice.description,
    url: `${siteConfig.siteUrl}${siteConfig.pages.legalNotice}`,
    images: [{ url: `${siteConfig.siteUrl}${siteConfig.ogImage}` }],
  },
  alternates: {
    canonical: `${siteConfig.siteUrl}${siteConfig.pages.legalNotice}`,
  },
}

const editor = {
  tradeName: siteConfig.legal.tradeName,
  legalName: siteConfig.legal.legalName,
  legalForm: siteConfig.legal.legalForm,
  siren: siteConfig.legal.siren,
  siret: siteConfig.legal.siret,
  activity: `${siteConfig.legal.activity} (APE ${siteConfig.legal.apeCode})`,
  email: siteConfig.contact.email,
  phone: siteConfig.contact.phone,
  address: `${siteConfig.legal.address.postalCode} ${siteConfig.legal.address.city} - ${siteConfig.legal.address.country}`,
}

const host = {
  name: "Vercel Inc.",
  address: "340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis",
  url: "https://vercel.com",
}

export default function MentionsLegalesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Accueil", url: "/" },
    { name: pageContent.legalNotice.h1, url: siteConfig.pages.legalNotice },
  ])

  const lastMod = returnLastmod(siteConfig.pages.legalNotice)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="py-16">
        <div className="container mx-auto max-w-4xl space-y-10">
          <header className="space-y-3">
            <p className="text-sm uppercase tracking-wide text-primary/80">Informations légales</p>
            <h1 className="text-xl md:text-3xl font-bold">{pageContent.legalNotice.h1}</h1>
            <p className="text-muted-foreground">
              {pageContent.legalNotice.description}
            </p>
          </header>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold">Éditeur du site</h2>
            <div className="space-y-1 text-muted-foreground">
              <p>Nom commercial : <strong>{editor.tradeName}</strong></p>
              <p>Raison sociale : {editor.legalName}</p>
              <p>Forme juridique : {editor.legalForm}</p>
              <p>SIREN : {editor.siren}</p>
              <p>SIRET (siège) : {editor.siret}</p>
              <p>Activité : {editor.activity}</p>
              <p>Adresse du siège : Commune de Dommartin-lès-Cuiseaux (71480) - France
                Adresse complète communiquée uniquement après réservation.</p>
              <p>Téléphone : <a href={`tel:${editor.phone.replace(/\s/g, "")}`} className="text-primary hover:underline">{siteConfig.contact.phoneFormatted}</a></p>
              <p>Email : <a href={`mailto:${editor.email}`} className="text-primary hover:underline">{editor.email}</a></p>
              <p>Contact privilégié pour toute demande légale ou éditoriale.</p>
              <p>Support technique bénévole : Stéphane Malho (<a href="https://github.com/stephanemalho" className="text-primary hover:underline" target="_blank" rel="noreferrer">GitHub</a> / <a href="https://www.linkedin.com/in/malho-st%C3%A9phane/" className="text-primary hover:underline" target="_blank" rel="noreferrer">LinkedIn</a>).</p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold">Hébergement</h2>
            <div className="space-y-1 text-muted-foreground">
              <p><strong>{host.name}</strong></p>
              <p>{host.address}</p>
              <p>Site : <a href={host.url} className="text-primary hover:underline" target="_blank" rel="noreferrer">vercel.com</a></p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold">Propriété intellectuelle</h2>
            <p className="text-muted-foreground">
              L&apos;ensemble des contenus (textes, photographies, visuels, logo) présents sur ce site est protégé par le droit d&apos;auteur
              et demeure la propriété exclusive d&apos;Royal POMSKY ou de leurs auteurs respectifs. Toute reproduction, adaptation ou
              diffusion, même partielle, nécessite une autorisation écrite préalable.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold">Responsabilité et informations</h2>
            <p className="text-muted-foreground">
              Les informations publiées sur ce site sont fournies à titre informatif sur l&apos;élevage, les chiots disponibles et les pratiques de bien-être animal.
              Malgré une mise à jour régulière, certaines données (disponibilités, tarifs indicatifs, dates de portées) peuvent évoluer. Nous vous invitons
              à confirmer chaque information lors de la prise de contact. Royal POMSKY ne saurait être tenue responsable d&apos;une mauvaise interprétation
              ou d&apos;un usage inapproprié des contenus du site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold">Liens hypertextes</h2>
            <p className="text-muted-foreground">
              Les liens externes (Instagram, formulaires, ressources partenaires) sont proposés pour faciliter vos démarches. Royal POMSKY ne contrôle
              pas le contenu de ces sites tiers et décline toute responsabilité quant aux informations qui y figurent.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold">Données personnelles et cookies</h2>
            <p className="text-muted-foreground">
              Les traitements de données et le dépôt de cookies sont décrits dans notre{" "}
              <Link href={siteConfig.pages.privacy} className="text-primary hover:underline">
                Politique de confidentialité
              </Link>{" "}
              et notre gestionnaire de consentement. Vous pouvez modifier vos choix à tout moment via le bouton de gestion des cookies affiché sur le site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold">Signalement ou réclamation</h2>
            <p className="text-muted-foreground">
              Pour signaler un contenu, exercer vos droits ou demander une précision, contactez-nous par email à{" "}
              <a href={`mailto:${editor.email}`} className="text-primary hover:underline">{editor.email}</a>.
              Nous répondons sous 30 jours maximum pour les demandes liées aux données personnelles.
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


