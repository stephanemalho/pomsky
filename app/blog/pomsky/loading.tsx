export default function PomskyBlogLoading() {
    return (
        <main className="bg-background text-foreground">
            <section className="border-b-2 border-dashed border-border/60">
                <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
                    <div className="flex flex-col gap-6 animate-pulse">
                        <div className="h-3 w-40 rounded-full bg-muted/70" />
                        <div className="h-10 w-full max-w-2xl rounded-full bg-muted/70" />
                        <div className="h-5 w-full max-w-3xl rounded-full bg-muted/70" />
                        <div className="flex flex-wrap items-center gap-3 text-sm">
                            <div className="h-9 w-44 rounded-full bg-muted/70" />
                            <div className="h-4 w-24 rounded-full bg-muted/70" />
                        </div>
                        <div className="flex flex-wrap items-center gap-3 text-xs">
                            {Array.from({ length: 6 }).map((_, index) => (
                                <div
                                    key={`pill-${index}`}
                                    className="my-2 h-8 w-28 rounded-full bg-muted/70"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-6 py-12 md:py-16">
                <div className="grid gap-10">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <div
                            key={`card-${index}`}
                            className="grid gap-6 md:grid-cols-[1.1fr_1.5fr] items-start border-b border-border/60 pb-10 animate-pulse"
                        >
                            <div className="aspect-4/3 w-full rounded-2xl bg-muted/70" />
                            <div className="flex flex-col gap-4">
                                <div className="h-3 w-60 rounded-full bg-muted/70" />
                                <div className="h-8 w-full max-w-xl rounded-full bg-muted/70" />
                                <div className="h-5 w-full max-w-2xl rounded-full bg-muted/70" />
                                <div className="h-4 w-48 rounded-full bg-muted/70" />
                                <div className="h-3 w-36 rounded-full bg-muted/70" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}

