import { Card, CardContent } from "@/components/ui/card"
import { FAQSection } from "@/components/faq"
import { faqContact } from "@/lib/faq-data"
import { MapPin, Phone, Mail, Clock, PawPrint } from "lucide-react"
import type { Metadata } from "next"
import { pageMetadata, returnLastmod, siteConfig } from "@/lib/seo-config"
import { pageContent } from "@/lib/page-content"
import { generateLocalBusinessSchema, generateContactPointSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators"
import { convertFAQsToSchema } from "@/lib/faq-utils"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
    title: pageMetadata.contact.title,
    description: pageMetadata.contact.description,
    keywords: pageMetadata.contact.keywords,
    openGraph: {
        title: pageMetadata.contact.title,
        description: pageMetadata.contact.description,
        url: `${siteConfig.siteUrl}/contact`,
        images: [{ url: `${siteConfig.siteUrl}${siteConfig.ogImage}` }],
    },
    alternates: {
        canonical: `${siteConfig.siteUrl}/contact`,
    },
}

const contactItems = [
    {
        icon: MapPin,
        title: "Adresse",
        type: "address",
        content: "Jura (39) commune de SAINT AMOUR",
        secondaryLine: "visite sur rendez-vous."
    },
    {
        icon: Phone,
        title: "Téléphone",
        type: "tel",
        content: "+33 6 89 75 80 31",
        secondaryLine: "SMS ou WhatsApp pour réserver un créneau."
    },
    {
        icon: Mail,
        title: "Email",
        type: "email",
        content: "exoticperleteckel@gmail.com",
        secondaryLine: "Réponse sous 24h, vidéos envoyées sur demande."
    },
    {
        icon: Clock,
        title: "Horaires",
        type: "text",
        content: "Lun - Sam : 9h - 18h",
        secondaryLine: "Dimanche : visites vidéo uniquement."
    }
]

const renderContactContent = (item: typeof contactItems[0]) => {
    switch (item.type) {
        case "email":
            return (
                <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <a href={`mailto:${item.content}`} className="text-primary hover:underline text-sm">
                        {item.content}
                    </a>
                    <p className="text-muted-foreground text-sm">{item.secondaryLine}</p>
                </div>
            )
        case "tel":
            return (
                <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <a href={`tel:${item.content.replace(/\s/g, "")}`} className="text-primary hover:underline text-sm">
                        {item.content}
                    </a>
                    <p className="text-muted-foreground text-sm">{item.secondaryLine}</p>
                </div>
            )
        case "address":
            return (
                <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <address className="not-italic text-muted-foreground text-sm">
                        {item.content}
                        <br />
                        {item.secondaryLine}
                    </address>
                </div>
            )
        default:
            return (
                <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.content}</p>
                    <p className="text-muted-foreground text-sm">{item.secondaryLine}</p>
                </div>
            )
    }
}

export default function ContactPage() {
    // Schémas JSON-LD
    const localBusinessSchema = generateLocalBusinessSchema()
    const contactPointSchema = generateContactPointSchema()
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Accueil", url: "/" },
        { name: "Contact", url: siteConfig.pages.contact },
    ])
    const faqSchema = generateFAQSchema(convertFAQsToSchema(faqContact))
    const lastMod = returnLastmod(siteConfig.pages.contact)

    return (
        <>
            {/* JSON-LD Schemas */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPointSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className="py-16">
                <div className="container mx-auto">
                    {/* Header */}
                    <section className="text-center space-y-4 mb-12">
                        <h1
                            className="text-xl md:text-3xl font-bold">{pageContent.contact.h1}</h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            {pageContent.contact.description}
                        </p>
                    </section>

                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="bg-muted/40">
                            <CardContent className="p-6 space-y-4">
                                {contactItems.map((item) => {
                                    const IconComponent = item.icon
                                    return (
                                        <div key={item.title} className="flex items-start space-x-3">
                                            <IconComponent className="h-5 w-5 text-primary mt-1" aria-hidden="true" />
                                            {renderContactContent(item)}
                                        </div>
                                    )
                                })}
                            </CardContent>
                        </Card>

                        <Card className="bg-muted/40">
                            <CardContent className="p-6 space-y-4">
                                <h2 className="text-xl md:text-2xl font-semibold">Dites nous en plus sur votre projet avant de prendre rendez-vous</h2>
                                <p className="text-muted-foreground">
                                    Remplissez notre questionnaire de pré-visite pour que nous puissions mieux comprendre vos attentes et vous proposer le teckel qui correspondra parfaitement à votre famille. <br /><span className="text-sm italic text-muted-foreground/80">(gratuit et sans engagement de votre part)</span>
                                </p>
                                <div className="space-y-3">
                                    <div className="flex items-center space-x-2">
                                        <PawPrint className="h-4 w-4 text-primary" aria-hidden="true" />
                                        <span className="text-sm text-muted-foreground">Visite en présentiel ou en visio possible</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <PawPrint className="h-4 w-4 text-primary" aria-hidden="true" />
                                        <span className="text-sm text-muted-foreground">Dossier d&apos;élevage envoyé avant la rencontre</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <PawPrint className="h-4 w-4 text-primary" aria-hidden="true" />
                                        <span className="text-sm text-muted-foreground">Réponse personnalisée sous 24h</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center flex-col lg:flex-row gap-3">
                                    <div className="relative w-40 aspect-square my-4">
                                        <Image
                                            src="/qr-code-contact-exotic-perle-teckel.png"
                                            alt="QR code pour contacter Royal POMSKY"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="flex flex-col items-center space-y-2">
                                        <Link target="_blank" href="https://forms.gle/GJC3979ysQrCwwe18" className="flex items-center bg-primary text-white hover:bg-primary/80 px-4 font-semibold dark:text-[#5b3a1a] rounded-md h-10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">Remplir le questionnaire
                                        </Link>
                                        <span className="text-sm italic text-muted-foreground/80">Vous recevrez un exemplaire par mail</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <FAQSection
                        title="FAQ avant de prendre contact"
                        description="Réponses rapides sur le caractère et la cohabitation du teckel."
                        items={faqContact}
                    />
                    <div className="text-right text-xs text-muted-foreground mt-6">
                        Dernière mise à jour : {lastMod}
                    </div>
                </div>
            </div>
        </>
    )
}

