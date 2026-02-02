<script lang="ts">
  import Content, { metadata } from '../../../content/archives.md';

  let { data } = $props();

  function formatDate(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: '2-digit' });
  }
</script>

<div class="space-y-8">
    <div class="bg-white dark:bg-zinc-900 rounded-3xl p-8 md:p-12 shadow-sm border border-zinc-100 dark:border-zinc-800">
        <h1 class="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">{metadata.title}</h1>
        
        <div class="prose prose-zinc dark:prose-invert max-w-none mb-12">
            <Content />
        </div>
        
        <div class="space-y-12">
            {#each data.archives as group}
                <div class="flex flex-col md:flex-row gap-4 md:gap-12">
                    <div class="md:w-32 flex-shrink-0">
                        <h2 class="text-2xl font-bold text-zinc-400">{group.year}</h2>
                    </div>
                    <div class="flex-1 space-y-6 border-l border-zinc-100 dark:border-zinc-800 pl-6 md:pl-10 py-2">
                        {#each group.posts as post}
                            <article class="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 group">
                                <time class="text-sm text-zinc-400 font-mono flex-shrink-0 w-16">{formatDate(post.date)}</time>
                                <a href="/post/{post.slug}" class="text-lg font-medium text-zinc-900 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
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
