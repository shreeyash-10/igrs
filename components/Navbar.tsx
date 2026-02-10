import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-white/20 bg-white/70 backdrop-blur">
            <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-4 py-3">
                <Link href="/" className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm">
                        <Image src="/logo-aiaas.png" alt="AiAAS Simplified" width={28} height={28} />
                    </div>
                    <div className="leading-tight">
                        <div className="text-sm font-semibold text-[#0b0f1f]">{site.name}</div>
                        <div className="text-xs text-[#64748b]">{site.brand}</div>
                    </div>
                </Link>

                <nav className="hidden items-center gap-5 md:flex">
                    {site.nav.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm text-[#1f2937] hover:text-black"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-2">
                    <Link
                        href="/contact"
                        className="rounded-full bg-[#0b0f1f] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-black"
                    >
                        Schedule a demo
                    </Link>
                </div>
            </div>
        </header>
    );
}
