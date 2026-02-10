import Link from "next/link";

const sectors = [
    {
        title: "Citizen grievance redressal",
        description: "End-to-end intake, triage, and resolution with traceable workflows.",
    },
    {
        title: "Public health services",
        description: "Appointments, grievance handling, and patient support with multilingual assistance.",
    },
    {
        title: "Urban services",
        description: "Water, sanitation, transport, and civic issue tracking with field ops routing.",
    },
    {
        title: "Education services",
        description: "Scholarship, admissions, and complaints workflow automation.",
    },
    {
        title: "Revenue & tax",
        description: "Compliance queries, dispute resolution, and status updates across channels.",
    },
    {
        title: "Social welfare",
        description: "Scheme eligibility, benefit disbursement issues, and grievance tracking.",
    },
];

const journeys = [
    {
        title: "Single citizen timeline",
        description: "Every interaction across WhatsApp, IVR, web, and field visits is recorded and searchable.",
    },
    {
        title: "AI-guided resolution",
        description: "Teams receive suggested responses and routing to reduce turnaround time.",
    },
    {
        title: "Leadership oversight",
        description: "Dashboards surface bottlenecks, regional hotspots, and systemic failures early.",
    },
];

const outcomes = [
    "Greater transparency with auditable case trails",
    "Higher citizen satisfaction through faster updates",
    "Reduced backlog with automated routing",
    "Cross-department collaboration in a single workspace",
    "Actionable insights for policy interventions",
    "Inclusive access across regional languages",
    "Sovereign AI readiness for India-first models",
];

export default function UseCasesPage() {
    return (
        <div className="bg-[#f6f7fb]">
            <section className="relative overflow-hidden bg-[#0b0f1f] text-white">
                <div className="absolute inset-0">
                    <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-gradient-to-tr from-teal-400/30 via-sky-400/20 to-transparent blur-3xl" />
                    <div className="absolute right-10 bottom-0 h-72 w-72 rounded-full bg-gradient-to-tr from-fuchsia-400/20 via-purple-400/20 to-transparent blur-3xl animate-glow" />
                </div>
                <div className="relative mx-auto max-w-screen-2xl px-4 py-20">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                            Use Cases
                        </div>
                        <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">
                            AI-first workflows for every public service journey.
                        </h1>
                        <p className="mt-6 text-base leading-relaxed text-white/80 md:text-lg">
                            AIGRS adapts to the needs of central, state, and local government teams with configurable workflows and
                            omnichannel citizen support.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <Link
                                href="/contact"
                                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0b0f1f]"
                            >
                                Start a pilot
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
                <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
                    <div>
                        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#64748b]">Public sector focus</div>
                        <h2 className="mt-4 text-3xl font-semibold text-[#0b0f1f] md:text-4xl">
                            Configurable for ministries, departments, and service agencies.
                        </h2>
                        <p className="mt-4 text-base leading-relaxed text-[#475569]">
                            Use AIGRS to unify citizen support, internal workflows, and analytics across diverse service areas.
                        </p>
                        <div className="mt-6 rounded-3xl border border-[#e2e8f0] bg-white p-6">
                            <div className="text-sm font-semibold text-[#0b0f1f]">Expected outcomes</div>
                            <div className="mt-4 grid gap-3 sm:grid-cols-2">
                                {outcomes.map((item) => (
                                    <div key={item} className="rounded-2xl bg-[#f8fafc] px-4 py-3 text-sm text-[#0b0f1f]">
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                        {sectors.map((sector) => (
                            <div
                                key={sector.title}
                                className="rounded-3xl border border-[#e2e8f0] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
                            >
                                <div className="text-lg font-semibold text-[#0b0f1f]">{sector.title}</div>
                                <p className="mt-3 text-sm text-[#475569]">{sector.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-white">
                <div className="mx-auto max-w-screen-2xl px-4 py-16">
                    <div className="mb-10 rounded-3xl border border-[#e2e8f0] bg-gradient-to-br from-[#ecfeff] via-white to-[#fef3c7] p-6">
                        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#64748b]">
                            Sovereign AI Focus
                        </div>
                        <h2 className="mt-3 text-2xl font-semibold text-[#0b0f1f] md:text-3xl">
                            Collaborating with government think tanks on India’s own proud AI LLM roadmap.
                        </h2>
                        <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                            AIGRS data pipelines and governance workflows are designed to plug into national AI programs,
                            enabling safe, explainable, and locally governed models for public service delivery.
                        </p>
                    </div>
                    <div className="grid gap-8 md:grid-cols-3">
                        {journeys.map((item) => (
                            <div key={item.title} className="rounded-3xl border border-[#e2e8f0] bg-white p-6">
                                <div className="text-lg font-semibold text-[#0b0f1f]">{item.title}</div>
                                <p className="mt-3 text-sm text-[#475569]">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-screen-2xl px-4 pb-20">
                <div className="rounded-3xl bg-[#0b0f1f] px-10 py-12 text-white">
                    <div className="grid items-center gap-6 md:grid-cols-[1.2fr_0.8fr]">
                        <div>
                            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Move faster</div>
                            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Turn citizen feedback into measurable outcomes.</h2>
                            <p className="mt-4 text-base text-white/70">Deploy AIGRS for one department, then scale statewide.</p>
                        </div>
                        <div className="flex flex-wrap gap-3 md:justify-end">
                            <Link
                                href="/contact"
                                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0b0f1f]"
                            >
                                Talk to our team
                            </Link>
                            <Link
                                href="/government"
                                className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white"
                            >
                                Government fit
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
