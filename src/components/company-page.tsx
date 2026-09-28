import Link from "next/link"
import TeamSection from "@/components/team"
import { Button } from "@/components/ui/button"
import { CompanyLogo } from "@/components/company-logo"
import { ProductionsShelf } from "@/components/productions-shelf"
import { azoro, cachada } from "@/content/site"

type Company = typeof azoro | typeof cachada

export default function CompanyPage({
  company,
  other,
}: {
  company: Company
  other: Company
}) {
  return (
    <main className="pt-24">
      <section className="mx-auto w-full max-w-5xl px-4 pt-8 pb-12 text-center sm:px-6 lg:px-8 md:pt-10">
        <div
          className={
            company.logoFit === "wide"
              ? "mb-8 flex h-28 items-center justify-center px-4 sm:h-32"
              : "mb-8 flex h-40 items-center justify-center px-4"
          }
        >
          <CompanyLogo
            name={company.name}
            logo={company.logo}
            className={
              company.logoFit === "wide"
                ? "h-16 w-auto max-w-full drop-shadow-[0_8px_24px_rgba(42,36,34,0.18)] sm:h-20 md:h-24 md:max-w-[480px]"
                : "h-36 max-w-[300px] drop-shadow-[0_8px_24px_rgba(42,36,34,0.18)]"
            }
          />
        </div>
        <h1 className="mx-auto max-w-3xl text-balance text-3xl font-semibold sm:text-4xl lg:text-5xl">
          {company.name}
        </h1>

        <div className="mx-auto mt-12 max-w-3xl space-y-8">
          <h2 className="text-2xl font-medium">Historia</h2>
          {company.history.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="text-muted-foreground mx-auto text-pretty leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <TeamSection members={company.cast} />

      <ProductionsShelf productions={company.productions} />

      <section className="mx-auto w-full max-w-5xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="bg-card rounded-3xl border p-8 text-center">
          <div className="mb-6 flex justify-center">
            <CompanyLogo
              name={other.name}
              logo={other.logo}
              className={
                other.logoFit === "wide"
                  ? "h-12 w-auto max-w-[260px]"
                  : "h-24 max-w-[220px]"
              }
            />
          </div>
          <h2 className="text-xl font-medium">{other.name}</h2>
          <p className="text-muted-foreground mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-pretty">
            {other.teaser}
          </p>
          <Button
            className="mt-6"
            variant="outline"
            render={<Link href={other.href} />}
            nativeButton={false}
          >
            Explorar la compañía
          </Button>
        </div>
      </section>
    </main>
  )
}
