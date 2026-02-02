# SvelteKit Blog (Stack Theme Port)

A modern, responsive blog application built with SvelteKit and Tailwind CSS, faithfully porting the visual design and features of the popular [Hugo Stack Theme](https://github.com/CaiJimmy/hugo-theme-stack).

## Features

- **Responsive 3-Column Layout**: 
  - **Left**: Sticky navigation and profile.
  - **Center**: Main content feed.
  - **Right**: Sticky widgets (Search, Archives, Tags) for larger screens.
- **Dark Mode**: Built-in support with system preference detection and instant toggle without FOUC (Flash of Unstyled Content).
- **YAML Configuration**: Menu items and social links are managed via a simple YAML file (`src/lib/data/menu.yaml`).
- **Modern Tech Stack**:
  - SvelteKit (Svelte 5 Runes)
  - TypeScript
  - Tailwind CSS
  - Vite

## Project Structure

- `src/routes`: Application pages (Home, About, Archives, Search, Post).
- `src/lib/components`: UI components (Sidebar, RightSidebar, PostCard).
- `src/lib/data`: Data configuration files (YAML).

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

## Customization

- **Menu**: Edit `src/lib/data/menu.yaml` to change navigation links and social icons.
- **Styles**: Tailwind classes are used throughout. Global styles are in `src/routes/layout.css`.

## License

MIT
