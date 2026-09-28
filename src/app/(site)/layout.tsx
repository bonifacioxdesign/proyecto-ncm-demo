import { SiteHeader } from "@/components/site-header"
import FooterSection from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <SiteHeader />
      <div className="flex-1 pb-16 md:pb-0">{children}</div>
      <FooterSection />
      <ScrollToTop />
    </div>
  )
}
