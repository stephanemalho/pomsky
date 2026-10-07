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
        name: "AKI BLUE",
        coat: "Pomsky F4+ (ADN Poméranian / Husky)",
        color: "Bleu",
        sexe: "Mâle",
        size: "Toy",
        ruler: "Pelage fluffy",
        weight: "4-5 kg adulte",
        parents: "Parents : WILLOW & BANDIT",
        readyDate: "Disponible",
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
            "2026-09/pomsky-male-aki/webp/pomsky-male-aki-1.webp",
            "2026-09/pomsky-male-aki/webp/pomsky-male-aki-2.webp",
            "2026-09/pomsky-male-aki/webp/pomsky-male-aki-3.webp",
            "2026-09/pomsky-male-aki/webp/pomsky-male-aki-4.webp",
            "2026-09/pomsky-male-aki/webp/pomsky-male-aki-5.webp"
        ]),
        linkTo: formUrls.pweekCharm
    },
    {
        name: "SKY BLUE",
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
        isReservationPending: true,
        coat: "Pomsky F4 (ADN Poméranian / Husky)",
        color: "Noir et blanc",
        sexe: "Femelle",
        size: "Toy",
        ruler: "Pelage fluffy",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : SHADOW & CHARM",
        updatedAt: "2026-10-08",
        readyDate: "En cours de réservation",
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
        coat: "Pomsky F4 (ADN Poméranian / Husky)",
        color: "Noir et blanc",
        sexe: "Mâle",
        size: "Miniature",
        ruler: "Pelage polaire Husky",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : SHADOW & CHARM",
        updatedAt: "2026-10-08",
        readyDate: "Disponible à la réservation",
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
            "pomsky-noir-blanc-atlas/webp/atlas-chiot-pomsky-f4-noir-blanc-yeux-bleus-20261007.webp",
            "pomsky-noir-blanc-atlas/webp/atlas-chiot-pomsky-f4-noir-blanc-yeux-bleus-photo-2-20261008.webp",
            "pomsky-noir-blanc-atlas/webp/atlas-chiot-pomsky-f4-noir-blanc-yeux-bleus-photo-3-20261008.webp",
            "pomsky-noir-blanc-atlas/webp/pomsky-noir-blanc-atlas-4.webp",
            "pomsky-noir-blanc-atlas/webp/pomsky-noir-blanc-atlas-5.webp",
            "pomsky-noir-blanc-atlas/webp/atlas-chiot-pomsky-f4-noir-blanc-yeux-bleus-photo-6-20261008.webp",
            "pomsky-noir-blanc-atlas/webp/atlas-chiot-pomsky-f4-noir-blanc-yeux-bleus-photo-7-20261008.webp",
            "pomsky-noir-blanc-atlas/webp/atlas-chiot-pomsky-f4-noir-blanc-yeux-bleus-photo-8-20261008.webp",
            "pomsky-noir-blanc-atlas/webp/atlas-chiot-pomsky-f4-noir-blanc-yeux-bleus-photo-9-20261008.webp"
        ], "jpeg", "Atlas, chiot Pomsky F4 miniature noir et blanc aux yeux bleus, de face chez Royal POMSKY", "contain"),
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
        coat: "Pomsky F4 (ADN Poméranian / Husky)",
        color: "Noir et blanc",
        sexe: "Femelle",
        size: "Miniature",
        ruler: "Pelage polaire Husky",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : SHADOW & CHARM",
        updatedAt: "2026-10-08",
        readyDate: "Disponible à la réservation",
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
            "pomsky-noir-blanc-nikita/webp/nikita-chiot-pomsky-f4-noir-blanc-yeux-bleus-couverture-20261008.webp",
            "pomsky-noir-blanc-nikita/webp/pomsky-noir-blanc-nikita-2.webp",
            "pomsky-noir-blanc-nikita/webp/pomsky-noir-blanc-nikita-3.webp",
            "pomsky-noir-blanc-nikita/webp/nikita-chiot-pomsky-f4-noir-blanc-yeux-bleus-photo-4-20261008.webp",
            "pomsky-noir-blanc-nikita/webp/nikita-chiot-pomsky-f4-noir-blanc-yeux-bleus-photo-5-20261008.webp",
            "pomsky-noir-blanc-nikita/webp/nikita-chiot-pomsky-f4-noir-blanc-yeux-bleus-photo-6-20261008.webp"
        ], "jpeg", "Nikita, femelle Pomsky F4 miniature noire et blanche aux yeux bleus, assise chez Royal POMSKY", "contain"),
        linkTo: formUrls.shadowCharm
    },
    {
        name: "ASTON",
        coat: "Pomsky F4 (ADN Poméranian / Husky)",
        color: "Noir et blanc",
        sexe: "Mâle",
        size: "Toy",
        ruler: "Pelage fluffy",
        weight: "3 kg adulte",
        parents: "Parents : CHARM & DOLLY",
        updatedAt: "2026-10-08",
        readyDate: "Disponible à la réservation",
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
            "pomsky-noir-blanc-aston/webp/aston-chiot-pomsky-f4-noir-blanc-yeux-bleus-photo-1-20261008.webp",
            "pomsky-noir-blanc-aston/webp/aston-chiot-pomsky-f4-noir-blanc-yeux-bleus-photo-2-20261008.webp",
            "pomsky-noir-blanc-aston/webp/aston-chiot-pomsky-f4-noir-blanc-yeux-bleus-photo-3-20261008.webp",
            "pomsky-noir-blanc-aston/webp/aston-chiot-pomsky-f4-noir-blanc-yeux-bleus-photo-4-20261008.webp",
            "pomsky-noir-blanc-aston/webp/aston-chiot-pomsky-f4-noir-blanc-yeux-bleus-photo-5-20261008.webp"
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
        coat: "Pomsky F4 (ADN Poméranian / Husky)",
        color: "Noir et blanc",
        sexe: "Mâle",
        size: "Toy",
        ruler: "Pelage fluffy",
        weight: "3 kg",
        parents: "Parents : CHARM & DOLLY",
        updatedAt: "2026-10-08",
        readyDate: "Disponible à la réservation",
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
        litterCertifications.find(
            (certification) => certification.parentLabel === puppy.parents
        )?.litterBirthDate ?? "9999-12-31"
    );
}

export const puppies: Puppy[] = [...puppiesUnsorted].sort((a, b) =>
    getLitterBirthDateForPuppy(a).localeCompare(getLitterBirthDateForPuppy(b))
);
