import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const BASE_URL = 'https://www.hirevotech.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/private/',
          '/*.pdf$',
          '/scratch/',
        ],
      },
      {
        userAgent: [
          'Googlebot',
          'Bingbot',
          'Slurp',
          'DuckDuckBot',
          'Baiduspider',
          'YandexBot',
          'Applebot',
        ],
        allow: '/',
        disallow: [
          '/api/',
          '/private/',
        ],
      },
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'ClaudeBot',
          'PerplexityBot',
          'Google-Extended',
          'anthropic-ai',
          'CCBot',
        ],
        allow: '/',
        disallow: [
          '/api/',
          '/private/',
        ],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
