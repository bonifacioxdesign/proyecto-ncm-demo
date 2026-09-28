import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { siteConfig } from "@/content/site"

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: `Política de privacidad de ${siteConfig.name} y ${siteConfig.org}.`,
}

export default function PrivacyPolicyPage() {
  return (
    <main className="pt-24">
      <PageHero align="start" title="Política de Privacidad" />

      <article className="prose mx-auto w-full max-w-3xl px-4 pb-12 sm:px-6 md:pb-16 lg:px-8">
        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-medium">¿Quiénes somos?</h2>
          <p className="text-muted-foreground leading-relaxed">
            {siteConfig.name} (NCM) es gestionada por {siteConfig.org} (ACA) con sede
            en San Salvador, El Salvador.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-medium">Media</h2>
          <p className="text-muted-foreground leading-relaxed">
            Las imágenes utilizadas en este website son bajo la autorización de los
            fotógrafos/as. Los gráficos son propiedad de ACA. Las personas que
            aparecen en las fotografías formaron parte de proyectos de NCM y ACA. Los
            videos son creados por ACA y NCM.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-medium">Acerca de tus datos</h2>
          <p className="text-muted-foreground leading-relaxed">
            ACA y NCM no comparten tus datos como nombre, teléfono y correo
            electrónico con ninguna persona o tercero. Los usos principales son
            invitaciones, promociones y respuesta a formularios de contacto.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            La periodicidad del uso y el tiempo que mantenemos tus datos es indefinido,
            mientras sean necesarios para los fines descritos o hasta que solicites su
            eliminación escribiendo a{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-primary">
              {siteConfig.email}
            </a>
            .
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-medium">Compras y ventas</h2>
          <p className="text-muted-foreground leading-relaxed">
            Este sitio no opera tienda en línea. Cualquier compra de entradas,
            membresías o productos que se realice en otros canales de NCM/ACA se rige
            por las condiciones comunicadas en ese canal. ACA y NCM no hacen
            devoluciones de entradas pasadas de la fecha o no reclamadas. La
            cancelación de suscripciones debe solicitarse directamente, con un plazo
            de 24 horas a 5 días hábiles.
          </p>
        </section>
      </article>
    </main>
  )
}
