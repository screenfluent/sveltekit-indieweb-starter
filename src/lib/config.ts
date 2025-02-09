import { env } from '$env/dynamic/public';

// Site configuration
export const baseUrl = env.PUBLIC_SITE_URL ?? 'http://localhost:5173';

// IndieWeb configuration
export const indieConfig = {
    authorName: 'Your Name',
    authorEmail: 'your.email@example.com',
    authorUrl: baseUrl,
    siteName: 'My IndieWeb Site',
    siteDescription: 'This is my IndieWeb site.',
    siteLanguage: 'en-US',
    // Add your social profiles
    socialProfiles: {
        github: 'https://github.com/yourusername',
        twitter: 'https://twitter.com/yourusername',
        // Add more as needed
    }
} as const;
