<script lang="ts">
  import PostCard from '$lib/components/PostCard.svelte';

  const posts = [
    {
      title: 'Getting Started with SvelteKit and Tailwind CSS',
      description: 'Learn how to set up a new SvelteKit project and integrate Tailwind CSS for rapid UI development. We will explore the project structure and basic configuration.',
      date: 'Feb 02, 2026',
      category: 'Tutorial',
      imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop'
    },
    {
      title: 'The Future of Web Development',
      description: 'An in-depth look at upcoming trends in web development, including server components, edge computing, and AI-assisted coding tools.',
      date: 'Jan 28, 2026',
      category: 'Opinion',
      imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1000&auto=format&fit=crop'
    },
    {
      title: 'Building a Personal Portfolio',
      description: 'Why you need a personal portfolio and how to build one that stands out. Tips on design, content strategy, and hosting options.',
      date: 'Jan 15, 2026',
      category: 'Design',
      imageUrl: 'https://images.unsplash.com/photo-1507238691126-2660ceef1d40?q=80&w=1000&auto=format&fit=crop'
    },
    {
      title: 'Understanding TypeScript Generics',
      description: 'A comprehensive guide to understanding and using TypeScript generics in your daily projects. Improve code reusability and type safety.',
      date: 'Jan 05, 2026',
      category: 'Coding',
      imageUrl: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=1000&auto=format&fit=crop'
    }
  ];
</script>

<div class="max-w-4xl mx-auto space-y-12">
  <div class="flex items-center justify-between mb-8">
    <h1 class="text-3xl font-bold text-zinc-900 dark:text-white">Recent Posts</h1>
    <div class="flex gap-2">
      <!-- Simple fake sort/filter controls -->
      <button class="px-3 py-1 text-sm rounded-md bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50">Newest</button>
      <button class="px-3 py-1 text-sm rounded-md bg-transparent text-zinc-500 hover:text-zinc-900 dark:hover:text-white">Popular</button>
    </div>
  </div>

  <div class="grid gap-8">
    {#each posts as post}
      <PostCard {...post} />
    {/each}
  </div>
  
  <div class="flex justify-center pt-8">
    <button class="px-6 py-3 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 shadow-sm hover:shadow-md transition-all font-medium">
      Load More
    </button>
  </div>
</div>