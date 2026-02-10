import Link from "next/link";

const capabilities = [
    {
        title: "Unified citizen record",
        description: "A single, auditable timeline across channels, departments, and field operations.",
    },
    {
        title: "AI-assisted resolution",
        description: "Suggested next-best actions, auto-routing, and response drafting for faster closure.",
    },
    {
        title: "Department dashboards",
        description: "Live service health, backlog, and escalation monitoring by region and category.",
    },
    {
        title: "Policy feedback loops",
        description: "Convert grievances into structured insights for program improvement.",
    },
    {
        title: "Field-ready workflows",
        description: "Offline-first mobile workflows for inspections, visits, and follow-ups.",
    },
    {
        title: "Secure data control",
        description: "Role-based access, audit trails, and deployment options for sovereign environments.",
    },
];

const serviceOutcomes = [
    "Faster grievance acknowledgement and routing",
    "Clear escalation ownership for complex cases",
    "Consistent communication across channels",
    "Data-backed policy and resource allocation",
    "Improved transparency and citizen trust",
    "Regional and departmental performance comparisons",
];

const deployment = [
    {
        title: "Cloud or On-Prem",
        description: "Deploy on government cloud, private data centers, or hybrid infrastructure.",
    },
    {
        title: "Integration ready",
        description: "Connect with existing portals, CRMs, and state service platforms.",
    },
    {
        title: "AI governance",
        description: "Human-in-the-loop controls and explainable AI outputs for accountability.",
    },
    {
        title: "Sovereign AI roadmap",
        description: "Collaborations with government think tanks to shape India’s own proud AI LLM program.",
    },
];

export default function GovernmentFitPage() {
    return (
        <div className="bg-[#f6f7fb]">
            <section className="relative overflow-hidden bg-[#0b0f1f] text-white">
                <div className="absolute inset-0">
                    <div className="absolute left-1/4 top-10 h-72 w-72 rounded-full bg-gradient-to-tr from-sky-400/25 via-emerald-400/20 to-transparent blur-3xl" />
                    <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-gradient-to-tr from-amber-400/20 via-orange-400/20 to-transparent blur-3xl animate-float" />
                </div>

                <div className="relative mx-auto max-w-screen-2xl px-4 py-20">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                            Government-Ready Platform
                        </div>
                        <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">
                            AIGRS for ministries, departments, and public service agencies.
                        </h1>
                        <p className="mt-6 text-base leading-relaxed text-white/80 md:text-lg">
                            Deliver citizen-centric services with AI-assisted workflows, omnichannel communication, and real-time
                            analytics that meet the operational reality of government teams.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <Link
                                href="/contact"
                                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0b0f1f]"
                            >
                                Plan a pilot
                            </Link>
                            <Link
                                href="/product"
                                className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white"
                            >
                                Explore AIGRS
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-screen-2xl px-4 py-16">
                <div className="grid gap-8 md:grid-cols-[0.95fr_1.05fr]">
                    <div>
                        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#64748b]">Capabilities</div>
                        <h2 className="mt-4 text-3xl font-semibold text-[#0b0f1f] md:text-4xl">
                            Built for high-volume citizen services and cross-department coordination.
                        </h2>
                        <p className="mt-4 text-base leading-relaxed text-[#475569]">
                            AIGRS helps teams improve responsiveness while keeping every interaction traceable and measurable.
                        </p>
                        <div className="mt-6 rounded-3xl border border-[#e2e8f0] bg-white p-6">
                            <div className="text-sm font-semibold text-[#0b0f1f]">Service outcomes</div>
                            <div className="mt-4 grid gap-3 sm:grid-cols-2">
                                {serviceOutcomes.map((item) => (
                                    <div key={item} className="rounded-2xl bg-[#f8fafc] px-4 py-3 text-sm text-[#0b0f1f]">
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                        {capabilities.map((item) => (
                            <div
                                key={item.title}
                                className="rounded-3xl border border-[#e2e8f0] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
                            >
                                <div className="text-lg font-semibold text-[#0b0f1f]">{item.title}</div>
                                <p className="mt-3 text-sm text-[#475569]">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-white">
                <div className="mx-auto max-w-screen-2xl px-4 py-16">
                    <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
                        <div>
                            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#64748b]">Deployment</div>
                            <h2 className="mt-4 text-3xl font-semibold text-[#0b0f1f] md:text-4xl">
                                Flexible deployment with sovereignty controls.
                            </h2>
                            <p className="mt-4 text-base leading-relaxed text-[#475569]">
                                Deploy AIGRS in the environment that fits your data residency, security policy, and operational
                                needs while maintaining full visibility into AI decisions.
                            </p>
                            <div className="mt-6 rounded-2xl border border-[#e2e8f0] bg-[#f8fafc] p-5">
                                <div className="text-sm font-semibold text-[#0b0f1f]">Sovereign AI collaboration</div>
                                <p className="mt-2 text-sm text-[#475569]">
                                    We partner with government think tanks and research bodies to co-design India’s AI foundation
                                    model roadmap and responsible adoption frameworks.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            {deployment.map((item) => (
                                <div key={item.title} className="rounded-2xl border border-[#e2e8f0] bg-[#f8fafc] p-5">
                                    <div className="text-sm font-semibold text-[#0b0f1f]">{item.title}</div>
                                    <p className="mt-2 text-sm text-[#475569]">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-screen-2xl px-4 pb-20">
                <div className="rounded-3xl bg-gradient-to-br from-[#0b0f1f] via-[#0f172a] to-[#1e293b] px-10 py-12 text-white">
                    <div className="grid items-center gap-6 md:grid-cols-[1.2fr_0.8fr]">
                        <div>
                            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Next steps</div>
                            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Let’s modernize citizen service delivery.</h2>
                            <p className="mt-4 text-base text-white/70">
                                Share your program goals and we will craft a tailored deployment roadmap.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-3 md:justify-end">
                            <Link
                                href="/contact"
                                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0b0f1f]"
                            >
                                Schedule a workshop
                            </Link>
                            <Link
                                href="/use-cases"
                                className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white"
                            >
                                View use cases
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
