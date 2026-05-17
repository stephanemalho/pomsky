export type PuppyParentProfile = {
    role: "Mère" | "Père";
    name: string;
    image: string;
    description: string;
    href: string;
};

function getReproductorAnchorId(name: string) {
    return name.replace(/['"]/g, "").trim().toLowerCase().replace(/\s+/g, "-");
}

export const puppyParentProfilesByLabel: Record<string, PuppyParentProfile[]> = {
    "Parents : CHARM & BEAUTY": [
        {
            role: "Mère",
            name: "Beauty",
            image: "/BEAUTY-pomsky-miniature-f4.webp",
            description: "Femelle Pomsky F4",
            href: `/femelles-reproductrices#${getReproductorAnchorId("BEAUTY")}`,
        },
        {
            role: "Père",
            name: "Charm",
            image: "/pages/reproducteurs/CHARM-pomsky-toy-f3.webp",
            description: "Mâle Pomsky F3",
            href: `/femelles-reproductrices#${getReproductorAnchorId("CHARM")}`,
        },
    ],
    "Parents : SKY & SALLY": [
        {
            role: "Mère",
            name: "Sally",
            image: "/SALLY-pomsky-miniature.webp",
            description: "Femelle Pomsky Miniature",
            href: `/femelles-reproductrices#${getReproductorAnchorId("SALLY")}`,
        },
        {
            role: "Père",
            name: "Sky",
            image: "/SKY-pomsky-miniature-f3.webp",
            description: "Mâle Pomsky F3",
            href: `/femelles-reproductrices#${getReproductorAnchorId("SKY")}`,
        },
    ],
    "Parents : INUIT & MOGU": [
        {
            role: "Mère",
            name: "Mogu",
            image: "/MOGU-pomsky-miniature-f4.webp",
            description: "Femelle Pomsky F4",
            href: `/femelles-reproductrices#${getReproductorAnchorId("MOGU")}`,
        },
        {
            role: "Père",
            name: "Inuit",
            image: "/INUIT-pomsky-toy-f5.webp",
            description: "Mâle Pomsky F5",
            href: `/femelles-reproductrices#${getReproductorAnchorId("INUIT")}`,
        },
    ],
    "Parents : CHARM & ALOU": [
        {
            role: "Mère",
            name: "Alou",
            image: "/ALOU-pomsky-toy-f3.webp",
            description: "Femelle Pomsky F3",
            href: `/femelles-reproductrices#${getReproductorAnchorId("ALOU")}`,
        },
        {
            role: "Père",
            name: "Charm",
            image: "/pages/reproducteurs/CHARM-pomsky-toy-f3.webp",
            description: "Mâle Pomsky F3",
            href: `/femelles-reproductrices#${getReproductorAnchorId("CHARM")}`,
        },
    ],
    "Parents : PWEEK & CHARM": [
        {
            role: "Mère",
            name: "Pweek",
            image: "/PWEEK-pomsky-toy-f3.webp",
            description: "Femelle Pomsky F3",
            href: `/femelles-reproductrices#${getReproductorAnchorId("PWEEK")}`,
        },
        {
            role: "Père",
            name: "Charm",
            image: "/pages/reproducteurs/CHARM-pomsky-toy-f3.webp",
            description: "Mâle Pomsky F3",
            href: `/femelles-reproductrices#${getReproductorAnchorId("CHARM")}`,
        },
    ],
};

export function getPuppyParentProfiles(parentLabel: string) {
    return puppyParentProfilesByLabel[parentLabel] ?? [];
}
