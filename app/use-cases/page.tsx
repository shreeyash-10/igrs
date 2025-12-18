import Section from "@/components/Section";
import Card from "@/components/Card";
import CTA from "@/components/CTA";

export default function UseCasesPage() {
    return (
        <div>
            <div className="border-b">
                <div className="mx-auto max-w-screen-2xl px-4 py-14">
                    <div className="max-w-3xl">
                        <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                            Use cases
                        </div>
                        <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
                            Citizen helpline workflows across departments and PSUs
                        </h1>
                        <p className="mt-5 text-base leading-relaxed text-gray-600 md:text-lg">
                            The platform is adaptable because grievance reality differs by department. Some issues are
                            simple service requests, some require multi-step coordination, and some need enforcement,
                            inspections, or field visits. Our IGRS supports all of these patterns while keeping the citizen
                            experience consistent.
                        </p>
                    </div>
                </div>
            </div>

            <Section
                eyebrow="Government departments"
                title="Common deployments"
                description="Examples of how the system is used in real public service contexts."
            >
                <div className="grid gap-4 md:grid-cols-3">
                    <Card
                        title="Municipal services"
                        description="Waste pickup, streetlight faults, potholes, water leakage, drainage blockage, encroachments, sanitation complaints."
                        bullets={[
                            "Ward-wise routing",
                            "Field-visit notes and closure proof",
                            "Hotspot reporting for repeated issues",
                        ]}
                    />
                    <Card
                        title="Utilities & infrastructure"
                        description="Power supply complaints, transformer faults, billing disputes, service connections, outage reporting."
                        bullets={[
                            "Priority escalation for outages",
                            "SLA by feeder/zone",
                            "Callbacks and incident updates",
                        ]}
                    />
                    <Card
                        title="Public welfare schemes"
                        description="Eligibility clarifications, application status tracking, documentation issues, grievance escalation for delays."
                        bullets={[
                            "Category-based flows",
                            "Document checklist capture",
                            "Status updates to citizens",
                        ]}
                    />
                </div>
            </Section>

            <Section
                eyebrow="Public enterprises"
                title="PSU / enterprise-style grievance operations"
                description="Public enterprises often require a blend: citizen-facing helpline + internal operational ticketing + compliance reporting."
            >
                <div className="grid gap-4 md:grid-cols-3">
                    <Card
                        title="Customer service & support"
                        description="Service complaints, product issues, delivery delays, complaint escalations with traceability and closure codes."
                    />
                    <Card
                        title="Field operations coordination"
                        description="Routing cases to regional teams, vendors, or maintenance squads while tracking SLA adherence and aging."
                    />
                    <Card
                        title="Compliance & audit reporting"
                        description="Produce evidence of actions taken, timelines, ownership, and decision history for internal and external reviews."
                    />
                </div>
            </Section>

            <div className="mx-auto max-w-screen-2xl px-4 pb-16">
                <CTA
                    title="We can tailor the workflows to your exact department structure"
                    description="If you have multiple regions, divisions, and escalation ladders, we can model them as routing rules and roles, so the system matches the real operational chain—without becoming complicated for citizens."
                />
            </div>
        </div>
    );
}
