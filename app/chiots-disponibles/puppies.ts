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
                name: "Paramout pomsky Charm",
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
];

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
            { src: "pages/puppies/Sano-chiot-pomsky-f4-1.jpg", alt: "SANO, chiot Pomsky male F4+ noir et blanc" },
            { src: "pages/puppies/Sano-chiot-pomsky-f4-nee-24-avril-2026.jpg", alt: "SANO, jeune chiot Pomsky male issu de Charm et Beauty" },
            { src: "pages/puppies/Sano-chiot-pomsky-f4-noir-et-blanc.jpg", alt: "SANO, chiot Pomsky noir et blanc au masque husky marque" },
            { src: "pages/puppies/sano-chiot-pomsky-f4-disponoble-adoption.jpg", alt: "SANO, chiot Pomsky male disponible a la reservation" },
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
            { src: "pages/puppies/Aika-femelle-pomsky-a-vendre.jpg", alt: "AIKA, chiot Pomsky femelle F4+ noire et blanche" },
            { src: "pages/puppies/Aika-femelle-pomsky-disponible.jpg", alt: "AIKA, jeune chiot Pomsky femelle disponible a la reservation" },
            { src: "pages/puppies/AIka-femelle-pomsky-noir-et-blanche.jpg", alt: "AIKA, chiot Pomsky femelle au masque husky marque" },
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
            { src: "pages/puppies/Balto-chiot-f4-male.jpg", alt: "BALTO, chiot Pomsky male F4+ bleu et blanc" },
            { src: "pages/puppies/Balto-pomsky-f4-male-disponible-pour-adoption.jpg", alt: "BALTO, jeune chiot Pomsky male a robe bleue et blanche" },
            { src: "pages/puppies/Balto-chiot-disponible-royal-pomsky.jpg", alt: "BALTO, chiot Pomsky male disponible chez Royal POMSKY" },
            { src: "pages/puppies/Balto-male-pomsky-a-vendre.jpg", alt: "BALTO, chiot Pomsky male au masque husky marque" },
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
            { src: "pages/puppies/Kiro-chiot-pomsky-f4.jpg", alt: "KIRO, chiot Pomsky male F4+ noir et blanc" },
            { src: "pages/puppies/kiro-chiot-pomsky-f4-disponible-adoption.jpg", alt: "KIRO, jeune chiot Pomsky male disponible a la reservation" },
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
            { src: "pages/puppies/Loup-male-pomsky-a-vendre.jpg", alt: "LOUP, chiot Pomsky male F4+ noir et blanc" },
            { src: "pages/puppies/Loup-male-pomsky-f4-a-vendre.jpg", alt: "LOUP, jeune chiot PomSky male au masque husky marque" },
            { src: "pages/puppies/Loup-pomsky-disponible-royal-pomsky.jpg", alt: "LOUP, chiot Pomsky male disponible chez Royal POMSKY" },
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
            { src: "pages/puppies/naya-chiot-pomsky-f4-nee-24-avril-2026.jpg", alt: "NAYA, chiot Pomsky femelle F4+ chocolat et blanc" },
            { src: "pages/puppies/naya-chiot-pomsky-f4-noir-et-blanc.jpg", alt: "NAYA, jeune chiot Pomsky femelle au masque husky bien defini" },
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
            { src: "pages/puppies/Luna-femelle-pomsky-f4-disponible.jpg", alt: "LUNA, chiot Pomsky femelle F4+ noire et blanche" },
            { src: "pages/puppies/Luna-pomsky-femelle-disponible.jpg", alt: "LUNA, jeune chiot Pomsky femelle disponible a la reservation" },
            { src: "pages/puppies/Luna-pomsky-a-vendre-royal-pomsky.jpg", alt: "LUNA, chiot Pomsky femelle au masque husky bien dessine" },
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
            { src: "pages/puppies/Luna-chiot-pomsky-f4-femelle-disponible.jpg", alt: "LUMA, chiot Pomsky femelle F4+ noir et blanc" },
            { src: "pages/puppies/luna-pomsky-nee-le-24-avril.jpg", alt: "LUMA, jeune chiot Pomsky femelle issue de Charm et Beauty" },
            { src: "pages/puppies/Luna-chiot-disponible-royal-pomsky.jpg", alt: "LUMA, chiot Pomsky femelle disponible a la reservation" },
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
            { src: "pages/puppies/Miyu-pomsky-f4-disponible.jpg", alt: "MIYU, chiot Pomsky male F4+ chocolat clair et blanc" },
            { src: "pages/puppies/MIYU-pomsky-male-a-vendre-royal-pomsky.jpg", alt: "MIYU, jeune chiot Pomsky male disponible chez Royal POMSKY" },
            { src: "pages/puppies/Miyu-omsky-chiots-disponible-royal-pomsky.jpg", alt: "MIYU, chiot Pomsky male au masque husky marque" },
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
            { src: "pages/puppies/Orion-pomsky-a-vendre-royal-pomsky.jpg", alt: "ORION, chiot Pomsky male F4+ lilac lavande et blanc" },
            { src: "pages/puppies/Orion-pomsky-f4-disponible.jpg", alt: "ORION, jeune chiot Pomsky male disponible a la reservation" },
            { src: "pages/puppies/Orion-pomsky-male-robe-exotique.jpg", alt: "ORION, chiot Pomsky male a robe exotique lavande" },
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
            { src: "pages/puppies/Sora-femelle-a-vendre-royal-pomsky.jpg", alt: "SORA, chiot Pomsky femelle F4+ bleue et blanche" },
            { src: "pages/puppies/Sora-disponible-royal-pomsky-f4-rara.jpg", alt: "SORA, jeune chiot Pomsky femelle disponible chez Royal POMSKY" },
            { src: "pages/puppies/Sora-pomsky-exotique-disponible.jpg", alt: "SORA, chiot Pomsky femelle a robe exotique bleue et blanche" },
        ],
        linkTo: "https://forms.gle/av3Tv3bbZ6T8ZF4Z7",
    }
];
