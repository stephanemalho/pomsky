import { pomskyLifeExpectancyPost } from "../posts/pomskyLifetime";
import { pomskyToyGuidePost } from "../posts/pomskyToyGuidePost";
import { pomskyNainPost } from "@/constants/posts/pomskyNainPost";
import { huskySiberienPost } from "../posts/siberianHusky";
import { spitzNainPost } from "../posts/spitzNainPost";
import { BlogContentType } from "./blogTypes";
import { pomskyGenerationsPost } from "../posts/pomskyFormatsPost";
import { dogAdnTestPost } from "../posts/pomskyDnaPost";
import { pomskyHistoryPost } from "../posts/pomskyRootsPost";
import { pomskyAdultePost } from "../posts/pomskyAdultePost";
import { pomskyNoirYeuxBleusPost } from "../posts/pomskyBlackBlueEyesPost";
import { pomskyBeigeYeuxBleusPost } from "../posts/pomskyBeigePost";
import { pomskyBlancYeuxBleusPost } from "../posts/pomskyWhiteBlueEyePost";
import { pomskyPrixPost } from "../posts/pomskyPricePost";
import { pomskyAVendrePost } from "../posts/pomskyForSalePost";
import { pomskyRenardPost } from "../posts/pomsktLookFoxPost";
import { chienPomskyPost } from "../posts/pomskyHybridRacePost";
import { pomskyBlancPost } from "../posts/pomskyWhiteLookGreatPost";
import { pomskyToyTransparencePost } from "../posts/pomskyToyTransparencePost";
import { pomskyEmbarkPost } from "../posts/pomskyEmbarkPost";
import { pomskyClandestineBreedingPost } from "../posts/pomskyClandestineBreedingPost";

export const blog: BlogContentType = {
    hero: {
        title: "Actualités & conseils autour du Pomsky",
        subtitle:
            "Guides clairs sur la race, les formats, l'apparence, la génétique, le budget et l'adoption du Pomsky.",
        cta: "Découvrir nos chiots",
        linkTo: "/chiots-disponibles",
        Icon: "paw",
        color: "orange"
    },
    articleLabels: {
        backToBlog: "Retour à la liste de blogs",
        contactAuthorTemplate: "Contacter {author}"
    },
    allCategory: {
        name: "Toutes les catégories",
        description:
            "Découvrez l'ensemble de nos articles autour du Pomsky et de l'élevage canin"
    },
    categories: [
        {
            id: "race-pomsky",
            name: "Race Pomsky",
            description: "Origines, caractéristiques et standards du Pomsky",
            slug: "race-pomsky"
        },
        {
            id: "elevage-responsable",
            name: "Élevage responsable",
            description: "Bonnes pratiques, sélection et bien-être animal",
            slug: "elevage-responsable"
        },
        {
            id: "education-comportement",
            name: "Éducation & comportement",
            description: "Conseils d'éducation et compréhension du Pomsky",
            slug: "education-comportement"
        },
        {
            id: "sante-entretien",
            name: "Santé & entretien",
            description: "Santé, alimentation et soins du Pomsky",
            slug: "sante-entretien"
        }
    ],
    themes: [
        {
            slug: "caracteristique",
            label: "Caractéristiques",
            description: "Taille, formats, projection adulte et vie quotidienne avec le Pomsky.",
            seoTitle: "Caractéristiques du Pomsky | Taille, formats et vie quotidienne",
            seoDescription:
                "Découvrez nos articles sur les caractéristiques du Pomsky: formats Toy, Miniature ou Standard, projection adulte, vie quotidienne et compréhension de la race."
        },
        {
            slug: "apparence",
            label: "Apparence & robe",
            description: "Couleurs, robes, contrastes visuels et lectures d'apparence du Pomsky.",
            seoTitle: "Apparence du Pomsky | Robes, couleurs et looks recherches",
            seoDescription:
                "Explorez nos articles sur l'apparence du Pomsky: robe blanche, noire, beige, yeux bleus, look renard et autres profils visuels recherches."
        },
        {
            slug: "origine",
            label: "Origines",
            description: "Histoire du Pomsky, race hybride et racines des lignées.",
            seoTitle: "Origines du Pomsky | Histoire, race hybride et racines",
            seoDescription:
                "Retrouvez nos contenus sur les origines du Pomsky, son histoire, sa construction comme race hybride et l'influence de ses races parentes."
        },
        {
            slug: "genetique",
            label: "Génétique",
            description: "Generations F1 a F5, ADN, tests et travail de selection.",
            seoTitle: "Genetique du Pomsky | Generations, ADN et selection",
            seoDescription:
                "Découvrez nos articles sur la génétique du Pomsky: générations F1 à F5, tests ADN, Embark, sélection des lignées et lecture des mariages."
        },
        {
            slug: "prix",
            label: "Prix & adoption",
            description: "Prix, budget global, choix de l'elevage et reflexion avant adoption.",
            seoTitle: "Prix et adoption du Pomsky | Tarifs, budget et choix de l'elevage",
            seoDescription:
                "Lisez nos articles sur le prix du Pomsky, le budget global, le choix d'un élevage professionnel et les repères utiles avant adoption."
        },
        {
            slug: "sante",
            label: "Santé & bien-être",
            description: "Longevite, soins, entretien et suivi du Pomsky dans le temps.",
            seoTitle: "Sante du Pomsky | Longevite, soins et entretien",
            seoDescription:
                "Consultez nos contenus sur la santé du Pomsky, son espérance de vie, son entretien, son suivi et les repères de bien-être au quotidien."
        }
    ],
    posts: [
        pomskyEmbarkPost,
        pomskyClandestineBreedingPost,
        pomskyToyTransparencePost,
        pomskyNainPost,
        pomskyToyGuidePost,
        pomskyLifeExpectancyPost,
        huskySiberienPost,
        spitzNainPost,
        pomskyGenerationsPost,
        dogAdnTestPost,
        pomskyHistoryPost,
        pomskyAdultePost,
        pomskyNoirYeuxBleusPost,
        pomskyBeigeYeuxBleusPost,
        pomskyBlancYeuxBleusPost,
        pomskyPrixPost,
        pomskyAVendrePost,
        pomskyRenardPost,
        chienPomskyPost,
        pomskyBlancPost
    ],
    filterLabels: {
        all: "Tous les articles",
        search: "Rechercher",
        searchPlaceholder: "Rechercher un article...",
        noResults: "Aucun article ne correspond à votre recherche.",
        readMore: "Lire l'article",
        by: "Par",
        in: "dans"
    },
    seo: {
        title: "Blog Pomsky - Élevage, conseils et bien-être",
        description:
            "Découvrez nos articles dédiés au Pomsky : race, élevage responsable, éducation, santé et conseils pour adopter un chiot Pomsky.",
        keywords: [
            "pomsky",
            "infos sur le pomsky",
            "conseils autour du Pomsky",
            "tout savoir sur le pomsky",
            "éducation pomsky",
            "blog élevage canin",
            "Le pomsky toy"
        ]
    }
};
