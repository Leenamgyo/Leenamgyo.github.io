import { error } from '@sveltejs/kit';
import { getPosts } from '$lib/utils/posts';

export const load = async ({ params }) => {
    const posts = await getPosts();
    const requestedTag = params.tag.toLocaleLowerCase();
    const matchingPosts = posts.filter((post) =>
        post.tags?.some((tag) => tag.toLocaleLowerCase() === requestedTag)
    );
    const tag = matchingPosts
        .flatMap((post) => post.tags ?? [])
        .find((name) => name.toLocaleLowerCase() === requestedTag);

    if (!tag) throw error(404, 'Tag not found');

    return { tag, posts: matchingPosts };
};
