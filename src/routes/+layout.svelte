<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import RightSidebar from '$lib/components/RightSidebar.svelte';

	let { children, data } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="min-h-screen bg-zinc-50 dark:bg-black font-['Inter']">
	<div 
		class="flex flex-col lg:flex-row w-full max-w-[1200px] mx-auto px-4 md:px-8 gap-6 lg:gap-10 transition-all duration-300"
	>
		<Sidebar menu={data.menu} social={data.social} site={data.site} />
		
		<div class="flex-1 w-full flex flex-col xl:flex-row transition-all gap-6 lg:gap-10">
			<main class="flex-1 py-4 md:py-8 lg:py-12 min-w-0">
				{@render children()}
			</main>
			<RightSidebar widgetsConfig={data.widgets} tags={data.tags} archives={data.archives} />
		</div>
	</div>
</div>
