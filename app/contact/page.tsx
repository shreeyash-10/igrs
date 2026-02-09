import Section from "@/components/Section";
import Card from "@/components/Card";
import Stat from "@/components/Stat";
import { site } from "@/lib/site";

export default function ContactPage() {
    return (
        <div>
            <div className="border-b">
                <div className="mx-auto max-w-screen-2xl px-4 py-14">
                    <div className="max-w-4xl">
                        <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                            Investment Opportunity
                        </div>
                        <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
                            Fund Ask and Allocation
                        </h1>
                        <p className="mt-5 text-base leading-relaxed text-gray-600 md:text-lg">
                            Target raise is approximately 250 Cr for an 18-24 month runway, with
                            capital planned across GTM, R&D, infrastructure/security, and core operations.
                        </p>
                    </div>
                </div>
            </div>

            <Section
                eyebrow="Raise details"
                title="Capital plan and valuation guidance"
                description="AiAAS is positioned as an India category leader with valuation guidance benchmarked against market comparables."
            >
                <div className="grid gap-4 md:grid-cols-3">
                    <Stat value="~250 Cr" label="Target raise" />
                    <Stat value="18-24 months" label="Runway target" />
                    <Stat value="100%" label="Planned capital deployment" />
                </div>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                    <Card
                        title="Valuation Guidance"
                        description="AiAAS target range: 12-15x ARR as an attractive entry point for a potential India category leader. Deck comparator: ElevenLabs at ~33x ARR based on recent tender offers and secondary sales context."
                    />
                    <Card
                        title="Capital Allocation Plan"
                        description="Funds allocated across growth, research, and infrastructure execution."
                        bullets={[
                            "50% GTM and Marketing: enterprise sales, channel partnerships, brand building",
                            "30% R&D: emotion modeling, ultra-low latency stack, 12+ Indian dialects",
                            "15% Infra and Security: India residency, ISO/SOC2 scaling, GPU clusters",
                            "5% G&A and Ops: finance, legal, operations",
                        ]}
                    />
                </div>
            </Section>

            <Section
                eyebrow="Leadership"
                title="Built by experts with deep tech and enterprise DNA"
                description="Founder and leadership profiles from the deck."
            >
                <div className="grid gap-4 md:grid-cols-2">
                    <Card
                        title="Alok Singh - Co-Founder and CEO"
                        description="Ex-Google AI and Meta AI research lead in speech synthesis. 10+ years building scalable voice infrastructure for tier-1 technology environments."
                    />
                    <Card
                        title="Vivek Gupta - Co-Founder"
                        description="PhD in Speech Signal Processing from IIT and Stanford. Architected low-latency STT engines handling 1M+ calls per day."
                    />
                    <Card
                        title="Amit Yadav - Co-Founder and COO"
                        description="Ex-SaaS VP Sales. Scaled revenue from $1M to $50M ARR with deep enterprise network across global accounts and Indian GICs."
                    />
                    <Card
                        title="Shreeyash Kanwade - CTO"
                        description="PhD in Speech Signal Processing from IIT and Stanford. Architected low-latency STT engines handling 1M+ calls per day."
                    />
                </div>
                <div className="mt-6 rounded-2xl border bg-white p-6 shadow-sm">
                    <div className="text-sm font-semibold">Key Hires (Next 6 Months) - Active</div>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-600">
                        <li>VP of Enterprise Sales - Lead India and SEA expansion</li>
                        <li>Lead Speech Scientist - Emotion and low-resource languages</li>
                        <li>Head of Partnerships - SI and CCaaS relationships</li>
                    </ul>
                </div>
            </Section>

            <Section
                eyebrow="Advisors and ecosystem trust"
                title="Backed by pioneering advisors and global powerhouses"
                description="Academic and institutional network cited in the pre-seed deck."
            >
                <div className="grid gap-4 md:grid-cols-2">
                    <Card
                        title="Pioneering Advisors"
                        description="Madhuri Gupta (PhD, Computer Science), Dr Ravi Shankar (Professor, IIT Delhi), Laxmi Gupta (Assistant Professor), Anuj Deshpande (PhD in ECE), Randhir Kumar (PhD in ECE)."
                    />
                    <Card
                        title="Trusted by Global Powerhouses"
                        description="TSMC, TATA, TATA Electronics, VSDRA, C-DAC, MeitY (Government of India), Baseten, IIT Dharwad, and gnix."
                    />
                </div>
            </Section>

            <Section
                eyebrow="Mission BHARAT"
                title="Bhaskara Hub for AI Research Aggregation and Transfer"
                description="Global platforms are not built for our scale or diversity. Let&apos;s build the future of voice together."
            >
                <div className="rounded-2xl border bg-white p-6 shadow-sm">
                    <div className="text-sm text-gray-600">
                        Get in touch at <span className="font-semibold text-gray-900">{site.contactEmail}</span>
                    </div>
                    <div className="mt-2 text-xs text-gray-500">
                        © 2026 AiAAS Simplified Pvt Ltd. All rights reserved.
                    </div>
                </div>
            </Section>
        </div>
    );
}
