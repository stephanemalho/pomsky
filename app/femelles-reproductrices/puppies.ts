export type Puppy = {
    name: string;
    coat: string;
    color: string;
    weight: string;
    size: string;
    ruler: string;
    description: string;
    health?: string[];
    highlights: string[];
    images: string[];
};

export const puppies: Puppy[] = [
    {
        name: "ROYAL POMSKY 'ALOU'",
        coat: "Pomsky F3 (parents F2 - ADN Poméranian / Husky)",
        color: "Noire, grise et blanche",
        size: "Toy",
        ruler: "Fourrure : type wooly (longue et douce, aspect laineux)",
        weight: "Taille : 27 cm au garrot • Poids : 5 kg",
        description:
            "Alou est une femelle Pomsky F3 de catégorie toy, née chez Royal Pomsky, à la robe noire, grise et blanche et au masque bandit très expressif. Son regard vairon lui confère une expression singulière et pleine de caractère. Dotée d'une belle ossature pour son format, elle présente une morphologie équilibrée et harmonieuse. Sa fourrure wooly, longue et douce à l'aspect laineux, renforce son allure élégante. Bien socialisée et attentive, Alou incarne un profil Pomsky toy à la fois typé, stable et attachant.",
        highlights: ["Femelle", "Masque bandit", "Yeux vairons"],
        health: [
            "Rotules 0/0",
            "MHOC indemne",
            "ADN maladies génétiques indemne",
            "Pomsky ADN pur (Poméranian / Husky)"
        ],
        images: ["ALOU-pomsky-toy-f3.webp"]
    },
    {
        name: "ROYAL POMSKY 'BAMBOU'",
        coat: "Pomsky F5 (ADN Poméranian / Husky)",
        color: "Noire et blanche",
        size: "Toy",
        ruler: "Fourrure : type wooly (longue et douce, aspect laineux)",
        weight: "Taille : 26 cm au garrot • Poids : 4 kg",
        description:
            "Bambou est une femelle Pomsky F5 née chez Royal Pomsky, au format toy, à la robe noire et blanche et au regard bleu lumineux. Son masque Fleur de Lys bien marqué et sa fourrure wooly, longue et soyeuse, lui donnent une allure élégante et très expressive. Bien équilibrée et proche de l'humain, elle présente un tempérament serein et harmonieux. Sa morphologie compacte et proportionnée, associée à une excellente qualité de poil, en fait une femelle F5 représentative du type Pomsky stable et recherché.",
        highlights: ["Femelle", "Génération F5", "Masque Fleur de Lys"],
        health: [
            "Rotules 0/0",
            "MHOC indemne",
            "ADN maladies génétiques indemne",
            "Pomsky ADN pur (Poméranian / Husky)",
            "Testée Embark"
        ],
        images: ["BAMBOU-pomsky-miniature-f5.webp"]
    },
    {
        name: "ROYAL POMSKY 'BANDIT'",
        coat: "Pomsky F5+ (père F5, mère F4 - ADN Poméranian / Husky)",
        color: "Bleue (robe exotique)",
        size: "Toy",
        ruler: "Fourrure : standard polaire type Husky",
        weight: "Taille : 26 cm au garrot • Poids : 4 kg",
        description:
            "Bandit est un mâle Pomsky F5+ de catégorie toy, importé des États-Unis, à la robe bleue exotique et au regard bleu intense. Son masque husky de type Fleur de Lys et sa fourrure standard polaire lui confèrent une expression très typée dans un format compact. Bien équilibré et sûr de lui, il présente une belle stabilité comportementale et une morphologie harmonieuse. Enregistré à la Fédération Française du Pomsky, Bandit incarne un profil F5+ abouti, conforme et recherché.",
        highlights: ["Mâle", "Import USA", "Robe bleue exotique"],
        health: [
            "Rotules 0/0",
            "MHOC indemne",
            "ADN maladies génétiques indemne",
            "Pomsky ADN pur (Poméranian / Husky)",
            "Enregistré à la Fédération Française du Pomsky",
            "Testé Embark"
        ],
        images: ["BANDIT-pomsky-toy-f5.webp"]
    },
    {
        name: "ROYAL POMSKY 'BEAUTY'",
        coat: "Pomsky F4 (ADN Poméranian / Husky)",
        color: "Noire et blanche",
        size: "Mini",
        ruler: "Fourrure : type fluffy",
        weight: "Taille : 36 cm au garrot • Poids : 8 kg",
        description:
            "Beauty est une femelle Pomsky F4 née chez Royal Pomsky, à la robe noire et blanche au marquage husky bien marqué et au regard bleu lumineux. Son pelage fluffy lui confère une allure douce et élégante, très expressive. Bien équilibrée et proche de l'humain, elle présente un tempérament harmonieux et serein. Sa morphologie compacte et proportionnée, associée à une excellente qualité de fourrure, fait d'elle une femelle raffinée et représentative du type Pomsky recherché.",
        highlights: ["Femelle", "Masque Fleur de Lys", "Pelage fluffy"],
        health: [
            "Rotules 0/0",
            "MHOC indemne",
            "ADN maladies génétiques indemne",
            "Pomsky ADN pur (Poméranian / Husky)",
            "Testée Embark"
        ],
        images: ["BEAUTY-pomsky-miniature-f4.webp"]
    },
    {
        name: "ROYAL POMSKY 'CHARM'",
        coat: "Pomsky F3 (ADN Poméranian / Husky)",
        color: "Noire et blanche",
        size: "Toy",
        ruler: "Fourrure : standard polaire type Husky",
        weight: "Taille : 30 cm au garrot • Poids : 4 kg",
        description:
            "Charm est un mâle Pomsky F3 de catégorie toy, importée des États-Unis, à la robe noire et blanche et au regard bleu intense. Son masque Fleur de Lys bien dessiné et sa fourrure standard polaire lui confèrent une expression husky très marquée dans un format compact. Équilibrée et attentive, elle présente un tempérament serein et harmonieux, tout en restant proche de l'humain. Sa morphologie proportionnée et sa belle qualité de poil font d'elle un mâle toy élégante et représentative du type Pomsky recherché.",
        highlights: ["Mâle", "Import USA", "Masque Fleur de Lys"],
        health: [
            "Rotules 0/0",
            "MHOC indemne",
            "ADN maladies génétiques indemne",
            "Pomsky ADN pur (Poméranian / Husky)",
            "Testée Embark"
        ],
        images: ["pages/reproducteurs/charm-de-droite-pomsky.webp","pages/reproducteurs/charm-de-face.webp","pages/reproducteurs/CHARM-pomsky-toy-f3.webp"]
    },
    {
        name: "ROYAL POMSKY 'INUIT'",
        coat: "Pomsky F5 (père F4, mère F4 - ADN Poméranian / Husky)",
        color: "Chocolat et blanc",
        size: "Toy",
        ruler: "Fourrure : standard polaire type Husky",
        weight: "Taille : 26 cm au garrot • Poids : 3,5 kg",
        description:
            "Inuit est un mâle Pomsky F5 de catégorie toy, importé des États-Unis, à la robe chocolat et blanche et au regard bleu lumineux. Son masque husky de type bandit lui confère une expression vive et affirmée, parfaitement typée. Doté d'une morphologie compacte et équilibrée, il présente une excellente ossature pour son format. Sa fourrure polaire standard, dense et bien structurée, souligne son allure harmonieuse. Enregistré à la Fédération Française du Pomsky, Inuit incarne un profil F5 stable, conforme et recherché, tant sur le plan morphologique que génétique.",
        highlights: ["Mâle", "Import USA", "Masque bandit"],
        health: [
            "Rotules 0/0",
            "MHOC indemne",
            "ADN maladies génétiques indemne",
            "Pomsky ADN pur (Poméranian / Husky)",
            "Enregistré à la Fédération Française du Pomsky",
            "Testé Embark"
        ],
        images: ["INUIT-pomsky-toy-f5.webp"]
    },
    {
        name: "ROYAL POMSKY 'MOGU'",
        coat: "Pomsky F4 (ADN Poméranian / Husky)",
        color: "Noire et blanche",
        size: "Miniature",
        ruler: "Fourrure : type fluffy",
        weight: "Taille : 27 cm au garrot • Poids : 4,6 kg",
        description:
            "Mogu est une femelle Pomsky F4 née chez Royal Pomsky, de catégorie miniature, à la robe noire et blanche et au regard bleu lumineux. Son masque Fleur de Lys bien dessiné et sa fourrure fluffy lui confèrent une allure douce et expressive, tout en conservant une belle typicité husky. Équilibrée et proche de l'humain, elle présente un tempérament serein et harmonieux. Sa morphologie compacte et proportionnée, associée à une excellente qualité de poil, fait d'elle une femelle F4 miniature élégante et représentative du type Pomsky recherché.",
        highlights: ["Femelle", "Génération F4", "Masque Fleur de Lys"],
        health: [
            "Rotules 0/0",
            "MHOC indemne",
            "ADN maladies génétiques indemne",
            "Pomsky ADN pur (Poméranian / Husky)",
            "Testée Embark"
        ],
        images: ["MOGU-pomsky-miniature-f4.webp"]
    },
    {
        name: "ROYAL POMSKY 'PWEEK'",
        coat: "Pomsky F3 (ADN Poméranian / Husky)",
        color: "Noire et blanche",
        size: "Toy",
        ruler: "Fourrure : type wooly (longue et douce, aspect laineux)",
        weight: "Taille : 27 cm au garrot • Poids : 4,7 kg",
        description:
            "Pweek est une femelle Pomsky F3 de catégorie toy, importée de Russie, à la robe noire et blanche et au masque bandit très expressif. Sa fourrure wooly, longue et douce à l'aspect laineux, lui confère une silhouette élégante et généreuse. Elle se distingue par un regard singulier, avec des yeux particolor brun et la présence d'un œil bleu. Bien équilibrée et attentive, Pweek présente un tempérament harmonieux et une belle assurance, tout en restant proche de l'humain.",
        highlights: ["Femelle", "Import Russie", "Yeux particolor"],
        health: [
            "Rotules 0/0",
            "MHOC indemne",
            "ADN maladies génétiques indemne",
            "Pomsky ADN pur (Poméranian / Husky)",
            "Testée Embark"
        ],
        images: ["PWEEK-pomsky-toy-f3.webp"]
    },
    {
        name: "ROYAL POMSKY 'SALLY'",
        coat: "Pomsky (ADN Poméranian / Husky)",
        color: "Chocolat et blanc (porteuse bleu et lavande)",
        size: "Mini",
        ruler: "Fourrure : standard polaire type Husky",
        weight: "Taille : 39 cm au garrot • Poids : 9 kg",
        description:
            "Sally est une femelle Pomsky miniature à la robe chocolat et blanche, au regard bleu intense et au masque Fleur de Lys distinctif. Douce, attentive et proche de l'humain, elle se distingue par un tempérament équilibré et une belle sensibilité. Bien socialisée et confiante, elle évolue sereinement dans son environnement et développe des liens forts avec sa famille. Son allure élégante et sa fourrure polaire renforcent son charme naturel et son expression harmonieuse.",
        highlights: ["Femelle", "Masque Fleur de Lys", "Yeux bleus"],
        health: [
            "Rotules 0/0",
            "MHOC indemne",
            "ADN maladies génétiques indemne",
            "Pomsky ADN pur (Poméranian / Husky)",
            "Testée Embark"
        ],
        images: ["SALLY-pomsky-miniature.webp"]
    },
    {
        name: "ROYAL POMSKY 'SHADOW'",
        coat: "Pomsky F4 (ADN Poméranian / Husky)",
        color: "Noir et blanc (porteuse bleu et blanc)",
        size: "Mini",
        ruler: "Fourrure : standard polaire type Husky",
        weight: "Taille : 39 cm au garrot • Poids : 9 kg",
        description:
            "Shadow est une femelle Pomsky F4 au tempérament stable et harmonieux. Calme, attentive et proche de l'humain, elle se distingue par son équilibre émotionnel et sa belle prestance. Bien socialisée dès son plus jeune âge, elle évolue avec assurance dans son environnement et s'adapte facilement à la vie de famille. Sa fourrure polaire et son regard bleu particolor renforcent son allure élégante et expressive.",
        highlights: ["Femelle", "Caractère équilibré", "Yeux bleus particolor"],
        health: [
            "Rotules 0/0",
            "MHOC indemne",
            "ADN maladies génétiques indemne",
            "Testée Embark"
        ],
        images: ["SHADOW-pomsky-F4.webp"]
    },
    {
        name: "ROYAL POMSKY 'SHANE'",
        coat: "Pomsky F3 (ADN Poméranian / Husky)",
        color: "Bleu et blanc (coloration rare)",
        size: "Mini",
        ruler: "Fourrure : standard polaire type Husky",
        weight: "Taille : 38 cm au garrot • Poids : 9 kg",
        description:
            "Shane est une femelle Pomsky F3 importée des États-Unis, à la robe bleu et blanche rare et au regard doux. Très affectueuse et joueuse, elle se distingue par un tempérament sensible et équilibré. Proche de l'humain, tactile et en demande de contact, elle apprécie observer la vie quotidienne tout en restant calme et attentive. Intelligente et observatrice, elle sait également prendre du recul face aux situations de tension. Sa morphologie est particulièrement harmonieuse, avec une ossature compacte et proportionnée, rappelant un véritable mini husky à l'allure élégante et fluide.",
        highlights: ["Femelle", "Import USA", "Couleur rare bleu et blanc"],
        health: [
            "Rotules 0/0",
            "MHOC indemne",
            "ADN maladies génétiques indemne",
            "Pomsky ADN pur (Poméranian / Husky)",
            "Testée Embark"
        ],
        images: ["SHANE-pomsky-miniature-f3.webp"]
    },
    {
        name: "ROYAL POMSKY 'SKY'",
        coat: "Pomsky F3+ (ADN Poméranian / Husky)",
        color: "Bleu et blanc (coloration rare)",
        size: "Mini",
        ruler: "Fourrure : type whooly",
        weight: "Taille : 38 cm au garrot • Poids : 8,6 kg",
        description:
            "Sky est un mâle Pomsky F3+ importé des États-Unis, à la robe bleu et blanche rare et au regard bleu perçant. Doté d'un tempérament stable et assuré, il se distingue par sa prestance naturelle, son intelligence et sa belle confiance. Très bien socialisé, il évolue avec aisance dans son environnement et transmet équilibre, caractère et qualité de fourrure. Son masque Fleur de Lys et sa fourrure whooly renforcent son allure expressive et son profil recherché en reproduction.",
        highlights: ["Mâle", "Import USA", "Couleur rare bleu et blanc"],
        health: [
            "Rotules 0/0",
            "MHOC indemne",
            "ADN maladies génétiques indemne",
            "Pomsky ADN pur (Poméranian / Husky)",
            "Testé Embark"
        ],
        images: ["SKY-pomsky-miniature-f3.webp"]
    },
    {
        name: "ROYAL POMSKY 'SUSHI'",
        coat: "Pomsky F3 (parents F2 - ADN Poméranian / Husky)",
        color: "Grise et blanche",
        size: "Toy",
        ruler: "Fourrure : standard polaire type Husky",
        weight: "Taille : 29 cm au garrot • Poids : 4,5 kg",
        description:
            "Sushi est une femelle Pomsky F3 de catégorie toy, née chez Royal Pomsky, à la robe grise et blanche et au regard bleu vif. Petite par la taille mais affirmée par le caractère, elle se distingue par une forte présence au sein du groupe et une capacité naturelle à se faire respecter. Très énergique en extérieur, elle se montre dynamique et volontaire lors des balades, tout en étant particulièrement affectueuse et proche de l'humain. Son masque Fleur de Lys et sa fourrure polaire standard renforcent son expression husky dans un format compact et harmonieux.",
        highlights: ["Femelle", "Caractère affirmé", "Masque Fleur de Lys"],
        health: [
            "Rotules 0/0",
            "MHOC indemne",
            "ADN maladies génétiques indemne",
            "Pomsky ADN pur (Poméranian / Husky)",
            "Testée Embark"
        ],
        images: ["SUSHI-pomsky-toy-f3.webp"]
    },
    {
        name: "ROYAL POMSKY 'WILLOW'",
        coat: "Pomsky F2 (ADN Poméranian / Husky)",
        color: "Bleue et blanche (rare)",
        size: "Toy",
        ruler: "Fourrure : type wooly (longue et douce, aspect laineux)",
        weight: "Taille : 29 cm au garrot • Poids : 5,5 kg",
        description:
            "Willow est une femelle Pomsky F2 de catégorie toy, importée des États-Unis, à la robe bleue et blanche rare et à la fourrure wooly d'une qualité exceptionnelle. Très affectueuse et en recherche de contact avec l'humain, elle se distingue par un tempérament doux, joueur et plutôt calme. Malicieuse et attachante, elle sait faire fondre son entourage par son comportement expressif. Sa morphologie est parfaitement conforme au standard du Pomsky toy, avec un museau court, un stop bien marqué et une démarche fluide et élégante. Son regard brun aux reflets ambrés apporte une profondeur et une intensité remarquables à son expression.",
        highlights: ["Femelle", "Import USA", "Couleur bleue rare"],
        health: [
            "Rotules 0/0",
            "MHOC indemne",
            "ADN maladies génétiques indemne",
            "Pomsky ADN pur (Poméranian / Husky)",
            "Testée Embark"
        ],
        images: ["WILLOW-pomsky-toy-f2.webp"]
    }
];
