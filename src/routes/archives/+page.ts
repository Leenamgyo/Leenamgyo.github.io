import { getPosts } from '$lib/utils/posts';

export const load = async () => {
    const posts = await getPosts();
    const groupedPosts = new Map<number, typeof posts>();

    for (const post of posts) {
        const year = new Date(post.date).getFullYear();
        const yearPosts = groupedPosts.get(year) ?? [];
        yearPosts.push(post);
        groupedPosts.set(year, yearPosts);
    }

    return {
        groups: Array.from(groupedPosts.entries())
            .sort(([yearA], [yearB]) => yearB - yearA)
            .map(([year, yearPosts]) => ({ year, posts: yearPosts }))
    };
};
