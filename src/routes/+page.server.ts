import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import testPost, { metadata } from '$content/blog/test-post.mdx';

export const load: PageServerLoad = async () => {
    try {
        const posts = [
            {
                slug: 'test-post',
                metadata: {
                    title: metadata.title,
                    publishedAt: metadata.date,
                    summary: metadata.summary,
                    tags: metadata.tags
                }
            }
        ];

        return {
            posts
        };
    } catch (e) {
        throw error(500, 'Error loading blog posts');
    }
};
