"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useMemo } from "react";
import { trackEvent } from "./analytics";
import { Container } from "./container";

const headlineVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const staggerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

export function Hero() {
  const particles = useMemo(
    () =>
      Array.from({ length: 24 }).map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 5
      })),
    []
  );

  return (
    <section className="relative overflow-hidden pb-24 pt-28 sm:pb-32 sm:pt-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="hero-gradient absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 opacity-80" />
        <div className="particles">
          {particles.map((particle, index) => (
            <span
              key={index}
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animationDelay: `${particle.delay}s`
              }}
            />
          ))}
        </div>
      </div>
      <Container className="relative">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerVariants}
          className="flex flex-col-reverse items-center gap-16 lg:flex-row lg:gap-20"
        >
          <motion.div variants={headlineVariants} className="flex max-w-2xl flex-col items-center lg:items-start">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-accent-teal" /> Powered by adaptive cognition
            </span>
            <h1 className="text-center text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-left lg:text-6xl">
              Think Faster. Work Smarter.
            </h1>
            <p className="mt-6 text-center text-lg text-slate-300 lg:text-left">
              NeuroLens supercharges your productivity with AI that learns your style — from emails to strategy.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
              <Link
                href="#demo"
                prefetch
                onClick={() => trackEvent("cta_hero_try_demo")}
                className="btn-primary w-full sm:w-auto"
                aria-label="Try the NeuroLens demo"
              >
                Try the Demo
              </Link>
              <Link
                href="#video"
                prefetch
                onClick={() => trackEvent("cta_hero_watch_demo")}
                className="btn-secondary w-full sm:w-auto"
                aria-label="Watch the demo video"
              >
                Watch Demo Video
              </Link>
            </div>
          </motion.div>
          <motion.div
            variants={headlineVariants}
            whileHover={{ rotateX: 8, rotateY: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="relative aspect-[4/3] w-full max-w-lg overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl"
            aria-hidden
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent-teal/20 via-transparent to-accent-purple/20" />
            <div className="relative flex h-full flex-col justify-between rounded-2xl bg-black/40 p-6 backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-slate-200">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent-purple/30 text-accent-purple">NL</span>
                  <span>NeuroLens Workspace</span>
                </div>
                <div className="flex gap-1">
                  <span className="h-2 w-2 rounded-full bg-red-400" />
                  <span className="h-2 w-2 rounded-full bg-yellow-300" />
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                </div>
              </div>
              <div className="mt-6 space-y-3 text-sm text-slate-200">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-wide text-slate-400">Strategy Outline</p>
                  <p className="mt-2 text-base font-medium text-white">
                    “Let’s craft a launch plan for our upcoming feature announcement with three key narratives.”
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-wide text-slate-400">NeuroLens Response</p>
                  <p className="mt-2 text-base text-slate-200">
                    “I’ve drafted a launch storyline with hooks for email, social, and investor updates. Want me to polish the copy?”
                  </p>
                </div>
                <div className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-wide text-slate-300">
                  <span>Latency</span>
                  <span className="font-semibold text-accent-teal">12ms</span>
                </div>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-400">Tone</p>
                  <p className="font-semibold text-white">Visionary &amp; Precise</p>
                </div>
                <div className="text-right">
                  <p className="text-xs uppercase tracking-wide text-slate-400">Focus</p>
                  <p className="font-semibold text-accent-purple">Product Narrative</p>
                </div>
              </div>
            </div>
            <Image src="/ui-glow.svg" alt="" fill sizes="(min-width: 1024px) 480px, 100vw" className="pointer-events-none select-none object-cover opacity-20" priority />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
