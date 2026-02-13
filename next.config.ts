import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    async redirects() {
        return [
            {
                source: "/author/:path*",
                destination: "/",
                permanent: true
            },
            {
                source: "/actualite",
                destination: "/blog/pomsky",
                permanent: true
            },
            {
                source: "/pourquoi-le-pomsky",
                destination: "/le-pomsky",
                permanent: true
            },
            {
                source: "/quelle-est-la-taille-dun-pomsky",
                destination: "/le-pomsky",
                permanent: true
            },
            {
                source: "/category/pomsky",
                destination: "/le-pomsky",
                permanent: true
            },
            {
                source: "/category/galerie-photos-videos",
                destination: "/chiots-disponibles",
                permanent: true
            },
            {
                source: "/category/blog/page/:path*",
                destination: "/blog/pomsky",
                permanent: true
            },
            {
                source: "/videos-tiktok-royalpomsky",
                destination: "/chiots-disponibles",
                permanent: true
            },
            {
                source: "/galerie",
                destination: "/chiots-disponibles",
                permanent: true
            },
            {
                source: "/blog",
                destination: "/blog/pomsky",
                permanent: true
            },
            {
                source: "/le-husky-siberian",
                destination: "/blog/pomsky",
                permanent: true
            },
            {
                source: "/category/blog",
                destination: "/blog/pomsky",
                permanent: true
            },
            {
                source: "/pomsky-prix-guide-complet-pour-comprendre-le-cout-dadoption-et-dentretien",
                destination:
                    "/blog/pomsky/prix/pomsky-prix-guide-complet-pour-comprendre-le-cout-dadoption-et-dentretien",
                permanent: true
            },
            {
                source: "/quelle-est-lhistoire-du-pomsky-les-origines-du-chien-pomsky",
                destination:
                    "/blog/pomsky/origine/quelle-est-lhistoire-du-pomsky-les-origines-du-chien-pomsky",
                permanent: true
            },
            {
                source: "/le-pomsky-blanc-une-race-de-chien-au-look-irresistible",
                destination:
                    "/blog/pomsky/apparence/le-pomsky-blanc-une-race-de-chien-au-look-irresistible",
                permanent: true
            },
            {
                source: "/pomsky-f1-f2-f3-cest-quoi",
                destination: "/blog/pomsky/genetique/pomsky-f1-f2-f3-cest-quoi",
                permanent: true
            },
            {
                source: "/tout-savoir-sur-le-pomsky-toy-race-caracteristiques-et-conseils",
                destination:
                    "/blog/pomsky/caracteristique/tout-savoir-sur-le-pomsky-toy-race-caracteristiques-et-conseils",
                permanent: true
            },
            {
                source: "/decouvrez-le-pomsky-nain-un-adorable-compagnon-a-quatre-pattes",
                destination:
                    "/blog/pomsky/caracteristique/decouvrez-le-pomsky-nain-un-adorable-compagnon-a-quatre-pattes",
                permanent: true
            },
            {
                source: "/duree-de-vie-du-pomsky-guide-complet-pour-prolonger-la-sante-de-votre-chien",
                destination:
                    "/blog/pomsky/sante/duree-de-vie-du-pomsky-guide-complet-pour-prolonger-la-sante-de-votre-chien",
                permanent: true
            },
            {
                source: "/le-chien-pomsky-une-race-hybride-qui-fait-fondre-les-coeurs",
                destination:
                    "/blog/pomsky/origine/le-chien-pomsky-une-race-hybride-qui-fait-fondre-les-coeurs",
                permanent: true
            },
            {
                source: "/a-quoi-sert-test-adn-chien",
                destination: "/blog/pomsky",
                permanent: true
            },
            {
                source: "/page-facebook",
                destination: "/",
                permanent: true
            },
            {
                source: "/2020",
                destination: "/",
                permanent: true
            },
            {
                source: "/2020/:path*",
                destination: "/",
                permanent: true
            }
        ];
    }
};

export default nextConfig;
