import Link from "next/link";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Whoops - are you lost?",
    description: "The page you are looking for does not exist.",
};

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center px-4">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-lg mb-6 text-gray-600">Sorry, the page you are looking for does not exist.</p>
            <Link href="/" className="text-blue-600 hover:underline text-sm">
                ← Go back to homepage
            </Link>
        </div>
    );
}