import { MetadataRoute } from "next";

const robots = (): MetadataRoute.Robots => {

    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: "/private/"
        },
        sitemap: `https://${process.env.NEXT_PUBLIC_DOMAIN}/sitemap.xml`
    }
};

export default robots;