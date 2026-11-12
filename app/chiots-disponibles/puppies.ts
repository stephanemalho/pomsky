export type PuppyImage = {
    fit?: "cover" | "contain";
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
    video?: { src: string; poster: string };
    linkTo: string;
    isReserved?: boolean;
    isReservationPending?: boolean;
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
    pweekCharm: "https://forms.gle/DJCcN9iHtUSCAhZE7",
    // TODO : formulaires Google des portées Shadow & Charm et Charm & Dolly
    shadowCharm: "/contact",
    charmDolly: "/contact"
};

const defaultHealth = ["Suivi vétérinaire en cours"];

function puppyImages(
    name: string,
    files: string[],
    metadataFormat: "jpeg" | "png" = "jpeg",
    coverAlt?: string,
    coverFit?: PuppyImage["fit"]
): PuppyImage[] {
    return files.map((file, index) => {
        const hasAgeVariants = /-[67]semaines?\.webp$/.test(file);
        const hasDirectoryFormatVariants = file.includes("/webp/");

        return {
            ...(index === 0 && coverFit ? { fit: coverFit } : {}),
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
            alt: index === 0 && coverAlt ? coverAlt : `${name}, chiot Pomsky Royal POMSKY - photo ${index + 1}`
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
        name: "SUNNY",
        price: 3500,
        priceCurrency: "EUR",
        isReserved: true,
        updatedAt: "2026-11-12",
        coat: "Pomsky F4 (ADN Poméranian / Husky)",
        color: "Lilac et blanc",
        sexe: "Mâle",
        size: "Miniature",
        ruler: "Pelage polaire Husky",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : SHANE & SKY",
        readyDate: "Réservé",
        age: "Né le 2 octobre 2026",
        birthDate: "2026-10-02",
        description:
            "Sunny est un mâle Pomsky F4 né le 2 octobre 2026, issu de Shane et Sky. Sa robe lilac et blanche aux nuances douces est soulignée par un masque fleur de lys qui met en valeur ses yeux bleus. Son pelage polaire de type Husky lui donne une allure nordique. Son format adulte est estimé miniature.",
        highlights: [
            "Mâle",
            "Robe lilac et blanche",
            "Yeux bleus",
            "Masque fleur de lys",
            "Pelage polaire Husky",
            "Taille miniature à l'âge adulte"
        ],
        health: defaultHealth,
        images: puppyImages("SUNNY", [
            "2026-10/pomsky-male-sunny/webp/sunny-pomsky-lilac-20261112-1.webp",
            "2026-10/pomsky-male-sunny/webp/sunny-pomsky-lilac-20261112-2.webp",
            "2026-10/pomsky-male-sunny/webp/sunny-pomsky-lilac-20261112-3.webp",
            "2026-10/pomsky-male-sunny/webp/sunny-pomsky-lilac-20261112-4.webp"
        ], "jpeg", "Sunny, mâle Pomsky miniature lilac et blanc aux yeux bleus, masque fleur de lys et pelage polaire Husky", "contain"),
        video: {
            src: "/pages/puppies/2026-10/pomsky-male-sunny/video/sunny-1937-20261103.mp4",
            poster: "/pages/puppies/2026-10/pomsky-male-sunny/webp/sunny-pomsky-lilac-1.webp"
        },
        linkTo: "/contact"
    },
    {
        name: "BILLY",
        price: 2500,
        priceCurrency: "EUR",
        isReserved: false,
        updatedAt: "2026-11-12",
        coat: "Pomsky F4 (ADN Poméranian / Husky)",
        color: "Blanc polaire",
        sexe: "Mâle",
        size: "Miniature",
        ruler: "Pelage polaire Husky",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : SHANE & SKY",
        readyDate: "Disponible à la réservation",
        age: "Né le 2 octobre 2026",
        birthDate: "2026-10-02",
        description:
            "Billy est un mâle Pomsky F4 né le 2 octobre 2026, issu de Shane et Sky. Sa robe blanche polaire et ses yeux bruns lui donnent une expression douce. Son pelage polaire de type Husky souligne son allure nordique. Son format adulte est estimé miniature.",
        highlights: [
            "Mâle",
            "Robe blanche polaire",
            "Yeux bruns",
            "Pelage polaire Husky",
            "Taille miniature à l'âge adulte"
        ],
        health: defaultHealth,
        images: puppyImages("BILLY", [
            "2026-10/pomsky-male-billy/webp/billy-pomsky-blanc-polaire-20261112-v2-1.webp",
            "2026-10/pomsky-male-billy/webp/billy-pomsky-blanc-polaire-20261112-v2-2.webp"
        ], "jpeg", "Billy, mâle Pomsky miniature blanc polaire aux yeux bruns et au pelage polaire Husky", "contain"),
        video: {
            src: "/pages/puppies/2026-10/pomsky-male-billy/video/billy-1935-20261103.mp4",
            poster: "/pages/puppies/2026-10/pomsky-male-billy/webp/billy-pomsky-blanc-polaire-1.webp"
        },
        linkTo: "/contact"
    },
    {
        name: "SIRIUS",
        price: 3500,
        priceCurrency: "EUR",
        isReserved: false,
        updatedAt: "2026-11-12",
        coat: "Pomsky F4 (ADN Poméranian / Husky)",
        color: "Bleu et blanc",
        sexe: "Mâle",
        size: "Miniature",
        ruler: "Pelage polaire Husky",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : SHANE & SKY",
        readyDate: "Disponible à la réservation",
        age: "Né le 2 octobre 2026",
        birthDate: "2026-10-02",
        description:
            "Sirius est un mâle Pomsky F4 né le 2 octobre 2026, issu de Shane et Sky. Il se distingue par sa robe rare bleue et blanche et son masque bandit qui souligne ses yeux vairons. Son pelage polaire de type Husky met en valeur son allure nordique et les contrastes de sa robe. Son format adulte est estimé miniature.",
        highlights: [
            "Mâle",
            "Robe rare bleue et blanche",
            "Yeux vairons",
            "Masque bandit",
            "Pelage polaire Husky",
            "Taille miniature à l'âge adulte"
        ],
        health: defaultHealth,
        images: puppyImages("SIRIUS", [
            "2026-10/pomsky-male-sirius/webp/sirius-pomsky-bleu-20261112-1.webp",
            "2026-10/pomsky-male-sirius/webp/sirius-pomsky-bleu-20261112-2.webp",
            "2026-10/pomsky-male-sirius/webp/sirius-pomsky-bleu-20261112-3.webp"
        ], "jpeg", "Sirius, mâle Pomsky miniature bleu et blanc aux yeux vairons, masque bandit et pelage polaire Husky", "contain"),
        video: {
            src: "/pages/puppies/2026-10/pomsky-femelle-bella/video/bella-1951-20261103.mp4",
            poster: "/pages/puppies/2026-10/pomsky-femelle-bella/webp/bella-pomsky-bleue-masque-bandit-1.webp"
        },
        linkTo: "/contact"
    },
    {
        name: "BELLA",
        price: 3500,
        priceCurrency: "EUR",
        isReserved: false,
        updatedAt: "2026-11-12",
        coat: "Pomsky F4 (ADN Poméranian / Husky)",
        color: "Bleu et blanc",
        sexe: "Femelle",
        size: "Miniature",
        ruler: "Pelage polaire Husky",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : SHANE & SKY",
        readyDate: "Disponible à la réservation",
        age: "Née le 2 octobre 2026",
        birthDate: "2026-10-02",
        description:
            "Bella est une femelle Pomsky F4 née le 2 octobre 2026, issue de Shane et Sky. Sa robe rare bleue et blanche se distingue par un masque fleur de lys qui met en valeur ses yeux bleus. Son pelage polaire de type Husky lui donne une allure nordique. Son format adulte est estimé miniature.",
        highlights: [
            "Femelle",
            "Robe rare bleue et blanche",
            "Yeux bleus",
            "Masque fleur de lys",
            "Pelage polaire Husky",
            "Taille miniature à l'âge adulte"
        ],
        health: defaultHealth,
        images: puppyImages("BELLA", [
            "2026-10/pomsky-femelle-bella/webp/bella-pomsky-bleue-20261112-1.webp",
            "2026-10/pomsky-femelle-bella/webp/bella-pomsky-bleue-20261112-2.webp",
            "2026-10/pomsky-femelle-bella/webp/bella-pomsky-bleue-20261112-3.webp",
            "2026-10/pomsky-femelle-bella/webp/bella-pomsky-bleue-20261112-4.webp",
            "2026-10/pomsky-femelle-bella/webp/bella-pomsky-bleue-20261112-5.webp",
            "2026-10/pomsky-femelle-bella/webp/bella-pomsky-bleue-20261112-6.webp",
            "2026-10/pomsky-femelle-bella/webp/bella-pomsky-bleue-20261112-7.webp"
        ], "jpeg", "Bella, femelle Pomsky miniature bleue et blanche aux yeux bleus, masque fleur de lys et pelage polaire Husky", "contain"),
        video: {
            src: "/pages/puppies/2026-10/pomsky-male-sirius/video/sirius-1943-20261103.mp4",
            poster: "/pages/puppies/2026-10/pomsky-male-sirius/webp/sirius-pomsky-bleu-3.webp"
        },
        linkTo: "/contact"
    },
    {
        name: "ARCTIC",
        price: 3000,
        priceCurrency: "EUR",
        isReserved: false,
        updatedAt: "2026-11-12",
        coat: "Pomsky F4 (ADN Poméranian / Husky)",
        color: "Blanc polaire",
        sexe: "Femelle",
        size: "Miniature",
        ruler: "Pelage polaire Husky",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : SHANE & SKY",
        readyDate: "Disponible à la réservation",
        age: "Née le 2 octobre 2026",
        birthDate: "2026-10-02",
        description:
            "Arctic est une femelle Pomsky F4 née le 2 octobre 2026, issue de Shane et Sky. Sa robe blanche polaire et ses yeux bleus lui donnent une allure nordique. Son pelage polaire de type Husky souligne son apparence de petit husky blanc. Son format adulte est estimé miniature.",
        highlights: [
            "Femelle",
            "Robe blanche polaire",
            "Yeux bleus",
            "Pelage polaire Husky",
            "Taille miniature à l'âge adulte"
        ],
        health: defaultHealth,
        images: puppyImages("ARCTIC", [
            "2026-10/pomsky-femelle-arctic/webp/arctic-pomsky-blanche-polaire-20261112-1.webp",
            "2026-10/pomsky-femelle-arctic/webp/arctic-pomsky-blanche-polaire-20261112-2.webp",
            "2026-10/pomsky-femelle-arctic/webp/arctic-pomsky-blanche-polaire-20261112-3.webp",
            "2026-10/pomsky-femelle-arctic/webp/arctic-pomsky-blanche-polaire-20261112-4.webp",
            "2026-10/pomsky-femelle-arctic/webp/arctic-pomsky-blanche-polaire-20261112-5.webp"
        ], "jpeg", "Arctic, femelle Pomsky miniature blanche polaire aux yeux bleus et au pelage polaire Husky", "contain"),
        linkTo: "/contact"
    },
    {
        name: "SNOW",
        price: 3000,
        priceCurrency: "EUR",
        isReserved: false,
        updatedAt: "2026-11-12",
        coat: "Pomsky F4 (ADN Poméranian / Husky)",
        color: "Blanc polaire",
        sexe: "Femelle",
        size: "Miniature",
        ruler: "Pelage fluffy",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : SHANE & SKY",
        readyDate: "Disponible à la réservation",
        age: "Née le 2 octobre 2026",
        birthDate: "2026-10-02",
        description:
            "Snow est une femelle Pomsky F4 née le 2 octobre 2026, issue de Shane et Sky. Sa robe blanche polaire met en valeur ses yeux bleus et son expression douce. Son pelage fluffy, dense et duveteux, lui donne une allure de petit ourson polaire. Son format adulte est estimé miniature.",
        highlights: [
            "Femelle",
            "Robe blanche polaire",
            "Yeux bleus",
            "Pelage fluffy",
            "Taille miniature à l'âge adulte"
        ],
        health: defaultHealth,
        images: puppyImages("SNOW", [
            "2026-10/pomsky-femelle-snow/webp/snow-pomsky-blanche-polaire-20261112-1.webp",
            "2026-10/pomsky-femelle-snow/webp/snow-pomsky-blanche-polaire-20261112-2.webp",
            "2026-10/pomsky-femelle-snow/webp/snow-pomsky-blanche-polaire-20261112-3.webp"
        ], "jpeg", "Snow, femelle Pomsky miniature blanche polaire aux yeux bleus et au pelage fluffy", "contain"),
        video: {
            src: "/pages/puppies/2026-10/pomsky-femelle-snow/video/snow-1940-20261103.mp4",
            poster: "/pages/puppies/2026-10/pomsky-femelle-snow/webp/snow-pomsky-blanche-polaire-1.webp"
        },
        linkTo: "/contact"
    },
    {
        name: "COSMO",
        price: 3500,
        priceCurrency: "EUR",
        isReserved: false,
        updatedAt: "2026-11-12",
        coat: "Pomsky F4 (ADN Poméranian / Husky)",
        color: "Bleu et blanc",
        sexe: "Mâle",
        size: "Miniature",
        ruler: "Pelage fluffy",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : SHANE & SKY",
        readyDate: "Disponible à la réservation",
        age: "Né le 2 octobre 2026",
        birthDate: "2026-10-02",
        description:
            "Cosmo est un mâle Pomsky F4 né le 2 octobre 2026, issu de Shane et Sky. Il se distingue par sa robe rare bleue et blanche, son masque fleur de lys et ses yeux vairons. Son pelage fluffy, dense et duveteux, souligne son allure de petit husky. Cosmo ressemble beaucoup à son père Sky, dont il rappelle les traits et l'expression. Son format adulte est estimé miniature.",
        highlights: [
            "Mâle Pomsky F4",
            "Yeux vairons",
            "Pelage fluffy",
            "Robe rare bleue et blanche",
            "Masque fleur de lys",
            "Taille miniature à l'âge adulte",
            "Ressemble à son père Sky"
        ],
        health: defaultHealth,
        images: puppyImages("COSMO", [
            "2026-10/pomsky-male-cosmo/webp/cosmo-pomsky-f4-bleu-20261112-1.webp",
            "2026-10/pomsky-male-cosmo/webp/cosmo-pomsky-f4-bleu-20261112-2.webp",
            "2026-10/pomsky-male-cosmo/webp/cosmo-pomsky-f4-bleu-20261112-3.webp",
            "2026-10/pomsky-male-cosmo/webp/cosmo-pomsky-f4-bleu-20261112-4.webp"
        ], "jpeg", "Cosmo, chiot Pomsky F4 miniature bleu et blanc au pelage fluffy et au masque fleur de lys", "contain"),
        video: {
            src: "/pages/puppies/2026-10/pomsky-male-cosmo/video/cosmo-1950-20261103.mp4",
            poster: "/pages/puppies/2026-10/pomsky-male-cosmo/webp/cosmo-pomsky-f4-bleu-1.webp"
        },
        linkTo: "/contact"
    },
    {
        name: "SKY BLUE",
        isAdopted: true,
        isReserved: true,
        updatedAt: "2026-10-08",
        coat: "Pomsky F4+ (ADN Poméranian / Husky)",
        color: "Bleu",
        sexe: "Mâle",
        size: "Toy - Micro",
        ruler: "Pelage fluffy",
        weight: "3 kg adulte",
        parents: "Parents : WILLOW & BANDIT",
        readyDate: "Réservé",
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
            "2026-09/pomsky-fluffly-sky/webp/pomsky-fluffly-sky-1.webp",
            "2026-09/pomsky-fluffly-sky/webp/pomsky-fluffly-sky-2.webp",
            "2026-09/pomsky-fluffly-sky/webp/pomsky-fluffly-sky-3.webp",
            "2026-09/pomsky-fluffly-sky/webp/pomsky-fluffly-sky-4.webp"
        ]),
        linkTo: formUrls.pweekCharm
    },
    {
        name: "KIARA",
        isReserved: true,
        coat: "Pomsky F4 (ADN Poméranian / Husky)",
        color: "Noir et blanc",
        sexe: "Femelle",
        size: "Toy",
        ruler: "Pelage fluffy",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : SHADOW & CHARM",
        updatedAt: "2026-10-16",
        readyDate: "Réservée",
        age: "Née en septembre 2026",
        description:
            "Kiara est une femelle Pomsky Toy F4 née en septembre 2026, issue de Shadow et Charm. Elle arbore une robe noire et blanche rehaussée d'un masque fleur de lys, signature d'une prestigieuse lignée américaine.",
        highlights: [
            "Femelle",
            "Noir et blanc",
            "Pelage fluffy",
            "Yeux bleus",
            "Lignée américaine",
            "Taille Toy"
        ],
        health: defaultHealth,
        pedigree: "Fédération Française du Pomsky",
        images: puppyImages("KIARA", [
            "pomsky-noir-blanc-kiara/webp/kiara-chiot-pomsky-f4-noir-blanc-yeux-bleus-couverture-20261008.webp",
            "pomsky-noir-blanc-kiara/webp/kiara-chiot-pomsky-f4-noir-blanc-yeux-bleus-photo-2-20261008.webp",
            "pomsky-noir-blanc-kiara/webp/kiara-chiot-pomsky-f4-noir-blanc-yeux-bleus-photo-3-20261008.webp",
        ], "jpeg", "Kiara, femelle Pomsky Toy F4 noire et blanche aux yeux bleus, assise chez Royal POMSKY", "contain"),
        linkTo: formUrls.shadowCharm
    },
    {
        name: "ATLAS",
        isReserved: true,
        coat: "Pomsky F4 (ADN Poméranian / Husky)",
        color: "Noir et blanc",
        sexe: "Mâle",
        size: "Miniature",
        ruler: "Pelage polaire Husky",
        weight: "7 kg adulte (estimation)",
        parents: "Parents : SHADOW & CHARM",
        updatedAt: "2026-11-10",
        readyDate: "Réservé",
        age: "Né en septembre 2026",
        description:
            "Atlas est un mâle Pomsky miniature F4 né en septembre 2026, issu de Shadow et Charm. Il arbore une robe noire et blanche rehaussée d'un masque fleur de lys, signature d'une prestigieuse lignée américaine.",
        highlights: [
            "Mâle",
            "Noir et blanc",
            "Pelage polaire Husky",
            "Yeux particolor bleus",
            "Lignée américaine",
            "Taille miniature"
        ],
        health: defaultHealth,
        images: puppyImages("ATLAS", [
            "pomsky-noir-blanc-atlas/webp/atlas-chiot-pomsky-f4-noir-blanc-couverture-20261103.webp",
            "pomsky-noir-blanc-atlas/webp/atlas-chiot-pomsky-f4-noir-blanc-photo-2-20261016.webp",
            "pomsky-noir-blanc-atlas/webp/atlas-chiot-pomsky-f4-noir-blanc-photo-3-20261016.webp"
        ], "jpeg", "Atlas, chiot Pomsky F4 miniature noir et blanc aux yeux bleus, de face chez Royal POMSKY", "contain"),
        video: {
            src: "/pages/puppies/pomsky-noir-blanc-atlas/video/atlas-1669-20261103.mp4",
            poster: "/pages/puppies/pomsky-noir-blanc-atlas/webp/atlas-chiot-pomsky-f4-noir-blanc-couverture-20261103.webp"
        },
        linkTo: formUrls.shadowCharm
    },
    {
        name: "TOKYO",
        isReserved: true,
        coat: "Pomsky F4 (ADN Poméranian / Husky)",
        color: "Noir et blanc",
        sexe: "Mâle",
        size: "Miniature",
        ruler: "Pelage fluffy",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : SHADOW & CHARM",
        updatedAt: "2026-10-08",
        readyDate: "Réservé",
        age: "Né en septembre 2026",
        description:
            "Tokyo est un mâle Pomsky miniature F4 né en septembre 2026, issu de Shadow et Charm. Il arbore une robe noire et blanche rehaussée d'un masque fleur de lys, signature d'une prestigieuse lignée américaine.",
        highlights: [
            "Mâle",
            "Noir et blanc",
            "Pelage fluffy",
            "Yeux bleus",
            "Lignée américaine",
            "Taille miniature"
        ],
        health: defaultHealth,
        pedigree: "Fédération Française du Pomsky",
        images: puppyImages("TOKYO", [
            "pomsky-noir-blanc-tokyo/webp/tokyo-chiot-pomsky-f4-noir-blanc-yeux-bleus-couverture-20261008.webp",
            "pomsky-noir-blanc-tokyo/webp/pomsky-noir-blanc-tokyo-2.webp",
            "pomsky-noir-blanc-tokyo/webp/pomsky-noir-blanc-tokyo-3.webp"
        ], "jpeg", "Tokyo, chiot Pomsky F4 miniature noir et blanc aux yeux bleus, assis chez Royal POMSKY", "contain"),
        linkTo: formUrls.shadowCharm
    },
    {
        name: "NIKITA",
        isReserved: true,
        coat: "Pomsky F4 (ADN Poméranian / Husky)",
        color: "Noir et blanc",
        sexe: "Femelle",
        size: "Miniature",
        ruler: "Pelage polaire Husky",
        weight: "7 kg adulte (estimation)",
        parents: "Parents : SHADOW & CHARM",
        updatedAt: "2026-11-03",
        readyDate: "Réservée",
        age: "Née en septembre 2026",
        description:
            "Nikita est une femelle Pomsky miniature F4 née en septembre 2026, issue de Shadow et Charm. Elle arbore une robe noire et blanche rehaussée d'un masque fleur de lys, signature d'une prestigieuse lignée américaine.",
        highlights: [
            "Femelle",
            "Noir et blanc",
            "Pelage polaire Husky",
            "Yeux bleus",
            "Lignée américaine",
            "Taille miniature"
        ],
        health: defaultHealth,
        images: puppyImages("NIKITA", [
            "pomsky-noir-blanc-nikita/webp/nikita-chiot-pomsky-f4-noir-blanc-photo-1-20261016.webp",
            "pomsky-noir-blanc-nikita/webp/nikita-chiot-pomsky-f4-noir-blanc-photo-2-20261016.webp",
            "pomsky-noir-blanc-nikita/webp/nikita-chiot-pomsky-f4-noir-blanc-photo-3-20261016.webp",
            "pomsky-noir-blanc-nikita/webp/nikita-chiot-pomsky-f4-noir-blanc-photo-4-20261016.webp"
        ], "jpeg", "Nikita, femelle Pomsky F4 miniature noire et blanche aux yeux bleus, assise chez Royal POMSKY", "contain"),
        linkTo: formUrls.shadowCharm
    },
    {
        name: "ASTON",
        isReserved: true,
        coat: "Pomsky F4 (ADN Poméranian / Husky)",
        color: "Noir et blanc",
        sexe: "Mâle",
        size: "Toy",
        ruler: "Pelage fluffy",
        weight: "3 kg adulte",
        parents: "Parents : CHARM & DOLLY",
        updatedAt: "2026-10-17",
        readyDate: "Réservé",
        age: "Né le 5 septembre 2026",
        birthDate: "2026-09-05",
        description:
            "Aston est un mâle Pomsky F4 né le 5 septembre 2026, issu de Charm et Dolly. Robe noire et blanche, format Toy-micro et lignées prestigieuses américaines. Ses yeux sont encore en cours de développement.",
        highlights: [
            "Mâle",
            "Noir et blanc",
            "Pelage fluffy",
            "Yeux bleus",
            "Lignée américaine",
            "Taille Toy"
        ],
        health: defaultHealth,
        pedigree: "Fédération Française du Pomsky",
        images: puppyImages("ASTON", [
            "pomsky-noir-blanc-aston/webp/aston-chiot-pomsky-f4-noir-blanc-photo-1-20261016.webp",
            "pomsky-noir-blanc-aston/webp/aston-chiot-pomsky-f4-noir-blanc-photo-2-20261016.webp",
            "pomsky-noir-blanc-aston/webp/aston-chiot-pomsky-f4-noir-blanc-photo-3-20261016.webp"
        ], "jpeg", "Aston, chiot Pomsky Toy F4 noir et blanc aux yeux bleus, assis chez Royal POMSKY", "contain"),
        linkTo: formUrls.charmDolly
    },
    {
        name: "LUNA",
        isReserved: true,
        coat: "Pomsky F4 (ADN Poméranian / Husky)",
        color: "Gris noir et blanc",
        sexe: "Femelle",
        size: "Toy - Micro",
        ruler: "Masque fleur de lys",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : CHARM & DOLLY",
        updatedAt: "2026-10-08",
        readyDate: "Réservée",
        age: "Née le 5 septembre 2026",
        birthDate: "2026-09-05",
        description:
            "Luna est une femelle Pomsky Toy-micro F4 née le 5 septembre 2026, issue de Charm et Dolly. Elle arbore une robe grise, noire et blanche rehaussée d'un masque fleur de lys, signature d'une prestigieuse lignée américaine.",
        highlights: [
            "Femelle",
            "Gris noir et blanc",
            "Masque fleur de lys",
            "Yeux bleus",
            "Lignée américaine",
            "Taille Toy-micro"
        ],
        health: defaultHealth,
        pedigree: "Fédération Française du Pomsky",
        images: puppyImages("LUNA", [
            "pomsky-gris-noir-blanc-luna/webp/luna-chiot-pomsky-f4-gris-noir-blanc-couverture-20261008.webp",
            "pomsky-gris-noir-blanc-luna/webp/pomsky-gris-noir-blanc-luna-2.webp",
            "pomsky-gris-noir-blanc-luna/webp/pomsky-gris-noir-blanc-luna-3.webp"
        ], "jpeg", "Luna, femelle Pomsky Toy-micro F4 grise, noire et blanche, assise chez Royal POMSKY", "contain"),
        linkTo: formUrls.charmDolly
    },
    {
        name: "VEGAS",
        isReserved: true,
        coat: "Pomsky F4 (ADN Poméranian / Husky)",
        color: "Noir et blanc",
        sexe: "Mâle",
        size: "Toy",
        ruler: "Pelage fluffy",
        weight: "4 kg adulte",
        parents: "Parents : CHARM & DOLLY",
        updatedAt: "2026-10-08",
        readyDate: "Réservé",
        age: "Né le 5 septembre 2026",
        birthDate: "2026-09-05",
        description:
            "Vegas est un mâle Pomsky Toy-micro F4 né le 5 septembre 2026, issu de Charm et Dolly. Il arbore une robe noire et blanche rehaussée d'un masque fleur de lys, signature d'une prestigieuse lignée américaine.",
        highlights: [
            "Mâle",
            "Noir et blanc",
            "Pelage fluffy",
            "Yeux bleus",
            "Lignée américaine",
            "Taille Toy"
        ],
        health: defaultHealth,
        pedigree: "Fédération Française du Pomsky",
        images: puppyImages("VEGAS", [
            "pomsky-noir-blanc-vegas/webp/vegas-chiot-pomsky-f4-noir-blanc-yeux-bleus-photo-1-20261008.webp",
            "pomsky-noir-blanc-vegas/webp/vegas-chiot-pomsky-f4-noir-blanc-yeux-bleus-photo-2-20261008.webp",
            "pomsky-noir-blanc-vegas/webp/vegas-chiot-pomsky-f4-noir-blanc-yeux-bleus-photo-3-20261008.webp"
        ], "jpeg", "Vegas, chiot Pomsky Toy F4 noir et blanc aux yeux bleus, assis chez Royal POMSKY", "contain"),
        linkTo: formUrls.charmDolly
    },
    {
        name: "NOX",
        isReserved: true,
        coat: "Pomsky F4 (ADN Poméranian / Husky)",
        color: "Noir et blanc",
        sexe: "Mâle",
        size: "Toy",
        ruler: "Pelage fluffy",
        weight: "3 kg",
        parents: "Parents : CHARM & DOLLY",
        updatedAt: "2026-10-16",
        readyDate: "Réservé",
        age: "Né le 5 septembre 2026",
        birthDate: "2026-09-05",
        description:
            "Nox est un mâle Pomsky Toy-micro F4 né le 5 septembre 2026, issu de Charm et Dolly. Il arbore une robe noire et blanche rehaussée d'un masque fleur de lys, signature d'une prestigieuse lignée américaine.",
        highlights: [
            "Mâle",
            "Noir et blanc",
            "Pelage fluffy",
            "Yeux bleus",
            "Lignée américaine",
            "Taille Toy"
        ],
        health: defaultHealth,
        pedigree: "Fédération Française du Pomsky",
        images: puppyImages("NOX", [
            "pomsky-noir-blanc-nox/webp/nox-chiot-pomsky-f4-noir-blanc-yeux-bleus-photo-1-20261008.webp",
            "pomsky-noir-blanc-nox/webp/nox-chiot-pomsky-f4-noir-blanc-yeux-bleus-photo-2-20261008.webp",
            "pomsky-noir-blanc-nox/webp/nox-chiot-pomsky-f4-noir-blanc-yeux-bleus-photo-3-20261008.webp"
        ], "jpeg", "Nox, chiot Pomsky Toy F4 noir et blanc aux yeux bleus, assis chez Royal POMSKY", "contain"),
        linkTo: formUrls.charmDolly
    }
];

function getLitterBirthDateForPuppy(puppy: Puppy) {
    return (
        puppy.birthDate ?? litterCertifications.find(
            (certification) => certification.parentLabel === puppy.parents
        )?.litterBirthDate ?? "9999-12-31"
    );
}

export const puppySharedHighlights = ["Pédigrée FFP", "Test ADN Embark", "Parents purs Pomsky"];

export const puppies: Puppy[] = puppiesUnsorted.map((puppy) => ({
    ...puppy,
    highlights: [...new Set([...puppy.highlights, ...puppySharedHighlights])],
})).sort((a, b) => {
    const featuredOrder = ["ATLAS"];
    const priority = (puppy: Puppy) => {
        const index = featuredOrder.indexOf(puppy.name);
        return index === -1 ? featuredOrder.length : index;
    };
    return priority(a) - priority(b)
        || getLitterBirthDateForPuppy(a).localeCompare(getLitterBirthDateForPuppy(b));
});

export function getPuppyBreedLabel(puppy: Puppy): string {
    return puppy.coat.split("(")[0].trim().toUpperCase();
}
