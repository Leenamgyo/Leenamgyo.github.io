import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
  // Import all posts as dynamic modules
  const modules = import.meta.glob('/content/posts/*.md');
  
  // Construct the expected path for the current slug
  const path = `/content/posts/${params.slug}.md`;
  const resolver = modules[path];

  if (!resolver) {
    throw error(404, `Could not find post: ${params.slug}`);
  }

  // Load the specific post
  const post = await resolver() as { default: any, metadata: any };

  return {
    content: post.default,
    meta: post.metadata
  };
};
