import type { Metadata } from "next"
import CompanyPage from "@/components/company-page"
import { azoro, cachada } from "@/content/site"

export const metadata: Metadata = {
  title: "Teatro del Azoro",
  description: azoro.teaser,
}

export default function TeatroDelAzoroPage() {
  return <CompanyPage company={azoro} other={cachada} />
}
