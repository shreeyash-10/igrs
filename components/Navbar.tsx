import Link from "next/link";
import { site } from "@/lib/site";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
            <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-4 py-3">
                <Link href="/" className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg border bg-white" />
                    <div className="leading-tight">
                        <div className="text-sm font-semibold">{site.name}</div>
                        <div className="text-xs text-gray-500">Pre-Seed Round • Jan 2026</div>
                    </div>
                </Link>

                <nav className="hidden items-center gap-5 md:flex">
                    {site.nav.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm text-gray-700 hover:text-black"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-2">
                    <Link
                        href="/contact"
                        className="rounded-full border px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50"
                    >
                        Get in touch
                    </Link>
                </div>
            </div>
        </header>
    );
}
