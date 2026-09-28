"use client"

import Link from "next/link"
import { Menu, ShoppingCart, X } from "lucide-react"
import { motion } from "motion/react"
import React from "react"
import { Logo } from "@/components/logo"
import { cn } from "@/lib/utils"
import { navItems, siteConfig } from "@/content/site"

function isExternalHref(href: string) {
  return /^https?:\/\//i.test(href)
}

function NavAnchor({
  href,
  className,
  children,
  onClick,
  onMouseEnter,
}: {
  href: string
  className?: string
  children: React.ReactNode
  onClick?: () => void
  onMouseEnter?: () => void
}) {
  if (isExternalHref(href)) {
    return (
      <a
        href={href}
        className={className}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        rel="noopener noreferrer"
      >
        {children}
      </a>
    )
  }

  return (
    <Link
      href={href}
      className={className}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
    >
      {children}
    </Link>
  )
}

/** Tienda Crowdfunding look: primary rose, compact. */
function CrowdfundingButton({ className }: { className?: string }) {
  return (
    <a
      href={siteConfig.crowdfundingUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex h-8 items-center justify-center rounded-md bg-[#a95153] px-2.5 text-sm font-medium whitespace-nowrap text-white transition-colors hover:bg-[#8f4244]",
        className
      )}
    >
      Crowdfunding
    </a>
  )
}

function CartLink({ className }: { className?: string }) {
  return (
    <a
      href={siteConfig.shopUrl}
      aria-label="Abrir carrito"
      rel="noopener noreferrer"
      className={cn(
        "relative inline-flex h-8 w-8 items-center justify-center text-foreground/80 transition-colors hover:text-[#a95153]",
        className
      )}
    >
      <ShoppingCart className="h-5 w-5" />
    </a>
  )
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const [hoveredHref, setHoveredHref] = React.useState<string | null>(null)

  React.useEffect(() => {
    if (!menuOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false)
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [menuOpen])

  return (
    <header>
      <nav className="fixed inset-x-0 top-0 z-40 w-full px-2 pt-2">
        <div className="bg-background/70 mx-auto w-full max-w-5xl rounded-2xl border border-white/40 px-6 shadow-lg shadow-black/5 backdrop-blur-xl lg:px-8">
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-3.5">
            <div className="flex w-full items-center justify-between lg:w-auto">
              <Link
                href="/"
                aria-label="Inicio"
                className="flex items-center space-x-2"
                onClick={() => setMenuOpen(false)}
              >
                <Logo />
              </Link>

              <div className="flex items-center gap-1 lg:hidden">
                <CartLink className="h-10 w-10" />
                <button
                  type="button"
                  onClick={() => setMenuOpen((open) => !open)}
                  aria-expanded={menuOpen}
                  aria-controls="mobile-nav"
                  aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                  className="relative z-20 -m-2.5 -mr-1 block cursor-pointer p-2.5"
                >
                  <Menu
                    className={cn(
                      "m-auto size-6 duration-200",
                      menuOpen && "scale-0 rotate-180 opacity-0"
                    )}
                  />
                  <X
                    className={cn(
                      "absolute inset-0 m-auto size-6 scale-0 -rotate-180 opacity-0 duration-200",
                      menuOpen && "scale-100 rotate-0 opacity-100"
                    )}
                  />
                </button>
              </div>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul
                className="relative flex items-center gap-1 text-sm"
                onMouseLeave={() => setHoveredHref(null)}
              >
                {navItems.map((item) => {
                  const isHovered = hoveredHref === item.href
                  return (
                    <li key={item.href} className="relative">
                      <NavAnchor
                        href={item.href}
                        onMouseEnter={() => setHoveredHref(item.href)}
                        className={cn(
                          "relative z-10 block px-3.5 py-1.5 transition-colors duration-200",
                          isHovered
                            ? "font-bold text-[#a95153]"
                            : "text-foreground/75 font-normal"
                        )}
                      >
                        {isHovered ? (
                          <motion.span
                            layoutId="nav-pill"
                            className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-[#a95153]/12 shadow-[inset_0_0_0_1px_rgba(169,81,83,0.18)]"
                            transition={{
                              type: "spring",
                              stiffness: 420,
                              damping: 32,
                              mass: 0.6,
                            }}
                          />
                        ) : null}
                        {item.name}
                      </NavAnchor>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className="hidden items-center gap-3 lg:flex">
              <CartLink />
              <CrowdfundingButton />
            </div>

            <div
              id="mobile-nav"
              className={cn(
                "border-border bg-background/95 mb-6 w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 backdrop-blur-xl lg:hidden",
                menuOpen ? "flex" : "hidden"
              )}
            >
              <ul className="w-full space-y-2 text-base">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <NavAnchor
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="text-foreground/75 hover:bg-[#a95153]/12 hover:text-[#a95153] block rounded-full px-4 py-2 font-normal duration-150 hover:font-bold"
                    >
                      {item.name}
                    </NavAnchor>
                  </li>
                ))}
              </ul>
              <CrowdfundingButton className="h-11 w-full px-4 text-base" />
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
