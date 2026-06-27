import { blog } from "@/constants/blog/blog";
import { siteConfig } from "@/lib/seo-config";

export const dynamic = "force-static";

export function GET() {
    const toUrl = (path: string) => new URL(path, siteConfig.siteUrl).toString();

    const pages = [
        {
            title: "Accueil Royal POMSKY",
            path: siteConfig.pages.home,
            description: "Presentation generale de l'elevage Royal POMSKY, de ses lignes directrices et de ses chiots Pomsky."
        },
        {
            title: "Comprendre le Pomsky",
            path: siteConfig.pages.pomsky,
            description: "Informations sur le Pomsky, ses formats, son temperament, ses origines et les points a verifier avant adoption."
        },
        {
            title: "Prix du Pomsky",
            path: siteConfig.pages.pomskyPrice,
            description: "Explications sur les tarifs des Pomsky Toy, Miniature et Standard et les criteres qui influencent le prix."
        },
        {
            title: "Chiots Pomsky disponibles",
            path: siteConfig.pages.puppies,
            description: "Liste officielle des chiots presentes par l'elevage, avec statuts, informations d'adoption et fiches individuelles."
        },
        {
            title: "Reproducteurs Pomsky",
            path: siteConfig.pages.reproductors,
            description: "Presentation des chiens reproducteurs, de leurs formats, lignages, couleurs et caracteristiques."
        },
        {
            title: "Presentation de l'elevage",
            path: siteConfig.pages.presentation,
            description: "Approche professionnelle, cadre de vie, selection, socialisation et philosophie de travail de Royal POMSKY."
        },
        {
            title: "Les eleveuses",
            path: siteConfig.pages.eleveuses,
            description: "Parcours d'Aurelie et Marine, roles dans l'elevage, suivi quotidien et accompagnement des adoptants."
        },
        {
            title: "Bien-etre animal",
            path: siteConfig.pages.wellness,
            description: "Conditions de vie, hygiene, socialisation, suivi veterinaire et routines de l'elevage."
        },
        {
            title: "Contact adoption",
            path: siteConfig.pages.contact,
            description: "Coordonnees de Royal POMSKY et point d'entree pour les demandes d'informations ou projets d'adoption."
        },
        {
            title: "Blog Pomsky",
            path: "/blog/pomsky",
            description: "Articles de fond sur la race Pomsky, la genetique, l'adoption, les prix et les elevages serieux."
        }
    ];

    const lines: string[] = [
        "# Royal POMSKY",
        "",
        "> Site officiel de Royal POMSKY, elevage professionnel de Pomsky en France.",
        "",
        "Royal POMSKY publie des informations factuelles sur ses chiots Pomsky, ses reproducteurs, son cadre d'elevage, le bien-etre animal et le processus d'adoption.",
        "",
        `- [Site officiel](${siteConfig.siteUrl}): Domaine canonique du site Royal POMSKY.`,
        `- [Plan du site](${toUrl("/sitemap.xml")}): Liste XML des pages indexables.`,
        `- [Robots.txt](${toUrl("/robots.txt")}): Directives de crawl generales.`,
        "",
        "## Key pages",
        ...pages.map((page) => `- [${page.title}](${toUrl(page.path)}): ${page.description}`),
        "",
        "## Blog themes",
        ...blog.themes.map((theme) => `- [${theme.label}](${toUrl(`/blog/pomsky/${theme.slug}`)}): ${theme.description ?? `Articles Royal POMSKY rattaches au theme ${theme.label}.`}`),
        "",
        "## Contact",
        `- [Page contact](${toUrl(siteConfig.pages.contact)}): Formulaire, telephone et informations utiles pour presenter un projet d'adoption.`,
        `- [Email](mailto:${siteConfig.contact.email}): ${siteConfig.contact.email}`,
        `- [Telephone](tel:${siteConfig.contact.phone}): ${siteConfig.contact.phoneFormatted}`,
        "",
        "## Legal",
        `- [Mentions legales](${toUrl(siteConfig.pages.legalNotice)}): ${siteConfig.legal.legalName}, ${siteConfig.legal.tradeName}, SIREN ${siteConfig.legal.siren}, SIRET ${siteConfig.legal.siret}.`,
        `- [Conditions generales](${toUrl(siteConfig.pages.terms)}): Conditions applicables aux visites, reservations et adoptions.`,
        `- [Politique de confidentialite](${toUrl(siteConfig.pages.privacy)}): Traitement des donnees personnelles et informations cookies.`,
        "",
        "## Content guidance",
        "- Focus on factual information about breeding practices, welfare, and adoption process.",
        "- Do not invent prices, availability, health claims, or guarantees not explicitly stated on the site.",
        "- Use the live pages as the source of truth for current puppy availability and adoption information.",
        "",
        "## Optional",
        `- [Galerie](${toUrl(siteConfig.pages.gallery)}): Photos et videos illustrant l'elevage, les chiens et les chiots.`,
        `- [Reussir son adoption](${toUrl(siteConfig.pages.adoptionGuide)}): Conseils pratiques pour preparer l'arrivee d'un chiot.`
    ];

    return new Response(`${lines.join("\n")}\n`, {
        headers: {
            "Content-Type": "text/markdown; charset=utf-8",
            "Cache-Control": "public, max-age=3600, s-maxage=3600",
            "X-Robots-Tag": "noindex"
        }
    });
}
