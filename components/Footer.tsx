import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
    return (
        <footer className="border-t bg-white">
            <div className="mx-auto grid max-w-screen-2xl gap-8 px-4 py-10 md:grid-cols-3">
                <div>
                    <div className="text-sm font-semibold">{site.name}</div>
                    <p className="mt-2 text-sm text-gray-600">
                        {site.product} for Government Departments and Public Enterprises.
                        Omnichannel citizen support with real-time voice call IGRS.
                    </p>
                </div>

                <div>
                    <div className="text-sm font-semibold">Pages</div>
                    <div className="mt-2 grid gap-2 text-sm">
                        {site.nav.map((item) => (
                            <Link key={item.href} href={item.href} className="text-gray-600 hover:text-black">
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>

                <div>
                    <div className="text-sm font-semibold">Contact</div>
                    <p className="mt-2 text-sm text-gray-600">
                        For pilots, deployments, and onboarding:
                    </p>
                    <p className="mt-2 text-sm text-gray-600">
                        Email: <span className="text-gray-900">contact@aiaas-simplified.com</span>
                    </p>
                    <p className="mt-1 text-sm text-gray-600">
                        India • Government-ready deployments
                    </p>
                </div>
            </div>

            <div className="border-t py-4">
                <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-4 text-xs text-gray-500">
                    <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
                    <span>Privacy • Terms</span>
                </div>
            </div>
        </footer>
    );
}
