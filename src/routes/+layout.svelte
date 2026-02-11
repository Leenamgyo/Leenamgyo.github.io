<script lang="ts">
	import favicon from "$lib/assets/favicon.svg";
	import Sidebar from "$lib/components/Sidebar.svelte";
	import RightSidebar from "$lib/components/RightSidebar.svelte";
	import "./layout.css";

	let { children, data } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="container extended">
	<div class="layout-grid">
		<!-- Left Sidebar -->
		<div class="left-sidebar">
			<Sidebar menu={data.menu} social={data.social} site={data.site} />
		</div>

		<!-- Main Content -->
		<main class="main-content">
			{@render children()}
		</main>

		<!-- Right Sidebar -->
		<div class="right-sidebar">
			<RightSidebar
				widgetsConfig={data.widgets}
				tags={data.tags}
				archives={data.archives}
			/>
		</div>
	</div>
</div>
