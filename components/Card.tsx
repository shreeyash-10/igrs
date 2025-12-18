export default function Card({
    title,
    description,
    bullets,
}: {
    title: string;
    description: string;
    bullets?: string[];
}) {
    return (
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="text-base font-semibold">{title}</div>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">{description}</p>
            {bullets?.length ? (
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-gray-600">
                    {bullets.map((b) => (
                        <li key={b}>{b}</li>
                    ))}
                </ul>
            ) : null}
        </div>
    );
}
