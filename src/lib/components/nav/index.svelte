<script lang="ts">
    import { page } from '$app/stores';
    import { indieConfig } from '$lib/config';
    
    const links = [
        {
            href: '/',
            text: 'home',
        },
        {
            href: '/blog',
            text: 'blog',
        },
        {
            href: '/about',
            text: 'about',
        },
    ] as const;
</script>

<nav class="flex flex-row items-center justify-between w-full relative max-w-2xl mx-auto px-4">
    <div class="ml-[-0.60rem]">
        <a href="/" class="hover:text-neutral-800 dark:hover:text-neutral-100 flex align-middle">
            {indieConfig.authorName}
        </a>
    </div>
    <div class="flex flex-row gap-1 text-sm">
        {#each links as { href, text }}
            <a {href} class="transition-all hover:text-neutral-800 dark:hover:text-neutral-100 py-[5px] px-[10px]" class:text-neutral-500={$page.url.pathname !== href} class:font-bold={$page.url.pathname === href}>
                {text}
            </a>
        {/each}
    </div>
</nav>
