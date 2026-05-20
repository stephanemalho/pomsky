import Image from "next/image"
import Link from "next/link"
import { Search } from "lucide-react"

import { SectionTitleIcon } from "@/components/section-title-icon"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { siteConfig } from "@/lib/seo-config"
import { cn } from "@/lib/utils"

export type InternalLinkItem = {
  href: string
  title: string
  description: string
  image?: string
  imageAlt?: string
}

const internalLinkImagesByHref: Record<string, string> = {
  "/": siteConfig.ogImage,
  "/le-pomsky": "/pages/le-pomsky/pomsky-f4-et-une-citrouille.webp",
  "/pomsky-prix": "/pages/puppies/pomsky-mini-aika-1.webp",
  "/presentation-elevage": "/AKASHA-pomsky-toy-f4.webp",
  "/presentation-eleveuses": "/assets/authors/marine-ava.webp",
  "/femelles-reproductrices": "/BEAUTY-pomsky-miniature-f4.webp",
  "/chiots-disponibles": "/pages/puppies/pomsky-mini-aika-1.webp",
  "/adoption/reussir-son-adoption": "/pomsky-and-his-pet-family-parent.webp",
  "/bien-etre-animal": "/pages/conditions-de-vie/sortie-encadree-avec-marine.webp",
  "/galerie": "/pages/puppies/pomsky-toy-sano-1.webp",
  "/contact": siteConfig.ogImage,
  "/blog": siteConfig.ogImage,
  "/blog/pomsky": siteConfig.ogImage,
}

function getInternalLinkImage(item: InternalLinkItem) {
  const hrefWithoutAnchor = item.href.split("#")[0]?.split("?")[0] || item.href

  return item.image ?? internalLinkImagesByHref[hrefWithoutAnchor] ?? siteConfig.ogImage
}

type InternalLinksSectionProps = {
  title: string
  description?: string
  items: InternalLinkItem[]
  className?: string
}

export function InternalLinksSection({
  title,
  description,
  items,
  className,
}: InternalLinksSectionProps) {
  const isThreeItems = items.length === 3

  return (
    <section className={cn("space-y-8", className)}>
      <div className="space-y-3 text-center">
        <div className="flex items-center justify-center gap-3">
          <SectionTitleIcon icon={Search} />
          <h2 className="text-xl font-bold md:text-2xl">{title}</h2>
        </div>
        {description ? (
          <p className="mx-auto max-w-3xl text-muted-foreground">{description}</p>
        ) : null}
        <div className="mx-auto h-1 w-24 rounded-full bg-primary" aria-hidden="true" />
      </div>

      <div
        className={cn(
          "grid gap-4",
          isThreeItems ? "md:mx-auto md:max-w-5xl md:grid-cols-3" : "md:grid-cols-2 xl:grid-cols-4"
        )}
      >
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group block rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <Card className="h-full border-muted bg-muted/35 transition-colors group-hover:border-primary/35 group-hover:bg-muted/55">
              <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-primary/15 bg-background shadow-sm ring-4 ring-background transition-transform group-hover:scale-105">
                  <Image
                    src={getInternalLinkImage(item)}
                    alt={item.imageAlt ?? `Image de la page ${item.title}`}
                    fill
                    className="object-cover"
                    sizes="64px"
                    quality={60}
                  />
                </span>
                <div className="min-w-0 pt-1">
                  <CardTitle className="text-lg leading-snug group-hover:text-primary">
                    {item.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}
