# Changelog

## [Unreleased]

### Added
- **Theme Port**: Replicated the core visual design of the [Hugo Stack Theme](https://github.com/CaiJimmy/hugo-theme-stack) in SvelteKit.
- **Layout**: Implemented a responsive 3-column layout (Left Sidebar, Main Content, Right Sidebar) with sticky positioning for sidebars on large screens.
- **Dark Mode**: Full dark mode support with system preference detection and localStorage persistence. Includes a toggle in the left sidebar.
- **Sidebars**: 
    - Left: Profile, Navigation, Social Links, Dark Mode toggle.
    - Right: Search widget, Archives widget, Tags widget (visible on XL screens).
- **Navigation**:
    - Centralized menu configuration using YAML (`src/lib/data/menu.yaml`).
    - Server-side parsing of menu data via `+layout.server.ts`.
- **Pages**:
    - `src/routes/about`: "About Me" page.
    - `src/routes/archives`: Chronological archive list.
    - `src/routes/search`: Search interface.
    - `src/routes/post/[slug]`: Dynamic blog post routing structure.
- **Typography**: Refined fonts (Inter) with specific weights and spacing for a minimalist aesthetic.

### Changed
- **Styling**: Migrated to a complete Tailwind CSS implementation with custom styling for cards and layouts.
- **Project Structure**: Organized components into `src/lib/components` and data into `src/lib/data`.

### Fixed
- **Responsiveness**: Adjusted margins and hiding/showing of sidebars based on breakpoints (md, lg, xl).