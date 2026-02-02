<script lang="ts">
  import { onMount } from 'svelte';

  let headings: { id: string, text: string, level: number }[] = $state([]);

  onMount(() => {
    // Simple client-side parsing of headings from the main article content
    const article = document.querySelector('.prose');
    if (article) {
      const elements = article.querySelectorAll('h2, h3');
      headings = Array.from(elements).map((el, index) => {
        if (!el.id) el.id = `heading-${index}`;
        return {
          id: el.id,
          text: el.textContent || '',
          level: Number(el.tagName[1])
        };
      });
    }
  });
</script>

<div class="bg-white dark:bg-zinc-900 rounded-2xl p-4 shadow-sm border border-zinc-100 dark:border-zinc-800">
  <h3 class="text-[10px] font-semibold text-zinc-400 uppercase tracking-[0.15em] mb-4">Table of Contents</h3>
  <ul class="space-y-2">
    {#each headings as heading}
      <li class="text-[11px]" style="padding-left: {(heading.level - 2) * 12}px">
        <a href="#{heading.id}" class="text-zinc-500 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors block py-0.5 border-l-2 border-transparent hover:border-blue-600 pl-2 -ml-[2px]">
          {heading.text}
        </a>
      </li>
    {:else}
      <li class="text-[11px] text-zinc-400 italic">No headings found</li>
    {/each}
  </ul>
</div>
