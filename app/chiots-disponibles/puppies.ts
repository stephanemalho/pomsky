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
};

export const puppies: Puppy[] = [
    {
        name: "ALUNA' de ROYAL POMSKY",
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
            "pages/puppies/ALUNA-pomsky-right.jpg",
            "pages/puppies/ALUNA-pomsky-6week-pet.jpg",
            "pages/puppies/ALUNA-puppy-eyes-open.webp",
        ],
        linkTo: "https://forms.gle/aDbQtgwXUtoaH5QFA",
        isReserved: true
    },
    {
        name: "THOR' de ROYAL POMSKY",
        coat: "Pomsky F5 (ADN Poméranian / Husky)",
        color: "RARE bleue et blanche",
        size: "miniature",
        ruler: "Pelage en cours de développement",
        weight: " 6-8kg adulte",
        sexe: "male",
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
            "pages/puppies/THOR-puppy-eye-open.jpg",
            "pages/puppies/THOR-male-pomsky-left.jpg",
            "pages/puppies/THOR-6-week-puppy-profile.jpg",
            "pages/puppies/THOR-6-week-puppy-paw-rased.jpg",
            "pages/puppies/THOR-pet-for-sale-rpyal-pomsky.jpg"
        ],
        linkTo: " https://forms.gle/oQT8xEvuTFgm753TA"
    },
    {
        name: "VUK' de ROYAL POMSKY",
        coat: "Pomsky F5 (ADN Poméranian / Husky)",
        color: "Noire et blanche",
        sexe: "Femmelle",
        size: "miniature à petit standard ",
        ruler: "Pelage fluffy",
        weight: "9-10kg",
        parents: "Parents : SHADOW & BANDIT",
        readyDate: "Disponible à partir du 15 mars 2026",
        age: "Né le 10 janvier 2026",
        description:
            "Vuk est un mâle Pomsky F5 aux yeux bleus et il est le plus grand chiot de la portée : gourmand, joueur et affectueux, il ressemble beaucoup à sa maman Shadow .",
        highlights: [
            "Mâle",
            "Masque Fleur de Lys",
            "Bleus",
            "Taille miniature"
        ],
        health: ["Suivi vétérinaire en cours"],
        images: [
            "pages/puppies/VUK-pomsky-face.jpg",
            "pages/puppies/VUK-pomsky-left.jpg",
            "pages/puppies/VUK-pomsky-right-side.jpg",
            "pages/puppies/VUK-snif-the-floor.jpg",
            "pages/puppies/VUK-pomsky-left-side.jpg"
        ],
        linkTo: "https://forms.gle/wtcxuo84YEQzposV9"
    },
    {
        name: "ASH' de ROYAL POMSKY",
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
            "pages/puppies/ASH-pomsky-eyes-open.jpg",
            "pages/puppies/ASH-pomsky-face.jpg",
            "pages/puppies/ASH-pomsky-left.jpg",
            "pages/puppies/ASH-femal-poppy-profile.jpg",
            "pages/puppies/ASH-popppy-pomsky-5-week.jpg"
        ],
        linkTo: "https://forms.gle/PCvEkzSfpdWTXt8A9"
    }
];
