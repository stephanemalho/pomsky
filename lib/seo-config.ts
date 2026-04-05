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
        "premier elevage pomsky toy americain en france"
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
        nearbyCity: "Saint-Amour (39)",
        breedingLocation: {
            city: "Saint-Amour",
            postalCode: "39160",
            department: "Jura (39)",
            country: "France",
            countryCode: "FR"
        }
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
        instagram: "https://www.instagram.com/royalpomsky/",
        facebook: "https://www.facebook.com/people/Royal-Pomsky/61575288855968/?locale=fr_FR",
        tiktok: "https://www.tiktok.com/@royalpomsky",
        youtube: "https://www.youtube.com/@royalpomsky6732"
    },

    /* ------------------------- Rich results / Merchant ------------------------ */
    richResults: {
        googleReviews: {
            source: "Google Business Profile",
            sourceUrl:
                "https://www.google.com/search?sca_esv=c9866652b0fe63dd&hl=fr&gl=fr&sxsrf=ANbL-n5ecBJ5-lGW48M3Fg0pXurxqgy2TA:1773084430943&q=%C3%89levage%20Pomsky%20-%20ROYAL%20POMSKY%20Avis&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2NDQxtbQ0MzazNDa3MDE2MTQ028DI-IpR-XBnTmpZYnqqQkB-bnF2pYKuQpB_pKOPQoC_b7B3pIJjWWbxIlZiVAEAZiihkGYAAAA&rldimm=1145996369378434116&tbm=lcl&sa=X&ved=0CAcQ5foLahcKEwiA-NedxpOTAxUAAAAAHQAAAAAQBQ#lkt=LocalPoiReviews&arid=Ci9DQUlRQUNvZENodHljRjlvT2xWT2FEQXhjVTVNTms4eFVHdDZWMk5yVTNoNmExRRAB",
            ratingValue: 4.9,
            reviewCount: 110,
            bestRating: 5,
            featuredReview: {
                reviewUrl: "https://share.google/d7nRgoa9ldEeX6zxV",
                authorName: "Alisson Terwagne",
                reviewRating: 5,
                reviewBody:
                    "Je remercie Aurelie, pour son professionnalisme, pour l'amour qu'elle donne à ses chiens. Son elevage est de loin une perle rare : élevage éthique..."
            }
        }
    },

    /* ------------------------------- Pages ------------------------------------ */
    pages: {
        home: "/",
        pomsky: "/le-pomsky",
        pomskyPrice: "/pomsky-prix",
        puppies: "/chiots-disponibles",
        adoptionGuide: "/adoption/reussir-son-adoption",
        reproductors: "/femelles-reproductrices",
        presentation: "/presentation-elevage",
        eleveuses: "/presentation-eleveuses",
        wellness: "/bien-etre-animal",
        gallery: "/galerie",
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

    const hasJpg = normalizedImages.some(
        (image) =>
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
    images?: string[];
};

export const buildTwitter = ({
    title,
    description,
    imageUrl,
    images
}: TwitterParams) => {
    const providedImages =
        images && images.length > 0
            ? images
            : imageUrl
              ? [imageUrl]
              : [new URL(siteConfig.ogImage, siteConfig.siteUrl).toString()];
    const jpgFallbackUrl = new URL(
        siteConfig.ogImageJpg,
        siteConfig.siteUrl
    ).toString();
    const hasJpg = providedImages.some((image) =>
        /\.jpe?g($|\?)/i.test(image)
    );

    return {
        card: "summary_large_image",
        title,
        description,
        // Put JPEG first for social clients that are inconsistent with WebP.
        images: hasJpg ? providedImages : [jpgFallbackUrl, ...providedImages]
    };
};

/* -------------------------------------------------------------------------- */
/*  MÉTADONNÉES PAR PAGE                                                       */
/* -------------------------------------------------------------------------- */

export const pageMetadata = {
    home: {
        title: "Élevage de Pomsky - Royal POMSKY",
        description:
            "Nos chiots Pomsky Toy, Miniature et Standard sont élevés en France, issus de lignées américaines et sélectionnés pour leur santé et leur équilibre. Découvrez notre élevage Royal Pomsky.",
        keywords: [
            "élevage pomsky France",
            "chiot pomsky",
            "pomsky toy miniature standard",
            "pomsky lignées américaines",
            "élevage pomsky Jura",
            "adopter pomsky"
        ]
    },

    pomsky: {
        title: "Le Pomsky : origines, taille, caractère et générations | Guide complet",
        description:
            "Guide complet sur le Pomsky : origines, formats Toy, Miniature et Standard, caractère, générations F1 à F5 et repères utiles avant une adoption réfléchie.",
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
            "sante pomsky"
        ]
    },

    pomskyPrice: {
        title: "Tarifs de nos Pomsky Standard, Miniature et Toy | Prix 2026 et repères pour comprendre nos écarts de prix",
        description:
            "Consultez les tarifs 2026 des chiots Royal Pomsky : prix par catégorie, profils Standard, Miniature et Toy, et repères utiles pour comprendre nos écarts de tarif.",
        keywords: [
            "pomsky prix",
            "prix pomsky",
            "prix pomsky 2026",
            "prix royal pomsky",
            "prix chiot pomsky",
            "prix pomsky toy",
            "prix pomsky miniature",
            "combien coute un pomsky",
            "prix elevage pomsky france",
            "prix pomsky standard",
            "tarif pomsky",
            "pomsky prix france"
        ]
    },

    puppies: {
        title: pageContent.puppies.h1,
        description:
            "Chiots Pomsky disponibles à l’adoption chez Royal POMSKY. Adoption possible partout en France et en Suisse, retrait à l’élevage sur rendez-vous.",
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

    adoptionGuide: {
        title: "Réussir l'adoption de son chiot Pomsky | Trajet, maison et premières semaines",
        description:
            "Guide complet pour réussir l'adoption d'un chiot Pomsky : trajet du jour J, arrivée à la maison, première semaine, propreté, solitude et repères essentiels.",
        keywords: [
            "reussir adoption chiot",
            "adoption chiot pomsky",
            "reussir adoption pomsky",
            "adopter un chiot pomsky",
            "preparer arrivee chiot maison",
            "trajet adoption chiot voiture train avion",
            "premiere semaine chiot",
            "proprete chiot 2 mois",
            "conseils nouveaux maitres chiot",
            "accueil chiot elevage",
            "guide adoption pomsky"
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
        title: "Découvrez notre politique d’élevage, de la sélection des parents au suivi des chiots",
        description:
            "Comment Royal Pomsky construit son élevage : sélection de parents importés des États-Unis, programme sanitaire, portées raisonnées et travail en amont pour faire naître des chiots bien dans leurs pattes.",
        keywords: [
            "elevage pomsky responsable",
            "elevage canin professionnel",
            "selection lignee pomsky",
            "parents pomsky importes etats unis",
            "programme sanitaire pomsky",
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
        title: "Conditions de vie de nos chiots Pomsky | Bien-être, confort et rythme quotidien",
        description:
            "Découvrez comment vivent nos chiots et adultes Pomsky au quotidien chez Royal Pomsky : espaces pensés pour eux, repos, présence humaine, sorties, découvertes progressives et confort de vie.",
        keywords: [
            "bien etre animal elevage pomsky",
            "conditions de vie chiot pomsky",
            "socialisation chiot elevage",
            "elevage pomsky bien etre",
            "comment vivent les chiots pomsky",
            "respect du rythme chiot",
            "environnement chiot elevage",
            "elevage pomsky responsable"
        ]
    },

    contact: {
        title: pageContent.contact.h1,
        description:
            "Prenez contact avec Royal Pomsky pour poser vos questions, échanger sur votre projet d’adoption et organiser une visite des Pomsky à l’élevage sur rendez-vous.",
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
    gallery: {
        title: "Galerie Pomsky | Photos et vidéos de l'élevage Royal POMSKY",
        description:
            "Consultez la galerie Royal POMSKY pour découvrir des photos de Pomsky, des scènes du quotidien à l'élevage et une sélection de vidéos Instagram, YouTube, TikTok et Facebook dans une page claire, rapide et agréable à parcourir.",
        keywords: [
            "galerie royal pomsky",
            "galerie photo pomsky",
            "photos pomsky",
            "vidéos pomsky",
            "elevage pomsky photos",
            "elevage pomsky vidéos",
            "videos instagram pomsky",
            "shorts youtube pomsky",
            "videos tiktok pomsky",
            "facebook royal pomsky",
            "reels instagram pomsky",
            "reels facebook pomsky",
            "reseaux sociaux royal pomsky"
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
        lastmod: "2026-03-28"
    },
    {
        url: "/le-pomsky",
        changefreq: "monthly",
        priority: 0.8,
        lastmod: "2026-03-27"
    },
    {
        url: "/pomsky-prix",
        changefreq: "monthly",
        priority: 0.8,
        lastmod: "2026-03-27"
    },
    {
        url: "/chiots-disponibles",
        changefreq: "weekly",
        priority: 0.9,
        lastmod: "2026-04-05"
    },
    {
        url: "/adoption/reussir-son-adoption",
        changefreq: "monthly",
        priority: 0.8,
        lastmod: "2026-03-26"
    },
    {
        url: "/femelles-reproductrices",
        changefreq: "monthly",
        priority: 0.9,
        lastmod: "2026-03-26"
    },
    {
        url: "/presentation-elevage",
        changefreq: "monthly",
        priority: 0.8,
        lastmod: "2026-03-27"
    },
    {
        url: "/presentation-eleveuses",
        changefreq: "monthly",
        priority: 0.7,
        lastmod: "2026-03-26"
    },
    {
        url: "/bien-etre-animal",
        changefreq: "monthly",
        priority: 0.7,
        lastmod: "2026-03-27"
    },
    {
        url: "/contact",
        changefreq: "monthly",
        priority: 0.8,
        lastmod: "2026-03-27"
    },
    {
        url: "/galerie",
        changefreq: "weekly",
        priority: 0.75,
        lastmod: "2026-04-05"
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
