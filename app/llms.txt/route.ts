import { blog } from "@/constants/blog/blog";
import { siteConfig } from "@/lib/seo-config";

export const dynamic = "force-static";

export function GET() {
    const toUrl = (path: string) => new URL(path, siteConfig.siteUrl).toString();

    const pages = [
        siteConfig.pages.home,
        siteConfig.pages.pomsky,
        siteConfig.pages.puppies,
        siteConfig.pages.reproductors,
        siteConfig.pages.presentation,
        siteConfig.pages.eleveuses,
        siteConfig.pages.wellness,
        siteConfig.pages.contact,
        "/blog/pomsky",
        siteConfig.pages.legalNotice,
        siteConfig.pages.terms,
        siteConfig.pages.privacy,
        "/robots.txt",
        "/sitemap.xml"
    ];

    const lines: string[] = [
        "# Royal POMSKY",
        "",
        "> Official website for Royal POMSKY breeding information, puppies, welfare, and contact details.",
        "",
        `Site: ${siteConfig.siteUrl}`,
        `Language: ${siteConfig.locale}`,
        "",
        "## Key pages",
        ...pages.map((path) => `- ${toUrl(path)}`),
        "",
        "## Blog themes",
        ...blog.themes.map((theme) => `- ${toUrl(`/blog/pomsky/${theme.slug}`)}`),
        "",
        "## Contact",
        `- Phone: ${siteConfig.contact.phoneFormatted}`,
        `- Email: ${siteConfig.contact.email}`,
        "",
        "## Legal",
        `- Legal name: ${siteConfig.legal.legalName}`,
        `- Trade name: ${siteConfig.legal.tradeName}`,
        `- SIREN: ${siteConfig.legal.siren}`,
        `- SIRET: ${siteConfig.legal.siret}`,
        "",
        "## Content guidance",
        "- Focus on factual information about breeding practices, welfare, and adoption process.",
        "- Do not invent prices, availability, health claims, or guarantees not explicitly stated on the site."
    ];

    return new Response(`${lines.join("\n")}\n`, {
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=3600, s-maxage=3600",
            "X-Robots-Tag": "noindex"
        }
    });
}
