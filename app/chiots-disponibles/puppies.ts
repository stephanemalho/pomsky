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
        name: "SANO",
        coat: "Pomsky F4+ (ADN Poméranian / Husky)",
        color: "Noir et blanc",
        sexe: "Mâle",
        size: "Toy ou miniature",
        ruler: "Longueur du pelage indéterminée (évolution en cours)",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : CHARM & BEAUTY",
        readyDate: "Disponible à la réservation",
        age: "Né le 24 avril 2026",
        description:
            "Sano est un mâle Pomsky F4+ né le 24 avril 2026, issu du mariage entre Charm et Beauty. Sa robe noire et blanche présente déjà un masque husky bien défini avec un très beau contraste. À ce stade néonatal, ses yeux ne sont pas encore ouverts et son pelage comme son gabarit continuent d'évoluer, avec un format attendu toy ou miniature.",
        highlights: [
            "Mâle",
            "Masque husky marqué",
            "Né le 24 avril 2026",
            "Format toy ou miniature"
        ],
        health: ["Suivi vétérinaire en cours"],
        images: [
            "pages/puppies/Sano-chiot-pomsky-f4-nee-24-avril-2026.jpg",
            "pages/puppies/Sano-chiot-pomsky-f4-1.jpg",
            "pages/puppies/Sano-chiot-pomsky-f4-noir-et-blanc.jpg",
            "pages/puppies/sano-chiot-pomsky-f4-disponoble-adoption.jpg",
        ],
        linkTo: "https://forms.gle/vk4BX8T1ifDXug8TA",
    },
    {
        name: "KIRO",
        coat: "Pomsky F4+ (ADN Poméranian / Husky)",
        color: "Noir et blanc",
        sexe: "Mâle",
        size: "Toy ou miniature",
        ruler: "Longueur du pelage indéterminée (évolution en cours)",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : CHARM & BEAUTY",
        readyDate: "Disponible à la réservation",
        age: "Né le 24 avril 2026",
        description:
            "Kiro est un mâle Pomsky F4+ né le 24 avril 2026, issu du mariage entre Charm et Beauty. Sa robe noire et blanche laisse déjà voir un masque husky bien défini et un contraste marqué. Ses yeux sont encore fermés à cet âge néonatal, et l'évolution de son pelage ainsi que de son gabarit reste à suivre, avec un format attendu toy ou miniature.",
        highlights: [
            "Mâle",
            "Masque husky marqué",
            "Né le 24 avril 2026",
            "Format toy ou miniature"
        ],
        health: ["Suivi vétérinaire en cours"],
        images: [
            "pages/puppies/Kiro-chiot-pomsky-f4.jpg",
            "pages/puppies/kiro-chiot-pomsky-f4-disponible-adoption.jpg",
        ],
        linkTo: "https://forms.gle/vk4BX8T1ifDXug8TA",
    },
    {
        name: "NAYA",
        coat: "Pomsky F4+ (ADN Poméranian / Husky)",
        color: "Chocolat et blanc",
        sexe: "Femelle",
        size: "Toy",
        ruler: "Longueur du pelage indéterminée (évolution en cours)",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : CHARM & BEAUTY",
        readyDate: "Disponible à la réservation",
        age: "Née le 24 avril 2026",
        description:
            "Naya est une femelle Pomsky F4+ née le 24 avril 2026, issue du mariage entre Charm et Beauty. Sa robe chocolat et blanche présente déjà un masque husky bien défini avec un contraste marqué. À ce stade néonatal, ses yeux ne sont pas encore ouverts et son évolution reste à suivre, avec un format attendu toy.",
        highlights: [
            "Femelle",
            "Chocolat et blanc",
            "Née le 24 avril 2026",
            "Format toy"
        ],
        health: ["Suivi vétérinaire en cours"],
        images: [
            "pages/puppies/naya-chiot-pomsky-f4-nee-24-avril-2026.jpg",
            "pages/puppies/naya-chiot-pomsky-f4-noir-et-blanc.jpg",
        ],
        linkTo: "https://forms.gle/vk4BX8T1ifDXug8TA",
    },
    {
        name: "LUMA",
        coat: "Pomsky F4+ (ADN Poméranian / Husky)",
        color: "Noir et blanc",
        sexe: "Femelle",
        size: "Toy ou miniature",
        ruler: "Longueur du pelage indéterminée (évolution en cours)",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : CHARM & BEAUTY",
        readyDate: "Disponible à la réservation",
        age: "Née le 24 avril 2026",
        description:
            "Luma est une femelle Pomsky F4+ née le 24 avril 2026, issue du mariage entre Charm et Beauty. Sa robe noire et blanche montre déjà un masque husky bien défini et un joli contraste. Ses yeux sont encore fermés à cet âge néonatal, et son pelage comme son gabarit sont encore en cours d'évolution, avec un format attendu toy ou miniature.",
        highlights: [
            "Femelle",
            "Masque husky marqué",
            "Née le 24 avril 2026",
            "Format toy ou miniature"
        ],
        health: ["Suivi vétérinaire en cours"],
        images: [
            "pages/puppies/Luna-chiot-pomsky-f4-femelle-disponible.jpg",
            "pages/puppies/luna-pomsky-nee-le-24-avril.jpg",
            "pages/puppies/Luna-chiot-disponible-royal-pomsky.jpg",
        ],
        linkTo: "https://forms.gle/vk4BX8T1ifDXug8TA",
    },
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
