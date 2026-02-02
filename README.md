# SvelteKit Blog (Stack Theme Port)

A minimalist, high-performance blog application built with SvelteKit and Tailwind CSS. This project is a faithful port of the [Hugo Stack Theme](https://github.com/CaiJimmy/hugo-theme-stack).

## Features

- **Markdown-First**: All content is managed via Markdown files in the `/content` directory.
- **Svelte 5 Runes**: Built using the latest Svelte 5 syntax for reactive states and props.
- **3-Column Layout**: Responsive design with sticky sidebars and a focused 1024px content area.
- **Dynamic Archives**: Automatically generated chronological list of posts.
- **Dark Mode**: Integrated theme switching with system preference persistence.

## Project Structure

- `/content`: Place your blog posts in `/content/posts/*.md`.
- `/src/lib/data/menu.yaml`: Configure sidebar navigation and social links.
- `/src/routes`: SvelteKit pages and dynamic routing logic.

## Usage

1. **Install**: `npm install`
2. **Dev**: `npm run dev`
3. **Build**: `npm run build`

## Writing a Post

Create a new `.md` file in `content/posts/` with the following frontmatter:

```markdown
---
title: My New Post
date: 2026-02-02
description: A short summary of the post.
category: Tech
image: https://example.com/cover.jpg
---
Your content here...
```

## License

MIT