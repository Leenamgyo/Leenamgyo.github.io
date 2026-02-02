import { getPosts } from '$lib/utils/posts';

export const load = async () => {
    const posts = await getPosts();
    return { posts };
};
