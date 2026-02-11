<script lang="ts">
    import { page } from "$app/stores";

    let { data } = $props();

    // Derived state for layout determination
    let isPost = $derived(
        data.slug.startsWith("posts/") || data.meta.layout === "post",
    );
    let isArchives = $derived(data.meta.layout === "archives");
    let isSearch = $derived(data.meta.layout === "search");

    // Archives logic
    function formatDate(dateString: string) {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            month: "short",
            day: "2-digit",
        });
    }

    // Search logic
    let searchQuery = $state("");
</script>

{#if isPost}
    <!-- Blog Post Layout -->
    <article class="card-style p-8 mb-6">
        {#if data.meta.image}
            <div class="mb-8 -mx-8 -mt-8">
                <img
                    src={data.meta.image}
                    alt={data.meta.title}
                    class="w-full h-auto object-cover max-h-[400px]"
                />
                <div class="mt-8 px-8">
                    <h1
                        class="text-3xl font-bold text-gray-800 dark:text-white mb-2"
                    >
                        {data.meta.title}
                    </h1>
                    <time class="text-gray-500 dark:text-gray-400 text-sm"
                        >{data.meta.date}</time
                    >
                </div>
            </div>
        {:else}
            <div
                class="mb-8 border-b border-gray-100 dark:border-gray-700 pb-8"
            >
                <h1
                    class="text-3xl font-bold text-gray-800 dark:text-white mb-2"
                >
                    {data.meta.title}
                </h1>
                {#if data.meta.date}
                    <time class="text-gray-500 dark:text-gray-400 text-sm"
                        >{data.meta.date}</time
                    >
                {/if}
            </div>
        {/if}

        <div class="prose dark:prose-invert max-w-none">
            <data.content />
        </div>
    </article>
{:else if isArchives}
    <!-- Archives Layout -->
    <div class="card-style p-8 mb-6">
        <h1
            class="text-2xl font-bold text-gray-800 dark:text-white mb-6 pb-4 border-b border-gray-100 dark:border-gray-700"
        >
            {data.meta.title}
        </h1>

        <div class="prose dark:prose-invert max-w-none mb-8">
            <data.content />
        </div>

        <div class="space-y-8">
            {#if data.archives}
                {#each data.archives as group}
                    <div>
                        <h2
                            class="text-xl font-bold text-gray-700 dark:text-gray-200 mb-4"
                        >
                            {group.year}
                        </h2>
                        <div class="space-y-4">
                            {#each group.posts as post}
                                <article class="flex items-baseline gap-4">
                                    <time
                                        class="text-sm text-gray-400 font-mono shrink-0 w-12"
                                        >{formatDate(post.date)}</time
                                    >
                                    <a
                                        href="/posts/{post.slug}"
                                        class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                    >
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
{:else if isSearch}
    <!-- Search Layout -->
    <div class="card-style p-8 mb-6">
        <!-- Added card-style class -->
        <h1
            class="text-2xl font-bold text-gray-800 dark:text-white mb-6 pb-4 border-b border-gray-100 dark:border-gray-700"
        >
            {data.meta.title}
        </h1>

        <div class="prose dark:prose-invert max-w-none mb-6">
            <data.content />
        </div>

        <div class="relative mb-6">
            <!-- Search Input Container -->
            <input
                bind:value={searchQuery}
                type="text"
                placeholder="Type to search..."
                autofocus
                class="w-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow text-lg"
            />
            <svg
                class="absolute left-4 top-3.5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
        </div>

        {#if searchQuery}
            <div class="text-gray-600 dark:text-gray-400">
                <p>Searching for "{searchQuery}"...</p>
                <!-- Search results implementation would go here -->
            </div>
        {/if}
    </div>
{:else}
    <!-- Standard Page Layout (About, etc.) -->
    <div class="card-style p-8 mb-6">
        <h1
            class="text-2xl font-bold text-gray-800 dark:text-white mb-6 pb-4 border-b border-gray-100 dark:border-gray-700"
        >
            {data.meta.title}
        </h1>

        <div class="prose dark:prose-invert max-w-none">
            <data.content />
        </div>
    </div>
{/if}
