<script lang="ts">
  const archives = [
    { year: 2026, posts: [
        { title: 'Getting Started with SvelteKit and Tailwind CSS', date: 'Feb 02' },
        { title: 'The Future of Web Development', date: 'Jan 28' },
        { title: 'Building a Personal Portfolio', date: 'Jan 15' },
        { title: 'Understanding TypeScript Generics', date: 'Jan 05' }
    ]},
    { year: 2025, posts: [
        { title: 'Refactoring Legacy Code', date: 'Dec 20' },
        { title: 'CSS Grid vs Flexbox', date: 'Nov 12' }
    ]}
  ];
</script>

<div class="space-y-8">
    <div class="bg-white dark:bg-zinc-900 rounded-3xl p-8 md:p-12 shadow-sm border border-zinc-100 dark:border-zinc-800">
        <h1 class="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-12">Archives</h1>
        
        <div class="space-y-12">
            {#each archives as group}
                <div class="flex flex-col md:flex-row gap-4 md:gap-12">
                    <div class="md:w-32 flex-shrink-0">
                        <h2 class="text-2xl font-bold text-zinc-400">{group.year}</h2>
                    </div>
                    <div class="flex-1 space-y-6 border-l border-zinc-100 dark:border-zinc-800 pl-6 md:pl-10 py-2">
                        {#each group.posts as post}
                            <article class="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 group">
                                <time class="text-sm text-zinc-400 font-mono flex-shrink-0 w-16">{post.date}</time>
                                <a href="/" class="text-lg font-medium text-zinc-900 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    {post.title}
                                </a>
                            </article>
                        {/each}
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>
