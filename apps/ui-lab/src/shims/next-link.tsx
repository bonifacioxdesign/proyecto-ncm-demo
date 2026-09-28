import type { AnchorHTMLAttributes, ReactNode } from "react"

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
  children?: ReactNode
  replace?: boolean
  scroll?: boolean
  prefetch?: boolean
}

/** Shim: next/link → <a> for Vite lab */
export default function Link({
  href,
  children,
  replace: _replace,
  scroll: _scroll,
  prefetch: _prefetch,
  ...props
}: LinkProps) {
  return (
    <a href={href} {...props}>
      {children}
    </a>
  )
}
