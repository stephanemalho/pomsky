import { siteConfig } from "./seo-config";

function toAbsoluteUrl(pathOrUrl: string) {
    const value = pathOrUrl.trim();
    if (value.startsWith("http")) {
        return value;
    }
    const normalizedPath = value.startsWith("/") ? value : `/${value}`;
    return new URL(normalizedPath, siteConfig.siteUrl).toString();
}

const defaultImageUrl = toAbsoluteUrl(siteConfig.ogImage);
const puppyBrandName = "Royal Pomsky";
const puppyCategory = "Pomsky";
const puppyAdditionalType = "https://fr.wikipedia.org/wiki/Pomsky";

type PuppySchemaInput = {
    name: string;
    coat: string;
    color: string;
    sexe: string;
    weight: string;
    parents: string;
    readyDate: string;
    age: string;
    size: string;
    description: string;
    highlights: string[];
    images: string[];
    linkTo: string;
    isReserved?: boolean;
    price?: number;
    priceCurrency?: string;
    priceIncludes?: string;
    priceValidUntil?: string;
};

function toPuppyAnchorId(name: string) {
    return name.trim().toLowerCase().replace(/\s+/g, "-");
}

function getPuppyUrl(puppy: PuppySchemaInput) {
    return toAbsoluteUrl(`${siteConfig.pages.puppies}#${toPuppyAnchorId(puppy.name)}`);
}

function getPuppyAvailability(isReserved?: boolean) {
    return isReserved
        ? "https://schema.org/OutOfStock"
        : "https://schema.org/InStock";
}

function createPuppyAdditionalProperty(puppy: PuppySchemaInput) {
    const puppyPriceValue =
        typeof puppy.price === "number"
            ? `${puppy.price} ${puppy.priceCurrency ?? "EUR"}${puppy.priceIncludes ? ` (${puppy.priceIncludes})` : ""}`
            : undefined;
    const candidates = [
        { name: "Sexe", value: puppy.sexe },
        { name: "Couleur", value: puppy.color },
        { name: "Taille", value: puppy.size },
        { name: "Poids adulte", value: puppy.weight },
        { name: "Parents", value: puppy.parents },
        { name: "Date naissance", value: puppy.age },
        { name: "Disponibilité", value: puppy.isReserved ? "Réservé" : "Disponible" },
        { name: "Prix", value: puppyPriceValue },
        { name: "Lignée", value: puppy.coat },
        { name: "Disponible à partir", value: puppy.readyDate }
    ];

    return candidates
        .filter((item) => item.value?.trim().length)
        .map((item) => ({
            "@type": "PropertyValue" as const,
            name: item.name,
            value: item.value
        }));
}

function createPuppyProductEntity(puppy: PuppySchemaInput) {
    const absoluteImages = puppy.images
        .map((image) => image.trim())
        .filter(Boolean)
        .map(toAbsoluteUrl);
    const productUrl = getPuppyUrl(puppy);

    const offer = {
        "@type": "Offer",
        availability: getPuppyAvailability(puppy.isReserved),
        url: productUrl,
        ...(typeof puppy.price === "number"
            ? {
                  price: String(puppy.price),
                  priceCurrency: puppy.priceCurrency ?? "EUR",
                  ...(puppy.priceValidUntil
                      ? { priceValidUntil: puppy.priceValidUntil }
                      : {}),
                  ...(puppy.priceIncludes
                      ? {
                            priceSpecification: {
                                "@type": "UnitPriceSpecification",
                                price: String(puppy.price),
                                priceCurrency: puppy.priceCurrency ?? "EUR",
                                description: puppy.priceIncludes
                            }
                        }
                      : {})
              }
            : {})
    };

    return {
        "@type": "Product",
        name: puppy.name,
        description: puppy.description,
        image: absoluteImages.length > 0 ? absoluteImages : [defaultImageUrl],
        brand: {
            "@type": "Brand",
            name: puppyBrandName
        },
        category: puppyCategory,
        additionalType: puppyAdditionalType,
        additionalProperty: createPuppyAdditionalProperty(puppy),
        url: productUrl,
        offers: offer,
        ...(puppy.highlights.length > 0
            ? { keywords: puppy.highlights.join(", ") }
            : {})
    };
}

export function generateOrganizationSchema() {
    const legal = siteConfig.legal;
    const address = legal.address;
    const identifiers = [
        {
            "@type": "PropertyValue",
            propertyID: "SIREN",
            value: legal.siren
        },
        {
            "@type": "PropertyValue",
            propertyID: "SIRET",
            value: legal.siret
        },
        {
            "@type": "PropertyValue",
            propertyID: "APE",
            value: legal.apeCode
        }
    ];
    const sameAs = siteConfig.socialLinks
        ? Object.values(siteConfig.socialLinks).filter(Boolean)
        : [];

    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: legal.tradeName || siteConfig.name,
        alternateName: legal.legalName,
        legalName: legal.legalName,
        url: siteConfig.siteUrl,
        image: defaultImageUrl,
        logo: {
            "@type": "ImageObject",
            url: `${siteConfig.siteUrl}/icon.png`
        },
        description: siteConfig.description,
        email: `mailto:${siteConfig.contact.email}`,
        telephone: siteConfig.contact.phone,
        foundingDate: legal.foundingDate,
        industry: legal.activity,
        areaServed: "FR",
        identifier: identifiers,
        address: {
            "@type": "PostalAddress",
            addressLocality: address.city,
            postalCode: address.postalCode,
            addressCountry: address.countryCode
        },
        additionalProperty: [
            {
                "@type": "PropertyValue",
                name: "Forme juridique",
                value: legal.legalForm
            }
        ],
        sameAs
    };
}

export function generateLocalBusinessSchema() {
    const legal = siteConfig.legal;
    const breedingLocation = siteConfig.location?.breedingLocation;
    const address = breedingLocation ?? legal.address;
    const coordinates = (
        legal as {
            address?: {
                coordinates?: { latitude?: number; longitude?: number };
            };
        }
    ).address?.coordinates;
    const openingHoursSpecification = siteConfig.businessHours
        .filter((hours) => hours.open && hours.close)
        .map((hours) => ({
            "@type": "OpeningHoursSpecification",
            dayOfWeek: hours.day,
            opens: hours.open,
            closes: hours.close
        }));

    return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: siteConfig.name,
        url: siteConfig.siteUrl,
        image: defaultImageUrl,
        email: siteConfig.contact.email,
        telephone: siteConfig.contact.phone,
        address: {
            "@type": "PostalAddress",
            addressLocality: address.city,
            postalCode: address.postalCode,
            addressCountry: address.countryCode,
            ...((breedingLocation?.department || siteConfig.location?.region)
                ? {
                      addressRegion:
                          breedingLocation?.department ?? siteConfig.location?.region
                  }
                : {})
        },
        ...(coordinates?.latitude != null && coordinates?.longitude != null
            ? {
                  geo: {
                      "@type": "GeoCoordinates",
                      latitude: coordinates.latitude,
                      longitude: coordinates.longitude
                  }
              }
            : {}),
        openingHoursSpecification,
        parentOrganization: {
            "@type": "Organization",
            name: legal.tradeName || siteConfig.name,
            legalName: legal.legalName
        },
        priceRange: "$$" // ? ajuster selon votre gamme tarifaire
    };
}

export function generateContactPointSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "ContactPoint",
        contactType: "Customer Service",
        email: siteConfig.contact.email,
        telephone: siteConfig.contact.phone,
        url: siteConfig.siteUrl,
        areaServed: ["FR"],
        availableLanguage: ["fr"]
    };
}

export function generateFAQSchema(
    faqs: Array<{ question: string; answer: string }>
) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer
            }
        }))
    };
}

export function generatePuppyListSchema(puppies: PuppySchemaInput[]) {
    return {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Chiots pomsky disponibles",
        description:
            "Liste des chiots pomsky Royal POMSKY disponibles à l'adoption.",
        numberOfItems: puppies.length,
        itemListElement: puppies.map((puppy, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: createPuppyProductEntity(puppy)
        }))
    };
}

export function generatePuppyProductSchema(puppy: PuppySchemaInput) {
    return {
        "@context": "https://schema.org",
        ...createPuppyProductEntity(puppy)
    };
}

export function generateReproductorSchema(dog: {
    name: string;
    description: string;
    color: string;
    size: string;
    image: string;
}) {
    return {
        "@context": "https://schema.org",
        "@type": "Animal",
        name: dog.name,
        description: dog.description,
        image: toAbsoluteUrl(dog.image),
        additionalProperty: [
            { "@type": "PropertyValue", name: "Couleur", value: dog.color },
            { "@type": "PropertyValue", name: "Format", value: dog.size }
        ],
        affiliation: {
            "@type": "Organization",
            name: siteConfig.name,
            url: siteConfig.siteUrl
        }
    };
}

export function generateBreadcrumbSchema(
    breadcrumbs: Array<{ name: string; url: string }>
) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((crumb, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: crumb.name,
            item: `${siteConfig.siteUrl}${crumb.url}`
        }))
    };
}

export function generateWebsiteSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: siteConfig.name,
        url: siteConfig.siteUrl,
        image: defaultImageUrl,
        description: siteConfig.description
    };
}

export function generateBlogPostingSchema(post: {
    title: string;
    excerpt: string;
    url: string;
    datePublished: string;
    dateModified?: string;
    imageUrl: string;
    imageAlt?: string;
    authorName: string;
    authorUrl?: string;
    publisherName?: string;
    tags?: string[];
}) {
    const topicTags = post.tags && post.tags.length > 0
        ? post.tags
        : ["Pomsky", "Chien", "Élevage canin"];

    return {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        mainEntityOfPage: post.url,
        datePublished: post.datePublished,
        dateModified: post.dateModified ?? post.datePublished,
        image: {
            "@type": "ImageObject",
            url: toAbsoluteUrl(post.imageUrl),
            caption: post.imageAlt ?? post.title
        },
        author: {
            "@type": "Person",
            name: post.authorName,
            ...(post.authorUrl ? { url: post.authorUrl } : {})
        },
        keywords: topicTags.join(", "),
        about: topicTags.map((topic) => ({
            "@type": "Thing",
            name: topic
        })),
        publisher: {
            "@type": "Organization",
            name: post.publisherName ?? siteConfig.name,
            logo: {
                "@type": "ImageObject",
                url: `${siteConfig.siteUrl}/icon.png`
            }
        }
    };
}
