<script lang="ts">
    import { highlighter } from '$lib/utils/highlighter';

    // Helper function to slugify text for heading IDs
    function slugify(str: string) {
        return str
            .toString()
            .toLowerCase()
            .trim()
            .replace(/\s+/g, '-')
            .replace(/&/g, '-and-')
            .replace(/[^\w\-]+/g, '')
            .replace(/\-\-+/g, '-');
    }
</script>

<article class="prose dark:prose-invert">
    <slot />
</article>

<style>
    :global(article h1),
    :global(article h2),
    :global(article h3),
    :global(article h4),
    :global(article h5),
    :global(article h6) {
        scroll-margin-top: 4rem;
    }

    :global(article h2) {
        margin-top: 2rem;
        margin-bottom: 1rem;
        line-height: 1.3;
    }

    :global(article img) {
        border-radius: 0.5rem;
    }

    :global(article code) {
        font-family: 'Fira Code', monospace;
    }

    :global(article table) {
        display: block;
        max-width: fit-content;
        overflow-x: auto;
        white-space: nowrap;
    }

    :global(article table th),
    :global(article table td) {
        padding: 0.75rem;
        border: 1px solid #e5e7eb;
    }

    :global(article table th) {
        background-color: #f9fafb;
        font-weight: 600;
    }

    :global(.dark article table th) {
        background-color: #374151;
    }

    :global(.dark article table td),
    :global(.dark article table th) {
        border-color: #4b5563;
    }

    :global(article a) {
        color: #3b82f6;
        text-decoration: none;
    }

    :global(article a:hover) {
        text-decoration: underline;
    }

    :global(.dark article a) {
        color: #60a5fa;
    }

    :global(article pre) {
        padding: 1rem;
        border-radius: 0.5rem;
        background-color: #1f2937;
        overflow-x: auto;
    }

    :global(.dark article pre) {
        background-color: #111827;
    }
</style>
