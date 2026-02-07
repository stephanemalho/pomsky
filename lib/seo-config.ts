import { createLastmodGetter } from "./lastmod";
import { pageContent } from "./page-content";

/**
 * ============================================================
 * CONFIGURATION SEO & LÉGALE — Royal POMSKY
 * ============================================================
 * Source de vérité unique pour :
 * - SEO
 * - Métadonnées
 * - Mentions légales
 * - Sitemap
 */

/* -------------------------------------------------------------------------- */
/*  CANONICAL NAME (UNE SEULE SOURCE DE VÉRITÉ)                                */
/* -------------------------------------------------------------------------- */

const CANONICAL_NAME = "Royal POMSKY";

/* -------------------------------------------------------------------------- */
/*  SITE CONFIG                                                                */
/* -------------------------------------------------------------------------- */

export const siteConfig = {
    /* ----------------------------- Identité --------------------------------- */
    name: CANONICAL_NAME,
    author: CANONICAL_NAME,
    locale: "fr_FR",

    siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://royalpomsky.com",

    /* ------------------------------ SEO Global -------------------------------- */
    title: "Élevage de Pomsky | Royal POMSKY",
    description:
        "Royal POMSKY est un élevage spécialisé dans les pomskys de toutes tailles. Chiots sélectionnés, élevage responsable, reproducteurs suivis.",
    keywords: [
        "élevage pomsky",
        "Pomsky France",
        "chiots pomsky",
        "pomsky toy",
        "élevage responsable",
        "pomsky miniature"
    ],

    /* ------------------------------ Contact ---------------------------------- */
    contact: {
        email: "elevageroyalpomsky@gmail.com",
        phone: "+33689758031",
        phoneFormatted: "06 89 75 80 31"
    },

    /* ---------------------------- Données légales ----------------------------- */
    legal: {
        legalName: "ELEVAGE ROYAL",
        tradeName: CANONICAL_NAME,
        legalForm: "GAEC (Groupement Agricole d'Exploitation en Commun)",
        siren: "917907016",
        siret: "91790701600013",
        apeCode: "01.49Z",
        activity: "Élevage d'autres animaux",
        foundingDate: "2022-06-15",
        address: {
            city: "Dommartin-lès-Cuiseaux",
            postalCode: "71480",
            country: "France"
        }
    },

    /* ----------------------- Localisation (marketing) ------------------------- elevageroyalpomsky@gmail.com */
    location: {
        region: "Bourgogne-Franche-Comté",
        department: "Saône-et-Loire (71)",
        nearbyCity: "Saint-Amour (39)"
    },

    /* ------------------------------ Horaires ---------------------------------- */
    businessHours: [
        { day: "Monday", open: "09:00", close: "18:00" },
        { day: "Tuesday", open: "09:00", close: "18:00" },
        { day: "Wednesday", open: "09:00", close: "18:00" },
        { day: "Thursday", open: "09:00", close: "18:00" },
        { day: "Friday", open: "09:00", close: "18:00" },
        { day: "Saturday", open: "09:00", close: "18:00" },
        { day: "Sunday", closed: true }
    ],

    /* ------------------------------ OpenGraph --------------------------------- */
    ogImage: "/BEAUTY-pomsky-miniature-f4.webp",
    ogImageAlt: "pomsky Toy noir de Royal POMSKY",
    ogImageWidth: 1200,
    ogImageHeight: 630,

    socialLinks: {
        instagram: "https://www.instagram.com/royalpomsky/"
    },

    /* ------------------------------- Pages ------------------------------------ */
    pages: {
        home: "/",
        pomsky: "/le-pomsky",
        puppies: "/chiots-disponibles",
        reproductors: "/femelles-reproductrices",
        presentation: "/presentation-elevage",
        wellness: "/bien-etre-animal",
        contact: "/contact",
        legalNotice: "/mentions-legales",
        terms: "/conditions-generales",
        privacy: "/politique-de-confidentialite"
    }
};

/* -------------------------------------------------------------------------- */
/*  MÉTADONNÉES PAR PAGE                                                       */
/* -------------------------------------------------------------------------- */

export const pageMetadata = {
    home: {
        title: pageContent.home.h1 + " | " + pageContent.home.h1Subtitle,
        description: pageContent.home.description,
        keywords: [
            "élevage de pomsky responsable",
            "chiots pomsky toy miniature et standard",
            "élevage de pomsky à taille humaine",
            "chiots pomsky bien socialisés",
            "pomsky aux yeux bleus",
            "élevage éthique de pomsky",
            "Royal Pomsky"
        ]
    },

    pomsky: {
        title: pageContent.pomsky.h1,
        description: pageContent.pomsky.description,
        keywords: [
            "taille du pomsky",
            "pomsky toy miniature standard",
            "différences pomsky toy miniature standard",
            "origine du pomsky",
            "histoire du pomsky",
            "tempérament du pomsky",
            "générations du pomsky",
            "adopter un pomsky",
            "ce qu'il faut savoir avant d'adopter un pomsky"
        ]
    },

    puppies: {
        title: pageContent.puppies.h1,
        description: pageContent.puppies.description,
        keywords: [
            "chiots pomsky",
            "chiot Toy",
            "chiot pomsky nain",
            "chiots disponibles",
            "reservation chiot",
            "bon élevage de pomsky",
            "acheter un pomsky",
            "inscription portee"
        ]
    },

    reproductors: {
        title: pageContent.reproductors.h1,
        description: pageContent.reproductors.description,
        keywords: [
            "reproducteurs pomsky",
            "lignees pomsky",
            "standard de race",
            "sante canine",
            "tests genetiques",
            "caractere pomsky"
        ]
    },

    presentation: {
        title: pageContent.presentation.h1,
        description: pageContent.presentation.description,
        keywords: [
            "elevage responsable",
            "passion pomsky",
            "selection rigoureuse",
            "accompagnement adoptant",
            "ethique elevage",
            "trouver bon elevage pomsky",
            "elevage chiots avec mere"
        ]
    },

    wellness: {
        title: pageContent.wellness.h1,
        description: pageContent.wellness.description,
        keywords: [
            "conditions de vie des chiots en élevage",
            "élevage familial responsable",
            "bien-être et socialisation des chiots",
            "chiots élevés avec leur mère",
            "suivi vétérinaire dès la naissance",
            "respect du développement du chiot",
            "environnement sain pour chiots",
            "élevage éthique de pomsky"
        ]
    },

    contact: {
        title: pageContent.contact.h1,
        description: pageContent.contact.description,
        keywords: [
            "contact elevage pomsky",
            "visite elevage",
            "rendez-vous",
            "adoption pomsky",
            "informations chiot",
            "reservation chiot"
        ]
    },

    legalNotice: {
        title: pageContent.legalNotice.h1,
        description: pageContent.legalNotice.description,
        keywords: [
            "mentions legales",
            "informations legales",
            "siren",
            "siret",
            "editeur du site"
        ]
    },

    terms: {
        title: pageContent.terms.h1,
        description: pageContent.terms.description,
        keywords: [
            "conditions generales",
            "conditions dutilisation",
            "CGU",
            "responsabilite",
            "propriete intellectuelle"
        ]
    },

    privacy: {
        title: pageContent.privacy.h1,
        description: pageContent.privacy.description,
        keywords: [
            "RGPD",
            "confidentialite",
            "donnees personnelles",
            "cookies",
            "droits des utilisateurs"
        ]
    },
    blog: {
        title: "Blog Pomsky | Conseils, race et bien-etre",
        description:
            "Articles sur le Pomsky : race, genetique, sante, caractere, prix et conseils d'adoption.",
        keywords: [
            "blog pomsky",
            "conseils pomsky",
            "race pomsky",
            "sante pomsky",
            "prix pomsky",
            "caractere pomsky",
            "genetique pomsky",
            "adoption pomsky"
        ]
    }
};

/* -------------------------------------------------------------------------- */
/*  SITEMAP                                                                    */
/* -------------------------------------------------------------------------- */

export const sitemapPages = [
    {
        url: "/",
        changefreq: "weekly",
        priority: 1.0,
        lastmod: "2026-02-07"
    },
    {
        url: "/le-pomsky",
        changefreq: "monthly",
        priority: 0.75,
        lastmod: "2026-02-07"
    },
    {
        url: "/chiots-disponibles",
        changefreq: "weekly",
        priority: 0.9,
        lastmod: "2026-02-07"
    },
    {
        url: "/femelles-reproductrices",
        changefreq: "monthly",
        priority: 0.8,
        lastmod: "2026-02-07"
    },
    {
        url: "/presentation-elevage",
        changefreq: "monthly",
        priority: 0.7,
        lastmod: "2026-02-07"
    },
    {
        url: "/bien-etre-animal",
        changefreq: "monthly",
        priority: 0.7,
        lastmod: "2026-02-07"
    },
    {
        url: "/contact",
        changefreq: "monthly",
        priority: 0.8,
        lastmod: "2026-02-07"
    },
    {
        url: "/mentions-legales",
        changefreq: "yearly",
        priority: 0.6,
        lastmod: "2026-02-07"
    },
    {
        url: "/conditions-generales",
        changefreq: "yearly",
        priority: 0.6,
        lastmod: "2026-02-07"
    },
    {
        url: "/politique-de-confidentialite",
        changefreq: "yearly",
        priority: 0.7,
        lastmod: "2026-02-07"
    }
];

/* -------------------------------------------------------------------------- */
/*  LASTMOD                                                                    */
/* -------------------------------------------------------------------------- */

export const returnLastmod = createLastmodGetter(sitemapPages);

// Compat legacy (à supprimer plus tard)
export const retrunLastmod = returnLastmod;
export const getLastmod = returnLastmod;
