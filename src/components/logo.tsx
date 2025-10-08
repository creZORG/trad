import { cn } from "@/lib/utils";
import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <a href="#" className={cn("flex items-center", className)}>
      <Image src="https://i.postimg.cc/nzfPQwrY/download-1.png" alt="TradCoin Logo" width={96} height={96} />
    </a>
  );
}
