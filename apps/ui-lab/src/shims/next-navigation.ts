/** Minimal shim so accidental next/navigation imports don't break the lab. */
export function useRouter() {
  return {
    push: (href: string) => {
      window.location.href = href
    },
    replace: (href: string) => {
      window.location.replace(href)
    },
    back: () => window.history.back(),
    prefetch: async () => {},
  }
}

export function usePathname() {
  return window.location.pathname
}

export function useSearchParams() {
  return new URLSearchParams(window.location.search)
}

export function redirect(href: string): never {
  window.location.href = href
  throw new Error(`redirect:${href}`)
}
