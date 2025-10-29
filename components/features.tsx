import { Sparkles, Zap, Shield } from "lucide-react";
import { Section } from "./section";
import { ScrollReveal } from "./scroll-reveal";

const features = [
  {
    title: "Context-Aware Writing",
    description: "Your assistant remembers your tone and projects.",
    Icon: Sparkles
  },
  {
    title: "Lightning Speed",
    description: "Instant drafts, plans, and summaries with zero lag.",
    Icon: Zap
  },
  {
    title: "Private by Design",
    description: "Your data stays local. Always.",
    Icon: Shield
  }
];

export function Features() {
  return (
    <Section id="features" title="What Makes NeuroLens Different">
      <div className="grid gap-8 md:grid-cols-3">
        {features.map((feature, index) => (
          <ScrollReveal key={feature.title} className="glass-panel card-hover h-full rounded-3xl p-8 text-left">
            <div className="flex h-full flex-col gap-5">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-accent-teal">
                <feature.Icon className="h-6 w-6" />
              </span>
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              <p className="text-base text-slate-300">{feature.description}</p>
              <div className="mt-auto h-1 w-20 rounded-full bg-gradient-to-r from-accent-teal to-accent-purple" />
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
