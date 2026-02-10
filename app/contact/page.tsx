import Link from "next/link";
import { site } from "@/lib/site";

const steps = [
    {
        title: "Discovery workshop",
        description: "Map your citizen service workflows, data sources, and service goals.",
    },
    {
        title: "Pilot deployment",
        description: "Launch AIGRS for one department with configured SLAs and channels.",
    },
    {
        title: "Scale statewide",
        description: "Expand to additional services, regions, and leadership dashboards.",
    },
];

const contactModes = [
    "Email: alok@aiaassimplified.com",
    "Strategy calls for leadership teams",
    "Security and compliance briefings",
    "Pilot planning and integration support",
    "Sovereign AI and national LLM roadmap discussions",
];

export default function ContactPage() {
    return (
        <div className="bg-[#f6f7fb]">
            <section className="relative overflow-hidden bg-[#0b0f1f] text-white">
                <div className="absolute inset-0">
                    <div className="absolute left-16 top-8 h-72 w-72 rounded-full bg-gradient-to-tr from-cyan-400/30 via-sky-400/20 to-transparent blur-3xl" />
                    <div className="absolute right-12 bottom-0 h-72 w-72 rounded-full bg-gradient-to-tr from-amber-400/20 via-orange-400/20 to-transparent blur-3xl animate-glow" />
                </div>
                <div className="relative mx-auto max-w-screen-2xl px-4 py-20">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                            Contact
                        </div>
                        <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">
                            Let’s build an AI-first citizen service platform together.
                        </h1>
                        <p className="mt-6 text-base leading-relaxed text-white/80 md:text-lg">
                            Share your program goals and we will design the deployment roadmap, integration plan, and analytics
                            layer that fits your department.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <Link
                                href="mailto:vivek@aiaas.com"
                                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0b0f1f]"
                            >
                                Email the team
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
                        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#64748b]">Engagement</div>
                        <h2 className="mt-4 text-3xl font-semibold text-[#0b0f1f] md:text-4xl">
                            A clear path from pilot to statewide rollout.
                        </h2>
                        <p className="mt-4 text-base leading-relaxed text-[#475569]">
                            We support implementation teams with governance workshops, AI readiness assessments, and training for
                            frontline staff.
                        </p>
                        <div className="mt-6 rounded-3xl border border-[#e2e8f0] bg-white p-6">
                            <div className="text-sm font-semibold text-[#0b0f1f]">How we engage</div>
                            <div className="mt-4 space-y-3">
                                {contactModes.map((item) => (
                                    <div key={item} className="rounded-2xl bg-[#f8fafc] px-4 py-3 text-sm text-[#0b0f1f]">
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="grid gap-4">
                        {steps.map((step, index) => (
                            <div
                                key={step.title}
                                className="rounded-3xl border border-[#e2e8f0] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
                            >
                                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#64748b]">
                                    Step {index + 1}
                                </div>
                                <div className="mt-3 text-lg font-semibold text-[#0b0f1f]">{step.title}</div>
                                <p className="mt-3 text-sm text-[#475569]">{step.description}</p>
                            </div>
                        ))}
                        <div className="rounded-3xl bg-gradient-to-br from-[#0b0f1f] via-[#0f172a] to-[#1e293b] p-6 text-white">
                            <div className="text-sm font-semibold">Direct contact</div>
                            <div className="mt-2 text-sm text-white/70">{site.contactEmail}</div>
                            <div className="mt-4 text-xs text-white/60">Share your department goals to start the pilot plan.</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-screen-2xl px-4 pb-20">
                <div className="rounded-3xl bg-white px-10 py-12 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
                    <div className="grid items-center gap-6 md:grid-cols-[1.2fr_0.8fr]">
                        <div>
                            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#64748b]">Ready to begin</div>
                            <h2 className="mt-4 text-3xl font-semibold text-[#0b0f1f] md:text-4xl">
                                Bring AI-first grievance redressal to your department.
                            </h2>
                            <p className="mt-4 text-base text-[#475569]">
                                We will tailor AIGRS to your workflows, datasets, and citizen communication channels.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-3 md:justify-end">
                            <Link
                                href="mailto:vivek@aiaas.com"
                                className="rounded-full bg-[#0b0f1f] px-6 py-3 text-sm font-semibold text-white"
                            >
                                Email now
                            </Link>
                            <Link
                                href="/government"
                                className="rounded-full border border-[#e2e8f0] px-6 py-3 text-sm font-semibold text-[#0b0f1f]"
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
