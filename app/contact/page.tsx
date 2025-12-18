import Section from "@/components/Section";

export default function ContactPage() {
    return (
        <div>
            <div className="border-b">
                <div className="mx-auto max-w-screen-2xl px-4 py-14">
                    <div className="max-w-3xl">
                        <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                            Contact
                        </div>
                        <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
                            Request a demo / pilot
                        </h1>
                        <p className="mt-5 text-base leading-relaxed text-gray-600 md:text-lg">
                            Tell us which department or public enterprise you want to deploy for, the channels you want enabled
                            (voice helpline, WhatsApp, web, email), and the grievance categories you care about. We’ll propose a
                            pilot scope with routing + SLA design and a rollout plan.
                        </p>
                    </div>
                </div>
            </div>

            <Section
                eyebrow="How to reach us"
                title="AiAAS Simplified Pvt Ltd"
                description="Use the details below for introductions, demo requests, and pilot discussions."
            >
                <div className="rounded-2xl border bg-white p-6 shadow-sm">
                    <div className="text-sm">
                        <div className="font-semibold">Email</div>
                        <div className="mt-1 text-gray-600">contact@aiaas-simplified.com</div>
                    </div>
                    <div className="mt-5 text-sm">
                        <div className="font-semibold">What to include</div>
                        <ul className="mt-2 list-disc space-y-2 pl-5 text-gray-600">
                            <li>Department / PSU name + geographic scope (state/district/zone)</li>
                            <li>Channels required (voice, WhatsApp, web, email)</li>
                            <li>Approx grievance volume per day/week (estimate is fine)</li>
                            <li>SLA expectations and escalation chain (if defined)</li>
                        </ul>
                    </div>
                </div>
            </Section>
        </div>
    );
}
