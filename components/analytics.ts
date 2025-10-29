"use client";

export function trackEvent(event: string) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("analytics", { detail: { event } }));
  }
  if (process.env.NODE_ENV !== "production") {
    console.log(`[analytics] ${event}`);
  }
}
