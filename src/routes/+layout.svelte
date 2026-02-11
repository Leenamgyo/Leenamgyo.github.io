<script lang="ts">
	import "./layout.css";
	import favicon from "$lib/assets/favicon.svg";
	import Sidebar from "$lib/components/Sidebar.svelte";
	import RightSidebar from "$lib/components/RightSidebar.svelte";

	let { children, data } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="min-h-screen bg-gray-50 dark:bg-gray-900">
	<div class="container extended">
		<div class="layout-grid">
			<aside class="left-sidebar">
				<Sidebar
					menu={data.menu}
					social={data.social}
					site={data.site}
				/>
			</aside>

			<main class="main-content">
				{@render children()}
			</main>

			<aside class="right-sidebar">
				<RightSidebar
					widgetsConfig={data.widgets}
					tags={data.tags}
					archives={data.archives}
				/>
			</aside>
		</div>
	</div>
</div>
