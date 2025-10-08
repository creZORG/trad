import { cn } from "@/lib/utils";
import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <a href="#" className={cn("flex items-center gap-2", className)}>
      <Image src="https://i.postimg.cc/nzfPQwrY/download-1.png" alt="TradCoin Logo" width={32} height={32} />
      <span className="font-headline text-2xl font-bold tracking-wider">
        $TRAD
      </span>
    </a>
  );
}
