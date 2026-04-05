import pomskySize from "@/public/pomsky-standard-size.webp";
import pomskyFur from "@/public/pages/homePage/two-pomsky-puppy.webp";
import wetPomsky from "@/public/pomsky-wet-night-forest.webp";
import pomskyEyeColors from "@/public/pages/homePage/pomsky-f3-blue-eyes.webp";
import pomskyExpressive from "@/public/pages/homePage/pomsky-f3-in-the-grass.webp";
import pomskyPolyvalent from "@/public/pages/homePage/pomsky-brown-and-white-f3-generation.webp";
import { StaticImageData } from "next/image";

type BenefitCard = {
    title: string;
    text: string;
    image: StaticImageData;
    alt: string;
};

export const pomskyBenefits: BenefitCard[] = [
    {
        title: "Pomsky de taille standard, mini ou Toy : comment choisir ?",
        text: "Un chien Pomsky de taille standard mesure environ 39 à 45 cm au garrot à l'âge adulte. Il y'a également les mini Pomsky  qui mesurent entre 36 et 40 cm au garrot. En dessous de cette taille, c'est un Pomsky toy. ",
        image: pomskySize,
        alt: "Pomsky de l'élevage Royal POMSKY debout dans l'herbe, utilisé pour illustrer les différents formats"
    },
    {
        title: "Quel type de poils pour le Pomsky ?",
        text: "Le Pomsky possède en général un poil assez épais, il peut être de type standard polaire Husky,  intermédiaire appelé aussi Plush Coat ou de type « Whooly » c'est à dire d'aspect laineux, mi long à long, plus proche du poil du Loulou de Poméranie.",
        image: pomskyFur,
        alt: "Deux chiots Pomsky de l'élevage Royal POMSKY illustrant la texture et la densité du pelage"
    },
    {
        title: "Les traits physiques du Pomsky",
        text: "Le Pomsky a de nombreuses caractéristiques physiques qui lui viennent du Husky. On retrouve parmi celles-ci, la couleur de ses yeux : (bleus, verts, ambre, bruns ou hétérochromes) ainsi que la couleur de sa robe, le marquage ( notamment le masque ), la texture et la densité de son poil.",
        image: wetPomsky,
        alt: "Pomsky au pelage marqué et à l'expression vive, utilisé pour illustrer les traits physiques de la race"
    },
    {
        title: "Un regard unique et expressif",
        text: "Le Pomsky se distingue par un regard intense et expressif. Ses yeux peuvent être bleus, verts, ambre, bruns, gris ou noirs, parfois vairons ou particolor, hérités du Husky sibérien. Cette richesse visuelle renforce son expressivité et le lien qu'il crée avec ses adoptants.",
        image: pomskyEyeColors,
        alt: "Portrait rapproché d'un Pomsky au regard expressif, pour illustrer la variété des yeux chez la race"
    },
    {
        title: "Un lien fort avec ses adoptants",
        text: "Très communicatif, le Pomsky utilise son regard, ses attitudes et son comportement pour interagir avec son entourage. Cette expressivité naturelle lui permet de créer un lien fort, complice et durable avec ses adoptants.",
        image: pomskyExpressive,
        alt: "Pomsky attentif dans l'herbe, illustrant la proximité et la communication avec l'humain"
    },
    {
        title: "Un chien polyvalent",
        text: "Malgré son gabarit compact, le Pomsky est un chien actif et polyvalent. Il peut s'épanouir dans des activités comme le pistage, le mantrailing, l'agility ou la cani-rando, toujours dans le respect de son rythme.",
        image: pomskyPolyvalent,
        alt: "Pomsky en mouvement dans l'herbe, pour illustrer son côté actif et polyvalent"
    }
];
