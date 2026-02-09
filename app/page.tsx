import Link from "next/link";
import Section from "@/components/Section";
import Card from "@/components/Card";
import Stat from "@/components/Stat";
import CTA from "@/components/CTA";
import { site } from "@/lib/site";

export default function HomePage() {
    return (
        <div>
            <div className="border-b">
                <div className="mx-auto max-w-screen-2xl px-4 py-16 md:py-20">
                    <div className="max-w-4xl">
                        <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                            Pre-Seed Round • Jan 2026
                        </div>
                        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                            The AI Orchestration Platform for India
                        </h1>
                        <p className="mt-5 text-base leading-relaxed text-gray-600 md:text-lg">
                            {site.name} is aggregating India&apos;s best AI startups, compute, and talent
                            into one &quot;Orchestra&quot; platform, while building Sovereign AI with India-first
                            infrastructure and partnerships.
                        </p>
                        <p className="mt-4 text-sm text-gray-500">
                            {site.brand}
                        </p>

                        <div className="mt-8 flex flex-wrap gap-2">
                            <Link
                                href="/government"
                                className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-900"
                            >
                                View solution
                            </Link>
                            <Link
                                href="/product"
                                className="rounded-full border px-5 py-2.5 text-sm font-medium hover:bg-gray-50"
                            >
                                Read the challenge
                            </Link>
                            <Link
                                href="/contact"
                                className="rounded-full border px-5 py-2.5 text-sm font-medium hover:bg-gray-50"
                            >
                                Investment details
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <Section
                eyebrow="Core platform thesis"
                title="Research moat + platform + sovereign models + distribution"
                description="The operating model is built around four coordinated pillars that combine product execution and national infrastructure readiness."
            >
                <div className="grid gap-4 md:grid-cols-2">
                    <Card
                        title="Research Moat"
                        description="Latency streaming architecture and deep speech systems research for production-grade AI performance in Indian enterprise environments."
                    />
                    <Card
                        title="Orchestra"
                        description="Unified AI resource platform that aggregates startups, compute, talent, orchestration workflows, and deployment pathways."
                    />
                    <Card
                        title="Sovereign AI"
                        description="India-owned LLM program with India-first data handling, auditability pathways, and long-term IP ownership through AiAAS."
                    />
                    <Card
                        title="Partnership-Led Distribution"
                        description="CA firms and IT consultancies form the enterprise trust channel for compliant adoption, implementation, and recurring rollouts."
                    />
                </div>
            </Section>

            <Section
                eyebrow="Performance benchmark"
                title="Production speed with sovereign readiness"
                description="AiAAS pairs low-latency runtime goals with institution-level delivery pathways."
            >
                <div className="grid gap-4 md:grid-cols-3">
                    <Stat value="<300ms" label="Voice-to-voice round trip target latency" />
                    <Stat value="India-first" label="Infrastructure strategy aligned to sovereignty requirements" />
                    <Stat value="Orchestra" label="Single resource layer for startups, compute, and deployment" />
                </div>
            </Section>

            <Section
                eyebrow="Bhaskara Hub for AI Research"
                title="Aggregation and transfer: Mission BHARAT"
                description="Global platforms are not built for our scale or diversity. AiAAS is building a coordinated path from research to real-world deployment in India."
            >
                <div className="rounded-2xl border bg-white p-6 shadow-sm">
                    <div className="text-sm text-gray-700">
                        Let&apos;s build the future of voice together.
                    </div>
                    <div className="mt-3 text-sm text-gray-600">
                        Get in touch: <span className="font-semibold text-gray-900">{site.contactEmail}</span>
                    </div>
                </div>
            </Section>

            <div className="mx-auto max-w-screen-2xl px-4 pb-16">
                <CTA
                    title="AiAAS Simplified Pvt Ltd - Pre-Seed Round"
                    description="We are building the orchestration and sovereign AI backbone for India. Explore the challenge, solution stack, co-design model, market context, and investment plan."
                />
            </div>
        </div>
    );
}
