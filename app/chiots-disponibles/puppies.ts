export type PuppyImage = {
    src: string;
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
    priceCurrency?: string;
    priceIncludes?: string;
    priceValidUntil?: string;
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
};

const defaultHealth = ["Suivi vétérinaire en cours"];

function puppyImages(name: string, files: string[]): PuppyImage[] {
    return files.map((file, index) => ({
        src: `pages/puppies/${file}`,
        alt: `${name}, chiot Pomsky Royal POMSKY - photo ${index + 1}`,
    }));
}

export const litterCertifications: LitterCertification[] = [
    {
        id: "declaration-portee-charm-beauty",
        parentLabel: "Parents : CHARM & BEAUTY",
        name: "Déclaration de portée FFP Charm et Beauty",
        description:
            "Déclaration de portée établie par la Fédération Française du Pomsky pour la portée Charm et Beauty née le 24 avril 2026.",
        imageSrc: "/pages/puppies/fiche-administrative-mariage-pomsky-f4-et-pomsky-f3.jpg",
        issuer: "Fédération Française du Pomsky",
        breeder: "Élevage Royal Pomsky",
        certificationIdentification: "DP FFP 2026.080-083",
        litterBirthDate: "2026-04-24",
        puppyNames: ["SANO", "KIRO", "NAYA", "LUMA"],
        parents: [
            {
                role: "Père",
                name: "Paramout Pomsky Charm",
                breed: "Pomsky",
                generation: "F3",
                pedigree: "CE FFP 2025.059",
            },
            {
                role: "Mère",
                name: "Royal Pomsky Beauty",
                breed: "Pomsky",
                generation: "F4",
                pedigree: "CG FFP 2025.159",
            },
        ],
    },
    {
        id: "declaration-portee-sky-sally",
        parentLabel: "Parents : SKY & SALLY",
        name: "Fiche administrative Sky et Sally",
        description:
            "Fiche administrative de la portée Sky et Sally née le 28 avril 2026, consultable pour les familles intéressées par cette portée.",
        imageSrc: "/pages/puppies/fiche-administrative-sky-et-sally.png",
        issuer: "Fédération Française du Pomsky",
        breeder: "Élevage Royal Pomsky",
        certificationIdentification: "Fiche administrative Sky et Sally",
        litterBirthDate: "2026-04-28",
        puppyNames: ["AÏKA", "BALTO", "LOUP", "LUNA", "LUMA", "MIYU", "ORION", "SORA"],
        parents: [
            {
                role: "Père",
                name: "Sky",
                breed: "Pomsky",
                generation: "F3",
                pedigree: "Pédigrée FFP",
            },
            {
                role: "Mère",
                name: "Sally",
                breed: "Pomsky",
                generation: "Miniature",
                pedigree: "Pédigrée FFP",
            },
        ],
    },
    {
        id: "declaration-portee-inuit-mogu",
        parentLabel: "Parents : INUIT & MOGU",
        name: "Fiche administrative Inuit et Mogu",
        description:
            "Fiche administrative de la portée Inuit et Mogu née le 27 avril 2026, présentée avec les chiots de cette portée.",
        imageSrc: "/pages/puppies/fiche-administrative-mariage-inuit-et-mogu.png",
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
                pedigree: "Pédigrée FFP",
            },
            {
                role: "Mère",
                name: "Mogu",
                breed: "Pomsky",
                generation: "F4",
                pedigree: "Pédigrée FFP",
            },
        ],
    },
    {
        id: "declaration-portee-charm-alou",
        parentLabel: "Parents : CHARM & ALOU",
        name: "Fiche administrative Charm et Alou",
        description:
            "Fiche administrative de la portée Charm et Alou née le 30 avril 2026, consultable depuis les fiches des chiots concernés.",
        imageSrc: "/pages/puppies/fiche-administrative-charm-et-alou.png",
        issuer: "Fédération Française du Pomsky",
        breeder: "Élevage Royal Pomsky",
        certificationIdentification: "Fiche administrative Charm et Alou",
        litterBirthDate: "2026-04-30",
        puppyNames: ["AMAROK", "ALASKA", "INUK", "ALOU JUNIOR"],
        parents: [
            {
                role: "Père",
                name: "Paramout Pomsky Charm",
                breed: "Pomsky",
                generation: "F3",
                pedigree: "CE FFP 2025.059",
            },
            {
                role: "Mère",
                name: "Alou",
                breed: "Pomsky",
                generation: "F3",
                pedigree: "Pédigrée FFP",
            },
        ],
    },
    {
        id: "declaration-portee-pweek-charm",
        parentLabel: "Parents : PWEEK & CHARM",
        name: "Fiche administrative Pweek et Charm",
        description:
            "Fiche administrative de la portée Pweek et Charm, consultable depuis les fiches des chiots concernés.",
        imageSrc: "/pages/puppies/fiche-administrative-mariage-pweek-et-charm.png",
        issuer: "Fédération Française du Pomsky",
        breeder: "Élevage Royal Pomsky",
        certificationIdentification: "Fiche administrative Pweek et Charm",
        litterBirthDate: "2026-05-09",
        puppyNames: ["AMBRE", "RÉMUS", "LOKI", "BELLATRIX", "ARCANA"],
        parents: [
            {
                role: "Père",
                name: "Paramout Pomsky Charm",
                breed: "Pomsky",
                generation: "F3",
                pedigree: "CE FFP 2025.059",
            },
            {
                role: "Mère",
                name: "Pweek",
                breed: "Pomsky",
                generation: "F3",
                pedigree: "Pédigrée FFP",
            },
        ],
    },
];

const puppiesUnsorted: Puppy[] = [
    {
        name: "BAÏKAL",
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
            "Baïkal est une femelle Pomsky noire et blanche issue de la portée Inuit et Mogu, née le 27 avril 2026. Son masque husky marqué, son pelage fluffy et son format attendu toy ou miniature en font un chiot très typé, suivi avec attention au fil de son évolution.",
        highlights: ["Femelle", "Masque husky marqué", "Pelage fluffy", "Format toy ou miniature"],
        health: defaultHealth,
        images: puppyImages("BAÏKAL", [
            "Baikal-femelle-pomsky-f4-1.jpg",
            "Baikal-femelle-pomsky-f4-2.jpg",
            "Baikal-femelle-pomsky-f4-3.jpg",
        ]),
        linkTo: formUrls.inuitMogu,
    },
    {
        name: "INUIT",
        coat: "Pomsky F4+ (ADN Poméranian / Husky)",
        color: "Noir et blanc",
        sexe: "Mâle",
        size: "Toy ou miniature",
        ruler: "Pelage fluffy",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : INUIT & MOGU",
        readyDate: "Disponible à la réservation",
        age: "Né le 27 avril 2026",
        description:
            "Inuit est un mâle Pomsky noir et blanc né le 27 avril 2026. Il présente un masque husky marqué, un pelage fluffy et un gabarit estimé toy ou miniature, avec une évolution suivie régulièrement à l'élevage.",
        highlights: ["Mâle", "Masque husky marqué", "Pelage fluffy", "Format toy ou miniature"],
        health: defaultHealth,
        images: puppyImages("INUIT", ["Inuit-pomsky-chiot-1.jpg", "Inuit-pomsky-chiot-2.jpg"]),
        linkTo: formUrls.inuitMogu,
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
        images: puppyImages("KIT", ["kit-pomsky-f4-1.jpg", "kit-pomsky-f4-2.jpg", "kit-pomsky-f4-3.jpg"]),
        linkTo: formUrls.inuitMogu,
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
            "Star est une femelle Pomsky issue de la portée Inuit et Mogu, née le 27 avril 2026. Son masque husky marqué, son pelage fluffy et son format attendu toy ou miniature sont suivis avec attention pendant sa croissance.",
        highlights: ["Femelle", "Masque husky marqué", "Pelage fluffy", "Format toy ou miniature"],
        health: defaultHealth,
        images: puppyImages("STAR", ["Star-femelle-pomsky-1.jpg", "star-femelle-pomsky-2.jpg", "star-femelle-pomsky-3.jpg"]),
        linkTo: formUrls.inuitMogu,
    },
    {
        name: "AMAROK",
        coat: "Pomsky F4+ (ADN Poméranian / Husky)",
        color: "Noir et blanc",
        sexe: "Mâle",
        size: "Toy ou miniature",
        ruler: "Pelage polaire standard",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : CHARM & ALOU",
        readyDate: "Disponible à la réservation",
        age: "Né le 30 avril 2026",
        description:
            "Amarok est un mâle Pomsky noir et blanc né le 30 avril 2026, issu de la portée Charm et Alou. Son masque husky marqué, son pelage polaire standard et son format attendu toy ou miniature composent un profil harmonieux.",
        highlights: ["Mâle", "Masque husky marqué", "Pelage polaire standard", "Format toy ou miniature"],
        health: defaultHealth,
        images: puppyImages("AMAROK", ["amarok-pomsky-toy-1.jpg", "amarok-pomsky-toy-2.jpg"]),
        linkTo: formUrls.charmAlou,
    },
    {
        name: "ALASKA",
        coat: "Pomsky F4+ (ADN Poméranian / Husky)",
        color: "Blanche polaire pinto avec quelques taches noires",
        sexe: "Femelle",
        size: "Toy ou miniature",
        ruler: "Pelage polaire husky",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : CHARM & ALOU",
        readyDate: "Disponible à la réservation",
        age: "Née le 30 avril 2026",
        description:
            "Alaska est une femelle Pomsky blanche polaire pinto, avec quelques taches noires, née le 30 avril 2026. Son pelage polaire husky et son format attendu toy ou miniature lui donnent une présence très douce et lumineuse.",
        highlights: ["Femelle", "Blanche polaire pinto", "Pelage polaire husky", "Format toy ou miniature"],
        health: defaultHealth,
        images: puppyImages("ALASKA", ["alaska-pomsky-femelle-1.jpg", "alaska-pomsky-femelle-2.jpg", "alaska-pomsky-femelle-3.jpg"]),
        linkTo: formUrls.charmAlou,
    },
    {
        name: "INUK",
        coat: "Pomsky F4+ (ADN Poméranian / Husky)",
        color: "Couleur husky marquée",
        sexe: "Mâle",
        size: "Toy ou miniature",
        ruler: "Pelage standard polaire",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : CHARM & ALOU",
        readyDate: "Disponible à la réservation",
        age: "Né le 30 avril 2026",
        description:
            "Inuk est un mâle Pomsky né le 30 avril 2026, à la couleur husky marquée. Son pelage standard polaire et son format attendu toy ou miniature seront suivis dans les prochaines semaines.",
        highlights: ["Mâle", "Couleur husky marquée", "Pelage standard polaire", "Format toy ou miniature"],
        health: defaultHealth,
        images: puppyImages("INUK", ["inuk-pomsky-male-1.jpg", "inuk-pomsky-male-2.jpg", "inuk-pomsky-male-3.jpg"]),
        linkTo: formUrls.charmAlou,
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
            "Alou Junior est une femelle Pomsky noire et blanche née le 30 avril 2026. Issue de Charm et Alou, elle présente un pelage polaire husky et un format attendu toy ou miniature.",
        highlights: ["Femelle", "Noire et blanche", "Pelage polaire husky", "Format toy ou miniature"],
        health: defaultHealth,
        images: puppyImages("ALOU JUNIOR", ["alou-pomsky-femelle-1.jpg", "alou-pomsky-femelle-2.jpg"]),
        linkTo: formUrls.charmAlou,
    },
    {
        name: "AMBRE",
        coat: "Pomsky F4+ (ADN Poméranian / Husky)",
        color: "Chocolat et blanche",
        sexe: "Femelle",
        size: "Toy estimé",
        ruler: "Pelage en cours d'évolution",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : PWEEK & CHARM",
        readyDate: "Disponible à la réservation",
        age: "Portée Pweek et Charm",
        description:
            "Ambre est une femelle Pomsky chocolat et blanche issue de la portée Pweek et Charm. Son marquage husky et sa taille adulte estimée toy sont suivis avec attention pendant sa croissance.",
        highlights: ["Femelle", "Chocolat et blanche", "Marquage husky", "Taille estimée toy"],
        health: defaultHealth,
        images: puppyImages("AMBRE", ["ambre-pomsky-marron-1.jpg", "ambre-pomsky-marron-2.jpg", "ambre-pomsky-marron-3.jpg"]),
        linkTo: formUrls.pweekCharm,
    },
    {
        name: "RÉMUS",
        coat: "Pomsky F4+ (ADN Poméranian / Husky)",
        color: "Gris et blanc",
        sexe: "Mâle",
        size: "Toy estimé",
        ruler: "Pelage standard polaire husky",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : PWEEK & CHARM",
        readyDate: "Disponible à la réservation",
        age: "Portée Pweek et Charm",
        description:
            "Rémus est un mâle Pomsky gris et blanc issu de la portée Pweek et Charm. Il présente un marquage husky, un pelage standard polaire husky et une taille adulte estimée toy.",
        highlights: ["Mâle", "Gris et blanc", "Marquage husky", "Taille estimée toy"],
        health: defaultHealth,
        images: puppyImages("RÉMUS", ["remus-pomsky-1.jpg", "remus-pomsky-2.jpg", "remus-pomsky-3.jpg"]),
        linkTo: formUrls.pweekCharm,
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
        highlights: ["Mâle", "Noir et blanc", "Marquage husky", "Taille estimée toy"],
        health: defaultHealth,
        images: puppyImages("LOKI", ["loki-pomsky-male-1.jpg"]),
        linkTo: formUrls.pweekCharm,
    },
    {
        name: "BELLATRIX",
        coat: "Pomsky F4+ (ADN Poméranian / Husky)",
        color: "Noire et blanche",
        sexe: "Femelle",
        size: "Toy présumé",
        ruler: "Pelage polaire husky",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : PWEEK & CHARM",
        readyDate: "Disponible à la réservation",
        age: "Portée Pweek et Charm",
        description:
            "Bellatrix est une femelle Pomsky noire et blanche issue de la portée Pweek et Charm. Son pelage polaire husky et son format présumé toy donnent déjà une belle lecture de type.",
        highlights: ["Femelle", "Noire et blanche", "Pelage polaire husky", "Toy présumé"],
        health: defaultHealth,
        images: puppyImages("BELLATRIX", ["bellatrix-pomsky-1.jpg", "bellatrix-pomsky-2.jpg"]),
        linkTo: formUrls.pweekCharm,
    },
    {
        name: "ARCANA",
        coat: "Pomsky F4+ (ADN Poméranian / Husky)",
        color: "Chocolat et blanche",
        sexe: "Femelle",
        size: "Toy estimé",
        ruler: "Pelage en cours d'évolution",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : PWEEK & CHARM",
        readyDate: "Disponible à la réservation",
        age: "Portée Pweek et Charm",
        description:
            "Arcana est une femelle Pomsky chocolat et blanche issue de la portée Pweek et Charm. Sa taille adulte est estimée toy, avec une évolution de pelage et de gabarit suivie à l'élevage.",
        highlights: ["Femelle", "Chocolat et blanche", "Taille estimée toy", "Portée Pweek et Charm"],
        health: defaultHealth,
        images: puppyImages("ARCANA", ["arkana-pomsky-1.jpg", "arkana-pomsky-2.jpg", "arkana-pomsky-3.jpg"]),
        linkTo: formUrls.pweekCharm,
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
        highlights: ["Mâle", "Pelage fluffy", "Yeux bleus", "Format toy ou miniature"],
        health: defaultHealth,
        images: puppyImages("SANO", ["sano-pomsky-toy-1.jpg", "sano-pomsky-toy-2.jpg", "sano-pomsky-toy-3.jpg"]),
        linkTo: formUrls.charmBeauty,
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
        highlights: ["Mâle", "Yeux bleus", "Pelage polaire husky", "Format toy ou miniature"],
        health: defaultHealth,
        images: puppyImages("KIRO", [
            "kiro-pomsky-miniature-1.jpg",
            "kiro-pomsky-miniature-2.jpg",
            "kiro-pomsky-miniature-3.jpg",
            "kiro-pomsky-miniature-4.jpg",
        ]),
        linkTo: formUrls.charmBeauty,
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
        images: puppyImages("NAYA", ["naya-pomsky-1.jpg", "naya-pomsky-2.jpg", "naya-pomsky-3.jpg"]),
        linkTo: formUrls.charmBeauty,
        isReserved: true,
    },
    {
        name: "LUMA",
        coat: "Pomsky F4+ (ADN Poméranian / Husky)",
        color: "Noire et blanche",
        sexe: "Femelle",
        size: "Toy ou miniature",
        ruler: "Pelage en cours d'évolution",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : CHARM & BEAUTY",
        readyDate: "Disponible à la réservation",
        age: "Née le 24 avril 2026",
        description:
            "Luma est une femelle Pomsky F4+ née le 24 avril 2026, issue de Charm et Beauty. Sa robe noire et blanche montre un masque husky bien défini, avec un format attendu toy ou miniature et une évolution suivie à l'élevage.",
        highlights: ["Femelle", "Noire et blanche", "Masque husky marqué", "Format toy ou miniature"],
        health: defaultHealth,
        images: puppyImages("LUMA", ["luma-pomsky-1.jpg", "luma-pomsky-2.jpg", "luma-pomsky-3.jpg", "luma-pomsky-4.jpg"]),
        linkTo: formUrls.charmBeauty,
    },
    {
        name: "AÏKA",
        coat: "Pomsky F4+ (ADN Poméranian / Husky)",
        color: "Noire et blanche",
        sexe: "Femelle",
        size: "Indéterminé",
        ruler: "Évolution en cours à ce stade néonatal",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : SKY & SALLY",
        readyDate: "Disponible à la réservation",
        age: "Née le 28 avril 2026",
        description:
            "Aïka est une femelle Pomsky F4+ née le 28 avril 2026, issue du mariage entre Sky et Sally. Sa robe noire et blanche présente déjà un masque husky bien marqué, avec une évolution suivie au fil des semaines.",
        highlights: ["Femelle", "Masque husky marqué", "Née le 28 avril 2026", "Format en cours d'évolution"],
        health: defaultHealth,
        images: puppyImages("AÏKA", [
            "Aika-femelle-pomsky-a-vendre.jpg",
            "Aika-femelle-pomsky-disponible.jpg",
            "AIka-femelle-pomsky-noir-et-blanche.jpg",
        ]),
        linkTo: formUrls.skySally,
    },
    {
        name: "BALTO",
        coat: "Pomsky F4+ (ADN Poméranian / Husky)",
        color: "Bleue et blanche",
        sexe: "Mâle",
        size: "Toy présumé",
        ruler: "Évolution en cours à ce stade néonatal",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : SKY & SALLY",
        readyDate: "Disponible à la réservation",
        age: "Né le 28 avril 2026",
        description:
            "Balto est un mâle Pomsky F4+ né le 28 avril 2026, issu du mariage entre Sky et Sally. Sa robe bleue et blanche, rare et contrastée, s'accompagne d'un masque husky marqué et d'un format présumé toy.",
        highlights: ["Mâle", "Robe exotique rare bleue", "Né le 28 avril 2026", "Format toy présumé"],
        health: defaultHealth,
        images: puppyImages("BALTO", [
            "Balto-chiot-f4-male.jpg",
            "Balto-pomsky-f4-male-disponible-pour-adoption.jpg",
            "Balto-chiot-disponible-royal-pomsky.jpg",
            "Balto-male-pomsky-a-vendre.jpg",
        ]),
        linkTo: formUrls.skySally,
    },
    {
        name: "LOUP",
        coat: "Pomsky F4+ (ADN Poméranian / Husky)",
        color: "Noir et blanc",
        sexe: "Mâle",
        size: "Indéterminé",
        ruler: "Évolution en cours à ce stade néonatal",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : SKY & SALLY",
        readyDate: "Disponible à la réservation",
        age: "Né le 28 avril 2026",
        description:
            "Loup est un mâle Pomsky F4+ né le 28 avril 2026, issu de Sky et Sally. Sa robe noire et blanche révèle un masque husky bien marqué, avec un format encore en cours d'évolution.",
        highlights: ["Mâle", "Masque husky marqué", "Né le 28 avril 2026", "Format en cours d'évolution"],
        health: defaultHealth,
        images: puppyImages("LOUP", [
            "Loup-pomsky-1.jpg",
            "loup-pomsky-2.jpg",
            "Loup-pomsky-3.jpg",
            "Loup-pomsky-4.jpg",
        ]),
        linkTo: formUrls.skySally,
    },
    {
        name: "LUNA",
        coat: "Pomsky F4+ (ADN Poméranian / Husky)",
        color: "Noire et blanche",
        sexe: "Femelle",
        size: "Indéterminé",
        ruler: "Évolution en cours à ce stade néonatal",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : SKY & SALLY",
        readyDate: "Disponible à la réservation",
        age: "Née le 28 avril 2026",
        description:
            "Luna est une femelle Pomsky F4+ née le 28 avril 2026, issue de Sky et Sally. Sa robe noire et blanche présente un masque husky bien dessiné, avec un format encore suivi pendant sa croissance.",
        highlights: ["Femelle", "Masque husky marqué", "Née le 28 avril 2026", "Format en cours d'évolution"],
        health: defaultHealth,
        images: puppyImages("LUNA", [
            "Luna-femelle-pomsky-f4-disponible.jpg",
            "Luna-pomsky-femelle-disponible.jpg",
            "Luna-pomsky-a-vendre-royal-pomsky.jpg",
        ]),
        linkTo: formUrls.skySally,
    },
    {
        name: "MIYU",
        coat: "Pomsky F4+ (ADN Poméranian / Husky)",
        color: "Chocolat clair et blanc",
        sexe: "Mâle",
        size: "Toy",
        ruler: "Pelage polaire husky",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : SKY & SALLY",
        readyDate: "Disponible à la réservation",
        age: "Né le 28 avril 2026",
        description:
            "Miyu est un Pomsky toy né le 28 avril 2026. Il présente un pelage polaire husky, des yeux bleus et un type doux, suivi dans la portée Sky et Sally.",
        highlights: ["Yeux bleus", "Pelage polaire husky", "Taille toy", "Portée Sky et Sally"],
        health: defaultHealth,
        images: puppyImages("MIYU", ["miyu-pomsky-1.jpg", "miyu-pomsky-2.jpg"]),
        linkTo: formUrls.skySally,
    },
    {
        name: "ORION",
        coat: "Pomsky F4+ (ADN Poméranian / Husky)",
        color: "Lilac / lavande et blanc",
        sexe: "Mâle",
        size: "Probablement miniature",
        ruler: "Pelage fluffy",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : SKY & SALLY",
        readyDate: "Disponible à la réservation",
        age: "Né le 28 avril 2026",
        description:
            "Orion est un mâle Pomsky F4+ né le 28 avril 2026, issu du mariage Sky et Sally. Sa robe lilac lavande et blanche, associée à un pelage fluffy, lui donne une expression rare.",
        highlights: ["Mâle", "Robe lilac / lavande", "Pelage fluffy", "Format probablement miniature"],
        health: defaultHealth,
        images: puppyImages("ORION", ["orion-pomsky-f4-1.jpg", "orion-pomsky-f4-2.jpg"]),
        linkTo: formUrls.skySally,
    },
    {
        name: "SORA",
        coat: "Pomsky F4+ (ADN Poméranian / Husky)",
        color: "Bleue et blanche",
        sexe: "Femelle",
        size: "Indéterminé",
        ruler: "Évolution en cours",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : SKY & SALLY",
        readyDate: "Disponible à la réservation",
        age: "Née le 28 avril 2026",
        description:
            "Sora est une femelle Pomsky F4+ née le 28 avril 2026, issue de Sky et Sally. Sa robe bleue et blanche évolue avec un type marqué et un format encore suivi à l'élevage.",
        highlights: ["Femelle", "Robe bleue et blanche", "Née le 28 avril 2026", "Format en cours d'évolution"],
        health: defaultHealth,
        images: puppyImages("SORA", ["sora-pomsky-f4-1.jpg", "sora-pomsky-f4-2.jpg"]),
        linkTo: formUrls.skySally,
    },
];

function getLitterBirthDateForPuppy(puppy: Puppy) {
    return litterCertifications.find((certification) => certification.parentLabel === puppy.parents)?.litterBirthDate ?? "9999-12-31";
}

export const puppies: Puppy[] = [...puppiesUnsorted].sort((a, b) =>
    getLitterBirthDateForPuppy(a).localeCompare(getLitterBirthDateForPuppy(b))
);
