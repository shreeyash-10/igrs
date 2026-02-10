import Image from "next/image";
import Link from "next/link";

const coreModules = [
    {
        title: "Intake + Triage",
        description: "Multilingual case capture, AI-assisted categorization, and instant routing to the right desk.",
    },
    {
        title: "Workflow Orchestration",
        description: "Configurable SLAs, escalations, and audit-ready task trails across departments.",
    },
    {
        title: "Omnichannel Citizen Care",
        description: "WhatsApp, IVR, chat, web, mobile, kiosks, and email unified in one timeline.",
    },
    {
        title: "Decision Intelligence",
        description: "Dashboards for backlog, root-cause analysis, and policy impact measurement.",
    },
    {
        title: "Knowledge + Policy",
        description: "AI knowledge bases that power accurate responses and consistent policy guidance.",
    },
    {
        title: "Integration Fabric",
        description: "Open APIs and connectors for legacy systems, CRMs, and departmental databases.",
    },
];

const channels = [
    "WhatsApp",
    "IVR / Voice",
    "SMS",
    "Web Portals",
    "Mobile Apps",
    "Chatbots",
    "Email",
    "Kiosks",
];

const analytics = [
    {
        title: "Resolution Velocity",
        description: "Track time-to-resolution, SLA adherence, and team performance in real time.",
    },
    {
        title: "Citizen Sentiment",
        description: "Surface sentiment shifts and recurring issues to guide proactive interventions.",
    },
    {
        title: "Geospatial Insights",
        description: "Map grievances by district, ward, or service center to identify hotspots quickly.",
    },
    {
        title: "Policy Impact",
        description: "Measure outcomes for schemes, subsidies, and public programs with cohort views.",
    },
    {
        title: "Sovereign AI readiness",
        description: "Prepare data, governance, and evaluation pipelines aligned to India’s own LLM roadmap.",
    },
];

const cpgramsAlignment = [
    "Online registration and acknowledgement for citizen grievances",
    "Routing and escalation across departments and offices",
    "Status tracking, monitoring, and feedback loops",
    "Audit trails for review and compliance readiness",
];

export default function ProductPage() {
    return (
        <div className="bg-[#f6f7fb]">
            <section className="relative overflow-hidden bg-[#0b0f1f] text-white">
                <div className="absolute inset-0">
                    <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-gradient-to-tr from-emerald-400/40 via-cyan-400/20 to-transparent blur-3xl" />
                    <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-gradient-to-tr from-amber-400/30 via-orange-400/20 to-transparent blur-3xl animate-glow" />
                </div>

                <div className="relative mx-auto grid max-w-screen-2xl gap-10 px-4 py-20 md:grid-cols-[1.05fr_0.95fr]">
                    <div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                            AIGRS Platform
                        </div>
                        <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">
                            AI Grievance Redressal Integrated Platform.
                        </h1>
                        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
                            AIGRS unifies citizen intake, workflow automation, and analytics so government teams can resolve
                            grievances faster, improve transparency, and deliver measurable outcomes.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <Link
                                href="/contact"
                                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0b0f1f]"
                            >
                                Request a demo
                            </Link>
                            <Link
                                href="/government"
                                className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white"
                            >
                                See government fit
                            </Link>
                        </div>
                    </div>

                    <div className="relative rounded-3xl border border-white/15 bg-white/10 p-6 shadow-2xl">
                        <div className="flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white">
                                <Image src="/logo-aiaas.png" alt="AiAAS Simplified" width={36} height={36} />
                            </div>
                            <div>
                                <div className="text-sm font-semibold">Omnichannel + Analytics</div>
                                <div className="text-xs text-white/70">Built for public service delivery teams</div>
                            </div>
                        </div>
                        <div className="mt-6 space-y-3">
                            {coreModules.slice(0, 3).map((module) => (
                                <div
                                    key={module.title}
                                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                                >
                                    <div className="text-sm font-semibold">{module.title}</div>
                                    <div className="mt-2 text-xs text-white/70">{module.description}</div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 rounded-2xl bg-white/10 p-4 text-xs text-white/70">
                            Launch pilots in weeks with configurable workflows and secure integrations.
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-screen-2xl px-4 py-16">
                <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
                    <div>
                        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#64748b]">Core Modules</div>
                        <h2 className="mt-4 text-3xl font-semibold text-[#0b0f1f] md:text-4xl">
                            Everything required to run grievance programs at scale.
                        </h2>
                        <p className="mt-4 text-base leading-relaxed text-[#475569]">
                            AIGRS is designed for modern public service delivery with a unified stack spanning intake, workflows,
                            communication, analytics, and system integrations.
                        </p>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                        {coreModules.map((module) => (
                            <div
                                key={module.title}
                                className="rounded-3xl border border-[#e2e8f0] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
                            >
                                <div className="text-lg font-semibold text-[#0b0f1f]">{module.title}</div>
                                <p className="mt-3 text-sm leading-relaxed text-[#475569]">{module.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-white">
                <div className="mx-auto max-w-screen-2xl px-4 py-16">
                    <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
                        <div>
                            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#64748b]">
                                Alignment with National Programs
                            </div>
                            <h2 className="mt-4 text-3xl font-semibold text-[#0b0f1f] md:text-4xl">
                                Designed to align with CPGRAMS-style grievance workflows.
                            </h2>
                            <p className="mt-4 text-base leading-relaxed text-[#475569]">
                                Central and state grievance systems such as CPGRAMS emphasize online registration, monitoring,
                                and feedback. AIGRS mirrors these workflows while adding AI automation and omnichannel reach.
                            </p>
                            <div className="mt-6 grid gap-3 sm:grid-cols-2">
                                {cpgramsAlignment.map((item) => (
                                    <div key={item} className="rounded-2xl border border-[#e2e8f0] bg-[#f8fafc] p-4">
                                        <div className="text-sm font-semibold text-[#0b0f1f]">{item}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-3xl border border-[#e2e8f0] bg-gradient-to-br from-[#ecfeff] via-white to-[#fef3c7] p-6 shadow-[0_30px_60px_rgba(15,23,42,0.08)]">
                            <div className="text-sm font-semibold text-[#0b0f1f]">Omnichannel Stack</div>
                            <p className="mt-3 text-sm text-[#475569]">
                                Reach citizens on their preferred channel while maintaining a single source of truth.
                            </p>
                            <div className="mt-6 flex flex-wrap gap-2">
                                {channels.map((channel) => (
                                    <span
                                        key={channel}
                                        className="rounded-full border border-[#e2e8f0] bg-white px-3 py-1 text-xs font-semibold text-[#0b0f1f]"
                                    >
                                        {channel}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-screen-2xl px-4 py-16">
                <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
                    <div>
                        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#64748b]">Analytics</div>
                        <h2 className="mt-4 text-3xl font-semibold text-[#0b0f1f] md:text-4xl">
                            Actionable intelligence for every level of government.
                        </h2>
                        <p className="mt-4 text-base leading-relaxed text-[#475569]">
                            Combine grievance data, citizen feedback, and operational performance to inform policy decisions and
                            improve service delivery outcomes.
                        </p>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                        {analytics.map((item) => (
                            <div key={item.title} className="rounded-3xl border border-[#e2e8f0] bg-white p-6">
                                <div className="text-base font-semibold text-[#0b0f1f]">{item.title}</div>
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
                            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Start a pilot</div>
                            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Launch AIGRS in weeks, scale across departments.</h2>
                            <p className="mt-4 text-base text-white/70">
                                We handle onboarding, integrations, and analytics so your teams can focus on citizen outcomes.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-3 md:justify-end">
                            <Link
                                href="/contact"
                                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0b0f1f]"
                            >
                                Talk to the team
                            </Link>
                            <Link
                                href="/use-cases"
                                className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white"
                            >
                                Explore use cases
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
