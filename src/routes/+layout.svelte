<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import RightSidebar from '$lib/components/RightSidebar.svelte';

	let { children, data } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="min-h-screen bg-zinc-50 dark:bg-black font-['Inter']">
	<div class="flex flex-col lg:flex-row max-w-[1024px] mx-auto px-6 md:px-12 lg:px-16 gap-4 lg:gap-8">
		<Sidebar menu={data.menu} social={data.social} />
		
		<div class="flex-1 w-full flex flex-col xl:flex-row transition-all gap-4 lg:gap-8">
			<main class="flex-1 py-4 md:py-8 lg:py-12 min-w-0">
				{@render children()}
			</main>
			<RightSidebar widgetsConfig={data.widgets} />
		</div>
	</div>
</div>
