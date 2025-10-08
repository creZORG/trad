import { Separator } from "@/components/ui/separator";

export default function BackedBySection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">
        <Separator className="mb-8" />
        <p className="text-sm uppercase tracking-widest text-muted-foreground">Backed by</p>
        <div className="relative mt-4 inline-block">
          <div className="absolute -inset-2 rounded-full bg-primary/10 blur-xl"></div>
          <h3 className="relative font-headline text-4xl font-bold text-foreground">
            Tradinta
          </h3>
        </div>
        <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
          Leveraging the robust and secure technology backbone of Tradinta to power the next generation of finance.
        </p>
      </div>
    </section>
  );
}
