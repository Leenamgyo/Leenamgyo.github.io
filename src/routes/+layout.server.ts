import yaml from 'js-yaml';
import fs from 'fs';
import path from 'path';

import { getPosts } from '$lib/utils/posts';

export const prerender = true;

export const load = async () => {
  try {
    const configPath = path.resolve('config.yaml');
    const fileContents = fs.readFileSync(configPath, 'utf8');
    const data = yaml.load(fileContents) as { site: any, menu: { main: any[], social: any[] }, widgets: any };

    // Fetch all posts to calculate tags and archives
    const posts = await getPosts();

    // Calculate Tags
    const tagsMap = new Map<string, number>();
    posts.forEach(post => {
      if (post.tags && Array.isArray(post.tags)) {
        post.tags.forEach(tag => {
          const count = tagsMap.get(tag) || 0;
          tagsMap.set(tag, count + 1);
        });
      }
    });

    // Sort tags by count
    const tags = Array.from(tagsMap.entries()).map(([name, count]) => ({ name, count })).sort((a, b) => b.count - a.count);

    // Calculate Archives (Month Year)
    const archivesMap = new Map<string, number>();
    posts.forEach(post => {
      if (post.date) {
        const date = new Date(post.date);
        const key = date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
        const count = archivesMap.get(key) || 0;
        archivesMap.set(key, count + 1);
      }
    });
    const archives = Array.from(archivesMap.entries()).map(([name, count]) => ({ name, count }));

    return {
      site: data.site,
      menu: data.menu.main,
      social: data.menu.social,
      widgets: data.widgets,
      tags,
      archives
    };
  } catch (e) {
    console.error('Error loading config.yaml:', e);
    return {
      site: {},
      menu: [],
      social: [],
      widgets: {},
      tags: [],
      archives: []
    };
  }
};
