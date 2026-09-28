import type { Metadata } from "next"
import CompanyPage from "@/components/company-page"
import { azoro, cachada } from "@/content/site"

export const metadata: Metadata = {
  title: "La Cachada Teatro",
  description: cachada.teaser,
}

export default function LaCachadaTeatroPage() {
  return <CompanyPage company={cachada} other={azoro} />
}
