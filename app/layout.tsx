import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://neurolens-demo.example.com"),
  title: "NeuroLens — Think Faster. Work Smarter.",
  description:
    "NeuroLens is an AI productivity assistant that learns your style to help you write, plan, and ideate faster.",
  icons: {
    icon: "/favicon.svg"
  },
  openGraph: {
    title: "NeuroLens — Think Faster. Work Smarter.",
    description:
      "Experience the AI co-pilot designed to accelerate your writing, planning, and strategic thinking.",
    url: "https://neurolens-demo.example.com",
    siteName: "NeuroLens",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "NeuroLens product preview"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "NeuroLens — Think Faster. Work Smarter.",
    description:
      "NeuroLens helps teams and creators produce at the speed of thought with privacy-first AI.",
    images: ["/og-image.svg"],
    creator: "@neurolenslabs"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} relative min-h-screen overflow-x-hidden`}>{children}</body>
    </html>
  );
}
