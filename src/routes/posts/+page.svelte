<script lang="ts">
  import PostCard from '$lib/components/PostCard.svelte';
  
  let { data } = $props();
</script>

<div class="max-w-5xl mx-auto space-y-12">
  <div class="flex items-center justify-between mb-8">
    <h1 class="text-3xl font-bold text-zinc-900 dark:text-white">All Posts</h1>
    <div class="text-sm text-zinc-500">{data.posts.length} articles</div>
  </div>

  <div class="grid gap-8">
    {#each data.posts as post}
      <PostCard 
        title={post.title}
        description={post.description || ''}
        date={post.date}
        imageUrl={post.image}
        href={`/posts/${post.slug}`}
      />
    {/each}
  </div>
</div>
