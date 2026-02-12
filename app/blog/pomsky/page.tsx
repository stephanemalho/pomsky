import type { Metadata } from "next";

import BlogList from "@/app/blog/_components/BlogList";
import { buildOpenGraph, pageMetadata, siteConfig } from "@/lib/seo-config";

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
                url: new URL(siteConfig.ogImage, siteConfig.siteUrl).toString(),
                alt: siteConfig.ogImageAlt,
                width: siteConfig.ogImageWidth,
                height: siteConfig.ogImageHeight,
                type: "image/webp",
            },
        ],
    }),
    twitter: {
        card: "summary_large_image",
        title: pageMetadata.blog.title,
        description: pageMetadata.blog.description,
        images: [new URL(siteConfig.ogImage, siteConfig.siteUrl).toString()],
    },
};

export default function PomskyBlogPage() {
    return <BlogList base="pomsky" />;
}
