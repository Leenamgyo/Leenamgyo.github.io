<script lang="ts">
  import PostCard from '$lib/components/PostCard.svelte';
  
  let { data } = $props();
</script>

<div>
  <div>
    <h1>All Posts</h1>
    <div>{data.posts.length} articles</div>
  </div>

  <div>
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