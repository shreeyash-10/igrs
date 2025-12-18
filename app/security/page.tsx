import Section from "@/components/Section";
import Card from "@/components/Card";
import CTA from "@/components/CTA";

export default function SecurityPage() {
    return (
        <div>
            <div className="border-b">
                <div className="mx-auto max-w-screen-2xl px-4 py-14">
                    <div className="max-w-3xl">
                        <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                            Security & controls
                        </div>
                        <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
                            Security, access control, and audit readiness
                        </h1>
                        <p className="mt-5 text-base leading-relaxed text-gray-600 md:text-lg">
                            Public systems must be defensible: who accessed what, who changed what, and why. Our approach is to
                            make security a product feature, not an afterthought—through role-based access, event logs, and
                            controlled workflows that prevent “silent changes.”
                        </p>
                    </div>
                </div>
            </div>

            <Section
                eyebrow="Controls"
                title="Designed for regulated operational environments"
                description="Security is not only about encryption; it’s about operational control and traceability."
            >
                <div className="grid gap-4 md:grid-cols-3">
                    <Card
                        title="Role-based access"
                        description="Restrict actions and visibility by role, department, and geography. Prevent unauthorized edits and data exposure."
                    />
                    <Card
                        title="Audit logs"
                        description="Track case changes, assignments, and closures. Make review meetings and audits evidence-driven."
                    />
                    <Card
                        title="Data governance"
                        description="Support retention policies, structured fields, and controlled exports. Keep citizen data appropriately handled."
                    />
                </div>
            </Section>

            <div className="mx-auto max-w-screen-2xl px-4 pb-16">
                <CTA
                    title="Security requirements vary by department—so we adapt"
                    description="If you have specific hosting, access, or compliance requirements, we can map the deployment to match. The goal is simple: keep citizen data protected, and keep the operating model auditable."
                />
            </div>
        </div>
    );
}
