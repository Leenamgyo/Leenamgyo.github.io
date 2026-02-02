<script lang="ts">
  import { page } from '$app/stores';
  import TableOfContents from './TableOfContents.svelte';

  interface Props {
    widgetsConfig: Record<string, string[]>;
  }

  let { widgetsConfig }: Props = $props();

  // Determine current page type for widget selection
  let pageType = $derived.by(() => {
    const path = $page.url.pathname;
    if (path === '/') return 'home';
    if (path === '/posts') return 'posts';
    if (path.startsWith('/post/')) return 'post';
    return 'default';
  });

  let activeWidgets = $derived(widgetsConfig[pageType] || widgetsConfig['default'] || []);

  // Dummy data for widgets
  const archives = [
    { name: 'February 2026', count: 4 },
    { name: 'January 2026', count: 12 },
    { name: 'December 2025', count: 8 },
    { name: 'November 2025', count: 5 }
  ];

  const tags = [
    'SvelteKit', 'Tailwind', 'TypeScript', 'Web Dev', 
    'Tutorial', 'Design', 'Coding', 'Opinion', 'React', 'Vue'
  ];
</script>

<aside class="w-full xl:w-56 p-4 xl:py-8 xl:px-0 space-y-6 xl:sticky xl:top-0 xl:h-screen xl:overflow-y-auto hidden md:block">
  {#each activeWidgets as widget}
    {#if widget === 'search'}
      <!-- Search Widget -->
      <div class="bg-white dark:bg-zinc-900 rounded-2xl p-4 shadow-sm border border-zinc-100 dark:border-zinc-800">
        <h3 class="text-[10px] font-semibold text-zinc-400 uppercase tracking-[0.15em] mb-4">Search</h3>
        <div class="relative">
          <input 
            type="text" 
            placeholder="Type to search..." 
            class="w-full bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-white rounded-xl py-2.5 pl-9 pr-4 text-[11px] focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-zinc-400 font-light"
          />
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
      </div>
    {:else if widget === 'archives'}
      <!-- Archives Widget -->
      <div class="bg-white dark:bg-zinc-900 rounded-2xl p-4 shadow-sm border border-zinc-100 dark:border-zinc-800">
        <h3 class="text-[10px] font-semibold text-zinc-400 uppercase tracking-[0.15em] mb-4">Archives</h3>
        <ul class="space-y-2.5">
          {#each archives as archive}
            <li>
              <a href="/archives" class="flex items-center justify-between group text-[11px]">
                <span class="text-zinc-600 dark:text-zinc-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors font-medium">{archive.name}</span>
                <span class="px-1.5 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-[9px] text-zinc-400 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors font-light tracking-tighter">{archive.count}</span>
              </a>
            </li>
          {/each}
        </ul>
      </div>
    {:else if widget === 'tags'}
      <!-- Tags Widget -->
      <div class="bg-white dark:bg-zinc-900 rounded-2xl p-4 shadow-sm border border-zinc-100 dark:border-zinc-800">
        <h3 class="text-[10px] font-semibold text-zinc-400 uppercase tracking-[0.15em] mb-4">Tags</h3>
        <div class="flex flex-wrap gap-2">
          {#each tags as tag}
            <a 
              href="/tags/{tag.toLowerCase()}" 
              class="px-2.5 py-1 rounded-lg text-[10px] font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              #{tag}
            </a>
          {/each}
        </div>
      </div>
    {:else if widget === 'toc'}
      <TableOfContents />
    {/if}
  {/each}
</aside>
