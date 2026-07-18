import type { MetadataRoute } from "next";

const SITE_URL = "https://flag-ciclo.nl";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, priority: 1 },
    { url: `${SITE_URL}/technologie`, priority: 0.8 },
    { url: `${SITE_URL}/vergelijking`, priority: 0.8 },
    { url: `${SITE_URL}/csrd`, priority: 0.7 },
    { url: `${SITE_URL}/veelgestelde-vragen`, priority: 0.7 },
  ];
}
