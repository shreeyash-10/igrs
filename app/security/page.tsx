import Link from "next/link";

const securityPillars = [
    {
        title: "Role-based access control",
        description: "Granular permissions and least-privilege policies across teams and departments.",
    },
    {
        title: "Audit-ready trails",
        description: "End-to-end traceability for every citizen interaction and AI-assisted action.",
    },
    {
        title: "Data residency controls",
        description: "Deploy in sovereign environments with configurable data storage and processing zones.",
    },
    {
        title: "Encryption & key management",
        description: "Protect sensitive data in transit and at rest with configurable key policies.",
    },
    {
        title: "Model governance",
        description: "Human-in-the-loop approvals, explainability, and override workflows.",
    },
    {
        title: "Observability",
        description: "Continuous monitoring, anomaly detection, and policy-aligned alerts.",
    },
];

const governance = [
    {
        title: "Human accountability",
        description: "Every AI recommendation is traceable and can be accepted, edited, or rejected by staff.",
    },
    {
        title: "Bias and quality checks",
        description: "Evaluation workflows detect drift, bias, and inconsistent responses.",
    },
    {
        title: "Policy alignment",
        description: "Knowledge bases are curated with approved policy content and escalation rules.",
    },
    {
        title: "Sovereign model readiness",
        description: "Evaluation and governance standards aligned to India’s emerging LLM programs.",
    },
];

export default function SecurityPage() {
    return (
        <div className="bg-[#f6f7fb]">
            <section className="relative overflow-hidden bg-[#0b0f1f] text-white">
                <div className="absolute inset-0">
                    <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-gradient-to-tr from-emerald-400/30 via-sky-400/20 to-transparent blur-3xl" />
                    <div className="absolute right-12 bottom-0 h-72 w-72 rounded-full bg-gradient-to-tr from-amber-400/20 via-orange-400/20 to-transparent blur-3xl animate-float" />
                </div>

                <div className="relative mx-auto max-w-screen-2xl px-4 py-20">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                            Security & Governance
                        </div>
                        <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">
                            Built for trust, accountability, and public sector compliance.
                        </h1>
                        <p className="mt-6 text-base leading-relaxed text-white/80 md:text-lg">
                            AIGRS embeds security and AI governance at every layer to protect citizen data and ensure transparent
                            decision-making.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <Link
                                href="/contact"
                                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0b0f1f]"
                            >
                                Request security brief
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
                        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#64748b]">Security pillars</div>
                        <h2 className="mt-4 text-3xl font-semibold text-[#0b0f1f] md:text-4xl">
                            Defense-in-depth for citizen data and operational workflows.
                        </h2>
                        <p className="mt-4 text-base leading-relaxed text-[#475569]">
                            From access controls to audit trails, every action is secured and visible to authorized teams.
                        </p>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                        {securityPillars.map((item) => (
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
                    <div className="grid gap-8 md:grid-cols-3">
                        {governance.map((item) => (
                            <div key={item.title} className="rounded-3xl border border-[#e2e8f0] bg-white p-6">
                                <div className="text-lg font-semibold text-[#0b0f1f]">{item.title}</div>
                                <p className="mt-3 text-sm text-[#475569]">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-screen-2xl px-4 pb-20">
                <div className="rounded-3xl bg-gradient-to-br from-[#0b0f1f] via-[#0f172a] to-[#1e293b] px-10 py-12 text-white">
                    <div className="grid items-center gap-6 md:grid-cols-[1.2fr_0.8fr]">
                        <div>
                            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Trusted by design</div>
                            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Deploy AI that citizens and regulators trust.</h2>
                            <p className="mt-4 text-base text-white/70">
                                We work with your security teams to align deployment with departmental policies.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-3 md:justify-end">
                            <Link
                                href="/contact"
                                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0b0f1f]"
                            >
                                Schedule a review
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
