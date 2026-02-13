<script lang="ts">
    import PostCard from "$lib/components/PostCard.svelte";

    let { data } = $props();
</script>

{#if data.posts.length > 0}
    {#each data.posts as post}
        <PostCard
            title={post.title || "Untitled"}
            description={post.description || ""}
            date={post.date || ""}
            imageUrl={post.image}
            href={`/posts/${post.slug}`}
        />
    {/each}
{:else}
    <div class="card-style p-8 text-center">
        <p class="text-gray-500 dark:text-gray-400">No posts yet.</p>
    </div>
{/if}
