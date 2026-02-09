import Section from "@/components/Section";
import Card from "@/components/Card";
import Stat from "@/components/Stat";
import CTA from "@/components/CTA";

export default function SecurityPage() {
    return (
        <div>
            <div className="border-b">
                <div className="mx-auto max-w-screen-2xl px-4 py-14">
                    <div className="max-w-4xl">
                        <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                            Hardware x Software Co-Design
                        </div>
                        <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
                            Closing the Hardware-Software Gap
                        </h1>
                        <p className="mt-5 text-base leading-relaxed text-gray-600 md:text-lg">
                            AiAAS co-designs runtime software and infrastructure pathways to deliver lower
                            latency, stronger cost efficiency, and sovereign deployment readiness for BFSI,
                            Government, and Telecom workloads.
                        </p>
                    </div>
                </div>
            </div>

            <Section
                eyebrow="Progress and focus areas"
                title="Delivery momentum across compute, onboarding, and production"
                description="The co-design motion is already translating into infrastructure readiness and enterprise pipeline velocity."
            >
                <div className="grid gap-4 md:grid-cols-3">
                    <Stat value="3-4 months" label="Sales velocity with expected closure horizon" />
                    <Stat value="50% cost efficiency" label="Pipeline driver from optimized runtime + infra pairing" />
                    <Stat value="Q2 onboardings" label="Multiple enterprise onboardings expected in current delivery plan" />
                </div>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                    <Card
                        title="Pipeline Drivers"
                        description="Latency wins, cost efficiency, and dialect accuracy are current drivers converting technical differentiation into enterprise outcomes."
                    />
                    <Card
                        title="Current Status"
                        description="Compute and hardware partnerships are completed, enabling execution toward live production deployment."
                    />
                </div>
            </Section>

            <Section
                eyebrow="Live production active pipeline"
                title="AIAAS runtime and compiler layer"
                description="Runtime engineering is designed to abstract hardware complexity while maximizing model-serving efficiency."
            >
                <div className="grid gap-4 md:grid-cols-2">
                    <Card
                        title="Runtime Capabilities"
                        description="Groq-style optimization for any model with quantization, KV-cache usage, and streaming inference support."
                        bullets={[
                            "One API running across multiple hardware targets",
                            "Graph compilation with kernel fusion and batching",
                            "Developer-first SDK + profiling + evaluation harness",
                        ]}
                    />
                    <Card
                        title="Partner Compute Pathways"
                        description="C-DAC, IITs, and on-prem pods provide access to clusters and specialized accelerators for sovereign-ready enterprise motion."
                        bullets={[
                            "Benchmark suites and workload qualification",
                            "Secure inference and private deployments",
                            "Enterprise-aligned sovereign rollout patterns",
                        ]}
                    />
                </div>
            </Section>

            <Section
                eyebrow="Execution tracks"
                title="From model development to sovereign serving"
                description="Co-design translates into clear operating tracks that move programs from research to regulated production."
            >
                <div className="grid gap-4 md:grid-cols-2">
                    <Card
                        title="Training and Fine-Tuning"
                        description="Domain model development, evaluation discipline, and iterative optimization for production readiness."
                    />
                    <Card
                        title="Data Pipelines"
                        description="Safety systems, scoring frameworks, and governance-aware data flows."
                    />
                    <Card
                        title="Edge and On-Prem Sovereign Deployments"
                        description="Private deployment patterns with auditability, data residency, and governance controls."
                    />
                    <Card
                        title="Inference Acceleration"
                        description="Low-latency, high-throughput serving for BFSI, Government, and Telecom workloads."
                    />
                </div>
            </Section>

            <div className="mx-auto max-w-screen-2xl px-4 pb-16">
                <CTA
                    title="Co-design as core infrastructure strategy"
                    description="AiAAS is aligning compute pathways, runtime optimization, and sovereign deployment controls to build India-native AI systems at scale."
                />
            </div>
        </div>
    );
}
