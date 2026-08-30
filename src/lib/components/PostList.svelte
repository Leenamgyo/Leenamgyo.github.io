<script lang="ts">
  import PostCard from "$lib/components/PostCard.svelte";
  import type { Post } from "$lib/utils/posts";

  interface Props {
    posts: Post[];
    emptyMessage?: string;
  }

  let { posts, emptyMessage = "게시물이 없습니다." }: Props = $props();
</script>

{#if posts.length > 0}
  {#each posts as post}
    <PostCard
      title={post.title || "Untitled"}
      description={post.description || ""}
      date={post.date || ""}
      href={`/posts/${post.slug}`}
    />
  {/each}
{:else}
  <div class="card-style p-8 text-center">
    <p class="text-gray-500 dark:text-gray-400">{emptyMessage}</p>
  </div>
{/if}
