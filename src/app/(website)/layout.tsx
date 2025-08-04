import React from "react";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
    title: "Allan B. Santos - Software Engineering",
    description: "Software Engineering • Adobe Commerce • React • NextJS • Node • TypeScript",
    authors: [{ name: "Allan Barbuza dos Santos"}],
    generator: "Next.js",
    keywords: ["Allan Barbuza dos Santos", "Software Engineering", "Adobe Commerce", "React", "NextJS", "Node", "TypeScript"],
    robots: "noindex,nofollow",
    metadataBase: new URL(`https://${process.env.NEXT_PUBLIC_DOMAIN}`),
    openGraph: {
        siteName: "Allan Barbuza dos Santos",
        images: "/images/profile.jpeg"
    }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <>
            <Header />
            <main className="block w-full">
                {children}
            </main>
            <Footer />
        </>
    );
}
