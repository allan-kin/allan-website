import React from "react";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserratFont = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"]
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body className={`${montserratFont.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
