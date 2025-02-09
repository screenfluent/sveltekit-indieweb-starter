<script lang="ts">
    import { formatDate } from '$lib/utils/blog';
    
    export let posts: Array<{
        slug: string;
        metadata: {
            publishedAt: string;
            title: string;
        };
    }>;

    // Sort posts by date, newest first
    $: sortedPosts = [...posts].sort((a, b) => {
        if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
            return -1;
        }
        return 1;
    });
</script>

<div>
    {#each sortedPosts as post}
        <a
            class="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
        >
            <div class="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                <p class="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                    {formatDate(post.metadata.publishedAt, false)}
                </p>
                <p class="text-neutral-900 dark:text-neutral-100 tracking-tight">
                    {post.metadata.title}
                </p>
            </div>
        </a>
    {/each}
</div>
