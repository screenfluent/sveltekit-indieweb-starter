# SvelteKit Migration Technical Plan

## Progress Update (2025-02-09)

✅ Completed:

- Basic project structure setup
- MDX content loading with mdsvex
- TypeScript configuration
- Test page with blog post rendering
- Vite and SvelteKit configuration

## 1. Project Structure Mapping

````diff
Next.js                      → SvelteKit
|- app/                      → src/routes/
|  |- layout.tsx             → src/routes/+layout.svelte
|  |- page.tsx               → src/routes/+page.svelte
|  |- blog                  → src/routes/blog/
|  |  |- [slug]/page.tsx     → src/routes/blog/[slug]/+page.svelte
|  |  |- posts/             → src/content/blog/
|  |      |- spaces-vs-tabs.mdx    → (processed with mdsvex)
|  |      |- static-typing.mdx       → (processed with mdsvex)
|  |      |- vim.mdx                → (processed with mdsvex)
|  |- utils.ts               → src/lib/utilities/
|  |- components/            → src/lib/components/
|  |- og/                   → src/routes/og/
|  |- rss/                  → src/routes/rss/
|  |- global.css            → src/app.css (imported in +layout.svelte)
|  |- not-found.tsx         → src/routes/+error.svelte
|  |- robots.ts             → src/routes/robots.txt/+server.ts
|  |- sitemap.ts            → src/routes/sitemap.xml/+server.ts
|- lib/                      → src/lib/utilities/
|- public/                   → static/
````

## Next Steps (Priority Order)

1. **Layout Implementation**
   - [ ] Create base layout (+layout.svelte)
     - Reference: `_nextjs_backup/app/layout.tsx`
     - Reference: `_nextjs_backup/app/global.css`
   - [ ] Set up global styles
   - [ ] Implement navigation components from `_nextjs_backup/app/components/nav`

2. **Blog Post Routing**
   - [ ] Create dynamic [slug] route
     - Reference: `_nextjs_backup/app/blog/[slug]/page.tsx`
   - [ ] Implement server-side data loading
     - Reference: `_nextjs_backup/app/blog/get-posts.ts`
   - [ ] Add metadata handling
     - Reference: `_nextjs_backup/app/blog/[slug]/head.tsx`

3. **Component Migration**
   - [ ] Header component
     - Reference: `_nextjs_backup/app/components/header.tsx`
   - [ ] Footer component
     - Reference: `_nextjs_backup/app/components/footer.tsx`
   - [ ] Navigation menu
     - Reference: `_nextjs_backup/app/components/nav/index.tsx`
   - [ ] Blog post card
     - Reference: `_nextjs_backup/app/components/blog-post-card.tsx`

4. **Styling Setup**
   - [ ] Configure Tailwind CSS
     - Reference: `_nextjs_backup/postcss.config.js`
     - Reference: `_nextjs_backup/app/global.css`
   - [ ] Set up typography styles
   - [ ] Create theme variables

5. **Content Features**
   - [ ] Blog post listing
     - Reference: `_nextjs_backup/app/blog/page.tsx`
   - [ ] Categories/tags
   - [ ] Search functionality

6. **SEO & Performance**
   - [ ] Meta tags component
   - [ ] RSS feed
     - Reference: `_nextjs_backup/app/rss/route.ts`
   - [ ] Sitemap generation
     - Reference: `_nextjs_backup/app/sitemap.ts`
   - [ ] robots.txt
     - Reference: `_nextjs_backup/app/robots.ts`

## Component Migration Guidelines

### State Management
```svelte
<script lang="ts">
// Instead of useState
let count = $state(0);
let doubled = $derived(count * 2);

// Instead of useEffect
$effect(() => {
    console.log(`Count changed: ${count}`);
});

// Props with TypeScript
let { title, description = 'Default' } = $props<{
    title: string;
    description?: string;
}>();
</script>
```

### Data Loading
```ts
// src/routes/blog/[slug]/+page.server.ts
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
    const post = await getPost(params.slug);
    return { post };
}) satisfies PageServerLoad;
```

### Styling Strategy
- Use Tailwind CSS for utility classes
- Component-specific styles in <style> blocks
- Global styles in app.css

### Testing Plan
1. Component tests with Vitest
2. E2E tests with Playwright
3. Content loading validation
4. SSG verification

### Deployment
- Use adapter-static for SSG
- Configure prerendering
- Set up CI/CD pipeline
