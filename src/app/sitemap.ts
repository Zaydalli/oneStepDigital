import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://onestepdigital.co';
  const lastModified = new Date();

  const policyPaths = [
    'privacy-policy',
    'terms-of-service',
    'refund-policy',
    'cookie-policy',
  ];

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...policyPaths.map((path) => ({
      url: `${baseUrl}/${path}`,
      lastModified,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    })),
  ];
}
