import type { Metadata } from "next";

import BlogList from "@/app/blog/_components/BlogList";
import { pageMetadata, siteConfig } from "@/lib/seo-config";

export const metadata: Metadata = {
    title: pageMetadata.blog.title,
    description: pageMetadata.blog.description,
    keywords: pageMetadata.blog.keywords,
    alternates: {
        canonical: new URL("/blog/pomsky", siteConfig.siteUrl).toString(),
    },
    openGraph: {
        title: pageMetadata.blog.title,
        description: pageMetadata.blog.description,
        url: new URL("/blog/pomsky", siteConfig.siteUrl).toString(),
        siteName: siteConfig.name,
        locale: siteConfig.locale,
        type: "website",
        images: [
            {
                url: new URL(siteConfig.ogImage, siteConfig.siteUrl).toString(),
                width: siteConfig.ogImageWidth,
                height: siteConfig.ogImageHeight,
                alt: siteConfig.ogImageAlt,
                type: "image/webp",
            },
        ],
    },
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
