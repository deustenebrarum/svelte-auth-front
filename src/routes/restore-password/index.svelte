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
	import { post } from '$lib/utils.js';
	import ListErrors from '$lib/ListErrors.svelte';

	let email = '';
	let errors = null;

    let answer = '';

	async function submit(event) {
        answer = '';
		const response = await post(`auth/send-password`, { email });
		console.log(event);
		
		errors = response.errors;
        
		if (response.user) {
			answer = "Password has been sent to your email."
            return;
		} else {
            answer = "User with presented email doesn't exist. Try again."
            return;
        } 
	}
</script>

<div class="auth-page">
	<div class="container page">
		<div class="row">
			<div class="col-md-6 offset-md-3 col-xs-12">
				<h1 class="text-xs-center ">Restore Password</h1>

				<ListErrors {errors}/>
                <div><span>{answer}</span></div>
				<form on:submit|preventDefault={submit}>
					<fieldset class="form-group">
						<input class="form-control form-control-lg" type="email" required placeholder="Email" bind:value={email}>
					</fieldset>
					<button class="btn btn-lg btn-primary pull-xs-right" type="submit">
						Send email
					</button>
				</form>
			</div>
		</div>
	</div>
</div>