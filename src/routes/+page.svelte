<script>
    import Posts from '$lib/components/posts.svelte';
    
    export let data;
</script>

<section>
    <h1 class="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
    </h1>
    <p class="mb-4">
        I'm a Vim enthusiast and tab advocate, finding unmatched efficiency in
        Vim's keystroke commands and tabs' flexibility for personal viewing
        preferences. This extends to my support for static typing, where its
        early error detection ensures cleaner code, and my preference for dark
        mode, which eases long coding sessions by reducing eye strain.
    </p>
    <div class="my-8">
        <Posts posts={data.posts} />
    </div>
</section>
