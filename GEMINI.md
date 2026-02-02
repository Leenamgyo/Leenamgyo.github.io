# Gemini Context

This file contains context and instructions for the Gemini CLI agent working on this project.

## Project Overview
- **Name**: blog (Stack Theme Port)
- **Type**: SvelteKit Application
- **Language**: TypeScript
- **Style**: Tailwind CSS
- **Design Reference**: [Hugo Theme Stack](https://github.com/CaiJimmy/hugo-theme-stack)

## Tech Stack
- **Framework**: SvelteKit (Svelte 5)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Data Parsing**: js-yaml (for menu configuration)
- **Package Manager**: npm

## Conventions
- **Syntax**: Use Svelte 5 runes (`$props`, `$state`, etc.) and snippets.
- **Styling**: Use utility classes (Tailwind CSS). Avoid `style` tags unless necessary for dynamic values.
- **Icons**: SVG strings embedded directly or via helper components (currently embedded strings in data).
- **Data**: 
    - Configuration files (menus) located in `src/lib/data`.
    - Components located in `src/lib/components`.

## Current Project Structure

├── CHANGE.md
├── GEMINI.md
├── README.md
├── package-lock.json
├── package.json
├── svelte.config.js
├── tailwind.config.ts (or via vite plugin)
├── tsconfig.json
├── vite.config.ts
├── src
│   ├── app.d.ts
│   ├── app.html
│   ├── app.css (or layout.css)
│   ├── lib
│   │   ├── components
│   │   │   ├── PostCard.svelte
│   │   │   ├── RightSidebar.svelte
│   │   │   └── Sidebar.svelte
│   │   └── data
│   │       └── menu.yaml
│   └── routes
│       ├── +layout.server.ts
│       ├── +layout.svelte
│       ├── +page.svelte
│       ├── layout.css
│       ├── about
│       │   └── +page.svelte
│       ├── archives
│       │   └── +page.svelte
│       ├── post
│       │   └── [slug]
│       │       └── +page.svelte
│       └── search
│           └── +page.svelte
└── static
    └── robots.txt