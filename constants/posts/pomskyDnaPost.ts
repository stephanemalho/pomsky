import type { BlogPost } from "@/constants/blog/blogTypes";

export const dogAdnTestPost: BlogPost = {
    id: "test-adn-chien",
    slug: "pomsky/genetique/a-quoi-sert-test-adn-chien",
    title: "À quoi sert le test ADN d'un chien ?",
    excerpt:
        "Pourquoi réaliser un test ADN pour son chien ? Découvrez son utilité, son fonctionnement, les informations obtenues et l'intérêt particulier pour les races comme le Pomsky.",
    introduction:
        "Pourquoi faire un test ADN pour son chien et comment le réaliser ? Si vous vous posez des questions sur la génétique canine, vous êtes au bon endroit. Le test ADN permet d'en apprendre davantage sur les origines, la santé et les caractéristiques génétiques de votre compagnon, quelle que soit sa race.",
    sections: [
        {
            subtitle: "Tests ADN pour chiens : à quoi ça sert",
            paragraphs: [
                "Le test ADN canin permet d'analyser le patrimoine génétique d'un chien afin d'obtenir des informations précieuses sur ses origines, ses caractéristiques physiques et sa santé.",
                "Il s'adresse aussi bien aux particuliers curieux qu'aux éleveurs soucieux de préserver la qualité génétique de leurs lignées."
            ]
        },
        {
            subtitle: "Quelques bases concernant la génétique",
            paragraphs: [
                "L'information génétique est portée par les chromosomes, situés dans le noyau des cellules. Une partie de ces chromosomes provient du père et l'autre de la mère.",
                "Chaque chromosome contient des gènes composés d'Acide DésoxyriboNucléique (ADN), qui déterminent les caractéristiques physiques et biologiques de l'animal."
            ]
        },
        {
            subtitle: "Comment se déroule un test ADN",
            paragraphs: [
                "Pour réaliser un test ADN, il est nécessaire de prélever un échantillon biologique auprès du chien afin d'analyser la structure de ses cellules.",
                "Cette analyse permet de décoder les informations génétiques de l'animal et de sa lignée, quelle que soit la race concernée."
            ]
        },
        {
            subtitle: "Se procurer un kit de test ADN",
            paragraphs: [
                "Aujourd'hui, il est très simple de commander un kit de test ADN directement sur Internet ou auprès d'un vétérinaire.",
                "Le propriétaire réalise le prélèvement, envoie l'échantillon au laboratoire et reçoit les résultats après quelques semaines."
            ]
        },
        {
            subtitle: "Quels résultats peut-on obtenir",
            paragraphs: [
                "Les résultats indiquent généralement le pourcentage des races composant le patrimoine génétique du chien, ainsi qu'un arbre généalogique, parfois approximatif pour les races récentes comme le Pomsky.",
                "Le test peut également révéler les caractéristiques physiques héritées et les potentielles maladies génétiques."
            ]
        },
        {
            subtitle: "Les laboratoires de tests ADN",
            paragraphs: [
                "Plusieurs laboratoires spécialisés proposent des tests ADN pour chiens, avec des analyses plus ou moins poussées.",
                "Parmi les références du marché figure le laboratoire américain EMBARK, souvent utilisé par les éleveurs pour tester leurs Pomskies."
            ]
        },
        {
            subtitle: "Passer à la pratique",
            paragraphs: [
                "Un simple échantillon de salive suffit pour effectuer un test ADN. Le prélèvement est indolore, rapide et peut être réalisé à domicile.",
                "Le vétérinaire peut également procéder au prélèvement et vous accompagner dans l'interprétation des résultats."
            ]
        },
        {
            subtitle: "Pourquoi réaliser un test ADN et à quel prix",
            paragraphs: [
                "Le test ADN permet de connaître la race ou le croisement du chien, de dépister certaines maladies héréditaires et d'obtenir des informations sur la filiation.",
                "Pour le Pomsky, race non reconnue par la FCI, le test ADN reste la seule preuve génétique de son appartenance à cette race en création."
            ]
        },
        {
            subtitle: "Coût et utilité du test ADN",
            paragraphs: [
                "Le prix d'un test ADN varie selon le laboratoire et le type d'analyse. Il peut aller d'environ 30 € pour une simple recherche de filiation à plus de 250 € pour un dépistage approfondi de maladies génétiques.",
                "Ces tests sont utiles aussi bien par curiosité que pour anticiper d'éventuels problèmes de santé et adapter les soins au long terme."
            ]
        }
    ],
    author: {
        name: "Aurélie Violette",
        role: "Éleveur & passionné de la race Pomsky",
        imageSrc: "/assets/authors/aurelie-violette-portrait.webp",
        imageAlt: "Portrait de l'auteur Aurélie Violette",
        linkedinUrl: "",
        linkedinLabelPrefix: "Profil de"
    },
    date: "2026-02-13",
    readTime: "4 min",
    category: "Santé & génétique",
    tags: [
        "test ADN chien",
        "génétique canine",
        "santé du chien",
        "pomsky",
        "élevage responsable",
        "maladies génétiques"
    ],
    image: "/assets/blog/puppy-brothers-adn-1038x576.webp",
    imageAlt: "Chiots illustrant l'analyse ADN et la génétique canine",
    contactCta: {
        label: "Contacter l'élevage"
    }
};
