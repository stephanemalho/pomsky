import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/api", "/wp-admin", "/wp-content", "/wp-includes"]
            }
        ],
        sitemap: "https://royalpomsky.com/sitemap.xml"
    };
}
