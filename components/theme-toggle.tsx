"use client"
import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
    const { theme, resolvedTheme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    // Avoid hydration mismatch by rendering a static button until the theme is known on the client.
    if (!mounted) {
        return (
            <Button
                variant="ghost"
                size="icon"
                aria-label="Basculer le theme"
                className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary cursor-pointer"
            >
                <Sun className="h-[1.2rem] w-[1.2rem] opacity-0" />
                <span className="sr-only">Basculer le theme</span>
            </Button>
        )
    }

    const currentTheme = theme === "system" ? resolvedTheme : theme
    const nextTheme = currentTheme === "light" ? "dark" : "light"
    const ariaLabel = `Passer au theme ${nextTheme === "light" ? "clair" : "sombre"}`

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(nextTheme)}
            aria-label={ariaLabel}
            className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary cursor-pointer"
        >
            {currentTheme === "dark" ? (
                <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
            ) : (
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
            )}
            <span className="sr-only">Basculer le theme</span>
        </Button>
    )
}
