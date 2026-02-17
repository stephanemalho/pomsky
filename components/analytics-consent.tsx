"use client"

import { useEffect, useState } from "react"
import { Analytics } from "@vercel/analytics/next"

type ConsentState = "accepted" | "denied" | "unknown"

type AnalyticsConsentProps = {
  initialConsent?: ConsentState
}

export default function AnalyticsConsent({ initialConsent = "unknown" }: AnalyticsConsentProps) {
  const [consent, setConsent] = useState<ConsentState>(initialConsent)

  useEffect(() => {
    const readConsent = () => {
      try {
        const stored = localStorage.getItem("cookie_consent")
        if (stored === "accepted" || stored === "denied") {
          setConsent(stored)
          return
        }
      } catch {}
      setConsent(initialConsent)
    }

    readConsent()
    const handler = () => readConsent()
    window.addEventListener("cookie-consent-updated", handler)
    return () => window.removeEventListener("cookie-consent-updated", handler)
  }, [initialConsent])

  useEffect(() => {
    if (consent !== "denied") return
    try {
      const selectors = [
        'script[src*="/_vercel/insights/script.js"]',
        'script[src*="va.vercel-scripts.com/v1/script"]',
      ]
      selectors.forEach((selector) => {
        document.querySelectorAll<HTMLScriptElement>(selector).forEach((script) => {
          script.parentElement?.removeChild(script)
        })
      })
      delete (window as any).va
      delete (window as any).vaq
      delete (window as any).vam
    } catch {}
  }, [consent])

  if (consent !== "accepted") return null
  return <Analytics />
}
