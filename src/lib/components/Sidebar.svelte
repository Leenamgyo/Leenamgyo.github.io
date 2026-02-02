<script lang="ts">
  import { page } from '$app/stores';

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
    site?: { title: string, author: string };
  }

  let { menu, social, site }: Props = $props();

  function isActive(url: string, currentPath: string) {
    if (url === '/') return currentPath === '/';
    if (url === '/posts') return currentPath === '/posts' || currentPath.startsWith('/post/');
    return currentPath === url || currentPath.startsWith(url + '/');
  }

  function toggleDarkMode() {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }
  }
</script>

<aside class="w-full lg:w-56 flex-shrink-0 lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto bg-transparent p-4 flex flex-col justify-between transition-colors duration-300">
  <div>
    <!-- Profile -->
    <div class="mb-10">
      <div class="w-28 h-28 rounded-full bg-zinc-200 dark:bg-zinc-700 mb-6 overflow-hidden relative group shadow-lg">
        <!-- Placeholder Avatar -->
        <img src="https://ui-avatars.com/api/?name=Ji&background=random&size=256" alt="Avatar" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      </div>
      <h1 class="text-base font-semibold text-zinc-900 dark:text-zinc-100 mb-1 tracking-tight">{site?.author || 'Jimmy Cai'}</h1>
      <p class="text-[11px] text-zinc-500 dark:text-zinc-400 leading-relaxed font-light">
        {site?.title || 'Card-style Hugo theme designed for bloggers.'}
      </p>
    </div>

    <!-- Navigation -->
    <nav class="space-y-1">
      {#each menu as item}
        <a 
          href={item.url} 
          class="flex items-center gap-3 px-2.5 py-2 rounded-xl text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors {isActive(item.url, $page.url.pathname) ? 'bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white font-medium' : 'text-sm'}"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            {@html item.icon}
          </svg>
          <span class="text-[13px]">{item.name}</span>
        </a>
      {/each}
    </nav>
  </div>

  <!-- Footer / Social -->
  <div class="mt-10">
    <div class="flex items-center justify-between mb-6">
      <div class="flex gap-4">
        {#each social as link}
          <a href={link.url} class="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors" aria-label={link.name}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              {@html link.icon}
            </svg>
          </a>
        {/each}
      </div>
      
      <!-- Dark Mode Toggle -->
      <button 
        onclick={toggleDarkMode}
        class="p-2 rounded-lg text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-white transition-all"
        aria-label="Toggle Dark Mode"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="dark:hidden">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="hidden dark:block">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
      </button>
    </div>
    
    <div class="text-xs text-zinc-400">
      <p>© 2026 Jimmy Cai</p>
      <p class="mt-1">Built with SvelteKit & Tailwind</p>
    </div>
  </div>
</aside>
