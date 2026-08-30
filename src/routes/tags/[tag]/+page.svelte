<script lang="ts">
    import PostList from "$lib/components/PostList.svelte";

    let { data } = $props();
</script>

<svelte:head>
    <title>#{data.tag}</title>
    <meta name="description" content={`${data.tag} 태그가 붙은 게시글 목록입니다.`} />
</svelte:head>

<header class="card-style mb-6 p-6">
    <p class="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">Tag</p>
    <div class="mt-2 flex items-center gap-3">
        <h1 class="text-3xl font-bold text-gray-800 dark:text-white">#{data.tag}</h1>
        <span class="rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-500 dark:bg-gray-700 dark:text-gray-300">
            {data.posts.length}
        </span>
    </div>
</header>

<PostList posts={data.posts} />
