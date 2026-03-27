export type IconColorType = 'green' | 'blue' | 'red' | 'orange' ;

export type BlogSection = {
    subtitle: string;
    paragraphs: string[];
    links?: Array<{
        label: string;
        href: string;
        external?: boolean;
    }>;
};

export type BlogPost = {
    id: string;
    slug: string;
    title: string;
    seoTitle?: string;
    excerpt: string;
    seoDescription?: string;
    introduction: string;
    sections: BlogSection[];
    author: {
        name: string;
        role: string;
        imageSrc: string;
        imageAlt: string;
        linkedinUrl: string;
        linkedinLabelPrefix: string;
    };
    date: string;
    modifiedDate?: string;
    readTime: string;
    category: string;
    tags: string[];
    image?: string;
    imageAlt?: string;
    recommendedLinks?: Array<{
        label: string;
        href: string;
    }>;
    contactCta?: {
        label?: string;
    };
};

export type BlogAllCategory = {
    name: string;
    description: string;
};

export type BlogCategory = {
    id: string;
    name: string;
    description: string;
    slug: string;
};

export type BlogTheme = {
    slug: string;
    label: string;
    description?: string;
    seoTitle?: string;
    seoDescription?: string;
};

export type BlogHero = {
    title: string;
    subtitle: string;
    cta: string;
    linkTo: string;
    Icon: string;
    color?: IconColorType;
};

export type BlogContentType = {
    hero: BlogHero;
    articleLabels: {
        backToBlog: string;
        contactAuthorTemplate: string;
    };
    allCategory: BlogAllCategory;
    categories: BlogCategory[];
    themes: BlogTheme[];
    posts: BlogPost[];
    filterLabels: {
        all: string;
        search: string;
        searchPlaceholder: string;
        noResults: string;
        readMore: string;
        by: string;
        in: string;
    };
    seo: {
        title: string;
        description: string;
        keywords: string[];
    };
};
