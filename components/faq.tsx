"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { Section } from "./section";
import { ScrollReveal } from "./scroll-reveal";

const items = [
  {
    question: "Is my data shared with others?",
    answer: "No, it stays private on your device. NeuroLens encrypts every session locally before syncing to your vault."
  },
  {
    question: "Do I need an account to try the demo?",
    answer: "No signup required. Launch the demo instantly and explore the workspace in under 30 seconds."
  },
  {
    question: "Can NeuroLens integrate with my workflow?",
    answer: "Yes, via our Chrome and VS Code extensions as well as an open API for custom automations."
  },
  {
    question: "Does NeuroLens support team collaboration?",
    answer: "Invite teammates to shared spaces with granular permissions and synced context windows."
  },
  {
    question: "How does pricing work after the trial?",
    answer: "Upgrade to NeuroLens Pro for $19/month to unlock unlimited projects, custom knowledge bases, and priority support."
  },
  {
    question: "Is there an offline mode?",
    answer: "Yes. NeuroLens caches your recent work so you can ideate and edit even without a connection."
  }
];

export function FAQ() {
  return (
    <Section id="faq" title="Frequently Asked Questions">
      <ScrollReveal>
        <Accordion.Root type="single" collapsible className="space-y-4">
          {items.map((item, index) => (
            <Accordion.Item key={item.question} value={`item-${index}`} className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <Accordion.Header>
                <Accordion.Trigger
                  className="group flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-medium text-white transition-colors hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-teal"
                >
                  {item.question}
                  <ChevronDown className="h-5 w-5 transition-transform duration-200 group-data-[state=open]:rotate-180" aria-hidden />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="px-6 pb-6 text-sm text-slate-300 data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                {item.answer}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </ScrollReveal>
    </Section>
  );
}
