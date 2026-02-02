<script lang="ts">
  import PostCard from '$lib/components/PostCard.svelte';
  
  let { data } = $props();
</script>

<div class="max-w-4xl mx-auto space-y-12">
  <div class="flex items-center justify-between mb-8">
    <h1 class="text-3xl font-bold text-zinc-900 dark:text-white">Recent Posts</h1>
    <div class="flex gap-2">
      <!-- Simple fake sort/filter controls -->
      <button class="px-3 py-1 text-sm rounded-md bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50">Newest</button>
      <button class="px-3 py-1 text-sm rounded-md bg-transparent text-zinc-500 hover:text-zinc-900 dark:hover:text-white">Popular</button>
    </div>
  </div>

  <div class="grid gap-8">
    {#each data.posts as post}
      <PostCard 
        title={post.title}
        description={post.description || ''}
        date={post.date}
        category={post.category || 'General'}
        imageUrl={post.image}
        href={`/posts/${post.slug}`}
      />
    {/each}
  </div>
  
  <div class="flex justify-center pt-8">
    <a href="/posts" class="px-6 py-3 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 shadow-sm hover:shadow-md transition-all font-medium">
      View All Posts
    </a>
  </div>
</div>
