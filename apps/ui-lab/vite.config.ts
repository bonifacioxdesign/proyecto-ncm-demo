import path from "node:path"
import { fileURLToPath } from "node:url"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

const rootDir = path.dirname(fileURLToPath(import.meta.url))
const monorepoRoot = path.resolve(rootDir, "../..")
const ncmSrc = path.resolve(monorepoRoot, "src")

export default defineConfig({
  plugins: [react()],
  publicDir: path.resolve(monorepoRoot, "public"),
  resolve: {
    alias: {
      "@": ncmSrc,
      "next/link": path.resolve(rootDir, "src/shims/next-link.tsx"),
      "next/image": path.resolve(rootDir, "src/shims/next-image.tsx"),
      "next/navigation": path.resolve(rootDir, "src/shims/next-navigation.ts"),
    },
  },
  server: {
    port: 5280,
    strictPort: true,
    open: true,
    fs: {
      allow: [rootDir, monorepoRoot],
    },
  },
})
