import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
    const { slug } = params;

    // Load all markdown files from content directory
    const modules = import.meta.glob('/content/**/*.md');

    // Normalize slug to ensure it doesn't match partial filenames inappropriately
    // e.g. /content/about.md
    let match: { path?: string; resolver?: any } = {};

    for (const [path, resolver] of Object.entries(modules)) {
        if (path.endsWith(`/${slug}.md`)) {
            match = { path, resolver };
            break;
        }
    }

    if (match.resolver) {
        const file = await match.resolver() as { default: any; metadata: any };
        return {
            component: file.default,
            metadata: file.metadata,
            slug
        };
    }

    throw error(404, 'Page not found');
};
