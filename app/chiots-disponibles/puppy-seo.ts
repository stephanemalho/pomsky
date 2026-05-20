import { siteConfig } from "@/lib/seo-config";
import { type Puppy } from "./puppies";

export function formatPuppyPrice(price: number, currency = "EUR") {
    return new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency,
        maximumFractionDigits: 0,
    }).format(price);
}

export function getPuppySlug(name: string) {
    return name
        .trim()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

export function getPuppyUrl(puppy: Puppy) {
    return `/chiots-disponibles/${getPuppySlug(puppy.name)}`;
}

export function getAbsolutePuppyUrl(puppy: Puppy) {
    return `${siteConfig.siteUrl}${getPuppyUrl(puppy)}`;
}

export function getPuppyImageSrc(src: string) {
    return src.startsWith("/") ? src : `/${src}`;
}

export function getPuppyDisplayImageSrc(src: string) {
    return getPuppyImageSrc(src);
}

export function getPuppyStatus(puppy: Puppy) {
    if (puppy.isAdopted) return "adopted";
    if (puppy.isReserved) return "reserved";
    return "available";
}

export function getPuppyStatusLabel(puppy: Puppy) {
    const status = getPuppyStatus(puppy);

    if (status === "available") return "Disponible";
    if (status === "adopted") return puppy.sexe.toLowerCase().includes("femelle") ? "Adoptée" : "Adopté";

    return puppy.sexe.toLowerCase().includes("femelle") ? "Réservée" : "Réservé";
}

export function getPuppySchemaAvailability(puppy: Puppy) {
    return getPuppyStatus(puppy) === "available"
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock";
}

export function getPuppySeoDescription(puppy: Puppy) {
    const price = typeof puppy.price === "number"
        ? ` Prix : ${formatPuppyPrice(puppy.price, puppy.priceCurrency ?? "EUR")}.`
        : puppy.priceLabel
            ? ` Prix : ${puppy.priceLabel}.`
            : "";

    return `${puppy.name}, chiot Pomsky ${puppy.color.toLowerCase()} ${puppy.sexe.toLowerCase()} de l'élevage Royal POMSKY. ${puppy.description}${price}`;
}

export function getPuppyLastModified(puppy: Puppy) {
    return puppy.updatedAt ?? puppy.availableFrom ?? puppy.birthDate;
}

export function buildPuppyProductStructuredData(puppy: Puppy) {
    const url = getAbsolutePuppyUrl(puppy);
    const statusLabel = getPuppyStatusLabel(puppy);
    const images = puppy.images.map((image) => `${siteConfig.siteUrl}${getPuppyImageSrc(image.src)}`);

    if (typeof puppy.price !== "number") {
        return {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": `${url}#webpage`,
            name: `${puppy.name} - chiot Pomsky ${puppy.color}`,
            description: puppy.description,
            url,
            primaryImageOfPage: images[0],
            mainEntity: {
                "@type": "Thing",
                "@id": `${url}#puppy`,
                name: `${puppy.name} - chiot Pomsky ${puppy.color}`,
                description: puppy.description,
                image: images,
                category: "Chiot Pomsky",
                additionalProperty: [
                    { "@type": "PropertyValue", name: "Race", value: "Pomsky" },
                    { "@type": "PropertyValue", name: "Génération", value: puppy.coat },
                    { "@type": "PropertyValue", name: "Couleur", value: puppy.color },
                    { "@type": "PropertyValue", name: "Sexe", value: puppy.sexe },
                    { "@type": "PropertyValue", name: "Format", value: puppy.size },
                    { "@type": "PropertyValue", name: "Poids adulte estimé", value: puppy.weight },
                    { "@type": "PropertyValue", name: "Parents", value: puppy.parents.replace("Parents : ", "") },
                    { "@type": "PropertyValue", name: "Naissance", value: puppy.age },
                    ...(puppy.birthDate ? [{ "@type": "PropertyValue", name: "Date de naissance", value: puppy.birthDate }] : []),
                    ...(puppy.availableFrom ? [{ "@type": "PropertyValue", name: "Date de disponibilité", value: puppy.availableFrom }] : []),
                    { "@type": "PropertyValue", name: "Pédigrée", value: puppy.pedigree ?? "Fédération Française du Pomsky" },
                    { "@type": "PropertyValue", name: "Statut", value: statusLabel },
                ],
            },
            ...(getPuppyLastModified(puppy) ? { dateModified: getPuppyLastModified(puppy) } : {}),
        };
    }

    const offer = {
        "@type": "Offer",
        url,
        price: puppy.price.toString(),
        priceCurrency: puppy.priceCurrency ?? "EUR",
        availability: getPuppySchemaAvailability(puppy),
        itemCondition: "https://schema.org/NewCondition",
        ...(puppy.availableFrom ? { availabilityStarts: puppy.availableFrom } : {}),
        ...(puppy.priceValidUntil ? { priceValidUntil: puppy.priceValidUntil } : {}),
        shippingDetails: {
            "@type": "OfferShippingDetails",
            shippingDestination: [
                {
                    "@type": "DefinedRegion",
                    addressCountry: "FR",
                },
                {
                    "@type": "DefinedRegion",
                    addressCountry: "CH",
                },
            ],
            doesNotShip: true,
        },
        hasMerchantReturnPolicy: {
            "@type": "MerchantReturnPolicy",
            returnPolicyCategory: "https://schema.org/MerchantReturnNotPermitted",
            applicableCountry: ["FR", "CH"],
            name: "Pas de retour possible pour les animaux vivants",
            description:
                "Les retours ne sont pas possibles pour les animaux vivants, sauf cas particulier étudié avec l'élevage dans l'intérêt du chiot.",
        },
        seller: {
            "@type": "Organization",
            name: siteConfig.name,
            url: siteConfig.siteUrl,
        },
    };

    return {
        "@context": "https://schema.org",
        "@type": "Product",
        "@id": `${url}#product`,
        name: `${puppy.name} - chiot Pomsky ${puppy.color}`,
        description: puppy.description,
        url,
        image: images,
        ...(getPuppyLastModified(puppy) ? { dateModified: getPuppyLastModified(puppy) } : {}),
        sku: `pomsky-${getPuppySlug(puppy.name)}`,
        category: "Chiot Pomsky",
        brand: {
            "@type": "Brand",
            name: "Pomsky",
        },
        manufacturer: {
            "@type": "Organization",
            name: siteConfig.name,
            url: siteConfig.siteUrl,
        },
        additionalProperty: [
            { "@type": "PropertyValue", name: "Race", value: "Pomsky" },
            { "@type": "PropertyValue", name: "Génération", value: puppy.coat },
            { "@type": "PropertyValue", name: "Couleur", value: puppy.color },
            { "@type": "PropertyValue", name: "Sexe", value: puppy.sexe },
            { "@type": "PropertyValue", name: "Format", value: puppy.size },
            { "@type": "PropertyValue", name: "Poids adulte estimé", value: puppy.weight },
            { "@type": "PropertyValue", name: "Parents", value: puppy.parents.replace("Parents : ", "") },
            { "@type": "PropertyValue", name: "Naissance", value: puppy.age },
            ...(puppy.birthDate ? [{ "@type": "PropertyValue", name: "Date de naissance", value: puppy.birthDate }] : []),
            ...(puppy.availableFrom ? [{ "@type": "PropertyValue", name: "Date de disponibilité", value: puppy.availableFrom }] : []),
            { "@type": "PropertyValue", name: "Pédigrée", value: puppy.pedigree ?? "Fédération Française du Pomsky" },
            { "@type": "PropertyValue", name: "Statut", value: statusLabel },
        ],
        offers: offer,
    };
}

export function buildPuppyItemListStructuredData(puppies: Puppy[]) {
    return {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "@id": `${siteConfig.siteUrl}/chiots-disponibles#puppy-list`,
        name: "Chiots Pomsky disponibles à l'adoption",
        description: "Liste des chiots Pomsky disponibles ou réservés à l'élevage Royal POMSKY.",
        numberOfItems: puppies.length,
        itemListElement: puppies.map((puppy, index) => ({
            "@type": "ListItem",
            position: index + 1,
            url: getAbsolutePuppyUrl(puppy),
            name: `${puppy.name} - chiot Pomsky`,
        })),
    };
}
