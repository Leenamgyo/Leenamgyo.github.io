<script lang="ts">
    import Content, { metadata } from '../../../content/about.md';
</script>

<div class="space-y-8">
    <div class="bg-white dark:bg-zinc-900 rounded-3xl p-8 md:p-12 shadow-sm border border-zinc-100 dark:border-zinc-800">
        <h1 class="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">{metadata.title}</h1>
        
        <div class="prose prose-zinc dark:prose-invert max-w-none">
            <Content />
        </div>
    </div>
</div>
