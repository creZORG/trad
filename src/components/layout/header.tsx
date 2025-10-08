import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-auto flex items-center">
          <Logo />
        </div>
        
        <div className="ml-auto flex items-center space-x-4">
          <div className="relative">
            <Button disabled>Login with Tradinta/Luna</Button>
            <Badge
              variant="secondary"
              className="absolute -right-4 -top-2 scale-75 bg-amber-400 text-black"
            >
              Coming Soon
            </Badge>
          </div>
        </div>
      </div>
    </header>
  );
}
