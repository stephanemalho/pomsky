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
            "pages/puppies/Sano-chiot-pomsky-f4-1.jpg",
            "pages/puppies/Sano-chiot-pomsky-f4-nee-24-avril-2026.jpg",
            "pages/puppies/Sano-chiot-pomsky-f4-noir-et-blanc.jpg",
            "pages/puppies/sano-chiot-pomsky-f4-disponoble-adoption.jpg",
        ],
        linkTo: "https://forms.gle/vk4BX8T1ifDXug8TA",
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
            "Aïka est une femelle Pomsky F4+ née le 28 avril 2026, issue du mariage entre Sky et Sally. Sa robe noire et blanche présente déjà un masque husky bien marqué. À ce stade néonatal, son format reste encore indéterminé et son évolution sera suivie avec attention au fil des prochaines semaines.",
        highlights: [
            "Femelle",
            "Masque husky marqué",
            "Née le 28 avril 2026",
            "Format en cours d'évolution"
        ],
        health: ["Suivi vétérinaire en cours"],
        images: [
            "pages/puppies/Aika-femelle-pomsky-a-vendre.jpg",
            "pages/puppies/Aika-femelle-pomsky-disponible.jpg",
            "pages/puppies/AIka-femelle-pomsky-noir-et-blanche.jpg",
        ],
        linkTo: "https://forms.gle/av3Tv3bbZ6T8ZF4Z7",
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
            "Balto est un mâle Pomsky F4+ né le 28 avril 2026, issu du mariage entre Sky et Sally. Sa robe exotique rare bleue et blanche attire déjà le regard, avec un masque husky bien marqué. À ce stade néonatal, ses yeux ne sont pas encore ouverts et son format est pour l'instant présumé toy.",
        highlights: [
            "Mâle",
            "Robe exotique rare bleue",
            "Né le 28 avril 2026",
            "Format toy présumé"
        ],
        health: ["Suivi vétérinaire en cours"],
        images: [
            "pages/puppies/Balto-chiot-f4-male.jpg",
            "pages/puppies/Balto-pomsky-f4-male-disponible-pour-adoption.jpg",
            "pages/puppies/Balto-chiot-disponible-royal-pomsky.jpg",
            "pages/puppies/Balto-male-pomsky-a-vendre.jpg",
        ],
        linkTo: "https://forms.gle/av3Tv3bbZ6T8ZF4Z7",
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
            "Loup est un mâle Pomsky F4+ né le 28 avril 2026, issu du mariage entre Sky et Sally. Sa robe noire et blanche révèle déjà un masque husky bien marqué. À ce stade néonatal, ses yeux ne sont pas encore ouverts et son format reste encore indéterminé.",
        highlights: [
            "Mâle",
            "Masque husky marqué",
            "Né le 28 avril 2026",
            "Format en cours d'évolution"
        ],
        health: ["Suivi vétérinaire en cours"],
        images: [
            "pages/puppies/Loup-male-pomsky-a-vendre.jpg",
            "pages/puppies/Loup-male-pomsky-f4-a-vendre.jpg",
            "pages/puppies/Loup-pomsky-disponible-royal-pomsky.jpg",
        ],
        linkTo: "https://forms.gle/av3Tv3bbZ6T8ZF4Z7",
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
            "Luna est une femelle Pomsky F4+ née le 28 avril 2026, issue du mariage entre Sky et Sally. Sa robe noire et blanche présente déjà un masque husky bien dessiné. À ce stade néonatal, son format reste encore indéterminé et son évolution sera observée au fil des semaines à venir.",
        highlights: [
            "Femelle",
            "Masque husky marqué",
            "Née le 28 avril 2026",
            "Format en cours d'évolution"
        ],
        health: ["Suivi vétérinaire en cours"],
        images: [
            "pages/puppies/Luna-femelle-pomsky-f4-disponible.jpg",
            "pages/puppies/Luna-pomsky-femelle-disponible.jpg",
            "pages/puppies/Luna-pomsky-a-vendre-royal-pomsky.jpg",
        ],
        linkTo: "https://forms.gle/av3Tv3bbZ6T8ZF4Z7",
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
        name: "MIYU",
        coat: "Pomsky F4+ (ADN Poméranian / Husky)",
        color: "Chocolat clair et blanc",
        sexe: "Mâle",
        size: "Toy présumé",
        ruler: "Évolution en cours à ce stade néonatal",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : SKY & SALLY",
        readyDate: "Disponible à la réservation",
        age: "Né le 28 avril 2026",
        description:
            "Miyu est un mâle Pomsky F4+ né le 28 avril 2026, issu du mariage entre Sky et Sally. Sa robe chocolat clair et blanche lui donne déjà une expression très douce, avec un masque husky bien marqué. À ce stade néonatal, ses yeux ne sont pas encore ouverts et son format est pour l'instant présumé toy.",
        highlights: [
            "Mâle",
            "Chocolat clair et blanc",
            "Né le 28 avril 2026",
            "Format toy présumé"
        ],
        health: ["Suivi vétérinaire en cours"],
        images: [
            "pages/puppies/Miyu-pomsky-f4-disponible.jpg",
            "pages/puppies/MIYU-pomsky-male-a-vendre-royal-pomsky.jpg",
            "pages/puppies/Miyu-omsky-chiots-disponible-royal-pomsky.jpg",
        ],
        linkTo: "https://forms.gle/av3Tv3bbZ6T8ZF4Z7",
    },
    {
        name: "ORION",
        coat: "Pomsky F4+ (ADN Poméranian / Husky)",
        color: "Lilac / lavande et blanc",
        sexe: "Mâle",
        size: "Probablement miniature",
        ruler: "Évolution en cours à ce stade néonatal",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : SKY & SALLY",
        readyDate: "Disponible à la réservation",
        age: "Né le 28 avril 2026",
        description:
            "Orion est un mâle Pomsky F4+ né le 28 avril 2026, issu du mariage entre Sky et Sally. Sa robe exotique rare lilac lavande et blanche se distingue déjà, accompagnée d'un masque husky bien marqué. À ce stade néonatal, ses yeux ne sont pas encore ouverts et son format semble s'orienter vers un gabarit probablement miniature.",
        highlights: [
            "Mâle",
            "Robe exotique lilac / lavande",
            "Né le 28 avril 2026",
            "Format probablement miniature"
        ],
        health: ["Suivi vétérinaire en cours"],
        images: [
            "pages/puppies/Orion-pomsky-a-vendre-royal-pomsky.jpg",
            "pages/puppies/Orion-pomsky-f4-disponible.jpg",
            "pages/puppies/Orion-pomsky-male-robe-exotique.jpg",
        ],
        linkTo: "https://forms.gle/av3Tv3bbZ6T8ZF4Z7",
    },
    {
        name: "SORA",
        coat: "Pomsky F4+ (ADN Poméranian / Husky)",
        color: "Bleue et blanche",
        sexe: "Femelle",
        size: "Indéterminé",
        ruler: "Évolution en cours à ce stade néonatal",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : SKY & SALLY",
        readyDate: "Disponible à la réservation",
        age: "Née le 28 avril 2026",
        description:
            "Sora est une femelle Pomsky F4+ née le 28 avril 2026, issue du mariage entre Sky et Sally. Sa robe exotique rare bleue et blanche révèle déjà un masque husky bien marqué. À ce stade néonatal, ses yeux ne sont pas encore ouverts et son format reste encore indéterminé.",
        highlights: [
            "Femelle",
            "Robe exotique rare bleue",
            "Née le 28 avril 2026",
            "Format en cours d'évolution"
        ],
        health: ["Suivi vétérinaire en cours"],
        images: [
            "pages/puppies/Sora-femelle-a-vendre-royal-pomsky.jpg",
            "pages/puppies/Sora-disponible-royal-pomsky-f4-rara.jpg",
            "pages/puppies/Sora-pomsky-exotique-disponible.jpg",
        ],
        linkTo: "https://forms.gle/av3Tv3bbZ6T8ZF4Z7",
    }
];
