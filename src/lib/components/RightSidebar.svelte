<script lang="ts">
  import { page } from "$app/stores";
  import TableOfContents from "./TableOfContents.svelte";

  interface Props {
    widgetsConfig: Record<string, string[]>;
    tags?: { name: string; count: number }[];
    archives?: { name: string; count: number }[];
  }

  let { widgetsConfig, tags = [], archives = [] }: Props = $props();

  // Determine current page type for widget selection
  let pageType = $derived.by(() => {
    const path = $page.url.pathname;
    if (path === "/") return "home";
    if (path === "/about") return "about";
    if (path === "/posts") return "posts";
    if (path.startsWith("/post/") || path.startsWith("/posts/")) return "post";
    return "default";
  });

  let activeWidgets = $derived(
    widgetsConfig[pageType] || widgetsConfig["default"] || [],
  );
</script>

{#if activeWidgets.length > 0}
  <aside>
    {#each activeWidgets as widget}
      {#if widget === "search"}
        <!-- Search Widget -->
        <div
          class="card-style mb-6 p-6 transition-all hover:shadow-lg dark:hover:border-gray-600"
        >
          <h3
            class="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4"
          >
            Search
          </h3>
          <div class="relative">
            <input
              type="text"
              placeholder="Type to search..."
              class="w-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
            />
            <svg
              class="absolute left-3 top-2.5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
        </div>
      {:else if widget === "archives"}
        <!-- Archives Widget -->
        <div
          class="card-style mb-6 p-6 transition-all hover:shadow-lg dark:hover:border-gray-600"
        >
          <h3
            class="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4"
          >
            Archives
          </h3>
          <ul class="space-y-2">
            {#each archives as archive}
              <li>
                <a
                  href="/archives"
                  class="flex justify-between items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <span>{archive.name}</span>
                  <span
                    class="bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-xs px-2 py-1 rounded-full"
                    >{archive.count}</span
                  >
                </a>
              </li>
            {/each}
          </ul>
        </div>
      {:else if widget === "tags"}
        <!-- Tags Widget -->
        <div
          class="card-style mb-6 p-6 transition-all hover:shadow-lg dark:hover:border-gray-600"
        >
          <h3
            class="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4"
          >
            Tags
          </h3>
          <div class="flex flex-wrap gap-2">
            {#each tags as tag}
              <a
                href="/tags/{tag.name.toLowerCase()}"
                class="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full text-sm transition-colors"
              >
                #{tag.name}
              </a>
            {/each}
          </div>
        </div>
      {:else if widget === "toc"}
        <div class="mb-6">
          <TableOfContents />
        </div>
      {/if}
    {/each}
  </aside>
{/if}
