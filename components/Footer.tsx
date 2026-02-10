import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
    return (
        <footer className="border-t border-white/30 bg-white">
            <div className="mx-auto grid max-w-screen-2xl gap-8 px-4 py-12 md:grid-cols-3">
                <div>
                    <div className="text-sm font-semibold text-[#0b0f1f]">{site.name}</div>
                    <p className="mt-3 text-sm text-[#475569]">
                        {site.tagline}
                    </p>
                    <p className="mt-3 text-sm font-medium text-[#0b0f1f]">{site.product}</p>
                    <p className="mt-3 text-sm text-[#475569]">
                        P - 6/309, Ocean Complex, SEC-18, Noida UP - 201301
                    </p>
                </div>

                <div>
                    <div className="text-sm font-semibold text-[#0b0f1f]">Explore</div>
                    <div className="mt-3 grid gap-2 text-sm">
                        {site.nav.map((item) => (
                            <Link key={item.href} href={item.href} className="text-[#475569] hover:text-black">
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>

                <div>
                    <div className="text-sm font-semibold text-[#0b0f1f]">Contact</div>
                    <p className="mt-3 text-sm text-[#475569]">
                        Start with a pilot, launch in weeks, and scale across departments with unified data.
                    </p>
                    <p className="mt-3 text-sm text-[#475569]">
                        Email: <span className="text-[#0b0f1f]">{site.contactEmail}</span>
                    </p>
                    <p className="mt-2 text-sm text-[#475569]">Headquartered in India</p>
                </div>
            </div>

            <div className="border-t border-white/30 py-4">
                <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-4 text-xs text-[#64748b]">
                    <span>© {new Date().getFullYear()} AIAAS Simplified Pvt Ltd. All rights reserved.</span>
                    <span>Privacy • Terms • Accessibility</span>
                </div>
            </div>
        </footer>
    );
}
