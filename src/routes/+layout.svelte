<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import RightSidebar from '$lib/components/RightSidebar.svelte';

	let { children, data } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div>
	<div>
		<Sidebar menu={data.menu} social={data.social} site={data.site} />
		
		<div>
			<main>
				{@render children()}
			</main>
			<RightSidebar widgetsConfig={data.widgets} tags={data.tags} archives={data.archives} />
		</div>
	</div>
</div>
