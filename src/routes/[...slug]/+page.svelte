<script lang="ts">
    let { data } = $props();
    let Component = $derived(data.component);
</script>

<div class="card-style p-6">
    <article class="prose">
        {#if data.metadata?.title}
            <h1>{data.metadata.title}</h1>
        {/if}
        <Component />
    </article>
</div>
