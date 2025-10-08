import { Button } from "@/components/ui/button";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import TokenUtilitySection from "@/components/sections/token-utility";
import RoadmapSection from "@/components/sections/roadmap";
import UpdatesSection from "@/components/sections/updates";
import WhitepaperSection from "@/components/sections/whitepaper";
import BackedBySection from "@/components/sections/backed-by";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <TokenUtilitySection />
        <RoadmapSection />
        <UpdatesSection />
        <WhitepaperSection />
        <BackedBySection />
      </main>
      <Footer />
      <Button
        className="fixed bottom-6 right-6 z-50 animate-pulse shadow-lg bg-primary hover:bg-primary/90 text-primary-foreground"
        size="lg"
      >
        Join Whitelist
      </Button>
    </div>
  );
}
