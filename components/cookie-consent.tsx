"use client"

import { useEffect, useState } from "react"
import { Button } from "./ui/button"
import { Cookie } from "lucide-react"

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

export default function CookieConsent() {
    const [consent, setConsent] = useState<"accepted" | "denied" | "unknown">("unknown")
    const [open, setOpen] = useState(false)

    function injectGAScript() {
        if (!GA_ID) return
        const alreadyLoaded = document.querySelector('script[data-cookie-consent="ga-loader"]')
        if (alreadyLoaded) return

        const s1 = document.createElement("script")
        s1.async = true
        s1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
        s1.dataset.cookieConsent = "ga-loader"
        document.head.appendChild(s1)

        const s2 = document.createElement("script")
        s2.dataset.cookieConsent = "ga-inline"
        s2.innerHTML = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`
        document.head.appendChild(s2)
    }

    useEffect(() => {
        try {
            const stored = localStorage.getItem("cookie_consent")
            if (stored === "accepted" || stored === "denied") {
                setConsent(stored)
                setOpen(false)
            } else {
                setConsent("unknown")
                setOpen(true)
            }
        } catch (e) {
            setConsent("unknown")
            setOpen(true)
        }
    }, [])

    function accept() {
        try {
            localStorage.setItem("cookie_consent", "accepted")
        } catch { }
        setConsent("accepted")
        setOpen(false)
    }

    function clearGACookies() {
        try {
            // Best-effort remove common GA cookies
            const cookies = document.cookie.split(";")
            cookies.forEach((c) => {
                const name = c.split("=")[0].trim()
                if (/_ga|_gid|_gat|gac_/.test(name)) {
                    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${location.hostname}`
                }
            })
        } catch { }
    }

    function removeGAScript() {
        if (!GA_ID) return
        try {
            const scripts = Array.from(document.querySelectorAll('script[data-cookie-consent^="ga"]'))
            scripts.forEach((s) => s.parentElement?.removeChild(s))
            try {
                delete (window as any).gtag
                delete (window as any).dataLayer
            } catch { }
        } catch (e) {
            console.warn("cookie-consent: failed to remove GA scripts", e)
        }
    }

    function decline() {
        try {
            localStorage.setItem("cookie_consent", "denied")
        } catch { }
        // If GA already loaded, inform Google Consent Mode and try to clear cookies
        try {
            if ((window as any).gtag) {
                ; (window as any).gtag("consent", "update", { analytics_storage: "denied" })
            }
            clearGACookies()
            removeGAScript()
        } catch { }
        setConsent("denied")
        setOpen(false)
    }

    // Inject GA script when accepted, remove when refused
    useEffect(() => {
        if (consent === "accepted") {
            injectGAScript()
        } else if (consent === "denied") {
            // Remove GA scripts and cookies
            removeGAScript()
            clearGACookies()
        }
    }, [consent])

    return (
        <>
            {/* scripts are injected manually into <head> when consent is given */}

            {/* Banner/modal */}
            {open && (
                <div className="fixed w-full bottom-4 z-50 md:bottom-8">
                    <div className="max-w-4xl mx-auto h-40 bg-background/95 backdrop-blur border p-4 rounded-lg shadow-lg flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
                        <div className="flex-1 text-sm text-muted-foreground">
                            Nous utilisons des cookies pour améliorer votre expérience et effectuer des analyses. Acceptez-vous
                            l'utilisation des cookies analytiques ?   <Button variant="ghost" onClick={decline} className="px-4 py-2 rounded-md">
                                Refuser
                            </Button>
                        </div>
                        <div className="flex items-center gap-2">
                            <Button onClick={accept} className="bg-primary text-white px-4 py-2 font-semibold">
                                Accepter
                            </Button>
                        </div>
                    </div>
                </div>
            )}

            {/* Small manager button to change choice */}
            {consent !== "unknown" && (
                <button
                    aria-label="Gérer les cookies"
                    title="Gérer les cookies"
                    onClick={() => setOpen(true)}
                    className="fixed bottom-4 left-4 z-40 bg-background/60 text-primary border border-primary px-2 py-2 rounded-full text-sm shadow-md cursor-pointer hover:bg-accent transition"
                >
                    <Cookie />
                </button>
            )}
        </>
    )
}
