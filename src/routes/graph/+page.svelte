<script lang="ts">
    import PostGraph from "$lib/components/PostGraph.svelte";

    let { data } = $props();
</script>

<svelte:head>
    <title>Post Graph</title>
    <meta name="description" content="게시글 사이의 관계를 검색하고 탐색하는 그래프입니다." />
</svelte:head>

<PostGraph posts={data.posts} />
