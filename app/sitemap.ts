import type { MetadataRoute } from "next";

const baseUrl = "https://sawaaed-law.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/about", "/services", "/team", "/contact"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}
