import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

/**
 * Shared page title block for inner routes (not home).
 * Pair with `<main className="pt-24">` so nav clearance is consistent.
 */
export function PageHero({
  title,
  description,
  eyebrow,
  align = "center",
  children,
  className,
  contentClassName,
}: {
  title: ReactNode
  description?: ReactNode
  eyebrow?: ReactNode
  align?: "center" | "start"
  /** Optional block under the H1 (e.g. video) before the description */
  children?: ReactNode
  className?: string
  contentClassName?: string
}) {
  return (
    <section className={cn("px-4 pt-8 sm:px-6 md:pt-10 lg:px-8", className)}>
      <div
        className={cn(
          "mx-auto w-full max-w-5xl",
          align === "center" ? "text-center" : "text-start",
          contentClassName
        )}
      >
        {eyebrow ? (
          <p className="text-sm font-medium tracking-wide text-[#a95153]">
            {eyebrow}
          </p>
        ) : null}

        <h1
          className={cn(
            "text-balance text-3xl font-semibold sm:text-4xl lg:text-5xl",
            eyebrow ? "mt-3" : null
          )}
        >
          {title}
        </h1>

        {children}

        {description ? (
          <p
            className={cn(
              "text-muted-foreground text-pretty md:text-lg",
              children ? "mt-8 md:mt-10" : "mt-3 md:mt-4",
              align === "center" && "mx-auto max-w-2xl"
            )}
          >
            {description}
          </p>
        ) : null}
      </div>
    </section>
  )
}
