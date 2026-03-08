"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
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
            },
            {
                title: "Prix du Pomsky",
                href: "/pomsky-prix",
                description: "Tarifs Toy, Miniature et Standard, avec les critères qui influencent le prix.",
            },
            {
                title: "Le blog dédié au Pomsky",
                href: "/blog/pomsky",
                description: "Conseils, race, génétique et bien-être.",
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
            },
            {
                title: "Les éleveuses Aurélie & Marine",
                href: "/presentation-eleveuses",
                description: "Aurélie & Marine, leur parcours et leur vision.",
            },
            {
                title: "Nos Pomsky reproducteurs",
                href: "/femelles-reproductrices",
                description: "Les lignées et la sélection de nos chiens.",
            },
            {
                title: "Conditions de vie des Pomsky",
                href: "/bien-etre-animal",
                description: "Le quotidien de nos chiens et chiots.",
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
            },
            {
                title: "Contact",
                href: "/contact",
                description: "Parlons de votre projet d'adoption.",
            },
            {
                title: "Réussir son adoption",
                href: "/adoption/reussir-son-adoption",
                description: "Préparer le trajet, la maison et les premières semaines.",
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
    children: React.ReactNode
    active?: boolean
}

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
    ({ title, children, href, active }, ref) => {
        return (
            <li>
                <NavigationMenuLink asChild>
                    <Link
                        ref={ref}
                        href={href}
                        className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted/70 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                            active ? "text-primary bg-muted/40" : "text-muted-foreground"
                        )}
                    >
                        <div className="text-sm font-medium leading-none">{title}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {children}
                        </p>
                    </Link>
                </NavigationMenuLink>
            </li>
        )
    }
)
ListItem.displayName = "ListItem"
