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
        label: "Découvrir",
        items: [
            {
                title: "Le Pomsky",
                href: "/le-pomsky",
                description: "Taille, tempérament, origines et adoption responsable.",
            },
            {
                title: "Blog",
                href: "/blog/pomsky",
                description: "Conseils, race, génétique et bien-être.",
            },
        ],
    },
    {
        label: "L'élevage",
        items: [
            {
                title: "Présentation",
                href: "/presentation-elevage",
                description: "Philosophie, valeurs et histoire de l'élevage.",
            },
            {
                title: "Les éleveuses",
                href: "/presentation-eleveuses",
                description: "Aurélie & Marine, leur parcours et leur vision.",
            },
            {
                title: "Nos reproducteurs",
                href: "/femelles-reproductrices",
                description: "Les lignées et la sélection de nos chiens.",
            },
            {
                title: "Conditions de vie",
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
                                <ul className="grid gap-3 p-4 md:w-[360px] lg:w-[420px]">
                                    {group.items.map((item) => (
                                        <ListItem key={item.href} href={item.href} title={item.title}>
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

type ListItemProps = React.ComponentPropsWithoutRef<"a"> & {
    title: string
}

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
    ({ className, title, children, ...props }, ref) => {
        return (
            <li>
                <NavigationMenuLink asChild>
                    <a
                        ref={ref}
                        className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted/70 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                            className
                        )}
                        {...props}
                    >
                        <div className="text-sm font-medium leading-none">{title}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {children}
                        </p>
                    </a>
                </NavigationMenuLink>
            </li>
        )
    }
)
ListItem.displayName = "ListItem"
