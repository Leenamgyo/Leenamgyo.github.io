# Gemini Context

This file contains context and instructions for the Gemini CLI agent working on this project.

## Project Overview
- **Name**: blog
- **Type**: SvelteKit Application
- **Language**: TypeScript
- **Last Updated**: 2026. 2. 9.

## Layout System
- **Skeleton**: Three-column layout (Sidebar, Main, RightSidebar) on desktop.
- **Responsive**: `container extended` class manages widths. Sidebars collapse to full width on mobile (`on-phone--column`).
- **Styling**: `src/routes/layout.css` defines the core skeleton using CSS variables and Tailwind.

## Tech Stack
- SvelteKit
- Vite
- TypeScript
- NPM

## Conventions
- Use 
 npm 
 for package management.
- Prefer TypeScript interfaces for props.
- Follow Svelte 5 snippets and runes syntax where applicable.

## Current Project Structure


├── CHANGE.md
├── GEMINI.md
├── README.md
├── config.yaml
├── content
│   ├── about.md
│   ├── archives.md
│   ├── posts
│   │   ├── getting-started.md
│   │   └── svelte-intro.md
│   └── search.md
├── package-lock.json
├── package.json
├── scripts
│   └── update-docs.js
├── src
│   ├── app.d.ts
│   ├── app.html
│   ├── lib
│   │   ├── assets
│   │   │   └── favicon.svg
│   │   ├── components
│   │   │   ├── PostCard.svelte
│   │   │   ├── RightSidebar.svelte
│   │   │   ├── Sidebar.svelte
│   │   │   └── TableOfContents.svelte
│   │   ├── data
│   │   │   └── icons.ts
│   │   ├── index.ts
│   │   └── utils
│   │       └── posts.ts
│   └── routes
│       ├── +layout.server.ts
│       ├── +layout.svelte
│       ├── +page.svelte
│       ├── +page.ts
│       ├── [...slug]
│       │   ├── +page.svelte
│       │   └── +page.ts
│       ├── layout.css
│       └── posts
│           ├── +page.svelte
│           └── +page.ts
├── static
│   └── robots.txt
├── svelte.config.js
├── tsconfig.json
└── vite.config.ts


