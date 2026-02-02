<script lang="ts">
    import { page } from '$app/stores';
    
    let { data } = $props();
    
    // Derived state for layout determination
    let isPost = $derived(data.slug.startsWith('posts/') || data.meta.layout === 'post');
    let isArchives = $derived(data.meta.layout === 'archives');
    let isSearch = $derived(data.meta.layout === 'search');
    
    // Archives logic
    function formatDate(dateString: string) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { month: 'short', day: '2-digit' });
    }

    // Search logic
    let searchQuery = $state('');
</script>

{#if isPost}
    <!-- Blog Post Layout -->
    <article class="bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-sm border border-zinc-100 dark:border-zinc-800">
        {#if data.meta.image}
        <div class="h-80 md:h-[500px] w-full relative overflow-hidden">
            <img src={data.meta.image} alt={data.meta.title} class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div class="absolute bottom-0 left-0 p-8 md:p-12 text-white">
                <h1 class="text-3xl md:text-5xl font-bold mb-4 leading-tight">{data.meta.title}</h1>
                <time class="text-white/80 font-medium">{data.meta.date}</time>
            </div>
        </div>
        {:else}
        <div class="p-8 md:p-12 pb-0">
            <h1 class="text-3xl md:text-5xl font-bold mb-4 leading-tight text-zinc-900 dark:text-zinc-100">{data.meta.title}</h1>
            {#if data.meta.date}
            <time class="text-zinc-500 font-medium">{data.meta.date}</time>
            {/if}
        </div>
        {/if}

        <div class="p-8 md:p-12">
            <div class="prose prose-zinc dark:prose-invert max-w-none prose-lg">
                <data.content />
            </div>
        </div>
    </article>

{:else if isArchives}
    <!-- Archives Layout -->
    <div class="space-y-8">
        <div class="bg-white dark:bg-zinc-900 rounded-3xl p-8 md:p-12 shadow-sm border border-zinc-100 dark:border-zinc-800">
            <h1 class="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">{data.meta.title}</h1>
            
            <div class="prose prose-zinc dark:prose-invert max-w-none mb-12">
                <data.content />
            </div>
            
            <div class="space-y-12">
                {#if data.archives}
                    {#each data.archives as group}
                        <div class="flex flex-col md:flex-row gap-4 md:gap-12">
                            <div class="md:w-32 flex-shrink-0">
                                <h2 class="text-2xl font-bold text-zinc-400">{group.year}</h2>
                            </div>
                            <div class="flex-1 space-y-6 border-l border-zinc-100 dark:border-zinc-800 pl-6 md:pl-10 py-2">
                                {#each group.posts as post}
                                    <article class="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 group">
                                        <time class="text-sm text-zinc-400 font-mono flex-shrink-0 w-16">{formatDate(post.date)}</time>
                                        <a href="/posts/{post.slug}" class="text-lg font-medium text-zinc-900 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                            {post.title}
                                        </a>
                                    </article>
                                {/each}
                            </div>
                        </div>
                    {/each}
                {/if}
            </div>
        </div>
    </div>

{:else if isSearch}
    <!-- Search Layout -->
    <div class="space-y-8">
        <div class="bg-white dark:bg-zinc-900 rounded-3xl p-8 md:p-12 shadow-sm border border-zinc-100 dark:border-zinc-800">
            <h1 class="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">{data.meta.title}</h1>
            
            <div class="prose prose-zinc dark:prose-invert max-w-none mb-8">
                <data.content />
            </div>
            
            <div class="relative mb-12">
                <input 
                    bind:value={searchQuery}
                    type="text" 
                    placeholder="Type to search..." 
                    class="w-full bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-white rounded-2xl py-4 pl-14 pr-6 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-zinc-400"
                    autofocus
                />
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-400">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
            </div>

            {#if searchQuery}
                <div class="text-center py-12 text-zinc-500 dark:text-zinc-400">
                    <p>Searching for "{searchQuery}"...</p>
                </div>
            {/if}
        </div>
    </div>

{:else}
    <!-- Standard Page Layout (About, etc.) -->
    <div class="space-y-8">
        <div class="bg-white dark:bg-zinc-900 rounded-3xl p-8 md:p-12 shadow-sm border border-zinc-100 dark:border-zinc-800">
            <h1 class="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">{data.meta.title}</h1>
            
            <div class="prose prose-zinc dark:prose-invert max-w-none">
                <data.content />
            </div>
        </div>
    </div>
{/if}
