import Section from "@/components/Section";
import Card from "@/components/Card";
import Stat from "@/components/Stat";
import CTA from "@/components/CTA";
import { site } from "@/lib/site";
import Link from "next/link";

export default function HomePage() {
    return (
        <div>
            {/* Hero */}
            <div className="border-b">
                <div className="mx-auto max-w-screen-2xl px-4 py-16 md:py-20">
                    <div className="max-w-3xl">
                        <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                            Omnichannel IGRS • Real-time voice call grievance redressal • Citizen helpline
                        </div>
                        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                            Intelligent Grievance Redressal System (IGRS) for Government and Public Enterprises
                        </h1>
                        <p className="mt-5 text-base leading-relaxed text-gray-600 md:text-lg">
                            {site.name} delivers a modern, government-ready grievance redressal platform that
                            works across <strong>voice calls, WhatsApp, web portals, email, and walk-in desk workflows</strong>.
                            Citizens can raise issues naturally, in their language, while departments get a structured,
                            trackable, auditable pipeline from <strong>registration → routing → SLA tracking → resolution → closure</strong>.
                            The system is designed to reduce workload on helpline staff, improve first-contact resolution,
                            and provide leadership-level visibility into service quality in real time.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-2">
                            <Link
                                href="/contact"
                                className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-900"
                            >
                                Request a pilot
                            </Link>
                            <Link
                                href="/product"
                                className="rounded-full border px-5 py-2.5 text-sm font-medium hover:bg-gray-50"
                            >
                                Explore product
                            </Link>
                            <Link
                                href="/government"
                                className="rounded-full border px-5 py-2.5 text-sm font-medium hover:bg-gray-50"
                            >
                                Why it fits government
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <Section
                eyebrow="What this solves"
                title="A single system for every citizen touchpoint, without losing accountability"
                description="In many departments, grievances arrive through disconnected channels—calls, emails, paper letters, social media, field offices—leading to duplicate complaints, missed follow-ups, unclear ownership, and weak SLA enforcement. Our omnichannel IGRS standardizes intake and resolution so every complaint becomes a structured case with a clear trail."
            >
                <div className="grid gap-4 md:grid-cols-3">
                    <Card
                        title="Omnichannel intake"
                        description="Capture grievances from voice calls, WhatsApp, web forms, email, and integrations. No matter where a citizen reaches out, the complaint is unified into one case record."
                        bullets={[
                            "Single case ID across channels",
                            "Auto-deduping and related-case linking",
                            "Language-aware citizen interaction",
                        ]}
                    />
                    <Card
                        title="Real-time voice call IGRS"
                        description="A citizen helpline that can register grievances over a call, ask the minimum necessary questions, confirm details, and create a trackable complaint instantly."
                        bullets={[
                            "Fast complaint registration with guided flow",
                            "Call summaries and structured data capture",
                            "Escalation to human agent when needed",
                        ]}
                    />
                    <Card
                        title="SLA + accountability"
                        description="Turn every grievance into an owned workflow with deadlines, escalation ladders, and a complete audit trail—from first contact to closure."
                        bullets={[
                            "Configurable SLA by category and department",
                            "Escalations to supervisors and nodal officers",
                            "Dashboards for leadership visibility",
                        ]}
                    />
                </div>
            </Section>

            <Section
                eyebrow="How it works"
                title="From citizen statement to actionable case—automatically"
                description="The platform converts unstructured citizen messages into structured grievance cases. It extracts the category, location, urgency, relevant identifiers, and preferred callback channel—then routes the case to the correct unit. The goal is simple: make registration easy for citizens and make resolution measurable for departments."
            >
                <div className="grid gap-4 md:grid-cols-2">
                    <Card
                        title="1) Intake & identity"
                        description="The system captures essential details: who is reporting, what happened, where it happened, and how they want updates. For voice calls, it can run a guided dialogue to avoid long call times while still collecting the minimum required fields."
                    />
                    <Card
                        title="2) Classification & routing"
                        description="Cases are classified into departments, schemes, or service categories. Routing rules map categories and geographies to responsible officers or desks. This removes manual triage bottlenecks and reduces misrouting."
                    />
                    <Card
                        title="3) Resolution workflow"
                        description="Each case moves through statuses like Registered → Assigned → In Progress → Resolved → Closed, with SLA timers, reminders, and escalations. Every action is logged for audits and reviews."
                    />
                    <Card
                        title="4) Citizen updates & feedback"
                        description="Citizens get consistent updates via SMS/WhatsApp/email/voice callbacks. After resolution, feedback can be captured to measure service quality and identify recurring systemic issues."
                    />
                </div>
            </Section>

            <Section
                eyebrow="Leadership visibility"
                title="Dashboards that make service quality measurable"
                description="Government programs need proof: response times, resolution rates, backlog trends, geographic hotspots, and repeat-issue analysis. The platform provides real-time monitoring for officers and administrators."
            >
                <div className="grid gap-4 md:grid-cols-3">
                    <Stat value="Real-time" label="Status visibility across all departments and queues" />
                    <Stat value="SLA-first" label="Timers, escalations, and aging analysis by category" />
                    <Stat value="Audit-ready" label="Complete trail of assignments, actions, and notes" />
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-3">
                    <Card
                        title="Backlog clarity"
                        description="See exactly where grievances are stuck—by office, officer, category, district, or scheme—so action is based on data, not guesswork."
                    />
                    <Card
                        title="Heatmaps & hotspots"
                        description="Identify repeated complaints by location (e.g., the same ward or facility), detect systemic failures, and prioritize preventive maintenance or inspections."
                    />
                    <Card
                        title="Performance reporting"
                        description="Generate monthly/weekly reports for reviews: resolved vs pending, average resolution time, SLA breach reasons, and department-level scorecards."
                    />
                </div>
            </Section>

            <div className="mx-auto max-w-screen-2xl px-4 pb-16">
                <CTA
                    title="Deploy a citizen helpline that scales without losing control"
                    description="Run a pilot for a department, PSU, district, or scheme. We help configure categories, routing, SLA rules, and citizen communication templates—so you can go live fast and improve outcomes in weeks, not quarters."
                />
            </div>
        </div>
    );
}
