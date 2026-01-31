import Image from "next/image";
import Link from "next/link";

import { blog } from "@/constants/blog/blog";

const formatDate = (value: string) =>
    new Date(value).toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

export default function BlogPage() {
    const { hero, posts, filterLabels } = blog;

    return (
        <main className="bg-[#f5f2ee] text-slate-900">
            <section className="relative overflow-hidden border-b-2 border-dashed border-slate-700/10">
                <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
                    <div className="flex flex-col gap-6">
                        <p className="text-xs uppercase tracking-[0.3em] text-slate-900">
                            Journal du Pomsky
                        </p>
                        <h1 className="text-3xl md:text-5xl font-serif font-semibold leading-tight bg-linear-to-r from-slate-900 via-primary to-slate-900 text-transparent bg-clip-text">
                            {hero.title}
                        </h1>
                        <p className="text-base md:text-lg text-slate-600 max-w-2xl">
                            {hero.subtitle}
                        </p>
                        <div className="flex flex-wrap items-center gap-3 text-sm">
                            <Link
                                href={hero.linkTo}
                                className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-5 py-2 text-sm"
                            >
                                {hero.cta}
                            </Link>
                            <span className="text-slate-500">
                                {posts.length} articles
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-6 py-12 md:py-16">
                <div className="grid gap-10">
                    {posts.map((post) => (
                        <article
                            key={post.id}
                            className="grid gap-6 md:grid-cols-[1.1fr_1.5fr] items-start border-b border-slate-200/70 pb-10"
                        >
                            {post.image ? (
                                <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-slate-200">
                                    <Image
                                        src={post.image}
                                        alt={post.imageAlt ?? post.title}
                                        fill
                                        className="object-cover"
                                        sizes="(min-width: 768px) 40vw, 100vw"
                                    />
                                </div>
                            ) : (
                                <div className="aspect-4/3 w-full rounded-2xl bg-slate-100" />
                            )}

                            <div className="flex flex-col gap-4">
                                <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-slate-500">
                                    <span>{formatDate(post.date)}</span>
                                    <span>•</span>
                                    <span>{post.readTime}</span>
                                    <span>•</span>
                                    <span>{post.category}</span>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-semibold leading-snug">
                                    <Link href={`/blog/${post.slug}`} className="hover:underline">
                                        {post.title}
                                    </Link>
                                </h2>
                                <p className="text-slate-600 leading-relaxed">
                                    {post.excerpt}
                                </p>
                                <div className="flex items-center gap-4 text-sm text-slate-500">
                                    <span>
                                        {filterLabels.by} {post.author.name}
                                    </span>
                                    <span>
                                        {filterLabels.in} {post.category}
                                    </span>
                                </div>
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="text-sm uppercase tracking-[0.2em] text-slate-900 underline hover:text-slate-700"
                                >
                                    {filterLabels.readMore} →
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}
