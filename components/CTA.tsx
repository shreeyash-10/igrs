import Link from "next/link";

export default function CTA({
    title,
    description,
}: {
    title: string;
    description: string;
}) {
    return (
        <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <div className="text-xl font-semibold">{title}</div>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-600">
                        {description}
                    </p>
                </div>
                <div className="flex gap-2">
                    <Link
                        href="/contact"
                        className="rounded-full border px-5 py-2.5 text-sm font-medium hover:bg-gray-50"
                    >
                        Request demo
                    </Link>
                    <Link
                        href="/government"
                        className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-900"
                    >
                        Government fit
                    </Link>
                </div>
            </div>
        </div>
    );
}
