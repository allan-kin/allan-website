import React from "react";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
    title: "Allan B. Santos - Software Engineering",
    description: "Software Engineering • Adobe Commerce • React • NextJS • Node • TypeScript",
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
