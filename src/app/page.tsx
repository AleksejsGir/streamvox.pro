import { Navbar } from "@/widgets/Navbar";
import { Hero } from "@/widgets/Hero";
import { UseCases } from "@/widgets/UseCases";
import { Features } from "@/widgets/Features";
import { SmartOverlayDemo } from "@/features/SmartOverlay/Demo";
import { Pricing } from "@/widgets/Pricing";
import { FAQ } from "@/widgets/FAQ";
import { Footer } from "@/widgets/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <UseCases />
      <SmartOverlayDemo />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
