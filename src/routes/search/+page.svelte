<script lang="ts">
    import Content, { metadata } from '../../../content/search.md';
    let searchQuery = '';
</script>

<div class="space-y-8">
    <div class="bg-white dark:bg-zinc-900 rounded-3xl p-8 md:p-12 shadow-sm border border-zinc-100 dark:border-zinc-800">
        <h1 class="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">{metadata.title}</h1>
        
        <div class="prose prose-zinc dark:prose-invert max-w-none mb-8">
            <Content />
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
                <!-- Search results would go here -->
            </div>
        {:else}
             <div class="text-center py-12 text-zinc-500 dark:text-zinc-400">
                <p>Type something to start searching</p>
            </div>
        {/if}
    </div>
</div>
