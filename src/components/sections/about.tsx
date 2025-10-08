export default function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              About $TRAD
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              $TRAD is not just a token. It’s a gateway to the future of commerce, backed by Luna Industries and powered by Tradinta. Our mission is to bridge traditional finance with the limitless potential of blockchain technology, creating a seamless and innovative ecosystem for all.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="relative floating-animation">
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl"></div>
              <svg 
                className="relative h-48 w-48 text-primary" 
                viewBox="0 0 100 100" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" />
                <text x="50" y="55" textAnchor="middle" fontSize="24" fontWeight="bold" fill="currentColor" className="font-headline">
                  $T
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
