<script lang="ts">
  import { onMount } from 'svelte';

  let headings: { id: string, text: string, level: number }[] = $state([]);

  onMount(() => {
    // Simple client-side parsing of headings from the main article content
    const article = document.querySelector('article');
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

<div>
  <h3>Table of Contents</h3>
  <ul>
    {#each headings as heading}
      <li>
        <a href="#{heading.id}">
          {heading.text}
        </a>
      </li>
    {:else}
      <li>No headings found</li>
    {/each}
  </ul>
</div>