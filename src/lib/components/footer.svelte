<script lang="ts">
    import { indieConfig } from '$lib/config';
</script>

<footer class="flex flex-col justify-center items-center max-w-2xl mx-auto w-full mb-8">
    <hr class="w-full border-1 border-neutral-200 dark:border-neutral-800 mb-8" />
    <div class="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16">
        <div class="flex flex-col space-y-4">
            <div class="flex flex-row items-center gap-4">
                {#if indieConfig.socialProfiles.github}
                    <a
                        href={indieConfig.socialProfiles.github}
                        target="_blank"
                        rel="noopener noreferrer me"
                        class="transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                    >
                        github
                    </a>
                {/if}
                {#if indieConfig.socialProfiles.twitter}
                    <a
                        href={indieConfig.socialProfiles.twitter}
                        target="_blank"
                        rel="noopener noreferrer me"
                        class="transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                    >
                        twitter
                    </a>
                {/if}
            </div>
            <p class="text-sm text-neutral-500 dark:text-neutral-400">
                Built with <a href="https://kit.svelte.dev" target="_blank" rel="noopener noreferrer" class="hover:text-neutral-800 dark:hover:text-neutral-100">SvelteKit</a>
                · <a href="/feed.xml" class="hover:text-neutral-800 dark:hover:text-neutral-100">RSS</a>
            </p>
        </div>
    </div>
</footer>
