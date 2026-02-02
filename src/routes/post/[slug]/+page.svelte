<script lang="ts">
    let { data } = $props();
</script>

<article class="bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-sm border border-zinc-100 dark:border-zinc-800">
    {#if data.meta.image}
    <div class="h-80 md:h-[500px] w-full relative overflow-hidden">
         <img src={data.meta.image} alt={data.meta.title} class="w-full h-full object-cover" />
         <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
         <div class="absolute bottom-0 left-0 p-8 md:p-12 text-white">
             {#if data.meta.category}
             <span class="px-3 py-1 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider rounded-lg mb-4 inline-block">
                {data.meta.category}
             </span>
             {/if}
             <h1 class="text-3xl md:text-5xl font-bold mb-4 leading-tight">{data.meta.title}</h1>
             <time class="text-white/80 font-medium">{data.meta.date}</time>
         </div>
    </div>
    {:else}
    <div class="p-8 md:p-12 pb-0">
        {#if data.meta.category}
        <span class="px-3 py-1 bg-blue-600/10 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider rounded-lg mb-4 inline-block">
           {data.meta.category}
        </span>
        {/if}
        <h1 class="text-3xl md:text-5xl font-bold mb-4 leading-tight text-zinc-900 dark:text-zinc-100">{data.meta.title}</h1>
        <time class="text-zinc-500 font-medium">{data.meta.date}</time>
    </div>
    {/if}

    <div class="p-8 md:p-12">
        <div class="prose prose-zinc dark:prose-invert max-w-none prose-lg">
            <data.content />
        </div>
    </div>
</article>