import Section from "@/components/Section";
import Card from "@/components/Card";
import CTA from "@/components/CTA";

export default function ProductPage() {
    return (
        <div>
            <div className="border-b">
                <div className="mx-auto max-w-screen-2xl px-4 py-14">
                    <div className="max-w-3xl">
                        <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                            The Challenge
                        </div>
                        <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
                            India&apos;s AI Potential is Fragmented
                        </h1>
                        <p className="mt-5 text-base leading-relaxed text-gray-600 md:text-lg">
                            India has talent and demand, but lacks unified access to compute,
                            distribution, and sovereign-grade infrastructure required to build and
                            scale world-class AI companies.
                        </p>
                    </div>
                </div>
            </div>

            <Section
                eyebrow="Fragmentation barriers"
                title="Why the ecosystem is under-leveraged today"
                description="Startups, labs, enterprises, and government programs are advancing independently, but the country lacks one coordinated execution layer."
            >
                <div className="grid gap-4 md:grid-cols-2">
                    <Card
                        title="Infrastructure Scarcity"
                        description="Compute access, including GPUs, clusters, and optimized hardware, is limited and expensive, blocking startups from training, fine-tuning, and running models reliably at scale."
                    />
                    <Card
                        title="Ecosystem Fragmentation"
                        description="Startups, labs, enterprises, and government initiatives operate in silos. There is no single platform that aggregates capability, resources, and execution."
                    />
                    <Card
                        title="Distribution and Trust Gap"
                        description="Enterprises need trusted channels such as CA firms and IT services for safe AI adoption, while startups struggle to reach regulated decision-makers."
                    />
                    <Card
                        title="Compliance and Data Sovereignty"
                        description="BFSI, government, and regulated enterprises need India-first data handling. Global stacks create residency, auditability, and policy risks."
                    />
                    <Card
                        title="Hardware-Software Mismatch"
                        description="India can unlock major efficiency by co-designing software for specific hardware, but currently lacks a coordinated pathway."
                    />
                </div>
            </Section>

            <div className="mx-auto max-w-screen-2xl px-4 pb-16">
                <CTA
                    title="AiAAS response to the challenge"
                    description="AiAAS is building a unified orchestration layer that aligns compute, research, distribution, and sovereign deployment requirements in one platform motion."
                />
            </div>
        </div>
    );
}
