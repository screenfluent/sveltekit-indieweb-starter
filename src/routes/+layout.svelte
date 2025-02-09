<script lang="ts">
	import '../app.css';
	import { baseUrl } from '$lib/config';
	import Nav from '$lib/components/nav/index.svelte';
	import Footer from '$lib/components/footer.svelte';
	
	// Props for child content
	let { children } = $props();
</script>

<svelte:head>
	<title>SvelteKit IndieWeb Starter</title>
	<meta name="description" content="This is my IndieWeb site." />
	<meta property="og:title" content="My IndieWeb Site" />
	<meta property="og:description" content="This is my IndieWeb site." />
	<meta property="og:url" content={baseUrl} />
	<meta property="og:site_name" content="My IndieWeb Site" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="website" />
	<meta name="robots" content="index,follow" />
	<meta name="googlebot" content="index,follow" />
</svelte:head>

<div class="light-mode dark:dark-mode min-h-screen">
	<div class="container-prose">
		<Nav />
		<main class="py-8">
			{@render children()}
		</main>
		<Footer />
	</div>
</div>
