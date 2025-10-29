"use client";

import { motion } from "framer-motion";
import { Section } from "./section";
import { ScrollReveal } from "./scroll-reveal";
import { trackEvent } from "./analytics";

export function DemoSection() {
  return (
    <Section
      id="demo"
      title="See It in Action"
      description="Watch NeuroLens transform rough thoughts into polished outcomes in seconds."
    >
      <div className="flex flex-col items-center gap-10">
        <ScrollReveal className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-black/60 p-1 backdrop-blur-xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mask-gradient overflow-hidden rounded-[22px] border border-white/10"
            id="video"
          >
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1600&q=80"
            >
              <source
                src="https://cdn.coverr.co/videos/coverr-focus-in-the-future-5870/1080p.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </ScrollReveal>
        <ScrollReveal>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => trackEvent("cta_demo_launch")}
            className="btn-primary animate-pulseGlow"
            type="button"
          >
            Launch the Interactive Demo
          </motion.button>
        </ScrollReveal>
      </div>
    </Section>
  );
}
