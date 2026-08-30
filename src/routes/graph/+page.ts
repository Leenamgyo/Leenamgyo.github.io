import { getPosts } from '$lib/utils/posts';

export const load = async () => {
    try {
        return { posts: await getPosts() };
    } catch (error) {
        console.error('Failed to load graph posts:', error);
        return { posts: [] };
    }
};
