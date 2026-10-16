export function getNavigationIconColor(href: string) {
    const colors: Record<string, string> = {
        "/": "menu-colored-icon bg-amber-100 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300",
        "/le-pomsky": "menu-colored-icon bg-violet-100 text-violet-700 dark:bg-violet-950/50 dark:text-violet-300",
        "/pomsky-prix": "menu-colored-icon bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300",
        "/blog/pomsky": "menu-colored-icon bg-indigo-100 text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300",
        "/presentation-elevage": "menu-colored-icon bg-amber-100 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300",
        "/presentation-eleveuses": "menu-colored-icon bg-pink-100 text-pink-700 dark:bg-pink-950/50 dark:text-pink-300",
        "/femelles-reproductrices": "menu-colored-icon bg-sky-100 text-sky-700 dark:bg-sky-950/50 dark:text-sky-300",
        "/bien-etre-animal": "menu-colored-icon bg-rose-100 text-rose-700 dark:bg-rose-950/50 dark:text-rose-300",
        "/galerie": "menu-colored-icon bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-950/50 dark:text-fuchsia-300",
        "/chiots-disponibles": "menu-colored-icon bg-pink-100 text-pink-700 dark:bg-pink-950/50 dark:text-pink-300",
        "/contact": "menu-colored-icon bg-teal-100 text-teal-700 dark:bg-teal-950/50 dark:text-teal-300",
        "/adoption/reussir-son-adoption": "menu-colored-icon bg-indigo-100 text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300",
    };
    return colors[href] ?? colors["/le-pomsky"];
}
