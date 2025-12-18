export default function Section({
    eyebrow,
    title,
    description,
    children,
}: {
    eyebrow?: string;
    title: string;
    description?: string;
    children?: React.ReactNode;
}) {
    return (
        <section className="py-14">
            <div className="mx-auto max-w-screen-2xl px-4">
                {eyebrow && (
                    <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                        {eyebrow}
                    </div>
                )}
                <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
                    {title}
                </h2>
                {description && (
                    <p className="mt-3 max-w-3xl text-base leading-relaxed text-gray-600">
                        {description}
                    </p>
                )}
                {children && <div className="mt-8">{children}</div>}
            </div>
        </section>
    );
}
