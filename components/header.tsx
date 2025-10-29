"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "./container";

const navItems = [
  { href: "#features", label: "Features" },
  { href: "#demo", label: "Demo" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" }
];

export function Header() {
  const { scrollY } = useScroll();
  const backgroundOpacity = useTransform(scrollY, [0, 120], [0, 0.95]);

  return (
    <motion.header
      style={{ backgroundColor: backgroundOpacity.to((opacity) => `rgba(5, 5, 16, ${opacity})`) }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/5 backdrop-blur"
    >
      <Container className="flex items-center justify-between py-4">
        <Link href="#" className="flex items-center gap-2 text-white">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-accent-teal/20 text-sm font-semibold text-accent-teal">
            NL
          </span>
          <span className="text-sm font-semibold tracking-wide">NeuroLens</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-slate-200 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors duration-200 hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="#pricing" className="btn-secondary hidden text-sm md:inline-flex">
          Get Started
        </Link>
      </Container>
    </motion.header>
  );
}
