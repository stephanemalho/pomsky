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
    const address = legal.address;
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
            ...(siteConfig.location?.region
                ? { addressRegion: siteConfig.location.region }
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

export function generatePuppySchema(puppy: {
    name: string;
    description: string;
    color: string;
    size: string;
    image: string;
    price?: number;
}) {
    return {
        "@context": "https://schema.org",
        "@type": "Product",
        name: puppy.name,
        description: puppy.description,
        image: toAbsoluteUrl(puppy.image),
        brand: {
            "@type": "Brand",
            name: siteConfig.name
        },
        manufacturer: {
            "@type": "Organization",
            name: siteConfig.name,
            url: siteConfig.siteUrl
        },
        offers: puppy.price
            ? {
                  "@type": "Offer",
                  url: `${siteConfig.siteUrl}/contact`,
                  priceCurrency: "EUR",
                  price: puppy.price.toString()
              }
            : undefined
    };
}

export function generatePuppyListSchema(
    puppies: Array<{
        name: string;
        description: string;
        color: string;
        size: string;
        image: string;
    }>
) {
    return {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Chiots pomsky disponibles",
        description:
            "Liste des chiots pomsky Royal POMSKYs disponibles à l'adoption.",
        numberOfItems: puppies.length,
        itemListElement: puppies.map((puppy, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: puppy.name,
            url: `${siteConfig.siteUrl}/chiots-disponibles`,
            image: toAbsoluteUrl(puppy.image)
        }))
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
        "@type": "Person",
        name: dog.name,
        description: dog.description,
        image: toAbsoluteUrl(dog.image),
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
        description: siteConfig.description,
        potentialAction: {
            "@type": "SearchAction",
            target: {
                "@type": "EntryPoint",
                urlTemplate: `${siteConfig.siteUrl}/search?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
        }
    };
}
