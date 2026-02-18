<script lang="ts">
  import { page } from "$app/stores";
  import { icons } from "$lib/data/icons";
  import { onMount } from "svelte";

  interface MenuItem {
    name: string;
    url: string;
    icon: string;
  }

  interface SocialLink {
    name: string;
    url: string;
    icon: string;
  }

  interface Props {
    menu: MenuItem[];
    social: SocialLink[];
    site?: { title: string; author: string; avatar?: string };
  }

  let { menu, social, site }: Props = $props();
  let isDark = $state(false);

  onMount(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      isDark = true;
      document.documentElement.classList.add("dark");
    } else {
      isDark = false;
      document.documentElement.classList.remove("dark");
    }
  });

  function toggleDarkMode() {
    isDark = !isDark;
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }

  function isActive(url: string, currentPath: string) {
    if (url === "/") return currentPath === "/";
    return currentPath === url || currentPath.startsWith(url + "/");
  }
</script>

<aside class="h-full">
  <div class="card-style p-5 h-full flex flex-col items-center text-center">
    <!-- Profile -->
    <div class="mb-5">
      <div class="mb-4 relative">
        <!-- Placeholder Avatar -->
        <img
          src={site?.avatar ||
            `https://ui-avatars.com/api/?name=${site?.author || "Avatar"}&background=random&size=256`}
          alt={site?.author || "Avatar"}
          class="rounded-full w-24 h-24 mx-auto shadow-lg"
        />
      </div>
      <h1 class="text-lg font-bold text-gray-800 dark:text-white mb-1">
        {site?.author || "Jimmy Cai"}
      </h1>
      <p class="text-sm text-gray-500 dark:text-gray-400">
        {site?.title || "Card-style Hugo theme designed for bloggers."}
      </p>
    </div>

    <!-- Navigation -->
    <nav class="w-full flex-1">
      {#each menu as item}
        <a
          href={item.url}
          class="flex items-center gap-2.5 px-3 py-2.5 mb-1 rounded-lg text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors
                  {isActive(item.url, $page.url.pathname)
            ? 'bg-blue-50 text-blue-600 dark:bg-gray-700 dark:text-blue-400 font-medium'
            : ''}"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {@html icons[item.icon] || ""}
          </svg>
          <span>{item.name}</span>
        </a>
      {/each}
    </nav>

    <!-- Footer / Social -->
    <div
      class="w-full pt-5 mt-auto border-t border-gray-100 dark:border-gray-700 flex flex-col items-center gap-4"
    >
      <!-- Dark Mode Toggle -->
      <div class="flex items-center gap-3">
        <span class="text-sm text-gray-500 dark:text-gray-400">Dark Mode</span>
        <button
          onclick={toggleDarkMode}
          aria-label="Toggle Dark Mode"
          class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
            {isDark ? 'bg-blue-600' : 'bg-gray-200'}"
        >
          <span
            class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform
              {isDark ? 'translate-x-6' : 'translate-x-1'}"
          ></span>
        </button>
      </div>

      <div class="flex justify-center gap-4">
        {#each social as link}
          <a
            href={link.url}
            aria-label={link.name}
            class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {@html icons[link.icon] || ""}
            </svg>
          </a>
        {/each}
      </div>

      <div class="text-xs text-gray-400">
        <p>© 2026 {site?.author || "Jimmy Cai"}</p>
        <p class="mt-1">Built with SvelteKit & Tailwind</p>
      </div>
    </div>
  </div>
</aside>
