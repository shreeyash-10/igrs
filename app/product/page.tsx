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
                            Product overview
                        </div>
                        <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
                            Intelligent Grievance Redressal System (IGRS)
                        </h1>
                        <p className="mt-5 text-base leading-relaxed text-gray-600 md:text-lg">
                            Our IGRS is built for environments where volume is high, accountability is non-negotiable,
                            and citizen experience matters. It combines omnichannel intake, real-time voice call grievance registration,
                            and operational workflows that match how departments actually function—while giving leadership dashboards
                            that show what is happening right now.
                        </p>
                    </div>
                </div>
            </div>

            <Section
                eyebrow="Core modules"
                title="Everything needed for end-to-end grievance lifecycle management"
                description="Instead of stitching together a helpline tool, a ticketing system, and a reporting dashboard, the platform provides a single integrated stack designed specifically for public service outcomes."
            >
                <div className="grid gap-4 md:grid-cols-3">
                    <Card
                        title="Citizen intake layer"
                        description="Supports voice calls, WhatsApp, web, email, and desk-based entry. Standardizes data capture and ensures every interaction maps to a case."
                        bullets={[
                            "Case ID generation",
                            "Citizen language handling",
                            "Attachment support where applicable",
                        ]}
                    />
                    <Card
                        title="Case management & workflow"
                        description="Assignment, routing, notes, internal transfers, inter-department coordination, and closures with reason codes."
                        bullets={[
                            "Custom statuses and queues",
                            "Role-based actions",
                            "Full action history",
                        ]}
                    />
                    <Card
                        title="SLA & escalation engine"
                        description="Configurable SLA rules per category, geography, or priority. Escalation ladders keep issues from getting stuck."
                        bullets={[
                            "Aging buckets",
                            "Breach alerts",
                            "Supervisor dashboards",
                        ]}
                    />
                    <Card
                        title="Real-time voice IGRS"
                        description="Register grievances over phone calls using structured dialogue, confirmations, and quick handoff to agents."
                        bullets={[
                            "Guided registration flow",
                            "Call summaries into case notes",
                            "Agent takeover for exceptions",
                        ]}
                    />
                    <Card
                        title="Citizen notifications"
                        description="Keep citizens informed about registration, assignment, progress, resolution, and closure in a consistent format."
                        bullets={[
                            "Template-based messaging",
                            "Channel preference support",
                            "Feedback capture",
                        ]}
                    />
                    <Card
                        title="Analytics & reporting"
                        description="Dashboards for operational teams and leadership: resolution rates, SLA compliance, hotspots, and recurring issue trends."
                        bullets={[
                            "Scorecards by unit/officer",
                            "Trend reports",
                            "Exportable reviews",
                        ]}
                    />
                </div>
            </Section>

            <Section
                eyebrow="Design principle"
                title="Make it easy for citizens, and measurable for departments"
                description="A grievance system fails when it either becomes too hard for citizens to register complaints, or too unstructured for departments to close cases with confidence. This platform is designed to solve both sides at once."
            >
                <div className="grid gap-4 md:grid-cols-2">
                    <Card
                        title="Citizen-first interactions"
                        description="Citizens should not need to understand internal departments or government structures. The system asks only what is necessary, uses clear language, and confirms key details so that registration feels quick and respectful."
                    />
                    <Card
                        title="Department-ready structure"
                        description="Departments need categories, ownership, queues, SLA timers, and audit trails. Every citizen message becomes structured data that can be routed, tracked, escalated, and reported."
                    />
                </div>
            </Section>

            <div className="mx-auto max-w-screen-2xl px-4 pb-16">
                <CTA
                    title="Want a product walkthrough tailored to your department?"
                    description="Share your grievance categories, SLA expectations, and citizen channels. We’ll map a suggested rollout plan: pilot scope, routing design, escalation ladder, and dashboards for reviews."
                />
            </div>
        </div>
    );
}
