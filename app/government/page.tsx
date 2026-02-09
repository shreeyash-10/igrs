import Section from "@/components/Section";
import Card from "@/components/Card";
import Stat from "@/components/Stat";
import CTA from "@/components/CTA";

export default function GovernmentFitPage() {
    return (
        <div>
            <div className="border-b">
                <div className="mx-auto max-w-screen-2xl px-4 py-14">
                    <div className="max-w-4xl">
                        <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                            The Solution
                        </div>
                        <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
                            India-Native AI-as-a-Service
                        </h1>
                        <p className="mt-5 text-base leading-relaxed text-gray-600 md:text-lg">
                            AiAAS is building the operating system for Indian AI by aggregating
                            resources for growing companies while building sovereign foundation models
                            for India.
                        </p>
                    </div>
                </div>
            </div>

            <Section
                eyebrow="Solution pillars"
                title="From sovereign models to enterprise distribution"
                description="The platform integrates model ownership, infrastructure strategy, and distribution partnerships into one execution layer."
            >
                <div className="grid gap-4 md:grid-cols-2">
                    <Card
                        title="Sovereign AI Program"
                        description="Fund and enable top Indian researchers to build India-owned LLMs with long-term IP and model ownership retained by AiAAS."
                    />
                    <Card
                        title="Hardware-Optimized AI"
                        description="Co-design stack to optimize inference and training on India-accessible hardware, reducing cost and dependency."
                    />
                    <Card
                        title="Orchestra Platform"
                        description="Optimized inference engines deliver production-grade quality at roughly half the cost of ElevenLabs and major cloud providers."
                    />
                    <Card
                        title="CA and IT Partnerships"
                        description="Distribution engine via CA firms and IT consultancies for compliance-first adoption, implementation, and recurring enterprise rollouts."
                    />
                    <Card
                        title="C-DAC and IIT Research Bridge"
                        description="Structured partnerships channelize compute, labs, researchers, and advanced systems work into product-grade AI."
                    />
                </div>
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                    <Stat value="<300ms" label="Voice-to-voice round trip time benchmark" />
                    <Stat value="2x efficiency" label="Platform positioning versus incumbent cloud cost curves" />
                    <Stat value="India-owned" label="Sovereign model ownership and deployment strategy" />
                </div>
            </Section>

            <Section
                eyebrow="Product platform"
                title="Production-ready AI orchestration stack"
                description="Developer APIs and no-code builder are designed to move teams from research to deployment with governance and operational controls."
            >
                <div className="grid gap-4 md:grid-cols-2">
                    <Card
                        title="Public GenAI Rollouts"
                        description="Governance and deployment support for institution-scale launch programs."
                    />
                    <Card
                        title="Voice AI and Agents"
                        description="Contact center and automation pathways with low-latency runtime orchestration."
                    />
                    <Card
                        title="Model Hosting and Fine-Tuning"
                        description="Domain model training, serving, and evaluation stack in one operational flow."
                    />
                    <Card
                        title="Research-to-Production"
                        description="Structured bridge from labs to product with measurable throughput and quality."
                    />
                </div>
            </Section>

            <Section
                eyebrow="Orchestration core engine"
                title="Hardware input to software output with production integrations"
                description="The engine translates infrastructure capability into deployable AI systems with state management, safety controls, and inference optimization."
            >
                <div className="grid gap-4 md:grid-cols-3">
                    <Card
                        title="Hardware Input"
                        description="C-DAC backed pathways, access to quality GPUs at volume, and development of AiAAS silicon-oriented methods."
                    />
                    <Card
                        title="Software Output"
                        description="LLMs trained for AiAAS use cases, voice models, image generation models, image recognition models, and patented deployment techniques."
                    />
                    <Card
                        title="Platform Integrations"
                        description="AIAAS Orchestrator for state management and routing, sovereign LLM stack for PII/profanity/hallucination controls, and inference optimization for conversion and sentiment metrics."
                    />
                </div>
            </Section>

            <div className="mx-auto max-w-screen-2xl px-4 pb-16">
                <CTA
                    title="One platform for India-native AI execution"
                    description="AiAAS combines sovereign model ownership, low-latency orchestration, and partnership-driven distribution to move from pilots to scaled enterprise deployments."
                />
            </div>
        </div>
    );
}
