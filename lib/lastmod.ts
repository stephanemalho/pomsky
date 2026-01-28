type PageEntry = {
    url: string;
    lastmod?: string;
};

/**
 * Crée un getter formaté pour les dates lastmod d'un tableau de pages.
 */
export function createLastmodGetter(pages: PageEntry[]) {
    return (pageUrl: string, fallback?: string) => {
        const page = pages.find((p) => p.url === pageUrl);
        const value = page?.lastmod || fallback;
        if (!value) return "Non renseignée";

        const parsed = new Date(value);
        if (!Number.isNaN(parsed.getTime())) {
            return parsed.toLocaleDateString("fr-FR");
        }
        return value;
    };
}
