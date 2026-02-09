import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
    title: `Pre-Seed Round Jan 2026 - ${site.name}`,
    description: site.tagline,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="bg-white text-gray-900">
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
