<script lang="ts">
    import { page } from '$app/stores';

    // This would typically come from a load function based on the slug
    const slug = $page.params.slug;
    
    const post = {
        title: 'Sample Post Title',
        date: 'February 02, 2026',
        category: 'Tutorial',
        content: `
            <p>This is a sample blog post content for slug: <strong>${slug}</strong>.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <h2>Subheading</h2>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        `
    };
</script>

<article class="bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-sm border border-zinc-100 dark:border-zinc-800">
    <div class="h-64 md:h-96 w-full relative overflow-hidden">
         <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop" alt="Cover" class="w-full h-full object-cover" />
         <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
         <div class="absolute bottom-0 left-0 p-8 md:p-12 text-white">
             <span class="px-3 py-1 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider rounded-lg mb-4 inline-block">
                {post.category}
             </span>
             <h1 class="text-3xl md:text-5xl font-bold mb-4 leading-tight">{post.title}</h1>
             <time class="text-white/80 font-medium">{post.date}</time>
         </div>
    </div>

    <div class="p-8 md:p-12">
        <div class="prose prose-zinc dark:prose-invert max-w-none prose-lg">
            {@html post.content}
        </div>
    </div>
</article>
