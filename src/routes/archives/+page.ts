import { getPosts } from '$lib/utils/posts';

export const load = async () => {
    const posts = await getPosts();
    
    // Group posts by year
    const archives = posts.reduce((acc, post) => {
        const year = new Date(post.date).getFullYear();
        if (!acc[year]) {
            acc[year] = [];
        }
        acc[year].push(post);
        return acc;
    }, {} as Record<number, typeof posts>);

    // Convert to array and sort by year descending
    const sortedArchives = Object.entries(archives)
        .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
        .map(([year, groupPosts]) => ({
            year: Number(year),
            posts: groupPosts
        }));

    return {
        archives: sortedArchives
    };
};
