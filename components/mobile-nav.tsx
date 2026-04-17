"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import type { LucideIcon } from "lucide-react"
import { Banknote, BookOpen, Camera, Dog, Heart, Home, Menu, PawPrint, Phone, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const navigation = [
    { name: "Accueil", href: "/", icon: Home },
    { name: "Le Pomsky", href: "/le-pomsky", icon: PawPrint },
    { name: "Prix du Pomsky", href: "/pomsky-prix", icon: Banknote },
    { name: "L'elevage", href: "/presentation-elevage", icon: Home },
    { name: "Les éleveuses", href: "/presentation-eleveuses", icon: Users },
    { name: "Nos reproducteurs", href: "/femelles-reproductrices", icon: Dog },
    { name: "Nos chiots disponibles", href: "/chiots-disponibles", icon: PawPrint },
    { name: "Les conditions de vie", href: "/bien-etre-animal", icon: Heart },
    { name: "Galerie", href: "/galerie", icon: Camera },
    { name: "Blog", href: "/blog/pomsky", icon: BookOpen },
    { name: "Contact", href: "/contact", icon: Phone },
    { name: "Réussir son adoption", href: "/adoption/reussir-son-adoption", icon: BookOpen },
]

type NavigationItem = {
    name: string
    href: string
    icon: LucideIcon
}

export function MobileNav() {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="flex lg:hidden">
                <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Ouvrir le menu de navigation"
                    aria-expanded={isOpen}
                    className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary cursor-pointer"
                >
                    <Menu className="h-6 w-6" />
                </Button>
            </SheetTrigger>
            <SheetContent side="right">
                <div className="sr-only">
                    <SheetTitle>Menu de navigation</SheetTitle>
                    <SheetDescription>Liens principaux du site</SheetDescription>
                </div>
                <nav className="flex flex-col space-y-4 mt-8 p-4 overflow-y-auto" aria-label="Navigation mobile">
                    {navigation.map((item: NavigationItem) => {
                        const Icon = item.icon

                        return (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={cn(
                                "flex items-center gap-3 rounded px-2 py-2 text-[15px] font-semibold transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                                pathname === item.href ? "text-primary" : "text-muted-foreground",
                            )}
                            aria-current={pathname === item.href ? "page" : undefined}
                        >
                            <span className="inline-flex h-8 min-h-8 w-8 min-w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <Icon className="h-4 w-4" aria-hidden="true" />
                            </span>
                            {item.name}
                        </Link>
                        )
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    )
}
