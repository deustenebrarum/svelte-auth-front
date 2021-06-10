<script context="module">

</script>
<script>
	import { page, session } from '$app/stores';

	let isNavOpened = false;

	let closeNavDrop = () => {isNavOpened = false;};
	let changeNavDrop = (e) => {isNavOpened = !isNavOpened;};
</script>

<header>
	<nav>
		<div class="nav-header" on:click={closeNavDrop}>
			<div class="nav-title">
				<a rel="prefetch" href="/" >Svelte</a>
			</div>
		</div>
		<button class="nav-btn" class:opened={isNavOpened} on:click={changeNavDrop}>
				<svg style="filter: invert(100%)" width="48px" height="48px" viewBox="0 0 32 32"><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/></svg>
		</button>
		
		<div class="nav-links" on:click={closeNavDrop}>
			{#if $session.user}
				<a rel="prefetch"
					href="/settings"
					class:active={$page.path === '/settings'}>
					<i class="ion-gear-a" />&nbsp;Settings
				</a>
				<span class="mr-3">
					{$session.user.username}
				</span>
			{:else}
				<a rel="prefetch" href="/login" class="nav-link" class:active={$page.path === '/login'}>
					Sign in
				</a>
				<a
					rel="prefetch"
					href="/register"
					class:active={$page.path === '/register'}>
					Sign up
				</a>
			{/if}
		</div>
	</nav>
</header>

<style>
* {
	box-sizing: border-box;
}

nav {
	height: 54px;
	width: 100%;
	background-color: rgb(29, 29, 29);
	position: relative;
}

nav > .nav-header {
	display: inline;
}

nav > .nav-header > .nav-title {
	display: inline-block;
	font-size: 22px;
	color: #fff;
	padding: 10px 10px 10px 10px;
}
nav > .nav-header > .nav-title > a {
	text-decoration: none;
	color: #6f00c4;
	text-shadow:
		0 0 5px #6f00c4,
		0 0 10px #6f00c4,
		0 0 20px #6f00c4;
}
nav > .nav-header > .nav-title > a:hover {
	text-shadow:
		0 0 8px #8415da,
		0 0 10px #8415da,
		0 0 20px #8415da;
}
nav > .nav-header > .nav-title {
	display: inline-block;
	font-size: 22px;
	color: #fff;
	padding: 10px 10px 10px 10px;
}
.nav-btn {
	border: none;
	background: none;
}
.nav-btn:focus {
	outline-color: #000000;
}
.nav-btn {
	display: none;
}

nav > .nav-links {
	display: inline;
	float: right;
	font-size: 18px;
}

nav > .nav-links > a {
	display: inline-block;
	padding: 13px 10px 13px 10px;
	text-decoration: none;
	color: #76319e;
	font-weight: 500 !important;
}

nav > .nav-links > a.active {
	text-shadow:
		0 0 10px #450b72,
		0 0 15px #450b72;
}

nav > .nav-links > a:hover {
	background-color: rgba(0, 0, 0, 0.3);
	text-shadow:
		0 0 8px #450b72,
		0 0 10px #450b72;
}

@media (max-width:600px) {
.nav-btn {
	position: absolute;
	right: 0px;
	top: 0px;
}
.nav-btn {
	display: block;
}
.nav-btn.opened > svg {
	filter: invert(50%) !important;
}
nav > .nav-links {
	position: fixed;
	display: block;
	width: 100%;
	background-color: rgb(36, 36, 36);
	height: 0px;
	transition: all 0.3s ease-in;
	overflow-y: hidden;
	top: 50px;
	left: 0px;
	z-index: 20;
}
nav > .nav-links > a {
	display: block;
	width: 100%;
}
.nav-btn ~ .nav-links {
	height: 0px;
}
.nav-btn.opened ~ .nav-links {
	height: calc(100vh - 50px);
	overflow-y: auto;
}
}
</style>
