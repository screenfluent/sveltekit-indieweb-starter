<script lang="ts">
    import { indieConfig } from '$lib/config';
</script>

<footer class="container-prose py-8">
    <hr class="border-t border-neutral-200 dark:border-neutral-800 mb-8" />
    <div class="flex flex-col space-y-4">
        <div class="flex items-center space-x-4">
            {#if indieConfig.socialProfiles.github}
                <a
                    href={indieConfig.socialProfiles.github}
                    target="_blank"
                    rel="noopener noreferrer me"
                    class="footer-link"
                >
                    github
                </a>
            {/if}
            {#if indieConfig.socialProfiles.twitter}
                <a
                    href={indieConfig.socialProfiles.twitter}
                    target="_blank"
                    rel="noopener noreferrer me"
                    class="footer-link"
                >
                    twitter
                </a>
            {/if}
        </div>
        <p class="footer-link">
            Built with <a href="https://kit.svelte.dev" target="_blank" rel="noopener noreferrer" class="underline">SvelteKit</a>
            · <a href="/feed.xml" class="underline">RSS</a>
        </p>
    </div>
</footer>
