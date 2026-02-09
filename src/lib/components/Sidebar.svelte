<script lang="ts">
  import { page } from '$app/stores';
  import { icons } from '$lib/data/icons';

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

<aside>
  <div>
    <!-- Profile -->
    <div>
      <div>
        <!-- Placeholder Avatar -->
        <img src="https://ui-avatars.com/api/?name=Ji&background=random&size=256" alt="Avatar" />
      </div>
      <h1>{site?.author || 'Jimmy Cai'}</h1>
      <p>
        {site?.title || 'Card-style Hugo theme designed for bloggers.'}
      </p>
    </div>

    <!-- Navigation -->
    <nav>
      {#each menu as item}
        <a href={item.url}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            {@html icons[item.icon] || ''}
          </svg>
          <span>{item.name}</span>
        </a>
      {/each}
    </nav>
  </div>

  <!-- Footer / Social -->
  <div>
    <div>
      <div>
        {#each social as link}
          <a href={link.url} aria-label={link.name}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              {@html icons[link.icon] || ''}
            </svg>
          </a>
        {/each}
      </div>
      
      <!-- Dark Mode Toggle -->
      <button onclick={toggleDarkMode} aria-label="Toggle Dark Mode">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </button>
    </div>
    
    <div>
      <p>© 2026 Jimmy Cai</p>
      <p>Built with SvelteKit & Tailwind</p>
    </div>
  </div>
</aside>