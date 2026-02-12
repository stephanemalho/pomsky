import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/actualite",
        destination: "/blog/pomsky",
        permanent: true,
      },
      {
        source: "/pourquoi-le-pomsky",
        destination: "/le-pomsky",
        permanent: true,
      },
      {
        source: "/quelle-est-la-taille-dun-pomsky",
        destination: "/le-pomsky",
        permanent: true
      },
      {
        source: "/category/galerie-photos-videos",
        destination: "/chiots-disponibles",
        permanent: true,
      },
      {
        source: "/videos-tiktok-royalpomsky",
        destination: "/chiots-disponibles",
        permanent: true,
      },
      {
        source: "/galerie",
        destination: "/chiots-disponibles",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/blog/pomsky",
        permanent: true
      }
    ];
  },
};

export default nextConfig;
