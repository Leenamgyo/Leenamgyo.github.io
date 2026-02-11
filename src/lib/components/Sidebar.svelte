<script lang="ts">
  import { page } from "$app/stores";
  import { icons } from "$lib/data/icons";

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

  function isActive(url: string, currentPath: string) {
    if (url === "/") return currentPath === "/";
    return currentPath === url || currentPath.startsWith(url + "/");
  }

  function toggleDarkMode() {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }
  }
</script>

<aside class="h-full">
  <div class="card-style p-8 h-full flex flex-col items-center text-center">
    <!-- Profile -->
    <div class="mb-8">
      <div class="mb-6 relative">
        <!-- Placeholder Avatar -->
        <img
          src={site?.avatar ||
            `https://ui-avatars.com/api/?name=${site?.author || "Avatar"}&background=random&size=256`}
          alt={site?.author || "Avatar"}
          class="rounded-full w-32 h-32 mx-auto shadow-lg"
        />
      </div>
      <h1 class="text-xl font-bold text-gray-800 dark:text-white mb-2">
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
          class="flex items-center gap-3 px-4 py-3 mb-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors
                  {isActive(item.url, $page.url.pathname)
            ? 'bg-blue-50 text-blue-600 dark:bg-gray-700 dark:text-blue-400 font-medium'
            : ''}"
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
            {@html icons[item.icon] || ""}
          </svg>
          <span>{item.name}</span>
        </a>
      {/each}
    </nav>

    <!-- Footer / Social -->
    <div
      class="w-full pt-8 mt-auto border-t border-gray-100 dark:border-gray-700"
    >
      <div class="flex justify-center gap-4 mb-6">
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

        <!-- Dark Mode Toggle -->
        <button
          onclick={toggleDarkMode}
          aria-label="Toggle Dark Mode"
          class="text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors"
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
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </button>
      </div>

      <div class="text-xs text-gray-400">
        <p>© 2026 {site?.author || "Jimmy Cai"}</p>
        <p class="mt-1">Built with SvelteKit & Tailwind</p>
      </div>
    </div>
  </div>
</aside>
