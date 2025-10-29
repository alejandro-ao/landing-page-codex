import Link from "next/link";
import { Container } from "./container";

const links = [
  { label: "About", href: "#features" },
  { label: "Terms", href: "#" },
  { label: "Privacy", href: "#" },
  { label: "Contact", href: "mailto:hello@neurolenslabs.ai" }
];

const social = [
  { label: "LinkedIn", href: "https://linkedin.com", aria: "NeuroLens on LinkedIn" },
  { label: "X", href: "https://x.com", aria: "NeuroLens on X" },
  { label: "GitHub", href: "https://github.com", aria: "NeuroLens on GitHub" }
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/60 py-12 backdrop-blur">
      <Container className="flex flex-col gap-8 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-center gap-2 md:justify-start">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent-purple/20 text-lg font-bold text-accent-purple">
              NL
            </span>
            <div className="text-left">
              <p className="text-sm font-semibold text-white">NeuroLens Labs</p>
              <p className="text-xs text-slate-400">Augmenting human cognition</p>
            </div>
          </div>
          <p className="text-xs text-slate-400">© {new Date().getFullYear()} NeuroLens Labs. All rights reserved.</p>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-300">
          {links.map((link) => {
            const isExternal = link.href.startsWith("http") || link.href.startsWith("mailto");
            if (isExternal) {
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                </a>
              );
            }

            return (
              <Link key={link.label} href={link.href} className="transition-colors duration-200 hover:text-white">
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center justify-center gap-4">
          {social.map((item) => (
            <a
              key={item.label}
              href={item.href}
              aria-label={item.aria}
              className="gradient-border rounded-full p-[1px]"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-sm font-medium text-white transition-transform duration-200 hover:scale-105">
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}
