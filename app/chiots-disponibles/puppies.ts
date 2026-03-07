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
    images: string[];
    linkTo: string;
    isReserved?: boolean;
    price?: number;
    priceCurrency?: string;
    priceIncludes?: string;
    priceValidUntil?: string;
};

export const puppies: Puppy[] = [
     {
        name: "VUK",
        coat: "Pomsky F5 (ADN Poméranian / Husky)",
        color: "Noir et blanc",
        sexe: "Mâle",
        size: "miniature",
        ruler: "Pelage fluffy",
        weight: "7-8kg",
        parents: "Parents : SHADOW & BANDIT",
        readyDate: "Disponible à partir du 15 mars 2026",
        age: "Né le 10 janvier 2026",
        description:
            "Vuk est un mâle Pomsky F5 aux yeux Vairons et il est le plus grand chiot de la portée (il va faire 7 à 8kg adulte): gourmand, joueur et affectueux, il ressemble beaucoup à sa maman Shadow. Voici les caractéristiques de Vuk : un masque en Fleur de Lys, une robe noire et blanche, des yeux vairons (un bleu et un marron) et une taille miniature. Vuk est un chiot très sociable qui adore les câlins et les jeux avec les enfants. Protitez de cette liste de photos pour découvrir son évolution et son caractère attachant ! (à 8 semaines)",
        highlights: [
            "Mâle",
            "Masque Fleur de Lys",
            "Vairons",
            "Taille miniature",
        ],
        health: ["Suivi vétérinaire en cours"],
        images: [
            "pages/puppies/VUK-pomsky-7-week.webp",
            "pages/puppies/VUK-pomsky-left-profile.webp",
            "pages/puppies/VUK-pomsky-face-side.webp",
            "pages/puppies/VUK-pomky-puppy.webp",
            "pages/puppies/Vuk-pomsky-available-for-adoption.webp",
            "pages/puppies/VUK-pomsky-from-royal-pomsky.webp"
        ],
        linkTo: "https://forms.gle/wtcxuo84YEQzposV9",
        isReserved: false,
        price: 3800,
        priceCurrency: "EUR",
        priceIncludes: "Tout frais compris",
        priceValidUntil: "2026-03-31"
    },
    {
        name: "ALUNA",
        coat: "Pomsky F5 (ADN Poméranian / Husky)",
        sexe: "Femelle",
        color: "Noire et blanche",
        size: "Miniature",
        ruler: "Pelage fluffy",
        weight: "7-8kg",
        parents: "Parents : SHADOW & BANDIT",
        readyDate: "Disponible à partir du 15 mars 2026",
        age: "Née le 10 janvier 2026",
        description:
            "Aluna est une femelle Pomsky F5 issue du mariage entre Shadow et Bandit. Son masque husky en Fleur de Lys est absolument parfait, c'est une femelle douce curieuse et intelligente qui ressemblera fortement à sa maman Shadow .",
        highlights: [
            "Femelle",
            "Masque Fleur de Lys",
            "Yeux bleus",
            "Taille adulte miniature"
        ],
        health: ["Suivi vétérinaire en cours"],
        images: [
            "pages/puppies/ALUNA-pomsky-right.webp",
            "pages/puppies/ALUNA-pomsky-6week-pet.webp",
            "pages/puppies/ALUNA-puppy-eyes-open.webp"
        ],
        linkTo: "https://forms.gle/aDbQtgwXUtoaH5QFA",
        isReserved: true
    },
    {
        name: "THOR",
        coat: "Pomsky F5 (ADN Poméranian / Husky)",
        color: "RARE bleue et blanche",
        size: "miniature",
        ruler: "Pelage en cours de développement",
        weight: " 6-8kg adulte",
        sexe: "Mâle",
        parents: "Parents : SHADOW & BANDIT",
        readyDate: "Disponible à partir du 15 mars 2026",
        age: "Né le 10 janvier 2026",
        description:
            "THOR est un superbe Pomsky bleu à la robe exotique lumineuse et extraordinaire  Son masque Fleur de Lys est déjà bien visible. Son caractère : doux, docile, câlin et joueur ! Il ressemblera à la fois à sa maman Shadow et à son papa bandit.",
        highlights: [
            "Mâle",
            "Masque Fleur de Lys",
            "Yeux bleus",
            "Taille miniature"
        ],
        health: ["Suivi vétérinaire en cours"],
        images: [
            "pages/puppies/THOR-puppy-eye-open.webp",
            "pages/puppies/THOR-6-week-puppy-paw-rased.webp",
            "pages/puppies/THOR-pet-for-sale-rpyal-pomsky.webp",
            "pages/puppies/THOR-6-week-puppy-profile.webp",
            "pages/puppies/THOR-male-pomsky-left.webp"
        ],
        linkTo: "https://forms.gle/oQT8xEvuTFgm753TA",
        isReserved: true
    },
    {
        name: "ASH",
        coat: "Pomsky F5 (ADN Poméranian / Husky)",
        color: "Noire et blanche",
        sexe: "Mâle",
        size: "Miniature",
        ruler: "fluffy",
        weight: "7-8kg adulte",
        parents: "Parents : SHADOW & BANDIT",
        readyDate: "Disponible à partir du 15 mars 2026",
        age: "Né le 10 janvier 2026",
        description:
            "Ash est un mâle Pomsky F5 issu du mariage entre Shadow et Bandit. Sa robe noire et blanche est sublime et brillante, rappelle celle de sa maman Shadow, son caractère est affectueux, proche de l'humain et très sociable.",
        highlights: [
            "Mâle",
            "Robe noire et blanche",
            "Masque Fleur de Lys",
            "Bruns",
            "Taille miniature"
        ],
        health: ["Suivi vétérinaire en cours"],
        images: [
            "pages/puppies/ASH-pomsky-eyes-open.webp",
            "pages/puppies/ASH-pomsky-face.webp",
            "pages/puppies/ASH-pomsky-left.webp",
            "pages/puppies/ASH-femal-poppy-profile.webp",
            "pages/puppies/ASH-popppy-pomsky-5-week.webp"
        ],
        linkTo: "https://forms.gle/PCvEkzSfpdWTXt8A9",
        isReserved: true
    }
];
