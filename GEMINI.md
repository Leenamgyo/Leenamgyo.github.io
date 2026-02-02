# Gemini Context

This file contains context and instructions for the Gemini CLI agent working on this project.

## Project Overview
- **Name**: blog (Stack Theme Port)
- **Type**: SvelteKit Application (Svelte 5)
- **Content System**: Markdown-based (`mdsvex`)
- **Design Reference**: [Hugo Theme Stack](https://github.com/CaiJimmy/hugo-theme-stack)

## Core Mandates
- **Documentation Sync**: Whenever a significant change is made to the codebase (new features, layout changes, structural shifts), you **MUST** update `CHANGE.md`, `GEMINI.md`, and `README.md` in the same session to ensure project context remains accurate for future interactions.

## Tech Stack
- **Framework**: SvelteKit (Svelte 5 Runes)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Markdown**: `mdsvex`
- **Data**: YAML (`js-yaml`) for menus, Markdown for content.

## Project Structure
├── content/             # Markdown source files
│   ├── posts/           # Blog posts (.md)
│   ├── about.md         # Static pages
│   ├── archives.md
│   └── search.md
├── src/
│   ├── lib/
│   │   ├── components/  # Sidebar, RightSidebar, PostCard
│   │   ├── data/        # menu.yaml
│   │   └── utils/       # post fetching logic
│   └── routes/          # SvelteKit routes
├── CHANGE.md            # Revision history
├── GEMINI.md            # This file (Context & Mandates)
└── README.md            # Project overview & usage
