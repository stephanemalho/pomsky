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
const puppyEligibleRegion = ["FR", "CH"];
const puppyDepartureMode = "Retrait à l'élevage sur rendez-vous";
const organizationId = `${siteConfig.siteUrl}#organization`;
const merchantReturnPolicyId = `${siteConfig.siteUrl}#merchant-return-policy`;
const puppySellerReviewId = `${siteConfig.siteUrl}#google-review-highlight`;

function createDefinedRegions() {
    return puppyEligibleRegion.map((countryCode) => ({
        "@type": "DefinedRegion" as const,
        addressCountry: countryCode
    }));
}

function createOfferShippingDetails() {
    return {
        "@type": "OfferShippingDetails",
        shippingLabel: puppyDepartureMode,
        shippingRate: {
            "@type": "MonetaryAmount",
            value: "0",
            currency: "EUR"
        },
        shippingDestination: createDefinedRegions(),
        deliveryTime: {
            "@type": "ShippingDeliveryTime",
            handlingTime: {
                "@type": "QuantitativeValue",
                minValue: 0,
                maxValue: 0,
                unitCode: "DAY"
            },
            transitTime: {
                "@type": "QuantitativeValue",
                minValue: 0,
                maxValue: 0,
                unitCode: "DAY"
            }
        }
    };
}

function createMerchantReturnPolicyReference() {
    return {
        "@type": "MerchantReturnPolicy",
        "@id": merchantReturnPolicyId
    };
}

function createProductAggregateRating() {
    const googleReviews = siteConfig.richResults?.googleReviews;

    if (!googleReviews) {
        return undefined;
    }

    return {
        "@type": "AggregateRating",
        ratingValue: String(googleReviews.ratingValue),
        reviewCount: googleReviews.reviewCount,
        bestRating: String(googleReviews.bestRating ?? 5),
        worstRating: "1"
    };
}

function createProductReview() {
    const featuredReview = siteConfig.richResults?.googleReviews?.featuredReview;

    if (!featuredReview) {
        return undefined;
    }

    return [
        {
            "@type": "Review",
            "@id": puppySellerReviewId,
            author: {
                "@type": "Person",
                name: featuredReview.authorName
            },
            publisher: {
                "@type": "Organization",
                name: siteConfig.richResults.googleReviews.source
            },
            ...(featuredReview.reviewUrl
                ? { url: featuredReview.reviewUrl }
                : {}),
            reviewRating: {
                "@type": "Rating",
                ratingValue: String(featuredReview.reviewRating),
                bestRating: "5",
                worstRating: "1"
            },
            reviewBody: featuredReview.reviewBody
        }
    ];
}

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

function getPuppyProductId(puppy: PuppySchemaInput) {
    return `${getPuppyUrl(puppy)}-product`;
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
        { name: "Zone d'adoption", value: "France et Suisse" },
        { name: "Mode de départ", value: puppyDepartureMode },
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
    const productId = getPuppyProductId(puppy);

    const offer = {
        "@type": "Offer",
        availability: getPuppyAvailability(puppy.isReserved),
        url: productUrl,
        eligibleRegion: puppyEligibleRegion,
        shippingDetails: createOfferShippingDetails(),
        hasMerchantReturnPolicy: createMerchantReturnPolicyReference(),
        availableDeliveryMethod: "https://schema.org/OnSitePickup",
        seller: {
            "@id": organizationId
        },
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
        "@id": productId,
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
        ...(createProductReview() ? { review: createProductReview() } : {}),
        ...(createProductAggregateRating()
            ? { aggregateRating: createProductAggregateRating() }
            : {}),
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
        "@id": organizationId,
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
        hasMerchantReturnPolicy: {
            "@type": "MerchantReturnPolicy",
            "@id": merchantReturnPolicyId,
            merchantReturnLink: toAbsoluteUrl(siteConfig.pages.terms)
        },
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
            item: {
                "@type": "Product",
                "@id": getPuppyProductId(puppy),
                name: puppy.name,
                url: getPuppyUrl(puppy)
            }
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
        "@id": `${siteConfig.siteUrl}#website`,
        name: siteConfig.name,
        url: siteConfig.siteUrl,
        image: defaultImageUrl,
        description: siteConfig.description
    };
}

export function generateWebPageSchema(page: {
    name: string;
    description: string;
    url: string;
    imageUrl?: string;
    dateModified?: string;
    about?: string[];
}) {
    return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${toAbsoluteUrl(page.url)}#webpage`,
        name: page.name,
        url: toAbsoluteUrl(page.url),
        description: page.description,
        inLanguage: siteConfig.locale,
        isPartOf: {
            "@type": "WebSite",
            "@id": `${siteConfig.siteUrl}#website`,
            name: siteConfig.name,
            url: siteConfig.siteUrl
        },
        ...(page.imageUrl
            ? {
                  primaryImageOfPage: {
                      "@type": "ImageObject",
                      url: toAbsoluteUrl(page.imageUrl)
                  }
              }
            : {}),
        ...(page.dateModified ? { dateModified: page.dateModified } : {}),
        ...(page.about && page.about.length > 0
            ? {
                  about: page.about.map((topic) => ({
                      "@type": "Thing",
                      name: topic
                  }))
              }
            : {})
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
