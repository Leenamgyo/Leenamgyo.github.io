import { getPosts } from '$lib/utils/posts';

export const load = async () => {
    try {
        const posts = await getPosts();
        return {
            posts: posts.slice(0, 5),
            graphPosts: posts
        };
    } catch (e) {
        console.error('Failed to load posts:', e);
        return { posts: [], graphPosts: [] };
    }
};
