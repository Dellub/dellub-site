import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const url = "https://dellub.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${url}/pt-BR`,
      lastModified: new Date(),
      alternates: {
        languages: {
          "pt-BR": `${url}/pt-BR`,
          en: `${url}/en`,
        },
      },
    },
    {
      url: `${url}/pt-BR/about`,
      lastModified: new Date(),
      alternates: {
        languages: {
          "pt-BR": `${url}/pt-BR/about`,
          en: `${url}/en/about`,
        },
      },
    },
  ];
}
