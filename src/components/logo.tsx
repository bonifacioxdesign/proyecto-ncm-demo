import Image from "next/image"
import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/images/logo-nave.svg"
      alt="Nave Cine Metro"
      width={160}
      height={44}
      className={cn("h-9 w-auto", className)}
      priority
    />
  )
}
