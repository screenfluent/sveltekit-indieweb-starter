import type { SvelteComponent } from 'svelte';
import type { BlogPost, BlogPostMetadata } from './types';

/**
 * Get a single blog post by slug
 * @param slug - Post identifier from URL
 * @returns Promise<BlogPost | null>
 */
export async function getPost(slug: string): Promise<BlogPost | null> {
	try {
		const post = await import(`$content/blog/${slug}.mdx`);
		return {
			slug,
			metadata: post.metadata,
			Component: post.default
		};
	} catch (e) {
		console.error(`Error loading post ${slug}:`, e);
		return null;
	}
}

interface MDXModule {
	metadata: BlogPostMetadata;
	default: typeof SvelteComponent;
}

/**
 * Get all blog posts sorted by date
 * @returns Promise<BlogPost[]>
 */
export async function getAllPosts(): Promise<BlogPost[]> {
	const modules = import.meta.glob<MDXModule>(
		'$content/blog/*.mdx',
		{ eager: true }
	);

	return Object.entries(modules)
		.map(([path, module]) => ({
			slug: path.split('/').pop()?.replace('.mdx', '') || '',
			metadata: module.metadata,
			Component: module.default
		}))
		.sort((a, b) =>
			new Date(b.metadata.date).getTime() -
			new Date(a.metadata.date).getTime()
		);
}
