import { Instagram, Send, Twitter } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer id="contact" className="bg-card border-t">
      <div className="container py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <Logo />
            <p className="mt-2 text-sm text-muted-foreground text-center md:text-left">
              The future of digital assets.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-headline text-lg font-semibold">Contact Us</h3>
            <div className="mt-4 space-y-2 text-sm text-center">
              <p><a href="mailto:example@trad.co.ke" className="hover:text-primary">example@trad.co.ke</a></p>
              <p>+254 712 345 678</p>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end">
             <h3 className="font-headline text-lg font-semibold">Follow Us</h3>
            <div className="flex mt-4 space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Twitter"><Twitter className="h-5 w-5" /></a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Telegram"><Send className="h-5 w-5" /></a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Instagram"><Instagram className="h-5 w-5" /></a>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8">
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} TradCoin. All rights reserved. Investing in cryptocurrencies involves risk. Please consult your financial advisor.
          </p>
        </div>
      </div>
    </footer>
  );
}
