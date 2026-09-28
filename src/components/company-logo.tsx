import Image from "next/image"
import { cn } from "@/lib/utils"

type CompanyLogoProps = {
  name: string
  logo: string
  className?: string
}

export function CompanyLogo({ name, logo, className }: CompanyLogoProps) {
  return (
    <Image
      src={logo}
      alt={`Logo de ${name}`}
      width={320}
      height={180}
      className={cn("h-28 w-auto max-w-full object-contain", className)}
    />
  )
}
