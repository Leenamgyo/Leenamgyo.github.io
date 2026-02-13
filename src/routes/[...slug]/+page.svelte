<script lang="ts">
    let { data } = $props();
    let Component = $derived(data.component);
</script>

<div class="card-style p-6">
    <Component />
</div>
