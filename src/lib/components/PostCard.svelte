<script lang="ts">
  interface Props {
    title: string;
    description: string;
    date: string;
    imageUrl?: string;
    href: string;
  }

  let { title, description, date, imageUrl, href }: Props = $props();
</script>

<article class="bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800 flex flex-col md:flex-row h-full group">
  {#if imageUrl}
    <div class="md:w-1/3 h-48 md:h-auto relative overflow-hidden">
      <img src={imageUrl} alt={title} class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
      <div class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
    </div>
  {/if}
  
  <div class="p-6 md:p-8 flex flex-col flex-1 justify-between">
    <div>
      
      <h2 class="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        <a href={href}>{title}</a>
      </h2>
      
      <p class="text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-3 mb-6">
        {description}
      </p>
    </div>

    <div class="flex items-center text-sm text-zinc-400 gap-4 mt-auto">
      <time class="flex items-center gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
        {date}
      </time>
      <span class="flex items-center gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
        5 min read
      </span>
    </div>
  </div>
</article>
