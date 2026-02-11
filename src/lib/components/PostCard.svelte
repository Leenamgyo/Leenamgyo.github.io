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

ㅈ
<article
  class="card-style mb-6 flex flex-col md:flex-row overflow-hidden hover:shadow-lg transition-shadow duration-300"
>
  {#if imageUrl}
    <div class="md:w-1/3 h-48 md:h-auto relative">
      <img
        src={imageUrl}
        alt={title}
        class="w-full h-full object-cover absolute inset-0"
      />
    </div>
  {/if}

  <div class="p-6 flex flex-col flex-1">
    <div class="mb-4 flex-1">
      <h2
        class="text-2xl font-bold mb-2 text-gray-800 dark:text-white leading-tight"
      >
        <a
          {href}
          class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          {title}
        </a>
      </h2>

      <p class="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
        {description}
      </p>
    </div>

    <div
      class="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mt-auto"
    >
      <time class="flex items-center gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          ><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line
            x1="16"
            y1="2"
            x2="16"
            y2="6"
          ></line><line x1="8" y1="2" x2="8" y2="6"></line><line
            x1="3"
            y1="10"
            x2="21"
            y2="10"
          ></line></svg
        >
        {date}
      </time>
      <span class="flex items-center gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          ><circle cx="12" cy="12" r="10"></circle><polyline
            points="12 6 12 12 16 14"
          ></polyline></svg
        >
        5 min read
      </span>
    </div>
  </div>
</article>
