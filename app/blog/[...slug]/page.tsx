import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { blog } from "@/constants/blog/blog";
import { buildOpenGraph, pageMetadata, siteConfig } from "@/lib/seo-config";
import type { BlogPost } from "@/constants/blog/blogTypes";

type BlogArticlePageProps = {
    params: { slug: string[] } | Promise<{ slug: string[] }>;
};

const getPostBySlug = (slug: string): BlogPost | undefined =>
    blog.posts.find((post) => post.slug === slug);

const toSectionId = (value: string) =>
    value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const formatDate = (value: string) =>
    new Date(value).toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

export function generateStaticParams() {
    return blog.posts.map((post) => ({ slug: post.slug.split("/") }));
}

export async function generateMetadata({
    params,
}: BlogArticlePageProps): Promise<Metadata> {
    const resolvedParams = await params;
    const slug = Array.isArray(resolvedParams.slug)
        ? resolvedParams.slug.map((segment) => decodeURIComponent(segment)).join("/")
        : decodeURIComponent(resolvedParams.slug);
    const post = getPostBySlug(slug);

    if (!post) {
        return {
            title: pageMetadata.blog.title,
            description: pageMetadata.blog.description,
            alternates: {
                canonical: new URL("/blog/pomsky", siteConfig.siteUrl).toString(),
            },
            openGraph: buildOpenGraph({
                title: pageMetadata.blog.title,
                description: pageMetadata.blog.description,
                url: new URL("/blog/pomsky", siteConfig.siteUrl).toString(),
                images: [
                    {
                        url: new URL(siteConfig.ogImage, siteConfig.siteUrl).toString(),
                        alt: siteConfig.ogImageAlt,
                        width: siteConfig.ogImageWidth,
                        height: siteConfig.ogImageHeight,
                        type: "image/webp",
                    },
                ],
            }),
        };
    }

    const canonicalPath = `/blog/${post.slug}`;
    const imageUrl = post.image
        ? new URL(post.image, siteConfig.siteUrl).toString()
        : new URL(siteConfig.ogImage, siteConfig.siteUrl).toString();

    return {
        title: post.title,
        description: post.excerpt,
        keywords: post.tags,
        alternates: {
            canonical: new URL(canonicalPath, siteConfig.siteUrl).toString(),
        },
        openGraph: buildOpenGraph({
            title: post.title,
            description: post.excerpt,
            url: new URL(canonicalPath, siteConfig.siteUrl).toString(),
            type: "article",
            publishedTime: post.date,
            authors: [post.author.name],
            images: [
                {
                    url: imageUrl,
                    alt: post.imageAlt ?? post.title,
                    width: siteConfig.ogImageWidth,
                    height: siteConfig.ogImageHeight,
                    type: "image/webp",
                },
            ],
        }),
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
            images: [imageUrl],
        },
    };
}

export default async function BlogArticlePage({
    params,
}: BlogArticlePageProps) {
    const resolvedParams = await params;
    const slug = Array.isArray(resolvedParams.slug)
        ? resolvedParams.slug.map((segment) => decodeURIComponent(segment)).join("/")
        : decodeURIComponent(resolvedParams.slug);
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const { articleLabels } = blog;

    return (
        <div className="bg-background text-foreground">
            <header className="max-w-4xl mx-auto px-6 pt-12 md:pt-16 pb-8">
                <Link
                    href="/blog/pomsky"
                    className="text-xs uppercase tracking-[0.2em] text-muted-foreground underline hover:text-foreground/80"
                >
                    ← {articleLabels.backToBlog}
                </Link>
                <div className="mt-6 flex flex-col gap-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                        {post.category}
                    </p>
                    <h1 className="text-3xl md:text-5xl font-serif font-semibold leading-tight bg-linear-to-r from-foreground via-primary to-foreground text-transparent bg-clip-text">
                        {post.title}
                    </h1>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                        {post.introduction}
                    </p>
                    <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        <span>{formatDate(post.date)}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                    </div>
                </div>
            </header>

            {post.image ? (
                <section className="max-w-5xl mx-auto px-6">
                    <div className="relative aspect-video w-full overflow-hidden rounded-3xl bg-muted">
                        <Image
                            src={post.image}
                            alt={post.imageAlt ?? post.title}
                            fill
                            className="object-cover"
                            sizes="(min-width: 1024px) 70vw, 100vw"
                            priority
                            fetchPriority="high"
                            quality={75}
                        />
                    </div>
                </section>
            ) : null}

            <article className="max-w-3xl mx-auto px-6 py-12 md:py-14 text-muted-foreground">
                <div className="flex flex-wrap gap-2 mb-10">
                    {post.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-muted-foreground">
                            {tag}
                        </Badge>
                    ))}
                </div>

                <div className="space-y-12">
                    {post.sections.map((section) => (
                        <section key={section.subtitle} id={toSectionId(section.subtitle)}>
                            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-4">
                                {section.subtitle}
                            </h2>
                            <div className="space-y-4 leading-relaxed">
                                {section.paragraphs.map((paragraph, index) => (
                                    <p key={`${section.subtitle}-${index}`}>{paragraph}</p>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </article>

            <aside className="max-w-3xl mx-auto px-6 pb-16">
                <div className="rounded-3xl border border-border bg-card p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center md:items-start">
                    <div className="relative h-20 w-20 overflow-hidden rounded-full bg-muted">
                        <Image
                            src={post.author.imageSrc}
                            alt={post.author.imageAlt}
                            fill
                            className="object-cover"
                            sizes="80px"
                            quality={80}
                        />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                            {articleLabels.contactAuthorTemplate.replace(
                                "{author}",
                                post.author.name
                            )}
                        </p>
                        <h3 className="mt-2 text-xl font-serif font-semibold text-foreground">
                            {post.author.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">{post.author.role}</p>
                        {post.contactCta?.label ? (
                            <div className="flex items-center justify-between mt-4">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 rounded-full border border-foreground px-4 py-2 text-xs uppercase tracking-[0.2em] text-foreground"
                                >
                                    {post.contactCta.label}
                                </Link>
                                <Link
                                    href="/blog/pomsky"
                                    className="text-xs uppercase tracking-[0.2em] text-muted-foreground underline hover:text-foreground/80"
                                >
                                    ← {articleLabels.backToBlog}
                                </Link>
                            </div>
                        ) : null}
                    </div>
                </div>
            </aside>
        </div>
    );
}

