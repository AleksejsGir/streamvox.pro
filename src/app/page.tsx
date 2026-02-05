import { Navbar } from "@/widgets/Navbar";
import { Hero } from "@/widgets/Hero";
import { UseCases } from "@/widgets/UseCases";
import { SmartOverlayDemo } from "@/features/SmartOverlay/Demo";
import { Footer } from "@/widgets/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-text-main selection:bg-primary selection:text-black">
      <Navbar />
      <Hero />
      <UseCases />
      <SmartOverlayDemo />
      <Footer />
    </main>
  );
}
