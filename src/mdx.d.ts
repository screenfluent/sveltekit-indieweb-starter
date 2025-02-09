declare module '*.mdx' {
    import type { ComponentType, SvelteComponent } from 'svelte';

    const Component: ComponentType<SvelteComponent>;

    export const metadata: {
        title: string;
        date: string;
        summary: string;
        tags: string[];
    };

    const MDXComponent: typeof Component & {
        metadata: typeof metadata;
    };

    export default MDXComponent;
}
