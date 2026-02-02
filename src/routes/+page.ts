import { getPosts } from '$lib/utils/posts';

export const load = async () => {
    try {
        const posts = await getPosts();
        // Return top 5 recent posts
        return { posts: posts.slice(0, 5) };
    } catch (e) {
        console.error('Failed to load posts:', e);
        return { posts: [] };
    }
};
