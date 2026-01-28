import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"
import { MobileNav } from "./mobile-nav"
import Image from "next/image"
import { DesktopNav } from "./desktop-nav"

export function Navigation() {
    return (
        <header className="flex h-16 items-center justify-between sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
            {/* Skip to main content link */}
            <div className="container flex h-16 items-center justify-between mx-auto px-4">
                <a
                    href="#main-content"
                    className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 bg-primary text-primary-foreground px-4 py-2"
                >
                    Aller au contenu principal
                </a>
                <Link href="/" className="flex items-center space-x-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded">
                    <div className="h-10 w-10 relative">
                        <Image
                            src="/logo-royal-pomsky.jpg"
                            alt="logo Royal POMSKY - Elevage de pomsky"
                            fill
                            sizes="40px"
                            className="object-contain"
                            priority
                        />
                    </div>
                    <span className="text-xl font-bold text-primary">Royal POMSKY</span>
                </Link>

                {/* Desktop Navigation */}
                <DesktopNav />

                <div className="flex items-center space-x-2">
                    <ThemeToggle />
                    <MobileNav />
                </div>
            </div>
        </header>
    )
}
