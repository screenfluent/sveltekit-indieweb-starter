import type { SvelteComponent } from 'svelte';

export interface BlogPostMetadata {
	title: string;
	date: string;
	summary: string;
	tags?: string[];
	draft?: boolean;
}

export interface BlogPost {
	slug: string;
	metadata: BlogPostMetadata;
	Component: typeof SvelteComponent;
}

declare module '$content/blog/*.mdx' {
	export const metadata: BlogPostMetadata;

	/**
	 * The mdsvex-compiled component is recognized as a Svelte component,
	 * so we declare it as a SvelteComponent to match the BlogPost interface.
	 */
	const MDXComponent: typeof SvelteComponent;
	export default MDXComponent;
}
