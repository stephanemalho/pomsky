export type PuppyImage = {
    src: string;
    thumbSrc?: string;
    sourceSrc?: string;
    avifSrc?: string;
    jpegSrc?: string;
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

function puppyImages(name: string, files: string[]): PuppyImage[] {
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
        name: "STAR",
        coat: "Pomsky F4+ (ADN Poméranian / Husky)",
        color: "Noire et blanche",
        sexe: "Femelle",
        size: "Toy ou miniature",
        ruler: "Pelage fluffy",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : INUIT & MOGU",
        readyDate: "Disponible à la réservation",
        age: "Née le 27 avril 2026",
        description:
            "Star est une femelle Pomsky issue de la portée Inuit et Mogu, née le 27 avril 2026. Elle présente des yeux noirs, un pelage fluffy et un format attendu toy ou miniature.",
        highlights: [
            "Femelle",
            "Yeux noirs",
            "Pelage fluffy",
            "Format toy ou miniature"
        ],
        health: defaultHealth,
        images: puppyImages("STAR", [
            "pomsky-noir-blanc-star/webp/pomsky-noir-blanc-star-1.webp",
            "pomsky-toy-femelle-star-1-7semaine.webp",
            "pomsky-toy-femelle-star-2-7semaine.webp",
            "pomsky-toy-femelle-star-1-6semaine.webp"
        ]),
        linkTo: formUrls.inuitMogu,
    },
    {
        name: "AMAROK",
        coat: "Pomsky F4+ (ADN Poméranian / Husky)",
        color: "Noir et blanc",
        sexe: "Mâle",
        size: "Toy",
        ruler: "Pelage polaire husky",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : CHARM & ALOU",
        readyDate: "Disponible à la réservation",
        age: "Né le 30 avril 2026",
        description:
            "Amarok est un mâle Pomsky noir et blanc né le 30 avril 2026, issu de la portée Charm et Alou. Il présente des yeux bleus, un pelage polaire husky et un format toy.",
        highlights: [
            "Mâle",
            "Yeux bleus",
            "Pelage polaire husky",
            "Taille toy"
        ],
        health: defaultHealth,
        images: puppyImages("AMAROK", [
            "pomsky-noir-blanc-amarok/webp/pomsky-noir-blanc-amarok-1.webp",
            "pomsky-toy-amarok-1-7semaine.webp",
            "pomsky-toy-amarok-2-7semaine.webp",
            "pomsky-toy-amarok-1-6semaine.webp",
            "pomsky-toy-amarok-2-6semaine.webp"
        ]),
        linkTo: formUrls.charmAlou
    },
    {
        name: "AMBRE",
        coat: "Pomsky F4+ (ADN Poméranian / Husky)",
        color: "Chocolat et blanche",
        sexe: "Femelle",
        size: "Micro / Toy",
        ruler: "Pelage fluffy",
        weight: "2,5 à 4 kg adulte estimé",
        parents: "Parents : PWEEK & CHARM",
        readyDate: "Réservé",
        age: "Portée Pweek et Charm",
        description:
            "Ambre est une femelle Pomsky chocolat et blanche issue de la portée Pweek et Charm. De format micro à toy, elle est estimée entre 2,5 et 4 kg adulte. Ses yeux bleus lumineux et son pelage fluffy très dense lui confèrent un charme visuel irrésistible. Un profil rare alliant douceur de robe et format ultra-compact.",
        highlights: [
            "Femelle",
            "Yeux bleus",
            "Pelage fluffy",
            "Micro / Toy (2,5–4 kg adulte)"
        ],
        health: defaultHealth,
        images: puppyImages("AMBRE", [
            "pomsky-fauve-blanc-ambre/webp/pomsky-fauve-blanc-ambre-1.webp",
            "ambre-pomsky-marron-1-7semaine.webp",
            "ambre-pomsky-marron-2-7semaine.webp",
            "ambre-pomsky-marron-1-6semaine.webp"
        ]),
        linkTo: formUrls.pweekCharm
    },
    {
        name: "RÉMUS",
        coat: "Pomsky F4+ (ADN Poméranian / Husky)",
        color: "Gris et blanc",
        sexe: "Mâle",
        size: "Micro / Toy",
        ruler: "Pelage polaire",
        weight: "2,5 à 4 kg adulte estimé",
        parents: "Parents : PWEEK & CHARM",
        readyDate: "Disponible à la réservation",
        age: "Portée Pweek et Charm",
        description:
            "Rémus est un mâle Pomsky gris et blanc issu de la portée Pweek et Charm. De format micro à toy, il est estimé entre 2,5 et 4 kg adulte. Il présente des yeux bruns expressifs et un pelage polaire dense qui renforce son type nordique. Un mâle compact et équilibré, au caractère attendu vif et affectueux.",
        highlights: [
            "Mâle",
            "Yeux bruns",
            "Pelage polaire",
            "Micro / Toy (2,5–4 kg adulte)"
        ],
        health: defaultHealth,
        images: puppyImages("RÉMUS", [
            "pomsky-gris-blanc-remus/webp/pomsky-gris-blanc-remus-1.webp",
            "remus-pomsky-1-7semaine.webp",
            "remus-pomsky-2-7semaine.webp",
            "remus-pomsky-1-6semaine.webp"
        ]),
        linkTo: formUrls.pweekCharm
    },
    {
        name: "BELLATRIX",
        coat: "Pomsky F4+ (ADN Poméranian / Husky)",
        color: "Noire et blanche",
        sexe: "Femelle",
        size: "Micro / Toy",
        ruler: "Pelage polaire",
        weight: "2,5 à 4 kg adulte estimé",
        parents: "Parents : PWEEK & CHARM",
        readyDate: "Disponible à la réservation",
        age: "Portée Pweek et Charm",
        description:
            "Bellatrix est une femelle Pomsky noire et blanche issue de la portée Pweek et Charm. De format micro à toy, elle est estimée entre 2,5 et 4 kg adulte. Son pelage polaire dense et ses yeux bruns lui confèrent une allure nordique élégante. Un profil équilibré et distinctif dans cette portée.",
        highlights: [
            "Femelle",
            "Yeux bruns",
            "Pelage polaire",
            "Micro / Toy (2,5–4 kg adulte)"
        ],
        health: defaultHealth,
        images: puppyImages("BELLATRIX", [
            "pomsky-noir-blanc-bella/webp/pomsky-noir-blanc-bella-1.webp",
            "bellatrix-pomsky-1-7semaine.webp",
            "bellatrix-pomsky-2-7semaine.webp",
            "bellatrix-pomsky-1-6semaine.webp"
        ]),
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
        images: puppyImages("LOUP", [
            "pomsky-noir-blanc-loup/webp/pomsky-noir-et-blanc-loup.webp",
            "pomsky-noir-blanc-loup/webp/pomsky-noir-et-blanc-yeux-bleu-loup.webp",
            "pomsky-noir-blanc-loup/webp/pomsky-noir-et-blanc-yeux-bleu-loup-2.webp",
            "pomsky-noir-blanc-loup/webp/pomsky-noir-et-blanc-yeux-bleu-loup-3.webp"
        ]),
        linkTo: formUrls.skySally
    },
    {
        name: "LUNA",
        coat: "Pomsky F4+ (ADN Poméranian / Husky)",
        color: "Noire et blanche",
        sexe: "Femelle",
        size: "Miniature",
        ruler: "Pelage fluffy",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : SKY & SALLY",
        readyDate: "Disponible à la réservation",
        age: "Née le 28 avril 2026",
        description:
            "Luna est une femelle Pomsky F4+ née le 28 avril 2026, issue de Sky et Sally. Elle présente des yeux bleus, un pelage fluffy et un format miniature.",
        highlights: [
            "Femelle",
            "Yeux bleus",
            "Pelage fluffy",
            "Taille miniature"
        ],
        health: defaultHealth,
        images: puppyImages("LUNA", [
            "pomsky-femelle-grise-blanche-luna/webp/pomsky-femelle-grise-blanche-luna-1.webp",
            "pomsky-femelle-grise-blanche-luna/webp/pomsky-femelle-grise-blanche-luna-2.webp",
            "pomsky-femelle-luna-1-7semaine.webp",
            "pomsky-femelle-luna-2-7semaine.webp"
        ]),
        linkTo: formUrls.skySally
    },
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
