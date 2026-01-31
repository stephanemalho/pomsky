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

export const blog: BlogContentType = {
    hero: {
        title: "Actualités & conseils autour du Pomsky",
        subtitle:
            "Race, élevage responsable, éducation et bien-être du Pomsky au quotidien.",
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
            description: "Taille, caractÃ¨re et vie avec le chien"
        },
        {
            slug: "apparence",
            label: "Apparence & robe",
            description: "Couleurs, pelages et variations physiques"
        },
        {
            slug: "origine",
            label: "Origines",
            description: "Histoire et racines des races"
        },
        {
            slug: "genetique",
            label: "Génétique",
            description: "Générations, ADN et croisements"
        },
        {
            slug: "prix",
            label: "Prix & adoption",
            description: "Budget, éleveurs et conseils d'achat"
        },
        {
            slug: "sante",
            label: "Santé & bien-être",
            description: "Longévité, soins et entretien"
        }
    ],
    posts: [
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
