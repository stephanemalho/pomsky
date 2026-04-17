"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import type { LucideIcon } from "lucide-react"
import { Banknote, BookOpen, Camera, Dog, Heart, Home, PawPrint, Phone, Users } from "lucide-react"
import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

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
                title: "Nos chiots",
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
    const pathname = usePathname()

    return (
        <NavigationMenu className="hidden lg:flex" aria-label="Navigation principale">
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link
                            href="/"
                            className={cn(
                                navigationMenuTriggerStyle(),
                                pathname === "/" ? "text-primary" : "text-muted-foreground",
                            )}
                            aria-current={pathname === "/" ? "page" : undefined}
                        >
                            Accueil
                        </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                {navGroups.map((group) => {
                    const isActive = group.items.some((item) => pathname === item.href)
                    return (
                        <NavigationMenuItem key={group.label}>
                            <NavigationMenuTrigger data-active={isActive}>
                                {group.label}
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-3 p-4 md:w-90 lg:w-105">
                                    {group.items.map((item) => (
                                        <ListItem
                                            key={item.href}
                                            href={item.href}
                                            title={item.title}
                                            icon={item.icon}
                                            active={pathname === item.href}
                                        >
                                            {item.description}
                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    )
                })}
            </NavigationMenuList>
        </NavigationMenu>
    )
}

type ListItemProps = {
    title: string
    href: string
    icon: LucideIcon
    children: React.ReactNode
    active?: boolean
}

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
    ({ title, children, href, icon: Icon, active }, ref) => {
        return (
            <li>
                <NavigationMenuLink asChild>
                    <Link
                        ref={ref}
                        href={href}
                        className={cn(
                            "group block select-none space-y-1.5 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                            active ? "text-primary bg-muted/40" : "text-muted-foreground"
                        )}
                    >
                        <div className="flex items-start gap-3">
                            <span
                                className={cn(
                                    "mt-0.5 inline-flex h-8 min-h-8 w-8 min-w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary/15",
                                    active && "bg-primary/15"
                                )}
                            >
                                <Icon className="h-4 w-4" aria-hidden="true" />
                            </span>
                            <div className="space-y-1.5">
                                <div
                                    className={cn(
                                        "text-[15px] font-semibold leading-snug text-foreground transition-colors group-hover:text-primary",
                                        active && "text-primary"
                                    )}
                                >
                                    {title}
                                </div>
                                <p className="line-clamp-2 text-[13px] leading-relaxed text-muted-foreground">
                                    {children}
                                </p>
                            </div>
                        </div>
                    </Link>
                </NavigationMenuLink>
            </li>
        )
    }
)
ListItem.displayName = "ListItem"
