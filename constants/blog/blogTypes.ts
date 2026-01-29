export type IconColorType = 'green' | 'blue' | 'red' | 'orange' ;

export type BlogSection = {
    subtitle: string;
    paragraphs: string[];
};

export type BlogPost = {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
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
    readTime: string;
    category: string;
    tags: string[];
    image?: string;
    imageAlt?: string;
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
