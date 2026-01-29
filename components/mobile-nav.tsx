"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
    { name: "Accueil", href: "/" },
    { name: "Le Pomsky", href: "/le-pomsky" },
    { name: "L'elevage", href: "/presentation-elevage" },
    { name: "Nos reproducteurs", href: "/femelles-reproductrices" },
    { name: "Nos chiots", href: "/chiots-disponibles" },
    { name: "Les conditions de vie", href: "/bien-etre-animal" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
]

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
                <nav className="flex flex-col space-y-4 mt-8 p-4" aria-label="Navigation mobile">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
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
            </SheetContent>
        </Sheet>
    )
}
