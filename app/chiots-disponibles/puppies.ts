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
        name: "BAÏKAL",
        coat: "Pomsky F4+ (ADN Poméranian / Husky)",
        color: "Noire et blanche",
        sexe: "Femelle",
        size: "Toy",
        ruler: "Pelage fluffy",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : INUIT & MOGU",
        readyDate: "Réservée",
        age: "Née le 27 avril 2026",
        description:
            "Baïkal est une femelle Pomsky noire et blanche issue de la portée Inuit et Mogu, née le 27 avril 2026. Elle présente des yeux bleus, un pelage fluffy et un format toy, avec un statut réservé.",
        highlights: [
            "Femelle",
            "Yeux bleus",
            "Pelage fluffy",
            "Taille toy",
            "Réservée"
        ],
        health: defaultHealth,
        images: puppyImages("BAÏKAL", [
            "pomsky-noir-blanc-baikal/webp/pomsky-noir-blanc-baikal-1.webp",
            "pomsky-toy-baikal-1-7semaines.webp",
            "pomsky-toy-baikal-1-6semaines.webp"
        ]),
        linkTo: formUrls.inuitMogu,
        isReserved: true
    },
    {
        name: "INUIT",
        coat: "Pomsky F4+ (ADN Poméranian / Husky)",
        color: "Noir et blanc",
        sexe: "Mâle",
        size: "Miniature",
        ruler: "Pelage fluffy",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : INUIT & MOGU",
        readyDate: "Réservée",
        age: "Né le 27 avril 2026",
        description:
            "Inuit est un mâle Pomsky noir et blanc né le 27 avril 2026. Il présente des yeux noirs, un pelage fluffy et un gabarit estimé miniature, avec une évolution suivie régulièrement à l'élevage.",
        highlights: ["Mâle", "Yeux noirs", "Pelage fluffy", "Taille miniature"],
        health: defaultHealth,
        images: puppyImages("INUIT", [
            "pomsky-mini-inuit-2-7semaine.webp",
            "pomsky-mini-inuit-1-6semaine.webp",
            "pomsky-mini-inuit-2-6semaine.webp"
        ]),
        linkTo: formUrls.inuitMogu,
        isReserved: true
    },
    {
        name: "KIT",
        coat: "Pomsky F4+ (ADN Poméranian / Husky)",
        color: "Noire et blanche",
        sexe: "Femelle",
        size: "Toy",
        ruler: "Pelage fluffy",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : INUIT & MOGU",
        readyDate: "Disponible à la réservation",
        age: "Née le 27 avril 2026",
        description:
            "Kit est une femelle Pomsky toy noire et blanche, née le 27 avril 2026 du mariage Inuit et Mogu. Elle possède un masque husky marqué, un pelage fluffy et des yeux noirs, avec un type recherché dans un petit format.",
        highlights: ["Femelle", "Format toy", "Pelage fluffy", "Yeux noirs"],
        health: defaultHealth,
        images: puppyImages("KIT", [
            "pomsky-noir-blanc-kit/webp/pomsky-noir-blanc-kit-1.webp",
            "pomsky-femelle-kit-1-7semaine.webp",
            "pomsky-femelle-kit-1-6semaine.webp"
        ]),
        linkTo: formUrls.inuitMogu,
        isReserved: true
    },
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
        name: "ALASKA",
        coat: "Pomsky F4+ (ADN Poméranian / Husky)",
        color: "Blanche polaire pinto avec quelques taches noires",
        sexe: "Femelle",
        size: "Toy",
        ruler: "Pelage polaire husky",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : CHARM & ALOU",
        readyDate: "Disponible à la réservation",
        age: "Née le 30 avril 2026",
        description:
            "Alaska est une femelle Pomsky blanche polaire pinto, avec quelques taches noires, née le 30 avril 2026. Elle présente des yeux bleus, un pelage polaire husky et un format toy.",
        highlights: [
            "Femelle",
            "Yeux bleus",
            "Pelage polaire husky",
            "Taille toy"
        ],
        health: defaultHealth,
        images: puppyImages("ALASKA", [
            "pomsky-blanc-yeux-bleu-alaska/webp/pomsky-blanc-yeux-bleu-alaska-1.webp",
            "pomsky-toy-alaska-1-7semaine.webp",
            "pomsky-toy-alaska-2-7semaine.webp",
            "pomsky-toy-alaska-1-6semaine.webp",
            "pomsky-toy-alaska-2-6semaine.webp"
        ]),
        linkTo: formUrls.charmAlou,
        isReserved: true
    },
    {
        name: "INUK",
        coat: "Pomsky F4+ (ADN Poméranian / Husky)",
        color: "Couleur husky marquée",
        sexe: "Mâle",
        size: "Toy",
        ruler: "Pelage standard polaire",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : CHARM & ALOU",
        readyDate: "Disponible à la réservation",
        age: "Né le 30 avril 2026",
        description:
            "Inuk est un mâle Pomsky né le 30 avril 2026, à la couleur husky marquée. Il présente des yeux bleus, un pelage standard polaire et un format toy.",
        highlights: [
            "Mâle",
            "Yeux bleus",
            "Pelage standard polaire",
            "Taille toy"
        ],
        health: defaultHealth,
        images: puppyImages("INUK", [
            "pomsky-noir-blanc-inuk/webp/pomsky-noir-blanc-inuk-2.webp",
            "pomsky-noir-blanc-inuk/webp/pomsky-noir-blanc-inuk-1.webp",
            "pomsky-f4-inuk-1-7semaine.webp",
            "pomsky-f4-inuk-2-7semaine.webp",
            "pomsky-f4-inuk-1-6semaine.webp"
        ]),
        linkTo: formUrls.charmAlou,
        isReserved: true
    },
    {
        name: "ALOU JUNIOR",
        coat: "Pomsky F4+ (ADN Poméranian / Husky)",
        color: "Noire et blanche",
        sexe: "Femelle",
        size: "Toy ou miniature",
        ruler: "Pelage polaire husky",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : CHARM & ALOU",
        readyDate: "Disponible à la réservation",
        age: "Née le 30 avril 2026",
        description:
            "Alou Junior est une femelle Pomsky noire et blanche née le 30 avril 2026. Issue de Charm et Alou, elle présente des yeux bleus, un pelage polaire husky et son statut est réservé.",
        highlights: [
            "Femelle",
            "Yeux bleus",
            "Pelage polaire husky",
            "Réservée"
        ],
        health: defaultHealth,
        images: puppyImages("ALOU JUNIOR", [
            "pomsky-noir-blanc-alou-junior/webp/pomsky-noir-blanc-alou-junior-1.webp",
            "pomsky-femelle-alou-junior-1-7semaine.webp",
            "pomsky-femelle-alou-junior-2-7semaine.webp",
            "pomsky-femelle-alou-junior-1-6semaine.webp",
            "pomsky-femelle-alou-junior-2-6semaine.webp"
        ]),
        linkTo: formUrls.charmAlou,
        isReserved: true
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
        name: "LOKI",
        coat: "Pomsky F4+ (ADN Poméranian / Husky)",
        color: "Noir et blanc",
        sexe: "Mâle",
        size: "Toy estimé",
        ruler: "Pelage en cours d'évolution",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : PWEEK & CHARM",
        readyDate: "Disponible à la réservation",
        age: "Portée Pweek et Charm",
        description:
            "Loki est un mâle Pomsky noir et blanc issu de la portée Pweek et Charm. Son marquage husky et sa taille adulte estimée toy seront confirmés au fil de son développement.",
        highlights: [
            "Mâle",
            "Noir et blanc",
            "Marquage husky",
            "Taille estimée toy"
        ],
        health: defaultHealth,
        images: puppyImages("LOKI", [
            "pomsky-noir-blanc-loki/webp/pomsky-noir-blanc-loki-1.webp"
        ]),
        linkTo: formUrls.pweekCharm,
        isReserved: true
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
        name: "ARCANA",
        coat: "Pomsky F4+ (ADN Poméranian / Husky)",
        color: "Chocolat et blanche",
        sexe: "Femelle",
        size: "Toy",
        ruler: "Pelage fluffy",
        weight: "3 à 5 kg adulte estimé",
        parents: "Parents : PWEEK & CHARM",
        readyDate: "Disponible à la réservation",
        age: "Portée Pweek et Charm",
        description:
            "Arcana est une femelle Pomsky chocolat et blanche issue de la portée Pweek et Charm. De format toy, elle est estimée entre 3 et 5 kg adulte. Ses yeux bleus et son pelage fluffy généreux lui donnent un charme naturel que l'on retrouve dans les plus belles lignées Pomsky. Un type très recherché.",
        highlights: [
            "Femelle",
            "Yeux bleus",
            "Pelage fluffy",
            "Toy (3–5 kg adulte)"
        ],
        health: defaultHealth,
        images: puppyImages("ARCANA", [
            "arkana-pomsky/webp/arkana-pomsky-1.webp"
        ]),
        linkTo: formUrls.pweekCharm,
        isReserved: true
    },
    {
        name: "SANO",
        coat: "Pomsky F4+ (ADN Poméranian / Husky)",
        color: "Noir et blanc",
        sexe: "Mâle",
        size: "Toy ou miniature",
        ruler: "Pelage fluffy",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : CHARM & BEAUTY",
        readyDate: "Disponible à la réservation",
        age: "Né le 24 avril 2026",
        description:
            "Sano est un mâle Pomsky F4+ noir et blanc né le 24 avril 2026, issu de Charm et Beauty. Il présente un pelage fluffy, des yeux bleus et un format attendu toy ou miniature.",
        highlights: [
            "Mâle",
            "Pelage fluffy",
            "Yeux bleus",
            "Format toy ou miniature"
        ],
        health: defaultHealth,
        images: puppyImages("SANO", [
            "pomsky-noir-blanc-sano/webp/pomsky-noir-blanc-sano-1.webp",
            "pomsky-toy-sano-1-6semaine.webp"
        ]),
        linkTo: formUrls.charmBeauty,
        isReserved: true
    },
    {
        name: "KIRO",
        coat: "Pomsky F4+ (ADN Poméranian / Husky)",
        color: "Noir et blanc",
        sexe: "Mâle",
        size: "Toy ou miniature",
        ruler: "Pelage polaire husky",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : CHARM & BEAUTY",
        readyDate: "Disponible à la réservation",
        age: "Né le 24 avril 2026",
        description:
            "Kiro est un mâle Pomsky F4+ né le 24 avril 2026, issu de Charm et Beauty. Ses nouvelles photos mettent en avant ses yeux bleus, son pelage polaire husky et son format attendu toy ou miniature.",
        highlights: [
            "Mâle",
            "Yeux bleus",
            "Pelage polaire husky",
            "Format toy ou miniature"
        ],
        health: defaultHealth,
        images: puppyImages("KIRO", [
            "pomsky-toy-kiro-1-6semaine.webp",
            "pomsky-toy-kiro-2-6semaine.webp"
        ]),
        linkTo: formUrls.charmBeauty,
        isReserved: true
    },
    {
        name: "NAYA",
        coat: "Pomsky F4+ (ADN Poméranian / Husky)",
        color: "Noire et blanche",
        sexe: "Femelle",
        size: "Toy",
        ruler: "Pelage polaire husky",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : CHARM & BEAUTY",
        readyDate: "Réservée",
        age: "Née le 24 avril 2026",
        description:
            "Naya est une femelle Pomsky toy née le 24 avril 2026, issue de Charm et Beauty. Elle a les yeux bleus, un pelage polaire husky et son statut est réservé.",
        highlights: ["Femelle", "Pomsky toy", "Yeux bleus", "Réservée"],
        health: defaultHealth,
        images: puppyImages("NAYA", [
            "pomsky-marron-blanc-naya/webp/pomsky-marron-blanc-naya-1.webp",
            "pomsky-toy-naya-1-6semaine.webp"
        ]),
        linkTo: formUrls.charmBeauty,
        isReserved: true
    },
    {
        name: "LUMA",
        coat: "Pomsky F4+ (ADN Poméranian / Husky)",
        color: "Noire et blanche",
        sexe: "Femelle",
        size: "Toy ou miniature",
        ruler: "Pelage polaire husky",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : CHARM & BEAUTY",
        readyDate: "Réservée",
        age: "Née le 24 avril 2026",
        description:
            "Luma est une femelle Pomsky F4+ née le 24 avril 2026, issue de Charm et Beauty. Elle présente des yeux bleus, un pelage polaire husky et son statut est réservé.",
        highlights: [
            "Femelle",
            "Yeux bleus",
            "Pelage polaire husky",
            "Réservée"
        ],
        health: defaultHealth,
        images: puppyImages("LUMA", [
            "pomsky-gris-blanc-luma/webp/pomsky-gris-blanc-luma-1.webp",
            "pomsky-femelle-luma-1-6semaine.webp",
            "pomsky-femelle-luma-2-6semaine.webp"
        ]),
        linkTo: formUrls.charmBeauty,
        isReserved: true
    },
    {
        name: "AÏKA",
        coat: "Pomsky F4+ (ADN Poméranian / Husky)",
        color: "Noire et blanche",
        sexe: "Femelle",
        size: "Toy ou miniature",
        ruler: "Pelage polaire",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : SKY & SALLY",
        readyDate: "Réservée",
        age: "Né le 28 avril 2026",
        description:
            "Aïka est une femelle Pomsky F4+ née le 28 avril 2026, issue du mariage entre Sky et Sally. Elle présente des yeux bleus, un pelage polaire et son statut est réservé.",
        highlights: ["Femelle", "Yeux bleus", "Pelage polaire", "Réservée"],
        health: defaultHealth,
        images: puppyImages("AÏKA", [
            "pomsky-noir-blanc-yeux-bleu-aika/webp/pomsky-noir-blanc-yeux-bleu-aika-1.webp",
            "pomsky-mini-aika-1-7semaine.webp",
            "pomsky-mini-aika-2-7semaine.webp"
        ]),
        linkTo: formUrls.skySally,
        isReserved: true
    },
    {
        name: "BALTO",
        coat: "Pomsky F4+ (ADN Poméranian / Husky)",
        color: "Bleue et blanche",
        sexe: "Mâle",
        size: "Miniature",
        ruler: "Pelage fluffy",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : SKY & SALLY",
        readyDate: "Disponible à la réservation",
        age: "Né le 28 avril 2026",
        description:
            "Balto est un mâle Pomsky F4+ né le 28 avril 2026, issu du mariage entre Sky et Sally. Il présente des yeux bleus, un pelage fluffy, un format miniature et son statut est réservé.",
        highlights: [
            "Mâle",
            "Yeux bleus",
            "Pelage fluffy",
            "Taille miniature",
            "Réservé"
        ],
        health: defaultHealth,
        images: puppyImages("BALTO", [
            "pomsky-gris-blanc-balto/webp/pomsky-gris-blanc-balto-1.webp",
            "pomsky-male-balto-1-7semaine.webp",
            "pomsky-male-balto-2-7semaine.webp"
        ]),
        linkTo: formUrls.skySally,
        isReserved: true
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
            "pomsky-noir-blanc-loup/webp/pomsky-noir-blanc-loup-1.webp",
            "pomsky-noir-blanc-loup/webp/pomsky-noir-blanc-loup-2.webp",
            "pomsky-noir-blanc-loup/webp/pomsky-noir-blanc-loup-3.webp"
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
    {
        name: "MIYU",
        coat: "Pomsky F4+ (ADN Poméranian / Husky)",
        color: "Chocolat clair et blanc",
        sexe: "Femelle",
        size: "Toy",
        ruler: "Pelage polaire husky",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : SKY & SALLY",
        readyDate: "Disponible à la réservation",
        age: "Née le 28 avril 2026",
        description:
            "Miyu est une femelle Pomsky toy née le 28 avril 2026. Elle présente des yeux bleus, un pelage polaire husky et un type doux, suivi dans la portée Sky et Sally.",
        highlights: [
            "Femelle",
            "Yeux bleus",
            "Pelage polaire husky",
            "Taille toy"
        ],
        health: defaultHealth,
        images: puppyImages("MIYU", [
            "pomsky-dore-blanc-miyu/webp/pomsky-dore-blanc-miyu-1.webp"
        ]),
        linkTo: formUrls.skySally,
        isReserved: true
    },
    {
        name: "ORION",
        coat: "Pomsky F4+ (ADN Poméranian / Husky)",
        color: "Lilac / lavande et blanc",
        sexe: "Mâle",
        size: "Miniature",
        ruler: "Pelage fluffy",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : SKY & SALLY",
        readyDate: "Réservé",
        age: "Né le 28 avril 2026",
        description:
            "Orion est un mâle Pomsky F4+ né le 28 avril 2026, issu du mariage Sky et Sally. Sa robe lavande, ses yeux bleus et son pelage fluffy lui donnent une expression rare. Son format est miniature et son statut est réservé.",
        highlights: [
            "Mâle",
            "Yeux bleus",
            "Couleur lavande",
            "Pelage fluffy",
            "Réservé"
        ],
        health: defaultHealth,
        images: puppyImages("ORION", [
            "pomsky-lilac-blanc-orion/webp/pomsky-lilac-blanc-orion-1.webp",
            "pomsky-lilac-blanc-orion/webp/pomsky-lilac-blanc-orion-2.webp",
            "pomsky-miniature-orion-1-7semaine.webp",
            "pomsky-miniature-orion-2-7semaine.webp"
        ]),
        linkTo: formUrls.skySally,
        isReserved: true
    },
    {
        name: "SORA",
        coat: "Pomsky F4+ (ADN Poméranian / Husky)",
        color: "Bleue et blanche",
        sexe: "Femelle",
        size: "Miniature",
        ruler: "Pelage fluffy",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : SKY & SALLY",
        readyDate: "Disponible à la réservation",
        age: "Née le 28 avril 2026",
        description:
            "Sora est une femelle Pomsky F4+ née le 28 avril 2026, issue de Sky et Sally. Elle présente des yeux bleus, un pelage fluffy et un format miniature.",
        highlights: [
            "Femelle",
            "Yeux bleus",
            "Pelage fluffy",
            "Taille miniature"
        ],
        health: defaultHealth,
        images: puppyImages("SORA", [
            "pomsky-noir-blanc-sora/webp/pomsky-noir-blanc-sora-1.webp",
            "pomsky-noir-blanc-sora/webp/pomsky-noir-blanc-sora-2.webp"
        ]),
        linkTo: formUrls.skySally,
        isReserved: true
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
