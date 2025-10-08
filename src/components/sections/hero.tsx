import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-[90vh] items-center justify-center overflow-hidden py-20 animated-gradient-background">
      <div className="container relative z-10 mx-auto text-center">
        <h1 className="font-headline text-4xl font-bold leading-tight tracking-tighter text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          The Power of Digital Assets,
          <br />
          Backed by Real Innovation.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          $TRAD — the coin that powers the Tradinta ecosystem.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4">
          <div className="mb-6">
            <h3 className="mb-4 text-lg font-medium uppercase tracking-widest text-primary">Launching Soon</h3>
          </div>
          <a href="#about">
            <Button size="lg" className="text-lg">
              Get Started
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
