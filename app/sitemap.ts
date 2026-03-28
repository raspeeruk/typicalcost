import { MetadataRoute } from "next";
import { services, cities } from "@/lib/data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://typicalcost.com";
  const now = new Date();

  const entries: MetadataRoute.Sitemap = [
    // Home
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    // Services index
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // Cities index
    {
      url: `${baseUrl}/cities`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  // Service hub pages
  for (const service of services) {
    entries.push({
      url: `${baseUrl}/services/${service.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  // City hub pages
  for (const city of cities) {
    entries.push({
      url: `${baseUrl}/cities/${city.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  // Service+city pages (2,500)
  for (const service of services) {
    for (const city of cities) {
      entries.push({
        url: `${baseUrl}/${service.slug}-cost-${city.slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return entries;
}
