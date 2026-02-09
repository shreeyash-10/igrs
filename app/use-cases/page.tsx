import Section from "@/components/Section";
import Card from "@/components/Card";
import Stat from "@/components/Stat";
import CTA from "@/components/CTA";

export default function UseCasesPage() {
    return (
        <div>
            <div className="border-b">
                <div className="mx-auto max-w-screen-2xl px-4 py-14">
                    <div className="max-w-4xl">
                        <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                            Market Opportunity
                        </div>
                        <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
                            The GPT-3 Story and The GROQ Story
                        </h1>
                        <p className="mt-5 text-base leading-relaxed text-gray-600 md:text-lg">
                            AiAAS is positioned in a market where foundational model economics,
                            optimized hardware pathways, and national-scale demand are converging.
                        </p>
                    </div>
                </div>
            </div>

            <Section
                eyebrow="Reference trajectory"
                title="The GPT-3 infrastructure lesson"
                description="Global model development has shown that compute architecture, hardware class, and training discipline define long-term ecosystem advantage."
            >
                <div className="grid gap-4 md:grid-cols-3">
                    <Stat value="NVIDIA V100: 10000" label="Representative compute profile cited in GPT-3 era context" />
                    <Stat value="NVIDIA A100: 1024" label="Higher efficiency profile in later-generation deployment narratives" />
                    <Stat value="34 Days" label="Training time reference from GPT-3 story framing" />
                </div>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                    <Card
                        title="Global Context"
                        description="OpenAI has been a pioneering AI provider and ecosystem builder, proving that integrated model plus platform execution compounds over time."
                    />
                    <Card
                        title="Indian Agents Context"
                        description="India is expected to become one of the largest AI markets. As Indian customer LTV rises, global AI leaders are increasingly motivated to establish India operations."
                    />
                </div>
            </Section>

            <Section
                eyebrow="Hardware-optimized precedent"
                title="The GROQ story validates co-design execution"
                description="The market has already rewarded stacks that align workloads to specialized hardware and deliver measurable latency and throughput gains."
            >
                <div className="grid gap-4 md:grid-cols-3">
                    <Stat value="7 Billion USD" label="GROQ valuation reference point in deck context" />
                    <Stat value="13x vs NVIDIA" label="Comparative narrative used to show momentum and investor attention" />
                    <Stat value="3 Million" label="Total developers using platform-level optimized AI pathways" />
                </div>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                    <Card
                        title="Deployment Insight"
                        description="GROQ demonstrated that AI agents perform best when deployed on hardware optimized for specific model and runtime requirements."
                    />
                    <Card
                        title="Sovereign Deployment Signal"
                        description="Large-scale on-prem and national infrastructure programs highlight the strategic value of local control over model serving and policy-aligned execution."
                    />
                </div>
                <p className="mt-6 text-sm text-gray-500">
                    Source framing in deck: Grand View Research, Market.us, Statista (2024-2025).
                </p>
            </Section>

            <div className="mx-auto max-w-screen-2xl px-4 pb-16">
                <CTA
                    title="AiAAS market positioning"
                    description="AiAAS combines India-native distribution, sovereign infrastructure strategy, and runtime optimization to capture enterprise AI demand as the market scales."
                />
            </div>
        </div>
    );
}
