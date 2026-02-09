<script lang="ts">
  import PostCard from '$lib/components/PostCard.svelte';
  
  let { data } = $props();
</script>

<div>
  <div>
    <h1>Recent Posts</h1>
    <div>
      <!-- Simple fake sort/filter controls -->
      <button>Newest</button>
      <button>Popular</button>
    </div>
  </div>

  <div>
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
  
  <div>
    <a href="/posts">
      View All Posts
    </a>
  </div>
</div>