import { error } from '@sveltejs/kit';
import { getPosts } from '$lib/utils/posts';

export const load = async ({ params }) => {
  const { slug } = params;
  const modules = import.meta.glob('/content/**/*.md');
  let path = `/content/${slug}.md`;
  let resolver = modules[path];

  if (!resolver) {
    throw error(404, `Page not found: ${path}`);
  }

  const post = await resolver() as { default: any, metadata: any };
  const meta = post.metadata || {};
  let extraData = {};

  // Hydrate specific layouts with extra data
  if (meta.layout === 'archives') {
    const posts = await getPosts();
    const archives = posts.reduce((acc, p) => {
      const year = new Date(p.date).getFullYear();
      if (!acc[year]) acc[year] = [];
      acc[year].push(p);
      return acc;
    }, {} as Record<number, typeof posts>);

    const sortedArchives = Object.entries(archives)
      .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
      .map(([year, groupPosts]) => ({
        year: Number(year),
        posts: groupPosts
      }));

    extraData = { archiveGroups: sortedArchives };
  }

  return {
    content: post.default,
    meta,
    slug,
    ...extraData
  };
};