<script context="module">
	export async function load({ session }) {
		if (session.user) {
			return {
				status: 302,
				redirect: '/'
			};
		}

		return {};
	}
</script>

<script>
	import { session } from '$app/stores';
	import { goto } from '$app/navigation';
	import { post } from '$lib/utils.js';
	import ListErrors from '$lib/ListErrors.svelte';
	import SocialAuth from '$lib/SocialAuth.svelte';

	let email = '';
	let password = '';
	let errors = null;

	async function submit(event) {
		const response = await post(`auth/login`, { email, password });
		console.log(event);
		
		errors = response.errors;

		if (response.user) {
			$session.user = response.user;
			goto('/');
		}
	}
</script>

<svelte:head>
	<title>Sign In</title>
</svelte:head>

<div class="auth-page">
	<div class="container page">
		<div class="row">
			<div class="col-md-6 offset-md-3 col-xs-12">
				<h1 class="text-xs-center ">Sign In</h1>
				<p class="text-xs-center">
					<a href="/register">Need an account?</a>
				</p>

				<ListErrors {errors}/>

				<form on:submit|preventDefault={submit}>
					<fieldset class="form-group">
						<input class="form-control form-control-lg" type="email" required placeholder="Email" bind:value={email}>
					</fieldset>
					<fieldset class="form-group">
						<input class="form-control form-control-lg" type="password" required placeholder="Password" bind:value={password}>
					</fieldset>
					<button class="btn btn-lg btn-primary pull-xs-right" type="submit" value="register">
						Sign in
					</button>
					<a rel="prefetch" href="/restore-password" class="btn btn-primary btn-lg pull-xs-left">Forgot your password?</a>
				</form>
				<SocialAuth/>
			</div>
		</div>
	</div>
</div>

<style>

</style>