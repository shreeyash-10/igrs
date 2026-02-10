import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

const pillars = [
    {
        title: "AI Orchestration Layer",
        description:
            "Unified model routing, workflow automation, and service logic that makes every interaction intelligent and compliant.",
    },
    {
        title: "Omnichannel Service Cloud",
        description:
            "Voice, WhatsApp, web, mobile, email, and kiosks stitched into a single citizen journey with shared context.",
    },
    {
        title: "Decision Intelligence",
        description:
            "Real-time analytics, grievance trend forecasting, and policy insights to improve outcomes across departments.",
    },
];

const aiGrsHighlights = [
    "Case intake in multiple Indian languages with speech-to-text and intent detection",
    "Auto-routing, SLA tracking, and escalation workflows across departments",
    "Citizen notifications via SMS, WhatsApp, email, IVR, and chatbot",
    "Audit-ready records, role-based access, and data residency controls",
];

const useCases = [
    "Grievance redressal & public service desks",
    "Citizen helplines & multilingual voice assistants",
    "Scheme enrollment, verification, and status tracking",
    "Regulatory inspections and compliance reporting",
    "Field operations with offline-first mobile workflows",
    "Ministerial dashboards for outcome visibility",
];

const analytics = [
    {
        title: "Service Health",
        description: "SLA adherence, backlog heatmaps, and resolution velocity by department.",
    },
    {
        title: "Sentiment & Intent",
        description: "Track citizen sentiment shifts and surface recurring grievance themes.",
    },
    {
        title: "Outcome Intelligence",
        description: "Measure policy impact with cohort-based insights and geography filters.",
    },
];

const stack = [
    {
        label: "Security & Compliance",
        value: "Role-based access, audit trails, and data residency by design",
    },
    {
        label: "Deployment",
        value: "Cloud, on-prem, or hybrid with sovereign infrastructure options",
    },
    {
        label: "Integration",
        value: "Open APIs, legacy system connectors, and ETL-ready data exports",
    },
    {
        label: "Sovereign AI Roadmap",
        value: "India-first foundation models with public sector governance, auditability, and local data stewardship",
    },
];

export default function HomePage() {
    return (
        <div className="bg-[#f6f7fb]">
            <section className="relative overflow-hidden bg-[#0b0f1f] text-white">
                <div className="absolute inset-0">
                    <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-gradient-to-tr from-emerald-400/40 via-cyan-400/20 to-transparent blur-3xl" />
                    <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-gradient-to-tr from-amber-400/30 via-orange-400/20 to-transparent blur-3xl animate-glow" />
                    <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-gradient-to-tr from-sky-400/20 via-teal-400/20 to-transparent blur-3xl animate-float" />
                </div>

                <div className="relative mx-auto grid max-w-screen-2xl gap-12 px-4 py-20 md:grid-cols-[1.15fr_0.85fr] md:py-28">
                    <div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                            AI-First Public Service Platforms
                        </div>
                        <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">
                            World-class AI infrastructure for government service delivery.
                        </h1>
                        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
                            {site.name} delivers citizen-facing AI products and analytics platforms that modernize grievance
                            redressal, service delivery, and departmental decision-making.
                        </p>
                        <p className="mt-3 text-sm text-white/60">{site.brand}</p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <Link
                                href="/product"
                                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0b0f1f] shadow-lg shadow-white/10"
                            >
                                Explore AIGRS
                            </Link>
                            <Link
                                href="/contact"
                                className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
                            >
                                Book a strategy call
                            </Link>
                        </div>

                        <div className="mt-10 grid gap-4 sm:grid-cols-2">
                            <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
                                <div className="text-sm font-semibold">Omnichannel-first</div>
                                <div className="mt-2 text-sm text-white/70">
                                    WhatsApp, IVR, web, mobile, kiosks, and email with a single citizen record.
                                </div>
                            </div>
                            <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
                                <div className="text-sm font-semibold">Analytics at the core</div>
                                <div className="mt-2 text-sm text-white/70">
                                    Live dashboards, trend analysis, and decision intelligence for policymakers.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -right-10 -top-10 h-28 w-28 rounded-2xl bg-white/10 blur-2xl" />
                        <div className="relative rounded-3xl border border-white/15 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 shadow-2xl">
                            <div className="flex items-center gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white">
                                    <Image src="/logo-aiaas.png" alt="AiAAS Simplified" width={36} height={36} />
                                </div>
                                <div>
                                    <div className="text-sm font-semibold">AIGRS Platform</div>
                                    <div className="text-xs text-white/70">AI Grievance Redressal Integrated Platform</div>
                                </div>
                            </div>

                            <div className="mt-6 space-y-4">
                                {aiGrsHighlights.map((item) => (
                                    <div
                                        key={item}
                                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 rounded-2xl bg-white/10 p-4">
                                <div className="text-xs uppercase tracking-[0.2em] text-white/60">Deployment Ready</div>
                                <div className="mt-2 text-sm text-white/80">
                                    Launch pilots in weeks with secure integrations, multilingual knowledge bases, and adaptive workflows.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-screen-2xl px-4 py-16">
                <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
                    <div>
                        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#64748b]">
                            Platform Pillars
                        </div>
                        <h2 className="mt-4 text-3xl font-semibold text-[#0b0f1f] md:text-4xl">
                            A unified AI stack built for scale, trust, and accountability.
                        </h2>
                        <p className="mt-4 text-base leading-relaxed text-[#475569]">
                            AiAAS Simplified combines AI orchestration, citizen engagement, and analytics into a single platform.
                            Every interaction is auditable, measurable, and tailored to public service delivery.
                        </p>

                        <div className="mt-6 rounded-2xl border border-[#e2e8f0] bg-white p-5">
                            {stack.map((item) => (
                                <div key={item.label} className="border-b border-[#e2e8f0] py-4 last:border-b-0">
                                    <div className="text-sm font-semibold text-[#0b0f1f]">{item.label}</div>
                                    <div className="mt-2 text-sm text-[#475569]">{item.value}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                        {pillars.map((pillar) => (
                            <div
                                key={pillar.title}
                                className="rounded-3xl border border-[#e2e8f0] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
                            >
                                <div className="text-lg font-semibold text-[#0b0f1f]">{pillar.title}</div>
                                <p className="mt-3 text-sm leading-relaxed text-[#475569]">{pillar.description}</p>
                            </div>
                        ))}
                        <div className="rounded-3xl bg-gradient-to-br from-[#0b0f1f] via-[#0f172a] to-[#1e293b] p-6 text-white">
                            <div className="text-sm uppercase tracking-[0.2em] text-white/70">AI-First Operating Model</div>
                            <div className="mt-4 text-lg font-semibold">Model governance, human-in-the-loop, and policy alignment.</div>
                            <p className="mt-3 text-sm text-white/70">
                                Built for government departments that need transparency, explainability, and accountable outcomes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white">
                <div className="mx-auto max-w-screen-2xl px-4 py-16">
                    <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr]">
                        <div>
                            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#64748b]">AIGRS Product</div>
                            <h2 className="mt-4 text-3xl font-semibold text-[#0b0f1f] md:text-4xl">
                                Grievance redressal reimagined with AI and omnichannel reach.
                            </h2>
                            <p className="mt-4 text-base leading-relaxed text-[#475569]">
                                AIGRS is an integrated grievance and citizen service platform for government departments. It unifies
                                intake, workflow, resolution, and analytics to improve response times and build public trust.
                            </p>
                            <div className="mt-6 grid gap-4 sm:grid-cols-2">
                                {aiGrsHighlights.map((item) => (
                                    <div key={item} className="rounded-2xl border border-[#e2e8f0] bg-[#f8fafc] p-4">
                                        <div className="text-sm font-semibold text-[#0b0f1f]">{item}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-3xl border border-[#e2e8f0] bg-gradient-to-br from-[#fef3c7] via-white to-[#ecfeff] p-6 shadow-[0_30px_60px_rgba(15,23,42,0.08)]">
                            <div className="text-sm font-semibold text-[#0b0f1f]">Citizen Experience Layer</div>
                            <p className="mt-3 text-sm text-[#475569]">
                                A single interface for citizens, call center teams, and field officers, with shared context and
                                automated next-best actions.
                            </p>
                            <div className="mt-6 space-y-4">
                                <div className="rounded-2xl bg-white p-4 shadow-sm">
                                    <div className="text-xs uppercase tracking-[0.2em] text-[#64748b]">Omnichannel Stack</div>
                                    <div className="mt-2 text-sm text-[#0b0f1f]">Voice, WhatsApp, chat, web, SMS, IVR</div>
                                </div>
                                <div className="rounded-2xl bg-white p-4 shadow-sm">
                                    <div className="text-xs uppercase tracking-[0.2em] text-[#64748b]">Workflow Engine</div>
                                    <div className="mt-2 text-sm text-[#0b0f1f]">SLA routing, escalation, and automated compliance checks</div>
                                </div>
                                <div className="rounded-2xl bg-white p-4 shadow-sm">
                                    <div className="text-xs uppercase tracking-[0.2em] text-[#64748b]">Analytics Fabric</div>
                                    <div className="mt-2 text-sm text-[#0b0f1f]">Trend detection, anomaly alerts, and policy insights</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-screen-2xl px-4 py-16">
                <div className="grid gap-6 md:grid-cols-[0.85fr_1.15fr]">
                    <div>
                        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#64748b]">Analytics Suite</div>
                        <h2 className="mt-4 text-3xl font-semibold text-[#0b0f1f] md:text-4xl">
                            Insight-rich dashboards for faster, smarter public decisions.
                        </h2>
                        <p className="mt-4 text-base leading-relaxed text-[#475569]">
                            Track performance across districts, departments, and service programs in one view. AIGRS analytics
                            surfaces what is working, what is blocked, and where to intervene.
                        </p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-3">
                        {analytics.map((item) => (
                            <div key={item.title} className="rounded-3xl border border-[#e2e8f0] bg-white p-5">
                                <div className="text-base font-semibold text-[#0b0f1f]">{item.title}</div>
                                <p className="mt-3 text-sm text-[#475569]">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[#0b0f1f] text-white">
                <div className="mx-auto max-w-screen-2xl px-4 py-16">
                    <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr]">
                        <div>
                            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Use Cases</div>
                            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Mission-ready AI for every department.</h2>
                            <p className="mt-4 text-base leading-relaxed text-white/70">
                                From grievance redressal to citizen assistance, AiAAS Simplified adapts to the operational reality of
                                government teams with configurable workflows and multilingual support.
                            </p>
                        </div>
                        <div className="grid gap-3 sm:grid-cols-2">
                            {useCases.map((item) => (
                                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm">
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-screen-2xl px-4 py-16">
                <div className="rounded-3xl border border-[#e2e8f0] bg-gradient-to-br from-white via-[#f8fafc] to-[#e0f2fe] p-10 shadow-[0_35px_80px_rgba(15,23,42,0.08)]">
                    <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
                        <div>
                            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#64748b]">Why AiAAS</div>
                            <h2 className="mt-4 text-3xl font-semibold text-[#0b0f1f] md:text-4xl">
                                AI-first services that are secure, scalable, and citizen-centric.
                            </h2>
                            <p className="mt-4 text-base leading-relaxed text-[#475569]">
                                We combine product design, public sector expertise, and AI engineering to deliver platforms that
                                government departments can trust.
                            </p>
                            <div className="mt-6 rounded-2xl border border-[#e2e8f0] bg-white p-5">
                                <div className="text-sm font-semibold text-[#0b0f1f]">Sovereign AI program</div>
                                <p className="mt-2 text-sm text-[#475569]">
                                    Collaborating with government think tanks and research partners to build India’s own proud AI LLM
                                    roadmap with transparency, multilingual coverage, and policy-aligned safeguards.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="rounded-2xl bg-white p-5 shadow-sm">
                                <div className="text-sm font-semibold text-[#0b0f1f]">Deployment in weeks</div>
                                <p className="mt-2 text-sm text-[#475569]">Rapid onboarding with configurable workflows and data migration.</p>
                            </div>
                            <div className="rounded-2xl bg-white p-5 shadow-sm">
                                <div className="text-sm font-semibold text-[#0b0f1f]">Audit-ready by default</div>
                                <p className="mt-2 text-sm text-[#475569]">Full traceability across AI decisions and human overrides.</p>
                            </div>
                            <div className="rounded-2xl bg-white p-5 shadow-sm">
                                <div className="text-sm font-semibold text-[#0b0f1f]">Designed for India</div>
                                <p className="mt-2 text-sm text-[#475569]">Multilingual models, regional workflows, and India-first infrastructure.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-screen-2xl px-4 pb-20">
                <div className="rounded-3xl bg-[#0b0f1f] px-10 py-12 text-white">
                    <div className="grid items-center gap-6 md:grid-cols-[1.2fr_0.8fr]">
                        <div>
                            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Let’s build together</div>
                            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                                Ready to deliver AI-first public services at scale?
                            </h2>
                            <p className="mt-4 text-base text-white/70">
                                Book a demo to explore AIGRS, the analytics suite, and our omnichannel communication stack.
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
                                href="/product"
                                className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white"
                            >
                                View platform overview
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
