import Section from "@/components/Section";
import Card from "@/components/Card";
import CTA from "@/components/CTA";

export default function GovernmentFitPage() {
    return (
        <div>
            <div className="border-b">
                <div className="mx-auto max-w-screen-2xl px-4 py-14">
                    <div className="max-w-3xl">
                        <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                            Government fit
                        </div>
                        <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
                            Built for accountability, scale, and citizen trust
                        </h1>
                        <p className="mt-5 text-base leading-relaxed text-gray-600 md:text-lg">
                            Government deployments require more than “a support tool.” They require auditability, role-based control,
                            measurable SLAs, and predictable operations—plus an experience citizens can actually use.
                            Our IGRS is designed to match these requirements: every action is tracked, every case has ownership,
                            and leadership gets real-time visibility without manual consolidation.
                        </p>
                    </div>
                </div>
            </div>

            <Section
                eyebrow="Operational clarity"
                title="A clear chain of responsibility"
                description="Most grievances fail due to unclear ownership or repeated transfers. We design routing and escalation so responsibility is explicit."
            >
                <div className="grid gap-4 md:grid-cols-3">
                    <Card
                        title="Role-based structure"
                        description="Operators, supervisors, nodal officers, department heads—each role sees what they need, and actions are permissioned."
                    />
                    <Card
                        title="Escalation ladders"
                        description="When SLA is near breach, the right level gets notified automatically, reducing backlog silently accumulating."
                    />
                    <Card
                        title="Audit trails"
                        description="Assignments, notes, status changes, and closure reasons are recorded so reviews are evidence-driven."
                    />
                </div>
            </Section>

            <Section
                eyebrow="Citizen experience"
                title="Simple for citizens, even when departments are complex"
                description="Citizens should not be forced to understand internal government structures. The system is designed so intake stays easy while internal routing handles complexity."
            >
                <div className="grid gap-4 md:grid-cols-2">
                    <Card
                        title="Real-time voice helpline"
                        description="Citizens can call, explain the issue in their own words, confirm key details, and instantly receive a complaint ID and next-step expectation."
                    />
                    <Card
                        title="Consistent updates"
                        description="Updates are standardized so citizens get clear messaging: registered, assigned, in progress, resolved, and closed—with feedback capture where needed."
                    />
                </div>
            </Section>

            <div className="mx-auto max-w-screen-2xl px-4 pb-16">
                <CTA
                    title="Need a pilot aligned to government processes?"
                    description="We can start with one helpline number, one department, or one scheme—then expand. The rollout plan typically focuses on categories, routing, SLA rules, and reporting for review meetings."
                />
            </div>
        </div>
    );
}
