import type { Metadata } from "next"
import { Chivo, Inter, Krona_One } from "next/font/google"
import { siteConfig } from "@/content/site"
import "./globals.css"

const chivo = Chivo({
  variable: "--font-chivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
})

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

const krona = Krona_One({
  variable: "--font-krona",
  weight: "400",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} - San Salvador | ${siteConfig.org}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/images/favicon-32.png",
    apple: "/images/favicon-192.png",
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "es_SV",
    type: "website",
    images: [{ url: "/images/hero-fachada.jpg" }],
  },
  other: {
    "ncm-deploy": "2026-07-15-1705-tripulantes",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${chivo.variable} ${inter.variable} ${krona.variable} h-full`}
    >
      <body className="flex min-h-full flex-col pb-[env(safe-area-inset-bottom)]">
        {children}
      </body>
    </html>
  )
}
