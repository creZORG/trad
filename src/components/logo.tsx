import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <a href="#" className={cn("font-headline text-2xl font-bold tracking-wider", className)}>
      $TRAD
    </a>
  );
}
