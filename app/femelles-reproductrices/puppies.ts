export type Puppy = {
    name: string;
    coat: string;
    color?: string;
    weight: string;
    height: string;
    size: string;
    ruler?: string;
    description: string;
    title?: string;
    selection?: { title: string; paragraphs: string[] };
    health?: string[];
    highlights: string[];
    images: string[];
};

const puppiesUnsorted: Puppy[] = [
{
    "name": "'BULLE POMÉRANIEN'",
    "title": "BULLE – Femelle Spitz nain Poméranien à marquage Husky",
    "coat": "Spitz nain poméranien",
    "color": "Noire, grise et blanche",
    "size": "SPITZ NAIN POMÉRANIEN",
    "height": "Taille : 22 cm au garrot",
    "weight": "Poids : 3 kg",
    "description": "Bulle est une femelle Spitz nain Poméranien à marquage Husky, très joyeuse et douce. Proche de l’humain et sociable, elle recherche volontiers le contact et se montre très affectueuse.",
    "highlights": [
        "Femelle",
        "Marquage Husky",
        "Non LOF · couleur exotique"
    ],
    "images": [
        "pages/reproducteurs/bulle-pomeranien-marquage-husky-1.webp",
        "pages/reproducteurs/bulle-pomeranien-marquage-husky-2.webp"
    ]
},
{
    "name": "'APACHE POMÉRANIEN'",
    "title": "APACHE – Femelle Spitz nain Poméranien à marquage Husky",
    "coat": "Spitz nain poméranien",
    "color": "Grise, noire et blanche",
    "size": "SPITZ NAIN POMÉRANIEN",
    "height": "Taille : 21 cm au garrot",
    "weight": "Poids : 2,9 kg",
    "description": "Apache est une femelle Spitz nain Poméranien à marquage Husky, vive et intelligente. Joueuse et interactive, elle apprécie les échanges avec l’humain et se montre sociable.",
    "highlights": [
        "Femelle",
        "Marquage Husky",
        "Non LOF · couleur exotique"
    ],
    "images": [
        "pages/reproducteurs/apache-pomeranien-marquage-husky-1.webp",
        "pages/reproducteurs/apache-pomeranien-marquage-husky-2.webp",
        "pages/reproducteurs/apache-pomeranien-marquage-husky-3.webp",
        "pages/reproducteurs/apache-pomeranien-marquage-husky-4.webp",
        "pages/reproducteurs/apache-pomeranien-marquage-husky-5.webp"
    ]
},
{
    "name": "'BORÉAL POMÉRANIEN'",
    "title": "BORÉAL – Femelle Spitz nain Poméranien à marquage Husky",
    "coat": "Spitz nain poméranien",
    "color": "Bleue et blanche",
    "size": "SPITZ NAIN POMÉRANIEN",
    "height": "Taille : 21 cm au garrot",
    "weight": "Poids : 3 kg",
    "description": "Boréal est une femelle Spitz nain Poméranien à marquage Husky, douce et observatrice. Câline, joueuse et interactive, elle est proche de l’humain et sociable.",
    "highlights": [
        "Femelle",
        "Marquage Husky",
        "Non LOF · couleur exotique"
    ],
    "images": [
        "pages/reproducteurs/willow-pomeranien-marquage-husky-1.webp",
        "pages/reproducteurs/willow-pomeranien-marquage-husky-2.webp"
    ]
},
{
    "name": "'ALEU POMÉRANIEN'",
    "title": "ALEU – Femelle Spitz nain Poméranien à marquage Husky",
    "coat": "Spitz nain poméranien",
    "color": "Grise et blanche",
    "size": "SPITZ NAIN POMÉRANIEN",
    "height": "Taille : 24 cm au garrot",
    "weight": "Poids : 3,7 kg",
    "description": "Aleu est une femelle Spitz nain Poméranien à marquage Husky, vive et intelligente. Elle adore les jeux de balle et se montre joueuse, interactive, proche de l’humain et sociable.",
    "highlights": [
        "Femelle",
        "Marquage Husky",
        "Non LOF · couleur exotique"
    ],
    "images": [
        "pages/reproducteurs/aleu-pomeranien-marquage-husky-1.webp",
        "pages/reproducteurs/aleu-pomeranien-marquage-husky-2.webp",
        "pages/reproducteurs/aleu-pomeranien-marquage-husky-3.webp",
        "pages/reproducteurs/aleu-pomeranien-marquage-husky-4.webp",
        "pages/reproducteurs/aleu-pomeranien-marquage-husky-5.webp",
        "pages/reproducteurs/aleu-pomeranien-marquage-husky-6.webp"
    ]
},
{
    "name": "'TEMPÊTE POMÉRANIEN'",
    "title": "TEMPÊTE – Femelle Spitz nain Poméranien à marquage Husky",
    "coat": "Spitz nain poméranien",
    "color": "Bleue et blanche",
    "size": "SPITZ NAIN POMÉRANIEN",
    "height": "Taille : 18 cm au garrot",
    "weight": "Poids : 2,2 kg",
    "description": "Tempête est une femelle Spitz nain Poméranien à marquage Husky, très attachante et expressive. Drôle et interactive, elle se distingue par une personnalité singulière et un charme attendrissant.",
    "highlights": [
        "Femelle",
        "Marquage Husky",
        "Non LOF · couleur exotique"
    ],
    "images": [
        "pages/reproducteurs/tempete-pomeranien-marquage-husky-1.webp",
        "pages/reproducteurs/tempete-pomeranien-marquage-husky-2.webp",
        "pages/reproducteurs/tempete-pomeranien-marquage-husky-3.webp",
        "pages/reproducteurs/tempete-pomeranien-marquage-husky-4.webp"
    ]
},
{
    "name": "'LEGENDE'",
    "coat": "Spitz nain poméranien (ADN 100 % Spitz nain poméranien)",
    "size": "SPITZ NAIN POMÉRANIEN",
    "height": "Taille : 23 cm au garrot",
    "weight": "Poids : 3 kg",
    "title": "LEGENDE – Spitz nain Poméranien à marquage Husky | Notre programme Pomsky Toy & Micro",
    "description": "Légende est un mâle Spitz nain Poméranien à marquage Husky, vif, joyeux et observateur. Interactif et câlin, il est proche de l’humain et sociable. Il mesure 23 cm au garrot pour 3 kg. Sa robe rappelle les couleurs du Pomsky et du Husky, associées à la silhouette et à la fourrure généreuse du Poméranien. Il participe à notre programme de sélection de Pomsky Toy et Micro au sein de l’élevage Royal Pomsky.",
    "selection": {
        "title": "Un reproducteur pour notre programme Pomsky Toy et Micro",
        "paragraphs": [
            "Comme Inuk, Légende participe à notre travail de sélection autour des Poméraniens à marquage Husky et de nos lignées de Pomsky Toy et Micro.",
            "Notre programme vise à associer les petits formats au marquage caractéristique du Husky et du Pomsky."
        ]
    },
    "highlights": [
        "Mâle",
        "Marquage Husky",
        "Programme Pomsky Toy & Micro"
    ],
    "health": [
        "ADN maladies génétiques indemne",
        "ADN 100 % Spitz nain poméranien",
        "Testé Embark"
    ],
    "images": [
        "pages/reproducteurs/legende-pomeranien-marquage-husky-7.webp",
        "pages/reproducteurs/legende-pomeranien-marquage-husky-1.webp",
        "pages/reproducteurs/legende-pomeranien-marquage-husky-2.webp",
        "pages/reproducteurs/legende-pomeranien-marquage-husky-3.webp",
        "pages/reproducteurs/legende-pomeranien-marquage-husky-4.webp",
        "pages/reproducteurs/legende-pomeranien-marquage-husky-5.webp",
        "pages/reproducteurs/legende-pomeranien-marquage-husky-6.webp"
    ]
},
    {
        name: "'AYA'",
        coat: "Pomsky F5 (ADN pur Poméranian / Husky)",
        size: "POMSKY TOY / MICRO",
        height: "Taille : 24 cm au garrot",
        weight: "Poids : 3,3 kg",
        ruler: "Fourrure : fluffy coat",
        description:
            "Aya est une femelle Pomsky F5 de format toy / micro, née chez Royal Pomsky d’Akasha et Bandit. Elle mesure 24 cm au garrot pour 3,3 kg et se distingue par ses yeux bleus, son masque fleur de lys et sa fourrure fluffy coat. Elle est enregistrée à la Fédération Française du Pomsky et testée Embark.",
        highlights: ["Femelle", "Génération F5", "Yeux bleus", "Masque fleur de lys", "Née chez Royal Pomsky · Akasha & Bandit"],
        health: [
            "ADN maladies génétiques indemne",
            "Pomsky ADN pur (Poméranian / Husky)",
            "Enregistrée à la Fédération Française du Pomsky",
            "Testée Embark"
        ],
        images: [
            "pages/reproducteurs/aya-pomsky-toy-micro-f5-3.webp",
            "pages/reproducteurs/aya-pomsky-toy-micro-f5-1.webp",
            "pages/reproducteurs/aya-pomsky-toy-micro-f5-2.webp"
        ]
    },
    {
        name: "'SOOKIE'",
        coat: "Pomsky F4+ (ADN pur Poméranian / Husky)",
        size: "POMSKY TOY / MICRO",
        height: "Taille : 26 cm au garrot",
        weight: "Poids : 3,6 kg",
        ruler: "Fourrure : polaire standard type Husky",
        description:
            "Sookie est une femelle Pomsky F4+ de format toy / micro, née chez Royal Pomsky de Sushi et Charm. Elle mesure 26 cm au garrot pour 3,6 kg et se distingue par ses yeux bleus, son masque ouvert et sa fourrure polaire standard de type Husky. Elle est enregistrée à la Fédération Française du Pomsky et testée Embark.",
        highlights: ["Femelle", "Génération F4+", "Yeux bleus", "Masque ouvert", "Née chez Royal Pomsky · Sushi & Charm"],
        health: [
            "ADN maladies génétiques indemne",
            "Pomsky ADN pur (Poméranian / Husky)",
            "Enregistrée à la Fédération Française du Pomsky",
            "Testée Embark"
        ],
        images: [
            "pages/reproducteurs/sookie-pomsky-toy-micro-f4-plus-3.webp",
            "pages/reproducteurs/sookie-pomsky-toy-micro-f4-plus-1.webp",
            "pages/reproducteurs/sookie-pomsky-toy-micro-f4-plus-2.webp"
        ]
    },
    {
        name: "'IZZY'",
        coat: "Pomsky F4+ (ADN pur Poméranian / Husky)",
        size: "POMSKY TOY / MICRO",
        height: "Taille : 26 cm au garrot",
        weight: "Poids : 4,3 kg",
        ruler: "Fourrure : polaire standard type Husky",
        description:
            "Izzy est une femelle Pomsky F4+ de format toy / micro, née chez Royal Pomsky de Pweek et Charm. Elle mesure 26 cm au garrot pour 4,3 kg et se distingue par ses yeux bleus, son masque fleur de lys et sa fourrure polaire standard de type Husky. Elle est enregistrée à la Fédération Française du Pomsky et testée Embark.",
        highlights: ["Femelle", "Génération F4+", "Yeux bleus", "Masque fleur de lys", "Née chez Royal Pomsky · Pweek & Charm"],
        health: [
            "ADN maladies génétiques indemne",
            "Pomsky ADN pur (Poméranian / Husky)",
            "Enregistrée à la Fédération Française du Pomsky",
            "Testée Embark"
        ],
        images: [
            "pages/reproducteurs/izzy-pomsky-toy-micro-f4-plus-2.webp",
            "pages/reproducteurs/izzy-pomsky-toy-micro-f4-plus-1.webp",
            "pages/reproducteurs/izzy-pomsky-toy-micro-f4-plus-3.webp"
        ]
    },
    {
        name: "'AKASHA'",
        coat: "Pomsky toy F4 (ADN Poméranian / Husky)",
        color: "Chocolat et blanc",
        size: "POMSKY TOY",
        height: "Taille : 26 cm au garrot",
        weight: "Poids : 3,5 kg",
        ruler: "Fourrure : wooly coat",
        description:
            "Akasha est une femelle Pomsky toy F4 née chez Royal Pomsky. Elle mesure 26 cm au garrot pour 3,5 kg et possède une robe chocolat et blanc ainsi qu'une fourrure wooly coat. Elle est enregistrée à la Fédération Française du Pomsky et possède un pedigree FFP.",
        highlights: ["Femelle", "Génération F4", "Née chez Royal Pomsky"],
        health: [
            "ADN maladies génétiques indemne",
            "Pomsky X ADN (Poméranian / Husky)",
            "Enregistrée à la Fédération Française du Pomsky",
            "Pedigree FFP",
            "Testée Embark"
        ],
        images: [
            "pages/reproducteurs/akasha-pomsky-toy-f4-1.webp",
            "pages/reproducteurs/akasha-pomsky-toy-f4-2.webp",
            "pages/reproducteurs/akasha-pomsky-toy-f4-3.webp"
        ]
    },
    {
        name: "'FREYA'",
        coat: "Pomsky F4+ (ADN Poméranian / Husky / American Eskimo)",
        color: "Couleur rare Silver Wolf",
        size: "POMSKY PETIT STANDARD",
        height: "Taille : 39 cm au garrot",
        weight: "Poids : 9,5 kg",
        ruler: "Fourrure : fluffy coat",
        description:
            "Freya est une femelle Pomsky F4+ de format petit standard, importée des États-Unis et issue d'une lignée américaine. Elle mesure 39 cm au garrot pour 9,5 kg et se distingue par sa couleur rare Silver Wolf, ses yeux bleus, son masque ouvert et sa fourrure fluffy coat. Elle est enregistrée à la Fédération Française du Pomsky et possède un pedigree FFP.",
        highlights: ["Femelle", "Génération F4+", "Yeux bleus", "Masque ouvert", "Import USA · lignée américaine"],
        health: [
            "ADN maladies génétiques indemne",
            "Pomsky X ADN (Poméranian / Husky / American Eskimo)",
            "Enregistrée à la Fédération Française du Pomsky",
            "Pedigree FFP",
            "Testée Embark"
        ],
        images: [
            "pages/reproducteurs/freya-pomsky-silver-wolf-f4-plus-1.webp",
            "pages/reproducteurs/freya-pomsky-silver-wolf-f4-plus-2.webp",
            "pages/reproducteurs/freya-pomsky-silver-wolf-f4-plus-3.webp",
            "pages/reproducteurs/freya-pomsky-silver-wolf-f4-plus-4.webp"
        ]
    },
    {
        name: "'ANIEU'",
        coat: "Pomsky F4+ (ADN Poméranian / Husky / American Eskimo)",
        color: "Couleur rare Silver Wolf",
        size: "POMSKY PETIT STANDARD",
        height: "Taille : 39 cm au garrot",
        weight: "Poids : 9 kg",
        ruler: "Fourrure : fluffy coat",
        description:
            "Anieu est une femelle Pomsky F4+ de format petit standard, importée des États-Unis et issue d'une lignée américaine. Elle mesure 39 cm au garrot pour 9 kg et se distingue par sa couleur rare Silver Wolf, ses yeux bleus, son masque ouvert et sa fourrure fluffy coat. Elle est enregistrée à la Fédération Française du Pomsky et possède un pedigree FFP.",
        highlights: ["Femelle", "Génération F4+", "Yeux bleus", "Masque ouvert", "Import USA · lignée américaine"],
        health: [
            "ADN maladies génétiques indemne",
            "Pomsky X ADN (Poméranian / Husky / American Eskimo)",
            "Enregistrée à la Fédération Française du Pomsky",
            "Pedigree FFP",
            "Testée Embark"
        ],
        images: [
            "pages/reproducteurs/anieu-pomsky-silver-wolf-f4-plus-1.webp",
            "pages/reproducteurs/anieu-pomsky-silver-wolf-f4-plus-2.webp",
            "pages/reproducteurs/anieu-pomsky-silver-wolf-f4-plus-3.webp"
        ]
    },
    {
        name: "'STAR'",
        coat: "Pomsky F4+ (ADN Poméranian / Husky)",
        size: "POMSKY MINIATURE",
        height: "Taille : 38 cm au garrot",
        weight: "Poids : 8,7 kg",
        ruler: "Fourrure : fluffy coat",
        description:
            "Star est une femelle Pomsky F4+ de format miniature, née chez Royal Pomsky de Taiga et Sky. Elle mesure 38 cm au garrot pour 8,7 kg et se distingue par ses yeux vairons, son masque bandit et sa fourrure fluffy coat. Elle est enregistrée à la Fédération Française du Pomsky et possède un pedigree FFP.",
        highlights: ["Femelle", "Génération F4+", "Yeux vairons", "Masque bandit", "Née chez Royal Pomsky", "Parents : Taiga & Sky"],
        health: [
            "ADN maladies génétiques indemne",
            "Pomsky pur ADN (Poméranian / Husky)",
            "Enregistrée à la Fédération Française du Pomsky",
            "Pedigree FFP",
            "Testée Embark"
        ],
        images: [
            "pages/reproducteurs/star-pomsky-miniature-f4-plus-2.webp",
            "pages/reproducteurs/star-pomsky-miniature-f4-plus-1.webp",
            "pages/reproducteurs/star-pomsky-miniature-f4-plus-3.webp",
            "pages/reproducteurs/star-pomsky-miniature-f4-plus-4.webp"
        ]
    },
    {
        name: "'MOKA'",
        coat: "Pomsky F5 (ADN Poméranian / Husky)",
        size: "POMSKY STANDARD",
        height: "Taille : 39 cm au garrot",
        weight: "Poids : 10 kg",
        ruler: "Fourrure : fluffy coat",
        description:
            "Moka est une femelle Pomsky F5 de format standard, née chez Royal Pomsky d'Inuit et Mogu. Elle mesure 39 cm au garrot pour 10 kg et possède des yeux bleus ainsi qu'une fourrure fluffy coat. Elle est enregistrée à la Fédération Française du Pomsky et possède un pedigree FFP.",
        highlights: ["Femelle", "Génération F5", "Yeux bleus", "Née chez Royal Pomsky", "Parents : Inuit & Mogu"],
        health: [
            "ADN maladies génétiques indemne",
            "Pomsky X ADN (Poméranian / Husky)",
            "Enregistrée à la Fédération Française du Pomsky",
            "Pedigree FFP",
            "Testée Embark"
        ],
        images: [
            "pages/reproducteurs/moka-pomsky-standard-f5-1.webp",
            "pages/reproducteurs/moka-pomsky-standard-f5-2.webp"
        ]
    },
    {
        name: "'MOBLUE'",
        coat: "Pomsky F4+ (ADN Poméranian / Husky)",
        size: "POMSKY MINIATURE",
        height: "Taille : 35 cm au garrot",
        weight: "Poids : 7,8 kg",
        ruler: "Fourrure : fluffy coat",
        description:
            "Moblue est une femelle Pomsky F4+ de format miniature, née chez nous de Sally et Sky. Elle mesure 35 cm au garrot pour 7,8 kg et possède des yeux bleus ainsi qu'une fourrure fluffy coat. Elle est enregistrée à la Fédération Française du Pomsky et possède un pedigree FFP.",
        highlights: ["Femelle", "Génération F4+", "Yeux bleus", "Née chez nous de Sally & Sky"],
        health: [
            "ADN maladies génétiques indemne",
            "Pomsky X ADN (Poméranian / Husky)",
            "Enregistrée à la Fédération Française du Pomsky",
            "Pedigree FFP",
            "Testée Embark"
        ],
        images: [
            "pages/reproducteurs/moblue-pomsky-miniature-f4-plus-1.webp",
            "pages/reproducteurs/moblue-pomsky-miniature-f4-plus-2.webp"
        ]
    },
    {
        name: "'ARCANA'",
        coat: "Pomsky F4+ (ADN Poméranian / Husky)",
        size: "POMSKY en cours de croissance",
        height: "Taille : en cours de croissance",
        weight: "Poids : en cours de croissance",
        description:
            "Arcana est une femelle Pomsky F4+ née chez Royal Pomsky de Pweek et Charm. Encore en croissance, elle rejoindra notre programme d'élevage en tant que reproductrice en 2027. Elle est enregistrée à la Fédération Française du Pomsky et possède un pedigree FFP.",
        highlights: ["Femelle", "Génération F4+", "Née chez Royal Pomsky de Pweek & Charm", "Future reproductrice en 2027"],
        health: [
            "ADN maladies génétiques indemne",
            "Pomsky X ADN (Poméranian / Husky)",
            "Enregistrée à la Fédération Française du Pomsky",
            "Pedigree FFP"
        ],
        images: ["pages/reproducteurs/arcana-pomsky-f4-plus.webp"]
    },
    {
        name: "'APACHE'",
        title: "Apache dit Chouchou",
        coat: "Pomsky F5 (ADN Poméranian / Husky)",
        size: "POMSKY TOY MICRO",
        height: "Taille : 24 cm au garrot",
        weight: "Poids : 3 kg",
        ruler: "Fourrure : wooly coat",
        description:
            "Apache, dit Chouchou, est un mâle Pomsky F5 de format Toy Micro, né chez nous d'Inuit et Apache. Avec ses 24 cm au garrot pour 3 kg, il présente un petit gabarit, des yeux bleus et une fourrure wooly coat. Il est enregistré à la Fédération Française du Pomsky et possède un pedigree FFP.",
        highlights: ["Mâle", "Génération F5", "Yeux bleus", "Né chez nous d'Inuit & Apache"],
        health: [
            "ADN maladies génétiques indemne",
            "Pomsky X ADN (Poméranian / Husky)",
            "Enregistré à la Fédération Française du Pomsky",
            "Pedigree FFP",
            "Testé Embark"
        ],
        images: [
            "pages/reproducteurs/apache-pomsky-toy-micro-f5-2.webp",
            "pages/reproducteurs/apache-pomsky-toy-micro-f5-1.webp",
            "pages/reproducteurs/apache-pomsky-toy-micro-f5-3.webp",
            "pages/reproducteurs/apache-pomsky-toy-micro-f5-4.webp",
            "pages/reproducteurs/apache-pomsky-toy-micro-f5-5.webp"
        ]
    },
    {
        name: "'BALTO'",
        coat: "Pomsky F4+ (ADN Poméranian / Husky)",
        size: "Format en cours de croissance",
        height: "Taille : en cours de croissance",
        weight: "Poids : en cours de croissance",
        description:
            "Balto est un mâle Pomsky F4+ né chez Royal Pomsky de Sally et Sky. Encore en croissance, il rejoindra notre programme d'élevage en tant que reproducteur en 2027. Il est enregistré à la Fédération Française du Pomsky et possède un pedigree FFP.",
        highlights: ["Mâle", "Génération F4+", "Né chez Royal Pomsky de Sally & Sky", "Futur reproducteur en 2027"],
        health: [
            "ADN maladies génétiques indemne",
            "Pomsky X ADN (Poméranian / Husky)",
            "Enregistré à la Fédération Française du Pomsky",
            "Pedigree FFP",
            "Testé Embark"
        ],
        images: ["pages/reproducteurs/balto-pomsky-f4-plus.webp"]
    },
    {
        name: "'INUK'",
        coat: "Spitz nain poméranien (ADN 100 % Spitz nain poméranien)",
        color: "Bleu et blanc",
        size: "SPITZ NAIN POMÉRANIEN",
        height: "Taille : 18 cm au garrot",
        weight: "Poids : 1,4 kg",
        title: "INUK – Spitz nain Poméranien à marquage Husky | Notre programme Pomsky Toy & Micro",
        description: "Découvrez Inuk, notre magnifique mâle Spitz nain Poméranien à marquage Husky, qui se distingue par son gabarit exceptionnellement petit, sa robe bleue et blanche et ses yeux bruns expressifs.\n\nJoueur, attachant, sensible et sociable, Inuk apprécie les interactions et la compagnie. Avec seulement 18 cm au garrot pour 1,4 kg, Inuk possède une morphologie particulièrement miniature, associée à une robe aux dessins caractéristiques du Husky Sibérien.\n\nPorteur d’une particularité génétique à l’origine de son marquage Husky, Inuk présente une répartition des couleurs rappelant celle du Husky et du Pomsky, tout en conservant les caractéristiques physiques du Spitz nain Poméranien.",
        selection: {
            title: "Un reproducteur au cœur de notre sélection de Pomsky Toy et Micro",
            paragraphs: [
                "Inuk occupe une place particulière dans notre programme d’élevage et de sélection. Il participe au développement de notre lignée de Spitz nains Poméraniens à marquage Husky, mais également à notre travail de sélection autour du Pomsky miniature, Toy et Micro.",
                "Inuk est enregistré auprès de la Fédération Française du Pomsky (FFP) et participe à notre programme de sélection au sein de l’élevage Royal Pomsky."
            ]
        },
        highlights: ["Mâle", "Yeux bruns", "Couleur rare bleue et blanche"],
        health: [
            "ADN maladies génétiques indemne",
            "ADN 100 % Spitz nain poméranien",
            "Testé Embark"
        ],
        images: [
            "pages/reproducteurs/inuk-pomeranien-bleu-1.webp",
            "pages/reproducteurs/inuk-pomeranien-bleu-2.webp",
            "pages/reproducteurs/inuk-pomeranien-bleu-3.webp",
            "pages/reproducteurs/inuk-pomeranien-bleu-4.webp",
            "pages/reproducteurs/inuk-pomeranien-bleu-5.webp"
        ]
    },
    {
        name: "'ALOU'",
        coat: "Pomsky toy F3 (parents F2 - ADN Poméranian / Husky)",
        color: "Noire, grise et blanche",
        size: "POMSKY TOY",
        ruler: "Fourrure : type wooly (longue et douce, aspect laineux)",
        height: "Taille : 27 cm au garrot",
        weight: "Poids : 5 kg",
        description:
            "Alou est une femelle Pomsky F3 de catégorie Pomsky Toy, née chez Royal Pomsky, à la robe noire, grise et blanche et au masque bandit très expressif. Son regard vairon lui confère une expression singulière et pleine de caractère. Dotée d'une belle ossature pour son format, elle présente une morphologie équilibrée et harmonieuse. Sa fourrure wooly, longue et douce à l'aspect laineux, renforce son allure élégante. Bien socialisée et attentive, Alou incarne un profil Pomsky Toy à la fois typé, stable et attachant.",
        highlights: ["Femelle", "Masque bandit", "Yeux vairons"],
        health: [
            "Rotules 0/0",
            "MHOC indemne",
            "ADN maladies génétiques indemne",
            "Pomsky ADN pur (Poméranian / Husky)"
        ],
        images: [
            "pages/reproducteurs/alou-pomsky-toy-f3-1.webp",
            "pages/reproducteurs/alou-pomsky-toy-f3-2.webp"
        ]
    },
    {
        name: "'BAMBOU'",
        coat: "Pomsky toy F5 (ADN Poméranian / Husky)",
        color: "Noire et blanche",
        size: "POMSKY TOY",
        ruler: "Fourrure : type wooly (longue et douce, aspect laineux)",
        weight: "Poids : 4 kg",
        height: "Taille : 26 cm au garrot",
        description:
            "Bambou est une femelle Pomsky F5 née chez Royal Pomsky, au format Pomsky Toy, à la robe noire et blanche et au regard bleu lumineux. Son masque Fleur de Lys bien marqué et sa fourrure wooly, longue et soyeuse, lui donnent une allure élégante et très expressive. Bien équilibrée et proche de l'humain, elle présente un tempérament serein et harmonieux. Sa morphologie compacte et proportionnée, associée à une excellente qualité de poil, en fait une femelle F5 représentative du type Pomsky Toy stable et recherché.",
        highlights: ["Femelle", "Génération F5", "Masque Fleur de Lys"],
        health: [
            "Rotules 0/0",
            "MHOC indemne",
            "ADN maladies génétiques indemne",
            "Pomsky ADN pur (Poméranian / Husky)",
            "Testée Embark"
        ],
        images: [
            "BAMBOU-pomsky-miniature-f5.webp",
            "pages/reproducteurs/bambou-pomsky-toy-f5-2.webp",
            "pages/reproducteurs/bambou-pomsky-toy-f5-3.webp"
        ]
    },
    {
        name: "'BANDIT'",
        coat: "Pomsky F5+ (père F5, mère F4 - ADN Poméranian / Husky)",
        color: "Bleue (robe exotique)",
        size: "POMSKY TOY",
        ruler: "Fourrure : standard polaire type Husky",
        height: "Taille : 26 cm au garrot",
        weight: "Poids : 4 kg",
        description:
            "Bandit est un mâle Pomsky F5+ de catégorie Pomsky Toy, importé des États-Unis, à la robe bleue exotique et au regard bleu intense. Son masque husky de type Fleur de Lys et sa fourrure standard polaire lui confèrent une expression très typée dans un format compact. Bien équilibré et sûr de lui, il présente une belle stabilité comportementale et une morphologie harmonieuse. Enregistré à la Fédération Française du Pomsky, Bandit incarne un profil F5+ abouti, conforme et recherché.",
        highlights: ["Mâle", "Import USA", "Robe bleue exotique"],
        health: [
            "Rotules 0/0",
            "MHOC indemne",
            "ADN maladies génétiques indemne",
            "Pomsky ADN pur (Poméranian / Husky)",
            "Enregistré à la Fédération Française du Pomsky",
            "Testé Embark"
        ],
        images: [
            "BANDIT-pomsky-toy-f5.webp",
            "pages/reproducteurs/bandit-pomsky-toy-f5-plus-2.webp",
            "pages/reproducteurs/bandit-pomsky-toy-f5-plus-3.webp",
            "pages/reproducteurs/bandit-pomsky-toy-f5-plus-4.webp",
            "pages/reproducteurs/bandit-pomsky-toy-f5-plus-5.webp"
        ]
    },
    {
        name: "'BEAUTY'",
        coat: "Pomsky miniature F4 (ADN Poméranian / Husky)",
        color: "Noire et blanche",
        size: "POMSKY MINIATURE",
        ruler: "Fourrure : type fluffy",
        weight: "Poids : 8 kg",
        height: "Taille : 36 cm au garrot",
        description:
            "Beauty est une femelle Pomsky miniature F4 née chez Royal Pomsky, à la robe noire et blanche au marquage husky bien marqué et au regard bleu lumineux. Son pelage fluffy lui confère une allure douce et élégante, très expressive. Bien équilibrée et proche de l'humain, elle présente un tempérament harmonieux et serein. Sa morphologie compacte et proportionnée, associée à une excellente qualité de fourrure, fait d'elle une femelle raffinée et représentative du type Pomsky recherché.",
        highlights: ["Femelle", "Masque Fleur de Lys", "Pelage fluffy"],
        health: [
            "Rotules 0/0",
            "MHOC indemne",
            "ADN maladies génétiques indemne",
            "Pomsky ADN pur (Poméranian / Husky)",
            "Testée Embark"
        ],
        images: [
            "BEAUTY-pomsky-miniature-f4.webp",
            "pages/reproducteurs/beauty-pomsky-miniature-f4-2.webp",
            "pages/reproducteurs/beauty-pomsky-miniature-f4-3.webp",
            "pages/reproducteurs/beauty-pomsky-miniature-f4-4.webp",
            "pages/reproducteurs/beauty-pomsky-miniature-f4-5.webp"
        ]
    },
    {
        name: "'CHARM'",
        coat: "Pomsky toy F3 (ADN Poméranian / Husky)",
        color: "Noire et blanche",
        size: "POMSKY TOY",
        ruler: "Fourrure : standard polaire type Husky",
        height: "Taille : 30 cm au garrot",
        weight: "Poids : 4 kg",
        description:
            "Charm est un mâle Pomsky F3 de catégorie Pomsky Toy, importé des États-Unis, à la robe noire et blanche et au regard bleu intense. Son masque Fleur de Lys bien dessiné et sa fourrure standard polaire lui confèrent une expression husky très marquée dans un format compact. Équilibré et attentif, il présente un tempérament serein et harmonieux, tout en restant proche de l'humain. Sa morphologie proportionnée et sa belle qualité de poil font de lui un mâle Toy élégant et représentatif du type Pomsky recherché.",
        highlights: ["Mâle", "Import USA", "Masque Fleur de Lys"],
        health: [
            "Rotules 0/0",
            "MHOC indemne",
            "ADN maladies génétiques indemne",
            "Pomsky ADN pur (Poméranian / Husky)",
            "Testée Embark"
        ],
        images: [
            "pages/reproducteurs/charm-de-droite-pomsky.webp",
            "pages/reproducteurs/charm-de-face.webp",
            "pages/reproducteurs/CHARM-pomsky-toy-f3.webp"
        ]
    },
    {
        name: "'MOGU'",
        coat: "Pomsky miniature F4 (ADN Poméranian / Husky)",
        color: "Noire et blanche",
        size: "POMSKY MINIATURE",
        ruler: "Fourrure : type fluffy",
        weight: "Poids : 4,6 kg",
        height: "Taille : 27 cm au garrot",
        description:
            "Mogu est une femelle Pomsky F4 née chez Royal Pomsky, de catégorie Pomsky Miniature, à la robe noire et blanche et au regard bleu lumineux. Son masque Fleur de Lys bien dessiné et sa fourrure fluffy lui confèrent une allure douce et expressive, tout en conservant une belle typicité husky. Équilibrée et proche de l'humain, elle présente un tempérament serein et harmonieux. Sa morphologie compacte et proportionnée, associée à une excellente qualité de poil, fait d'elle une femelle F4 miniature élégante et représentative du type Pomsky recherché.",
        highlights: ["Femelle", "Génération F4", "Masque Fleur de Lys"],
        health: [
            "Rotules 0/0",
            "MHOC indemne",
            "ADN maladies génétiques indemne",
            "Pomsky ADN pur (Poméranian / Husky)",
            "Testée Embark"
        ],
        images: [
            "MOGU-pomsky-miniature-f4.webp",
            "pages/reproducteurs/mogu-pomsky-miniature-f4-2.webp",
            "pages/reproducteurs/mogu-pomsky-miniature-f4-3.webp",
            "pages/reproducteurs/mogu-pomsky-miniature-f4-4.webp",
            "pages/reproducteurs/mogu-pomsky-miniature-f4-5.webp"
        ]
    },
    {
        name: "'PWEEK'",
        coat: "Pomsky toy F3 (ADN Poméranian / Husky)",
        color: "Noire et blanche",
        size: "POMSKY TOY",
        ruler: "Fourrure : type wooly (longue et douce, aspect laineux)",
        weight: "Poids : 4,7 kg",
        height: "Taille : 27 cm au garrot",
        description:
            "Pweek est une femelle Pomsky F3 de catégorie Pomsky Toy, importée de Russie, à la robe noire et blanche et au masque bandit très expressif. Sa fourrure wooly, longue et douce à l'aspect laineux, lui confère une silhouette élégante et généreuse. Elle se distingue par un regard singulier, avec des yeux particolores bruns et la présence d'un œil bleu. Bien équilibrée et attentive, Pweek présente un tempérament harmonieux et une belle assurance, tout en restant proche de l'humain.",
        highlights: ["Femelle", "Import Russie", "Yeux particolores"],
        health: [
            "Rotules 0/0",
            "MHOC indemne",
            "ADN maladies génétiques indemne",
            "Pomsky ADN pur (Poméranian / Husky)",
            "Testée Embark"
        ],
        images: [
            "PWEEK-pomsky-toy-f3.webp",
            "pages/reproducteurs/pweek-pomsky-toy-f3-2.webp",
            "pages/reproducteurs/pweek-pomsky-toy-f3-3.webp",
            "pages/reproducteurs/pweek-pomsky-toy-f3-4.webp",
            "pages/reproducteurs/pweek-pomsky-toy-f3-5.webp"
        ]
    },
    {
        name: "'SALLY'",
        coat: "Pomsky miniature (ADN Poméranian / Husky)",
        color: "Chocolat et blanc (porteuse bleu et lavande)",
        size: "POMSKY MINIATURE",
        ruler: "Fourrure : standard polaire type Husky",
        height: "Taille : 39 cm au garrot",
        weight: "Poids : 9 kg",
        description:
            "Sally est une femelle Pomsky miniature née chez Royal Pomsky, à la robe chocolat et blanche, au regard bleu intense et au masque Fleur de Lys distinctif. Douce, attentive et proche de l'humain, elle se distingue par un tempérament équilibré et une belle sensibilité. Bien socialisée et confiante, elle évolue sereinement dans son environnement et développe des liens forts avec sa famille. Son allure élégante et sa fourrure polaire renforcent son charme naturel et son expression harmonieuse.",
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
        name: "'SHADOW'",
        coat: "Pomsky miniature F4 (ADN Poméranian / Husky)",
        color: "Noir et blanc (porteuse bleu et blanc)",
        size: "POMSKY MINIATURE",
        ruler: "Fourrure : standard polaire type Husky",
        height: "Taille : 36 cm au garrot",
        weight: "Poids : 7 kg",
        description:
            "Shadow est une femelle Pomsky miniature F4 née chez Royal Pomsky, au tempérament stable et harmonieux. Calme, attentive et proche de l'humain, elle se distingue par son équilibre émotionnel et sa belle prestance. Bien socialisée dès son plus jeune âge, elle évolue avec assurance dans son environnement et s'adapte facilement à la vie de famille. Sa fourrure polaire et son regard bleu particolore renforcent son allure élégante et expressive.",
        highlights: ["Femelle", "Caractère équilibré", "Yeux bleus particolores"],
        health: [
            "Rotules 0/0",
            "MHOC indemne",
            "ADN maladies génétiques indemne",
            "Testée Embark"
        ],
        images: [
            "pages/reproducteurs/shadow-pomsky-miniature-f4-1.webp",
            "pages/reproducteurs/shadow-pomsky-miniature-f4-2.webp",
            "SHADOW-pomsky-F4.webp"
        ]
    },
    {
        name: "'SHANE'",
        coat: "Pomsky miniature F3 (ADN Poméranian / Husky)",
        color: "Bleu et blanc (coloration rare)",
        size: "POMSKY MINIATURE",
        ruler: "Fourrure : standard polaire type Husky",
        height: "Taille : 38 cm au garrot",
        weight: "Poids : 9 kg",
        description:
            "Shane est une femelle Pomsky miniature F3 importée des États-Unis, à la robe bleue et blanche rare et au regard doux. Très affectueuse et joueuse, elle se distingue par un tempérament sensible et équilibré. Proche de l'humain, tactile et en demande de contact, elle apprécie observer la vie quotidienne tout en restant calme et attentive. Intelligente et observatrice, elle sait également prendre du recul face aux situations de tension. Sa morphologie est particulièrement harmonieuse, avec une ossature compacte et proportionnée, rappelant un véritable mini husky à l'allure élégante et fluide.",
        highlights: ["Femelle", "Import USA", "Couleur rare bleu et blanc"],
        health: [
            "Rotules 0/0",
            "MHOC indemne",
            "ADN maladies génétiques indemne",
            "Pomsky ADN pur (Poméranian / Husky)",
            "Testée Embark"
        ],
        images: [
            "pages/reproducteurs/shane-pomsky-miniature-f3-1.webp",
            "pages/reproducteurs/shane-pomsky-miniature-f3-2.webp",
            "pages/reproducteurs/shane-pomsky-miniature-f3-3.webp",
            "pages/reproducteurs/shane-pomsky-miniature-f3-4.webp"
        ]
    },
    {
        name: "'SKY'",
        coat: "Pomsky miniature F3+ (ADN Poméranian / Husky)",
        color: "Bleu et blanc (coloration rare)",
        size: "POMSKY MINIATURE",
        ruler: "Fourrure : type wooly",
        weight: "Poids : 8,6 kg",
        height: "Taille : 38 cm au garrot",
        description:
            "Sky est un mâle Pomsky miniature F3+ importé des États-Unis, à la robe bleue et blanche rare et au regard bleu perçant. Doté d'un tempérament stable et assuré, il se distingue par sa prestance naturelle, son intelligence et sa belle confiance. Très bien socialisé, il évolue avec aisance dans son environnement et transmet équilibre, caractère et qualité de fourrure. Son masque Fleur de Lys et sa fourrure wooly renforcent son allure expressive et son profil recherché en reproduction.",
        highlights: ["Mâle", "Import USA", "Couleur rare bleu et blanc"],
        health: [
            "Rotules 0/0",
            "MHOC indemne",
            "ADN maladies génétiques indemne",
            "Pomsky ADN pur (Poméranian / Husky)",
            "Testé Embark"
        ],
        images: [
            "SKY-pomsky-miniature-f3.webp",
            "pages/reproducteurs/sky-pomsky-miniature-f3-plus-2.webp",
            "pages/reproducteurs/sky-pomsky-miniature-f3-plus-3.webp",
            "pages/reproducteurs/sky-pomsky-miniature-f3-plus-4.webp",
            "pages/reproducteurs/sky-pomsky-miniature-f3-plus-5.webp",
            "pages/reproducteurs/sky-pomsky-miniature-f3-plus-6.webp"
        ]
    },
    {
        name: "'SUSHI'",
        coat: "Pomsky toy F3 (parents F2 - ADN Poméranian / Husky)",
        color: "Grise et blanche",
        size: "POMSKY TOY",
        ruler: "Fourrure : standard polaire type Husky",
        weight: "Poids : 4,5 kg",
        height: "Taille : 29 cm au garrot",
        description:
            "Sushi est une femelle Pomsky F3 de catégorie Pomsky Toy, née chez Royal Pomsky, à la robe grise et blanche et au regard bleu vif. Petite par la taille mais affirmée par le caractère, elle se distingue par une forte présence au sein du groupe et une capacité naturelle à se faire respecter. Très énergique en extérieur, elle se montre dynamique et volontaire lors des balades, tout en étant particulièrement affectueuse et proche de l'humain. Son masque Fleur de Lys et sa fourrure polaire standard renforcent son expression husky dans un format compact et harmonieux.",
        highlights: ["Femelle", "Caractère affirmé", "Masque Fleur de Lys"],
        health: [
            "Rotules 0/0",
            "MHOC indemne",
            "ADN maladies génétiques indemne",
            "Pomsky ADN pur (Poméranian / Husky)",
            "Testée Embark"
        ],
        images: [
            "SUSHI-pomsky-toy-f3.webp",
            "pages/reproducteurs/sushi-pomsky-toy-f3-2.webp",
            "pages/reproducteurs/sushi-pomsky-toy-f3-3.webp",
            "pages/reproducteurs/sushi-pomsky-toy-f3-4.webp",
            "pages/reproducteurs/sushi-pomsky-toy-f3-5.webp"
        ]
    },
    {
        name: "'BAÏKAL'",
        coat: "Pomsky toy F2 (ADN Poméranian / Husky)",
        color: "Bleue et blanche (rare)",
        size: "POMSKY TOY",
        ruler: "Fourrure : type wooly (longue et douce, aspect laineux)",
        weight: "Poids : 5,5 kg",
        height: "Taille : 27 cm au garrot",
        description:
            "Baïkal est une femelle Pomsky F2 de catégorie Pomsky Toy, importée des États-Unis, à la robe bleue et blanche rare et à la fourrure wooly d'une qualité exceptionnelle. Très affectueuse et en recherche de contact avec l'humain, elle se distingue par un tempérament doux, joueur et plutôt calme. Malicieuse et attachante, elle sait faire fondre son entourage par son comportement expressif. Sa morphologie est parfaitement conforme au standard du Pomsky Toy, avec un museau court, un stop bien marqué et une démarche fluide et élégante. Son regard brun aux reflets ambrés apporte une profondeur et une intensité remarquables à son expression.",
        highlights: ["Femelle", "Import USA", "Couleur bleue rare"],
        health: [
            "Rotules 0/0",
            "MHOC indemne",
            "ADN maladies génétiques indemne",
            "Pomsky ADN pur (Poméranian / Husky)",
            "Testée Embark"
        ],
        images: [
            "WILLOW-pomsky-toy-f2.webp",
            "pages/reproducteurs/willow-pomsky-toy-f2-2.webp",
            "pages/reproducteurs/willow-pomsky-toy-f2-3.webp",
            "pages/reproducteurs/willow-pomsky-toy-f2-4.webp"
        ]
    }
];

function parseMetric(value: string, label: "Taille" | "Poids") {
    const regex =
        label === "Taille"
            ? /Taille\s*:\s*([\d,.]+)\s*cm/i
            : /Poids\s*:\s*([\d,.]+)\s*kg/i;
    const match = value.match(regex);
    if (!match) return Number.POSITIVE_INFINITY;
    return Number.parseFloat(match[1].replace(",", "."));
}

export function getReproductorGroup(size: string) {
    const normalized = size.toLowerCase().trim();
    if (normalized.includes("poméranien")) return "Nos Poméraniens couleur Pomsky";
    if (normalized.includes("toy")) return "Nos Pomsky Toy / Micro";
    if (normalized.includes("mini")) return "Nos Pomsky Miniatures";
    if (normalized.includes("standard")) return "Nos Pomsky Standards";
    return "Nos futurs reproducteurs · format en cours de croissance";
}

function sizeRank(size: string) {
    const normalized = size.toLowerCase().trim();
    if (normalized.includes("poméranien")) return 4;
    if (normalized.includes("toy")) return 0;
    if (normalized.includes("mini")) return 1;
    if (normalized.includes("standard")) return 2;
    return 3;
}

export const puppies: Puppy[] = [...puppiesUnsorted].sort((a, b) => {
    const categoryDiff = sizeRank(a.size) - sizeRank(b.size);
    if (categoryDiff !== 0) return categoryDiff;

    if (a.size === "SPITZ NAIN POMÉRANIEN") {
        const sexDiff = Number(a.highlights.includes("Femelle")) - Number(b.highlights.includes("Femelle"));
        if (sexDiff !== 0) return sexDiff;
    }

    const weightDiff =
        parseMetric(a.weight, "Poids") - parseMetric(b.weight, "Poids");
    if (weightDiff !== 0) return weightDiff;

    return parseMetric(a.height, "Taille") - parseMetric(b.height, "Taille");
});
