import type { MetadataRoute } from "next";

const url = "https://dellub.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${url}`,
      lastModified: new Date(),
      alternates: {
        languages: {
          "pt-BR": `${url}/`,
          en: `${url}/en`,
        },
      },
    },
    {
      url: `${url}/about`,
      lastModified: new Date(),
      alternates: {
        languages: {
          "pt-BR": `${url}/about`,
          en: `${url}/en/about`,
        },
      },
    },
  ];
}
