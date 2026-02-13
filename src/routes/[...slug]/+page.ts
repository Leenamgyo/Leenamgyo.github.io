import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
    const { slug } = params;

    // Load all markdown files eagerly at build time (avoids Vite 403 on dynamic imports)
    const modules = import.meta.glob('/content/**/*.md', { eager: true }) as Record<string, { default: any; metadata: any }>;

    // Find the matching module
    let matchedModule: { default: any; metadata: any } | undefined;

    for (const [path, mod] of Object.entries(modules)) {
        if (path.endsWith(`/${slug}.md`)) {
            matchedModule = mod;
            break;
        }
    }

    if (matchedModule) {
        return {
            component: matchedModule.default,
            metadata: matchedModule.metadata,
            slug
        };
    }

    throw error(404, 'Page not found');
};
