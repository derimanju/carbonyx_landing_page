import { HeroSection } from "@/components/landing/HeroSection";
import { ServiceFlowSection } from "@/components/landing/ServiceFlowSection";
import { PageLogger } from "@/components/landing/PageLogger";
import { Toaster } from "@/components/ui/sonner";

export default function Home() {
  return (
    <main>
      <PageLogger />
      <HeroSection />
      <ServiceFlowSection />
      <Toaster position="top-center" />
    </main>
  );
}
