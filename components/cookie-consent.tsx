"use client"

import { useCallback, useEffect, useState } from "react"
import Script from "next/script"
import { Button } from "./ui/button"
import { Cookie } from "lucide-react"

const GA_ID = process.env.NEXT_PUBLIC_GA_ID
type WindowWithGA = Window & {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
    google_tag_data?: unknown
    gaGlobal?: unknown
    [key: `ga-disable-${string}`]: boolean | undefined
}

export default function CookieConsent() {
    const [consent, setConsent] = useState<"accepted" | "denied" | "unknown">("unknown")
    const [open, setOpen] = useState(false)

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
        } catch {
            setConsent("unknown")
            setOpen(true)
        }
    }, [])

    function notifyConsentChange() {
        try {
            window.dispatchEvent(new Event("cookie-consent-updated"))
        } catch { }
    }

    function accept() {
        try {
            localStorage.setItem("cookie_consent", "accepted")
        } catch { }
        try {
            if (GA_ID) {
                const win = window as unknown as WindowWithGA
                win[`ga-disable-${GA_ID}`] = false
            }
        } catch { }
        setConsent("accepted")
        setOpen(false)
        notifyConsentChange()
    }

    const clearGACookies = useCallback(() => {
        try {
            const hostParts = location.hostname.split(".")
            const domainCandidates = new Set([
                undefined,
                location.hostname,
                `.${location.hostname}`,
                hostParts.length > 2 ? `.${hostParts.slice(-2).join(".")}` : undefined,
            ])
            const cookies = document.cookie.split(";")
            cookies.forEach((c) => {
                const name = c.split("=")[0].trim()
                if (/^(_ga|_gid|_gat|_gac_|_ga_)/.test(name)) {
                    domainCandidates.forEach((domain) => {
                        const domainPart = domain ? `; domain=${domain}` : ""
                        document.cookie = `${name}=; Max-Age=0; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domainPart}`
                    })
                }
            })
        } catch { }
    }, [])

    const clearGAStorage = useCallback(() => {
        try {
            const removeMatchingKeys = (storage: Storage) => {
                Array.from({ length: storage.length }, (_, index) => storage.key(index))
                    .filter((key): key is string => Boolean(key))
                    .filter((key) => /^(_ga|_gid|_gat|_gac_|ga:|google_analytics)/i.test(key))
                    .forEach((key) => storage.removeItem(key))
            }

            removeMatchingKeys(localStorage)
            removeMatchingKeys(sessionStorage)
        } catch { }
    }, [])

    const removeGAScript = useCallback(() => {
        if (!GA_ID) return
        try {
            const scripts = Array.from(
                document.querySelectorAll(
                    'script[data-cookie-consent^="ga"], script[id^="ga-"], script[src*="googletagmanager.com/gtag/js"]'
                )
            )
            scripts.forEach((s) => s.parentElement?.removeChild(s))
            try {
                const win = window as unknown as WindowWithGA
                win[`ga-disable-${GA_ID}`] = true
                delete win.gtag
                delete win.dataLayer
                delete win.google_tag_data
                delete win.gaGlobal
            } catch { }
        } catch (error) {
            console.warn("cookie-consent: failed to remove GA scripts", error)
        }
    }, [])

    const revokeAnalyticsConsent = useCallback(() => {
        try {
            const win = window as unknown as WindowWithGA
            if (GA_ID) {
                win[`ga-disable-${GA_ID}`] = true
            }
            if (win.gtag) {
                win.gtag("consent", "update", { analytics_storage: "denied" })
            }
        } catch { }

        clearGACookies()
        clearGAStorage()
        removeGAScript()
    }, [clearGACookies, clearGAStorage, removeGAScript])

    function decline() {
        try {
            localStorage.setItem("cookie_consent", "denied")
        } catch { }
        setConsent("denied")
        setOpen(false)
        revokeAnalyticsConsent()
        window.setTimeout(revokeAnalyticsConsent, 0)
        notifyConsentChange()
    }

    // Remove GA scripts and cookies when refused.
    useEffect(() => {
        if (consent === "denied") {
            revokeAnalyticsConsent()
        }
    }, [consent, revokeAnalyticsConsent])

    return (
        <>
            {consent === "accepted" && GA_ID ? (
                <>
                    <Script
                        id="ga-loader"
                        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
                        strategy="afterInteractive"
                    />
                    <Script id="ga-inline-config" strategy="afterInteractive">
                        {`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');
`}
                    </Script>
                </>
            ) : null}

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
