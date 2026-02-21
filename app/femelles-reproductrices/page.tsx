import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FAQSection } from "@/components/faq"
import { faqReproducteurs } from "@/lib/faq-data"
import { Dog, PawPrint, Ruler, Weight } from "lucide-react"
import { generateBreadcrumbSchema, generateFAQSchema, generateReproductorSchema } from "@/lib/schema-generators"
import ImageCarousel from "@/components/client/carousel/ImageCarousel"
import type { Metadata } from "next"
import { buildOpenGraph, buildTwitter, pageMetadata, returnLastmod, siteConfig } from "@/lib/seo-config"
import { convertFAQsToSchema } from "@/lib/faq-utils"
import Link from "next/link"
import { puppies } from "./puppies"
import { pageContent } from "@/lib/page-content"

export const metadata: Metadata = {
    title: pageMetadata.reproductors.title,
    description: pageMetadata.reproductors.description,
    keywords: pageMetadata.reproductors.keywords,
    openGraph: buildOpenGraph({
        title: pageMetadata.reproductors.title,
        description: pageMetadata.reproductors.description,
        url: `${siteConfig.siteUrl}/femelles-reproductrices`,
        images: [
            {
                url: `${siteConfig.siteUrl}${siteConfig.ogImage}`,
                alt: siteConfig.ogImageAlt,
                width: siteConfig.ogImageWidth,
                height: siteConfig.ogImageHeight,
                type: "image/webp",
            },
        ],
    }),
    twitter: buildTwitter({
        title: pageMetadata.reproductors.title,
        description: pageMetadata.reproductors.description,
        imageUrl: `${siteConfig.siteUrl}${siteConfig.ogImage}`,
    }),
    alternates: {
        canonical: `${siteConfig.siteUrl}/femelles-reproductrices`,
    },
}

export default function NosChiotsPage() {
    // Schémas JSON-LD
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Accueil", url: "/" },
        { name: "Nos reproducteurs", url: siteConfig.pages.reproductors },
    ])
    const faqSchema = generateFAQSchema(convertFAQsToSchema(faqReproducteurs))
    const reproductorGraphSchema = {
        "@context": "https://schema.org",
        "@graph": puppies.map((puppy) =>
            generateReproductorSchema({
                name: puppy.name,
                description: puppy.description,
                color: puppy.color,
                size: puppy.size,
                image: puppy.images[0] ?? siteConfig.ogImage,
            })
        ),
    }
    const lastMod = returnLastmod(siteConfig.pages.reproductors)


    return (
        <>
            {/* JSON-LD Schemas */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(reproductorGraphSchema) }}
            />

            <div className="py-16">
                <div className="container mx-auto my-12">
                    <section className="text-center space-y-4 mb-12">
                        <h1
                            className="text-xl md:text-3xl font-bold">{pageContent.reproductors.h1}</h1>
                        <h2 className="text-xl md:text-2xl">{pageContent.reproductors.subtitle}</h2>

                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{pageContent.reproductors.description}</p>

                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{pageContent.reproductors.descriptionSecondary}</p>

                        <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                    </section>

                    <div className="grid gap-10">
                        {puppies.map((puppy, index) => (
                            <Card key={puppy.name} className="overflow-hidden bg-muted/30 p-0 md:p-6">
                                <CardContent className="p-0">
                                    <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? "md:grid-flow-col-dense" : ""}`}>
                                        <ImageCarousel
                                            className={index % 2 === 1 ? "md:order-2" : undefined}
                                            images={puppy.images}
                                            alt={"Carrousel d'images du Pomsky reproducteur " + puppy.name}
                                            priority={index === 0}
                                            sizes="(min-width: 1024px) 50vw, (min-width: 768px) 50vw, 100vw"
                                        />
                                        <div className={`p-8 space-y-4 flex flex-col justify-center min-w-0 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                                            <div className="flex items-center gap-2">
                                                <Badge variant="secondary">
                                                    <PawPrint className="h-4 w-4 mr-1" />
                                                    {puppy.coat}
                                                </Badge>
                                                <Badge variant="outline" className="min-w-0 whitespace-normal wrap-break-words">{puppy.color}</Badge>
                                            </div>
                                            <div className="space-y-2">
                                                <h3 className="text-2xl font-bold">{puppy.name}</h3>
                                                <p className="text-muted-foreground">{puppy.description}</p>
                                                <div>
                                                    {puppy.health && puppy.health.length > 0 && (
                                                        <div className="space-y-1">
                                                            <h4 className="font-semibold">Santé :</h4>
                                                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                                                                {puppy.health.map((healthItem) => (
                                                                    <li key={healthItem}>{healthItem}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                                                    <div className="flex items-center gap-2 text-muted-foreground">
                                                        <Dog className="h-4 w-4 text-primary" />
                                                        <span>{puppy.size}</span>
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                                                    <div className="flex items-center gap-2 text-muted-foreground">
                                                        <Ruler className="min-h-4 min-w-4 text-primary" />
                                                        <span>{puppy.ruler}</span>
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                                                    <div className="flex items-center gap-2 text-muted-foreground">
                                                        <Weight className="min-h-4 min-w-4 text-primary" />
                                                        <span>{puppy.weight}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {puppy.highlights.map((item) => (
                                                    <Badge key={item} variant="secondary">
                                                        {item}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                        <Link
                            href="/chiots-disponibles"
                            className="bg-primary w-fit m-auto text-white hover:bg-primary/80 p-4 font-semibold inline-block dark:text-[#5b3a1a] rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        >
                            Découvrir nos Chiots
                        </Link>
                    </div>

                    <FAQSection
                        title="FAQ race et sélection"
                        description="Formats, histoire et variétés de poil pour mieux comprendre nos pomsky reproducteurs."
                        items={faqReproducteurs}
                    />
                    <div className="text-right text-xs text-muted-foreground mt-6">
                        Dernière mise à jour : {lastMod}
                    </div>
                </div>
            </div>
        </>
    )
}




