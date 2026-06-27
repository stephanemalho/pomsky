import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { Banknote, BookOpen, Camera, Dog, Heart, Home, PawPrint, Phone, Users } from "lucide-react"
import { cn } from "@/lib/utils"

const navGroups = [
    {
        label: "Pomsky",
        items: [
            {
                title: "Découvrir le Pomsky",
                href: "/le-pomsky",
                description: "Taille, tempérament, origines et adoption responsable.",
                icon: PawPrint,
            },
            {
                title: "Prix du Pomsky",
                href: "/pomsky-prix",
                description: "Tarifs Toy, Miniature et Standard, avec les critères qui influencent le prix.",
                icon: Banknote,
            },
            {
                title: "Le blog dédié au Pomsky",
                href: "/blog/pomsky",
                description: "Conseils, race, génétique et bien-être.",
                icon: BookOpen,
            },
        ],
    },
    {
        label: "L'élevage",
        items: [
            {
                title: "Présentation de Royal POMSKY",
                href: "/presentation-elevage",
                description: "Philosophie, valeurs et histoire de l'élevage.",
                icon: Home,
            },
            {
                title: "Les éleveuses Aurélie & Marine",
                href: "/presentation-eleveuses",
                description: "Aurélie & Marine, leur parcours et leur vision.",
                icon: Users,
            },
            {
                title: "Nos Pomsky reproducteurs",
                href: "/femelles-reproductrices",
                description: "Les lignées et la sélection de nos chiens.",
                icon: Dog,
            },
            {
                title: "Conditions de vie des Pomsky",
                href: "/bien-etre-animal",
                description: "Le quotidien de nos chiens et chiots.",
                icon: Heart,
            },
            {
                title: "Galerie photos et vidéos",
                href: "/galerie",
                description: "Une sélection d'images, de shorts et de vidéos pour découvrir l'élevage.",
                icon: Camera,
            },
        ],
    },
    {
        label: "Adoption",
        items: [
            {
                title: "Nos chiots disponibles",
                href: "/chiots-disponibles",
                description: "Portées disponibles et informations d'adoption.",
                icon: PawPrint,
            },
            {
                title: "Contact",
                href: "/contact",
                description: "Parlons de votre projet d'adoption.",
                icon: Phone,
            },
            {
                title: "Réussir son adoption",
                href: "/adoption/reussir-son-adoption",
                description: "Préparer le trajet, la maison et les premières semaines.",
                icon: BookOpen,
            },
        ],
    },
]

export function DesktopNav() {
    return (
        <nav className="hidden lg:flex" aria-label="Navigation principale">
            <ul className="flex items-center gap-1">
                <li>
                    <Link
                        href="/"
                        className="inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                        Accueil
                    </Link>
                </li>
                {navGroups.map((group) => {
                    return (
                        <li key={group.label} className="group relative">
                            <button
                                type="button"
                                className="inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                            >
                                {group.label}
                            </button>
                            <div className="invisible absolute left-0 top-full z-50 pt-2 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                                <ul className="grid w-[26rem] gap-3 rounded-md border bg-popover p-4 text-popover-foreground shadow-lg">
                                    {group.items.map((item) => (
                                        <ListItem
                                            key={item.href}
                                            href={item.href}
                                            title={item.title}
                                            icon={item.icon}
                                        >
                                            {item.description}
                                        </ListItem>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

type ListItemProps = {
    title: string
    href: string
    icon: LucideIcon
    children: React.ReactNode
}

function ListItem({ title, children, href, icon: Icon }: ListItemProps) {
    return (
        <li>
            <Link
                href={href}
                className={cn(
                    "group/item block select-none space-y-1.5 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                    "text-muted-foreground"
                )}
            >
                <div className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-8 min-h-8 w-8 min-w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover/item:bg-primary/15">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div className="space-y-1.5">
                        <div className="text-[15px] font-semibold leading-snug text-foreground transition-colors group-hover/item:text-primary">
                            {title}
                        </div>
                        <p className="line-clamp-2 text-[13px] leading-relaxed text-muted-foreground">
                            {children}
                        </p>
                    </div>
                </div>
            </Link>
        </li>
    )
}
