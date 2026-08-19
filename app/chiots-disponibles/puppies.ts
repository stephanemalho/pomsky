export type PuppyImage = {
    src: string;
    thumbSrc?: string;
    sourceSrc?: string;
    avifSrc?: string;
    jpegSrc?: string;
    pngSrc?: string;
    alt: string;
};

export type Puppy = {
    name: string;
    coat: string;
    color: string;
    sexe: string;
    weight: string;
    parents: string;
    readyDate: string;
    age: string;
    size: string;
    ruler: string;
    description: string;
    health?: string[];
    highlights: string[];
    images: PuppyImage[];
    linkTo: string;
    isReserved?: boolean;
    isAdopted?: boolean;
    price?: number;
    priceLabel?: string;
    priceCurrency?: string;
    priceIncludes?: string;
    priceValidUntil?: string;
    birthDate?: string;
    availableFrom?: string;
    updatedAt?: string;
    pedigree?: string;
};

export type LitterCertification = {
    id: string;
    parentLabel: string;
    name: string;
    description: string;
    imageSrc: string;
    issuer: string;
    breeder: string;
    certificationIdentification: string;
    litterBirthDate: string;
    puppyNames: string[];
    parents: Array<{
        role: "Père" | "Mère";
        name: string;
        breed: string;
        generation: string;
        pedigree: string;
    }>;
};

const formUrls = {
    charmBeauty: "https://forms.gle/vk4BX8T1ifDXug8TA",
    skySally: "https://forms.gle/av3Tv3bbZ6T8ZF4Z7",
    inuitMogu: "https://forms.gle/7a9kRVTysftzNGwS7",
    charmAlou: "https://forms.gle/7o7g6MptyDDkP611A",
    pweekCharm: "https://forms.gle/DJCcN9iHtUSCAhZE7"
};

const defaultHealth = ["Suivi vétérinaire en cours"];

function puppyImages(
    name: string,
    files: string[],
    metadataFormat: "jpeg" | "png" = "jpeg"
): PuppyImage[] {
    return files.map((file, index) => {
        const hasAgeVariants = /-[67]semaines?\.webp$/.test(file);
        const hasDirectoryFormatVariants = file.includes("/webp/");

        return {
            src: `pages/puppies/${file}`,
            thumbSrc: `pages/puppies/${file.replace(".webp", "-sm.webp")}`,
            sourceSrc: `pages/puppies/${file}`,
            avifSrc: hasAgeVariants
                ? `pages/puppies/${file.replace(".webp", ".avif")}`
                : hasDirectoryFormatVariants
                  ? `pages/puppies/${file.replace("/webp/", "/avif/").replace(".webp", ".avif")}`
                  : undefined,
            jpegSrc: hasAgeVariants
                ? `pages/puppies/${file.replace(".webp", ".jpeg")}`
                : hasDirectoryFormatVariants
                  ? `pages/puppies/${file.replace("/webp/", "/jpeg/").replace(".webp", ".jpeg")}`
                  : undefined,
            pngSrc:
                metadataFormat === "png"
                    ? hasAgeVariants
                        ? `pages/puppies/${file.replace(".webp", ".png")}`
                        : hasDirectoryFormatVariants
                          ? `pages/puppies/${file.replace("/webp/", "/png/").replace(".webp", ".png")}`
                          : undefined
                    : undefined,
            alt: `${name}, chiot Pomsky Royal POMSKY - photo ${index + 1}`
        };
    });
}

export const litterCertifications: LitterCertification[] = [
    {
        id: "declaration-portee-charm-beauty",
        parentLabel: "Parents : CHARM & BEAUTY",
        name: "Déclaration de portée FFP Charm et Beauty",
        description:
            "Déclaration de portée établie par la Fédération Française du Pomsky pour la portée Charm et Beauty née le 24 avril 2026.",
        imageSrc:
            "/pages/puppies/fiche-administrative-mariage-pomsky-f4-et-pomsky-f3.webp",
        issuer: "Fédération Française du Pomsky",
        breeder: "Élevage Royal Pomsky",
        certificationIdentification: "DP FFP 2026.080-083",
        litterBirthDate: "2026-04-24",
        puppyNames: ["SANO", "KIRO", "NAYA", "LUMA"],
        parents: [
            {
                role: "Père",
                name: "Paramount Pomsky Charm",
                breed: "Pomsky",
                generation: "F3",
                pedigree: "CE FFP 2025.059"
            },
            {
                role: "Mère",
                name: "Royal Pomsky Beauty",
                breed: "Pomsky",
                generation: "F4",
                pedigree: "CG FFP 2025.159"
            }
        ]
    },
    {
        id: "declaration-portee-sky-sally",
        parentLabel: "Parents : SKY & SALLY",
        name: "Fiche administrative Sky et Sally",
        description:
            "Fiche administrative de la portée Sky et Sally née le 28 avril 2026, consultable pour les familles intéressées par cette portée.",
        imageSrc: "/pages/puppies/fiche-administrative-sky-et-sally.webp",
        issuer: "Fédération Française du Pomsky",
        breeder: "Élevage Royal Pomsky",
        certificationIdentification: "Fiche administrative Sky et Sally",
        litterBirthDate: "2026-04-28",
        puppyNames: [
            "AÏKA",
            "BALTO",
            "LOUP",
            "LUNA",
            "LUMA",
            "MIYU",
            "ORION",
            "SORA"
        ],
        parents: [
            {
                role: "Père",
                name: "Sky",
                breed: "Pomsky",
                generation: "F3",
                pedigree: "Pédigrée FFP"
            },
            {
                role: "Mère",
                name: "Sally",
                breed: "Pomsky",
                generation: "Miniature",
                pedigree: "Pédigrée FFP"
            }
        ]
    },
    {
        id: "declaration-portee-inuit-mogu",
        parentLabel: "Parents : INUIT & MOGU",
        name: "Fiche administrative Inuit et Mogu",
        description:
            "Fiche administrative de la portée Inuit et Mogu née le 27 avril 2026, présentée avec les chiots de cette portée.",
        imageSrc:
            "/pages/puppies/fiche-administrative-mariage-inuit-et-mogu.webp",
        issuer: "Fédération Française du Pomsky",
        breeder: "Élevage Royal Pomsky",
        certificationIdentification: "Fiche administrative Inuit et Mogu",
        litterBirthDate: "2026-04-27",
        puppyNames: ["BAÏKAL", "INUIT", "KIT", "STAR"],
        parents: [
            {
                role: "Père",
                name: "Inuit",
                breed: "Pomsky",
                generation: "F5",
                pedigree: "Pédigrée FFP"
            },
            {
                role: "Mère",
                name: "Mogu",
                breed: "Pomsky",
                generation: "F4",
                pedigree: "Pédigrée FFP"
            }
        ]
    },
    {
        id: "declaration-portee-charm-alou",
        parentLabel: "Parents : CHARM & ALOU",
        name: "Fiche administrative Charm et Alou",
        description:
            "Fiche administrative de la portée Charm et Alou née le 30 avril 2026, consultable depuis les fiches des chiots concernés.",
        imageSrc: "/pages/puppies/fiche-administrative-charm-et-alou.webp",
        issuer: "Fédération Française du Pomsky",
        breeder: "Élevage Royal Pomsky",
        certificationIdentification: "Fiche administrative Charm et Alou",
        litterBirthDate: "2026-04-30",
        puppyNames: ["AMAROK", "ALASKA", "INUK", "ALOU JUNIOR"],
        parents: [
            {
                role: "Père",
                name: "Paramount Pomsky Charm",
                breed: "Pomsky",
                generation: "F3",
                pedigree: "CE FFP 2025.059"
            },
            {
                role: "Mère",
                name: "Alou",
                breed: "Pomsky",
                generation: "F3",
                pedigree: "Pédigrée FFP"
            }
        ]
    },
    {
        id: "declaration-portee-pweek-charm",
        parentLabel: "Parents : PWEEK & CHARM",
        name: "Fiche administrative Pweek et Charm",
        description:
            "Fiche administrative de la portée Pweek et Charm, consultable depuis les fiches des chiots concernés.",
        imageSrc:
            "/pages/puppies/fiche-administrative-mariage-pweek-et-charm.webp",
        issuer: "Fédération Française du Pomsky",
        breeder: "Élevage Royal Pomsky",
        certificationIdentification: "Fiche administrative Pweek et Charm",
        litterBirthDate: "2026-05-09",
        puppyNames: ["AMBRE", "RÉMUS", "LOKI", "BELLATRIX", "ARCANA"],
        parents: [
            {
                role: "Père",
                name: "Paramount Pomsky Charm",
                breed: "Pomsky",
                generation: "F3",
                pedigree: "CE FFP 2025.059"
            },
            {
                role: "Mère",
                name: "Pweek",
                breed: "Pomsky",
                generation: "F3",
                pedigree: "Pédigrée FFP"
            }
        ]
    }
];

const puppiesUnsorted: Puppy[] = [
    {
        name: "AKI BLUE",
        coat: "Pomsky F4+ (ADN Poméranian / Husky)",
        color: "Bleu",
        sexe: "Mâle",
        size: "Toy",
        ruler: "Pelage fluffy",
        weight: "4-5 kg adulte",
        parents: "Parents : WILLOW & BANDIT",
        readyDate: "Disponible à la réservation",
        age: "Né le [date à préciser]",
        description:
            "Aki Blue est un mâle Pomsky F4+ issu de Willow et Bandit. Il présente des yeux gris particolor bleu, un pelage fluffy et une couleur bleu distinctive. Format Toy.",
        highlights: [
            "Mâle",
            "Yeux gris particolor bleu",
            "Pelage fluffy",
            "Couleur bleue",
            "Taille Toy"
        ],
        health: defaultHealth,
        images: puppyImages("AKI BLUE", [
            "pomsky-male-aki/webp/pomsky-male-aki-1.webp",
            "pomsky-male-aki/webp/pomsky-male-aki-2.webp",
            "pomsky-male-aki/webp/pomsky-male-aki-3.webp",
            "pomsky-male-aki/webp/pomsky-male-aki-4.webp",
            "pomsky-male-aki/webp/pomsky-male-aki-5.webp"
        ]),
        linkTo: formUrls.pweekCharm
    },
    {
        name: "SKY BLUE",
        coat: "Pomsky F4+ (ADN Poméranian / Husky)",
        color: "Bleu",
        sexe: "Mâle",
        size: "Toy - Micro",
        ruler: "Pelage fluffy",
        weight: "3 kg adulte",
        parents: "Parents : WILLOW & BANDIT",
        readyDate: "Disponible à la réservation",
        age: "Né le [date à préciser]",
        description:
            "Sky Blue est un mâle Pomsky F4+ issu de Willow et Bandit. Il présente des yeux gris, un pelage fluffy et une couleur bleu. Format Toy-micro.",
        highlights: [
            "Mâle",
            "Yeux gris",
            "Pelage fluffy",
            "Couleur bleue",
            "Taille Toy-micro"
        ],
        health: defaultHealth,
        images: puppyImages("SKY BLUE", [
            "pomsky-fluffly-sky/webp/pomsky-fluffly-sky-1.webp",
            "pomsky-fluffly-sky/webp/pomsky-fluffly-sky-2.webp",
            "pomsky-fluffly-sky/webp/pomsky-fluffly-sky-3.webp",
            "pomsky-fluffly-sky/webp/pomsky-fluffly-sky-4.webp",
            "pomsky-fluffly-sky/webp/pomsky-fluffly-sky-5.webp"
        ]),
        linkTo: formUrls.pweekCharm
    },
    {
        name: "KOA BLUE",
        coat: "Pomsky F4+ (ADN Poméranian / Husky)",
        color: "Bleu",
        sexe: "Femelle",
        size: "Toy",
        ruler: "Pelage fluffy",
        weight: "5 kg adulte",
        parents: "Parents : WILLOW & BANDIT",
        readyDate: "Réservé",
        age: "Né le [date à préciser]",
        description:
            "Koa Blue est une femelle Pomsky F4+ issue de Willow et Bandit. Elle présente des yeux bleus, un pelage fluffy et une couleur bleu. Format Toy. RÉSERVÉE.",
        highlights: [
            "Femelle",
            "Yeux bleus",
            "Pelage fluffy",
            "Couleur bleue",
            "Taille Toy"
        ],
        health: defaultHealth,
        images: puppyImages("KOA BLUE", [
            "pomsky-femelle-koa/webp/pomsky-femelle-koa-1.webp",
            "pomsky-femelle-koa/webp/pomsky-femelle-koa-2.webp"
        ]),
        isReserved: true,
        linkTo: formUrls.pweekCharm
    },
    {
        name: "LOUP",
        coat: "Pomsky F4+ (ADN Poméranian / Husky)",
        color: "Noir et blanc",
        sexe: "Mâle",
        size: "Miniature",
        ruler: "Pelage fluffy",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : SKY & SALLY",
        readyDate: "Disponible à la réservation",
        age: "Né le 28 avril 2026",
        description:
            "Loup est un mâle Pomsky F4+ né le 28 avril 2026, issu de Sky et Sally. Il présente des yeux bleus, un pelage fluffy et un format miniature.",
        highlights: ["Mâle", "Yeux bleus", "Pelage fluffy", "Taille miniature"],
        health: defaultHealth,
        images: puppyImages(
            "LOUP",
            [
                "pomsky-noir-blanc-loup/webp/pomsky-noir-et-blanc-yeux-bleu-loup-2.webp",
                "pomsky-noir-blanc-loup/webp/pomsky-noir-et-blanc-loup.webp",
                "pomsky-noir-blanc-loup/webp/pomsky-noir-et-blanc-yeux-bleu-loup.webp",
                "pomsky-noir-blanc-loup/webp/pomsky-noir-et-blanc-yeux-bleu-loup-3.webp"
            ],
            "png"
        ),
        price: 3200,
        priceCurrency: "EUR",
        linkTo: formUrls.skySally
    }
];

function getLitterBirthDateForPuppy(puppy: Puppy) {
    return (
        litterCertifications.find(
            (certification) => certification.parentLabel === puppy.parents
        )?.litterBirthDate ?? "9999-12-31"
    );
}

export const puppies: Puppy[] = [...puppiesUnsorted].sort((a, b) =>
    getLitterBirthDateForPuppy(a).localeCompare(getLitterBirthDateForPuppy(b))
);
