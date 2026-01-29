"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navigation = [
    { name: "Accueil", href: "/" },
    { name: "Le Pomsky", href: "/le-pomsky" },
    { name: "L'élevage", href: "/presentation-elevage" },
    { name: "Nos reproducteurs", href: "/femelles-reproductrices" },
    { name: "Nos chiots", href: "/chiots-disponibles" },
    { name: "Les conditions de vie", href: "/bien-etre-animal" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
]

export function DesktopNav() {
    const pathname = usePathname()

    return (
        <nav className="hidden lg:flex items-center space-x-6" aria-label="Navigation principale">
            {navigation.map((item) => (
                <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                        "text-sm font-medium transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded px-2 py-1",
                        pathname === item.href ? "text-primary" : "text-muted-foreground",
                    )}
                    aria-current={pathname === item.href ? "page" : undefined}
                >
                    {item.name}
                </Link>
            ))}
        </nav>
    )
}
