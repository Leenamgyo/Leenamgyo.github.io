<script lang="ts">
  import { page } from '$app/stores';
  import TableOfContents from './TableOfContents.svelte';

  interface Props {
    widgetsConfig: Record<string, string[]>;
    tags?: { name: string, count: number }[];
    archives?: { name: string, count: number }[];
  }

  let { widgetsConfig, tags = [], archives = [] }: Props = $props();

  // Determine current page type for widget selection
  let pageType = $derived.by(() => {
    const path = $page.url.pathname;
    if (path === '/') return 'home';
    if (path === '/posts') return 'posts';
    if (path.startsWith('/post/') || path.startsWith('/posts/')) return 'post';
    return 'default';
  });

  let activeWidgets = $derived(widgetsConfig[pageType] || widgetsConfig['default'] || []);
</script>

{#if activeWidgets.length > 0}
<aside>
  {#each activeWidgets as widget}
    {#if widget === 'search'}
      <!-- Search Widget -->
      <div>
        <h3>Search</h3>
        <div>
          <input 
            type="text" 
            placeholder="Type to search..." 
          />
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
      </div>
    {:else if widget === 'archives'}
      <!-- Archives Widget -->
      <div>
        <h3>Archives</h3>
        <ul>
          {#each archives as archive}
            <li>
              <a href="/archives">
                <span>{archive.name}</span>
                <span>{archive.count}</span>
              </a>
            </li>
          {/each}
        </ul>
      </div>
    {:else if widget === 'tags'}
      <!-- Tags Widget -->
      <div>
        <h3>Tags</h3>
        <div>
          {#each tags as tag}
            <a href="/tags/{tag.name.toLowerCase()}">
              #{tag.name}
            </a>
          {/each}
        </div>
      </div>
    {:else if widget === 'toc'}
      <TableOfContents />
    {/if}
  {/each}
</aside>
{/if}