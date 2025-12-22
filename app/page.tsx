import { HeroSection } from "@/components/landing/HeroSection";
import { BusinessStorySection } from "@/components/landing/BusinessStorySection";
import { PreRegisterSection } from "@/components/landing/PreRegisterSection";
import { PageLogger } from "@/components/landing/PageLogger";
import { Toaster } from "@/components/ui/sonner";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <PageLogger />
      <HeroSection />
      <div id="business-story">
        <BusinessStorySection />
      </div>
      <PreRegisterSection />
      <Footer />
      <Toaster position="top-center" />
    </main>
  );
}
