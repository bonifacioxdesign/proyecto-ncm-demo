import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { CompanyLogo } from "@/components/company-logo"
import { SectionReveal } from "@/components/section-reveal"
import { azoro, cachada } from "@/content/site"

const companies = [azoro, cachada]

export default function CompanyCards() {
  return (
    <section className="py-12 md:py-24">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-primary text-sm font-medium tracking-wide uppercase">
              Asociación Cultural Azoro
            </p>
            <h2 className="mt-3 text-2xl font-medium sm:text-3xl lg:text-4xl">
              Compañías
            </h2>
          </div>
        </SectionReveal>

        <div className="mt-10 grid auto-rows-fr gap-8 sm:grid-cols-2 sm:gap-8 md:mt-14 md:gap-10">
          {companies.map((company, index) => (
            <SectionReveal
              key={company.href}
              delay={index * 0.06}
              className="h-full"
            >
              <Link
                href={company.href}
                className="group flex h-full flex-col items-center text-center transition-transform duration-300 hover:-translate-y-0.5"
              >
                <div className="flex h-28 w-full items-center justify-center sm:h-32 md:h-36">
                  <CompanyLogo
                    name={company.name}
                    logo={company.logo}
                    className={
                      company.logoFit === "wide"
                        ? "h-14 w-auto max-w-[260px] drop-shadow-[0_8px_24px_rgba(42,36,34,0.18)] transition duration-300 group-hover:drop-shadow-[0_10px_28px_rgba(169,81,83,0.35)] sm:h-16 md:h-[4.5rem] md:max-w-[300px]"
                        : "h-24 w-auto max-w-[180px] drop-shadow-[0_8px_24px_rgba(42,36,34,0.18)] transition duration-300 group-hover:drop-shadow-[0_10px_28px_rgba(169,81,83,0.35)] sm:h-28 md:h-32 md:max-w-[200px]"
                    }
                  />
                </div>

                <div className="mt-6 flex min-h-9 w-full items-center justify-center gap-2">
                  <h3 className="text-xl font-medium transition-colors group-hover:text-[#a95153]">
                    {company.name}
                  </h3>
                  <span className="bg-secondary text-foreground/70 group-hover:bg-primary group-hover:text-primary-foreground inline-flex size-8 shrink-0 items-center justify-center rounded-full transition-colors">
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>

                <p className="text-muted-foreground mt-3 max-w-md flex-1 text-sm leading-relaxed text-pretty">
                  {company.teaser}
                </p>

                <span className="mt-7 inline-flex h-10 items-center justify-center gap-1.5 rounded-xl border border-[#a95153] bg-transparent px-5 text-sm font-medium text-[#a95153] transition-colors duration-300 group-hover:bg-[#a95153] group-hover:text-[#fff8ef]">
                  Ver compañía
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
