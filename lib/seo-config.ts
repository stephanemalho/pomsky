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
    locale: "fr-FR",

    siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://royalpomsky.com",

    /* ------------------------------ SEO Global -------------------------------- */
    title: "Élevage de Pomsky | Royal POMSKY",
    description:
        "Royal POMSKY est le premier élevage spécialisé dans les pomskys Toy de lignée Américaines. Chiots sélectionnés, élevage responsable, reproducteurs suivis depuis 2017.",
    keywords: [
        "elevage pomsky",
        "elevage pomsky france",
        "elevage pomsky jura",
        "royal pomsky",
        "pomsky toy",
        "pomsky miniature",
        "chiot pomsky a vendre",
        "adoption pomsky",
        "premier elevage pomsky toy americain en france",
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
            country: "France",
            countryCode: "FR"
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
    ogImageJpg: "/BEAUTY-pomsky-miniature-f4.jpg",
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
        eleveuses: "/presentation-eleveuses",
        wellness: "/bien-etre-animal",
        contact: "/contact",
        legalNotice: "/mentions-legales",
        terms: "/conditions-generales",
        privacy: "/politique-de-confidentialite"
    }
};

type OpenGraphParams = {
    title: string;
    description: string;
    url: string;
    type?: "website" | "article";
    images?: Array<{
        url: string;
        alt?: string;
        width?: number;
        height?: number;
        type?: string;
    }>;
    publishedTime?: string;
    authors?: string[];
};

export const buildOpenGraph = ({
    title,
    description,
    url,
    type = "website",
    images,
    publishedTime,
    authors
}: OpenGraphParams) => {
    const normalizedImages =
        images && images.length > 0
            ? images.map((image) => ({
                  width: siteConfig.ogImageWidth,
                  height: siteConfig.ogImageHeight,
                  alt: siteConfig.ogImageAlt,
                  type: "image/webp",
                  ...image
              }))
            : [
                  {
                      url: new URL(
                          siteConfig.ogImage,
                          siteConfig.siteUrl
                      ).toString(),
                      width: siteConfig.ogImageWidth,
                      height: siteConfig.ogImageHeight,
                      alt: siteConfig.ogImageAlt,
                      type: "image/webp"
                  }
              ];

    const hasJpg = normalizedImages.some((image) =>
        image.type === "image/jpeg" || /\.jpe?g($|\?)/i.test(image.url)
    );
    const jpgFallbackUrl = new URL(
        siteConfig.ogImageJpg,
        siteConfig.siteUrl
    ).toString();

    return {
        title,
        description,
        url,
        siteName: siteConfig.name,
        locale: siteConfig.locale,
        type,
        ...(type === "article" && publishedTime ? { publishedTime } : {}),
        ...(type === "article" && authors ? { authors } : {}),
        // Put JPEG first for better compatibility with social scrapers
        // (e.g. WhatsApp) that may only read the first og:image.
        images: hasJpg
            ? normalizedImages
            : [
                  {
                      url: jpgFallbackUrl,
                      width: siteConfig.ogImageWidth,
                      height: siteConfig.ogImageHeight,
                      alt: siteConfig.ogImageAlt,
                      type: "image/jpeg"
                  },
                  ...normalizedImages
              ]
    };
};

type TwitterParams = {
    title: string;
    description: string;
    imageUrl?: string;
};

export const buildTwitter = ({
    title,
    description,
    imageUrl
}: TwitterParams) => {
    const primaryImage = imageUrl
        ? imageUrl
        : new URL(siteConfig.ogImage, siteConfig.siteUrl).toString();
    const jpgFallbackUrl = new URL(
        siteConfig.ogImageJpg,
        siteConfig.siteUrl
    ).toString();

    return {
        card: "summary_large_image",
        title,
        description,
        // Put JPEG first for social clients that are inconsistent with WebP.
        images: /\.jpe?g($|\?)/i.test(primaryImage)
            ? [primaryImage]
            : [jpgFallbackUrl, primaryImage]
    };
};

/* -------------------------------------------------------------------------- */
/*  MÉTADONNÉES PAR PAGE                                                       */
/* -------------------------------------------------------------------------- */

export const pageMetadata = {
    home: {
        title: pageContent.home.h1 + " | " + pageContent.home.h1Subtitle,
        description: pageContent.home.description,
        keywords: [
            "elevage pomsky toy",
            "le pomsky",
            "elevage pomsky miniature",
            "chiot pomsky a vendre france",
            "adopter un pomsky",
            "elevage pomsky professionnel",
            "elevage pomsky jura",
            "pomsky france",
            "royal pomsky"
        ]
    },

    pomsky: {
        title: pageContent.pomsky.h1,
        description: pageContent.pomsky.description,
        keywords: [
            "qu est ce qu un pomsky",
            "origine du pomsky",
            "taille pomsky",
            "pomsky toy",
            "pomsky toy taille adulte",
            "pomsky miniature taille adulte",
            "generations pomsky f1 f2 f3 f4 f5",
            "pomsky vs klee kai",
            "caractere pomsky",
            "sante pomsky",
        ]
    },

    puppies: {
        title: pageContent.puppies.h1,
        description: pageContent.puppies.description,
        keywords: [
            "chiot pomsky disponible",
            "chiot pomsky a reserver",
            "chiot pomsky toy a vendre",
            "chiot pomsky miniature a vendre",
            "adoption chiot pomsky france",
            "prix chiot pomsky toy",
            "elevage pomsky chiots disponibles",
            "reservation pomsky"
        ]
    },

    reproductors: {
        title: pageContent.reproductors.h1,
        description: pageContent.reproductors.description,
        keywords: [
            "reproducteurs pomsky",
            "lignees pomsky",
            "adn pomsky",
            "tests genetiques pomsky",
            "selection reproducteurs pomsky",
            "sante reproducteurs pomsky",
            "pomsky f3 f4 f5",
            "elevage responsable pomsky"
        ]
    },

    presentation: {
        title: pageContent.presentation.h1,
        description: pageContent.presentation.description,
        keywords: [
            "elevage pomsky responsable",
            "elevage canin professionnel",
            "selection lignee pomsky",
            "socialisation chiot pomsky",
            "bien etre chiot elevage",
            "adoption pomsky accompagnee",
            "visite elevage pomsky",
            "elevage pomsky france"
        ]
    },
    eleveuses: {
        title: pageContent.eleveuses.h1,
        description: pageContent.eleveuses.description,
        keywords: [
            "eleveuse pomsky",
            "expert pomsky toy",
            "accompagnement adoption pomsky",
            "conseils elevage pomsky",
            "royal pomsky equipe",
            "experience elevage pomsky",
            "approche comportementale chien",
            "suivi famille adoptante"
        ]
    },

    wellness: {
        title: pageContent.wellness.h1,
        description: pageContent.wellness.description,
        keywords: [
            "bien etre chiot pomsky",
            "conditions de vie chiot elevage",
            "socialisation chiot",
            "nursery chiot elevage",
            "environnement sain chiot",
            "suivi veterinaire chiot",
            "elevage ethique pomsky",
            "chiot eleve avec sa mere"
        ]
    },

    contact: {
        title: pageContent.contact.h1,
        description: pageContent.contact.description,
        keywords: [
            "contact elevage pomsky",
            "visiter elevage pomsky",
            "rdv adoption pomsky",
            "reserver chiot pomsky",
            "elevage pomsky jura contact",
            "informations adoption pomsky",
            "prix pomsky toy contact",
            "royal pomsky contact"
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
            "conseils pomsky toy",
            "prix pomsky toy",
            "taille adulte pomsky",
            "adoption pomsky conseils",
            "education pomsky",
            "sante pomsky",
            "genetique pomsky"
        ]
    }
};

/* -------------------------------------------------------------------------- */
/*  SITEMAP                                                                    */
/* -------------------------------------------------------------------------- */

export const sitemapPages = [
    {
        url: "/",
        changefreq: "monthly",
        priority: 1.0,
        lastmod: "2026-03-03"
    },
    {
        url: "/le-pomsky",
        changefreq: "monthly",
        priority: 0.75,
        lastmod: "2026-03-03"
    },
    {
        url: "/chiots-disponibles",
        changefreq: "weekly",
        priority: 0.9,
        lastmod: "2026-02-28"
    },
    {
        url: "/femelles-reproductrices",
        changefreq: "monthly",
        priority: 0.8,
        lastmod: "2026-03-03"
    },
    {
        url: "/presentation-elevage",
        changefreq: "monthly",
        priority: 0.7,
        lastmod: "2026-03-03"
    },
    {
        url: "/presentation-eleveuses",
        changefreq: "monthly",
        priority: 0.7,
        lastmod: "2026-02-15"
    },
    {
        url: "/bien-etre-animal",
        changefreq: "monthly",
        priority: 0.7,
        lastmod: "2026-02-21"
    },
    {
        url: "/contact",
        changefreq: "monthly",
        priority: 0.8,
        lastmod: "2026-02-13"
    },
    {
        url: "/mentions-legales",
        changefreq: "yearly",
        priority: 0.6,
        lastmod: "2026-02-13"
    },
    {
        url: "/conditions-generales",
        changefreq: "yearly",
        priority: 0.6,
        lastmod: "2026-02-13"
    },
    {
        url: "/politique-de-confidentialite",
        changefreq: "yearly",
        priority: 0.7,
        lastmod: "2026-02-13"
    }
];

/* -------------------------------------------------------------------------- */
/*  LASTMOD                                                                    */
/* -------------------------------------------------------------------------- */

export const returnLastmod = createLastmodGetter(sitemapPages);

// Compat legacy (à supprimer plus tard)
export const retrunLastmod = returnLastmod;
export const getLastmod = returnLastmod;
