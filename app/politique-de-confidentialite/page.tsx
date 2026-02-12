import type { Metadata } from "next"
import Link from "next/link"
import { buildOpenGraph, pageMetadata, returnLastmod, siteConfig } from "@/lib/seo-config"
import { pageContent } from "@/lib/page-content"
import { generateBreadcrumbSchema } from "@/lib/schema-generators"

export const metadata: Metadata = {
  title: pageMetadata.privacy.title,
  description: pageMetadata.privacy.description,
  keywords: pageMetadata.privacy.keywords,
  openGraph: buildOpenGraph({
    title: pageMetadata.privacy.title,
    description: pageMetadata.privacy.description,
    url: `${siteConfig.siteUrl}${siteConfig.pages.privacy}`,
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
    canonical: `${siteConfig.siteUrl}${siteConfig.pages.privacy}`,
  },
}

const dataContact = {
  email: siteConfig.contact.email,
  phone: siteConfig.contact.phone,
  address: `${siteConfig.legal.address.postalCode} ${siteConfig.legal.address.city} - ${siteConfig.legal.address.country}`,
}

export default function PolitiqueConfidentialitePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Accueil", url: "/" },
    { name: pageContent.privacy.h1, url: siteConfig.pages.privacy },
  ])

  const lastMod = returnLastmod(siteConfig.pages.privacy)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="py-16">
        <div className="container mx-auto max-w-4xl space-y-10">
          <header className="space-y-3">
            <p className="text-sm uppercase tracking-wide text-primary/80">Protection des données</p>
            <h1 className="text-xl md:text-3xl font-bold">{pageContent.privacy.h1}</h1>
            <p className="text-muted-foreground">
              {pageContent.privacy.description}
            </p>
          </header>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold">1. Responsable de traitement</h2>
            <p className="text-muted-foreground">
              Le responsable de traitement des données collectées via ce site est <strong>{siteConfig.name}</strong> (Aurélie &amp; Marine),
              élevage canin situé : {dataContact.address}. Contact :{" "}
              <a href={`mailto:${dataContact.email}`} className="text-primary hover:underline">{dataContact.email}</a> /{" "}
              <a href={`tel:${dataContact.phone.replace(/\s/g, "")}`} className="text-primary hover:underline">{siteConfig.contact.phoneFormatted}</a>.
            </p>
            <p className="text-muted-foreground">
              Support technique bénévole : Stéphane Malho - Lead Frontend Architect (<a href="https://github.com/stephanemalho" className="text-primary hover:underline" target="_blank" rel="noreferrer">GitHub</a> /{" "}
              <a href="https://www.linkedin.com/in/malho-st%C3%A9phane/" className="text-primary hover:underline" target="_blank" rel="noreferrer">LinkedIn</a>).
              Il n&apos;accède pas aux données personnelles en dehors des informations strictement nécessaires aux corrections ou évolutions techniques du site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold">2. Données collectées et origines</h2>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>
                <strong>Formulaire de contact / questionnaire de pré-visite</strong> : identité, coordonnées, projet d&apos;adoption,
                informations sur le foyer (enfants, autres animaux), préférences de chiot et message libre.
              </li>
              <li>
                <strong>Échanges directs</strong> (email, téléphone, visio) : informations fournies pour préparer une visite, une réservation ou un suivi post-adoption.
              </li>
              <li>
                <strong>Mesure d&apos;audience</strong> : statistiques agrégées via Vercel Web Analytics et Google Analytics (activé uniquement après consentement),
                incluant pages vues, appareil, région approximative. Les cookies analytiques (_ga, _gid…) ne sont déposés qu&apos;après acceptation.
              </li>
              <li>
                <strong>Logs techniques</strong> : données nécessaires à la sécurité et à la prévention des abus (adresses IP, horodatage, événements d&apos;erreur).
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold">3. Finalités et bases légales</h2>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li><strong>Réponse aux demandes et organisation des visites</strong> (intérêt légitime et mesures précontractuelles).</li>
              <li><strong>Gestion des réservations et dossiers d&apos;adoption</strong> (exécution d&apos;un contrat ou mesures précontractuelles).</li>
              <li><strong>Suivi post-adoption et informations sur l&apos;élevage</strong> (intérêt légitime à assurer la santé et le bien-être des chiens).</li>
              <li><strong>Mesure d&apos;audience et amélioration du site</strong> (consentement pour Google Analytics ; intérêt légitime pour mesures agrégées sans cookie).</li>
              <li><strong>Sécurité du site</strong> et prévention des abus (intérêt légitime).</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold">4. Durées de conservation</h2>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li><strong>Demandes et échanges précontractuels</strong> : 3 ans après le dernier contact.</li>
              <li><strong>Dossiers clients et documents contractuels</strong> : durée légale applicable (jusqu&apos;à 10 ans pour les pièces comptables le cas échéant).</li>
              <li><strong>Mesures d&apos;audience</strong> : données Google Analytics conservées 13 mois maximum après consentement.</li>
              <li><strong>Logs techniques</strong> : 12 mois maximum, sauf obligation légale supérieure.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold">5. Destinataires et sous-traitants</h2>
            <p className="text-muted-foreground">
              Les données sont traitées par Royal POMSKY et, si nécessaire, par des prestataires autorisés pour l&apos;hébergement
              et l&apos;analyse :
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li><strong>Vercel</strong> (hébergement et analytics agrégées, infrastructure cloud).</li>
              <li><strong>Google Ireland Ltd.</strong> (Google Analytics via Google Tag Manager, uniquement après consentement).</li>
            </ul>
            <p className="text-muted-foreground">
              Les données ne sont ni vendues ni cédées à des tiers à des fins commerciales.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold">6. Transferts hors UE</h2>
            <p className="text-muted-foreground">
              Certains prestataires (Vercel, Google) peuvent transférer des données vers les États-Unis.
              Ces transferts sont encadrés par des clauses contractuelles types (SCC) et des mesures complémentaires.
              Lorsque le consentement est requis (Google Analytics), le transfert n&apos;a lieu qu&apos;après acceptation des cookies analytiques.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold">7. Cookies et choix de consentement</h2>
            <p className="text-muted-foreground">
              Un bandeau de consentement s&apos;affiche lors de votre première visite. Vous pouvez accepter ou refuser les cookies analytiques et
              modifier votre choix à tout moment via le bouton de gestion des cookies présent en bas de page.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li><strong>Cookies analytiques</strong> (Google Analytics via GTM) : déposés uniquement après consentement explicite.</li>
              <li><strong>Cookies nécessaires</strong> : fonctionnement du site, sécurité et mesure d&apos;audience agrégée sans traceur individualisant.</li>
            </ul>
            <p className="text-muted-foreground">
              Pour un contrôle complémentaire, vous pouvez aussi gérer les cookies depuis les réglages de votre navigateur (suppression des cookies, blocage du cross-site, navigation privée).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold">8. Sécurité des données</h2>
            <p className="text-muted-foreground">
              Mesures en place : hébergement sécurisé, chiffrement TLS des échanges, limitation des accès aux seules personnes autorisées,
              et suppression des données devenues inutiles. En cas de violation de données présentant un risque, les utilisateurs et la CNIL seront informés conformément à la réglementation.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold">9. Vos droits</h2>
            <p className="text-muted-foreground">
              Vous disposez des droits d&apos;accès, rectification, effacement, limitation, opposition, portabilité, retrait du consentement
              et de définir le sort de vos données après votre décès. Pour exercer ces droits, écrivez-nous à{" "}
              <a href={`mailto:${dataContact.email}`} className="text-primary hover:underline">{dataContact.email}</a>.
              Une réponse vous sera apportée sous 30 jours maximum. Si vous estimez que vos droits ne sont pas respectés,
              vous pouvez saisir la CNIL (<a className="text-primary hover:underline" href="https://www.cnil.fr" target="_blank" rel="noreferrer">cnil.fr</a>).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold">10. Mise à jour de la politique</h2>
            <p className="text-muted-foreground">
              La présente politique peut être mise à jour pour refléter l&apos;évolution de nos traitements ou de la réglementation.
              La date de dernière mise à jour est indiquée en bas de page et les modifications substantielles seront signalées sur le site.
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

