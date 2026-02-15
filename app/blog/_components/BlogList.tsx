import Image from "next/image";
import Link from "next/link";

import { blog } from "@/constants/blog/blog";

type BlogListProps = {
    base: string;
    theme?: string;
};

const formatDate = (value: string) =>
    new Date(value).toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

const getThemeFromSlug = (slug: string) => slug.split("/")[1] ?? "caracteristique";

export default function BlogList({ base, theme }: BlogListProps) {
    const { hero, posts, filterLabels, themes } = blog;
    const basePosts = posts.filter((post) => post.slug.startsWith(`${base}/`));
    const activeTheme = themes.find((item) => item.slug === theme)?.slug;
    const visiblePosts = activeTheme
        ? basePosts.filter((post) => getThemeFromSlug(post.slug) === activeTheme)
        : basePosts;

    return (
        <div className="bg-background text-foreground">
            <section className="relative overflow-hidden border-b-2 border-dashed border-border/60">
                <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
                    <div className="flex flex-col gap-6">
                        <p className="text-xs uppercase tracking-[0.3em] text-foreground">
                            Journal du Pomsky
                        </p>
                        <h1 className="text-3xl md:text-5xl font-serif font-semibold leading-tight bg-linear-to-r from-foreground via-primary to-foreground text-transparent bg-clip-text">
                            {hero.title}
                        </h1>
                        <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
                            {hero.subtitle}
                        </p>
                        <div className="flex flex-wrap items-center gap-3 text-sm">
                            <Link
                                href={hero.linkTo}
                                className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2 text-sm"
                            >
                                {hero.cta}
                            </Link>
                            <span className="text-muted-foreground">
                                {visiblePosts.length} articles
                            </span>
                        </div>
                        <nav aria-label="Filtrer les articles par theme">
                            <ul className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em]">
                                <li className="my-2">
                                    <Link
                                        href={`/blog/${base}`}
                                        className={`rounded-full border px-4 py-2 ${!activeTheme
                                                ? "border-foreground text-foreground"
                                                : "border-border text-muted-foreground hover:text-foreground/80"
                                            }`}
                                    >
                                        {filterLabels.all}
                                    </Link>
                                </li>
                                {themes.map((item) => (
                                    <li className="my-2" key={item.slug}>
                                        <Link
                                            href={`/blog/${base}/${item.slug}`}
                                            className={`rounded-full border px-4 py-2 ${activeTheme === item.slug
                                                    ? "border-foreground text-foreground"
                                                    : "border-border text-muted-foreground hover:text-foreground/80"
                                                }`}
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-6 py-12 md:py-16">
                {visiblePosts.length === 0 ? (
                    <p className="text-sm text-muted-foreground">{filterLabels.noResults}</p>
                ) : (
                    <div className="grid gap-10">
                        {visiblePosts.map((post, index) => (
                            <article
                                key={post.id}
                                className="grid gap-6 md:grid-cols-[1.1fr_1.5fr] items-start border-b border-border/70 pb-10"
                            >
                                {post.image ? (
                                    <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-muted">
                                        <Image
                                            src={post.image}
                                            alt={post.imageAlt ?? post.title}
                                            fill
                                            className="object-cover"
                                            sizes="(min-width: 768px) 40vw, 100vw"
                                            priority={index === 0}
                                            fetchPriority={index === 0 ? "high" : "auto"}
                                            quality={75}
                                        />
                                    </div>
                                ) : (
                                    <div className="aspect-4/3 w-full rounded-2xl bg-muted" />
                                )}

                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                                        <span>{formatDate(post.date)}</span>
                                        <span>•</span>
                                        <span>{post.readTime}</span>
                                        <span>•</span>
                                        <span>{post.category}</span>
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-serif font-semibold leading-snug">
                                        <Link
                                            href={`/blog/${post.slug}`}
                                            className="hover:underline"
                                        >
                                            {post.title}
                                        </Link>
                                    </h2>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                        <span>
                                            {filterLabels.by} {post.author.name}
                                        </span>
                                        <span>
                                            {filterLabels.in} {post.category}
                                        </span>
                                    </div>
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="text-sm uppercase tracking-[0.2em] text-foreground underline hover:text-foreground/80"
                                    >
                                        {filterLabels.readMore}
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
}
