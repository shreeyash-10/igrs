import "./globals.css";
import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

const manrope = Manrope({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-manrope",
});

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-space",
});

export const metadata: Metadata = {
    metadataBase: new URL(site.url),
    title: {
        default: `${site.name} | AI-First Public Service Platforms`,
        template: `%s | ${site.name}`,
    },
    description: site.tagline,
    applicationName: site.legalName,
    keywords: [
        "AIGRS",
        "AI grievance redressal",
        "AI public services",
        "government AI platform",
        "omnichannel citizen service",
        "sovereign AI",
        "India AI LLM",
        "workflow automation",
        "policy analytics",
    ],
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "website",
        url: site.url,
        title: `${site.name} | AI-First Public Service Platforms`,
        description: site.tagline,
        siteName: site.name,
    },
    twitter: {
        card: "summary_large_image",
        title: `${site.name} | AI-First Public Service Platforms`,
        description: site.tagline,
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },
    icons: {
        icon: "/icon.svg",
        shortcut: "/icon.svg",
        apple: "/icon.svg",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${manrope.variable} ${spaceGrotesk.variable} bg-[#f6f7fb] text-[#0b0f1f]`}>
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
