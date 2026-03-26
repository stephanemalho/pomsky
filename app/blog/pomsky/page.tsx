import type { Metadata } from "next";

import BlogList from "@/app/blog/_components/BlogList";
import { buildOpenGraph, buildTwitter, pageMetadata, siteConfig } from "@/lib/seo-config";

const blogHubOgJpg = "/assets/blog/pomsky-for-sale-blog-page.jpg"
const blogHubOgWebp = "/assets/blog/pomsky-for-sale-blog-page.webp"

export const metadata: Metadata = {
    title: pageMetadata.blog.title,
    description: pageMetadata.blog.description,
    keywords: pageMetadata.blog.keywords,
    alternates: {
        canonical: new URL("/blog/pomsky", siteConfig.siteUrl).toString(),
    },
    openGraph: buildOpenGraph({
        title: pageMetadata.blog.title,
        description: pageMetadata.blog.description,
        url: new URL("/blog/pomsky", siteConfig.siteUrl).toString(),
        type: "website",
        images: [
            {
                url: new URL(blogHubOgJpg, siteConfig.siteUrl).toString(),
                alt: "Blog Pomsky de Royal Pomsky",
                width: siteConfig.ogImageWidth,
                height: siteConfig.ogImageHeight,
                type: "image/jpeg",
            },
            {
                url: new URL(blogHubOgWebp, siteConfig.siteUrl).toString(),
                alt: "Blog Pomsky de Royal Pomsky",
                width: siteConfig.ogImageWidth,
                height: siteConfig.ogImageHeight,
                type: "image/webp",
            },
        ],
    }),
    twitter: buildTwitter({
        title: pageMetadata.blog.title,
        description: pageMetadata.blog.description,
        imageUrl: new URL(blogHubOgJpg, siteConfig.siteUrl).toString(),
    }),
};

export default function PomskyBlogPage() {
    return <BlogList base="pomsky" />;
}
