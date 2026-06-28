import type React from "react"
import type { Metadata } from "next"
import { Questrial } from "next/font/google"
import CookieConsent from "../components/cookie-consent"
import AnalyticsConsent from "../components/analytics-consent"
import "./globals.css"
import { ThemeProvider } from "next-themes"
import { Navigation } from "../components/navigation"
import { Footer } from "../components/footer"
import { siteConfig } from "@/lib/seo-config"
import { generateOrganizationSchema, generateWebsiteSchema } from "@/lib/schema-generators"

const questrial = Questrial({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-questrial",
  fallback: ["Arial", "Helvetica", "ui-sans-serif", "system-ui", "sans-serif"],
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  authors: [{ name: siteConfig.author, url: siteConfig.siteUrl }],
  creator: siteConfig.author,
  publisher: siteConfig.author,

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  // Autres métadonnées
  referrer: "strict-origin-when-cross-origin",
  formatDetection: {
    email: true,
    telephone: true,
    address: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = generateOrganizationSchema()
  const websiteSchema = generateWebsiteSchema()

  return (
    <html lang="fr" suppressHydrationWarning className={`${questrial.variable} scroll-smooth`}>
      <head>
        {/* Google Consent Mode v2 — must run before any gtag/GA script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('consent','default',{analytics_storage:'denied',ad_storage:'denied',wait_for_update:500});`,
          }}
        />

        {/* JSON-LD Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="min-h-screen bg-background flex flex-col">
            <Navigation />
            <main id="main-content" className="px-4 sm:px-6 lg:px-8 flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
        <CookieConsent />
        <AnalyticsConsent />
      </body>
    </html>
  )
}
