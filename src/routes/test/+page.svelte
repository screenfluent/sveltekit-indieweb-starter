<script lang="ts">
import { getPost } from '$lib/content';
import type { BlogPost } from '$lib/types';
import { onMount } from 'svelte';

let post: BlogPost | null = $state(null);

onMount(async () => {
    post = await getPost('test-post');
});
</script>

{#if post}
    <h1>{post.metadata.title}</h1>
    <p>Date: {post.metadata.date}</p>
    <post.Component />
{:else}
    <p>Loading...</p>
{/if}
