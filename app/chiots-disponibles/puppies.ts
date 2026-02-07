export type Puppy = {
    name: string;
    coat: string;
    color: string;
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
};

export const puppies: Puppy[] = [
    {
        name: "ROYAL POMSKY 'ALUNA'",
        coat: "Pomsky F5 (ADN Poméranian / Husky)",
        color: "Noire et blanche",
        size: "Non déterminée pour le moment",
        ruler: "Pelage en cours de développement",
        weight: "Non déterminé pour le moment",
        parents: "Parents : SHADOW & BANDIT",
        readyDate: "Disponible à partir de mars 2026",
        age: "Née le 10 janvier 2026",
        description:
            "Aluna est une femelle Pomsky F5 issue du mariage entre Shadow et Bandit. À ce stade très précoce de son développement, certaines caractéristiques restent à confirmer. Son masque Fleur de Lys est déjà bien visible. Son pelage, sa taille adulte et son format définitif seront précisés au fil des semaines, dans le respect de son évolution naturelle.",
        highlights: [
            "Femelle",
            "Masque Fleur de Lys",
            "Yeux encore fermés",
            "Développement en cours"
        ],
        health: ["Suivi vétérinaire en cours"],
        images: [
            "pages/puppies/ALUNA-puppy-black-white-0.webp",
            "pages/puppies/ALUNA-puppy-black-white-1.webp",
            "pages/puppies/ALUNA-puppy-black-white-2.webp"
        ]
    },
    {
        name: "ROYAL POMSKY 'VUK'",
        coat: "Pomsky F5 (ADN Poméranian / Husky)",
        color: "Noire et blanche",
        size: "Non déterminée pour le moment",
        ruler: "Pelage en cours de développement",
        weight: "Non déterminé pour le moment",
        parents: "Parents : SHADOW & BANDIT",
        readyDate: "Disponible à partir de mars 2026",
        age: "Né le 10 janvier 2026",
        description:
            "Vuk est un mâle Pomsky F5 issu du mariage entre Shadow et Bandit. À ce stade précoce de son développement, certaines caractéristiques restent à confirmer. Son masque Fleur de Lys est déjà bien marqué. Son pelage définitif, son format adulte et sa taille finale seront précisés au fil des semaines, dans le respect de son évolution naturelle.",
        highlights: [
            "Mâle",
            "Masque Fleur de Lys",
            "Yeux encore fermés",
            "Développement en cours"
        ],
        health: ["Suivi vétérinaire en cours"],
        images: ["pages/puppies/VUK-puppy-black-white-0.webp", "pages/puppies/VUK-puppy-black-white-1.webp"]
    },
    {
        name: "ROYAL POMSKY 'THOR'",
        coat: "Pomsky F5 (ADN Poméranian / Husky)",
        color: "Bleue et blanche",
        size: "Non déterminée pour le moment",
        ruler: "Pelage en cours de développement",
        weight: "Non déterminé pour le moment",
        parents: "Parents : SHADOW & BANDIT",
        readyDate: "Disponible à partir de mars 2026",
        age: "Né le 10 janvier 2026",
        description:
            "Thor est un mâle Pomsky F5 issu du mariage entre Shadow et Bandit. À ce stade précoce de son développement, certaines caractéristiques restent à confirmer. Sa robe bleue et blanche est déjà bien marquée et son masque Fleur de Lys commence à se dessiner. Son pelage définitif, son format adulte et sa taille finale seront précisés progressivement, dans le respect de son évolution naturelle.",
        highlights: [
            "Mâle",
            "Robe bleue et blanche",
            "Masque Fleur de Lys",
            "Yeux encore fermés",
            "Développement en cours"
        ],
        health: ["Suivi vétérinaire en cours"],
        images: [
            "pages/puppies/THOR-male-pomsly-puppy-gray-white-0.webp",
            "pages/puppies/THOR-male-pomsly-puppy-gray-white-1.webp",
            "pages/puppies/THOR-male-pomsly-puppy-gray-white-2.webp"
        ]
    }
];
