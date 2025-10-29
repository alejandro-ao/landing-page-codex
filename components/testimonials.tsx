"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Section } from "./section";

const testimonials = [
  {
    name: "Amelia Chen",
    role: "Head of Product, Lumen Studio",
    quote: "NeuroLens became my daily co-pilot — it writes better than I do.",
    avatar: "/avatars/amelia.svg"
  },
  {
    name: "Darius Mendez",
    role: "Founder, Frequency Labs",
    quote: "A true thought partner for creative professionals.",
    avatar: "/avatars/darius.svg"
  },
  {
    name: "Priya Kapoor",
    role: "Content Director, Northstar",
    quote: "Fast, intuitive, and absolutely essential.",
    avatar: "/avatars/priya.svg"
  },
  {
    name: "Rafael Ortega",
    role: "Design Lead, Nova Collective",
    quote: "Our team ideates and ships campaigns twice as fast with NeuroLens.",
    avatar: "/avatars/rafael.svg"
  }
];

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <Section id="testimonials" title="Loved by Teams and Creators">
      <div
        className="relative mx-auto flex w-full max-w-3xl flex-col items-center gap-6"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="relative h-56 w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8">
          <AnimatePresence mode="wait">
            <motion.figure
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex h-full flex-col items-center text-center"
            >
              <div className="relative -mt-12 h-20 w-20 overflow-hidden rounded-full border border-white/20 bg-white/10">
                <Image
                  src={testimonials[active].avatar}
                  alt={testimonials[active].name}
                  fill
                  sizes="80px"
                  className="object-cover"
                  priority={active === 0}
                />
              </div>
              <blockquote className="mt-6 text-xl font-medium text-white">“{testimonials[active].quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-slate-300">
                <span className="font-semibold text-white">{testimonials[active].name}</span>
                <span className="text-slate-400"> — {testimonials[active].role}</span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Show testimonial ${index + 1}`}
              className={`h-2.5 w-8 rounded-full transition-all duration-300 ${
                active === index ? "bg-gradient-to-r from-accent-teal to-accent-purple" : "bg-white/15 hover:bg-white/25"
              }`}
              onClick={() => setActive(index)}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
