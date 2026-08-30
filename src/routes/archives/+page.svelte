<script lang="ts">
    import PostList from "$lib/components/PostList.svelte";

    let { data } = $props();
</script>

<svelte:head>
    <title>Archives</title>
    <meta name="description" content="연도별로 모아 보는 게시글 아카이브입니다." />
</svelte:head>

<header class="card-style mb-6 p-6">
    <h1 class="text-3xl font-bold text-gray-800 dark:text-white">Archives</h1>
    <p class="mt-2 text-gray-600 dark:text-gray-300">연도별로 작성한 게시물을 모아봅니다.</p>
</header>

{#each data.groups as group}
    <section id={String(group.year)} class="scroll-mt-6" aria-labelledby={`archive-${group.year}`}>
        <div class="mb-4 flex items-center gap-3">
            <h2 id={`archive-${group.year}`} class="text-2xl font-bold text-gray-800 dark:text-white">
                {group.year}
            </h2>
            <span class="rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-500 dark:bg-gray-700 dark:text-gray-300">
                {group.posts.length}
            </span>
        </div>
        <PostList posts={group.posts} />
    </section>
{:else}
    <PostList posts={[]} emptyMessage="아카이브에 표시할 게시물이 없습니다." />
{/each}
