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

type PuppyCatalogSchemaInput = {
    name: string;
    description: string;
    url: string;
    color?: string;
    sexe?: string;
    size?: string;
    weight?: string;
    parents?: string;
    age?: string;
    coat?: string;
    ruler?: string;
    highlights?: string[];
    health?: string[];
    images?: Array<string | { src: string; alt?: string }>;
    price?: number;
    priceCurrency?: string;
    priceIncludes?: string;
    priceValidUntil?: string;
    interestFormUrl?: string;
    certificationIds?: string[];
    status: "available" | "reserved" | "adopted";
};

function getSchemaImagePath(image: string | { src: string; alt?: string }) {
    return typeof image === "string" ? image : image.src;
}

type FutureLitterSchemaInput = {
    name: string;
    description: string;
    url: string;
    image?: string;
    parents: string;
    generation?: string;
    stage: string;
    expectedBirthWindow?: string;
    observedCount?: string;
};

type LitterCertificationSchemaInput = {
    id: string;
    name: string;
    description: string;
    imageSrc: string;
    issuer: string;
    breeder: string;
    certificationIdentification: string;
    litterBirthDate: string;
    puppyNames: string[];
    parents: Array<{
        role: string;
        name: string;
        breed: string;
        generation: string;
        pedigree: string;
    }>;
};

function toPuppyAnchorId(name: string) {
    return name.trim().toLowerCase().replace(/\s+/g, "-");
}

function getPuppyUrl(puppy: PuppySchemaInput) {
    return toAbsoluteUrl(`${siteConfig.pages.puppies}#${toPuppyAnchorId(puppy.name)}`);
}

function getStructuredStatusLabel(status: PuppyCatalogSchemaInput["status"]) {
    if (status === "reserved") return "Réservé"
    if (status === "adopted") return "A rejoint sa famille"
    return "Disponible"
}

function toAdditionalProperty(
    name: string,
    value?: string | number
) {
    if (value == null || value === "") {
        return null;
    }

    return {
        "@type": "PropertyValue",
        name,
        value
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
    faqs: Array<{ question: string; answer: string }>,
    pageUrl?: string
) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        ...(pageUrl ? { "@id": `${toAbsoluteUrl(pageUrl)}#faq` } : {}),
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
        "@id": `${toAbsoluteUrl(siteConfig.pages.puppies)}#chiots-disponibles`,
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

export function generatePuppyCatalogSchema(puppies: PuppyCatalogSchemaInput[]) {
    const itemListId = `${toAbsoluteUrl(siteConfig.pages.puppies)}#chiots-catalogue`;
    const puppyNodes = puppies.map((puppy) => {
        const additionalProperty = [
            toAdditionalProperty("Statut", getStructuredStatusLabel(puppy.status)),
            toAdditionalProperty("Sexe", puppy.sexe),
            toAdditionalProperty("Couleur", puppy.color),
            toAdditionalProperty("Génération", puppy.coat),
            toAdditionalProperty("Format", puppy.size),
            toAdditionalProperty("Poids adulte estimé", puppy.weight),
            toAdditionalProperty("Parents", puppy.parents),
            toAdditionalProperty("Age", puppy.age),
            toAdditionalProperty("Pelage", puppy.ruler),
            toAdditionalProperty("Prix affiché", typeof puppy.price === "number" ? puppy.price : undefined),
            toAdditionalProperty("Prix inclut", puppy.priceIncludes),
            toAdditionalProperty(
                "Points forts",
                puppy.highlights && puppy.highlights.length > 0 ? puppy.highlights.join(", ") : undefined
            ),
            toAdditionalProperty(
                "Suivi santé",
                puppy.health && puppy.health.length > 0 ? puppy.health.join(", ") : undefined
            )
        ].filter(Boolean);

        return {
            "@type": "IndividualProduct",
            "@id": toAbsoluteUrl(puppy.url),
            name: puppy.name,
            description: puppy.description,
            url: toAbsoluteUrl(puppy.url),
            image: (puppy.images ?? []).map((image) => toAbsoluteUrl(getSchemaImagePath(image))),
            brand: {
                "@id": organizationId
            },
            category: "Chiot Pomsky",
            ...(puppy.color ? { color: puppy.color } : {}),
            ...(puppy.size ? { size: puppy.size } : {}),
            additionalProperty,
            ...(puppy.certificationIds && puppy.certificationIds.length > 0
                ? {
                      hasCertification: puppy.certificationIds.map((certificationId) => ({
                          "@id": `${toAbsoluteUrl(siteConfig.pages.puppies)}#${certificationId}`
                      }))
                  }
                : {}),
            ...(puppy.interestFormUrl
                ? {
                      subjectOf: {
                          "@type": "WebPage",
                          url: puppy.interestFormUrl,
                          name: `Formulaire d'intérêt pour ${puppy.name}`
                      }
                  }
                : {})
        };
    });

    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "ItemList",
                "@id": itemListId,
                name: "Catalogue des chiots Royal POMSKY présentés sur la page",
                description:
                    "Liste descriptive des chiots présents sur la page chiots disponibles, avec leur statut actuel.",
                numberOfItems: puppies.length,
                itemListElement: puppies.map((puppy, index) => ({
                    "@type": "ListItem",
                    position: index + 1,
                    item: {
                        "@id": toAbsoluteUrl(puppy.url)
                    }
                }))
            },
            ...puppyNodes
        ]
    };
}

export function generateLitterCertificationsSchema(
    certifications: LitterCertificationSchemaInput[]
) {
    return {
        "@context": "https://schema.org",
        "@graph": certifications.map((certification) => {
            const certificationUrl = `${toAbsoluteUrl(siteConfig.pages.puppies)}#${certification.id}`;
            const parentSummary = certification.parents
                .map((parent) => `${parent.role} : ${parent.name} - ${parent.breed} ${parent.generation} - ${parent.pedigree}`)
                .join(" ; ");

            return {
                "@type": "Certification",
                "@id": certificationUrl,
                name: certification.name,
                description: certification.description,
                certificationIdentification: certification.certificationIdentification,
                datePublished: certification.litterBirthDate,
                issuedBy: {
                    "@type": "Organization",
                    name: certification.issuer
                },
                image: {
                    "@type": "ImageObject",
                    url: toAbsoluteUrl(certification.imageSrc),
                    caption: certification.name
                },
                about: {
                    "@type": "Thing",
                    name: `Portée ${certification.parents.map((parent) => parent.name).join(" et ")} née le ${certification.litterBirthDate}`,
                    additionalProperty: [
                        toAdditionalProperty("Élevage", certification.breeder),
                        toAdditionalProperty("Date de naissance de la portée", certification.litterBirthDate),
                        toAdditionalProperty("Numéro de déclaration", certification.certificationIdentification),
                        toAdditionalProperty("Parents", parentSummary),
                        toAdditionalProperty("Chiots de la portée", certification.puppyNames.join(", "))
                    ].filter(Boolean)
                },
                subjectOf: {
                    "@type": "WebPage",
                    "@id": `${toAbsoluteUrl(siteConfig.pages.puppies)}#webpage`
                }
            };
        })
    };
}

export function generateStructuredDataGraph(schemas: Array<Record<string, unknown> | null>) {
    const graph = schemas.flatMap((schema) => {
        if (!schema) return [];

        if (Array.isArray(schema["@graph"])) {
            return schema["@graph"] as Record<string, unknown>[];
        }

        const node = { ...schema };
        delete node["@context"];
        return [node];
    });

    return {
        "@context": "https://schema.org",
        "@graph": graph
    };
}

export function generateFutureLittersSchema(litters: FutureLitterSchemaInput[]) {
    const itemListId = `${toAbsoluteUrl(siteConfig.pages.puppies)}#future-litters`;

    return {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "@id": itemListId,
        name: "Futures portées Royal POMSKY",
        description:
            "Portées à venir ou en cours de suivi présentées sur la page chiots disponibles.",
        numberOfItems: litters.length,
        itemListElement: litters.map((litter, index) => {
            const details = [
                litter.description,
                `Parents : ${litter.parents}`,
                litter.generation ? `Génération : ${litter.generation}` : null,
                `Étape du projet : ${litter.stage}`,
                litter.expectedBirthWindow
                    ? `Fenêtre de naissance attendue : ${litter.expectedBirthWindow}`
                    : null,
                litter.observedCount
                    ? `Observation vétérinaire : ${litter.observedCount}`
                    : null
            ].filter(Boolean).join(" ");

            return {
                "@type": "ListItem",
                position: index + 1,
                item: {
                    "@type": "Thing",
                    "@id": toAbsoluteUrl(litter.url),
                    name: litter.name,
                    description: details,
                    url: toAbsoluteUrl(litter.url),
                    ...(litter.image ? { image: toAbsoluteUrl(litter.image) } : {})
                }
            };
        })
    };
}

export function generateBreadcrumbSchema(
    breadcrumbs: Array<{ name: string; url: string }>,
    pageUrl?: string
) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        ...(pageUrl ? { "@id": `${toAbsoluteUrl(pageUrl)}#breadcrumb` } : {}),
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
