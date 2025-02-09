import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.mdx'],
	// Consult https://svelte.dev/docs/kit/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.mdx'],
			layout: {
				blog: './src/lib/components/mdx-layout.svelte'
			}
		})
	],

	kit: {
		// adapter-auto only supports certain environments. See https://svelte.dev/docs/kit/adapter-auto for details.
		adapter: adapter(),

		// Configure path aliases
		alias: {
			$content: './src/content',
			'@': './src'
		}
	}
};

export default config;
