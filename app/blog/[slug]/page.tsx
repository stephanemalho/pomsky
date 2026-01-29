import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { blog } from "@/constants/blog/blog";
import type { BlogPost } from "@/constants/blog/blogTypes";

type BlogArticlePageProps = {
    params: { slug: string } | Promise<{ slug: string }>;
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
    return blog.posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogArticlePage({
    params,
}: BlogArticlePageProps) {
    const resolvedParams = await params;
    const slug = decodeURIComponent(resolvedParams.slug);
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const { articleLabels } = blog;

    return (
        <main className="bg-[#fcfbf9] text-slate-900">
            <header className="max-w-4xl mx-auto px-6 pt-12 md:pt-16 pb-8">
                <Link
                    href="/blog"
                    className="text-xs uppercase tracking-[0.2em] text-slate-500 underline hover:text-slate-700"
                >
                  ← {articleLabels.backToBlog}
                </Link>
                <div className="mt-6 flex flex-col gap-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                        {post.category}
                    </p>
                    <h1 className="text-3xl md:text-5xl font-serif font-semibold leading-tight">
                        {post.title}
                    </h1>
                    <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                        {post.introduction}
                    </p>
                    <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-slate-500">
                        <span>{formatDate(post.date)}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                    </div>
                </div>
            </header>

            {post.image ? (
                <section className="max-w-5xl mx-auto px-6">
                    <div className="relative aspect-video w-full overflow-hidden rounded-3xl bg-slate-200">
                        <Image
                            src={post.image}
                            alt={post.imageAlt ?? post.title}
                            fill
                            className="object-cover"
                            sizes="(min-width: 1024px) 70vw, 100vw"
                        />
                    </div>
                </section>
            ) : null}

            <article className="max-w-3xl mx-auto px-6 py-12 md:py-14 text-slate-700">
                <div className="flex flex-wrap gap-2 mb-10">
                    {post.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-slate-600">
                            {tag}
                        </Badge>
                    ))}
                </div>

                <div className="space-y-12">
                    {post.sections.map((section) => (
                        <section key={section.subtitle} id={toSectionId(section.subtitle)}>
                            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-slate-900 mb-4">
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
                <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center md:items-start">
                    <div className="relative h-20 w-20 overflow-hidden rounded-full bg-slate-200">
                        <Image
                            src={post.author.imageSrc}
                            alt={post.author.imageAlt}
                            fill
                            className="object-cover"
                            sizes="80px"
                        />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                            {articleLabels.contactAuthorTemplate.replace(
                                "{author}",
                                post.author.name
                            )}
                        </p>
                        <h3 className="mt-2 text-xl font-serif font-semibold text-slate-900">
                            {post.author.name}
                        </h3>
                        <p className="text-sm text-slate-600">{post.author.role}</p>
                        {post.contactCta?.label ? (
                            <div className="mt-4">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 rounded-full border border-slate-900 px-4 py-2 text-xs uppercase tracking-[0.2em] text-slate-900"
                                >
                                    {post.contactCta.label}
                                </Link>
                            </div>
                        ) : null}
                    </div>
                </div>
            </aside>
        </main>
    );
}
