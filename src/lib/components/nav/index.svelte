<script lang="ts">
    import { page } from '$app/stores';
    import { indieConfig } from '$lib/config';

    const navItems = {
        '/': {
            name: 'home',
        },
        '/blog': {
            name: 'blog',
        },
        'https://vercel.com/templates/next.js/portfolio-starter-kit': {
            name: 'deploy',
        },
    };
</script>

<aside class="-ml-[8px] mb-16 tracking-tight">
    <div class="lg:sticky lg:top-20">
        <nav
            class="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
            id="nav"
        >
            <div class="flex flex-row space-x-0 pr-10">
                {#each Object.entries(navItems) as [path, { name }]}
                    <a
                        href={path}
                        class={`transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1 ${$page.url.pathname === path ? 'nav-link-active' : ''}`}
                    >
                        {name}
                    </a>
                {/each}
            </div>
        </nav>
    </div>
</aside>
