export interface Article {
    _path: string;
    title?: string;
    date?: string;
    subtitle?: string;
    tags?: string[];
    excerpt?: string;
    body?: string;
    links?: { icon: string; href: string }[];
    banner?: string;
}
