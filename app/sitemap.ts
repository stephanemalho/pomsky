import type { MetadataRoute } from "next";

import { puppies } from "@/app/chiots-disponibles/puppies";
import { getPuppyLastModified, getPuppyUrl } from "@/app/chiots-disponibles/puppy-seo";
import { blog } from "@/constants/blog/blog";
import { siteConfig, sitemapPages } from "@/lib/seo-config";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = siteConfig.siteUrl;
    const toUrl = (path: string) => new URL(path, baseUrl).toString();

    const staticPages: MetadataRoute.Sitemap = sitemapPages.map((page) => ({
        url: toUrl(page.url),
        lastModified: page.lastmod,
        changeFrequency: page.changefreq as
            | "always"
            | "hourly"
            | "daily"
            | "weekly"
            | "monthly"
            | "yearly"
            | "never",
        priority: page.priority,
    }));

    const blogListEntry: MetadataRoute.Sitemap[number] = {
        url: toUrl("/blog/pomsky"),
        changeFrequency: "weekly",
        priority: 0.8,
        lastModified: "2026-03-27",
    };

    const blogThemeEntries: MetadataRoute.Sitemap = blog.themes.map(
        (theme): MetadataRoute.Sitemap[number] => ({
            url: toUrl(`/blog/pomsky/${theme.slug}`),
            changeFrequency: "monthly",
            priority: 0.6,
            lastModified: "2026-03-27",
        })
    );

    const blogPostEntries: MetadataRoute.Sitemap = blog.posts.map(
        (post): MetadataRoute.Sitemap[number] => ({
            url: toUrl(`/blog/${post.slug}`),
            lastModified: post.modifiedDate ?? post.date,
            changeFrequency: "monthly",
            priority: 0.7,
        })
    );

    const puppyEntries: MetadataRoute.Sitemap = puppies.map(
        (puppy): MetadataRoute.Sitemap[number] => ({
            url: toUrl(getPuppyUrl(puppy)),
            lastModified: getPuppyLastModified(puppy) ?? "2026-05-17",
            changeFrequency: "weekly",
            priority: puppy.isAdopted ? 0.5 : 0.85,
        })
    );

    return [...staticPages, ...puppyEntries, blogListEntry, ...blogThemeEntries, ...blogPostEntries];
}
