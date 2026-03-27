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
const organizationId = `${siteConfig.siteUrl}#organization`;

function normalizeSchemaDateTime(value: string) {
    if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
        return `${value}T09:00:00+01:00`;
    }

    return value;
}

function getAuthorProfileUrl(authorName: string) {
    const normalized = authorName.trim().toLowerCase();

    if (normalized === "aurélie violette" || normalized === "marine") {
        return toAbsoluteUrl(siteConfig.pages.eleveuses);
    }

    return undefined;
}

type PuppySchemaInput = {
    name: string;
    description: string;
};

function toPuppyAnchorId(name: string) {
    return name.trim().toLowerCase().replace(/\s+/g, "-");
}

function getPuppyUrl(puppy: PuppySchemaInput) {
    return toAbsoluteUrl(`${siteConfig.pages.puppies}#${toPuppyAnchorId(puppy.name)}`);
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
                "@type": "Thing",
                name: puppy.name,
                description: puppy.description,
                url: getPuppyUrl(puppy)
            }
        }))
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

export function generateVideoObjectSchema(video: {
    name: string;
    description: string;
    pageUrl: string;
    contentUrl: string;
    thumbnailUrl: string;
    uploadDate: string;
    publisherName?: string;
}) {
    return {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: video.name,
        description: video.description,
        uploadDate: normalizeSchemaDateTime(video.uploadDate),
        url: toAbsoluteUrl(video.pageUrl),
        contentUrl: toAbsoluteUrl(video.contentUrl),
        thumbnailUrl: [toAbsoluteUrl(video.thumbnailUrl)],
        inLanguage: siteConfig.locale,
        isPartOf: {
            "@type": "WebPage",
            "@id": toAbsoluteUrl(video.pageUrl)
        },
        publisher: {
            "@type": "Organization",
            name: video.publisherName ?? siteConfig.name,
            url: siteConfig.siteUrl,
            logo: {
                "@type": "ImageObject",
                url: `${siteConfig.siteUrl}/icon.png`
            }
        }
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
    const authorUrl = post.authorUrl?.trim() || getAuthorProfileUrl(post.authorName);
    const datePublished = normalizeSchemaDateTime(post.datePublished);
    const dateModified = normalizeSchemaDateTime(post.dateModified ?? post.datePublished);

    return {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": post.url
        },
        datePublished,
        dateModified,
        image: {
            "@type": "ImageObject",
            url: toAbsoluteUrl(post.imageUrl),
            caption: post.imageAlt ?? post.title
        },
        author: {
            "@type": "Person",
            name: post.authorName,
            ...(authorUrl ? { url: authorUrl } : {})
        },
        keywords: topicTags.join(", "),
        about: topicTags.map((topic) => ({
            "@type": "Thing",
            name: topic
        })),
        publisher: {
            "@type": "Organization",
            name: post.publisherName ?? siteConfig.name,
            url: siteConfig.siteUrl,
            logo: {
                "@type": "ImageObject",
                url: `${siteConfig.siteUrl}/icon.png`
            }
        }
    };
}
