import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Download } from "lucide-react";

const faqItems = [
  {
    question: "What is $TRAD?",
    answer: "$TRAD is the native utility token of the Tradinta ecosystem, designed to facilitate payments, reward users, and enable governance.",
  },
  {
    question: "How can I buy $TRAD?",
    answer: "$TRAD will be available for purchase during our upcoming Token Generation Event (TGE). Further details on exchange listings will be announced soon.",
  },
  {
    question: "What is the total supply of $TRAD?",
    answer: "The total supply and tokenomics are detailed in our official whitepaper, which will be available for download soon.",
  },
];

export default function WhitepaperSection() {
  return (
    <section id="whitepaper" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Whitepaper & FAQ
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Dive deeper into our technology, vision, and tokenomics.
            </p>
            <Button size="lg" className="mt-8" disabled>
              <Download className="mr-2 h-5 w-5" />
              Download Whitepaper
            </Button>
            <div className="mt-8 space-x-6 text-sm">
              <a href="#" className="hover:text-primary">Terms of Use</a>
              <a href="#" className="hover:text-primary">Privacy Policy</a>
            </div>
          </div>
          <div>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item) => (
                <AccordionItem key={item.question} value={item.question}>
                  <AccordionTrigger className="text-left font-headline text-lg">{item.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
