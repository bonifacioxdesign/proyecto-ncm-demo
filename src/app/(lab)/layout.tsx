import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: "UI Lab",
    template: "%s · NCM",
  },
  robots: { index: false, follow: false },
}

export default function LabLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-background text-foreground">
      {children}
    </div>
  )
}
