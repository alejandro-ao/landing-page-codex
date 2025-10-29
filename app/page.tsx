import { FAQ } from "@/components/faq";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { DemoSection } from "@/components/demo-section";
import { Pricing } from "@/components/pricing";
import { Testimonials } from "@/components/testimonials";

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col bg-transparent pt-24">
        <Hero />
        <Features />
        <DemoSection />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
