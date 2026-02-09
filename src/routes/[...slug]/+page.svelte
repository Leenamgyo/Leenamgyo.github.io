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
    <article>
        {#if data.meta.image}
        <div>
            <img src={data.meta.image} alt={data.meta.title} />
            <div></div>
            <div>
                <h1>{data.meta.title}</h1>
                <time>{data.meta.date}</time>
            </div>
        </div>
        {:else}
        <div>
            <h1>{data.meta.title}</h1>
            {#if data.meta.date}
            <time>{data.meta.date}</time>
            {/if}
        </div>
        {/if}

        <div>
            <div>
                <data.content />
            </div>
        </div>
    </article>

{:else if isArchives}
    <!-- Archives Layout -->
    <div>
        <div>
            <h1>{data.meta.title}</h1>
            
            <div>
                <data.content />
            </div>
            
            <div>
                {#if data.archives}
                    {#each data.archives as group}
                        <div>
                            <div>
                                <h2>{group.year}</h2>
                            </div>
                            <div>
                                {#each group.posts as post}
                                    <article>
                                        <time>{formatDate(post.date)}</time>
                                        <a href="/posts/{post.slug}">
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
    <div>
        <div>
            <h1>{data.meta.title}</h1>
            
            <div>
                <data.content />
            </div>
            
            <div>
                <input 
                    bind:value={searchQuery}
                    type="text" 
                    placeholder="Type to search..." 
                    autofocus
                />
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
            </div>

            {#if searchQuery}
                <div>
                    <p>Searching for "{searchQuery}"...</p>
                </div>
            {/if}
        </div>
    </div>

{:else}
    <!-- Standard Page Layout (About, etc.) -->
    <div>
        <div>
            <h1>{data.meta.title}</h1>
            
            <div>
                <data.content />
            </div>
        </div>
    </div>
{/if}