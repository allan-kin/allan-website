import { MetadataRoute } from "next";

const sitemap = (): MetadataRoute.Sitemap => {

    const baseUrl = `https://${process.env.NEXT_PUBLIC_DOMAIN}`;

    return [
        {
            url: `${baseUrl}`,
            lastModified: new Date(Date.now()),
            changeFrequency: "daily",
            priority: 1,
        },
        {
            url: `${baseUrl}/frameworks-and-languages`,
            lastModified: new Date(Date.now()),
            changeFrequency: "daily",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/professional-experiences`,
            lastModified: new Date(Date.now()),
            changeFrequency: "daily",
            priority: 0.8,
        }
    ];
}

export default sitemap;