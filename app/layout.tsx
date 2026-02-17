import type React from "react"
import type { Metadata } from "next"
import CookieConsent from "../components/cookie-consent"
import AnalyticsConsent from "../components/analytics-consent"
import "./globals.css"
import { ThemeProvider } from "next-themes"
import { Navigation } from "../components/navigation"
import { Footer } from "../components/footer"
import { siteConfig } from "@/lib/seo-config"
import { generateOrganizationSchema, generateWebsiteSchema } from "@/lib/schema-generators"
import { Questrial } from "next/font/google"
import { cookies } from "next/headers"

const questrial = Questrial({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "Segoe UI", "sans-serif"],
  adjustFontFallback: true,
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author, url: siteConfig.siteUrl }],
  creator: siteConfig.author,
  publisher: siteConfig.author,

  // Open Graph
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.siteUrl,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.siteUrl}${siteConfig.ogImage}`,
        width: siteConfig.ogImageWidth,
        height: siteConfig.ogImageHeight,
        alt: siteConfig.ogImageAlt,
        type: "image/webp",
      },
    ],
    siteName: siteConfig.name,
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.siteUrl}${siteConfig.ogImage}`],
  },

  // Autres métadonnées
  referrer: "strict-origin-when-cross-origin",
  formatDetection: {
    email: true,
    telephone: true,
    address: true,
  },
  other: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { "google-site-verification": process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = generateOrganizationSchema()
  const websiteSchema = generateWebsiteSchema()
  const cookieStore = await cookies()
  const consentCookie = cookieStore.get("cookie_consent")?.value
  const initialConsent = consentCookie === "accepted" || consentCookie === "denied" ? consentCookie : "unknown"

  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        {/* Google Analytics will be injected by the client cookie consent manager */}

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
      <body className={questrial.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="min-h-screen bg-background flex flex-col">
            <Navigation />
            <main id="main-content" className="px-4 sm:px-6 lg:px-8 flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
        <CookieConsent initialConsent={initialConsent} />
        <AnalyticsConsent initialConsent={initialConsent} />
      </body>
    </html>
  )
}
