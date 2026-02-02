# Changelog

## [Unreleased]

### Added
- **Markdown-Driven Content**: Integrated `mdsvex` to handle blog posts and static pages via Markdown files in the `content/` directory.
- **Dynamic Post Routing**: Implemented universal load functions to dynamically import and render posts based on URL slugs.
- **Dynamic Archives**: The archives page now automatically reads post metadata (date, title) from Markdown files and groups them by year.
- **Post Utilities**: Created `src/lib/utils/posts.ts` for centralized post fetching and sorting.
- **Korean Content**: Added a sample post in Korean about Svelte and Svelte 5 Runes.

### Changed
- **Layout Refinement**: Reduced the overall application width to `1024px` (approx. 80% of previous size) for better readability.
- **Visual Impact**: Increased single post cover image height to `500px` on desktop.
- **Sidebar Typography**: Further refined sidebar font sizes and weights for a minimalist aesthetic.
- **Project Structure**: Centralized all content (About, Archives, Search, Posts) into the root `/content` directory.

### Fixed
- **FOUC Prevention**: Improved dark mode initialization script in `app.html`.
