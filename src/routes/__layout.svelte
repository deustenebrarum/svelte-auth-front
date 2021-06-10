<script>
	import { navigating } from '$app/stores';
	import Header from '$lib/Header.svelte';
	import PreloadingIndicator from '$lib/PreloadingIndicator.svelte';
</script>

{#if $navigating}
	<PreloadingIndicator />
{/if}

<Header />

<main>
	<slot />
</main>
