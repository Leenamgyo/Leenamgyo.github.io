export interface Post {
    slug: string;
    title: string;
    date: string;
    description?: string;
    category?: string;
    image?: string;
}

export const getPosts = async () => {
    const allPostFiles = import.meta.glob('../../../content/posts/*.md', { eager: true });
    const posts: Post[] = [];

    for (const path in allPostFiles) {
        const file = allPostFiles[path] as any;
        const slug = path.split('/').pop()?.replace('.md', '');
        
        if (file && typeof file === 'object' && 'metadata' in file && slug) {
            const metadata = file.metadata as Omit<Post, 'slug'>;
            posts.push({
                ...metadata,
                slug
            });
        }
    }

    return posts.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
};
