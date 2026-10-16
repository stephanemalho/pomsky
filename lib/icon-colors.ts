export function getNavigationIconColor(href: string) {
    const colors: Record<string, string> = {
        "/": "bg-amber-100 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300",
        "/le-pomsky": "bg-violet-100 text-violet-700 dark:bg-violet-950/50 dark:text-violet-300",
        "/pomsky-prix": "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300",
        "/blog/pomsky": "bg-indigo-100 text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300",
        "/presentation-elevage": "bg-amber-100 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300",
        "/presentation-eleveuses": "bg-pink-100 text-pink-700 dark:bg-pink-950/50 dark:text-pink-300",
        "/femelles-reproductrices": "bg-sky-100 text-sky-700 dark:bg-sky-950/50 dark:text-sky-300",
        "/bien-etre-animal": "bg-rose-100 text-rose-700 dark:bg-rose-950/50 dark:text-rose-300",
        "/galerie": "bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-950/50 dark:text-fuchsia-300",
        "/chiots-disponibles": "bg-pink-100 text-pink-700 dark:bg-pink-950/50 dark:text-pink-300",
        "/contact": "bg-teal-100 text-teal-700 dark:bg-teal-950/50 dark:text-teal-300",
        "/adoption/reussir-son-adoption": "bg-indigo-100 text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300",
    };
    return colors[href] ?? colors["/le-pomsky"];
}
