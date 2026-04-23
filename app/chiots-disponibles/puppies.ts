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
    isAdopted?: boolean;
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
        weight: "7kg adulte",
        parents: "Parents : SHADOW & BANDIT",
        readyDate: "Réservé",
        age: "Né le 10 janvier 2026",
        description:
            "VUK est un magnifique chiot Pomsky F5, une génération rare, au format miniature et au superbe pelage fluffy noir et blanc. Très proche de l’humain, c’est un chiot affectueux, intelligent, attentif et déjà très agréable à vivre au quotidien. Il est propre, ne mordille pas, connaît les bases comme le « assis », marche en laisse au pied et revient très bien au rappel. VUK pourra rejoindre sa famille dès maintenant. Il est né le 10 janvier 2026, est issu de SHADOW et BANDIT, et atteindra environ 7 kg à l’âge adulte. Il partira avec son passeport, son schéma vaccinal complet et un certificat vétérinaire de bonne santé. Ses parents ont été testés ADN via Embark, et il est issu d’une lignée avec pedigree de la Fédération Française du Pomsky.",
        highlights: [
            "Mâle",
            "Masque Fleur de Lys",
            "Yeux vairons",
            "Taille miniature"
        ],
        health: ["Suivi vétérinaire en cours"],
        images: [
            "pages/puppies/VUK-male-pomsky-f5-3.jpeg",
        ],
        linkTo: "https://forms.gle/wtcxuo84YEQzposV9",
        isReserved: true,
        price: 3500,
        priceCurrency: "EUR",
        priceIncludes: "ttc",
        priceValidUntil: "2026-12-31"
    },
    {
        name: "ALUNA",
        coat: "Pomsky Toy F5 (ADN Poméranian / Husky)",
        sexe: "Femelle",
        color: "Noire et blanche",
        size: "Toy",
        ruler: "Pelage fluffy",
        weight: "4-5kg",
        parents: "Parents : SHADOW & BANDIT",
        readyDate: "A rejoint sa famille",
        age: "Née le 10 janvier 2026",
        description:
            "Aluna est une femelle Pomsky Toy F5 issue du mariage entre Shadow et Bandit. Son masque husky en Fleur de Lys est absolument parfait, c'est une femelle douce curieuse et intelligente qui ressemblera fortement à sa maman Shadow.",
        highlights: [
            "Femelle",
            "Masque Fleur de Lys",
            "Yeux bleus",
            "Taille adulte miniature"
        ],
        health: ["Suivi vétérinaire en cours"],
        images: [
            "pages/puppies/Aluna-pomsky-chiot-femellle-a-vendre.jpeg",
        ],
        linkTo: "https://forms.gle/aDbQtgwXUtoaH5QFA",
        isAdopted: true,
        price: 4500,
        priceCurrency: "EUR",
        priceIncludes: "ttc",
        priceValidUntil: "2026-12-31"
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
        readyDate: "A rejoint sa famille",
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
        ],
        linkTo: "https://forms.gle/oQT8xEvuTFgm753TA",
        isAdopted: true,
        price: 4500,
        priceCurrency: "EUR",
        priceIncludes: "ttc",
        priceValidUntil: "2026-12-31"
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
        readyDate: "A rejoint sa famille",
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
        ],
        linkTo: "https://forms.gle/PCvEkzSfpdWTXt8A9",
        isAdopted: true,
        price: 3500,
        priceCurrency: "EUR",
        priceIncludes: "ttc",
        priceValidUntil: "2026-12-31"
    }
];
