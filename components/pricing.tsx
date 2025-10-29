"use client";

import { motion } from "framer-motion";
import { Section } from "./section";
import { ScrollReveal } from "./scroll-reveal";
import { trackEvent } from "./analytics";

const plans = [
  {
    title: "Free Demo",
    price: "Try all features for 7 days.",
    button: "Start Free",
    popular: false,
    description: ["Real-time co-writing", "Smart strategy briefs", "Privacy-first workspace"],
    event: "cta_pricing_start_free"
  },
  {
    title: "Pro Plan",
    price: "$19/month",
    subtitle: "unlimited projects, full privacy, priority access.",
    button: "Upgrade to Pro",
    popular: true,
    description: ["Unlimited projects", "Team collaboration", "On-device encryption"],
    event: "cta_pricing_upgrade"
  }
];

export function Pricing() {
  return (
    <Section id="pricing" title="Simple, Transparent Pricing" description="No credit card required for the demo.">
      <div className="grid gap-8 lg:grid-cols-2">
        {plans.map((plan) => (
          <ScrollReveal key={plan.title}>
            <div className={`glass-panel gradient-border relative h-full rounded-3xl p-8 ${plan.popular ? "bg-white/8" : ""}`}>
              {plan.popular && (
                <span className="absolute right-6 top-6 rounded-full bg-accent-purple/20 px-3 py-1 text-xs font-semibold text-accent-purple">
                  Most Popular
                </span>
              )}
              <div className="flex h-full flex-col gap-6">
                <div>
                  <h3 className="text-2xl font-semibold text-white">{plan.title}</h3>
                  <p className="mt-2 text-lg text-accent-teal">{plan.price}</p>
                  {plan.subtitle && <p className="text-sm uppercase tracking-[0.25em] text-slate-400">{plan.subtitle}</p>}
                </div>
                <ul className="space-y-3 text-sm text-slate-300">
                  {plan.description.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-accent-teal to-accent-purple" />
                      {item}
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => trackEvent(plan.event)}
                  className={`btn-${plan.popular ? "primary" : "secondary"}`}
                  type="button"
                >
                  {plan.button}
                </motion.button>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
