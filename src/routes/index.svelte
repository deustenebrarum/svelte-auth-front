<script>
import { session } from "$app/stores";

</script>
<svelte:head>
	<title>Home</title>
</svelte:head>

{#if $session.user}
<h1>Welcome, {$session.user.username}!</h1>
{:else}
<h1>Welcome, guest!</h1>
{/if}