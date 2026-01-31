import { notFound } from "next/navigation";

import BlogList from "@/app/blog/_components/BlogList";
import { blog } from "@/constants/blog/blog";

type PomskyThemePageProps = {
    params: { theme: string } | Promise<{ theme: string }>;
};

export function generateStaticParams() {
    return blog.themes.map((theme) => ({ theme: theme.slug }));
}

export default async function PomskyThemePage({ params }: PomskyThemePageProps) {
    const resolvedParams = await params;
    const theme = decodeURIComponent(resolvedParams.theme);
    const isValidTheme = blog.themes.some((item) => item.slug === theme);

    if (!isValidTheme) {
        notFound();
    }

    return <BlogList base="pomsky" theme={theme} />;
}
